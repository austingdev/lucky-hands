var JSUtility;
(function(e) {
    var b = function() {
        function a() {}
        a.Start = function() {
            a.m_startTime = performance.now()
        };
        a.StopPrint = function(d) {
            var b = performance.now() - a.m_startTime;
            console.log(d + " " + b + " ms");
            return b
        };
        a.m_startTime = 0;
        return a
    }();
    e.CPUTimer = b
})(JSUtility || (JSUtility = {}));
(function(e) {
    (function(b) {
        b.b64EncodeUnicode = function(a) {
            return btoa(encodeURIComponent(a).replace(/%([0-9A-F]{2})/g, function(a, b) {
                return String.fromCharCode("0x" + b)
            }))
        }
    })(e.Encoder || (e.Encoder = {}))
})(JSUtility || (JSUtility = {}));
(function(e) {
    e.GeIsSupportsWebGL = function() {
        var b = document.createElement("canvas");
        return (b = b.getContext("webgl") || b.getContext("experimental-webgl")) && b instanceof WebGLRenderingContext ? !0 : !1
    }
})(JSUtility || (JSUtility = {}));
(function(e) {
    e.GetCookie = function(b) {
        var a = b.length + 1;
        return document.cookie.split(";").map(function(a) {
            return a.trim()
        }).filter(function(d) {
            return d.substring(0, a) === b + "="
        }).map(function(b) {
            return decodeURIComponent(b.substring(a))
        })[0] || null
    };
    e.IsSupportCookie = function() {
        try {
            var b = !1;
            if (window.navigator.cookieEnabled) return !0;
            document.cookie = "testcookie=yes;"; - 1 < document.cookie.indexOf("testcookie=yes") && (b = !0);
            document.cookie = "";
            return b
        } catch (a) {
            return !1
        }
    };
    e.IsSupportLocalStorage = function() {
        var b = !0;
        if (window.localStorage) try {
            window.localStorage.setItem("test", "1"), window.localStorage.removeItem("test")
        } catch (a) {
            b = !1
        } else b = !1;
        return b
    }
})(JSUtility || (JSUtility = {}));
(function(e) {
    e.GetHTML = function(b, a, d) {
        if (window.XMLHttpRequest) {
            var c = new XMLHttpRequest;
            c.onload = function() {
                null != a && "function" === typeof a && a(this.responseXML)
            };
            c.onerror = function(a) {
                null != d && "function" === typeof d && d(a)
            };
            c.open("GET", b);
            c.responseType = "document";
            c.send()
        } else null != d && "function" === typeof d && (console.error("Error from XMLHttpRequest"), d("Error from XMLHttpRequest"))
    }
})(JSUtility || (JSUtility = {}));
(function(e) {
    function b(a, b, c) {
        if (window.XMLHttpRequest) {
            var d = new XMLHttpRequest;
            d.onload = function() {
                null != b && "function" === typeof b && b(this.responseText)
            };
            d.onerror = function(a) {
                null != c && "function" === typeof c && c(a)
            };
            d.open("GET", a);
            d.send()
        } else null != c && "function" === typeof c && (console.error("Error from XMLHttpRequest"), c("Error from XMLHttpRequest"))
    }
    e.GetIP = function(a, d) {
        var c = !1;
        b("https://ip-chack.i17game.cn:5002/i17GameGetMyIp/zRbRzSFNtxzMtDvmzPzVrw3Buu3BqAvP3hqSja$$", function(b) {
            try {
                var e = atob(b);
                if (!c) try {
                    var f = JSON.parse(e);
                    if (void 0 != f && void 0 != f.ip) {
                        var g = f.ip.split(".");
                        b = "";
                        if (4 == g.length) {
                            f = !1;
                            for (var m = 0; 4 > m; m++) {
                                var q = parseInt(g[m]);
                                isNaN(q) || 255 < q || 0 > q ? f = !0 : b = 3 > m ? b + (q + ".") : b + q
                            }
                            if (0 == f) a(b), c = !0;
                            else throw "IP Format is not valid. value: " + e;
                        } else throw "IP Format is not valid. value: " + e;
                    } else throw "IP Format is not valid. value: " + e;
                } catch (k) {
                    console.error(k), null != d && "function" === typeof d && d(k)
                }
            } catch (k) {
                console.error(k), null != d && "function" === typeof d && d(k)
            }
        }, d)
    }
})(JSUtility || (JSUtility = {}));
(function(e) {
    e.GetJSON = function(b, a, d) {
        if (window.XMLHttpRequest) {
            var c = new XMLHttpRequest;
            c.onload = function() {
                null != a && "function" === typeof a && a(this.responseText)
            };
            c.onerror = function(a) {
                null != d && "function" === typeof d && d(a)
            };
            c.open("GET", b);
            c.send()
        } else null != d && "function" === typeof d && (console.error("Error from XMLHttpRequest"), d("Error from XMLHttpRequest"))
    }
})(JSUtility || (JSUtility = {}));
(function(e) {
    e.GetScript = function(b, a, d) {
        var c = document.createElement("script");
        c.type = "text/javascript";
        c.src = b;
        c.onerror = function() {
            null != d && d(arguments)
        };
        c.onload = c.onreadystatechange = function() {
            this.readyState && "loaded" !== this.readyState && "complete" !== this.readyState || (null != a && "function" === typeof a && a(), this.onload = this.onreadystatechange = null, document.getElementsByTagName("head")[0].removeChild(this))
        };
        document.getElementsByTagName("head")[0].appendChild(c)
    }
})(JSUtility || (JSUtility = {}));
(function(e) {
    e.GetURLParameter = function() {
        for (var b = window.location.search.substring(1).split("&"), a = {}, d = 0; d < b.length; d++) {
            var c = b[d].split("=");
            if ("undefined" === typeof a[c[0]]) a[c[0]] = decodeURIComponent(c[1]);
            else if ("string" === typeof a[c[0]]) {
                var e = [a[c[0]], decodeURIComponent(c[1])];
                a[c[0]] = e
            } else a[c[0]].push(decodeURIComponent(c[1]))
        }
        return a
    }
})(JSUtility || (JSUtility = {}));
(function(e) {
    var b = function() {
        function a() {}
        a.IsFullScreen = function() {
            return a.m_Document.fullscreenElement || a.m_Document.fullScreenElement || a.m_Document.mozFullScreenElement || a.m_Document.webkitCurrentFullScreenElement || a.m_Document.msFullscreenElement ? !0 : !1
        };
        a.ListenerFullScreenChange = function() {
            a.m_Document = document;
            var b;
            a.m_Document.addEventListener("fullscreenchange", function() {
                b = "fullscreenElement";
                a.OnFullScreenChange && a.OnFullScreenChange(null != a.m_Document[b])
            }, !1);
            a.m_Document.addEventListener("fullScreenchange",
                function() {
                    b = "fullScreenElement";
                    a.OnFullScreenChange && a.OnFullScreenChange(null != a.m_Document[b])
                }, !1);
            a.m_Document.addEventListener("mozfullscreenchange", function() {
                b = "mozFullScreenElement";
                a.OnFullScreenChange && a.OnFullScreenChange(null != a.m_Document[b])
            }, !1);
            a.m_Document.addEventListener("webkitfullscreenchange", function() {
                b = "webkitCurrentFullScreenElement";
                a.OnFullScreenChange && a.OnFullScreenChange(null != a.m_Document[b])
            }, !1);
            a.m_Document.addEventListener("msfullscreenchange", function() {
                b = "msFullscreenElement";
                a.OnFullScreenChange && a.OnFullScreenChange(null != a.m_Document[b])
            }, !1);
            a.OnFullScreenChange && a.OnFullScreenChange(null != a.m_Document[b])
        };
        a.SetFullScreen = function() {
            for (var b = a.m_Document.body, c, e = "requestFullscreen requestFullScreen webkitRequestFullscreen webkitRequestFullScreen msRequestFullscreen msRequestFullScreen mozRequestFullScreen mozRequestFullscreen".split(" "), n, f = "exitFullscreen cancelFullScreen exitFullScreen webkitCancelFullScreen webkitExitFullscreen msCancelFullScreen msExitFullscreen mozCancelFullScreen mozExitFullscreen".split(" "),
                    g = 0; g < e.length; g++)
                if (b[e[g]]) {
                    c = e[g];
                    break
                }
            for (g = 0; g < f.length; g++)
                if (a.m_Document[f[g]]) {
                    n = f[g];
                    break
                }
            if (a.m_Document.fullscreenElement || a.m_Document.webkitCurrentFullScreenElement || a.m_Document.msFullscreenElement || a.m_Document.mozFullScreenElement) a.m_Document[n]();
            else b[c]()
        };
        return a
    }();
    e.FullScreen = b
})(JSUtility || (JSUtility = {}));
String.prototype.format || (String.prototype.format = function() {
    var e = arguments;
    return this.replace(/{(\d+)}/g, function(b, a) {
        return "undefined" != typeof e[a] ? e[a] : b
    })
});
(function(e) {
    e.ToUTCFormat = function(b, a) {
        var d = {
            "M+": b.getUTCMonth() + 1,
            "d+": b.getUTCDate(),
            "h+": b.getUTCHours(),
            "m+": b.getUTCMinutes(),
            "s+": b.getUTCSeconds()
        };
        /(y+)/.test(a) && (a = a.replace(RegExp.$1, (b.getUTCFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var c in d)(new RegExp("(" + c + ")")).test(a) && (a = a.replace(RegExp.$1, 1 == RegExp.$1.length ? d[c] : ("00" + d[c]).substr(("" + d[c]).length)));
        return a
    };
    e.ToFormat = function(b, a) {
        var d = {
            "M+": b.getMonth() + 1,
            "d+": b.getDate(),
            "h+": b.getHours(),
            "m+": b.getMinutes(),
            "s+": b.getSeconds()
        };
        /(y+)/.test(a) && (a = a.replace(RegExp.$1, (b.getFullYear() + "").substr(4 - RegExp.$1.length)));
        for (var c in d)(new RegExp("(" + c + ")")).test(a) && (a = a.replace(RegExp.$1, 1 == RegExp.$1.length ? d[c] : ("00" + d[c]).substr(("" + d[c]).length)));
        return a
    }
})(JSUtility || (JSUtility = {}));
(function(e, b) {
    var a = {
            extend: function(a, b) {
                var c = {},
                    d;
                for (d in a) c[d] = b[d] && 0 === b[d].length % 2 ? b[d].concat(a[d]) : a[d];
                return c
            },
            has: function(a, b) {
                return "string" === typeof a ? -1 !== b.toLowerCase().indexOf(a.toLowerCase()) : !1
            },
            lowerize: function(a) {
                return a.toLowerCase()
            },
            major: function(a) {
                return "string" === typeof a ? a.replace(/[^\d\.]/g, "").split(".")[0] : b
            },
            trim: function(a) {
                return a.replace(/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g, "")
            }
        },
        d = function(a, d) {
            for (var c = 0, e, f, g, h, m, l; c < d.length && !m;) {
                var n = d[c],
                    p = d[c +
                        1];
                for (e = f = 0; e < n.length && !m;)
                    if (m = n[e++].exec(a))
                        for (g = 0; g < p.length; g++) l = m[++f], h = p[g], "object" === typeof h && 0 < h.length ? 2 == h.length ? this[h[0]] = "function" == typeof h[1] ? h[1].call(this, l) : h[1] : 3 == h.length ? this[h[0]] = "function" !== typeof h[1] || h[1].exec && h[1].test ? l ? l.replace(h[1], h[2]) : b : l ? h[1].call(this, l, h[2]) : b : 4 == h.length && (this[h[0]] = l ? h[3].call(this, l.replace(h[1], h[2])) : b) : this[h] = l ? l : b;
                c += 2
            }
        },
        c = function(d, c) {
            for (var e in c)
                if ("object" === typeof c[e] && 0 < c[e].length)
                    for (var f = 0; f < c[e].length; f++) {
                        if (a.has(c[e][f],
                                d)) return "?" === e ? b : e
                    } else if (a.has(c[e], d)) return "?" === e ? b : e;
            return d
        },
        p = {
            ME: "4.90",
            "NT 3.11": "NT3.51",
            "NT 4.0": "NT4.0",
            2E3: "NT 5.0",
            XP: ["NT 5.1", "NT 5.2"],
            Vista: "NT 6.0",
            7: "NT 6.1",
            8: "NT 6.2",
            "8.1": "NT 6.3",
            10: ["NT 6.4", "NT 10.0"],
            RT: "ARM"
        },
        n = {
            browser: [
                [/(opera\smini)\/([\w\.-]+)/i, /(opera\s[mobiletab]+).+version\/([\w\.-]+)/i, /(opera).+version\/([\w\.]+)/i, /(opera)[\/\s]+([\w\.]+)/i],
                ["name", "version"],
                [/(opios)[\/\s]+([\w\.]+)/i],
                [
                    ["name", "Opera Mini"], "version"
                ],
                [/\s(opr)\/([\w\.]+)/i],
                [
                    ["name",
                        "Opera"
                    ], "version"
                ],
                [/(kindle)\/([\w\.]+)/i, /(lunascape|maxthon|netfront|jasmine|blazer)[\/\s]?([\w\.]*)/i, /(avant\s|iemobile|slim|baidu)(?:browser)?[\/\s]?([\w\.]*)/i, /(?:ms|\()(ie)\s([\w\.]+)/i, /(rekonq)\/([\w\.]*)/i, /(chromium|flock|rockmelt|midori|epiphany|silk|skyfire|ovibrowser|bolt|iron|vivaldi|iridium|phantomjs|bowser|quark|qupzilla|falkon)\/([\w\.-]+)/i],
                ["name", "version"],
                [/(konqueror)\/([\w\.]+)/i],
                [
                    ["name", "Konqueror"], "version"
                ],
                [/(trident).+rv[:\s]([\w\.]+).+like\sgecko/i],
                [
                    ["name",
                        "IE"
                    ], "version"
                ],
                [/(edge|edgios|edga|edg)\/((\d+)?[\w\.]+)/i],
                [
                    ["name", "Edge"], "version"
                ],
                [/(yabrowser)\/([\w\.]+)/i],
                [
                    ["name", "Yandex"], "version"
                ],
                [/(puffin)\/([\w\.]+)/i],
                [
                    ["name", "Puffin"], "version"
                ],
                [/(focus)\/([\w\.]+)/i],
                [
                    ["name", "Firefox Focus"], "version"
                ],
                [/(opt)\/([\w\.]+)/i],
                [
                    ["name", "Opera Touch"], "version"
                ],
                [/((?:[\s\/])uc?\s?browser|(?:juc.+)ucweb)[\/\s]?([\w\.]+)/i],
                [
                    ["name", "UCBrowser"], "version"
                ],
                [/(comodo_dragon)\/([\w\.]+)/i],
                [
                    ["name", /_/g, " "], "version"
                ],
                [/(windowswechat qbcore)\/([\w\.]+)/i],
                [
                    ["name", "WeChat(Win) Desktop"], "version"
                ],
                [/(micromessenger)\/([\w\.]+)/i],
                [
                    ["name", "WeChat"], "version"
                ],
                [/(brave)\/([\w\.]+)/i],
                [
                    ["name", "Brave"], "version"
                ],
                [/(qqbrowserlite)\/([\w\.]+)/i],
                ["name", "version"],
                [/(QQ)\/([\d\.]+)/i],
                ["name", "version"],
                [/m?(qqbrowser)[\/\s]?([\w\.]+)/i],
                ["name", "version"],
                [/(BIDUBrowser)[\/\s]?([\w\.]+)/i],
                ["name", "version"],
                [/(2345Explorer)[\/\s]?([\w\.]+)/i],
                ["name", "version"],
                [/(MetaSr)[\/\s]?([\w\.]+)/i],
                ["name"],
                [/(LBBROWSER)/i],
                ["name"],
                [/xiaomi\/miuibrowser\/([\w\.]+)/i],
                ["version", ["name", "MIUI Browser"]],
                [/;fbav\/([\w\.]+);/i],
                ["version", ["name", "Facebook"]],
                [/safari\s(line)\/([\w\.]+)/i, /android.+(line)\/([\w\.]+)\/iab/i],
                ["name", "version"],
                [/headlesschrome(?:\/([\w\.]+)|\s)/i],
                ["version", ["name", "Chrome Headless"]],
                [/\swv\).+(chrome)\/([\w\.]+)/i],
                [
                    ["name", /(.+)/, "$1 WebView"], "version"
                ],
                [/((?:oculus|samsung)browser)\/([\w\.]+)/i],
                [
                    ["name", /(.+(?:g|us))(.+)/, "$1 $2"], "version"
                ],
                [/android.+version\/([\w\.]+)\s+(?:mobile\s?safari|safari)*/i],
                ["version", ["name",
                    "Android Browser"
                ]],
                [/(sailfishbrowser)\/([\w\.]+)/i],
                [
                    ["name", "Sailfish Browser"], "version"
                ],
                [/(chrome|omniweb|arora|[tizenoka]{5}\s?browser)\/v?([\w\.]+)/i],
                ["name", "version"],
                [/(dolfin)\/([\w\.]+)/i],
                [
                    ["name", "Dolphin"], "version"
                ],
                [/((?:android.+)crmo|crios)\/([\w\.]+)/i],
                [
                    ["name", "Chrome"], "version"
                ],
                [/(coast)\/([\w\.]+)/i],
                [
                    ["name", "Opera Coast"], "version"
                ],
                [/fxios\/([\w\.-]+)/i],
                ["version", ["name", "Firefox"]],
                [/version\/([\w\.]+).+?mobile\/\w+\s(safari)/i],
                ["version", ["name", "Mobile Safari"]],
                [/version\/([\w\.]+).+?(mobile\s?safari|safari)/i],
                ["version", "name"],
                [/webkit.+?(gsa)\/([\w\.]+).+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                [
                    ["name", "GSA"], "version"
                ],
                [/webkit.+?(mobile\s?safari|safari)(\/[\w\.]+)/i],
                ["name", ["version", c, {
                    "1.0": "/8",
                    "1.2": "/1",
                    "1.3": "/3",
                    "2.0": "/412",
                    "2.0.2": "/416",
                    "2.0.3": "/417",
                    "2.0.4": "/419",
                    "?": "/"
                }]],
                [/(webkit|khtml)\/([\w\.]+)/i],
                ["name", "version"],
                [/(navigator|netscape)\/([\w\.-]+)/i],
                [
                    ["name", "Netscape"], "version"
                ],
                [/(swiftfox)/i, /(icedragon|iceweasel|camino|chimera|fennec|maemo\sbrowser|minimo|conkeror)[\/\s]?([\w\.\+]+)/i,
                    /(firefox|seamonkey|k-meleon|icecat|iceape|firebird|phoenix|palemoon|basilisk|waterfox)\/([\w\.-]+)$/i, /(mozilla)\/([\w\.]+).+rv\:.+gecko\/\d+/i, /(polaris|lynx|dillo|icab|doris|amaya|w3m|netsurf|sleipnir)[\/\s]?([\w\.]+)/i, /(links)\s\(([\w\.]+)/i, /(gobrowser)\/?([\w\.]*)/i, /(ice\s?browser)\/v?([\w\._]+)/i, /(mosaic)[\/\s]([\w\.]+)/i
                ],
                ["name", "version"]
            ],
            cpu: [
                [/(?:(amd|x(?:(?:86|64)[_-])?|wow|win)64)[;\)]/i],
                [
                    ["architecture", "amd64"]
                ],
                [/(ia32(?=;))/i],
                [
                    ["architecture", a.lowerize]
                ],
                [/((?:i[346]|x)86)[;\)]/i],
                [
                    ["architecture", "ia32"]
                ],
                [/windows\s(ce|mobile);\sppc;/i],
                [
                    ["architecture", "arm"]
                ],
                [/((?:ppc|powerpc)(?:64)?)(?:\smac|;|\))/i],
                [
                    ["architecture", /ower/, "", a.lowerize]
                ],
                [/(sun4\w)[;\)]/i],
                [
                    ["architecture", "sparc"]
                ],
                [/((?:avr32|ia64(?=;))|68k(?=\))|arm(?:64|(?=v\d+[;l]))|(?=atmel\s)avr|(?:irix|mips|sparc)(?:64)?(?=;)|pa-risc)/i],
                [
                    ["architecture", a.lowerize]
                ]
            ],
            device: [
                [/\((ipad|playbook);[\w\s\),;-]+(rim|apple)/i],
                ["model", "vendor", ["type", "tablet"]],
                [/applecoremedia\/[\w\.]+ \((ipad)/],
                ["model", ["vendor",
                        "Apple"
                    ],
                    ["type", "tablet"]
                ],
                [/(apple\s{0,1}tv)/i],
                [
                    ["model", "Apple TV"],
                    ["vendor", "Apple"]
                ],
                [/(archos)\s(gamepad2?)/i, /(hp).+(touchpad)/i, /(hp).+(tablet)/i, /(kindle)\/([\w\.]+)/i, /\s(nook)[\w\s]+build\/(\w+)/i, /(dell)\s(strea[kpr\s\d]*[\dko])/i],
                ["vendor", "model", ["type", "tablet"]],
                [/(kf[A-z]+)\sbuild\/.+silk\//i],
                ["model", ["vendor", "Amazon"],
                    ["type", "tablet"]
                ],
                [/(sd|kf)[0349hijorstuw]+\sbuild\/.+silk\//i],
                [
                    ["model", c, {
                        "Fire Phone": ["SD", "KF"]
                    }],
                    ["vendor", "Amazon"],
                    ["type", "mobile"]
                ],
                [/android.+aft([bms])\sbuild/i],
                ["model", ["vendor", "Amazon"],
                    ["type", "smarttv"]
                ],
                [/\((ip[honed|\s\w*]+);.+(apple)/i],
                ["model", "vendor", ["type", "mobile"]],
                [/\((ip[honed|\s\w*]+);/i],
                ["model", ["vendor", "Apple"],
                    ["type", "mobile"]
                ],
                [/(blackberry)[\s-]?(\w+)/i, /(blackberry|benq|palm(?=\-)|sonyericsson|acer|asus|dell|meizu|motorola|polytron)[\s_-]?([\w-]*)/i, /(hp)\s([\w\s]+\w)/i, /(asus)-?(\w+)/i],
                ["vendor", "model", ["type", "mobile"]],
                [/\(bb10;\s(\w+)/i],
                ["model", ["vendor", "BlackBerry"],
                    ["type", "mobile"]
                ],
                [/android.+(transfo[prime\s]{4,10}\s\w+|eeepc|slider\s\w+|nexus 7|padfone|p00c)/i],
                ["model", ["vendor", "Asus"],
                    ["type", "tablet"]
                ],
                [/(sony)\s(tablet\s[ps])\sbuild\//i, /(sony)?(?:sgp.+)\sbuild\//i],
                [
                    ["vendor", "Sony"],
                    ["model", "Xperia Tablet"],
                    ["type", "tablet"]
                ],
                [/android.+\s([c-g]\d{4}|so[-l]\w+)(?=\sbuild\/|\).+chrome\/(?![1-6]{0,1}\d\.))/i],
                ["model", ["vendor", "Sony"],
                    ["type", "mobile"]
                ],
                [/\s(ouya)\s/i, /(nintendo)\s([wids3u]+)/i],
                ["vendor", "model", ["type", "console"]],
                [/android.+;\s(shield)\sbuild/i],
                ["model", ["vendor", "Nvidia"],
                    ["type", "console"]
                ],
                [/(playstation\s[34portablevi]+)/i],
                ["model", ["vendor", "Sony"],
                    ["type", "console"]
                ],
                [/(sprint\s(\w+))/i],
                [
                    ["vendor", c, {
                        HTC: "APA",
                        Sprint: "Sprint"
                    }],
                    ["model", c, {
                        "Evo Shift 4G": "7373KT"
                    }],
                    ["type", "mobile"]
                ],
                [/(htc)[;_\s-]+([\w\s]+(?=\)|\sbuild)|\w+)/i, /(zte)-(\w*)/i, /(alcatel|geeksphone|nexian|panasonic|(?=;\s)sony)[_\s-]?([\w-]*)/i],
                ["vendor", ["model", /_/g, " "],
                    ["type", "mobile"]
                ],
                [/(nexus\s9)/i],
                ["model", ["vendor", "HTC"],
                    ["type", "tablet"]
                ],
                [/d\/huawei([\w\s-]+)[;\)]/i, /(nexus\s6p)/i],
                ["model", ["vendor", "Huawei"],
                    ["type", "mobile"]
                ],
                [/(microsoft);\s(lumia[\s\w]+)/i],
                ["vendor", "model", ["type", "mobile"]],
                [/[\s\(;](xbox(?:\sone)?)[\s\);]/i],
                ["model", ["vendor", "Microsoft"],
                    ["type", "console"]
                ],
                [/(kin\.[onetw]{3})/i],
                [
                    ["model", /\./g, " "],
                    ["vendor", "Microsoft"],
                    ["type", "mobile"]
                ],
                [/\s(milestone|droid(?:[2-4x]|\s(?:bionic|x2|pro|razr))?:?(\s4g)?)[\w\s]+build\//i, /mot[\s-]?(\w*)/i, /(XT\d{3,4}) build\//i, /(nexus\s6)/i],
                ["model", ["vendor", "Motorola"],
                    ["type", "mobile"]
                ],
                [/android.+\s(mz60\d|xoom[\s2]{0,2})\sbuild\//i],
                ["model", ["vendor", "Motorola"],
                    ["type", "tablet"]
                ],
                [/hbbtv\/\d+\.\d+\.\d+\s+\([\w\s]*;\s*(\w[^;]*);([^;]*)/i],
                [
                    ["vendor", a.trim],
                    ["model", a.trim],
                    ["type", "smarttv"]
                ],
                [/hbbtv.+maple;(\d+)/i],
                [
                    ["model", /^/, "SmartTV"],
                    ["vendor", "Samsung"],
                    ["type", "smarttv"]
                ],
                [/\(dtv[\);].+(aquos)/i],
                ["model", ["vendor", "Sharp"],
                    ["type", "smarttv"]
                ],
                [/android.+((sch-i[89]0\d|shw-m380s|gt-p\d{4}|gt-n\d+|sgh-t8[56]9|nexus 10))/i, /((SM-T\w+))/i],
                [
                    ["vendor", "Samsung"], "model", ["type", "tablet"]
                ],
                [/smart-tv.+(samsung)/i],
                ["vendor", ["type", "smarttv"], "model"],
                [/((s[cgp]h-\w+|gt-\w+|galaxy\snexus|sm-\w[\w\d]+))/i, /(sam[sung]*)[\s-]*(\w+-?[\w-]*)/i,
                    /sec-((sgh\w+))/i
                ],
                [
                    ["vendor", "Samsung"], "model", ["type", "mobile"]
                ],
                [/sie-(\w*)/i],
                ["model", ["vendor", "Siemens"],
                    ["type", "mobile"]
                ],
                [/(maemo|nokia).*(n900|lumia\s\d+)/i, /(nokia)[\s_-]?([\w-]*)/i],
                [
                    ["vendor", "Nokia"], "model", ["type", "mobile"]
                ],
                [/android[x\d\.\s;]+\s([ab][1-7]\-?[0178a]\d\d?)/i],
                ["model", ["vendor", "Acer"],
                    ["type", "tablet"]
                ],
                [/android.+([vl]k\-?\d{3})\s+build/i],
                ["model", ["vendor", "LG"],
                    ["type", "tablet"]
                ],
                [/android\s3\.[\s\w;-]{10}(lg?)-([06cv9]{3,4})/i],
                [
                    ["vendor", "LG"], "model", ["type",
                        "tablet"
                    ]
                ],
                [/(lg) netcast\.tv/i],
                ["vendor", "model", ["type", "smarttv"]],
                [/(nexus\s[45])/i, /lg[e;\s\/-]+(\w*)/i, /android.+lg(\-?[\d\w]+)\s+build/i],
                ["model", ["vendor", "LG"],
                    ["type", "mobile"]
                ],
                [/(lenovo)\s?(s(?:5000|6000)(?:[\w-]+)|tab(?:[\s\w]+))/i],
                ["vendor", "model", ["type", "tablet"]],
                [/android.+(ideatab[a-z0-9\-\s]+)/i],
                ["model", ["vendor", "Lenovo"],
                    ["type", "tablet"]
                ],
                [/(lenovo)[_\s-]?([\w-]+)/i],
                ["vendor", "model", ["type", "mobile"]],
                [/linux;.+((jolla));/i],
                ["vendor", "model", ["type", "mobile"]],
                [/((pebble))app\/[\d\.]+\s/i],
                ["vendor", "model", ["type", "wearable"]],
                [/android.+;\s(oppo)\s?([\w\s]+)\sbuild/i],
                ["vendor", "model", ["type", "mobile"]],
                [/crkey/i],
                [
                    ["model", "Chromecast"],
                    ["vendor", "Google"]
                ],
                [/android.+;\s(glass)\s\d/i],
                ["model", ["vendor", "Google"],
                    ["type", "wearable"]
                ],
                [/android.+;\s(pixel c)[\s)]/i],
                ["model", ["vendor", "Google"],
                    ["type", "tablet"]
                ],
                [/android.+;\s(pixel( [23])?( xl)?)[\s)]/i],
                ["model", ["vendor", "Google"],
                    ["type", "mobile"]
                ],
                [/android.+;\s(\w+)\s+build\/hm\1/i, /android.+(hm[\s\-_]*note?[\s_]*(?:\d\w)?)\s+build/i,
                    /android.+(mi[\s\-_]*(?:a\d|one|one[\s_]plus|note lte)?[\s_]*(?:\d?\w?)[\s_]*(?:plus)?)\s+build/i, /android.+(redmi[\s\-_]*(?:note)?(?:[\s_]*[\w\s]+))\s+build/i
                ],
                [
                    ["model", /_/g, " "],
                    ["vendor", "Xiaomi"],
                    ["type", "mobile"]
                ],
                [/android.+(mi[\s\-_]*(?:pad)(?:[\s_]*[\w\s]+))\s+build/i],
                [
                    ["model", /_/g, " "],
                    ["vendor", "Xiaomi"],
                    ["type", "tablet"]
                ],
                [/android.+;\s(m[1-5]\snote)\sbuild/i],
                ["model", ["vendor", "Meizu"],
                    ["type", "mobile"]
                ],
                [/(mz)-([\w-]{2,})/i],
                [
                    ["vendor", "Meizu"], "model", ["type", "mobile"]
                ],
                [/android.+a000(1)\s+build/i,
                    /android.+oneplus\s(a\d{4})\s+build/i
                ],
                ["model", ["vendor", "OnePlus"],
                    ["type", "mobile"]
                ],
                [/android.+[;\/]\s*(RCT[\d\w]+)\s+build/i],
                ["model", ["vendor", "RCA"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/\s]+(Venue[\d\s]{2,7})\s+build/i],
                ["model", ["vendor", "Dell"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(Q[T|M][\d\w]+)\s+build/i],
                ["model", ["vendor", "Verizon"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s+(Barnes[&\s]+Noble\s+|BN[RT])(V?.*)\s+build/i],
                [
                    ["vendor", "Barnes & Noble"], "model", ["type", "tablet"]
                ],
                [/android.+[;\/]\s+(TM\d{3}.*\b)\s+build/i],
                ["model", ["vendor", "NuVision"],
                    ["type", "tablet"]
                ],
                [/android.+;\s(k88)\sbuild/i],
                ["model", ["vendor", "ZTE"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(gen\d{3})\s+build.*49h/i],
                ["model", ["vendor", "Swiss"],
                    ["type", "mobile"]
                ],
                [/android.+[;\/]\s*(zur\d{3})\s+build/i],
                ["model", ["vendor", "Swiss"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*((Zeki)?TB.*\b)\s+build/i],
                ["model", ["vendor", "Zeki"],
                    ["type", "tablet"]
                ],
                [/(android).+[;\/]\s+([YR]\d{2})\s+build/i, /android.+[;\/]\s+(Dragon[\-\s]+Touch\s+|DT)(\w{5})\sbuild/i],
                [
                    ["vendor", "Dragon Touch"], "model", ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(NS-?\w{0,9})\sbuild/i],
                ["model", ["vendor", "Insignia"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*((NX|Next)-?\w{0,9})\s+build/i],
                ["model", ["vendor", "NextBook"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(Xtreme\_)?(V(1[045]|2[015]|30|40|60|7[05]|90))\s+build/i],
                [
                    ["vendor", "Voice"], "model", ["type", "mobile"]
                ],
                [/android.+[;\/]\s*(LVTEL\-)?(V1[12])\s+build/i],
                [
                    ["vendor", "LvTel"], "model", ["type", "mobile"]
                ],
                [/android.+;\s(PH-1)\s/i],
                ["model", ["vendor", "Essential"],
                    ["type", "mobile"]
                ],
                [/android.+[;\/]\s*(V(100MD|700NA|7011|917G).*\b)\s+build/i],
                ["model", ["vendor", "Envizen"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(Le[\s\-]+Pan)[\s\-]+(\w{1,9})\s+build/i],
                ["vendor", "model", ["type", "tablet"]],
                [/android.+[;\/]\s*(Trio[\s\-]*.*)\s+build/i],
                ["model", ["vendor", "MachSpeed"],
                    ["type", "tablet"]
                ],
                [/android.+[;\/]\s*(Trinity)[\-\s]*(T\d{3})\s+build/i],
                ["vendor", "model", ["type", "tablet"]],
                [/android.+[;\/]\s*TU_(1491)\s+build/i],
                ["model", ["vendor", "Rotor"],
                    ["type", "tablet"]
                ],
                [/android.+(KS(.+))\s+build/i],
                ["model", ["vendor", "Amazon"],
                    ["type", "tablet"]
                ],
                [/android.+(Gigaset)[\s\-]+(Q\w{1,9})\s+build/i],
                ["vendor", "model", ["type", "tablet"]],
                [/\s(tablet|tab)[;\/]/i, /\s(mobile)(?:[;\/]|\ssafari)/i],
                [
                    ["type", a.lowerize], "vendor", "model"
                ],
                [/[\s\/\(](smart-?tv)[;\)]/i],
                [
                    ["type", "smarttv"]
                ],
                [/(android[\w\.\s\-]{0,9});.+build/i],
                ["model", ["vendor", "Generic"]]
            ],
            engine: [
                [/windows.+\sedge\/([\w\.]+)/i],
                ["version", ["name", "EdgeHTML"]],
                [/webkit\/537\.36.+chrome\/(?!27)/i],
                [
                    ["name", "Blink"]
                ],
                [/(presto)\/([\w\.]+)/i, /(webkit|trident|netfront|netsurf|amaya|lynx|w3m|goanna)\/([\w\.]+)/i, /(khtml|tasman|links)[\/\s]\(?([\w\.]+)/i, /(icab)[\/\s]([23]\.[\d\.]+)/i],
                ["name", "version"],
                [/rv\:([\w\.]{1,9}).+(gecko)/i],
                ["version", "name"]
            ],
            os: [
                [/microsoft\s(windows)\s(vista|xp)/i],
                ["name", "version"],
                [/(windows)\snt\s6\.2;\s(arm)/i, /(windows\sphone(?:\sos)*)[\s\/]?([\d\.\s\w]*)/i, /(windows\smobile|windows)[\s\/]?([ntce\d\.\s]+\w)/i],
                ["name", ["version", c, p]],
                [/(win(?=3|9|n)|win\s9x\s)([nt\d\.]+)/i],
                [
                    ["name", "Windows"],
                    ["version", c, p]
                ],
                [/\((bb)(10);/i],
                [
                    ["name", "BlackBerry"], "version"
                ],
                [/(blackberry)\w*\/?([\w\.]*)/i, /(tizen)[\/\s]([\w\.]+)/i, /(android|webos|palm\sos|qnx|bada|rim\stablet\sos|meego|sailfish|contiki)[\/\s-]?([\w\.]*)/i],
                ["name", "version"],
                [/(symbian\s?os|symbos|s60(?=;))[\/\s-]?([\w\.]*)/i],
                [
                    ["name", "Symbian"], "version"
                ],
                [/\((series40);/i],
                ["name"],
                [/mozilla.+\(mobile;.+gecko.+firefox/i],
                [
                    ["name", "Firefox OS"], "version"
                ],
                [/(nintendo|playstation)\s([wids34portablevu]+)/i, /(mint)[\/\s\(]?(\w*)/i,
                    /(mageia|vectorlinux)[;\s]/i, /(joli|[kxln]?ubuntu|debian|suse|opensuse|gentoo|(?=\s)arch|slackware|fedora|mandriva|centos|pclinuxos|redhat|zenwalk|linpus)[\/\s-]?(?!chrom)([\w\.-]*)/i, /(hurd|linux)\s?([\w\.]*)/i, /(gnu)\s?([\w\.]*)/i
                ],
                ["name", "version"],
                [/(cros)\s[\w]+\s([\w\.]+\w)/i],
                [
                    ["name", "Chromium OS"], "version"
                ],
                [/(sunos)\s?([\w\.\d]*)/i],
                [
                    ["name", "Solaris"], "version"
                ],
                [/\s([frentopc-]{0,4}bsd|dragonfly)\s?([\w\.]*)/i],
                ["name", "version"],
                [/(haiku)\s(\w+)/i],
                ["name", "version"],
                [/cfnetwork\/.+darwin/i,
                    /ip[honead]{2,4}(?:.*os\s([\w]+)\slike\smac|;\sopera)/i
                ],
                [
                    ["version", /_/g, "."],
                    ["name", "iOS"]
                ],
                [/(mac\sos\sx)\s?([\w\s\.]*)/i, /(macintosh|mac(?=_powerpc)\s)/i],
                [
                    ["name", "Mac OS"],
                    ["version", /_/g, "."]
                ],
                [/((?:open)?solaris)[\/\s-]?([\w\.]*)/i, /(aix)\s((\d)(?=\.|\)|\s)[\w\.])*/i, /(plan\s9|minix|beos|os\/2|amigaos|morphos|risc\sos|openvms|fuchsia)/i, /(unix)\s?([\w\.]*)/i],
                ["name", "version"]
            ]
        },
        f = function(c, f) {
            "object" === typeof c && (f = c, c = b);
            var g = c || (e && e.navigator && e.navigator.userAgent ? e.navigator.userAgent :
                    ""),
                k = f ? a.extend(n, f) : n;
            this.getBrowser = function() {
                var c = {
                    name: b,
                    version: b
                };
                d.call(c, g, k.browser);
                c.major = a.major(c.version);
                return c
            };
            this.getCPU = function() {
                var a = {
                    architecture: b
                };
                d.call(a, g, k.cpu);
                return a
            };
            this.getDevice = function() {
                var a = {
                    vendor: b,
                    model: b,
                    type: b
                };
                d.call(a, g, k.device);
                return a
            };
            this.getEngine = function() {
                var a = {
                    name: b,
                    version: b
                };
                d.call(a, g, k.engine);
                return a
            };
            this.getOS = function() {
                var a = {
                    name: b,
                    version: b
                };
                d.call(a, g, k.os);
                return a
            };
            this.getResult = function() {
                return {
                    ua: this.getUA(),
                    browser: this.getBrowser(),
                    engine: this.getEngine(),
                    os: this.getOS(),
                    device: this.getDevice(),
                    cpu: this.getCPU()
                }
            };
            this.getUA = function() {
                return g
            };
            this.setUA = function(a) {
                g = a;
                return this
            };
            return this
        };
    f.VERSION = "0.7.20";
    f.BROWSER = {
        NAME: "name",
        MAJOR: "major",
        VERSION: "version"
    };
    f.CPU = {
        ARCHITECTURE: "architecture"
    };
    f.DEVICE = {
        MODEL: "model",
        VENDOR: "vendor",
        TYPE: "type",
        CONSOLE: "console",
        MOBILE: "mobile",
        SMARTTV: "smarttv",
        TABLET: "tablet",
        WEARABLE: "wearable",
        EMBEDDED: "embedded"
    };
    f.ENGINE = {
        NAME: "name",
        VERSION: "version"
    };
    f.OS = {
        NAME: "name",
        VERSION: "version"
    };
    "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (exports = module.exports = f), exports.UAParser = f) : "function" === typeof define && define.amd ? define(function() {
        return f
    }) : e && (e.UAParser = f)
})("object" === typeof window ? window : this);