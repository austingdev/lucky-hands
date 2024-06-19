window.__require = function e(t, i, o) {
    function n(s, r) {
        if (!i[s]) {
            if (!t[s]) {
                var c = s.split("/");
                if (c = c[c.length - 1], !t[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!r && l) return l(c, !0);
                    if (a) return a(c, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                s = c
            }
            var p = i[s] = {
                exports: {}
            };
            t[s][0].call(p.exports, function(e) {
                return n(t[s][1][e] || e)
            }, p, p.exports, e, t, i, o)
        }
        return i[s].exports
    }
    for (var a = "function" == typeof __require && __require, s = 0; s < o.length; s++) n(o[s]);
    return n
}({
    LobbyShipOccupieMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c2d17fk7XZDob9YzobLM/4E", "LobbyShipOccupieMgr");
        var o = this && this.__decorate || function(e, t, i, o) {
                var n, a = arguments.length,
                    s = a < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)(n = e[r]) && (s = (a < 3 ? n(s) : a > 3 ? n(t, i, s) : n(t, i)) || s);
                return a > 3 && s && Object.defineProperty(t, i, s), s
            },
            n = this && this.__awaiter || function(e, t, i, o) {
                return new(i || (i = Promise))(function(n, a) {
                    function s(e) {
                        try {
                            c(o.next(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function r(e) {
                        try {
                            c(o.throw(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                            e(t)
                        })).then(s, r)
                    }
                    c((o = o.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const a = e("../../LobbyCommon/Component/AvatarIcon"),
            s = e("../../LobbyCommon/EventModule/EventModule"),
            r = e("../../LobbyCommon/Helper/EventSystem"),
            c = e("../../LobbyCommon/Net/ClickLog"),
            l = e("../../LobbyCommon/Net/ClickLogEnum"),
            p = e("../../LobbyCommon/Net/LobbyClient"),
            h = e("../../LobbyCommon/PopUpMgr/Scripts/PriorityCustomEvent"),
            {
                ccclass: m,
                property: u
            } = cc._decorator;
        var y;
        (function(e) {
            e[e.SUBMARINE_R = 0] = "SUBMARINE_R", e[e.SUBMARINE_G = 1] = "SUBMARINE_G", e[e.SUBMARINE_B = 2] = "SUBMARINE_B"
        })(y || (y = {}));
        let b = class {
            constructor() {
                this.Type = y.SUBMARINE_R, this.Name = ""
            }
        };
        o([u({
            type: cc.Enum(y)
        })], b.prototype, "Type", void 0), o([u(cc.String)], b.prototype, "Name", void 0), b = o([m("ShipName")], b);
        let S = class extends s.EventModule {
            constructor() {
                super(...arguments), this.BG = null, this.ScrollAnimation = null, this.ShipNameDic = [], this.PlayerInfo = null, this.TotalWin = null, this.ShipSkeleton = null, this.ShipName = null, this.OccupyTime = null, this.LastGetMoney = null, this.TreasureNode = null, this.CloseUIEvent = null, this.PlayerID = "", this.isPopupFinish = !1, this.TempData = null, this.TempSubmarineName = "", this.TempOccupyTime = 0
            }
            init(e, t) {
                if (this.TempData = new SS.Common.Dictionary, p.LobbyClient.Instance.GetLobbySystem.SendGetSubmarineOccupyInfo(), p.LobbyClient.Instance.GetLobbySystem.OnRecvSubmarineOccupyInfoSignal.removeAll(), p.LobbyClient.Instance.GetLobbySystem.OnRecvSubmarineOccupyInfoSignal.add(this.RecvLobbyInitData, this), p.LobbyClient.Instance.GetJPSystem.OnRecvSubmarineOccupySignal.removeAll(), p.LobbyClient.Instance.GetJPSystem.OnRecvSubmarineOccupySignal.add(this.RecvBroadcastData, this), e) {
                    this.m_LobbyMgr = e;
                    let t = new h.PriorityCustomEvent(h.PopEventPriority.FishShipOccupie, this.CheckTempData.bind(this));
                    this.m_LobbyMgr.popUpMgr.priorityShowEvents.push(t)
                } else this.isPopupFinish = !0, r.EventSystem.Event(r.FishHunter.SetShipOccupieUICloseEvent).Insert(this.SetCloseUIEvent, this)
            }
            onDestroy() {
                p.LobbyClient.Instance && (p.LobbyClient.Instance.GetLobbySystem && p.LobbyClient.Instance.GetLobbySystem.OnRecvSubmarineOccupyInfoSignal.remove(this.RecvLobbyInitData, this), p.LobbyClient.Instance.GetJPSystem && p.LobbyClient.Instance.GetJPSystem.OnRecvSubmarineOccupySignal.remove(this.RecvBroadcastData, this)), r.EventSystem.Event(r.FishHunter.SetShipOccupieUICloseEvent).Remove(this.SetCloseUIEvent, this), this.m_LobbyMgr = null
            }
            ShowMainPanel() {
                return n(this, void 0, void 0, function*() {
                    this.BG.active = !0, this.ScrollAnimation.play("ScrollOpen")
                })
            }
            CloseUI() {
                this.CloseUIEvent && (this.CloseUIEvent(), this.CloseUIEvent = null), p.LobbyClient.Instance.GetLobbySystem.SendClearSubmarineOccupyInfo(this.TempSubmarineName, this.TempOccupyTime), this.TempSubmarineName = "", this.TempOccupyTime = 0, this.ScrollAnimation.play("ScrollClose"), this.m_LobbyMgr && this.m_LobbyMgr.popUpMgr.checkAndShowPopup()
            }
            scrollCloseCallBack() {
                this.CheckTempData(!this.isPopupFinish)
            }
            SetOccupiedUI(e) {
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
                this.ShipSkeleton.setAnimation(0, "Move", !0), this.PlayerInfo.SetNickname(e.OldOccupyProfileData.nick_name), this.PlayerInfo.SetFaceByID(e.OldOccupyProfileData.equip_avatar), this.PlayerInfo.SetFrameByID(e.OldOccupyProfileData.equip_avatar_frame), this.TotalWin.string = e.TotalWinAmount, this.ShipName.string = this.ShipNameDic.find(t => y[t.Type] == e.SubmarineName).Name, this.OccupyTime.string = this.ParseToShowTime(e.OccupyTotalTime), this.LastGetMoney.string = e.LastGetMoney, this.PlayerID = e.ArkID
            }
            RecvLobbyInitData(e) {
                this.TempData || (this.TempData = new SS.Common.Dictionary);
                for (let t = 0; t < e.length; t++) this.TempData.containsKey(e[t].SubmarineName) ? this.TempData[e[t].SubmarineName] = e[t] : this.TempData.add(e[t].SubmarineName, e[t])
            }
            RecvBroadcastData(e) {
                this.TempData.containsKey(e.SubmarineName) ? this.TempData[e.SubmarineName] = e : this.TempData.add(e.SubmarineName, e), this.isPopupFinish && !this.BG.active && this.CheckTempData(!1)
            }
            CheckTempData(e = !0) {
                if (!e && !this.isPopupFinish) return;
                if (e && 0 == this.TempData.count()) return this.BG.active = !1, this.isPopupFinish = !0, void(this.m_LobbyMgr && this.m_LobbyMgr.popUpMgr.checkAndShowPopup());
                if (0 == this.TempData.count()) return void(this.BG.active = !1);
                let t = this.TempData.keys()[0],
                    i = this.TempData.getValue(t);
                if (this.SetOccupiedUI(i), this.m_LobbyMgr) this.SetLobbyUserBalance(i.OldOccupyEntries, i.OldOccupyWinning);
                else {
                    let e = {};
                    e.collect_amount = i.LastGetMoney, e.winnings = SS.Common.GameEnvironment.IsUseScoreBox ? i.OldOccupyWinning : i.OldOccupyEntries;
                    let t = this.TreasureNode.parent.convertToWorldSpaceAR(this.TreasureNode.getPosition());
                    t = this.BG.convertToNodeSpaceAR(t), r.EventSystem.Event(r.FishHunter.OnShipOccupiedShow).Notify(e, t)
                }
                this.ShowMainPanel(), this.TempSubmarineName = i.SubmarineName, this.TempOccupyTime = i.OccupyTs, this.TempData.remove(t)
            }
            ParseToShowTime(e) {
                let t = e,
                    i = [],
                    o = Math.floor(t / 86400);
                i.push(o), t -= 86400 * o;
                let n = Math.floor(t / 3600);
                i.push(n), t -= 3600 * n;
                let a = Math.floor(t / 60);
                return i.push(a), t -= 60 * a, i.push(t), i.map(e => e <= 9 ? `0${e}` : e).join(":")
            }
            onClickAvatar() {
                if ("" == this.PlayerID || null == this.PlayerID) return;
                let e = this.PlayerID == p.LobbyClient.Instance.GetUserClient.GetPinClient.ArkID;
                e || console.error("Recieve wrong arkId, it's not main player"), r.EventSystem.Event(r.Profile.OpenProfile).Notify(e, this.PlayerID), c.ClickLog.recordClickLog(l.LogName.Profile, -1, l.LogType_Profile.OpenPanel, l.LogEvent_OpenPanel.InBattleShipBeenOccupy)
            }
            SetLobbyUserBalance(e, t) {
                this.m_LobbyMgr.downBarMgr.SetUserBalance(e, t), this.m_LobbyMgr.UserEntries = e, this.m_LobbyMgr.UserWinnings = t
            }
            SetCloseUIEvent(e) {
                this.CloseUIEvent = e
            }
        };
        o([u(cc.Node)], S.prototype, "BG", void 0), o([u(cc.Animation)], S.prototype, "ScrollAnimation", void 0), o([u([b])], S.prototype, "ShipNameDic", void 0), o([u(a.default)], S.prototype, "PlayerInfo", void 0), o([u(cc.Label)], S.prototype, "TotalWin", void 0), o([u(sp.Skeleton)], S.prototype, "ShipSkeleton", void 0), o([u(cc.Label)], S.prototype, "ShipName", void 0), o([u(cc.Label)], S.prototype, "OccupyTime", void 0), o([u(cc.Label)], S.prototype, "LastGetMoney", void 0), o([u(cc.Node)], S.prototype, "TreasureNode", void 0), S = o([m], S), i.default = S, cc._RF.pop()
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