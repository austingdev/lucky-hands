window.__require = function t(e, n, o) {
    function r(c, s) {
        if (!n[c]) {
            if (!e[c]) {
                var u = c.split("/");
                if (u = u[u.length - 1], !e[u]) {
                    var l = "function" == typeof __require && __require;
                    if (!s && l) return l(u, !0);
                    if (i) return i(u, !0);
                    throw new Error("Cannot find module '" + c + "'")
                }
                c = u
            }
            var a = n[c] = {
                exports: {}
            };
            e[c][0].call(a.exports, function(t) {
                return r(e[c][1][t] || t)
            }, a, a.exports, t, e, n, o)
        }
        return n[c].exports
    }
    for (var i = "function" == typeof __require && __require, c = 0; c < o.length; c++) r(o[c]);
    return r
}({
    RulePage: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "7d3a60B7bZHX50b2ShdeRQL", "RulePage");
        var o, r = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            i = this && this.__decorate || function(t, e, n, o) {
                var r, i = arguments.length,
                    c = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (c = (i < 3 ? r(c) : i > 3 ? r(e, n, c) : r(e, n)) || c);
                return i > 3 && c && Object.defineProperty(e, n, c), c
            },
            c = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(r, i) {
                    function c(t) {
                        try {
                            u(o.next(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(t) {
                        try {
                            u(o.throw(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function u(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(c, s)
                    }
                    u((o = o.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
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
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function s(t) {
                    return function(e) {
                        return u([t, e])
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
                        i = e.call(t, c)
                    } catch (s) {
                        i = [6, s], o = 0
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
        }), n.RulePage = void 0;
        var u = t("../../LobbyCommon/Helper/EventSystem"),
            l = t("../../LobbyCommon/ModuleBase"),
            a = cc._decorator,
            p = a.ccclass,
            f = a.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.agreeFunction = null, e.noFunction = null, e.m_ndroot = null, e.m_ndOneBtn = null, e.m_ndTwoBtn = null, e.m_scrollView = null, e.m_spContent = null, e.m_isSetData = !1, e.m_isReceiveData = !1, e.m_spriteName = "", e.m_version = "", e
                }
                return r(e, t), e.prototype._onLoad = function() {
                    return c(this, void 0, void 0, function() {
                        return s(this, function() {
                            return u.EventSystem.RegisterFunction(u.Rule.Open, this.Open.bind(this)), u.EventSystem.Event(u.Rule.SetData).Insert(this.SetData, this), [2]
                        })
                    })
                }, e.prototype._onDestroy = function() {
                    return c(this, void 0, void 0, function() {
                        return s(this, function() {
                            return u.EventSystem.UnregisterFunction(u.Rule.Open), u.EventSystem.Event(u.Rule.SetData).Remove(this.SetData, this), [2]
                        })
                    })
                }, e.prototype.SetData = function(t, e) {
                    console.log("Rule Page Set : " + t);
                    try {
                        this.m_spContent.spriteFrame = e, this.m_scrollView.scrollToTop(0), "ONE" == t ? (this.m_ndOneBtn.active = !0, this.m_ndTwoBtn.active = !1) : (this.m_ndOneBtn.active = !1, this.m_ndTwoBtn.active = !0), this.m_isSetData = !0
                    } catch (n) {
                        console.error(n), this.Callback()
                    }
                }, e.prototype.Open = function(t, e) {
                    return void 0 === e && (e = null), this.m_ndroot.active = this.m_isSetData, this.m_ndroot.active && (this.agreeFunction = t, this.noFunction = e, u.EventSystem.Event(u.SystemMsg.Open).Notify(this.m_ndroot, new cc.Size(0, 0), new cc.Size(0, 0), 150)), this.m_ndroot.active
                }, e.prototype.Check = function(t, e) {
                    if (u.EventSystem.Event(u.SystemMsg.Close).Notify(), "OK" === e) return console.log("\tRegulation Check : OK"), this.node.active = !1, void this.Callback();
                    "NO" === e && (console.log("\tRegulation Check : NO"), this.m_scrollView.scrollEvents = [], this.noFunction ? this.noFunction() : SS.Common.GameEnvironment.ReflashBrowser())
                }, e.prototype.Callback = function() {
                    var t = this.agreeFunction;
                    this.agreeFunction = null, this.m_scrollView.scrollEvents = [], this.m_ndroot.active = !1, t()
                }, i([f(cc.Node)], e.prototype, "m_ndroot", void 0), i([f(cc.Node)], e.prototype, "m_ndOneBtn", void 0), i([f(cc.Node)], e.prototype, "m_ndTwoBtn", void 0), i([f(cc.ScrollView)], e.prototype, "m_scrollView", void 0), i([f(cc.Sprite)], e.prototype, "m_spContent", void 0), i([p], e)
            }(l.default);
        n.RulePage = h, cc._RF.pop()
    }, {
        "../../LobbyCommon/Helper/EventSystem": void 0,
        "../../LobbyCommon/ModuleBase": void 0
    }]
}, {}, ["RulePage"]);