window.__require = function e(t, n, o) {
    function r(c, a) {
        if (!n[c]) {
            if (!t[c]) {
                var u = c.split("/");
                if (u = u[u.length - 1], !t[u]) {
                    var l = "function" == typeof __require && __require;
                    if (!a && l) return l(u, !0);
                    if (i) return i(u, !0);
                    throw new Error("Cannot find module '" + c + "'")
                }
                c = u
            }
            var s = n[c] = {
                exports: {}
            };
            t[c][0].call(s.exports, function(e) {
                return r(t[c][1][e] || e)
            }, s, s.exports, e, t, n, o)
        }
        return n[c].exports
    }
    for (var i = "function" == typeof __require && __require, c = 0; c < o.length; c++) r(o[c]);
    return r
}({
    LobbySceneReader: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ce7e1RnifNPtK61kDGFmaZv", "LobbySceneReader");
        var o, r = this && this.__extends || (o = function(e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var n in t) t.hasOwnProperty(n) && (e[n] = t[n])
                    })(e, t)
            }, function(e, t) {
                function n() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (n.prototype = t.prototype, new n)
            }),
            i = this && this.__decorate || function(e, t, n, o) {
                var r, i = arguments.length,
                    c = i < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, n, o);
                else
                    for (var a = e.length - 1; a >= 0; a--)(r = e[a]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, n, c) : r(t, n)) || c);
                return i > 3 && c && Object.defineProperty(t, n, c), c
            },
            c = this && this.__awaiter || function(e, t, n, o) {
                return new(n || (n = Promise))(function(r, i) {
                    function c(e) {
                        try {
                            u(o.next(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function a(e) {
                        try {
                            u(o.throw(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                            e(t)
                        })).then(c, a)
                    }
                    u((o = o.apply(e, t || [])).next())
                })
            },
            a = this && this.__generator || function(e, t) {
                var n, o, r, i, c = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(e) {
                    return function(t) {
                        return u([e, t])
                    }
                }

                function u(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                        switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return c.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                c.label++, o = i[1], i = [0];
                                continue;
                            case 7:
                                i = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = c.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    c.label = i[1];
                                    break
                                }
                                if (6 === i[0] && c.label < r[1]) {
                                    c.label = r[1], r = i;
                                    break
                                }
                                if (r && c.label < r[2]) {
                                    c.label = r[2], c.ops.push(i);
                                    break
                                }
                                r[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        i = t.call(e, c)
                    } catch (a) {
                        i = [6, a], o = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var u = e("../../../LobbyCommon/Helper/Download"),
            l = e("../../../LobbyCommon/Helper/LayerSystem"),
            s = e("../../../LobbyCommon/Helper/Setting"),
            f = e("../../../LobbyCommon/ModuleBase"),
            p = cc._decorator,
            b = p.ccclass,
            d = (p.property, function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.config = null, t
                }
                return r(t, e), t.prototype._downloadResources = function() {
                    return c(this, void 0, void 0, function() {
                        return a(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return this.config = s.default.GetSetting("LobbyScene"), this.config ? [4, this.DownloadAndInstantiate("Background", "Background")] : [3, 3];
                                case 1:
                                    return e.sent(), [4, this.DownloadAndInstantiate("Foreground", "Foreground")];
                                case 2:
                                    e.sent(), e.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.DownloadAndInstantiate = function(e, t) {
                    return c(this, void 0, void 0, function() {
                        var n, o, r, i, c;
                        return a(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    if (!this.config || !this.config[e]) return [2];
                                    n = 0, o = this.config[e], a.label = 1;
                                case 1:
                                    return n < o.length ? (r = o[n], [4, u.Download.Prefab("LobbyScene", "Prefabs/" + r)]) : [3, 4];
                                case 2:
                                    (i = a.sent()) && (c = cc.instantiate(i), l.default.SetParent(c, t)), a.label = 3;
                                case 3:
                                    return n++, [3, 1];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, i([b], t)
            }(f.default));
        n.default = d, cc._RF.pop()
    }, {
        "../../../LobbyCommon/Helper/Download": void 0,
        "../../../LobbyCommon/Helper/LayerSystem": void 0,
        "../../../LobbyCommon/Helper/Setting": void 0,
        "../../../LobbyCommon/ModuleBase": void 0
    }]
}, {}, ["LobbySceneReader"]);