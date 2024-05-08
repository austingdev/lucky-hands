var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(a, b, c) {
    a != Array.prototype && a != Object.prototype && (a[b] = c.value)
};
$jscomp.getGlobal = function(a) {
    return "undefined" != typeof window && window === a ? a : "undefined" != typeof global && null != global ? global : a
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {};
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
};
$jscomp.symbolCounter_ = 0;
$jscomp.Symbol = function(a) {
    return $jscomp.SYMBOL_PREFIX + (a || "") + $jscomp.symbolCounter_++
};
$jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var a = $jscomp.global.Symbol.iterator;
    a || (a = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
    "function" != typeof Array.prototype[a] && $jscomp.defineProperty(Array.prototype, a, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.arrayIterator(this)
        }
    });
    $jscomp.initSymbolIterator = function() {}
};
$jscomp.arrayIterator = function(a) {
    var b = 0;
    return $jscomp.iteratorPrototype(function() {
        return b < a.length ? {
            done: !1,
            value: a[b++]
        } : {
            done: !0
        }
    })
};
$jscomp.iteratorPrototype = function(a) {
    $jscomp.initSymbolIterator();
    a = {
        next: a
    };
    a[$jscomp.global.Symbol.iterator] = function() {
        return this
    };
    return a
};
$jscomp.makeIterator = function(a) {
    $jscomp.initSymbolIterator();
    var b = a[Symbol.iterator];
    return b ? b.call(a) : $jscomp.arrayIterator(a)
};
var orientationType = {
        horizontal: 0,
        vertical: 1,
        auto: 2
    },
    gd_orientationType = orientationType.horizontal,
    iOSDevice = function(a, b, c, d, e, f) {
        this.name = a;
        this.height = b;
        this.width = c;
        this.ratio = d;
        this.statusHeight = e;
        this.homeHeight = f
    },
    iOSDeviceList = [new iOSDevice("iPhone 12", 844, 390, 3, 20, 34), new iOSDevice("iPhone 12 mini", 780, 360, 3, 20, 0), new iOSDevice("iPhone 12 Pro Max", 926, 428, 3, 20, 0), new iOSDevice("iPhone 6.5-inch", 896, 414, 3, 44, 34), new iOSDevice("iPhone 6.1-inch", 896, 414, 2, 20, 34), new iOSDevice("iPhone 5.8-inch",
        812, 375, 3, 20, 34), new iOSDevice("iPhone XR 6.1-inch", 812, 375, 2, 20, 0), new iOSDevice("iPhone 5.5-inch", 736, 414, 3, 18, 0), new iOSDevice("iPhone 4.7-inch", 667, 375, 2, 20, 0), new iOSDevice("iPhone 4-inch", 568, 320, 2, 20, 0), new iOSDevice("iPhone 3.5-inch", 480, 320, 2, 20, 0), new iOSDevice("iPhone(Legacy) & iPod Touch", 480, 320, 1, 20, 0), new iOSDevice("iPad Pro 12.9-inch", 1366, 1024, 2, 20, 0), new iOSDevice("iPad Pro 10.5-inch", 1112, 834, 2, 20, 0), new iOSDevice("iPad Pro 11-inch", 1194, 834, 2, 20, 0), new iOSDevice("iPad 9.7-inch Retina",
        1024, 768, 2, 20, 0), new iOSDevice("iPad", 1024, 768, 1, 20, 0), new iOSDevice("iPad 10.2-inch", 1080, 810, 2, 20, 0), new iOSDevice("iPad Mini Retina", 1024, 768, 2, 20, 0), new iOSDevice("iPad Mini", 1024, 768, 1, 20, 0), new iOSDevice("iPad 4", 1180, 820, 2, 20, 0)];

function GetiOSDevice() {
    for (var a = $jscomp.makeIterator(iOSDeviceList), b = a.next(); !b.done; b = a.next())
        if (b = b.value, screen.height === b.height && screen.width === b.width && window.devicePixelRatio === b.ratio) return console.warn("device = ", b), b;
    console.warn("not find device !!");
    return null
}

function GetExitSwipeMsg(a) {
    return "en" == a ? "If swiping does not work, please tap here. \u274e" : "es" == a ? "Si no se puede arrastrar para arriba, por favor toque aqu\u00ed. \u274e" : ""
};