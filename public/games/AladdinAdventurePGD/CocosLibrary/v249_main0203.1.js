var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.findInternal = function(a, d, b) {
    a instanceof String && (a = String(a));
    for (var c = a.length, e = 0; e < c; e++) {
        var f = a[e];
        if (d.call(b, f, e, a)) return {
            i: e,
            v: f
        };
    }
    return {
        i: -1,
        v: void 0
    };
};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, d, b) {
    a != Array.prototype && a != Object.prototype && (a[d] = b.value);
};
$jscomp.getGlobal = function(a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a;
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.polyfill = function(a, d, b, c) {
    if (d) {
        b = $jscomp.global;
        a = a.split(".");
        for (c = 0; c < a.length - 1; c++) {
            var e = a[c];
            e in b || (b[e] = {});
            b = b[e];
        }
        a = a[a.length - 1];
        c = b[a];
        d = d(c);
        d != c && null != d && $jscomp.defineProperty(b, a, {
            configurable: !0,
            writable: !0,
            value: d
        });
    }
};
$jscomp.polyfill("Array.prototype.find", function(a) {
    return a ? a : function(a, b) {
        return $jscomp.findInternal(this, a, b).v;
    };
}, "es6", "es3");
window.boot = function() {
    // let params = new URLSearchParams(document.location.search);
    // let name = params.get("CustomConfig");
    // if (name != "") {
    //     cc.macro.ENABLE_TRANSPARENT_CANVAS = true;
    // }

    function a() {
        var a = document.getElementById("splash");
        a && (a.style.display = "block");
    }

    function d(a) {
        if (a) return console.error(a.message, a.stack);
        h++;
        h === g.length + 1 && cc.assetManager.loadBundle(f, function(a) {
            a || cc.game.run(k, l);
        });
    }
    var b = window._CCSettings;
    window._CCSettings = void 0;
    var c = cc.AssetManager.BuiltinBundleName.RESOURCES,
        e = cc.AssetManager.BuiltinBundleName.INTERNAL,
        f = cc.AssetManager.BuiltinBundleName.MAIN,
        l = function() {
            cc.view.enableRetina(!0);
            cc.view.resizeWithBrowserSize(!0);
            cc.view._initFrameSize();
            cc.sys.isBrowser && a();
            cc.sys.isMobile && ("landscape" === b.orientation ? cc.view.setOrientation(cc.macro.ORIENTATION_LANDSCAPE) : "portrait" === b.orientation && cc.view.setOrientation(cc.macro.ORIENTATION_PORTRAIT), cc.view.enableAutoFullScreen(0 > [cc.sys.BROWSER_TYPE_BAIDU, cc.sys.BROWSER_TYPE_BAIDU_APP, cc.sys.BROWSER_TYPE_WECHAT, cc.sys.BROWSER_TYPE_MOBILE_QQ, cc.sys.BROWSER_TYPE_MIUI, cc.sys.BROWSER_TYPE_HUAWEI, cc.sys.BROWSER_TYPE_UC].indexOf(cc.sys.browserType)));
            cc.sys.isBrowser && cc.sys.os ===
                cc.sys.OS_ANDROID && (cc.assetManager.downloader.maxConcurrency = 2, cc.assetManager.downloader.maxRequestsPerFrame = 2);
            var c = b.launchScene;
            cc.assetManager.bundles.find(function(a) {
                return a.getSceneInfo(c);
            }).loadScene(c, null, null, function(a, b) {
                if (!a && (cc.director.runSceneImmediate(b), cc.sys.isBrowser)) {
                    document.getElementById("GameCanvas").style.visibility = "";
                    if (a = document.getElementById("GameDiv")) a.style.backgroundImage = "";
                    console.log("Success to load scene: " + c);
                }
            });
        },
        k = {
            id: "GameCanvas",
            debugMode: b.debug ?
                cc.debug.DebugMode.INFO : cc.debug.DebugMode.ERROR,
            showFPS: b.debug,
            frameRate: 60,
            groupList: b.groupList,
            collisionMatrix: b.collisionMatrix
        };
    cc.assetManager.init({
        bundleVers: b.bundleVers,
        remoteBundles: b.remoteBundles,
        server: b.server
    });
    var g = [e];
    b.hasResourcesBundle && g.push(c);
    var h = 0;
    cc.assetManager.loadScript(b.jsList.map(function(a) {
        return "src/" + a;
    }), d);
    for (c = 0; c < g.length; c++) cc.assetManager.loadBundle(g[c], d);
};
if (window.jsb) {
    var isRuntime = "function" === typeof loadRuntime;
    isRuntime ? (require("src/settings.js"), require("src/cocos2d-runtime.js"), (CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON) && require("src/physics.js"), require("jsb-adapter/engine/index.js")) : (require("src/settings.js"), require("src/cocos2d-jsb.js"), (CC_PHYSICS_BUILTIN || CC_PHYSICS_CANNON) && require("src/physics.js"), require("jsb-adapter/jsb-engine.js"));
    cc.macro.CLEANUP_IMAGE_CACHE = !0;
    window.boot();
};