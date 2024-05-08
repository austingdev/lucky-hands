window.__require = function e(t, o, n) {
    function i(a, c) {
        if (!o[a]) {
            if (!t[a]) {
                var s = a.split("/");
                if (s = s[s.length - 1], !t[s]) {
                    var m = "function" == typeof __require && __require;
                    if (!c && m) return m(s, !0);
                    if (r) return r(s, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = s
            }
            var u = o[a] = {
                exports: {}
            };
            t[a][0].call(u.exports, function(e) {
                return i(t[a][1][e] || e)
            }, u, u.exports, e, t, o, n)
        }
        return o[a].exports
    }
    for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
    return i
}({
    InGamePopupMgr: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "59919lR6/JAWZnzG1BsPwes", "InGamePopupMgr");
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
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../LobbyCommon/Net/LobbyClient"),
            c = e("../../../LobbyCommon/Connect/Script/ConnectPanelMgr"),
            s = e("../../../LobbyCommon/PopupMessage/Script/PopupMsgMgr"),
            m = e("./InGameTeachPopup"),
            u = e("../../../FishHunter/Script/Game/GameClient"),
            p = e("../../../FishHunter/Script/Game/MainGame/Weapon/WeaponManager"),
            h = e("../../../FishHunter/Script/Game/MainGame/Player/PlayerManager"),
            l = e("../../../FishHunter/Script/Game/MainGame/Item/ItemManager"),
            _ = cc._decorator,
            d = _.ccclass,
            I = _.property,
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.EVENT_CLOSE = null, t.m_nodeRoot = null, t.m_nodeDarkBg = null, t.m_btnClose = null, t.m_btnPageNexp = null, t.m_btnPagePre = null, t.m_aryPage = [], t.m_aryPageImg = [], t.m_InGameTeachPopupMF = null, t.m_btnGetItem = null, t.m_numCurPageIndex = 0, t.m_numStartPageIndex = 0, t.m_strQuestID = "", t.m_numQuestLv = 0, t.m_nameMapImg = null, t.m_bDownloadImgFail = !1, t
                }
                return i(t, e), t.prototype.GetDarkBg = function() {
                    return this.m_nodeDarkBg
                }, t.prototype.onLoad = function() {
                    console.log("IngamePopup onLoad"), this.m_nodeRoot.active = !1, this.m_InGameTeachPopupMF.Init()
                }, t.prototype.LoadTexture = function() {
                    var e = this,
                        t = setTimeout(function() {
                            e.onDLFail()
                        }, 5e3);
                    cc.loader.loadResDir("MonstersFrenzy/Texture/", cc.SpriteFrame, function(o, n) {
                        if (o) return console.log(o), clearTimeout(t), void e.onDLFail();
                        console.log(n), clearTimeout(t), null == e.m_nameMapImg && (e.m_nameMapImg = {});
                        for (var i = n.length, r = 0; r < i; r++) console.log("\u4e0b\u8f09\u5b8c\u6210~ " + n[r].name), e.m_nameMapImg[n[r].name] = n[r];
                        for (r = 0; r < i; r++) null != e.m_aryPageImg[r] && (e.m_aryPageImg[r].spriteFrame = e.m_nameMapImg["Popup_" + r.toString()])
                    })
                }, t.prototype.ShowInGamePopup = function(e, t) {
                    if (console.log("[ShowInGamePopup newbieGiftState : " + e), e <= 0) this.OnClose();
                    else {
                        if (1 == e) this.LoadTexture(), this.ParseNewbieGiftData(t), u.default.ItemSystem.CollectNewbieGift = this.OnReceiveNewbieGift.bind(this), this.m_numStartPageIndex = 0, this.m_btnGetItem.interactable = !0, this.m_btnPageNexp.node.active = !1, this.m_btnPagePre.node.active = !1, this.m_btnClose.node.active = !1, p.default.Instance.IsPopupShow = !0, this.m_InGameTeachPopupMF.SetIconInitShow(!0);
                        else if (2 == e) return void this.OnClose();
                        this.m_numCurPageIndex = this.m_numStartPageIndex, this.SetActivePage(this.m_numCurPageIndex), this.m_nodeRoot.active = !0
                    }
                }, t.prototype.ParseNewbieGiftData = function() {
                    var e = JSON.parse(a.LobbyClient.Instance.m_CommonEventInfo_900004);
                    if (e.hasOwnProperty("Enable") && e.Enable && e.hasOwnProperty("QuestList") && e.QuestList.length > 0 && e.hasOwnProperty("UserQuestData")) {
                        var t = e.QuestList;
                        if (e.UserQuestData, t.length > 0)
                            for (var o = 0; o < t.length; o++) {
                                var n = t[o],
                                    i = n.TitleType,
                                    r = n.GameThemeID;
                                201 == i && 148001 == r && (this.m_strQuestID = n.QuestID, this.m_numQuestLv = n.QuestLevel, this.m_InGameTeachPopupMF.SetEventTime(n.CustomInfo.Msg), console.log("m_strQuestID = " + this.m_strQuestID + ", m_numQuestLv = " + this.m_numQuestLv))
                            }
                    }
                }, t.prototype.SetActivePage = function(e) {
                    for (var t = 0; t < this.m_aryPage.length; t++) this.m_aryPage[t].active = t == e
                }, t.prototype.OnClickGetItem = function() {
                    this.m_btnGetItem.interactable = !1, u.default.PlayerSystem && (c.ConnectPanelMgr.Instance.ShowConnectPanel(0), u.default.ItemSystem.SendCollectNewbieGift(this.m_strQuestID, this.m_numQuestLv))
                }, t.prototype.OnReceiveNewbieGift = function(e, t) {
                    var o = this;
                    if (c.ConnectPanelMgr.Instance.DisableConnectPanel(0), e == ArkSDK.SocketResult.OK) {
                        var n = t.result;
                        if (console.log("[MissionEventMgr.GetMissionBonus]  Success : ", e), 0 == n)
                            for (var i = h.PlayerManager.MainSeat > 1 ? h.PlayerManager.MainSeat - 2 : h.PlayerManager.MainSeat, r = p.default.WeaponPosition(i), a = t.data.AwardItem, m = function(e) {
                                    var t = a[e],
                                        n = t.ItemID,
                                        i = t.Amount;
                                    i > 0 && u.m_InGameTeachPopupMF.GetItem(n, i, r, function() {
                                        l.default.Instance.ModifyItemQty(h.PlayerManager.MainSeat, n, i), e == a.length - 1 && (o.m_InGameTeachPopupMF.OnItemGotFinished(), o.HideItemsAndShowOtherButtonShow(), o.m_InGameTeachPopupMF.ShowTips())
                                    })
                                }, u = this, _ = 0; _ < a.length; _++) m(_);
                        else -1 == n ? (this.HideItemsAndShowOtherButtonShow(), s.PopupMsgMgr.Instance.ShowPopMsg(s.PopupPriority.Info, "S175", null, null, null)) : 1 == n ? (this.m_InGameTeachPopupMF.OnItemGotFinished(), this.m_InGameTeachPopupMF.ShowTips(), this.HideItemsAndShowOtherButtonShow(), s.PopupMsgMgr.Instance.ShowPopMsg(s.PopupPriority.Info, "S174", null, null, null)) : s.PopupMsgMgr.Instance.ShowPopMsg(s.PopupPriority.Warning, "S189", null, null, null)
                    } else {
                        var d;
                        d = e == ArkSDK.HttpResult.Abort ? "S183" : e == ArkSDK.HttpResult.Condition ? "S184" : e == ArkSDK.HttpResult.Error ? "S187" : e == ArkSDK.HttpResult.NotReset ? "S185" : e == ArkSDK.HttpResult.Status ? "S186" : e == ArkSDK.HttpResult.Timeout ? "S188" : "S189", s.PopupMsgMgr.Instance.ShowPopMsg(s.PopupPriority.Critical, d, null, null, null)
                    }
                }, t.prototype.HideItemsAndShowOtherButtonShow = function() {
                    this.m_InGameTeachPopupMF.Clear(), this.m_btnClose.node.active = !0, this.m_btnGetItem.node.active = !1, this.m_bDownloadImgFail || (this.m_btnPageNexp.node.active = !0, this.m_btnPagePre.node.active = !0)
                }, t.prototype.OnClickNextPage = function() {
                    this.m_bDownloadImgFail || (this.m_numCurPageIndex++, this.m_numCurPageIndex > this.m_aryPage.length - 1 && (this.m_numCurPageIndex = this.m_numStartPageIndex), this.SetActivePage(this.m_numCurPageIndex))
                }, t.prototype.OnClickPrePage = function() {
                    this.m_bDownloadImgFail || (this.m_numCurPageIndex--, this.m_numCurPageIndex < this.m_numStartPageIndex && (this.m_numCurPageIndex = this.m_aryPage.length - 1), this.SetActivePage(this.m_numCurPageIndex))
                }, t.prototype.OnClickClose = function() {
                    this.OnClose(!0)
                }, t.prototype.onDLFail = function() {
                    console.error("onDLFail"), this.m_bDownloadImgFail = !0, this.m_numCurPageIndex = 0, this.SetActivePage(this.m_numCurPageIndex), this.m_btnPageNexp.node.active = !1, this.m_btnPagePre.node.active = !1
                }, t.prototype.OnClose = function(e) {
                    void 0 === e && (e = !1), this.m_numCurPageIndex = 0, this.SetActivePage(this.m_numCurPageIndex), this.m_nodeRoot.active = !1, p.default.Instance.IsPopupShow = !1, this.Clear(), null != this.EVENT_CLOSE && this.EVENT_CLOSE(e)
                }, t.prototype.OnBlockTouchEvent = function() {}, t.prototype.Clear = function() {
                    var e = this;
                    null != this.m_nameMapImg && (Object.keys(this.m_nameMapImg).forEach(function(t) {
                        var o = e.m_nameMapImg[t];
                        console.log(o), cc.assetManager.releaseAsset(o), o = null
                    }), this.m_nameMapImg = null);
                    for (var t = 0; t < this.m_aryPageImg.length; t++) this.m_aryPageImg[t].spriteFrame = null
                }, r([I(cc.Node)], t.prototype, "m_nodeRoot", void 0), r([I(cc.Node)], t.prototype, "m_nodeDarkBg", void 0), r([I(cc.Button)], t.prototype, "m_btnClose", void 0), r([I(cc.Button)], t.prototype, "m_btnPageNexp", void 0), r([I(cc.Button)], t.prototype, "m_btnPagePre", void 0), r([I([cc.Node])], t.prototype, "m_aryPage", void 0), r([I([cc.Sprite])], t.prototype, "m_aryPageImg", void 0), r([I(m.default)], t.prototype, "m_InGameTeachPopupMF", void 0), r([I(cc.Button)], t.prototype, "m_btnGetItem", void 0), r([d], t)
            }(cc.Component);
        o.default = g, cc._RF.pop()
    }, {
        "../../../FishHunter/Script/Game/GameClient": void 0,
        "../../../FishHunter/Script/Game/MainGame/Item/ItemManager": void 0,
        "../../../FishHunter/Script/Game/MainGame/Player/PlayerManager": void 0,
        "../../../FishHunter/Script/Game/MainGame/Weapon/WeaponManager": void 0,
        "../../../LobbyCommon/Connect/Script/ConnectPanelMgr": void 0,
        "../../../LobbyCommon/Net/LobbyClient": void 0,
        "../../../LobbyCommon/PopupMessage/Script/PopupMsgMgr": void 0,
        "./InGameTeachPopup": "InGameTeachPopup"
    }],
    InGameTeachPopup: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "66a23GiEYlEFLGDhEsF2gVJ", "InGameTeachPopup");
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
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../FishHunter/Script/Game/MainGame/Item/DropItem"),
            c = e("../../../FishHunter/Script/Game/System/ItemSystem"),
            s = cc._decorator,
            m = s.ccclass,
            u = s.property,
            p = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.m_ItemFreeze = null, t.m_ItemSummon = null, t.m_nodeFreezeLight = null, t.m_nodeSummonLight = null, t.m_nodeItemGot = null, t.m_nodeTips = null, t.m_labEventTime = null, t
                }
                return i(t, e), t.prototype.Init = function() {
                    this.m_posFreezeOri = this.m_ItemFreeze.node.getPosition(), this.m_posSummonOri = this.m_ItemSummon.node.getPosition(), this.m_nodeItemGot.active = !1, this.m_nodeTips.active = !1, this.m_nodeFreezeLight.active = !1, this.m_nodeSummonLight.active = !1
                }, t.prototype.SetIconInitShow = function(e) {
                    this.m_ItemFreeze.ShowIcon(e), this.m_ItemSummon.ShowIcon(e)
                }, t.prototype.OnItemGotFinished = function() {
                    this.m_nodeItemGot.active = !0, this.m_nodeFreezeLight.active = !1, this.m_nodeSummonLight.active = !1
                }, t.prototype.ShowTips = function() {
                    this.m_nodeTips.active = !0
                }, t.prototype.SetEventTime = function(e) {
                    this.m_labEventTime.string = e
                }, t.prototype.GetItem = function(e, t, o, n) {
                    e == c.ITEM_ID.FREEZE ? (this.m_ItemFreeze.ShowIcon(!0), this.m_nodeFreezeLight.active = !0, this.m_ItemFreeze.Init(e, t, this.m_posFreezeOri, o, n, !0)) : e == c.ITEM_ID.SUMMON && (this.m_ItemSummon.ShowIcon(!0), this.m_nodeSummonLight.active = !0, this.m_ItemSummon.Init(e, t, this.m_posSummonOri, o, n, !0))
                }, t.prototype.Clear = function() {
                    this.m_ItemFreeze.ShowIcon(!1), this.m_ItemSummon.ShowIcon(!1)
                }, r([u(a.default)], t.prototype, "m_ItemFreeze", void 0), r([u(a.default)], t.prototype, "m_ItemSummon", void 0), r([u(cc.Node)], t.prototype, "m_nodeFreezeLight", void 0), r([u(cc.Node)], t.prototype, "m_nodeSummonLight", void 0), r([u(cc.Node)], t.prototype, "m_nodeItemGot", void 0), r([u(cc.Node)], t.prototype, "m_nodeTips", void 0), r([u(cc.Label)], t.prototype, "m_labEventTime", void 0), r([m], t)
            }(cc.Component);
        o.default = p, cc._RF.pop()
    }, {
        "../../../FishHunter/Script/Game/MainGame/Item/DropItem": void 0,
        "../../../FishHunter/Script/Game/System/ItemSystem": void 0
    }],
    LockWeaponMF: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "5a3267ySZlBJbMcHC0dLA0/", "LockWeaponMF");
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
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = e("../../../../../../FishHunter/Script/Game/GameClient"),
            c = e("../../../../../../FishHunter/Script/Game/MainGame/Weapon/LockWeapon"),
            s = e("../../../../../../FishHunter/Script/Game/MainGame/Weapon/WeaponManager"),
            m = cc._decorator,
            u = m.ccclass,
            p = m.property,
            h = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.lockIconBg = null, t.lockIconBgState = [], t.m_nodeLockIconGroup = null, t.m_nodeLockIconAnchorC = null, t.m_nodeLockIconAnchorR = null, t.m_nodeLockIconAnchorL = null, t
                }
                return i(t, e), t.prototype.Init = function(t, o) {
                    this.addSkill = !1, e.prototype.Init.call(this, t, o);
                    var n = s.default.Instance.GetSkillLockLv(t);
                    this.skill = a.default.SkillSystem.AddSkill(n, t), this.skill.SetLockLvType(n), this.skill.setWeapon(this, o)
                }, t.prototype.SetFishIcon = function(e) {
                    if (this.fishIconImg) {
                        var t = this.GetFishIconIndex(e);
                        if (-1 == t) return this.fishIconImg.node.active = !1, void(this.lockIconBg.spriteFrame = this.lockIconBgState[0]);
                        this.fishIconImg.spriteFrame = this.fishIconList[t], this.fishIconImg.node.active = !0, this.lockIconBg.spriteFrame = this.lockIconBgState[1]
                    } else this.lockIconBg.spriteFrame = this.lockIconBgState[0]
                }, t.prototype.SetGunRotateUsePos = function(t) {
                    e.prototype.SetGunRotateUsePos.call(this, t), this.playerSeat <= 1 ? this.gunNode.angle < -60 ? (this.m_nodeLockIconGroup.parent = this.m_nodeLockIconAnchorR, this.m_nodeLockIconGroup.setPosition(cc.v2(0, -40))) : this.gunNode.angle > 60 ? (this.m_nodeLockIconGroup.parent = this.m_nodeLockIconAnchorL, this.m_nodeLockIconGroup.setPosition(cc.v2(0, -40))) : this.m_nodeLockIconGroup.parent != this.m_nodeLockIconAnchorC && (this.m_nodeLockIconGroup.parent = this.m_nodeLockIconAnchorC, this.m_nodeLockIconGroup.angle = 0, this.m_nodeLockIconGroup.setPosition(cc.v2(0, 0))) : this.gunNode.angle < 300 && this.gunNode.angle >= 270 ? (this.m_nodeLockIconGroup.parent = this.m_nodeLockIconAnchorR, this.m_nodeLockIconGroup.setPosition(cc.v2(0, -40))) : this.gunNode.angle <= 90 && this.gunNode.angle > 60 ? (this.m_nodeLockIconGroup.parent = this.m_nodeLockIconAnchorL, this.m_nodeLockIconGroup.setPosition(cc.v2(0, -40))) : this.m_nodeLockIconGroup.parent != this.m_nodeLockIconAnchorC && (this.m_nodeLockIconGroup.parent = this.m_nodeLockIconAnchorC, this.m_nodeLockIconGroup.angle = 0, this.m_nodeLockIconGroup.setPosition(cc.v2(0, 0)))
                }, t.prototype.stopLock = function() {
                    this.skill && (this.skill.setLocking(null), this.lockIconBg.spriteFrame = this.lockIconBgState[0])
                }, t.prototype.InitFunction = function() {
                    this.GetFishIconIndex = this.GetFishIconIndexMF
                }, t.prototype.GetFishIconIndexMF = function(e) {
                    switch (e) {
                        case 0:
                        case 47:
                            return 25;
                        case 1:
                        case 48:
                            return 26;
                        case 2:
                            return 27;
                        case 3:
                            return 28;
                        case 4:
                            return 29;
                        case 5:
                            return 30;
                        case 6:
                            return 31;
                        case 7:
                            return 32;
                        case 8:
                            return 33;
                        case 9:
                            return 0;
                        case 10:
                            return 1;
                        case 11:
                            return 2;
                        case 12:
                            return 3;
                        case 13:
                            return 4;
                        case 14:
                            return 5;
                        case 15:
                            return 6;
                        case 16:
                            return 7;
                        case 17:
                            return 8;
                        case 18:
                            return 9;
                        case 20:
                            return 10;
                        case 22:
                            return 11;
                        case 23:
                            return 12;
                        case 24:
                            return 13;
                        case 25:
                            return 14;
                        case 34:
                            return 15;
                        case 35:
                            return 16;
                        case 36:
                        case 61:
                        case 62:
                        case 63:
                        case 64:
                        case 65:
                        case 66:
                            return 17;
                        case 77:
                            return 18;
                        case 78:
                            return 19;
                        case 79:
                            return 20;
                        case 80:
                            return 21;
                        case 55:
                        case 200:
                        case 201:
                        case 202:
                        case 203:
                        case 204:
                        case 205:
                        case 206:
                        case 207:
                        case 208:
                        case 209:
                        case 210:
                            return 22;
                        case 300:
                        case 301:
                        case 302:
                        case 303:
                        case 304:
                        case 305:
                        case 306:
                        case 307:
                        case 308:
                        case 309:
                            return 23;
                        case 116:
                            return 24;
                        default:
                            return -1
                    }
                }, r([p(cc.Sprite)], t.prototype, "lockIconBg", void 0), r([p([cc.SpriteFrame])], t.prototype, "lockIconBgState", void 0), r([p(cc.Node)], t.prototype, "m_nodeLockIconGroup", void 0), r([p(cc.Node)], t.prototype, "m_nodeLockIconAnchorC", void 0), r([p(cc.Node)], t.prototype, "m_nodeLockIconAnchorR", void 0), r([p(cc.Node)], t.prototype, "m_nodeLockIconAnchorL", void 0), r([u], t)
            }(c.default);
        o.default = h, cc._RF.pop()
    }, {
        "../../../../../../FishHunter/Script/Game/GameClient": void 0,
        "../../../../../../FishHunter/Script/Game/MainGame/Weapon/LockWeapon": void 0,
        "../../../../../../FishHunter/Script/Game/MainGame/Weapon/WeaponManager": void 0
    }]
}, {}, ["LockWeaponMF", "InGamePopupMgr", "InGameTeachPopup"]);