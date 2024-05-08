window.__require = function e(t, o, n) {
    function i(a, c) {
        if (!o[a]) {
            if (!t[a]) {
                var s = a.split("/");
                if (s = s[s.length - 1], !t[s]) {
                    var p = "function" == typeof __require && __require;
                    if (!c && p) return p(s, !0);
                    if (r) return r(s, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = s
            }
            var l = o[a] = {
                exports: {}
            };
            t[a][0].call(l.exports, function(e) {
                return i(t[a][1][e] || e)
            }, l, l.exports, e, t, o, n)
        }
        return o[a].exports
    }
    for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
    return i
}({
    LobbyShipOccupieMgr: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "c2d17fk7XZDob9YzobLM/4E", "LobbyShipOccupieMgr");
        var n, i = this && this.__extends || (n = function(e, t) {
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
            r = this && this.__decorate || function(e, t, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
                else
                    for (var c = e.length - 1; c >= 0; c--)(i = e[c]) && (a = (r < 3 ? i(a) : r > 3 ? i(t, o, a) : i(t, o)) || a);
                return r > 3 && a && Object.defineProperty(t, o, a), a
            },
            a = this && this.__awaiter || function(e, t, o, n) {
                return new(o || (o = Promise))(function(i, r) {
                    function a(e) {
                        try {
                            s(n.next(e))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function c(e) {
                        try {
                            s(n.throw(e))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function s(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                            e(t)
                        })).then(a, c)
                    }
                    s((n = n.apply(e, t || [])).next())
                })
            },
            c = this && this.__generator || function(e, t) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function c(e) {
                    return function(t) {
                        return s([e, t])
                    }
                }

                function s(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = t.call(e, a)
                    } catch (c) {
                        r = [6, c], n = 0
                    } finally {
                        o = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var s, p = e("../../LobbyCommon/Component/AvatarIcon"),
            l = e("../../LobbyCommon/EventModule/EventModule"),
            u = e("../../LobbyCommon/Helper/EventSystem"),
            y = e("../../LobbyCommon/Net/ClickLog"),
            h = e("../../LobbyCommon/Net/ClickLogEnum"),
            m = e("../../LobbyCommon/Net/LobbyClient"),
            b = e("../../LobbyCommon/PopUpMgr/Scripts/PriorityCustomEvent"),
            S = cc._decorator,
            f = S.ccclass,
            v = S.property;
        (function(e) {
            e[e.SUBMARINE_R = 0] = "SUBMARINE_R", e[e.SUBMARINE_G = 1] = "SUBMARINE_G", e[e.SUBMARINE_B = 2] = "SUBMARINE_B"
        })(s || (s = {}));
        var d = function() {
                function e() {
                    this.Type = s.SUBMARINE_R, this.Name = ""
                }
                return r([v({
                    type: cc.Enum(s)
                })], e.prototype, "Type", void 0), r([v(String)], e.prototype, "Name", void 0), r([f("ShipName")], e)
            }(),
            L = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.BG = null, t.ScrollAnimation = null, t.ShipNameDic = [], t.PlayerInfo = null, t.TotalWin = null, t.ShipSkeleton = null, t.ShipName = null, t.OccupyTime = null, t.LastGetMoney = null, t.TreasureNode = null, t.CloseUIEvent = null, t.PlayerID = "", t.isPopupFinish = !1, t.TempData = null, t.TempSubmarineName = "", t.TempOccupyTime = 0, t
                }
                return i(t, e), t.prototype.init = function(e) {
                    if (this.TempData = new SS.Common.Dictionary, m.LobbyClient.Instance.GetLobbySystem.SendGetSubmarineOccupyInfo(), m.LobbyClient.Instance.GetLobbySystem.OnRecvSubmarineOccupyInfoSignal.add(this.RecvLobbyInitData, this), m.LobbyClient.Instance.GetJPSystem.OnRecvSubmarineOccupySignal.add(this.RecvBroadcastData, this), e) {
                        this.m_LobbyMgr = e;
                        var t = new b.PriorityCustomEvent(1, this.CheckTempData.bind(this));
                        this.m_LobbyMgr.popUpMgr.priorityShowEvents.push(t)
                    } else this.isPopupFinish = !0, u.EventSystem.Event(u.FishHunter.SetShipOccupieUICloseEvent).Insert(this.SetCloseUIEvent, this)
                }, t.prototype.onDestroy = function() {
                    m.LobbyClient.Instance && (m.LobbyClient.Instance.GetLobbySystem && m.LobbyClient.Instance.GetLobbySystem.OnRecvSubmarineOccupyInfoSignal.remove(this.RecvLobbyInitData, this), m.LobbyClient.Instance.GetJPSystem && m.LobbyClient.Instance.GetJPSystem.OnRecvSubmarineOccupySignal.remove(this.RecvBroadcastData, this)), u.EventSystem.Event(u.FishHunter.SetShipOccupieUICloseEvent).Remove(this.SetCloseUIEvent, this), this.m_LobbyMgr = null
                }, t.prototype.ShowMainPanel = function() {
                    return a(this, void 0, void 0, function() {
                        return c(this, function() {
                            return this.BG.active = !0, this.ScrollAnimation.play("ScrollOpen"), [2]
                        })
                    })
                }, t.prototype.CloseUI = function() {
                    this.CloseUIEvent && (this.CloseUIEvent(), this.CloseUIEvent = null), m.LobbyClient.Instance.GetLobbySystem.SendClearSubmarineOccupyInfo(this.TempSubmarineName, this.TempOccupyTime), this.TempSubmarineName = "", this.TempOccupyTime = 0, this.ScrollAnimation.play("ScrollClose")
                }, t.prototype.scrollCloseCallBack = function() {
                    this.CheckTempData(!this.isPopupFinish)
                }, t.prototype.SetOccupiedUI = function(e) {
                    switch (e.SubmarineName) {
                        case "SUBMARINE_R":
                            this.ShipSkeleton.defaultSkin = "RED", this.ShipSkeleton.setSkin("RED");
                            break;
                        case "SUBMARINE_G":
                            this.ShipSkeleton.defaultSkin = "GREEN", this.ShipSkeleton.setSkin("GREEN");
                            break;
                        case "SUBMARINE_B":
                            this.ShipSkeleton.defaultSkin = "BLUE", this.ShipSkeleton.setSkin("BLUE")
                    }
                    this.ShipSkeleton.setAnimation(0, "Move", !0), this.PlayerInfo.SetNickname(e.OldOccupyProfileData.nick_name), this.PlayerInfo.SetFaceByID(e.OldOccupyProfileData.equip_avatar), this.PlayerInfo.SetFrameByID(e.OldOccupyProfileData.equip_avatar_frame), this.TotalWin.string = e.TotalWinAmount, this.ShipName.string = this.ShipNameDic.find(function(t) {
                        return s[t.Type] == e.SubmarineName
                    }).Name, this.OccupyTime.string = this.ParseToShowTime(e.OccupyTotalTime), this.LastGetMoney.string = e.LastGetMoney, this.PlayerID = e.ArkID
                }, t.prototype.RecvLobbyInitData = function(e) {
                    if (e != []) {
                        this.TempData || (this.TempData = new SS.Common.Dictionary);
                        for (var t = 0; t < e.length; t++) this.TempData.containsKey(e[t].SubmarineName) ? this.TempData[e[t].SubmarineName] = e[t] : this.TempData.add(e[t].SubmarineName, e[t])
                    }
                }, t.prototype.RecvBroadcastData = function(e) {
                    this.TempData.containsKey(e.SubmarineName) ? this.TempData[e.SubmarineName] = e : this.TempData.add(e.SubmarineName, e), this.isPopupFinish && !this.BG.active && this.CheckTempData(!1)
                }, t.prototype.CheckTempData = function(e) {
                    if (void 0 === e && (e = !0), e || this.isPopupFinish) {
                        if (e && 0 == this.TempData.count()) return this.BG.active = !1, void(this.isPopupFinish = !0);
                        if (0 != this.TempData.count()) {
                            var t = this.TempData.keys()[0],
                                o = this.TempData.getValue(t);
                            if (this.SetOccupiedUI(o), this.m_LobbyMgr) this.SetLobbyUserBalance(o.OldOccupyEntries, o.OldOccupyWinning);
                            else {
                                var n = {};
                                n.collect_amount = o.LastGetMoney, n.winnings = SS.Common.GameEnvironment.IsUseScoreBox ? o.OldOccupyWinning : o.OldOccupyEntries;
                                var i = this.TreasureNode.parent.convertToWorldSpaceAR(this.TreasureNode.getPosition());
                                i = this.BG.convertToNodeSpaceAR(i), u.EventSystem.Event(u.FishHunter.OnShipOccupiedShow).Notify(n, i)
                            }
                            this.ShowMainPanel(), this.TempSubmarineName = o.SubmarineName, this.TempOccupyTime = o.OccupyTs, this.TempData.remove(t)
                        } else this.BG.active = !1
                    }
                }, t.prototype.ParseToShowTime = function(e) {
                    var t = e,
                        o = [],
                        n = Math.floor(t / 86400);
                    o.push(n), t -= 86400 * n;
                    var i = Math.floor(t / 3600);
                    o.push(i), t -= 3600 * i;
                    var r = Math.floor(t / 60);
                    return o.push(r), t -= 60 * r, o.push(t), o.map(function(e) {
                        return e <= 9 ? "0" + e : e
                    }).join(":")
                }, t.prototype.onClickAvatar = function() {
                    if ("" != this.PlayerID && null != this.PlayerID) {
                        var e = this.PlayerID == m.LobbyClient.Instance.GetUserClient.GetPinClient.ArkID;
                        e || console.error("Recieve wrong arkId, it's not main player"), u.EventSystem.Event(u.Profile.OpenProfile).Notify(e, this.PlayerID), y.ClickLog.recordClickLog(h.LogName.Profile, -1, h.LogType_Profile.OpenPanel, h.LogEvent_OpenPanel.InBattleShipBeenOccupy)
                    }
                }, t.prototype.SetLobbyUserBalance = function(e, t) {
                    this.m_LobbyMgr.downBarMgr.SetUserBalance(e, t), this.m_LobbyMgr.UserEntries = e, this.m_LobbyMgr.UserWinnings = t
                }, t.prototype.SetCloseUIEvent = function(e) {
                    this.CloseUIEvent = e
                }, r([v(cc.Node)], t.prototype, "BG", void 0), r([v(cc.Animation)], t.prototype, "ScrollAnimation", void 0), r([v([d])], t.prototype, "ShipNameDic", void 0), r([v(p.default)], t.prototype, "PlayerInfo", void 0), r([v(cc.Label)], t.prototype, "TotalWin", void 0), r([v(sp.Skeleton)], t.prototype, "ShipSkeleton", void 0), r([v(cc.Label)], t.prototype, "ShipName", void 0), r([v(cc.Label)], t.prototype, "OccupyTime", void 0), r([v(cc.Label)], t.prototype, "LastGetMoney", void 0), r([v(cc.Node)], t.prototype, "TreasureNode", void 0), r([f], t)
            }(l.EventModule);
        o.default = L, cc._RF.pop()
    }, {
        "../../LobbyCommon/Component/AvatarIcon": void 0,
        "../../LobbyCommon/EventModule/EventModule": void 0,
        "../../LobbyCommon/Helper/EventSystem": void 0,
        "../../LobbyCommon/Net/ClickLog": void 0,
        "../../LobbyCommon/Net/ClickLogEnum": void 0,
        "../../LobbyCommon/Net/LobbyClient": void 0,
        "../../LobbyCommon/PopUpMgr/Scripts/PriorityCustomEvent": void 0
    }]
}, {}, ["LobbyShipOccupieMgr"]);