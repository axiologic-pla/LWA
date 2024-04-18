import XMLDisplayService from "../services/XMLDisplayService/XMLDisplayService.js";
import constants from "../../../constants.js";

let showExpired = function () {
    document.querySelector(".loader-container").setAttribute('style', 'display:none');
    document.querySelector("#expired-modal").classList.remove("hiddenElement");
    focusModalHeader();
}

function handleLeafletAccordion() {
    let accordionItems = document.querySelectorAll("div.leaflet-accordion-item");
    accordionItems.forEach((accItem) => {
        accItem.addEventListener("click", () => {
            accItem.classList.toggle("active");
            if (accItem.classList.contains("active")) {
                accItem.setAttribute('aria-expanded', "true");
            } else {
                accItem.setAttribute('aria-expanded', "false");
            }
            accItem.querySelector(".leaflet-accordion-item-content").addEventListener("click", (event) => {
                event.stopImmediatePropagation();
                event.stopPropagation();
            })
        })
        accItem.addEventListener("keydown", (event) => {
            if (event.key === "Enter" || event.key === " ") {
                accItem.classList.toggle("active");
                if (accItem.classList.contains("active")) {
                    accItem.setAttribute('aria-expanded', "true");
                } else {
                    accItem.setAttribute('aria-expanded', "false");
                }
            }
            accItem.querySelector(".leaflet-accordion-item-content").addEventListener("keydown", (event) => {
                event.stopImmediatePropagation();
                event.stopPropagation();
            })
        })
    })
}

let focusModalHeader = function () {
    document.querySelectorAll(".modal-header").forEach(element => {
        if (element.offsetParent) {
            document.querySelector(".modal-header").focus();
        }
    })

}

let generateMissingFilesList = function (missingImgFiles) {
    let missingFilesErrText = ``;
    missingImgFiles.forEach(item => {
        missingFilesErrText = missingFilesErrText + `<li>Image ${item} does not exist</li>`
    })
    return missingFilesErrText;
}

let generateDifferentCaseToastList = function (differentCaseImgFiles) {
    let differentCaseErrText = ``;
    differentCaseImgFiles.forEach(item => {
        differentCaseErrText = differentCaseErrText + `<li>Image ${item.xmlName} does not exist, but a similar file ${item.fileName}  exists and will be used instead</li>`
    })
    return differentCaseErrText;
}

let validateLeafletFiles = function (htmlContent, leafletImages, uploadedImages) {
    if (!htmlContent) {
        let err = new Error("<li>Unsupported format for XML file.</li>");
        err.errorCode = constants.errorCodes.xml_parse_error;
        throw err;
    }

    let htmlImageNames = Array.from(leafletImages).map(img => img.getAttribute("src"));
    //removing from validation image src that are data URLs ("data:....")
    htmlImageNames = htmlImageNames.filter((imageSrc) => {
        let dataUrlRegex = new RegExp(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i);
        return !(!!imageSrc.match(dataUrlRegex) || imageSrc.startsWith("data:"));

    });
    let uploadedImageNames = Object.keys(uploadedImages);
    let differentCaseImgFiles = [];
    let missingImgFiles = []
    htmlImageNames.forEach(imgName => {
        let similarItemIndex = uploadedImageNames.findIndex((item) => item.toLowerCase() === imgName.toLowerCase());
        if (similarItemIndex < 0) {
            missingImgFiles.push(imgName);
        } else if (uploadedImageNames[similarItemIndex] !== imgName) {
            differentCaseImgFiles.push({xmlName: imgName, fileName: uploadedImageNames[similarItemIndex]});
        }
    })

    if (missingImgFiles.length > 0) {
        let errMsg = generateMissingFilesList(missingImgFiles)
        let err = new Error(errMsg);
        err.errorCode = constants.errorCodes.xml_parse_error;
        throw err;
    }
    if (differentCaseImgFiles.length > 0) {
        let errMsg = generateDifferentCaseToastList(differentCaseImgFiles)
        let err = new Error(errMsg);
        err.errorCode = constants.errorCodes.xml_parse_error;
        throw err;
    }

}

let renderLeaflet = function (leafletData) {
    document.querySelector(".product-name").innerText = leafletData.productData.inventedName || leafletData.productData.name;
    document.querySelector(".product-description").innerText = leafletData.productData.nameMedicinalProduct || leafletData.productData.description;
    /* document.querySelector(".leaflet-title-icon").classList.remove("hiddenElement");*/
    let xmlService = new XMLDisplayService("#leaflet-content");
    let resultDocument = xmlService.getHTMLFromXML(leafletData.xmlContent);
    let leafletImages = resultDocument.querySelectorAll("img");
    for (let image of leafletImages) {
        let imageSrc = image.getAttribute("src");
        let dataUrlRegex = new RegExp(/^\s*data:([a-z]+\/[a-z]+(;[a-z-]+=[a-z-]+)?)?(;base64)?,[a-z0-9!$&',()*+;=\-._~:@/?%\s]*\s*$/i);
        if (!!imageSrc.match(dataUrlRegex) || imageSrc.startsWith("data:")) {
            //we don't alter already embedded images
            continue;
        }
        if (leafletData.leafletImages[imageSrc]) {
            image.setAttribute("src", leafletData.leafletImages[imageSrc]);
        }
    }
    let sectionsElements = resultDocument.querySelectorAll(".leaflet-accordion-item");
    let htmlContent = "";
    sectionsElements.forEach(section => {
        htmlContent = htmlContent + section.outerHTML;
    })

    validateLeafletFiles(htmlContent, leafletImages, leafletData.leafletImages);

    document.querySelector("#leaflet-content").innerHTML = htmlContent;
    let leafletLinks = document.querySelectorAll(".leaflet-link");
    xmlService.activateLeafletInnerLinks(leafletLinks);
    handleLeafletAccordion();
    document.querySelector(".loader-container").setAttribute('style', 'display:none');
    focusModalHeader();
}

export {
    showExpired,
    focusModalHeader,
    renderLeaflet
}
