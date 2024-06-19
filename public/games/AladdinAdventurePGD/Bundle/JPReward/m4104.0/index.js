window.__require = function e(t, o, n) {
    function r(a, c) {
        if (!o[a]) {
            if (!t[a]) {
                var d = a.split("/");
                if (d = d[d.length - 1], !t[d]) {
                    var l = "function" == typeof __require && __require;
                    if (!c && l) return l(d, !0);
                    if (i) return i(d, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = d
            }
            var s = o[a] = {
                exports: {}
            };
            t[a][0].call(s.exports, function(e) {
                return r(t[a][1][e] || e)
            }, s, s.exports, e, t, o, n)
        }
        return o[a].exports
    }
    for (var i = "function" == typeof __require && __require, a = 0; a < n.length; a++) r(n[a]);
    return r
}({
    JPRewardMgr: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "cc06e5JbIxCKbmuop9ryYfh", "JPRewardMgr");
        var n = this && this.__decorate || function(e, t, o, n) {
                var r, i = arguments.length,
                    a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
                else
                    for (var c = e.length - 1; c >= 0; c--)(r = e[c]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
                return i > 3 && a && Object.defineProperty(t, o, a), a
            },
            r = this && this.__awaiter || function(e, t, o, n) {
                return new(o || (o = Promise))(function(r, i) {
                    function a(e) {
                        try {
                            d(n.next(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function c(e) {
                        try {
                            d(n.throw(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function d(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                            e(t)
                        })).then(a, c)
                    }
                    d((n = n.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.JPRewardMgr = o.JPType = void 0;
        const i = e("../../../ModuleBase"),
            a = e("../../../Net/LobbyClient"),
            c = e("../../../Component/NumberCountUp"),
            d = e("../../../../GameCommon/Profile/RewardNoticeMgr"),
            l = e("../../../Helper/EventSystem"),
            {
                ccclass: s,
                property: u
            } = cc._decorator;
        var m;
        (function(e) {
            e[e.Grand = 0] = "Grand", e[e.Major = 1] = "Major", e[e.Minor = 2] = "Minor", e[e.Mini = 3] = "Mini"
        })(m = o.JPType || (o.JPType = {}));
        let y = class extends i.default {
            constructor() {
                super(...arguments), this.m_nodeJPCheck = null, this.m_nodeGrand = null, this.m_nodeMajor = null, this.m_nodeMinor = null, this.m_nodeMini = null, this.m_root = null, this.numberRewardJPVal = null, this.jpMoneySymbolNode = null
            }
            _onLoad() {
                return r(this, void 0, void 0, function*() {})
            }
            _start() {
                return r(this, void 0, void 0, function*() {
                    a.LobbyClient.Instance.GetJPSystem.OnWinJPValueSignal.removeAll(), a.LobbyClient.Instance.GetJPSystem.OnWinJPValueSignal.add(this.OnWinJpValue, this)
                })
            }
            _onDestroy() {
                return r(this, void 0, void 0, function*() {
                    a.LobbyClient.Instance && a.LobbyClient.Instance.GetJPSystem && a.LobbyClient.Instance.GetJPSystem.OnWinJPValueSignal && (a.LobbyClient.Instance.GetJPSystem.OnWinJPValueSignal.remove(this.OnWinJpValue, this), a.LobbyClient.Instance.GetJPSystem.OnWinJPValueSignal.removeAll())
                })
            }
            OnWinJpValue(e, t, o, n, r, i) {
                if (console.log("OnWinJpValue ! winValue : " + t), l.EventSystem.Event(l.DownBar.SetPlayerInfo).Notify(n, r), this.SetJPValShowFormat(SS.Common.GameEnvironment.JPRewardIsMoneyFormat), SS.Common.GameEnvironment.JPRewardIsMoneyFormat) {
                    let e = SS.Common.BaseFunction.accMul(t, o);
                    t = this.TruncateCurrency(e, o)
                }
                this.numberRewardJPVal.SetNumberNow(t), this.m_nodeGrand.active = !1, this.m_nodeMajor.active = !1, this.m_nodeMinor.active = !1, this.m_nodeMini.active = !1, e == m.Grand ? this.m_nodeGrand.active = !0 : e == m.Major ? this.m_nodeMajor.active = !0 : e == m.Minor ? this.m_nodeMinor.active = !0 : e == m.Mini && (this.m_nodeMini.active = !0), this.PlayJpReward(i)
            }
            TruncateCurrency(e, t) {
                let o = SS.Common.BaseFunction.accDiv(1, t);
                return e = SS.Common.BaseFunction.accMul(e, o), e = Math.floor(e), SS.Common.BaseFunction.accDiv(e, o)
            }
            SetJPValShowFormat(e) {
                this.jpMoneySymbolNode.active = e, this.numberRewardJPVal.SetNumberFormat(!e, e)
            }
            PlayJpReward(e) {
                return r(this, void 0, void 0, function*() {
                    this.m_root.active = !0;
                    let t = cc.fadeIn(.5);
                    this.m_root.runAction(t), yield SS.Common.WaitForSeconds(6);
                    let o = cc.fadeOut(.5);
                    this.m_root.runAction(o), yield SS.Common.WaitForSeconds(.5), this.m_root.active = !1, this.m_nodeGrand.active = !1, this.m_nodeMajor.active = !1, this.m_nodeMinor.active = !1, this.m_nodeMini.active = !1, null != e && null != e && this.CheckRewardNotice(e)
                })
            }
            CheckRewardNotice(e) {
                if (e.hasOwnProperty("is_new_record") && null != e.is_new_record) {
                    let t = null;
                    e.hasOwnProperty("player_record_type") && null != e.player_record_type && (t = e.player_record_type);
                    let o = null;
                    if (e.hasOwnProperty("record_type") && null != e.record_type && (o = e.record_type), null != o && null != t) {
                        let e = d.RewardType.None;
                        if (t == d.PlayerRecordType.Personal) switch (o) {
                            case d.RecordType.Jackpot:
                                e = d.RewardType.NewRecord_Jackpot
                        } else if (t == d.PlayerRecordType.Continent) switch (o) {
                            case d.RecordType.Jackpot:
                                e = d.RewardType.NumberOne_Jackpot
                        }
                        e != d.RewardType.None && l.EventSystem.Event(l.NoticedArrived.OnReceiveReward).Length > 0 && (l.EventSystem.Event(l.NoticedArrived.OnReceiveReward).Notify(e), l.EventSystem.Event(l.NoticedArrived.ShowRewardNotice).Length > 0 && l.EventSystem.Event(l.NoticedArrived.ShowRewardNotice).Notify())
                    }
                }
            }
        };
        n([u(cc.Node)], y.prototype, "m_nodeJPCheck", void 0), n([u(cc.Node)], y.prototype, "m_nodeGrand", void 0), n([u(cc.Node)], y.prototype, "m_nodeMajor", void 0), n([u(cc.Node)], y.prototype, "m_nodeMinor", void 0), n([u(cc.Node)], y.prototype, "m_nodeMini", void 0), n([u(cc.Node)], y.prototype, "m_root", void 0), n([u(c.NumberCountUp)], y.prototype, "numberRewardJPVal", void 0), n([u(cc.Node)], y.prototype, "jpMoneySymbolNode", void 0), y = n([s], y), o.JPRewardMgr = y, cc._RF.pop()
    }, {
        "../../../../GameCommon/Profile/RewardNoticeMgr": void 0,
        "../../../Component/NumberCountUp": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../ModuleBase": void 0,
        "../../../Net/LobbyClient": void 0
    }]
}, {}, ["JPRewardMgr"]);