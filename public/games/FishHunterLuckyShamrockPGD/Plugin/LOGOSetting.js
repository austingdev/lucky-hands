var gd_LOGO_LIST = ["playgd", "firestorm", "fireball", "888dragon"],
    gd_TITLE_LIST = ["GoldenDragon", "firestorm", "fireball", "888Dragon"],
    gd_SA_URL = "playwinmobi juegoseguros.com arcoiris mx_billonario cl_billonario cr_billonario juegoseguros.mx".split(" "),
    gd_SA_LOGO_LIST = "playwinmobi juegoseguros arcoiris mx_billonario cl_billonario cr_billonario juegoseguros_mx".split(" "),
    gd_SA_TITLE_LIST = "ChrisMoney;JUEGO SEGUROS;Arcoiris;Billonario;Billonario;Billonario;JUEGO SEGUROS MX".split(";"),
    gd_isSafari = / OS \d/.test(navigator.userAgent) &&
    !~navigator.userAgent.indexOf("CriOS") && !navigator.userAgent.indexOf("Mozilla") && /Safari\/[\d\.]+$/.test(navigator.userAgent),
    gd_LogoMode = 0,
    gd_nowLOGO = "playgd";
(function() {
    for (var b = !1, a = 0; a < gd_LOGO_LIST.length; a++)
        if (-1 != location.hostname.indexOf(gd_LOGO_LIST[a])) {
            gd_nowLOGO = gd_LOGO_LIST[a];
            gd_LogoMode = a;
            document.title = gd_TITLE_LIST[a];
            b = !0;
            break
        }
    if (0 == b)
        for (a = 0; a < gd_SA_URL.length; a++) {
            b = gd_SA_URL[a];
            var c = "",
                d = b.split("_"),
                e = -1 != b.indexOf(".") ? b.split(".")[1] : "";
            1 < d.length && (c = d[0], b = d[1] + e);
            if (-1 != location.hostname.indexOf(b) && ("" == c || -1 != location.hostname.indexOf(c))) {
                gd_nowLOGO = gd_SA_LOGO_LIST[a];
                gd_LogoMode = a;
                document.title = gd_SA_TITLE_LIST[a];
                break
            }
        }
})();