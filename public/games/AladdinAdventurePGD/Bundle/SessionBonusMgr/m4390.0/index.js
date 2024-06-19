window.__require = function e(t, s, o) {
    function i(a, r) {
        if (!s[a]) {
            if (!t[a]) {
                var h = a.split("/");
                if (h = h[h.length - 1], !t[h]) {
                    var d = "function" == typeof __require && __require;
                    if (!r && d) return d(h, !0);
                    if (n) return n(h, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = h
            }
            var c = s[a] = {
                exports: {}
            };
            t[a][0].call(c.exports, function(e) {
                return i(t[a][1][e] || e)
            }, c, c.exports, e, t, s, o)
        }
        return s[a].exports
    }
    for (var n = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
    return i
}({
    RewardItemData: [function(e, t, s) {
        "use strict";
        cc._RF.push(t, "4a6f7FlgmZJOZABSKgIUzzs", "RewardItemData"), Object.defineProperty(s, "__esModule", {
            value: !0
        }), s.SessionBonus = void 0;
        const {
            ccclass: o,
            property: i
        } = cc._decorator;
        (function(e) {
            let t, s, o;
            (function(e) {
                e.Asset = "Assets", e.Avatar = "Avatar", e.FishItem = "FishItem"
            })(t = e.RewardType || (e.RewardType = {})),
            function(e) {
                e.Freeze = "MF100001", e.Summon = "MF100002"
            }(s = e.FishCardType || (e.FishCardType = {})),
            function(e) {
                e.Init = "Init", e.Ready = "Ready", e.Take = "Take", e.Today = "Today"
            }(o = e.RewardItemStatus || (e.RewardItemStatus = {})), e.ConvertSimpleDate = class {
                static ToWholeWord(e) {
                    if (null == e) return "";
                    let t = e; - 1 != (e = e.toLocaleUpperCase()).indexOf("D", 0) ? t = "Day" : -1 != e.indexOf("W", 0) ? t = "Week" : -1 != e.indexOf("M", 0) ? t = "Month" : -1 != e.indexOf("Y", 0) ? t = "Year" : -1 != e.indexOf("H", 0) && (t = "Hour");
                    let s = parseInt(e);
                    return s && s > 1 && (t += "s"), s.toString() + t
                }
            }
        })(s.SessionBonus || (s.SessionBonus = {})), cc._RF.pop()
    }, {}],
    RewardItemInfoBox: [function(e, t, s) {
        "use strict";
        cc._RF.push(t, "8da28m0geNLJ6tW/Zf2Vfq1", "RewardItemInfoBox");
        var o = this && this.__decorate || function(e, t, s, o) {
            var i, n = arguments.length,
                a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, s) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, s, o);
            else
                for (var r = e.length - 1; r >= 0; r--)(i = e[r]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, s, a) : i(t, s)) || a);
            return n > 3 && a && Object.defineProperty(t, s, a), a
        };
        Object.defineProperty(s, "__esModule", {
            value: !0
        }), s.SessionBonus = void 0;
        const {
            ccclass: i,
            property: n
        } = cc._decorator;
        (function(e) {
            let t = class extends cc.Component {
                constructor() {
                    super(...arguments), this.ShowDuration = 3, this.nodeBG = null, this.labKind = null, this.labName = null, this.labDetail = null, this.itemID = "", this.tween = null
                }
                onDestroy() {
                    this.unscheduleAllCallbacks(), this.tween && this.tween.stop().removeSelf(), this.tween = null
                }
                HideInfo() {
                    this.node && (this.node.active = !1, this.node.opacity = 0), this.unschedule(this.PlayInfoFadeOut), this.tween && this.tween.stop().removeSelf(), this.tween = null
                }
                ShowInfo(e, t, s) {
                    null != t && null != e && null != s && (this.itemID.length > 0 && (this.unschedule(this.PlayInfoFadeOut), this.tween && this.tween.stop().removeSelf(), this.tween = null), this.node.position = this.node.parent.convertToNodeSpaceAR(s), 3 == t.length && (this.labKind.string = t[0], this.labName.string = t[1], this.labDetail.string = t[2]), this.node.active = !0, this.node.opacity = 255, this.itemID = e, this.scheduleOnce(this.PlayInfoFadeOut, this.ShowDuration))
                }
                PlayInfoFadeOut() {
                    this.unschedule(this.PlayInfoFadeOut), this.node.active && (this.tween = cc.tween(this.node).to(.25, {
                        opacity: 0
                    }).call(this.SetInfoHide.bind(this)).start())
                }
                SetInfoHide() {
                    this.node.active && this.HideInfo()
                }
            };
            o([n], t.prototype, "ShowDuration", void 0), o([n(cc.Node)], t.prototype, "nodeBG", void 0), o([n(cc.Label)], t.prototype, "labKind", void 0), o([n(cc.Label)], t.prototype, "labName", void 0), o([n(cc.Label)], t.prototype, "labDetail", void 0), t = o([i], t), e.RewardItemInfoBox = t
        })(s.SessionBonus || (s.SessionBonus = {})), cc._RF.pop()
    }, {}],
    RewardItemSprite: [function(e, t, s) {
        "use strict";
        cc._RF.push(t, "b986ejHXqJIr4qR1wMpY33s", "RewardItemSprite");
        var o = this && this.__decorate || function(e, t, s, o) {
                var i, n = arguments.length,
                    a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, s) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, s, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)(i = e[r]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, s, a) : i(t, s)) || a);
                return n > 3 && a && Object.defineProperty(t, s, a), a
            },
            i = this && this.__awaiter || function(e, t, s, o) {
                return new(s || (s = Promise))(function(i, n) {
                    function a(e) {
                        try {
                            h(o.next(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function r(e) {
                        try {
                            h(o.throw(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function h(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof s ? t : new s(function(e) {
                            e(t)
                        })).then(a, r)
                    }
                    h((o = o.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(s, "__esModule", {
            value: !0
        }), s.SessionBonus = void 0;
        const n = e("../../../../Component/BundleCtrl"),
            a = e("./RewardItemData");
        var r = a.SessionBonus.RewardType,
            h = a.SessionBonus.FishCardType;
        const {
            ccclass: d,
            property: c
        } = cc._decorator;
        (function(e) {
            let t = class extends cc.Component {
                constructor() {
                    super(...arguments), this.spDiamond = null, this.spCoin = null, this.spFishCardBeckon = null, this.spFishCardIce = null, this.spAvatarBg = null, this.spAvatarFace = null, this.spAvatarFaceFrame = null, this.spriteList = []
                }
                get SpriteList() {
                    return this.spriteList
                }
                onLoad() {
                    this.spriteList = this.node.getComponentsInChildren(cc.Sprite)
                }
                onDestroy() {
                    this.spAvatarFace.spriteFrame = null, this.spAvatarFaceFrame.spriteFrame = null
                }
                Show(e, t, s = !1) {
                    switch (e) {
                        case r.Asset:
                            this.ShowAsset(t);
                            break;
                        case r.Avatar:
                            this.ShowAvatar(t);
                            break;
                        case r.FishItem:
                            this.ShowFishItem(t)
                    }
                    this.spriteList.forEach(e => {
                        e.node.color = s ? cc.Color.GRAY : cc.Color.WHITE
                    })
                }
                HideAll() {
                    this.spDiamond.node.active = !1, this.spCoin.node.active = !1, this.spFishCardBeckon.node.active = !1, this.spFishCardIce.node.active = !1, this.spAvatarBg.node.active = !1, this.spAvatarFace.node.active = !1, this.spAvatarFaceFrame.node.active = !1
                }
                ShowAsset(e) {
                    this.HideAll(), SS.Common.GameEnvironment.IsUseScoreBox ? this.spDiamond.node.active = !0 : this.spCoin.node.active = !0
                }
                ShowAvatar(e) {
                    return i(this, void 0, void 0, function*() {
                        this.HideAll(), this.spAvatarBg.node.active = !0;
                        let t = yield n.default.Instance.GetSpirte("Avatar", e);
                        t && (-1 != e.indexOf("FAC") ? (this.spAvatarFace.node.active = !0, this.spAvatarFace.spriteFrame != t && (this.spAvatarFace.spriteFrame = t)) : -1 != e.indexOf("FRM") && (this.spAvatarFaceFrame.node.active = !0, this.spAvatarFaceFrame.spriteFrame != t && (this.spAvatarFaceFrame.spriteFrame = t)))
                    })
                }
                ShowFishItem(e) {
                    switch (this.HideAll(), e) {
                        case h.Freeze:
                            this.spFishCardIce.node.active = !0;
                            break;
                        case h.Summon:
                            this.spFishCardBeckon.node.active = !0
                    }
                }
            };
            o([c(cc.Sprite)], t.prototype, "spDiamond", void 0), o([c(cc.Sprite)], t.prototype, "spCoin", void 0), o([c(cc.Sprite)], t.prototype, "spFishCardBeckon", void 0), o([c(cc.Sprite)], t.prototype, "spFishCardIce", void 0), o([c(cc.Sprite)], t.prototype, "spAvatarBg", void 0), o([c(cc.Sprite)], t.prototype, "spAvatarFace", void 0), o([c(cc.Sprite)], t.prototype, "spAvatarFaceFrame", void 0), t = o([d], t), e.RewardItemSprite = t
        })(s.SessionBonus || (s.SessionBonus = {})), cc._RF.pop()
    }, {
        "../../../../Component/BundleCtrl": void 0,
        "./RewardItemData": "RewardItemData"
    }],
    SessionBonusDaily: [function(e, t, s) {
        "use strict";
        cc._RF.push(t, "92e16A7lVNEjJrQ+z1iklca", "SessionBonusDaily");
        var o = this && this.__decorate || function(e, t, s, o) {
                var i, n = arguments.length,
                    a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, s) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, s, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)(i = e[r]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, s, a) : i(t, s)) || a);
                return n > 3 && a && Object.defineProperty(t, s, a), a
            },
            i = this && this.__awaiter || function(e, t, s, o) {
                return new(s || (s = Promise))(function(i, n) {
                    function a(e) {
                        try {
                            h(o.next(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function r(e) {
                        try {
                            h(o.throw(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function h(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof s ? t : new s(function(e) {
                            e(t)
                        })).then(a, r)
                    }
                    h((o = o.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(s, "__esModule", {
            value: !0
        }), s.SessionBonus = void 0;
        const n = e("./SessionBonusRewardItem"),
            a = e("./SessionBonusTodayReward"),
            r = e("./RewardItemInfoBox"),
            h = e("./RewardItemData");
        var d = n.SessionBonus.SessionBonusRewardItem,
            c = a.SessionBonus.TodayReward,
            l = r.SessionBonus.RewardItemInfoBox,
            u = h.SessionBonus.ConvertSimpleDate,
            S = h.SessionBonus.FishCardType;
        const m = e("../../../../../LobbyCommon/EventModule/SessionBonus/Script/SessionDataCtrl"),
            p = e("../../../../Helper/EventSystem"),
            v = e("../../../../Component/AudioMgr"),
            w = e("../../../../Net/ClickLog"),
            R = e("../../../../Net/ClickLogEnum"),
            {
                ccclass: y,
                property: I
            } = cc._decorator;
        (function(e) {
            let t, s;
            (function(e) {
                e[e.Init = 0] = "Init", e[e.Popup = 1] = "Popup", e[e.CheckGetInfoData = 2] = "CheckGetInfoData", e[e.ShowPage = 3] = "ShowPage", e[e.CheckLevelStatus = 4] = "CheckLevelStatus", e[e.SendTakeReward = 5] = "SendTakeReward", e[e.WaitRecvTakeReward = 6] = "WaitRecvTakeReward", e[e.CheckRewardAndShow = 7] = "CheckRewardAndShow", e[e.WaitGetReward = 8] = "WaitGetReward", e[e.ShowTickAnim = 9] = "ShowTickAnim", e[e.WaitTickAnim = 10] = "WaitTickAnim", e[e.HighlightTodaysReward = 11] = "HighlightTodaysReward", e[e.Idle = 12] = "Idle"
            })(t || (t = {})),
            function(e) {
                e.SevenDays = "7Day"
            }(s = e.DailyBonusLayout || (e.DailyBonusLayout = {}));
            let n = class extends cc.Component {
                constructor() {
                    super(...arguments), this.m_Reward = [], this.m_btnClose = null, this.m_StartTime = null, this.m_EndTime = null, this.m_TodaysReward = null, this.m_TodaysRewardFinish = null, this.m_spTodaysReward = null, this.m_aryTodaysReward = [], this.m_pfbGetReward = null, this.m_nodeTickRoot = null, this.m_nodeGetRewardRoot = null, this.m_RewardItemInfoBox = null, this.SoundClip = [], this.m_nodeGetReward = null, this.m_DailyBonusFlow = t.Init, this.m_strReadyList = [], this.m_IsRecvTakeReward = !1, this.m_IsTakeRewardShowDone = !1, this.m_IsShowCheckOK = !1, this.m_DataRefreshIntervalTime = 60, this.m_DataRefreshTimestamp = 0, this.m_IsTimesUp = !1
                }
                start() {
                    p.EventSystem.Event(p.SessionEvent.OnRecvTakeReward).Insert(this.OnRecvTakeReward, this), p.EventSystem.Event(p.SessionEvent.OnCloseReward).Insert(this.OnCloseReward, this), p.EventSystem.Event(p.SessionEvent.OnClickRewardItem).Insert(this.OnClickRewardItem, this), p.EventSystem.Event(p.SessionEvent.OnTimesUp).Insert(this.OnTimesUp, this), this.m_DailyBonusFlow = t.Init, this.m_nodeGetReward = null, this.m_strReadyList = [], this.m_IsRecvTakeReward = !1, this.m_IsTakeRewardShowDone = !1, this.m_IsShowCheckOK = !1, this.m_btnClose.node.active = !1, this.m_IsTimesUp = !1;
                    let e = [];
                    for (let t = 0; t < this.SoundClip.length; t++) e.push(this.SoundClip[t].name);
                    v.AudioMgr.Instance.setAudioClip(this.SoundClip, e)
                }
                onEnable() {
                    this.m_DailyBonusFlow = t.Init
                }
                onDestroy() {
                    this.m_RewardItemInfoBox && this.m_RewardItemInfoBox.HideInfo(), p.EventSystem.Event(p.SessionEvent.OnRecvTakeReward).Length > 0 && p.EventSystem.Event(p.SessionEvent.OnRecvTakeReward).Remove(this.OnRecvTakeReward, this), p.EventSystem.Event(p.SessionEvent.OnCloseReward).Length > 0 && p.EventSystem.Event(p.SessionEvent.OnCloseReward).Remove(this.OnCloseReward, this), p.EventSystem.Event(p.SessionEvent.OnClickRewardItem).Length > 0 && p.EventSystem.Event(p.SessionEvent.OnClickRewardItem).Remove(this.OnClickRewardItem, this), p.EventSystem.Event(p.SessionEvent.OnTimesUp).Length > 0 && p.EventSystem.Event(p.SessionEvent.OnTimesUp).Remove(this.OnTimesUp, this), this.m_nodeGetReward = null, this.m_strReadyList = null
                }
                onDisable() {
                    this.m_RewardItemInfoBox && this.m_RewardItemInfoBox.HideInfo()
                }
                update() {
                    switch (this.m_DailyBonusFlow) {
                        case t.Init:
                            this.Init(), this.ShowRootPopup(), this.ChangeState(t.Popup);
                            break;
                        case t.Popup:
                            break;
                        case t.CheckGetInfoData:
                            this.CheckGetInfoData() && (this.ParseLevelStatus(), this.ChangeState(t.ShowPage));
                            break;
                        case t.ShowPage:
                            this.ChangeState(t.CheckLevelStatus);
                            break;
                        case t.CheckLevelStatus:
                            this.IsNeedTakeReward() ? this.ChangeState(t.SendTakeReward) : (this.m_btnClose.node.active = !0, this.CheckLoadingFinished(), this.ChangeState(t.HighlightTodaysReward));
                            break;
                        case t.SendTakeReward:
                            this.SendTakeReward(), this.ChangeState(t.WaitRecvTakeReward);
                            break;
                        case t.WaitRecvTakeReward:
                            this.WaitRecvTakeReward() && (this.IsNeedTakeReward() ? this.ChangeState(t.SendTakeReward) : (m.SessionDataCtrl.Instance.SortTakeRewardData(), this.CheckLoadingFinished(), this.ChangeState(t.CheckRewardAndShow)));
                            break;
                        case t.CheckRewardAndShow:
                            this.CheckRewardAndShow(), this.ChangeState(t.WaitGetReward);
                            break;
                        case t.WaitGetReward:
                            this.m_IsTakeRewardShowDone && this.ChangeState(t.ShowTickAnim);
                            break;
                        case t.ShowTickAnim:
                            this.ShowTickAnim(), this.ChangeState(t.WaitTickAnim);
                            break;
                        case t.WaitTickAnim:
                            this.m_IsShowCheckOK && (m.SessionDataCtrl.Instance.DecreaseTakeRewardData(s.SevenDays), this.IsNeedShowGotReward() ? this.ChangeState(t.CheckRewardAndShow) : this.ChangeState(t.HighlightTodaysReward));
                            break;
                        case t.HighlightTodaysReward:
                            this.HighlightTodaysReward(), this.RefreshTodayRewardText(!0), this.m_btnClose.node.active = !0, this.ChangeState(t.Idle);
                            break;
                        case t.Idle:
                            this.m_IsTimesUp && this.OnClickCloseBtn()
                    }
                }
                ChangeState(e) {
                    this.m_DailyBonusFlow = e
                }
                Init() {
                    m.SessionDataCtrl.Instance.CheckRefreshSessionBonusInfo()
                }
                ShowRootPopup() {
                    return i(this, void 0, void 0, function*() {
                        this.PlayAutioShow(), this.ShowPage();
                        let e = this.PopupNode(this.node);
                        yield SS.Common.WaitForSeconds(e + .25);
                        let o = Date.now() / 1e3;
                        this.m_DataRefreshTimestamp + this.m_DataRefreshIntervalTime < o || m.SessionDataCtrl.Instance.CheckStatusReady(s.SevenDays) ? (this.m_DataRefreshTimestamp = o, this.RefreshTodayRewardText(), this.ChangeState(t.CheckGetInfoData)) : this.ChangeState(t.HighlightTodaysReward)
                    })
                }
                PopupNode(e) {
                    return e.opacity = 130, e.scale = .4, cc.tween(e).parallel(cc.tween().to(.2, {
                        scale: 1.1
                    }).to(.2, {
                        scale: 1
                    }), cc.tween().to(.4, {
                        opacity: 255
                    })).start(), .4
                }
                CheckGetInfoData() {
                    let e = !1,
                        t = m.SessionDataCtrl.Instance.GetSession(s.SevenDays);
                    return null != t && 0 != t && (e = !0), e
                }
                ParseLevelStatus() {
                    this.m_strReadyList = [];
                    let e = m.SessionDataCtrl.Instance.GetLevelDataLength(s.SevenDays);
                    for (let t = 0; t < e; t++)
                        if (m.SessionDataCtrl.Instance.GetLevelStatus(s.SevenDays, t) == m.SessionBonusStatus.Ready) {
                            let e = m.SessionDataCtrl.Instance.GetDayByLevel(t);
                            this.m_strReadyList.push(e)
                        }
                }
                ShowPage() {
                    this.RefreshDate();
                    let e = m.SessionDataCtrl.Instance.CheckStatusReady(s.SevenDays),
                        t = m.SessionDataCtrl.Instance.GetCurrLevel(s.SevenDays);
                    this.RefreshTodaysReward(e ? t - 1 : t), this.RefreshTodayRewardText();
                    let o = m.SessionDataCtrl.Instance.GetLevelDataLength(s.SevenDays);
                    for (let s = 0; s < o; s++) this.RefreshRewardItem(s);
                    this.m_btnClose.node.active = !1
                }
                IsNeedTakeReward() {
                    let e = !1;
                    return null != this.m_strReadyList && this.m_strReadyList.length > 0 && (e = !0), e
                }
                SendTakeReward() {
                    let e = this.m_strReadyList.splice(0, 1);
                    this.m_IsRecvTakeReward = !1, m.SessionDataCtrl.Instance.SendTakeReward(s.SevenDays, e[0])
                }
                WaitRecvTakeReward() {
                    return this.m_IsRecvTakeReward
                }
                CheckRewardAndShow() {
                    return i(this, void 0, void 0, function*() {
                        this.m_IsTakeRewardShowDone = !1;
                        let e = m.SessionDataCtrl.Instance.GetCurrTakeRewardLevel();
                        w.ClickLog.recordClickLog(R.LogName.Profile, 0, R.LogType_Profile.DailyBonus, e + 1), this.m_Reward[e].ShowHaloLight(!0);
                        let t = this.m_Reward[e].Shake();
                        this.RefreshTodaysReward(e), yield SS.Common.WaitForSeconds(t + .3), this.ShowReward()
                    })
                }
                IsNeedShowGotReward() {
                    let e = !1;
                    return null != m.SessionDataCtrl.Instance.GetCurrTakeRewardLevel() && (e = !0), e
                }
                ShowTickAnim() {
                    return i(this, void 0, void 0, function*() {
                        this.m_IsShowCheckOK = !1;
                        let e = m.SessionDataCtrl.Instance.GetCurrTakeRewardLevel();
                        this.PlayAutioTakeBouns(), this.m_Reward[e].ShowHaloLight(!1), yield this.m_Reward[e].ShowTickAnim(), yield SS.Common.WaitForSeconds(.5), this.m_IsShowCheckOK = !0
                    })
                }
                HighlightTodaysReward() {
                    let e = m.SessionDataCtrl.Instance.GetLevelDataLength(s.SevenDays);
                    for (let t = 0; t < e; t++)
                        if (null != this.m_Reward[t] && t == m.SessionDataCtrl.Instance.GetCurrLevel(s.SevenDays)) {
                            this.m_Reward[t].HighlightTodaysReward(), this.RefreshTodaysReward(t);
                            break
                        }
                }
                RefreshDate() {
                    this.m_StartTime.string = this.GetDate(m.SessionDataCtrl.Instance.GetStartTime(s.SevenDays)), this.m_EndTime.string = this.GetDate(m.SessionDataCtrl.Instance.GetEndTime(s.SevenDays))
                }
                RefreshTodaysReward(e) {
                    if (null != this.m_Reward[e]) {
                        let t = m.SessionDataCtrl.Instance.GetLevelItemType(s.SevenDays, e),
                            o = m.SessionDataCtrl.Instance.GetLevelItemId(s.SevenDays, e),
                            i = m.SessionDataCtrl.Instance.GetLevelAmount(s.SevenDays, e),
                            n = m.SessionDataCtrl.Instance.GetItemSettingTimeLimit(o);
                        this.m_TodaysReward.Init(t, o, i, n)
                    }
                }
                RefreshTodayRewardText(e = !1) {
                    let t = m.SessionDataCtrl.Instance.CheckStatusReady(s.SevenDays);
                    this.m_spTodaysReward.spriteFrame = t ? this.m_aryTodaysReward[0] : this.m_aryTodaysReward[1];
                    let o = m.SessionDataCtrl.Instance.GetCurrLevel(s.SevenDays);
                    o == this.m_Reward.length && e && (this.m_TodaysReward.node.active = !1, this.m_TodaysRewardFinish.active = !0), console.log("RefreshTodayRewardText hasReady = " + t + ", nextDayIndex = " + o + ", isTakeFinish = " + e)
                }
                RefreshRewardItem(e) {
                    if (null != this.m_Reward[e]) {
                        let t = m.SessionDataCtrl.Instance.GetLevelStatus(s.SevenDays, e),
                            o = m.SessionDataCtrl.Instance.GetLevelItemType(s.SevenDays, e),
                            i = m.SessionDataCtrl.Instance.GetLevelItemId(s.SevenDays, e),
                            n = m.SessionDataCtrl.Instance.GetLevelAmount(s.SevenDays, e),
                            a = m.SessionDataCtrl.Instance.GetItemSettingTimeLimit(i);
                        this.m_Reward[e].Init(e, t, o, i, n, a, this.m_nodeTickRoot)
                    }
                }
                CheckLoadingFinished() {
                    return i(this, void 0, void 0, function*() {
                        yield SS.Common.WaitForSeconds(.2)
                    })
                }
                GetDate(e) {
                    let t = new Date(1e3 * e);
                    return this.AddZero(t.getMonth() + 1) + "/" + this.AddZero(t.getDate()) + "/" + this.AddZero(t.getFullYear())
                }
                AddZero(e) {
                    return e < 10 ? "0" + e.toString() : e.toString()
                }
                OnRecvTakeReward(e) {
                    0 == e ? this.m_IsRecvTakeReward = !0 : this.m_btnClose.node.active = !0
                }
                ShowReward() {
                    let e = cc.instantiate(this.m_pfbGetReward);
                    e.parent = this.m_nodeGetRewardRoot, e.position = cc.Vec3.ZERO, this.m_nodeGetReward = e
                }
                OnCloseReward() {
                    this.m_nodeGetReward && (this.m_nodeGetReward.destroy(), this.m_nodeGetReward = null), this.m_IsTakeRewardShowDone = !0
                }
                OnClickCloseBtn() {
                    this.m_DailyBonusFlow == t.Idle && (this.PlayAutioClose(), this.node.active = !1, p.EventSystem.Event(p.SessionEvent.CloseCurrentSession) && p.EventSystem.Event(p.SessionEvent.CloseCurrentSession).Length > 0 && p.EventSystem.Event(p.SessionEvent.CloseCurrentSession).Notify())
                }
                OnClickRewardItem(e) {
                    if (null != this.m_RewardItemInfoBox && e < this.m_Reward.length) {
                        let t = m.SessionDataCtrl.Instance.GetLevelItemId(s.SevenDays, e),
                            o = m.SessionDataCtrl.Instance.GetDayByLevel(e);
                        this.m_RewardItemInfoBox.ShowInfo(o, this.ParseInfoBoxMsg(t, e), this.m_Reward[e].node.convertToWorldSpaceAR(cc.v3(0, 30, 0)))
                    }
                }
                OnTimesUp(e) {
                    e == s.SevenDays && (this.m_IsTimesUp = !0)
                }
                IsAvatar(e) {
                    let t = !1;
                    return -1 == e.indexOf("FAC", 0) && -1 == e.indexOf("FRM", 0) || (t = !0), t
                }
                IsAsset(e) {
                    let t = !1;
                    return -1 == e.indexOf("Entries", 0) && -1 == e.indexOf("Diamond", 0) && -1 == e.indexOf("GEMS", 0) || (t = !0), t
                }
                IsFishItem(e) {
                    let t = !1;
                    return -1 != e.indexOf("MF", 0) && (t = !0), t
                }
                ParseInfoBoxMsg(e, t) {
                    let o = [];
                    if (this.IsAvatar(e)) {
                        let t = m.SessionDataCtrl.Instance.GetItemSettingType(e);
                        "photos" == t ? t = "Photo" : "frames" == t && (t = "Frame"), o.push(t), o.push(m.SessionDataCtrl.Instance.GetItemSettingName(e));
                        let s = m.SessionDataCtrl.Instance.GetItemSettingTimeLimit(e);
                        o.push("Expires in " + u.ToWholeWord(s))
                    } else if (this.IsAsset(e)) {
                        o.push("Bonus");
                        let i = -1 != e.indexOf("Entries", 0) ? SS.Common.GameEnvironment.IsUseScoreBox ? "Entries" : "Credits" : "Gems";
                        o.push(i), o.push(m.SessionDataCtrl.Instance.GetLevelAmount(s.SevenDays, t))
                    } else if (this.IsFishItem(e)) {
                        o.push("Fish Item");
                        let i = e == S.Freeze ? "Freeze" : "Summon";
                        o.push(i), o.push(m.SessionDataCtrl.Instance.GetLevelAmount(s.SevenDays, t))
                    }
                    return o
                }
                PlayAutioShow() {
                    v.AudioMgr.Instance.Play("ShowPOP", !1, 1)
                }
                PlayAutioTakeBouns() {
                    v.AudioMgr.Instance.Play("TakeBouns_2", !1, 1)
                }
                PlayAutioClose() {
                    v.AudioMgr.Instance.Play("Btn_Select_n_v01", !1, 1)
                }
            };
            o([I([d])], n.prototype, "m_Reward", void 0), o([I(cc.Button)], n.prototype, "m_btnClose", void 0), o([I(cc.Label)], n.prototype, "m_StartTime", void 0), o([I(cc.Label)], n.prototype, "m_EndTime", void 0), o([I(c)], n.prototype, "m_TodaysReward", void 0), o([I(cc.Node)], n.prototype, "m_TodaysRewardFinish", void 0), o([I(cc.Sprite)], n.prototype, "m_spTodaysReward", void 0), o([I([cc.SpriteFrame])], n.prototype, "m_aryTodaysReward", void 0), o([I(cc.Prefab)], n.prototype, "m_pfbGetReward", void 0), o([I(cc.Node)], n.prototype, "m_nodeTickRoot", void 0), o([I(cc.Node)], n.prototype, "m_nodeGetRewardRoot", void 0), o([I(l)], n.prototype, "m_RewardItemInfoBox", void 0), o([I({
                type: [cc.AudioClip]
            })], n.prototype, "SoundClip", void 0), n = o([y], n), e.SessionBonusDaily = n
        })(s.SessionBonus || (s.SessionBonus = {})), cc._RF.pop()
    }, {
        "../../../../../LobbyCommon/EventModule/SessionBonus/Script/SessionDataCtrl": void 0,
        "../../../../Component/AudioMgr": void 0,
        "../../../../Helper/EventSystem": void 0,
        "../../../../Net/ClickLog": void 0,
        "../../../../Net/ClickLogEnum": void 0,
        "./RewardItemData": "RewardItemData",
        "./RewardItemInfoBox": "RewardItemInfoBox",
        "./SessionBonusRewardItem": "SessionBonusRewardItem",
        "./SessionBonusTodayReward": "SessionBonusTodayReward"
    }],
    SessionBonusGetReward: [function(e, t, s) {
        "use strict";
        cc._RF.push(t, "12647it+FNGW5nFHaA4NVb0", "SessionBonusGetReward");
        var o = this && this.__decorate || function(e, t, s, o) {
                var i, n = arguments.length,
                    a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, s) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, s, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)(i = e[r]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, s, a) : i(t, s)) || a);
                return n > 3 && a && Object.defineProperty(t, s, a), a
            },
            i = this && this.__awaiter || function(e, t, s, o) {
                return new(s || (s = Promise))(function(i, n) {
                    function a(e) {
                        try {
                            h(o.next(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function r(e) {
                        try {
                            h(o.throw(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function h(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof s ? t : new s(function(e) {
                            e(t)
                        })).then(a, r)
                    }
                    h((o = o.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(s, "__esModule", {
            value: !0
        }), s.SessionBonusGetReward = void 0;
        const n = e("../../../../../GameCommon/Profile/NewRedPointMgr"),
            a = e("../../../../../LobbyCommon/EventModule/SessionBonus/Script/SessionDataCtrl"),
            r = e("../../../../Component/AudioMgr"),
            h = e("../../../../Component/BundleCtrl"),
            d = e("../../../../Helper/EventSystem"),
            c = e("./RewardItemData"),
            l = e("./RewardItemSprite");
        var u = c.SessionBonus.RewardType,
            S = c.SessionBonus.FishCardType,
            m = c.SessionBonus.ConvertSimpleDate,
            p = l.SessionBonus.RewardItemSprite;
        const {
            ccclass: v,
            property: w
        } = cc._decorator;
        var R;
        (function(e) {
            e[e.Init = 0] = "Init", e[e.ShowReward = 1] = "ShowReward", e[e.WaitShowReward = 2] = "WaitShowReward", e[e.CheckClick = 3] = "CheckClick", e[e.ShowTake = 4] = "ShowTake", e[e.WaitShowTake = 5] = "WaitShowTake", e[e.Finished = 6] = "Finished", e[e.End = 7] = "End"
        })(R || (R = {}));
        let y = class extends cc.Component {
            constructor() {
                super(...arguments), this.Root = null, this.ScoreBoxRoot = null, this.NoScoreBoxRoot = null, this.RewardItemSprite = null, this.nodeGemRoot = null, this.m_labGem = null, this.nodeEntriesRoot = null, this.labEntries = null, this.nodeWinningRoot = null, this.labWinning = null, this.nodeNoScoreGemRoot = null, this.labNoScoreGem = null, this.nodeCreditRoot = null, this.labCredit = null, this.nodeAvatarRoot = null, this.spAvatarFace = null, this.spAvatarFaceFrame = null, this.spNewRedPoint = null, this.nodeFishItemRoot = null, this.spFishItemBeckon = null, this.spFishItemIce = null, this.labFishItemBeckonAmount = null, this.labFishItemIceAmount = null, this.labAssetAmount = null, this.labAssetType = null, this.labItemAmount = null, this.labItemInterval = null, this.labAssetTypeAry = [], this.btnClose = null, this.numAutoTakeTime = 10, this.labAutoTakeTimer = null, this.psGlowSpot = null, this.pfbHitParticle = null, this.FlowState = R.Init, this.IsTakeDone = !1, this.AutoTakeCnt = 0, this.ItemType = null, this.ItemID = null, this.Amount = null, this.TimeLimit = null, this.Gem = null, this.Entries = null, this.Winning = null, this.BeckonAmount = null, this.IceAmount = null, this.spBundleFace = null, this.spBundleFaceFrame = null, this.m_iSoundShowBounsID = -1
            }
            start() {
                this.FlowState = R.Init, this.IsTakeDone = !1, this.HideAllRoot()
            }
            onDestroy() {
                this.ItemType = null, this.ItemID = null, this.Amount = null, this.TimeLimit = null, this.Gem = null, this.Entries = null, this.Winning = null, this.BeckonAmount = null, this.IceAmount = null, this.spBundleFace = null, this.spBundleFaceFrame = null
            }
            update(e) {
                switch (this.FlowState) {
                    case R.Init:
                        this.Init(), this.ChangeState(R.ShowReward);
                        break;
                    case R.ShowReward:
                        this.ShowReward();
                        break;
                    case R.WaitShowReward:
                        break;
                    case R.CheckClick:
                        this.RefreshTimerShow(), this.CheckTake(e) && (this.FadeOutAutioGetReward(), this.ShowTimer(!1), this.ChangeState(R.ShowTake));
                        break;
                    case R.ShowTake:
                        this.ShowTake(), this.ChangeState(R.WaitShowTake);
                        break;
                    case R.WaitShowTake:
                        break;
                    case R.Finished:
                        this.Finished(), this.ChangeState(R.End);
                        break;
                    case R.End:
                }
            }
            ChangeState(e) {
                this.FlowState = e
            }
            Init() {
                this.PlayAutioGetReward(), this.btnClose.interactable = !1, this.DownloadAvatarSprite(), this.ItemType = a.SessionDataCtrl.Instance.GetTakeRewardItemType(), this.ItemID = a.SessionDataCtrl.Instance.GetTakeRewardItemID(), this.Amount = a.SessionDataCtrl.Instance.GetTakeRewardAmount(), this.TimeLimit = a.SessionDataCtrl.Instance.GetItemSettingTimeLimit(this.ItemID), this.Gem = a.SessionDataCtrl.Instance.GetTakeRewardDiamond(), this.Entries = a.SessionDataCtrl.Instance.GetTakeRewardEntries(), this.Winning = a.SessionDataCtrl.Instance.GetTakeRewardWinning(), this.BeckonAmount = a.SessionDataCtrl.Instance.GetTakeRewardBeckonAmount(), this.IceAmount = a.SessionDataCtrl.Instance.GetTakeRewardIceAmount(), this.RewardItemSprite.Show(this.ItemType, this.ItemID), this.SetRewardMsg()
            }
            DownloadAvatarSprite() {
                return i(this, void 0, void 0, function*() {
                    SS.Network.UserClient.UserInfo.avatar_id && "" != SS.Network.UserClient.UserInfo.avatar_id && (this.spBundleFace = yield h.default.Instance.GetSpirte("Avatar", SS.Network.UserClient.UserInfo.avatar_id)), SS.Network.UserClient.UserInfo.avatar_frame_id && "" != SS.Network.UserClient.UserInfo.avatar_frame_id && (this.spBundleFaceFrame = yield h.default.Instance.GetSpirte("Avatar", SS.Network.UserClient.UserInfo.avatar_frame_id))
                })
            }
            ShowReward() {
                return i(this, void 0, void 0, function*() {
                    switch (this.ItemType) {
                        case u.Asset:
                        case u.Avatar:
                        case u.FishItem:
                            this.ChangeState(R.WaitShowReward);
                            break;
                        default:
                            this.ChangeState(R.Finished)
                    }
                    yield SS.Common.WaitForSeconds(1.2), this.ShowTimer(!0), this.btnClose.interactable = !0, this.IsTakeDone = !1, this.AutoTakeCnt = 0, this.ChangeState(R.CheckClick)
                })
            }
            SetRewardMsg() {
                switch (this.labAssetAmount.node.active = !1, this.labAssetType.node.active = !1, this.labItemAmount.node.active = !1, this.labItemInterval.node.active = !1, this.ItemType) {
                    case u.Asset:
                        this.labAssetAmount.node.active = !0, this.labAssetAmount.string = this.Amount, this.labAssetType.node.active = !0, this.labAssetType.spriteFrame = SS.Common.GameEnvironment.IsUseScoreBox ? this.labAssetTypeAry[0] : this.labAssetTypeAry[1];
                        break;
                    case u.Avatar:
                        this.labItemAmount.node.active = !0, this.labItemAmount.string = m.ToWholeWord(this.TimeLimit);
                        break;
                    case u.FishItem:
                        this.labItemAmount.node.active = !0, this.labItemAmount.string = this.Amount
                }
            }
            CheckTake(e) {
                return this.AutoTakeCnt += e, this.AutoTakeCnt > this.numAutoTakeTime && 0 == this.IsTakeDone && (this.OnAutoTake(), this.IsTakeDone = !0), this.IsTakeDone
            }
            ShowTake() {
                return i(this, void 0, void 0, function*() {
                    switch (this.ItemType) {
                        case u.Asset:
                            yield this.ShowTakeAsset();
                            break;
                        case u.Avatar:
                            yield this.ShowTakeAvatar();
                            break;
                        case u.FishItem:
                            yield this.ShowTakeFishItem()
                    }
                    yield this.WaitFadeOut(), this.ChangeState(R.Finished)
                })
            }
            ShowTakeAsset() {
                return i(this, void 0, void 0, function*() {
                    let e = SS.Common.GameEnvironment.IsUseScoreBox ? this.labEntries : this.labCredit,
                        t = SS.Common.GameEnvironment.IsUseScoreBox ? this.nodeEntriesRoot : this.nodeCreditRoot;
                    this.ScoreBoxRoot.active = SS.Common.GameEnvironment.IsUseScoreBox, this.NoScoreBoxRoot.active = !SS.Common.GameEnvironment.IsUseScoreBox, e.string = (this.Entries > Number(this.Amount) ? this.Entries - Number(this.Amount) : 0).toString(), t.active = !0, this.FadeInNode(t, .3), yield this.ShowFlyItem(t), e.string = this.Entries.toString(), d.EventSystem.Event(d.SessionEvent.UpdateAssets) && d.EventSystem.Event(d.SessionEvent.UpdateAssets).Length > 0 && d.EventSystem.Event(d.SessionEvent.UpdateAssets).Notify(this.Entries)
                })
            }
            ShowTakeAvatar() {
                return i(this, void 0, void 0, function*() {
                    this.spBundleFace && (this.spAvatarFace.spriteFrame = this.spBundleFace), this.spBundleFaceFrame && (this.spAvatarFaceFrame.spriteFrame = this.spBundleFaceFrame), this.nodeAvatarRoot.active = !0, this.FadeInNode(this.nodeAvatarRoot, .3), yield this.ShowFlyItem(this.nodeAvatarRoot), this.spNewRedPoint.node.active = !0, this.spNewRedPoint.node.opacity = 255;
                    let e = n.NewRedPointType.Avatar; - 1 != this.ItemID.indexOf("FRM") && (e = n.NewRedPointType.AvatarFrame), d.EventSystem.Event(d.NoticedArrived.SetNewsRedPoint).Length && d.EventSystem.Event(d.NoticedArrived.SetNewsRedPoint).Notify(!0, e)
                })
            }
            ShowTakeFishItem() {
                return i(this, void 0, void 0, function*() {
                    this.nodeFishItemRoot.active = !0, this.spFishItemIce.node.active = !1, this.spFishItemBeckon.node.active = !1, this.labFishItemIceAmount.node.active = !1, this.labFishItemBeckonAmount.node.active = !1;
                    let e = 0;
                    switch (this.ItemID) {
                        case S.Freeze:
                            this.spFishItemIce.node.active = !0, this.labFishItemIceAmount.node.active = !0, e = this.IceAmount, this.labFishItemIceAmount.string = (e > Number(this.Amount) ? e - Number(this.Amount) : 0).toString();
                            break;
                        case S.Summon:
                            this.spFishItemBeckon.node.active = !0, this.labFishItemBeckonAmount.node.active = !0, e = this.BeckonAmount, this.labFishItemBeckonAmount.string = (e > Number(this.Amount) ? e - Number(this.Amount) : 0).toString()
                    }
                    switch (this.FadeInNode(this.nodeFishItemRoot, .3), this.ItemID) {
                        case S.Freeze:
                            yield this.ShowFlyItem(this.spFishItemIce.node), this.labFishItemIceAmount.string = e.toString();
                            break;
                        case S.Summon:
                            yield this.ShowFlyItem(this.spFishItemBeckon.node), this.labFishItemBeckonAmount.string = e.toString()
                    }
                })
            }
            ShowFlyItem(e) {
                return i(this, void 0, void 0, function*() {
                    this.PlayAutioBounsFly();
                    let t = cc.instantiate(this.RewardItemSprite.node);
                    t.parent = this.RewardItemSprite.node.parent, this.ChangeParent(t, e), t.opacity = 130, cc.tween(t).to(.2, {
                        scale: 1.1
                    }).start(), yield SS.Common.WaitForSeconds(.2), this.psGlowSpot.stopSystem();
                    let s = [],
                        o = new cc.Vec2(t.position.x, t.position.y),
                        i = cc.Vec2.ZERO,
                        n = new cc.Vec2(o.x + (i.x - o.x) / 2, o.y + (i.y - o.y) / 2 + 150);
                    s.push(o), s.push(n), s.push(i), cc.tween(t).parallel(cc.bezierTo(.7, s), cc.tween().to(.7 * .1, {
                        scale: 1.2
                    }).delay(.7 * .2).to(.7 * .7, {
                        scale: .2
                    })).start(), yield SS.Common.WaitForSeconds(.7);
                    let a = cc.instantiate(this.pfbHitParticle);
                    a.parent = this.node, a.position = this.node.convertToNodeSpaceAR(e.convertToWorldSpaceAR(cc.Vec3.ZERO)), this.scheduleOnce(() => {
                        a.destroy()
                    }, 1);
                    let r = e.position;
                    cc.tween(e).parallel(cc.tween().to(.05, {
                        scale: .98
                    }).to(.1, {
                        scale: 1.05
                    }).to(.075, {
                        scale: .95
                    }).to(.025, {
                        scale: 1
                    }), cc.tween().to(.05, {
                        position: new cc.Vec3(r.x, r.y - 2, 0)
                    }).to(.1, {
                        position: new cc.Vec3(r.x, r.y + 1, 0)
                    }).to(.1, {
                        position: new cc.Vec3(r.x, r.y, 0)
                    })).start(), t.destroy()
                })
            }
            WaitFadeOut() {
                return i(this, void 0, void 0, function*() {
                    yield SS.Common.WaitForSeconds(.3), cc.tween(this.Root).to(.5, {
                        opacity: 0
                    }).start(), yield SS.Common.WaitForSeconds(.5), this.psGlowSpot.resetSystem(), this.psGlowSpot.enabled = !1, yield SS.Common.WaitForSeconds(.3)
                })
            }
            Finished() {
                d.EventSystem.Event(d.SessionEvent.OnCloseReward).Length > 0 && d.EventSystem.Event(d.SessionEvent.OnCloseReward).Notify()
            }
            OnAutoTake() {}
            OnClickToTake(e, t) {
                this.IsTakeDone = !0
            }
            HideAllRoot() {
                this.nodeAvatarRoot.active = !1, this.nodeGemRoot.active = !1, this.nodeEntriesRoot.active = !1, this.nodeWinningRoot.active = !1, this.nodeFishItemRoot.active = !1, this.nodeNoScoreGemRoot.active = !1, this.nodeCreditRoot.active = !1, this.ScoreBoxRoot.active = !1, this.NoScoreBoxRoot.active = !1
            }
            ShowDiamond(e) {
                this.nodeGemRoot.active = !0, this.m_labGem.string = e.toString()
            }
            ShowEntries(e) {
                this.nodeEntriesRoot.active = !0, this.labEntries.string = e.toString()
            }
            ShowWinning(e) {
                this.nodeWinningRoot.active = !0, this.labWinning.string = e.toString()
            }
            ShowTimer(e) {
                this.labAutoTakeTimer && (this.labAutoTakeTimer.string = this.TimerCountDone().toString(), e ? (this.labAutoTakeTimer.node.opacity = 0, cc.tween(this.labAutoTakeTimer.node).to(.2, {
                    opacity: 255
                }).start()) : (this.labAutoTakeTimer.node.opacity = 255, cc.tween(this.labAutoTakeTimer.node).to(.2, {
                    opacity: 0
                }).start()))
            }
            RefreshTimerShow() {
                this.labAutoTakeTimer && (this.labAutoTakeTimer.string = this.TimerCountDone().toString())
            }
            TimerCountDone() {
                let e = Number(this.numAutoTakeTime) - this.AutoTakeCnt;
                return e < 0 && (e = 0), Math.floor(e)
            }
            FadeOutNode(e, t) {
                e.activeInHierarchy && cc.tween(e).to(t, {
                    opacity: 0
                }).start()
            }
            FadeInNode(e, t) {
                e.active = !0, e.opacity = 0, cc.tween(e).to(t, {
                    opacity: 255
                }).start()
            }
            ChangeParent(e, t) {
                let s = e.convertToWorldSpaceAR(cc.Vec3.ZERO);
                e.parent = t, e.position = t.convertToNodeSpaceAR(s)
            }
            PlayAutioGetReward() {
                this.m_iSoundShowBounsID = r.AudioMgr.Instance.Play("ShowBouns", !1, 1)
            }
            FadeOutAutioGetReward() {
                -1 != this.m_iSoundShowBounsID && r.AudioMgr.Instance.SetVolume(this.m_iSoundShowBounsID, 0, 1)
            }
            PlayAutioBounsFly() {
                r.AudioMgr.Instance.Play("TakeBouns_1", !1, 1)
            }
        };
        o([w(cc.Node)], y.prototype, "Root", void 0), o([w(cc.Node)], y.prototype, "ScoreBoxRoot", void 0), o([w(cc.Node)], y.prototype, "NoScoreBoxRoot", void 0), o([w(p)], y.prototype, "RewardItemSprite", void 0), o([w(cc.Node)], y.prototype, "nodeGemRoot", void 0), o([w(cc.Label)], y.prototype, "m_labGem", void 0), o([w(cc.Node)], y.prototype, "nodeEntriesRoot", void 0), o([w(cc.Label)], y.prototype, "labEntries", void 0), o([w(cc.Node)], y.prototype, "nodeWinningRoot", void 0), o([w(cc.Label)], y.prototype, "labWinning", void 0), o([w(cc.Node)], y.prototype, "nodeNoScoreGemRoot", void 0), o([w(cc.Node)], y.prototype, "labNoScoreGem", void 0), o([w(cc.Node)], y.prototype, "nodeCreditRoot", void 0), o([w(cc.Label)], y.prototype, "labCredit", void 0), o([w(cc.Node)], y.prototype, "nodeAvatarRoot", void 0), o([w(cc.Sprite)], y.prototype, "spAvatarFace", void 0), o([w(cc.Sprite)], y.prototype, "spAvatarFaceFrame", void 0), o([w(cc.Sprite)], y.prototype, "spNewRedPoint", void 0), o([w(cc.Node)], y.prototype, "nodeFishItemRoot", void 0), o([w(cc.Sprite)], y.prototype, "spFishItemBeckon", void 0), o([w(cc.Sprite)], y.prototype, "spFishItemIce", void 0), o([w(cc.Label)], y.prototype, "labFishItemBeckonAmount", void 0), o([w(cc.Label)], y.prototype, "labFishItemIceAmount", void 0), o([w(cc.Label)], y.prototype, "labAssetAmount", void 0), o([w(cc.Sprite)], y.prototype, "labAssetType", void 0), o([w(cc.Label)], y.prototype, "labItemAmount", void 0), o([w(cc.Label)], y.prototype, "labItemInterval", void 0), o([w([cc.SpriteFrame])], y.prototype, "labAssetTypeAry", void 0), o([w(cc.Button)], y.prototype, "btnClose", void 0), o([w(cc.Integer)], y.prototype, "numAutoTakeTime", void 0), o([w(cc.Label)], y.prototype, "labAutoTakeTimer", void 0), o([w(cc.ParticleSystem)], y.prototype, "psGlowSpot", void 0), o([w(cc.Prefab)], y.prototype, "pfbHitParticle", void 0), y = o([v], y), s.SessionBonusGetReward = y, cc._RF.pop()
    }, {
        "../../../../../GameCommon/Profile/NewRedPointMgr": void 0,
        "../../../../../LobbyCommon/EventModule/SessionBonus/Script/SessionDataCtrl": void 0,
        "../../../../Component/AudioMgr": void 0,
        "../../../../Component/BundleCtrl": void 0,
        "../../../../Helper/EventSystem": void 0,
        "./RewardItemData": "RewardItemData",
        "./RewardItemSprite": "RewardItemSprite"
    }],
    SessionBonusMgr: [function(e, t, s) {
        "use strict";
        cc._RF.push(t, "f9e2fPJNaxOVbsoOfne/gDj", "SessionBonusMgr");
        var o = this && this.__decorate || function(e, t, s, o) {
                var i, n = arguments.length,
                    a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, s) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, s, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)(i = e[r]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, s, a) : i(t, s)) || a);
                return n > 3 && a && Object.defineProperty(t, s, a), a
            },
            i = this && this.__awaiter || function(e, t, s, o) {
                return new(s || (s = Promise))(function(i, n) {
                    function a(e) {
                        try {
                            h(o.next(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function r(e) {
                        try {
                            h(o.throw(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function h(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof s ? t : new s(function(e) {
                            e(t)
                        })).then(a, r)
                    }
                    h((o = o.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(s, "__esModule", {
            value: !0
        });
        const n = e("../../../../EventModule/SessionBonus/Script/SessionDataCtrl"),
            a = e("../../../../Helper/EventSystem"),
            r = e("../../../../ModuleBase"),
            h = e("../../../../Helper/Download"),
            {
                ccclass: d,
                property: c
            } = cc._decorator;
        var l;
        (function(e) {
            let t;
            (function(e) {
                e[e.Init = 0] = "Init", e[e.WaitDataLoading = 1] = "WaitDataLoading", e[e.WaitBundleLoading = 2] = "WaitBundleLoading", e[e.AutoShow = 3] = "AutoShow", e[e.WaitAutoShow = 4] = "WaitAutoShow", e[e.CheckNext = 5] = "CheckNext", e[e.StandBy = 6] = "StandBy"
            })(t || (t = {}));
            let s = class extends r.default {
                constructor() {
                    super(...arguments), this.Root = null, this.Loading = null, this.SessionBonusRoot = null, this.nodeSessionBonusList = [], this.sessionBonusBundleNameList = [], this.FlowStatus = t.Init, this.AutoShowSession = [], this.IsAllSessionBundleLoaded = !1, this.IsClickCloseBtn = !1
                }
                _start() {
                    return i(this, void 0, void 0, function*() {
                        a.EventSystem.Event(a.SessionEvent.OpenSessionBonus).Insert(this.onOpenSessionBonus, this), a.EventSystem.Event(a.SessionEvent.CloseCurrentSession).Insert(this.onCloseCurrentSession, this)
                    })
                }
                _onDestroy() {
                    return i(this, void 0, void 0, function*() {
                        a.EventSystem.Event(a.SessionEvent.OpenSessionBonus) && a.EventSystem.Event(a.SessionEvent.OpenSessionBonus).Length > 0 && a.EventSystem.Event(a.SessionEvent.OpenSessionBonus).Remove(this.onOpenSessionBonus, this), a.EventSystem.Event(a.SessionEvent.CloseCurrentSession) && a.EventSystem.Event(a.SessionEvent.CloseCurrentSession).Length > 0 && a.EventSystem.Event(a.SessionEvent.CloseCurrentSession).Remove(this.onCloseCurrentSession, this), this.nodeSessionBonusList = null, this.sessionBonusBundleNameList && this.sessionBonusBundleNameList.length > 0 && h.Download.ReleaseBundles(this.sessionBonusBundleNameList), this.sessionBonusBundleNameList = null
                    })
                }
                update() {
                    switch (this.FlowStatus) {
                        case t.Init:
                            this.Init(), this.ChangeStatus(t.WaitDataLoading);
                            break;
                        case t.WaitDataLoading:
                            this.CheckSessionDataLoading() && (this.IsSessionInProgressNow() ? (this.DataLoadingFinished(), this.ChangeStatus(t.WaitBundleLoading)) : (this.Root.active = !1, this.ChangeStatus(t.StandBy)));
                            break;
                        case t.WaitBundleLoading:
                            this.CheckSessionBundleLoading() && (this.BundleLoadingFinished(), this.ChangeStatus(t.AutoShow));
                            break;
                        case t.AutoShow:
                            this.AutoShow(), this.ChangeStatus(t.WaitAutoShow);
                            break;
                        case t.WaitAutoShow:
                            this.IsCloseCurrentBonus() && (this.CloseAllChildNode(), this.ChangeStatus(t.CheckNext));
                            break;
                        case t.CheckNext:
                            this.CheckNext() ? this.ChangeStatus(t.AutoShow) : (this.CloseSessionBonus(), this.ChangeStatus(t.StandBy));
                            break;
                        case t.StandBy:
                    }
                }
                ChangeStatus(e) {
                    this.FlowStatus = e
                }
                Init() {
                    this.IsAllSessionBundleLoaded = !1, this.Loading.active = !0
                }
                IsSessionInProgressNow() {
                    let e = !1,
                        t = n.SessionDataCtrl.Instance.GetSessionBonusList();
                    if (t)
                        for (let s = 0; s < t.length; s++)
                            if (t[s].hasOwnProperty("Layout")) {
                                let o = t[s].Layout;
                                n.SessionDataCtrl.Instance.IsSessionInProgressNow(o) && (e = !0)
                            }
                    return e
                }
                CheckSessionDataLoading() {
                    return null != n.SessionDataCtrl.Instance.GetSessionBonusList()
                }
                DataLoadingFinished() {
                    this.AddSessionBonus()
                }
                CheckSessionBundleLoading() {
                    return this.IsAllSessionBundleLoaded
                }
                BundleLoadingFinished() {
                    this.Loading.active = !1, null != this.nodeSessionBonusList && this.nodeSessionBonusList.forEach(e => {
                        this.AutoShowSession.push(e)
                    })
                }
                AutoShow() {
                    this.IsClickCloseBtn = !1;
                    let e = this.AutoShowSession.splice(0, 1);
                    e && e.length > 0 && (e[0].active = !0)
                }
                IsCloseCurrentBonus() {
                    return this.IsClickCloseBtn
                }
                CloseAllChildNode() {
                    this.nodeSessionBonusList.forEach(e => {
                        e.active = !1
                    })
                }
                CheckNext() {
                    let e = !1;
                    return this.AutoShowSession && this.AutoShowSession.length > 0 && (e = !0), e
                }
                CloseSessionBonus() {
                    this.Root.active = !1, a.EventSystem.Event(a.SessionEvent.CloseSessionBonus) && a.EventSystem.Event(a.SessionEvent.CloseSessionBonus).Length > 0 && a.EventSystem.Event(a.SessionEvent.CloseSessionBonus).Notify()
                }
                AddSessionBonus() {
                    return i(this, void 0, void 0, function*() {
                        let e = n.SessionDataCtrl.Instance.GetSessionBonusList();
                        if (e)
                            for (let t = 0; t < e.length; t++)
                                if (e[t].hasOwnProperty("Layout")) {
                                    let s = e[t].Layout;
                                    yield this.CreateSessionBonusObj(s)
                                }
                        this.IsAllSessionBundleLoaded = !0
                    })
                }
                CreateSessionBonusObj(e) {
                    return i(this, void 0, void 0, function*() {
                        let t = "SessionBonus_" + e,
                            s = yield h.Download.Prefab(t);
                        if (s) {
                            let e = cc.instantiate(s);
                            e.parent = this.SessionBonusRoot, e.position = cc.Vec3.ZERO, e.active = !1, this.nodeSessionBonusList.push(e)
                        }
                        this.sessionBonusBundleNameList.push(t)
                    })
                }
                HideSessionBonus() {
                    this.CloseAllChildNode(), this.Root.active = !1
                }
                onOpenSessionBonus(e, s) {
                    if (s) {
                        if (n.SessionDataCtrl.Instance.IsSessionInProgressNow(e) && (this.Root.active = !0, e))
                            for (let t = 0; t < this.nodeSessionBonusList.length; t++) {
                                let s = this.nodeSessionBonusList[t];
                                if (-1 != s.name.indexOf(e)) {
                                    s.active = !0;
                                    break
                                }
                            }
                    } else {
                        let e = !1,
                            s = n.SessionDataCtrl.Instance.GetSessionBonusList();
                        if (s)
                            for (let t = 0; t < s.length; t++)
                                if (s[t].hasOwnProperty("Layout") && n.SessionDataCtrl.Instance.IsSessionInProgressNow(s[t].Layout)) {
                                    e = !0;
                                    break
                                }
                        e ? this.Root.active = !0 : (this.CloseSessionBonus(), this.ChangeStatus(t.StandBy))
                    }
                }
                onCloseCurrentSession() {
                    this.IsClickCloseBtn = !0, this.FlowStatus != t.StandBy && this.FlowStatus != t.WaitDataLoading && this.FlowStatus != t.WaitBundleLoading || (this.CloseAllChildNode(), this.Root.active = !1)
                }
            };
            o([c(cc.Node)], s.prototype, "Root", void 0), o([c(cc.Node)], s.prototype, "Loading", void 0), o([c(cc.Node)], s.prototype, "SessionBonusRoot", void 0), s = o([d], s), e.SessionBonusMgr = s
        })(l || (l = {})), cc._RF.pop()
    }, {
        "../../../../EventModule/SessionBonus/Script/SessionDataCtrl": void 0,
        "../../../../Helper/Download": void 0,
        "../../../../Helper/EventSystem": void 0,
        "../../../../ModuleBase": void 0
    }],
    SessionBonusRewardItem: [function(e, t, s) {
        "use strict";
        cc._RF.push(t, "b689eZhnWJBu5lNZ34lzU3y", "SessionBonusRewardItem");
        var o = this && this.__decorate || function(e, t, s, o) {
                var i, n = arguments.length,
                    a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, s) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, s, o);
                else
                    for (var r = e.length - 1; r >= 0; r--)(i = e[r]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, s, a) : i(t, s)) || a);
                return n > 3 && a && Object.defineProperty(t, s, a), a
            },
            i = this && this.__awaiter || function(e, t, s, o) {
                return new(s || (s = Promise))(function(i, n) {
                    function a(e) {
                        try {
                            h(o.next(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function r(e) {
                        try {
                            h(o.throw(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function h(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof s ? t : new s(function(e) {
                            e(t)
                        })).then(a, r)
                    }
                    h((o = o.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(s, "__esModule", {
            value: !0
        }), s.SessionBonus = void 0;
        const n = e("./RewardItemSprite"),
            a = e("./RewardItemData");
        var r = n.SessionBonus.RewardItemSprite,
            h = a.SessionBonus.RewardItemStatus,
            d = a.SessionBonus.RewardType,
            c = a.SessionBonus.ConvertSimpleDate;
        const l = e("../../../../Helper/EventSystem"),
            {
                ccclass: u,
                property: S
            } = cc._decorator;
        (function(e) {
            let t = class extends cc.Component {
                constructor() {
                    super(...arguments), this.spRewardHalo = null, this.spRewardBgNormal = null, this.spRewardBgGot = null, this.spRewardBgCurrent = null, this.spRewardTitleBgNormal = null, this.spRewardTitleBgGot = null, this.spRewardTitleBgCurrent = null, this.spRewardDayNum = null, this.RewardItemSprite = null, this.labRewardAmount = null, this.labRewardTimeLimit = null, this.spTick = null, this.isLargeSize = !1, this.btnShowInfoBox = null, this.colorInit = cc.color(50, 20, 120, 255), this.colorToday = cc.color(255, 0, 0, 255), this.colorReady = cc.color(50, 20, 120, 255), this.colorTake = cc.color(60, 60, 60, 255), this.colorLarge = cc.color(200, 0, 240, 255), this.Level = null, this.Status = null, this.ItemType = null, this.ItemID = null, this.Amount = null, this.TimeLimit = null, this.HeloLightTween = null, this.TickPopupTween = null, this.TickRoot = null, this.tweenPool = []
                }
                onDestroy() {
                    this.HeloLightTween = null, this.TickPopupTween = null
                }
                onDisable() {
                    this.tweenPool.forEach(e => {
                        null != e && null != e && e.stop()
                    })
                }
                Init(e, t, s, o, i, n, a) {
                    this.Level = e, this.ItemType = s, this.ItemID = o, this.Amount = i, this.TimeLimit = n, this.Status = t, this.btnShowInfoBox.node.active = !0, this.btnShowInfoBox.interactable = !0, this.HeloLightTween = cc.tween(this.spRewardHalo.node).then(cc.tween().to(.4, {
                        opacity: 255
                    }).to(.4, {
                        opacity: 0
                    })).repeatForever(), this.TickPopupTween = cc.tween(this.spTick.node).call(() => {
                        this.spTick.node.scale = .2
                    }).to(.2, {
                        scale: 4.5
                    }).to(.15, {
                        scale: 5
                    }).to(.1, {
                        scale: .8
                    }).to(.05, {
                        scale: 1
                    }), this.ShowInitStatus(), a && (this.TickRoot = a)
                }
                ShowInitStatus() {
                    switch (this.spRewardHalo.node.active = !1, this.spRewardBgGot.node.active = !1, this.spRewardTitleBgGot.node.active = !1, this.spRewardBgCurrent.node.active = !1, this.spRewardTitleBgCurrent.node.active = !1, this.spRewardBgNormal.node.opacity = 255, this.spRewardBgNormal.node.active = !1, this.spRewardTitleBgNormal.node.active = !1, this.spTick.node.active = !1, this.Status) {
                        case h.Init:
                        case h.Ready:
                            this.spRewardBgNormal.node.active = !0, this.spRewardTitleBgNormal.node.active = !0, this.spRewardTitleBgNormal.node.opacity = 255;
                            break;
                        case h.Take:
                            this.spRewardBgGot.node.active = !0, this.spRewardBgGot.node.opacity = 255, this.spRewardTitleBgGot.node.active = !0, this.spRewardTitleBgGot.node.opacity = 255, this.spTick.node.active = !0, this.spTick.node.opacity = 255;
                            break;
                        case h.Today:
                            this.spRewardBgCurrent.node.active = !0, this.spRewardBgCurrent.node.opacity = 255, this.spRewardTitleBgCurrent.node.active = !0, this.spRewardTitleBgCurrent.node.opacity = 255
                    }
                    this.spRewardDayNum.string = "DAY" + (this.Level + 1).toString(), this.RewardItemSprite.Show(this.ItemType, this.ItemID, this.Status == h.Take), this.SetRewardMsg()
                }
                ShowHaloLight(e) {
                    this.spRewardHalo.node.active = e, e ? (this.spRewardHalo.node.opacity = 0, this.HeloLightTween.start()) : this.HeloLightTween.stop()
                }
                Shake() {
                    return cc.tween(this.node).parallel(cc.tween().to(.4 * .35, {
                        scale: 1.05
                    }).delay(.4 * .1).to(.4 * .2, {
                        scale: 1.04
                    }).to(.4 * .35, {
                        scale: 1
                    }), cc.tween().delay(.4 * .1).to(.4 * .1, {
                        angle: 1.5
                    }).to(.1, {
                        angle: -3
                    }).to(.1, {
                        angle: 1
                    }).to(.06, {
                        angle: -1
                    }).to(.06, {
                        angle: 0
                    })).start(), .4
                }
                ShowTickAnim() {
                    return i(this, void 0, void 0, function*() {
                        yield this.ChangeUIStatus(h.Take)
                    })
                }
                HighlightTodaysReward() {
                    return i(this, void 0, void 0, function*() {
                        this.ShowHaloLight(!0), yield this.ChangeUIStatus(h.Today)
                    })
                }
                onClickShowInfoBox() {
                    cc.error("[step] onClickShowInfoBox ", this.Level), null != this.Level && l.EventSystem.Event(l.SessionEvent.OnClickRewardItem) && l.EventSystem.Event(l.SessionEvent.OnClickRewardItem).Length > 0 && l.EventSystem.Event(l.SessionEvent.OnClickRewardItem).Notify(this.Level)
                }
                SetRewardMsg() {
                    switch (this.labRewardTimeLimit.string = "", this.ItemType) {
                        case d.Asset:
                            this.labRewardAmount.string = this.Amount;
                            break;
                        case d.Avatar:
                            this.TimeLimit ? this.labRewardAmount.string = c.ToWholeWord(this.TimeLimit) : this.labRewardAmount.string = "";
                            break;
                        case d.FishItem:
                            this.labRewardAmount.string = this.Amount
                    }
                    switch (this.Status) {
                        case h.Init:
                        case h.Ready:
                            this.isLargeSize ? this.labRewardAmount.node.color = this.colorLarge : this.labRewardAmount.node.color = this.colorInit;
                            break;
                        case h.Take:
                            this.labRewardAmount.node.color = this.colorTake;
                            break;
                        case h.Today:
                            this.labRewardAmount.node.color = this.colorToday
                    }
                }
                ChangeUIStatus(e) {
                    return i(this, void 0, void 0, function*() {
                        switch (this.Status) {
                            case h.Init:
                            case h.Ready:
                                e == h.Take ? (this.FadeInNode(this.spRewardBgGot.node, .5), this.FadeInNode(this.spRewardTitleBgGot.node, .5), this.ChangeNodeColor(this.labRewardAmount.node, .5, this.colorTake), this.ChangeNodeColor(this.labRewardTimeLimit.node, .5, this.colorTake), this.RewardItemSprite.SpriteList.forEach(e => {
                                    this.ChangeNodeColor(e.node, .5, cc.Color.GRAY)
                                }), this.TickRoot && this.ChangeParent(this.spTick.node, this.TickRoot), this.FadeInNode(this.spTick.node, .2), this.TickPopupTween.start(), this.Status = e, yield SS.Common.WaitForSeconds(.5), this.FadeOutNode(this.spRewardBgNormal.node, .5), this.FadeOutNode(this.spRewardTitleBgNormal.node, .5)) : e == h.Today && (this.FadeInNode(this.spRewardBgCurrent.node, .5), this.FadeInNode(this.spRewardTitleBgCurrent.node, .5), this.ChangeNodeColor(this.labRewardAmount.node, .5, this.colorToday), this.ChangeNodeColor(this.labRewardTimeLimit.node, .5, this.colorToday), this.Status = e, yield SS.Common.WaitForSeconds(.5), this.FadeOutNode(this.spRewardBgNormal.node, .5), this.FadeOutNode(this.spRewardTitleBgNormal.node, .5));
                                break;
                            case h.Today:
                                e == h.Take && (this.FadeInNode(this.spRewardBgGot.node, .5), this.FadeInNode(this.spRewardTitleBgGot.node, .5), this.ChangeNodeColor(this.labRewardAmount.node, .5, this.colorTake), this.ChangeNodeColor(this.labRewardTimeLimit.node, .5, this.colorTake), this.FadeInNode(this.spTick.node, .2), this.Status = e, yield SS.Common.WaitForSeconds(.5), this.FadeOutNode(this.spRewardBgCurrent.node, .5), this.FadeOutNode(this.spRewardTitleBgCurrent.node, .5));
                                break;
                            case h.Take:
                        }
                    })
                }
                FadeOutNode(e, t) {
                    if (e.activeInHierarchy) {
                        let s = cc.tween(e).to(t, {
                            opacity: 0
                        }).start();
                        this.tweenPool.push(s)
                    }
                }
                FadeInNode(e, t) {
                    e.active = !0, e.opacity = 0;
                    let s = cc.tween(e).to(t, {
                        opacity: 255
                    }).start();
                    this.tweenPool.push(s)
                }
                ChangeNodeColor(e, t, s) {
                    let o = cc.tween(e).to(t, {
                        color: s
                    }).start();
                    this.tweenPool.push(o)
                }
                ChangeParent(e, t) {
                    let s = e.convertToWorldSpaceAR(cc.Vec3.ZERO);
                    e.parent = t, e.position = t.convertToNodeSpaceAR(s)
                }
            };
            o([S(cc.Sprite)], t.prototype, "spRewardHalo", void 0), o([S(cc.Sprite)], t.prototype, "spRewardBgNormal", void 0), o([S(cc.Sprite)], t.prototype, "spRewardBgGot", void 0), o([S(cc.Sprite)], t.prototype, "spRewardBgCurrent", void 0), o([S(cc.Sprite)], t.prototype, "spRewardTitleBgNormal", void 0), o([S(cc.Sprite)], t.prototype, "spRewardTitleBgGot", void 0), o([S(cc.Sprite)], t.prototype, "spRewardTitleBgCurrent", void 0), o([S(cc.Label)], t.prototype, "spRewardDayNum", void 0), o([S(r)], t.prototype, "RewardItemSprite", void 0), o([S(cc.Label)], t.prototype, "labRewardAmount", void 0), o([S(cc.Label)], t.prototype, "labRewardTimeLimit", void 0), o([S(cc.Sprite)], t.prototype, "spTick", void 0), o([S()], t.prototype, "isLargeSize", void 0), o([S(cc.Button)], t.prototype, "btnShowInfoBox", void 0), o([S(cc.Color)], t.prototype, "colorInit", void 0), o([S(cc.Color)], t.prototype, "colorToday", void 0), o([S(cc.Color)], t.prototype, "colorReady", void 0), o([S(cc.Color)], t.prototype, "colorTake", void 0), o([S(cc.Color)], t.prototype, "colorLarge", void 0), t = o([u], t), e.SessionBonusRewardItem = t
        })(s.SessionBonus || (s.SessionBonus = {})), cc._RF.pop()
    }, {
        "../../../../Helper/EventSystem": void 0,
        "./RewardItemData": "RewardItemData",
        "./RewardItemSprite": "RewardItemSprite"
    }],
    SessionBonusTodayReward: [function(e, t, s) {
        "use strict";
        cc._RF.push(t, "5ec10gUJoZFnrBqI5ejli3D", "SessionBonusTodayReward");
        var o = this && this.__decorate || function(e, t, s, o) {
            var i, n = arguments.length,
                a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, s) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, s, o);
            else
                for (var r = e.length - 1; r >= 0; r--)(i = e[r]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, s, a) : i(t, s)) || a);
            return n > 3 && a && Object.defineProperty(t, s, a), a
        };
        Object.defineProperty(s, "__esModule", {
            value: !0
        }), s.SessionBonus = void 0;
        const i = e("./RewardItemSprite"),
            n = e("./RewardItemData");
        var a = i.SessionBonus.RewardItemSprite,
            r = n.SessionBonus.RewardType,
            h = n.SessionBonus.ConvertSimpleDate;
        const {
            ccclass: d,
            property: c
        } = cc._decorator;
        (function(e) {
            let t = class extends cc.Component {
                constructor() {
                    super(...arguments), this.RewardItemSprite = null, this.labAssetAmount = null, this.labAssetType = null, this.labItemAmount = null, this.labItemInterval = null, this.labAssetTypeAry = []
                }
                Init(e, t, s, o) {
                    switch (this.labAssetAmount.node.active = !1, this.labAssetType.node.active = !1, this.labItemAmount.node.active = !1, this.labItemInterval.node.active = !1, e) {
                        case r.Asset:
                            this.labAssetAmount.node.active = !0, this.labAssetAmount.string = s, this.labAssetType.node.active = !0, this.labAssetType.spriteFrame = SS.Common.GameEnvironment.IsUseScoreBox ? this.labAssetTypeAry[0] : this.labAssetTypeAry[1];
                            break;
                        case r.Avatar:
                            this.labItemAmount.node.active = !0, this.labItemAmount.string = h.ToWholeWord(o);
                            break;
                        case r.FishItem:
                            this.labItemAmount.node.active = !0, this.labItemAmount.string = s
                    }
                    this.RewardItemSprite.Show(e, t)
                }
            };
            o([c(a)], t.prototype, "RewardItemSprite", void 0), o([c(cc.Label)], t.prototype, "labAssetAmount", void 0), o([c(cc.Sprite)], t.prototype, "labAssetType", void 0), o([c(cc.Label)], t.prototype, "labItemAmount", void 0), o([c(cc.Label)], t.prototype, "labItemInterval", void 0), o([c([cc.SpriteFrame])], t.prototype, "labAssetTypeAry", void 0), t = o([d], t), e.TodayReward = t
        })(s.SessionBonus || (s.SessionBonus = {})), cc._RF.pop()
    }, {
        "./RewardItemData": "RewardItemData",
        "./RewardItemSprite": "RewardItemSprite"
    }]
}, {}, ["RewardItemData", "RewardItemInfoBox", "RewardItemSprite", "SessionBonusDaily", "SessionBonusGetReward", "SessionBonusMgr", "SessionBonusRewardItem", "SessionBonusTodayReward"]);