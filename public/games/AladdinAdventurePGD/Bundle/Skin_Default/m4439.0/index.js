window.__require = function e(t, n, o) {
    function i(a, r) {
        if (!n[a]) {
            if (!t[a]) {
                var u = a.split("/");
                if (u = u[u.length - 1], !t[u]) {
                    var c = "function" == typeof __require && __require;
                    if (!r && c) return c(u, !0);
                    if (s) return s(u, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = u
            }
            var l = n[a] = {
                exports: {}
            };
            t[a][0].call(l.exports, function(e) {
                return i(t[a][1][e] || e)
            }, l, l.exports, e, t, n, o)
        }
        return n[a].exports
    }
    for (var s = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
    return i
}({
    BuyBonusFlagMgr: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "ab6d4OHiDJLM7oIwCLOpA3W", "BuyBonusFlagMgr");
        var o = this && this.__decorate || function(e, t, n, o) {
                var i, s = arguments.length,
                    a = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)(i = e[r]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, n, a) : i(t, n)) || a);
                return s > 3 && a && Object.defineProperty(t, n, a), a
            },
            i = this && this.__awaiter || function(e, t, n, o) {
                return new(n || (n = Promise))(function(i, s) {
                    function a(e) {
                        try {
                            u(o.next(e))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function r(e) {
                        try {
                            u(o.throw(e))
                        } catch (t) {
                            s(t)
                        }
                    }

                    function u(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof n ? t : new n(function(e) {
                            e(t)
                        })).then(a, r)
                    }
                    u((o = o.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        const s = e("../../../../../Component/SSSpawnPool"),
            a = e("../../../../../Helper/EventSystem"),
            r = e("../../../../../ModuleBase"),
            u = e("../../../../../Net/LobbyClient"),
            c = e("./BuyBonusFlag"),
            {
                ccclass: l,
                property: h
            } = cc._decorator;
        let d = class extends r.default {
            constructor() {
                super(...arguments), this.flagPf = null, this.pool = null, this.flagData = null
            }
            _waitPacket() {
                return i(this, void 0, void 0, function*() {
                    u.LobbyClient.Instance.GetUserClient.SendCommand("SlotGame", "get_bonus_all_info", null, this.OnRecvCmd.bind(this))
                })
            }
            OnRecvCmd(e, t) {
                console.warn("RecvBuyBonusCmd : " + e), console.warn(t), e == ArkSDK.HttpResult.OK && t && t.cmd_data && 0 == t.cmd_data.result && this.ParseBonusData(t.cmd_data)
            }
            ParseBonusData(e) {
                this.flagData = new SS.Common.Dictionary;
                let t = e.DataList;
                for (let n = 0; n < t.length; n++) {
                    let e = t[n],
                        o = e.GameName,
                        i = -1;
                    e.hasOwnProperty("EndTimeUTC") && (i = e.EndTimeUTC), this.flagData.add(o, i)
                }
                a.EventSystem.RegisterFunction(a.BuyBonus.GetLobbyFlagData, () => this.flagData)
            }
            _onLoad() {
                return i(this, void 0, void 0, function*() {
                    a.EventSystem.Event(a.BuyBonus.SpawnLobbyIconFlag).Insert(this.SpawnLobbyFlag, this)
                })
            }
            _start() {
                return i(this, void 0, void 0, function*() {})
            }
            _onDestroy() {
                return i(this, void 0, void 0, function*() {
                    a.EventSystem.Event(a.BuyBonus.SpawnLobbyIconFlag).Remove(this.SpawnLobbyFlag, this), a.EventSystem.UnregisterFunction(a.BuyBonus.GetLobbyFlagData), this.pool.DespawnAll(), this.pool = null
                })
            }
            SpawnLobbyFlag(e, t, n) {
                let o = this.pool.Spawn(this.flagPf.data, t);
                o.active = !0, o.setPosition(cc.Vec2.ZERO), o.getComponent(c.default).Init(e, n, this.OnTimesUp.bind(this))
            }
            OnTimesUp(e, t) {
                console.log("[BuyBonusFlagMgr] OnTimesUp, gameName = " + e), this.pool.Despawn(t)
            }
        };
        o([h(cc.Prefab)], d.prototype, "flagPf", void 0), o([h(s.SpawnPool)], d.prototype, "pool", void 0), d = o([l], d), n.default = d, cc._RF.pop()
    }, {
        "../../../../../Component/SSSpawnPool": void 0,
        "../../../../../Helper/EventSystem": void 0,
        "../../../../../ModuleBase": void 0,
        "../../../../../Net/LobbyClient": void 0,
        "./BuyBonusFlag": "BuyBonusFlag"
    }],
    BuyBonusFlag: [function(e, t, n) {
        "use strict";
        cc._RF.push(t, "15a9dAPiuFOTqcFrxwadERm", "BuyBonusFlag");
        var o = this && this.__decorate || function(e, t, n, o) {
            var i, s = arguments.length,
                a = s < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, n) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, n, o);
            else
                for (var r = e.length - 1; r >= 0; r--)(i = e[r]) && (a = (s < 3 ? i(a) : s > 3 ? i(t, n, a) : i(t, n)) || a);
            return s > 3 && a && Object.defineProperty(t, n, a), a
        };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        const i = e("../../../../../Component/DateTimeCountDown"),
            {
                ccclass: s,
                property: a
            } = cc._decorator;
        let r = class extends cc.Component {
            constructor() {
                super(...arguments), this.funTimesUp = null, this.timerNode = null, this.timeCountDown = null, this.gameGame = "", this.endTime = -1
            }
            onLoad() {
                this.timerNode.active = !1
            }
            start() {}
            onDestroy() {
                this.unschedule(this.EventTimeCheck)
            }
            onEnable() {
                this.EventTimeCheck()
            }
            Init(e, t, n) {
                this.gameGame = e, this.funTimesUp = n, this.Show(this.gameGame, t)
            }
            Show(e, t) {
                this.gameGame == e && (this.timerNode.active = t > 0, t > 0 && (this.endTime = t, this.schedule(this.EventTimeCheck, 1, cc.macro.REPEAT_FOREVER)))
            }
            Hide() {
                this.node.active = !1
            }
            EventTimeCheck() {
                if (this.endTime > 0) {
                    let e = Date.now() / 1e3,
                        t = this.endTime - e;
                    t <= 0 && (this.unschedule(this.EventTimeCheck), this.TimesUp()), this.UpdateTime(Math.floor(t))
                }
            }
            UpdateTime(e) {
                null != this.timeCountDown && (this.timeCountDown.UpdateUIWithDay(e), this.timeCountDown.node.active = !0)
            }
            TimesUp() {
                this.funTimesUp && this.funTimesUp(this.gameGame, this.node), this.Hide()
            }
        };
        o([a(cc.Node)], r.prototype, "timerNode", void 0), o([a(i.DateTimeCountDown)], r.prototype, "timeCountDown", void 0), r = o([s], r), n.default = r, cc._RF.pop()
    }, {
        "../../../../../Component/DateTimeCountDown": void 0
    }]
}, {}, ["BuyBonusFlag", "BuyBonusFlagMgr"]);