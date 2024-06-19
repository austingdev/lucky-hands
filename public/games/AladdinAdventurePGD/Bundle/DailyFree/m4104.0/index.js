window.__require = function e(t, i, n) {
    function o(c, s) {
        if (!i[c]) {
            if (!t[c]) {
                var a = c.split("/");
                if (a = a[a.length - 1], !t[a]) {
                    var l = "function" == typeof __require && __require;
                    if (!s && l) return l(a, !0);
                    if (r) return r(a, !0);
                    throw new Error("Cannot find module '" + c + "'")
                }
                c = a
            }
            var y = i[c] = {
                exports: {}
            };
            t[c][0].call(y.exports, function(e) {
                return o(t[c][1][e] || e)
            }, y, y.exports, e, t, i, n)
        }
        return i[c].exports
    }
    for (var r = "function" == typeof __require && __require, c = 0; c < n.length; c++) o(n[c]);
    return o
}({
    DailyFreeIcon: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "b3894+ClIRKyZCfbp0aaDGP", "DailyFreeIcon");
        var n = this && this.__decorate || function(e, t, i, n) {
                var o, r = arguments.length,
                    c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (c = (r < 3 ? o(c) : r > 3 ? o(t, i, c) : o(t, i)) || c);
                return r > 3 && c && Object.defineProperty(t, i, c), c
            },
            o = this && this.__awaiter || function(e, t, i, n) {
                return new(i || (i = Promise))(function(o, r) {
                    function c(e) {
                        try {
                            a(n.next(e))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function s(e) {
                        try {
                            a(n.throw(e))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function a(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                            e(t)
                        })).then(c, s)
                    }
                    a((n = n.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const r = e("../../../FakeScoreBox/Script/FakeScoreBoxCtrl"),
            c = e("../../../ModuleBase"),
            s = e("../../../Helper/EventSystem"),
            {
                ccclass: a,
                property: l
            } = cc._decorator;
        let y = class extends c.default {
            constructor() {
                super(...arguments), this.button = null, this.freeComp = null, this.black = null, this.enable = null, this.disable = null, this.scoreBox = null
            }
            _onLoad() {
                return o(this, void 0, void 0, function*() {
                    window.icon = this, this.scoreBox.hide(), this.black.active = !1, s.EventSystem.Event(s.DailyFreeEvent.Show).Insert(this.Show, this), s.EventSystem.Event(s.DailyFreeEvent.Hide).Insert(this.Hide, this), s.EventSystem.Event(s.DailyFreeEvent.GetDailyFree).Insert(this.GetDailyFree, this);
                    let e = new cc.Component.EventHandler;
                    e.target = this.node, e.component = "DailyFreeIcon", e.handler = "OnClick", this.button.clickEvents = [], this.button.clickEvents.push(e)
                })
            }
            _onDestroy() {
                return o(this, void 0, void 0, function*() {
                    s.EventSystem.Event(s.DailyFreeEvent.Show).Remove(this.Show, this), s.EventSystem.Event(s.DailyFreeEvent.Hide).Remove(this.Hide, this), s.EventSystem.Event(s.DailyFreeEvent.GetDailyFree).Remove(this.GetDailyFree, this)
                })
            }
            Show(e = !1, t = 0) {
                this.freeComp.string = t.toString(), this.node.active = !0, this.button.interactable = e, this.enable.active = e, this.disable.active = !e
            }
            Hide() {
                this.black.active = !1, this.node.active = !1, this.enable.active = !1, this.disable.active = !1
            }
            OnClick(e, t) {
                s.EventSystem.Event(s.DailyFreeEvent.OnClick).Notify()
            }
            GetDailyFree(e, t) {
                return o(this, void 0, void 0, function*() {
                    s.EventSystem.Event(s.SystemMsg.Open).Notify(this.node, cc.Vec3.ZERO, cc.Vec3.ZERO, 0);
                    let i = s.EventSystem.Function(s.DownBar.GetPlayerEntries)(),
                        n = s.EventSystem.Function(s.DownBar.GetPlayerWinnings)();
                    this.scoreBox.show(r.ShowType.ENTRIES, i), this.black.active = !0, this.black.opacity = 0, cc.tween(this.black).to(.2, {
                        opacity: 180
                    }).start(), yield this.scoreBox.FlyThenCountUpMoney(e, 1, 1, this.button.node.convertToWorldSpaceAR(cc.Vec3.ZERO)), s.EventSystem.Event(s.DownBar.SetPlayerInfo).Notify(e, n), cc.tween(this.black).to(.2, {
                        opacity: 180
                    }).start(), t(), yield SS.Common.WaitForSeconds(.2), this.scoreBox.hide(), this.black.active = !1, s.EventSystem.Event(s.SystemMsg.Close).Notify(), this.node.active = !0
                })
            }
        };
        n([l({
            type: cc.Button,
            displayName: "\u6309\u9215"
        })], y.prototype, "button", void 0), n([l({
            type: cc.Label,
            displayName: "\u5206\u6578 Label"
        })], y.prototype, "freeComp", void 0), n([l({
            type: cc.Node,
            displayName: "\u58d3\u9ed1"
        })], y.prototype, "black", void 0), n([l({
            type: cc.Node,
            displayName: "\u53ef\u9818\u734e\u7bc0\u9ede"
        })], y.prototype, "enable", void 0), n([l({
            type: cc.Node,
            displayName: "\u5df2\u9818\u904e\u7bc0\u9ede"
        })], y.prototype, "disable", void 0), n([l({
            type: r.FakeScoreBoxCtrl,
            displayName: "\u8868\u6f14\u7528 ScoreBox"
        })], y.prototype, "scoreBox", void 0), y = n([a], y), i.default = y, cc._RF.pop()
    }, {
        "../../../FakeScoreBox/Script/FakeScoreBoxCtrl": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../ModuleBase": void 0
    }],
    DailyFree: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "5e02bwIv99MvbWMGuHCsp+C", "DailyFree");
        var n = this && this.__decorate || function(e, t, i, n) {
                var o, r = arguments.length,
                    c = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(e, t, i, n);
                else
                    for (var s = e.length - 1; s >= 0; s--)(o = e[s]) && (c = (r < 3 ? o(c) : r > 3 ? o(t, i, c) : o(t, i)) || c);
                return r > 3 && c && Object.defineProperty(t, i, c), c
            },
            o = this && this.__awaiter || function(e, t, i, n) {
                return new(i || (i = Promise))(function(o, r) {
                    function c(e) {
                        try {
                            a(n.next(e))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function s(e) {
                        try {
                            a(n.throw(e))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function a(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                            e(t)
                        })).then(c, s)
                    }
                    a((n = n.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const r = e("../../../Connect/Script/ConnectPanelMgr"),
            c = e("../../../Helper/EventSystem"),
            s = e("../../../ModuleBase"),
            a = e("../../../Net/LobbyClient"),
            l = e("../../../PopupMessage/Script/PopupMsgMgr"),
            {
                ccclass: y,
                property: d
            } = cc._decorator;
        var v;
        (function(e) {
            e[e.OK = 0] = "OK", e[e.PlayerNotExist = -9] = "PlayerNotExist", e[e.KioskNotExist = -2] = "KioskNotExist", e[e.DailyFreeNotTurnOn = -13] = "DailyFreeNotTurnOn", e[e.AlreadyReceived = -14] = "AlreadyReceived", e[e.ReceiveFailed = -15] = "ReceiveFailed"
        })(v || (v = {}));
        let h = class extends s.default {
            constructor() {
                super(...arguments), this.isTurnOn = !1, this.received = !0, this.freeComp = 0
            }
            _onLoad() {
                return o(this, void 0, void 0, function*() {
                    window.DailyFree = this, c.EventSystem.Event(c.DailyFreeEvent.OnClick).Insert(this.OnClick, this)
                })
            }
            _onDestroy() {
                return o(this, void 0, void 0, function*() {
                    c.EventSystem.Event(c.DailyFreeEvent.OnClick).Remove(this.OnClick, this)
                })
            }
            OnClick() {
                return o(this, void 0, void 0, function*() {
                    r.ConnectPanelMgr.Instance.ShowConnectPanel(0);
                    let e = yield this.SendCommand("lobby", "dailyFree", JSON.parse("{}"));
                    this.received = !0, c.EventSystem.Event(c.DailyFreeEvent.Show).Notify(!this.received), r.ConnectPanelMgr.Instance.DisableConnectPanel(0), console.log("[DailyFree] dailyFree ", e);
                    let t = e ? e.cmd_data : null,
                        i = e && t ? t.result : v.ReceiveFailed;
                    switch (i) {
                        case v.OK:
                            let e = t.entries;
                            yield new Promise(t => {
                                c.EventSystem.Event(c.DailyFreeEvent.GetDailyFree).Notify(e, t)
                            });
                            break;
                        case v.AlreadyReceived:
                            this.received = !0, this.ErrorHandler(i, t), c.EventSystem.Event(c.DailyFreeEvent.Show).Notify(!this.received);
                            break;
                        default:
                            this.ErrorHandler(i, t), c.EventSystem.Event(c.DailyFreeEvent.Hide).Notify()
                    }
                })
            }
            _waitPacket() {
                return o(this, void 0, void 0, function*() {
                    let e = yield this.SendCommand("lobby", "dailyFreeCheck", JSON.parse("{}")), t = e ? e.cmd_data : null, i = e && e.cmd_data ? e.cmd_data.result : v.ReceiveFailed;
                    switch (console.log("[DailyFree] dailyFreeCheck ", e), i) {
                        case v.OK:
                            this.isTurnOn = !0, this.received = !1, this.freeComp = t.free_comp, c.EventSystem.Event(c.DailyFreeEvent.Show).Notify(!this.received, this.freeComp);
                            break;
                        case v.AlreadyReceived:
                            this.isTurnOn = !0, this.received = !0, c.EventSystem.Event(c.DailyFreeEvent.Show).Notify(!this.received);
                            break;
                        case v.DailyFreeNotTurnOn:
                            this.isTurnOn = !1, c.EventSystem.Event(c.DailyFreeEvent.Hide).Notify();
                            break;
                        default:
                            this.ErrorHandler(i, t)
                    }
                })
            }
            SendCommand(e = "lobby", t, i = null) {
                return o(this, void 0, void 0, function*() {
                    return new Promise(n => {
                        a.LobbyClient.Instance.GetUserClient.SentNoRetryCommond(e, t, i, (e, t) => {
                            n(t)
                        })
                    })
                })
            }
            ErrorHandler(e, t) {
                console.log("[DailyFree] Error ", e, t), l.PopupMsgMgr.Instance.ShowPopMsg(l.PopupPriority.Info, "C91" + e, "Lobby", t.data ? t.data : "DailyFreeError")
            }
        };
        h = n([y], h), i.default = h, cc._RF.pop()
    }, {
        "../../../Connect/Script/ConnectPanelMgr": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../ModuleBase": void 0,
        "../../../Net/LobbyClient": void 0,
        "../../../PopupMessage/Script/PopupMsgMgr": void 0
    }]
}, {}, ["DailyFree", "DailyFreeIcon"]);