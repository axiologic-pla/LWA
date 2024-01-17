import environment from "../environment.js";

const fallbackPage = "main.html"
const appPagesMap = {
  "index": "main.html",
  "main": "main.html",
  "scan": "scan.html",
  "leaflet": "leaflet.html",
  "error": "error.html"
};

window.onload = () => {
  let urlParts = location.href.split(location.origin)[1].split("/").filter(function (item) {
    return item !== "";
  })
  if (!urlParts.includes(`${environment.appBuildVersion}`)) {
    let pageWithQuerry = urlParts[urlParts.length - 1];

    Object.keys(appPagesMap).forEach(key => {
      if (pageWithQuerry.startsWith(key)) {
        let regexPattern = new RegExp(key + '.*?\\.html');
        pageWithQuerry.replace(regexPattern, appPagesMap[key]);
      }
    })
    if (!Object.values(appPagesMap).find(val => pageWithQuerry.startsWith(val))) {
      pageWithQuerry = fallbackPage;
    }
    let newUrl = environment.enableRootVersion ? `${window.location.origin}/${environment.appBuildVersion}/${pageWithQuerry}` : `${window.location.origin}/lwa/app/${pageWithQuerry}`;
    validateAndRedirect(newUrl);
    return;
  }
  goTo404ErrPage();
}

function goTo404ErrPage() {
  let err404Page = `/app/404.html`;
  if (environment.enableRootVersion) {
    err404Page = `/${environment.appBuildVersion}/404.html`;
  }
  window.location.href = window.location.origin + err404Page;
}

function validateAndRedirect(url) {
  let validPagesRegex = Object.values(appPagesMap).join("|");
  const regexPattern = new RegExp(`^${window.location.origin}/${environment.appBuildVersion}/(${validPagesRegex})$`);
  if (regexPattern.test(url)) {
    window.location.href = url;
  } else {
    goTo404ErrPage()
  }
}
