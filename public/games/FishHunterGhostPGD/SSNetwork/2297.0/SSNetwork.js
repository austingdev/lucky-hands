var serverString='';
var serverStringNext='';
var firstWebsocket = true;

var XmlHttpRequest = new XMLHttpRequest();
XmlHttpRequest.overrideMimeType("application/json");
XmlHttpRequest.open('GET', '/arcade_config.json', false);
XmlHttpRequest.onreadystatechange = function ()
{
    if (XmlHttpRequest.readyState == 4 && XmlHttpRequest.status == "200")
    {
        var serverConfig = JSON.parse(XmlHttpRequest.responseText);
        serverString=serverConfig.prefix_ws+serverConfig.host_ws+':' + serverConfig.port;
        serverStringNext = serverConfig.prefix_ws+serverConfig.host_ws+':'+ serverConfig.port + "/FishHunterGhost";
    }
}
XmlHttpRequest.send(null);

var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(h, d, r) {
    h != Array.prototype && h != Object.prototype && (h[d] = r.value)
};
$jscomp.getGlobal = function(h) {
    return "undefined" != typeof window && window === h ? h : "undefined" != typeof global && null != global ? global : h
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {};
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
};
$jscomp.symbolCounter_ = 0;
$jscomp.Symbol = function(h) {
    return $jscomp.SYMBOL_PREFIX + (h || "") + $jscomp.symbolCounter_++
};
$jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var h = $jscomp.global.Symbol.iterator;
    h || (h = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
    "function" != typeof Array.prototype[h] && $jscomp.defineProperty(Array.prototype, h, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.arrayIterator(this)
        }
    });
    $jscomp.initSymbolIterator = function() {}
};
$jscomp.arrayIterator = function(h) {
    var d = 0;
    return $jscomp.iteratorPrototype(function() {
        return d < h.length ? {
            done: !1,
            value: h[d++]
        } : {
            done: !0
        }
    })
};
$jscomp.iteratorPrototype = function(h) {
    $jscomp.initSymbolIterator();
    h = {
        next: h
    };
    h[$jscomp.global.Symbol.iterator] = function() {
        return this
    };
    return h
};
$jscomp.makeIterator = function(h) {
    $jscomp.initSymbolIterator();
    var d = h[Symbol.iterator];
    return d ? d.call(h) : $jscomp.arrayIterator(h)
};
$jscomp.polyfill = function(h, d, r, c) {
    if (d) {
        r = $jscomp.global;
        h = h.split(".");
        for (c = 0; c < h.length - 1; c++) {
            var a = h[c];
            a in r || (r[a] = {});
            r = r[a]
        }
        h = h[h.length - 1];
        c = r[h];
        d = d(c);
        d != c && null != d && $jscomp.defineProperty(r, h, {
            configurable: !0,
            writable: !0,
            value: d
        })
    }
};
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.polyfill("Promise", function(h) {
    function d() {
        this.batch_ = null
    }

    function r(b) {
        return b instanceof a ? b : new a(function(a, f) {
            a(b)
        })
    }
    if (h && !$jscomp.FORCE_POLYFILL_PROMISE) return h;
    d.prototype.asyncExecute = function(a) {
        null == this.batch_ && (this.batch_ = [], this.asyncExecuteBatch_());
        this.batch_.push(a);
        return this
    };
    d.prototype.asyncExecuteBatch_ = function() {
        var a = this;
        this.asyncExecuteFunction(function() {
            a.executeBatch_()
        })
    };
    var c = $jscomp.global.setTimeout;
    d.prototype.asyncExecuteFunction = function(a) {
        c(a,
            0)
    };
    d.prototype.executeBatch_ = function() {
        for (; this.batch_ && this.batch_.length;) {
            var a = this.batch_;
            this.batch_ = [];
            for (var b = 0; b < a.length; ++b) {
                var c = a[b];
                delete a[b];
                try {
                    c()
                } catch (k) {
                    this.asyncThrow_(k)
                }
            }
        }
        this.batch_ = null
    };
    d.prototype.asyncThrow_ = function(a) {
        this.asyncExecuteFunction(function() {
            throw a;
        })
    };
    var a = function(a) {
        this.state_ = 0;
        this.result_ = void 0;
        this.onSettledCallbacks_ = [];
        var b = this.createResolveAndReject_();
        try {
            a(b.resolve, b.reject)
        } catch (q) {
            b.reject(q)
        }
    };
    a.prototype.createResolveAndReject_ =
        function() {
            function a(a) {
                return function(f) {
                    c || (c = !0, a.call(b, f))
                }
            }
            var b = this,
                c = !1;
            return {
                resolve: a(this.resolveTo_),
                reject: a(this.reject_)
            }
        };
    a.prototype.resolveTo_ = function(b) {
        if (b === this) this.reject_(new TypeError("A Promise cannot resolve to itself"));
        else if (b instanceof a) this.settleSameAsPromise_(b);
        else {
            a: switch (typeof b) {
                case "object":
                    var f = null != b;
                    break a;
                case "function":
                    f = !0;
                    break a;
                default:
                    f = !1
            }
            f ? this.resolveToNonPromiseObj_(b) : this.fulfill_(b)
        }
    };
    a.prototype.resolveToNonPromiseObj_ = function(a) {
        var b =
            void 0;
        try {
            b = a.then
        } catch (q) {
            this.reject_(q);
            return
        }
        "function" == typeof b ? this.settleSameAsThenable_(b, a) : this.fulfill_(a)
    };
    a.prototype.reject_ = function(a) {
        this.settle_(2, a)
    };
    a.prototype.fulfill_ = function(a) {
        this.settle_(1, a)
    };
    a.prototype.settle_ = function(a, b) {
        if (0 != this.state_) throw Error("Cannot settle(" + a + ", " + b | "): Promise already settled in state" + this.state_);
        this.state_ = a;
        this.result_ = b;
        this.executeOnSettledCallbacks_()
    };
    a.prototype.executeOnSettledCallbacks_ = function() {
        if (null != this.onSettledCallbacks_) {
            for (var a =
                    this.onSettledCallbacks_, b = 0; b < a.length; ++b) a[b].call(), a[b] = null;
            this.onSettledCallbacks_ = null
        }
    };
    var b = new d;
    a.prototype.settleSameAsPromise_ = function(a) {
        var b = this.createResolveAndReject_();
        a.callWhenSettled_(b.resolve, b.reject)
    };
    a.prototype.settleSameAsThenable_ = function(a, b) {
        var c = this.createResolveAndReject_();
        try {
            a.call(b, c.resolve, c.reject)
        } catch (k) {
            c.reject(k)
        }
    };
    a.prototype.then = function(b, c) {
        function f(a, b) {
            return "function" == typeof a ? function(b) {
                try {
                    g(a(b))
                } catch (E) {
                    d(E)
                }
            } : b
        }
        var g, d, h = new a(function(a,
            b) {
            g = a;
            d = b
        });
        this.callWhenSettled_(f(b, g), f(c, d));
        return h
    };
    a.prototype.catch = function(a) {
        return this.then(void 0, a)
    };
    a.prototype.callWhenSettled_ = function(a, c) {
        function f() {
            switch (g.state_) {
                case 1:
                    a(g.result_);
                    break;
                case 2:
                    c(g.result_);
                    break;
                default:
                    throw Error("Unexpected state: " + g.state_);
            }
        }
        var g = this;
        null == this.onSettledCallbacks_ ? b.asyncExecute(f) : this.onSettledCallbacks_.push(function() {
            b.asyncExecute(f)
        })
    };
    a.resolve = r;
    a.reject = function(b) {
        return new a(function(a, c) {
            c(b)
        })
    };
    a.race = function(b) {
        return new a(function(a,
            c) {
            for (var f = $jscomp.makeIterator(b), g = f.next(); !g.done; g = f.next()) r(g.value).callWhenSettled_(a, c)
        })
    };
    a.all = function(b) {
        var c = $jscomp.makeIterator(b),
            f = c.next();
        return f.done ? r([]) : new a(function(a, b) {
            function g(b) {
                return function(c) {
                    d[b] = c;
                    k--;
                    0 == k && a(d)
                }
            }
            var d = [],
                k = 0;
            do d.push(void 0), k++, r(f.value).callWhenSettled_(g(d.length - 1), b), f = c.next(); while (!f.done)
        })
    };
    return a
}, "es6", "es3");
$jscomp.polyfill("Object.setPrototypeOf", function(h) {
    return h ? h : "object" != typeof "".__proto__ ? null : function(d, h) {
        d.__proto__ = h;
        if (d.__proto__ !== h) throw new TypeError(d + " is not extensible");
        return d
    }
}, "es6", "es5");
$jscomp.iteratorFromArray = function(h, d) {
    $jscomp.initSymbolIterator();
    h instanceof String && (h += "");
    var r = 0,
        c = {
            next: function() {
                if (r < h.length) {
                    var a = r++;
                    return {
                        value: d(a, h[a]),
                        done: !1
                    }
                }
                c.next = function() {
                    return {
                        done: !0,
                        value: void 0
                    }
                };
                return c.next()
            }
        };
    c[Symbol.iterator] = function() {
        return c
    };
    return c
};
$jscomp.polyfill("Array.prototype.keys", function(h) {
    return h ? h : function() {
        return $jscomp.iteratorFromArray(this, function(d) {
            return d
        })
    }
}, "es6", "es3");
var __awaiter = this && this.__awaiter || function(h, d, r, c) {
        return new(r || (r = Promise))(function(a, b) {
            function f(a) {
                try {
                    q(c.next(a))
                } catch (m) {
                    b(m)
                }
            }

            function g(a) {
                try {
                    q(c["throw"](a))
                } catch (m) {
                    b(m)
                }
            }

            function q(b) {
                b.done ? a(b.value) : (new r(function(a) {
                    a(b.value)
                })).then(f, g)
            }
            q((c = c.apply(h, d || [])).next())
        })
    },
    __generator = this && this.__generator || function(h, d) {
        function r(a) {
            return function(b) {
                return c([a, b])
            }
        }

        function c(c) {
            if (b) throw new TypeError("Generator is already executing.");
            for (; a;) try {
                if (b = 1, f && (g = c[0] &
                        2 ? f["return"] : c[0] ? f["throw"] || ((g = f["return"]) && g.call(f), 0) : f.next) && !(g = g.call(f, c[1])).done) return g;
                if (f = 0, g) c = [c[0] & 2, g.value];
                switch (c[0]) {
                    case 0:
                    case 1:
                        g = c;
                        break;
                    case 4:
                        return a.label++, {
                            value: c[1],
                            done: !1
                        };
                    case 5:
                        a.label++;
                        f = c[1];
                        c = [0];
                        continue;
                    case 7:
                        c = a.ops.pop();
                        a.trys.pop();
                        continue;
                    default:
                        if (!(g = a.trys, g = 0 < g.length && g[g.length - 1]) && (6 === c[0] || 2 === c[0])) {
                            a = 0;
                            continue
                        }
                        if (3 === c[0] && (!g || c[1] > g[0] && c[1] < g[3])) a.label = c[1];
                        else if (6 === c[0] && a.label < g[1]) a.label = g[1], g = c;
                        else if (g && a.label <
                            g[2]) a.label = g[2], a.ops.push(c);
                        else {
                            g[2] && a.ops.pop();
                            a.trys.pop();
                            continue
                        }
                }
                c = d.call(h, a)
            } catch (m) {
                c = [6, m], f = 0
            } finally {
                b = g = 0
            }
            if (c[0] & 5) throw c[1];
            return {
                value: c[0] ? c[1] : void 0,
                done: !0
            }
        }
        var a = {
                label: 0,
                sent: function() {
                    if (g[0] & 1) throw g[1];
                    return g[1]
                },
                trys: [],
                ops: []
            },
            b, f, g, q;
        return q = {
            next: r(0),
            "throw": r(1),
            "return": r(2)
        }, "function" === typeof Symbol && (q[Symbol.iterator] = function() {
            return this
        }), q
    },
    ArkSDK;
(function(h) {
    h.HttpResult = {
        OK: 0,
        Abort: 1,
        Timeout: 2,
        Error: 3,
        Status: 4,
        NotReset: 5,
        Condition: 6
    };
    var d = function() {
        function c() {}
        c.do_get = function(a, b, c) {
            void 0 === b && (b = null);
            void 0 === c && (c = 15E3);
            return __awaiter(this, void 0, void 0, function() {
                var f, d;
                return __generator(this, function(g) {
                    switch (g.label) {
                        case 0:
                            return f = new r(c), [4, f.send_get(a, b)];
                        case 1:
                            return d = g.sent(), [2, d]
                    }
                })
            })
        };
        c.do_post = function(a, b, c, g) {
            void 0 === b && (b = null);
            void 0 === c && (c = 15E3);
            void 0 === g && (g = null);
            return __awaiter(this, void 0, void 0,
                function() {
                    var f, d;
                    return __generator(this, function(k) {
                        switch (k.label) {
                            case 0:
                                return f = new r(c), [4, f.send_post(a, b, g)];
                            case 1:
                                return d = k.sent(), [2, d]
                        }
                    })
                })
        };
        c.HttpConnect = c;
        c.HttpResult = h.HttpResult;
        return c
    }();
    h.HttpConnect = d;
    var r = function() {
        function c(a) {
            void 0 === a && (a = 15E3);
            this.timeout = 0;
            this.conn = null;
            this.url = "";
            this.data = null;
            this.timeout = a;
            this.reset()
        }
        c.prototype.reset = function() {
            this.data = this.url = this.conn = null
        };
        c.prototype.send_get = function(a, b) {
            void 0 === b && (b = null);
            var c = this.conn;
            if (null !=
                c) return new Promise(function(a, b) {
                b({
                    result: h.HttpResult.NotReset,
                    status: 0,
                    text: "NotReset",
                    conn: null
                })
            }.bind(this));
            c = this.conn = new XMLHttpRequest;
            this.url = a;
            this.data = b;
            if (null != b) {
                var d = "",
                    q;
                for (q in b) "" != d && (d += "&"), d += q + "=" + encodeURIComponent(b[q]);
                "" != d && (0 > a.indexOf("?") && (a += "?"), a += d)
            }
            c.open("POST", a);
            console.log("URL : " + a, "Time :" + this.timeout);
            c.timeout = this.timeout;
            return new Promise(function(a, b) {
                c.onload = this._onload.bind(this, a, b, c);
                c.onabort = this._onerror.bind(this, b, h.HttpResult.Abort);
                c.onerror = this._onerror.bind(this, b, h.HttpResult.Error);
                c.ontimeout = this._onerror.bind(this, b, h.HttpResult.Timeout);
                c.send()
            }.bind(this))
        };
        c.prototype.send_post = function(a, b, c) {
            void 0 === b && (b = null);
            void 0 === c && (c = null);
            var f = this.conn;
            if (null != f) return new Promise(function(a, b) {
                b({
                    result: h.HttpResult.NotReset,
                    status: 0,
                    text: "NotReset",
                    conn: null
                })
            }.bind(this));
            f = this.conn = new XMLHttpRequest;
            this.url = a;
            this.data = b;
            var d = "";
            if (null != b)
                if ("string" === typeof b) d = b;
                else
                    for (var k in b) "" != d && (d += "&"), d +=
                        k + "=" + encodeURIComponent(b[k]);
            f.open("POST", a, !0);
            f.timeout = this.timeout;
            if (void 0 !== c && null != c)
                for (k in c) f.setRequestHeader(k, c[k]);
            else f.setRequestHeader("Content-Type", "text/plain; charset=UTF-8");
            return new Promise(function(a, b) {
                f.onload = this._onload.bind(this, a, b, f);
                f.onabort = this._onerror.bind(this, b, h.HttpResult.Abort);
                f.onerror = this._onerror.bind(this, b, h.HttpResult.Error);
                f.ontimeout = this._onerror.bind(this, b, h.HttpResult.Timeout);
                f.send(d)
            }.bind(this))
        };
        c.prototype._onload = function(a,
            b, c) {
            var f = {
                result: h.HttpResult.Status,
                status: c.status,
                text: c.responseText,
                conn: c
            };
            200 <= c.status && 400 > c.status ? (f.result = h.HttpResult.OK, a(f)) : b(f);
            this.reset()
        };
        c.prototype._onerror = function(a, b, c) {
            var f = "";
            b == h.HttpResult.Abort ? f = "Abort" : b == h.HttpResult.Error ? f = "Error" : b == h.HttpResult.Timeout && (f = "Timeout");
            "undefined" != typeof c && c && (f += ":" + c.toString());
            b = {
                result: b,
                status: this.conn.status,
                text: f,
                conn: this.conn
            };
            console.error(f);
            a(b);
            this.reset()
        };
        return c
    }()
})(ArkSDK || (ArkSDK = {}));
(function(h) {
    var d = function() {
        function d(c) {
            this.fromToken = this.fromID = this.fromType = this.arkKey = this.arkToken = this.arkID = this.inviteCode = this.autoID = "";
            this.gameUrl = c
        }
        Object.defineProperty(d.prototype, "GameUrl", {
            get: function() {
                return this.gameUrl
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(d.prototype, "ArkKey", {
            get: function() {
                return this.arkKey
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(d.prototype, "ArkID", {
            get: function() {
                return this.arkID
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(d.prototype, "ArkToken", {
            get: function() {
                return this.arkToken
            },
            enumerable: !0,
            configurable: !0
        });
        d.prototype.clone = function(c) {
            this.fromType = c.fromType || "";
            this.fromID = c.fromID || "";
            this.fromToken = c.fromToken || "";
            this.autoID = c.autoID || "";
            this.inviteCode = c.inviteCode || "";
            this.arkID = c.arkID || "";
            this.arkToken = c.arkToken || "";
            this.arkKey = c.arkKey || ""
        };
        d.get_sn = function() {
            d.sn += 1;
            var c = Math.floor(.001 * (new Date).getTime());
            d.nowSceond != c && (d.nowSceond = c, d.sn = 0);
            return (1E3 * d.nowSceond + d.sn).toString()
        };
        d.prototype.encodeData = function(c, a, b) {
            void 0 === a && (a = null);
            void 0 === b && (b = null);
            return __awaiter(this, void 0, void 0, function() {
                var f, d, q, k, m, r;
                return __generator(this, function(g) {
                    switch (g.label) {
                        case 0:
                            return a = a || function(a, b) {}, this.arkKey ? [3, 2] : [4, this._getKey(a, b)];
                        case 1:
                            f = g.sent();
                            if (f.result != h.HttpConnect.HttpResult.OK) return [2, ""];
                            g.label = 2;
                        case 2:
                            if (!this.arkKey) return console.error("encodeData need arkKey(" + this.arkKey + ")"), a(h.HttpConnect.HttpResult.Condition, "", b), [2, ""];
                            d = JSON.stringify(c);
                            q = Coder.base64_encode(d);
                            k = Coder.hmac_sha1(this.arkKey, q);
                            m = {
                                ark_sign: k,
                                ark_data: q
                            };
                            r = Coder.base64_encode(JSON.stringify(m));
                            return [2, r]
                    }
                })
            })
        };
        d.prototype.decodeData = function(c) {
            c = Coder.decode(c);
            return "" == c ? null : JSON.parse(c)
        };
        d.prototype._getKey = function(c, a) {
            void 0 === a && (a = null);
            return __awaiter(this, void 0, void 0, function() {
                var b, f;
                return __generator(this, function(d) {
                    switch (d.label) {
                        case 0:
                            c = c || function(a, b) {}, b = null, d.label = 1;
                        case 1:
                            return d.trys.push([1, 3, , 4]), [4, h.HttpConnect.do_get(this.gameUrl)];
                        case 2:
                            return b = d.sent(), this.arkKey = b.text, [3, 4];
                        case 3:
                            return b = f = d.sent(), c(b.result, b, a), [3, 4];
                        case 4:
                            return [2, b]
                    }
                })
            })
        };
        d.prototype._login = function(c, a, b, f, g, q) {
            void 0 === g && (g = null);
            void 0 === q && (q = null);
            return __awaiter(this, void 0, void 0, function() {
                var k, m, r, A, B;
                return __generator(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return f = f || function(a, b) {}, q = q || d.get_sn(), k = {
                                from_type: c,
                                from_id: a,
                                from_token: b,
                                ark_sn: q
                            }, g && (k.extra_data = g), m = null, [4, this.encodeData(k, f)];
                        case 1:
                            r = u.sent();
                            if (!r) return [2,
                                null
                            ];
                            m = null;
                            console.log("send _login", this.gameUrl + "/login", k);
                            u.label = 2;
                        case 2:
                            return u.trys.push([2, 4, , 5]), [4, h.HttpConnect.do_post(this.gameUrl + "&command2=login", r)];
                        case 3:
                            return m = u.sent(), [3, 5];
                        case 4:
                            return m = A = u.sent(), [3, 5];
                        case 5:
                            if (m.result != h.HttpConnect.HttpResult.OK) return f(m.result, m), [2, null];
                            B = this.decodeData(m.text);
                            console.log("recv _login", JSON.stringify(B));
                            this.autoID = B.auto_id || "";
                            this.inviteCode = B.invite_code || "";
                            return this.autoID && this.inviteCode ? [2, B] : (f(h.HttpConnect.HttpResult.Condition,
                                m), [2, null])
                    }
                })
            })
        };
        d.prototype._auth = function(c, a, b, f, g) {
            void 0 === f && (f = null);
            void 0 === g && (g = null);
            return __awaiter(this, void 0, void 0, function() {
                var q, k, m, r, A;
                return __generator(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return b = b || function(a, b) {}, g = g || d.get_sn(), q = {
                                auto_id: c,
                                invite_code: a,
                                ark_sn: g
                            }, f && (q.extra_data = f), [4, this.encodeData(q, b)];
                        case 1:
                            k = u.sent();
                            if (!k) return [2, null];
                            console.log("send _auth", this.gameUrl + "/auth", JSON.stringify(q));
                            m = null;
                            u.label = 2;
                        case 2:
                            return u.trys.push([2, 4, , 5]), [4, h.HttpConnect.do_post(this.gameUrl + "&command2=auth", k)];
                        case 3:
                            return m = u.sent(), [3, 5];
                        case 4:
                            return m = r = u.sent(), [3, 5];
                        case 5:
                            if (m.result != h.HttpConnect.HttpResult.OK) return b(m.result, null), [2, null];
                            A = this.decodeData(m.text);
                            console.log("recv _auth", JSON.stringify(A));
                            this.arkID = A.ark_id || "";
                            this.arkToken = A.ark_token || "";
                            if (!this.arkID || !this.arkToken) return b(h.HttpConnect.HttpResult.Condition, m), [2, null];
                            b(h.HttpConnect.HttpResult.OK, A);
                            return [2, A]
                    }
                })
            })
        };
        d.prototype.send_cmd = function(c, a, b, f, g, q, k) {
            void 0 ===
                g && (g = 15E3);
            return __awaiter(this, void 0, void 0, function() {
                var m, r, A, B, L, E, I;
                return __generator(this, function(u) {
                    switch (u.label) {
                        case 0:
                            b = b || {};
                            f = f || function(a, b, c) {};
                            q = q || d.get_sn();
                            m = (new Date).getTime();
                            b.device = 1;
                            d.allowState && (b.allow_state = d.allowState);
                            try {
                                b.mode = gd_LogoMode
                            } catch (J) {
                                return f(h.HttpConnect.HttpResult.Condition, "", a), [2, null]
                            }
                            r = {
                                ark_id: this.arkID,
                                ark_token: this.arkToken,
                                cmd_id: c,
                                cmd_name: a,
                                cmd_data: b,
                                cmd_sn: q
                            };
                            k && (r.extra = k);
                            console.warn(JSON.stringify(r));
                            return [4, this.encodeData(r,
                                f)];
                        case 1:
                            A = u.sent();
                            if (!A) return console.error("send_json error : " + A), [2, null];
                            B = null;
                            u.label = 2;
                        case 2:
                            if(this.gameUrl.indexOf('waf-fishghost.goldendragoncity.com')!=-1){
                                this.gameUrl=window.location.protocol + "//" + window.location.host+'/game/FishHunterGhostPGD/server?command=lobby&command3=game&sessionId='+sessionStorage.getItem('sessionId');	
                            }
                            return u.trys.push([2, 4, , 5]), [4, h.HttpConnect.do_post(this.gameUrl + "&command2=command", A, g)];
                        case 3:
                            return B = u.sent(), [3, 5];
                        case 4:
                            return B = L = u.sent(), [3, 5];
                        case 5:
                            E = (new Date).getTime() - m;
                            if (B.result != h.HttpConnect.HttpResult.OK) return f(B.result, B, a, E), [2, null];
                            I = this.decodeData(B.text);
                            f(h.HttpConnect.HttpResult.OK, I, a, E);
                            return [2, I]
                    }
                })
            })
        };
        d.prototype.send_drt_cmd = function(c, a, b, f, g, q) {
            return __awaiter(this,
                void 0, void 0,
                function() {
                    var k, m, r, A, B;
                    return __generator(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return b = b || {}, f = f || function(a, b) {}, g = g || d.get_sn(), k = {
                                    cmd_id: c,
                                    cmd_name: a,
                                    cmd_data: b,
                                    cmd_sn: g
                                }, q && (k.extra = q), console.warn(JSON.stringify(k)), [4, this.encodeData(k, f)];
                            case 1:
                                m = u.sent();
                                if (!m) return [2, null];
                                r = null;
                                u.label = 2;
                            case 2:
                                return u.trys.push([2, 4, , 5]), [4, h.HttpConnect.do_post(this.gameUrl + "&command2=drtcmd", m)];
                            case 3:
                                return r = u.sent(), [3, 5];
                            case 4:
                                return r = A = u.sent(), [3, 5];
                            case 5:
                                if (r.result != h.HttpConnect.HttpResult.OK) return f(r.result,
                                    r), [2, null];
                                B = this.decodeData(r.text);
                                f(h.HttpConnect.HttpResult.OK, B);
                                return [2, B]
                        }
                    })
                })
        };
        d.prototype.DeviceLogin = function(c, a, b, f) {
            void 0 === b && (b = null);
            void 0 === f && (f = null);
            var d = localStorage.getItem("uuid");
            null != d && 0 != d.length || this.get_uuid(function(a, b) {
                a == h.HttpConnect.HttpResult.OK ? (console.log("uuid: " + b), localStorage.setItem("uuid", b), d = b) : console.error("Get uuid fail:(" + a + ")" + JSON.stringify(b))
            });
            null != d && 0 < d.length && this.device_login(c, d, a, b, f)
        };
        d.prototype.get_uuid = function(c) {
            void 0 ===
                c && (c = null);
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(a) {
                    switch (a.label) {
                        case 0:
                            return [4, this.send_drt_cmd("uuid", "getid", {}, c)];
                        case 1:
                            return [2, a.sent()]
                    }
                })
            })
        };
        d.prototype.device_login = function(c, a, b, f, d, h) {
            void 0 === b && (b = null);
            void 0 === f && (f = null);
            void 0 === d && (d = null);
            void 0 === h && (h = null);
            return __awaiter(this, void 0, void 0, function() {
                var g, m;
                return __generator(this, function(k) {
                    switch (k.label) {
                        case 0:
                            return b = b || function(a, b) {}, [4, this._device_token(a, b)];
                        case 1:
                            return (g =
                                k.sent()) ? [4, this._login(c, a, g, b, f, h)] : [2, {}];
                        case 2:
                            return (m = k.sent()) ? [4, this._auth(m.auto_id, m.invite_code, b, d, h)] : [2, m];
                        case 3:
                            return m = k.sent(), [2, m]
                    }
                })
            })
        };
        d.prototype._device_token = function(c, a) {
            void 0 === a && (a = null);
            return __awaiter(this, void 0, void 0, function() {
                var b;
                return __generator(this, function(f) {
                    switch (f.label) {
                        case 0:
                            return a = a || function(a, b) {}, this.arkKey ? [3, 2] : [4, this._getKey(a)];
                        case 1:
                            b = f.sent();
                            if (b.result != h.HttpConnect.HttpResult.OK) return [2, ""];
                            f.label = 2;
                        case 2:
                            return this.arkKey ? [2, Coder.hmac_sha1(this.arkKey, Coder.base64_encode(c))] : (console.error("_device_token need arkKey(" + this.arkKey + ")"), a(h.HttpConnect.HttpResult.Condition, ""), [2, ""])
                    }
                })
            })
        };
        d.prototype.custom_login = function(c, a, b, f, d, h, k) {
            void 0 === d && (d = null);
            void 0 === h && (h = null);
            void 0 === k && (k = null);
            return __awaiter(this, void 0, void 0, function() {
                var g;
                return __generator(this, function(m) {
                    switch (m.label) {
                        case 0:
                            return f = f || function(a, b) {}, b ? [4, this._login(c, a, b, f, d, k)] : [2, {}];
                        case 1:
                            return (g = m.sent()) ? [4, this._auth(g.auto_id,
                                g.invite_code, f, h, k)] : [2, g];
                        case 2:
                            return g = m.sent(), [2, g]
                    }
                })
            })
        };
        d.sn = 0;
        d.nowSceond = 0;
        return d
    }();
    h.ArkClient = d
})(ArkSDK || (ArkSDK = {}));
(function(h) {
    h.SocketResult = {
        OK: 0,
        Timeout: 1,
        Error: 2,
        NotReset: 3
    };
    var d = function() {
        function d(c, a, b, f, d) {
            void 0 === c && (c = null);
            void 0 === a && (a = 1024);
            void 0 === b && (b = 10);
            void 0 === f && (f = 10);
            void 0 === d && (d = !1);
            this.arkClient = null;
            this.gameUrl = "";
            this.socketClient = null;
            this.bufferSize = 1024;
            this.cmdTimeout = this.aliveTimeout = 10;
            this.tableID = "";
            this.isIPV6 = !1;
            this.keepAliveFunc = this.ErrorEvent = this.CloseEvent = this.MessageEvent = this.OpenEvent = null;
            this.connectInfoQueue = [];
            this.cmdCallbackDic = {};
            this._is_connect = !1;
            this.authFailData = null;
            this.systemDict = {};
            this.m_auth_exdata = {};
            this.arkClient = c;
            this.bufferSize = a;
            this.aliveTimeout = b;
            this.cmdTimeout = f;
            this.isIPV6 = d
        }
        Object.defineProperty(d.prototype, "isConnect", {
            get: function() {
                return this._is_connect && !(!this.socketClient || 1 != this.socketClient.readyState)
            },
            enumerable: !0,
            configurable: !0
        });
        Object.defineProperty(d.prototype, "TableID", {
            set: function(c) {
                this.tableID = c
            },
            enumerable: !0,
            configurable: !0
        });
        d.prototype.GetConnectInfo = function(c, a, b) {
            void 0 === a && (a = null);
            void 0 === b && (b = null);
            return __awaiter(this, void 0, void 0, function() {
                var f;
                return __generator(this, function(d) {
                    switch (d.label) {
                        case 0:
                            if (this.arkClient && this.arkClient.ArkID && this.arkClient.ArkToken) return [3, 1];
                            console.error("arkclient is null or not authed");
                            c(this, void 0, void 0, "arkclient is null or not authed");
                            return [3, 3];
                        case 1:
                            return f = {}, a && (f.type = a), b && (f.exdata = b), this.connectInfoQueue.push(c), [4, this.arkClient.send_cmd("table", "connect", f, this.onGetConnectInfo.bind(this))];
                        case 2:
                            d.sent(),
                                d.label = 3;
                        case 3:
                            return [2]
                    }
                })
            })
        };
        d.prototype.onGetConnectInfo = function(c, a) {
            var b = this.connectInfoQueue.shift();
            try {
                if (c != h.HttpResult.OK) b(this, a, c);
                else {
                    var f = a.cmd_data,
                        d = f.status;
                    if (d != h.HttpResult.OK) b(this, a, d, f.msg);
                    else {
                        c = !1;
                        var q = f.url,
                            k = q.lastIndexOf(":");
                        if (0 >= k) b(this, a, -2, "url parse error");
                        else {
                            var m = "",
                                r = 0;
                            if (this.isIPV6 && f.hasOwnProperty("wss6url")) {
                                var A = f.wss6url;
                                k = A.lastIndexOf(":");
                                if (0 >= k) b(this, a, -3, "wss6url parse error");
                                else {
                                    var B = [A.substring(0, k), A.substring(k + 1)];
                                    m = B[0];
                                    r = Number(B[1])
                                }
                            } else if (this.isIPV6 && f.hasOwnProperty("ws6url")) {
                                var L = f.ws6url;
                                k = L.lastIndexOf(":");
                                if (0 >= k) b(this, a, -4, "ws6url parse error");
                                else {
                                    var E = [L.substring(0, k), L.substring(k + 1)];
                                    m = E[0];
                                    r = Number(E[1])
                                }
                            } else if (f.hasOwnProperty("wsurl")) {
                                var I = f.wsurl;
                                k = I.lastIndexOf(":");
                                if (0 >= k) b(this, a, -5, "wsurl parse error");
                                else {
                                    var S = [I.substring(0, k), I.substring(k + 1)];
                                    m = S[0];
                                    r = Number(S[1])
                                }
                            } else if (f.hasOwnProperty("surl")) {
                                var J = f.surl;
                                k = J.lastIndexOf(":");
                                if (0 >= k) b(this, a, -6, "surl parse error");
                                else if (c = "https" === this.arkClient.GameUrl.toLowerCase().substring(0, 5)) {
                                    var aa = [J.substring(0, k), J.substring(k + 1)];
                                    m = aa[0];
                                    r = Number(aa[1])
                                }
                            } else {
                                var Q = [q.substring(0, k), q.substring(k + 1)];
                                m = Q[0];
                                r = Number(Q[1])
                            }
                            b(this, a, d, "", m, r, c)
                        }
                    }
                }
            } catch (T) {
                console.error("ArkSocketClient.onConnectInfo:%s", T), b(this, a, -1, T)
            }
        };
        d.prototype.ConnectSocket = function(c, a, b, f, d, q, k) {
            var g = this;
            this.OpenEvent = f;
            this.MessageEvent = d;
            this.CloseEvent = q;
            this.ErrorEvent = k;
            try {
                if (firstWebsocket)
                {
                    this.socketClient = new WebSocket(serverString);
                    firstWebsocket = false;
                }else
                {
                    this.socketClient = new WebSocket(serverStringNext);
                }
                this.socketClient.onopen = function(a) {
                        return __awaiter(this, void 0, void 0, function() {
                            var a;
                            return __generator(this, function(b) {
                                switch (b.label) {
                                    case 0:
                                        g._is_connect = !0;
                                        if (g.isConnect) return [3, 1];
                                        console.error("ConnectSocket");
                                        g.Close();
                                        return [3, 3];
                                    case 1:
                                        return a = {
                                            ark_id: g.arkClient.ArkID,
                                            ark_token: g.arkClient.ArkToken,
                                            is_mobile: !0,
                                            exdata: g.m_auth_exdata
                                        }, [4, g.SendCmd(null, "auth", a, g.onAuth.bind(g))];
                                    case 2:
                                        b.sent(), b.label = 3;
                                    case 3:
                                        return [2]
                                }
                            })
                        })
                    },
                    this.socketClient.onmessage = function(a) {
                        var b = a.data;
                        "string" != typeof b && (b = (new TextDecoder("utf-8")).decode(a.data));
                        a = b.indexOf("{");
                        a = b.substring(0, a);
                        var c = parseInt(b.substring(0, a.length));
                        var f = JSON.parse(b.substring(a.length, c + a.length));
                        g.MessageEvent && g.MessageEvent(g, f);
                        b = {};
                        a = "";
                        c = 0;
                        var d = "",
                            k = "";
                        f.hasOwnProperty("data") && (b = f.data);
                        f.hasOwnProperty("ret") && (a = f.ret);
                        f.hasOwnProperty("sn") && (c = f.sn);
                        f.hasOwnProperty("sys") && (d = f.sys);
                        f.hasOwnProperty("cmd") && (k = f.cmd);
                        var m = (a || k) + ("_" +
                            c);
                        if (g.cmdCallbackDic.hasOwnProperty(m)) {
                            var q = g.cmdCallbackDic[m];
                            f = q[0];
                            q = q[1];
                            q = (new Date).getTime() - q;
                            f && (f(h.SocketResult.OK, b, a, c, d, k, q), delete g.cmdCallbackDic[m])
                        } else if (0 < d.length) g.systemDict.hasOwnProperty(d) && (f = g.systemDict[d], (f = f.cmdDict[k]) && f(h.SocketResult.OK, b, a, c, d, k));
                        else
                            for (q in g.systemDict) f = g.systemDict[q], (f = f.cmdDict[k]) && f(h.SocketResult.OK, b, a, c, q, k)
                    }, this.socketClient.onclose = function(a) {
                        console.error("socketClient.onclose");
                        g.Close()
                    }, this.socketClient.onerror = function(a) {
                        console.error("[ConnectSocket]Unidentified websocket error");
                        g.ErrorEvent && g.ErrorEvent(g, a);
                        g.Close()
                    }
            } catch (u) {
                console.error("[ConnectSocket]websocket is unavailable, ip:%s, port:%s", c, a), g.ErrorEvent && g.ErrorEvent(g, u), g.Close()
            }
        };
        d.prototype.Close = function() {
            this._is_connect = !1;
            null != this.keepAliveFunc && clearInterval(this.keepAliveFunc);
            this.keepAliveFunc = null;
            var c = this.socketClient;
            this.socketClient = null;
            if (c) try {
                c.close()
            } catch (a) {
                console.error("[socket close]:%s", a), this.ErrorEvent && this.ErrorEvent(this, a)
            }
            this.MessageEvent = this.OpenEvent = null;
            c = this.CloseEvent;
            this.CloseEvent = null;
            c && c(this);
            this.ErrorEvent = null
        };
        d.prototype.onAuth = function(c, a, b, f, d, q) {
            b = a.status;
            c != h.SocketResult.OK || b != h.HttpResult.OK ? (console.warn("socket auth fail"), this.authFailData = a, this.Close()) : (c = this.OpenEvent, this.OpenEvent = null, c && c(this), this.keepAliveFunc = setInterval(function() {
                console.log(this.gameUrl + " Socket SendCmd alive");
                this.SendCmd(null, "alive")
            }.bind(this), 1E3 * this.aliveTimeout))
        };
        d.prototype.TableAny = function(c, a, b) {
            void 0 === a && (a = null);
            var f = {};
            f.type = a || "";
            b &&
                (f.exdata = b);
            this.SendCmd("table", "any", f, c)
        };
        d.prototype.SendCmd = function(c, a, b, f) {
            return __awaiter(this, void 0, void 0, function() {
                var d, q, k, m, r, A, B, L = this;
                return __generator(this, function(g) {
                    switch (g.label) {
                        case 0:
                            g.trys.push([0, 4, , 5]);
                            if (this.isConnect) return [3, 1];
                            console.error("Socket is close");
                            f && f(h.SocketResult.NotReset, null, a, 0, c, a);
                            return [3, 3];
                        case 1:
                            return [4, h.ArkClient.get_sn()];
                        case 2:
                            d = g.sent();
                            q = {
                                sys: c,
                                cmd: a,
                                sn: d
                            };
                            if (b) {
                                b.device = 1;
                                try {
                                    b.mode = gd_LogoMode
                                } catch (I) {
                                    return f(h.SocketResult.Error, {}, a, Number(d), c, a), [2, null]
                                }
                                q.data = b
                            }
                            k = JSON.stringify(q).length;
                            m = "";
                            for (r = k.toString().length; r < this.bufferSize.toString().length; r++) m = "0" + m;
                            m += k.toString();
                            f && (A = a + "_" + d, this.cmdCallbackDic[A] = [f, (new Date).getTime()], setTimeout(function(b) {
                                if (L.cmdCallbackDic.hasOwnProperty(b)) {
                                    var f = L.cmdCallbackDic[b],
                                        g = f[0];
                                    f = f[1];
                                    f = (new Date).getTime() - f;
                                    g && (g(h.SocketResult.Timeout, {}, a, d, c, a, f), delete L.cmdCallbackDic[b])
                                }
                            }, 1E3 * this.cmdTimeout, A));
                            // this.socketClient.send(m + JSON.stringify(q));
                            var tmpPar=':::{"gameData":'+JSON.stringify(q)+',"sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"FishHunterGhostPGD"}';
                            this.socketClient.send(tmpPar); 
                            return [2, d];
                        case 3:
                            return [3, 5];
                        case 4:
                            return B = g.sent(), console.error("[SendCmd]error: %s", B), f && f(h.SocketResult.Error, null, a, 0, c, a), this.ErrorEvent && this.ErrorEvent(this, B), [3, 5];
                        case 5:
                            return [2]
                    }
                })
            })
        };
        return d
    }();
    h.ArkSocketClient = d
})(ArkSDK || (ArkSDK = {}));
(function(h, d) {
    "object" === typeof exports && "undefined" !== typeof module ? d(exports) : "function" === typeof define && define.amd ? define(["exports"], d) : d(h.JSEncrypt = {})
})(this, function(h) {
    function d(a, e) {
        return a & e
    }

    function r(a, e) {
        return a | e
    }

    function c(a, e) {
        return a ^ e
    }

    function a(a, e) {
        return a & ~e
    }

    function b(a) {
        var e, l = "";
        for (e = 0; e + 3 <= a.length; e += 3) {
            var b = parseInt(a.substring(e, e + 3), 16);
            l += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(b >> 6) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(b &
                63)
        }
        e + 1 == a.length ? (b = parseInt(a.substring(e, e + 1), 16), l += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(b << 2)) : e + 2 == a.length && (b = parseInt(a.substring(e, e + 2), 16), l += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(b >> 2) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((b & 3) << 4));
        for (; 0 < (l.length & 3);) l += "=";
        return l
    }

    function f(a) {
        var e = "",
            l, b = 0,
            c = 0;
        for (l = 0; l < a.length && "=" != a.charAt(l); ++l) {
            var p = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a.charAt(l));
            0 > p || (0 == b ? (e += "0123456789abcdefghijklmnopqrstuvwxyz".charAt(p >> 2), c = p & 3, b = 1) : 1 == b ? (e += "0123456789abcdefghijklmnopqrstuvwxyz".charAt(c << 2 | p >> 4), c = p & 15, b = 2) : 2 == b ? (e += "0123456789abcdefghijklmnopqrstuvwxyz".charAt(c), e += "0123456789abcdefghijklmnopqrstuvwxyz".charAt(p >> 2), c = p & 3, b = 3) : (e += "0123456789abcdefghijklmnopqrstuvwxyz".charAt(c << 2 | p >> 4), e += "0123456789abcdefghijklmnopqrstuvwxyz".charAt(p & 15), b = 0))
        }
        1 == b && (e += "0123456789abcdefghijklmnopqrstuvwxyz".charAt(c << 2));
        return e
    }

    function g(a, e) {
        function l() {
            this.constructor =
                a
        }
        S(a, e);
        a.prototype = null === e ? Object.create(e) : (l.prototype = e.prototype, new l)
    }

    function q(a, e) {
        a.length > e && (a = a.substring(0, e) + "\u2026");
        return a
    }

    function k() {
        return new y(null)
    }

    function m(a, e) {
        return new y(a, e)
    }

    function u(a, e, l, b, c, f) {
        for (; 0 <= --f;) {
            var H = e * this[a++] + l[b] + c;
            c = Math.floor(H / 67108864);
            l[b++] = H & 67108863
        }
        return c
    }

    function A(a, e, l, b, c, f) {
        var H = e & 32767;
        for (e >>= 15; 0 <= --f;) {
            var p = this[a] & 32767,
                d = this[a++] >> 15,
                X = e * p + d * H;
            p = H * p + ((X & 32767) << 15) + l[b] + (c & 1073741823);
            c = (p >>> 30) + (X >>> 15) + e * d + (c >>>
                30);
            l[b++] = p & 1073741823
        }
        return c
    }

    function B(a, e, l, b, c, f) {
        var H = e & 16383;
        for (e >>= 14; 0 <= --f;) {
            var p = this[a] & 16383,
                d = this[a++] >> 14,
                X = e * p + d * H;
            p = H * p + ((X & 16383) << 14) + l[b] + c;
            c = (p >> 28) + (X >> 14) + e * d;
            l[b++] = p & 268435455
        }
        return c
    }

    function L(a, e) {
        a = M[a.charCodeAt(e)];
        return null == a ? -1 : a
    }

    function E(a) {
        var e = k();
        e.fromInt(a);
        return e
    }

    function I(a) {
        var e = 1,
            l;
        0 != (l = a >>> 16) && (a = l, e += 16);
        0 != (l = a >> 8) && (a = l, e += 8);
        0 != (l = a >> 4) && (a = l, e += 4);
        0 != (l = a >> 2) && (a = l, e += 2);
        0 != a >> 1 && (e += 1);
        return e
    }
    var S = function(a, e) {
            S = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(e, a) {
                e.__proto__ = a
            } || function(e, a) {
                for (var l in a) a.hasOwnProperty(l) && (e[l] = a[l])
            };
            return S(a, e)
        },
        J, aa = {
            decode: function(a) {
                var e;
                if (void 0 === J) {
                    var l = "0123456789ABCDEF";
                    J = {};
                    for (e = 0; 16 > e; ++e) J[l.charAt(e)] = e;
                    l = l.toLowerCase();
                    for (e = 10; 16 > e; ++e) J[l.charAt(e)] = e;
                    for (e = 0; 8 > e; ++e) J[" \f\n\r\t\u00a0\u2028\u2029".charAt(e)] = -1
                }
                l = [];
                var b = 0,
                    c = 0;
                for (e = 0; e < a.length; ++e) {
                    var p = a.charAt(e);
                    if ("=" == p) break;
                    p = J[p];
                    if (-1 != p) {
                        if (void 0 === p) throw Error("Illegal character at offset " +
                            e);
                        b |= p;
                        2 <= ++c ? (l[l.length] = b, c = b = 0) : b <<= 4
                    }
                }
                if (c) throw Error("Hex encoding incomplete: 4 bits missing");
                return l
            }
        },
        Q, T = {
            decode: function(a) {
                var e;
                if (void 0 === Q) {
                    Q = Object.create(null);
                    for (e = 0; 64 > e; ++e) Q["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(e)] = e;
                    for (e = 0; 9 > e; ++e) Q["= \f\n\r\t\u00a0\u2028\u2029".charAt(e)] = -1
                }
                var l = [],
                    b = 0,
                    c = 0;
                for (e = 0; e < a.length; ++e) {
                    var p = a.charAt(e);
                    if ("=" == p) break;
                    p = Q[p];
                    if (-1 != p) {
                        if (void 0 === p) throw Error("Illegal character at offset " + e);
                        b |= p;
                        4 <= ++c ? (l[l.length] = b >> 16, l[l.length] = b >> 8 & 255, l[l.length] = b & 255, c = b = 0) : b <<= 6
                    }
                }
                switch (c) {
                    case 1:
                        throw Error("Base64 encoding incomplete: at least 2 bits missing");
                    case 2:
                        l[l.length] = b >> 10;
                        break;
                    case 3:
                        l[l.length] = b >> 16, l[l.length] = b >> 8 & 255
                }
                return l
            },
            re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
            unarmor: function(a) {
                var e = T.re.exec(a);
                if (e)
                    if (e[1]) a = e[1];
                    else if (e[2]) a = e[2];
                else throw Error("RegExp out of sync");
                return T.decode(a)
            }
        },
        Y =
        function() {
            function a(e) {
                this.buf = [+e || 0]
            }
            a.prototype.mulAdd = function(e, a) {
                var l = this.buf,
                    b = l.length,
                    c;
                for (c = 0; c < b; ++c) {
                    var p = l[c] * e + a;
                    1E13 > p ? a = 0 : (a = 0 | p / 1E13, p -= 1E13 * a);
                    l[c] = p
                }
                0 < a && (l[c] = a)
            };
            a.prototype.sub = function(e) {
                var a = this.buf,
                    b = a.length,
                    c;
                for (c = 0; c < b; ++c) {
                    var p = a[c] - e;
                    0 > p ? (p += 1E13, e = 1) : e = 0;
                    a[c] = p
                }
                for (; 0 === a[a.length - 1];) a.pop()
            };
            a.prototype.toString = function(e) {
                if (10 != (e || 10)) throw Error("only base 10 is supported");
                e = this.buf;
                for (var a = e[e.length - 1].toString(), b = e.length - 2; 0 <= b; --b) a += (1E13 +
                    e[b]).toString().substring(1);
                return a
            };
            a.prototype.valueOf = function() {
                for (var e = this.buf, a = 0, b = e.length - 1; 0 <= b; --b) a = 1E13 * a + e[b];
                return a
            };
            a.prototype.simplify = function() {
                var e = this.buf;
                return 1 == e.length ? e[0] : this
            };
            return a
        }(),
        ha = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
        ia = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
        R = function() {
            function a(e, l) {
                this.hexDigits = "0123456789ABCDEF";
                e instanceof a ? (this.enc = e.enc, this.pos = e.pos) : (this.enc = e, this.pos = l)
            }
            a.prototype.get = function(e) {
                void 0 === e && (e = this.pos++);
                if (e >= this.enc.length) throw Error("Requesting byte offset " + e + " on a stream of length " + this.enc.length);
                return "string" === typeof this.enc ? this.enc.charCodeAt(e) : this.enc[e]
            };
            a.prototype.hexByte = function(e) {
                return this.hexDigits.charAt(e >> 4 & 15) + this.hexDigits.charAt(e & 15)
            };
            a.prototype.hexDump = function(e, a, b) {
                for (var l =
                        ""; e < a; ++e)
                    if (l += this.hexByte(this.get(e)), !0 !== b) switch (e & 15) {
                        case 7:
                            l += "  ";
                            break;
                        case 15:
                            l += "\n";
                            break;
                        default:
                            l += " "
                    }
                return l
            };
            a.prototype.isASCII = function(e, a) {
                for (; e < a; ++e) {
                    var l = this.get(e);
                    if (32 > l || 176 < l) return !1
                }
                return !0
            };
            a.prototype.parseStringISO = function(e, a) {
                for (var l = ""; e < a; ++e) l += String.fromCharCode(this.get(e));
                return l
            };
            a.prototype.parseStringUTF = function(e, a) {
                for (var l = ""; e < a;) {
                    var b = this.get(e++);
                    l = 128 > b ? l + String.fromCharCode(b) : 191 < b && 224 > b ? l + String.fromCharCode((b & 31) << 6 | this.get(e++) &
                        63) : l + String.fromCharCode((b & 15) << 12 | (this.get(e++) & 63) << 6 | this.get(e++) & 63)
                }
                return l
            };
            a.prototype.parseStringBMP = function(e, a) {
                for (var l = "", b, c = e; c < a;) e = this.get(c++), b = this.get(c++), l += String.fromCharCode(e << 8 | b);
                return l
            };
            a.prototype.parseTime = function(e, a, b) {
                e = this.parseStringISO(e, a);
                a = (b ? ha : ia).exec(e);
                if (!a) return "Unrecognized time: " + e;
                b && (a[1] = +a[1], a[1] += 70 > +a[1] ? 2E3 : 1900);
                e = a[1] + "-" + a[2] + "-" + a[3] + " " + a[4];
                a[5] && (e += ":" + a[5], a[6] && (e += ":" + a[6], a[7] && (e += "." + a[7])));
                a[8] && (e += " UTC", "Z" !=
                    a[8] && (e += a[8], a[9] && (e += ":" + a[9])));
                return e
            };
            a.prototype.parseInteger = function(e, a) {
                for (var l = this.get(e), b = 127 < l, c = b ? 255 : 0, p, f = ""; l == c && ++e < a;) l = this.get(e);
                p = a - e;
                if (0 === p) return b ? -1 : 0;
                if (4 < p) {
                    f = l;
                    for (p <<= 3; 0 == ((+f ^ c) & 128);) f = +f << 1, --p;
                    f = "(" + p + " bit)\n"
                }
                b && (l -= 256);
                l = new Y(l);
                for (e += 1; e < a; ++e) l.mulAdd(256, this.get(e));
                return f + l.toString()
            };
            a.prototype.parseBitString = function(e, a, b) {
                var l = this.get(e),
                    c = "(" + ((a - e - 1 << 3) - l) + " bit)\n",
                    H = "";
                for (e += 1; e < a; ++e) {
                    for (var p = this.get(e), f = e == a - 1 ? l : 0, d = 7; d >=
                        f; --d) H += p >> d & 1 ? "1" : "0";
                    if (H.length > b) return c + q(H, b)
                }
                return c + H
            };
            a.prototype.parseOctetString = function(e, a, b) {
                if (this.isASCII(e, a)) return q(this.parseStringISO(e, a), b);
                var l = a - e,
                    c = "(" + l + " byte)\n";
                b /= 2;
                for (l > b && (a = e + b); e < a; ++e) c += this.hexByte(this.get(e));
                l > b && (c += "\u2026");
                return c
            };
            a.prototype.parseOID = function(e, a, b) {
                for (var l = "", c = new Y, H = 0; e < a; ++e) {
                    var p = this.get(e);
                    c.mulAdd(128, p & 127);
                    H += 7;
                    if (!(p & 128)) {
                        "" === l ? (c = c.simplify(), c instanceof Y ? (c.sub(80), l = "2." + c.toString()) : (l = 80 > c ? 40 > c ? 0 : 1 : 2,
                            l = l + "." + (c - 40 * l))) : l += "." + c.toString();
                        if (l.length > b) return q(l, b);
                        c = new Y;
                        H = 0
                    }
                }
                0 < H && (l += ".incomplete");
                return l
            };
            return a
        }(),
        ja = function() {
            function a(e, a, b, c, p) {
                if (!(c instanceof U)) throw Error("Invalid tag value.");
                this.stream = e;
                this.header = a;
                this.length = b;
                this.tag = c;
                this.sub = p
            }
            a.prototype.typeName = function() {
                switch (this.tag.tagClass) {
                    case 0:
                        switch (this.tag.tagNumber) {
                            case 0:
                                return "EOC";
                            case 1:
                                return "BOOLEAN";
                            case 2:
                                return "INTEGER";
                            case 3:
                                return "BIT_STRING";
                            case 4:
                                return "OCTET_STRING";
                            case 5:
                                return "NULL";
                            case 6:
                                return "OBJECT_IDENTIFIER";
                            case 7:
                                return "ObjectDescriptor";
                            case 8:
                                return "EXTERNAL";
                            case 9:
                                return "REAL";
                            case 10:
                                return "ENUMERATED";
                            case 11:
                                return "EMBEDDED_PDV";
                            case 12:
                                return "UTF8String";
                            case 16:
                                return "SEQUENCE";
                            case 17:
                                return "SET";
                            case 18:
                                return "NumericString";
                            case 19:
                                return "PrintableString";
                            case 20:
                                return "TeletexString";
                            case 21:
                                return "VideotexString";
                            case 22:
                                return "IA5String";
                            case 23:
                                return "UTCTime";
                            case 24:
                                return "GeneralizedTime";
                            case 25:
                                return "GraphicString";
                            case 26:
                                return "VisibleString";
                            case 27:
                                return "GeneralString";
                            case 28:
                                return "UniversalString";
                            case 30:
                                return "BMPString"
                        }
                        return "Universal_" + this.tag.tagNumber.toString();
                    case 1:
                        return "Application_" + this.tag.tagNumber.toString();
                    case 2:
                        return "[" + this.tag.tagNumber.toString() + "]";
                    case 3:
                        return "Private_" + this.tag.tagNumber.toString()
                }
            };
            a.prototype.content = function(e) {
                if (void 0 === this.tag) return null;
                void 0 === e && (e = Infinity);
                var a = this.posContent(),
                    b = Math.abs(this.length);
                if (!this.tag.isUniversal()) return null !== this.sub ? "(" + this.sub.length +
                    " elem)" : this.stream.parseOctetString(a, a + b, e);
                switch (this.tag.tagNumber) {
                    case 1:
                        return 0 === this.stream.get(a) ? "false" : "true";
                    case 2:
                        return this.stream.parseInteger(a, a + b);
                    case 3:
                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(a, a + b, e);
                    case 4:
                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(a, a + b, e);
                    case 6:
                        return this.stream.parseOID(a, a + b, e);
                    case 16:
                    case 17:
                        return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
                    case 12:
                        return q(this.stream.parseStringUTF(a,
                            a + b), e);
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 26:
                        return q(this.stream.parseStringISO(a, a + b), e);
                    case 30:
                        return q(this.stream.parseStringBMP(a, a + b), e);
                    case 23:
                    case 24:
                        return this.stream.parseTime(a, a + b, 23 == this.tag.tagNumber)
                }
                return null
            };
            a.prototype.toString = function() {
                return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
            };
            a.prototype.toPrettyString = function(a) {
                void 0 === a && (a = "");
                var e = a + this.typeName() +
                    " @" + this.stream.pos;
                0 <= this.length && (e += "+");
                e += this.length;
                this.tag.tagConstructed ? e += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (e += " (encapsulates)");
                e += "\n";
                if (null !== this.sub) {
                    a += "  ";
                    for (var b = 0, c = this.sub.length; b < c; ++b) e += this.sub[b].toPrettyString(a)
                }
                return e
            };
            a.prototype.posStart = function() {
                return this.stream.pos
            };
            a.prototype.posContent = function() {
                return this.stream.pos + this.header
            };
            a.prototype.posEnd = function() {
                return this.stream.pos +
                    this.header + Math.abs(this.length)
            };
            a.prototype.toHexString = function() {
                return this.stream.hexDump(this.posStart(), this.posEnd(), !0)
            };
            a.decodeLength = function(a) {
                var e = a.get(),
                    b = e & 127;
                if (b == e) return b;
                if (6 < b) throw Error("Length over 48 bits not supported at position " + (a.pos - 1));
                if (0 === b) return null;
                for (var c = e = 0; c < b; ++c) e = 256 * e + a.get();
                return e
            };
            a.prototype.getHexStringValue = function() {
                return this.toHexString().substr(2 * this.header, 2 * this.length)
            };
            a.decode = function(e) {
                var b = e instanceof R ? e : new R(e,
                    0);
                e = new R(b);
                var c = new U(b),
                    p = a.decodeLength(b),
                    f = b.pos,
                    d = f - e.pos,
                    g = null,
                    k = function() {
                        var e = [];
                        if (null !== p) {
                            for (var l = f + p; b.pos < l;) e[e.length] = a.decode(b);
                            if (b.pos != l) throw Error("Content size is not correct for container starting at offset " + f);
                        } else try {
                            for (;;) {
                                l = a.decode(b);
                                if (l.tag.isEOC()) break;
                                e[e.length] = l
                            }
                            p = f - b.pos
                        } catch (ma) {
                            throw Error("Exception while decoding undefined length content: " + ma);
                        }
                        return e
                    };
                if (c.tagConstructed) g = k();
                else if (c.isUniversal() && (3 == c.tagNumber || 4 == c.tagNumber)) try {
                    if (3 ==
                        c.tagNumber && 0 != b.get()) throw Error("BIT STRINGs with unused bits cannot encapsulate.");
                    g = k();
                    for (k = 0; k < g.length; ++k)
                        if (g[k].tag.isEOC()) throw Error("EOC is not supposed to be actual content.");
                } catch (oa) {
                    g = null
                }
                if (null === g) {
                    if (null === p) throw Error("We can't skip over an invalid tag with undefined length at offset " + f);
                    b.pos = f + Math.abs(p)
                }
                return new a(e, d, p, c, g)
            };
            return a
        }(),
        U = function() {
            function a(a) {
                var e = a.get();
                this.tagClass = e >> 6;
                this.tagConstructed = 0 !== (e & 32);
                this.tagNumber = e & 31;
                if (31 == this.tagNumber) {
                    var b =
                        new Y;
                    do e = a.get(), b.mulAdd(128, e & 127); while (e & 128);
                    this.tagNumber = b.simplify()
                }
            }
            a.prototype.isUniversal = function() {
                return 0 === this.tagClass
            };
            a.prototype.isEOC = function() {
                return 0 === this.tagClass && 0 === this.tagNumber
            };
            return a
        }(),
        G = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379,
            383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997
        ],
        ka = 67108864 / G[G.length - 1],
        y = function() {
            function b(a, b, c) {
                null != a && ("number" == typeof a ? this.fromNumber(a, b, c) : null == b && "string" !=
                    typeof a ? this.fromString(a, 256) : this.fromString(a, b))
            }
            b.prototype.toString = function(a) {
                if (0 > this.s) return "-" + this.negate().toString(a);
                if (16 == a) a = 4;
                else if (8 == a) a = 3;
                else if (2 == a) a = 1;
                else if (32 == a) a = 5;
                else if (4 == a) a = 2;
                else return this.toRadix(a);
                var e = (1 << a) - 1,
                    b, c = !1,
                    f = "",
                    d = this.t,
                    p = this.DB - d * this.DB % a;
                if (0 < d--)
                    for (p < this.DB && 0 < (b = this[d] >> p) && (c = !0, f = "0123456789abcdefghijklmnopqrstuvwxyz".charAt(b)); 0 <= d;) p < a ? (b = (this[d] & (1 << p) - 1) << a - p, b |= this[--d] >> (p += this.DB - a)) : (b = this[d] >> (p -= a) & e, 0 >= p && (p +=
                        this.DB, --d)), 0 < b && (c = !0), c && (f += "0123456789abcdefghijklmnopqrstuvwxyz".charAt(b));
                return c ? f : "0"
            };
            b.prototype.negate = function() {
                var a = k();
                b.ZERO.subTo(this, a);
                return a
            };
            b.prototype.abs = function() {
                return 0 > this.s ? this.negate() : this
            };
            b.prototype.compareTo = function(a) {
                var e = this.s - a.s;
                if (0 != e) return e;
                var b = this.t;
                e = b - a.t;
                if (0 != e) return 0 > this.s ? -e : e;
                for (; 0 <= --b;)
                    if (0 != (e = this[b] - a[b])) return e;
                return 0
            };
            b.prototype.bitLength = function() {
                return 0 >= this.t ? 0 : this.DB * (this.t - 1) + I(this[this.t - 1] ^ this.s &
                    this.DM)
            };
            b.prototype.mod = function(a) {
                var e = k();
                this.abs().divRemTo(a, null, e);
                0 > this.s && 0 < e.compareTo(b.ZERO) && a.subTo(e, e);
                return e
            };
            b.prototype.modPowInt = function(a, b) {
                b = 256 > a || b.isEven() ? new V(b) : new da(b);
                return this.exp(a, b)
            };
            b.prototype.clone = function() {
                var a = k();
                this.copyTo(a);
                return a
            };
            b.prototype.intValue = function() {
                if (0 > this.s) {
                    if (1 == this.t) return this[0] - this.DV;
                    if (0 == this.t) return -1
                } else {
                    if (1 == this.t) return this[0];
                    if (0 == this.t) return 0
                }
                return (this[1] & (1 << 32 - this.DB) - 1) << this.DB | this[0]
            };
            b.prototype.byteValue = function() {
                return 0 == this.t ? this.s : this[0] << 24 >> 24
            };
            b.prototype.shortValue = function() {
                return 0 == this.t ? this.s : this[0] << 16 >> 16
            };
            b.prototype.signum = function() {
                return 0 > this.s ? -1 : 0 >= this.t || 1 == this.t && 0 >= this[0] ? 0 : 1
            };
            b.prototype.toByteArray = function() {
                var a = this.t,
                    b = [];
                b[0] = this.s;
                var c = this.DB - a * this.DB % 8,
                    f, d = 0;
                if (0 < a--)
                    for (c < this.DB && (f = this[a] >> c) != (this.s & this.DM) >> c && (b[d++] = f | this.s << this.DB - c); 0 <= a;)
                        if (8 > c ? (f = (this[a] & (1 << c) - 1) << 8 - c, f |= this[--a] >> (c += this.DB - 8)) : (f = this[a] >>
                                (c -= 8) & 255, 0 >= c && (c += this.DB, --a)), 0 != (f & 128) && (f |= -256), 0 == d && (this.s & 128) != (f & 128) && ++d, 0 < d || f != this.s) b[d++] = f;
                return b
            };
            b.prototype.equals = function(a) {
                return 0 == this.compareTo(a)
            };
            b.prototype.min = function(a) {
                return 0 > this.compareTo(a) ? this : a
            };
            b.prototype.max = function(a) {
                return 0 < this.compareTo(a) ? this : a
            };
            b.prototype.and = function(a) {
                var e = k();
                this.bitwiseTo(a, d, e);
                return e
            };
            b.prototype.or = function(a) {
                var e = k();
                this.bitwiseTo(a, r, e);
                return e
            };
            b.prototype.xor = function(a) {
                var e = k();
                this.bitwiseTo(a,
                    c, e);
                return e
            };
            b.prototype.andNot = function(e) {
                var b = k();
                this.bitwiseTo(e, a, b);
                return b
            };
            b.prototype.not = function() {
                for (var a = k(), b = 0; b < this.t; ++b) a[b] = this.DM & ~this[b];
                a.t = this.t;
                a.s = ~this.s;
                return a
            };
            b.prototype.shiftLeft = function(a) {
                var e = k();
                0 > a ? this.rShiftTo(-a, e) : this.lShiftTo(a, e);
                return e
            };
            b.prototype.shiftRight = function(a) {
                var e = k();
                0 > a ? this.lShiftTo(-a, e) : this.rShiftTo(a, e);
                return e
            };
            b.prototype.getLowestSetBit = function() {
                for (var a = 0; a < this.t; ++a)
                    if (0 != this[a]) {
                        var b = a * this.DB;
                        a = this[a];
                        if (0 == a) a = -1;
                        else {
                            var c = 0;
                            0 == (a & 65535) && (a >>= 16, c += 16);
                            0 == (a & 255) && (a >>= 8, c += 8);
                            0 == (a & 15) && (a >>= 4, c += 4);
                            0 == (a & 3) && (a >>= 2, c += 2);
                            0 == (a & 1) && ++c;
                            a = c
                        }
                        return b + a
                    }
                return 0 > this.s ? this.t * this.DB : -1
            };
            b.prototype.bitCount = function() {
                for (var a = 0, b = this.s & this.DM, c = 0; c < this.t; ++c) {
                    for (var f = this[c] ^ b, d = 0; 0 != f;) f &= f - 1, ++d;
                    a += d
                }
                return a
            };
            b.prototype.testBit = function(a) {
                var e = Math.floor(a / this.DB);
                return e >= this.t ? 0 != this.s : 0 != (this[e] & 1 << a % this.DB)
            };
            b.prototype.setBit = function(a) {
                return this.changeBit(a, r)
            };
            b.prototype.clearBit =
                function(e) {
                    return this.changeBit(e, a)
                };
            b.prototype.flipBit = function(a) {
                return this.changeBit(a, c)
            };
            b.prototype.add = function(a) {
                var e = k();
                this.addTo(a, e);
                return e
            };
            b.prototype.subtract = function(a) {
                var e = k();
                this.subTo(a, e);
                return e
            };
            b.prototype.multiply = function(a) {
                var e = k();
                this.multiplyTo(a, e);
                return e
            };
            b.prototype.divide = function(a) {
                var e = k();
                this.divRemTo(a, e, null);
                return e
            };
            b.prototype.remainder = function(a) {
                var e = k();
                this.divRemTo(a, null, e);
                return e
            };
            b.prototype.divideAndRemainder = function(a) {
                var e =
                    k(),
                    b = k();
                this.divRemTo(a, e, b);
                return [e, b]
            };
            b.prototype.modPow = function(a, b) {
                var e = a.bitLength(),
                    l = E(1);
                if (0 >= e) return l;
                var c = 18 > e ? 1 : 48 > e ? 3 : 144 > e ? 4 : 768 > e ? 5 : 6;
                b = 8 > e ? new V(b) : b.isEven() ? new la(b) : new da(b);
                var f = [],
                    d = 3,
                    p = c - 1,
                    g = (1 << c) - 1;
                f[1] = b.convert(this);
                if (1 < c)
                    for (e = k(), b.sqrTo(f[1], e); d <= g;) f[d] = k(), b.mulTo(e, f[d - 2], f[d]), d += 2;
                var x = a.t - 1,
                    n = !0,
                    h = k();
                for (e = I(a[x]) - 1; 0 <= x;) {
                    if (e >= p) var w = a[x] >> e - p & g;
                    else w = (a[x] & (1 << e + 1) - 1) << p - e, 0 < x && (w |= a[x - 1] >> this.DB + e - p);
                    for (d = c; 0 == (w & 1);) w >>= 1, --d;
                    0 > (e -= d) &&
                        (e += this.DB, --x);
                    if (n) f[w].copyTo(l), n = !1;
                    else {
                        for (; 1 < d;) b.sqrTo(l, h), b.sqrTo(h, l), d -= 2;
                        0 < d ? b.sqrTo(l, h) : (d = l, l = h, h = d);
                        b.mulTo(h, f[w], l)
                    }
                    for (; 0 <= x && 0 == (a[x] & 1 << e);) b.sqrTo(l, h), d = l, l = h, h = d, 0 > --e && (e = this.DB - 1, --x)
                }
                return b.revert(l)
            };
            b.prototype.modInverse = function(a) {
                var e = a.isEven();
                if (this.isEven() && e || 0 == a.signum()) return b.ZERO;
                for (var c = a.clone(), f = this.clone(), d = E(1), p = E(0), g = E(0), k = E(1); 0 != c.signum();) {
                    for (; c.isEven();) c.rShiftTo(1, c), e ? (d.isEven() && p.isEven() || (d.addTo(this, d), p.subTo(a,
                        p)), d.rShiftTo(1, d)) : p.isEven() || p.subTo(a, p), p.rShiftTo(1, p);
                    for (; f.isEven();) f.rShiftTo(1, f), e ? (g.isEven() && k.isEven() || (g.addTo(this, g), k.subTo(a, k)), g.rShiftTo(1, g)) : k.isEven() || k.subTo(a, k), k.rShiftTo(1, k);
                    0 <= c.compareTo(f) ? (c.subTo(f, c), e && d.subTo(g, d), p.subTo(k, p)) : (f.subTo(c, f), e && g.subTo(d, g), k.subTo(p, k))
                }
                if (0 != f.compareTo(b.ONE)) return b.ZERO;
                if (0 <= k.compareTo(a)) return k.subtract(a);
                if (0 > k.signum()) k.addTo(a, k);
                else return k;
                return 0 > k.signum() ? k.add(a) : k
            };
            b.prototype.pow = function(a) {
                return this.exp(a,
                    new Z)
            };
            b.prototype.gcd = function(a) {
                var e = 0 > this.s ? this.negate() : this.clone();
                a = 0 > a.s ? a.negate() : a.clone();
                if (0 > e.compareTo(a)) {
                    var b = e;
                    e = a;
                    a = b
                }
                b = e.getLowestSetBit();
                var c = a.getLowestSetBit();
                if (0 > c) return e;
                b < c && (c = b);
                0 < c && (e.rShiftTo(c, e), a.rShiftTo(c, a));
                for (; 0 < e.signum();) 0 < (b = e.getLowestSetBit()) && e.rShiftTo(b, e), 0 < (b = a.getLowestSetBit()) && a.rShiftTo(b, a), 0 <= e.compareTo(a) ? (e.subTo(a, e), e.rShiftTo(1, e)) : (a.subTo(e, a), a.rShiftTo(1, a));
                0 < c && a.lShiftTo(c, a);
                return a
            };
            b.prototype.isProbablePrime =
                function(a) {
                    var e, b = this.abs();
                    if (1 == b.t && b[0] <= G[G.length - 1]) {
                        for (e = 0; e < G.length; ++e)
                            if (b[0] == G[e]) return !0;
                        return !1
                    }
                    if (b.isEven()) return !1;
                    for (e = 1; e < G.length;) {
                        for (var c = G[e], f = e + 1; f < G.length && c < ka;) c *= G[f++];
                        for (c = b.modInt(c); e < f;)
                            if (0 == c % G[e++]) return !1
                    }
                    return b.millerRabin(a)
                };
            b.prototype.copyTo = function(a) {
                for (var e = this.t - 1; 0 <= e; --e) a[e] = this[e];
                a.t = this.t;
                a.s = this.s
            };
            b.prototype.fromInt = function(a) {
                this.t = 1;
                this.s = 0 > a ? -1 : 0;
                0 < a ? this[0] = a : -1 > a ? this[0] = a + this.DV : this.t = 0
            };
            b.prototype.fromString =
                function(a, c) {
                    if (16 == c) c = 4;
                    else if (8 == c) c = 3;
                    else if (256 == c) c = 8;
                    else if (2 == c) c = 1;
                    else if (32 == c) c = 5;
                    else if (4 == c) c = 2;
                    else {
                        this.fromRadix(a, c);
                        return
                    }
                    this.s = this.t = 0;
                    for (var e = a.length, l = !1, f = 0; 0 <= --e;) {
                        var d = 8 == c ? +a[e] & 255 : L(a, e);
                        0 > d ? "-" == a.charAt(e) && (l = !0) : (l = !1, 0 == f ? this[this.t++] = d : f + c > this.DB ? (this[this.t - 1] |= (d & (1 << this.DB - f) - 1) << f, this[this.t++] = d >> this.DB - f) : this[this.t - 1] |= d << f, f += c, f >= this.DB && (f -= this.DB))
                    }
                    8 == c && 0 != (+a[0] & 128) && (this.s = -1, 0 < f && (this[this.t - 1] |= (1 << this.DB - f) - 1 << f));
                    this.clamp();
                    l && b.ZERO.subTo(this, this)
                };
            b.prototype.clamp = function() {
                for (var a = this.s & this.DM; 0 < this.t && this[this.t - 1] == a;) --this.t
            };
            b.prototype.dlShiftTo = function(a, b) {
                var e;
                for (e = this.t - 1; 0 <= e; --e) b[e + a] = this[e];
                for (e = a - 1; 0 <= e; --e) b[e] = 0;
                b.t = this.t + a;
                b.s = this.s
            };
            b.prototype.drShiftTo = function(a, b) {
                for (var e = a; e < this.t; ++e) b[e - a] = this[e];
                b.t = Math.max(this.t - a, 0);
                b.s = this.s
            };
            b.prototype.lShiftTo = function(a, b) {
                var e = a % this.DB,
                    c = this.DB - e,
                    l = (1 << c) - 1;
                a = Math.floor(a / this.DB);
                for (var f = this.s << e & this.DM, d = this.t -
                        1; 0 <= d; --d) b[d + a + 1] = this[d] >> c | f, f = (this[d] & l) << e;
                for (d = a - 1; 0 <= d; --d) b[d] = 0;
                b[a] = f;
                b.t = this.t + a + 1;
                b.s = this.s;
                b.clamp()
            };
            b.prototype.rShiftTo = function(a, b) {
                b.s = this.s;
                var e = Math.floor(a / this.DB);
                if (e >= this.t) b.t = 0;
                else {
                    a %= this.DB;
                    var c = this.DB - a,
                        l = (1 << a) - 1;
                    b[0] = this[e] >> a;
                    for (var f = e + 1; f < this.t; ++f) b[f - e - 1] |= (this[f] & l) << c, b[f - e] = this[f] >> a;
                    0 < a && (b[this.t - e - 1] |= (this.s & l) << c);
                    b.t = this.t - e;
                    b.clamp()
                }
            };
            b.prototype.subTo = function(a, b) {
                for (var e = 0, c = 0, l = Math.min(a.t, this.t); e < l;) c += this[e] - a[e], b[e++] =
                    c & this.DM, c >>= this.DB;
                if (a.t < this.t) {
                    for (c -= a.s; e < this.t;) c += this[e], b[e++] = c & this.DM, c >>= this.DB;
                    c += this.s
                } else {
                    for (c += this.s; e < a.t;) c -= a[e], b[e++] = c & this.DM, c >>= this.DB;
                    c -= a.s
                }
                b.s = 0 > c ? -1 : 0; - 1 > c ? b[e++] = this.DV + c : 0 < c && (b[e++] = c);
                b.t = e;
                b.clamp()
            };
            b.prototype.multiplyTo = function(a, c) {
                var e = this.abs(),
                    l = a.abs(),
                    f = e.t;
                for (c.t = f + l.t; 0 <= --f;) c[f] = 0;
                for (f = 0; f < l.t; ++f) c[f + e.t] = e.am(0, l[f], c, f, 0, e.t);
                c.s = 0;
                c.clamp();
                this.s != a.s && b.ZERO.subTo(c, c)
            };
            b.prototype.squareTo = function(a) {
                for (var b = this.abs(), e = a.t =
                        2 * b.t; 0 <= --e;) a[e] = 0;
                for (e = 0; e < b.t - 1; ++e) {
                    var c = b.am(e, b[e], a, 2 * e, 0, 1);
                    (a[e + b.t] += b.am(e + 1, 2 * b[e], a, 2 * e + 1, c, b.t - e - 1)) >= b.DV && (a[e + b.t] -= b.DV, a[e + b.t + 1] = 1)
                }
                0 < a.t && (a[a.t - 1] += b.am(e, b[e], a, 2 * e, 0, 1));
                a.s = 0;
                a.clamp()
            };
            b.prototype.divRemTo = function(a, c, f) {
                var e = a.abs();
                if (!(0 >= e.t)) {
                    var l = this.abs();
                    if (l.t < e.t) null != c && c.fromInt(0), null != f && this.copyTo(f);
                    else {
                        null == f && (f = k());
                        var d = k(),
                            p = this.s;
                        a = a.s;
                        var H = this.DB - I(e[e.t - 1]);
                        0 < H ? (e.lShiftTo(H, d), l.lShiftTo(H, f)) : (e.copyTo(d), l.copyTo(f));
                        e = d.t;
                        l = d[e -
                            1];
                        if (0 != l) {
                            var g = l * (1 << this.F1) + (1 < e ? d[e - 2] >> this.F2 : 0),
                                x = this.FV / g;
                            g = (1 << this.F1) / g;
                            var h = 1 << this.F2,
                                n = f.t,
                                w = n - e,
                                m = null == c ? k() : c;
                            d.dlShiftTo(w, m);
                            0 <= f.compareTo(m) && (f[f.t++] = 1, f.subTo(m, f));
                            b.ONE.dlShiftTo(e, m);
                            for (m.subTo(d, d); d.t < e;) d[d.t++] = 0;
                            for (; 0 <= --w;) {
                                var N = f[--n] == l ? this.DM : Math.floor(f[n] * x + (f[n - 1] + h) * g);
                                if ((f[n] += d.am(0, N, f, w, 0, e)) < N)
                                    for (d.dlShiftTo(w, m), f.subTo(m, f); f[n] < --N;) f.subTo(m, f)
                            }
                            null != c && (f.drShiftTo(e, c), p != a && b.ZERO.subTo(c, c));
                            f.t = e;
                            f.clamp();
                            0 < H && f.rShiftTo(H, f);
                            0 > p &&
                                b.ZERO.subTo(f, f)
                        }
                    }
                }
            };
            b.prototype.invDigit = function() {
                if (1 > this.t) return 0;
                var a = this[0];
                if (0 == (a & 1)) return 0;
                var b = a & 3;
                b = b * (2 - (a & 15) * b) & 15;
                b = b * (2 - (a & 255) * b) & 255;
                b = b * (2 - ((a & 65535) * b & 65535)) & 65535;
                b = b * (2 - a * b % this.DV) % this.DV;
                return 0 < b ? this.DV - b : -b
            };
            b.prototype.isEven = function() {
                return 0 == (0 < this.t ? this[0] & 1 : this.s)
            };
            b.prototype.exp = function(a, c) {
                if (4294967295 < a || 1 > a) return b.ONE;
                var e = k(),
                    f = k(),
                    l = c.convert(this),
                    d = I(a) - 1;
                for (l.copyTo(e); 0 <= --d;)
                    if (c.sqrTo(e, f), 0 < (a & 1 << d)) c.mulTo(f, l, e);
                    else {
                        var p =
                            e;
                        e = f;
                        f = p
                    }
                return c.revert(e)
            };
            b.prototype.chunkSize = function(a) {
                return Math.floor(Math.LN2 * this.DB / Math.log(a))
            };
            b.prototype.toRadix = function(a) {
                null == a && (a = 10);
                if (0 == this.signum() || 2 > a || 36 < a) return "0";
                var b = this.chunkSize(a);
                b = Math.pow(a, b);
                var e = E(b),
                    c = k(),
                    f = k(),
                    d = "";
                for (this.divRemTo(e, c, f); 0 < c.signum();) d = (b + f.intValue()).toString(a).substr(1) + d, c.divRemTo(e, c, f);
                return f.intValue().toString(a) + d
            };
            b.prototype.fromRadix = function(a, c) {
                this.fromInt(0);
                null == c && (c = 10);
                for (var e = this.chunkSize(c),
                        f = Math.pow(c, e), l = !1, d = 0, p = 0, g = 0; g < a.length; ++g) {
                    var k = L(a, g);
                    0 > k ? "-" == a.charAt(g) && 0 == this.signum() && (l = !0) : (p = c * p + k, ++d >= e && (this.dMultiply(f), this.dAddOffset(p, 0), p = d = 0))
                }
                0 < d && (this.dMultiply(Math.pow(c, d)), this.dAddOffset(p, 0));
                l && b.ZERO.subTo(this, this)
            };
            b.prototype.fromNumber = function(a, c, f) {
                if ("number" == typeof c)
                    if (2 > a) this.fromInt(1);
                    else
                        for (this.fromNumber(a, f), this.testBit(a - 1) || this.bitwiseTo(b.ONE.shiftLeft(a - 1), r, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(c);) this.dAddOffset(2,
                            0), this.bitLength() > a && this.subTo(b.ONE.shiftLeft(a - 1), this);
                else {
                    f = [];
                    var e = a & 7;
                    f.length = (a >> 3) + 1;
                    c.nextBytes(f);
                    f[0] = 0 < e ? f[0] & (1 << e) - 1 : 0;
                    this.fromString(f, 256)
                }
            };
            b.prototype.bitwiseTo = function(a, b, c) {
                var e, f = Math.min(a.t, this.t);
                for (e = 0; e < f; ++e) c[e] = b(this[e], a[e]);
                if (a.t < this.t) {
                    var l = a.s & this.DM;
                    for (e = f; e < this.t; ++e) c[e] = b(this[e], l);
                    c.t = this.t
                } else {
                    l = this.s & this.DM;
                    for (e = f; e < a.t; ++e) c[e] = b(l, a[e]);
                    c.t = a.t
                }
                c.s = b(this.s, a.s);
                c.clamp()
            };
            b.prototype.changeBit = function(a, c) {
                a = b.ONE.shiftLeft(a);
                this.bitwiseTo(a,
                    c, a);
                return a
            };
            b.prototype.addTo = function(a, b) {
                for (var e = 0, c = 0, f = Math.min(a.t, this.t); e < f;) c += this[e] + a[e], b[e++] = c & this.DM, c >>= this.DB;
                if (a.t < this.t) {
                    for (c += a.s; e < this.t;) c += this[e], b[e++] = c & this.DM, c >>= this.DB;
                    c += this.s
                } else {
                    for (c += this.s; e < a.t;) c += a[e], b[e++] = c & this.DM, c >>= this.DB;
                    c += a.s
                }
                b.s = 0 > c ? -1 : 0;
                0 < c ? b[e++] = c : -1 > c && (b[e++] = this.DV + c);
                b.t = e;
                b.clamp()
            };
            b.prototype.dMultiply = function(a) {
                this[this.t] = this.am(0, a - 1, this, 0, 0, this.t);
                ++this.t;
                this.clamp()
            };
            b.prototype.dAddOffset = function(a, b) {
                if (0 !=
                    a) {
                    for (; this.t <= b;) this[this.t++] = 0;
                    for (this[b] += a; this[b] >= this.DV;) this[b] -= this.DV, ++b >= this.t && (this[this.t++] = 0), ++this[b]
                }
            };
            b.prototype.multiplyLowerTo = function(a, b, c) {
                var e = Math.min(this.t + a.t, b);
                c.s = 0;
                for (c.t = e; 0 < e;) c[--e] = 0;
                for (var f = c.t - this.t; e < f; ++e) c[e + this.t] = this.am(0, a[e], c, e, 0, this.t);
                for (f = Math.min(a.t, b); e < f; ++e) this.am(0, a[e], c, e, 0, b - e);
                c.clamp()
            };
            b.prototype.multiplyUpperTo = function(a, b, c) {
                --b;
                var e = c.t = this.t + a.t - b;
                for (c.s = 0; 0 <= --e;) c[e] = 0;
                for (e = Math.max(b - this.t, 0); e < a.t; ++e) c[this.t +
                    e - b] = this.am(b - e, a[e], c, 0, 0, this.t + e - b);
                c.clamp();
                c.drShiftTo(1, c)
            };
            b.prototype.modInt = function(a) {
                if (0 >= a) return 0;
                var b = this.DV % a,
                    e = 0 > this.s ? a - 1 : 0;
                if (0 < this.t)
                    if (0 == b) e = this[0] % a;
                    else
                        for (var c = this.t - 1; 0 <= c; --c) e = (b * e + this[c]) % a;
                return e
            };
            b.prototype.millerRabin = function(a) {
                var e = this.subtract(b.ONE),
                    c = e.getLowestSetBit();
                if (0 >= c) return !1;
                var f = e.shiftRight(c);
                a = a + 1 >> 1;
                a > G.length && (a = G.length);
                for (var d = k(), p = 0; p < a; ++p) {
                    d.fromInt(G[Math.floor(Math.random() * G.length)]);
                    var g = d.modPow(f, this);
                    if (0 !=
                        g.compareTo(b.ONE) && 0 != g.compareTo(e)) {
                        for (var x = 1; x++ < c && 0 != g.compareTo(e);)
                            if (g = g.modPowInt(2, this), 0 == g.compareTo(b.ONE)) return !1;
                        if (0 != g.compareTo(e)) return !1
                    }
                }
                return !0
            };
            b.prototype.square = function() {
                var a = k();
                this.squareTo(a);
                return a
            };
            b.prototype.gcda = function(a, b) {
                var e = 0 > this.s ? this.negate() : this.clone(),
                    c = 0 > a.s ? a.negate() : a.clone();
                0 > e.compareTo(c) && (a = e, e = c, c = a);
                var f = e.getLowestSetBit(),
                    d = c.getLowestSetBit();
                if (0 > d) b(e);
                else {
                    f < d && (d = f);
                    0 < d && (e.rShiftTo(d, e), c.rShiftTo(d, c));
                    var l = function() {
                        0 <
                            (f = e.getLowestSetBit()) && e.rShiftTo(f, e);
                        0 < (f = c.getLowestSetBit()) && c.rShiftTo(f, c);
                        0 <= e.compareTo(c) ? (e.subTo(c, e), e.rShiftTo(1, e)) : (c.subTo(e, c), c.rShiftTo(1, c));
                        0 < e.signum() ? setTimeout(l, 0) : (0 < d && c.lShiftTo(d, c), setTimeout(function() {
                            b(c)
                        }, 0))
                    };
                    setTimeout(l, 10)
                }
            };
            b.prototype.fromNumberAsync = function(a, c, f, d) {
                if ("number" == typeof c)
                    if (2 > a) this.fromInt(1);
                    else {
                        this.fromNumber(a, f);
                        this.testBit(a - 1) || this.bitwiseTo(b.ONE.shiftLeft(a - 1), r, this);
                        this.isEven() && this.dAddOffset(1, 0);
                        var e = this,
                            l = function() {
                                e.dAddOffset(2,
                                    0);
                                e.bitLength() > a && e.subTo(b.ONE.shiftLeft(a - 1), e);
                                e.isProbablePrime(c) ? setTimeout(function() {
                                    d()
                                }, 0) : setTimeout(l, 0)
                            };
                        setTimeout(l, 0)
                    }
                else {
                    f = [];
                    var p = a & 7;
                    f.length = (a >> 3) + 1;
                    c.nextBytes(f);
                    f[0] = 0 < p ? f[0] & (1 << p) - 1 : 0;
                    this.fromString(f, 256)
                }
            };
            return b
        }(),
        Z = function() {
            function a() {}
            a.prototype.convert = function(a) {
                return a
            };
            a.prototype.revert = function(a) {
                return a
            };
            a.prototype.mulTo = function(a, b, c) {
                a.multiplyTo(b, c)
            };
            a.prototype.sqrTo = function(a, b) {
                a.squareTo(b)
            };
            return a
        }(),
        V = function() {
            function a(a) {
                this.m =
                    a
            }
            a.prototype.convert = function(a) {
                return 0 > a.s || 0 <= a.compareTo(this.m) ? a.mod(this.m) : a
            };
            a.prototype.revert = function(a) {
                return a
            };
            a.prototype.reduce = function(a) {
                a.divRemTo(this.m, null, a)
            };
            a.prototype.mulTo = function(a, b, c) {
                a.multiplyTo(b, c);
                this.reduce(c)
            };
            a.prototype.sqrTo = function(a, b) {
                a.squareTo(b);
                this.reduce(b)
            };
            return a
        }(),
        da = function() {
            function a(a) {
                this.m = a;
                this.mp = a.invDigit();
                this.mpl = this.mp & 32767;
                this.mph = this.mp >> 15;
                this.um = (1 << a.DB - 15) - 1;
                this.mt2 = 2 * a.t
            }
            a.prototype.convert = function(a) {
                var b =
                    k();
                a.abs().dlShiftTo(this.m.t, b);
                b.divRemTo(this.m, null, b);
                0 > a.s && 0 < b.compareTo(y.ZERO) && this.m.subTo(b, b);
                return b
            };
            a.prototype.revert = function(a) {
                var b = k();
                a.copyTo(b);
                this.reduce(b);
                return b
            };
            a.prototype.reduce = function(a) {
                for (; a.t <= this.mt2;) a[a.t++] = 0;
                for (var b = 0; b < this.m.t; ++b) {
                    var e = a[b] & 32767,
                        c = e * this.mpl + ((e * this.mph + (a[b] >> 15) * this.mpl & this.um) << 15) & a.DM;
                    e = b + this.m.t;
                    for (a[e] += this.m.am(0, c, a, b, 0, this.m.t); a[e] >= a.DV;) a[e] -= a.DV, a[++e]++
                }
                a.clamp();
                a.drShiftTo(this.m.t, a);
                0 <= a.compareTo(this.m) &&
                    a.subTo(this.m, a)
            };
            a.prototype.mulTo = function(a, b, c) {
                a.multiplyTo(b, c);
                this.reduce(c)
            };
            a.prototype.sqrTo = function(a, b) {
                a.squareTo(b);
                this.reduce(b)
            };
            return a
        }(),
        la = function() {
            function a(a) {
                this.m = a;
                this.r2 = k();
                this.q3 = k();
                y.ONE.dlShiftTo(2 * a.t, this.r2);
                this.mu = this.r2.divide(a)
            }
            a.prototype.convert = function(a) {
                if (0 > a.s || a.t > 2 * this.m.t) return a.mod(this.m);
                if (0 > a.compareTo(this.m)) return a;
                var b = k();
                a.copyTo(b);
                this.reduce(b);
                return b
            };
            a.prototype.revert = function(a) {
                return a
            };
            a.prototype.reduce = function(a) {
                a.drShiftTo(this.m.t -
                    1, this.r2);
                a.t > this.m.t + 1 && (a.t = this.m.t + 1, a.clamp());
                this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
                for (this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2); 0 > a.compareTo(this.r2);) a.dAddOffset(1, this.m.t + 1);
                for (a.subTo(this.r2, a); 0 <= a.compareTo(this.m);) a.subTo(this.m, a)
            };
            a.prototype.mulTo = function(a, b, c) {
                a.multiplyTo(b, c);
                this.reduce(c)
            };
            a.prototype.sqrTo = function(a, b) {
                a.squareTo(b);
                this.reduce(b)
            };
            return a
        }();
    if ("Microsoft Internet Explorer" == navigator.appName) {
        y.prototype.am = A;
        var D = 30
    } else "Netscape" !=
        navigator.appName ? (y.prototype.am = u, D = 26) : (y.prototype.am = B, D = 28);
    y.prototype.DB = D;
    y.prototype.DM = (1 << D) - 1;
    y.prototype.DV = 1 << D;
    y.prototype.FV = Math.pow(2, 52);
    y.prototype.F1 = 52 - D;
    y.prototype.F2 = 2 * D - 52;
    var M = [],
        v;
    D = 48;
    for (v = 0; 9 >= v; ++v) M[D++] = v;
    D = 97;
    for (v = 10; 36 > v; ++v) M[D++] = v;
    D = 65;
    for (v = 10; 36 > v; ++v) M[D++] = v;
    y.ZERO = E(0);
    y.ONE = E(1);
    var t = function() {
            function a() {
                this.j = this.i = 0;
                this.S = []
            }
            a.prototype.init = function(a) {
                var b, e;
                for (b = 0; 256 > b; ++b) this.S[b] = b;
                for (b = e = 0; 256 > b; ++b) {
                    e = e + this.S[b] + a[b % a.length] & 255;
                    var c = this.S[b];
                    this.S[b] = this.S[e];
                    this.S[e] = c
                }
                this.j = this.i = 0
            };
            a.prototype.next = function() {
                this.i = this.i + 1 & 255;
                this.j = this.j + this.S[this.i] & 255;
                var a = this.S[this.i];
                this.S[this.i] = this.S[this.j];
                this.S[this.j] = a;
                return this.S[a + this.S[this.i] & 255]
            };
            return a
        }(),
        ba, K = null;
    if (null == K) {
        K = [];
        var F = 0;
        D = void 0;
        if (window.crypto && window.crypto.getRandomValues)
            for (v = new Uint32Array(256), window.crypto.getRandomValues(v), D = 0; D < v.length; ++D) K[F++] = v[D] & 255;
        var x = function(a) {
            this.count = this.count || 0;
            if (256 <=
                this.count || 256 <= F) window.removeEventListener ? window.removeEventListener("mousemove", x, !1) : window.detachEvent && window.detachEvent("onmousemove", x);
            else try {
                var b = a.x + a.y;
                K[F++] = b & 255;
                this.count += 1
            } catch (l) {}
        };
        window.addEventListener ? window.addEventListener("mousemove", x, !1) : window.attachEvent && window.attachEvent("onmousemove", x)
    }
    var w = function() {
        function a() {}
        a.prototype.nextBytes = function(a) {
            for (var b = 0; b < a.length; ++b) {
                var e = b;
                if (null == ba) {
                    for (ba = new t; 256 > F;) {
                        var c = Math.floor(65536 * Math.random());
                        K[F++] = c & 255
                    }
                    ba.init(K);
                    for (F = 0; F < K.length; ++F) K[F] = 0;
                    F = 0
                }
                c = ba.next();
                a[e] = c
            }
        };
        return a
    }();
    D = function() {
        function a() {
            this.n = null;
            this.e = 0;
            this.coeff = this.dmq1 = this.dmp1 = this.q = this.p = this.d = null
        }
        a.prototype.doPublic = function(a) {
            return a.modPowInt(this.e, this.n)
        };
        a.prototype.doPrivate = function(a) {
            if (null == this.p || null == this.q) return a.modPow(this.d, this.n);
            var b = a.mod(this.p).modPow(this.dmp1, this.p);
            for (a = a.mod(this.q).modPow(this.dmq1, this.q); 0 > b.compareTo(a);) b = b.add(this.p);
            return b.subtract(a).multiply(this.coeff).mod(this.p).multiply(this.q).add(a)
        };
        a.prototype.setPublic = function(a, b) {
            null != a && null != b && 0 < a.length && 0 < b.length ? (this.n = m(a, 16), this.e = parseInt(b, 16)) : console.error("Invalid RSA public key")
        };
        a.prototype.encrypt = function(a) {
            var b = this.n.bitLength() + 7 >> 3;
            if (b < a.length + 11) console.error("Message too long for RSA"), b = null;
            else {
                for (var e = [], c = a.length - 1; 0 <= c && 0 < b;) {
                    var f = a.charCodeAt(c--);
                    128 > f ? e[--b] = f : 127 < f && 2048 > f ? (e[--b] = f & 63 | 128, e[--b] = f >> 6 | 192) : (e[--b] = f & 63 | 128, e[--b] = f >> 6 & 63 | 128, e[--b] = f >> 12 | 224)
                }
                e[--b] = 0;
                a = new w;
                for (c = []; 2 < b;) {
                    for (c[0] =
                        0; 0 == c[0];) a.nextBytes(c);
                    e[--b] = c[0]
                }
                e[--b] = 2;
                e[--b] = 0;
                b = new y(e)
            }
            if (null == b) return null;
            b = this.doPublic(b);
            if (null == b) return null;
            b = b.toString(16);
            return 0 == (b.length & 1) ? b : "0" + b
        };
        a.prototype.setPrivate = function(a, b, c) {
            null != a && null != b && 0 < a.length && 0 < b.length ? (this.n = m(a, 16), this.e = parseInt(b, 16), this.d = m(c, 16)) : console.error("Invalid RSA private key")
        };
        a.prototype.setPrivateEx = function(a, b, c, f, d, p, g, k) {
            null != a && null != b && 0 < a.length && 0 < b.length ? (this.n = m(a, 16), this.e = parseInt(b, 16), this.d = m(c, 16),
                this.p = m(f, 16), this.q = m(d, 16), this.dmp1 = m(p, 16), this.dmq1 = m(g, 16), this.coeff = m(k, 16)) : console.error("Invalid RSA private key")
        };
        a.prototype.generate = function(a, b) {
            var e = new w,
                c = a >> 1;
            this.e = parseInt(b, 16);
            for (b = new y(b, 16);;) {
                for (; this.p = new y(a - c, 1, e), 0 != this.p.subtract(y.ONE).gcd(b).compareTo(y.ONE) || !this.p.isProbablePrime(10););
                for (; this.q = new y(c, 1, e), 0 != this.q.subtract(y.ONE).gcd(b).compareTo(y.ONE) || !this.q.isProbablePrime(10););
                if (0 >= this.p.compareTo(this.q)) {
                    var f = this.p;
                    this.p = this.q;
                    this.q =
                        f
                }
                f = this.p.subtract(y.ONE);
                var d = this.q.subtract(y.ONE),
                    l = f.multiply(d);
                if (0 == l.gcd(b).compareTo(y.ONE)) {
                    this.n = this.p.multiply(this.q);
                    this.d = b.modInverse(l);
                    this.dmp1 = this.d.mod(f);
                    this.dmq1 = this.d.mod(d);
                    this.coeff = this.q.modInverse(this.p);
                    break
                }
            }
        };
        a.prototype.decrypt = function(a) {
            a = m(a, 16);
            a = this.doPrivate(a);
            if (null == a) return null;
            a: {
                var b = this.n.bitLength() + 7 >> 3;a = a.toByteArray();
                for (var e = 0; e < a.length && 0 == a[e];) ++e;
                if (a.length - e != b - 1 || 2 != a[e]) a = null;
                else {
                    for (++e; 0 != a[e];)
                        if (++e >= a.length) {
                            a =
                                null;
                            break a
                        }
                    for (b = ""; ++e < a.length;) {
                        var c = a[e] & 255;
                        128 > c ? b += String.fromCharCode(c) : 191 < c && 224 > c ? (b += String.fromCharCode((c & 31) << 6 | a[e + 1] & 63), ++e) : (b += String.fromCharCode((c & 15) << 12 | (a[e + 1] & 63) << 6 | a[e + 2] & 63), e += 2)
                    }
                    a = b
                }
            }
            return a
        };
        a.prototype.generateAsync = function(a, b, c) {
            var e = new w,
                f = a >> 1;
            this.e = parseInt(b, 16);
            var d = new y(b, 16),
                l = this,
                p = function() {
                    var b = function() {
                            if (0 >= l.p.compareTo(l.q)) {
                                var a = l.p;
                                l.p = l.q;
                                l.q = a
                            }
                            a = l.p.subtract(y.ONE);
                            var b = l.q.subtract(y.ONE),
                                e = a.multiply(b);
                            0 == e.gcd(d).compareTo(y.ONE) ?
                                (l.n = l.p.multiply(l.q), l.d = d.modInverse(e), l.dmp1 = l.d.mod(a), l.dmq1 = l.d.mod(b), l.coeff = l.q.modInverse(l.p), setTimeout(function() {
                                    c()
                                }, 0)) : setTimeout(p, 0)
                        },
                        g = function() {
                            l.q = k();
                            l.q.fromNumberAsync(f, 1, e, function() {
                                l.q.subtract(y.ONE).gcda(d, function(a) {
                                    0 == a.compareTo(y.ONE) && l.q.isProbablePrime(10) ? setTimeout(b, 0) : setTimeout(g, 0)
                                })
                            })
                        },
                        x = function() {
                            l.p = k();
                            l.p.fromNumberAsync(a - f, 1, e, function() {
                                l.p.subtract(y.ONE).gcda(d, function(a) {
                                    0 == a.compareTo(y.ONE) && l.p.isProbablePrime(10) ? setTimeout(g, 0) : setTimeout(x,
                                        0)
                                })
                            })
                        };
                    setTimeout(x, 0)
                };
            setTimeout(p, 0)
        };
        a.prototype.sign = function(a, b, c) {
            a = (N[c] || "") + b(a).toString();
            b = this.n.bitLength() / 4;
            if (b < a.length + 22) console.error("Message too long for RSA"), a = null;
            else {
                b = b - a.length - 6;
                c = "";
                for (var e = 0; e < b; e += 2) c += "ff";
                a = m("0001" + c + "00" + a, 16)
            }
            if (null == a) return null;
            a = this.doPrivate(a);
            if (null == a) return null;
            a = a.toString(16);
            return 0 == (a.length & 1) ? a : "0" + a
        };
        a.prototype.verify = function(a, b, c) {
            b = m(b, 16);
            b = this.doPublic(b);
            if (null == b) return null;
            a: {
                b = b.toString(16).replace(/^1f+00/,
                    "");
                for (d in N)
                    if (N.hasOwnProperty(d)) {
                        var e = N[d],
                            f = e.length;
                        if (b.substr(0, f) == e) {
                            var d = b.substr(f);
                            break a
                        }
                    }
                d = b
            }
            return d == c(a).toString()
        };
        return a
    }();
    var N = {
        md2: "3020300c06082a864886f70d020205000410",
        md5: "3020300c06082a864886f70d020505000410",
        sha1: "3021300906052b0e03021a05000414",
        sha224: "302d300d06096086480165030402040500041c",
        sha256: "3031300d060960864801650304020105000420",
        sha384: "3041300d060960864801650304020205000430",
        sha512: "3051300d060960864801650304020305000440",
        ripemd160: "3021300906052b2403020105000414"
    };
    v = {
        extend: function(a, b, c) {
            if (!b || !a) throw Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
            var e = function() {};
            e.prototype = b.prototype;
            a.prototype = new e;
            a.prototype.constructor = a;
            a.superclass = b.prototype;
            b.prototype.constructor == Object.prototype.constructor && (b.prototype.constructor = b);
            if (c) {
                for (var f in c) a.prototype[f] = c[f];
                b = function() {};
                var d = ["toString", "valueOf"];
                try {
                    /MSIE/.test(navigator.userAgent) && (b = function(a, b) {
                        for (f = 0; f < d.length; f += 1) {
                            var e = d[f],
                                c = b[e];
                            "function" === typeof c && c != Object.prototype[e] && (a[e] = c)
                        }
                    })
                } catch (na) {}
                b(a.prototype, c)
            }
        }
    };
    var n = {};
    "undefined" != typeof n.asn1 && n.asn1 || (n.asn1 = {});
    n.asn1.ASN1Util = new function() {
        this.integerToByteHex = function(a) {
            a = a.toString(16);
            1 == a.length % 2 && (a = "0" + a);
            return a
        };
        this.bigIntToMinTwosComplementsHex = function(a) {
            var b = a.toString(16);
            if ("-" != b.substr(0, 1)) 1 == b.length % 2 ? b = "0" + b : b.match(/^[0-7]/) || (b = "00" + b);
            else {
                var c = b.substr(1).length;
                1 == c % 2 ? c += 1 : b.match(/^[0-7]/) || (c += 2);
                b = "";
                for (var f = 0; f < c; f++) b +=
                    "f";
                b = (new y(b, 16)).xor(a).add(y.ONE).toString(16).replace(/^-/, "")
            }
            return b
        };
        this.getPEMStringFromHex = function(a, b) {
            return hextopem(a, b)
        };
        this.newObject = function(a) {
            var b = n.asn1;
            var c = b.DERBoolean;
            var f = b.DERInteger,
                d = b.DERBitString,
                p = b.DEROctetString,
                g = b.DERNull,
                k = b.DERObjectIdentifier,
                x = b.DEREnumerated,
                h = b.DERUTF8String,
                w = b.DERNumericString,
                m = b.DERPrintableString,
                N = b.DERTeletexString,
                q = b.DERIA5String,
                r = b.DERUTCTime,
                fa = b.DERGeneralizedTime,
                u = b.DERSequence,
                O = b.DERSet;
            var P = b.DERTaggedObject;
            b = b.ASN1Util.newObject;
            var z = Object.keys(a);
            if (1 != z.length) throw "key of param shall be only one.";
            z = z[0];
            if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + z + ":")) throw "undefined key: " + z;
            if ("bool" == z) return new c(a[z]);
            if ("int" == z) return new f(a[z]);
            if ("bitstr" == z) return new d(a[z]);
            if ("octstr" == z) return new p(a[z]);
            if ("null" == z) return new g(a[z]);
            if ("oid" == z) return new k(a[z]);
            if ("enum" == z) return new x(a[z]);
            if ("utf8str" == z) return new h(a[z]);
            if ("numstr" ==
                z) return new w(a[z]);
            if ("prnstr" == z) return new m(a[z]);
            if ("telstr" == z) return new N(a[z]);
            if ("ia5str" == z) return new q(a[z]);
            if ("utctime" == z) return new r(a[z]);
            if ("gentime" == z) return new fa(a[z]);
            if ("seq" == z) {
                c = a[z];
                a = [];
                for (f = 0; f < c.length; f++) P = b(c[f]), a.push(P);
                return new u({
                    array: a
                })
            }
            if ("set" == z) {
                c = a[z];
                a = [];
                for (f = 0; f < c.length; f++) P = b(c[f]), a.push(P);
                return new O({
                    array: a
                })
            }
            if ("tag" == z) {
                u = a[z];
                if ("[object Array]" === Object.prototype.toString.call(u) && 3 == u.length) return b = b(u[2]), new P({
                    tag: u[0],
                    explicit: u[1],
                    obj: b
                });
                O = {};
                void 0 !== u.explicit && (O.explicit = u.explicit);
                void 0 !== u.tag && (O.tag = u.tag);
                if (void 0 === u.obj) throw "obj shall be specified for 'tag'.";
                O.obj = b(u.obj);
                return new P(O)
            }
        };
        this.jsonToASN1HEX = function(a) {
            return this.newObject(a).getEncodedHex()
        }
    };
    n.asn1.ASN1Util.oidHexToInt = function(a) {
        var b = parseInt(a.substr(0, 2), 16);
        b = Math.floor(b / 40) + "." + b % 40;
        for (var c = "", f = 2; f < a.length; f += 2) {
            var d = ("00000000" + parseInt(a.substr(f, 2), 16).toString(2)).slice(-8);
            c += d.substr(1, 7);
            "0" == d.substr(0, 1) && (c = new y(c,
                2), b = b + "." + c.toString(10), c = "")
        }
        return b
    };
    n.asn1.ASN1Util.oidIntToHex = function(a) {
        var b = function(a) {
                a = a.toString(16);
                1 == a.length && (a = "0" + a);
                return a
            },
            c = function(a) {
                var c = "";
                a = (new y(a, 10)).toString(2);
                var e = 7 - a.length % 7;
                7 == e && (e = 0);
                for (var f = "", d = 0; d < e; d++) f += "0";
                a = f + a;
                for (d = 0; d < a.length - 1; d += 7) e = a.substr(d, 7), d != a.length - 7 && (e = "1" + e), c += b(parseInt(e, 2));
                return c
            };
        if (!a.match(/^[0-9.]+$/)) throw "malformed oid string: " + a;
        var f = "";
        a = a.split(".");
        var d = 40 * parseInt(a[0]) + parseInt(a[1]);
        f += b(d);
        a.splice(0,
            2);
        for (d = 0; d < a.length; d++) f += c(a[d]);
        return f
    };
    n.asn1.ASN1Object = function() {
        this.getLengthHexFromValue = function() {
            if ("undefined" == typeof this.hV || null == this.hV) throw "this.hV is null or undefined.";
            if (1 == this.hV.length % 2) throw "value hex must be even length: n=0,v=" + this.hV;
            var a = this.hV.length / 2,
                b = a.toString(16);
            1 == b.length % 2 && (b = "0" + b);
            if (128 > a) return b;
            var c = b.length / 2;
            if (15 < c) throw "ASN.1 length too long to represent by 8x: n = " + a.toString(16);
            return (128 + c).toString(16) + b
        };
        this.getEncodedHex = function() {
            if (null ==
                this.hTLV || this.isModified) this.hV = this.getFreshValueHex(), this.hL = this.getLengthHexFromValue(), this.hTLV = this.hT + this.hL + this.hV, this.isModified = !1;
            return this.hTLV
        };
        this.getValueHex = function() {
            this.getEncodedHex();
            return this.hV
        };
        this.getFreshValueHex = function() {
            return ""
        }
    };
    n.asn1.DERAbstractString = function(a) {
        n.asn1.DERAbstractString.superclass.constructor.call(this);
        this.getString = function() {
            return this.s
        };
        this.setString = function(a) {
            this.hTLV = null;
            this.isModified = !0;
            this.s = a;
            this.hV = stohex(this.s)
        };
        this.setStringHex = function(a) {
            this.hTLV = null;
            this.isModified = !0;
            this.s = null;
            this.hV = a
        };
        this.getFreshValueHex = function() {
            return this.hV
        };
        "undefined" != typeof a && ("string" == typeof a ? this.setString(a) : "undefined" != typeof a.str ? this.setString(a.str) : "undefined" != typeof a.hex && this.setStringHex(a.hex))
    };
    v.extend(n.asn1.DERAbstractString, n.asn1.ASN1Object);
    n.asn1.DERAbstractTime = function(a) {
        n.asn1.DERAbstractTime.superclass.constructor.call(this);
        this.localDateToUTC = function(a) {
            utc = a.getTime() + 6E4 * a.getTimezoneOffset();
            return new Date(utc)
        };
        this.formatDate = function(a, b, c) {
            var e = this.zeroPadding;
            a = this.localDateToUTC(a);
            var f = String(a.getFullYear());
            "utc" == b && (f = f.substr(2, 2));
            b = e(String(a.getMonth() + 1), 2);
            var d = e(String(a.getDate()), 2),
                l = e(String(a.getHours()), 2),
                g = e(String(a.getMinutes()), 2),
                p = e(String(a.getSeconds()), 2);
            f = f + b + d + l + g + p;
            !0 === c && (c = a.getMilliseconds(), 0 != c && (e = e(String(c), 3), e = e.replace(/[0]+$/, ""), f = f + "." + e));
            return f + "Z"
        };
        this.zeroPadding = function(a, b) {
            return a.length >= b ? a : Array(b - a.length + 1).join("0") +
                a
        };
        this.getString = function() {
            return this.s
        };
        this.setString = function(a) {
            this.hTLV = null;
            this.isModified = !0;
            this.s = a;
            this.hV = stohex(a)
        };
        this.setByDateValue = function(a, b, c, f, d, g) {
            a = new Date(Date.UTC(a, b - 1, c, f, d, g, 0));
            this.setByDate(a)
        };
        this.getFreshValueHex = function() {
            return this.hV
        }
    };
    v.extend(n.asn1.DERAbstractTime, n.asn1.ASN1Object);
    n.asn1.DERAbstractStructured = function(a) {
        n.asn1.DERAbstractString.superclass.constructor.call(this);
        this.setByASN1ObjectArray = function(a) {
            this.hTLV = null;
            this.isModified = !0;
            this.asn1Array = a
        };
        this.appendASN1Object = function(a) {
            this.hTLV = null;
            this.isModified = !0;
            this.asn1Array.push(a)
        };
        this.asn1Array = [];
        "undefined" != typeof a && "undefined" != typeof a.array && (this.asn1Array = a.array)
    };
    v.extend(n.asn1.DERAbstractStructured, n.asn1.ASN1Object);
    n.asn1.DERBoolean = function() {
        n.asn1.DERBoolean.superclass.constructor.call(this);
        this.hT = "01";
        this.hTLV = "0101ff"
    };
    v.extend(n.asn1.DERBoolean, n.asn1.ASN1Object);
    n.asn1.DERInteger = function(a) {
        n.asn1.DERInteger.superclass.constructor.call(this);
        this.hT = "02";
        this.setByBigInteger = function(a) {
            this.hTLV = null;
            this.isModified = !0;
            this.hV = n.asn1.ASN1Util.bigIntToMinTwosComplementsHex(a)
        };
        this.setByInteger = function(a) {
            a = new y(String(a), 10);
            this.setByBigInteger(a)
        };
        this.setValueHex = function(a) {
            this.hV = a
        };
        this.getFreshValueHex = function() {
            return this.hV
        };
        "undefined" != typeof a && ("undefined" != typeof a.bigint ? this.setByBigInteger(a.bigint) : "undefined" != typeof a["int"] ? this.setByInteger(a["int"]) : "number" == typeof a ? this.setByInteger(a) : "undefined" != typeof a.hex &&
            this.setValueHex(a.hex))
    };
    v.extend(n.asn1.DERInteger, n.asn1.ASN1Object);
    n.asn1.DERBitString = function(a) {
        if (void 0 !== a && "undefined" !== typeof a.obj) {
            var b = n.asn1.ASN1Util.newObject(a.obj);
            a.hex = "00" + b.getEncodedHex()
        }
        n.asn1.DERBitString.superclass.constructor.call(this);
        this.hT = "03";
        this.setHexValueIncludingUnusedBits = function(a) {
            this.hTLV = null;
            this.isModified = !0;
            this.hV = a
        };
        this.setUnusedBitsAndHexValue = function(a, b) {
            if (0 > a || 7 < a) throw "unused bits shall be from 0 to 7: u = " + a;
            this.hTLV = null;
            this.isModified = !0;
            this.hV = "0" + a + b
        };
        this.setByBinaryString = function(a) {
            a = a.replace(/0+$/, "");
            var b = 8 - a.length % 8;
            8 == b && (b = 0);
            for (var c = 0; c <= b; c++) a += "0";
            var e = "";
            for (c = 0; c < a.length - 1; c += 8) {
                var f = a.substr(c, 8);
                f = parseInt(f, 2).toString(16);
                1 == f.length && (f = "0" + f);
                e += f
            }
            this.hTLV = null;
            this.isModified = !0;
            this.hV = "0" + b + e
        };
        this.setByBooleanArray = function(a) {
            for (var b = "", c = 0; c < a.length; c++) b = 1 == a[c] ? b + "1" : b + "0";
            this.setByBinaryString(b)
        };
        this.newFalseArray = function(a) {
            for (var b = Array(a), c = 0; c < a; c++) b[c] = !1;
            return b
        };
        this.getFreshValueHex =
            function() {
                return this.hV
            };
        "undefined" != typeof a && ("string" == typeof a && a.toLowerCase().match(/^[0-9a-f]+$/) ? this.setHexValueIncludingUnusedBits(a) : "undefined" != typeof a.hex ? this.setHexValueIncludingUnusedBits(a.hex) : "undefined" != typeof a.bin ? this.setByBinaryString(a.bin) : "undefined" != typeof a.array && this.setByBooleanArray(a.array))
    };
    v.extend(n.asn1.DERBitString, n.asn1.ASN1Object);
    n.asn1.DEROctetString = function(a) {
        if (void 0 !== a && "undefined" !== typeof a.obj) {
            var b = n.asn1.ASN1Util.newObject(a.obj);
            a.hex =
                b.getEncodedHex()
        }
        n.asn1.DEROctetString.superclass.constructor.call(this, a);
        this.hT = "04"
    };
    v.extend(n.asn1.DEROctetString, n.asn1.DERAbstractString);
    n.asn1.DERNull = function() {
        n.asn1.DERNull.superclass.constructor.call(this);
        this.hT = "05";
        this.hTLV = "0500"
    };
    v.extend(n.asn1.DERNull, n.asn1.ASN1Object);
    n.asn1.DERObjectIdentifier = function(a) {
        var b = function(a) {
            a = a.toString(16);
            1 == a.length && (a = "0" + a);
            return a
        };
        n.asn1.DERObjectIdentifier.superclass.constructor.call(this);
        this.hT = "06";
        this.setValueHex = function(a) {
            this.hTLV =
                null;
            this.isModified = !0;
            this.s = null;
            this.hV = a
        };
        this.setValueOidString = function(a) {
            if (!a.match(/^[0-9.]+$/)) throw "malformed oid string: " + a;
            var c = "";
            a = a.split(".");
            var e = 40 * parseInt(a[0]) + parseInt(a[1]);
            c += b(e);
            a.splice(0, 2);
            for (e = 0; e < a.length; e++) {
                var f = "",
                    d = (new y(a[e], 10)).toString(2),
                    g = 7 - d.length % 7;
                7 == g && (g = 0);
                for (var l = "", p = 0; p < g; p++) l += "0";
                d = l + d;
                for (p = 0; p < d.length - 1; p += 7) g = d.substr(p, 7), p != d.length - 7 && (g = "1" + g), f += b(parseInt(g, 2));
                c += f
            }
            this.hTLV = null;
            this.isModified = !0;
            this.s = null;
            this.hV = c
        };
        this.setValueName = function(a) {
            var b = n.asn1.x509.OID.name2oid(a);
            if ("" !== b) this.setValueOidString(b);
            else throw "DERObjectIdentifier oidName undefined: " + a;
        };
        this.getFreshValueHex = function() {
            return this.hV
        };
        void 0 !== a && ("string" === typeof a ? a.match(/^[0-2].[0-9.]+$/) ? this.setValueOidString(a) : this.setValueName(a) : void 0 !== a.oid ? this.setValueOidString(a.oid) : void 0 !== a.hex ? this.setValueHex(a.hex) : void 0 !== a.name && this.setValueName(a.name))
    };
    v.extend(n.asn1.DERObjectIdentifier, n.asn1.ASN1Object);
    n.asn1.DEREnumerated =
        function(a) {
            n.asn1.DEREnumerated.superclass.constructor.call(this);
            this.hT = "0a";
            this.setByBigInteger = function(a) {
                this.hTLV = null;
                this.isModified = !0;
                this.hV = n.asn1.ASN1Util.bigIntToMinTwosComplementsHex(a)
            };
            this.setByInteger = function(a) {
                a = new y(String(a), 10);
                this.setByBigInteger(a)
            };
            this.setValueHex = function(a) {
                this.hV = a
            };
            this.getFreshValueHex = function() {
                return this.hV
            };
            "undefined" != typeof a && ("undefined" != typeof a["int"] ? this.setByInteger(a["int"]) : "number" == typeof a ? this.setByInteger(a) : "undefined" !=
                typeof a.hex && this.setValueHex(a.hex))
        };
    v.extend(n.asn1.DEREnumerated, n.asn1.ASN1Object);
    n.asn1.DERUTF8String = function(a) {
        n.asn1.DERUTF8String.superclass.constructor.call(this, a);
        this.hT = "0c"
    };
    v.extend(n.asn1.DERUTF8String, n.asn1.DERAbstractString);
    n.asn1.DERNumericString = function(a) {
        n.asn1.DERNumericString.superclass.constructor.call(this, a);
        this.hT = "12"
    };
    v.extend(n.asn1.DERNumericString, n.asn1.DERAbstractString);
    n.asn1.DERPrintableString = function(a) {
        n.asn1.DERPrintableString.superclass.constructor.call(this,
            a);
        this.hT = "13"
    };
    v.extend(n.asn1.DERPrintableString, n.asn1.DERAbstractString);
    n.asn1.DERTeletexString = function(a) {
        n.asn1.DERTeletexString.superclass.constructor.call(this, a);
        this.hT = "14"
    };
    v.extend(n.asn1.DERTeletexString, n.asn1.DERAbstractString);
    n.asn1.DERIA5String = function(a) {
        n.asn1.DERIA5String.superclass.constructor.call(this, a);
        this.hT = "16"
    };
    v.extend(n.asn1.DERIA5String, n.asn1.DERAbstractString);
    n.asn1.DERUTCTime = function(a) {
        n.asn1.DERUTCTime.superclass.constructor.call(this, a);
        this.hT = "17";
        this.setByDate = function(a) {
            this.hTLV = null;
            this.isModified = !0;
            this.date = a;
            this.s = this.formatDate(this.date, "utc");
            this.hV = stohex(this.s)
        };
        this.getFreshValueHex = function() {
            "undefined" == typeof this.date && "undefined" == typeof this.s && (this.date = new Date, this.s = this.formatDate(this.date, "utc"), this.hV = stohex(this.s));
            return this.hV
        };
        void 0 !== a && (void 0 !== a.str ? this.setString(a.str) : "string" == typeof a && a.match(/^[0-9]{12}Z$/) ? this.setString(a) : void 0 !== a.hex ? this.setStringHex(a.hex) : void 0 !== a.date && this.setByDate(a.date))
    };
    v.extend(n.asn1.DERUTCTime, n.asn1.DERAbstractTime);
    n.asn1.DERGeneralizedTime = function(a) {
        n.asn1.DERGeneralizedTime.superclass.constructor.call(this, a);
        this.hT = "18";
        this.withMillis = !1;
        this.setByDate = function(a) {
            this.hTLV = null;
            this.isModified = !0;
            this.date = a;
            this.s = this.formatDate(this.date, "gen", this.withMillis);
            this.hV = stohex(this.s)
        };
        this.getFreshValueHex = function() {
            void 0 === this.date && void 0 === this.s && (this.date = new Date, this.s = this.formatDate(this.date, "gen", this.withMillis), this.hV = stohex(this.s));
            return this.hV
        };
        void 0 !== a && (void 0 !== a.str ? this.setString(a.str) : "string" == typeof a && a.match(/^[0-9]{14}Z$/) ? this.setString(a) : void 0 !== a.hex ? this.setStringHex(a.hex) : void 0 !== a.date && this.setByDate(a.date), !0 === a.millis && (this.withMillis = !0))
    };
    v.extend(n.asn1.DERGeneralizedTime, n.asn1.DERAbstractTime);
    n.asn1.DERSequence = function(a) {
        n.asn1.DERSequence.superclass.constructor.call(this, a);
        this.hT = "30";
        this.getFreshValueHex = function() {
            for (var a = "", b = 0; b < this.asn1Array.length; b++) a += this.asn1Array[b].getEncodedHex();
            return this.hV = a
        }
    };
    v.extend(n.asn1.DERSequence, n.asn1.DERAbstractStructured);
    n.asn1.DERSet = function(a) {
        n.asn1.DERSet.superclass.constructor.call(this, a);
        this.hT = "31";
        this.sortFlag = !0;
        this.getFreshValueHex = function() {
            for (var a = [], b = 0; b < this.asn1Array.length; b++) a.push(this.asn1Array[b].getEncodedHex());
            1 == this.sortFlag && a.sort();
            return this.hV = a.join("")
        };
        "undefined" != typeof a && "undefined" != typeof a.sortflag && 0 == a.sortflag && (this.sortFlag = !1)
    };
    v.extend(n.asn1.DERSet, n.asn1.DERAbstractStructured);
    n.asn1.DERTaggedObject =
        function(a) {
            n.asn1.DERTaggedObject.superclass.constructor.call(this);
            this.hT = "a0";
            this.hV = "";
            this.isExplicit = !0;
            this.asn1Object = null;
            this.setASN1Object = function(a, b, c) {
                this.hT = b;
                this.isExplicit = a;
                this.asn1Object = c;
                this.isExplicit ? (this.hV = this.asn1Object.getEncodedHex(), this.hTLV = null, this.isModified = !0) : (this.hV = null, this.hTLV = c.getEncodedHex(), this.hTLV = this.hTLV.replace(/^../, b), this.isModified = !1)
            };
            this.getFreshValueHex = function() {
                return this.hV
            };
            "undefined" != typeof a && ("undefined" != typeof a.tag &&
                (this.hT = a.tag), "undefined" != typeof a.explicit && (this.isExplicit = a.explicit), "undefined" != typeof a.obj && (this.asn1Object = a.obj, this.setASN1Object(this.isExplicit, this.hT, this.asn1Object)))
        };
    v.extend(n.asn1.DERTaggedObject, n.asn1.ASN1Object);
    var fa = function(a) {
        function c(b) {
            var e = a.call(this) || this;
            b && ("string" === typeof b ? e.parseKey(b) : (c.hasPrivateKeyProperty(b) || c.hasPublicKeyProperty(b)) && e.parsePropertiesFrom(b));
            return e
        }
        g(c, a);
        c.prototype.parseKey = function(a) {
            try {
                var b = 0,
                    c = 0,
                    e = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/.test(a) ?
                    aa.decode(a) : T.unarmor(a),
                    f = ja.decode(e);
                3 === f.sub.length && (f = f.sub[2].sub[0]);
                if (9 === f.sub.length) {
                    b = f.sub[1].getHexStringValue();
                    this.n = m(b, 16);
                    c = f.sub[2].getHexStringValue();
                    this.e = parseInt(c, 16);
                    var d = f.sub[3].getHexStringValue();
                    this.d = m(d, 16);
                    var g = f.sub[4].getHexStringValue();
                    this.p = m(g, 16);
                    var l = f.sub[5].getHexStringValue();
                    this.q = m(l, 16);
                    var k = f.sub[6].getHexStringValue();
                    this.dmp1 = m(k, 16);
                    var x = f.sub[7].getHexStringValue();
                    this.dmq1 = m(x, 16);
                    var n = f.sub[8].getHexStringValue();
                    this.coeff =
                        m(n, 16)
                } else if (2 === f.sub.length) {
                    var h = f.sub[1].sub[0];
                    b = h.sub[0].getHexStringValue();
                    this.n = m(b, 16);
                    c = h.sub[1].getHexStringValue();
                    this.e = parseInt(c, 16)
                } else return !1;
                return !0
            } catch (pa) {
                return !1
            }
        };
        c.prototype.getPrivateBaseKey = function() {
            var a = {
                array: [new n.asn1.DERInteger({
                        int: 0
                    }), new n.asn1.DERInteger({
                        bigint: this.n
                    }), new n.asn1.DERInteger({
                        int: this.e
                    }), new n.asn1.DERInteger({
                        bigint: this.d
                    }), new n.asn1.DERInteger({
                        bigint: this.p
                    }), new n.asn1.DERInteger({
                        bigint: this.q
                    }), new n.asn1.DERInteger({
                        bigint: this.dmp1
                    }),
                    new n.asn1.DERInteger({
                        bigint: this.dmq1
                    }), new n.asn1.DERInteger({
                        bigint: this.coeff
                    })
                ]
            };
            return (new n.asn1.DERSequence(a)).getEncodedHex()
        };
        c.prototype.getPrivateBaseKeyB64 = function() {
            return b(this.getPrivateBaseKey())
        };
        c.prototype.getPublicBaseKey = function() {
            var a = new n.asn1.DERSequence({
                    array: [new n.asn1.DERObjectIdentifier({
                        oid: "1.2.840.113549.1.1.1"
                    }), new n.asn1.DERNull]
                }),
                b = new n.asn1.DERSequence({
                    array: [new n.asn1.DERInteger({
                        bigint: this.n
                    }), new n.asn1.DERInteger({
                        int: this.e
                    })]
                });
            b = new n.asn1.DERBitString({
                hex: "00" +
                    b.getEncodedHex()
            });
            return (new n.asn1.DERSequence({
                array: [a, b]
            })).getEncodedHex()
        };
        c.prototype.getPublicBaseKeyB64 = function() {
            return b(this.getPublicBaseKey())
        };
        c.wordwrap = function(a, b) {
            b = b || 64;
            return a ? a.match(RegExp("(.{1," + b + "})( +|$\n?)|(.{1," + b + "})", "g")).join("\n") : a
        };
        c.prototype.getPrivateKey = function() {
            return "-----BEGIN RSA PRIVATE KEY-----\n" + (c.wordwrap(this.getPrivateBaseKeyB64()) + "\n") + "-----END RSA PRIVATE KEY-----"
        };
        c.prototype.getPublicKey = function() {
            return "-----BEGIN PUBLIC KEY-----\n" +
                (c.wordwrap(this.getPublicBaseKeyB64()) + "\n") + "-----END PUBLIC KEY-----"
        };
        c.hasPublicKeyProperty = function(a) {
            a = a || {};
            return a.hasOwnProperty("n") && a.hasOwnProperty("e")
        };
        c.hasPrivateKeyProperty = function(a) {
            a = a || {};
            return a.hasOwnProperty("n") && a.hasOwnProperty("e") && a.hasOwnProperty("d") && a.hasOwnProperty("p") && a.hasOwnProperty("q") && a.hasOwnProperty("dmp1") && a.hasOwnProperty("dmq1") && a.hasOwnProperty("coeff")
        };
        c.prototype.parsePropertiesFrom = function(a) {
            this.n = a.n;
            this.e = a.e;
            a.hasOwnProperty("d") &&
                (this.d = a.d, this.p = a.p, this.q = a.q, this.dmp1 = a.dmp1, this.dmq1 = a.dmq1, this.coeff = a.coeff)
        };
        return c
    }(D);
    D = function() {
        function a(a) {
            a = a || {};
            this.default_key_size = parseInt(a.default_key_size, 10) || 1024;
            this.default_public_exponent = a.default_public_exponent || "010001";
            this.log = a.log || !1;
            this.key = null
        }
        a.prototype.setKey = function(a) {
            this.log && this.key && console.warn("A key was already set, overriding existing.");
            this.key = new fa(a)
        };
        a.prototype.setPrivateKey = function(a) {
            this.setKey(a)
        };
        a.prototype.setPublicKey =
            function(a) {
                this.setKey(a)
            };
        a.prototype.decrypt = function(a) {
            try {
                return this.getKey().decrypt(f(a))
            } catch (l) {
                return !1
            }
        };
        a.prototype.encrypt = function(a) {
            try {
                return b(this.getKey().encrypt(a))
            } catch (l) {
                return !1
            }
        };
        a.prototype.sign = function(a, c, f) {
            try {
                return b(this.getKey().sign(a, c, f))
            } catch (X) {
                return !1
            }
        };
        a.prototype.verify = function(a, b, c) {
            try {
                return this.getKey().verify(a, f(b), c)
            } catch (X) {
                return !1
            }
        };
        a.prototype.getKey = function(a) {
            if (!this.key) {
                this.key = new fa;
                if (a && "[object Function]" === {}.toString.call(a)) {
                    this.key.generateAsync(this.default_key_size,
                        this.default_public_exponent, a);
                    return
                }
                this.key.generate(this.default_key_size, this.default_public_exponent)
            }
            return this.key
        };
        a.prototype.getPrivateKey = function() {
            return this.getKey().getPrivateKey()
        };
        a.prototype.getPrivateKeyB64 = function() {
            return this.getKey().getPrivateBaseKeyB64()
        };
        a.prototype.getPublicKey = function() {
            return this.getKey().getPublicKey()
        };
        a.prototype.getPublicKeyB64 = function() {
            return this.getKey().getPublicBaseKeyB64()
        };
        a.version = "3.0.0-rc.1";
        return a
    }();
    window.JSEncrypt = D;
    h.JSEncrypt =
        D;
    h.default = D;
    Object.defineProperty(h, "__esModule", {
        value: !0
    })
});
(function(h) {
    var d = function() {
        function d(c, a) {
            this.cmdDict = {};
            this.arkClient = c;
            this.systemName = a
        }
        d.prototype.RegisterCmdCallback = function(c, a) {
            this.cmdDict[c] = a
        };
        d.prototype.SendCmd = function(c, a) {
            var b = this.cmdDict[c];
            null != this.arkClient && this.arkClient.send_cmd(this.systemName, c, a, b)
        };
        return d
    }();
    h.BaseHttpSystem = d
})(ArkSDK || (ArkSDK = {}));
(function(h) {
    var d = function() {
        function d(c, a) {
            this.cmdDict = {};
            this.arkSocketClient = c;
            this.systemName = a;
            this.arkSocketClient.systemDict[this.systemName] = this
        }
        d.prototype.Init = function() {};
        d.prototype.RegisterCmdCallback = function(c, a) {
            this.cmdDict[c] = a.bind(this)
        };
        d.prototype.SendCmd = function(c, a, b) {
            var f;
            b && (f = this.cmdDict[c]);
            this.arkSocketClient.SendCmd(this.systemName, c, a, f)
        };
        return d
    }();
    h.BaseSocketSystem = d
})(ArkSDK || (ArkSDK = {}));
var SUPPORTED_ALGS = 15;
(function(h) {
    function d(a, b) {
        this.highOrder = a;
        this.lowOrder = b
    }

    function r(a, b, c, f) {
        var d = "";
        b /= 8;
        var g;
        var e = -1 === c ? 3 : 0;
        for (g = 0; g < b; g += 1) {
            var l = a[g >>> 2] >>> 8 * (e + g % 4 * c);
            d += "0123456789abcdef".charAt(l >>> 4 & 15) + "0123456789abcdef".charAt(l & 15)
        }
        return f.outputUpper ? d.toUpperCase() : d
    }

    function c(a, b, c, f) {
        var d = "",
            g = b / 8,
            e;
        var l = -1 === c ? 3 : 0;
        for (e = 0; e < g; e += 3) {
            var k = e + 1 < g ? a[e + 1 >>> 2] : 0;
            var x = e + 2 < g ? a[e + 2 >>> 2] : 0;
            x = (a[e >>> 2] >>> 8 * (l + e % 4 * c) & 255) << 16 | (k >>> 8 * (l + (e + 1) % 4 * c) & 255) << 8 | x >>> 8 * (l + (e + 2) % 4 * c) & 255;
            for (k = 0; 4 > k; k +=
                1) d = 8 * e + 6 * k <= b ? d + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(x >>> 6 * (3 - k) & 63) : d + f.b64Pad
        }
        return d
    }

    function a(a, b, c) {
        var f = "";
        b /= 8;
        var d;
        var g = -1 === c ? 3 : 0;
        for (d = 0; d < b; d += 1) {
            var e = a[d >>> 2] >>> 8 * (g + d % 4 * c) & 255;
            f += String.fromCharCode(e)
        }
        return f
    }

    function b(a, b, c) {
        b /= 8;
        var f, d = new ArrayBuffer(b);
        var g = new Uint8Array(d);
        var e = -1 === c ? 3 : 0;
        for (f = 0; f < b; f += 1) g[f] = a[f >>> 2] >>> 8 * (e + f % 4 * c) & 255;
        return d
    }

    function f(a) {
        var b = {
            outputUpper: !1,
            b64Pad: "=",
            shakeLen: -1
        };
        a = a || {};
        b.outputUpper = a.outputUpper ||
            !1;
        !0 === a.hasOwnProperty("b64Pad") && (b.b64Pad = a.b64Pad);
        if (!0 === a.hasOwnProperty("shakeLen") && 0 !== (8 & SUPPORTED_ALGS)) {
            if (0 !== a.shakeLen % 8) throw Error("shakeLen must be a multiple of 8");
            b.shakeLen = a.shakeLen
        }
        if ("boolean" !== typeof b.outputUpper) throw Error("Invalid outputUpper formatting option");
        if ("string" !== typeof b.b64Pad) throw Error("Invalid b64Pad formatting option");
        return b
    }

    function g(a, b, c) {
        switch (b) {
            case "UTF8":
            case "UTF16BE":
            case "UTF16LE":
                break;
            default:
                throw Error("encoding must be UTF8, UTF16BE, or UTF16LE");
        }
        switch (a) {
            case "HEX":
                a = function(a, b, f) {
                    var e = a.length,
                        d, g;
                    if (0 !== e % 2) throw Error("String of HEX type must be in byte increments");
                    b = b || [0];
                    f = f || 0;
                    var k = f >>> 3;
                    var h = -1 === c ? 3 : 0;
                    for (d = 0; d < e; d += 2) {
                        var x = parseInt(a.substr(d, 2), 16);
                        if (isNaN(x)) throw Error("String of HEX type contains invalid characters");
                        var n = (d >>> 1) + k;
                        for (g = n >>> 2; b.length <= g;) b.push(0);
                        b[g] |= x << 8 * (h + n % 4 * c)
                    }
                    return {
                        value: b,
                        binLen: 4 * e + f
                    }
                };
                break;
            case "TEXT":
                a = function(a, f, d) {
                    var e = 0,
                        g, k, h;
                    f = f || [0];
                    d = d || 0;
                    var x = d >>> 3;
                    if ("UTF8" === b) {
                        var n = -1 === c ? 3 : 0;
                        for (g = 0; g < a.length; g += 1) {
                            var w = a.charCodeAt(g);
                            var m = [];
                            128 > w ? m.push(w) : 2048 > w ? (m.push(192 | w >>> 6), m.push(128 | w & 63)) : 55296 > w || 57344 <= w ? m.push(224 | w >>> 12, 128 | w >>> 6 & 63, 128 | w & 63) : (g += 1, w = 65536 + ((w & 1023) << 10 | a.charCodeAt(g) & 1023), m.push(240 | w >>> 18, 128 | w >>> 12 & 63, 128 | w >>> 6 & 63, 128 | w & 63));
                            for (k = 0; k < m.length; k += 1) {
                                var p = e + x;
                                for (h = p >>> 2; f.length <= h;) f.push(0);
                                f[h] |= m[k] << 8 * (n + p % 4 * c);
                                e += 1
                            }
                        }
                    } else if ("UTF16BE" === b || "UTF16LE" === b)
                        for (n = -1 === c ? 2 : 0, m = "UTF16LE" === b && 1 !== c || "UTF16LE" !== b && 1 === c, g = 0; g < a.length; g +=
                            1) {
                            w = a.charCodeAt(g);
                            !0 === m && (k = w & 255, w = k << 8 | w >>> 8);
                            p = e + x;
                            for (h = p >>> 2; f.length <= h;) f.push(0);
                            f[h] |= w << 8 * (n + p % 4 * c);
                            e += 2
                        }
                    return {
                        value: f,
                        binLen: 8 * e + d
                    }
                };
                break;
            case "B64":
                a = function(a, b, f) {
                    var e = 0,
                        d, g;
                    if (-1 === a.search(/^[a-zA-Z0-9=+\/]+$/)) throw Error("Invalid character in base-64 string");
                    var k = a.indexOf("=");
                    a = a.replace(/\=/g, "");
                    if (-1 !== k && k < a.length) throw Error("Invalid '=' found in base-64 string");
                    b = b || [0];
                    f = f || 0;
                    var h = f >>> 3;
                    var x = -1 === c ? 3 : 0;
                    for (k = 0; k < a.length; k += 4) {
                        var w = a.substr(k, 4);
                        for (d = g = 0; d <
                            w.length; d += 1) {
                            var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(w[d]);
                            g |= n << 18 - 6 * d
                        }
                        for (d = 0; d < w.length - 1; d += 1) {
                            var m = e + h;
                            for (n = m >>> 2; b.length <= n;) b.push(0);
                            b[n] |= (g >>> 16 - 8 * d & 255) << 8 * (x + m % 4 * c);
                            e += 1
                        }
                    }
                    return {
                        value: b,
                        binLen: 8 * e + f
                    }
                };
                break;
            case "BYTES":
                a = function(a, b, f) {
                    var e;
                    b = b || [0];
                    f = f || 0;
                    var d = f >>> 3;
                    var g = -1 === c ? 3 : 0;
                    for (e = 0; e < a.length; e += 1) {
                        var k = a.charCodeAt(e);
                        var h = e + d;
                        var x = h >>> 2;
                        b.length <= x && b.push(0);
                        b[x] |= k << 8 * (g + h % 4 * c)
                    }
                    return {
                        value: b,
                        binLen: 8 * a.length + f
                    }
                };
                break;
            case "ARRAYBUFFER":
                try {
                    a = new ArrayBuffer(0)
                } catch (n) {
                    throw Error("ARRAYBUFFER not supported by this environment");
                }
                a = function(a, b, f) {
                    var e;
                    b = b || [0];
                    f = f || 0;
                    var d = f >>> 3;
                    var g = -1 === c ? 3 : 0;
                    var k = new Uint8Array(a);
                    for (e = 0; e < a.byteLength; e += 1) {
                        var h = e + d;
                        var x = h >>> 2;
                        b.length <= x && b.push(0);
                        b[x] |= k[e] << 8 * (g + h % 4 * c)
                    }
                    return {
                        value: b,
                        binLen: 8 * a.byteLength + f
                    }
                };
                break;
            default:
                throw Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER");
        }
        return a
    }

    function q(a, b) {
        return a << b | a >>> 32 - b
    }

    function k(a, b) {
        return 32 <
            b ? (b -= 32, new d(a.lowOrder << b | a.highOrder >>> 32 - b, a.highOrder << b | a.lowOrder >>> 32 - b)) : 0 !== b ? new d(a.highOrder << b | a.lowOrder >>> 32 - b, a.lowOrder << b | a.highOrder >>> 32 - b) : a
    }

    function m(a, b) {
        return a >>> b | a << 32 - b
    }

    function u(a, b) {
        a = new d(a.highOrder, a.lowOrder);
        return 32 >= b ? new d(a.highOrder >>> b | a.lowOrder << 32 - b & 4294967295, a.lowOrder >>> b | a.highOrder << 32 - b & 4294967295) : new d(a.lowOrder >>> b - 32 | a.highOrder << 64 - b & 4294967295, a.highOrder >>> b - 32 | a.lowOrder << 64 - b & 4294967295)
    }

    function A(a, b) {
        return 32 >= b ? new d(a.highOrder >>>
            b, a.lowOrder >>> b | a.highOrder << 32 - b & 4294967295) : new d(0, a.highOrder >>> b - 32)
    }

    function B(a, b, c) {
        return a & b ^ ~a & c
    }

    function L(a, b, c) {
        return new d(a.highOrder & b.highOrder ^ ~a.highOrder & c.highOrder, a.lowOrder & b.lowOrder ^ ~a.lowOrder & c.lowOrder)
    }

    function E(a, b, c) {
        return a & b ^ a & c ^ b & c
    }

    function I(a, b, c) {
        return new d(a.highOrder & b.highOrder ^ a.highOrder & c.highOrder ^ b.highOrder & c.highOrder, a.lowOrder & b.lowOrder ^ a.lowOrder & c.lowOrder ^ b.lowOrder & c.lowOrder)
    }

    function S(a) {
        return m(a, 2) ^ m(a, 13) ^ m(a, 22)
    }

    function J(a) {
        var b =
            u(a, 28),
            c = u(a, 34);
        a = u(a, 39);
        return new d(b.highOrder ^ c.highOrder ^ a.highOrder, b.lowOrder ^ c.lowOrder ^ a.lowOrder)
    }

    function aa(a) {
        return m(a, 6) ^ m(a, 11) ^ m(a, 25)
    }

    function Q(a) {
        var b = u(a, 14),
            c = u(a, 18);
        a = u(a, 41);
        return new d(b.highOrder ^ c.highOrder ^ a.highOrder, b.lowOrder ^ c.lowOrder ^ a.lowOrder)
    }

    function T(a) {
        return m(a, 7) ^ m(a, 18) ^ a >>> 3
    }

    function Y(a) {
        var b = u(a, 1),
            c = u(a, 8);
        a = A(a, 7);
        return new d(b.highOrder ^ c.highOrder ^ a.highOrder, b.lowOrder ^ c.lowOrder ^ a.lowOrder)
    }

    function ha(a) {
        return m(a, 17) ^ m(a, 19) ^ a >>> 10
    }

    function ia(a) {
        var b = u(a, 19),
            c = u(a, 61);
        a = A(a, 6);
        return new d(b.highOrder ^ c.highOrder ^ a.highOrder, b.lowOrder ^ c.lowOrder ^ a.lowOrder)
    }

    function R(a, b) {
        var c = (a & 65535) + (b & 65535);
        return ((a >>> 16) + (b >>> 16) + (c >>> 16) & 65535) << 16 | c & 65535
    }

    function ja(a, b, c, f) {
        var d = (a & 65535) + (b & 65535) + (c & 65535) + (f & 65535);
        return ((a >>> 16) + (b >>> 16) + (c >>> 16) + (f >>> 16) + (d >>> 16) & 65535) << 16 | d & 65535
    }

    function U(a, b, c, f, d) {
        var g = (a & 65535) + (b & 65535) + (c & 65535) + (f & 65535) + (d & 65535);
        return ((a >>> 16) + (b >>> 16) + (c >>> 16) + (f >>> 16) + (d >>> 16) + (g >>> 16) &
            65535) << 16 | g & 65535
    }

    function G(a, b) {
        var c = (a.lowOrder & 65535) + (b.lowOrder & 65535);
        var f = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) + (c >>> 16);
        var g = (f & 65535) << 16 | c & 65535;
        c = (a.highOrder & 65535) + (b.highOrder & 65535) + (f >>> 16);
        f = (a.highOrder >>> 16) + (b.highOrder >>> 16) + (c >>> 16);
        return new d((f & 65535) << 16 | c & 65535, g)
    }

    function ka(a, b, c, f) {
        var g = (a.lowOrder & 65535) + (b.lowOrder & 65535) + (c.lowOrder & 65535) + (f.lowOrder & 65535);
        var k = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) + (c.lowOrder >>> 16) + (f.lowOrder >>> 16) + (g >>> 16);
        var e = (k & 65535) <<
            16 | g & 65535;
        g = (a.highOrder & 65535) + (b.highOrder & 65535) + (c.highOrder & 65535) + (f.highOrder & 65535) + (k >>> 16);
        k = (a.highOrder >>> 16) + (b.highOrder >>> 16) + (c.highOrder >>> 16) + (f.highOrder >>> 16) + (g >>> 16);
        return new d((k & 65535) << 16 | g & 65535, e)
    }

    function y(a, b, c, f, g) {
        var k = (a.lowOrder & 65535) + (b.lowOrder & 65535) + (c.lowOrder & 65535) + (f.lowOrder & 65535) + (g.lowOrder & 65535);
        var e = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) + (c.lowOrder >>> 16) + (f.lowOrder >>> 16) + (g.lowOrder >>> 16) + (k >>> 16);
        var h = (e & 65535) << 16 | k & 65535;
        k = (a.highOrder & 65535) +
            (b.highOrder & 65535) + (c.highOrder & 65535) + (f.highOrder & 65535) + (g.highOrder & 65535) + (e >>> 16);
        e = (a.highOrder >>> 16) + (b.highOrder >>> 16) + (c.highOrder >>> 16) + (f.highOrder >>> 16) + (g.highOrder >>> 16) + (k >>> 16);
        return new d((e & 65535) << 16 | k & 65535, h)
    }

    function Z(a, b) {
        return new d(a.highOrder ^ b.highOrder, a.lowOrder ^ b.lowOrder)
    }

    function V(a) {
        var b = [];
        if ("SHA-1" === a && 0 !== (1 & SUPPORTED_ALGS)) b = [1732584193, 4023233417, 2562383102, 271733878, 3285377520];
        else if (0 === a.lastIndexOf("SHA-", 0) && 0 !== (6 & SUPPORTED_ALGS)) {
            b = [3238371032,
                914150663, 812702999, 4144912697, 4290775857, 1750603025, 1694076839, 3204075428
            ];
            var c = [1779033703, 3144134277, 1013904242, 2773480762, 1359893119, 2600822924, 528734635, 1541459225];
            switch (a) {
                case "SHA-224":
                    break;
                case "SHA-256":
                    b = c;
                    break;
                case "SHA-384":
                    b = [new d(3418070365, b[0]), new d(1654270250, b[1]), new d(2438529370, b[2]), new d(355462360, b[3]), new d(1731405415, b[4]), new d(41048885895, b[5]), new d(3675008525, b[6]), new d(1203062813, b[7])];
                    break;
                case "SHA-512":
                    b = [new d(c[0], 4089235720), new d(c[1], 2227873595), new d(c[2],
                        4271175723), new d(c[3], 1595750129), new d(c[4], 2917565137), new d(c[5], 725511199), new d(c[6], 4215389547), new d(c[7], 327033209)];
                    break;
                default:
                    throw Error("Unknown SHA variant");
            }
        } else {
            if (0 !== a.lastIndexOf("SHA3-", 0) && 0 !== a.lastIndexOf("SHAKE", 0) || 0 === (8 & SUPPORTED_ALGS)) throw Error("No SHA variants supported");
            for (a = 0; 5 > a; a += 1) b[a] = [new d(0, 0), new d(0, 0), new d(0, 0), new d(0, 0), new d(0, 0)]
        }
        return b
    }

    function da(a, b) {
        var c = [],
            f;
        var d = b[0];
        var g = b[1];
        var e = b[2];
        var k = b[3];
        var h = b[4];
        for (f = 0; 80 > f; f += 1) {
            c[f] =
                16 > f ? a[f] : q(c[f - 3] ^ c[f - 8] ^ c[f - 14] ^ c[f - 16], 1);
            var m = 20 > f ? U(q(d, 5), g & e ^ ~g & k, h, 1518500249, c[f]) : 40 > f ? U(q(d, 5), g ^ e ^ k, h, 1859775393, c[f]) : 60 > f ? U(q(d, 5), E(g, e, k), h, 2400959708, c[f]) : U(q(d, 5), g ^ e ^ k, h, 3395469782, c[f]);
            h = k;
            k = e;
            e = q(g, 30);
            g = d;
            d = m
        }
        b[0] = R(d, b[0]);
        b[1] = R(g, b[1]);
        b[2] = R(e, b[2]);
        b[3] = R(k, b[3]);
        b[4] = R(h, b[4]);
        return b
    }

    function la(a, b, c, f, d) {
        for (d = (b + 65 >>> 9 << 4) + 15; a.length <= d;) a.push(0);
        a[b >>> 5] |= 128 << 24 - b % 32;
        b += c;
        a[d] = b & 4294967295;
        a[d - 1] = b / 4294967296 | 0;
        c = a.length;
        for (b = 0; b < c; b += 16) f = da(a.slice(b, b +
            16), f);
        return f
    }

    function D(a, b, c) {
        var f, g = [];
        if ("SHA-224" !== c && "SHA-256" !== c || 0 === (2 & SUPPORTED_ALGS)) {
            if ("SHA-384" !== c && "SHA-512" !== c || 0 === (4 & SUPPORTED_ALGS)) throw Error("Unexpected error in SHA-2 implementation");
            var k = 80;
            var e = 2;
            var h = d;
            var m = G;
            var q = ka;
            var r = y;
            var x = Y;
            var u = ia;
            var N = J;
            var w = Q;
            var A = I;
            var D = L;
            var C = v
        } else k = 64, e = 1, h = Number, m = R, q = ja, r = U, x = T, u = ha, N = S, w = aa, A = E, D = B, C = t;
        c = b[0];
        var F = b[1];
        var K = b[2];
        var M = b[3];
        var ea = b[4];
        var O = b[5];
        var P = b[6];
        var z = b[7];
        for (f = 0; f < k; f += 1) {
            if (16 > f) {
                var W =
                    f * e;
                var ca = a.length <= W ? 0 : a[W];
                W = a.length <= W + 1 ? 0 : a[W + 1];
                g[f] = new h(ca, W)
            } else g[f] = q(u(g[f - 2]), g[f - 7], x(g[f - 15]), g[f - 16]);
            ca = r(z, w(ea), D(ea, O, P), C[f], g[f]);
            W = m(N(c), A(c, F, K));
            z = P;
            P = O;
            O = ea;
            ea = m(M, ca);
            M = K;
            K = F;
            F = c;
            c = m(ca, W)
        }
        b[0] = m(c, b[0]);
        b[1] = m(F, b[1]);
        b[2] = m(K, b[2]);
        b[3] = m(M, b[3]);
        b[4] = m(ea, b[4]);
        b[5] = m(O, b[5]);
        b[6] = m(P, b[6]);
        b[7] = m(z, b[7]);
        return b
    }

    function M(a, b) {
        var c, f = [],
            g = [];
        if (null !== a)
            for (c = 0; c < a.length; c += 2) b[(c >>> 1) % 5][(c >>> 1) / 5 | 0] = Z(b[(c >>> 1) % 5][(c >>> 1) / 5 | 0], new d(a[c + 1], a[c]));
        for (a = 0; 24 >
            a; a += 1) {
            var h = V("SHA3-");
            for (c = 0; 5 > c; c += 1) {
                var e = c;
                var l = b[c][0];
                var m = b[c][1],
                    q = b[c][2],
                    r = b[c][3],
                    u = b[c][4];
                l = new d(l.highOrder ^ m.highOrder ^ q.highOrder ^ r.highOrder ^ u.highOrder, l.lowOrder ^ m.lowOrder ^ q.lowOrder ^ r.lowOrder ^ u.lowOrder);
                f[e] = l
            }
            for (c = 0; 5 > c; c += 1) g[c] = Z(f[(c + 4) % 5], k(f[(c + 1) % 5], 1));
            for (c = 0; 5 > c; c += 1)
                for (e = 0; 5 > e; e += 1) b[c][e] = Z(b[c][e], g[c]);
            for (c = 0; 5 > c; c += 1)
                for (e = 0; 5 > e; e += 1) h[e][(2 * c + 3 * e) % 5] = k(b[c][e], K[c][e]);
            for (c = 0; 5 > c; c += 1)
                for (e = 0; 5 > e; e += 1) b[c][e] = Z(h[c][e], new d(~h[(c + 1) % 5][e].highOrder &
                    h[(c + 2) % 5][e].highOrder, ~h[(c + 1) % 5][e].lowOrder & h[(c + 2) % 5][e].lowOrder));
            b[0][0] = Z(b[0][0], ba[a])
        }
        return b
    }
    var v;
    if (0 !== (6 & SUPPORTED_ALGS)) {
        var t = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205,
            773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
        ];
        0 !== (4 & SUPPORTED_ALGS) && (v = [new d(t[0], 3609767458), new d(t[1], 602891725), new d(t[2], 3964484399), new d(t[3], 2173295548), new d(t[4], 4081628472), new d(t[5], 3053834265), new d(t[6],
                2937671579), new d(t[7], 3664609560), new d(t[8], 2734883394), new d(t[9], 1164996542), new d(t[10], 1323610764), new d(t[11], 3590304994), new d(t[12], 4068182383), new d(t[13], 991336113), new d(t[14], 633803317), new d(t[15], 3479774868), new d(t[16], 2666613458), new d(t[17], 944711139), new d(t[18], 2341262773), new d(t[19], 2007800933), new d(t[20], 1495990901), new d(t[21], 1856431235), new d(t[22], 3175218132), new d(t[23], 2198950837), new d(t[24], 3999719339), new d(t[25], 766784016), new d(t[26], 2566594879), new d(t[27], 3203337956),
            new d(t[28], 1034457026), new d(t[29], 2466948901), new d(t[30], 3758326383), new d(t[31], 168717936), new d(t[32], 1188179964), new d(t[33], 1546045734), new d(t[34], 1522805485), new d(t[35], 2643833823), new d(t[36], 2343527390), new d(t[37], 1014477480), new d(t[38], 1206759142), new d(t[39], 344077627), new d(t[40], 1290863460), new d(t[41], 3158454273), new d(t[42], 3505952657), new d(t[43], 106217008), new d(t[44], 3606008344), new d(t[45], 1432725776), new d(t[46], 1467031594), new d(t[47], 851169720), new d(t[48], 3100823752), new d(t[49],
                1363258195), new d(t[50], 3750685593), new d(t[51], 3785050280), new d(t[52], 3318307427), new d(t[53], 3812723403), new d(t[54], 2003034995), new d(t[55], 3602036899), new d(t[56], 1575990012), new d(t[57], 1125592928), new d(t[58], 2716904306), new d(t[59], 442776044), new d(t[60], 593698344), new d(t[61], 3733110249), new d(t[62], 2999351573), new d(t[63], 3815920427), new d(3391569614, 3928383900), new d(3515267271, 566280711), new d(3940187606, 3454069534), new d(4118630271, 4000239992), new d(116418474, 1914138554), new d(174292421,
                2731055270), new d(289380356, 3203993006), new d(460393269, 320620315), new d(685471733, 587496836), new d(852142971, 1086792851), new d(1017036298, 365543100), new d(1126000580, 2618297676), new d(1288033470, 3409855158), new d(1501505948, 4234509866), new d(1607167915, 987167468), new d(1816402316, 1246189591)
        ])
    }
    if (0 !== (8 & SUPPORTED_ALGS)) {
        var ba = [new d(0, 1), new d(0, 32898), new d(2147483648, 32906), new d(2147483648, 2147516416), new d(0, 32907), new d(0, 2147483649), new d(2147483648, 2147516545), new d(2147483648, 32777), new d(0,
            138), new d(0, 136), new d(0, 2147516425), new d(0, 2147483658), new d(0, 2147516555), new d(2147483648, 139), new d(2147483648, 32905), new d(2147483648, 32771), new d(2147483648, 32770), new d(2147483648, 128), new d(0, 32778), new d(2147483648, 2147483658), new d(2147483648, 2147516545), new d(2147483648, 32896), new d(0, 2147483649), new d(2147483648, 2147516424)];
        var K = [
            [0, 36, 3, 41, 18],
            [1, 44, 10, 45, 2],
            [62, 6, 43, 15, 61],
            [28, 55, 25, 21, 56],
            [27, 20, 39, 8, 14]
        ]
    }
    var F = function(d, k, h) {
        var m = 0,
            q = [],
            p = 0,
            e = !1,
            l = [],
            u = [],
            t = !1,
            x = !1,
            w = -1;
        h = h || {};
        var A = h.encoding || "UTF8";
        var y = h.numRounds || 1;
        if (y !== parseInt(y, 10) || 1 > y) throw Error("numRounds must a integer >= 1");
        if ("SHA-1" === d && 0 !== (1 & SUPPORTED_ALGS)) {
            var v = 512;
            var B = da;
            var E = la;
            var C = 160;
            var F = function(a) {
                return a.slice()
            }
        } else if (0 === d.lastIndexOf("SHA-", 0) && 0 !== (6 & SUPPORTED_ALGS))
            if (B = function(a, b) {
                    return D(a, b, d)
                }, E = function(a, b, c, f, e) {
                    if ("SHA-224" !== d && "SHA-256" !== d || 0 === (2 & SUPPORTED_ALGS)) {
                        if ("SHA-384" !== d && "SHA-512" !== d || 0 === (4 & SUPPORTED_ALGS)) throw Error("Unexpected error in SHA-2 implementation");
                        var g = (b + 129 >>> 10 << 5) + 31;
                        e = 32
                    } else g = (b + 65 >>> 9 << 4) + 15, e = 16;
                    for (; a.length <= g;) a.push(0);
                    a[b >>> 5] |= 128 << 24 - b % 32;
                    b += c;
                    a[g] = b & 4294967295;
                    a[g - 1] = b / 4294967296 | 0;
                    c = a.length;
                    for (b = 0; b < c; b += e) f = D(a.slice(b, b + e), f, d);
                    if ("SHA-224" === d && 0 !== (2 & SUPPORTED_ALGS)) a = [f[0], f[1], f[2], f[3], f[4], f[5], f[6]];
                    else if ("SHA-256" === d && 0 !== (2 & SUPPORTED_ALGS)) a = f;
                    else if ("SHA-384" === d && 0 !== (4 & SUPPORTED_ALGS)) a = [f[0].highOrder, f[0].lowOrder, f[1].highOrder, f[1].lowOrder, f[2].highOrder, f[2].lowOrder, f[3].highOrder, f[3].lowOrder,
                        f[4].highOrder, f[4].lowOrder, f[5].highOrder, f[5].lowOrder
                    ];
                    else if ("SHA-512" === d && 0 !== (4 & SUPPORTED_ALGS)) a = [f[0].highOrder, f[0].lowOrder, f[1].highOrder, f[1].lowOrder, f[2].highOrder, f[2].lowOrder, f[3].highOrder, f[3].lowOrder, f[4].highOrder, f[4].lowOrder, f[5].highOrder, f[5].lowOrder, f[6].highOrder, f[6].lowOrder, f[7].highOrder, f[7].lowOrder];
                    else throw Error("Unexpected error in SHA-2 implementation");
                    return a
                }, F = function(a) {
                    return a.slice()
                }, "SHA-224" === d && 0 !== (2 & SUPPORTED_ALGS)) v = 512, C = 224;
            else if ("SHA-256" ===
            d && 0 !== (2 & SUPPORTED_ALGS)) v = 512, C = 256;
        else if ("SHA-384" === d && 0 !== (4 & SUPPORTED_ALGS)) v = 1024, C = 384;
        else if ("SHA-512" === d && 0 !== (4 & SUPPORTED_ALGS)) v = 1024, C = 512;
        else throw Error("Chosen SHA variant is not supported");
        else {
            if (0 !== d.lastIndexOf("SHA3-", 0) && 0 !== d.lastIndexOf("SHAKE", 0) || 0 === (8 & SUPPORTED_ALGS)) throw Error("Chosen SHA variant is not supported");
            var J = 6;
            B = M;
            F = function(a) {
                var b = [],
                    c;
                for (c = 0; 5 > c; c += 1) b[c] = a[c].slice();
                return b
            };
            w = 1;
            if ("SHA3-224" === d) v = 1152, C = 224;
            else if ("SHA3-256" === d) v = 1088,
                C = 256;
            else if ("SHA3-384" === d) v = 832, C = 384;
            else if ("SHA3-512" === d) v = 576, C = 512;
            else if ("SHAKE128" === d) v = 1344, C = -1, J = 31, x = !0;
            else if ("SHAKE256" === d) v = 1088, C = -1, J = 31, x = !0;
            else throw Error("Chosen SHA variant is not supported");
            E = function(a, b, c, f, e) {
                c = v;
                var d = J,
                    g, k = [],
                    h = c >>> 5,
                    l = 0,
                    m = b >>> 5;
                for (g = 0; g < m && b >= c; g += h) f = M(a.slice(g, g + h), f), b -= c;
                a = a.slice(g);
                for (b %= c; a.length < h;) a.push(0);
                g = b >>> 3;
                a[g >> 2] ^= d << g % 4 * 8;
                a[h - 1] ^= 2147483648;
                for (f = M(a, f); 32 * k.length < e;) {
                    a = f[l % 5][l / 5 | 0];
                    k.push(a.lowOrder);
                    if (32 * k.length >=
                        e) break;
                    k.push(a.highOrder);
                    l += 1;
                    0 === 64 * l % c && M(null, f)
                }
                return k
            }
        }
        var I = g(k, A, w);
        var G = V(d);
        this.setHMACKey = function(a, b, c) {
            if (!0 === e) throw Error("HMAC key already set");
            if (!0 === t) throw Error("Cannot set HMAC key after calling update");
            if (!0 === x && 0 !== (8 & SUPPORTED_ALGS)) throw Error("SHAKE is not supported for HMAC");
            A = (c || {}).encoding || "UTF8";
            b = g(b, A, w)(a);
            a = b.binLen;
            b = b.value;
            var f = v >>> 3;
            c = f / 4 - 1;
            if (f < a / 8) {
                for (b = E(b, a, 0, V(d), C); b.length <= c;) b.push(0);
                b[c] &= 4294967040
            } else if (f > a / 8) {
                for (; b.length <= c;) b.push(0);
                b[c] &= 4294967040
            }
            for (a = 0; a <= c; a += 1) l[a] = b[a] ^ 909522486, u[a] = b[a] ^ 1549556828;
            G = B(l, G);
            m = v;
            e = !0
        };
        this.update = function(a) {
            var b, c = 0,
                f = v >>> 5;
            var e = I(a, q, p);
            a = e.binLen;
            var d = e.value;
            e = a >>> 5;
            for (b = 0; b < e; b += f) c + v <= a && (G = B(d.slice(b, b + f), G), c += v);
            m += c;
            q = d.slice(c >>> 5);
            p = a % v;
            t = !0
        };
        this.getHash = function(g, k) {
            if (!0 === e) throw Error("Cannot call getHash after setting HMAC key");
            var h = f(k);
            if (!0 === x && 0 !== (8 & SUPPORTED_ALGS)) {
                if (-1 === h.shakeLen) throw Error("shakeLen must be specified in options");
                C = h.shakeLen
            }
            switch (g) {
                case "HEX":
                    g =
                        function(a) {
                            return r(a, C, w, h)
                        };
                    break;
                case "B64":
                    g = function(a) {
                        return c(a, C, w, h)
                    };
                    break;
                case "BYTES":
                    g = function(b) {
                        return a(b, C, w)
                    };
                    break;
                case "ARRAYBUFFER":
                    try {
                        k = new ArrayBuffer(0)
                    } catch (ca) {
                        throw Error("ARRAYBUFFER not supported by this environment");
                    }
                    g = function(a) {
                        return b(a, C, w)
                    };
                    break;
                default:
                    throw Error("format must be HEX, B64, BYTES, or ARRAYBUFFER");
            }
            var l = E(q.slice(), p, m, F(G), C);
            for (k = 1; k < y; k += 1) 0 !== (8 & SUPPORTED_ALGS) && !0 === x && 0 !== C % 32 && (l[l.length - 1] &= 16777215 >>> 24 - C % 32), l = E(l, C, 0, V(d),
                C);
            return g(l)
        };
        this.getHMAC = function(g, k) {
            if (!1 === e) throw Error("Cannot call getHMAC without first setting HMAC key");
            var h = f(k);
            switch (g) {
                case "HEX":
                    g = function(a) {
                        return r(a, C, w, h)
                    };
                    break;
                case "B64":
                    g = function(a) {
                        return c(a, C, w, h)
                    };
                    break;
                case "BYTES":
                    g = function(b) {
                        return a(b, C, w)
                    };
                    break;
                case "ARRAYBUFFER":
                    try {
                        g = new ArrayBuffer(0)
                    } catch (ca) {
                        throw Error("ARRAYBUFFER not supported by this environment");
                    }
                    g = function(a) {
                        return b(a, C, w)
                    };
                    break;
                default:
                    throw Error("outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER");
            }
            k = E(q.slice(), p, m, F(G), C);
            var l = B(u, V(d));
            l = E(k, C, v, l, C);
            return g(l)
        }
    };
    "function" === typeof define && define.amd ? define(function() {
        return F
    }) : "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (module.exports = F), exports = F) : h.jsSHA = F
})(this);
(function(h) {
    var d = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        hmac_sha1: function(d, c) {
            var a = new jsSHA("SHA-1", "TEXT");
            a.setHMACKey(d, "TEXT");
            a.update(c);
            return a.getHMAC("HEX")
        },
        base64_encode: function(d) {
            var c = "",
                a = 0;
            for (d = this._utf8_encode(d); a < d.length;) {
                var b = d.charCodeAt(a++);
                var f = d.charCodeAt(a++);
                var g = d.charCodeAt(a++);
                var h = b >> 2;
                b = (b & 3) << 4 | f >> 4;
                var k = (f & 15) << 2 | g >> 6;
                var m = g & 63;
                isNaN(f) ? k = m = 64 : isNaN(g) && (m = 64);
                c = c + this._keyStr.charAt(h) + this._keyStr.charAt(b) +
                    this._keyStr.charAt(k) + this._keyStr.charAt(m)
            }
            return c
        },
        decode: function(d) {
            var c = "",
                a = 0;
            for (d = d.replace(/[^A-Za-z0-9\+\/\=]/g, ""); a < d.length;) {
                var b = this._keyStr.indexOf(d.charAt(a++));
                var f = this._keyStr.indexOf(d.charAt(a++));
                var g = this._keyStr.indexOf(d.charAt(a++));
                var h = this._keyStr.indexOf(d.charAt(a++));
                b = b << 2 | f >> 4;
                f = (f & 15) << 4 | g >> 2;
                var k = (g & 3) << 6 | h;
                c += String.fromCharCode(b);
                64 != g && (c += String.fromCharCode(f));
                64 != h && (c += String.fromCharCode(k))
            }
            return c = this._utf8_decode(c)
        },
        _utf8_encode: function(d) {
            d =
                d.replace(/\r\n/g, "\n");
            for (var c = "", a = 0; a < d.length; a++) {
                var b = d.charCodeAt(a);
                128 > b ? c += String.fromCharCode(b) : (127 < b && 2048 > b ? c += String.fromCharCode(b >> 6 | 192) : (c += String.fromCharCode(b >> 12 | 224), c += String.fromCharCode(b >> 6 & 63 | 128)), c += String.fromCharCode(b & 63 | 128))
            }
            return c
        },
        _utf8_decode: function(d) {
            for (var c = "", a = 0, b, f, g; a < d.length;) b = d.charCodeAt(a), 128 > b ? (c += String.fromCharCode(b), a++) : 191 < b && 224 > b ? (f = d.charCodeAt(a + 1), c += String.fromCharCode((b & 31) << 6 | f & 63), a += 2) : (f = d.charCodeAt(a + 1), g = d.charCodeAt(a +
                2), c += String.fromCharCode((b & 15) << 12 | (f & 63) << 6 | g & 63), a += 3);
            return c
        }
    };
    "function" === typeof define && define.amd ? define(function() {
        return d
    }) : "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (module.exports = d), exports = d) : h.Coder = d
})(this);
var SS;
(function(h) {
    (function(d) {
        var h = function() {
            function c(a, b, c, d) {
                void 0 === d && (d = null);
                this._systemName = "";
                this._iCmdId = 1;
                this.cmdTmpDataDict = {};
                this.cmdRetryTimesDict = {};
                this.cmdCallbackDict = {};
                this.cmdErrorHandlerDict = {};
                this.Timer = [2E3, 4E3, 8E3, 16E3];
                this._gameClient = new ArkSDK.ArkClient(c);
                this._gameClient.clone(a);
                this._systemName = d ? d : "game" + b;
                this._iCmdId = 1
            }
            c.prototype.Release = function() {
                this.cmdCallbackDict = this.cmdRetryTimesDict = this.cmdTmpDataDict = this._systemName = this._gameClient = this.Timer =
                    null
            };
            c.prototype.SendCmdButNotRetry = function(a, b, c, g, h) {
                void 0 === g && (g = null);
                void 0 === h && (h = 15E3);
                console.log("[GameNetwork.SendCmdButNotRetry] %c" + a, "color:coral");
                this._gameClient ? (b.kiosk_id = d.LoginModel.LoginInfo.kiosk_id, b.machine_id = d.LoginModel.LoginInfo.machine_id, this.cmdCallbackDict[a] = c, this.cmdErrorHandlerDict[a] = g, this._gameClient.send_cmd(this._systemName, a, b, this.AllCmdCallbackNoRetry.bind(this), h)) : console.error("[GameNetwork.SendCmdButNotRetry] arkCkient is null")
            };
            c.prototype.AllCmdCallbackNoRetry =
                function(a, b, c) {
                    if (a === ArkSDK.HttpConnect.HttpResult.OK) {
                        if (null == b || null == b.cmd_data) console.error("maybe duplicate login or send data error ! result : ", b);
                        else if (2 == b.cmd_data.result) {
                            console.warn("server ready data : ", b);
                            this.errorHandler(c, a, b);
                            return
                        }
                        this.CmdCallback(c, a, b)
                    } else this.errorHandler(c, a, b)
                };
            c.prototype.SendCmd = function(a, b, c) {
                console.log("[GameNetwork.SendCmd] %c" + a, "color:coral");
                void 0 != this.cmdTmpDataDict[a] ? console.error(a, "is send already,retry now!") : (b.kiosk_id = d.LoginModel.LoginInfo.kiosk_id,
                    b.machine_id = d.LoginModel.LoginInfo.machine_id, b.cid = this._iCmdId, this.cmdTmpDataDict[a] = b, this.cmdRetryTimesDict[a] = 0, this.cmdCallbackDict[a] = c, c = this.cmdRetryTimesDict[a], this.cmdRetryTimesDict[a]++, this._gameClient.send_cmd(this._systemName, a, b, this.AllCmdCallback.bind(this), this.Timer[c]))
            };
            c.prototype.AllCmdCallback = function(a, b, c) {
                if (a === ArkSDK.HttpConnect.HttpResult.OK)
                    if (null == b || null == b.cmd_data) console.error("maybe duplicate login or send data error ! result : ", b), this.CmdCallback(c, a,
                        b);
                    else if (2 == b.cmd_data.result) console.warn("server ready data : ", b), this.ResendHandler(c, a, b);
                else if (0 === b.cmd_data.result || 1 === b.cmd_data.result) {
                    var f = b.cmd_data.data.B0 | b.cmd_data.data.C0 | b.cmd_data.data.D0 | b.cmd_data.data.F0 | b.cmd_data.data.cid;
                    this._iCmdId === f ? (this._iCmdId++, this.CmdCallback(c, a, b)) : (console.warn("result ", b), console.warn("this._iCmdId " + this._iCmdId + " != serverCid " + f))
                } else this.CmdCallback(c, a, b);
                else this.ResendHandler(c, a, b)
            };
            c.prototype.ResendHandler = function(a, b,
                c) {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(f) {
                        switch (f.label) {
                            case 0:
                                return b === ArkSDK.HttpConnect.HttpResult.Timeout ? [3, 2] : [4, new Promise(function(a) {
                                    return setTimeout(a, 3E3)
                                })];
                            case 1:
                                f.sent(), f.label = 2;
                            case 2:
                                return this.cmdRetryTimesDict[a] < this.Timer.length ? (console.log("cmdName " + a + " retry : ", this.cmdRetryTimesDict[a]), this.ReSendCmd(a, this.cmdTmpDataDict[a]), this.cmdRetryTimesDict[a]++) : (console.log("cmdName " + a + " retry dead"), this.CmdCallback(a, b, c)), [2]
                        }
                    })
                })
            };
            c.prototype.CmdCallback = function(a, b, c) {
                this.cmdCallbackDict && this.cmdCallbackDict[a] ? (this.cmdCallbackDict[a](b, c), this.ReleaseRetryCmdData(a)) : console.error("this.cmdCallbackDict[" + a + "] not found")
            };
            c.prototype.errorHandler = function(a, b, c) {
                console.warn("errorHandler , cmdName = " + a + ", status = " + b + ", result = " + c);
                this.cmdErrorHandlerDict && this.cmdErrorHandlerDict[a] ? (this.cmdErrorHandlerDict[a](b, c), this.ReleaseRetryCmdData(a)) : console.error("this.cmdErrorHandlerDict[" + a + "]  not found")
            };
            c.prototype.ReSendCmd = function(a, b) {
                console.log("[GameNetwork.ReSendCmd] %c" + a, "color:coral");
                var c = this.cmdRetryTimesDict[a];
                this._gameClient.send_cmd(this._systemName, a, b, this.AllCmdCallback.bind(this), this.Timer[c])
            };
            c.prototype.ReleaseRetryCmdData = function(a) {
                this.cmdRetryTimesDict[a] = void 0;
                this.cmdTmpDataDict[a] = void 0;
                this.cmdCallbackDict[a] = void 0;
                this.cmdErrorHandlerDict[a] = void 0
            };
            return c
        }();
        d.GameNetwork = h
    })(h.Network || (h.Network = {}))
})(SS || (SS = {}));
(function(h) {
    (function(d) {
        var r = function() {
            function c(a, b) {
                this.cmdDict = {};
                this.OnChangeJpValCmdSignal = new h.Network.Common.Signal;
                this.OnWinJPValueSignal = new h.Network.Common.Signal;
                this.OnChangeInGameJpSingnal = new h.Network.Common.Signal;
                this.OnJPStartSignal = new h.Network.Common.Signal;
                this.OnJPFinishSignal = new h.Network.Common.Signal;
                this.pinClient = this.socketClient = null;
                this.systemName = "jp";
                this.retryTimer = new h.Network.Common.RetryTimer;
                this.socketClient = a;
                this.socketClient.systemDict[this.systemName] =
                    this;
                this.pinClient = b;
                this.cmdDict.candidate = this.OnRecvCandidateCmd.bind(this);
                this.cmdDict.deny = this.OnRecvDenyCmd.bind(this);
                this.cmdDict.game = this.OnRecvGameCmd.bind(this);
                this.cmdDict.winValue = this.OnRecvWinValueCmd.bind(this);
                this.cmdDict.change = this.OnRecvChangeCmd.bind(this);
                this.cmdDict.gameStart = this.OnRecvJPStart.bind(this);
                this.cmdDict.gameFinish = this.OnRecvJPFinish.bind(this);
                this.cmdDict.in_game_jp_update = this.OnRecvChangeInGameJpCmd.bind(this);
                this.cmdDict.treasureMap = this.OnRecvTreasureMapCmd.bind(this);
                this.cmdDict.oceanHeart = this.OnRecvOceanHeartCmd.bind(this)
            }
            c.prototype.Release = function() {
                this.socketClient = null;
                this.OnChangeJpValCmdSignal.removeAll();
                this.OnChangeJpValCmdSignal = null;
                this.OnWinJPValueSignal.removeAll();
                this.OnWinJPValueSignal = null;
                this.OnChangeInGameJpSingnal.removeAll();
                this.getOceanHeartCB = this.getTreasureMapCB = this.getInGameJpCmdCb = this.getJpCmdCb = this.cmdDict = this.OnChangeInGameJpSingnal = null
            };
            c.prototype.setNetClient = function(a, b) {
                this.socketClient = a;
                this.socketClient.systemDict[this.systemName] =
                    this;
                this.pinClient = b
            };
            c.prototype.SendGetJPHistory = function(a) {
                console.log("[JPSystem.SendGetJPHistory]");
                this.socketClient.SendCmd(this.systemName, "jplog", null, a)
            };
            c.prototype.SendGetJPValCmd = function(a) {
                console.log("[JPSystem.SendGetJPValCmd]");
                this.getJpCmdCb = a;
                this.socketClient.SendCmd(this.systemName, "jp", null, this.RecvGetJpValCmd.bind(this))
            };
            c.prototype.SendGetInGameJpValCmd = function(a) {
                console.log("[JPSystem.SendGetInGameJpValCmd]");
                this.getInGameJpCmdCb = a;
                this.socketClient.SendCmd(this.systemName,
                    "ingame_jp", null, this.RecvGetInGameJpValCmd.bind(this))
            };
            c.prototype.SendJPTimerResume = function() {
                console.log("[JPSystem.SendJPTimerResume]");
                this.socketClient.SendCmd(this.systemName, "gameSettle")
            };
            c.prototype.CheckJPRequest = function(a, b) {
                return this.isJPReadyRequest ? (this.isJPReadyRequest = !1, this.SendJPRequest("game" + a, b), !0) : !1
            };
            c.prototype.OnRecvCandidateCmd = function(a, b, c, d, h, k, m) {
                console.log("[SS.Network.OnRecvCandidateCmd]", a, b, c, d, h, k, m, (new Date).toUTCString());
                a == ArkSDK.SocketResult.OK &&
                    (this.strJpSerialID = b.JPSerialID, this.isJPReadyRequest = !0)
            };
            c.prototype.OnRecvDenyCmd = function(a, b, c, d, h, k, m) {
                console.log("[SS.Network.OnRecvDenyCmd]", a, b, c, d, h, k, m, (new Date).toUTCString());
                a == ArkSDK.SocketResult.OK && (a = b.DenyType, b.JPSerialID == this.strJpSerialID && (3 == a ? this.retryTimer.ResetTimes() : this.retryTimer.Stop()))
            };
            c.prototype.OnRecvGameCmd = function(a, b, c, g, h, k, m) {
                console.log("[SS.Network.OnRecvGameCmd]", a, b, c, g, h, k, m, (new Date).toUTCString());
                a == ArkSDK.SocketResult.OK && (a = b.machine, this.strJpSerialID ==
                    b.JPSerialID && a == d.LoginModel.LoginInfo.machine_id && this.retryTimer.Stop())
            };
            c.prototype.OnRecvJPStart = function(a, b, c, d, h, k, m) {
                console.log("[SS.Network.OnRecvJPStart]", a, b, c, d, h, k, m, (new Date).toUTCString());
                a == ArkSDK.SocketResult.OK && this.OnJPStartSignal.dispatch()
            };
            c.prototype.OnRecvJPFinish = function(a, b, c, d, h, k, m) {
                console.log("[SS.Network.OnRecvJPFinish]", a, b, c, d, h, k, m, (new Date).toUTCString());
                a == ArkSDK.SocketResult.OK && this.OnJPFinishSignal.dispatch()
            };
            c.prototype.OnRecvChangeCmd = function(a,
                b, c, d, h, k, m) {
                console.log("[SS.Network.JPSystem]", a, b, c, d, h, k, m);
                a == ArkSDK.SocketResult.OK && (console.log("OnRecvChangeCmd ori : ", b), a = this.CovertJPVal(b, "0", "1", "2", "3"), console.log("OnRecvChangeCmd jpVal after convert: ", a), a && this.OnChangeJpValCmdSignal.dispatch(a[0], a[1], a[2], a[3], b.exchange_rate))
            };
            c.prototype.OnRecvChangeInGameJpCmd = function(a, b, c, d, h, k, m) {
                console.warn("OnRecvChangeInGameJpCmd result = ", a);
                a == ArkSDK.SocketResult.OK && (console.log("OnRecvChangeInGameJpCmd data : ", b), this.OnChangeInGameJpSingnal.dispatch(b))
            };
            c.prototype.OnRecvWinValueCmd = function(a, b, c, g, h, k, m) {
                console.log("[SS.Network.OnRecvWinValueCmd]", a, b, c, g, h, k, m);
                if (a == ArkSDK.SocketResult.OK) {
                    a = b[0];
                    c = b[1];
                    g = b[2];
                    h = b[3];
                    k = b[4];
                    m = b[5];
                    var f = b[6];
                    b = b[7];
                    a == d.LoginModel.LoginInfo.machine_id && c == this.pinClient.ArkID ? this.strJpSerialID == f && (this.strJpSerialID = null, this.retryTimer.Stop(), this.OnWinJPValueSignal.dispatch(g, h, b, k, m)) : (console.error("server ArkId : ", c, "client ArkId : ", this.pinClient.ArkID), console.error("server machine_id : ", a, "client MachineID : ",
                        d.LoginModel.LoginInfo.machine_id))
                }
            };
            c.prototype.CovertJPVal = function(a, b, c, d, h) {
                if (a && a.hasOwnProperty("jp_rate")) {
                    var f = a.jp_rate,
                        g, q, r, B;
                    a[b] && (g = this.accMul(a[b], f));
                    a[c] && (q = this.accMul(a[c], f));
                    a[d] && (r = this.accMul(a[d], f));
                    a[h] && (B = this.accMul(a[h], f));
                    return [g, q, r, B]
                }
                console.error("Recv Jp Value Error Data : ", a)
            };
            c.prototype.accMul = function(a, b) {
                var c = 0,
                    d = 0;
                a = a.toString();
                b = b.toString();
                try {
                    c = a.split(".")[1].length
                } catch (q) {}
                try {
                    d = b.split(".")[1].length
                } catch (q) {}
                return Number(a.replace(".",
                    "")) * Number(b.replace(".", "")) / Math.pow(10, c + d)
            };
            c.prototype.SendJPRequest = function(a, b) {
                var c = this;
                void 0 === b && (b = 0);
                console.log("[JPSystem.SendJPRequest]", a, b);
                this.retryTimer.Start(function() {
                    var f = {};
                    f.token = c.pinClient.ArkToken;
                    f.game = a;
                    f.JPSerialID = c.strJpSerialID;
                    f.bet = b;
                    c.socketClient.SendCmd(c.systemName, "req", f);
                    console.log("SendJPRequest = ", f)
                }, function() {
                    console.log("SendJPRequest Timeout!")
                }, [0, 2, 4, 8, 20])
            };
            c.prototype.RecvGetJpValCmd = function(a, b, c, d, h, k, m) {
                console.warn("RecvGetJpValCmd = ",
                    a);
                a == ArkSDK.SocketResult.OK && (console.log("RecvGetJpValCmd ori : ", b), a = this.CovertJPVal(b.data, "jp0", "jp1", "jp2", "jp3"), console.log("RecvGetJpValCmd jpVal after convert: ", a), a && (this.getJpCmdCb(a[0], a[1], a[2], a[3], b.data.exchange_rate), this.getJpCmdCb = null))
            };
            c.prototype.RecvGetInGameJpValCmd = function(a, b, c, d, h, k, m) {
                console.warn("RecvGetInGameJpValCmd = ", a);
                a == ArkSDK.SocketResult.OK && (console.log("RecvGetInGameJpValCmd ori : ", b), this.getInGameJpCmdCb(b), this.getInGameJpCmdCb = null)
            };
            c.prototype.OnRecvTreasureMapCmd =
                function(a, b, c, d, h, k, m) {
                    console.warn("OnRecvTreasureMapCmd result = ", a);
                    a == ArkSDK.SocketResult.OK && (console.log("OnRecvTreasureMapCmd data : ", b), b && this.getTreasureMapCB && this.getTreasureMapCB(b))
                };
            c.prototype.OnRecvOceanHeartCmd = function(a, b, c, d, h, k, m) {
                console.warn("OnRecvOceanHeartCmd result = ", a);
                a == ArkSDK.SocketResult.OK && (console.log("OnRecvOceanHeartCmd data : ", b), b && this.getOceanHeartCB && this.getOceanHeartCB(b))
            };
            return c
        }();
        d.JPSystem = r
    })(h.Network || (h.Network = {}))
})(SS || (SS = {}));
(function(h) {
    (function(d) {
        var r = function() {
            function c(a) {
                this.OnMarqueeSignal = new h.Network.Common.Signal;
                this.OnUpdateSignal = new h.Network.Common.Signal;
                this.cmdDict = {};
                this.m_isPosKick = !1;
                this.m_ServerToIdleWaitMin = -1;
                this.loginLogoMode = "";
                this.m_socketClient = a;
                this.m_socketClient.systemDict.lobby = this;
                this.cmdDict.shutdown = this.OnRecvShutdownCmd.bind(this);
                this.cmdDict.pos_kick = this.OnRecvPosKickCmd.bind(this);
                this.cmdDict.UpdateInfo = this.OnRecvUpdataInfoCmd.bind(this)
            }
            c.prototype.Release = function() {
                this.m_socketClient =
                    null
            };
            c.prototype.setLoginLogoMode = function(a) {
                this.loginLogoMode = a
            };
            c.prototype.setNetClient = function(a) {
                this.m_socketClient = a;
                this.m_socketClient.systemDict.lobby = this
            };
            c.prototype.PingWebSocket = function(a) {
                this.m_socketClient.SendCmd("lobby", "ping", null, a)
            };
            c.prototype.OnRecvShutdownCmd = function(a, b, c, d, h, k, m) {
                console.log("[SS.Network.OnRecvShutdownCmd]", a, b, c, d, h, k, m, (new Date).toUTCString());
                a == ArkSDK.SocketResult.OK && b.hasOwnProperty("min") && (this.m_ServerToIdleWaitMin = parseInt(b.min))
            };
            c.prototype.OnRecvPosKickCmd =
                function(a, b, c, d, h, k, m) {
                    console.log("[SS.Network.OnRecvPosKickCmd]", a, b, c, d, h, k, m, (new Date).toUTCString());
                    a == ArkSDK.SocketResult.OK && (this.m_isPosKick = !0)
                };
            c.prototype.OnRecvUpdataInfoCmd = function(a, b, c, d, h, k, m) {
                console.log("[SS.Network.OnRecvUpdataInfoCmd]", a, b, c, d, h, k, m, (new Date).toUTCString());
                if (a == ArkSDK.SocketResult.OK) {
                    if (b.hasOwnProperty("msg_info") && b.msg_info.hasOwnProperty("platform"))
                        for (a = 0, c = b.msg_info.platform; a < c.length; a++) "PHONE" === c[a] && this.OnMarqueeSignal.dispatch(b.msg_info);
                    b.hasOwnProperty("game_version") && b.game_version.hasOwnProperty(this.loginLogoMode) && this.OnUpdateSignal.dispatch(b.game_version[this.loginLogoMode])
                }
            };
            c.prototype.SendSessionLengthLogin = function(a) {
                var b = {};
                b.gameId = a;
                this.m_socketClient.SendCmd("lobby", "SessionLengthLogin", b, null)
            };
            c.prototype.SendSessionLengthLogout = function(a, b) {
                void 0 === b && (b = null);
                var c = {};
                c.gameId = a;
                this.m_socketClient.SendCmd("lobby", "SessionLengthLogout", c, b)
            };
            return c
        }();
        d.LobbySystem = r
    })(h.Network || (h.Network = {}))
})(SS ||
    (SS = {}));
(function(h) {
    (function(d) {
        (function(d) {
            var c = function() {
                function a(a, c, d, h, k) {
                    void 0 === k && (k = 0);
                    this.active = !0;
                    this.params = null;
                    this._listener = c;
                    this._isOnce = d;
                    this.context = h;
                    this._signal = a;
                    this.priority = k || 0
                }
                a.prototype.execute = function(a) {
                    if (this.active && this._listener) {
                        a = this.params ? this.params.concat(a) : a;
                        var b = this._listener.apply(this.context, a);
                        this._isOnce && this.detach()
                    }
                    return b
                };
                a.prototype.detach = function() {
                    return this.isBound() ? this._signal.remove(this._listener, this.context) : null
                };
                a.prototype.isBound =
                    function() {
                        return !!this._signal && !!this._listener
                    };
                a.prototype.isOnce = function() {
                    return this._isOnce
                };
                a.prototype.getListener = function() {
                    return this._listener
                };
                a.prototype.getSignal = function() {
                    return this._signal
                };
                a.prototype._destroy = function() {
                    delete this._signal;
                    delete this._listener;
                    delete this.context
                };
                a.prototype.toString = function() {
                    return "[SignalBinding isOnce:" + this._isOnce + ", isBound:" + this.isBound() + ", active:" + this.active + "]"
                };
                return a
            }();
            d.SignalBinding = c
        })(d.Common || (d.Common = {}))
    })(h.Network ||
        (h.Network = {}))
})(SS || (SS = {}));
(function(h) {
    (function(d) {
        (function(d) {
            var c = function() {
                function a() {
                    this._bindings = [];
                    this._prevParams = null;
                    this.memorize = !1;
                    this.active = this._shouldPropagate = !0
                }
                a.prototype.validateListener = function(a, c) {
                    if ("function" !== typeof a) throw Error("listener is a required param of {fn}() and should be a Function.".replace("{fn}", c));
                };
                a.prototype._registerListener = function(a, c, g, h) {
                    var b = this._indexOfListener(a, g);
                    if (-1 !== b) {
                        if (a = this._bindings[b], a.isOnce() !== c) throw Error("You cannot add" + (c ? "" : "Once") +
                            "() then add" + (c ? "Once" : "") + "() the same listener without removing the relationship first.");
                    } else a = new d.SignalBinding(this, a, c, g, h), this._addBinding(a);
                    this.memorize && this._prevParams && a.execute(this._prevParams);
                    return a
                };
                a.prototype._addBinding = function(a) {
                    var b = this._bindings.length;
                    do --b; while (this._bindings[b] && a.priority <= this._bindings[b].priority);
                    this._bindings.splice(b + 1, 0, a)
                };
                a.prototype._indexOfListener = function(a, c) {
                    for (var b = this._bindings.length, f; b--;)
                        if (f = this._bindings[b], f.getListener() ===
                            a && f.context === c) return b;
                    return -1
                };
                a.prototype.has = function(a, c) {
                    void 0 === c && (c = null);
                    return -1 !== this._indexOfListener(a, c)
                };
                a.prototype.add = function(a, c, d) {
                    void 0 === c && (c = null);
                    void 0 === d && (d = 0);
                    this.validateListener(a, "add");
                    return this._registerListener(a, !1, c, d)
                };
                a.prototype.addOnce = function(a, c, d) {
                    void 0 === c && (c = null);
                    void 0 === d && (d = 0);
                    this.validateListener(a, "addOnce");
                    return this._registerListener(a, !0, c, d)
                };
                a.prototype.remove = function(a, c) {
                    void 0 === c && (c = null);
                    this.validateListener(a, "remove");
                    c = this._indexOfListener(a, c); - 1 !== c && (this._bindings[c]._destroy(), this._bindings.splice(c, 1));
                    return a
                };
                a.prototype.removeAll = function() {
                    for (var a = this._bindings.length; a--;) this._bindings[a]._destroy();
                    this._bindings.length = 0
                };
                a.prototype.getNumListeners = function() {
                    return this._bindings.length
                };
                a.prototype.halt = function() {
                    this._shouldPropagate = !1
                };
                a.prototype.dispatch = function() {
                    for (var a = [], c = 0; c < arguments.length; c++) a[c] = arguments[c];
                    if (this.active && (c = this._bindings.length, this.memorize && (this._prevParams =
                            a), c)) {
                        var d = this._bindings.slice(0);
                        this._shouldPropagate = !0;
                        do c--; while (d[c] && this._shouldPropagate && !1 !== d[c].execute(a))
                    }
                };
                a.prototype.forget = function() {
                    this._prevParams = null
                };
                a.prototype.dispose = function() {
                    this.removeAll();
                    delete this._bindings;
                    delete this._prevParams
                };
                a.prototype.toString = function() {
                    return "[Signal active:" + this.active + " numListeners:" + this.getNumListeners() + "]"
                };
                a.VERSION = "1.0.0";
                return a
            }();
            d.Signal = c
        })(d.Common || (d.Common = {}))
    })(h.Network || (h.Network = {}))
})(SS || (SS = {}));
(function(h) {
    (function(d) {
        (function(d) {
            var c = function() {
                function a() {
                    this.OnEntryAction = new d.Signal;
                    this.OnChangedAction = new d.Signal
                }
                a.prototype.Release = function() {
                    this.OnEntryAction.removeAll();
                    this.OnEntryAction = null;
                    this.OnChangedAction.removeAll();
                    this.OnChangedAction = null
                };
                a.prototype.Transition = function(a) {
                    this.Last = this.Current;
                    this.Current = a;
                    this.OnEntryAction.dispatch(this.Last, this.Current);
                    this.Current != this.Last && this.OnChangedAction.dispatch(this.Last, this.Current)
                };
                return a
            }();
            d.StateMachine =
                c
        })(d.Common || (d.Common = {}))
    })(h.Network || (h.Network = {}))
})(SS || (SS = {}));
(function(h) {
    (function(d) {
        var h = function() {
            function c(a) {
                this.ENCRYPT_KEY = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC0l1BzizlBXTIs3X235yn5EfcNhbt3cgBZ + /peA2WBGh8HUKC2cWGOS3xtRtoPrco/NxNUJD1bhjIeWe0PCRQNYRW76DHhWylspBmgv45wFkTaTGLLZoXeK7BvajEXIrvs03RgGCboXI2CNB3aaOJXqpSPBJ6nbfF9QJYaYLiKkQIDAQAB";
                this.m_socketClient = this.m_pinResult = this.m_state = null;
                this.m_logoutSkillGameResult = 0;
                this.m_callback = {
                    login: {
                        success: null,
                        fail: null
                    },
                    logout: {
                        success: null,
                        fail: null
                    },
                    onSokcetClose: null
                };
                this.getContactInfoFailCallback =
                    this.getContactInfoSuccessCallback = null;
                this.m_kioskClient = new ArkSDK.ArkClient(a);
                this.m_pinClient = new ArkSDK.ArkClient(a);
                this.m_tryAuthFailTimes = 0;
                window.addEventListener("beforeunload", this.CloseSocket.bind(this));
                this.m_state = new d.Common.StateMachine;
                this.m_state.OnEntryAction.add(this.OnStateEntry, this)
            }
            c.prototype.Clear = function() {
                window.removeEventListener("beforeunload", this.CloseSocket.bind(this))
            };
            c.prototype.CloseSocket = function() {
                try {
                    this.m_socketClient && this.m_socketClient.isConnect &&
                        this.m_socketClient.Close()
                } catch (a) {
                    console.warn(a)
                }
            };
            c.prototype.DoLogin = function(a, b, f, d, h, k, m, r) {
                void 0 === k && (k = null);
                void 0 === m && (m = "");
                void 0 === r && (r = "");
                c.LoginInfo.user_id = a;
                c.LoginInfo.login_version = m;
                c.LoginInfo.connect_network = r;
                k && (m = navigator.deviceMemory, c.LoginInfo.BrowserInfo = k.browser.name, c.LoginInfo.BrowserVersion = k.browser.version, c.LoginInfo.DeviceInfo = k.os.name, c.LoginInfo.DeviceVersion = k.os.version, c.LoginInfo.Machine = k.device.device, c.LoginInfo.OS = k.os.name, c.LoginInfo.OSVersion =
                    k.os.version, c.LoginInfo.CPU = k.cpu.architecture, c.LoginInfo.Mem = 1024 * +m, c.LoginInfo.Height = screen.height, c.LoginInfo.Width = screen.width, c.LoginInfo.DeviceType = void 0 == k.device.type || void 0 == k.device.vendor || void 0 == k.device.model ? k.os.name : k.device.type + "_" + k.device.vendor + "_" + k.device.model);
                k = new JSEncrypt;
                k.setKey(this.ENCRYPT_KEY);
                c.LoginInfo.user_pw_encrypt = k.encrypt(b);
                this.m_callback.login.success = f;
                this.m_callback.login.fail = d;
                this.m_callback.onSokcetClose = h;
                a = a.substr(0, 2);
                "M-" == a || "m-" ==
                    a ? this.m_state.Transition(c.enumState.VerifyMobileByArkID) : this.m_state.Transition(c.enumState.VerifyMobile)
            };
            c.prototype.sndCountBeforeLoadingTime = function() {
                var a = c.LoginInfo.kiosk_id;
                a = {
                    begin_time: c.m_fBeginTime,
                    machine: "H5",
                    kiosk_id: a,
                    machine_id: c.LoginInfo.machine_id,
                    state: 1,
                    count_time: Date.now() - c.m_fBeginTime,
                    kiosk_name: a.toString()
                };
                this.m_kioskClient.send_drt_cmd("lobby", "countBeforeLoadingTime", a, this.rcvCountBeforeLoadingTimeAck.bind(this))
            };
            c.prototype.rcvCountBeforeLoadingTimeAck = function(a) {
                console.log("LoginModel.rcvCountBeforeLoadingTimeAck, result = " +
                    a)
            };
            c.prototype.DoGuestLogin = function(a, b, f, d, h, k, m, r, A) {
                void 0 === m && (m = null);
                void 0 === r && (r = "");
                void 0 === A && (A = "");
                (new JSEncrypt).setKey(this.ENCRYPT_KEY);
                this.m_callback.login.success = d;
                this.m_callback.login.fail = h;
                this.m_callback.onSokcetClose = k;
                c.LoginInfo.device_uuid = a;
                c.LoginInfo.code = b;
                c.LoginInfo.logo = f;
                c.LoginInfo.user_id = "";
                c.LoginInfo.user_pw_encrypt = "";
                c.LoginInfo.login_version = r;
                c.LoginInfo.connect_network = A;
                m && (c.LoginInfo.BrowserInfo = m.browser.name, c.LoginInfo.BrowserVersion = m.browser.version,
                    c.LoginInfo.DeviceInfo = m.os.name, c.LoginInfo.DeviceVersion = m.os.version, c.LoginInfo.DeviceType = m.device.type + "_" + m.device.vendor + "_" + m.device.model);
                this.m_state.Transition(c.enumState.VerifyGuest)
            };
            c.prototype.DoLogout = function(a, b, f) {
                void 0 === f && (f = 0);
                this.m_callback.logout.success = a;
                this.m_callback.logout.fail = b;
                this.m_logoutSkillGameResult = f;
                this.m_state.Transition(c.enumState.PinLogout)
            };
            c.prototype.OnVerifyMobile = function(a, b) {
                console.log("[LoginModel] OnVerifyMobile data: ", b);
                a == ArkSDK.HttpResult.OK &&
                    0 == b.result ? (c.LoginInfo.kiosk_id = b.data.kiosk_id, c.LoginInfo.device_id = b.data.device_id, c.LoginInfo.pin_id = b.data.pin_id, c.LoginInfo.m_isDefaultPassword = b.data.default_password, c.LoginInfo.machine_id = b.data.machine_id, this.m_state.Transition(c.enumState.KioskLogin)) : (console.error("[LoginModel] %c VerifyMobile failed\n", "font-size:18px;font-weight:bold;color:green;", b), null != this.m_callback.login.fail && (this.m_callback.login.fail(a, b, "VerifyMobile"), this.m_callback.login.fail = null))
            };
            c.prototype.OnVerifyGuest =
                function(a, b) {
                    console.log("[LoginModel] OnVerifyGuest data: ", b);
                    console.log("[LoginModel] OnVerifyGuest state: ", a);
                    a == ArkSDK.HttpResult.OK && 0 == b.err_code ? (c.LoginInfo.pin_id = b.data.pin_id, c.LoginInfo.kiosk_id = b.data.kiosk_id, c.LoginInfo.machine_id = b.data.machine_id, c.LoginInfo.device_id = b.data.device_id, c.LoginInfo.device_uuid = b.data.device_uuid, c.LoginInfo.m_isDefaultPassword = !1, this.m_state.Transition(c.enumState.KioskLogin)) : (console.error("[LoginModel] %c VerifyGuest failed\n", "font-size:18px;font-weight:bold;color:green;",
                        b), null != this.m_callback.login.fail && (this.m_callback.login.fail(a, b, "VerifyGuest"), this.m_callback.login.fail = null))
                };
            c.prototype.OnDeviceLogin = function(a, b) {
                console.log("[LoginModel] OnDeviceLogin data: ", b);
                if (a == ArkSDK.HttpResult.OK) console.log("[LoginModel] %c DeviceLogin success", "font-size:18px;font-weight:bold;color:green;"), c.LoginInfo.kiosk_ark_id = b.ark_id, c.LoginInfo.kiosk_ark_token = b.ark_token, this.IsSupportLocalStorage() ? (localStorage.setItem("kiosk_ark_id", c.LoginInfo.kiosk_ark_id),
                    localStorage.setItem("kiosk_ark_token", c.LoginInfo.kiosk_ark_token)) : this.IsSupportCookie() && (document.cookie = "kiosk_ark_id=" + c.LoginInfo.kiosk_ark_id + ";", document.cookie = "kiosk_ark_token=" + c.LoginInfo.kiosk_ark_token + ";"), this.m_state.Transition(c.enumState.ConnectKioskSocket);
                else {
                    if (null != b) try {
                        b = this.m_kioskClient.decodeData(b.text)
                    } catch (f) {
                        b = b.text | b | f
                    }
                    console.error("[LoginModel] %c DeviceLogin fail. Status: " + a + "\n", "font-size:18px;font-weight:bold;color:green;", b);
                    a == ArkSDK.HttpResult.Condition &&
                        -5 == b.reason ? this.IsHaveLoginCache() ? this.m_state.Transition(c.enumState.CheckKioskTokenAndClear) : null != this.m_callback.login.fail && (this.m_callback.login.fail(a, b, "DeviceLogin"), this.m_callback.login.fail = null) : null != this.m_callback.login.fail && (this.m_callback.login.fail(a, b, "DeviceLogin"), this.m_callback.login.fail = null)
                }
            };
            c.prototype.RecvBindAck = function(a, b, c, d, h, k, m) {
                if (!this.m_socketClient || this.m_socketClient.isConnect) a == ArkSDK.SocketResult.OK && b && b.hasOwnProperty("result") && 0 == b.result ?
                    (console.log("result :" + a), console.log("data :", b), console.log("ret :" + c), console.log("sn : " + d), console.log("sys :" + h), console.log("cmd :" + k), console.log("process_time_ms :" + m), null != this.m_callback.login.success && (this.m_callback.login.success(this.m_kioskClient, this.m_pinClient, this.m_socketClient), this.m_callback.login.success = null)) : this.PinLoginFailBySocket(a, b)
            };
            c.prototype.PinLoginFailBySocket = function(a, b) {
                this.m_socketClient && this.m_socketClient.isConnect && this.m_socketClient.Close();
                null !=
                    this.m_callback.login.fail && (this.m_callback.login.fail(a, b, "BindSocket"), this.m_callback.login.fail = null)
            };
            c.prototype.RecvCheckRedisKioskToken = function(a, b, f, d) {
                console.log(" RecvCheckRedisKioskToken data :", b);
                a == ArkSDK.HttpResult.OK && 0 == b.kiosk_result ? (this.m_socketClient && this.m_socketClient.isConnect && this.m_socketClient.Close(), this.m_state.Transition(c.enumState.KioskLogin)) : this.PinLoginFail(ArkSDK.HttpResult.Condition, {
                    reason: -5
                })
            };
            c.prototype.RecvCheckRedisPinToken = function(a, b, f, d) {
                console.log("RecvCheckRedisPinToken data :",
                    b);
                a == ArkSDK.HttpResult.OK && 0 == b.pin_result ? (this.m_socketClient && this.m_socketClient.isConnect && this.m_socketClient.Close(), this.m_state.Transition(c.enumState.KioskLogin)) : this.PinLoginFail(ArkSDK.HttpResult.Condition, {
                    reason: -5
                })
            };
            c.prototype.SendUnPinSuccessByWebSocket = function() {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return [4, this.m_socketClient.SendCmd("lobby", "unpin")];
                            case 1:
                                return a.sent(), this.m_socketClient && this.m_socketClient.isConnect &&
                                    this.m_socketClient.Close(), null != this.m_callback.logout.success && (this.m_callback.logout.success(), this.m_callback.logout.success = null), [2]
                        }
                    })
                })
            };
            c.prototype.OnPinLogin = function(a, b) {
                console.log("[LoginModel] OnPinLogin data: ", b);
                if (!this.m_socketClient || this.m_socketClient.isConnect)
                    if (a == ArkSDK.HttpResult.OK) console.log("[LoginModel] %c PinLogin success", "font-size:18px;font-weight:bold;color:green;"), a = 0, void 0 != b.client_purchase_serial_id && (a = b.client_purchase_serial_id), c.LoginInfo.purchase_serial_id =
                        a + 1, c.LoginInfo.pin_ark_id = b.ark_id, c.LoginInfo.pin_ark_token = b.ark_token, this.IsSupportLocalStorage() ? (localStorage.setItem("pin_ark_id", c.LoginInfo.pin_ark_id), localStorage.setItem("pin_ark_token", c.LoginInfo.pin_ark_token)) : this.IsSupportCookie() && (document.cookie = "pin_ark_id=" + c.LoginInfo.pin_ark_id + ";", document.cookie = "pin_ark_token=" + c.LoginInfo.pin_ark_token + ";"), this.m_state.Transition(c.enumState.BindSocket);
                    else {
                        var f = null;
                        if (null != b) try {
                            f = this.m_pinClient.decodeData(b.text)
                        } catch (g) {
                            f =
                                b.text | b | g
                        }
                        console.error("[LoginModel] %c PinLogin fail. Status: " + a + "\n", "font-size:18px;font-weight:bold;color:green;", f);
                        a == ArkSDK.HttpResult.Condition && -5 == f.reason ? this.IsHaveLoginCache() ? this.m_state.Transition(c.enumState.CheckPinTokenAndClear) : this.PinLoginFail(a, f) : this.PinLoginFail(a, f)
                    }
            };
            c.prototype.IsHaveLoginCache = function() {
                var a = !1;
                this.IsSupportLocalStorage() ? a = localStorage.getItem("kiosk_ark_id") && localStorage.getItem("kiosk_ark_token") || localStorage.getItem("pin_ark_id") && localStorage.getItem("pin_ark_token") ?
                    !0 : !1 : this.IsSupportCookie() && (a = this.GetCookie("kiosk_ark_id") && this.GetCookie("kiosk_ark_token") || this.GetCookie("pin_ark_id") && this.GetCookie("pin_ark_token") ? !0 : !1);
                return a
            };
            c.prototype.GetCookie = function(a) {
                var b = a.length + 1;
                return document.cookie.split(";").map(function(a) {
                    return a.trim()
                }).filter(function(c) {
                    return c.substring(0, b) === a + "="
                }).map(function(a) {
                    return decodeURIComponent(a.substring(b))
                })[0] || null
            };
            c.prototype.IsSupportCookie = function() {
                try {
                    var a = !1;
                    if (window.navigator.cookieEnabled) return !0;
                    document.cookie = "testcookie=yes;"; - 1 < document.cookie.indexOf("testcookie=yes") && (a = !0);
                    document.cookie = "";
                    return a
                } catch (b) {
                    return !1
                }
            };
            c.prototype.IsSupportLocalStorage = function() {
                var a = !0;
                if (window.localStorage) try {
                    window.localStorage.setItem("test", "1"), window.localStorage.removeItem("test")
                } catch (b) {
                    a = !1
                } else a = !1;
                return a
            };
            c.prototype.PinLoginFail = function(a, b) {
                null != this.m_callback.login.fail && (this.m_callback.login.fail(a, b, "PinLogin"), this.m_callback.login.fail = null);
                this.m_socketClient && this.m_socketClient.isConnect &&
                    this.m_socketClient.Close()
            };
            c.prototype.OnPinLogout = function(a, b) {
                console.log("[LoginModel] OnPinLogout data: ", b);
                if (a == ArkSDK.HttpResult.OK) console.log("[LoginModel] %c PinLogout success", "font-size:18px;font-weight:bold;color:orange;"), this.SendUnPinSuccessByWebSocket();
                else {
                    var c = null;
                    if (null != b) try {
                        c = this.m_pinClient.decodeData(b.text)
                    } catch (g) {
                        c = b.text | b | g
                    }
                    console.error("[LoginModel] PinLogout fail. data: ", c);
                    this.m_socketClient && this.m_socketClient.isConnect && this.m_socketClient.Close();
                    null != this.m_callback.logout.fail && (this.m_callback.logout.fail(a, c), this.m_callback.logout.fail = null)
                }
            };
            c.prototype.OnStateEntry = function(a, b) {
                console.log("[LoginModel] Current State: %c" + c.enumState[b], "color:red");
                switch (b) {
                    case c.enumState.VerifyMobile:
                        a = {
                            user_id: c.LoginInfo.user_id,
                            user_pw: c.LoginInfo.user_pw_encrypt
                        };
                        this.m_kioskClient.send_drt_cmd("lobby", "verify_mobile", a, this.OnVerifyMobile.bind(this));
                        break;
                    case c.enumState.VerifyGuest:
                        a = {
                            device_uuid: c.LoginInfo.device_uuid,
                            code: c.LoginInfo.code,
                            logo: c.LoginInfo.logo
                        };
                        this.m_kioskClient.send_drt_cmd("lobby", "verify_guest", a, this.OnVerifyGuest.bind(this));
                        break;
                    case c.enumState.VerifyMobileByArkID:
                        a = c.LoginInfo.user_id.split("-").join("").substr(1);
                        console.log("confuseArkID :" + a);
                        a = {
                            ark_id: a,
                            user_pw: c.LoginInfo.user_pw_encrypt
                        };
                        this.m_kioskClient.send_drt_cmd("lobby", "verify_mobile_ByArkID", a, this.OnVerifyMobile.bind(this));
                        break;
                    case c.enumState.KioskLogin:
                        a = void 0;
                        try {
                            a = {
                                fromType: "mobile_kiosk",
                                kiosk_id: c.LoginInfo.kiosk_id,
                                device_id: c.LoginInfo.device_id,
                                mode: gd_LogoMode
                            }
                        } catch (m) {
                            this.m_callback.login.fail("Failed to obtain gd_LogoMode", "Failed to obtain gd_LogoMode", "DeviceLogin");
                            break
                        }
                        this.m_kioskClient.device_login("android", c.LoginInfo.device_id, this.OnDeviceLogin.bind(this), void 0, a);
                        break;
                    case c.enumState.ConnectKioskSocket:
                        var d = this;
                        d.m_socketClient = new ArkSDK.ArkSocketClient(d.m_kioskClient, 1024, 5, 10, !1);
                        d.m_socketClient.m_auth_exdata = {
                            kiosk_id: c.LoginInfo.kiosk_id,
                            device_id: c.LoginInfo.device_id,
                            machine_id: c.LoginInfo.machine_id,
                            is_mobile: !0
                        };
                        d.m_socketClient.GetConnectInfo(function(a, b, f, g, h, k, q) {
                            console.log("[LoginModel] OnGetConnectInfo");
                            d.m_socketClient.ConnectSocket(h, k, q, function(a) {
                                console.log("[LoginModel] OnSocketConnected");
                                d.m_state.Transition(c.enumState.PinLogin)
                            }, function(a, b) {
                                console.log("[socket msg]", b)
                            }, function(a) {
                                console.log("[socket onClose!]");
                                if (a.authFailData && 3 > d.m_tryAuthFailTimes) console.warn("[socket auth failed !]", a.authFailData), a.authFailData = null, d.m_tryAuthFailTimes++, d.m_state.Transition(c.enumState.KioskLogin);
                                else d.m_callback.onSokcetClose()
                            }, function(a, b) {
                                console.error(a, "Socket Connect Errorr!", b);
                                d.m_callback.login.fail("Socket Connect Error", b, "ConnectWebSocket");
                                d.m_callback.login.fail = null
                            })
                        });
                        break;
                    case c.enumState.PinLogin:
                        b = c.LoginInfo.kiosk_id;
                        var g = c.LoginInfo.pin_id;
                        var h = c.LoginInfo.device_id;
                        var k = b + g;
                        this.m_pinClient.fromType = "pin";
                        this.m_pinClient.fromID = k;
                        this.m_pinClient.fromToken = g;
                        a = void 0;
                        try {
                            a = {
                                fromType: "mobile",
                                kiosk_id: b,
                                device_id: h,
                                OpenID: k,
                                mode: gd_LogoMode
                            }
                        } catch (m) {
                            this.m_callback.login.fail("Failed to obtain gd_LogoMode",
                                "Failed to obtain gd_LogoMode", "PinLogin");
                            break
                        }
                        this.m_pinClient.custom_login("pin", k, g, this.OnPinLogin.bind(this), a, a);
                        break;
                    case c.enumState.BindSocket:
                        a = {
                            id: c.LoginInfo.pin_ark_id,
                            browserInfo: c.LoginInfo.BrowserInfo,
                            browserVersion: c.LoginInfo.BrowserVersion,
                            deviceInfo: c.LoginInfo.DeviceInfo,
                            deviceVersion: c.LoginInfo.DeviceVersion,
                            publishVer: c.LoginInfo.login_version,
                            network: c.LoginInfo.connect_network,
                            deviceType: c.LoginInfo.DeviceType,
                            Machine: c.LoginInfo.Machine,
                            OS: c.LoginInfo.OS,
                            OSVersion: c.LoginInfo.OSVersion,
                            CPU: c.LoginInfo.CPU,
                            Mem: c.LoginInfo.Mem,
                            Height: c.LoginInfo.Height,
                            Width: c.LoginInfo.Width
                        };
                        console.log("publishVer= " + c.LoginInfo.login_version + ", network= " + c.LoginInfo.connect_network + ", deviceType=" + c.LoginInfo.DeviceType + ", [LoginModel] BindSocket cmd_data=" + a);
                        this.m_socketClient.SendCmd("lobby", "pin", a, this.RecvBindAck.bind(this));
                        this.sndCountBeforeLoadingTime();
                        break;
                    case c.enumState.CheckKioskTokenAndClear:
                        a = b = g = h = null;
                        this.IsSupportLocalStorage() ? (b = localStorage.getItem("kiosk_ark_id"),
                            a = localStorage.getItem("kiosk_ark_token")) : this.IsSupportCookie() && (b = localStorage.getItem("kiosk_ark_id"), a = localStorage.getItem("kiosk_ark_token"));
                        a = {
                            kiosk_ark_id: b,
                            kiosk_ark_token: a
                        };
                        this.m_kioskClient.send_drt_cmd("lobby", "checkToken", a, this.RecvCheckRedisKioskToken.bind(this));
                        break;
                    case c.enumState.CheckPinTokenAndClear:
                        a = b = g = h = null;
                        this.IsSupportLocalStorage() ? (h = localStorage.getItem("pin_ark_id"), g = localStorage.getItem("pin_ark_token")) : this.IsSupportCookie() && (h = this.GetCookie("pin_ark_id"),
                            g = this.GetCookie("pin_ark_token"));
                        a = {
                            pin_ark_id: h,
                            pin_ark_token: g
                        };
                        this.m_kioskClient.send_drt_cmd("lobby", "checkToken", a, this.RecvCheckRedisPinToken.bind(this));
                        break;
                    case c.enumState.PinLogout:
                        null != this.m_pinClient && (a = {
                            result: this.m_logoutSkillGameResult
                        }, this.m_pinClient.send_cmd("lobby", "PinLogout", a, this.OnPinLogout.bind(this)))
                }
            };
            c.prototype.getContactInfoNotLogin = function(a, b, d, g) {
                this.getContactInfoSuccessCallback = d;
                this.getContactInfoFailCallback = g;
                c.LoginInfo.logo = b;
                this.m_kioskClient.send_drt_cmd("lobby",
                    "getContactInfo", {
                        code: a,
                        logo: b
                    }, this.onRecieveContactInfoNotLogin.bind(this))
            };
            c.prototype.onRecieveContactInfoNotLogin = function(a, b) {
                console.log("[LoginModel] onRecieveContactInfoNotLogin state: ", a);
                console.log("[LoginModel] onRecieveContactInfoNotLogin data: ", b);
                a == ArkSDK.HttpResult.OK && 0 == b.err_code ? null != this.getContactInfoSuccessCallback && (this.getContactInfoSuccessCallback(a, b, "getContactInfoNotLogin"), this.getContactInfoSuccessCallback = null) : (console.error("[LoginModel] %c getContactInfoNotLogin failed\n",
                    "font-size:18px;font-weight:bold;color:green;", b), null != this.getContactInfoFailCallback && (this.getContactInfoFailCallback(a, b, "getContactInfoNotLogin"), this.getContactInfoFailCallback = null))
            };
            c.prototype.sendDirectClickLog = function(a, b, c, d, h, k) {
                void 0 === k && (k = null);
                var f = new Date,
                    g = f.getTime(),
                    q = f.getTime() - 6E4 * f.getTimezoneOffset();
                f = [];
                f[0] = {
                    click_id: a,
                    btn_click_id: b,
                    device_id: d,
                    logo: h,
                    click_name: c,
                    btn_click_times: 1,
                    device_type: 1,
                    client_time_utc: Math.floor(g / 1E3),
                    client_time_local: Math.floor(q /
                        1E3),
                    browser_info: k.browser.name,
                    browser_version: k.browser.version,
                    device_info: k.os.name,
                    device_version: k.os.version
                };
                a = {};
                a.btn_click_list = f;
                console.warn("sendDirectClickLog");
                console.warn(a);
                this.m_kioskClient.send_drt_cmd("lobby", "sendRegDirectClickLog", a, null)
            };
            c.m_fBeginTime = Date.now();
            c.LoginInfo = {
                user_id: null,
                login_version: null,
                user_pw_encrypt: null,
                device_id: null,
                kiosk_id: null,
                pin_id: null,
                machine_id: null,
                purchase_serial_id: 0,
                shutter_skill_fail_serial_id: 0,
                pin_ark_id: null,
                pin_ark_token: null,
                kiosk_ark_id: null,
                kiosk_ark_token: null,
                m_isDefaultPassword: !1,
                device_uuid: null,
                code: null,
                logo: null,
                BrowserInfo: null,
                BrowserVersion: null,
                DeviceInfo: null,
                DeviceVersion: null,
                DeviceType: null,
                connect_network: null,
                Machine: null,
                OS: null,
                OSVersion: null,
                CPU: null,
                Mem: 0,
                Height: 0,
                Width: 0
            };
            return c
        }();
        d.LoginModel = h
    })(h.Network || (h.Network = {}))
})(SS || (SS = {}));
(function(h) {
    h = h.Network || (h.Network = {});
    h = h.LoginModel || (h.LoginModel = {});
    h = h.enumState || (h.enumState = {});
    h[h.None = 0] = "None";
    h[h.VerifyMobile = 1] = "VerifyMobile";
    h[h.VerifyMobileByArkID = 2] = "VerifyMobileByArkID";
    h[h.KioskLogin = 3] = "KioskLogin";
    h[h.ConnectKioskSocket = 4] = "ConnectKioskSocket";
    h[h.PinLogin = 5] = "PinLogin";
    h[h.BindSocket = 6] = "BindSocket";
    h[h.CheckKioskTokenAndClear = 7] = "CheckKioskTokenAndClear";
    h[h.CheckPinTokenAndClear = 8] = "CheckPinTokenAndClear";
    h[h.PinLogout = 9] = "PinLogout";
    h[h.VerifyGuest =
        10] = "VerifyGuest"
})(SS || (SS = {}));
(function(h) {
    (function(d) {
        var r = function() {
            function c(a, b) {
                this.ENCRYPT_KEY = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC0l1BzizlBXTIs3X235yn5EfcNhbt3cgBZ + /peA2WBGh8HUKC2cWGOS3xtRtoPrco/NxNUJD1bhjIeWe0PCRQNYRW76DHhWylspBmgv45wFkTaTGLLZoXeK7BvajEXIrvs03RgGCboXI2CNB3aaOJXqpSPBJ6nbfF9QJYaYLiKkQIDAQAB";
                this.cmdTmpDataDict = {};
                this.cmdRetryTimesDict = {};
                this.cmdCallbackDict = {};
                this.cmdRecvDict = {};
                this.Timer = [2E3, 4E3, 8E3, 16E3];
                this.systemName = "lobby";
                this.m_arrJsonClickLog = [];
                this.m_bHaveClickLog = !1;
                this.getCompsEventInfoFailedCallback =
                    this.getCompsEventInfoSucceedCallback = this.getCompsFailedCallback = this.getCompsSucceedCallback = this.getContactInfoFailCallback = this.getContactInfoSuccessCallback = null;
                this.m_kioskClient = a;
                this.m_pinClient = b
            }
            Object.defineProperty(c.prototype, "GetPinClient", {
                get: function() {
                    return this.m_pinClient
                },
                enumerable: !0,
                configurable: !0
            });
            Object.defineProperty(c.prototype, "GetKioskClient", {
                get: function() {
                    return this.m_kioskClient
                },
                enumerable: !0,
                configurable: !0
            });
            c.prototype.setNetClient = function(a, b) {
                this.m_kioskClient =
                    a;
                this.m_pinClient = b
            };
            c.prototype.Release = function() {
                this.Timer = this.cmdCallbackDict = this.cmdRetryTimesDict = this.cmdTmpDataDict = this.m_pinClient = this.m_kioskClient = null
            };
            c.prototype.collectQuest = function(a, b, c) {
                this.SendRetryCmd("collectQuest", {
                    quest_id: a,
                    quest_level: b
                }, c, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.getCommonEventInfo = function(a) {
                this.SendRetryCmd("getCommonEventInfo", null, a, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.getPuzzleQuestInfo = function(a) {
                this.SendRetryCmd("GetPuzzleQuestInfo",
                    null, a, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.collectPuzzleQuest = function(a, b, c, d) {
                this.SendRetryCmd("CollectPuzzleQuest", {
                    name: a,
                    serial_no: b,
                    quest_level: c
                }, d, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.getPuzzleRank = function(a, b, c) {
                this.SendRetryCmd("GetPuzzleRank", {
                    rank_list_id: a,
                    rank_get_limit: b
                }, c, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.getPuzzleHistory = function(a, b) {
                a = {
                    rank_list_id: a,
                    limit: 50
                };
                console.log("[UserClient.getPuzzleHistory] ", a);
                this.SendRetryCmd("getPuzzleHistory", a,
                    b, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.getExtraCompsResult = function(a) {
                this.SendRetryCmd("getExtraCompsResult", {
                    kiosk_id: d.LoginModel.LoginInfo.kiosk_id,
                    pin_id: d.LoginModel.LoginInfo.pin_id
                }, a, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.collectExtraCompsAward = function(a, b, c) {
                this.NoRtryCmd("collectExtraCompsAward", {
                    kiosk_id: d.LoginModel.LoginInfo.kiosk_id,
                    pin_id: d.LoginModel.LoginInfo.pin_id,
                    EventID: a,
                    EventSerialNo: b
                }, c, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.NoRtryCmd = function(a, b,
                c, d, h, k) {
                void 0 === d && (d = 15E3);
                this.m_pinClient.send_cmd(this.systemName, a, b, c, d, h, k)
            };
            c.prototype.getNoRetryCommonEventInfo = function(a) {
                this.NoRtryCmd("getCommonEventInfo", {}, a)
            };
            c.prototype.GetMissionBonus = function(a, b) {
                this.SendRetryCmd("collectH5LoginBonus", {
                    theme_id: a
                }, b, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.GetMissionBonusInfo = function(a) {
                this.SendRetryCmd("getH5LoginBonusInfo", null, a, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.GetUserProperty = function(a) {
                console.log("[UserClient.GetUserProperty] %c GetUserProperty",
                    "color:coral");
                this.SendRetryCmd("getUserProperty", {
                    kiosk_id: d.LoginModel.LoginInfo.kiosk_id,
                    pin_id: d.LoginModel.LoginInfo.pin_id,
                    device_id: d.LoginModel.LoginInfo.device_id,
                    shutter_skill_fail_serial_id: d.LoginModel.LoginInfo.shutter_skill_fail_serial_id
                }, a, this.OnGetUserPropertyRecv.bind(this))
            };
            c.prototype.OnGetUserPropertyRecv = function(a, b, c) {
                console.log("[UserClient.OnGetUserPropertyRecv] ", a, b, c);
                if (a === ArkSDK.HttpConnect.HttpResult.OK) {
                    var f = 0;
                    null == b || null == b.cmd_data ? this.CmdCallback(c, a, b) :
                        0 === b.cmd_data.result || 1 === b.cmd_data.result ? (void 0 != b.cmd_data.data.shutter_skill_fail_serial_id && (f = b.cmd_data.data.shutter_skill_fail_serial_id), this.CmdCallback(c, a, b), d.LoginModel.LoginInfo.shutter_skill_fail_serial_id = f + 1) : this.CmdCallback(c, a, b)
                } else this.cmdRetryTimesDict[c] < this.Timer.length ? (console.log("shutter skill fail retry : ", this.cmdRetryTimesDict[c]), this.ReSendCmd(c), this.cmdRetryTimesDict[c]++) : (console.log("shutter skill fail retry dead"), this.CmdCallback(c, a, b))
            };
            c.prototype.SendChangeID =
                function(a, b) {
                    console.log("[UserClient.SendChangeID] %c SendChangeID", "color:coral");
                    this.SendRetryCmd("changeUserID", {
                        user_id: a
                    }, b, this.OnRecvRetryCmd.bind(this))
                };
            c.prototype.SendPlayFlowData = function(a, b, c) {
                this.m_pinClient.send_cmd(this.systemName, "playerFlow", {
                    BrowserInfo: a.browser.name,
                    BrowserVersion: a.browser.version,
                    DeviceInfo: a.os.name,
                    DeviceVersion: a.os.version,
                    ThemeTitle: b,
                    KioskID: d.LoginModel.LoginInfo.kiosk_id,
                    MachineID: d.LoginModel.LoginInfo.machine_id,
                    pin_id: d.LoginModel.LoginInfo.pin_id,
                    PinArkID: d.LoginModel.LoginInfo.pin_ark_id,
                    UserID: d.LoginModel.LoginInfo.user_id,
                    Status: c
                }, null, 6E4)
            };
            c.prototype.SendPacketDelayData = function(a) {
                this.m_pinClient.send_cmd(this.systemName, "sendH5ClientPacketDelayTime", {
                    sent: a.sent,
                    receive: a.receive,
                    loss: a.loss,
                    best: a.best,
                    average: a.average,
                    worst: a.worst,
                    totalElapsedTime: a.totalElapsedTime,
                    KioskID: d.LoginModel.LoginInfo.kiosk_id,
                    MachineID: d.LoginModel.LoginInfo.machine_id,
                    PinArkID: d.LoginModel.LoginInfo.pin_ark_id,
                    UserID: d.LoginModel.LoginInfo.user_id
                })
            };
            c.prototype.SendErrorLog = function(a) {
                this.m_pinClient.send_cmd(this.systemName, "sendH5ErrorLog", {
                    error_result: a.error_result,
                    trigger_point: a.trigger_point,
                    scene_name: a.scene_name,
                    error_handle: a.error_handle,
                    ClientTimeUTC: a.ClientTimeUTC,
                    MachineID: a.MachineID,
                    KioskID: a.KioskID,
                    PinArkID: a.PinArkID,
                    UserID: a.UserID
                })
            };
            c.prototype.GetLobbyInfo = function(a) {
                console.log("[UserClient.GetLobbyInfo] %c GetLobbyInfo", "color:coral");
                this.SendRetryCmd("getLobbyInfo", {
                        kiosk_id: d.LoginModel.LoginInfo.kiosk_id,
                        device_id: d.LoginModel.LoginInfo.device_id
                    },
                    a, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.GetClientBannerAdv = function(a) {
                console.log("[UserClient.GetClientBannerAdv] %c GetClientBannerAdv", "color:coral");
                this.SendRetryCmd("getClientBannerAdv", {
                    kiosk_id: d.LoginModel.LoginInfo.kiosk_id,
                    platform: "PHONE"
                }, a, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.GetClientPopUpAdv = function(a) {
                console.log("[UserClient.GetClientPopUpAdv] %c GetClientPopUpAdv", "color:coral");
                this.SendRetryCmd("getClientPopUpAdv", {
                        kiosk_id: d.LoginModel.LoginInfo.kiosk_id,
                        platform: "PHONE"
                    },
                    a, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.GetPopupBillBoard = function(a, b) {
                console.log("[UserClient.GetPopupBillBoard] %c GetPopupBillBoard", "color:coral");
                this.SendRetryCmd("getPopupBillBoard", {
                    kiosk_id: d.LoginModel.LoginInfo.kiosk_id,
                    device: d.LoginModel.LoginInfo.device_id,
                    mode: a
                }, b, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.GetPopupContent = function(a, b, c, g) {
                console.log("[UserClient.GetPopupContent] %c GetPopupContent", "color:coral");
                a = {
                    kiosk_id: d.LoginModel.LoginInfo.kiosk_id,
                    device: d.LoginModel.LoginInfo.device_id,
                    mode: a,
                    TitleID: b,
                    TagID: c
                };
                "hot" == b && (a.HotID = b);
                this.SendRetryCmd("getPopupContent", a, g, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.SendShutterSkillLose = function(a, b, c) {
                console.log("[UserClient.ShutterSkillFail] %c ShutterSkillFail", "color:coral");
                this.SendRetryCmd("ShutterSkillFail", {
                    total_bet: a * b,
                    shutter_skill_fail_serial_id: d.LoginModel.LoginInfo.shutter_skill_fail_serial_id
                }, c, this.OnShutterSkillFailRecv.bind(this))
            };
            c.prototype.SendSmsSetting = function(a) {
                console.log("[UserClient.SendSmsSetting] %c SendSmsSetting",
                    "color:coral");
                this.SendRetryCmd("getSmsSetting", {}, a, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.SendChangeSmsSetting = function(a, b) {
                console.log("[UserClient.changeSmsSetting] %c changeSmsSetting", "color:coral");
                this.SendRetryCmd("changeSmsSetting", {
                    is_accept_sms: a
                }, b, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.SendVerifyCodeEffect = function(a) {
                console.log("[UserClient.getVerifyCodeEffect] %c getVerifyCodeEffect", "color:coral");
                this.SendRetryCmd("getVerifyCodeEffect", null, a, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.SendUserCellPhoneVerify = function(a) {
                console.log("[UserClient.SendUserCellPhoneVerify] %c SendUserCellPhoneVerify", "color:coral");
                this.SendRetryCmd("getUserCellphoneVerify", null, a, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.SendVerifyCode = function(a, b, c) {
                console.log("[UserClient.SendVerifyCode] %c SendVerifyCode", "color:coral");
                this.m_pinClient.send_cmd(this.systemName, "sendVerifyCode", {
                    cellphone_num: a,
                    cellphone_state_num: b
                }, c)
            };
            c.prototype.SendVerifyValidCode = function(a, b) {
                console.log("[UserClient.SendVerifyValidCode] %c SendVerifyValidCode",
                    "color:coral");
                this.m_pinClient.send_cmd(this.systemName, "verifyVerifyCode", {
                    verify_code: a
                }, b)
            };
            c.prototype.SendSessionLengthStart = function(a, b) {
                console.log("[UserClient.SendSessionLengthStart] %c SessionLengthStart", "color:coral");
                this.m_pinClient.send_cmd(this.systemName, "sessionLengthStart", {
                    gameId: a
                }, b)
            };
            c.prototype.SendSessionLengthEnd = function(a, b) {
                console.log("[UserClient.SendSessionLengthEnd] %c SessionLengthEnd", "color:coral");
                this.m_pinClient.send_cmd(this.systemName, "sessionLengthEnd", {
                    gameId: a
                }, b)
            };
            c.prototype.GetKioskGameSetting = function(a) {
                console.log("[UserClient.GetKioskGameSetting] %c GetKioskGameSetting", "color:coral");
                this.SendRetryCmd("getKioskGameSetting", {
                    kiosk_id: d.LoginModel.LoginInfo.kiosk_id
                }, a, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.SendPurchase = function(a, b) {
                console.log("[UserClient.Purchase] %c Purchase", "color:coral");
                this.SendRetryCmd("purchase", {
                    key: a,
                    client_purchase_serial_id: d.LoginModel.LoginInfo.purchase_serial_id
                }, b, this.OnPurchaseRecv.bind(this))
            };
            c.prototype.SendChangePassword = function(a, b, c) {
                console.log("[UserClient.SendChangePassword]");
                var f = new JSEncrypt;
                f.setKey(this.ENCRYPT_KEY);
                a = f.encrypt(a);
                b = f.encrypt(b);
                f = {};
                f.user_id = d.LoginModel.LoginInfo.user_id;
                f.user_pw_old = a;
                f.user_pw_new = b;
                f.kiosk_id = d.LoginModel.LoginInfo.kiosk_id;
                f.pin_id = d.LoginModel.LoginInfo.pin_id;
                this.SendRetryCmd("changePassword", f, c, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.OnRecvRetryCmd = function(a, b, c) {
                a === ArkSDK.HttpConnect.HttpResult.OK ? this.CmdCallback(c,
                    a, b) : this.cmdRetryTimesDict[c] < this.Timer.length ? (console.log(c + " retry : ", this.cmdRetryTimesDict[c]), this.ReSendCmd(c), this.cmdRetryTimesDict[c]++) : (console.log(c + " retry dead"), this.CmdCallback(c, a, b))
            };
            c.prototype.OnClickLogCmd = function(a, b, c) {
                a === ArkSDK.HttpConnect.HttpResult.OK ? this.CmdCallback(c, a, b) : this.cmdRetryTimesDict[c] < this.Timer.length ? (console.log(c + " retry : ", this.cmdRetryTimesDict[c]), this.ReSendCmd(c), this.cmdRetryTimesDict[c]++) : (console.log(c + " retry dead"), this.CmdCallback(c,
                    a, b))
            };
            c.prototype.OnPurchaseRecv = function(a, b, c) {
                a === ArkSDK.HttpConnect.HttpResult.OK ? null == b || null == b.cmd_data ? this.CmdCallback(c, a, b) : 0 === b.cmd_data.result || 1 === b.cmd_data.result ? d.LoginModel.LoginInfo.purchase_serial_id === b.cmd_data.client_purchase_serial_id ? (d.LoginModel.LoginInfo.purchase_serial_id++, this.CmdCallback(c, a, b)) : console.warn("LoginModel.LoginInfo.purchase_serial_id " + d.LoginModel.LoginInfo.purchase_serial_id + " != " + b.cmd_data.client_purchase_serial_id + " result.cmd_data.client_purchase_serial_id") :
                    this.CmdCallback(c, a, b) : this.cmdRetryTimesDict[c] < this.Timer.length ? (console.log("purchase retry : ", this.cmdRetryTimesDict[c]), this.ReSendCmd(c), this.cmdRetryTimesDict[c]++) : (console.log("purchase retry dead"), this.CmdCallback(c, a, b))
            };
            c.prototype.OnShutterSkillFailRecv = function(a, b, c) {
                console.warn("[OnShutterSkillFailRecv]", b);
                a === ArkSDK.HttpConnect.HttpResult.OK ? null == b || null == b.cmd_data ? this.CmdCallback(c, a, b) : 0 === b.cmd_data.result || 1 === b.cmd_data.result ? d.LoginModel.LoginInfo.shutter_skill_fail_serial_id ===
                    b.cmd_data.shutter_skill_fail_serial_id ? (d.LoginModel.LoginInfo.shutter_skill_fail_serial_id += 1, this.CmdCallback(c, a, b)) : console.warn("LoginModel.LoginInfo.shutter_skill_fail_serial_id " + d.LoginModel.LoginInfo.shutter_skill_fail_serial_id + " != " + b.cmd_data.shutter_skill_fail_serial_id + " result.cmd_data.shutter_skill_fail_serial_id") : this.CmdCallback(c, a, b) : this.cmdRetryTimesDict[c] < this.Timer.length ? (console.log("shutter skill fail retry : ", this.cmdRetryTimesDict[c]), this.ReSendCmd(c), this.cmdRetryTimesDict[c]++) :
                    (console.log("shutter skill fail retry dead"), this.CmdCallback(c, a, b))
            };
            c.prototype.SendRetryCmd = function(a, b, c, d) {
                void 0 != this.cmdTmpDataDict[a] ? console.error(a, "is send already,retry now ...") : (this.cmdTmpDataDict[a] = b, this.cmdRetryTimesDict[a] = 0, this.cmdCallbackDict[a] = c, this.cmdRecvDict[a] = d, b = this.cmdRetryTimesDict[a], this.cmdRetryTimesDict[a]++, this.m_pinClient.send_cmd(this.systemName, a, this.cmdTmpDataDict[a], this.cmdRecvDict[a], this.Timer[b]))
            };
            c.prototype.ReSendCmd = function(a) {
                console.log("[UserClient.ReSendCmd] %c" +
                    a, "color:coral");
                this.m_pinClient.send_cmd(this.systemName, a, this.cmdTmpDataDict[a], this.cmdRecvDict[a], this.Timer[this.cmdRetryTimesDict[a]])
            };
            c.prototype.CmdCallback = function(a, b, c) {
                void 0 != this.cmdCallbackDict && (this.cmdCallbackDict[a](b, c), this.ReleaseRetryCmdData(a))
            };
            c.prototype.ReleaseRetryCmdData = function(a) {
                this.cmdRetryTimesDict[a] = void 0;
                this.cmdTmpDataDict[a] = void 0;
                this.cmdCallbackDict[a] = void 0;
                this.cmdRecvDict[a] = void 0
            };
            c.prototype.recordClickLog = function(a, b, f) {
                void 0 === f && (f = null);
                this.m_bHaveClickLog || (this.m_bHaveClickLog = !0, this.sendClickLog());
                for (var g = h.Common.GameEnvironment.CurrentGameNow, q = g ? g : "Lobby", k = !0, m = 0; m < this.m_arrJsonClickLog.length; m++) {
                    var r = this.m_arrJsonClickLog[m];
                    if (r.click_id == a && r.btn_click_id == b && r.scenes == q) {
                        k = !1;
                        r.btn_click_times += 1;
                        break
                    }
                }
                k && (k = new Date, q = k.getTime(), k = k.getTime() - 6E4 * k.getTimezoneOffset(), a = {
                    click_id: a,
                    btn_click_id: b,
                    btn_click_times: 1,
                    scenes: g ? g : "Lobby",
                    ark_id: d.LoginModel.LoginInfo.pin_ark_id,
                    pin_id: d.LoginModel.LoginInfo.pin_id,
                    kiosk_id: d.LoginModel.LoginInfo.kiosk_id,
                    device_id: d.LoginModel.LoginInfo.device_id,
                    device_type: 1,
                    machine_id: d.LoginModel.LoginInfo.machine_id,
                    extra_data: f,
                    client_time_utc: Math.floor(q / 1E3),
                    client_time_local: Math.floor(k / 1E3)
                }, this.m_arrJsonClickLog.push(a), c.CurClickLogData.push(a))
            };
            c.prototype.sendClickLog = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var a;
                    return __generator(this, function(b) {
                        switch (b.label) {
                            case 0:
                                return [4, this.delay(3E5)];
                            case 1:
                                return b.sent(), null != this.m_arrJsonClickLog &&
                                    0 < this.m_arrJsonClickLog.length && (a = {}, a.btn_click_list = this.m_arrJsonClickLog, console.warn("sendClickLog"), console.warn(a), this.m_pinClient.send_cmd(this.systemName, "sendClientClickInfo", a, null, null), this.m_arrJsonClickLog = [], c.CurClickLogData = []), [3, 0];
                            case 2:
                                return [2]
                        }
                    })
                })
            };
            c.prototype.delay = function(a) {
                return new Promise(function(b) {
                    return setTimeout(b, a)
                })
            };
            c.prototype.sendClickLogNow = function(a, b, c, g) {
                void 0 === c && (c = 1);
                void 0 === g && (g = null);
                var f = h.Common.GameEnvironment.CurrentGameNow,
                    k = new Date,
                    m = k.getTime(),
                    r = k.getTime() - 6E4 * k.getTimezoneOffset();
                k = [];
                k[0] = {
                    click_id: a,
                    btn_click_id: b,
                    btn_click_times: c,
                    scenes: f ? f : "Lobby",
                    ark_id: d.LoginModel.LoginInfo.pin_ark_id,
                    pin_id: d.LoginModel.LoginInfo.pin_id,
                    kiosk_id: d.LoginModel.LoginInfo.kiosk_id,
                    device_id: d.LoginModel.LoginInfo.device_id,
                    device_type: 1,
                    machine_id: d.LoginModel.LoginInfo.machine_id,
                    extra_data: g,
                    client_time_utc: Math.floor(m / 1E3),
                    client_time_local: Math.floor(r / 1E3)
                };
                a = {};
                a.btn_click_list = k;
                console.warn("sendClickLogNow");
                console.warn(a);
                this.m_pinClient.send_cmd(this.systemName, "sendClientClickInfo", a, null, null)
            };
            c.prototype.recordClickTimesLog = function(a, b, f) {
                this.m_bHaveClickLog || (this.m_bHaveClickLog = !0, this.sendClickLog());
                var g = h.Common.GameEnvironment.CurrentGameNow;
                g = g ? g : "Lobby";
                var q = new Date,
                    k = q.getTime();
                q = q.getTime() - 6E4 * q.getTimezoneOffset();
                g = {
                    click_id: a,
                    btn_click_id: b,
                    btn_click_times: f,
                    scenes: g,
                    ark_id: d.LoginModel.LoginInfo.pin_ark_id,
                    pin_id: d.LoginModel.LoginInfo.pin_id,
                    kiosk_id: d.LoginModel.LoginInfo.kiosk_id,
                    device_id: d.LoginModel.LoginInfo.device_id,
                    device_type: 1,
                    machine_id: d.LoginModel.LoginInfo.machine_id,
                    client_time_utc: Math.floor(k / 1E3),
                    client_time_local: Math.floor(q / 1E3)
                };
                console.warn("[recordClickTimesLog] click_id = " + a + ", btn_click_id = " + b + ", btn_click_times = " + f);
                this.m_arrJsonClickLog.push(g);
                c.CurClickLogData.push(g)
            };
            c.prototype.getContactInfoByKiosk = function(a, b) {
                this.getContactInfoSuccessCallback = a;
                this.getContactInfoFailCallback = b;
                this.m_pinClient.send_cmd("lobby", "getContactInfoByKiosk", {
                    kiosk_id: d.LoginModel.LoginInfo.kiosk_id,
                    logo: d.LoginModel.LoginInfo.logo
                }, this.onRecieveContactInfoByKiosk.bind(this))
            };
            c.prototype.onRecieveContactInfoByKiosk = function(a, b) {
                console.log("[UserClient] getContactInfoByKiosk state: ", a);
                console.log("[UserClient] getContactInfoByKiosk data: ", b);
                try {
                    a == ArkSDK.HttpResult.OK && 0 == b.cmd_data.err_code ? null != this.getContactInfoSuccessCallback && (this.getContactInfoSuccessCallback(a, b, "getContactInfoByKiosk"), this.getContactInfoSuccessCallback = null) : (console.error("[UserClient] %c getContactInfoByKiosk failed\n",
                        "font-size:18px;font-weight:bold;color:green;", b), null != this.getContactInfoFailCallback && (this.getContactInfoFailCallback(a, b, "getContactInfoByKiosk"), this.getContactInfoFailCallback = null))
                } catch (f) {
                    console.error(f)
                }
            };
            c.prototype.getComps = function(a, b, c) {
                this.getCompsSucceedCallback = b;
                this.getCompsFailedCallback = c;
                this.m_pinClient.send_cmd("lobby", "getComps", {
                    comps_name: a,
                    logo: d.LoginModel.LoginInfo.logo
                }, this.onRecieveGetComps.bind(this))
            };
            c.prototype.onRecieveGetComps = function(a, b) {
                console.log("[UserClient] getComps state: ",
                    a);
                console.log("[UserClient] getComps data: ", b);
                try {
                    a == ArkSDK.HttpResult.OK && 0 == b.cmd_data.err_code ? null != this.getCompsSucceedCallback && (this.getCompsSucceedCallback(a, b, "getComps"), this.getCompsSucceedCallback = null) : (console.error("[UserClient] %c getComps failed\n", "font-size:18px;font-weight:bold;color:green;", b), null != this.getCompsFailedCallback && (this.getCompsFailedCallback(a, b, "getComps"), this.getCompsFailedCallback = null))
                } catch (f) {
                    console.error(f)
                }
            };
            c.prototype.getCompsEventInfo = function(a,
                b) {
                this.getCompsEventInfoSucceedCallback = a;
                this.getCompsEventInfoFailedCallback = b;
                this.m_pinClient.send_cmd("lobby", "getCompsEventInfo", {
                    logo: d.LoginModel.LoginInfo.logo
                }, this.onRecieveGetCompsEventInfo.bind(this))
            };
            c.prototype.onRecieveGetCompsEventInfo = function(a, b) {
                console.log("[UserClient] getCompsEventInfo state: ", a);
                console.log("[UserClient] getCompsEventInfo data: ", b);
                try {
                    a == ArkSDK.HttpResult.OK && 0 == b.cmd_data.err_code ? null != this.getCompsEventInfoSucceedCallback && (this.getCompsEventInfoSucceedCallback(a,
                        b, "getCompsEventInfo"), this.getCompsEventInfoSucceedCallback = null) : (console.error("[UserClient] %c getCompsEventInfo failed\n", "font-size:18px;font-weight:bold;color:green;", b), null != this.getCompsEventInfoFailedCallback && (this.getCompsEventInfoFailedCallback(a, b, "getCompsEventInfo"), this.getCompsEventInfoFailedCallback = null))
                } catch (f) {
                    console.error(f)
                }
            };
            c.prototype.sendClickLogEx = function(a, b, c, g, q) {
                void 0 === q && (q = null);
                var f = h.Common.GameEnvironment.CurrentGameNow,
                    m = new Date,
                    r = m.getTime(),
                    A = m.getTime() -
                    6E4 * m.getTimezoneOffset();
                m = [];
                m[0] = {
                    click_id: a,
                    btn_click_id: b,
                    btn_click_times: 1,
                    click_name: c,
                    scenes: f ? f : "Lobby",
                    ark_id: d.LoginModel.LoginInfo.pin_ark_id,
                    pin_id: d.LoginModel.LoginInfo.pin_id,
                    kiosk_id: d.LoginModel.LoginInfo.kiosk_id,
                    device_id: g,
                    device_type: 1,
                    machine_id: d.LoginModel.LoginInfo.machine_id,
                    browser_info: q.browser.name,
                    browser_version: q.browser.version,
                    device_info: q.os.name,
                    device_version: q.os.version,
                    client_time_utc: Math.floor(r / 1E3),
                    client_time_local: Math.floor(A / 1E3)
                };
                a = {};
                a.btn_click_list =
                    m;
                console.warn("sendClickLogEx");
                console.warn(a);
                this.m_pinClient.send_cmd(this.systemName, "sendClientClickInfo", a, null, null)
            };
            c.CurClickLogData = [];
            return c
        }();
        d.UserClient = r
    })(h.Network || (h.Network = {}))
})(SS || (SS = {}));
(function(h) {
    (function(d) {
        (function(d) {
            d.GetCookie = function(c) {
                var a = c.length + 1;
                return document.cookie.split(";").map(function(a) {
                    return a.trim()
                }).filter(function(b) {
                    return b.substring(0, a) === c + "="
                }).map(function(b) {
                    return decodeURIComponent(b.substring(a))
                })[0] || null
            }
        })(d.Common || (d.Common = {}))
    })(h.Network || (h.Network = {}))
})(SS || (SS = {}));
(function(h) {
    (function(d) {
        (function(d) {
            var c = function() {
                function a() {
                    this.iNowRetryTimes = this.iNowTime = 0
                }
                a.prototype.Start = function(a, c, d) {
                    this.retryHandler = a;
                    this.timeoutHandler = c;
                    this.arrayRetryTime = d;
                    this.timerID = setInterval(this._RetryTimer.bind(this), 1E3)
                };
                a.prototype.ResetTimes = function() {
                    this.iNowRetryTimes = this.iNowTime = 0
                };
                a.prototype.Stop = function() {
                    clearInterval(this.timerID);
                    this.iNowRetryTimes = this.iNowTime = 0;
                    this.retryHandler = this.timeoutHandler = this.arrayRetryTime = null
                };
                a.prototype._RetryTimer =
                    function() {
                        console.log("[RetryTimer._RetryTimer] ", Date.now, " iNowTime = ", this.iNowTime);
                        this.iNowTime += 1;
                        this.iNowRetryTimes < this.arrayRetryTime.length ? this.iNowTime >= this.arrayRetryTime[this.iNowRetryTimes] && (console.log("[RetryTimer._RetryTimer] ", Date.now, " iNowRetryTimes = ", this.iNowRetryTimes), null != this.retryHandler ? this.retryHandler() : console.error("retryHandler is null"), this.iNowTime = 0, this.iNowRetryTimes += 1) : (this.Stop(), console.log("_RetryTimer Timeout = " + Date.now), null != this.timeoutHandler ?
                            this.timeoutHandler() : console.error("timeoutHandler is null"))
                    };
                return a
            }();
            d.RetryTimer = c
        })(d.Common || (d.Common = {}))
    })(h.Network || (h.Network = {}))
})(SS || (SS = {}));