(function() {
    var fbAppId = '0';
    switch (window.gd_nowLOGO) {
        case 'playwinmobi':
            fbAppId = '436831794277244';
            break;
        case 'arcoiris':
            fbAppId = '1440198182981242';
            break;
        case 'juegoseguros':
            fbAppId = '139000541428919';
            break;
        case 'mx_billonario':
            fbAppId = '318196949788383';
            break;
        case 'cl_billonario':
            fbAppId = '488439175787366';
            break;
        case 'cr_billonario':
            fbAppId = '157306573126404';
            break;
        case 'juegoseguros_mx':
            fbAppId = '946536619262475';
            break;
        default:
            fbAppId = '436831794277244';
            break;
    }
    window.fbAsyncInit = function() {
        FB.init({
            appId: fbAppId,
            autoLogAppEvents: true,
            xfbml: true,
            version: 'v10.0'
        });
        window.fbApiInit = true;
    };

    (function(d) {
        switch (window.gd_nowLOGO) {
            case 'playwinmobi':
            case 'arcoiris':
            case 'juegoseguros':
            case '888dragon':
            case 'mx_billonario':
            case 'cl_billonario':
            case 'cr_billonario':
            case 'juegoseguros_mx':
                var js, id = 'facebook-jssdk',
                    ref = d.getElementsByTagName('script')[0];
                if (d.getElementById(id)) {
                    return;
                }
                js = d.createElement('script');
                js.id = id;
                js.async = true;
                js.src = "//connect.facebook.net/es_LA/sdk.js";
                ref.parentNode.insertBefore(js, ref);
                console.log('[guestsys] [InitFbSdk] load es_LA/sdk.js');
                break;
            default:
                break;
        }

    }(document));

    console.log('[guestsys] [InitFbSdk] gd_nowLOGO: ' + window.gd_nowLOGO);
    console.log('[guestsys] [InitFbSdk] gd_LogoMode: ' + window.gd_LogoMode);
})();