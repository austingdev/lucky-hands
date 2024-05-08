window.__require = function e(t, o, n) {
    function r(c, s) {
        if (!o[c]) {
            if (!t[c]) {
                var a = c.split("/");
                if (a = a[a.length - 1], !t[a]) {
                    var u = "function" == typeof __require && __require;
                    if (!s && u) return u(a, !0);
                    if (i) return i(a, !0);
                    throw new Error("Cannot find module '" + c + "'")
                }
                c = a
            }
            var l = o[c] = {
                exports: {}
            };
            t[c][0].call(l.exports, function(e) {
                return r(t[c][1][e] || e)
            }, l, l.exports, e, t, o, n)
        }
        return o[c].exports
    }
    for (var i = "function" == typeof __require && __require, c = 0; c < n.length; c++) r(n[c]);
    return r
}({
    DownBarMgr: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "fdc9czWSOhLs7SMYo57ri3d", "DownBarMgr");
        var n, r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                    })(e, t)
            }, function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            }),
            i = this && this.__decorate || function(e, t, o, n) {
                var r, i = arguments.length,
                    c = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, o, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (c = (i < 3 ? r(c) : i > 3 ? r(t, o, c) : r(t, o)) || c);
                return i > 3 && c && Object.defineProperty(t, o, c), c
            },
            c = this && this.__awaiter || function(e, t, o, n) {
                return new(o || (o = Promise))(function(r, i) {
                    function c(e) {
                        try {
                            a(n.next(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function s(e) {
                        try {
                            a(n.throw(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function a(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                            e(t)
                        })).then(c, s)
                    }
                    a((n = n.apply(e, t || [])).next())
                })
            },
            s = this && this.__generator || function(e, t) {
                var o, n, r, i, c = {
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

                function s(e) {
                    return function(t) {
                        return a([e, t])
                    }
                }

                function a(i) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (o = 1, n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, i[1])).done) return r;
                        switch (n = 0, r && (i = [2 & i[0], r.value]), i[0]) {
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
                                c.label++, n = i[1], i = [0];
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
                    } catch (s) {
                        i = [6, s], n = 0
                    } finally {
                        o = r = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.DownBarMgr = void 0;
        var a = e("../../../LobbyCommon/Component/AudioMgr"),
            u = e("../../../LobbyCommon/Helper/EventSystem"),
            l = e("../../../LobbyCommon/ModuleBase"),
            h = cc._decorator,
            p = h.ccclass,
            f = h.property,
            v = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.bannerRoot = null, t.entriesNum = null, t.winningNum = null, t.creditNum = null, t.scoreBoxBG = null, t.noScoreBoxBG = null, t.scoreBoxText = null, t.noScoreBoxText = null, t
                }
                return r(t, e), t.prototype._onLoad = function() {
                    return c(this, void 0, Promise, function() {
                        return s(this, function() {
                            return u.EventSystem.Event(u.DownBar.SetPlayerInfo).Insert(this.SetUserBalance, this), u.EventSystem.Event(u.DownBar.ToggleScorebox).Insert(this.ToggleScoreBox, this), [2]
                        })
                    })
                }, t.prototype._onDestroy = function() {
                    return c(this, void 0, void 0, function() {
                        return s(this, function() {
                            return u.EventSystem.Event(u.DownBar.SetPlayerInfo).Remove(this.SetUserBalance, this), u.EventSystem.Event(u.DownBar.ToggleScorebox).Remove(this.ToggleScoreBox, this), [2]
                        })
                    })
                }, t.prototype.SetUserBalance = function(e, t, o) {
                    void 0 === o && (o = null), SS.Common.GameEnvironment.IsUseScoreBox ? (this.entriesNum.string = SS.Common.BaseFunction.addCommas(e, 0, !1), this.winningNum.string = SS.Common.BaseFunction.addCommas(t, 0, !1)) : this.creditNum.string = null !== o ? SS.Common.BaseFunction.addCommas(o, 0, !1) : SS.Common.BaseFunction.addCommas(e, 0, !1)
                }, t.prototype.ToggleScoreBox = function() {
                    SS.Common.GameEnvironment.IsUseScoreBox ? (this.scoreBoxBG.active = !0, this.scoreBoxText.active = !0, this.noScoreBoxBG.active = !1, this.noScoreBoxText.active = !1) : (this.scoreBoxBG.active = !1, this.scoreBoxText.active = !1, this.noScoreBoxBG.active = !0, this.noScoreBoxText.active = !0)
                }, t.prototype.OnPurchase = function() {
                    var e = 0;
                    if (SS.Common.GameEnvironment.IsUseScoreBox) {
                        for (var t = "", o = 0, n = this.winningNum.string.split(","); o < n.length; o++) t += n[o];
                        e = Number(t), u.EventSystem.Event(u.PurchaseEvent.OnPurchaseSuccess).Insert(this.OnPurchaseSuccess, this), u.EventSystem.Event(u.PurchaseEvent.OnPurchasePanelDisable).Insert(this.OnPurchaseClose, this), u.EventSystem.Event(u.PurchaseEvent.ShowPanel).Notify(e), a.AudioMgr.Instance.Play("purchase", !1, 1)
                    } else console.warn("Try to Purchase at No Score Box Mode")
                }, t.prototype.OnPurchaseClose = function() {
                    a.AudioMgr.Instance.Play("Btn_Select_n_v01", !1, 1), u.EventSystem.Event(u.PurchaseEvent.OnPurchasePanelDisable).Remove(this.OnPurchaseClose, this), u.EventSystem.Event(u.PurchaseEvent.OnPurchaseSuccess).Remove(this.OnPurchaseSuccess, this)
                }, t.prototype.OnPurchaseSuccess = function(e, t) {
                    a.AudioMgr.Instance.Play("Btn_Select_y_v01", !1, 1), u.EventSystem.Event(u.DownBar.SetPlayerInfo).Notify(t, e, 0)
                }, i([f({
                    displayName: "Banner\u8981\u9032\u4f86\u7684\u4f4d\u7f6e",
                    type: cc.Node
                })], t.prototype, "bannerRoot", void 0), i([f(cc.Label)], t.prototype, "entriesNum", void 0), i([f(cc.Label)], t.prototype, "winningNum", void 0), i([f(cc.Label)], t.prototype, "creditNum", void 0), i([f(cc.Node)], t.prototype, "scoreBoxBG", void 0), i([f(cc.Node)], t.prototype, "noScoreBoxBG", void 0), i([f(cc.Node)], t.prototype, "scoreBoxText", void 0), i([f(cc.Node)], t.prototype, "noScoreBoxText", void 0), i([p], t)
            }(l.default);
        o.DownBarMgr = v, cc._RF.pop()
    }, {
        "../../../LobbyCommon/Component/AudioMgr": void 0,
        "../../../LobbyCommon/Helper/EventSystem": void 0,
        "../../../LobbyCommon/ModuleBase": void 0
    }]
}, {}, ["DownBarMgr"]);