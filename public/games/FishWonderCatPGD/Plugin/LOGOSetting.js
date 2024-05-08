const gd_LOGO_LIST = ["playgd", "firestorm", "fireball", "888dragon", "magiccity"];
const gd_TITLE_LIST = ["GoldenDragon", "FireStorm", "fireball", "888Dragon", "Magic City"];

const gd_SA_URL = ["playwinmobi", "juegoseguros.com", "arcoiris", "mx_billonario", "cl_billonario", "cr_billonario", "juegoseguros.mx"]; //Domain 一樣時，則加入"_"區別subDomain Logo
const gd_SA_LOGO_LIST = ["playwinmobi", "juegoseguros", "arcoiris", "mx_billonario", "cl_billonario", "cr_billonario", "juegoseguros_mx"];
const gd_SA_TITLE_LIST = ["ChrisMoney", "JUEGO SEGUROS", "Arcoiris", "Billonario", "Billonario", "Billonario", "JUEGO SEGUROS MX"]; //Domain 一樣時，則加入"_"區別subDomain Logo

var gd_isSafari = / OS \d/.test(navigator.userAgent) && !~navigator.userAgent.indexOf('CriOS') && !navigator.userAgent.indexOf('Mozilla') && /Safari\/[\d\.]+$/.test(navigator.userAgent);
var gd_LogoMode = 0;
var gd_nowLOGO = "magiccity";

(function() {
    var isFound = false;
    for (var i = 0; i < gd_LOGO_LIST.length; i++) {
        if (location.hostname.indexOf(gd_LOGO_LIST[i]) != -1) {
            gd_nowLOGO = gd_LOGO_LIST[i];
            gd_LogoMode = i;
            document.title = gd_TITLE_LIST[i];
            isFound = true;
            break;
        }
    }
    if (isFound == false)
        for (var i = 0; i < gd_SA_URL.length; i++) {
            let domainName = gd_SA_URL[i];
            let subDomainName = "";
            let logoStrAry = domainName.split("_");
            let dns = domainName.indexOf(".") != -1 ? domainName.split(".")[1] : "";

            if (logoStrAry.length > 1) {
                subDomainName = logoStrAry[0];
                domainName = logoStrAry[1] + dns;
            }

            if (location.hostname.indexOf(domainName) != -1) {
                //若 SubDomain有值，則使用來做 Logo判斷
                if (subDomainName != "") {
                    if (location.hostname.indexOf(subDomainName) != -1) {} else continue;
                }

                gd_nowLOGO = gd_SA_LOGO_LIST[i];
                gd_LogoMode = i;
                document.title = gd_SA_TITLE_LIST[i];
                break;
            }
        }

})();