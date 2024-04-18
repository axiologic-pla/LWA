import {aiTable} from './aiTable.js';

export default class GS1DigitalLinkToolkit {

    // constructor sets up various data resources shared by multiple methods
    constructor() {

        // list of all GS1 Application Identifiers as defined in GS1 General Specifications v18
        const aitable = aiTable;
        // tableP indicates for any initial two digits, what is the total length of the numeric AI key, e.g. "80":4 --> all AI keys beginning with 80 are four digit AI keys, 80xx
        const tableP = {
            "00": 2,
            "01": 2,
            "02": 2,
            "10": 2,
            "11": 2,
            "12": 2,
            "13": 2,
            "15": 2,
            "16": 2,
            "17": 2,
            "20": 2,
            "21": 2,
            "22": 2,
            "23": 3,
            "24": 3,
            "25": 3,
            "30": 2,
            "31": 4,
            "32": 4,
            "33": 4,
            "34": 4,
            "35": 4,
            "36": 4,
            "37": 2,
            "39": 4,
            "40": 3,
            "41": 3,
            "42": 3,
            "70": 4,
            "71": 3,
            "72": 4,
            "80": 4,
            "81": 4,
            "82": 4,
            "90": 2,
            "91": 2,
            "92": 2,
            "93": 2,
            "94": 2,
            "95": 2,
            "96": 2,
            "97": 2,
            "98": 2,
            "99": 2
        };

        // tableF indicates the expected format for the value of each AI.

        const tableF = {
            "00": [{"E": "N", "L": "18"}],
            "01": [{"E": "N", "L": "14"}],
            "02": [{"E": "N", "L": "14"}],
            "10": [{"E": "X", "M": "20"}],
            "11": [{"E": "N", "L": "6"}],
            "12": [{"E": "N", "L": "6"}],
            "13": [{"E": "N", "L": "6"}],
            "15": [{"E": "N", "L": "6"}],
            "16": [{"E": "N", "L": "6"}],
            "17": [{"E": "N", "L": "6"}],
            "20": [{"E": "N", "L": "2"}],
            "21": [{"E": "X", "M": "20"}],
            "22": [{"E": "X", "M": "20"}],
            "240": [{"E": "X", "M": "30"}],
            "241": [{"E": "X", "M": "30"}],
            "242": [{"E": "N", "M": "6"}],
            "243": [{"E": "X", "M": "20"}],
            "250": [{"E": "X", "M": "30"}],
            "251": [{"E": "X", "M": "30"}],
            "253": [{"E": "N", "L": "13"}, {"E": "X", "M": "17"}],
            "254": [{"E": "X", "M": "20"}],
            "255": [{"E": "N", "L": "13"}, {"E": "N", "M": "12"}],
            "30": [{"E": "N", "M": "8"}],
            "3100": [{"E": "N", "L": "6"}],
            "3101": [{"E": "N", "L": "6"}],
            "3102": [{"E": "N", "L": "6"}],
            "3103": [{"E": "N", "L": "6"}],
            "3104": [{"E": "N", "L": "6"}],
            "3105": [{"E": "N", "L": "6"}],
            "3110": [{"E": "N", "L": "6"}],
            "3111": [{"E": "N", "L": "6"}],
            "3112": [{"E": "N", "L": "6"}],
            "3113": [{"E": "N", "L": "6"}],
            "3114": [{"E": "N", "L": "6"}],
            "3115": [{"E": "N", "L": "6"}],
            "3120": [{"E": "N", "L": "6"}],
            "3121": [{"E": "N", "L": "6"}],
            "3122": [{"E": "N", "L": "6"}],
            "3123": [{"E": "N", "L": "6"}],
            "3124": [{"E": "N", "L": "6"}],
            "3125": [{"E": "N", "L": "6"}],
            "3130": [{"E": "N", "L": "6"}],
            "3131": [{"E": "N", "L": "6"}],
            "3132": [{"E": "N", "L": "6"}],
            "3133": [{"E": "N", "L": "6"}],
            "3134": [{"E": "N", "L": "6"}],
            "3135": [{"E": "N", "L": "6"}],
            "3140": [{"E": "N", "L": "6"}],
            "3141": [{"E": "N", "L": "6"}],
            "3142": [{"E": "N", "L": "6"}],
            "3143": [{"E": "N", "L": "6"}],
            "3144": [{"E": "N", "L": "6"}],
            "3145": [{"E": "N", "L": "6"}],
            "3150": [{"E": "N", "L": "6"}],
            "3151": [{"E": "N", "L": "6"}],
            "3152": [{"E": "N", "L": "6"}],
            "3153": [{"E": "N", "L": "6"}],
            "3154": [{"E": "N", "L": "6"}],
            "3155": [{"E": "N", "L": "6"}],
            "3160": [{"E": "N", "L": "6"}],
            "3161": [{"E": "N", "L": "6"}],
            "3162": [{"E": "N", "L": "6"}],
            "3163": [{"E": "N", "L": "6"}],
            "3164": [{"E": "N", "L": "6"}],
            "3165": [{"E": "N", "L": "6"}],
            "3200": [{"E": "N", "L": "6"}],
            "3201": [{"E": "N", "L": "6"}],
            "3202": [{"E": "N", "L": "6"}],
            "3203": [{"E": "N", "L": "6"}],
            "3204": [{"E": "N", "L": "6"}],
            "3205": [{"E": "N", "L": "6"}],
            "3210": [{"E": "N", "L": "6"}],
            "3211": [{"E": "N", "L": "6"}],
            "3212": [{"E": "N", "L": "6"}],
            "3213": [{"E": "N", "L": "6"}],
            "3214": [{"E": "N", "L": "6"}],
            "3215": [{"E": "N", "L": "6"}],
            "3220": [{"E": "N", "L": "6"}],
            "3221": [{"E": "N", "L": "6"}],
            "3222": [{"E": "N", "L": "6"}],
            "3223": [{"E": "N", "L": "6"}],
            "3224": [{"E": "N", "L": "6"}],
            "3225": [{"E": "N", "L": "6"}],
            "3230": [{"E": "N", "L": "6"}],
            "3231": [{"E": "N", "L": "6"}],
            "3232": [{"E": "N", "L": "6"}],
            "3233": [{"E": "N", "L": "6"}],
            "3234": [{"E": "N", "L": "6"}],
            "3235": [{"E": "N", "L": "6"}],
            "3240": [{"E": "N", "L": "6"}],
            "3241": [{"E": "N", "L": "6"}],
            "3242": [{"E": "N", "L": "6"}],
            "3243": [{"E": "N", "L": "6"}],
            "3244": [{"E": "N", "L": "6"}],
            "3245": [{"E": "N", "L": "6"}],
            "3250": [{"E": "N", "L": "6"}],
            "3251": [{"E": "N", "L": "6"}],
            "3252": [{"E": "N", "L": "6"}],
            "3253": [{"E": "N", "L": "6"}],
            "3254": [{"E": "N", "L": "6"}],
            "3255": [{"E": "N", "L": "6"}],
            "3260": [{"E": "N", "L": "6"}],
            "3261": [{"E": "N", "L": "6"}],
            "3262": [{"E": "N", "L": "6"}],
            "3263": [{"E": "N", "L": "6"}],
            "3264": [{"E": "N", "L": "6"}],
            "3265": [{"E": "N", "L": "6"}],
            "3270": [{"E": "N", "L": "6"}],
            "3271": [{"E": "N", "L": "6"}],
            "3272": [{"E": "N", "L": "6"}],
            "3273": [{"E": "N", "L": "6"}],
            "3274": [{"E": "N", "L": "6"}],
            "3275": [{"E": "N", "L": "6"}],
            "3280": [{"E": "N", "L": "6"}],
            "3281": [{"E": "N", "L": "6"}],
            "3282": [{"E": "N", "L": "6"}],
            "3283": [{"E": "N", "L": "6"}],
            "3284": [{"E": "N", "L": "6"}],
            "3285": [{"E": "N", "L": "6"}],
            "3290": [{"E": "N", "L": "6"}],
            "3291": [{"E": "N", "L": "6"}],
            "3292": [{"E": "N", "L": "6"}],
            "3293": [{"E": "N", "L": "6"}],
            "3294": [{"E": "N", "L": "6"}],
            "3295": [{"E": "N", "L": "6"}],
            "3300": [{"E": "N", "L": "6"}],
            "3301": [{"E": "N", "L": "6"}],
            "3302": [{"E": "N", "L": "6"}],
            "3303": [{"E": "N", "L": "6"}],
            "3304": [{"E": "N", "L": "6"}],
            "3305": [{"E": "N", "L": "6"}],
            "3310": [{"E": "N", "L": "6"}],
            "3311": [{"E": "N", "L": "6"}],
            "3312": [{"E": "N", "L": "6"}],
            "3313": [{"E": "N", "L": "6"}],
            "3314": [{"E": "N", "L": "6"}],
            "3315": [{"E": "N", "L": "6"}],
            "3320": [{"E": "N", "L": "6"}],
            "3321": [{"E": "N", "L": "6"}],
            "3322": [{"E": "N", "L": "6"}],
            "3323": [{"E": "N", "L": "6"}],
            "3324": [{"E": "N", "L": "6"}],
            "3325": [{"E": "N", "L": "6"}],
            "3330": [{"E": "N", "L": "6"}],
            "3331": [{"E": "N", "L": "6"}],
            "3332": [{"E": "N", "L": "6"}],
            "3333": [{"E": "N", "L": "6"}],
            "3334": [{"E": "N", "L": "6"}],
            "3335": [{"E": "N", "L": "6"}],
            "3340": [{"E": "N", "L": "6"}],
            "3341": [{"E": "N", "L": "6"}],
            "3342": [{"E": "N", "L": "6"}],
            "3343": [{"E": "N", "L": "6"}],
            "3344": [{"E": "N", "L": "6"}],
            "3345": [{"E": "N", "L": "6"}],
            "3350": [{"E": "N", "L": "6"}],
            "3351": [{"E": "N", "L": "6"}],
            "3352": [{"E": "N", "L": "6"}],
            "3353": [{"E": "N", "L": "6"}],
            "3354": [{"E": "N", "L": "6"}],
            "3355": [{"E": "N", "L": "6"}],
            "3360": [{"E": "N", "L": "6"}],
            "3361": [{"E": "N", "L": "6"}],
            "3362": [{"E": "N", "L": "6"}],
            "3363": [{"E": "N", "L": "6"}],
            "3364": [{"E": "N", "L": "6"}],
            "3365": [{"E": "N", "L": "6"}],
            "3370": [{"E": "N", "L": "6"}],
            "3371": [{"E": "N", "L": "6"}],
            "3372": [{"E": "N", "L": "6"}],
            "3373": [{"E": "N", "L": "6"}],
            "3374": [{"E": "N", "L": "6"}],
            "3375": [{"E": "N", "L": "6"}],
            "3400": [{"E": "N", "L": "6"}],
            "3401": [{"E": "N", "L": "6"}],
            "3402": [{"E": "N", "L": "6"}],
            "3403": [{"E": "N", "L": "6"}],
            "3404": [{"E": "N", "L": "6"}],
            "3405": [{"E": "N", "L": "6"}],
            "3410": [{"E": "N", "L": "6"}],
            "3411": [{"E": "N", "L": "6"}],
            "3412": [{"E": "N", "L": "6"}],
            "3413": [{"E": "N", "L": "6"}],
            "3414": [{"E": "N", "L": "6"}],
            "3415": [{"E": "N", "L": "6"}],
            "3420": [{"E": "N", "L": "6"}],
            "3421": [{"E": "N", "L": "6"}],
            "3422": [{"E": "N", "L": "6"}],
            "3423": [{"E": "N", "L": "6"}],
            "3424": [{"E": "N", "L": "6"}],
            "3425": [{"E": "N", "L": "6"}],
            "3430": [{"E": "N", "L": "6"}],
            "3431": [{"E": "N", "L": "6"}],
            "3432": [{"E": "N", "L": "6"}],
            "3433": [{"E": "N", "L": "6"}],
            "3434": [{"E": "N", "L": "6"}],
            "3435": [{"E": "N", "L": "6"}],
            "3440": [{"E": "N", "L": "6"}],
            "3441": [{"E": "N", "L": "6"}],
            "3442": [{"E": "N", "L": "6"}],
            "3443": [{"E": "N", "L": "6"}],
            "3444": [{"E": "N", "L": "6"}],
            "3445": [{"E": "N", "L": "6"}],
            "3450": [{"E": "N", "L": "6"}],
            "3451": [{"E": "N", "L": "6"}],
            "3452": [{"E": "N", "L": "6"}],
            "3453": [{"E": "N", "L": "6"}],
            "3454": [{"E": "N", "L": "6"}],
            "3455": [{"E": "N", "L": "6"}],
            "3460": [{"E": "N", "L": "6"}],
            "3461": [{"E": "N", "L": "6"}],
            "3462": [{"E": "N", "L": "6"}],
            "3463": [{"E": "N", "L": "6"}],
            "3464": [{"E": "N", "L": "6"}],
            "3465": [{"E": "N", "L": "6"}],
            "3470": [{"E": "N", "L": "6"}],
            "3471": [{"E": "N", "L": "6"}],
            "3472": [{"E": "N", "L": "6"}],
            "3473": [{"E": "N", "L": "6"}],
            "3474": [{"E": "N", "L": "6"}],
            "3475": [{"E": "N", "L": "6"}],
            "3480": [{"E": "N", "L": "6"}],
            "3481": [{"E": "N", "L": "6"}],
            "3482": [{"E": "N", "L": "6"}],
            "3483": [{"E": "N", "L": "6"}],
            "3484": [{"E": "N", "L": "6"}],
            "3485": [{"E": "N", "L": "6"}],
            "3490": [{"E": "N", "L": "6"}],
            "3491": [{"E": "N", "L": "6"}],
            "3492": [{"E": "N", "L": "6"}],
            "3493": [{"E": "N", "L": "6"}],
            "3494": [{"E": "N", "L": "6"}],
            "3495": [{"E": "N", "L": "6"}],
            "3500": [{"E": "N", "L": "6"}],
            "3501": [{"E": "N", "L": "6"}],
            "3502": [{"E": "N", "L": "6"}],
            "3503": [{"E": "N", "L": "6"}],
            "3504": [{"E": "N", "L": "6"}],
            "3505": [{"E": "N", "L": "6"}],
            "3510": [{"E": "N", "L": "6"}],
            "3511": [{"E": "N", "L": "6"}],
            "3512": [{"E": "N", "L": "6"}],
            "3513": [{"E": "N", "L": "6"}],
            "3514": [{"E": "N", "L": "6"}],
            "3515": [{"E": "N", "L": "6"}],
            "3520": [{"E": "N", "L": "6"}],
            "3521": [{"E": "N", "L": "6"}],
            "3522": [{"E": "N", "L": "6"}],
            "3523": [{"E": "N", "L": "6"}],
            "3524": [{"E": "N", "L": "6"}],
            "3525": [{"E": "N", "L": "6"}],
            "3530": [{"E": "N", "L": "6"}],
            "3531": [{"E": "N", "L": "6"}],
            "3532": [{"E": "N", "L": "6"}],
            "3533": [{"E": "N", "L": "6"}],
            "3534": [{"E": "N", "L": "6"}],
            "3535": [{"E": "N", "L": "6"}],
            "3540": [{"E": "N", "L": "6"}],
            "3541": [{"E": "N", "L": "6"}],
            "3542": [{"E": "N", "L": "6"}],
            "3543": [{"E": "N", "L": "6"}],
            "3544": [{"E": "N", "L": "6"}],
            "3545": [{"E": "N", "L": "6"}],
            "3550": [{"E": "N", "L": "6"}],
            "3551": [{"E": "N", "L": "6"}],
            "3552": [{"E": "N", "L": "6"}],
            "3553": [{"E": "N", "L": "6"}],
            "3554": [{"E": "N", "L": "6"}],
            "3555": [{"E": "N", "L": "6"}],
            "3560": [{"E": "N", "L": "6"}],
            "3561": [{"E": "N", "L": "6"}],
            "3562": [{"E": "N", "L": "6"}],
            "3563": [{"E": "N", "L": "6"}],
            "3564": [{"E": "N", "L": "6"}],
            "3565": [{"E": "N", "L": "6"}],
            "3570": [{"E": "N", "L": "6"}],
            "3571": [{"E": "N", "L": "6"}],
            "3572": [{"E": "N", "L": "6"}],
            "3573": [{"E": "N", "L": "6"}],
            "3574": [{"E": "N", "L": "6"}],
            "3575": [{"E": "N", "L": "6"}],
            "3600": [{"E": "N", "L": "6"}],
            "3601": [{"E": "N", "L": "6"}],
            "3602": [{"E": "N", "L": "6"}],
            "3603": [{"E": "N", "L": "6"}],
            "3604": [{"E": "N", "L": "6"}],
            "3605": [{"E": "N", "L": "6"}],
            "3610": [{"E": "N", "L": "6"}],
            "3611": [{"E": "N", "L": "6"}],
            "3612": [{"E": "N", "L": "6"}],
            "3613": [{"E": "N", "L": "6"}],
            "3614": [{"E": "N", "L": "6"}],
            "3615": [{"E": "N", "L": "6"}],
            "3620": [{"E": "N", "L": "6"}],
            "3621": [{"E": "N", "L": "6"}],
            "3622": [{"E": "N", "L": "6"}],
            "3623": [{"E": "N", "L": "6"}],
            "3624": [{"E": "N", "L": "6"}],
            "3625": [{"E": "N", "L": "6"}],
            "3630": [{"E": "N", "L": "6"}],
            "3631": [{"E": "N", "L": "6"}],
            "3632": [{"E": "N", "L": "6"}],
            "3633": [{"E": "N", "L": "6"}],
            "3634": [{"E": "N", "L": "6"}],
            "3635": [{"E": "N", "L": "6"}],
            "3640": [{"E": "N", "L": "6"}],
            "3641": [{"E": "N", "L": "6"}],
            "3642": [{"E": "N", "L": "6"}],
            "3643": [{"E": "N", "L": "6"}],
            "3644": [{"E": "N", "L": "6"}],
            "3645": [{"E": "N", "L": "6"}],
            "3650": [{"E": "N", "L": "6"}],
            "3651": [{"E": "N", "L": "6"}],
            "3652": [{"E": "N", "L": "6"}],
            "3653": [{"E": "N", "L": "6"}],
            "3654": [{"E": "N", "L": "6"}],
            "3655": [{"E": "N", "L": "6"}],
            "3660": [{"E": "N", "L": "6"}],
            "3661": [{"E": "N", "L": "6"}],
            "3662": [{"E": "N", "L": "6"}],
            "3663": [{"E": "N", "L": "6"}],
            "3664": [{"E": "N", "L": "6"}],
            "3665": [{"E": "N", "L": "6"}],
            "3670": [{"E": "N", "L": "6"}],
            "3671": [{"E": "N", "L": "6"}],
            "3672": [{"E": "N", "L": "6"}],
            "3673": [{"E": "N", "L": "6"}],
            "3674": [{"E": "N", "L": "6"}],
            "3675": [{"E": "N", "L": "6"}],
            "3680": [{"E": "N", "L": "6"}],
            "3681": [{"E": "N", "L": "6"}],
            "3682": [{"E": "N", "L": "6"}],
            "3683": [{"E": "N", "L": "6"}],
            "3684": [{"E": "N", "L": "6"}],
            "3685": [{"E": "N", "L": "6"}],
            "3690": [{"E": "N", "L": "6"}],
            "3691": [{"E": "N", "L": "6"}],
            "3692": [{"E": "N", "L": "6"}],
            "3693": [{"E": "N", "L": "6"}],
            "3694": [{"E": "N", "L": "6"}],
            "3695": [{"E": "N", "L": "6"}],
            "37": [{"E": "N", "M": "8"}],
            "3900": [{"E": "N", "M": "15"}],
            "3901": [{"E": "N", "M": "15"}],
            "3902": [{"E": "N", "M": "15"}],
            "3903": [{"E": "N", "M": "15"}],
            "3904": [{"E": "N", "M": "15"}],
            "3905": [{"E": "N", "M": "15"}],
            "3906": [{"E": "N", "M": "15"}],
            "3907": [{"E": "N", "M": "15"}],
            "3908": [{"E": "N", "M": "15"}],
            "3909": [{"E": "N", "M": "15"}],
            "3910": [{"E": "N", "L": "3"}, {"E": "N", "M": "15"}],
            "3911": [{"E": "N", "L": "3"}, {"E": "N", "M": "15"}],
            "3912": [{"E": "N", "L": "3"}, {"E": "N", "M": "15"}],
            "3913": [{"E": "N", "L": "3"}, {"E": "N", "M": "15"}],
            "3914": [{"E": "N", "L": "3"}, {"E": "N", "M": "15"}],
            "3915": [{"E": "N", "L": "3"}, {"E": "N", "M": "15"}],
            "3916": [{"E": "N", "L": "3"}, {"E": "N", "M": "15"}],
            "3917": [{"E": "N", "L": "3"}, {"E": "N", "M": "15"}],
            "3918": [{"E": "N", "L": "3"}, {"E": "N", "M": "15"}],
            "3919": [{"E": "N", "L": "3"}, {"E": "N", "M": "15"}],
            "3920": [{"E": "N", "M": "15"}],
            "3921": [{"E": "N", "M": "15"}],
            "3922": [{"E": "N", "M": "15"}],
            "3923": [{"E": "N", "M": "15"}],
            "3924": [{"E": "N", "M": "15"}],
            "3925": [{"E": "N", "M": "15"}],
            "3926": [{"E": "N", "M": "15"}],
            "3927": [{"E": "N", "M": "15"}],
            "3928": [{"E": "N", "M": "15"}],
            "3929": [{"E": "N", "M": "15"}],
            "3930": [{"E": "N", "L": "3"}, {"E": "N", "M": "15"}],
            "3931": [{"E": "N", "L": "3"}, {"E": "N", "M": "15"}],
            "3932": [{"E": "N", "L": "3"}, {"E": "N", "M": "15"}],
            "3933": [{"E": "N", "L": "3"}, {"E": "N", "M": "15"}],
            "3934": [{"E": "N", "L": "3"}, {"E": "N", "M": "15"}],
            "3935": [{"E": "N", "L": "3"}, {"E": "N", "M": "15"}],
            "3936": [{"E": "N", "L": "3"}, {"E": "N", "M": "15"}],
            "3937": [{"E": "N", "L": "3"}, {"E": "N", "M": "15"}],
            "3938": [{"E": "N", "L": "3"}, {"E": "N", "M": "15"}],
            "3939": [{"E": "N", "L": "3"}, {"E": "N", "M": "15"}],
            "3940": [{"E": "N", "L": "4"}],
            "3941": [{"E": "N", "L": "4"}],
            "3942": [{"E": "N", "L": "4"}],
            "3943": [{"E": "N", "L": "4"}],
            "400": [{"E": "X", "M": "30"}],
            "401": [{"E": "X", "M": "30"}],
            "402": [{"E": "N", "L": "17"}],
            "403": [{"E": "X", "M": "30"}],
            "410": [{"E": "N", "L": "13"}],
            "411": [{"E": "N", "L": "13"}],
            "412": [{"E": "N", "L": "13"}],
            "413": [{"E": "N", "L": "13"}],
            "414": [{"E": "N", "L": "13"}],
            "415": [{"E": "N", "L": "13"}],
            "416": [{"E": "N", "L": "13"}],
            "420": [{"E": "X", "M": "20"}],
            "421": [{"E": "N", "L": "3"}, {"E": "X", "M": "9"}],
            "422": [{"E": "N", "L": "3"}],
            "423": [{"E": "N", "L": "3"}, {"E": "N", "M": "12"}],
            "424": [{"E": "N", "L": "3"}],
            "425": [{"E": "N", "L": "3"}, {"E": "N", "M": "12"}],
            "426": [{"E": "N", "L": "3"}],
            "427": [{"E": "X", "M": "3"}],
            "7001": [{"E": "N", "L": "13"}],
            "7002": [{"E": "X", "M": "30"}],
            "7003": [{"E": "N", "L": "10"}],
            "7004": [{"E": "N", "M": "4"}],
            "7005": [{"E": "X", "M": "12"}],
            "7006": [{"E": "N", "L": "6"}],
            "7007": [{"E": "N", "L": "6"}, {"E": "N", "M": "6"}],
            "7008": [{"E": "X", "M": "3"}],
            "7009": [{"E": "X", "M": "10"}],
            "7010": [{"E": "X", "M": "2"}],
            "7020": [{"E": "X", "M": "20"}],
            "7021": [{"E": "X", "M": "20"}],
            "7022": [{"E": "X", "M": "20"}],
            "7023": [{"E": "X", "M": "30"}],
            "7030": [{"E": "N", "L": "3"}, {"E": "X", "M": "27"}],
            "7031": [{"E": "N", "L": "3"}, {"E": "X", "M": "27"}],
            "7032": [{"E": "N", "L": "3"}, {"E": "X", "M": "27"}],
            "7033": [{"E": "N", "L": "3"}, {"E": "X", "M": "27"}],
            "7034": [{"E": "N", "L": "3"}, {"E": "X", "M": "27"}],
            "7035": [{"E": "N", "L": "3"}, {"E": "X", "M": "27"}],
            "7036": [{"E": "N", "L": "3"}, {"E": "X", "M": "27"}],
            "7037": [{"E": "N", "L": "3"}, {"E": "X", "M": "27"}],
            "7038": [{"E": "N", "L": "3"}, {"E": "X", "M": "27"}],
            "7039": [{"E": "N", "L": "3"}, {"E": "X", "M": "27"}],
            "710": [{"E": "X", "M": "20"}],
            "711": [{"E": "X", "M": "20"}],
            "712": [{"E": "X", "M": "20"}],
            "713": [{"E": "X", "M": "20"}],
            "714": [{"E": "X", "M": "20"}],
            "7230": [{"E": "X", "M": "30"}],
            "7231": [{"E": "X", "M": "30"}],
            "7232": [{"E": "X", "M": "30"}],
            "7233": [{"E": "X", "M": "30"}],
            "7234": [{"E": "X", "M": "30"}],
            "7235": [{"E": "X", "M": "30"}],
            "7236": [{"E": "X", "M": "30"}],
            "7237": [{"E": "X", "M": "30"}],
            "7238": [{"E": "X", "M": "30"}],
            "7239": [{"E": "X", "M": "30"}],
            "8001": [{"E": "N", "L": "14"}],
            "8002": [{"E": "X", "M": "20"}],
            "8003": [{"E": "N", "L": "14"}, {"E": "X", "M": "16"}],
            "8004": [{"E": "X", "M": "30"}],
            "8005": [{"E": "N", "L": "6"}],
            "8006": [{"E": "N", "L": "18"}],
            "8007": [{"E": "X", "M": "24"}],
            "8008": [{"E": "N", "L": "8"}, {"E": "N", "M": "4"}],
            "8009": [{"E": "X", "M": "50"}],
            "8010": [{"E": "X", "M": "30"}],
            "8011": [{"E": "N", "M": "12"}],
            "8012": [{"E": "X", "M": "20"}],
            "8013": [{"E": "X", "M": "30"}],
            "8017": [{"E": "N", "L": "18"}],
            "8018": [{"E": "N", "L": "18"}],
            "8019": [{"E": "N", "M": "10"}],
            "8020": [{"E": "X", "M": "25"}],
            "8026": [{"E": "N", "L": "18"}],
            "8110": [{"E": "X", "M": "70"}],
            "8111": [{"E": "N", "L": "4"}],
            "8112": [{"E": "X", "M": "70"}],
            "8200": [{"E": "X", "M": "70"}],
            "90": [{"E": "X", "M": "30"}],
            "91": [{"E": "X", "M": "90"}],
            "92": [{"E": "X", "M": "90"}],
            "93": [{"E": "X", "M": "90"}],
            "94": [{"E": "X", "M": "90"}],
            "95": [{"E": "X", "M": "90"}],
            "96": [{"E": "X", "M": "90"}],
            "97": [{"E": "X", "M": "90"}],
            "98": [{"E": "X", "M": "90"}],
            "99": [{"E": "X", "M": "90"}]
        };


        // tableOpt contains optimisations for pre-defined sequences of GS1 Application Identifiers
        // we'll initially use 0A-0F through 9A-9F to keep Ah - Eh unallocated and reserve Fh for support for non-GS1 keys from the URI query string
        const tableOpt = {
            "0A": ["01", "22"],
            "0B": ["01", "10"],
            "0C": ["01", "21"],
            "0D": ["01", "17"],
            "0E": ["01", "7003"],
            "0F": ["01", "30"],
            "1A": ["01", "10", "21", "17"],
            "1B": ["01", "15"],
            "1C": ["01", "11"],
            "1D": ["01", "16"],
            "1E": ["01", "91"],
            "1F": ["01", "10", "15"],
            "2A": ["01", "3100"],
            "2B": ["01", "3101"],
            "2C": ["01", "3102"],
            "2D": ["01", "3103"],
            "2E": ["01", "3104"],
            "2F": ["01", "3105"],
            "3A": ["01", "3200"],
            "3B": ["01", "3201"],
            "3C": ["01", "3202"],
            "3D": ["01", "3203"],
            "3E": ["01", "3204"],
            "3F": ["01", "3205"],
            "9A": ["8010", "8011"],
            "9B": ["8017", "8019"],
            "9C": ["8018", "8019"],
            "9D": ["414", "254"],
            "A0": ["01", "3920"],
            "A1": ["01", "3921"],
            "A2": ["01", "3922"],
            "A3": ["01", "3923"],
            "A4": ["01", "3924"],
            "A5": ["01", "3925"],
            "A6": ["01", "3926"],
            "A7": ["01", "3927"],
            "A8": ["01", "3928"],
            "A9": ["01", "3929"],
            "C0": ["255", "3900"],
            "C1": ["255", "3901"],
            "C2": ["255", "3902"],
            "C3": ["255", "3903"],
            "C4": ["255", "3904"],
            "C5": ["255", "3905"],
            "C6": ["255", "3906"],
            "C7": ["255", "3907"],
            "C8": ["255", "3908"],
            "C9": ["255", "3909"],
            "CA": ["255", "3940"],
            "CB": ["255", "3941"],
            "CC": ["255", "3942"],
            "CD": ["255", "3943"]
        }


        // safeBase64Alphabet is a modified URI-safe Base64 alphabet used in the compression methods for converting the binary string to/from an alphanumeric representation that contains no characters that are restricted in URIs
        const safeBase64Alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789-_";

        const hexAlphabet = "0123456789ABCDEF";

        const regexAllNum = new RegExp("^[0-9]+$");
        const regexSafe64 = new RegExp("^[A-Za-z0-9_-]+$");

        const tableOptReverse = {};
        let tableOptKeys = Object.keys(tableOpt);
        for (let i in tableOptKeys) {
            tableOptReverse[JSON.stringify(tableOpt[tableOptKeys[i]].sort())] = tableOptKeys[i];
        }

        const aiRegex = {};
        const aiShortCode = {};
        const aiQualifiers = {};
        const aiCheckDigitPosition = {};

        for (let a in aitable) {
            if (aitable[a] !== undefined) {

                aiRegex[aitable[a].ai] = new RegExp("^" + aitable[a].regex + "$");

                if (aitable[a].shortcode !== undefined) {
                    aiShortCode[aitable[a].ai] = aitable[a].shortcode;
                }

                if (aitable[a].qualifiers !== undefined) {
                    aiQualifiers[aitable[a].ai] = aitable[a].qualifiers;
                }

                if (aitable[a].checkDigit !== undefined) {
                    aiCheckDigitPosition[aitable[a].ai] = aitable[a].checkDigit;
                }
            }
        }


        function getIdentifiers(ai) {
            return ai.type === "I";
        }

        function getQualifiers(ai) {
            return ai.type === "Q";
        }

        function getDataAttributes(ai) {
            return ai.type === "D";
        }

        function getFixedLength(ai) {
            return ai.fixedLength === true;
        }

        function getVariableLength(ai) {
            return ai.fixedLength === false;
        }

        function byLength(length) {
            return function (element) {
                return element.ai.length === length;
            }
        }


        function getAIs(list) {
            let rv = [];
            for (let i in list) {
                rv.push(list[i].ai);
            }
            return rv;
        }


        const identifiers = aitable.filter(getIdentifiers);
        const qualifiers = aitable.filter(getQualifiers);
        const dataAttributes = aitable.filter(getDataAttributes);
        const fixedLength = aitable.filter(getFixedLength);
        const variableLength = aitable.filter(getVariableLength);


        const identifierMap = {};
        for (let i in identifiers) {
            identifierMap[identifiers[i].ai] = identifiers[i];
        }

        const qualifierMap = {};
        for (let q in qualifiers) {
            if (qualifiers[q] !== undefined) {
                qualifierMap[qualifiers[q].ai] = qualifiers[q];
            }
        }

        const attributeMap = {};
        for (let a in dataAttributes) {
            if (dataAttributes[a] !== undefined) {
                attributeMap[dataAttributes[a].ai] = dataAttributes[a];
            }
        }


        const fixedLengthMap = {};
        for (let f in fixedLength) {
            if (fixedLength[f] !== undefined) {
                fixedLengthMap[fixedLength[f].ai] = fixedLength[f];
            }
        }

        const variableLengthMap = {};
        for (let v in variableLength) {
            if (variableLength[v] !== undefined) {
                variableLengthMap[variableLength[v].ai] = variableLength[v];
            }
        }

        const aiMaps = {}
        aiMaps.identifiers = Object.keys(identifierMap);
        aiMaps.qualifiers = Object.keys(qualifierMap);
        aiMaps.dataAttributes = Object.keys(attributeMap);
        aiMaps.fixedLength = Object.keys(fixedLengthMap);
        aiMaps.variableLength = Object.keys(variableLengthMap);

        const shortCodeToNumeric = {};
        for (let key in aiShortCode) {
            shortCodeToNumeric[aiShortCode[key]] = key;
        }

        // exposed as public variables that can be accessed by methods
        this.aitable = aitable;
        this.aiCheckDigitPosition = aiCheckDigitPosition;
        this.aiRegex = aiRegex;
        this.aiMaps = aiMaps;
        this.aiShortCode = aiShortCode;
        this.aiQualifiers = aiQualifiers;
        this.shortCodeToNumeric = shortCodeToNumeric;
        this.tableP = tableP;
        this.tableF = tableF;
        this.tableOpt = tableOpt;
        this.safeBase64Alphabet = safeBase64Alphabet;
        this.hexAlphabet = hexAlphabet;

        this.AIsByLength = [];
        for (let i = 2; i <= 4; i++) {
            this.AIsByLength[i] = getAIs(aitable.filter(byLength(i)));
        }

        this.groupSeparator = String.fromCharCode(29);

        this.regexAllNum = regexAllNum;
        this.regexSafe64 = regexSafe64;

    }


    numberOfLengthBits(maxLength) {
        return Math.ceil(Math.log(maxLength) / Math.log(2) + 0.01);
    }

    numberOfValueBits(valueLength) {
        return Math.ceil(valueLength * Math.log(10) / Math.log(2) + 0.01);
    }


    // calculate the expected GS1 Check Digit for a given AI
    // e.g. calculateCheckDigit('01','01234567890128');
    calculateCheckDigit(ai, gs1IDValue) {
        let counter = 0;
        let total = 0;
        let l;
        if (this.aiCheckDigitPosition[ai] === "L") {
            l = gs1IDValue.length;
        } else {
            l = parseInt(this.aiCheckDigitPosition[ai]);
        }
        let multiplier;
        for (let i = l - 2; i >= 0; i--) {
            let d = gs1IDValue.substring(i, (i + 1));
            if ((counter % 2) === 0) {
                multiplier = 3;
            } else {
                multiplier = 1;
            }
            total += (d * multiplier);
            counter++;
        }
        return (10 - (total % 10)) % 10;
    }

    // returns true if the GS1 Check Digit is valid (or not applicable)
    // throws an error if an invalid check digit is present
    // e.g. verifyCheckDigit('01','01234567890128');
    verifyCheckDigit(ai, gs1IDValue) {
        let expectedCheckDigit;
        let rv = true;

        let checkDigitPosition = this.aiCheckDigitPosition[ai];
        if (checkDigitPosition !== undefined) {
            expectedCheckDigit = this.calculateCheckDigit(ai, gs1IDValue);
            if (checkDigitPosition === "L") {
                checkDigitPosition = gs1IDValue.length;
            } else {
                checkDigitPosition = parseInt(checkDigitPosition);
            }
            let actualCheckDigit = parseInt(gs1IDValue.charAt(checkDigitPosition - 1));

            if (actualCheckDigit !== expectedCheckDigit) {
                throw new Error("INVALID CHECK DIGIT:  An invalid check digit was found for the primary identification key (" + ai + ")" + gs1IDValue + " ; the correct check digit should be " + expectedCheckDigit + " at position " + checkDigitPosition);
            }

        }
        return rv;
    }

    // tests the syntax of a value against the regular expression (expected format)
    // throws an error when invalid syntax is detected
    // e.g. verifySyntax('01','01234567890128');
    verifySyntax(ai, value) {
        if ((ai !== null) && (this.regexAllNum.test(ai))) {
            if (!(this.aiRegex[ai].test(value))) {
                throw "SYNTAX ERROR: invalid syntax for value of (" + ai + ")" + value;
            }
        }
    }

    // method to percent-encode all reserved characters mentioned in the GS1 Digital Link standard
    percentEncode(input) {
        let charsToEscape = "#/%&+,!()*':;<=>?";
        let escaped = [];
        for (let i = 0; i < input.length; i++) {
            let testChar = input.substring(i, i + 1);
            if (charsToEscape.indexOf(testChar) > -1) {
                escaped.push("%" + testChar.charCodeAt(0).toString(16).toUpperCase());
            } else {
                escaped.push(testChar);
            }
        }
        return escaped.join("");
    }

    // method to percent-decode all percent-encoded characters
    percentDecode(input) {
        return decodeURIComponent(input);
    }

    padToLength(input, requiredLength) {
        if (input.length < requiredLength) {
            input = "0".repeat(requiredLength - input.length) + input;
        }
        return input;
    }

    base642bin(base64str) {
        let rv = "";
        for (let i = 0; i < base64str.length; i++) {
            // let dec = this.safeBase64Alphabet.indexOf(base64str.substr(i, 1));
            let dec = this.safeBase64Alphabet.indexOf(base64str.substring(i, i + 1));
            let bin = dec.toString(2);
            if (bin.length < 6) {
                bin = "0".repeat(6 - bin.length) + bin;
            }
            rv += bin;
        }

        return rv;
    }

    binstrToHex(binstr) {
        return parseInt(binstr, 2).toString(16).toUpperCase();
    }


    // this method will convert either a bracketed element string or an unbracketed element string into an associative array
    // input could be "(01)05412345000013(3103)000189(3923)2172(10)ABC123";
    // or input could be "3103000189010541234500001339232172"+groupSeparator+"10ABC123";
    extractFromGS1elementStrings(elementStrings) {


        // remove symbology identifier if present
        // remove ]C1 or ]e0 or ]d2 or ]Q3
        elementStrings = elementStrings.replace(/^(]C1|]e0|]d2|]Q3)/, '');
        let elementStringsLength = elementStrings.length;

        const fixedLengths = {
            "00": 20,
            "01": 16,
            "02": 16,
            "03": 16,
            "04": 18,
            "11": 8,
            "12": 8,
            "13": 8,
            "14": 8,
            "15": 8,
            "16": 8,
            "17": 8,
            "18": 8,
            "19": 8,
            "20": 4,
            "31": 10,
            "32": 10,
            "33": 10,
            "34": 10,
            "35": 10,
            "36": 10,
            "41": 16
        }
        const fixedLengthAIs = Object.keys(fixedLengths);
        const gs = String.fromCharCode(29);
        let cursor = 0;
        let buffer = [];

        // is any data present?

        do {

            // are the first two digits in table of fixedLengths
            // let firstTwoDigits = elementStrings.substr(cursor, 2)
            let firstTwoDigits = elementStrings.substring(cursor, cursor + 2)

            if (fixedLengthAIs.indexOf(firstTwoDigits) > -1) {
                // the first two digits are within the array of GS1 Application Identifiers of defined fixed length

                // extract the AI and value to the buffer
                let l = fixedLengths[firstTwoDigits];
                // buffer.push(elementStrings.substr(cursor, l));
                buffer.push(elementStrings.substring(cursor, cursor + l));
                cursor += l;

                // if the next character is the group separator, move past it
                if (elementStrings.substring(cursor, cursor + 1) === gs) {
                    cursor++;
                }


            } else {
                // the first two digits are not within the array of GS1 Application Identifiers of defined fixed length

                // if string contains group separator
                let gsloc = elementStrings.substring(cursor).indexOf(gs);
                if (gsloc > -1) {
                    // extract the AI and value up to the group separator to the buffer
                    buffer.push(elementStrings.substring(cursor).substring(0, gsloc));
                    cursor += gsloc;
                    cursor++;

                } else {
                    // extract the AI and value to the buffer
                    buffer.push(elementStrings.substring(cursor));
                    cursor = elementStringsLength;
                }

            }

        } while (cursor < elementStringsLength);


        // process the buffer;

        let obj = {};
        let aiCandidate = "";
        let matched = false;
        for (let i = 0; i < buffer.length; i++) {
            let el = buffer[i];

            for (let k = 2; k <= 4; k++) {
                aiCandidate = el.substring(0, k);
                if (this.AIsByLength[k].indexOf(aiCandidate) > -1) {
                    obj[aiCandidate] = el.substring(k);
                    matched = true;
                }
            }

            if (!matched) {
                throw new Error("No matching GS1 AI found for " + el);
            }
        }

        return obj;
        // }
    }

    // this method converts an associative array of GS1 Application Identifiers and their values into a GS1 Digital Link URI
    // set useShortText = true if you wish to use alphabetic mnemonic short names, e.g. /gtin/ instead of /01/
    // set uriStem to a value e.g. 'https://example.org' if you wish to use a specific domain name
    // setting uriStem to null, undefined or "" defaults to 'https://id.gs1.org' as the reference domain
    buildGS1digitalLink(gs1AIarray, useShortText, uriStem, nonGS1keyvaluePairs) {
        let identifiers = [];
        let qualifiers = [];
        let attributes = [];
        let otherKeys = [];

        let path = "";
        let queryStringArray = [];
        let queryString = "";
        let webURI = "";
        let canonicalStem = "https://id.gs1.orgx";

        // Need to remove unwanted trailing slash
        if ((uriStem !== undefined) && (uriStem !== null) && (uriStem !== "") && (uriStem.endsWith("/"))) {
            uriStem = uriStem.substring(0, uriStem.length - 1) + path + queryString;
        }


        for (let a in gs1AIarray) {
            let other = true;
            if (this.aiMaps.identifiers.includes(a)) {
                identifiers.push(a);
                other = false;
            }
            if (this.aiMaps.qualifiers.includes(a)) {
                qualifiers.push(a);
                other = false;
            }
            if (this.aiMaps.dataAttributes.includes(a)) {
                attributes.push(a);
                other = false;
            }
            if (this.aiMaps.fixedLength.includes(a)) {
                other = false;
            }
            if (this.aiMaps.variableLength.includes(a)) {
                other = false;
            }
            if (other) {
                otherKeys.push(a);
            }
        }

        // Start building Web URI path expression
        // need exactly one identifier key

        if (identifiers.length !== 1) {
            throw new Error("The element string should contain exactly one primary identification key - it contained " + identifiers.length + " " + JSON.stringify(identifiers) + "; please check for a syntax error");
        } else {

            this.verifySyntax(identifiers[0], gs1AIarray[identifiers[0]]);


            this.verifyCheckDigit(identifiers[0], gs1AIarray[identifiers[0]]);


            if (useShortText) {
                // Using short text names
                if (this.aiShortCode[identifiers[0]] !== undefined) {
                    path = "/" + this.aiShortCode[identifiers[0]] + "/" + this.percentEncode(gs1AIarray[identifiers[0]]);
                } else {
                    path = "/" + identifiers[0] + "/" + this.percentEncode(gs1AIarray[identifiers[0]]);
                }
            } else {
                // Using numeric AIs
                path = "/" + identifiers[0] + "/" + this.percentEncode(gs1AIarray[identifiers[0]]);
            }

            // append any data qualifiers in the expected order, as specified in this.aiQualifiers[identifiers[0]]

            if (this.aiQualifiers[identifiers[0]] !== undefined) {
                for (let j in this.aiQualifiers[identifiers[0]]) {
                    let q = this.aiQualifiers[identifiers[0]][j]
                    if (qualifiers.includes(q)) {

                        if (useShortText) {
                            // Using short text names
                            if (this.aiShortCode[q] !== undefined) {
                                path += "/" + this.aiShortCode[q] + "/" + this.percentEncode(gs1AIarray[q]);
                            } else {
                                path += "/" + q + "/" + this.percentEncode(gs1AIarray[q]);
                            }
                        } else {
                            // Using numeric AIs
                            path += "/" + q + "/" + this.percentEncode(gs1AIarray[q]);
                        }

                    }
                }
            }

            // if there are any data attributes, we need to add these to the query string

            if (attributes.length > 0) {

                for (let k in attributes) {
                    let a = attributes[k];

                    if (useShortText) {
                        // Using short text names
                        if (this.aiShortCode[a] !== undefined) {
                            queryStringArray.push(this.aiShortCode[a] + "=" + this.percentEncode(gs1AIarray[a]));
                        } else {
                            queryStringArray.push(a + "=" + this.percentEncode(gs1AIarray[a]));
                        }
                    } else {
                        // Using numeric AIs
                        queryStringArray.push(a + "=" + this.percentEncode(gs1AIarray[a]));
                    }
                }
                queryString = "?" + queryStringArray.join("&");


            }

            if ((uriStem === null) || (uriStem === "")) {
                // prepare a canonical Web URI
                webURI = canonicalStem + path + queryString;
            } else {
                webURI = uriStem + path + queryString;
            }

            if (otherKeys.length > 0) {
                let queryStringArray = [];
                for (let iok in otherKeys) {
                    queryStringArray.push(otherKeys[iok] + "=" + gs1AIarray[otherKeys[iok]]);
                }
                if (queryString === "") {
                    webURI += "?" + queryStringArray.join("&");
                } else {
                    webURI += "&" + queryStringArray.join("&");
                }
            }

            if (Object.keys(nonGS1keyvaluePairs) && Object.keys(nonGS1keyvaluePairs).length > 0) {
                let queryStringArray = [];
                let keys = Object.keys(nonGS1keyvaluePairs);
                for (let iok in keys) {
                    let key = keys[iok];
                    queryStringArray.push(key + "=" + nonGS1keyvaluePairs[key]);
                }
                if (queryString === "") {
                    webURI += "?" + queryStringArray.join("&");
                } else {
                    webURI += "&" + queryStringArray.join("&");
                }
            }


        }


        return webURI;
    }


    // new method that converts a flat associative array of GS1 Application Identifiers and their values into a more structured object in which the primary identification key, key qualifiers, data attributes and other key=value pairs from the URI string are clearly identified as such.
    buildStructuredArray(gs1AIarray, otherArray) {
        let keys = ["identifiers", "qualifiers", "dataAttributes"];
        let map = {};
        map.identifiers = [];
        map.qualifiers = [];
        map.dataAttributes = [];
        map.other = [];
        for (let a in gs1AIarray) {
            let b = {};
            b[a] = gs1AIarray[a];
            let other = true;

            for (let k in keys) {
                if (this.aiMaps[keys[k]].includes(a)) {
                    map[keys[k]].push(b);
                    other = false;
                }
            }

            if (other) {
                map.other.push(b);
            }
        }

        for (let a in otherArray) {
            let b = {};
            b[a] = otherArray[a];
            map.other.push(b);
        }

        // need exactly one identifier key
        if (map.identifiers.length !== 1) {
            throw new Error("The element string should contain exactly one primary identification key - it contained " + map.identifiers.length + " " + JSON.stringify(map.identifiers) + "; please check for a syntax error");
        } else {
            this.verifySyntax(map.identifiers[0], gs1AIarray[map.identifiers[0]]);
            this.verifyCheckDigit(map.identifiers[0], gs1AIarray[map.identifiers[0]]);
        }
        return map;
    }


    analyseURI(gs1DigitalLinkURI, extended) {
        let rv = {};

        rv.fragment = "";
        let fi = gs1DigitalLinkURI.indexOf("#");

        let beforeFragment = gs1DigitalLinkURI;

        if (fi > -1) {
            rv.fragment = gs1DigitalLinkURI.substring(1 + fi);
            beforeFragment = gs1DigitalLinkURI.substring(0, fi);
        }

        rv.queryString = "";

        let beforeQueryString = beforeFragment;
        let qs = beforeFragment.indexOf("?");
        if (qs > -1) {
            rv.queryString = beforeFragment.substring(1 + qs);
            beforeQueryString = beforeFragment.substring(0, qs);
        }

        // disregard any trailing forward slash
        let bql = beforeQueryString.length;
        if (beforeQueryString.substring(bql - 1, bql) === "/") {
            beforeQueryString = beforeQueryString.substring(0, bql - 1);
        }

        let cursor = 0;
        if (beforeQueryString.indexOf("http://") === 0) {
            cursor = 7
        }
        if (beforeQueryString.indexOf("https://") === 0) {
            cursor = 8
        }

        let protocol = beforeQueryString.substring(0, cursor);
        let afterProtocol = beforeQueryString.substring(cursor);

        let firstSlashOfAllPath = afterProtocol.indexOf("/");

        let pathInfo = afterProtocol.substring(1 + firstSlashOfAllPath);

        rv.uriPathInfo = "/" + pathInfo;

        let domain = afterProtocol.substring(0, firstSlashOfAllPath);

        let pathComponents = pathInfo.split("/");


        // iterate through pathComponents to find the path component corresponding to a primary GS1 ID key
        let relevantPathComponents = [];
        let uriStemPathComponents = [];
        let pcr = pathComponents.reverse();
        let searching = true;
        let numericPrimaryIdentifier = "";
        for (let i in pcr) {
            let numkey = "";
            let pcc = pcr[i];
            if (this.regexAllNum.test(pcc)) {
                numkey = pcc;
            } else {
                if (this.shortCodeToNumeric.hasOwnProperty(pcc)) {
                    numkey = this.shortCodeToNumeric[pcc];
                }
            }

            if ((numkey !== "") && searching) {
                if (this.aiMaps.identifiers.indexOf(numkey) > -1) {
                    searching = false;
                    numericPrimaryIdentifier = numkey;
                    relevantPathComponents = pcr.slice(0, (parseInt(i) + 1)).reverse();
                    uriStemPathComponents = pcr.slice(parseInt(i) + 1).reverse();
                }
            }
        }

        if (relevantPathComponents.length > 0) {
            rv.pathComponents = "/" + relevantPathComponents.join("/");
        } else {
            rv.pathComponents = "";
        }

        if (uriStemPathComponents.length > 0) {
            rv.uriStem = protocol + domain + "/" + uriStemPathComponents.join("/");
        } else {
            rv.uriStem = protocol + domain;
        }


        // if semicolon was used as delimiter between key=value pairs, replace with ampersand as delimiter
        rv.queryString = rv.queryString.replace(new RegExp(";", 'g'), "&");


        // process URI path information
        let pathCandidates = {};
        let pathElements = pathInfo.split("/");
        let l = pathElements.length;
        let pathElementIndex = l - 2;
        while (pathElementIndex >= 0) {
            pathCandidates[pathElements[pathElementIndex]] = this.percentDecode(pathElements[1 + pathElementIndex]);
            pathElementIndex -= 2;
        }

        let queryStringCandidates = {};
        if (rv.queryString !== "") {

            let pairs = rv.queryString.split("&");
            for (let i = 0; i < pairs.length; i++) {
                let p = pairs[i].split("=");
                if ((p[0] !== null) && (p[1] !== null)) {

                    if (this.shortCodeToNumeric.hasOwnProperty(p[0])) {
                        queryStringCandidates[this.shortCodeToNumeric[p[0]]] = this.percentDecode(p[1]);
                        delete queryStringCandidates[p[0]];
                    } else {
                        queryStringCandidates[p[0]] = this.percentDecode(p[1]);
                    }

                }
            }
        }


        rv.pathCandidates = pathCandidates;
        rv.queryStringCandidates = queryStringCandidates;

        rv.detected = "";

        rv.uncompressedPath = "";
        rv.compressedPath = "";
        rv.structuredOutput = "";

        if ((relevantPathComponents.length > 0) && ((relevantPathComponents.length % 2) === 0)) {
            if (this.aiRegex[numericPrimaryIdentifier].test(relevantPathComponents[1])) {
                rv.detected = "uncompressed GS1 Digital Link";

                rv.uncompressedPath = "/" + relevantPathComponents.join("/");


                if (extended) {
                    let extracted = this.extractFromGS1digitalLink(gs1DigitalLinkURI);
                    let gs1AIarray = extracted.GS1;
                    let otherArray = extracted.other;
                    rv.structuredOutput = this.buildStructuredArray(gs1AIarray, otherArray);
                    rv.elementStringsOutput = this.gs1digitalLinkToGS1elementStrings(gs1DigitalLinkURI, true);
                }
            }
        }

        if ((relevantPathComponents.length === 3) && (this.regexSafe64.test(relevantPathComponents[2]))) {
            if (this.aiRegex[numericPrimaryIdentifier].test(relevantPathComponents[1])) {
                rv.detected = "partially compressed GS1 Digital Link";
                rv.uncompressedPath = "/" + relevantPathComponents.slice(0, 2).join("/");
                rv.compressedPath = relevantPathComponents[2];

                if (extended) {
                    let extracted = this.extractFromCompressedGS1digitalLink(gs1DigitalLinkURI);
                    let gs1AIarray = extracted.GS1;
                    let otherArray = extracted.other;
                    rv.structuredOutput = this.buildStructuredArray(gs1AIarray, otherArray);
                    rv.elementStringsOutput = this.gs1compressedDigitalLinkToGS1elementStrings(gs1DigitalLinkURI, true);
                }
            }
        }

        if ((rv.detected === "") && (this.regexSafe64.test(pcr[0])) && (protocol !== "")) {
            rv.detected = "fully compressed GS1 Digital Link";
            rv.uncompressedPath = "";
            rv.compressedPath = pcr[0];

            if (extended) {
                let extracted = this.extractFromCompressedGS1digitalLink(gs1DigitalLinkURI);
                let gs1AIarray = extracted.GS1;
                let otherArray = extracted.other;
                rv.structuredOutput = this.buildStructuredArray(gs1AIarray, otherArray);
                rv.elementStringsOutput = this.gs1compressedDigitalLinkToGS1elementStrings(gs1DigitalLinkURI, true);
            }
        }

        return rv;
    }


    // this method converts a GS1 Digital Link URI into an associative array of GS1 Application Identifiers and their values
    // it is the inverse function of buildGS1gs1DigitalLinkURI(gs1AIarray,useShortText,uriStem)
    extractFromGS1digitalLink(gs1DigitalLinkURI) {
        // initialise internal variables
        let obj = {};
        let rv = {};

        let s = this.analyseURI(gs1DigitalLinkURI, false);
        let pathCandidates = s.pathCandidates;
        let queryStringCandidates = s.queryStringCandidates;
        let nonGS1queryStringCandidates = {};

        // merge pathCandidates and queryStringCandidates into a combined associative array, candidates
        let candidates = Object.assign({}, pathCandidates, queryStringCandidates);

        // process candidates;
        for (let k in candidates) {
            if (candidates.hasOwnProperty(k)) {
                if (!(this.regexAllNum.test(k))) {
                    // for keys that are not all-numeric, attempt to convert to all-numeric AI equivalent
                    if (this.shortCodeToNumeric.hasOwnProperty(k)) {
                        let numkey = this.shortCodeToNumeric[k];
                        candidates[numkey] = candidates[k];
                        delete candidates[k];
                    } else {
                        // or otherwise remove from candidates map if it doesn't relate to a GS1 Application Identifier
                        nonGS1queryStringCandidates[k] = candidates[k];
                        delete candidates[k];

                    }
                }
            }
        }

        for (let k in candidates) {
            if (candidates.hasOwnProperty(k)) {
                this.verifySyntax(k, candidates[k]);
                this.verifyCheckDigit(k, candidates[k]);
                obj[k] = padGTIN(k, candidates[k]);
            }
        }

        rv.GS1 = obj;
        rv.other = nonGS1queryStringCandidates;

        return rv;


        function padGTIN(ai, value) {
            // always pad the value of any GTIN [ AI (01) or (02) ] to 14 digits in element string representation
            let newvalue = value;
            if ((ai === "01") || (ai === "(01)") || (ai === "02") || (ai === "(02)")) {
                if (value.length === 8) {
                    newvalue = '000000' + value;
                }
                if (value.length === 12) {
                    newvalue = '00' + value;
                }
                if (value.length === 13) {
                    newvalue = '0' + value;
                }
            }
            return newvalue;
        }


    }


    // this method converts a GS1 Digital Link URI into an associative array of GS1 Application Identifiers and their values
    // it is the inverse function of buildGS1gs1DigitalLinkURI(gs1AIarray,useShortText,uriStem)
    extractFromCompressedGS1digitalLink(gs1DigitalLinkURI) {
        // initialise internal variables
        let objGS1;
        let rv = {};

        // set cursor to 0 = start reading from the left-most part of the gs1 Digital Link URI provided as input
        let s = this.analyseURI(gs1DigitalLinkURI, false);

        let queryString = s.queryString;
        let uriPathInfo = s.uriPathInfo;
        let nonGS1queryStringCandidates = {};

        if (queryString !== "") {
            // if semicolon was used as delimiter between key=value pairs, replace with ampersand as delimiter
            queryString = queryString.replace(new RegExp(";", 'g'), "&");

            let firstFragment = queryString.indexOf("#");
            if (firstFragment > -1) {
                queryString = queryString.substring(0, firstFragment);
            }

            let pairs = queryString.split("&");
            for (let i = 0; i < pairs.length; i++) {
                let p = pairs[i].split("=");
                // if the key is not numeric AND is not a shortcode such as exp or expdt, then add to the nonGS1keyvalueePairs
                if ((p[0] !== null) && (p[1] !== null) && (!(this.regexAllNum.test(p[0])) && (!(this.shortCodeToNumeric.hasOwnProperty(p[0]))))) {
                    nonGS1queryStringCandidates[p[0]] = this.percentDecode(p[1]);
                }
            }
        }

        // TODO for a partially compressed http://example.org/AQnYUc1gmiERBhQ0ytiyZuAGOLc1TQ?expdt=1903061658&k1=v1
        // expdt:1903061658 is appearing in queryStringCandidates

        // TODO also for fully compressed http://example.org/AQnYUc1gmiERBhQ0ytiyZuAGOLc1TXhXsaXbQKHFuaprwUmrBX6g
        // expdt:1903061658 is appearing in queryStringCandidates

        // TODO correct splitURIintoComponents to consider shortCode appearing within query string key=value pairs

        // remove initial forward slash
        uriPathInfo = uriPathInfo.substring(1);

        if (this.regexSafe64.test(uriPathInfo)) {
            let binstr = this.base642bin(uriPathInfo);
            objGS1 = this.decompressBinaryToGS1AIarray(binstr);
        } else {
            // handle situation where the primary identification key is not compressed
            let index1 = uriPathInfo.indexOf("/");
            let index2 = uriPathInfo.lastIndexOf("/");
            let gs1primaryKey = uriPathInfo.substring(0, index1);
            let base64segment = uriPathInfo.substring(1 + index2);
            let gs1primaryKeyValue = uriPathInfo.substring(1 + index1, index2);
            objGS1 = this.decompressBinaryToGS1AIarray(this.base642bin(base64segment));
            if (this.regexAllNum.test(gs1primaryKey)) {
                objGS1[gs1primaryKey] = gs1primaryKeyValue;
            } else {
                if (this.shortCodeToNumeric.hasOwnProperty(gs1primaryKey)) {
                    objGS1[this.shortCodeToNumeric[gs1primaryKey]] = gs1primaryKeyValue;
                }
            }
        }


        // insert into associative array return value any key=value pairs from the URI query string that were not compressed
        for (let k in objGS1) {
            // need to change this to check whether key is exp / expdt or numeric GS1 key - see related method ~ refactor lines 951-967
            /*			if ((this.regexAllNum.test(k)) || (this.shortCodeToNumeric.hasOwnProperty(k))) {
                            objGS1[this.shortCodeToNumeric[k]]=objGS1[k];
                        } else {
                            objOther[k]=objGS1[k];
                        }
            */

            // TODO correct decompressBinaryToGS1AIarray so that expdt and 7003 do not both appear in the returned arrayc

            // if the key is not all-numeric and is not exp or expdt, then move it into objOther and delete from objGS1
            if (!(this.regexAllNum.test(k)) && (!(this.shortCodeToNumeric.hasOwnProperty(k)))) {
                nonGS1queryStringCandidates[k] = objGS1[k];
                delete objGS1[k];
            }

        }


        rv.GS1 = objGS1;
        rv.other = nonGS1queryStringCandidates;

        return rv;

    }


    // this method converts an associative array of GS1 Application Identifiers and their values into concatenated GS1 element strings
    // set brackets=true if you want a human-readable concatenation with round brackets around GS1 Application Identifiers
    // set brackets=false if you don't; in this case the group separator will be used to mark the end of any field that is not defined length, except for the last element string in the concatenation
    buildGS1elementStrings(gs1AIarray, brackets) {
        // if brackets=true, use GS1 Digital Link ordering - identifier, qualifiers then data attributes in numeric order

        let identifiers = [];
        let qualifiers = [];
        let attributes = [];
        let fixedLengthValues = [];
        let variableLengthValues = [];
        let elementStrings = [];

        for (let a in gs1AIarray) {
            if (gs1AIarray.hasOwnProperty(a)) {
                if (this.aiMaps.identifiers.includes(a)) {
                    identifiers.push(a);
                }
                if (this.aiMaps.qualifiers.includes(a)) {
                    qualifiers.push(a);
                }
                if (this.aiMaps.dataAttributes.includes(a)) {
                    attributes.push(a);
                }
                if (this.aiMaps.fixedLength.includes(a)) {
                    fixedLengthValues.push(a);
                }
                if (this.aiMaps.variableLength.includes(a)) {
                    variableLengthValues.push(a);
                }

            }
        }


        if (brackets === true) {

            if (identifiers.length !== 1) {
                throw new Error("The associative array should contain exactly one primary identification key - it contained " + identifiers.length + " " + JSON.stringify(identifiers) + "; please check for a syntax error");
            } else {

                this.verifySyntax(identifiers[0], gs1AIarray[identifiers[0]]);
                this.verifyCheckDigit(identifiers[0], gs1AIarray[identifiers[0]]);

                elementStrings = elementStringsPush(elementStrings, "(" + identifiers[0] + ")", gs1AIarray[identifiers[0]], "");

                // append any valid found qualifiers for that primary identifier to the elementStrings array

                if (this.aiQualifiers.hasOwnProperty(identifiers[0])) {
                    let qualifiersForPrimary = this.aiQualifiers[identifiers[0]];

                    for (let qindex in qualifiersForPrimary) {
                        if (qualifiers.indexOf(qualifiersForPrimary[qindex]) > -1) {
                            elementStrings = elementStringsPush(elementStrings, "(" + qualifiersForPrimary[qindex] + ")", gs1AIarray[qualifiersForPrimary[qindex]], "");

                        }
                    }
                }

                // append any found attributes to the elementStrings array
                let sortedAttributes = attributes.sort();
                for (let a in sortedAttributes) {
                    elementStrings = elementStringsPush(elementStrings, "(" + attributes[a] + ")", gs1AIarray[attributes[a]], "");
                }
            }

        } else {
            // if brackets=false, concatenate defined-length AIs first, then variable-length AIs
            // identify which AIs in gs1AIarray are defined fixed length

            let fixedLengthPrimaryIdentifier = [];
            let fixedLengthValuesOther = fixedLengthValues.slice(0);

            for (let i of fixedLengthValuesOther) {
                if (identifiers.indexOf(fixedLengthValuesOther[i]) > -1) {
                    fixedLengthPrimaryIdentifier.push(fixedLengthValuesOther[i]);
                    fixedLengthValuesOther.splice(i, 1);
                }
            }

            for (let i in fixedLengthPrimaryIdentifier) {
                elementStrings = elementStringsPush(elementStrings, fixedLengthPrimaryIdentifier[i], gs1AIarray[fixedLengthPrimaryIdentifier[i]], "");

            }

            for (let i in fixedLengthValuesOther) {
                elementStrings = elementStringsPush(elementStrings, fixedLengthValuesOther[i], gs1AIarray[fixedLengthValuesOther[i]], "");
            }

            for (let i in variableLengthValues) {
                let gs = "";
                if (i < (variableLengthValues.length - 1)) {
                    gs = this.groupSeparator;
                }
                elementStrings = elementStringsPush(elementStrings, variableLengthValues[i], gs1AIarray[variableLengthValues[i]], gs);
            }

        }

        return elementStrings.join("");


        function elementStringsPush(elementStrings, ai, value, gs) {
            let newvalue = value;
            // always pad the value of any GTIN [ AI (01) or (02) ] to 14 digits in element string representation
            if ((ai === "01") || (ai === "(01)") || (ai === "02") || (ai === "(02)")) {
                if (value.length === 8) {
                    newvalue = '000000' + value;
                }
                if (value.length === 12) {
                    newvalue = '00' + value;
                }
                if (value.length === 13) {
                    newvalue = '0' + value;
                }
            }
            elementStrings.push(ai + newvalue + gs);
            return elementStrings;
        }

    }


    // translate a string of concatenated GS1 element strings into a GS1 Digital Link URI
    gs1ElementStringsToGS1DigitalLink(elementString, useShortText, uriStem) {
        return this.buildGS1digitalLink(this.extractFromGS1elementStrings(elementString), useShortText, uriStem, {});
    }

    // translate a GS1 Digital Link URI into a string of concatenated GS1 element strings
    gs1digitalLinkToGS1elementStrings(digitalLinkURI, brackets) {
        return this.buildGS1elementStrings(this.extractFromGS1digitalLink(digitalLinkURI).GS1, brackets);
    }

    // translate a GS1 Digital Link URI into a string of concatenated GS1 element strings
    gs1compressedDigitalLinkToGS1elementStrings(digitalLinkURI, brackets) {
        return this.buildGS1elementStrings(this.extractFromCompressedGS1digitalLink(digitalLinkURI).GS1, brackets);
    }

    handleDecodings(enc, binstr, cursor, gs1AIarray, key, numChars) {
        // starting with a specified encoding enc (in range 0-4), binary string binstr, binary string cursor position, key, number of characters to extract and associative array gs1AIarray to extend,
        // this method determines how many bits to extract (depending on the encoding), extracts those bits, advances the cursor and converts the extracted bits into a string value in the appropriate encoding, which is then inserted into the specified associative array
        // the updated associative array and updated binary string cursor position are returned.

        let rv = {};

        switch (enc) {
            case 0:
                // digits only at 3.32 bits per character
                let numBitsForValue = this.numberOfValueBits(numChars);
                let rbv = binstr.substring(cursor, cursor + numBitsForValue);
                cursor += numBitsForValue;
                let s = parseInt(rbv, 2).toString();
                gs1AIarray[key] = s;
                break;

            case 1:
                // lower case hexadecimal characters
                rv = buildString(numChars, this.hexAlphabet, cursor, 4, binstr);
                cursor = rv.cursor;
                gs1AIarray[key] = rv.s.toLowerCase();
                break;

            case 2:
                // upper case hexadecimal characters
                rv = buildString(numChars, this.hexAlphabet, cursor, 4, binstr);
                cursor = rv.cursor;
                gs1AIarray[key] = rv.s.toUpperCase();
                break;

            case 3:
                // URI safe base64 alphabet at 6 bits per character
                rv = buildString(numChars, this.safeBase64Alphabet, cursor, 6, binstr);
                cursor = rv.cursor;
                gs1AIarray[key] = rv.s;
                break;

            case 4 :
                // ASCII at 7 bits per character
                rv = buildString(numChars, null, cursor, 7, binstr);
                cursor = rv.cursor;
                gs1AIarray[key] = rv.s;
                break;

        }
        rv.gs1AIarray = gs1AIarray;
        rv.cursor = cursor;
        return rv;

        function buildString(numChars, alphabet, cursor, multiplier, binstr) {
            // this is almost the inverse function to buildBinaryValue

            let rv = {};
            let s = "";
            let numBitsForValue = multiplier * numChars;
            let rbv = binstr.substring(cursor, cursor + numBitsForValue);
            cursor += numBitsForValue;
            for (let i = 0; i < numChars; i++) {
                let index = parseInt(rbv.substring(multiplier * i, multiplier * (i + 1)), 2);
                // assume 6 bits encode an index 0-63 within the URI-safe base 64 alphabet
                if (multiplier === 7) {
                    s += String.fromCharCode(parseInt(index));
                } else {
                    s += alphabet.substring(index, index + 1);
                }
            }
            rv.cursor = cursor;
            rv.s = s;
            return rv;
        }

    }


    decompressBinaryToGS1AIarray(binstr) {
        let totallength = binstr.length;
        // start at left-most bit position
        let cursor = 0;

        // create empty hashtable
        let gs1AIarray = {};

        // read h1,h2 and convert binary to hex
        while ((totallength - cursor) > 8) {

            let h1 = this.binstrToHex(binstr.substring(cursor, cursor + 4));
            let h2 = this.binstrToHex(binstr.substring(4 + cursor, cursor + 8));
            let h3 = "";
            let ai = "";

            let h1h2 = "" + h1 + h2;
            cursor += 8;

            let d1 = parseInt(h1, 16);
            let d2 = parseInt(h2, 16);

            // check if h1h2 is within the range 00-99
            if ((d1 >= 0) && (d2 >= 0) && (d1 <= 9) && (d2 <= 9)) {

                // check if h1h2 has entry in table P
                if (this.tableP.hasOwnProperty(h1h2)) {
                    let l = this.tableP[h1h2];

                    if (l === 2) {
                        ai = h1h2;
                    }
                    if ((l === 3) || (l === 4)) {
                        h3 = this.binstrToHex(binstr.substring(cursor, cursor + 4));
                        cursor += 4;
                        let d3 = parseInt(h3, 16);
                        if (d3 > 9) {
                            throw new Error("GS1 Application Identifier keys should be all-numeric; " + h1h2 + h3 + " is not all-numeric");
                        }
                        ai = h1h2 + h3;
                    }
                    if (l === 4) {
                        let h4 = this.binstrToHex(binstr.substring(cursor, cursor + 4));
                        cursor += 4;
                        ai = h1h2 + h3 + h4;
                        let d4 = parseInt(h4, 16);
                        if (d4 > 9) {
                            throw new Error("GS1 Application Identifier keys should be all-numeric; " + h1h2 + h3 + h4 + " is not all-numeric");
                        }
                    }

                    let tmp = this.decodeBinaryValue(ai, gs1AIarray, binstr, cursor);
                    gs1AIarray = tmp.gs1AIarray;
                    cursor = tmp.cursor;

                } else {

                    throw new Error("Fail: Unsupported AI (reserved range) - no entry in tableP; h1h2=" + h1h2);
                }


            } else {

                // h1h2 is outside 00-99, using some hex characters

                if (this.tableOpt.hasOwnProperty(h1h2)) {
                    // we found an optimisation for h1h2

                    let seq = this.tableOpt[h1h2];
                    for (let i in seq) {
                        let ai = seq[i];
                        let tmp = this.decodeBinaryValue(ai, gs1AIarray, binstr, cursor);
                        gs1AIarray = tmp.gs1AIarray;
                        cursor = tmp.cursor;
                    }

                } else {

                    if (h1 === "F") {
                        // handle decompression of non-GS1 key=value pairs
                        // let keyLength = parseInt(binstr.substring(cursor - 4, 7), 2);
                        let keyLength = parseInt(binstr.substring(cursor - 4, cursor + 3), 2);
                        cursor += 3;  // 3 extra bits beyond h2

                        let keyBits = binstr.substring(cursor, cursor + 6 * keyLength);
                        cursor += 6 * keyLength;

                        let key = "";
                        for (let i = 0; i < keyLength; i++) {
                            let index = parseInt(keyBits.substring(6 * i, 6 * (i + 1)), 2);
                            // assume 6 bits encode an index 0-63 within the URI-safe base 64 alphabet
                            key += this.safeBase64Alphabet.substring(index, index + 1);
                        }

                        let encBits = binstr.substring(cursor, cursor + 3);
                        cursor += 3;
                        let enc = parseInt(encBits, 2);
                        let numChars = parseInt(binstr.substring(cursor, cursor + 7), 2);
                        cursor += 7;
                        let rv = this.handleDecodings(enc, binstr, cursor, gs1AIarray, key, numChars);


                        gs1AIarray = rv.gs1AIarray;
                        cursor = rv.cursor;

                    } else {
                        throw new Error("No optimisation defined for hex code hh=" + h1h2);
                    }


                }

            }


        }

        return gs1AIarray;
    }


    decodeBinaryValue(key, gs1AIarray, binstr, cursor) {
        let rv = {};
        gs1AIarray[key] = "";

        if (this.tableF.hasOwnProperty(key)) {
            for (let j in this.tableF[key]) {
                let tx = this.tableF[key][j];

                // handle fixed-length numeric component
                if ((tx.hasOwnProperty('L')) && (tx.E === "N")) {
                    // fixed-length, so no length indicator
                    let b1 = this.numberOfValueBits(tx.L);
                    let rbv = binstr.substring(cursor, cursor + b1);
                    cursor += b1;
                    let s = parseInt(rbv, 2).toString();
                    s = this.padToLength(s, tx.L);
                    gs1AIarray[key] += "" + s;
                }

                // handle variable-length numeric component
                if ((tx.hasOwnProperty('M')) && (tx.E === "N")) {
                    let v2 = this.numberOfLengthBits(tx.M);
                    let lengthBits = binstr.substring(cursor, cursor + v2);
                    cursor += v2;
                    let numDigits = parseInt(lengthBits, 2);
                    let numBitsForValue = this.numberOfValueBits(numDigits);
                    let rbv = binstr.substring(cursor, cursor + numBitsForValue);
                    cursor += numBitsForValue;
                    let s = parseInt(rbv, 2).toString();
                    gs1AIarray[key] += "" + s;
                }

                // handle fixed-length alphanumeric component
                if ((tx.hasOwnProperty('L')) && (tx.E === "X")) {
                    let encBits = binstr.substring(cursor, cursor + 3);
                    cursor += 3;
                    let enc = parseInt(encBits, 2);
                    let numChars = tx.L;
                    let rvd = this.handleDecodings(enc, binstr, cursor, gs1AIarray, key, numChars);
                    gs1AIarray = rvd.gs1AIarray;
                    cursor = rvd.cursor;
                }

                // handle variable-length alphanumeric component
                if ((tx.hasOwnProperty('M')) && (tx.E === "X")) {
                    let encBits = binstr.substring(cursor, cursor + 3);
                    cursor += 3;
                    let v3 = this.numberOfLengthBits(tx.M);
                    let lengthBits = binstr.substring(cursor, cursor + v3);
                    cursor += v3;
                    let numChars = parseInt(lengthBits, 2);
                    let enc = parseInt(encBits, 2);
                    let rvd = this.handleDecodings(enc, binstr, cursor, gs1AIarray, key, numChars);
                    gs1AIarray = rvd.gs1AIarray;
                    cursor = rvd.cursor;
                }

            }
        }
        rv.gs1AIarray = gs1AIarray;
        rv.cursor = cursor;
        return rv;
    }

    decompressGS1DigitalLink(compressedDigitalLinkURI, useShortText, uriStem) {
        let extracted = this.extractFromCompressedGS1digitalLink(compressedDigitalLinkURI);
        let gs1AIarray = extracted.GS1;
        let otherArray = extracted.other;
        // TODO do something with otherArray to add it to the URI query string
        // return uncompressedDL;
        return this.buildGS1digitalLink(gs1AIarray, useShortText, uriStem, otherArray);
    }
}
