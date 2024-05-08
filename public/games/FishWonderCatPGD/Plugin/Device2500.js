var orientationType = {
    horizontal: 0,
    vertical: 1,
    auto: 2,
}
var gd_orientationType = orientationType.auto;

class iOSDevice {
    constructor(name, height, width, ratio, statusHeight, homeHeight) {
        this.name = name;
        this.height = height;
        this.width = width;
        this.ratio = ratio;
        this.statusHeight = statusHeight;
        this.homeHeight = homeHeight;
    }
}

var iOSDeviceList = [
    new iOSDevice("iPhone 12", 844, 390, 3, 20, 34),
    new iOSDevice("iPhone 12 mini", 780, 360, 3, 20, 0),
    new iOSDevice("iPhone 12 Pro Max", 926, 428, 3, 20, 0),
    new iOSDevice("iPhone 6.5-inch", 896, 414, 3, 44, 34),
    new iOSDevice("iPhone 6.1-inch", 896, 414, 2, 20, 34),
    new iOSDevice("iPhone 5.8-inch", 812, 375, 3, 20, 34),
    new iOSDevice("iPhone XR 6.1-inch", 812, 375, 2, 20, 0),
    new iOSDevice("iPhone 5.5-inch", 736, 414, 3, 18, 0),
    new iOSDevice("iPhone 4.7-inch", 667, 375, 2, 20, 0),
    new iOSDevice("iPhone 4-inch", 568, 320, 2, 20, 0),
    new iOSDevice("iPhone 3.5-inch", 480, 320, 2, 20, 0),
    new iOSDevice("iPhone(Legacy) & iPod Touch", 480, 320, 1, 20, 0),
    new iOSDevice("iPad Pro 12.9-inch", 1366, 1024, 2, 20, 0),
    new iOSDevice("iPad Pro 10.5-inch", 1112, 834, 2, 20, 0),
    new iOSDevice("iPad Pro 11-inch", 1194, 834, 2, 20, 0),
    new iOSDevice("iPad 9.7-inch Retina", 1024, 768, 2, 20, 0),
    new iOSDevice("iPad", 1024, 768, 1, 20, 0),
    new iOSDevice("iPad 10.2-inch", 1080, 810, 2, 20, 0),
    new iOSDevice("iPad Mini Retina", 1024, 768, 2, 20, 0),
    new iOSDevice("iPad Mini", 1024, 768, 1, 20, 0),
    new iOSDevice("iPad 4", 1180, 820, 2, 20, 0),
];

function GetiOSDevice() {
    for (let device of iOSDeviceList) {
        if (screen.height === device.height && screen.width === device.width && window.devicePixelRatio === device.ratio) {

            /*  if(device.name == "iPhone 5.8-inch"){
                    let pieces = navigator.userAgent.match(/CriOS\/([0-9+][0-9+])/i);
                    if(pieces){
                        let chromeVersion = Number(pieces[1]);//回傳大版號

                        //若當前chrome版本大於v.87版本 (針對XS MAX)
                        if(chromeVersion >= 87){
                            device.statusHeight = 20;
                            device.homeHeight = 0;
                        }
                    }
                } */
            console.warn("device = ", device);
            return device;
        }
    }

    console.warn("not find device !!");
    return null;
}

function GetExitSwipeMsg(language) {
    if (language == "en") {
        return "If swiping does not work, please tap here. ❎";
    } else if (language == "es") {
        return "Si no se puede arrastrar para arriba, por favor toque aquí. ❎";
    }

    return "";
}