(function() {
    var a = "0";
    switch (window.gd_nowLOGO) {
        case "playwinmobi":
            a = "436831794277244";
            break;
        case "arcoiris":
            a = "1440198182981242";
            break;
        case "juegoseguros":
            a = "139000541428919";
            break;
        case "mx_billonario":
            a = "318196949788383";
            break;
        case "cl_billonario":
            a = "488439175787366";
            break;
        case "cr_billonario":
            a = "157306573126404";
            break;
        case "juegoseguros_mx":
            a = "946536619262475";
            break;
        default:
            a = "436831794277244"
    }
    window.fbAsyncInit = function() {
        FB.init({
            appId: a,
            autoLogAppEvents: !0,
            xfbml: !0,
            version: "v10.0"
        });
        window.fbApiInit = !0
    };
    (function(a) {
        switch (window.gd_nowLOGO) {
            case "playwinmobi":
            case "arcoiris":
            case "juegoseguros":
            case "888dragon":
            case "mx_billonario":
            case "cl_billonario":
            case "cr_billonario":
            case "juegoseguros_mx":
                var b = a.getElementsByTagName("script")[0];
                a.getElementById("facebook-jssdk") || (a = a.createElement("script"), a.id = "facebook-jssdk", a.async = !0, a.src = "//connect.facebook.net/es_LA/sdk.js", b.parentNode.insertBefore(a, b), console.log("[guestsys] [InitFbSdk] load es_LA/sdk.js"))
        }
    })(document);
    console.log("[guestsys] [InitFbSdk] gd_nowLOGO: " +
        window.gd_nowLOGO);
    console.log("[guestsys] [InitFbSdk] gd_LogoMode: " + window.gd_LogoMode)
})();