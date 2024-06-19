var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(c, e, g) {
    c != Array.prototype && c != Object.prototype && (c[e] = g.value)
};
$jscomp.getGlobal = function(c) {
    return "undefined" != typeof window && window === c ? c : "undefined" != typeof global && null != global ? global : c
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {};
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
};
$jscomp.symbolCounter_ = 0;
$jscomp.Symbol = function(c) {
    return $jscomp.SYMBOL_PREFIX + (c || "") + $jscomp.symbolCounter_++
};
$jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var c = $jscomp.global.Symbol.iterator;
    c || (c = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
    "function" != typeof Array.prototype[c] && $jscomp.defineProperty(Array.prototype, c, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.arrayIterator(this)
        }
    });
    $jscomp.initSymbolIterator = function() {}
};
$jscomp.arrayIterator = function(c) {
    var e = 0;
    return $jscomp.iteratorPrototype(function() {
        return e < c.length ? {
            done: !1,
            value: c[e++]
        } : {
            done: !0
        }
    })
};
$jscomp.iteratorPrototype = function(c) {
    $jscomp.initSymbolIterator();
    c = {
        next: c
    };
    c[$jscomp.global.Symbol.iterator] = function() {
        return this
    };
    return c
};
$jscomp.iteratorFromArray = function(c, e) {
    $jscomp.initSymbolIterator();
    c instanceof String && (c += "");
    var g = 0,
        a = {
            next: function() {
                if (g < c.length) {
                    var b = g++;
                    return {
                        value: e(b, c[b]),
                        done: !1
                    }
                }
                a.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    }
                };
                return a.next()
            }
        };
    a[Symbol.iterator] = function() {
        return a
    };
    return a
};
$jscomp.polyfill = function(c, e, g, a) {
    if (e) {
        g = $jscomp.global;
        c = c.split(".");
        for (a = 0; a < c.length - 1; a++) {
            var b = c[a];
            b in g || (g[b] = {});
            g = g[b]
        }
        c = c[c.length - 1];
        a = g[c];
        e = e(a);
        e != a && null != e && $jscomp.defineProperty(g, c, {
            configurable: !0,
            writable: !0,
            value: e
        })
    }
};
$jscomp.polyfill("Array.prototype.keys", function(c) {
    return c ? c : function() {
        return $jscomp.iteratorFromArray(this, function(c) {
            return c
        })
    }
}, "es6", "es3");
$jscomp.makeIterator = function(c) {
    $jscomp.initSymbolIterator();
    var e = c[Symbol.iterator];
    return e ? e.call(c) : $jscomp.arrayIterator(c)
};
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.polyfill("Promise", function(c) {
    function e() {
        this.batch_ = null
    }

    function g(d) {
        return d instanceof b ? d : new b(function(b, a) {
            b(d)
        })
    }
    if (c && !$jscomp.FORCE_POLYFILL_PROMISE) return c;
    e.prototype.asyncExecute = function(b) {
        null == this.batch_ && (this.batch_ = [], this.asyncExecuteBatch_());
        this.batch_.push(b);
        return this
    };
    e.prototype.asyncExecuteBatch_ = function() {
        var b = this;
        this.asyncExecuteFunction(function() {
            b.executeBatch_()
        })
    };
    var a = $jscomp.global.setTimeout;
    e.prototype.asyncExecuteFunction = function(b) {
        a(b,
            0)
    };
    e.prototype.executeBatch_ = function() {
        for (; this.batch_ && this.batch_.length;) {
            var b = this.batch_;
            this.batch_ = [];
            for (var a = 0; a < b.length; ++a) {
                var f = b[a];
                delete b[a];
                try {
                    f()
                } catch (m) {
                    this.asyncThrow_(m)
                }
            }
        }
        this.batch_ = null
    };
    e.prototype.asyncThrow_ = function(b) {
        this.asyncExecuteFunction(function() {
            throw b;
        })
    };
    var b = function(b) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        var d = this.createResolveAndReject_();
        try {
            b(d.resolve, d.reject)
        } catch (l) {
            d.reject(l)
        }
    };
    b.prototype.createResolveAndReject_ =
        function() {
            function b(b) {
                return function(d) {
                    f || (f = !0, b.call(a, d))
                }
            }
            var a = this,
                f = !1;
            return {
                resolve: b(this.resolveTo_),
                reject: b(this.reject_)
            }
        };
    b.prototype.resolveTo_ = function(d) {
        if (d === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
        else if (d instanceof b) this.settleSameAsPromise_(d);
        else {
            a: switch (typeof d) {
                case "object":
                    var a = null != d;
                    break a;
                case "function":
                    a = !0;
                    break a;
                default:
                    a = !1
            }
            a ? this.resolveToNonPromiseObj_(d) : this.fulfill_(d)
        }
    };
    b.prototype.resolveToNonPromiseObj_ = function(b) {
        var a =
            void 0;
        try {
            a = b.then
        } catch (l) {
            this.reject_(l);
            return
        }
        "function" == typeof a ? this.settleSameAsThenable_(a, b) : this.fulfill_(b)
    };
    b.prototype.reject_ = function(b) {
        this.settle_(2, b)
    };
    b.prototype.fulfill_ = function(b) {
        this.settle_(1, b)
    };
    b.prototype.settle_ = function(b, a) {
        if (0 != this.state_) throw Error("Cannot settle(" + b + ", " + a | "): Promise already settled in state" + this.state_);
        this.state_ = b;
        this.result_ = a;
        this.executeOnSettledCallbacks_()
    };
    b.prototype.executeOnSettledCallbacks_ = function() {
        if (null != this.onSettledCallbacks_) {
            for (var b =
                    this.onSettledCallbacks_, a = 0; a < b.length; ++a) b[a].call(), b[a] = null;
            this.onSettledCallbacks_ = null
        }
    };
    var f = new e;
    b.prototype.settleSameAsPromise_ = function(b) {
        var a = this.createResolveAndReject_();
        b.callWhenSettled_(a.resolve, a.reject)
    };
    b.prototype.settleSameAsThenable_ = function(b, a) {
        var d = this.createResolveAndReject_();
        try {
            b.call(a, d.resolve, d.reject)
        } catch (m) {
            d.reject(m)
        }
    };
    b.prototype.then = function(a, f) {
        function d(b, a) {
            return "function" == typeof b ? function(a) {
                try {
                    h(b(a))
                } catch (t) {
                    c(t)
                }
            } : a
        }
        var h, c, e = new b(function(b,
            a) {
            h = b;
            c = a
        });
        this.callWhenSettled_(d(a, h), d(f, c));
        return e
    };
    b.prototype.catch = function(b) {
        return this.then(void 0, b)
    };
    b.prototype.callWhenSettled_ = function(b, a) {
        function d() {
            switch (h.state_) {
                case 1:
                    b(h.result_);
                    break;
                case 2:
                    a(h.result_);
                    break;
                default:
                    throw Error("Unexpected state: " + h.state_);
            }
        }
        var h = this;
        null == this.onSettledCallbacks_ ? f.asyncExecute(d) : this.onSettledCallbacks_.push(function() {
            f.asyncExecute(d)
        })
    };
    b.resolve = g;
    b.reject = function(a) {
        return new b(function(b, d) {
            d(a)
        })
    };
    b.race = function(a) {
        return new b(function(b,
            d) {
            for (var f = $jscomp.makeIterator(a), h = f.next(); !h.done; h = f.next()) g(h.value).callWhenSettled_(b, d)
        })
    };
    b.all = function(a) {
        var d = $jscomp.makeIterator(a),
            f = d.next();
        return f.done ? g([]) : new b(function(b, a) {
            function h(a) {
                return function(d) {
                    c[a] = d;
                    e--;
                    0 == e && b(c)
                }
            }
            var c = [],
                e = 0;
            do c.push(void 0), e++, g(f.value).callWhenSettled_(h(c.length - 1), a), f = d.next(); while (!f.done)
        })
    };
    return b
}, "es6", "es3");
var SS;
(function(c) {
    (function(c) {
        var e = function() {
            function a() {}
            a.addCommas = function(b, a, d) {
                void 0 === d && (d = !1);
                b = b.toFixed(a);
                switch (c.GameEnvironment.NumberFormat) {
                    case "EN":
                    case "en":
                        b = b.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1,");
                        break;
                    case "CL":
                    case "cl":
                        b = b.replace(".", ","), b = b.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.")
                }
                d && (b = "$" + b);
                return b
            };
            a.CheckOutOfRange = function(b, a, d) {
                return d < b || d >= a ? !0 : !1
            };
            a.accMul = function(b, a) {
                var d = 0,
                    f = 0;
                b = b.toString();
                a = a.toString();
                try {
                    d = b.split(".")[1].length
                } catch (l) {}
                try {
                    f =
                        a.split(".")[1].length
                } catch (l) {}
                return Number(b.replace(".", "")) * Number(a.replace(".", "")) / Math.pow(10, d + f)
            };
            a.accDiv = function(b, a) {
                var d = 0,
                    f = 0;
                try {
                    d = b.toString().split(".")[1].length
                } catch (l) {}
                try {
                    f = a.toString().split(".")[1].length
                } catch (l) {}
                b = Number(b.toString().replace(".", ""));
                a = Number(a.toString().replace(".", ""));
                return b / a * Math.pow(10, f - d)
            };
            a.Clamp = function(b, a, d) {
                return d < b ? b : d >= a ? a : d
            };
            a.GetURLParameterByName = function(b) {
                b = b.toLowerCase();
                b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                b = (new RegExp("[\\?&]" + b + "=([^&#]*)")).exec(location.search.toLowerCase());
                return null === b ? "" : decodeURIComponent(b[1].replace(/\+/g, " "))
            };
            a.CustomizeRound = function(b, a) {
                a = Math.pow(10, a);
                b = b * a + .5;
                return (b - b % 1) / a
            };
            a.setCookie = function(b, a, d) {
                var f = new Date;
                f.setTime(f.getTime() + 6E4 * d);
                d = "expires=" + f.toUTCString();
                document.cookie = b + "=" + a + "; " + d
            };
            a.getCookie = function(b) {
                b += "=";
                for (var a = document.cookie.split(";"), d = 0; d < a.length; d++) {
                    var c = a[d].trim();
                    if (0 == c.indexOf(b)) return c.substring(b.length, c.length)
                }
                return ""
            };
            a.SHA1 = function(b) {
                return sha1(b)
            };
            a.getKeyConvertArys = function(b) {
                if (null != b && void 0 != b) {
                    b = Object.keys(b);
                    for (var a = [], d = 0; d < b.length; d++) a.push(b[d]);
                    return a
                }
            };
            a.getWinType = function(b, a, d) {
                d = a / d;
                var f = 0;
                0 >= a ? f = 0 : 10 > d ? f = b ? 7 : 1 : 10 <= d && 20 > d ? f = 4 : 20 <= d && 50 > d ? f = 5 : 50 <= d && (f = 6);
                return f
            };
            a.GetThousandsStr = function(b) {
                return b.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1 ")
            };
            return a
        }();
        c.BaseFunction = e
    })(c.Common || (c.Common = {}))
})(SS || (SS = {}));
(function(c) {
    (function(c) {
        var e = function() {
            function b() {
                this._store = []
            }
            b.prototype.Dequeue = function() {
                if (0 >= this._store.length) return console.error("[Queue] Queue Element Not Exist "), null;
                var b = this._store[0];
                this._store.shift();
                return b
            };
            b.prototype.Enqueue = function(b) {
                this._store.push(b)
            };
            b.prototype.Clear = function() {
                this._store = []
            };
            Object.defineProperty(b.prototype, "Count", {
                get: function() {
                    return this._store.length
                },
                enumerable: !0,
                configurable: !0
            });
            return b
        }();
        c.Queue = e;
        e = function() {
            function b() {
                this._callbacks = []
            }
            Object.defineProperty(b.prototype, "Length", {
                get: function() {
                    return this._callbacks.length
                },
                enumerable: !0,
                configurable: !0
            });
            b.prototype.Insert = function(b, a) {
                for (var d = !1, c = 0; c < this._callbacks.length; c++) this._callbacks[c].func == b && this._callbacks[c].owner == a && (d = !0);
                d ? (console.error("Registered Error."), console.error(b), console.error(a)) : this._callbacks.push({
                    func: b,
                    owner: a
                })
            };
            b.prototype.Remove = function(b, a) {
                this._callbacks = this._callbacks.filter(function(d) {
                    return !(d.func == b && d.owner == a)
                })
            };
            b.prototype.Notify =
                function() {
                    for (var b = [], a = 0; a < arguments.length; a++) b[a] = arguments[a];
                    this._callbacks.map(function(a) {
                        a.func.bind(a.owner).apply(void 0, b)
                    })
                };
            b.prototype.Clear = function() {
                this._callbacks = []
            };
            return b
        }();
        c.Delegate = e;
        var a = [];
        c.WaitForSeconds = function(b) {
            var c = 0;
            return new Promise(function(d) {
                c = setTimeout(d, 1E3 * b);
                a.push(c)
            })
        };
        c.ReleaseAsyncSource = function() {
            for (var b = 0; b < a.length; b++) clearTimeout(a[b]);
            a = []
        };
        e = function() {
            function b() {
                this._keys = [];
                this._values = [];
                this.undefinedKeyErrorMessage = "Key is either undefined, null or an empty string."
            }
            b.prototype.isEitherUndefinedNullOrStringEmpty = function(b) {
                return "undefined" === typeof b || null === b || "" === b.toString()
            };
            b.prototype.checkKeyAndPerformAction = function(b, a, c) {
                if (this.isEitherUndefinedNullOrStringEmpty(a)) throw Error(this.undefinedKeyErrorMessage);
                return b(a, c)
            };
            b.prototype.add = function(b, a) {
                var d = this;
                this.checkKeyAndPerformAction(function(b, a) {
                    if (d.containsKey(b)) throw Error("An element with the same key already exists in the dictionary.");
                    d._keys.push(b);
                    d._values.push(a)
                }, b, a)
            };
            b.prototype.remove =
                function(b) {
                    var a = this;
                    return this.checkKeyAndPerformAction(function(b) {
                        if (!a.containsKey(b)) return !1;
                        b = a._keys.indexOf(b);
                        a._keys.splice(b, 1);
                        a._values.splice(b, 1);
                        return !0
                    }, b)
                };
            b.prototype.getValue = function(b) {
                var a = this;
                return this.checkKeyAndPerformAction(function(b) {
                    if (!a.containsKey(b)) return null;
                    b = a._keys.indexOf(b);
                    return a._values[b]
                }, b)
            };
            b.prototype.containsKey = function(b) {
                var a = this;
                return this.checkKeyAndPerformAction(function(b) {
                    return -1 === a._keys.indexOf(b) ? !1 : !0
                }, b)
            };
            b.prototype.changeValueForKey =
                function(b, a) {
                    var d = this;
                    this.checkKeyAndPerformAction(function(b, a) {
                        if (!d.containsKey(b)) throw Error("In the dictionary there is no element with the given key.");
                        b = d._keys.indexOf(b);
                        d._values[b] = a
                    }, b, a)
                };
            b.prototype.keys = function() {
                return this._keys
            };
            b.prototype.values = function() {
                return this._values
            };
            b.prototype.count = function() {
                return this._values.length
            };
            b.prototype.clear = function() {
                this._keys = [];
                this._values = []
            };
            return b
        }();
        c.Dictionary = e
    })(c.Common || (c.Common = {}))
})(SS || (SS = {}));
(function(c) {
    (function(e) {
        var g = function() {
            function a() {}
            a.GetIsGameIsVertical = function(b) {
                void 0 === b && (b = "");
                if (null == this.GameSetting) return !1;
                if ("" == b) {
                    if (null == this.CurrentGameNow || "" == this.CurrentGameNow) return !1;
                    if (this.GameSetting.hasOwnProperty("Icon")) {
                        var a = this.GameSetting.Icon;
                        for (var d in a)
                            if (a[d].GameName == this.CurrentGameNow) return a[d].Vertical
                    }
                } else if (this.GameSetting.hasOwnProperty("Icon"))
                    for (d in a = this.GameSetting.Icon, a)
                        if (a[d].GameName == b) return a[d].Vertical;
                return !1
            };
            a.GetCurGameIsVertical =
                function() {
                    return this.GetIsGameIsVertical()
                };
            a.ResetOrientationchange = function(b) {
                b = b ? window.parent : window;
                var a = b.document.createEvent("UIEvents");
                a.initUIEvent("resize", !0, !1, b, 0);
                b.dispatchEvent(a);
                a = b.document.createEvent("UIEvents");
                a.initUIEvent("orientationchange", !0, !1, b, 0);
                b.dispatchEvent(a)
            };
            a.Initialize = function(b, c, d) {
                a.OnSuccess = c;
                a.OnError = d;
                try {
                    a.ProjectSetting = b, a.SetupEnvironment()
                } catch (h) {
                    console.error("[GameEnvironment] Load project setting failed.\n", h), null != a.OnError && a.OnError(h)
                }
            };
            a.SetupEnvironment = function() {
                a.QueruStr = JSUtility.GetURLParameter();
                a.SetupLanguage();
                a.SetupNumberFormat();
                a.DeviceInfo = (new UAParser).getResult();
                console.log("[GameEnvironment] %c Device Information: %c", "font-size:18px;font-weight:bold;color:tomato", "", a.DeviceInfo);
                a.ProjectSetting.hasOwnProperty("IsUseCheatKey") && (this.IsUseCheatKey = a.ProjectSetting.IsUseCheatKey);
                null != a.OnSuccess && a.OnSuccess()
            };
            a.SetupLanguage = function() {
                a.SupportLanguage = a.ProjectSetting.SupportLanguage;
                a.Language = void 0 ==
                    a.ProjectSetting.Language ? "en" : a.ProjectSetting.Language;
                console.log("[GameEnvironment] %c Current Language: " + a.Language, "font-size:18px;font-weight:bold;color:green")
            };
            a.SetupNumberFormat = function() {
                a.NumberFormat = a.ProjectSetting.NumberFormat;
                console.log("[GameEnvironment] NumberFormat: " + a.Language)
            };
            a.ReflashBrowser = function() {
                location.assign(c.Common.GameEnvironment.IndexPath)
            };
            Object.defineProperty(a, "IndexPath", {
                get: function() {
                    var b = "index.html";
                    c.Common.GameEnvironment.GetURLParameter("standalone") &&
                        (b = "index_ni.html");
                    c.Common.GameEnvironment.ProjectSetting.CDN_HOST && (b = "");
                    return location.protocol + "//" + location.host + "/" + b + location.search
                },
                enumerable: !0,
                configurable: !0
            });
            a.GetURLParameter = function(b) {
                b = b.toLowerCase();
                b = b.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                b = (new RegExp("[\\?&]" + b + "=([^&#]*)")).exec(location.search.toLowerCase());
                return null === b ? "" : decodeURIComponent(b[1].replace(/\+/g, " "))
            };
            a.SetGameMappingData = function() {
                if (null != this.GameSetting && this.GameSetting.hasOwnProperty("Icon")) {
                    var b =
                        this.GameSetting.Icon,
                        a;
                    for (a in b) this.GameNameMappingIdDict[b[a].GameName] = a
                }
            };
            a.GetGameIdByName = function(b) {
                return null == this.GameNameMappingIdDict ? "" : this.GameNameMappingIdDict[b]
            };
            a.ProjectSetting = null;
            a.GameSetting = null;
            a.QueruStr = null;
            a.SupportLanguage = null;
            a.Language = "en";
            a.NumberFormat = "en";
            a.LobbyVersion = null;
            a.S3URL = "";
            a.IgnoreVersionCtrl = !1;
            a.IsUseCheatKey = !1;
            a.IsUseScoreBox = !1;
            a.IsUseShutter = !1;
            a.IsUseSlotSkillGame = !1;
            a.IsUseCellPhoneVerify = !1;
            a.ChangeToGameName = "";
            a.InGameJpInfoDict = {};
            a.DeviceInfo = null;
            a.IconNameMapSpriteFrame = {};
            a.IsMute = null;
            a.CurrentTypeGameCounts = {};
            a.CurrentGameTypeNow = null;
            a.GameTypeMapScrollContentPos = {};
            a.CurrentGameNow = null;
            a.CurrentGameBundle = null;
            a.CurrentGameVersion = "";
            a.DisableMenuBtn = null;
            a.exchange_rate = null;
            a.UserID = "";
            a.UserPW = "";
            a.Splash = null;
            a.verticalSplashSRC = null;
            a.OriginalSplashSRC = null;
            a.SentFlowStatus = [];
            a.GameNameMappingIdDict = {};
            a.SentGameFlowStatus = [];
            a.OnSuccess = null;
            a.OnError = null;
            return a
        }();
        e.GameEnvironment = g
    })(c.Common || (c.Common = {}))
})(SS || (SS = {}));
var shared = new Uint32Array(80);

function sha1Stream() {
    return create(!1)
}

function sha1(c) {
    var e = create(!0);
    e.update(c);
    return e.digest()
}

function create(c) {
    function e(b) {
        p[m] |= (b & 255) << k;
        k ? k -= 8 : (m++, k = 24);
        16 === m && g()
    }

    function g() {
        for (var a = 16; 80 > a; a++) {
            var c = p[a - 3] ^ p[a - 8] ^ p[a - 14] ^ p[a - 16];
            p[a] = c << 1 | c >>> 31
        }
        c = b;
        var e = f,
            g = d,
            q = h,
            n = l;
        for (a = 0; 80 > a; a++) {
            if (20 > a) {
                var k = q ^ e & (g ^ q);
                var r = 1518500249
            } else 40 > a ? (k = e ^ g ^ q, r = 1859775393) : 60 > a ? (k = e & g | q & (e | g), r = 2400959708) : (k = e ^ g ^ q, r = 3395469782);
            k = (c << 5 | c >>> 27) + k + n + r + (p[a] | 0);
            n = q;
            q = g;
            g = e << 30 | e >>> 2;
            e = c;
            c = k
        }
        b = b + c | 0;
        f = f + e | 0;
        d = d + g | 0;
        h = h + q | 0;
        l = l + n | 0;
        for (a = m = 0; 16 > a; a++) p[a] = 0
    }

    function a(a) {
        for (var b = "", c = 28; 0 <=
            c; c -= 4) b += (a >> c & 15).toString(16);
        return b
    }
    var b = 1732584193,
        f = 4023233417,
        d = 2562383102,
        h = 271733878,
        l = 3285377520,
        m = 0,
        k = 24,
        n = 0;
    var p = c ? shared : new Uint32Array(80);
    return {
        update: function(a) {
            if ("string" === typeof a) {
                var b = a.length;
                n += 8 * b;
                for (var c = 0; c < b; c++) e(a.charCodeAt(c))
            } else
                for (b = a.length, n += 8 * b, c = 0; c < b; c++) e(a[c])
        },
        digest: function() {
            e(128);
            (14 < m || 14 === m && 24 > k) && g();
            m = 14;
            k = 24;
            e(0);
            e(0);
            e(0xffffffffff < n ? n / 1099511627776 : 0);
            e(4294967295 < n ? n / 4294967296 : 0);
            for (var c = 24; 0 <= c; c -= 8) e(n >> c);
            return a(b) + a(f) +
                a(d) + a(h) + a(l)
        }
    }
};