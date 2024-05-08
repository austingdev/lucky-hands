window.__require = function t(e, n, o) {
    function r(a, s) {
        if (!n[a]) {
            if (!e[a]) {
                var c = a.split("/");
                if (c = c[c.length - 1], !e[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!s && l) return l(c, !0);
                    if (i) return i(c, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = c
            }
            var u = n[a] = {
                exports: {}
            };
            e[a][0].call(u.exports, function(t) {
                return r(e[a][1][t] || t)
            }, u, u.exports, t, e, n, o)
        }
        return n[a].exports
    }
    for (var i = "function" == typeof __require && __require, a = 0; a < o.length; a++) r(o[a]);
    return r
}({
    CollectAward: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "38638dQ8qRIYJuzXK3XLBJz", "CollectAward");
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
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            },
            a = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(r, i) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var n, o, r, i, a = {
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
                        return c([t, e])
                    }
                }

                function c(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                        switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < r[1]) {
                                    a.label = r[1], r = i;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(i);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
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
        });
        var c = t("../../../LobbyCommon/Component/NumberCountUp"),
            l = t("../../../LobbyCommon/Connect/Script/ConnectPanelMgr"),
            u = t("../../../LobbyCommon/Helper/EventSystem"),
            p = cc._decorator,
            h = p.ccclass,
            d = p.property,
            f = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.lbComps = null, e.lbPurchaseTime = null, e.lbPurchaseAmount = null, e.btnCollect = null, e.ndCoins = null, e.audioShow = null, e.audioCollect = null, e.lbEntries = null, e.onCollect = null, e
                }
                return r(e, t), e.prototype.Init = function() {
                    this.node.active = !1;
                    var t = new cc.Component.EventHandler;
                    t.target = this.node, t.component = "CollectAward", t.handler = "OnClick", this.btnCollect.clickEvents = [], this.btnCollect.clickEvents.push(t), this.lbEntries.SetNumberFormat(!0, !0, !0)
                }, Object.defineProperty(e.prototype, "awardAmount", {
                    set: function(t) {
                        this.lbComps.string = t && t > 0 ? SS.Common.BaseFunction.addCommas(t, 0, !0) : ""
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "purchaseTime", {
                    set: function(t) {
                        this.lbPurchaseTime.string = (t.getMonth() + 1).toString() + "/" + t.getDate().toString() + "/" + t.getFullYear().toString()
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "purchaseAmount", {
                    set: function(t) {
                        this.lbPurchaseAmount.string = t && t > 0 ? SS.Common.BaseFunction.addCommas(t, 0, !0) : ""
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.Show = function(t) {
                    return a(this, void 0, void 0, function() {
                        return s(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return t ? (l.ConnectPanelMgr.Instance.ShowConnectPanel(0), [4, SS.Common.WaitForSeconds(.4)]) : [3, 5];
                                case 1:
                                    e.sent(), l.ConnectPanelMgr.Instance.DisableConnectPanel(0), this.btnCollect.interactable = !0, this.onCollect = t, u.EventSystem.Event(u.SystemMsg.Open).Notify(this.node, cc.Size.ZERO, cc.Size.ZERO, 150, null, !0), this.node.active = !0, this.lbEntries.node.active = !1, e.label = 2;
                                case 2:
                                    return this.node.active ? [4, SS.Common.WaitForSeconds(.25)] : [3, 4];
                                case 3:
                                    return e.sent(), [3, 2];
                                case 4:
                                    return [3, 6];
                                case 5:
                                    console.warn("[ExtraComps] [CollectAward] Parameter 'onCollect' is null"), e.label = 6;
                                case 6:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.Collect = function(t, e) {
                    return a(this, void 0, void 0, function() {
                        return s(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.lbEntries.node.active = !0, this.lbEntries.SetNumberNow(t), [4, this.CollectAnimation(5, e)];
                                case 1:
                                    return n.sent(), this.Close(), [2]
                            }
                        })
                    })
                }, e.prototype.CollectAnimation = function(t, e) {
                    return a(this, void 0, void 0, function() {
                        return s(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.ndCoins.active = !0, this.lbEntries.CountUp(e, t - 1), [4, SS.Common.WaitForSeconds(t)];
                                case 1:
                                    return n.sent(), this.ndCoins.active = !1, [2]
                            }
                        })
                    })
                }, e.prototype.OnClick = function() {
                    this.btnCollect.interactable = !1;
                    var t = this.onCollect;
                    t && (this.onCollect = null, t())
                }, e.prototype.Close = function() {
                    u.EventSystem.Event(u.SystemMsg.Close).Notify(), this.node.active = !1
                }, i([d({
                    type: cc.Label,
                    displayName: "\u8d08\u5206\u91d1\u984d\u7684 Label"
                })], e.prototype, "lbComps", void 0), i([d({
                    type: cc.Label,
                    displayName: "\u958b\u5206\u6642\u9593\u7684 Label"
                })], e.prototype, "lbPurchaseTime", void 0), i([d({
                    type: cc.Label,
                    displayName: "\u958b\u5206\u91d1\u984d\u7684 Label"
                })], e.prototype, "lbPurchaseAmount", void 0), i([d({
                    type: cc.Button,
                    displayName: "Collect \u6309\u9215"
                })], e.prototype, "btnCollect", void 0), i([d({
                    type: cc.Node,
                    displayName: "\u91d1\u5e63\u7c92\u5b50"
                })], e.prototype, "ndCoins", void 0), i([d({
                    type: cc.AudioClip,
                    displayName: "\u9818\u734e\u7684\u8072\u97f3"
                })], e.prototype, "audioShow", void 0), i([d({
                    type: cc.AudioClip,
                    displayName: "\u9818\u734e\u7684\u8072\u97f3"
                })], e.prototype, "audioCollect", void 0), i([d({
                    type: c.NumberCountUp,
                    displayName: "\u5047\u7684 Entries"
                })], e.prototype, "lbEntries", void 0), i([h], e)
            }(cc.Component);
        n.default = f, cc._RF.pop()
    }, {
        "../../../LobbyCommon/Component/NumberCountUp": void 0,
        "../../../LobbyCommon/Connect/Script/ConnectPanelMgr": void 0,
        "../../../LobbyCommon/Helper/EventSystem": void 0
    }],
    ExtraComps: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "b4ce6ROs2tH7LqUAes2DGN8", "ExtraComps");
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
                    a = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (i < 3 ? r(a) : i > 3 ? r(e, n, a) : r(e, n)) || a);
                return i > 3 && a && Object.defineProperty(e, n, a), a
            },
            a = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(r, i) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var n, o, r, i, a = {
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
                        return c([t, e])
                    }
                }

                function c(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                        switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < r[1]) {
                                    a.label = r[1], r = i;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(i);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = e.call(t, a)
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
        }), n.ExtraComps = n.ExtraCompsData = void 0;
        var c = t("../../../LobbyCommon/Connect/Script/ConnectPanelMgr"),
            l = t("../../../LobbyCommon/Helper/EventSystem"),
            u = t("../../../LobbyCommon/ModuleBase"),
            p = t("../../../LobbyCommon/Net/LobbyClient"),
            h = t("../../../LobbyCommon/PopupMessage/Script/PopupMsgMgr"),
            d = t("./CollectAward"),
            f = cc._decorator,
            m = f.ccclass,
            b = f.property,
            C = function() {
                function t() {
                    this.eventID = "", this.eventSerialNo = 0, this.purchaseTime = null, this.purchaseAmount = 0, this.collectAwardScore = 0, this.exchangeRate = 0
                }
                return t.prototype.Init = function(t) {
                    return this.eventID = t.EventID, this.eventSerialNo = t.EventSerialNo, this.purchaseTime = new Date(t.PurchaseTimeUTC), this.purchaseAmount = t.PurchaseAmount, this.collectAwardScore = t.CollectAwardScore, this.exchangeRate = t.ExchangeRate, this
                }, t
            }();
        n.ExtraCompsData = C;
        var y = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.data = [], e.packetCount = 0, e.isInProgress = !1, e.HasAward = !1, e.collectAward = null, e._curData = null, e
            }
            return r(e, t), e.prototype._onLoad = function() {
                return a(this, void 0, void 0, function() {
                    return s(this, function() {
                        return l.EventSystem.Event(l.LobbyState.EnterLobby).Insert(this.OnExtraComps, this), l.EventSystem.RegisterFunction("[extra_comps]_is_in_progress", this.IsInProgress.bind(this)), this.packetCount = 0, this.collectAward.Init(), [2]
                    })
                })
            }, e.prototype._onDestroy = function() {
                return a(this, void 0, Promise, function() {
                    return s(this, function() {
                        return l.EventSystem.Event(l.LobbyState.EnterLobby).Remove(this.OnExtraComps, this), l.EventSystem.UnregisterFunction("[extra_comps]_is_in_progress"), [2]
                    })
                })
            }, e.prototype.IsInProgress = function() {
                return this.isInProgress
            }, e.prototype.OnExtraComps = function(t, e, n) {
                return a(this, void 0, void 0, function() {
                    return s(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return "ExtraComps" !== t ? [2] : n ? e && this.HasAward ? (console.log("[ExtraComps] Show Extra Comps"), [4, this.ShowCollectAward()]) : [3, 2] : (console.error("No On Enter Lobby Callback"), [2]);
                            case 1:
                                return o.sent(), [3, 3];
                            case 2:
                                this.collectAward.node.active = !1, o.label = 3;
                            case 3:
                                return n(), [2]
                        }
                    })
                })
            }, e.prototype._waitPacket = function() {
                return a(this, void 0, void 0, function() {
                    return s(this, function(t) {
                        switch (t.label) {
                            case 0:
                                this.SendGetExtraCompsInfo(), this.SendGetExtraCompsResult(), t.label = 1;
                            case 1:
                                return this.packetCount > 0 ? [4, SS.Common.WaitForSeconds(.25)] : [3, 3];
                            case 2:
                                return t.sent(), [3, 1];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e.prototype.SendGetExtraCompsInfo = function() {
                ++this.packetCount;
                var t = JSON.parse("{}");
                t.logo = "FireStorm", t.pin_id = SS.Network.LoginModel.LoginInfo.pin_id, p.LobbyClient.Instance.GetUserClient.SendCommand("lobby", "getExtraCompsInfo", t, this.OnGetExtraCompsInfo.bind(this))
            }, e.prototype.SendGetExtraCompsResult = function() {
                ++this.packetCount;
                var t = JSON.parse("{}");
                t.logo = "FireStorm", p.LobbyClient.Instance.GetUserClient.SendCommand("lobby", "getExtraCompsResult", t, this.OnGetExtraCompsResult.bind(this))
            }, e.prototype.OnGetExtraCompsInfo = function(t, e) {
                var n = e.cmd_data.result;
                if (--this.packetCount, 0 === t && 0 === n) {
                    console.log("[ExtraComps] On Get Extra Comps Info", e);
                    var o = e.cmd_data.data;
                    this.isInProgress = o.length > 0
                } else switch (--this.packetCount, n) {
                    case -1:
                        console.warn("Missing Kiosk ID!");
                        break;
                    case -34:
                        console.warn("No ScoreBox Kiosk!");
                        break;
                    default:
                        console.warn("Unspecied Status: ", n, "!")
                }
            }, e.prototype.OnGetExtraCompsResult = function(t, e) {
                var n = -12;
                if (e && e.cmd_data && (n = e.cmd_data.result), --this.packetCount, 0 === t && 0 === n) {
                    console.log("[ExtraComps] On Get Extra Comps Result", e);
                    for (var o = e.cmd_data.data, r = 0, i = o; r < i.length; r++) {
                        var a = i[r],
                            s = (new C).Init(a);
                        this.data.push(s)
                    }
                    this.HasAward = o.length > 0
                } else switch (n) {
                    case -1:
                        console.warn("Missing Kiosk ID!");
                        break;
                    case -34:
                        console.warn("No ScoreBox Kiosk!");
                        break;
                    default:
                        console.warn("Unspecied Status: ", n, "!")
                }
            }, e.prototype.ShowCollectAward = function() {
                return a(this, void 0, void 0, function() {
                    var t, e, n;
                    return s(this, function(o) {
                        switch (o.label) {
                            case 0:
                                t = 0, e = this.data, o.label = 1;
                            case 1:
                                return t < e.length ? (n = e[t], this.collectAward.awardAmount = n.collectAwardScore * n.exchangeRate, this.collectAward.purchaseTime = n.purchaseTime, this.collectAward.purchaseAmount = n.purchaseAmount, this._curData = n, [4, this.collectAward.Show(this.OnClickReceive.bind(this))]) : [3, 4];
                            case 2:
                                o.sent(), o.label = 3;
                            case 3:
                                return t++, [3, 1];
                            case 4:
                                return [2]
                        }
                    })
                })
            }, e.prototype.OnClickReceive = function() {
                c.ConnectPanelMgr.Instance.ShowConnectPanel(0), this.SendCollectExtraCompsAward()
            }, e.prototype.SendCollectExtraCompsAward = function() {
                if (this._curData) {
                    var t = JSON.parse("{}");
                    t.logo = "FireStorm", t.EventID = this._curData.eventID, t.EventSerialNo = this._curData.eventSerialNo, t.pin_id = SS.Network.LoginModel.LoginInfo.pin_id, p.LobbyClient.Instance.GetUserClient.SendCommand("lobby", "collectExtraCompsAward", t, this.OnCollectExtraCompsAward.bind(this))
                } else console.error("[ExtraComps] No Data");
                this._curData = null
            }, e.prototype.OnCollectExtraCompsAward = function(t, e) {
                c.ConnectPanelMgr.Instance.DisableConnectPanel(0);
                var n = -12;
                if (e && e.cmd_data && (n = e.cmd_data.result), 0 === t && 0 === n) {
                    console.log("[ExtraComps] On Collect Extra Comps Award", e), c.ConnectPanelMgr.Instance.DisableConnectPanel(0);
                    var o = e.cmd_data.playerInfo,
                        r = o.entries,
                        i = o.winnings,
                        a = e.cmd_data.CollectAwardScore;
                    this.CollectAward(r, i, a)
                } else {
                    switch (n) {
                        case -1:
                            console.warn("Missing Kiosk ID!");
                            break;
                        case -20:
                            console.warn("Missing Pin ID!");
                            break;
                        case -33:
                            console.warn("Missing Event ID!");
                            break;
                        case -34:
                            console.warn("No ScoreBox Kiosk!");
                            break;
                        case -35:
                            console.warn("Not Qualified!");
                            break;
                        case -36:
                            console.warn("Entries Error!");
                            break;
                        default:
                            console.warn("Unspecied Status: ", n, "!")
                    }
                    h.PopupMsgMgr.Instance.ShowPopMsg(h.PopupPriority.Critical, "S365" + n, null, null, null)
                }
            }, e.prototype.CollectAward = function(t, e) {
                return a(this, void 0, void 0, function() {
                    var n;
                    return s(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return null == t || null == e ? [3, 2] : (n = l.EventSystem.Function(l.DownBar.GetPlayerEntries)(), [4, this.collectAward.Collect(n, t)]);
                            case 1:
                                return o.sent(), l.EventSystem.Event(l.DownBar.SetPlayerInfo).Notify(t, e, 0), [3, 2];
                            case 2:
                                return [2]
                        }
                    })
                })
            }, i([b({
                type: d.default,
                displayName: "\u9818\u734e PopUp"
            })], e.prototype, "collectAward", void 0), i([m], e)
        }(u.default);
        n.ExtraComps = y, cc._RF.pop()
    }, {
        "../../../LobbyCommon/Connect/Script/ConnectPanelMgr": void 0,
        "../../../LobbyCommon/Helper/EventSystem": void 0,
        "../../../LobbyCommon/ModuleBase": void 0,
        "../../../LobbyCommon/Net/LobbyClient": void 0,
        "../../../LobbyCommon/PopupMessage/Script/PopupMsgMgr": void 0,
        "./CollectAward": "CollectAward"
    }]
}, {}, ["CollectAward", "ExtraComps"]);