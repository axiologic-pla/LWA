let aiTable = [{
    "title": "Serial Shipping Container Code (SSCC) ",
    "label": "SSCC",
    "shortcode": "sscc",
    "ai": "00",
    "format": "N18",
    "type": "I",
    "fixedLength": true,
    "checkDigit": "L",
    "regex": "(\\d{18})"
}, {
    "title": "Global Trade Item Number (GTIN)",
    "label": "GTIN",
    "shortcode": "gtin",
    "ai": "01",
    "format": "N14",
    "type": "I",
    "fixedLength": true,
    "checkDigit": "L",
    "qualifiers": ["22", "10", "21"],
    "regex": "(\\d{12,14}|\\d{8})"
}, {
    "title": "GTIN of contained trade items",
    "label": "CONTENT",
    "ai": "02",
    "format": "N14",
    "type": "D",
    "fixedLength": true,
    "checkDigit": "L",
    "regex": "(\\d{14})"
}, {
    "title": "Batch or lot number",
    "label": "BATCH/LOT",
    "shortcode": "lot",
    "ai": "10",
    "format": "X..20",
    "type": "Q",
    "fixedLength": false,
    "regex": "([\\x21-\\x7E]{0,20})"
}, {
    "title": "Production date (YYMMDD)",
    "label": "PROD DATE",
    "ai": "11",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Due date (YYMMDD)",
    "label": "DUE DATE",
    "ai": "12",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Packaging date (YYMMDD)",
    "label": "PACK DATE",
    "ai": "13",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Best before date (YYMMDD)",
    "label": "BEST BEFORE or BEST BY",
    "ai": "15",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Sell by date (YYMMDD)",
    "label": "SELL BY",
    "ai": "16",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Expiration date (YYMMDD)",
    "label": "USE BY OR EXPIRY",
    "shortcode": "exp",
    "ai": "17",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Internal product variant",
    "label": "VARIANT",
    "ai": "20",
    "format": "N2",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{2})"
}, {
    "title": "Serial number",
    "label": "SERIAL",
    "shortcode": "ser",
    "ai": "21",
    "format": "X..20",
    "type": "Q",
    "fixedLength": false,
    "regex": "([\\x21-\\x7E]{0,20})"
}, {
    "title": "Consumer product variant",
    "label": "CPV",
    "shortcode": "cpv",
    "ai": "22",
    "format": "X..20",
    "type": "Q",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"
}, {
    "title": "Additional product identification assigned by the manufacturer",
    "label": "ADDITIONAL ID",
    "ai": "240",
    "format": "X..30",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"
}, {
    "title": "Customer part number",
    "label": "CUST. PART NO.",
    "ai": "241",
    "format": "X..30",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"
}, {
    "title": "Made-to-Order variation number",
    "label": "MTO VARIANT",
    "ai": "242",
    "format": "N..6",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,6})"
}, {
    "title": "Packaging component number",
    "label": "PCN",
    "ai": "243",
    "format": "X..20",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"
}, {
    "title": "Secondary serial number",
    "label": "SECONDARY SERIAL",
    "ai": "250",
    "format": "X..30",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x7E]{0,30})"
}, {
    "title": "Reference to source entity",
    "label": "REF. TO SOURCE ",
    "ai": "251",
    "format": "X..30",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"
}, {
    "title": "Global Document Type Identifier (GDTI)",
    "label": "GDTI",
    "shortcode": "gdti",
    "ai": "253",
    "format": "N13+X..17",
    "type": "I",
    "fixedLength": false,
    "checkDigit": "13",
    "regex": "(\\d{13})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,17})"
}, {
    "title": "GLN extension component",
    "label": "GLN EXTENSION COMPONENT",
    "shortcode": "glnx",
    "ai": "254",
    "format": "X..20",
    "type": "Q",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"
}, {
    "title": "Global Coupon Number (GCN)",
    "label": "GCN",
    "shortcode": "gcn",
    "ai": "255",
    "format": "N13+N..12",
    "type": "I",
    "fixedLength": false,
    "checkDigit": "13",
    "regex": "(\\d{13})(\\d{0,12})"
}, {
    "title": "Variable count of items (variable measure trade item)",
    "label": "VAR. COUNT",
    "ai": "30",
    "format": "N..8",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,8})"
}, {
    "title": "Net weight, kilograms (variable measure trade item)",
    "label": "NET WEIGHT (kg)",
    "ai": "3100",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight, kilograms (variable measure trade item)",
    "label": "NET WEIGHT (kg)",
    "ai": "3101",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight, kilograms (variable measure trade item)",
    "label": "NET WEIGHT (kg)",
    "ai": "3102",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight, kilograms (variable measure trade item)",
    "label": "NET WEIGHT (kg)",
    "ai": "3103",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight, kilograms (variable measure trade item)",
    "label": "NET WEIGHT (kg)",
    "ai": "3104",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight, kilograms (variable measure trade item)",
    "label": "NET WEIGHT (kg)",
    "ai": "3105",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, metres (variable measure trade item)",
    "label": "LENGTH (m)",
    "ai": "3110",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, metres (variable measure trade item)",
    "label": "LENGTH (m)",
    "ai": "3111",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, metres (variable measure trade item)",
    "label": "LENGTH (m)",
    "ai": "3112",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, metres (variable measure trade item)",
    "label": "LENGTH (m)",
    "ai": "3113",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, metres (variable measure trade item)",
    "label": "LENGTH (m)",
    "ai": "3114",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, metres (variable measure trade item)",
    "label": "LENGTH (m)",
    "ai": "3115",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, metres (variable measure trade item)",
    "label": "WIDTH (m)",
    "ai": "3120",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, metres (variable measure trade item)",
    "label": "WIDTH (m)",
    "ai": "3121",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, metres (variable measure trade item)",
    "label": "WIDTH (m)",
    "ai": "3122",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, metres (variable measure trade item)",
    "label": "WIDTH (m)",
    "ai": "3123",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, metres (variable measure trade item)",
    "label": "WIDTH (m)",
    "ai": "3124",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, metres (variable measure trade item)",
    "label": "WIDTH (m)",
    "ai": "3125",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, metres (variable measure trade item)",
    "label": "HEIGHT (m)",
    "ai": "3130",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, metres (variable measure trade item)",
    "label": "HEIGHT (m)",
    "ai": "3131",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, metres (variable measure trade item)",
    "label": "HEIGHT (m)",
    "ai": "3132",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, metres (variable measure trade item)",
    "label": "HEIGHT (m)",
    "ai": "3133",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, metres (variable measure trade item)",
    "label": "HEIGHT (m)",
    "ai": "3134",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, metres (variable measure trade item)",
    "label": "HEIGHT (m)",
    "ai": "3135",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square metres (variable measure trade item)",
    "label": "AREA (m^2)",
    "ai": "3140",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square metres (variable measure trade item)",
    "label": "AREA (m^2)",
    "ai": "3141",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square metres (variable measure trade item)",
    "label": "AREA (m^2)",
    "ai": "3142",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square metres (variable measure trade item)",
    "label": "AREA (m^2)",
    "ai": "3143",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square metres (variable measure trade item)",
    "label": "AREA (m^2)",
    "ai": "3144",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square metres (variable measure trade item)",
    "label": "AREA (m^2)",
    "ai": "3145",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, litres (variable measure trade item)",
    "label": "NET VOLUME (l)",
    "ai": "3150",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, litres (variable measure trade item)",
    "label": "NET VOLUME (l)",
    "ai": "3151",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, litres (variable measure trade item)",
    "label": "NET VOLUME (l)",
    "ai": "3152",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, litres (variable measure trade item)",
    "label": "NET VOLUME (l)",
    "ai": "3153",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, litres (variable measure trade item)",
    "label": "NET VOLUME (l)",
    "ai": "3154",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, litres (variable measure trade item)",
    "label": "NET VOLUME (l)",
    "ai": "3155",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic metres (variable measure trade item)",
    "label": "NET VOLUME (m^3)",
    "ai": "3160",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic metres (variable measure trade item)",
    "label": "NET VOLUME (m^3)",
    "ai": "3161",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic metres (variable measure trade item)",
    "label": "NET VOLUME (m^3)",
    "ai": "3162",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic metres (variable measure trade item)",
    "label": "NET VOLUME (m^3)",
    "ai": "3163",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic metres (variable measure trade item)",
    "label": "NET VOLUME (m^3)",
    "ai": "3164",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic metres (variable measure trade item)",
    "label": "NET VOLUME (m^3)",
    "ai": "3165",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight, pounds (variable measure trade item)",
    "label": "NET WEIGHT (lb)",
    "ai": "3200",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight, pounds (variable measure trade item)",
    "label": "NET WEIGHT (lb)",
    "ai": "3201",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight, pounds (variable measure trade item)",
    "label": "NET WEIGHT (lb)",
    "ai": "3202",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight, pounds (variable measure trade item)",
    "label": "NET WEIGHT (lb)",
    "ai": "3203",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight, pounds (variable measure trade item)",
    "label": "NET WEIGHT (lb)",
    "ai": "3204",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight, pounds (variable measure trade item)",
    "label": "NET WEIGHT (lb)",
    "ai": "3205",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, inches (variable measure trade item)",
    "label": "LENGTH (in)",
    "ai": "3210",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, inches (variable measure trade item)",
    "label": "LENGTH (in)",
    "ai": "3211",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, inches (variable measure trade item)",
    "label": "LENGTH (in)",
    "ai": "3212",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, inches (variable measure trade item)",
    "label": "LENGTH (in)",
    "ai": "3213",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, inches (variable measure trade item)",
    "label": "LENGTH (in)",
    "ai": "3214",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, inches (variable measure trade item)",
    "label": "LENGTH (in)",
    "ai": "3215",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, feet (variable measure trade item)",
    "label": "LENGTH (ft)",
    "ai": "3220",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, feet (variable measure trade item)",
    "label": "LENGTH (ft)",
    "ai": "3221",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, feet (variable measure trade item)",
    "label": "LENGTH (ft)",
    "ai": "3222",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, feet (variable measure trade item)",
    "label": "LENGTH (ft)",
    "ai": "3223",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, feet (variable measure trade item)",
    "label": "LENGTH (ft)",
    "ai": "3224",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, feet (variable measure trade item)",
    "label": "LENGTH (ft)",
    "ai": "3225",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, yards (variable measure trade item)",
    "label": "LENGTH (yd)",
    "ai": "3230",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, yards (variable measure trade item)",
    "label": "LENGTH (yd)",
    "ai": "3231",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, yards (variable measure trade item)",
    "label": "LENGTH (yd)",
    "ai": "3232",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, yards (variable measure trade item)",
    "label": "LENGTH (yd)",
    "ai": "3233",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, yards (variable measure trade item)",
    "label": "LENGTH (yd)",
    "ai": "3234",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, yards (variable measure trade item)",
    "label": "LENGTH (yd)",
    "ai": "3235",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, inches (variable measure trade item)",
    "label": "WIDTH (in)",
    "ai": "3240",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, inches (variable measure trade item)",
    "label": "WIDTH (in)",
    "ai": "3241",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, inches (variable measure trade item)",
    "label": "WIDTH (in)",
    "ai": "3242",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, inches (variable measure trade item)",
    "label": "WIDTH (in)",
    "ai": "3243",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, inches (variable measure trade item)",
    "label": "WIDTH (in)",
    "ai": "3244",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, inches (variable measure trade item)",
    "label": "WIDTH (in)",
    "ai": "3245",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, feet (variable measure trade item)",
    "label": "WIDTH (ft)",
    "ai": "3250",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, feet (variable measure trade item)",
    "label": "WIDTH (ft)",
    "ai": "3251",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, feet (variable measure trade item)",
    "label": "WIDTH (ft)",
    "ai": "3252",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, feet (variable measure trade item)",
    "label": "WIDTH (ft)",
    "ai": "3253",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, feet (variable measure trade item)",
    "label": "WIDTH (ft)",
    "ai": "3254",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, feet (variable measure trade item)",
    "label": "WIDTH (ft)",
    "ai": "3255",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, yards (variable measure trade item)",
    "label": "WIDTH (yd)",
    "ai": "3260",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, yards (variable measure trade item)",
    "label": "WIDTH (yd)",
    "ai": "3261",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, yards (variable measure trade item)",
    "label": "WIDTH (yd)",
    "ai": "3262",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, yards (variable measure trade item)",
    "label": "WIDTH (yd)",
    "ai": "3263",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, yards (variable measure trade item)",
    "label": "WIDTH (yd)",
    "ai": "3264",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, yards (variable measure trade item)",
    "label": "WIDTH (yd)",
    "ai": "3265",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, inches (variable measure trade item)",
    "label": "HEIGHT (in)",
    "ai": "3270",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, inches (variable measure trade item)",
    "label": "HEIGHT (in)",
    "ai": "3271",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, inches (variable measure trade item)",
    "label": "HEIGHT (in)",
    "ai": "3272",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, inches (variable measure trade item)",
    "label": "HEIGHT (in)",
    "ai": "3273",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, inches (variable measure trade item)",
    "label": "HEIGHT (in)",
    "ai": "3274",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, inches (variable measure trade item)",
    "label": "HEIGHT (in)",
    "ai": "3275",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, feet (variable measure trade item)",
    "label": "HEIGHT (ft)",
    "ai": "3280",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, feet (variable measure trade item)",
    "label": "HEIGHT (ft)",
    "ai": "3281",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, feet (variable measure trade item)",
    "label": "HEIGHT (ft)",
    "ai": "3282",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, feet (variable measure trade item)",
    "label": "HEIGHT (ft)",
    "ai": "3283",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, feet (variable measure trade item)",
    "label": "HEIGHT (ft)",
    "ai": "3284",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, feet (variable measure trade item)",
    "label": "HEIGHT (ft)",
    "ai": "3285",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, yards (variable measure trade item)",
    "label": "HEIGHT (yd)",
    "ai": "3290",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, yards (variable measure trade item)",
    "label": "HEIGHT (yd)",
    "ai": "3291",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, yards (variable measure trade item)",
    "label": "HEIGHT (yd)",
    "ai": "3292",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, yards (variable measure trade item)",
    "label": "HEIGHT (yd)",
    "ai": "3293",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, yards (variable measure trade item)",
    "label": "HEIGHT (yd)",
    "ai": "3294",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, yards (variable measure trade item)",
    "label": "HEIGHT (yd)",
    "ai": "3295",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic weight, kilograms",
    "label": "GROSS WEIGHT (kg)",
    "ai": "3300",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic weight, kilograms",
    "label": "GROSS WEIGHT (kg)",
    "ai": "3301",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic weight, kilograms",
    "label": "GROSS WEIGHT (kg)",
    "ai": "3302",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic weight, kilograms",
    "label": "GROSS WEIGHT (kg)",
    "ai": "3303",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic weight, kilograms",
    "label": "GROSS WEIGHT (kg)",
    "ai": "3304",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic weight, kilograms",
    "label": "GROSS WEIGHT (kg)",
    "ai": "3305",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, metres",
    "label": "LENGTH (m), log",
    "ai": "3310",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, metres",
    "label": "LENGTH (m), log",
    "ai": "3311",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, metres",
    "label": "LENGTH (m), log",
    "ai": "3312",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, metres",
    "label": "LENGTH (m), log",
    "ai": "3313",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, metres",
    "label": "LENGTH (m), log",
    "ai": "3314",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, metres",
    "label": "LENGTH (m), log",
    "ai": "3315",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, metres",
    "label": "WIDTH (m), log",
    "ai": "3320",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, metres",
    "label": "WIDTH (m), log",
    "ai": "3321",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, metres",
    "label": "WIDTH (m), log",
    "ai": "3322",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, metres",
    "label": "WIDTH (m), log",
    "ai": "3323",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, metres",
    "label": "WIDTH (m), log",
    "ai": "3324",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, metres",
    "label": "WIDTH (m), log",
    "ai": "3325",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, metres",
    "label": "HEIGHT (m), log",
    "ai": "3330",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, metres",
    "label": "HEIGHT (m), log",
    "ai": "3331",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, metres",
    "label": "HEIGHT (m), log",
    "ai": "3332",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, metres",
    "label": "HEIGHT (m), log",
    "ai": "3333",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, metres",
    "label": "HEIGHT (m), log",
    "ai": "3334",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, metres",
    "label": "HEIGHT (m), log",
    "ai": "3335",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square metres",
    "label": "AREA (m^2), log",
    "ai": "3340",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square metres",
    "label": "AREA (m^2), log",
    "ai": "3341",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square metres",
    "label": "AREA (m^2), log",
    "ai": "3342",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square metres",
    "label": "AREA (m^2), log",
    "ai": "3343",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square metres",
    "label": "AREA (m^2), log",
    "ai": "3344",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square metres",
    "label": "AREA (m^2), log",
    "ai": "3345",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, litres",
    "label": "VOLUME (l), log",
    "ai": "3350",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, litres",
    "label": "VOLUME (l), log",
    "ai": "3351",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, litres",
    "label": "VOLUME (l), log",
    "ai": "3352",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, litres",
    "label": "VOLUME (l), log",
    "ai": "3353",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, litres",
    "label": "VOLUME (l), log",
    "ai": "3354",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, litres",
    "label": "VOLUME (l), log",
    "ai": "3355",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic metres",
    "label": "VOLUME (m^3), log",
    "ai": "3360",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic metres",
    "label": "VOLUME (m^3), log",
    "ai": "3361",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic metres",
    "label": "VOLUME (m^3), log",
    "ai": "3362",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic metres",
    "label": "VOLUME (m^3), log",
    "ai": "3363",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic metres",
    "label": "VOLUME (m^3), log",
    "ai": "3364",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic metres",
    "label": "VOLUME (m^3), log",
    "ai": "3365",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Kilograms per square metre",
    "label": "KG PER m^2",
    "ai": "3370",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Kilograms per square metre",
    "label": "KG PER m^2",
    "ai": "3371",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Kilograms per square metre",
    "label": "KG PER m^2",
    "ai": "3372",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Kilograms per square metre",
    "label": "KG PER m^2",
    "ai": "3373",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Kilograms per square metre",
    "label": "KG PER m^2",
    "ai": "3374",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Kilograms per square metre",
    "label": "KG PER m^2",
    "ai": "3375",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic weight, pounds",
    "label": "GROSS WEIGHT (lb)",
    "ai": "3400",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic weight, pounds",
    "label": "GROSS WEIGHT (lb)",
    "ai": "3401",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic weight, pounds",
    "label": "GROSS WEIGHT (lb)",
    "ai": "3402",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic weight, pounds",
    "label": "GROSS WEIGHT (lb)",
    "ai": "3403",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic weight, pounds",
    "label": "GROSS WEIGHT (lb)",
    "ai": "3404",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic weight, pounds",
    "label": "GROSS WEIGHT (lb)",
    "ai": "3405",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, inches",
    "label": "LENGTH (in), log",
    "ai": "3410",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, inches",
    "label": "LENGTH (in), log",
    "ai": "3411",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, inches",
    "label": "LENGTH (in), log",
    "ai": "3412",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, inches",
    "label": "LENGTH (in), log",
    "ai": "3413",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, inches",
    "label": "LENGTH (in), log",
    "ai": "3414",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, inches",
    "label": "LENGTH (in), log",
    "ai": "3415",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, feet",
    "label": "LENGTH (ft), log",
    "ai": "3420",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, feet",
    "label": "LENGTH (ft), log",
    "ai": "3421",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, feet",
    "label": "LENGTH (ft), log",
    "ai": "3422",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, feet",
    "label": "LENGTH (ft), log",
    "ai": "3423",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, feet",
    "label": "LENGTH (ft), log",
    "ai": "3424",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, feet",
    "label": "LENGTH (ft), log",
    "ai": "3425",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, yards",
    "label": "LENGTH (yd), log",
    "ai": "3430",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, yards",
    "label": "LENGTH (yd), log",
    "ai": "3431",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, yards",
    "label": "LENGTH (yd), log",
    "ai": "3432",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, yards",
    "label": "LENGTH (yd), log",
    "ai": "3433",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, yards",
    "label": "LENGTH (yd), log",
    "ai": "3434",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Length or first dimension, yards",
    "label": "LENGTH (yd), log",
    "ai": "3435",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, inches",
    "label": "WIDTH (in), log",
    "ai": "3440",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, inches",
    "label": "WIDTH (in), log",
    "ai": "3441",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, inches",
    "label": "WIDTH (in), log",
    "ai": "3442",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, inches",
    "label": "WIDTH (in), log",
    "ai": "3443",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, inches",
    "label": "WIDTH (in), log",
    "ai": "3444",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, inches",
    "label": "WIDTH (in), log",
    "ai": "3445",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, feet",
    "label": "WIDTH (ft), log",
    "ai": "3450",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, feet",
    "label": "WIDTH (ft), log",
    "ai": "3451",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, feet",
    "label": "WIDTH (ft), log",
    "ai": "3452",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, feet",
    "label": "WIDTH (ft), log",
    "ai": "3453",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, feet",
    "label": "WIDTH (ft), log",
    "ai": "3454",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, feet",
    "label": "WIDTH (ft), log",
    "ai": "3455",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, yard",
    "label": "WIDTH (yd), log",
    "ai": "3460",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, yard",
    "label": "WIDTH (yd), log",
    "ai": "3461",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, yard",
    "label": "WIDTH (yd), log",
    "ai": "3462",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, yard",
    "label": "WIDTH (yd), log",
    "ai": "3463",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, yard",
    "label": "WIDTH (yd), log",
    "ai": "3464",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Width, diameter, or second dimension, yard",
    "label": "WIDTH (yd), log",
    "ai": "3465",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, inches",
    "label": "HEIGHT (in), log",
    "ai": "3470",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, inches",
    "label": "HEIGHT (in), log",
    "ai": "3471",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, inches",
    "label": "HEIGHT (in), log",
    "ai": "3472",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, inches",
    "label": "HEIGHT (in), log",
    "ai": "3473",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, inches",
    "label": "HEIGHT (in), log",
    "ai": "3474",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, inches",
    "label": "HEIGHT (in), log",
    "ai": "3475",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, feet",
    "label": "HEIGHT (ft), log",
    "ai": "3480",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, feet",
    "label": "HEIGHT (ft), log",
    "ai": "3481",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, feet",
    "label": "HEIGHT (ft), log",
    "ai": "3482",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, feet",
    "label": "HEIGHT (ft), log",
    "ai": "3483",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, feet",
    "label": "HEIGHT (ft), log",
    "ai": "3484",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, feet",
    "label": "HEIGHT (ft), log",
    "ai": "3485",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, yards",
    "label": "HEIGHT (yd), log",
    "ai": "3490",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, yards",
    "label": "HEIGHT (yd), log",
    "ai": "3491",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, yards",
    "label": "HEIGHT (yd), log",
    "ai": "3492",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, yards",
    "label": "HEIGHT (yd), log",
    "ai": "3493",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, yards",
    "label": "HEIGHT (yd), log",
    "ai": "3494",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Depth, thickness, height, or third dimension, yards",
    "label": "HEIGHT (yd), log",
    "ai": "3495",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square inches (variable measure trade item)",
    "label": "AREA (in^2)",
    "ai": "3500",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square inches (variable measure trade item)",
    "label": "AREA (in^2)",
    "ai": "3501",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square inches (variable measure trade item)",
    "label": "AREA (in^2)",
    "ai": "3502",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square inches (variable measure trade item)",
    "label": "AREA (in^2)",
    "ai": "3503",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square inches (variable measure trade item)",
    "label": "AREA (in^2)",
    "ai": "3504",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square inches (variable measure trade item)",
    "label": "AREA (in^2)",
    "ai": "3505",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square feet (variable measure trade item)",
    "label": "AREA (ft^2)",
    "ai": "3510",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square feet (variable measure trade item)",
    "label": "AREA (ft^2)",
    "ai": "3511",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square feet (variable measure trade item)",
    "label": "AREA (ft^2)",
    "ai": "3512",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square feet (variable measure trade item)",
    "label": "AREA (ft^2)",
    "ai": "3513",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square feet (variable measure trade item)",
    "label": "AREA (ft^2)",
    "ai": "3514",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square feet (variable measure trade item)",
    "label": "AREA (ft^2)",
    "ai": "3515",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square yards (variable measure trade item)",
    "label": "AREA (yd^2)",
    "ai": "3520",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square yards (variable measure trade item)",
    "label": "AREA (yd^2)",
    "ai": "3521",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square yards (variable measure trade item)",
    "label": "AREA (yd^2)",
    "ai": "3522",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square yards (variable measure trade item)",
    "label": "AREA (yd^2)",
    "ai": "3523",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square yards (variable measure trade item)",
    "label": "AREA (yd^2)",
    "ai": "3524",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square yards (variable measure trade item)",
    "label": "AREA (yd^2)",
    "ai": "3525",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square inches",
    "label": "AREA (in^2), log",
    "ai": "3530",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square inches",
    "label": "AREA (in^2), log",
    "ai": "3531",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square inches",
    "label": "AREA (in^2), log",
    "ai": "3532",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square inches",
    "label": "AREA (in^2), log",
    "ai": "3533",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square inches",
    "label": "AREA (in^2), log",
    "ai": "3534",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square inches",
    "label": "AREA (in^2), log",
    "ai": "3535",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square feet",
    "label": "AREA (ft^2), log",
    "ai": "3540",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square feet",
    "label": "AREA (ft^2), log",
    "ai": "3541",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square feet",
    "label": "AREA (ft^2), log",
    "ai": "3542",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square feet",
    "label": "AREA (ft^2), log",
    "ai": "3543",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square feet",
    "label": "AREA (ft^2), log",
    "ai": "3544",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square feet",
    "label": "AREA (ft^2), log",
    "ai": "3545",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square yards",
    "label": "AREA (yd^2), log",
    "ai": "3550",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square yards",
    "label": "AREA (yd^2), log",
    "ai": "3551",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square yards",
    "label": "AREA (yd^2), log",
    "ai": "3552",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square yards",
    "label": "AREA (yd^2), log",
    "ai": "3553",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square yards",
    "label": "AREA (yd^2), log",
    "ai": "3554",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Area, square yards",
    "label": "AREA (yd^2), log",
    "ai": "3555",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight, troy ounces (variable measure trade item)",
    "label": "NET WEIGHT (t oz)",
    "ai": "3560",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight, troy ounces (variable measure trade item)",
    "label": "NET WEIGHT (t oz)",
    "ai": "3561",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight, troy ounces (variable measure trade item)",
    "label": "NET WEIGHT (t oz)",
    "ai": "3562",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight, troy ounces (variable measure trade item)",
    "label": "NET WEIGHT (t oz)",
    "ai": "3563",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight, troy ounces (variable measure trade item)",
    "label": "NET WEIGHT (t oz)",
    "ai": "3564",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight, troy ounces (variable measure trade item)",
    "label": "NET WEIGHT (t oz)",
    "ai": "3565",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight (or volume), ounces (variable measure trade item)",
    "label": "NET VOLUME (oz)",
    "ai": "3570",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight (or volume), ounces (variable measure trade item)",
    "label": "NET VOLUME (oz)",
    "ai": "3571",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight (or volume), ounces (variable measure trade item)",
    "label": "NET VOLUME (oz)",
    "ai": "3572",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight (or volume), ounces (variable measure trade item)",
    "label": "NET VOLUME (oz)",
    "ai": "3573",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight (or volume), ounces (variable measure trade item)",
    "label": "NET VOLUME (oz)",
    "ai": "3574",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net weight (or volume), ounces (variable measure trade item)",
    "label": "NET VOLUME (oz)",
    "ai": "3575",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, quarts (variable measure trade item)",
    "label": "NET VOLUME (qt)",
    "ai": "3600",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, quarts (variable measure trade item)",
    "label": "NET VOLUME (qt)",
    "ai": "3601",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, quarts (variable measure trade item)",
    "label": "NET VOLUME (qt)",
    "ai": "3602",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, quarts (variable measure trade item)",
    "label": "NET VOLUME (qt)",
    "ai": "3603",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, quarts (variable measure trade item)",
    "label": "NET VOLUME (qt)",
    "ai": "3604",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, quarts (variable measure trade item)",
    "label": "NET VOLUME (qt)",
    "ai": "3605",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, gallons U.S. (variable measure trade item)",
    "label": "NET VOLUME (gal.)",
    "ai": "3610",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, gallons U.S. (variable measure trade item)",
    "label": "NET VOLUME (gal.)",
    "ai": "3611",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, gallons U.S. (variable measure trade item)",
    "label": "NET VOLUME (gal.)",
    "ai": "3612",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, gallons U.S. (variable measure trade item)",
    "label": "NET VOLUME (gal.)",
    "ai": "3613",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, gallons U.S. (variable measure trade item)",
    "label": "NET VOLUME (gal.)",
    "ai": "3614",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, gallons U.S. (variable measure trade item)",
    "label": "NET VOLUME (gal.)",
    "ai": "3615",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, quarts",
    "label": "VOLUME (qt), log",
    "ai": "3620",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, quarts",
    "label": "VOLUME (qt), log",
    "ai": "3621",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, quarts",
    "label": "VOLUME (qt), log",
    "ai": "3622",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, quarts",
    "label": "VOLUME (qt), log",
    "ai": "3623",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, quarts",
    "label": "VOLUME (qt), log",
    "ai": "3624",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, quarts",
    "label": "VOLUME (qt), log",
    "ai": "3625",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, gallons U.S.",
    "label": "VOLUME (gal.), log",
    "ai": "3630",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, gallons U.S.",
    "label": "VOLUME (gal.), log",
    "ai": "3631",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, gallons U.S.",
    "label": "VOLUME (gal.), log",
    "ai": "3632",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, gallons U.S.",
    "label": "VOLUME (gal.), log",
    "ai": "3633",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, gallons U.S.",
    "label": "VOLUME (gal.), log",
    "ai": "3634",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, gallons U.S.",
    "label": "VOLUME (gal.), log",
    "ai": "3635",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic inches (variable measure trade item)",
    "label": "VOLUME (in^3) ",
    "ai": "3640",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic inches (variable measure trade item)",
    "label": "VOLUME (in^3) ",
    "ai": "3641",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic inches (variable measure trade item)",
    "label": "VOLUME (in^3) ",
    "ai": "3642",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic inches (variable measure trade item)",
    "label": "VOLUME (in^3) ",
    "ai": "3643",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic inches (variable measure trade item)",
    "label": "VOLUME (in^3) ",
    "ai": "3644",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic inches (variable measure trade item)",
    "label": "VOLUME (in^3) ",
    "ai": "3645",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic feet (variable measure trade item)",
    "label": "VOLUME (ft^3) ",
    "ai": "3650",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic feet (variable measure trade item)",
    "label": "VOLUME (ft^3) ",
    "ai": "3651",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic feet (variable measure trade item)",
    "label": "VOLUME (ft^3) ",
    "ai": "3652",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic feet (variable measure trade item)",
    "label": "VOLUME (ft^3) ",
    "ai": "3653",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic feet (variable measure trade item)",
    "label": "VOLUME (ft^3) ",
    "ai": "3654",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic feet (variable measure trade item)",
    "label": "VOLUME (ft^3) ",
    "ai": "3655",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic yards (variable measure trade item)",
    "label": "VOLUME (yd^3) ",
    "ai": "3660",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic yards (variable measure trade item)",
    "label": "VOLUME (yd^3) ",
    "ai": "3661",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic yards (variable measure trade item)",
    "label": "VOLUME (yd^3) ",
    "ai": "3662",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic yards (variable measure trade item)",
    "label": "VOLUME (yd^3) ",
    "ai": "3663",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic yards (variable measure trade item)",
    "label": "VOLUME (yd^3) ",
    "ai": "3664",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Net volume, cubic yards (variable measure trade item)",
    "label": "VOLUME (yd^3) ",
    "ai": "3665",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic inches",
    "label": "VOLUME (in^3), log",
    "ai": "3670",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic inches",
    "label": "VOLUME (in^3), log",
    "ai": "3671",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic inches",
    "label": "VOLUME (in^3), log",
    "ai": "3672",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic inches",
    "label": "VOLUME (in^3), log",
    "ai": "3673",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic inches",
    "label": "VOLUME (in^3), log",
    "ai": "3674",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic inches",
    "label": "VOLUME (in^3), log",
    "ai": "3675",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic feet",
    "label": "VOLUME (ft^3), log",
    "ai": "3680",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic feet",
    "label": "VOLUME (ft^3), log",
    "ai": "3681",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic feet",
    "label": "VOLUME (ft^3), log",
    "ai": "3682",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic feet",
    "label": "VOLUME (ft^3), log",
    "ai": "3683",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic feet",
    "label": "VOLUME (ft^3), log",
    "ai": "3684",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic feet",
    "label": "VOLUME (ft^3), log",
    "ai": "3685",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic yards",
    "label": "VOLUME (yd^3), log",
    "ai": "3690",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic yards",
    "label": "VOLUME (yd^3), log",
    "ai": "3691",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic yards",
    "label": "VOLUME (yd^3), log",
    "ai": "3692",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic yards",
    "label": "VOLUME (yd^3), log",
    "ai": "3693",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic yards",
    "label": "VOLUME (yd^3), log",
    "ai": "3694",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Logistic volume, cubic yards",
    "label": "VOLUME (yd^3), log",
    "ai": "3695",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Count of trade items",
    "label": "COUNT",
    "ai": "37",
    "format": "N..8",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,8})"
}, {
    "title": "Applicable amount payable or Coupon value, local currency",
    "label": "AMOUNT",
    "ai": "3900",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,15})"
}, {
    "title": "Applicable amount payable or Coupon value, local currency",
    "label": "AMOUNT",
    "ai": "3901",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,15})"
}, {
    "title": "Applicable amount payable or Coupon value, local currency",
    "label": "AMOUNT",
    "ai": "3902",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,15})"
}, {
    "title": "Applicable amount payable or Coupon value, local currency",
    "label": "AMOUNT",
    "ai": "3903",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,15})"
}, {
    "title": "Applicable amount payable or Coupon value, local currency",
    "label": "AMOUNT",
    "ai": "3904",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,15})"
}, {
    "title": "Applicable amount payable or Coupon value, local currency",
    "label": "AMOUNT",
    "ai": "3905",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,15})"
}, {
    "title": "Applicable amount payable or Coupon value, local currency",
    "label": "AMOUNT",
    "ai": "3906",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,15})"
}, {
    "title": "Applicable amount payable or Coupon value, local currency",
    "label": "AMOUNT",
    "ai": "3907",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,15})"
}, {
    "title": "Applicable amount payable or Coupon value, local currency",
    "label": "AMOUNT",
    "ai": "3908",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,15})"
}, {
    "title": "Applicable amount payable or Coupon value, local currency",
    "label": "AMOUNT",
    "ai": "3909",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,15})"
}, {
    "title": "Applicable amount payable with ISO currency code",
    "label": "AMOUNT",
    "ai": "3910",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,15})"
}, {
    "title": "Applicable amount payable with ISO currency code",
    "label": "AMOUNT",
    "ai": "3911",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,15})"
}, {
    "title": "Applicable amount payable with ISO currency code",
    "label": "AMOUNT",
    "ai": "3912",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,15})"
}, {
    "title": "Applicable amount payable with ISO currency code",
    "label": "AMOUNT",
    "ai": "3913",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,15})"
}, {
    "title": "Applicable amount payable with ISO currency code",
    "label": "AMOUNT",
    "ai": "3914",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,15})"
}, {
    "title": "Applicable amount payable with ISO currency code",
    "label": "AMOUNT",
    "ai": "3915",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,15})"
}, {
    "title": "Applicable amount payable with ISO currency code",
    "label": "AMOUNT",
    "ai": "3916",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,15})"
}, {
    "title": "Applicable amount payable with ISO currency code",
    "label": "AMOUNT",
    "ai": "3917",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,15})"
}, {
    "title": "Applicable amount payable with ISO currency code",
    "label": "AMOUNT",
    "ai": "3918",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,15})"
}, {
    "title": "Applicable amount payable with ISO currency code",
    "label": "AMOUNT",
    "ai": "3919",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,15})"
}, {
    "title": "Applicable amount payable, single monetary area (variable measure trade item)",
    "label": "PRICE",
    "ai": "3920",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,15})"
}, {
    "title": "Applicable amount payable, single monetary area (variable measure trade item)",
    "label": "PRICE",
    "ai": "3921",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,15})"
}, {
    "title": "Applicable amount payable, single monetary area (variable measure trade item)",
    "label": "PRICE",
    "ai": "3922",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,15})"
}, {
    "title": "Applicable amount payable, single monetary area (variable measure trade item)",
    "label": "PRICE",
    "ai": "3923",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,15})"
}, {
    "title": "Applicable amount payable, single monetary area (variable measure trade item)",
    "label": "PRICE",
    "ai": "3924",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,15})"
}, {
    "title": "Applicable amount payable, single monetary area (variable measure trade item)",
    "label": "PRICE",
    "ai": "3925",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,15})"
}, {
    "title": "Applicable amount payable, single monetary area (variable measure trade item)",
    "label": "PRICE",
    "ai": "3926",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,15})"
}, {
    "title": "Applicable amount payable, single monetary area (variable measure trade item)",
    "label": "PRICE",
    "ai": "3927",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,15})"
}, {
    "title": "Applicable amount payable, single monetary area (variable measure trade item)",
    "label": "PRICE",
    "ai": "3928",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,15})"
}, {
    "title": "Applicable amount payable, single monetary area (variable measure trade item)",
    "label": "PRICE",
    "ai": "3929",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,15})"
}, {
    "title": "Applicable amount payable with ISO currency code (variable measure trade item)",
    "label": "PRICE",
    "ai": "3930",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,15})"
}, {
    "title": "Applicable amount payable with ISO currency code (variable measure trade item)",
    "label": "PRICE",
    "ai": "3931",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,15})"
}, {
    "title": "Applicable amount payable with ISO currency code (variable measure trade item)",
    "label": "PRICE",
    "ai": "3932",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,15})"
}, {
    "title": "Applicable amount payable with ISO currency code (variable measure trade item)",
    "label": "PRICE",
    "ai": "3933",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,15})"
}, {
    "title": "Applicable amount payable with ISO currency code (variable measure trade item)",
    "label": "PRICE",
    "ai": "3934",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,15})"
}, {
    "title": "Applicable amount payable with ISO currency code (variable measure trade item)",
    "label": "PRICE",
    "ai": "3935",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,15})"
}, {
    "title": "Applicable amount payable with ISO currency code (variable measure trade item)",
    "label": "PRICE",
    "ai": "3936",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,15})"
}, {
    "title": "Applicable amount payable with ISO currency code (variable measure trade item)",
    "label": "PRICE",
    "ai": "3937",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,15})"
}, {
    "title": "Applicable amount payable with ISO currency code (variable measure trade item)",
    "label": "PRICE",
    "ai": "3938",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,15})"
}, {
    "title": "Applicable amount payable with ISO currency code (variable measure trade item)",
    "label": "PRICE",
    "ai": "3939",
    "format": "N..15",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,15})"
}, {
    "title": "Percentage discount of a coupon",
    "label": "PRCNT OFF",
    "ai": "3940",
    "format": "N4",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{4})"
}, {
    "title": "Percentage discount of a coupon",
    "label": "PRCNT OFF",
    "ai": "3941",
    "format": "N4",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{4})"
}, {
    "title": "Percentage discount of a coupon",
    "label": "PRCNT OFF",
    "ai": "3942",
    "format": "N4",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{4})"
}, {
    "title": "Percentage discount of a coupon",
    "label": "PRCNT OFF",
    "ai": "3943",
    "format": "N4",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{4})"
}, {
    "title": "Customer's purchase order number",
    "label": "ORDER NUMBER",
    "ai": "400",
    "format": "X..30",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"
}, {
    "title": "Global Identification Number for Consignment (GINC)",
    "label": "GINC",
    "shortcode": "ginc",
    "ai": "401",
    "format": "X..30",
    "type": "I",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"
}, {
    "title": "Global Shipment Identification Number (GSIN)",
    "label": "GSIN",
    "shortcode": "gsin",
    "ai": "402",
    "format": "N17",
    "type": "I",
    "fixedLength": true,
    "checkDigit": "L",
    "regex": "(\\d{17})"
}, {
    "title": "Routing code",
    "label": "ROUTE",
    "ai": "403",
    "format": "X..30",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"
}, {
    "title": "Ship to - Deliver to Global Location Number",
    "label": "SHIP TO LOC",
    "ai": "410",
    "format": "N13",
    "type": "D",
    "fixedLength": true,
    "checkDigit": "L",
    "regex": "(\\d{13})"
}, {
    "title": "Bill to - Invoice to Global Location Number",
    "label": "BILL TO ",
    "ai": "411",
    "format": "N13",
    "type": "D",
    "fixedLength": true,
    "checkDigit": "L",
    "regex": "(\\d{13})"
}, {
    "title": "Purchased from Global Location Number",
    "label": "PURCHASE FROM",
    "ai": "412",
    "format": "N13",
    "type": "D",
    "fixedLength": true,
    "checkDigit": "L",
    "regex": "(\\d{13})"
}, {
    "title": "Ship for - Deliver for - Forward to Global Location Number",
    "label": "SHIP FOR LOC",
    "ai": "413",
    "format": "N13",
    "type": "D",
    "fixedLength": true,
    "checkDigit": "L",
    "regex": "(\\d{13})"
}, {
    "title": "Identification of a physical location - Global Location Number",
    "label": "LOC No",
    "shortcode": "gln",
    "ai": "414",
    "format": "N13",
    "type": "I",
    "fixedLength": true,
    "checkDigit": "L",
    "qualifiers": ["254"],
    "regex": "(\\d{13})"
}, {
    "title": "Global Location Number of the invoicing party",
    "label": "PAY TO",
    "shortcode": "payto",
    "ai": "415",
    "format": "N13",
    "type": "I",
    "fixedLength": true,
    "checkDigit": "L",
    "regex": "(\\d{13})"
}, {
    "title": "GLN of the production or service location",
    "label": "PROD/SERV LOC",
    "ai": "416",
    "format": "N13",
    "type": "D",
    "fixedLength": true,
    "checkDigit": "L",
    "regex": "(\\d{13})"
}, {
    "title": "Ship to - Deliver to postal code within a single postal authority",
    "label": "SHIP TO POST",
    "ai": "420",
    "format": "X..20",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"
}, {
    "title": "Ship to - Deliver to postal code with ISO country code",
    "label": "SHIP TO POST",
    "ai": "421",
    "format": "N3+X..9",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,9})"
}, {
    "title": "Country of origin of a trade item",
    "label": "ORIGIN",
    "ai": "422",
    "format": "N3",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{3})"
}, {
    "title": "Country of initial processing",
    "label": "COUNTRY - INITIAL PROCESS.",
    "ai": "423",
    "format": "N3+N..12",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,12})"
}, {
    "title": "Country of processing",
    "label": "COUNTRY - PROCESS.",
    "ai": "424",
    "format": "N3",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{3})"
}, {
    "title": "Country of disassembly",
    "label": "COUNTRY - DISASSEMBLY",
    "ai": "425",
    "format": "N3+N..12",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})(\\d{0,12})"
}, {
    "title": "Country covering full process chain",
    "label": "COUNTRY - FULL PROCESS",
    "ai": "426",
    "format": "N3",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{3})"
}, {
    "title": "Country subdivision Of origin",
    "label": "ORIGIN SUBDIVISION",
    "ai": "427",
    "format": "X..3",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,3})"
}, {
    "title": "NATO Stock Number (NSN)",
    "label": "NSN",
    "ai": "7001",
    "format": "N13",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{13})"
}, {
    "title": "UN/ECE meat carcasses and cuts classification",
    "label": "MEAT CUT",
    "ai": "7002",
    "format": "X..30",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"
}, {
    "title": "Expiration date and time",
    "label": "EXPIRY TIME",
    "shortcode": "expdt",
    "ai": "7003",
    "format": "N10",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{10})"
}, {
    "title": "Active potency",
    "label": "ACTIVE POTENCY",
    "ai": "7004",
    "format": "N..4",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{0,4})"
}, {
    "title": "Catch area",
    "label": "CATCH AREA",
    "ai": "7005",
    "format": "X..12",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,12})"
}, {
    "title": "First freeze date ",
    "label": "FIRST FREEZE DATE",
    "ai": "7006",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Harvest date",
    "label": "HARVEST DATE",
    "ai": "7007",
    "format": "N6..12",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{6,12})"
}, {
    "title": "Species for fishery purposes",
    "label": "AQUATIC SPECIES",
    "ai": "7008",
    "format": "X..3",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,3})"
}, {
    "title": "Fishing gear type",
    "label": "FISHING GEAR TYPE",
    "ai": "7009",
    "format": "X..10",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,10})"
}, {
    "title": "Production method",
    "label": "PROD METHOD",
    "ai": "7010",
    "format": "X..2",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,2})"
}, {
    "title": "Refurbishment lot ID",
    "label": "REFURB LOT",
    "ai": "7020",
    "format": "X..20",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"
}, {
    "title": "Functional status",
    "label": "FUNC STAT",
    "ai": "7021",
    "format": "X..20",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"
}, {
    "title": "Revision status",
    "label": "REV STAT",
    "ai": "7022",
    "format": "X..20",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"
}, {
    "title": "Global Individual Asset Identifier (GIAI) of an assembly",
    "label": "GIAI - ASSEMBLY",
    "ai": "7023",
    "format": "X..30",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"
}, {
    "title": "Number of processor with ISO Country Code",
    "label": "PROCESSOR # 0",
    "ai": "7030",
    "format": "X..27",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"
}, {
    "title": "Number of processor with ISO Country Code",
    "label": "PROCESSOR # 1",
    "ai": "7031",
    "format": "X..27",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"
}, {
    "title": "Number of processor with ISO Country Code",
    "label": "PROCESSOR # 2",
    "ai": "7032",
    "format": "X..27",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"
}, {
    "title": "Number of processor with ISO Country Code",
    "label": "PROCESSOR # 3",
    "ai": "7033",
    "format": "X..27",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"
}, {
    "title": "Number of processor with ISO Country Code",
    "label": "PROCESSOR # 4",
    "ai": "7034",
    "format": "X..27",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"
}, {
    "title": "Number of processor with ISO Country Code",
    "label": "PROCESSOR # 5",
    "ai": "7035",
    "format": "X..27",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"
}, {
    "title": "Number of processor with ISO Country Code",
    "label": "PROCESSOR # 6",
    "ai": "7036",
    "format": "X..27",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"
}, {
    "title": "Number of processor with ISO Country Code",
    "label": "PROCESSOR # 7",
    "ai": "7037",
    "format": "X..27",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"
}, {
    "title": "Number of processor with ISO Country Code",
    "label": "PROCESSOR # 8",
    "ai": "7038",
    "format": "X..27",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"
}, {
    "title": "Number of processor with ISO Country Code",
    "label": "PROCESSOR # 9",
    "ai": "7039",
    "format": "X..27",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{3})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,27})"
}, {
    "title": "National Healthcare Reimbursement Number (NHRN) - Germany PZN",
    "label": "NHRN PZN",
    "ai": "710",
    "format": "X..20",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"
}, {
    "title": "National Healthcare Reimbursement Number (NHRN) - France CIP",
    "label": "NHRN CIP",
    "ai": "711",
    "format": "X..20",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"
}, {
    "title": "National Healthcare Reimbursement Number (NHRN) - Spain CN",
    "label": "NHRN CN",
    "ai": "712",
    "format": "X..20",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"
}, {
    "title": "National Healthcare Reimbursement Number (NHRN) - Brasil DRN",
    "label": "NHRN DRN",
    "ai": "713",
    "format": "X..20",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"
}, {
    "title": "National Healthcare Reimbursement Number (NHRN) - Portugal AIM",
    "label": "NHRN AIM",
    "ai": "714",
    "format": "X..20",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"
}, {
    "title": "Certification reference # 0",
    "label": "CERT # 0",
    "ai": "7230",
    "format": "X2+X..28",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"
}, {
    "title": "Certification reference # 1",
    "label": "CERT # 1",
    "ai": "7231",
    "format": "X2+X..28",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"
}, {
    "title": "Certification reference # 2",
    "label": "CERT # 2",
    "ai": "7232",
    "format": "X2+X..28",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"
}, {
    "title": "Certification reference # 3",
    "label": "CERT # 3",
    "ai": "7233",
    "format": "X2+X..28",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"
}, {
    "title": "Certification reference # 4",
    "label": "CERT # 4",
    "ai": "7234",
    "format": "X2+X..28",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"
}, {
    "title": "Certification reference # 5",
    "label": "CERT # 5",
    "ai": "7235",
    "format": "X2+X..28",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"
}, {
    "title": "Certification reference # 6",
    "label": "CERT # 6",
    "ai": "7236",
    "format": "X2+X..28",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"
}, {
    "title": "Certification reference # 7",
    "label": "CERT # 7",
    "ai": "7237",
    "format": "X2+X..28",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"
}, {
    "title": "Certification reference # 8",
    "label": "CERT # 8",
    "ai": "7238",
    "format": "X2+X..28",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"
}, {
    "title": "Certification reference # 9",
    "label": "CERT # 9",
    "ai": "7239",
    "format": "X2+X..28",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{2,30})"
}, {
    "title": "Roll products (width, length, core diameter, direction, splices)",
    "label": "DIMENSIONS",
    "ai": "8001",
    "format": "N14",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{14})"
}, {
    "title": "Cellular mobile telephone identifier",
    "label": "CMT No",
    "ai": "8002",
    "format": "X..20",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"
}, {
    "title": "Global Returnable Asset Identifier (GRAI)",
    "label": "GRAI",
    "shortcode": "grai",
    "ai": "8003",
    "format": "N14+X..16",
    "type": "I",
    "fixedLength": false,
    "checkDigit": "13",
    "regex": "(\\d{14})([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,16})"
}, {
    "title": "Global Individual Asset Identifier (GIAI)",
    "label": "GIAI",
    "shortcode": "giai",
    "ai": "8004",
    "format": "X..30",
    "type": "I",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"
}, {
    "title": "Price per unit of measure",
    "label": "PRICE PER UNIT",
    "ai": "8005",
    "format": "N6",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{6})"
}, {
    "title": "Identification of an individual trade item piece",
    "label": "ITIP",
    "shortcode": "itip",
    "ai": "8006",
    "format": "N14+N2+N2",
    "type": "I",
    "fixedLength": true,
    "checkDigit": "14",
    "qualifiers": ["22", "10", "21"],
    "regex": "(\\d{14})(\\d{2})(\\d{2})"
}, {
    "title": "International Bank Account Number (IBAN) ",
    "label": "IBAN",
    "ai": "8007",
    "format": "X..34",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,34})"
}, {
    "title": "Date and time of production",
    "label": "PROD TIME",
    "ai": "8008",
    "format": "N8+N..4",
    "type": "D",
    "fixedLength": false,
    "regex": "(\\d{8})(\\d{0,4})"
}, {
    "title": "Optically Readable Sensor Indicator",
    "label": "OPT SEN",
    "ai": "8009",
    "format": "X..50",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,50})"
}, {
    "title": "Component/Part Identifier (CPID)",
    "label": "CPID",
    "shortcode": "cpid",
    "ai": "8010",
    "format": "Y..30",
    "type": "I",
    "fixedLength": false,
    "qualifiers": ["8011"],
    "regex": "([\\x23\\x2D\\x2F\\x30-\\x39\\x41-\\x5A]{0,30})"
}, {
    "title": "Component/Part Identifier serial number (CPID SERIAL)",
    "label": "CPID SERIAL",
    "shortcode": "cpsn",
    "ai": "8011",
    "format": "N..12",
    "type": "Q",
    "fixedLength": false,
    "regex": "(\\d{0,12})"
}, {
    "title": "Software version",
    "label": "VERSION",
    "ai": "8012",
    "format": "X..20",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,20})"
}, {
    "title": "Global Model Number (GMN)",
    "label": "GMN (for medical devices, the default, global data title is BUDI-DI )",
    "ai": "8013",
    "format": "X..30",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"
}, {
    "title": "Global Service Relation Number - Provider",
    "label": "GSRN - PROVIDER",
    "shortcode": "gsrnp",
    "ai": "8017",
    "format": "N18",
    "type": "I",
    "fixedLength": true,
    "checkDigit": "L",
    "qualifiers": ["8019"],
    "regex": "(\\d{18})"
}, {
    "title": "Global Service Relation Number - Recipient",
    "label": "GSRN - RECIPIENT",
    "shortcode": "gsrn",
    "ai": "8018",
    "format": "N18",
    "type": "I",
    "fixedLength": true,
    "checkDigit": "L",
    "qualifiers": ["8019"],
    "regex": "(\\d{18})"
}, {
    "title": "Service Relation Instance Number (SRIN)",
    "label": "SRIN",
    "shortcode": "srin",
    "ai": "8019",
    "format": "N..10",
    "type": "Q",
    "fixedLength": false,
    "regex": "(\\d{0,10})"
}, {
    "title": "Payment slip reference number",
    "label": "REF No",
    "ai": "8020",
    "format": "X..25",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,25})"
}, {
    "title": "Identification of pieces of a trade item contained in a logistics unit",
    "label": "ITIP CONTENT",
    "ai": "8026",
    "format": "N14+N2+N2",
    "type": "D",
    "fixedLength": true,
    "checkDigit": "14",
    "regex": "(\\d{14})(\\d{2})(\\d{2})"
}, {
    "title": "Coupon code identification for use in North America",
    "ai": "8110",
    "format": "X..70",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,70})"
}, {
    "title": "Loyalty points of a coupon",
    "label": "POINTS",
    "ai": "8111",
    "format": "N4",
    "type": "D",
    "fixedLength": true,
    "regex": "(\\d{4})"
}, {
    "title": "Paperless coupon code identification for use in North America",
    "ai": "8112",
    "format": "X..70",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,70})"
}, {
    "title": "Extended Packaging URL ",
    "label": "PRODUCT URL",
    "ai": "8200",
    "format": "X..70",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,70})"
}, {
    "title": "Information mutually agreed between trading partners",
    "label": "INTERNAL",
    "ai": "90",
    "format": "X..30",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,30})"
}, {
    "title": "Company internal information",
    "label": "INTERNAL",
    "ai": "91",
    "format": "X..90",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"
}, {
    "title": "Company internal information",
    "label": "INTERNAL",
    "ai": "92",
    "format": "X..90",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"
}, {
    "title": "Company internal information",
    "label": "INTERNAL",
    "ai": "93",
    "format": "X..90",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"
}, {
    "title": "Company internal information",
    "label": "INTERNAL",
    "ai": "94",
    "format": "X..90",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"
}, {
    "title": "Company internal information",
    "label": "INTERNAL",
    "ai": "95",
    "format": "X..90",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"
}, {
    "title": "Company internal information",
    "label": "INTERNAL",
    "ai": "96",
    "format": "X..90",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"
}, {
    "title": "Company internal information",
    "label": "INTERNAL",
    "ai": "97",
    "format": "X..90",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"
}, {
    "title": "Company internal information",
    "label": "INTERNAL",
    "ai": "98",
    "format": "X..90",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"
}, {
    "title": "Company internal information",
    "label": "INTERNAL",
    "ai": "99",
    "format": "X..90",
    "type": "D",
    "fixedLength": false,
    "regex": "([\\x21-\\x22\\x25-\\x2F\\x30-\\x39\\x41-\\x5A\\x5F\\x61-\\x7A]{0,90})"
}];

export {
    aiTable
};