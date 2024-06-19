/*
 *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0

    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.

    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
**************************************************************************** Copyright (c) 2011, Yahoo! Inc. All rights reserved.
    Code licensed under the BSD License:
    http://developer.yahoo.com/yui/license.html
    version: 2.9.0
 <a href="https://kjur.github.io/jsrsasign/license/">MIT License</a>
 A JavaScript implementation of the SHA family of hashes, as
 defined in FIPS PUB 180-4 and FIPS PUB 202, as well as the corresponding
 HMAC implementation as defined in FIPS PUB 198a

 Copyright 2008-2018 Brian Turek, 1998-2009 Paul Johnston & Contributors
 Distributed under the BSD License
 See http://caligatio.github.com/jsSHA/ for more information
*/
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
        serverStringNext = serverConfig.prefix_ws+serverConfig.host_ws+':'+ serverConfig.port + "/AladdinAdventure";
    }
}
XmlHttpRequest.send(null);

var $jscomp = $jscomp || {};
$jscomp.scope = {};
$jscomp.ASSUME_ES5 = !1;
$jscomp.ASSUME_NO_NATIVE_MAP = !1;
$jscomp.ASSUME_NO_NATIVE_SET = !1;
$jscomp.defineProperty = $jscomp.ASSUME_ES5 || "function" == typeof Object.defineProperties ? Object.defineProperty : function(g, d, q) {
    g != Array.prototype && g != Object.prototype && (g[d] = q.value)
};
$jscomp.getGlobal = function(g) {
    return "undefined" != typeof window && window === g ? g : "undefined" != typeof global && null != global ? global : g
};
$jscomp.global = $jscomp.getGlobal(this);
$jscomp.SYMBOL_PREFIX = "jscomp_symbol_";
$jscomp.initSymbol = function() {
    $jscomp.initSymbol = function() {};
    $jscomp.global.Symbol || ($jscomp.global.Symbol = $jscomp.Symbol)
};
$jscomp.symbolCounter_ = 0;
$jscomp.Symbol = function(g) {
    return $jscomp.SYMBOL_PREFIX + (g || "") + $jscomp.symbolCounter_++
};
$jscomp.initSymbolIterator = function() {
    $jscomp.initSymbol();
    var g = $jscomp.global.Symbol.iterator;
    g || (g = $jscomp.global.Symbol.iterator = $jscomp.global.Symbol("iterator"));
    "function" != typeof Array.prototype[g] && $jscomp.defineProperty(Array.prototype, g, {
        configurable: !0,
        writable: !0,
        value: function() {
            return $jscomp.arrayIterator(this)
        }
    });
    $jscomp.initSymbolIterator = function() {}
};
$jscomp.arrayIterator = function(g) {
    var d = 0;
    return $jscomp.iteratorPrototype(function() {
        return d < g.length ? {
            done: !1,
            value: g[d++]
        } : {
            done: !0
        }
    })
};
$jscomp.iteratorPrototype = function(g) {
    $jscomp.initSymbolIterator();
    g = {
        next: g
    };
    g[$jscomp.global.Symbol.iterator] = function() {
        return this
    };
    return g
};
$jscomp.makeIterator = function(g) {
    $jscomp.initSymbolIterator();
    var d = g[Symbol.iterator];
    return d ? d.call(g) : $jscomp.arrayIterator(g)
};
$jscomp.polyfill = function(g, d, q, c) {
    if (d) {
        q = $jscomp.global;
        g = g.split(".");
        for (c = 0; c < g.length - 1; c++) {
            var a = g[c];
            a in q || (q[a] = {});
            q = q[a]
        }
        g = g[g.length - 1];
        c = q[g];
        d = d(c);
        d != c && null != d && $jscomp.defineProperty(q, g, {
            configurable: !0,
            writable: !0,
            value: d
        })
    }
};
$jscomp.FORCE_POLYFILL_PROMISE = !1;
$jscomp.polyfill("Promise", function(g) {
    function d() {
        this.batch_ = null
    }

    function q(b) {
        return b instanceof a ? b : new a(function(a, e) {
            a(b)
        })
    }
    if (g && !$jscomp.FORCE_POLYFILL_PROMISE) return g;
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
        } catch (p) {
            b.reject(p)
        }
    };
    a.prototype.createResolveAndReject_ =
        function() {
            function a(a) {
                return function(e) {
                    c || (c = !0, a.call(b, e))
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
                    var e = null != b;
                    break a;
                case "function":
                    e = !0;
                    break a;
                default:
                    e = !1
            }
            e ? this.resolveToNonPromiseObj_(b) : this.fulfill_(b)
        }
    };
    a.prototype.resolveToNonPromiseObj_ = function(a) {
        var b =
            void 0;
        try {
            b = a.then
        } catch (p) {
            this.reject_(p);
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
        var e = this.createResolveAndReject_();
        try {
            a.call(b, e.resolve, e.reject)
        } catch (k) {
            e.reject(k)
        }
    };
    a.prototype.then = function(b, c) {
        function e(a, b) {
            return "function" == typeof a ? function(b) {
                try {
                    h(a(b))
                } catch (F) {
                    d(F)
                }
            } : b
        }
        var h, d, g = new a(function(a,
            b) {
            h = a;
            d = b
        });
        this.callWhenSettled_(e(b, h), e(c, d));
        return g
    };
    a.prototype.catch = function(a) {
        return this.then(void 0, a)
    };
    a.prototype.callWhenSettled_ = function(a, c) {
        function e() {
            switch (h.state_) {
                case 1:
                    a(h.result_);
                    break;
                case 2:
                    c(h.result_);
                    break;
                default:
                    throw Error("Unexpected state: " + h.state_);
            }
        }
        var h = this;
        null == this.onSettledCallbacks_ ? b.asyncExecute(e) : this.onSettledCallbacks_.push(function() {
            b.asyncExecute(e)
        })
    };
    a.resolve = q;
    a.reject = function(b) {
        return new a(function(a, e) {
            e(b)
        })
    };
    a.race = function(b) {
        return new a(function(a,
            e) {
            for (var c = $jscomp.makeIterator(b), h = c.next(); !h.done; h = c.next()) q(h.value).callWhenSettled_(a, e)
        })
    };
    a.all = function(b) {
        var e = $jscomp.makeIterator(b),
            c = e.next();
        return c.done ? q([]) : new a(function(a, b) {
            function h(b) {
                return function(e) {
                    d[b] = e;
                    k--;
                    0 == k && a(d)
                }
            }
            var d = [],
                k = 0;
            do d.push(void 0), k++, q(c.value).callWhenSettled_(h(d.length - 1), b), c = e.next(); while (!c.done)
        })
    };
    return a
}, "es6", "es3");
$jscomp.polyfill("Object.setPrototypeOf", function(g) {
    return g ? g : "object" != typeof "".__proto__ ? null : function(d, g) {
        d.__proto__ = g;
        if (d.__proto__ !== g) throw new TypeError(d + " is not extensible");
        return d
    }
}, "es6", "es5");
$jscomp.iteratorFromArray = function(g, d) {
    $jscomp.initSymbolIterator();
    g instanceof String && (g += "");
    var q = 0,
        c = {
            next: function() {
                if (q < g.length) {
                    var a = q++;
                    return {
                        value: d(a, g[a]),
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
$jscomp.polyfill("Array.prototype.keys", function(g) {
    return g ? g : function() {
        return $jscomp.iteratorFromArray(this, function(d) {
            return d
        })
    }
}, "es6", "es3");
var __awaiter = this && this.__awaiter || function(g, d, q, c) {
        return new(q || (q = Promise))(function(a, b) {
            function e(a) {
                try {
                    p(c.next(a))
                } catch (l) {
                    b(l)
                }
            }

            function h(a) {
                try {
                    p(c["throw"](a))
                } catch (l) {
                    b(l)
                }
            }

            function p(b) {
                b.done ? a(b.value) : (new q(function(a) {
                    a(b.value)
                })).then(e, h)
            }
            p((c = c.apply(g, d || [])).next())
        })
    },
    __generator = this && this.__generator || function(g, d) {
        function q(a) {
            return function(b) {
                return c([a, b])
            }
        }

        function c(c) {
            if (b) throw new TypeError("Generator is already executing.");
            for (; a;) try {
                if (b = 1, e && (h = c[0] &
                        2 ? e["return"] : c[0] ? e["throw"] || ((h = e["return"]) && h.call(e), 0) : e.next) && !(h = h.call(e, c[1])).done) return h;
                if (e = 0, h) c = [c[0] & 2, h.value];
                switch (c[0]) {
                    case 0:
                    case 1:
                        h = c;
                        break;
                    case 4:
                        return a.label++, {
                            value: c[1],
                            done: !1
                        };
                    case 5:
                        a.label++;
                        e = c[1];
                        c = [0];
                        continue;
                    case 7:
                        c = a.ops.pop();
                        a.trys.pop();
                        continue;
                    default:
                        if (!(h = a.trys, h = 0 < h.length && h[h.length - 1]) && (6 === c[0] || 2 === c[0])) {
                            a = 0;
                            continue
                        }
                        if (3 === c[0] && (!h || c[1] > h[0] && c[1] < h[3])) a.label = c[1];
                        else if (6 === c[0] && a.label < h[1]) a.label = h[1], h = c;
                        else if (h && a.label <
                            h[2]) a.label = h[2], a.ops.push(c);
                        else {
                            h[2] && a.ops.pop();
                            a.trys.pop();
                            continue
                        }
                }
                c = d.call(g, a)
            } catch (l) {
                c = [6, l], e = 0
            } finally {
                b = h = 0
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
                    if (h[0] & 1) throw h[1];
                    return h[1]
                },
                trys: [],
                ops: []
            },
            b, e, h, p;
        return p = {
            next: q(0),
            "throw": q(1),
            "return": q(2)
        }, "function" === typeof Symbol && (p[Symbol.iterator] = function() {
            return this
        }), p
    },
    ArkSDK;
(function(g) {
    g.HttpResult = {
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
                var e, d;
                return __generator(this, function(h) {
                    switch (h.label) {
                        case 0:
                            return e = new q(c), [4, e.send_get(a, b)];
                        case 1:
                            return d = h.sent(), [2, d]
                    }
                })
            })
        };
        c.do_post = function(a, b, c, h) {
            void 0 === b && (b = null);
            void 0 === c && (c = 15E3);
            void 0 === h && (h = null);
            return __awaiter(this, void 0, void 0,
                function() {
                    var e, d;
                    return __generator(this, function(k) {
                        switch (k.label) {
                            case 0:
                                return e = new q(c), [4, e.send_post(a, b, h)];
                            case 1:
                                return d = k.sent(), [2, d]
                        }
                    })
                })
        };
        c.HttpConnect = c;
        c.HttpResult = g.HttpResult;
        return c
    }();
    g.HttpConnect = d;
    var q = function() {
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
                    result: g.HttpResult.NotReset,
                    status: 0,
                    text: "NotReset",
                    conn: null
                })
            }.bind(this));
            c = this.conn = new XMLHttpRequest;
            this.url = a;
            this.data = b;
            if (null != b) {
                var h = "",
                    d;
                for (d in b) "" != h && (h += "&"), h += d + "=" + encodeURIComponent(b[d]);
                "" != h && (0 > a.indexOf("?") && (a += "?"), a += h)
            }
            c.open("POST", a);
            console.log("URL : " + a, "Time :" + this.timeout);
            c.timeout = this.timeout;
            return new Promise(function(a, b) {
                c.onload = this._onload.bind(this, a, b, c);
                c.onabort = this._onerror.bind(this, b, g.HttpResult.Abort);
                c.onerror = this._onerror.bind(this, b, g.HttpResult.Error);
                c.ontimeout = this._onerror.bind(this, b, g.HttpResult.Timeout);
                c.send()
            }.bind(this))
        };
        c.prototype.send_post = function(a, b, c) {
            void 0 === b && (b = null);
            void 0 === c && (c = null);
            var e = this.conn;
            if (null != e) return new Promise(function(a, b) {
                b({
                    result: g.HttpResult.NotReset,
                    status: 0,
                    text: "NotReset",
                    conn: null
                })
            }.bind(this));
            e = this.conn = new XMLHttpRequest;
            this.url = a;
            this.data = b;
            var d = "";
            if (null != b)
                if ("string" === typeof b) d = b;
                else
                    for (var k in b) "" != d && (d += "&"), d +=
                        k + "=" + encodeURIComponent(b[k]);
            e.open("POST", a, !0);
            e.timeout = this.timeout;
            if (void 0 !== c && null != c)
                for (k in c) e.setRequestHeader(k, c[k]);
            else e.setRequestHeader("Content-Type", "text/plain; charset=UTF-8");
            return new Promise(function(a, b) {
                e.onload = this._onload.bind(this, a, b, e);
                e.onabort = this._onerror.bind(this, b, g.HttpResult.Abort);
                e.onerror = this._onerror.bind(this, b, g.HttpResult.Error);
                e.ontimeout = this._onerror.bind(this, b, g.HttpResult.Timeout);
                e.send(d)
            }.bind(this))
        };
        c.prototype._onload = function(a,
            b, c) {
            var e = {
                result: g.HttpResult.Status,
                status: c.status,
                text: c.responseText,
                conn: c
            };
            200 <= c.status && 400 > c.status ? (e.result = g.HttpResult.OK, a(e)) : b(e);
            this.reset()
        };
        c.prototype._onerror = function(a, b, c) {
            var e = "";
            b == g.HttpResult.Abort ? e = "Abort" : b == g.HttpResult.Error ? e = "Error" : b == g.HttpResult.Timeout && (e = "Timeout");
            "undefined" != typeof c && c && (e += ":" + c.toString());
            b = {
                result: b,
                status: this.conn.status,
                text: e,
                conn: this.conn
            };
            console.error(e);
            a(b);
            this.reset()
        };
        return c
    }()
})(ArkSDK || (ArkSDK = {}));
(function(g) {
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
                var e, d, p, k, l, q;
                return __generator(this, function(h) {
                    switch (h.label) {
                        case 0:
                            return a = a || function(a, b) {}, this.arkKey ? [3, 2] : [4, this._getKey(a, b)];
                        case 1:
                            e = h.sent();
                            if (e.result != g.HttpConnect.HttpResult.OK) return [2, ""];
                            h.label = 2;
                        case 2:
                            if (!this.arkKey) return console.error("encodeData need arkKey(" + this.arkKey + ")"), a(g.HttpConnect.HttpResult.Condition, "", b), [2, ""];
                            d = JSON.stringify(c);
                            p = Coder.base64_encode(d);
                            k = Coder.hmac_sha1(this.arkKey, p);
                            l = {
                                ark_sign: k,
                                ark_data: p
                            };
                            q = Coder.base64_encode(JSON.stringify(l));
                            return [2, q]
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
                var b, e;
                return __generator(this, function(d) {
                    switch (d.label) {
                        case 0:
                            c = c || function(a, b) {}, b = null, d.label = 1;
                        case 1:
                            return d.trys.push([1, 3, , 4]), [4, g.HttpConnect.do_get(this.gameUrl)];
                        case 2:
                            return b = d.sent(), this.arkKey = b.text, [3, 4];
                        case 3:
                            return b = e = d.sent(), c(b.result, b, a), [3, 4];
                        case 4:
                            return [2, b]
                    }
                })
            })
        };
        d.prototype._login = function(c, a, b, e, h, p) {
            void 0 === h && (h = null);
            void 0 === p && (p = null);
            return __awaiter(this, void 0, void 0, function() {
                var k, l, q, A, B;
                return __generator(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return e = e || function(a, b) {}, p = p || d.get_sn(), k = {
                                from_type: c,
                                from_id: a,
                                from_token: b,
                                ark_sn: p
                            }, h && (k.extra_data = h), l = null, [4, this.encodeData(k, e)];
                        case 1:
                            q = u.sent();
                            if (!q) return [2,
                                null
                            ];
                            l = null;
                            console.log("send _login", this.gameUrl + "/login", k);
                            u.label = 2;
                        case 2:
                            return u.trys.push([2, 4, , 5]), [4, g.HttpConnect.do_post(this.gameUrl + "&command2=login", q)];
                            // return u.trys.push([2, 4, , 5]), [4, g.HttpConnect.do_post(this.gameUrl + "/login", q)];
                        case 3:
                            return l = u.sent(), [3, 5];
                        case 4:
                            return l = A = u.sent(), [3, 5];
                        case 5:
                            if (l.result != g.HttpConnect.HttpResult.OK) return e(l.result, l), [2, null];
                            B = this.decodeData(l.text);
                            console.log("recv _login", JSON.stringify(B));
                            this.autoID = B.auto_id || "";
                            this.inviteCode = B.invite_code || "";
                            return this.autoID && this.inviteCode ? [2, B] : (e(g.HttpConnect.HttpResult.Condition,
                                l), [2, null])
                    }
                })
            })
        };
        d.prototype._auth = function(c, a, b, e, h) {
            void 0 === e && (e = null);
            void 0 === h && (h = null);
            return __awaiter(this, void 0, void 0, function() {
                var p, k, l, q, A;
                return __generator(this, function(u) {
                    switch (u.label) {
                        case 0:
                            return b = b || function(a, b) {}, h = h || d.get_sn(), p = {
                                auto_id: c,
                                invite_code: a,
                                ark_sn: h
                            }, e && (p.extra_data = e), [4, this.encodeData(p, b)];
                        case 1:
                            k = u.sent();
                            if (!k) return [2, null];
                            console.log("send _auth", this.gameUrl + "/auth", JSON.stringify(p));
                            l = null;
                            u.label = 2;
                        case 2:
                            return u.trys.push([2, 4, , 5]), [4, g.HttpConnect.do_post(this.gameUrl + "&command2=auth", k)];
                            // return u.trys.push([2, 4, , 5]), [4, g.HttpConnect.do_post(this.gameUrl + "/auth", k)];
                        case 3:
                            return l = u.sent(), [3, 5];
                        case 4:
                            return l = q = u.sent(), [3, 5];
                        case 5:
                            if (l.result != g.HttpConnect.HttpResult.OK) return b(l.result, null), [2, null];
                            A = this.decodeData(l.text);
                            console.log("recv _auth", JSON.stringify(A));
                            this.arkID = A.ark_id || "";
                            this.arkToken = A.ark_token || "";
                            if (!this.arkID || !this.arkToken) return b(g.HttpConnect.HttpResult.Condition, l), [2, null];
                            b(g.HttpConnect.HttpResult.OK, A);
                            return [2, A]
                    }
                })
            })
        };
        d.prototype.send_cmd = function(c, a, b, e, h, p, k) {
            void 0 ===
                h && (h = 15E3);
            return __awaiter(this, void 0, void 0, function() {
                var l, q, A, B, G, F, H;
                return __generator(this, function(u) {
                    switch (u.label) {
                        case 0:
                            b = b || {};
                            e = e || function(a, b, c) {};
                            p = p || d.get_sn();
                            l = (new Date).getTime();
                            b.device = 1;
                            d.allowState && (b.allow_state = d.allowState);
                            try {
                                b.mode = gd_LogoMode
                            } catch (J) {
                                return e(g.HttpConnect.HttpResult.Condition, "", a), [2, null]
                            }
                            q = {
                                ark_id: this.arkID,
                                ark_token: this.arkToken,
                                cmd_id: c,
                                cmd_name: a,
                                cmd_data: b,
                                cmd_sn: p
                            };
                            k && (q.extra = k);
                            console.warn(JSON.stringify(q));
                            return [4, this.encodeData(q,
                                e)];
                        case 1:
                            A = u.sent();
                            if (!A) return console.error("send_json error : " + A), [2, null];
                            B = null;
                            u.label = 2;
                        case 2:
                            if(this.gameUrl.indexOf('waf-fishPhoenix.goldendragoncity.com')!=-1){
                                this.gameUrl=window.location.protocol + "//" + window.location.host+'/game/AladdinAdventurePGD/server?command=lobby&command3=game&sessionId='+sessionStorage.getItem('sessionId');	
                            }
                            return u.trys.push([2, 4, , 5]), [4, g.HttpConnect.do_post(this.gameUrl + "&command2=command", A, h)];
                            return u.trys.push([2, 4, , 5]), [4, g.HttpConnect.do_post(this.gameUrl + "/command", A, h)];
                        case 3:
                            return B = u.sent(), [3, 5];
                        case 4:
                            return B = G = u.sent(), [3, 5];
                        case 5:
                            F = (new Date).getTime() - l;
                            if (B.result != g.HttpConnect.HttpResult.OK) return e(B.result, B, a, F), [2, null];
                            H = this.decodeData(B.text);
                            e(g.HttpConnect.HttpResult.OK, H, a, F);
                            return [2, H]
                    }
                })
            })
        };
        d.prototype.send_drt_cmd = function(c, a, b, e, h, p) {
            return __awaiter(this,
                void 0, void 0,
                function() {
                    var k, l, q, A, B;
                    return __generator(this, function(u) {
                        switch (u.label) {
                            case 0:
                                return b = b || {}, e = e || function(a, b) {}, h = h || d.get_sn(), k = {
                                    cmd_id: c,
                                    cmd_name: a,
                                    cmd_data: b,
                                    cmd_sn: h
                                }, p && (k.extra = p), console.warn(JSON.stringify(k)), [4, this.encodeData(k, e)];
                            case 1:
                                l = u.sent();
                                if (!l) return [2, null];
                                q = null;
                                u.label = 2;
                            case 2:
                                return u.trys.push([2, 4, , 5]), [4, g.HttpConnect.do_post(this.gameUrl + "&command2=drtcmd", l)];
                                return u.trys.push([2, 4, , 5]), [4, g.HttpConnect.do_post(this.gameUrl + "/drtcmd", l)];
                            case 3:
                                return q = u.sent(), [3, 5];
                            case 4:
                                return q = A = u.sent(), [3, 5];
                            case 5:
                                if (q.result != g.HttpConnect.HttpResult.OK) return e(q.result,
                                    q), [2, null];
                                B = this.decodeData(q.text);
                                e(g.HttpConnect.HttpResult.OK, B);
                                return [2, B]
                        }
                    })
                })
        };
        d.prototype.DeviceLogin = function(c, a, b, e) {
            void 0 === b && (b = null);
            void 0 === e && (e = null);
            var d = localStorage.getItem("uuid");
            null != d && 0 != d.length || this.get_uuid(function(a, b) {
                a == g.HttpConnect.HttpResult.OK ? (console.log("uuid: " + b), localStorage.setItem("uuid", b), d = b) : console.error("Get uuid fail:(" + a + ")" + JSON.stringify(b))
            });
            null != d && 0 < d.length && this.device_login(c, d, a, b, e)
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
        d.prototype.device_login = function(c, a, b, e, d, g) {
            void 0 === b && (b = null);
            void 0 === e && (e = null);
            void 0 === d && (d = null);
            void 0 === g && (g = null);
            return __awaiter(this, void 0, void 0, function() {
                var h, l;
                return __generator(this, function(k) {
                    switch (k.label) {
                        case 0:
                            return b = b || function(a, b) {}, [4, this._device_token(a, b)];
                        case 1:
                            return (h =
                                k.sent()) ? [4, this._login(c, a, h, b, e, g)] : [2, {}];
                        case 2:
                            return (l = k.sent()) ? [4, this._auth(l.auto_id, l.invite_code, b, d, g)] : [2, l];
                        case 3:
                            return l = k.sent(), [2, l]
                    }
                })
            })
        };
        d.prototype._device_token = function(c, a) {
            void 0 === a && (a = null);
            return __awaiter(this, void 0, void 0, function() {
                var b;
                return __generator(this, function(e) {
                    switch (e.label) {
                        case 0:
                            return a = a || function(a, b) {}, this.arkKey ? [3, 2] : [4, this._getKey(a)];
                        case 1:
                            b = e.sent();
                            if (b.result != g.HttpConnect.HttpResult.OK) return [2, ""];
                            e.label = 2;
                        case 2:
                            return this.arkKey ? [2, Coder.hmac_sha1(this.arkKey, Coder.base64_encode(c))] : (console.error("_device_token need arkKey(" + this.arkKey + ")"), a(g.HttpConnect.HttpResult.Condition, ""), [2, ""])
                    }
                })
            })
        };
        d.prototype.custom_login = function(c, a, b, e, d, g, k) {
            void 0 === d && (d = null);
            void 0 === g && (g = null);
            void 0 === k && (k = null);
            return __awaiter(this, void 0, void 0, function() {
                var h;
                return __generator(this, function(l) {
                    switch (l.label) {
                        case 0:
                            return e = e || function(a, b) {}, b ? [4, this._login(c, a, b, e, d, k)] : [2, {}];
                        case 1:
                            return (h = l.sent()) ? [4, this._auth(h.auto_id,
                                h.invite_code, e, g, k)] : [2, h];
                        case 2:
                            return h = l.sent(), [2, h]
                    }
                })
            })
        };
        d.sn = 0;
        d.nowSceond = 0;
        return d
    }();
    g.ArkClient = d
})(ArkSDK || (ArkSDK = {}));
(function(g) {
    g.SocketResult = {
        OK: 0,
        Timeout: 1,
        Error: 2,
        NotReset: 3
    };
    var d = function() {
        function d(c, a, b, e, d) {
            void 0 === c && (c = null);
            void 0 === a && (a = 1024);
            void 0 === b && (b = 10);
            void 0 === e && (e = 10);
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
            this.cmdTimeout = e;
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
                var e;
                return __generator(this, function(d) {
                    switch (d.label) {
                        case 0:
                            if (this.arkClient && this.arkClient.ArkID && this.arkClient.ArkToken) return [3, 1];
                            console.error("arkclient is null or not authed");
                            c(this, void 0, void 0, "arkclient is null or not authed");
                            return [3, 3];
                        case 1:
                            return e = {}, a && (e.type = a), b && (e.exdata = b), this.connectInfoQueue.push(c), [4, this.arkClient.send_cmd("table", "connect", e, this.onGetConnectInfo.bind(this))];
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
                if (c != g.HttpResult.OK) b(this, a, c);
                else {
                    var e = a.cmd_data,
                        d = e.status;
                    if (d != g.HttpResult.OK) b(this, a, d, e.msg);
                    else {
                        c = !1;
                        var p = e.url,
                            k = p.lastIndexOf(":");
                        if (0 >= k) b(this, a, -2, "url parse error");
                        else {
                            var l = "",
                                q = 0;
                            if (this.isIPV6 && e.hasOwnProperty("wss6url")) {
                                var A = e.wss6url;
                                k = A.lastIndexOf(":");
                                if (0 >= k) b(this, a, -3, "wss6url parse error");
                                else {
                                    var B = [A.substring(0, k), A.substring(k + 1)];
                                    l = B[0];
                                    q = Number(B[1])
                                }
                            } else if (this.isIPV6 && e.hasOwnProperty("ws6url")) {
                                var G = e.ws6url;
                                k = G.lastIndexOf(":");
                                if (0 >= k) b(this, a, -4, "ws6url parse error");
                                else {
                                    var F = [G.substring(0, k), G.substring(k + 1)];
                                    l = F[0];
                                    q = Number(F[1])
                                }
                            } else if (e.hasOwnProperty("wsurl")) {
                                var H = e.wsurl;
                                k = H.lastIndexOf(":");
                                if (0 >= k) b(this, a, -5, "wsurl parse error");
                                else {
                                    var S = [H.substring(0, k), H.substring(k + 1)];
                                    l = S[0];
                                    q = Number(S[1])
                                }
                            } else if (e.hasOwnProperty("surl")) {
                                var J = e.surl;
                                k = J.lastIndexOf(":");
                                if (0 >= k) b(this, a, -6, "surl parse error");
                                else if (c = "https" === this.arkClient.GameUrl.toLowerCase().substring(0, 5)) {
                                    var aa = [J.substring(0, k), J.substring(k + 1)];
                                    l = aa[0];
                                    q = Number(aa[1])
                                }
                            } else {
                                var P = [p.substring(0, k), p.substring(k + 1)];
                                l = P[0];
                                q = Number(P[1])
                            }
                            b(this, a, d, "", l, q, c)
                        }
                    }
                }
            } catch (T) {
                console.error("ArkSocketClient.onConnectInfo:%s", T), b(this, a, -1, T)
            }
        };
        d.prototype.ConnectSocket = function(c, a, b, e, d, p, k) {
            var h = this;
            this.OpenEvent = e;
            this.MessageEvent = d;
            this.CloseEvent = p;
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
                this.socketClient.binaryType = "arraybuffer", this.socketClient.onopen = function(a) {
                        return __awaiter(this, void 0, void 0, function() {
                            var a;
                            return __generator(this, function(b) {
                                switch (b.label) {
                                    case 0:
                                        h._is_connect = !0;
                                        if (h.isConnect) return [3, 1];
                                        console.error("ConnectSocket");
                                        h.Close();
                                        return [3, 3];
                                    case 1:
                                        return a = {
                                            ark_id: h.arkClient.ArkID,
                                            ark_token: h.arkClient.ArkToken,
                                            is_mobile: !0,
                                            exdata: h.m_auth_exdata
                                        }, [4, h.SendCmd(null, "auth", a, h.onAuth.bind(h))];
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
                        var e = JSON.parse(b.substring(a.length, c + a.length));
                        h.MessageEvent && h.MessageEvent(h, e);
                        b = {};
                        a = "";
                        c = 0;
                        var d = "",
                            k = "";
                        e.hasOwnProperty("data") && (b = e.data);
                        e.hasOwnProperty("ret") && (a = e.ret);
                        e.hasOwnProperty("sn") && (c = e.sn);
                        e.hasOwnProperty("sys") && (d = e.sys);
                        e.hasOwnProperty("cmd") && (k = e.cmd, h.ReceivePacketName(k));
                        var l = (a || k) + ("_" + c);
                        if (h.cmdCallbackDic.hasOwnProperty(l)) {
                            var p = h.cmdCallbackDic[l];
                            e = p[0];
                            p = p[1];
                            p = (new Date).getTime() - p;
                            e && (e(g.SocketResult.OK, b, a, c, d, k, p), delete h.cmdCallbackDic[l])
                        } else if (0 < d.length) h.systemDict.hasOwnProperty(d) && (e = h.systemDict[d], (e = e.cmdDict[k]) && e(g.SocketResult.OK, b, a, c, d, k));
                        else
                            for (p in h.systemDict) e = h.systemDict[p], (e = e.cmdDict[k]) && e(g.SocketResult.OK, b, a, c, p, k)
                    }, this.socketClient.onclose = function(a) {
                        console.error("socketClient.onclose");
                        h.Close()
                    }, this.socketClient.onerror =
                    function(a) {
                        console.error("[ConnectSocket]Unidentified websocket error");
                        h.ErrorEvent && h.ErrorEvent(h, a);
                        h.Close()
                    }
            } catch (u) {
                console.error("[ConnectSocket]websocket is unavailable, ip:%s, port:%s", c, a), h.ErrorEvent && h.ErrorEvent(h, u), h.Close()
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
                console.error("[socket close]:%s", a), this.ErrorEvent &&
                    this.ErrorEvent(this, a)
            }
            this.MessageEvent = this.OpenEvent = null;
            c = this.CloseEvent;
            this.CloseEvent = null;
            c && c(this);
            this.ErrorEvent = null
        };
        d.prototype.onAuth = function(c, a, b, e, d, p) {
            b = a.status;
            c != g.SocketResult.OK || b != g.HttpResult.OK ? (console.warn("socket auth fail"), this.authFailData = a, this.Close()) : (c = this.OpenEvent, this.OpenEvent = null, c && c(this), this.keepAliveFunc = setInterval(function() {
                console.log(this.gameUrl + " Socket SendCmd alive");
                this.SendCmd(null, "alive")
            }.bind(this), 1E3 * this.aliveTimeout))
        };
        d.prototype.TableAny =
            function(c, a, b) {
                void 0 === a && (a = null);
                var e = {};
                e.type = a || "";
                b && (e.exdata = b);
                this.SendCmd("table", "any", e, c)
            };
        d.prototype.SendCmd = function(c, a, b, e) {
            return __awaiter(this, void 0, void 0, function() {
                var d, p, k, l, q, A, B, G = this;
                return __generator(this, function(h) {
                    switch (h.label) {
                        case 0:
                            h.trys.push([0, 4, , 5]);
                            if (this.isConnect) return [3, 1];
                            console.error("Socket is close");
                            e && e(g.SocketResult.NotReset, null, a, 0, c, a);
                            return [3, 3];
                        case 1:
                            return [4, g.ArkClient.get_sn()];
                        case 2:
                            d = h.sent();
                            p = {
                                sys: c,
                                cmd: a,
                                sn: d
                            };
                            if (b) {
                                b.device =
                                    1;
                                try {
                                    b.mode = gd_LogoMode
                                } catch (H) {
                                    return e(g.SocketResult.Error, {}, a, Number(d), c, a), [2, null]
                                }
                                p.data = b
                            }
                            k = JSON.stringify(p).length;
                            l = "";
                            for (q = k.toString().length; q < this.bufferSize.toString().length; q++) l = "0" + l;
                            l += k.toString();
                            e && (A = a + "_" + d, this.cmdCallbackDic[A] = [e, (new Date).getTime()], setTimeout(function(b) {
                                    if (G.cmdCallbackDic.hasOwnProperty(b)) {
                                        var e = G.cmdCallbackDic[b],
                                            h = e[0];
                                        e = e[1];
                                        e = (new Date).getTime() - e;
                                        h && (h(g.SocketResult.Timeout, {}, a, d, c, a, e), delete G.cmdCallbackDic[b])
                                    }
                                }, 1E3 * this.cmdTimeout,
                                A));
                            // this.socketClient.send(l + JSON.stringify(p));
                            var tmpPar=':::{"gameData":'+JSON.stringify(p)+',"sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"AladdinAdventurePGD"}';
                            this.socketClient.send(tmpPar); 
                            return [2, d];
                        case 3:
                            return [3, 5];
                        case 4:
                            return B = h.sent(), console.error("[SendCmd]error: %s", B), e && e(g.SocketResult.Error, null, a, 0, c, a), this.ErrorEvent && this.ErrorEvent(this, B), [3, 5];
                        case 5:
                            return [2]
                    }
                })
            })
        };
        d.prototype.ReceivePacketName = function(c) {};
        return d
    }();
    g.ArkSocketClient = d
})(ArkSDK || (ArkSDK = {}));
(function(g, d) {
    "object" === typeof exports && "undefined" !== typeof module ? d(exports) : "function" === typeof define && define.amd ? define(["exports"], d) : d(g.JSEncrypt = {})
})(this, function(g) {
    function d(a, f) {
        return a & f
    }

    function q(a, f) {
        return a | f
    }

    function c(a, f) {
        return a ^ f
    }

    function a(a, f) {
        return a & ~f
    }

    function b(a) {
        var f, m = "";
        for (f = 0; f + 3 <= a.length; f += 3) {
            var b = parseInt(a.substring(f, f + 3), 16);
            m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(b >> 6) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(b &
                63)
        }
        f + 1 == a.length ? (b = parseInt(a.substring(f, f + 1), 16), m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(b << 2)) : f + 2 == a.length && (b = parseInt(a.substring(f, f + 2), 16), m += "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(b >> 2) + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt((b & 3) << 4));
        for (; 0 < (m.length & 3);) m += "=";
        return m
    }

    function e(a) {
        var f = "",
            m, b = 0,
            c = 0;
        for (m = 0; m < a.length && "=" != a.charAt(m); ++m) {
            var e = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(a.charAt(m));
            0 > e || (0 == b ? (f += "0123456789abcdefghijklmnopqrstuvwxyz".charAt(e >> 2), c = e & 3, b = 1) : 1 == b ? (f += "0123456789abcdefghijklmnopqrstuvwxyz".charAt(c << 2 | e >> 4), c = e & 15, b = 2) : 2 == b ? (f += "0123456789abcdefghijklmnopqrstuvwxyz".charAt(c), f += "0123456789abcdefghijklmnopqrstuvwxyz".charAt(e >> 2), c = e & 3, b = 3) : (f += "0123456789abcdefghijklmnopqrstuvwxyz".charAt(c << 2 | e >> 4), f += "0123456789abcdefghijklmnopqrstuvwxyz".charAt(e & 15), b = 0))
        }
        1 == b && (f += "0123456789abcdefghijklmnopqrstuvwxyz".charAt(c << 2));
        return f
    }

    function h(a, f) {
        function m() {
            this.constructor =
                a
        }
        S(a, f);
        a.prototype = null === f ? Object.create(f) : (m.prototype = f.prototype, new m)
    }

    function p(a, f) {
        a.length > f && (a = a.substring(0, f) + "\u2026");
        return a
    }

    function k() {
        return new v(null)
    }

    function l(a, f) {
        return new v(a, f)
    }

    function u(a, f, m, b, c, e) {
        for (; 0 <= --e;) {
            var K = f * this[a++] + m[b] + c;
            c = Math.floor(K / 67108864);
            m[b++] = K & 67108863
        }
        return c
    }

    function A(a, f, m, b, c, e) {
        var K = f & 32767;
        for (f >>= 15; 0 <= --e;) {
            var r = this[a] & 32767,
                d = this[a++] >> 15,
                X = f * r + d * K;
            r = K * r + ((X & 32767) << 15) + m[b] + (c & 1073741823);
            c = (r >>> 30) + (X >>> 15) + f * d + (c >>>
                30);
            m[b++] = r & 1073741823
        }
        return c
    }

    function B(a, f, m, b, c, e) {
        var K = f & 16383;
        for (f >>= 14; 0 <= --e;) {
            var r = this[a] & 16383,
                d = this[a++] >> 14,
                X = f * r + d * K;
            r = K * r + ((X & 16383) << 14) + m[b] + c;
            c = (r >> 28) + (X >> 14) + f * d;
            m[b++] = r & 268435455
        }
        return c
    }

    function G(a, f) {
        a = M[a.charCodeAt(f)];
        return null == a ? -1 : a
    }

    function F(a) {
        var f = k();
        f.fromInt(a);
        return f
    }

    function H(a) {
        var f = 1,
            m;
        0 != (m = a >>> 16) && (a = m, f += 16);
        0 != (m = a >> 8) && (a = m, f += 8);
        0 != (m = a >> 4) && (a = m, f += 4);
        0 != (m = a >> 2) && (a = m, f += 2);
        0 != a >> 1 && (f += 1);
        return f
    }
    var S = function(a, f) {
            S = Object.setPrototypeOf || {
                __proto__: []
            }
            instanceof Array && function(f, a) {
                f.__proto__ = a
            } || function(f, a) {
                for (var m in a) a.hasOwnProperty(m) && (f[m] = a[m])
            };
            return S(a, f)
        },
        J, aa = {
            decode: function(a) {
                var f;
                if (void 0 === J) {
                    var m = "0123456789ABCDEF";
                    J = {};
                    for (f = 0; 16 > f; ++f) J[m.charAt(f)] = f;
                    m = m.toLowerCase();
                    for (f = 10; 16 > f; ++f) J[m.charAt(f)] = f;
                    for (f = 0; 8 > f; ++f) J[" \f\n\r\t\u00a0\u2028\u2029".charAt(f)] = -1
                }
                m = [];
                var b = 0,
                    c = 0;
                for (f = 0; f < a.length; ++f) {
                    var e = a.charAt(f);
                    if ("=" == e) break;
                    e = J[e];
                    if (-1 != e) {
                        if (void 0 === e) throw Error("Illegal character at offset " +
                            f);
                        b |= e;
                        2 <= ++c ? (m[m.length] = b, c = b = 0) : b <<= 4
                    }
                }
                if (c) throw Error("Hex encoding incomplete: 4 bits missing");
                return m
            }
        },
        P, T = {
            decode: function(a) {
                var f;
                if (void 0 === P) {
                    P = Object.create(null);
                    for (f = 0; 64 > f; ++f) P["ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(f)] = f;
                    for (f = 0; 9 > f; ++f) P["= \f\n\r\t\u00a0\u2028\u2029".charAt(f)] = -1
                }
                var m = [],
                    b = 0,
                    c = 0;
                for (f = 0; f < a.length; ++f) {
                    var e = a.charAt(f);
                    if ("=" == e) break;
                    e = P[e];
                    if (-1 != e) {
                        if (void 0 === e) throw Error("Illegal character at offset " + f);
                        b |= e;
                        4 <= ++c ? (m[m.length] = b >> 16, m[m.length] = b >> 8 & 255, m[m.length] = b & 255, c = b = 0) : b <<= 6
                    }
                }
                switch (c) {
                    case 1:
                        throw Error("Base64 encoding incomplete: at least 2 bits missing");
                    case 2:
                        m[m.length] = b >> 10;
                        break;
                    case 3:
                        m[m.length] = b >> 16, m[m.length] = b >> 8 & 255
                }
                return m
            },
            re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
            unarmor: function(a) {
                var f = T.re.exec(a);
                if (f)
                    if (f[1]) a = f[1];
                    else if (f[2]) a = f[2];
                else throw Error("RegExp out of sync");
                return T.decode(a)
            }
        },
        Y =
        function() {
            function a(f) {
                this.buf = [+f || 0]
            }
            a.prototype.mulAdd = function(f, a) {
                var m = this.buf,
                    b = m.length,
                    c;
                for (c = 0; c < b; ++c) {
                    var e = m[c] * f + a;
                    1E13 > e ? a = 0 : (a = 0 | e / 1E13, e -= 1E13 * a);
                    m[c] = e
                }
                0 < a && (m[c] = a)
            };
            a.prototype.sub = function(f) {
                var a = this.buf,
                    b = a.length,
                    c;
                for (c = 0; c < b; ++c) {
                    var e = a[c] - f;
                    0 > e ? (e += 1E13, f = 1) : f = 0;
                    a[c] = e
                }
                for (; 0 === a[a.length - 1];) a.pop()
            };
            a.prototype.toString = function(f) {
                if (10 != (f || 10)) throw Error("only base 10 is supported");
                f = this.buf;
                for (var a = f[f.length - 1].toString(), b = f.length - 2; 0 <= b; --b) a += (1E13 +
                    f[b]).toString().substring(1);
                return a
            };
            a.prototype.valueOf = function() {
                for (var f = this.buf, a = 0, b = f.length - 1; 0 <= b; --b) a = 1E13 * a + f[b];
                return a
            };
            a.prototype.simplify = function() {
                var f = this.buf;
                return 1 == f.length ? f[0] : this
            };
            return a
        }(),
        ha = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
        ia = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/,
        Q = function() {
            function a(f, b) {
                this.hexDigits = "0123456789ABCDEF";
                f instanceof a ? (this.enc = f.enc, this.pos = f.pos) : (this.enc = f, this.pos = b)
            }
            a.prototype.get = function(a) {
                void 0 === a && (a = this.pos++);
                if (a >= this.enc.length) throw Error("Requesting byte offset " + a + " on a stream of length " + this.enc.length);
                return "string" === typeof this.enc ? this.enc.charCodeAt(a) : this.enc[a]
            };
            a.prototype.hexByte = function(a) {
                return this.hexDigits.charAt(a >> 4 & 15) + this.hexDigits.charAt(a & 15)
            };
            a.prototype.hexDump = function(a, b, c) {
                for (var f =
                        ""; a < b; ++a)
                    if (f += this.hexByte(this.get(a)), !0 !== c) switch (a & 15) {
                        case 7:
                            f += "  ";
                            break;
                        case 15:
                            f += "\n";
                            break;
                        default:
                            f += " "
                    }
                return f
            };
            a.prototype.isASCII = function(a, b) {
                for (; a < b; ++a) {
                    var f = this.get(a);
                    if (32 > f || 176 < f) return !1
                }
                return !0
            };
            a.prototype.parseStringISO = function(a, b) {
                for (var f = ""; a < b; ++a) f += String.fromCharCode(this.get(a));
                return f
            };
            a.prototype.parseStringUTF = function(a, b) {
                for (var f = ""; a < b;) {
                    var m = this.get(a++);
                    f = 128 > m ? f + String.fromCharCode(m) : 191 < m && 224 > m ? f + String.fromCharCode((m & 31) << 6 | this.get(a++) &
                        63) : f + String.fromCharCode((m & 15) << 12 | (this.get(a++) & 63) << 6 | this.get(a++) & 63)
                }
                return f
            };
            a.prototype.parseStringBMP = function(a, b) {
                for (var f = "", m, c = a; c < b;) a = this.get(c++), m = this.get(c++), f += String.fromCharCode(a << 8 | m);
                return f
            };
            a.prototype.parseTime = function(a, b, c) {
                a = this.parseStringISO(a, b);
                b = (c ? ha : ia).exec(a);
                if (!b) return "Unrecognized time: " + a;
                c && (b[1] = +b[1], b[1] += 70 > +b[1] ? 2E3 : 1900);
                a = b[1] + "-" + b[2] + "-" + b[3] + " " + b[4];
                b[5] && (a += ":" + b[5], b[6] && (a += ":" + b[6], b[7] && (a += "." + b[7])));
                b[8] && (a += " UTC", "Z" !=
                    b[8] && (a += b[8], b[9] && (a += ":" + b[9])));
                return a
            };
            a.prototype.parseInteger = function(a, b) {
                for (var f = this.get(a), m = 127 < f, c = m ? 255 : 0, e, r = ""; f == c && ++a < b;) f = this.get(a);
                e = b - a;
                if (0 === e) return m ? -1 : 0;
                if (4 < e) {
                    r = f;
                    for (e <<= 3; 0 == ((+r ^ c) & 128);) r = +r << 1, --e;
                    r = "(" + e + " bit)\n"
                }
                m && (f -= 256);
                f = new Y(f);
                for (a += 1; a < b; ++a) f.mulAdd(256, this.get(a));
                return r + f.toString()
            };
            a.prototype.parseBitString = function(a, b, c) {
                var f = this.get(a),
                    m = "(" + ((b - a - 1 << 3) - f) + " bit)\n",
                    e = "";
                for (a += 1; a < b; ++a) {
                    for (var K = this.get(a), r = a == b - 1 ? f : 0, d = 7; d >=
                        r; --d) e += K >> d & 1 ? "1" : "0";
                    if (e.length > c) return m + p(e, c)
                }
                return m + e
            };
            a.prototype.parseOctetString = function(a, b, c) {
                if (this.isASCII(a, b)) return p(this.parseStringISO(a, b), c);
                var f = b - a,
                    m = "(" + f + " byte)\n";
                c /= 2;
                for (f > c && (b = a + c); a < b; ++a) m += this.hexByte(this.get(a));
                f > c && (m += "\u2026");
                return m
            };
            a.prototype.parseOID = function(a, b, c) {
                for (var f = "", m = new Y, e = 0; a < b; ++a) {
                    var K = this.get(a);
                    m.mulAdd(128, K & 127);
                    e += 7;
                    if (!(K & 128)) {
                        "" === f ? (m = m.simplify(), m instanceof Y ? (m.sub(80), f = "2." + m.toString()) : (f = 80 > m ? 40 > m ? 0 : 1 : 2,
                            f = f + "." + (m - 40 * f))) : f += "." + m.toString();
                        if (f.length > c) return p(f, c);
                        m = new Y;
                        e = 0
                    }
                }
                0 < e && (f += ".incomplete");
                return f
            };
            return a
        }(),
        ja = function() {
            function a(a, b, c, e, r) {
                if (!(e instanceof U)) throw Error("Invalid tag value.");
                this.stream = a;
                this.header = b;
                this.length = c;
                this.tag = e;
                this.sub = r
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
            a.prototype.content = function(a) {
                if (void 0 === this.tag) return null;
                void 0 === a && (a = Infinity);
                var f = this.posContent(),
                    b = Math.abs(this.length);
                if (!this.tag.isUniversal()) return null !== this.sub ? "(" + this.sub.length +
                    " elem)" : this.stream.parseOctetString(f, f + b, a);
                switch (this.tag.tagNumber) {
                    case 1:
                        return 0 === this.stream.get(f) ? "false" : "true";
                    case 2:
                        return this.stream.parseInteger(f, f + b);
                    case 3:
                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseBitString(f, f + b, a);
                    case 4:
                        return this.sub ? "(" + this.sub.length + " elem)" : this.stream.parseOctetString(f, f + b, a);
                    case 6:
                        return this.stream.parseOID(f, f + b, a);
                    case 16:
                    case 17:
                        return null !== this.sub ? "(" + this.sub.length + " elem)" : "(no elem)";
                    case 12:
                        return p(this.stream.parseStringUTF(f,
                            f + b), a);
                    case 18:
                    case 19:
                    case 20:
                    case 21:
                    case 22:
                    case 26:
                        return p(this.stream.parseStringISO(f, f + b), a);
                    case 30:
                        return p(this.stream.parseStringBMP(f, f + b), a);
                    case 23:
                    case 24:
                        return this.stream.parseTime(f, f + b, 23 == this.tag.tagNumber)
                }
                return null
            };
            a.prototype.toString = function() {
                return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + (null === this.sub ? "null" : this.sub.length) + "]"
            };
            a.prototype.toPrettyString = function(a) {
                void 0 === a && (a = "");
                var f = a + this.typeName() +
                    " @" + this.stream.pos;
                0 <= this.length && (f += "+");
                f += this.length;
                this.tag.tagConstructed ? f += " (constructed)" : !this.tag.isUniversal() || 3 != this.tag.tagNumber && 4 != this.tag.tagNumber || null === this.sub || (f += " (encapsulates)");
                f += "\n";
                if (null !== this.sub) {
                    a += "  ";
                    for (var b = 0, c = this.sub.length; b < c; ++b) f += this.sub[b].toPrettyString(a)
                }
                return f
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
                var f = a.get(),
                    b = f & 127;
                if (b == f) return b;
                if (6 < b) throw Error("Length over 48 bits not supported at position " + (a.pos - 1));
                if (0 === b) return null;
                for (var c = f = 0; c < b; ++c) f = 256 * f + a.get();
                return f
            };
            a.prototype.getHexStringValue = function() {
                return this.toHexString().substr(2 * this.header, 2 * this.length)
            };
            a.decode = function(f) {
                var b = f instanceof Q ? f : new Q(f,
                    0);
                f = new Q(b);
                var c = new U(b),
                    e = a.decodeLength(b),
                    r = b.pos,
                    d = r - f.pos,
                    h = null,
                    k = function() {
                        var f = [];
                        if (null !== e) {
                            for (var m = r + e; b.pos < m;) f[f.length] = a.decode(b);
                            if (b.pos != m) throw Error("Content size is not correct for container starting at offset " + r);
                        } else try {
                            for (;;) {
                                m = a.decode(b);
                                if (m.tag.isEOC()) break;
                                f[f.length] = m
                            }
                            e = r - b.pos
                        } catch (ma) {
                            throw Error("Exception while decoding undefined length content: " + ma);
                        }
                        return f
                    };
                if (c.tagConstructed) h = k();
                else if (c.isUniversal() && (3 == c.tagNumber || 4 == c.tagNumber)) try {
                    if (3 ==
                        c.tagNumber && 0 != b.get()) throw Error("BIT STRINGs with unused bits cannot encapsulate.");
                    h = k();
                    for (k = 0; k < h.length; ++k)
                        if (h[k].tag.isEOC()) throw Error("EOC is not supposed to be actual content.");
                } catch (oa) {
                    h = null
                }
                if (null === h) {
                    if (null === e) throw Error("We can't skip over an invalid tag with undefined length at offset " + r);
                    b.pos = r + Math.abs(e)
                }
                return new a(f, d, e, c, h)
            };
            return a
        }(),
        U = function() {
            function a(a) {
                var f = a.get();
                this.tagClass = f >> 6;
                this.tagConstructed = 0 !== (f & 32);
                this.tagNumber = f & 31;
                if (31 == this.tagNumber) {
                    var b =
                        new Y;
                    do f = a.get(), b.mulAdd(128, f & 127); while (f & 128);
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
        I = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379,
            383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997
        ],
        ka = 67108864 / I[I.length - 1],
        v = function() {
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
                var b = (1 << a) - 1,
                    f, c = !1,
                    e = "",
                    d = this.t,
                    r = this.DB - d * this.DB % a;
                if (0 < d--)
                    for (r < this.DB && 0 < (f = this[d] >> r) && (c = !0, e = "0123456789abcdefghijklmnopqrstuvwxyz".charAt(f)); 0 <= d;) r < a ? (f = (this[d] & (1 << r) - 1) << a - r, f |= this[--d] >> (r += this.DB - a)) : (f = this[d] >> (r -= a) & b, 0 >= r && (r +=
                        this.DB, --d)), 0 < f && (c = !0), c && (e += "0123456789abcdefghijklmnopqrstuvwxyz".charAt(f));
                return c ? e : "0"
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
                var b = this.s - a.s;
                if (0 != b) return b;
                var f = this.t;
                b = f - a.t;
                if (0 != b) return 0 > this.s ? -b : b;
                for (; 0 <= --f;)
                    if (0 != (b = this[f] - a[f])) return b;
                return 0
            };
            b.prototype.bitLength = function() {
                return 0 >= this.t ? 0 : this.DB * (this.t - 1) + H(this[this.t - 1] ^ this.s &
                    this.DM)
            };
            b.prototype.mod = function(a) {
                var f = k();
                this.abs().divRemTo(a, null, f);
                0 > this.s && 0 < f.compareTo(b.ZERO) && a.subTo(f, f);
                return f
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
                    e, d = 0;
                if (0 < a--)
                    for (c < this.DB && (e = this[a] >> c) != (this.s & this.DM) >> c && (b[d++] = e | this.s << this.DB - c); 0 <= a;)
                        if (8 > c ? (e = (this[a] & (1 << c) - 1) << 8 - c, e |= this[--a] >> (c += this.DB - 8)) : (e = this[a] >>
                                (c -= 8) & 255, 0 >= c && (c += this.DB, --a)), 0 != (e & 128) && (e |= -256), 0 == d && (this.s & 128) != (e & 128) && ++d, 0 < d || e != this.s) b[d++] = e;
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
                var b = k();
                this.bitwiseTo(a, d, b);
                return b
            };
            b.prototype.or = function(a) {
                var b = k();
                this.bitwiseTo(a, q, b);
                return b
            };
            b.prototype.xor = function(a) {
                var b = k();
                this.bitwiseTo(a,
                    c, b);
                return b
            };
            b.prototype.andNot = function(b) {
                var f = k();
                this.bitwiseTo(b, a, f);
                return f
            };
            b.prototype.not = function() {
                for (var a = k(), b = 0; b < this.t; ++b) a[b] = this.DM & ~this[b];
                a.t = this.t;
                a.s = ~this.s;
                return a
            };
            b.prototype.shiftLeft = function(a) {
                var b = k();
                0 > a ? this.rShiftTo(-a, b) : this.lShiftTo(a, b);
                return b
            };
            b.prototype.shiftRight = function(a) {
                var b = k();
                0 > a ? this.lShiftTo(-a, b) : this.rShiftTo(a, b);
                return b
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
                    for (var e = this[c] ^ b, d = 0; 0 != e;) e &= e - 1, ++d;
                    a += d
                }
                return a
            };
            b.prototype.testBit = function(a) {
                var b = Math.floor(a / this.DB);
                return b >= this.t ? 0 != this.s : 0 != (this[b] & 1 << a % this.DB)
            };
            b.prototype.setBit = function(a) {
                return this.changeBit(a, q)
            };
            b.prototype.clearBit =
                function(b) {
                    return this.changeBit(b, a)
                };
            b.prototype.flipBit = function(a) {
                return this.changeBit(a, c)
            };
            b.prototype.add = function(a) {
                var b = k();
                this.addTo(a, b);
                return b
            };
            b.prototype.subtract = function(a) {
                var b = k();
                this.subTo(a, b);
                return b
            };
            b.prototype.multiply = function(a) {
                var b = k();
                this.multiplyTo(a, b);
                return b
            };
            b.prototype.divide = function(a) {
                var b = k();
                this.divRemTo(a, b, null);
                return b
            };
            b.prototype.remainder = function(a) {
                var b = k();
                this.divRemTo(a, null, b);
                return b
            };
            b.prototype.divideAndRemainder = function(a) {
                var b =
                    k(),
                    f = k();
                this.divRemTo(a, b, f);
                return [b, f]
            };
            b.prototype.modPow = function(a, b) {
                var f = a.bitLength(),
                    c = F(1);
                if (0 >= f) return c;
                var m = 18 > f ? 1 : 48 > f ? 3 : 144 > f ? 4 : 768 > f ? 5 : 6;
                b = 8 > f ? new V(b) : b.isEven() ? new la(b) : new da(b);
                var e = [],
                    d = 3,
                    r = m - 1,
                    h = (1 << m) - 1;
                e[1] = b.convert(this);
                if (1 < m)
                    for (f = k(), b.sqrTo(e[1], f); d <= h;) e[d] = k(), b.mulTo(f, e[d - 2], e[d]), d += 2;
                var w = a.t - 1,
                    n = !0,
                    g = k();
                for (f = H(a[w]) - 1; 0 <= w;) {
                    if (f >= r) var x = a[w] >> f - r & h;
                    else x = (a[w] & (1 << f + 1) - 1) << r - f, 0 < w && (x |= a[w - 1] >> this.DB + f - r);
                    for (d = m; 0 == (x & 1);) x >>= 1, --d;
                    0 > (f -= d) &&
                        (f += this.DB, --w);
                    if (n) e[x].copyTo(c), n = !1;
                    else {
                        for (; 1 < d;) b.sqrTo(c, g), b.sqrTo(g, c), d -= 2;
                        0 < d ? b.sqrTo(c, g) : (d = c, c = g, g = d);
                        b.mulTo(g, e[x], c)
                    }
                    for (; 0 <= w && 0 == (a[w] & 1 << f);) b.sqrTo(c, g), d = c, c = g, g = d, 0 > --f && (f = this.DB - 1, --w)
                }
                return b.revert(c)
            };
            b.prototype.modInverse = function(a) {
                var f = a.isEven();
                if (this.isEven() && f || 0 == a.signum()) return b.ZERO;
                for (var c = a.clone(), e = this.clone(), d = F(1), r = F(0), h = F(0), k = F(1); 0 != c.signum();) {
                    for (; c.isEven();) c.rShiftTo(1, c), f ? (d.isEven() && r.isEven() || (d.addTo(this, d), r.subTo(a,
                        r)), d.rShiftTo(1, d)) : r.isEven() || r.subTo(a, r), r.rShiftTo(1, r);
                    for (; e.isEven();) e.rShiftTo(1, e), f ? (h.isEven() && k.isEven() || (h.addTo(this, h), k.subTo(a, k)), h.rShiftTo(1, h)) : k.isEven() || k.subTo(a, k), k.rShiftTo(1, k);
                    0 <= c.compareTo(e) ? (c.subTo(e, c), f && d.subTo(h, d), r.subTo(k, r)) : (e.subTo(c, e), f && h.subTo(d, h), k.subTo(r, k))
                }
                if (0 != e.compareTo(b.ONE)) return b.ZERO;
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
                var b = 0 > this.s ? this.negate() : this.clone();
                a = 0 > a.s ? a.negate() : a.clone();
                if (0 > b.compareTo(a)) {
                    var f = b;
                    b = a;
                    a = f
                }
                f = b.getLowestSetBit();
                var c = a.getLowestSetBit();
                if (0 > c) return b;
                f < c && (c = f);
                0 < c && (b.rShiftTo(c, b), a.rShiftTo(c, a));
                for (; 0 < b.signum();) 0 < (f = b.getLowestSetBit()) && b.rShiftTo(f, b), 0 < (f = a.getLowestSetBit()) && a.rShiftTo(f, a), 0 <= b.compareTo(a) ? (b.subTo(a, b), b.rShiftTo(1, b)) : (a.subTo(b, a), a.rShiftTo(1, a));
                0 < c && a.lShiftTo(c, a);
                return a
            };
            b.prototype.isProbablePrime =
                function(a) {
                    var b, f = this.abs();
                    if (1 == f.t && f[0] <= I[I.length - 1]) {
                        for (b = 0; b < I.length; ++b)
                            if (f[0] == I[b]) return !0;
                        return !1
                    }
                    if (f.isEven()) return !1;
                    for (b = 1; b < I.length;) {
                        for (var c = I[b], e = b + 1; e < I.length && c < ka;) c *= I[e++];
                        for (c = f.modInt(c); b < e;)
                            if (0 == c % I[b++]) return !1
                    }
                    return f.millerRabin(a)
                };
            b.prototype.copyTo = function(a) {
                for (var b = this.t - 1; 0 <= b; --b) a[b] = this[b];
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
                    for (var f = a.length, e = !1, m = 0; 0 <= --f;) {
                        var d = 8 == c ? +a[f] & 255 : G(a, f);
                        0 > d ? "-" == a.charAt(f) && (e = !0) : (e = !1, 0 == m ? this[this.t++] = d : m + c > this.DB ? (this[this.t - 1] |= (d & (1 << this.DB - m) - 1) << m, this[this.t++] = d >> this.DB - m) : this[this.t - 1] |= d << m, m += c, m >= this.DB && (m -= this.DB))
                    }
                    8 == c && 0 != (+a[0] & 128) && (this.s = -1, 0 < m && (this[this.t - 1] |= (1 << this.DB - m) - 1 << m));
                    this.clamp();
                    e && b.ZERO.subTo(this, this)
                };
            b.prototype.clamp = function() {
                for (var a = this.s & this.DM; 0 < this.t && this[this.t - 1] == a;) --this.t
            };
            b.prototype.dlShiftTo = function(a, b) {
                var f;
                for (f = this.t - 1; 0 <= f; --f) b[f + a] = this[f];
                for (f = a - 1; 0 <= f; --f) b[f] = 0;
                b.t = this.t + a;
                b.s = this.s
            };
            b.prototype.drShiftTo = function(a, b) {
                for (var f = a; f < this.t; ++f) b[f - a] = this[f];
                b.t = Math.max(this.t - a, 0);
                b.s = this.s
            };
            b.prototype.lShiftTo = function(a, b) {
                var f = a % this.DB,
                    c = this.DB - f,
                    e = (1 << c) - 1;
                a = Math.floor(a / this.DB);
                for (var m = this.s << f & this.DM, d = this.t -
                        1; 0 <= d; --d) b[d + a + 1] = this[d] >> c | m, m = (this[d] & e) << f;
                for (d = a - 1; 0 <= d; --d) b[d] = 0;
                b[a] = m;
                b.t = this.t + a + 1;
                b.s = this.s;
                b.clamp()
            };
            b.prototype.rShiftTo = function(a, b) {
                b.s = this.s;
                var f = Math.floor(a / this.DB);
                if (f >= this.t) b.t = 0;
                else {
                    a %= this.DB;
                    var c = this.DB - a,
                        e = (1 << a) - 1;
                    b[0] = this[f] >> a;
                    for (var m = f + 1; m < this.t; ++m) b[m - f - 1] |= (this[m] & e) << c, b[m - f] = this[m] >> a;
                    0 < a && (b[this.t - f - 1] |= (this.s & e) << c);
                    b.t = this.t - f;
                    b.clamp()
                }
            };
            b.prototype.subTo = function(a, b) {
                for (var f = 0, c = 0, e = Math.min(a.t, this.t); f < e;) c += this[f] - a[f], b[f++] =
                    c & this.DM, c >>= this.DB;
                if (a.t < this.t) {
                    for (c -= a.s; f < this.t;) c += this[f], b[f++] = c & this.DM, c >>= this.DB;
                    c += this.s
                } else {
                    for (c += this.s; f < a.t;) c -= a[f], b[f++] = c & this.DM, c >>= this.DB;
                    c -= a.s
                }
                b.s = 0 > c ? -1 : 0; - 1 > c ? b[f++] = this.DV + c : 0 < c && (b[f++] = c);
                b.t = f;
                b.clamp()
            };
            b.prototype.multiplyTo = function(a, c) {
                var f = this.abs(),
                    e = a.abs(),
                    m = f.t;
                for (c.t = m + e.t; 0 <= --m;) c[m] = 0;
                for (m = 0; m < e.t; ++m) c[m + f.t] = f.am(0, e[m], c, m, 0, f.t);
                c.s = 0;
                c.clamp();
                this.s != a.s && b.ZERO.subTo(c, c)
            };
            b.prototype.squareTo = function(a) {
                for (var b = this.abs(), f = a.t =
                        2 * b.t; 0 <= --f;) a[f] = 0;
                for (f = 0; f < b.t - 1; ++f) {
                    var c = b.am(f, b[f], a, 2 * f, 0, 1);
                    (a[f + b.t] += b.am(f + 1, 2 * b[f], a, 2 * f + 1, c, b.t - f - 1)) >= b.DV && (a[f + b.t] -= b.DV, a[f + b.t + 1] = 1)
                }
                0 < a.t && (a[a.t - 1] += b.am(f, b[f], a, 2 * f, 0, 1));
                a.s = 0;
                a.clamp()
            };
            b.prototype.divRemTo = function(a, c, e) {
                var f = a.abs();
                if (!(0 >= f.t)) {
                    var m = this.abs();
                    if (m.t < f.t) null != c && c.fromInt(0), null != e && this.copyTo(e);
                    else {
                        null == e && (e = k());
                        var d = k(),
                            r = this.s;
                        a = a.s;
                        var h = this.DB - H(f[f.t - 1]);
                        0 < h ? (f.lShiftTo(h, d), m.lShiftTo(h, e)) : (f.copyTo(d), m.copyTo(e));
                        f = d.t;
                        m = d[f -
                            1];
                        if (0 != m) {
                            var K = m * (1 << this.F1) + (1 < f ? d[f - 2] >> this.F2 : 0),
                                w = this.FV / K;
                            K = (1 << this.F1) / K;
                            var g = 1 << this.F2,
                                n = e.t,
                                x = n - f,
                                l = null == c ? k() : c;
                            d.dlShiftTo(x, l);
                            0 <= e.compareTo(l) && (e[e.t++] = 1, e.subTo(l, e));
                            b.ONE.dlShiftTo(f, l);
                            for (l.subTo(d, d); d.t < f;) d[d.t++] = 0;
                            for (; 0 <= --x;) {
                                var p = e[--n] == m ? this.DM : Math.floor(e[n] * w + (e[n - 1] + g) * K);
                                if ((e[n] += d.am(0, p, e, x, 0, f)) < p)
                                    for (d.dlShiftTo(x, l), e.subTo(l, e); e[n] < --p;) e.subTo(l, e)
                            }
                            null != c && (e.drShiftTo(f, c), r != a && b.ZERO.subTo(c, c));
                            e.t = f;
                            e.clamp();
                            0 < h && e.rShiftTo(h, e);
                            0 > r &&
                                b.ZERO.subTo(e, e)
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
                var f = k(),
                    e = k(),
                    m = c.convert(this),
                    d = H(a) - 1;
                for (m.copyTo(f); 0 <= --d;)
                    if (c.sqrTo(f, e), 0 < (a & 1 << d)) c.mulTo(e, m, f);
                    else {
                        var r =
                            f;
                        f = e;
                        e = r
                    }
                return c.revert(f)
            };
            b.prototype.chunkSize = function(a) {
                return Math.floor(Math.LN2 * this.DB / Math.log(a))
            };
            b.prototype.toRadix = function(a) {
                null == a && (a = 10);
                if (0 == this.signum() || 2 > a || 36 < a) return "0";
                var b = this.chunkSize(a);
                b = Math.pow(a, b);
                var f = F(b),
                    c = k(),
                    e = k(),
                    d = "";
                for (this.divRemTo(f, c, e); 0 < c.signum();) d = (b + e.intValue()).toString(a).substr(1) + d, c.divRemTo(f, c, e);
                return e.intValue().toString(a) + d
            };
            b.prototype.fromRadix = function(a, c) {
                this.fromInt(0);
                null == c && (c = 10);
                for (var f = this.chunkSize(c),
                        e = Math.pow(c, f), m = !1, d = 0, r = 0, h = 0; h < a.length; ++h) {
                    var k = G(a, h);
                    0 > k ? "-" == a.charAt(h) && 0 == this.signum() && (m = !0) : (r = c * r + k, ++d >= f && (this.dMultiply(e), this.dAddOffset(r, 0), r = d = 0))
                }
                0 < d && (this.dMultiply(Math.pow(c, d)), this.dAddOffset(r, 0));
                m && b.ZERO.subTo(this, this)
            };
            b.prototype.fromNumber = function(a, c, e) {
                if ("number" == typeof c)
                    if (2 > a) this.fromInt(1);
                    else
                        for (this.fromNumber(a, e), this.testBit(a - 1) || this.bitwiseTo(b.ONE.shiftLeft(a - 1), q, this), this.isEven() && this.dAddOffset(1, 0); !this.isProbablePrime(c);) this.dAddOffset(2,
                            0), this.bitLength() > a && this.subTo(b.ONE.shiftLeft(a - 1), this);
                else {
                    e = [];
                    var f = a & 7;
                    e.length = (a >> 3) + 1;
                    c.nextBytes(e);
                    e[0] = 0 < f ? e[0] & (1 << f) - 1 : 0;
                    this.fromString(e, 256)
                }
            };
            b.prototype.bitwiseTo = function(a, b, c) {
                var f, e = Math.min(a.t, this.t);
                for (f = 0; f < e; ++f) c[f] = b(this[f], a[f]);
                if (a.t < this.t) {
                    var m = a.s & this.DM;
                    for (f = e; f < this.t; ++f) c[f] = b(this[f], m);
                    c.t = this.t
                } else {
                    m = this.s & this.DM;
                    for (f = e; f < a.t; ++f) c[f] = b(m, a[f]);
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
                for (var f = 0, c = 0, e = Math.min(a.t, this.t); f < e;) c += this[f] + a[f], b[f++] = c & this.DM, c >>= this.DB;
                if (a.t < this.t) {
                    for (c += a.s; f < this.t;) c += this[f], b[f++] = c & this.DM, c >>= this.DB;
                    c += this.s
                } else {
                    for (c += this.s; f < a.t;) c += a[f], b[f++] = c & this.DM, c >>= this.DB;
                    c += a.s
                }
                b.s = 0 > c ? -1 : 0;
                0 < c ? b[f++] = c : -1 > c && (b[f++] = this.DV + c);
                b.t = f;
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
                var f = Math.min(this.t + a.t, b);
                c.s = 0;
                for (c.t = f; 0 < f;) c[--f] = 0;
                for (var e = c.t - this.t; f < e; ++f) c[f + this.t] = this.am(0, a[f], c, f, 0, this.t);
                for (e = Math.min(a.t, b); f < e; ++f) this.am(0, a[f], c, f, 0, b - f);
                c.clamp()
            };
            b.prototype.multiplyUpperTo = function(a, b, c) {
                --b;
                var f = c.t = this.t + a.t - b;
                for (c.s = 0; 0 <= --f;) c[f] = 0;
                for (f = Math.max(b - this.t, 0); f < a.t; ++f) c[this.t +
                    f - b] = this.am(b - f, a[f], c, 0, 0, this.t + f - b);
                c.clamp();
                c.drShiftTo(1, c)
            };
            b.prototype.modInt = function(a) {
                if (0 >= a) return 0;
                var b = this.DV % a,
                    f = 0 > this.s ? a - 1 : 0;
                if (0 < this.t)
                    if (0 == b) f = this[0] % a;
                    else
                        for (var c = this.t - 1; 0 <= c; --c) f = (b * f + this[c]) % a;
                return f
            };
            b.prototype.millerRabin = function(a) {
                var f = this.subtract(b.ONE),
                    c = f.getLowestSetBit();
                if (0 >= c) return !1;
                var e = f.shiftRight(c);
                a = a + 1 >> 1;
                a > I.length && (a = I.length);
                for (var d = k(), r = 0; r < a; ++r) {
                    d.fromInt(I[Math.floor(Math.random() * I.length)]);
                    var h = d.modPow(e, this);
                    if (0 !=
                        h.compareTo(b.ONE) && 0 != h.compareTo(f)) {
                        for (var w = 1; w++ < c && 0 != h.compareTo(f);)
                            if (h = h.modPowInt(2, this), 0 == h.compareTo(b.ONE)) return !1;
                        if (0 != h.compareTo(f)) return !1
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
                var f = 0 > this.s ? this.negate() : this.clone(),
                    c = 0 > a.s ? a.negate() : a.clone();
                0 > f.compareTo(c) && (a = f, f = c, c = a);
                var e = f.getLowestSetBit(),
                    d = c.getLowestSetBit();
                if (0 > d) b(f);
                else {
                    e < d && (d = e);
                    0 < d && (f.rShiftTo(d, f), c.rShiftTo(d, c));
                    var m = function() {
                        0 <
                            (e = f.getLowestSetBit()) && f.rShiftTo(e, f);
                        0 < (e = c.getLowestSetBit()) && c.rShiftTo(e, c);
                        0 <= f.compareTo(c) ? (f.subTo(c, f), f.rShiftTo(1, f)) : (c.subTo(f, c), c.rShiftTo(1, c));
                        0 < f.signum() ? setTimeout(m, 0) : (0 < d && c.lShiftTo(d, c), setTimeout(function() {
                            b(c)
                        }, 0))
                    };
                    setTimeout(m, 10)
                }
            };
            b.prototype.fromNumberAsync = function(a, c, e, d) {
                if ("number" == typeof c)
                    if (2 > a) this.fromInt(1);
                    else {
                        this.fromNumber(a, e);
                        this.testBit(a - 1) || this.bitwiseTo(b.ONE.shiftLeft(a - 1), q, this);
                        this.isEven() && this.dAddOffset(1, 0);
                        var f = this,
                            m = function() {
                                f.dAddOffset(2,
                                    0);
                                f.bitLength() > a && f.subTo(b.ONE.shiftLeft(a - 1), f);
                                f.isProbablePrime(c) ? setTimeout(function() {
                                    d()
                                }, 0) : setTimeout(m, 0)
                            };
                        setTimeout(m, 0)
                    }
                else {
                    e = [];
                    var r = a & 7;
                    e.length = (a >> 3) + 1;
                    c.nextBytes(e);
                    e[0] = 0 < r ? e[0] & (1 << r) - 1 : 0;
                    this.fromString(e, 256)
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
                0 > a.s && 0 < b.compareTo(v.ZERO) && this.m.subTo(b, b);
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
                    var f = a[b] & 32767,
                        c = f * this.mpl + ((f * this.mph + (a[b] >> 15) * this.mpl & this.um) << 15) & a.DM;
                    f = b + this.m.t;
                    for (a[f] += this.m.am(0, c, a, b, 0, this.m.t); a[f] >= a.DV;) a[f] -= a.DV, a[++f]++
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
                v.ONE.dlShiftTo(2 * a.t, this.r2);
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
        v.prototype.am = A;
        var D = 30
    } else "Netscape" !=
        navigator.appName ? (v.prototype.am = u, D = 26) : (v.prototype.am = B, D = 28);
    v.prototype.DB = D;
    v.prototype.DM = (1 << D) - 1;
    v.prototype.DV = 1 << D;
    v.prototype.FV = Math.pow(2, 52);
    v.prototype.F1 = 52 - D;
    v.prototype.F2 = 2 * D - 52;
    var M = [],
        y;
    D = 48;
    for (y = 0; 9 >= y; ++y) M[D++] = y;
    D = 97;
    for (y = 10; 36 > y; ++y) M[D++] = y;
    D = 65;
    for (y = 10; 36 > y; ++y) M[D++] = y;
    v.ZERO = F(0);
    v.ONE = F(1);
    var t = function() {
            function a() {
                this.j = this.i = 0;
                this.S = []
            }
            a.prototype.init = function(a) {
                var b, c;
                for (b = 0; 256 > b; ++b) this.S[b] = b;
                for (b = c = 0; 256 > b; ++b) {
                    c = c + this.S[b] + a[b % a.length] & 255;
                    var f = this.S[b];
                    this.S[b] = this.S[c];
                    this.S[c] = f
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
        ba, L = null;
    if (null == L) {
        L = [];
        var E = 0;
        D = void 0;
        if (window.crypto && window.crypto.getRandomValues)
            for (y = new Uint32Array(256), window.crypto.getRandomValues(y), D = 0; D < y.length; ++D) L[E++] = y[D] & 255;
        var w = function(a) {
            this.count = this.count || 0;
            if (256 <=
                this.count || 256 <= E) window.removeEventListener ? window.removeEventListener("mousemove", w, !1) : window.detachEvent && window.detachEvent("onmousemove", w);
            else try {
                var b = a.x + a.y;
                L[E++] = b & 255;
                this.count += 1
            } catch (m) {}
        };
        window.addEventListener ? window.addEventListener("mousemove", w, !1) : window.attachEvent && window.attachEvent("onmousemove", w)
    }
    var x = function() {
        function a() {}
        a.prototype.nextBytes = function(a) {
            for (var b = 0; b < a.length; ++b) {
                var c = b;
                if (null == ba) {
                    for (ba = new t; 256 > E;) {
                        var f = Math.floor(65536 * Math.random());
                        L[E++] = f & 255
                    }
                    ba.init(L);
                    for (E = 0; E < L.length; ++E) L[E] = 0;
                    E = 0
                }
                f = ba.next();
                a[c] = f
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
            null != a && null != b && 0 < a.length && 0 < b.length ? (this.n = l(a, 16), this.e = parseInt(b, 16)) : console.error("Invalid RSA public key")
        };
        a.prototype.encrypt = function(a) {
            var b = this.n.bitLength() + 7 >> 3;
            if (b < a.length + 11) console.error("Message too long for RSA"), b = null;
            else {
                for (var c = [], f = a.length - 1; 0 <= f && 0 < b;) {
                    var e = a.charCodeAt(f--);
                    128 > e ? c[--b] = e : 127 < e && 2048 > e ? (c[--b] = e & 63 | 128, c[--b] = e >> 6 | 192) : (c[--b] = e & 63 | 128, c[--b] = e >> 6 & 63 | 128, c[--b] = e >> 12 | 224)
                }
                c[--b] = 0;
                a = new x;
                for (f = []; 2 < b;) {
                    for (f[0] =
                        0; 0 == f[0];) a.nextBytes(f);
                    c[--b] = f[0]
                }
                c[--b] = 2;
                c[--b] = 0;
                b = new v(c)
            }
            if (null == b) return null;
            b = this.doPublic(b);
            if (null == b) return null;
            b = b.toString(16);
            return 0 == (b.length & 1) ? b : "0" + b
        };
        a.prototype.setPrivate = function(a, b, c) {
            null != a && null != b && 0 < a.length && 0 < b.length ? (this.n = l(a, 16), this.e = parseInt(b, 16), this.d = l(c, 16)) : console.error("Invalid RSA private key")
        };
        a.prototype.setPrivateEx = function(a, b, c, e, d, h, r, k) {
            null != a && null != b && 0 < a.length && 0 < b.length ? (this.n = l(a, 16), this.e = parseInt(b, 16), this.d = l(c, 16),
                this.p = l(e, 16), this.q = l(d, 16), this.dmp1 = l(h, 16), this.dmq1 = l(r, 16), this.coeff = l(k, 16)) : console.error("Invalid RSA private key")
        };
        a.prototype.generate = function(a, b) {
            var c = new x,
                f = a >> 1;
            this.e = parseInt(b, 16);
            for (b = new v(b, 16);;) {
                for (; this.p = new v(a - f, 1, c), 0 != this.p.subtract(v.ONE).gcd(b).compareTo(v.ONE) || !this.p.isProbablePrime(10););
                for (; this.q = new v(f, 1, c), 0 != this.q.subtract(v.ONE).gcd(b).compareTo(v.ONE) || !this.q.isProbablePrime(10););
                if (0 >= this.p.compareTo(this.q)) {
                    var e = this.p;
                    this.p = this.q;
                    this.q =
                        e
                }
                e = this.p.subtract(v.ONE);
                var d = this.q.subtract(v.ONE),
                    m = e.multiply(d);
                if (0 == m.gcd(b).compareTo(v.ONE)) {
                    this.n = this.p.multiply(this.q);
                    this.d = b.modInverse(m);
                    this.dmp1 = this.d.mod(e);
                    this.dmq1 = this.d.mod(d);
                    this.coeff = this.q.modInverse(this.p);
                    break
                }
            }
        };
        a.prototype.decrypt = function(a) {
            a = l(a, 16);
            a = this.doPrivate(a);
            if (null == a) return null;
            a: {
                var b = this.n.bitLength() + 7 >> 3;a = a.toByteArray();
                for (var c = 0; c < a.length && 0 == a[c];) ++c;
                if (a.length - c != b - 1 || 2 != a[c]) a = null;
                else {
                    for (++c; 0 != a[c];)
                        if (++c >= a.length) {
                            a =
                                null;
                            break a
                        }
                    for (b = ""; ++c < a.length;) {
                        var f = a[c] & 255;
                        128 > f ? b += String.fromCharCode(f) : 191 < f && 224 > f ? (b += String.fromCharCode((f & 31) << 6 | a[c + 1] & 63), ++c) : (b += String.fromCharCode((f & 15) << 12 | (a[c + 1] & 63) << 6 | a[c + 2] & 63), c += 2)
                    }
                    a = b
                }
            }
            return a
        };
        a.prototype.generateAsync = function(a, b, c) {
            var f = new x,
                e = a >> 1;
            this.e = parseInt(b, 16);
            var d = new v(b, 16),
                m = this,
                h = function() {
                    var b = function() {
                            if (0 >= m.p.compareTo(m.q)) {
                                var a = m.p;
                                m.p = m.q;
                                m.q = a
                            }
                            a = m.p.subtract(v.ONE);
                            var b = m.q.subtract(v.ONE),
                                f = a.multiply(b);
                            0 == f.gcd(d).compareTo(v.ONE) ?
                                (m.n = m.p.multiply(m.q), m.d = d.modInverse(f), m.dmp1 = m.d.mod(a), m.dmq1 = m.d.mod(b), m.coeff = m.q.modInverse(m.p), setTimeout(function() {
                                    c()
                                }, 0)) : setTimeout(h, 0)
                        },
                        r = function() {
                            m.q = k();
                            m.q.fromNumberAsync(e, 1, f, function() {
                                m.q.subtract(v.ONE).gcda(d, function(a) {
                                    0 == a.compareTo(v.ONE) && m.q.isProbablePrime(10) ? setTimeout(b, 0) : setTimeout(r, 0)
                                })
                            })
                        },
                        w = function() {
                            m.p = k();
                            m.p.fromNumberAsync(a - e, 1, f, function() {
                                m.p.subtract(v.ONE).gcda(d, function(a) {
                                    0 == a.compareTo(v.ONE) && m.p.isProbablePrime(10) ? setTimeout(r, 0) : setTimeout(w,
                                        0)
                                })
                            })
                        };
                    setTimeout(w, 0)
                };
            setTimeout(h, 0)
        };
        a.prototype.sign = function(a, b, c) {
            a = (R[c] || "") + b(a).toString();
            b = this.n.bitLength() / 4;
            if (b < a.length + 22) console.error("Message too long for RSA"), a = null;
            else {
                b = b - a.length - 6;
                c = "";
                for (var f = 0; f < b; f += 2) c += "ff";
                a = l("0001" + c + "00" + a, 16)
            }
            if (null == a) return null;
            a = this.doPrivate(a);
            if (null == a) return null;
            a = a.toString(16);
            return 0 == (a.length & 1) ? a : "0" + a
        };
        a.prototype.verify = function(a, b, c) {
            b = l(b, 16);
            b = this.doPublic(b);
            if (null == b) return null;
            a: {
                b = b.toString(16).replace(/^1f+00/,
                    "");
                for (d in R)
                    if (R.hasOwnProperty(d)) {
                        var f = R[d],
                            e = f.length;
                        if (b.substr(0, e) == f) {
                            var d = b.substr(e);
                            break a
                        }
                    }
                d = b
            }
            return d == c(a).toString()
        };
        return a
    }();
    var R = {
        md2: "3020300c06082a864886f70d020205000410",
        md5: "3020300c06082a864886f70d020505000410",
        sha1: "3021300906052b0e03021a05000414",
        sha224: "302d300d06096086480165030402040500041c",
        sha256: "3031300d060960864801650304020105000420",
        sha384: "3041300d060960864801650304020205000430",
        sha512: "3051300d060960864801650304020305000440",
        ripemd160: "3021300906052b2403020105000414"
    };
    y = {
        extend: function(a, b, c) {
            if (!b || !a) throw Error("YAHOO.lang.extend failed, please check that all dependencies are included.");
            var f = function() {};
            f.prototype = b.prototype;
            a.prototype = new f;
            a.prototype.constructor = a;
            a.superclass = b.prototype;
            b.prototype.constructor == Object.prototype.constructor && (b.prototype.constructor = b);
            if (c) {
                for (var e in c) a.prototype[e] = c[e];
                b = function() {};
                var d = ["toString", "valueOf"];
                try {
                    /MSIE/.test(navigator.userAgent) && (b = function(a, b) {
                        for (e = 0; e < d.length; e += 1) {
                            var c = d[e],
                                f = b[c];
                            "function" === typeof f && f != Object.prototype[c] && (a[c] = f)
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
                for (var e = 0; e < c; e++) b +=
                    "f";
                b = (new v(b, 16)).xor(a).add(v.ONE).toString(16).replace(/^-/, "")
            }
            return b
        };
        this.getPEMStringFromHex = function(a, b) {
            return hextopem(a, b)
        };
        this.newObject = function(a) {
            var b = n.asn1;
            var c = b.DERBoolean;
            var e = b.DERInteger,
                d = b.DERBitString,
                h = b.DEROctetString,
                r = b.DERNull,
                k = b.DERObjectIdentifier,
                w = b.DEREnumerated,
                g = b.DERUTF8String,
                x = b.DERNumericString,
                l = b.DERPrintableString,
                p = b.DERTeletexString,
                R = b.DERIA5String,
                q = b.DERUTCTime,
                fa = b.DERGeneralizedTime,
                u = b.DERSequence,
                N = b.DERSet;
            var O = b.DERTaggedObject;
            b = b.ASN1Util.newObject;
            var z = Object.keys(a);
            if (1 != z.length) throw "key of param shall be only one.";
            z = z[0];
            if (-1 == ":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + z + ":")) throw "undefined key: " + z;
            if ("bool" == z) return new c(a[z]);
            if ("int" == z) return new e(a[z]);
            if ("bitstr" == z) return new d(a[z]);
            if ("octstr" == z) return new h(a[z]);
            if ("null" == z) return new r(a[z]);
            if ("oid" == z) return new k(a[z]);
            if ("enum" == z) return new w(a[z]);
            if ("utf8str" == z) return new g(a[z]);
            if ("numstr" ==
                z) return new x(a[z]);
            if ("prnstr" == z) return new l(a[z]);
            if ("telstr" == z) return new p(a[z]);
            if ("ia5str" == z) return new R(a[z]);
            if ("utctime" == z) return new q(a[z]);
            if ("gentime" == z) return new fa(a[z]);
            if ("seq" == z) {
                c = a[z];
                a = [];
                for (e = 0; e < c.length; e++) O = b(c[e]), a.push(O);
                return new u({
                    array: a
                })
            }
            if ("set" == z) {
                c = a[z];
                a = [];
                for (e = 0; e < c.length; e++) O = b(c[e]), a.push(O);
                return new N({
                    array: a
                })
            }
            if ("tag" == z) {
                u = a[z];
                if ("[object Array]" === Object.prototype.toString.call(u) && 3 == u.length) return b = b(u[2]), new O({
                    tag: u[0],
                    explicit: u[1],
                    obj: b
                });
                N = {};
                void 0 !== u.explicit && (N.explicit = u.explicit);
                void 0 !== u.tag && (N.tag = u.tag);
                if (void 0 === u.obj) throw "obj shall be specified for 'tag'.";
                N.obj = b(u.obj);
                return new O(N)
            }
        };
        this.jsonToASN1HEX = function(a) {
            return this.newObject(a).getEncodedHex()
        }
    };
    n.asn1.ASN1Util.oidHexToInt = function(a) {
        var b = parseInt(a.substr(0, 2), 16);
        b = Math.floor(b / 40) + "." + b % 40;
        for (var c = "", e = 2; e < a.length; e += 2) {
            var d = ("00000000" + parseInt(a.substr(e, 2), 16).toString(2)).slice(-8);
            c += d.substr(1, 7);
            "0" == d.substr(0, 1) && (c = new v(c,
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
                a = (new v(a, 10)).toString(2);
                var e = 7 - a.length % 7;
                7 == e && (e = 0);
                for (var f = "", d = 0; d < e; d++) f += "0";
                a = f + a;
                for (d = 0; d < a.length - 1; d += 7) e = a.substr(d, 7), d != a.length - 7 && (e = "1" + e), c += b(parseInt(e, 2));
                return c
            };
        if (!a.match(/^[0-9.]+$/)) throw "malformed oid string: " + a;
        var e = "";
        a = a.split(".");
        var d = 40 * parseInt(a[0]) + parseInt(a[1]);
        e += b(d);
        a.splice(0,
            2);
        for (d = 0; d < a.length; d++) e += c(a[d]);
        return e
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
    y.extend(n.asn1.DERAbstractString, n.asn1.ASN1Object);
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
                h = e(String(a.getHours()), 2),
                m = e(String(a.getMinutes()), 2),
                k = e(String(a.getSeconds()), 2);
            f = f + b + d + h + m + k;
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
        this.setByDateValue = function(a, b, c, e, d, h) {
            a = new Date(Date.UTC(a, b - 1, c, e, d, h, 0));
            this.setByDate(a)
        };
        this.getFreshValueHex = function() {
            return this.hV
        }
    };
    y.extend(n.asn1.DERAbstractTime, n.asn1.ASN1Object);
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
    y.extend(n.asn1.DERAbstractStructured, n.asn1.ASN1Object);
    n.asn1.DERBoolean = function() {
        n.asn1.DERBoolean.superclass.constructor.call(this);
        this.hT = "01";
        this.hTLV = "0101ff"
    };
    y.extend(n.asn1.DERBoolean, n.asn1.ASN1Object);
    n.asn1.DERInteger = function(a) {
        n.asn1.DERInteger.superclass.constructor.call(this);
        this.hT = "02";
        this.setByBigInteger = function(a) {
            this.hTLV = null;
            this.isModified = !0;
            this.hV = n.asn1.ASN1Util.bigIntToMinTwosComplementsHex(a)
        };
        this.setByInteger = function(a) {
            a = new v(String(a), 10);
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
    y.extend(n.asn1.DERInteger, n.asn1.ASN1Object);
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
    y.extend(n.asn1.DERBitString, n.asn1.ASN1Object);
    n.asn1.DEROctetString = function(a) {
        if (void 0 !== a && "undefined" !== typeof a.obj) {
            var b = n.asn1.ASN1Util.newObject(a.obj);
            a.hex =
                b.getEncodedHex()
        }
        n.asn1.DEROctetString.superclass.constructor.call(this, a);
        this.hT = "04"
    };
    y.extend(n.asn1.DEROctetString, n.asn1.DERAbstractString);
    n.asn1.DERNull = function() {
        n.asn1.DERNull.superclass.constructor.call(this);
        this.hT = "05";
        this.hTLV = "0500"
    };
    y.extend(n.asn1.DERNull, n.asn1.ASN1Object);
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
                    d = (new v(a[e], 10)).toString(2),
                    h = 7 - d.length % 7;
                7 == h && (h = 0);
                for (var m = "", k = 0; k < h; k++) m += "0";
                d = m + d;
                for (k = 0; k < d.length - 1; k += 7) h = d.substr(k, 7), k != d.length - 7 && (h = "1" + h), f += b(parseInt(h, 2));
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
    y.extend(n.asn1.DERObjectIdentifier, n.asn1.ASN1Object);
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
                a = new v(String(a), 10);
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
    y.extend(n.asn1.DEREnumerated, n.asn1.ASN1Object);
    n.asn1.DERUTF8String = function(a) {
        n.asn1.DERUTF8String.superclass.constructor.call(this, a);
        this.hT = "0c"
    };
    y.extend(n.asn1.DERUTF8String, n.asn1.DERAbstractString);
    n.asn1.DERNumericString = function(a) {
        n.asn1.DERNumericString.superclass.constructor.call(this, a);
        this.hT = "12"
    };
    y.extend(n.asn1.DERNumericString, n.asn1.DERAbstractString);
    n.asn1.DERPrintableString = function(a) {
        n.asn1.DERPrintableString.superclass.constructor.call(this,
            a);
        this.hT = "13"
    };
    y.extend(n.asn1.DERPrintableString, n.asn1.DERAbstractString);
    n.asn1.DERTeletexString = function(a) {
        n.asn1.DERTeletexString.superclass.constructor.call(this, a);
        this.hT = "14"
    };
    y.extend(n.asn1.DERTeletexString, n.asn1.DERAbstractString);
    n.asn1.DERIA5String = function(a) {
        n.asn1.DERIA5String.superclass.constructor.call(this, a);
        this.hT = "16"
    };
    y.extend(n.asn1.DERIA5String, n.asn1.DERAbstractString);
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
    y.extend(n.asn1.DERUTCTime, n.asn1.DERAbstractTime);
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
    y.extend(n.asn1.DERGeneralizedTime, n.asn1.DERAbstractTime);
    n.asn1.DERSequence = function(a) {
        n.asn1.DERSequence.superclass.constructor.call(this, a);
        this.hT = "30";
        this.getFreshValueHex = function() {
            for (var a = "", b = 0; b < this.asn1Array.length; b++) a += this.asn1Array[b].getEncodedHex();
            return this.hV = a
        }
    };
    y.extend(n.asn1.DERSequence, n.asn1.DERAbstractStructured);
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
    y.extend(n.asn1.DERSet, n.asn1.DERAbstractStructured);
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
    y.extend(n.asn1.DERTaggedObject, n.asn1.ASN1Object);
    var fa = function(a) {
        function c(b) {
            var e = a.call(this) || this;
            b && ("string" === typeof b ? e.parseKey(b) : (c.hasPrivateKeyProperty(b) || c.hasPublicKeyProperty(b)) && e.parsePropertiesFrom(b));
            return e
        }
        h(c, a);
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
                    this.n = l(b, 16);
                    c = f.sub[2].getHexStringValue();
                    this.e = parseInt(c, 16);
                    var d = f.sub[3].getHexStringValue();
                    this.d = l(d, 16);
                    var h = f.sub[4].getHexStringValue();
                    this.p = l(h, 16);
                    var m = f.sub[5].getHexStringValue();
                    this.q = l(m, 16);
                    var k = f.sub[6].getHexStringValue();
                    this.dmp1 = l(k, 16);
                    var w = f.sub[7].getHexStringValue();
                    this.dmq1 = l(w, 16);
                    var g = f.sub[8].getHexStringValue();
                    this.coeff =
                        l(g, 16)
                } else if (2 === f.sub.length) {
                    var n = f.sub[1].sub[0];
                    b = n.sub[0].getHexStringValue();
                    this.n = l(b, 16);
                    c = n.sub[1].getHexStringValue();
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
                return this.getKey().decrypt(e(a))
            } catch (m) {
                return !1
            }
        };
        a.prototype.encrypt = function(a) {
            try {
                return b(this.getKey().encrypt(a))
            } catch (m) {
                return !1
            }
        };
        a.prototype.sign = function(a, c, e) {
            try {
                return b(this.getKey().sign(a, c, e))
            } catch (X) {
                return !1
            }
        };
        a.prototype.verify = function(a, b, c) {
            try {
                return this.getKey().verify(a, e(b), c)
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
    g.JSEncrypt =
        D;
    g.default = D;
    Object.defineProperty(g, "__esModule", {
        value: !0
    })
});
(function(g) {
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
    g.BaseHttpSystem = d
})(ArkSDK || (ArkSDK = {}));
(function(g) {
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
            var e;
            b && (e = this.cmdDict[c]);
            this.arkSocketClient.SendCmd(this.systemName, c, a, e)
        };
        return d
    }();
    g.BaseSocketSystem = d
})(ArkSDK || (ArkSDK = {}));
var SUPPORTED_ALGS = 15;
(function(g) {
    function d(a, b) {
        this.highOrder = a;
        this.lowOrder = b
    }

    function q(a, b, c, e) {
        var d = "";
        b /= 8;
        var h;
        var f = -1 === c ? 3 : 0;
        for (h = 0; h < b; h += 1) {
            var k = a[h >>> 2] >>> 8 * (f + h % 4 * c);
            d += "0123456789abcdef".charAt(k >>> 4 & 15) + "0123456789abcdef".charAt(k & 15)
        }
        return e.outputUpper ? d.toUpperCase() : d
    }

    function c(a, b, c, e) {
        var d = "",
            h = b / 8,
            f;
        var k = -1 === c ? 3 : 0;
        for (f = 0; f < h; f += 3) {
            var g = f + 1 < h ? a[f + 1 >>> 2] : 0;
            var w = f + 2 < h ? a[f + 2 >>> 2] : 0;
            w = (a[f >>> 2] >>> 8 * (k + f % 4 * c) & 255) << 16 | (g >>> 8 * (k + (f + 1) % 4 * c) & 255) << 8 | w >>> 8 * (k + (f + 2) % 4 * c) & 255;
            for (g = 0; 4 > g; g +=
                1) d = 8 * f + 6 * g <= b ? d + "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".charAt(w >>> 6 * (3 - g) & 63) : d + e.b64Pad
        }
        return d
    }

    function a(a, b, c) {
        var e = "";
        b /= 8;
        var d;
        var h = -1 === c ? 3 : 0;
        for (d = 0; d < b; d += 1) {
            var f = a[d >>> 2] >>> 8 * (h + d % 4 * c) & 255;
            e += String.fromCharCode(f)
        }
        return e
    }

    function b(a, b, c) {
        b /= 8;
        var e, d = new ArrayBuffer(b);
        var h = new Uint8Array(d);
        var f = -1 === c ? 3 : 0;
        for (e = 0; e < b; e += 1) h[e] = a[e >>> 2] >>> 8 * (f + e % 4 * c) & 255;
        return d
    }

    function e(a) {
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

    function h(a, b, c) {
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
                a = function(a, b, e) {
                    var f = a.length,
                        d, h;
                    if (0 !== f % 2) throw Error("String of HEX type must be in byte increments");
                    b = b || [0];
                    e = e || 0;
                    var k = e >>> 3;
                    var g = -1 === c ? 3 : 0;
                    for (d = 0; d < f; d += 2) {
                        var w = parseInt(a.substr(d, 2), 16);
                        if (isNaN(w)) throw Error("String of HEX type contains invalid characters");
                        var n = (d >>> 1) + k;
                        for (h = n >>> 2; b.length <= h;) b.push(0);
                        b[h] |= w << 8 * (g + n % 4 * c)
                    }
                    return {
                        value: b,
                        binLen: 4 * f + e
                    }
                };
                break;
            case "TEXT":
                a = function(a, e, d) {
                    var f = 0,
                        h, k, g;
                    e = e || [0];
                    d = d || 0;
                    var w = d >>> 3;
                    if ("UTF8" === b) {
                        var n = -1 === c ? 3 : 0;
                        for (h = 0; h < a.length; h += 1) {
                            var l = a.charCodeAt(h);
                            var p = [];
                            128 > l ? p.push(l) : 2048 > l ? (p.push(192 | l >>> 6), p.push(128 | l & 63)) : 55296 > l || 57344 <= l ? p.push(224 | l >>> 12, 128 | l >>> 6 & 63, 128 | l & 63) : (h += 1, l = 65536 + ((l & 1023) << 10 | a.charCodeAt(h) & 1023), p.push(240 | l >>> 18, 128 | l >>> 12 & 63, 128 | l >>> 6 & 63, 128 | l & 63));
                            for (k = 0; k < p.length; k += 1) {
                                var x = f + w;
                                for (g = x >>> 2; e.length <= g;) e.push(0);
                                e[g] |= p[k] << 8 * (n + x % 4 * c);
                                f += 1
                            }
                        }
                    } else if ("UTF16BE" === b || "UTF16LE" === b)
                        for (n = -1 === c ? 2 : 0, p = "UTF16LE" === b && 1 !== c || "UTF16LE" !== b && 1 === c, h = 0; h < a.length; h +=
                            1) {
                            l = a.charCodeAt(h);
                            !0 === p && (k = l & 255, l = k << 8 | l >>> 8);
                            x = f + w;
                            for (g = x >>> 2; e.length <= g;) e.push(0);
                            e[g] |= l << 8 * (n + x % 4 * c);
                            f += 2
                        }
                    return {
                        value: e,
                        binLen: 8 * f + d
                    }
                };
                break;
            case "B64":
                a = function(a, b, e) {
                    var f = 0,
                        d, h;
                    if (-1 === a.search(/^[a-zA-Z0-9=+\/]+$/)) throw Error("Invalid character in base-64 string");
                    var k = a.indexOf("=");
                    a = a.replace(/\=/g, "");
                    if (-1 !== k && k < a.length) throw Error("Invalid '=' found in base-64 string");
                    b = b || [0];
                    e = e || 0;
                    var g = e >>> 3;
                    var l = -1 === c ? 3 : 0;
                    for (k = 0; k < a.length; k += 4) {
                        var w = a.substr(k, 4);
                        for (d = h = 0; d <
                            w.length; d += 1) {
                            var n = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/".indexOf(w[d]);
                            h |= n << 18 - 6 * d
                        }
                        for (d = 0; d < w.length - 1; d += 1) {
                            var p = f + g;
                            for (n = p >>> 2; b.length <= n;) b.push(0);
                            b[n] |= (h >>> 16 - 8 * d & 255) << 8 * (l + p % 4 * c);
                            f += 1
                        }
                    }
                    return {
                        value: b,
                        binLen: 8 * f + e
                    }
                };
                break;
            case "BYTES":
                a = function(a, b, e) {
                    var f;
                    b = b || [0];
                    e = e || 0;
                    var d = e >>> 3;
                    var h = -1 === c ? 3 : 0;
                    for (f = 0; f < a.length; f += 1) {
                        var k = a.charCodeAt(f);
                        var g = f + d;
                        var l = g >>> 2;
                        b.length <= l && b.push(0);
                        b[l] |= k << 8 * (h + g % 4 * c)
                    }
                    return {
                        value: b,
                        binLen: 8 * a.length + e
                    }
                };
                break;
            case "ARRAYBUFFER":
                try {
                    a = new ArrayBuffer(0)
                } catch (n) {
                    throw Error("ARRAYBUFFER not supported by this environment");
                }
                a = function(a, b, e) {
                    var f;
                    b = b || [0];
                    e = e || 0;
                    var d = e >>> 3;
                    var h = -1 === c ? 3 : 0;
                    var k = new Uint8Array(a);
                    for (f = 0; f < a.byteLength; f += 1) {
                        var g = f + d;
                        var l = g >>> 2;
                        b.length <= l && b.push(0);
                        b[l] |= k[f] << 8 * (h + g % 4 * c)
                    }
                    return {
                        value: b,
                        binLen: 8 * a.byteLength + e
                    }
                };
                break;
            default:
                throw Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER");
        }
        return a
    }

    function p(a, b) {
        return a << b | a >>> 32 - b
    }

    function k(a, b) {
        return 32 <
            b ? (b -= 32, new d(a.lowOrder << b | a.highOrder >>> 32 - b, a.highOrder << b | a.lowOrder >>> 32 - b)) : 0 !== b ? new d(a.highOrder << b | a.lowOrder >>> 32 - b, a.lowOrder << b | a.highOrder >>> 32 - b) : a
    }

    function l(a, b) {
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

    function G(a, b, c) {
        return new d(a.highOrder & b.highOrder ^ ~a.highOrder & c.highOrder, a.lowOrder & b.lowOrder ^ ~a.lowOrder & c.lowOrder)
    }

    function F(a, b, c) {
        return a & b ^ a & c ^ b & c
    }

    function H(a, b, c) {
        return new d(a.highOrder & b.highOrder ^ a.highOrder & c.highOrder ^ b.highOrder & c.highOrder, a.lowOrder & b.lowOrder ^ a.lowOrder & c.lowOrder ^ b.lowOrder & c.lowOrder)
    }

    function S(a) {
        return l(a, 2) ^ l(a, 13) ^ l(a, 22)
    }

    function J(a) {
        var b =
            u(a, 28),
            c = u(a, 34);
        a = u(a, 39);
        return new d(b.highOrder ^ c.highOrder ^ a.highOrder, b.lowOrder ^ c.lowOrder ^ a.lowOrder)
    }

    function aa(a) {
        return l(a, 6) ^ l(a, 11) ^ l(a, 25)
    }

    function P(a) {
        var b = u(a, 14),
            c = u(a, 18);
        a = u(a, 41);
        return new d(b.highOrder ^ c.highOrder ^ a.highOrder, b.lowOrder ^ c.lowOrder ^ a.lowOrder)
    }

    function T(a) {
        return l(a, 7) ^ l(a, 18) ^ a >>> 3
    }

    function Y(a) {
        var b = u(a, 1),
            c = u(a, 8);
        a = A(a, 7);
        return new d(b.highOrder ^ c.highOrder ^ a.highOrder, b.lowOrder ^ c.lowOrder ^ a.lowOrder)
    }

    function ha(a) {
        return l(a, 17) ^ l(a, 19) ^ a >>> 10
    }

    function ia(a) {
        var b = u(a, 19),
            c = u(a, 61);
        a = A(a, 6);
        return new d(b.highOrder ^ c.highOrder ^ a.highOrder, b.lowOrder ^ c.lowOrder ^ a.lowOrder)
    }

    function Q(a, b) {
        var c = (a & 65535) + (b & 65535);
        return ((a >>> 16) + (b >>> 16) + (c >>> 16) & 65535) << 16 | c & 65535
    }

    function ja(a, b, c, e) {
        var d = (a & 65535) + (b & 65535) + (c & 65535) + (e & 65535);
        return ((a >>> 16) + (b >>> 16) + (c >>> 16) + (e >>> 16) + (d >>> 16) & 65535) << 16 | d & 65535
    }

    function U(a, b, c, e, d) {
        var h = (a & 65535) + (b & 65535) + (c & 65535) + (e & 65535) + (d & 65535);
        return ((a >>> 16) + (b >>> 16) + (c >>> 16) + (e >>> 16) + (d >>> 16) + (h >>> 16) &
            65535) << 16 | h & 65535
    }

    function I(a, b) {
        var c = (a.lowOrder & 65535) + (b.lowOrder & 65535);
        var e = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) + (c >>> 16);
        var h = (e & 65535) << 16 | c & 65535;
        c = (a.highOrder & 65535) + (b.highOrder & 65535) + (e >>> 16);
        e = (a.highOrder >>> 16) + (b.highOrder >>> 16) + (c >>> 16);
        return new d((e & 65535) << 16 | c & 65535, h)
    }

    function ka(a, b, c, e) {
        var h = (a.lowOrder & 65535) + (b.lowOrder & 65535) + (c.lowOrder & 65535) + (e.lowOrder & 65535);
        var k = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) + (c.lowOrder >>> 16) + (e.lowOrder >>> 16) + (h >>> 16);
        var f = (k & 65535) <<
            16 | h & 65535;
        h = (a.highOrder & 65535) + (b.highOrder & 65535) + (c.highOrder & 65535) + (e.highOrder & 65535) + (k >>> 16);
        k = (a.highOrder >>> 16) + (b.highOrder >>> 16) + (c.highOrder >>> 16) + (e.highOrder >>> 16) + (h >>> 16);
        return new d((k & 65535) << 16 | h & 65535, f)
    }

    function v(a, b, c, e, h) {
        var k = (a.lowOrder & 65535) + (b.lowOrder & 65535) + (c.lowOrder & 65535) + (e.lowOrder & 65535) + (h.lowOrder & 65535);
        var f = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) + (c.lowOrder >>> 16) + (e.lowOrder >>> 16) + (h.lowOrder >>> 16) + (k >>> 16);
        var g = (f & 65535) << 16 | k & 65535;
        k = (a.highOrder & 65535) +
            (b.highOrder & 65535) + (c.highOrder & 65535) + (e.highOrder & 65535) + (h.highOrder & 65535) + (f >>> 16);
        f = (a.highOrder >>> 16) + (b.highOrder >>> 16) + (c.highOrder >>> 16) + (e.highOrder >>> 16) + (h.highOrder >>> 16) + (k >>> 16);
        return new d((f & 65535) << 16 | k & 65535, g)
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
            e;
        var d = b[0];
        var h = b[1];
        var f = b[2];
        var k = b[3];
        var g = b[4];
        for (e = 0; 80 > e; e += 1) {
            c[e] =
                16 > e ? a[e] : p(c[e - 3] ^ c[e - 8] ^ c[e - 14] ^ c[e - 16], 1);
            var l = 20 > e ? U(p(d, 5), h & f ^ ~h & k, g, 1518500249, c[e]) : 40 > e ? U(p(d, 5), h ^ f ^ k, g, 1859775393, c[e]) : 60 > e ? U(p(d, 5), F(h, f, k), g, 2400959708, c[e]) : U(p(d, 5), h ^ f ^ k, g, 3395469782, c[e]);
            g = k;
            k = f;
            f = p(h, 30);
            h = d;
            d = l
        }
        b[0] = Q(d, b[0]);
        b[1] = Q(h, b[1]);
        b[2] = Q(f, b[2]);
        b[3] = Q(k, b[3]);
        b[4] = Q(g, b[4]);
        return b
    }

    function la(a, b, c, e, d) {
        for (d = (b + 65 >>> 9 << 4) + 15; a.length <= d;) a.push(0);
        a[b >>> 5] |= 128 << 24 - b % 32;
        b += c;
        a[d] = b & 4294967295;
        a[d - 1] = b / 4294967296 | 0;
        c = a.length;
        for (b = 0; b < c; b += 16) e = da(a.slice(b, b +
            16), e);
        return e
    }

    function D(a, b, c) {
        var e, h = [];
        if ("SHA-224" !== c && "SHA-256" !== c || 0 === (2 & SUPPORTED_ALGS)) {
            if ("SHA-384" !== c && "SHA-512" !== c || 0 === (4 & SUPPORTED_ALGS)) throw Error("Unexpected error in SHA-2 implementation");
            var k = 80;
            var f = 2;
            var g = d;
            var l = I;
            var p = ka;
            var q = v;
            var u = Y;
            var w = ia;
            var R = J;
            var A = P;
            var x = H;
            var D = G;
            var C = y
        } else k = 64, f = 1, g = Number, l = Q, p = ja, q = U, u = T, w = ha, R = S, A = aa, x = F, D = B, C = t;
        c = b[0];
        var E = b[1];
        var L = b[2];
        var M = b[3];
        var ea = b[4];
        var N = b[5];
        var O = b[6];
        var z = b[7];
        for (e = 0; e < k; e += 1) {
            if (16 > e) {
                var W =
                    e * f;
                var ca = a.length <= W ? 0 : a[W];
                W = a.length <= W + 1 ? 0 : a[W + 1];
                h[e] = new g(ca, W)
            } else h[e] = p(w(h[e - 2]), h[e - 7], u(h[e - 15]), h[e - 16]);
            ca = q(z, A(ea), D(ea, N, O), C[e], h[e]);
            W = l(R(c), x(c, E, L));
            z = O;
            O = N;
            N = ea;
            ea = l(M, ca);
            M = L;
            L = E;
            E = c;
            c = l(ca, W)
        }
        b[0] = l(c, b[0]);
        b[1] = l(E, b[1]);
        b[2] = l(L, b[2]);
        b[3] = l(M, b[3]);
        b[4] = l(ea, b[4]);
        b[5] = l(N, b[5]);
        b[6] = l(O, b[6]);
        b[7] = l(z, b[7]);
        return b
    }

    function M(a, b) {
        var c, e = [],
            h = [];
        if (null !== a)
            for (c = 0; c < a.length; c += 2) b[(c >>> 1) % 5][(c >>> 1) / 5 | 0] = Z(b[(c >>> 1) % 5][(c >>> 1) / 5 | 0], new d(a[c + 1], a[c]));
        for (a = 0; 24 >
            a; a += 1) {
            var g = V("SHA3-");
            for (c = 0; 5 > c; c += 1) {
                var f = c;
                var l = b[c][0];
                var p = b[c][1],
                    q = b[c][2],
                    u = b[c][3],
                    w = b[c][4];
                l = new d(l.highOrder ^ p.highOrder ^ q.highOrder ^ u.highOrder ^ w.highOrder, l.lowOrder ^ p.lowOrder ^ q.lowOrder ^ u.lowOrder ^ w.lowOrder);
                e[f] = l
            }
            for (c = 0; 5 > c; c += 1) h[c] = Z(e[(c + 4) % 5], k(e[(c + 1) % 5], 1));
            for (c = 0; 5 > c; c += 1)
                for (f = 0; 5 > f; f += 1) b[c][f] = Z(b[c][f], h[c]);
            for (c = 0; 5 > c; c += 1)
                for (f = 0; 5 > f; f += 1) g[f][(2 * c + 3 * f) % 5] = k(b[c][f], L[c][f]);
            for (c = 0; 5 > c; c += 1)
                for (f = 0; 5 > f; f += 1) b[c][f] = Z(g[c][f], new d(~g[(c + 1) % 5][f].highOrder &
                    g[(c + 2) % 5][f].highOrder, ~g[(c + 1) % 5][f].lowOrder & g[(c + 2) % 5][f].lowOrder));
            b[0][0] = Z(b[0][0], ba[a])
        }
        return b
    }
    var y;
    if (0 !== (6 & SUPPORTED_ALGS)) {
        var t = [1116352408, 1899447441, 3049323471, 3921009573, 961987163, 1508970993, 2453635748, 2870763221, 3624381080, 310598401, 607225278, 1426881987, 1925078388, 2162078206, 2614888103, 3248222580, 3835390401, 4022224774, 264347078, 604807628, 770255983, 1249150122, 1555081692, 1996064986, 2554220882, 2821834349, 2952996808, 3210313671, 3336571891, 3584528711, 113926993, 338241895, 666307205,
            773529912, 1294757372, 1396182291, 1695183700, 1986661051, 2177026350, 2456956037, 2730485921, 2820302411, 3259730800, 3345764771, 3516065817, 3600352804, 4094571909, 275423344, 430227734, 506948616, 659060556, 883997877, 958139571, 1322822218, 1537002063, 1747873779, 1955562222, 2024104815, 2227730452, 2361852424, 2428436474, 2756734187, 3204031479, 3329325298
        ];
        0 !== (4 & SUPPORTED_ALGS) && (y = [new d(t[0], 3609767458), new d(t[1], 602891725), new d(t[2], 3964484399), new d(t[3], 2173295548), new d(t[4], 4081628472), new d(t[5], 3053834265), new d(t[6],
                2937671579), new d(t[7], 3664609560), new d(t[8], 2734883394), new d(t[9], 1164996542), new d(t[10], 1323610764), new d(t[11], 3590304994), new d(t[12], 4068182383), new d(t[13], 991336113), new d(t[14], 633803317), new d(t[15], 3479774868), new d(t[16], 2666613458), new d(t[17], 944711139), new d(t[18], 2341262773), new d(t[19], 2007800933), new d(t[20], 1495990901), new d(t[21], 1856431235), new d(t[22], 3175218132), new d(t[23], 2198950837), new d(t[24], 3999719339), new d(t[25], 766784016), new d(t[26], 2566594879), new d(t[27], 3203337956),
            new d(t[28], 1034457026), new d(t[29], 2466948901), new d(t[30], 3758326383), new d(t[31], 168717936), new d(t[32], 1188179964), new d(t[33], 1546045734), new d(t[34], 1522805485), new d(t[35], 2643833823), new d(t[36], 2343527390), new d(t[37], 1014477480), new d(t[38], 1206759142), new d(t[39], 344077627), new d(t[40], 1290863460), new d(t[41], 3158454273), new d(t[42], 3505952657), new d(t[43], 106217008), new d(t[44], 3606008344), new d(t[45], 1432725776), new d(t[46], 1467031594), new d(t[47], 851169720), new d(t[48], 3100823752), new d(t[49],
                1363258195), new d(t[50], 3750685593), new d(t[51], 3785050280), new d(t[52], 3318307427), new d(t[53], 3812723403), new d(t[54], 2003034995), new d(t[55], 3602036899), new d(t[56], 1575990012), new d(t[57], 1125592928), new d(t[58], 2716904306), new d(t[59], 442776044), new d(t[60], 593698344), new d(t[61], 3733110249), new d(t[62], 2999351573), new d(t[63], 3815920427), new d(3391569614, 3928383900), new d(3515267271, 566280711), new d(3940187606, 3454069534), new d(4118630271, 4000239992), new d(116418474, 1914138554), new d(174292421,
                2731055270), new d(289380356, 3203993006), new d(460393269, 320620315), new d(685471733, 587496836), new d(852142971, 1086792851), new d(1017036298, 365543100), new d(1126000580, 2618297676), new d(1288033470, 3409855158), new d(1501505948, 4234509866), new d(1607167915, 987167468), new d(1816402316, 1246189591)
        ])
    }
    if (0 !== (8 & SUPPORTED_ALGS)) {
        var ba = [new d(0, 1), new d(0, 32898), new d(2147483648, 32906), new d(2147483648, 2147516416), new d(0, 32907), new d(0, 2147483649), new d(2147483648, 2147516545), new d(2147483648, 32777), new d(0,
            138), new d(0, 136), new d(0, 2147516425), new d(0, 2147483658), new d(0, 2147516555), new d(2147483648, 139), new d(2147483648, 32905), new d(2147483648, 32771), new d(2147483648, 32770), new d(2147483648, 128), new d(0, 32778), new d(2147483648, 2147483658), new d(2147483648, 2147516545), new d(2147483648, 32896), new d(0, 2147483649), new d(2147483648, 2147516424)];
        var L = [
            [0, 36, 3, 41, 18],
            [1, 44, 10, 45, 2],
            [62, 6, 43, 15, 61],
            [28, 55, 25, 21, 56],
            [27, 20, 39, 8, 14]
        ]
    }
    var E = function(d, k, g) {
        var l = 0,
            p = [],
            u = 0,
            f = !1,
            m = [],
            t = [],
            A = !1,
            w = !1,
            v = -1;
        g = g || {};
        var y = g.encoding || "UTF8";
        var B = g.numRounds || 1;
        if (B !== parseInt(B, 10) || 1 > B) throw Error("numRounds must a integer >= 1");
        if ("SHA-1" === d && 0 !== (1 & SUPPORTED_ALGS)) {
            var x = 512;
            var F = da;
            var E = la;
            var C = 160;
            var J = function(a) {
                return a.slice()
            }
        } else if (0 === d.lastIndexOf("SHA-", 0) && 0 !== (6 & SUPPORTED_ALGS))
            if (F = function(a, b) {
                    return D(a, b, d)
                }, E = function(a, b, c, e, f) {
                    if ("SHA-224" !== d && "SHA-256" !== d || 0 === (2 & SUPPORTED_ALGS)) {
                        if ("SHA-384" !== d && "SHA-512" !== d || 0 === (4 & SUPPORTED_ALGS)) throw Error("Unexpected error in SHA-2 implementation");
                        var h = (b + 129 >>> 10 << 5) + 31;
                        f = 32
                    } else h = (b + 65 >>> 9 << 4) + 15, f = 16;
                    for (; a.length <= h;) a.push(0);
                    a[b >>> 5] |= 128 << 24 - b % 32;
                    b += c;
                    a[h] = b & 4294967295;
                    a[h - 1] = b / 4294967296 | 0;
                    c = a.length;
                    for (b = 0; b < c; b += f) e = D(a.slice(b, b + f), e, d);
                    if ("SHA-224" === d && 0 !== (2 & SUPPORTED_ALGS)) a = [e[0], e[1], e[2], e[3], e[4], e[5], e[6]];
                    else if ("SHA-256" === d && 0 !== (2 & SUPPORTED_ALGS)) a = e;
                    else if ("SHA-384" === d && 0 !== (4 & SUPPORTED_ALGS)) a = [e[0].highOrder, e[0].lowOrder, e[1].highOrder, e[1].lowOrder, e[2].highOrder, e[2].lowOrder, e[3].highOrder, e[3].lowOrder,
                        e[4].highOrder, e[4].lowOrder, e[5].highOrder, e[5].lowOrder
                    ];
                    else if ("SHA-512" === d && 0 !== (4 & SUPPORTED_ALGS)) a = [e[0].highOrder, e[0].lowOrder, e[1].highOrder, e[1].lowOrder, e[2].highOrder, e[2].lowOrder, e[3].highOrder, e[3].lowOrder, e[4].highOrder, e[4].lowOrder, e[5].highOrder, e[5].lowOrder, e[6].highOrder, e[6].lowOrder, e[7].highOrder, e[7].lowOrder];
                    else throw Error("Unexpected error in SHA-2 implementation");
                    return a
                }, J = function(a) {
                    return a.slice()
                }, "SHA-224" === d && 0 !== (2 & SUPPORTED_ALGS)) x = 512, C = 224;
            else if ("SHA-256" ===
            d && 0 !== (2 & SUPPORTED_ALGS)) x = 512, C = 256;
        else if ("SHA-384" === d && 0 !== (4 & SUPPORTED_ALGS)) x = 1024, C = 384;
        else if ("SHA-512" === d && 0 !== (4 & SUPPORTED_ALGS)) x = 1024, C = 512;
        else throw Error("Chosen SHA variant is not supported");
        else {
            if (0 !== d.lastIndexOf("SHA3-", 0) && 0 !== d.lastIndexOf("SHAKE", 0) || 0 === (8 & SUPPORTED_ALGS)) throw Error("Chosen SHA variant is not supported");
            var H = 6;
            F = M;
            J = function(a) {
                var b = [],
                    c;
                for (c = 0; 5 > c; c += 1) b[c] = a[c].slice();
                return b
            };
            v = 1;
            if ("SHA3-224" === d) x = 1152, C = 224;
            else if ("SHA3-256" === d) x = 1088,
                C = 256;
            else if ("SHA3-384" === d) x = 832, C = 384;
            else if ("SHA3-512" === d) x = 576, C = 512;
            else if ("SHAKE128" === d) x = 1344, C = -1, H = 31, w = !0;
            else if ("SHAKE256" === d) x = 1088, C = -1, H = 31, w = !0;
            else throw Error("Chosen SHA variant is not supported");
            E = function(a, b, c, e, f) {
                c = x;
                var d = H,
                    h, k = [],
                    g = c >>> 5,
                    l = 0,
                    p = b >>> 5;
                for (h = 0; h < p && b >= c; h += g) e = M(a.slice(h, h + g), e), b -= c;
                a = a.slice(h);
                for (b %= c; a.length < g;) a.push(0);
                h = b >>> 3;
                a[h >> 2] ^= d << h % 4 * 8;
                a[g - 1] ^= 2147483648;
                for (e = M(a, e); 32 * k.length < f;) {
                    a = e[l % 5][l / 5 | 0];
                    k.push(a.lowOrder);
                    if (32 * k.length >=
                        f) break;
                    k.push(a.highOrder);
                    l += 1;
                    0 === 64 * l % c && M(null, e)
                }
                return k
            }
        }
        var I = h(k, y, v);
        var G = V(d);
        this.setHMACKey = function(a, b, c) {
            if (!0 === f) throw Error("HMAC key already set");
            if (!0 === A) throw Error("Cannot set HMAC key after calling update");
            if (!0 === w && 0 !== (8 & SUPPORTED_ALGS)) throw Error("SHAKE is not supported for HMAC");
            y = (c || {}).encoding || "UTF8";
            b = h(b, y, v)(a);
            a = b.binLen;
            b = b.value;
            var e = x >>> 3;
            c = e / 4 - 1;
            if (e < a / 8) {
                for (b = E(b, a, 0, V(d), C); b.length <= c;) b.push(0);
                b[c] &= 4294967040
            } else if (e > a / 8) {
                for (; b.length <= c;) b.push(0);
                b[c] &= 4294967040
            }
            for (a = 0; a <= c; a += 1) m[a] = b[a] ^ 909522486, t[a] = b[a] ^ 1549556828;
            G = F(m, G);
            l = x;
            f = !0
        };
        this.update = function(a) {
            var b, c = 0,
                e = x >>> 5;
            var f = I(a, p, u);
            a = f.binLen;
            var d = f.value;
            f = a >>> 5;
            for (b = 0; b < f; b += e) c + x <= a && (G = F(d.slice(b, b + e), G), c += x);
            l += c;
            p = d.slice(c >>> 5);
            u = a % x;
            A = !0
        };
        this.getHash = function(h, k) {
            if (!0 === f) throw Error("Cannot call getHash after setting HMAC key");
            var g = e(k);
            if (!0 === w && 0 !== (8 & SUPPORTED_ALGS)) {
                if (-1 === g.shakeLen) throw Error("shakeLen must be specified in options");
                C = g.shakeLen
            }
            switch (h) {
                case "HEX":
                    h =
                        function(a) {
                            return q(a, C, v, g)
                        };
                    break;
                case "B64":
                    h = function(a) {
                        return c(a, C, v, g)
                    };
                    break;
                case "BYTES":
                    h = function(b) {
                        return a(b, C, v)
                    };
                    break;
                case "ARRAYBUFFER":
                    try {
                        k = new ArrayBuffer(0)
                    } catch (ca) {
                        throw Error("ARRAYBUFFER not supported by this environment");
                    }
                    h = function(a) {
                        return b(a, C, v)
                    };
                    break;
                default:
                    throw Error("format must be HEX, B64, BYTES, or ARRAYBUFFER");
            }
            var m = E(p.slice(), u, l, J(G), C);
            for (k = 1; k < B; k += 1) 0 !== (8 & SUPPORTED_ALGS) && !0 === w && 0 !== C % 32 && (m[m.length - 1] &= 16777215 >>> 24 - C % 32), m = E(m, C, 0, V(d),
                C);
            return h(m)
        };
        this.getHMAC = function(h, k) {
            if (!1 === f) throw Error("Cannot call getHMAC without first setting HMAC key");
            var g = e(k);
            switch (h) {
                case "HEX":
                    h = function(a) {
                        return q(a, C, v, g)
                    };
                    break;
                case "B64":
                    h = function(a) {
                        return c(a, C, v, g)
                    };
                    break;
                case "BYTES":
                    h = function(b) {
                        return a(b, C, v)
                    };
                    break;
                case "ARRAYBUFFER":
                    try {
                        h = new ArrayBuffer(0)
                    } catch (ca) {
                        throw Error("ARRAYBUFFER not supported by this environment");
                    }
                    h = function(a) {
                        return b(a, C, v)
                    };
                    break;
                default:
                    throw Error("outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER");
            }
            k = E(p.slice(), u, l, J(G), C);
            var m = F(t, V(d));
            m = E(k, C, x, m, C);
            return h(m)
        }
    };
    "function" === typeof define && define.amd ? define(function() {
        return E
    }) : "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (module.exports = E), exports = E) : g.jsSHA = E
})(this);
(function(g) {
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
                var e = d.charCodeAt(a++);
                var h = d.charCodeAt(a++);
                var g = b >> 2;
                b = (b & 3) << 4 | e >> 4;
                var k = (e & 15) << 2 | h >> 6;
                var l = h & 63;
                isNaN(e) ? k = l = 64 : isNaN(h) && (l = 64);
                c = c + this._keyStr.charAt(g) + this._keyStr.charAt(b) +
                    this._keyStr.charAt(k) + this._keyStr.charAt(l)
            }
            return c
        },
        decode: function(d) {
            var c = "",
                a = 0;
            for (d = d.replace(/[^A-Za-z0-9\+\/\=]/g, ""); a < d.length;) {
                var b = this._keyStr.indexOf(d.charAt(a++));
                var e = this._keyStr.indexOf(d.charAt(a++));
                var h = this._keyStr.indexOf(d.charAt(a++));
                var g = this._keyStr.indexOf(d.charAt(a++));
                b = b << 2 | e >> 4;
                e = (e & 15) << 4 | h >> 2;
                var k = (h & 3) << 6 | g;
                c += String.fromCharCode(b);
                64 != h && (c += String.fromCharCode(e));
                64 != g && (c += String.fromCharCode(k))
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
            for (var c = "", a = 0, b, e, h; a < d.length;) b = d.charCodeAt(a), 128 > b ? (c += String.fromCharCode(b), a++) : 191 < b && 224 > b ? (e = d.charCodeAt(a + 1), c += String.fromCharCode((b & 31) << 6 | e & 63), a += 2) : (e = d.charCodeAt(a + 1), h = d.charCodeAt(a +
                2), c += String.fromCharCode((b & 15) << 12 | (e & 63) << 6 | h & 63), a += 3);
            return c
        }
    };
    "function" === typeof define && define.amd ? define(function() {
        return d
    }) : "undefined" !== typeof exports ? ("undefined" !== typeof module && module.exports && (module.exports = d), exports = d) : g.Coder = d
})(this);
var SS;
(function(g) {
    (function(d) {
        var g = function() {
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
            c.prototype.SendCmdButNotRetry = function(a, b, c, h, g) {
                void 0 === h && (h = null);
                void 0 === g && (g = 15E3);
                console.log("[GameNetwork.SendCmdButNotRetry] %c" + a, "color:coral");
                this._gameClient ? (b.kiosk_id = d.LoginModel.LoginInfo.kiosk_id, b.machine_id = d.LoginModel.LoginInfo.machine_id, this.cmdCallbackDict[a] = c, this.cmdErrorHandlerDict[a] = h, this._gameClient.send_cmd(this._systemName, a, b, this.AllCmdCallbackNoRetry.bind(this), g)) : console.error("[GameNetwork.SendCmdButNotRetry] arkCkient is null")
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
                    var e = b.cmd_data.data.B0 | b.cmd_data.data.C0 | b.cmd_data.data.D0 | b.cmd_data.data.F0 | b.cmd_data.data.cid;
                    this._iCmdId === e ? (this._iCmdId++, this.CmdCallback(c, a, b)) : (console.warn("result ", b), console.warn("this._iCmdId " + this._iCmdId + " != serverCid " + e))
                } else this.CmdCallback(c, a, b);
                else this.ResendHandler(c, a, b)
            };
            c.prototype.ResendHandler = function(a, b,
                c) {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return b === ArkSDK.HttpConnect.HttpResult.Timeout ? [3, 2] : [4, new Promise(function(a) {
                                    return setTimeout(a, 3E3)
                                })];
                            case 1:
                                e.sent(), e.label = 2;
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
        d.GameNetwork = g
    })(g.Network || (g.Network = {}))
})(SS || (SS = {}));
(function(g) {
    (function(d) {
        var q = function() {
            function c(a, b) {
                this.cmdDict = {};
                this.OnChangeJpValCmdSignal = new g.Network.Common.Signal;
                this.OnWinJPValueSignal = new g.Network.Common.Signal;
                this.OnChangeInGameJpSingnal = new g.Network.Common.Signal;
                this.OnJPStartSignal = new g.Network.Common.Signal;
                this.OnJPFinishSignal = new g.Network.Common.Signal;
                this.OnUpdatePlayerInfoSignal = new g.Network.Common.Signal;
                this.OnRecvSubmarineInfoSignal = new g.Network.Common.Signal;
                this.OnRecvSubmarineOccupySignal = new g.Network.Common.Signal;
                this.OnRecordUpdateSignal = new g.Network.Common.Signal;
                this.pinClient = this.socketClient = null;
                this.systemName = "jp";
                this.retryTimer = new g.Network.Common.RetryTimer;
                this.socketClient = a;
                this.socketClient.systemDict[this.systemName] = this;
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
                this.cmdDict.oceanHeart = this.OnRecvOceanHeartCmd.bind(this);
                this.cmdDict.player_info_update = this.OnRecvPlayerInfoCmd.bind(this);
                this.cmdDict.GetSubmarineInfo = this.OnRecvSubmarineInfoCmd.bind(this);
                this.cmdDict.BroadCastSubmarineOccupy = this.OnRecvSubmarineOccupyCmd.bind(this);
                this.cmdDict.break_record = this.OnRecvRecordUpdate.bind(this)
            }
            c.prototype.Release = function() {
                this.socketClient = null;
                this.OnChangeJpValCmdSignal.removeAll();
                this.OnChangeJpValCmdSignal = null;
                this.OnWinJPValueSignal.removeAll();
                this.OnWinJPValueSignal = null;
                this.OnChangeInGameJpSingnal.removeAll();
                this.OnChangeInGameJpSingnal = null;
                this.OnJPStartSignal && (this.OnJPStartSignal.removeAll(), this.OnJPStartSignal = null);
                this.OnJPFinishSignal && (this.OnJPFinishSignal.removeAll(), this.OnJPFinishSignal = null);
                this.OnUpdatePlayerInfoSignal.removeAll();
                this.OnUpdatePlayerInfoSignal = null;
                this.OnRecvSubmarineInfoSignal.removeAll();
                this.OnRecvSubmarineInfoSignal = null;
                this.OnRecvSubmarineOccupySignal.removeAll();
                this.OnRecvSubmarineOccupySignal = null;
                this.OnRecordUpdateSignal && (this.OnRecordUpdateSignal.removeAll(), this.OnRecordUpdateSignal = null);
                this.getOceanHeartCB = this.getTreasureMapCB = this.getInGameJpCmdCb = this.getJpCmdCb = this.cmdDict = null
            };
            c.prototype.setNetClient = function(a, b) {
                this.socketClient = a;
                this.socketClient.systemDict[this.systemName] = this;
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
            c.prototype.OnRecvCandidateCmd = function(a, b, c, d, g, k, l) {
                console.log("[SS.Network.OnRecvCandidateCmd]", a, b, c, d, g, k, l, (new Date).toUTCString());
                a == ArkSDK.SocketResult.OK &&
                    (this.strJpSerialID = b.JPSerialID, this.isJPReadyRequest = !0)
            };
            c.prototype.OnRecvDenyCmd = function(a, b, c, d, g, k, l) {
                console.log("[SS.Network.OnRecvDenyCmd]", a, b, c, d, g, k, l, (new Date).toUTCString());
                a == ArkSDK.SocketResult.OK && (a = b.DenyType, b.JPSerialID == this.strJpSerialID && (3 == a ? this.retryTimer.ResetTimes() : this.retryTimer.Stop()))
            };
            c.prototype.OnRecvGameCmd = function(a, b, c, h, g, k, l) {
                console.log("[SS.Network.OnRecvGameCmd]", a, b, c, h, g, k, l, (new Date).toUTCString());
                a == ArkSDK.SocketResult.OK && (a = b.machine, this.strJpSerialID ==
                    b.JPSerialID && a == d.LoginModel.LoginInfo.machine_id && this.retryTimer.Stop())
            };
            c.prototype.OnRecvJPStart = function(a, b, c, d, g, k, l) {
                console.log("[SS.Network.OnRecvJPStart]", a, b, c, d, g, k, l, (new Date).toUTCString());
                a == ArkSDK.SocketResult.OK && this.OnJPStartSignal.dispatch()
            };
            c.prototype.OnRecvJPFinish = function(a, b, c, d, g, k, l) {
                console.log("[SS.Network.OnRecvJPFinish]", a, b, c, d, g, k, l, (new Date).toUTCString());
                a == ArkSDK.SocketResult.OK && this.OnJPFinishSignal.dispatch()
            };
            c.prototype.OnRecvChangeCmd = function(a,
                b, c, d, g, k, l) {
                console.log("[SS.Network.JPSystem]", a, b, c, d, g, k, l);
                a == ArkSDK.SocketResult.OK && (console.log("OnRecvChangeCmd ori : ", b), a = this.CovertJPVal(b, "0", "1", "2", "3"), console.log("OnRecvChangeCmd jpVal after convert: ", a), a && this.OnChangeJpValCmdSignal.dispatch(a[0], a[1], a[2], a[3], b.exchange_rate))
            };
            c.prototype.OnRecvChangeInGameJpCmd = function(a, b, c, d, g, k, l) {
                console.warn("OnRecvChangeInGameJpCmd result = ", a);
                a == ArkSDK.SocketResult.OK && (console.log("OnRecvChangeInGameJpCmd data : ", b), this.OnChangeInGameJpSingnal.dispatch(b))
            };
            c.prototype.OnRecvWinValueCmd = function(a, b, c, h, g, k, l) {
                console.log("[SS.Network.OnRecvWinValueCmd]", a, b, c, h, g, k, l);
                if (a == ArkSDK.SocketResult.OK) {
                    a = b[0];
                    c = b[1];
                    h = b[2];
                    g = b[3];
                    k = b[4];
                    l = b[5];
                    var e = b[6],
                        p = b[7];
                    b = b[8];
                    a == d.LoginModel.LoginInfo.machine_id && c == this.pinClient.ArkID ? this.strJpSerialID == e && (this.strJpSerialID = null, this.retryTimer.Stop(), void 0 == b || null == b || "" == b ? (this.OnWinJPValueSignal.dispatch(h, g, p, k, l), console.log("[SS.Network.OnRecvWinValueCmd] normal ")) : (this.OnWinJPValueSignal.dispatch(h,
                        g, p, k, l, b), console.log("[SS.Network.OnRecvWinValueCmd] with leaderBoardInfo ", b))) : (console.error("server ArkId : ", c, "client ArkId : ", this.pinClient.ArkID), console.error("server machine_id : ", a, "client MachineID : ", d.LoginModel.LoginInfo.machine_id))
                }
            };
            c.prototype.CovertJPVal = function(a, b, c, d, g) {
                if (a && a.hasOwnProperty("jp_rate")) {
                    var e = a.jp_rate,
                        h, p, q, B;
                    a[b] && (h = this.accMul(a[b], e));
                    a[c] && (p = this.accMul(a[c], e));
                    a[d] && (q = this.accMul(a[d], e));
                    a[g] && (B = this.accMul(a[g], e));
                    return [h, p, q, B]
                }
                console.error("Recv Jp Value Error Data : ",
                    a)
            };
            c.prototype.accMul = function(a, b) {
                var c = 0,
                    d = 0;
                a = a.toString();
                b = b.toString();
                try {
                    c = a.split(".")[1].length
                } catch (p) {}
                try {
                    d = b.split(".")[1].length
                } catch (p) {}
                return Number(a.replace(".", "")) * Number(b.replace(".", "")) / Math.pow(10, c + d)
            };
            c.prototype.SendJPRequest = function(a, b) {
                var c = this;
                void 0 === b && (b = 0);
                console.log("[JPSystem.SendJPRequest]", a, b);
                this.retryTimer.Start(function() {
                    var e = {};
                    e.token = c.pinClient.ArkToken;
                    e.game = a;
                    e.JPSerialID = c.strJpSerialID;
                    e.bet = b;
                    c.socketClient.SendCmd(c.systemName, "req",
                        e);
                    console.log("SendJPRequest = ", e)
                }, function() {
                    console.log("SendJPRequest Timeout!")
                }, [0, 2, 4, 8, 20])
            };
            c.prototype.RecvGetJpValCmd = function(a, b, c, d, g, k, l) {
                console.warn("RecvGetJpValCmd = ", a);
                a == ArkSDK.SocketResult.OK && (console.log("RecvGetJpValCmd ori : ", b), a = this.CovertJPVal(b.data, "jp0", "jp1", "jp2", "jp3"), console.log("RecvGetJpValCmd jpVal after convert: ", a), a && (this.getJpCmdCb(a[0], a[1], a[2], a[3], b.data.exchange_rate), this.getJpCmdCb = null))
            };
            c.prototype.RecvGetInGameJpValCmd = function(a, b, c,
                d, g, k, l) {
                console.warn("RecvGetInGameJpValCmd = ", a);
                a == ArkSDK.SocketResult.OK && (console.log("RecvGetInGameJpValCmd ori : ", b), this.getInGameJpCmdCb(b), this.getInGameJpCmdCb = null)
            };
            c.prototype.OnRecvTreasureMapCmd = function(a, b, c, d, g, k, l) {
                console.warn("OnRecvTreasureMapCmd result = ", a);
                a == ArkSDK.SocketResult.OK && (console.log("OnRecvTreasureMapCmd data : ", b), b && this.getTreasureMapCB && this.getTreasureMapCB(b))
            };
            c.prototype.OnRecvOceanHeartCmd = function(a, b, c, d, g, k, l) {
                console.warn("OnRecvOceanHeartCmd result = ",
                    a);
                a == ArkSDK.SocketResult.OK && (console.log("OnRecvOceanHeartCmd data : ", b), b && this.getOceanHeartCB && this.getOceanHeartCB(b))
            };
            c.prototype.OnRecvPlayerInfoCmd = function(a, b, c, d, g, k, l) {
                console.log("[SS.Network.OnRecvPlayerInfo]", a, b, c, d, g, k, l, (new Date).toUTCString());
                a == ArkSDK.SocketResult.OK && this.OnUpdatePlayerInfoSignal.dispatch(b)
            };
            c.prototype.OnRecvSubmarineInfoCmd = function(a, b, c, d, g, k, l) {
                console.log("[SS.Network.OnRecvSubmarineInfo]", a, b, c, d, g, k, l, (new Date).toUTCString());
                a == ArkSDK.SocketResult.OK &&
                    this.OnRecvSubmarineInfoSignal.dispatch(b)
            };
            c.prototype.OnRecvSubmarineOccupyCmd = function(a, b, c, d, g, k, l) {
                console.log("[SS.Network.OnRecvSubmarineOccupy]", a, b, c, d, g, k, l, (new Date).toUTCString());
                a == ArkSDK.SocketResult.OK && this.OnRecvSubmarineOccupySignal.dispatch(b)
            };
            c.prototype.OnRecvRecordUpdate = function(a, b, c, d, g, k, l) {
                console.log("[SS.Network.OnRecvRecordUpdate]", a, b, c, d, g, k, l, (new Date).toUTCString());
                a == ArkSDK.SocketResult.OK && this.OnRecordUpdateSignal.dispatch(b)
            };
            return c
        }();
        d.JPSystem = q
    })(g.Network ||
        (g.Network = {}))
})(SS || (SS = {}));
(function(g) {
    (function(d) {
        var q = function() {
            function c(a) {
                this.OnMarqueeSignal = new g.Network.Common.Signal;
                this.OnUpdateSignal = new g.Network.Common.Signal;
                this.OnRecvSubmarineOccupyInfoSignal = new g.Network.Common.Signal;
                this.cmdDict = {};
                this.m_isPosKick = !1;
                this.m_ServerToIdleWaitMin = -1;
                this.loginLogoMode = "";
                this.m_socketClient = a;
                this.m_socketClient.systemDict.lobby = this;
                this.cmdDict.shutdown = this.OnRecvShutdownCmd.bind(this);
                this.cmdDict.pos_kick = this.OnRecvPosKickCmd.bind(this);
                this.cmdDict.UpdateInfo =
                    this.OnRecvUpdataInfoCmd.bind(this);
                this.cmdDict.GetSubmarineOccupyInfo = this.OnRecvSubmarineOccupyInfo.bind(this)
            }
            c.prototype.Release = function() {
                this.m_socketClient = null;
                this.OnMarqueeSignal && (this.OnMarqueeSignal.removeAll(), this.OnMarqueeSignal = null);
                this.OnUpdateSignal && (this.OnUpdateSignal.removeAll(), this.OnUpdateSignal = null);
                this.OnRecvSubmarineOccupyInfoSignal && (this.OnRecvSubmarineOccupyInfoSignal.removeAll(), this.OnRecvSubmarineOccupyInfoSignal = null)
            };
            c.prototype.setLoginLogoMode = function(a) {
                this.loginLogoMode =
                    a
            };
            c.prototype.setNetClient = function(a) {
                this.m_socketClient = a;
                this.m_socketClient.systemDict.lobby = this
            };
            c.prototype.PingWebSocket = function(a) {
                this.m_socketClient && this.m_socketClient.SendCmd("lobby", "ping", null, a)
            };
            c.prototype.OnRecvShutdownCmd = function(a, b, c, d, g, k, l) {
                console.log("[SS.Network.OnRecvShutdownCmd]", a, b, c, d, g, k, l, (new Date).toUTCString());
                a == ArkSDK.SocketResult.OK && b.hasOwnProperty("min") && (this.m_ServerToIdleWaitMin = parseInt(b.min))
            };
            c.prototype.OnRecvPosKickCmd = function(a, b, c, d, g,
                k, l) {
                console.log("[SS.Network.OnRecvPosKickCmd]", a, b, c, d, g, k, l, (new Date).toUTCString());
                a == ArkSDK.SocketResult.OK && (this.m_isPosKick = !0)
            };
            c.prototype.OnRecvUpdataInfoCmd = function(a, b, c, d, g, k, l) {
                console.log("[SS.Network.OnRecvUpdataInfoCmd]", a, b, c, d, g, k, l, (new Date).toUTCString());
                if (a == ArkSDK.SocketResult.OK) {
                    if (b.hasOwnProperty("msg_info") && b.msg_info.hasOwnProperty("platform"))
                        for (a = 0, c = b.msg_info.platform; a < c.length; a++) "PHONE" === c[a] && this.OnMarqueeSignal.dispatch(b.msg_info);
                    b.hasOwnProperty("game_version") &&
                        b.game_version.hasOwnProperty(this.loginLogoMode) && this.OnUpdateSignal.dispatch(b.game_version[this.loginLogoMode])
                }
            };
            c.prototype.SendSessionLengthLogin = function(a) {
                var b = {};
                b.gameId = a;
                this.m_socketClient && this.m_socketClient.SendCmd("lobby", "SessionLengthLogin", b, null)
            };
            c.prototype.SendSessionLengthLogout = function(a, b) {
                void 0 === b && (b = null);
                var c = {};
                c.gameId = a;
                this.m_socketClient && this.m_socketClient.SendCmd("lobby", "SessionLengthLogout", c, b)
            };
            c.prototype.SendGameRequest = function(a) {
                var b = {};
                b.cmd =
                    a;
                this.m_socketClient && this.m_socketClient.SendCmd("lobby", "gameRequest", b, null)
            };
            c.prototype.SendGetSubmarineOccupyInfo = function() {
                this.m_socketClient && this.m_socketClient.SendCmd("lobby", "getSubmarineOccupyInfo", null, null)
            };
            c.prototype.OnRecvSubmarineOccupyInfo = function(a, b, c, d, g, k, l) {
                console.log("[SS.Network.OnRecvSubmarineOccupyInfoSignal]", a, b, c, d, g, k, l, (new Date).toUTCString());
                a == ArkSDK.SocketResult.OK && this.OnRecvSubmarineOccupyInfoSignal.dispatch(b)
            };
            c.prototype.SendClearSubmarineOccupyInfo =
                function(a, b) {
                    var c = {};
                    c.submarine_name = a;
                    c.occupy_ts = b;
                    this.m_socketClient && this.m_socketClient.SendCmd("lobby", "clearSubmarineOccupyInfo", c, null)
                };
            return c
        }();
        d.LobbySystem = q
    })(g.Network || (g.Network = {}))
})(SS || (SS = {}));
(function(g) {
    (function(d) {
        (function(d) {
            var c = function() {
                function a(a, c, d, g, k) {
                    void 0 === k && (k = 0);
                    this.active = !0;
                    this.params = null;
                    this._listener = c;
                    this._isOnce = d;
                    this.context = g;
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
    })(g.Network ||
        (g.Network = {}))
})(SS || (SS = {}));
(function(g) {
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
                a.prototype._registerListener = function(a, c, h, g) {
                    var b = this._indexOfListener(a, h);
                    if (-1 !== b) {
                        if (a = this._bindings[b], a.isOnce() !== c) throw Error("You cannot add" + (c ? "" : "Once") +
                            "() then add" + (c ? "Once" : "") + "() the same listener without removing the relationship first.");
                    } else a = new d.SignalBinding(this, a, c, h, g), this._addBinding(a);
                    this.memorize && this._prevParams && a.execute(this._prevParams);
                    return a
                };
                a.prototype._addBinding = function(a) {
                    var b = this._bindings.length;
                    do --b; while (this._bindings[b] && a.priority <= this._bindings[b].priority);
                    this._bindings.splice(b + 1, 0, a)
                };
                a.prototype._indexOfListener = function(a, c) {
                    for (var b = this._bindings.length, e; b--;)
                        if (e = this._bindings[b], e.getListener() ===
                            a && e.context === c) return b;
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
    })(g.Network || (g.Network = {}))
})(SS || (SS = {}));
(function(g) {
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
    })(g.Network || (g.Network = {}))
})(SS || (SS = {}));
(function(g) {
    (function(d) {
        var g = function() {
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
            c.prototype.DoLogin = function(a, b, e, d, g, k, l, q) {
                void 0 === k && (k = null);
                void 0 === l && (l = "");
                void 0 === q && (q = "");
                c.LoginInfo.user_id = a;
                c.LoginInfo.login_version = l;
                c.LoginInfo.connect_network = q;
                k && (l = navigator.deviceMemory, c.LoginInfo.BrowserInfo = k.browser.name, c.LoginInfo.BrowserVersion = k.browser.version, c.LoginInfo.DeviceInfo = k.os.name, c.LoginInfo.DeviceVersion = k.os.version, c.LoginInfo.Machine = k.device.device, c.LoginInfo.OS = k.os.name, c.LoginInfo.OSVersion =
                    k.os.version, c.LoginInfo.CPU = k.cpu.architecture, c.LoginInfo.Mem = 1024 * +l, c.LoginInfo.Height = screen.height, c.LoginInfo.Width = screen.width, c.LoginInfo.DeviceType = void 0 == k.device.type || void 0 == k.device.vendor || void 0 == k.device.model ? k.os.name : k.device.type + "_" + k.device.vendor + "_" + k.device.model);
                k = new JSEncrypt;
                k.setKey(this.ENCRYPT_KEY);
                c.LoginInfo.user_pw_encrypt = k.encrypt(b);
                this.m_callback.login.success = e;
                this.m_callback.login.fail = d;
                this.m_callback.onSokcetClose = g;
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
            c.prototype.DoGuestLogin = function(a, b, e, d, g, k, l, q, A) {
                void 0 === l && (l = null);
                void 0 === q && (q = "");
                void 0 === A && (A = "");
                (new JSEncrypt).setKey(this.ENCRYPT_KEY);
                this.m_callback.login.success = d;
                this.m_callback.login.fail = g;
                this.m_callback.onSokcetClose = k;
                c.LoginInfo.device_uuid = a;
                c.LoginInfo.code = b;
                c.LoginInfo.logo = e;
                c.LoginInfo.user_id = "";
                c.LoginInfo.user_pw_encrypt = "";
                c.LoginInfo.login_version = q;
                c.LoginInfo.connect_network = A;
                l && (c.LoginInfo.BrowserInfo = l.browser.name, c.LoginInfo.BrowserVersion = l.browser.version,
                    c.LoginInfo.DeviceInfo = l.os.name, c.LoginInfo.DeviceVersion = l.os.version, c.LoginInfo.DeviceType = l.device.type + "_" + l.device.vendor + "_" + l.device.model);
                this.m_state.Transition(c.enumState.VerifyGuest)
            };
            c.prototype.DoLogout = function(a, b, e) {
                void 0 === e && (e = 0);
                this.m_callback.logout.success = a;
                this.m_callback.logout.fail = b;
                this.m_logoutSkillGameResult = e;
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
                    } catch (e) {
                        b = b.text | b | e
                    }
                    console.error("[LoginModel] %c DeviceLogin fail. Status: " + a + "\n", "font-size:18px;font-weight:bold;color:green;", b);
                    a == ArkSDK.HttpResult.Condition &&
                        -5 == b.reason ? this.IsHaveLoginCache() ? this.m_state.Transition(c.enumState.CheckKioskTokenAndClear) : null != this.m_callback.login.fail && (this.m_callback.login.fail(a, b, "DeviceLogin"), this.m_callback.login.fail = null) : null != this.m_callback.login.fail && (this.m_callback.login.fail(a, b, "DeviceLogin"), this.m_callback.login.fail = null)
                }
            };
            c.prototype.RecvBindAck = function(a, b, c, d, g, k, l) {
                if (!this.m_socketClient || this.m_socketClient.isConnect) a == ArkSDK.SocketResult.OK && b && b.hasOwnProperty("result") && 0 == b.result ?
                    (console.log("result :" + a), console.log("data :", b), console.log("ret :" + c), console.log("sn : " + d), console.log("sys :" + g), console.log("cmd :" + k), console.log("process_time_ms :" + l), null != this.m_callback.login.success && (this.m_callback.login.success(this.m_kioskClient, this.m_pinClient, this.m_socketClient), this.m_callback.login.success = null), this.m_callback.login.fail = null) : this.PinLoginFailBySocket(a, b)
            };
            c.prototype.PinLoginFailBySocket = function(a, b) {
                this.m_socketClient && this.m_socketClient.isConnect &&
                    this.m_socketClient.Close();
                null != this.m_callback.login.fail && (this.m_callback.login.fail(a, b, "BindSocket"), this.m_callback.login.fail = null)
            };
            c.prototype.RecvCheckRedisKioskToken = function(a, b, e, d) {
                console.log(" RecvCheckRedisKioskToken data :", b);
                a == ArkSDK.HttpResult.OK && 0 == b.kiosk_result ? (this.m_socketClient && this.m_socketClient.isConnect && this.m_socketClient.Close(), this.m_state.Transition(c.enumState.KioskLogin)) : this.PinLoginFail(ArkSDK.HttpResult.Condition, {
                    reason: -5
                })
            };
            c.prototype.RecvCheckRedisPinToken =
                function(a, b, e, d) {
                    console.log("RecvCheckRedisPinToken data :", b);
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
                                return a.sent(), this.m_socketClient && this.m_socketClient.isConnect && this.m_socketClient.Close(), null != this.m_callback.logout.success && (this.m_callback.logout.success(), this.m_callback.logout.success = null), this.m_callback.logout.fail = null, this.m_callback.onSokcetClose = null, [2]
                        }
                    })
                })
            };
            c.prototype.OnPinLogin = function(a, b) {
                console.log("[LoginModel] OnPinLogin data: ", b);
                if (!this.m_socketClient || this.m_socketClient.isConnect)
                    if (a == ArkSDK.HttpResult.OK) console.log("[LoginModel] %c PinLogin success",
                        "font-size:18px;font-weight:bold;color:green;"), a = 0, void 0 != b.client_purchase_serial_id && (a = b.client_purchase_serial_id), c.LoginInfo.purchase_serial_id = a + 1, c.LoginInfo.pin_ark_id = b.ark_id, c.LoginInfo.pin_ark_token = b.ark_token, this.IsSupportLocalStorage() ? (localStorage.setItem("pin_ark_id", c.LoginInfo.pin_ark_id), localStorage.setItem("pin_ark_token", c.LoginInfo.pin_ark_token)) : this.IsSupportCookie() && (document.cookie = "pin_ark_id=" + c.LoginInfo.pin_ark_id + ";", document.cookie = "pin_ark_token=" + c.LoginInfo.pin_ark_token +
                        ";"), this.m_state.Transition(c.enumState.BindSocket);
                    else {
                        var e = null;
                        if (null != b) try {
                            e = this.m_pinClient.decodeData(b.text)
                        } catch (h) {
                            e = b.text | b | h
                        }
                        console.error("[LoginModel] %c PinLogin fail. Status: " + a + "\n", "font-size:18px;font-weight:bold;color:green;", e);
                        a == ArkSDK.HttpResult.Condition && -5 == e.reason ? this.IsHaveLoginCache() ? this.m_state.Transition(c.enumState.CheckPinTokenAndClear) : this.PinLoginFail(a, e) : this.PinLoginFail(a, e)
                    }
            };
            c.prototype.IsHaveLoginCache = function() {
                var a = !1;
                this.IsSupportLocalStorage() ?
                    a = localStorage.getItem("kiosk_ark_id") && localStorage.getItem("kiosk_ark_token") || localStorage.getItem("pin_ark_id") && localStorage.getItem("pin_ark_token") ? !0 : !1 : this.IsSupportCookie() && (a = this.GetCookie("kiosk_ark_id") && this.GetCookie("kiosk_ark_token") || this.GetCookie("pin_ark_id") && this.GetCookie("pin_ark_token") ? !0 : !1);
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
                    })[0] ||
                    null
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
                null != this.m_callback.login.fail &&
                    (this.m_callback.login.fail(a, b, "PinLogin"), this.m_callback.login.fail = null);
                this.m_socketClient && this.m_socketClient.isConnect && this.m_socketClient.Close()
            };
            c.prototype.OnPinLogout = function(a, b) {
                console.log("[LoginModel] OnPinLogout data: ", b);
                if (a == ArkSDK.HttpResult.OK) console.log("[LoginModel] %c PinLogout success", "font-size:18px;font-weight:bold;color:orange;"), this.SendUnPinSuccessByWebSocket();
                else {
                    var c = null;
                    if (null != b) try {
                        c = this.m_pinClient.decodeData(b.text)
                    } catch (h) {
                        c = b.text | b | h
                    }
                    console.error("[LoginModel] PinLogout fail. data: ",
                        c);
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
                        a =
                            void 0;
                        try {
                            a = {
                                fromType: "mobile_kiosk",
                                kiosk_id: c.LoginInfo.kiosk_id,
                                device_id: c.LoginInfo.device_id,
                                mode: gd_LogoMode
                            }
                        } catch (l) {
                            this.m_callback.login.fail("Failed to obtain gd_LogoMode", "Failed to obtain gd_LogoMode", "DeviceLogin");
                            break
                        }
                        this.m_kioskClient.device_login("android", c.LoginInfo.device_id, this.OnDeviceLogin.bind(this), void 0, a);
                        break;
                    case c.enumState.ConnectKioskSocket:
                        var e = this;
                        e.m_socketClient = new ArkSDK.ArkSocketClient(e.m_kioskClient, 1024, 5, 10, !1);
                        e.m_socketClient.m_auth_exdata = {
                            kiosk_id: c.LoginInfo.kiosk_id,
                            device_id: c.LoginInfo.device_id,
                            machine_id: c.LoginInfo.machine_id,
                            is_mobile: !0
                        };
                        e.m_socketClient.GetConnectInfo(function(a, b, d, h, g, k, p) {
                            console.log("[LoginModel] OnGetConnectInfo");
                            e.m_socketClient.ConnectSocket(g, k, p, function(a) {
                                console.log("[LoginModel] OnSocketConnected");
                                e.m_state.Transition(c.enumState.PinLogin)
                            }, function(a, b) {
                                console.log("[socket msg]", b)
                            }, function(a) {
                                console.log("[socket onClose!]");
                                a.authFailData && 3 > e.m_tryAuthFailTimes ? (console.warn("[socket auth failed !]", a.authFailData),
                                    a.authFailData = null, e.m_tryAuthFailTimes++, e.m_state.Transition(c.enumState.KioskLogin)) : null != e.m_callback.onSokcetClose && (e.m_callback.onSokcetClose(), e.m_callback.onSokcetClose = null)
                            }, function(a, b) {
                                console.error(a, "Socket Connect Errorr!", b);
                                e.m_callback.login.fail("Socket Connect Error", b, "ConnectWebSocket");
                                e.m_callback.login.fail = null
                            })
                        });
                        break;
                    case c.enumState.PinLogin:
                        b = c.LoginInfo.kiosk_id;
                        var d = c.LoginInfo.pin_id;
                        var g = c.LoginInfo.device_id;
                        var k = b + d;
                        this.m_pinClient.fromType = "pin";
                        this.m_pinClient.fromID =
                            k;
                        this.m_pinClient.fromToken = d;
                        a = void 0;
                        try {
                            a = {
                                fromType: "mobile",
                                kiosk_id: b,
                                device_id: g,
                                OpenID: k,
                                mode: gd_LogoMode
                            }
                        } catch (l) {
                            this.m_callback.login.fail("Failed to obtain gd_LogoMode", "Failed to obtain gd_LogoMode", "PinLogin");
                            break
                        }
                        this.m_pinClient.custom_login("pin", k, d, this.OnPinLogin.bind(this), a, a);
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
                        a = b = d = g = null;
                        this.IsSupportLocalStorage() ? (b = localStorage.getItem("kiosk_ark_id"), a = localStorage.getItem("kiosk_ark_token")) : this.IsSupportCookie() && (b = localStorage.getItem("kiosk_ark_id"), a = localStorage.getItem("kiosk_ark_token"));
                        a = {
                            kiosk_ark_id: b,
                            kiosk_ark_token: a
                        };
                        this.m_kioskClient.send_drt_cmd("lobby", "checkToken", a, this.RecvCheckRedisKioskToken.bind(this));
                        break;
                    case c.enumState.CheckPinTokenAndClear:
                        a = b = d = g = null;
                        this.IsSupportLocalStorage() ? (g = localStorage.getItem("pin_ark_id"), d = localStorage.getItem("pin_ark_token")) : this.IsSupportCookie() && (g = this.GetCookie("pin_ark_id"), d = this.GetCookie("pin_ark_token"));
                        a = {
                            pin_ark_id: g,
                            pin_ark_token: d
                        };
                        this.m_kioskClient.send_drt_cmd("lobby", "checkToken", a, this.RecvCheckRedisPinToken.bind(this));
                        break;
                    case c.enumState.PinLogout:
                        null != this.m_pinClient && (a = {
                            result: this.m_logoutSkillGameResult
                        }, this.m_pinClient.send_cmd("lobby", "PinLogout", a, this.OnPinLogout.bind(this)))
                }
            };
            c.prototype.getContactInfoNotLogin = function(a, b, e, d) {
                this.getContactInfoSuccessCallback = e;
                this.getContactInfoFailCallback = d;
                c.LoginInfo.logo = b;
                this.m_kioskClient.send_drt_cmd("lobby", "getContactInfo", {
                    code: a,
                    logo: b
                }, this.onRecieveContactInfoNotLogin.bind(this))
            };
            c.prototype.onRecieveContactInfoNotLogin = function(a, b) {
                console.log("[LoginModel] onRecieveContactInfoNotLogin state: ", a);
                console.log("[LoginModel] onRecieveContactInfoNotLogin data: ", b);
                a == ArkSDK.HttpResult.OK && 0 == b.err_code ? null != this.getContactInfoSuccessCallback &&
                    (this.getContactInfoSuccessCallback(a, b, "getContactInfoNotLogin"), this.getContactInfoSuccessCallback = null) : (console.error("[LoginModel] %c getContactInfoNotLogin failed\n", "font-size:18px;font-weight:bold;color:green;", b), null != this.getContactInfoFailCallback && (this.getContactInfoFailCallback(a, b, "getContactInfoNotLogin"), this.getContactInfoFailCallback = null))
            };
            c.prototype.sendDirectClickLog = function(a, b, c, d, g, k) {
                void 0 === k && (k = null);
                var e = new Date,
                    h = e.getTime(),
                    p = e.getTime() - 6E4 * e.getTimezoneOffset();
                e = [];
                e[0] = {
                    click_id: a,
                    btn_click_id: b,
                    device_id: d,
                    logo: g,
                    click_name: c,
                    btn_click_times: 1,
                    device_type: 1,
                    client_time_utc: Math.floor(h / 1E3),
                    client_time_local: Math.floor(p / 1E3),
                    browser_info: k.browser.name,
                    browser_version: k.browser.version,
                    device_info: k.os.name,
                    device_version: k.os.version
                };
                a = {};
                a.btn_click_list = e;
                console.warn("sendDirectClickLog");
                console.warn(a);
                this.m_kioskClient.send_drt_cmd("lobby", "sendRegDirectClickLog", a, null)
            };
            c.prototype.sendDirectCmd = function(a, b, c, d, g, k) {
                console.log("LoginModel.sendDirectCmd");
                console.log(a);
                console.log(b);
                console.log(c);
                this.m_kioskClient.send_drt_cmd(a, b, c, d, g, k)
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
        d.LoginModel = g
    })(g.Network || (g.Network = {}))
})(SS || (SS = {}));
(function(g) {
    g = g.Network || (g.Network = {});
    g = g.LoginModel || (g.LoginModel = {});
    g = g.enumState || (g.enumState = {});
    g[g.None = 0] = "None";
    g[g.VerifyMobile = 1] = "VerifyMobile";
    g[g.VerifyMobileByArkID = 2] = "VerifyMobileByArkID";
    g[g.KioskLogin = 3] = "KioskLogin";
    g[g.ConnectKioskSocket = 4] = "ConnectKioskSocket";
    g[g.PinLogin = 5] = "PinLogin";
    g[g.BindSocket = 6] = "BindSocket";
    g[g.CheckKioskTokenAndClear = 7] = "CheckKioskTokenAndClear";
    g[g.CheckPinTokenAndClear = 8] = "CheckPinTokenAndClear";
    g[g.PinLogout = 9] = "PinLogout";
    g[g.VerifyGuest =
        10] = "VerifyGuest"
})(SS || (SS = {}));
(function(g) {
    (function(d) {
        var q = function() {
            function c(a, b) {
                this.ENCRYPT_KEY = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC0l1BzizlBXTIs3X235yn5EfcNhbt3cgBZ + /peA2WBGh8HUKC2cWGOS3xtRtoPrco/NxNUJD1bhjIeWe0PCRQNYRW76DHhWylspBmgv45wFkTaTGLLZoXeK7BvajEXIrvs03RgGCboXI2CNB3aaOJXqpSPBJ6nbfF9QJYaYLiKkQIDAQAB";
                this.cmdTmpDataDict = {};
                this.cmdRetryTimesDict = {};
                this.cmdCallbackDict = {};
                this.cmdRecvDict = {};
                this.cmdSysName = {};
                this.Timer = [2E3, 4E3, 8E3, 16E3];
                this.systemName = "lobby";
                this.m_arrJsonClickLog = [];
                this.m_bHaveClickLog = !1;
                this.m_arrJsonSpinTypeLog = [];
                this.getCompsEventInfoFailedCallback = this.getCompsEventInfoSucceedCallback = this.getCompsFailedCallback = this.getCompsSucceedCallback = this.getContactInfoFailCallback = this.getContactInfoSuccessCallback = this.m_intervalSpinTypeLog = null;
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
                this.m_kioskClient = a;
                this.m_pinClient = b
            };
            c.prototype.Release = function() {
                this.Timer = this.cmdCallbackDict = this.cmdRetryTimesDict = this.cmdTmpDataDict = this.m_pinClient = this.m_kioskClient = null
            };
            c.prototype.SendLobbyRetryCmd = function(a, b, c) {
                this.SendRetryCmd(a, b, c, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.collectQuest = function(a, b, c) {
                this.SendRetryCmd("collectQuest", {
                    quest_id: a,
                    quest_level: b
                }, c, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.getCommonEventInfo =
                function(a) {
                    this.SendRetryCmd("getCommonEventInfo", null, a, this.OnRecvRetryCmd.bind(this))
                };
            c.prototype.getPlayerProfileList = function(a, b) {
                this.SendRetryCmd("getPlayerProfileList", {
                    ark_id_list: a
                }, b, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.getPuzzleQuestInfo = function(a) {
                this.SendRetryCmd("GetPuzzleQuestInfo", null, a, this.OnRecvRetryCmd.bind(this))
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
                this.SendRetryCmd("getPuzzleHistory", a, b, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.getExtraCompsResult = function(a) {
                this.SendRetryCmd("getExtraCompsResult", {
                        kiosk_id: d.LoginModel.LoginInfo.kiosk_id,
                        pin_id: d.LoginModel.LoginInfo.pin_id
                    },
                    a, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.collectExtraCompsAward = function(a, b, c) {
                this.NoRtryCmd("collectExtraCompsAward", {
                    kiosk_id: d.LoginModel.LoginInfo.kiosk_id,
                    pin_id: d.LoginModel.LoginInfo.pin_id,
                    EventID: a,
                    EventSerialNo: b
                }, c, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.NoRtryCmd = function(a, b, c, d, g, k) {
                void 0 === d && (d = 15E3);
                this.m_pinClient.send_cmd(this.systemName, a, b, c, d, g, k)
            };
            c.prototype.getNoRetryCommonEventInfo = function(a) {
                this.NoRtryCmd("getCommonEventInfo", {}, a)
            };
            c.prototype.GetMissionBonus =
                function(a, b) {
                    this.SendRetryCmd("collectH5LoginBonus", {
                        theme_id: a
                    }, b, this.OnRecvRetryCmd.bind(this))
                };
            c.prototype.GetMissionBonusInfo = function(a) {
                this.SendRetryCmd("getH5LoginBonusInfo", null, a, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.GetUserInfor = function(a, b) {
                console.log("[UserClient.GetUserInfor] %c GetUserInfor", "color:coral");
                this.SendRetryCmd("getUserInfo", {
                    ark_id: a
                }, b, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.GetProfileInfo = function(a, b) {
                console.log("[UserClient.GetProfileInfo] %c GetProfileInfo",
                    "color:coral");
                this.NoRtryCmd("getProfileInfo", {
                    ark_id: a
                }, b, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.GetItemInfo = function(a, b) {
                console.log("[UserClient.GetItemInfo] %c GetItemInfo", "color:coral");
                this.SendRetryCmd("getItemInfo", {
                    ark_id: a
                }, b, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.ChangePlayerInfo = function(a, b, c, d) {
                console.log("[UserClient.ChangePlayerInfo] %c ChangePlayerInfo", "color:coral");
                c.ark_id = a;
                c.nickname = b;
                this.NoRtryCmd("changePlayerInfo", c, d, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.GetUserProperty =
                function(a) {
                    console.log("[UserClient.GetUserProperty] %c GetUserProperty", "color:coral");
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
                    var e =
                        0;
                    null == b || null == b.cmd_data ? this.CmdCallback(c, a, b) : 0 === b.cmd_data.result || 1 === b.cmd_data.result ? (void 0 != b.cmd_data.data.shutter_skill_fail_serial_id && (e = b.cmd_data.data.shutter_skill_fail_serial_id), this.CmdCallback(c, a, b), d.LoginModel.LoginInfo.shutter_skill_fail_serial_id = e + 1) : this.CmdCallback(c, a, b)
                } else this.cmdRetryTimesDict[c] < this.Timer.length ? (console.log("shutter skill fail retry : ", this.cmdRetryTimesDict[c]), this.ReSendCmd(c), this.cmdRetryTimesDict[c]++) : (console.log("shutter skill fail retry dead"),
                    this.CmdCallback(c, a, b))
            };
            c.prototype.SendChangeID = function(a, b) {
                console.log("[UserClient.SendChangeID] %c SendChangeID", "color:coral");
                this.NoRtryCmd("changeUserID", {
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
                }, a, this.OnRecvRetryCmd.bind(this))
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
                }, a, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.GetPopupBillBoard = function(a, b) {
                console.log("[UserClient.GetPopupBillBoard] %c GetPopupBillBoard", "color:coral");
                this.SendRetryCmd("getPopupBillBoard", {
                    kiosk_id: d.LoginModel.LoginInfo.kiosk_id,
                    device: d.LoginModel.LoginInfo.device_id,
                    mode: a
                }, b, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.GetPopupContent = function(a, b, c, h) {
                console.log("[UserClient.GetPopupContent] %c GetPopupContent", "color:coral");
                a = {
                    kiosk_id: d.LoginModel.LoginInfo.kiosk_id,
                    device: d.LoginModel.LoginInfo.device_id,
                    mode: a,
                    TitleID: b,
                    TagID: c
                };
                "hot" == b && (a.HotID = b);
                this.SendRetryCmd("getPopupContent", a, h, this.OnRecvRetryCmd.bind(this))
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
                var e = new JSEncrypt;
                e.setKey(this.ENCRYPT_KEY);
                a = e.encrypt(a);
                b = e.encrypt(b);
                e = {};
                e.user_id = d.LoginModel.LoginInfo.user_id;
                e.user_pw_old = a;
                e.user_pw_new = b;
                e.kiosk_id = d.LoginModel.LoginInfo.kiosk_id;
                e.pin_id = d.LoginModel.LoginInfo.pin_id;
                this.NoRtryCmd("changePassword", e, c, this.OnRecvRetryCmd.bind(this))
            };
            c.prototype.OnRecvRetryCmd = function(a, b, c) {
                a === ArkSDK.HttpConnect.HttpResult.OK ? this.CmdCallback(c, a,
                    b) : this.cmdRetryTimesDict[c] < this.Timer.length ? (console.log(c + " retry : ", this.cmdRetryTimesDict[c]), this.ReSendCmd(c), this.cmdRetryTimesDict[c]++) : (console.log(c + " retry dead"), this.CmdCallback(c, a, b))
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
            c.prototype.get_sn = function() {
                var a = ArkSDK.ArkClient.sn + 1,
                    b = Math.floor(.001 * (new Date).getTime());
                ArkSDK.ArkClient.nowSceond != b && (a = 0);
                return (1E3 * b + a).toString()
            };
            c.prototype.SendCommand = function(a, b, c, d) {
                var e = this.get_sn();
                console.warn("[SendCommand] systemName" + a + ", commandName = " + b);
                void 0 != this.cmdTmpDataDict[e] ? console.error(b, "is send already") : (this.cmdTmpDataDict[e] = c, this.cmdRetryTimesDict[e] = 0, this.cmdCallbackDict[e] =
                    d, this.cmdRecvDict[e] = this.Retry.bind(this, e), this.cmdSysName[e] = a, c = this.cmdRetryTimesDict[e], this.cmdRetryTimesDict[e]++, this.m_pinClient.send_cmd(a, b, this.cmdTmpDataDict[e], this.cmdRecvDict[e], this.Timer[c]))
            };
            c.prototype.Retry = function(a, b, c, d) {
                b === ArkSDK.HttpConnect.HttpResult.OK ? this.Callback(a, d, b, c) : this.cmdRetryTimesDict[a] < this.Timer.length ? (console.log(d + " retry : ", this.cmdRetryTimesDict[a]), this.ReSend(a, d), this.cmdRetryTimesDict[a]++) : (console.log(d + " retry dead"), this.Callback(a, d,
                    b, c))
            };
            c.prototype.ReSend = function(a, b) {
                console.log("[UserClient.ReSend] %c" + a, "color:coral");
                var c = this.cmdRetryTimesDict[a],
                    d = this.systemName;
                this.cmdSysName[a] && (d = this.cmdSysName[a]);
                this.m_pinClient.send_cmd(d, b, this.cmdTmpDataDict[a], this.cmdRecvDict[a], this.Timer[c], a)
            };
            c.prototype.Callback = function(a, b, c, d) {
                void 0 != this.cmdCallbackDict && (this.cmdCallbackDict[a](c, d), this.cmdRetryTimesDict[a] = void 0, this.cmdTmpDataDict[a] = void 0, this.cmdCallbackDict[a] = void 0, this.cmdRecvDict[a] = void 0, this.cmdSysName[a] =
                    void 0)
            };
            c.prototype.SentNoRetryCommond = function(a, b, c, d, g, k, l) {
                void 0 === g && (g = 15E3);
                console.warn("[SentNoRetryCommond] systemName" + a + ", commandName = " + b);
                this.m_pinClient.send_cmd(a, b, c, d, g, k, l)
            };
            c.prototype.SendRetryCmd = function(a, b, c, d) {
                void 0 != this.cmdTmpDataDict[a] ? console.error(a, "is send already,retry now ...") : (this.cmdTmpDataDict[a] = b, this.cmdRetryTimesDict[a] = 0, this.cmdCallbackDict[a] = c, this.cmdRecvDict[a] = d, b = this.cmdRetryTimesDict[a], this.cmdRetryTimesDict[a]++, this.m_pinClient.send_cmd(this.systemName,
                    a, this.cmdTmpDataDict[a], this.cmdRecvDict[a], this.Timer[b]))
            };
            c.prototype.ReSendCmd = function(a) {
                console.log("[UserClient.ReSendCmd] %c" + a, "color:coral");
                var b = this.cmdRetryTimesDict[a],
                    c = this.systemName;
                this.cmdSysName[a] && (c = this.cmdSysName[a]);
                this.m_pinClient.send_cmd(c, a, this.cmdTmpDataDict[a], this.cmdRecvDict[a], this.Timer[b])
            };
            c.prototype.CmdCallback = function(a, b, c) {
                void 0 != this.cmdCallbackDict && (this.cmdCallbackDict[a](b, c), this.ReleaseRetryCmdData(a))
            };
            c.prototype.ReleaseRetryCmdData = function(a) {
                this.cmdRetryTimesDict[a] =
                    void 0;
                this.cmdTmpDataDict[a] = void 0;
                this.cmdCallbackDict[a] = void 0;
                this.cmdRecvDict[a] = void 0;
                this.cmdSysName[a] = void 0
            };
            c.prototype.recordClickLog = function(a, b, e) {
                void 0 === e && (e = null);
                this.m_bHaveClickLog || (this.m_bHaveClickLog = !0, this.sendClickLog());
                for (var h = g.Common.GameEnvironment.CurrentGameNow, p = h ? h : "Lobby", k = !0, l = 0; l < this.m_arrJsonClickLog.length; l++) {
                    var q = this.m_arrJsonClickLog[l];
                    if (q.click_id == a && q.btn_click_id == b && q.scenes == p) {
                        k = !1;
                        q.btn_click_times += 1;
                        break
                    }
                }
                k && (k = new Date, p = k.getTime(),
                    k = k.getTime() - 6E4 * k.getTimezoneOffset(), a = {
                        click_id: a,
                        btn_click_id: b,
                        btn_click_times: 1,
                        scenes: h ? h : "Lobby",
                        ark_id: d.LoginModel.LoginInfo.pin_ark_id,
                        pin_id: d.LoginModel.LoginInfo.pin_id,
                        kiosk_id: d.LoginModel.LoginInfo.kiosk_id,
                        device_id: d.LoginModel.LoginInfo.device_id,
                        device_type: 1,
                        machine_id: d.LoginModel.LoginInfo.machine_id,
                        extra_data: e,
                        client_time_utc: Math.floor(p / 1E3),
                        client_time_local: Math.floor(k / 1E3)
                    }, this.m_arrJsonClickLog.push(a), c.CurClickLogData.push(a))
            };
            c.prototype.sendClickLog = function() {
                return __awaiter(this,
                    void 0, void 0,
                    function() {
                        var a;
                        return __generator(this, function(b) {
                            switch (b.label) {
                                case 0:
                                    return [4, this.delay(3E5)];
                                case 1:
                                    return b.sent(), null != this.m_arrJsonClickLog && 0 < this.m_arrJsonClickLog.length && (a = {}, a.btn_click_list = this.m_arrJsonClickLog, console.warn("sendClickLog"), console.warn(a), this.m_pinClient.send_cmd(this.systemName, "sendClientClickInfo", a, null, null), this.m_arrJsonClickLog = [], c.CurClickLogData = []), [3, 0];
                                case 2:
                                    return [2]
                            }
                        })
                    })
            };
            c.prototype.delay = function(a) {
                return new Promise(function(b) {
                    return setTimeout(b,
                        a)
                })
            };
            c.prototype.sendClickLogNow = function(a, b, c, h) {
                void 0 === c && (c = 1);
                void 0 === h && (h = null);
                var e = g.Common.GameEnvironment.CurrentGameNow,
                    k = new Date,
                    l = k.getTime(),
                    q = k.getTime() - 6E4 * k.getTimezoneOffset();
                k = [];
                k[0] = {
                    click_id: a,
                    btn_click_id: b,
                    btn_click_times: c,
                    scenes: e ? e : "Lobby",
                    ark_id: d.LoginModel.LoginInfo.pin_ark_id,
                    pin_id: d.LoginModel.LoginInfo.pin_id,
                    kiosk_id: d.LoginModel.LoginInfo.kiosk_id,
                    device_id: d.LoginModel.LoginInfo.device_id,
                    device_type: 1,
                    machine_id: d.LoginModel.LoginInfo.machine_id,
                    extra_data: h,
                    client_time_utc: Math.floor(l / 1E3),
                    client_time_local: Math.floor(q / 1E3)
                };
                a = {};
                a.btn_click_list = k;
                console.warn("sendClickLogNow");
                console.warn(a);
                this.m_pinClient.send_cmd(this.systemName, "sendClientClickInfo", a, null, null)
            };
            c.prototype.recordClickTimesLog = function(a, b, e) {
                this.m_bHaveClickLog || (this.m_bHaveClickLog = !0, this.sendClickLog());
                var h = g.Common.GameEnvironment.CurrentGameNow;
                h = h ? h : "Lobby";
                var p = new Date,
                    k = p.getTime();
                p = p.getTime() - 6E4 * p.getTimezoneOffset();
                h = {
                    click_id: a,
                    btn_click_id: b,
                    btn_click_times: e,
                    scenes: h,
                    ark_id: d.LoginModel.LoginInfo.pin_ark_id,
                    pin_id: d.LoginModel.LoginInfo.pin_id,
                    kiosk_id: d.LoginModel.LoginInfo.kiosk_id,
                    device_id: d.LoginModel.LoginInfo.device_id,
                    device_type: 1,
                    machine_id: d.LoginModel.LoginInfo.machine_id,
                    client_time_utc: Math.floor(k / 1E3),
                    client_time_local: Math.floor(p / 1E3)
                };
                console.warn("[recordClickTimesLog] click_id = " + a + ", btn_click_id = " + b + ", btn_click_times = " + e);
                this.m_arrJsonClickLog.push(h);
                c.CurClickLogData.push(h)
            };
            c.prototype.getContactInfoByKiosk = function(a,
                b) {
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
                    a == ArkSDK.HttpResult.OK && 0 == b.cmd_data.err_code ? null != this.getContactInfoSuccessCallback &&
                        (this.getContactInfoSuccessCallback(a, b, "getContactInfoByKiosk"), this.getContactInfoSuccessCallback = null) : (console.error("[UserClient] %c getContactInfoByKiosk failed\n", "font-size:18px;font-weight:bold;color:green;", b), null != this.getContactInfoFailCallback && (this.getContactInfoFailCallback(a, b, "getContactInfoByKiosk"), this.getContactInfoFailCallback = null))
                } catch (e) {
                    console.error(e)
                }
            };
            c.prototype.getComps = function(a, b, c) {
                this.getCompsSucceedCallback = b;
                this.getCompsFailedCallback = c;
                this.m_pinClient.send_cmd("lobby",
                    "getComps", {
                        comps_name: a,
                        logo: d.LoginModel.LoginInfo.logo
                    }, this.onRecieveGetComps.bind(this))
            };
            c.prototype.onRecieveGetComps = function(a, b) {
                console.log("[UserClient] getComps state: ", a);
                console.log("[UserClient] getComps data: ", b);
                try {
                    a == ArkSDK.HttpResult.OK && 0 == b.cmd_data.err_code ? null != this.getCompsSucceedCallback && (this.getCompsSucceedCallback(a, b, "getComps"), this.getCompsSucceedCallback = null) : (console.error("[UserClient] %c getComps failed\n", "font-size:18px;font-weight:bold;color:green;", b),
                        null != this.getCompsFailedCallback && (this.getCompsFailedCallback(a, b, "getComps"), this.getCompsFailedCallback = null))
                } catch (e) {
                    console.error(e)
                }
            };
            c.prototype.getCompsEventInfo = function(a, b) {
                this.getCompsEventInfoSucceedCallback = a;
                this.getCompsEventInfoFailedCallback = b;
                this.m_pinClient.send_cmd("lobby", "getCompsEventInfo", {
                    logo: d.LoginModel.LoginInfo.logo
                }, this.onRecieveGetCompsEventInfo.bind(this))
            };
            c.prototype.onRecieveGetCompsEventInfo = function(a, b) {
                console.log("[UserClient] getCompsEventInfo state: ",
                    a);
                console.log("[UserClient] getCompsEventInfo data: ", b);
                try {
                    a == ArkSDK.HttpResult.OK && 0 == b.cmd_data.err_code ? null != this.getCompsEventInfoSucceedCallback && (this.getCompsEventInfoSucceedCallback(a, b, "getCompsEventInfo"), this.getCompsEventInfoSucceedCallback = null) : (console.error("[UserClient] %c getCompsEventInfo failed\n", "font-size:18px;font-weight:bold;color:green;", b), null != this.getCompsEventInfoFailedCallback && (this.getCompsEventInfoFailedCallback(a, b, "getCompsEventInfo"), this.getCompsEventInfoFailedCallback =
                        null))
                } catch (e) {
                    console.error(e)
                }
            };
            c.prototype.sendClickLogEx = function(a, b, c, h, p) {
                void 0 === p && (p = null);
                var e = g.Common.GameEnvironment.CurrentGameNow,
                    l = new Date,
                    q = l.getTime(),
                    A = l.getTime() - 6E4 * l.getTimezoneOffset();
                l = [];
                l[0] = {
                    click_id: a,
                    btn_click_id: b,
                    btn_click_times: 1,
                    click_name: c,
                    scenes: e ? e : "Lobby",
                    ark_id: d.LoginModel.LoginInfo.pin_ark_id,
                    pin_id: d.LoginModel.LoginInfo.pin_id,
                    kiosk_id: d.LoginModel.LoginInfo.kiosk_id,
                    device_id: h,
                    device_type: 1,
                    machine_id: d.LoginModel.LoginInfo.machine_id,
                    browser_info: p.browser.name,
                    browser_version: p.browser.version,
                    device_info: p.os.name,
                    device_version: p.os.version,
                    client_time_utc: Math.floor(q / 1E3),
                    client_time_local: Math.floor(A / 1E3)
                };
                a = {};
                a.btn_click_list = l;
                console.warn("sendClickLogEx");
                console.warn(a);
                this.m_pinClient.send_cmd(this.systemName, "sendClientClickInfo", a, null, null)
            };
            c.prototype.recordSpinTypeLog = function(a, b, c) {
                this.intervalSendSpinTypeLog();
                for (var e = g.Common.GameEnvironment.CurrentGameNow, p = !0, k = 0; k < this.m_arrJsonSpinTypeLog.length; k++) {
                    var l = this.m_arrJsonSpinTypeLog[k];
                    if (l.ThemeTitle == e && l.SpeedStopType == a && l.AutoType == b && l.Bet == c) {
                        p = !1;
                        l.TotalBetTimes += 1;
                        break
                    }
                }
                p && this.m_arrJsonSpinTypeLog.push({
                    KioskID: d.LoginModel.LoginInfo.kiosk_id,
                    PinID: d.LoginModel.LoginInfo.pin_id,
                    ThemeTitle: e,
                    Device: 1,
                    SpeedStopType: a,
                    AutoType: b,
                    Bet: c,
                    TotalBet: 1 * c,
                    TotalBetTimes: 1
                })
            };
            c.prototype.sendSpinTypeLog = function() {
                console.log("sendSpinTypeLog");
                if (null != this.m_arrJsonSpinTypeLog && 0 < this.m_arrJsonSpinTypeLog.length) {
                    for (var a = 0; a < this.m_arrJsonSpinTypeLog.length; a++) {
                        console.log("i = " +
                            a);
                        var b = this.m_arrJsonSpinTypeLog[a];
                        b.TotalBet = b.Bet * b.TotalBetTimes;
                        console.log(b);
                        this.m_pinClient.send_cmd(this.systemName, "SpinTypeLog", b, null, null)
                    }
                    this.m_arrJsonSpinTypeLog = []
                }
            };
            c.prototype.intervalSendSpinTypeLog = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var a = this;
                    return __generator(this, function(b) {
                        console.log("intervalSendSpinTypeLog()");
                        null == this.m_intervalSpinTypeLog && (this.m_intervalSpinTypeLog = setInterval(function() {
                            return a.sendSpinTypeLog()
                        }, 18E5));
                        return [2]
                    })
                })
            };
            c.prototype.sendSpinTypeLogVer2 = function(a) {
                console.log("sendSpinTypeLogVer2");
                if (null != a && 0 < a.length)
                    for (var b = 0; b < a.length; b++) {
                        console.log("i = " + b);
                        var c = a[b];
                        c.TotalBet = c.Bet * c.TotalBetTimes;
                        console.log(c);
                        this.m_pinClient.send_cmd("log", "SpinTypeLog", c, null, null)
                    }
            };
            c.prototype.getSessionBonusInfo = function(a, b) {
                null == a || 0 == a.length ? (console.log("getSessionBonusInfo (get all)"), this.m_pinClient.send_cmd("SessionBonus", "GET_INFO", null, b)) : (a = {
                    Layout: a
                }, console.log("getSessionBonusInfo ", a), this.m_pinClient.send_cmd("SessionBonus",
                    "GET_INFO", a, b))
            };
            c.prototype.sendSessionBonusTakeReward = function(a, b, c, d) {
                null == a || null == b || null == c ? console.log("sendSessionBonusTakeReward error", a, b, c) : (a = {
                    BonusId: a,
                    Session: b,
                    Level: c
                }, console.log("sendSessionBonusTakeReward ", a), this.m_pinClient.send_cmd("SessionBonus", "TAKE_REWARD", a, d))
            };
            c.prototype.getFavoriteGameList = function(a) {
                this.m_pinClient.send_cmd(this.systemName, "getFavList", null, a)
            };
            c.prototype.sendFavoriteGameList = function(a, b) {
                this.m_pinClient.send_cmd(this.systemName, "updateFavList", {
                    FavList: a
                }, b)
            };
            c.CurClickLogData = [];
            c.UserInfo = {
                mobile_id: null,
                nickname: null,
                avatar_id: null,
                avatar_frame_id: null,
                avatar_expired_time: null,
                avatar_frame_expired_time: null,
                new_item: null
            };
            return c
        }();
        d.UserClient = q
    })(g.Network || (g.Network = {}))
})(SS || (SS = {}));
(function(g) {
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
    })(g.Network || (g.Network = {}))
})(SS || (SS = {}));
(function(g) {
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
    })(g.Network || (g.Network = {}))
})(SS || (SS = {}));