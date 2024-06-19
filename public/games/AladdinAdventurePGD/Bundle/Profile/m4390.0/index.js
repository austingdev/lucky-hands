window.__require = function e(t, i, o) {
    function r(a, s) {
        if (!i[a]) {
            if (!t[a]) {
                var l = a.split("/");
                if (l = l[l.length - 1], !t[l]) {
                    var c = "function" == typeof __require && __require;
                    if (!s && c) return c(l, !0);
                    if (n) return n(l, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = l
            }
            var h = i[a] = {
                exports: {}
            };
            t[a][0].call(h.exports, function(e) {
                return r(t[a][1][e] || e)
            }, h, h.exports, e, t, i, o)
        }
        return i[a].exports
    }
    for (var n = "function" == typeof __require && __require, a = 0; a < o.length; a++) r(o[a]);
    return r
}({
    AvatarSettingBeginnerGuide: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c3934iP4qpDKb/rVLaaJW+i", "AvatarSettingBeginnerGuide");
        var o = this && this.__decorate || function(e, t, i, o) {
                var r, n = arguments.length,
                    a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
                return n > 3 && a && Object.defineProperty(t, i, a), a
            },
            r = this && this.__awaiter || function(e, t, i, o) {
                return new(i || (i = Promise))(function(r, n) {
                    function a(e) {
                        try {
                            l(o.next(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function s(e) {
                        try {
                            l(o.throw(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    l((o = o.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const n = e("../../../BeginnersGuide/BeginnersGuideMgr"),
            a = e("../../../BeginnersGuide/BeginnersGuideStepItem"),
            s = e("../../../Helper/EventSystem"),
            l = e("../../../Net/ClickLog"),
            c = e("../../../Net/ClickLogEnum"),
            h = e("./AvatarSettingMgr"),
            {
                ccclass: d,
                property: m
            } = cc._decorator;
        let p = class extends cc.Component {
            constructor() {
                super(...arguments), this.mgr = null, this.bgMgr = null, this.showFirstFaceItem = null, this.showFaceItem = null, this.groupLayout = null, this.oringinClickIconFunction = null
            }
            start() {
                s.EventSystem.Event(s.BeginnersGuide.OnExit).Insert(this.ResetItemPressStatus, this)
            }
            onDestroy() {
                s.EventSystem.Event(s.BeginnersGuide.OnExit).Remove(this.ResetItemPressStatus, this)
            }
            ShowFirstItemInfo() {
                this.mgr.pageAry[0].SetAllPressStatus(!1);
                let e = this.mgr.pageAry[0].GetFirstItem();
                e && (1 == this.showFirstFaceItem.showNodeAry.length ? this.showFirstFaceItem.showNodeAry.unshift(e.node) : this.showFirstFaceItem.showNodeAry[0] = e.node, this.mgr.OnLongPressItem(e.name, e.infoAry, e.infoNode.convertToWorldSpaceAR(cc.Vec3.ZERO))), this.groupLayout || (this.groupLayout = this.mgr.pageAry[0].GetFirstGruop().getComponent(cc.Layout)), this.groupLayout.enabled = !1
            }
            HideInfo() {
                return r(this, void 0, void 0, function*() {
                    this.groupLayout.enabled = !0, this.mgr.infoCtrl.HideInfo(), yield SS.Common.WaitForSeconds(.01), this.mgr.pageAry[0].SetAllPressStatus(!0)
                })
            }
            SetFiveItemsRootNode() {
                if (0 == this.showFaceItem.showNodeAry.length) {
                    let e = this.mgr.pageAry[0].GetFirstGruop();
                    this.showFaceItem.showNodeAry.push(e)
                }
                this.mgr.pageAry[0].SetLayout(!1), this.oringinClickIconFunction = this.mgr.pageAry[0].clickItemFunc, this.mgr.pageAry[0].clickItemFunc = this.OnClickItem.bind(this)
            }
            OnClickItem(e, t, i) {
                this.mgr.OnClickItem(e, t, i), this.bgMgr.OnClickNext(), this.mgr.pageAry[0].SetAllPressStatus(!1), this.CheckCookieExist("avatareditor_beginnerguide") || l.ClickLog.recordClickLog(c.LogName.Profile, 0, c.LogType_Profile.Guide, c.LogEvent_Guide.Next11)
            }
            EndFaceItem() {
                this.mgr.pageAry[0].clickItemFunc = this.oringinClickIconFunction, this.mgr.pageAry[0].SetLayout(!0)
            }
            SetNickNameChanged() {
                this.mgr.nicknameCtrl.editIconNode.active && (this.mgr.nicknameCtrl.editStartFunc = this.OnNicknameStartEdit.bind(this), this.mgr.nicknameCtrl.editEndFunc = this.OnNicknameEdited.bind(this))
            }
            OnNicknameStartEdit() {
                this.mgr.nicknameCtrl.editStartFunc = null, this.bgMgr.OnClickNext(), this.CheckCookieExist("avatareditor_beginnerguide") || l.ClickLog.recordClickLog(c.LogName.Profile, 0, c.LogType_Profile.Guide, c.LogEvent_Guide.Next12)
            }
            OnNicknameEdited() {
                this.mgr.nicknameCtrl.editEndFunc = null, this.bgMgr.OnClickNext()
            }
            ResetItemPressStatus() {
                this.mgr.pageAry[0].SetAllPressStatus(!0)
            }
            CheckCookieExist(e) {
                let t = "";
                return JSUtility.IsSupportLocalStorage() ? t = localStorage.getItem(e) : JSUtility.IsSupportCookie() && (t = JSUtility.GetCookie(e)), null != t
            }
        };
        o([m(h.default)], p.prototype, "mgr", void 0), o([m(n.default)], p.prototype, "bgMgr", void 0), o([m(a.default)], p.prototype, "showFirstFaceItem", void 0), o([m(a.default)], p.prototype, "showFaceItem", void 0), p = o([d], p), i.default = p, cc._RF.pop()
    }, {
        "../../../BeginnersGuide/BeginnersGuideMgr": void 0,
        "../../../BeginnersGuide/BeginnersGuideStepItem": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "./AvatarSettingMgr": "AvatarSettingMgr"
    }],
    AvatarSettingInfo: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "872e4TfISJFUYjxbc7s86NP", "AvatarSettingInfo");
        var o = this && this.__decorate || function(e, t, i, o) {
            var r, n = arguments.length,
                a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
            else
                for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
            return n > 3 && a && Object.defineProperty(t, i, a), a
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const {
            ccclass: r,
            property: n
        } = cc._decorator;
        let a = class extends cc.Component {
            constructor() {
                super(...arguments), this.showDuration = 3, this.bg = null, this.titleLabel = null, this.conditionLabel = null, this.detailLabel = null, this.itemID = "", this.tween = null
            }
            HideInfo() {
                this.node.active = !1, this.node.opacity = 0, this.unschedule(this.PlayInfoFadeOut), this.tween && this.tween.stop().removeSelf(), this.tween = null, this.itemID = ""
            }
            ShowInfo(e, t, i) {
                this.node.position = this.node.parent.convertToNodeSpaceAR(i), console.log("[Avatar Setting][Show Info] ", t), t && 3 == t.length ? (this.titleLabel.string = t[0], this.conditionLabel.string = t[1], this.detailLabel.string = t[2], this.itemID.length > 0 && (this.unschedule(this.PlayInfoFadeOut), this.tween && this.tween.stop().removeSelf(), this.tween = null), this.node.active = !0, this.node.opacity = 255, this.itemID = e) : this.scheduleOnce(this.PlayInfoFadeOut, this.showDuration)
            }
            PlayInfoFadeOut() {
                this.node.active && (this.unschedule(this.PlayInfoFadeOut), this.tween = cc.tween(this.node).to(.25, {
                    opacity: 0
                }).call(this.SetInfoHide.bind(this)).start())
            }
            SetInfoHide() {
                this.node.active && this.HideInfo()
            }
        };
        o([n], a.prototype, "showDuration", void 0), o([n(cc.Node)], a.prototype, "bg", void 0), o([n(cc.Label)], a.prototype, "titleLabel", void 0), o([n(cc.Label)], a.prototype, "conditionLabel", void 0), o([n(cc.Label)], a.prototype, "detailLabel", void 0), a = o([r], a), i.default = a, cc._RF.pop()
    }, {}],
    AvatarSettingItem: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "274dfWrHqFLBYqu+vzGfZm7", "AvatarSettingItem");
        var o = this && this.__decorate || function(e, t, i, o) {
                var r, n = arguments.length,
                    a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
                return n > 3 && a && Object.defineProperty(t, i, a), a
            },
            r = this && this.__awaiter || function(e, t, i, o) {
                return new(i || (i = Promise))(function(r, n) {
                    function a(e) {
                        try {
                            l(o.next(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function s(e) {
                        try {
                            l(o.throw(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    l((o = o.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const n = e("../../../Component/AudioMgr"),
            a = e("../../../Component/BundleCtrl"),
            s = e("../../../Component/NodeLongPress"),
            l = e("../../../Net/ClickLog"),
            c = e("../../../Net/ClickLogEnum"),
            h = e("./ProfileData"),
            {
                ccclass: d,
                property: m
            } = cc._decorator;
        let p = class extends cc.Component {
            constructor() {
                super(...arguments), this.id = "", this.groupName = "", this.infoAry = [], this.sprtie = null, this.timeLabel = null, this.infoNode = null, this.newSprite = null, this.equipSprite = null, this.lockSprite = null, this.faceCircleLineSprite = null, this.longPressCtrl = null, this.expiredTime = 0, this.oriExpiredTime = 0, this.isOwn = !1, this.infoShowFunc = null, this.clickFunc = null, this.timeCountDownDuration = 0
            }
            get isEquiped() {
                return this.equipSprite.node.active
            }
            Init() {
                this.Clear(), this.longPressCtrl.longPressFunc = this.OnLongPress.bind(this), this.longPressCtrl.clickFunc = this.OnClick.bind(this)
            }
            Clear() {
                this.node.parent = this.node.parent ? this.node.parent.parent : this.node.parent, this.id = "", this.groupName = "", this.expiredTime = 0, this.oriExpiredTime = 0, this.timeCountDownDuration = 0, this.infoAry = null, this.isOwn = !1, this.timeLabel.string = "", this.timeLabel.node.color = cc.Color.WHITE, this.sprtie.spriteFrame && (this.sprtie.spriteFrame = null), this.newSprite.node.active = !1, this.equipSprite.node.active = !1, this.lockSprite.node.active = !1, this.faceCircleLineSprite.node.active = !1, this.longPressCtrl.canClick = !1, this.clickFunc = null, this.unscheduleAllCallbacks()
            }
            SetPress(e) {
                this.longPressCtrl.canPress = e
            }
            SetUnequip() {
                this.equipSprite.node.active = !1
            }
            SetData(e, t) {
                this.id = e.id, this.node.name = this.id, this.SetIconSprite();
                let i = e.type;
                if (i && -1 != i.indexOf("photos") && (this.faceCircleLineSprite.node.active = !0), this.groupName = e.kind, this.infoAry = [this.groupName, e.get_info_1, e.get_info_2], this.SetInfoKind(e.info_kind, e.task_progress), this.expiredTime = parseFloat(e.expired_time), this.oriExpiredTime = parseFloat(e.expired_time), null != e.status) {
                    let t = e.status;
                    this.isOwn = !0, this.equipSprite.node.active = 1 == parseInt(t.slice(0, 1)), this.newSprite.node.active = 1 == parseInt(t.slice(1, 2))
                }
                this.isOwn ? (this.sprtie.node.color = cc.Color.WHITE, this.longPressCtrl.canClick = t, this.expiredTime > -1 && t && (this.ResetTimeLabel(), this.FirstSetTimeCountDown())) : this.SetLockStatus()
            }
            SetIconSprite() {
                return r(this, void 0, void 0, function*() {
                    let e = yield a.default.Instance.GetSpirte("Avatar", this.id);
                    this.sprtie.spriteFrame = e, this.equipSprite.spriteFrame = yield a.default.Instance.GetSpirte("Avatar", "use"), this.newSprite.spriteFrame = yield a.default.Instance.GetSpirte("Avatar", "new"), this.lockSprite.spriteFrame = yield a.default.Instance.GetSpirte("Avatar", "lock"), this.faceCircleLineSprite.spriteFrame = yield a.default.Instance.GetSpirte("Avatar", "Shine")
                })
            }
            SetInfoKind(e, t) {
                1 == e ? this.infoAry[1] += " " + t : 2 == e && (this.infoAry[2] = t + " " + this.infoAry[2])
            }
            SetLockStatus() {
                this.isOwn = !1, this.sprtie.node.color = cc.Color.GRAY, this.longPressCtrl.canClick = !0, this.lockSprite.node.active = !0, this.newSprite.node.active = !1, this.timeLabel.string = "", this.timeLabel.node.active = !1, this.expiredTime = 0
            }
            FirstSetTimeCountDown() {
                let e = this.expiredTime - Date.now(),
                    t = Math.floor(e / 864e5),
                    i = 1;
                if (t > 1) i = e / 1e3 - 86400 * t;
                else {
                    let t = e % 6e4;
                    t > 0 && (i = t - Math.floor(t))
                }
                this.scheduleOnce(this.OnTimeCountDown, i), this.expiredTime = this.expiredTime - 1e3 * (i + .1)
            }
            OnTimeCountDown() {
                this.SetNextCountDown(), this.schedule(this.SetNextCountDown, this.timeCountDownDuration)
            }
            SetNextCountDown() {
                this.ResetTimeLabel();
                let e = this.expiredTime - Date.now();
                if (e <= 0) this.unschedule(this.SetNextCountDown);
                else {
                    if (this.timeCountDownDuration > 1) {
                        let t = 1;
                        Math.floor(e / 864e5) > 1 && (t = 86400), t < this.timeCountDownDuration && (this.unschedule(this.SetNextCountDown), this.schedule(this.SetNextCountDown, t)), this.timeCountDownDuration = t
                    }
                    this.expiredTime = this.expiredTime - 1e3 * this.timeCountDownDuration
                }
            }
            ResetTimeLabel() {
                if (!this.isOwn) return;
                let e = this.expiredTime - Date.now();
                if (e < 1e3) return console.warn("ResetTimeLabel, ID = " + this.id + ", \u88dd\u5099\u4e2d = " + this.isEquiped), this.isEquiped && this.OnClick(!0), void this.SetLockStatus();
                this.timeLabel.node.active = !0;
                let t = Math.floor(e / 864e5);
                if (t < 1) {
                    255 == this.timeLabel.node.color.b && (this.timeLabel.node.color = new cc.Color(255, 90, 90, 255));
                    let t = e % 864e5,
                        i = Math.floor(t / 36e5),
                        o = t % 36e5,
                        r = Math.floor(o / 6e4);
                    if (this.timeLabel.string = "", i > 0 && (this.timeLabel.string = i + "h"), r > 0 && (this.timeLabel.string += r + "m"), 0 == i) {
                        let e = o % 6e4,
                            t = Math.floor(e / 1e3);
                        t > 0 && (this.timeLabel.string += t + "s")
                    }
                } else {
                    t >= 9999 && (t = 9999);
                    let i = e % 864e5,
                        o = Math.floor(i / 36e5);
                    this.timeLabel.string = o > 0 ? t + "d " + o + "h" : t + "d"
                }
            }
            OnClick(e = !1) {
                console.log("[AvatarSetting]" + this.id + " OnClick, isAutoSave = " + e), this.lockSprite.node.activeInHierarchy ? n.AudioMgr.Instance.Play(h.ProfileSoundClip.ClickItemNo, !1, 1) : (n.AudioMgr.Instance.Play(h.ProfileSoundClip.ClickItemOwn, !1, 1), this.equipSprite.node.active = !this.equipSprite.node.active, this.equipSprite.node.active ? this.clickFunc && this.clickFunc(this.id, this.sprtie.spriteFrame, e, this.oriExpiredTime) : this.clickFunc && this.clickFunc("", null, e, this.oriExpiredTime))
            }
            OnLongPress(e) {
                if (console.log("[AvatarSetting]" + this.id + " OnLongPress:" + e), this.infoShowFunc && (this.infoShowFunc(this.id, e ? this.infoAry : null, this.infoNode.convertToWorldSpaceAR(cc.Vec3.ZERO)), e)) {
                    let e = {};
                    e.Type = c.LogType_Profile.ShowRule, e.TempStr1 = this.id, l.ClickLog.recordClickLogNewVersion(c.LogName.Profile, e)
                }
            }
        };
        o([m(cc.Sprite)], p.prototype, "sprtie", void 0), o([m(cc.Label)], p.prototype, "timeLabel", void 0), o([m(cc.Node)], p.prototype, "infoNode", void 0), o([m(cc.Sprite)], p.prototype, "newSprite", void 0), o([m(cc.Sprite)], p.prototype, "equipSprite", void 0), o([m(cc.Sprite)], p.prototype, "lockSprite", void 0), o([m(cc.Sprite)], p.prototype, "faceCircleLineSprite", void 0), o([m(s.default)], p.prototype, "longPressCtrl", void 0), p = o([d], p), i.default = p, cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0,
        "../../../Component/BundleCtrl": void 0,
        "../../../Component/NodeLongPress": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "./ProfileData": "ProfileData"
    }],
    AvatarSettingMenu: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "dba7eoCW65CIYwnDKPI0+51", "AvatarSettingMenu");
        var o = this && this.__decorate || function(e, t, i, o) {
            var r, n = arguments.length,
                a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
            else
                for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
            return n > 3 && a && Object.defineProperty(t, i, a), a
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.MenuItem = void 0;
        const r = e("../../../Component/AudioMgr"),
            {
                ccclass: n,
                property: a
            } = cc._decorator;
        let s = class {
            constructor() {
                this.choosedNode = null, this.unchooseNode = null
            }
            ChooseTab() {
                this.choosedNode.active = !0, this.unchooseNode.active = !1
            }
            UnchooseTab() {
                this.choosedNode.active = !1, this.unchooseNode.active = !0
            }
        };
        o([a(cc.Node)], s.prototype, "choosedNode", void 0), o([a(cc.Node)], s.prototype, "unchooseNode", void 0), s = o([n("MenuItem")], s), i.MenuItem = s;
        let l = class extends cc.Component {
            constructor() {
                super(...arguments), this.tabAry = [], this.currentTabIndex = 0, this.clickFunc = null
            }
            Init(e, t) {
                this.clickFunc = t, this.Reset(e)
            }
            Reset(e) {
                this.currentTabIndex = e;
                for (let t = 0; t < this.tabAry.length; t++) t == e ? this.tabAry[t].ChooseTab() : this.tabAry[t].UnchooseTab()
            }
            OnClickTab(e, t) {
                let i = parseInt(t);
                if (this.currentTabIndex != i) {
                    this.currentTabIndex = i;
                    for (let e = 0; e < this.tabAry.length; e++) e == i ? this.tabAry[e].ChooseTab() : this.tabAry[e].UnchooseTab();
                    this.clickFunc && this.clickFunc(i), r.AudioMgr.Instance.Play("Btn_LeftTabClick", !1, 1)
                }
            }
        };
        o([a([s])], l.prototype, "tabAry", void 0), l = o([n], l), i.default = l, cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0
    }],
    AvatarSettingMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "06180iDGftJb72BD5CYFGgg", "AvatarSettingMgr");
        var o = this && this.__decorate || function(e, t, i, o) {
                var r, n = arguments.length,
                    a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
                return n > 3 && a && Object.defineProperty(t, i, a), a
            },
            r = this && this.__awaiter || function(e, t, i, o) {
                return new(i || (i = Promise))(function(r, n) {
                    function a(e) {
                        try {
                            l(o.next(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function s(e) {
                        try {
                            l(o.throw(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    l((o = o.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const n = e("../../../Component/AvatarIcon"),
            a = e("./AvatarSettingPage"),
            s = e("./AvatarSettingMenu"),
            l = e("./ChangeNicknameCtrl"),
            c = e("./ProfileData"),
            h = e("./SwitchSprite"),
            d = e("../../../Net/Downloader/JSONDownloder"),
            m = e("../../../PopupMessage/Script/PopupMsgMgr"),
            p = e("./AvatarSettingInfo"),
            u = e("../../../Helper/EventSystem"),
            f = e("../../../Net/LobbyClient"),
            _ = e("../../../Component/AudioMgr"),
            g = e("../../../Net/ClickLog"),
            P = e("../../../Net/ClickLogEnum"),
            v = e("../../../Connect/Script/ConnectPanelMgr"),
            {
                ccclass: C,
                property: S
            } = cc._decorator;
        let y = class extends cc.Component {
            constructor() {
                super(...arguments), this.nicknameCtrl = null, this.checkPopupNode = null, this.checkPopupNicknameLabel = null, this.nicknameErrorLabel = null, this.avatorPageRoot = null, this.infoCtrl = null, this.headCtrl = null, this.pagePrefab = null, this.tabTitleSwitch = null, this.menu = null, this.saveBtnNode = null, this.playerTitleLabel = null, this.saveBtn = null, this.m_selfObjAry = [], this.pageAry = [], this.playerData = null, this.settingJSAry = null, this.tabKeyAry = ["photos", "frames"], this.isEditMode = !0, this.forceToShowHelp = !1, this.isHelpLoaded = !1, this.curAvatarExpiredTime = -1, this.curAvatarFrameExpiredTime = -1, this.curAvatarID = "", this.curAvatarFrameID = "", this.isAutoSave = !1
            }
            _onDestroy() {
                this.settingJSAry = null;
                for (let e = 0; e < this.pageAry.length; e++) this.pageAry[e].Exit();
                this.pageAry = null, this.nicknameCtrl.Exit()
            }
            Init() {
                this.tabTitleSwitch.ChangeSprite("0"), this.nicknameCtrl.Init(), this.nicknameCtrl.editErrorFunc = this.OnNicknameEditError.bind(this), this.nicknameErrorLabel.string = "", this.menu.Init(0, this.OnClickMenuTab.bind(this)), this.checkPopupNode.active = !1, this.forceToShowHelp = !1, this.isHelpLoaded = !1, this.saveBtnNode.active = !1, this.saveBtnNode.scale = 1
            }
            Show(e, t) {
                console.warn("[111]" + this.node.name + ">> Show: " + e.ArkID + " isEditMode:" + t), this.isEditMode = t, this.SetLoadingDisplay(!0), this.SetPlayerData(e), this.nicknameCtrl.Show(this.playerData.NickName, t && null == SS.Common.GameEnvironment.CurrentGameNow), this.headCtrl.SetFaceByID(e.FaceID), this.headCtrl.SetFrameByID(e.FaceFrameID), this.tabTitleSwitch.ChangeSprite("0"), this.menu.Reset(0), this.saveBtnNode.scale = 1, this.saveBtnNode.active = !1, this.playerTitleLabel.string = t ? "Edit Personal Info" : e.NickName + "'s Personal Info", null == this.settingJSAry ? this.GetAvatarItemSetting() : this.SendInitCommand(), this.node.active = !0, _.AudioMgr.Instance.Play(c.ProfileSoundClip.OpenAvatarSetting, !1, 1);
                for (let i = 0; i < this.m_selfObjAry.length; i++) this.m_selfObjAry[i].active = e.IsSelf
            }
            SetPlayerData(e) {
                this.playerData || (this.playerData = new c.ProfilePlayerData), Object.assign(this.playerData, e), this.curAvatarID = e.FaceID, this.curAvatarFrameID = e.FaceFrameID, console.log("this.curAvatarID = " + this.curAvatarID + ", this.curAvatarFrameID = " + this.curAvatarFrameID)
            }
            Hide() {
                this.forceToShowHelp = !1, this.checkPopupNode.active = !1, this.node.active = !1, this.isAutoSave = !1, this.nicknameErrorLabel.string = "", this.curAvatarID = "", this.curAvatarFrameID = "", this.infoCtrl.HideInfo(), this.ClearPage()
            }
            ClearPage() {
                for (let e = 0; e < this.pageAry.length; e++) this.pageAry[e].Clear()
            }
            SetHaveToShowHelp() {
                this.forceToShowHelp = !0
            }
            SetPages() {
                return r(this, void 0, void 0, function*() {
                    if (console.log("[AvatarSetting]SetPages!!", this.settingJSAry), this.pageAry && 0 != this.pageAry.length)
                        for (let e = 0; e < this.pageAry.length; e++) this.UpdatePage(this.pageAry[e], this.settingJSAry.filter(t => t.type == this.tabKeyAry[e])), 0 == e ? this.pageAry[e].Show() : this.pageAry[e].Hide();
                    else
                        for (let e = 0; e < this.tabKeyAry.length; e++) this.CreatePage(e, this.settingJSAry.filter(t => t.type == this.tabKeyAry[e]));
                    if (this.isEditMode) {
                        if (yield SS.Common.WaitForSeconds(.25), !this.isHelpLoaded) {
                            let e = this.getComponentInChildren("BeginnersGuideMgr");
                            e.active || e.onLoad(), this.isHelpLoaded = !0
                        }
                        u.EventSystem.Event(u.BeginnersGuide.Show).Notify("avatar_setting", this.forceToShowHelp)
                    }
                    this.SetLoadingDisplay(!1)
                })
            }
            CreatePage(e, t) {
                console.log("[AvatarSetting]CreatePages!!", e, t);
                let i = cc.instantiate(this.pagePrefab);
                i.parent = this.avatorPageRoot;
                let o = i.getComponent(a.default);
                o.Init(), o.SetRect(this.avatorPageRoot.width, this.avatorPageRoot.height), o.pageID = e, o.SetData(t, this.isEditMode), o.clickItemFunc = this.OnClickItem.bind(this), o.longPressItemFunc = this.OnLongPressItem.bind(this), o.scrollingFunc = this.OnPageScrolling.bind(this), this.pageAry.push(o), 0 == e ? o.Show() : o.Hide()
            }
            UpdatePage(e, t) {
                e.Clear(), e.SetData(t, this.isEditMode)
            }
            SetPageItemCanClick(e) {
                for (let t = 0; t < this.pageAry.length; t++) this.pageAry[t].SetAllPressStatus(e)
            }
            ShowCheckNicknameMessage() {
                this.checkPopupNicknameLabel.string = this.nicknameCtrl.nickname, this.checkPopupNode.active = !0
            }
            SetLoadingDisplay(e) {
                u.EventSystem.Event(u.Profile.SetLoadingNodeDisplay).Notify(e)
            }
            GetAvatarItemSetting() {
                return r(this, void 0, void 0, function*() {
                    const e = window.gd_nowLOGO;
                    (new d.JSONDownloader).Start(SS.Common.GameEnvironment.S3URL + "/" + e + "/AvatarItemSetting.json", this.OnGetAvatarItemSetting.bind(this), this.OnDownloadSettingErr.bind(this))
                })
            }
            OnGetAvatarItemSetting(e) {
                this.settingJSAry = e, this.SendInitCommand()
            }
            SendInitCommand() {
                this.ClearPage(), f.LobbyClient.Instance.GetUserClient.GetItemInfo(this.playerData.ArkID, this.ReceiveInitData.bind(this))
            }
            FakeInitData() {
                return JSON.parse('{"cmd_sn":"1668065108000","cmd_data":{"data":             {"show_items":[                 "FAC001","FAC002","FAC003","FAC004","FAC005",                 "FAC006","FAC007","FAC008","FAC009","FAC010",                 "FAC011","FAC012","FAC013","FAC014","FAC015",                 "FAC016","FAC017","FAC018","FAC019","FAC020",                 "FAC021","FAC022","FAC023","FAC024","FAC025",                 "FAC026","FAC027","FAC028","FAC029","FAC030",                 "FAC031","FAC032","FAC033","FAC034","FAC035",                 "FAC036","FAC037","FAC038","FAC039","FAC040",                 "FAC041","FAC042","FAC043","FAC044","FAC045",                 "FAC046","FAC047","FAC048","FAC049","FAC050",                 "FRM001","FRM002","FRM003","FRM004","FRM005",                 "FRM006","FRM007","FRM008","FRM009","FRM010",                 "FRM011","FRM012","FRM013","FRM014","FRM015",                 "FRM016","FRM017","FRM018","FRM019","FRM020",                 "FRM021","FRM022"                ],             "player_items":[                 {"status":"00","id":"FAC001","expired_time":-1},                 {"status":"00","id":"FAC002","expired_time":-1},                 {"status":"00","id":"FAC003","expired_time":-1},                 {"status":"00","id":"FAC004","expired_time":-1},                 {"status":"10","id":"FAC005","expired_time":-1},                 {"status":"00","id":"FAC006","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC007","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC008","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC009","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC010","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC011","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC012","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC013","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC014","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC015","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC016","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC017","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC018","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC019","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC020","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC021","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC022","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC023","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC024","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC025","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC026","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC027","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC028","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC029","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC030","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC031","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC032","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC033","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC034","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC035","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC036","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC037","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC038","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC039","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC040","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC041","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC042","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC043","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC044","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC045","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC046","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC047","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC048","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC049","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC050","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM001","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM002","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM003","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM004","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM005","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM006","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM007","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM008","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM009","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM010","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM011","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM012","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM013","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM014","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM015","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM016","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM017","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM018","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM019","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM020","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM021","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FRM022","expired_time":"2022-12-31T23:59:59.000000"},                 {"status":"00","id":"FAC008","expired_time":"2022-09-13T08:04:26.674000"},                 {"status":"00","id":"FAC010","expired_time":"2022-08-16T02:22:39.216000"}],             "ark_id":"10290503",             "nickname_status":false},             "result":0}}')
            }
            ReceiveInitData(e, t) {
                if (console.warn("[AvatarSetting]ReceiveInitData:", e, JSON.stringify(t)), 0 != e) return void this.CheckCommonError(e, !1);
                if (null == t.cmd_data || !t.cmd_data) return void this.ShowError("", "'cmd_data' Data is NULL");
                let i = t.cmd_data.data;
                if (!i) return void this.ShowError("", "'data' Data is NULL");
                if (i.ark_id != this.playerData.ArkID) return void this.ShowError("", "ARK ID is NOT MATCH!!");
                this.nicknameCtrl.Show(this.playerData.NickName, this.isEditMode && i.nickname_status && null == SS.Common.GameEnvironment.CurrentGameNow);
                let o = i.show_items,
                    r = i.player_items,
                    n = 0,
                    a = "";
                for (n = 0; n < o.length; n++) {
                    a = o[n];
                    let e = this.settingJSAry.find(e => e.id == a);
                    if (null != e) {
                        e.is_open = !0;
                        let t = r.findIndex(e => e.id == a);
                        if (t > -1) {
                            let i = r.splice(t, 1)[0],
                                o = i.expired_time;
                            "-1" != o && (o = Date.parse(o + "Z")), e.expired_time = o, e.status = i.status, e.task_progress = i.task_progress
                        } else e.expired_time = -1, e.status = void 0, e.task_progress = void 0
                    } else console.error("[Avatar]Server SEND Item: '" + a + "'. But Setting File No Data.")
                }
                this.SetPages()
            }
            SendSaveCommand() {
                console.warn("[AvatarSetting]SendSaveCommand"), this.isAutoSave = !1;
                let e = {};
                e.face_id = this.curAvatarID, e.frame_id = this.curAvatarFrameID, e.change_name_status = this.nicknameCtrl.nickname != this.playerData.NickName, f.LobbyClient.Instance.GetUserClient.ChangePlayerInfo(this.playerData.ArkID, this.nicknameCtrl.nickname, e, this.ReceiveSaveData.bind(this)), this.saveBtn.interactable = !1, v.ConnectPanelMgr.Instance.ShowConnectPanel()
            }
            SendAutoSaveCommand() {
                console.warn("[AvatarSetting]SendAutoSaveCommand"), this.isAutoSave = !0;
                let e = {};
                e.face_id = this.playerData.FaceID, e.frame_id = this.playerData.FaceFrameID, e.change_name_status = !1, f.LobbyClient.Instance.GetUserClient.ChangePlayerInfo(this.playerData.ArkID, this.playerData.NickName, e, this.ReceiveSaveData.bind(this))
            }
            ReceiveSaveData(e, t) {
                if (console.warn("[AvatarSetting]ReceiveSaveData:", t), this.saveBtn.interactable = !0, v.ConnectPanelMgr.Instance.DisableConnectPanel(), 0 != e && this.CheckCommonError(e, !0)) return;
                if (null == t.cmd_data || !t.cmd_data) return void this.ShowError("S408", "'cmd_data' Data is NULL");
                let i = !1,
                    o = t.cmd_data;
                if (o) {
                    o.result < 0 && this.CheckCommonError(o.result, !1);
                    let e = o.data;
                    e && e.error_msg && (this.nicknameErrorLabel.string = e.error_msg)
                }
                0 == this.nicknameErrorLabel.string.length && this.playerData.IsSelf ? (this.playerData.NickName = this.nicknameCtrl.nickname, this.playerData.FaceID = this.curAvatarID, this.playerData.FaceFrameID = this.curAvatarFrameID, this.playerData.FaceIDExpireTime = this.curAvatarExpiredTime, this.playerData.FaceFrameIDExpireTime = this.curAvatarFrameExpiredTime, u.EventSystem.Event(u.Profile.NotifyUpdatePlayerSetting).Notify(this.playerData)) : i = !0, this.isAutoSave || (this.checkPopupNode.active = !1, this.saveBtnNode.active = !1, i || this.Hide())
            }
            OnNicknameEditError(e) {
                this.nicknameErrorLabel.string = e, e.length > 0 ? this.saveBtnNode.scale = 0 : this.saveBtnNode.scale = 1, this.CheckSaveBtnActive()
            }
            CheckSaveBtnActive() {
                this.curAvatarID != this.playerData.FaceID || this.curAvatarFrameID != this.playerData.FaceFrameID || this.nicknameCtrl.nickname != this.playerData.NickName ? this.saveBtnNode.active = !0 : this.saveBtnNode.active = !1
            }
            OnClickItem(e, t, i, o = !1, r) {
                0 == e ? (i ? this.headCtrl.SetFaceSprite(i) : this.headCtrl.SetFaceByID(""), this.curAvatarID = t, this.curAvatarExpiredTime = r) : 1 == e && (this.headCtrl.SetFrameSprite(i), this.curAvatarFrameID = t, this.curAvatarFrameExpiredTime = r), this.infoCtrl.HideInfo(), o ? this.SendAutoSaveCommand() : (console.log("\u7576\u524d this.playerData.FaceID =" + this.playerData.FaceID + ", \u76ee\u524d\u9078\u64c7 = " + this.curAvatarID), this.CheckSaveBtnActive())
            }
            OnLongPressItem(e, t, i) {
                this.infoCtrl.ShowInfo(e, t, i)
            }
            OnPageScrolling(e) {
                this.infoCtrl.HideInfo(), this.playerData.IsSelf && u.EventSystem.Event(u.NoticedArrived.SetNewsRedPoint).Length && u.EventSystem.Event(u.NoticedArrived.SetNewsRedPoint).Notify(!1, e)
            }
            OnClickMenuTab(e) {
                _.AudioMgr.Instance.Play(c.ProfileSoundClip.AvatarTab, !1, 1);
                for (let t = 0; t < this.pageAry.length; t++) t != e ? this.pageAry[t].Hide() : this.pageAry[t].Show();
                this.tabTitleSwitch.ChangeSprite(e.toString()), this.infoCtrl.HideInfo()
            }
            OnClickSave() {
                0 != this.saveBtnNode.scale && (this.nicknameErrorLabel.string.length > 0 || (_.AudioMgr.Instance.Play(c.ProfileSoundClip.BtnSave, !1, 1), this.infoCtrl.HideInfo(), this.nicknameCtrl.nickname != this.playerData.NickName ? this.ShowCheckNicknameMessage() : this.SendSaveCommand()))
            }
            OnClickClose() {
                _.AudioMgr.Instance.Play("Btn_Select_n_v01", !1, 1), this.Hide()
            }
            OnClickSaveOK() {
                _.AudioMgr.Instance.Play(c.ProfileSoundClip.BtnSave, !1, 1), this.SendSaveCommand()
            }
            OnClickSaveCancel() {
                _.AudioMgr.Instance.Play("Btn_Select_n_v01", !1, 1), this.checkPopupNode.active = !1
            }
            OnDownloadSettingErr(e) {
                console.error("[AvatarSetting]JSON File Download Failed\n", e), this.ShowError("", "S3 Setting JSON File Download Failed"), this.Hide()
            }
            CheckCommonError(e, t) {
                let i = !0;
                return e == ArkSDK.HttpResult.Abort ? this.ShowError("S397", "ERROR Status:" + e, m.PopupPriority.Critical) : e == ArkSDK.HttpResult.Condition ? this.ShowError("S398", "ERROR Status:" + e, m.PopupPriority.Critical) : e == ArkSDK.HttpResult.Error ? this.ShowError("S399", "ERROR Status:" + e, m.PopupPriority.Critical) : e == ArkSDK.HttpResult.NotReset ? this.ShowError("S400", "ERROR Status:" + e, m.PopupPriority.Critical) : e == ArkSDK.HttpResult.Status ? this.ShowError("S401", "ERROR Status:" + e, m.PopupPriority.Critical) : e == ArkSDK.HttpResult.Timeout ? this.ShowError("S402", "ERROR Status:" + e, m.PopupPriority.Critical) : -1 == e ? this.ShowError(t ? "S405" : "S403", "ERROR Status:" + e) : -9 == e ? this.ShowError(t ? "S406" : "S404", "ERROR Status:" + e) : -41 == e ? this.ShowError("S407", "ERROR Status:" + e) : -47 == e ? this.ShowError("S408", "ERROR Status:" + e) : i = !1, -39 == e ? g.ClickLog.recordClickLog(P.LogName.Profile, -1, P.LogType_Profile.Nickname, P.LogEvent_Nickname.Failed_Duplicate) : -40 == e ? g.ClickLog.recordClickLog(P.LogName.Profile, -1, P.LogType_Profile.Nickname, P.LogEvent_Nickname.Failed_TooLong) : -42 == e && g.ClickLog.recordClickLog(P.LogName.Profile, -1, P.LogType_Profile.Nickname, P.LogEvent_Nickname.Failed_BannedWords), i
            }
            ShowError(e, t, i = m.PopupPriority.Info) {
                console.error("[AvatarSetting]ERROR!" + e + " ; reason: " + t), m.PopupMsgMgr.Instance.ShowPopMsg(i, e, SS.Common.GameEnvironment.CurrentGameNow, t)
            }
        };
        o([S(l.default)], y.prototype, "nicknameCtrl", void 0), o([S(cc.Node)], y.prototype, "checkPopupNode", void 0), o([S(cc.Label)], y.prototype, "checkPopupNicknameLabel", void 0), o([S(cc.Label)], y.prototype, "nicknameErrorLabel", void 0), o([S(cc.Node)], y.prototype, "avatorPageRoot", void 0), o([S(p.default)], y.prototype, "infoCtrl", void 0), o([S(n.default)], y.prototype, "headCtrl", void 0), o([S(cc.Prefab)], y.prototype, "pagePrefab", void 0), o([S(h.default)], y.prototype, "tabTitleSwitch", void 0), o([S(s.default)], y.prototype, "menu", void 0), o([S(cc.Node)], y.prototype, "saveBtnNode", void 0), o([S(cc.Label)], y.prototype, "playerTitleLabel", void 0), o([S(cc.Button)], y.prototype, "saveBtn", void 0), o([S([cc.Node])], y.prototype, "m_selfObjAry", void 0), y = o([C], y), i.default = y, cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0,
        "../../../Component/AvatarIcon": void 0,
        "../../../Connect/Script/ConnectPanelMgr": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "../../../Net/Downloader/JSONDownloder": void 0,
        "../../../Net/LobbyClient": void 0,
        "../../../PopupMessage/Script/PopupMsgMgr": void 0,
        "./AvatarSettingInfo": "AvatarSettingInfo",
        "./AvatarSettingMenu": "AvatarSettingMenu",
        "./AvatarSettingPage": "AvatarSettingPage",
        "./ChangeNicknameCtrl": "ChangeNicknameCtrl",
        "./ProfileData": "ProfileData",
        "./SwitchSprite": "SwitchSprite"
    }],
    AvatarSettingPage: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "ce98cJVzk9C14NQ1NZBnUNl", "AvatarSettingPage");
        var o = this && this.__decorate || function(e, t, i, o) {
            var r, n = arguments.length,
                a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
            else
                for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
            return n > 3 && a && Object.defineProperty(t, i, a), a
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const r = e("./AvatarSettingItem"),
            {
                ccclass: n,
                property: a
            } = cc._decorator;
        let s = class extends cc.Component {
            constructor() {
                super(...arguments), this.pageID = 0, this.itemAry = null, this.scrollView = null, this.itemPrefab = null, this.groupTitleSample = null, this.groupRootSample = null, this.clickItemFunc = null, this.longPressItemFunc = null, this.scrollingFunc = null, this.nodePool = null, this.groupNameAry = null, this.useItemID = "", this.layout = null, this.currentScrollY = 0
            }
            Init() {
                this.clickItemFunc = null, this.longPressItemFunc = null, this.useItemID = "", this.nodePool = new cc.NodePool, this.itemAry = [], this.currentScrollY = this.scrollView.getScrollOffset().y
            }
            Clear() {
                this.scrollView.scrollToTop(0), this.currentScrollY = this.scrollView.getScrollOffset().y;
                let e = 0;
                if (this.itemAry) {
                    for (e = 0; e < this.itemAry.length; e++) this.nodePool.put(this.itemAry[e].node), this.itemAry[e].Clear();
                    this.itemAry = []
                }
                this.useItemID = ""
            }
            Exit() {
                this.nodePool && this.nodePool.clear(), this.groupNameAry = null, this.itemAry = null, this.clickItemFunc = null, this.longPressItemFunc = null, this.useItemID = ""
            }
            Show() {
                this.node.active = !0
            }
            Hide() {
                this.node.active = !1
            }
            SetRect(e, t) {
                this.scrollView.node.setContentSize(e, t), this.scrollView.content.parent.setContentSize(e - 20, t), this.scrollView.content.parent.y = .5 * t, this.scrollView.content.setContentSize(e - 20, t), this.scrollView.verticalScrollBar.getComponent(cc.Widget).top = 0, this.groupRootSample.width = e - 40, this.groupRootSample.x = .5 * -this.groupRootSample.width, this.groupTitleSample.width = this.scrollView.content.width, this.currentScrollY = this.scrollView.getScrollOffset().y
            }
            SetData(e, t) {
                let i = "";
                if (this.scrollView.content.childrenCount > 0)
                    for (let o = 0; o < this.scrollView.content.childrenCount; o++) this.scrollView.content.children[o].active = !1;
                this.groupNameAry = [];
                for (let o = 0; o < e.length; o++) 1 == e[o].is_open && (this.CreateItem(e[o], t), i = e[o].kind, -1 == this.groupNameAry.indexOf(i, 0) && this.groupNameAry.push(i));
                this.SetGroups()
            }
            CreateItem(e, t) {
                console.log("[AvatarSetting]CreateItem: ", e), e.game_id;
                let i = !1,
                    o = this.nodePool.get();
                (i = !o) && (o = cc.instantiate(this.itemPrefab));
                let n = o.getComponent(r.default);
                i && n.Init(), n.clickFunc = this.OnClickItem.bind(this), n.infoShowFunc = this.OnLongPressItem.bind(this), n.SetData(e, t), this.itemAry.push(n), n.isEquiped && (this.useItemID = n.id)
            }
            SetGroups() {
                let e = "";
                for (let t = 0; t < this.groupNameAry.length; t++) {
                    e = this.groupNameAry[t];
                    let i = this.scrollView.content.children.filter(t => t.name.includes(e));
                    if (0 == i.length) this.CreateGroupTitle(e), this.CreateGroups(e);
                    else
                        for (let t = 0; t < i.length; t++) i[t].active = !0, i[t].name == e + "_GROUP" && this.SetItemsParent(i[t], e)
                }
            }
            CreateGroupTitle(e) {
                let t = cc.instantiate(this.groupTitleSample);
                t.name = e, t.parent = this.scrollView.content, t.getComponent(cc.Label).string = e, t.width = this.scrollView.content.width, t.active = !0
            }
            CreateGroups(e) {
                let t = cc.instantiate(this.groupRootSample);
                t.name = e + "_GROUP", t.parent = this.scrollView.content, t.width = this.scrollView.content.width, t.active = !0, this.SetItemsParent(t, e)
            }
            SetItemsParent(e, t) {
                let i = this.itemAry.filter(e => e.groupName == t);
                if (i.length > 0) {
                    e.active = !0;
                    for (let t = 0; t < i.length; t++) i[t].node.parent = e, i[t].node.active = !0
                } else {
                    e.active = !1;
                    let i = this.scrollView.content.children.find(e => e.name == t);
                    i && (i.active = !1)
                }
            }
            GetFirstItem() {
                let e = this.scrollView.content.children[1].children[0].name,
                    t = this.itemAry.findIndex(t => t.id == e);
                return t > -1 ? this.itemAry[t] : null
            }
            GetFirstGruop() {
                return this.scrollView.content.children[1]
            }
            SetAllPressStatus(e) {
                for (let t = 0; t < this.itemAry.length; t++) this.itemAry[t].SetPress(e)
            }
            SetLayout(e) {
                this.layout || (this.layout = this.scrollView.content.getComponent(cc.Layout)), this.layout.enabled = e
            }
            OnClickItem(e, t, i, o = -1) {
                if (console.log("[AvatarSetting]OnClickItem: ", e), this.useItemID.length > 0) {
                    let e = this.itemAry.find(e => e.id == this.useItemID);
                    e && e.SetUnequip()
                }
                this.useItemID = e, this.clickItemFunc && this.clickItemFunc(this.pageID, e, t, i, o)
            }
            OnLongPressItem(e, t, i) {
                this.longPressItemFunc && this.longPressItemFunc(e, t, i)
            }
            OnScrolling(e, t) {
                let i = this.scrollView.getScrollOffset().y;
                Math.abs(this.currentScrollY - i) > .01 && this.scrollingFunc && this.scrollingFunc(this.pageID), this.currentScrollY = i
            }
        };
        o([a(cc.ScrollView)], s.prototype, "scrollView", void 0), o([a(cc.Prefab)], s.prototype, "itemPrefab", void 0), o([a(cc.Node)], s.prototype, "groupTitleSample", void 0), o([a(cc.Node)], s.prototype, "groupRootSample", void 0), s = o([n], s), i.default = s, cc._RF.pop()
    }, {
        "./AvatarSettingItem": "AvatarSettingItem"
    }],
    BeginnersGuideJumper: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c6ca6Jrp7RBRZscnzALqiXN", "BeginnersGuideJumper");
        var o = this && this.__decorate || function(e, t, i, o) {
            var r, n = arguments.length,
                a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
            else
                for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
            return n > 3 && a && Object.defineProperty(t, i, a), a
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const {
            ccclass: r,
            property: n
        } = cc._decorator;
        let a = class extends cc.Component {
            constructor() {
                super(...arguments), this.m_btnClickNext = null, this.m_isEnable = !1
            }
            onEnable() {
                this.m_isEnable = !1
            }
            update() {
                if (!this.m_isEnable && !SS.Common.GameEnvironment.IsUseScoreBox)
                    for (let e = 0; e < this.m_btnClickNext.clickEvents.length; e++) this.m_btnClickNext.clickEvents[e].emit(null);
                this.m_isEnable = !0
            }
        };
        o([n(cc.Button)], a.prototype, "m_btnClickNext", void 0), a = o([r], a), i.default = a, cc._RF.pop()
    }, {}],
    ChangeNicknameCtrl: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "877e4jKGcNCt5xugI5ZeWl4", "ChangeNicknameCtrl");
        var o = this && this.__decorate || function(e, t, i, o) {
            var r, n = arguments.length,
                a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
            else
                for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
            return n > 3 && a && Object.defineProperty(t, i, a), a
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const r = e("../../../Net/ClickLog"),
            n = e("../../../Net/ClickLogEnum"),
            a = e("../../../Helper/EventSystem"),
            {
                ccclass: s,
                property: l
            } = cc._decorator;
        let c = class extends cc.Component {
            constructor() {
                super(...arguments), this.nicknameLabel = null, this.nicknameEditor = null, this.editButton = null, this.editIconNode = null, this.editLineNode = null, this.editStartFunc = null, this.editEndFunc = null, this.editErrorFunc = null, this.originNickname = ""
            }
            get nickname() {
                return this.nicknameLabel.string
            }
            Init() {}
            Exit() {
                this.editStartFunc = null, this.editEndFunc = null, this.editErrorFunc = null
            }
            Show(e, t) {
                this.nicknameEditor.string = e, this.editButton.node.active = t, this.editIconNode.active = t, this.nicknameEditor.enabled = t, this.editLineNode.active = t, this.node.active = !0, this.originNickname = e
            }
            Hide() {
                this.node.active = !1
            }
            OnClickEdit() {
                window.hasOwnProperty("isForcusEditbox") && (isForcusEditbox = !0), this.editButton.node.active = !1, this.nicknameEditor.focus(), a.EventSystem.Event(a.Keyboard.Show).Notify(this.nicknameEditor, null, this.OnEditDidEnd.bind(this), this.node.parent), this.editStartFunc && this.editStartFunc()
            }
            OnEditDidEnd() {
                window.hasOwnProperty("isForcusEditbox") && (isForcusEditbox = !1), console.log(this.originNickname + "!=" + this.nicknameEditor.textLabel.string), this.originNickname != this.nicknameEditor.textLabel.string && (new RegExp("^[!-~]{4,13}$").test(this.nicknameEditor.textLabel.string) ? "M-" == this.nicknameEditor.textLabel.string.substring(0, 2) || "m-" == this.nicknameEditor.textLabel.string.substring(0, 2) ? (this.editErrorFunc('Your name cannot start with "M-"'), r.ClickLog.recordClickLog(n.LogName.Profile, -1, n.LogType_Profile.Nickname, n.LogEvent_Nickname.Failed_PrefixM)) : this.editErrorFunc && this.editErrorFunc("") : this.nickname.length < 4 ? this.editErrorFunc && (this.editErrorFunc("Name must be 4 ~ 11 characters in length."), r.ClickLog.recordClickLog(n.LogName.Profile, -1, n.LogType_Profile.Nickname, n.LogEvent_Nickname.Failed_TooShort)) : this.editErrorFunc && (this.editErrorFunc("Your name must not contain special characters or taboo words."), r.ClickLog.recordClickLog(n.LogName.Profile, -1, n.LogType_Profile.Nickname, n.LogEvent_Nickname.Failed_SpecialSymbol))), this.originNickname = this.nicknameEditor.textLabel.string, this.nicknameLabel.node.active = !0, this.editButton.node.active = !0, this.editEndFunc && this.editEndFunc()
            }
        };
        o([l(cc.Label)], c.prototype, "nicknameLabel", void 0), o([l(cc.EditBox)], c.prototype, "nicknameEditor", void 0), o([l(cc.Button)], c.prototype, "editButton", void 0), o([l(cc.Node)], c.prototype, "editIconNode", void 0), o([l(cc.Node)], c.prototype, "editLineNode", void 0), c = o([s], c), i.default = c, cc._RF.pop()
    }, {
        "../../../Helper/EventSystem": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0
    }],
    EmailBindPageMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "20de6oEKZpC+IJe9eJ7pxyg", "EmailBindPageMgr");
        var o = this && this.__decorate || function(e, t, i, o) {
                var r, n = arguments.length,
                    a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
                return n > 3 && a && Object.defineProperty(t, i, a), a
            },
            r = this && this.__awaiter || function(e, t, i, o) {
                return new(i || (i = Promise))(function(r, n) {
                    function a(e) {
                        try {
                            l(o.next(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function s(e) {
                        try {
                            l(o.throw(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    l((o = o.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.EmailBindPageMgr = void 0;
        const n = e("../../../Connect/Script/ConnectPanelMgr"),
            a = e("../../../Helper/EventSystem"),
            s = e("../../../Net/ClickLog"),
            l = e("../../../Net/ClickLogEnum"),
            c = e("../../../Net/LobbyClient"),
            h = e("../../../PopupMessage/Script/PopupMsgMgr"),
            {
                ccclass: d,
                property: m
            } = cc._decorator,
            p = () => new Promise((e, t) => {
                const i = {
                    ark_id: SS.Network.LoginModel.LoginInfo.pin_ark_id,
                    BindType: "MAIL"
                };
                c.LobbyClient.Instance.GetUserClient.SentNoRetryCommond("BindAccount", "GET_PLAYER", i, (i, o) => {
                    if (console.log("EB_GetPlayer", i, o), 0 == i) {
                        const {
                            Code: i,
                            Data: r
                        } = o.cmd_data;
                        0 == i ? e(r) : t(i)
                    } else t(i)
                })
            }),
            u = e => new Promise((t, i) => {
                const o = {
                    ark_id: SS.Network.LoginModel.LoginInfo.pin_ark_id,
                    BindType: "MAIL",
                    SpecialOffers: e
                };
                c.LobbyClient.Instance.GetUserClient.SentNoRetryCommond("BindAccount", "UPDATE_SPECIAL_OFFERS", o, (e, o) => {
                    if (console.log("EB_UpdateSpecialOffer", e, o), 0 == e) {
                        const {
                            Code: e,
                            Data: r
                        } = o.cmd_data;
                        0 == e ? t(r) : i(e)
                    } else i(e)
                })
            });
        let f = class extends cc.Component {
            constructor() {
                super(...arguments), this.playerEmail = null, this.email = null, this.popUp = null, this.btn = null
            }
            onLoad() {
                this.CheckBtnShow()
            }
            CheckBtnShow() {
                let e = !1;
                a.EmailBonusEvent && a.EmailBonusEvent.CheckEventOpen && (e = a.EventSystem.Function(a.EmailBonusEvent.CheckEventOpen)(), console.log("[EmailBindPageMgr] eventOpen = " + e));
                const {
                    CurrentGameNow: t
                } = SS.Common.GameEnvironment;
                !t && e || (this.btn.interactable = !1, this.btn.node.active = !1)
            }
            CheckPlayerStatus() {
                return r(this, void 0, void 0, function*() {
                    if (!this.playerEmail) {
                        n.ConnectPanelMgr.Instance.ShowConnectPanel();
                        try {
                            const t = yield p(), {
                                Bind: i
                            } = t;
                            this.playerEmail = i, console.log("EmailBindPageMgr", t)
                        } catch (e) {
                            console.error("EmailBindPageMgr", e)
                        }
                        n.ConnectPanelMgr.Instance.DisableConnectPanel()
                    }
                })
            }
            ShowPopUpPage(e) {
                this.email.string = this.playerEmail, this.popUp.active = e
            }
            SendUpdate(e) {
                return r(this, void 0, void 0, function*() {
                    n.ConnectPanelMgr.Instance.ShowConnectPanel();
                    try {
                        yield u(e)
                    } catch (t) {
                        h.PopupMsgMgr.Instance.ShowPopMsg(h.PopupPriority.Warning, t.toString(), "Lobby", t.toString())
                    }
                    n.ConnectPanelMgr.Instance.DisableConnectPanel(), this.ShowPopUpPage(!1)
                })
            }
            OnClickYes() {
                return r(this, void 0, void 0, function*() {
                    this.SendUpdate(!0)
                })
            }
            OnClickNo() {
                return r(this, void 0, void 0, function*() {
                    this.SendUpdate(!1)
                })
            }
            Close() {
                this.ShowPopUpPage(!1)
            }
            OnClickEmailBtn() {
                return r(this, void 0, void 0, function*() {
                    yield this.CheckPlayerStatus(), null == this.playerEmail ? (s.ClickLog.SendLog(l.LogName.PlayerAction, l.LogType_PlayerAction.EmailBonus, l.LogEvent_EmailBonus.ProfileIcon), a.EventSystem.Event(a.EmailBonusEvent.OnBtnClicked).Notify()) : this.ShowPopUpPage(!0)
                })
            }
        };
        o([m(cc.Label)], f.prototype, "email", void 0), o([m(cc.Node)], f.prototype, "popUp", void 0), o([m(cc.Button)], f.prototype, "btn", void 0), f = o([d], f), i.EmailBindPageMgr = f, cc._RF.pop()
    }, {
        "../../../Connect/Script/ConnectPanelMgr": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "../../../Net/LobbyClient": void 0,
        "../../../PopupMessage/Script/PopupMsgMgr": void 0
    }],
    ProfileData: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "977b02M4cVB8beCwQJWrtDh", "ProfileData"), Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.ProfileSoundClip = i.ProfileTabData = i.HotGameData = i.ProfileRecordData = i.RecordPlayerData = i.RecordFirstPlayerData = i.ProfilePlayerData = i.ProfileData = i.ProfileRecordUnitType = void 0,
            function(e) {
                e[e.TotalWin = 0] = "TotalWin", e[e.BiggestJp = 1] = "BiggestJp", e[e.MaxSlotMultiple = 2] = "MaxSlotMultiple", e[e.MaxFishMultiple = 3] = "MaxFishMultiple"
            }(i.ProfileRecordUnitType || (i.ProfileRecordUnitType = {})), i.ProfileData = class {
                constructor() {
                    this.PlayerData = null, this.RecordData = null, this.Entries = 0, this.Winnings = 0, this.FavoriteGameAry = [], this.LastUpdateTimestmp = 0
                }
            };
        class o extends cc.Component {
            constructor() {
                super(...arguments), this.ArkID = "", this.NickName = "", this.FaceID = "", this.FaceFrameID = "", this.IsSelf = !1, this.FaceIDExpireTime = -1, this.FaceFrameIDExpireTime = -1
            }
        }
        i.ProfilePlayerData = o, i.RecordFirstPlayerData = class extends o {
                constructor() {
                    super(...arguments), this.RecordType = void 0, this.RecoreTitle = "", this.RecoreValue = 0
                }
            }, i.RecordPlayerData = class {
                constructor() {
                    this.RecordType = void 0, this.MaxValue = -1, this.MaxPercent = 0, this.FirstPlayerData = null
                }
            }, i.ProfileRecordData = class {
                constructor() {
                    this.HotGameAry = [], this.RecordTotalWin = null, this.RecordMaxJPWin = null, this.RecordMaxSlotMultiple = null, this.RecordMaxFishMultiple = null
                }
            }, i.HotGameData = class {
                constructor() {
                    this.GameID = "", this.Typt = ""
                }
            }, i.ProfileTabData = class {
                constructor() {
                    this.Type = "", this.Index = -1, this.Title = "", this.HaveRedPoint = !1
                }
            },
            function(e) {
                e.BtnX = "Btn_Select_n_v01", e.BtnSave = "PS_SAVE", e.BeginnersGuide = "PS_Beginner", e.OpenProfile = "PS_Open", e.BtnTab = "PS_Info_Class", e.OpenAvatarSetting = "PS_Info_Avatar_Setting", e.AvatarTab = "PS_Info_Avatar_Class", e.ClickItemOwn = "PS_Info_Avatar_Setting", e.ClickItemNo = "PS_Info_Avatar_No", e.BtnPurchase = "", e.BtnPurchaseCoin = "", e.BtnAccoutSetting = "", e.BtnGame = "PS_Record_IntoGame", e.BtnShowBest = "PS_Record_TitleClick", e.BtnShowSelfValue = "PS_Record_ValueClick", e.SelfBeat = "PS_Record_Beat"
            }(i.ProfileSoundClip || (i.ProfileSoundClip = {})), cc._RF.pop()
    }, {}],
    ProfileFavoriteGameCtrl: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "e5921xnc0NNqJw73wzidqDn", "ProfileFavoriteGameCtrl");
        var o = this && this.__decorate || function(e, t, i, o) {
                var r, n = arguments.length,
                    a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
                return n > 3 && a && Object.defineProperty(t, i, a), a
            },
            r = this && this.__awaiter || function(e, t, i, o) {
                return new(i || (i = Promise))(function(r, n) {
                    function a(e) {
                        try {
                            l(o.next(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function s(e) {
                        try {
                            l(o.throw(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    l((o = o.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.ProfileFavoriteGameCtrl = void 0;
        const n = e("../../../Component/AudioMgr"),
            a = e("../../../Net/ClickLog"),
            s = e("../../../Net/ClickLogEnum"),
            l = e("./ProfileData"),
            c = e("./ProfileFavoriteGame"),
            {
                ccclass: h,
                property: d
            } = cc._decorator;
        let m = class extends cc.Component {
            constructor() {
                super(...arguments), this.funcClickGame = null, this.funcClickShowHot = null, this.m_FavoriteGameAry = [], this.m_HotGameAry = [], this.m_nodeHotGame = null, this.m_vOneHotGamePos = cc.v2(0, -15), this.m_vOneHotGameLabPos = cc.v2(0, -88)
            }
            _onLoad() {
                this.m_FavoriteGameAry.forEach(e => {
                    e._onLoad()
                }), this.m_HotGameAry.forEach(e => {
                    e._onLoad()
                })
            }
            _onDestroy() {
                this.funcClickGame = null, this.funcClickShowHot = null, this.m_FavoriteGameAry.forEach(e => {
                    e._onDestroy()
                }), this.m_HotGameAry.forEach(e => {
                    e._onDestroy()
                }), this.m_FavoriteGameAry = [], this.m_HotGameAry = [], this.m_nodeHotGame = null
            }
            Init() {
                this.m_FavoriteGameAry.forEach(e => {
                    e.Init(), e.funcClicked = this.OpenSelectOptionPage.bind(this)
                }), this.m_HotGameAry.forEach(e => {
                    e.Init(), e.funcClicked = this.OpenSelectOptionPage.bind(this)
                })
            }
            UpdateFavoriteGameData(e) {
                this.ClearFavoriteGame();
                for (let t = 0; t < e.length; t++) this.SetGameData(e[t], this.m_FavoriteGameAry[t])
            }
            UpdateHotGameData(e) {
                return r(this, void 0, void 0, function*() {
                    this.ClearHotGame();
                    let t = 0,
                        i = 0;
                    for (let o = 0; o < e.length; o++) {
                        let r = this.getGameNameByThemeID(e[o].GameID);
                        r && (this.checkThemeIsOpen(r) ? i = o : t++)
                    }
                    if (1 == t) this.m_HotGameAry[0].node.setPosition(this.m_vOneHotGamePos), this.m_HotGameAry[0].m_labType.node.setPosition(this.m_vOneHotGameLabPos), this.m_HotGameAry[1].SetActive(!1), this.SetGameData(e[i].GameID, this.m_HotGameAry[0], e[i].Typt);
                    else {
                        for (let e = 0; e < this.m_HotGameAry.length; e++) this.m_HotGameAry[e].RevertPosition();
                        if (0 == t)
                            for (let t = 0; t < e.length; t++) this.SetGameData(e[t].GameID, this.m_HotGameAry[t], e[t].Typt);
                        else if (t == e.length) {
                            for (let e = 0; e < this.m_HotGameAry.length; e++) this.m_HotGameAry[e].SetActive(!0), this.m_HotGameAry[e].SetEnable(!1);
                            this.m_HotGameAry[0].m_labType.string = "SLOT", this.m_HotGameAry[1].m_labType.string = "FISH"
                        }
                    }
                })
            }
            SetGameData(e, t, i = "") {
                let o = this.getGameNameByThemeID(e);
                if ("" != o) {
                    let r = this.checkThemeIsOpen(o),
                        n = this.getThemeTitleByThemeID(e);
                    t.SetGame(e, o, i, r, n)
                } else t.SetEnable(!1), console.error("\u8a2d\u5b9a\u904a\u6232 icon \u627e\u4e0d\u5230 ThemeID, gameID = " + e)
            }
            getGameNameByThemeID(e) {
                let t = "";
                try {
                    t = SS.Common.GameEnvironment.GameSetting.Icon[e].GameName
                } catch (i) {}
                return t
            }
            getThemeTitleByThemeID(e) {
                let t = "";
                try {
                    t = SS.Common.GameEnvironment.GameSetting.Icon[e].ThemeTitle
                } catch (i) {}
                return t
            }
            OpenSelectOptionPage(e) {
                console.warn("OpenSelectOptionPage !!, GameName = " + e), this.funcClickGame && this.funcClickGame(e)
            }
            ShowHotGame() {
                this.funcClickShowHot && this.funcClickShowHot(), this.m_nodeHotGame.activeInHierarchy ? this.HideHotGame() : (this.m_nodeHotGame.active = !0, this.SetRegisterBtnEvent(this.m_FavoriteGameAry, !1), this.SetRegisterBtnEvent(this.m_HotGameAry, !0)), n.AudioMgr.Instance.Play(l.ProfileSoundClip.BtnShowBest, !1, 1), a.ClickLog.recordClickLog(s.LogName.Profile, 0, s.LogType_Profile.Button, s.LogEvent_Button.HotGame)
            }
            HideHotGame() {
                this.m_nodeHotGame.active = !1, this.SetRegisterBtnEvent(this.m_FavoriteGameAry, !0), this.SetRegisterBtnEvent(this.m_HotGameAry, !1)
            }
            SetRegisterBtnEvent(e, t) {
                e.forEach(e => {
                    e.RegisterBtnEvent(t)
                })
            }
            checkThemeIsOpen(e) {
                for (let t = 0; t < SS.Common.GameEnvironment.GameSetting.kioskOpenGameList.length; t++)
                    if (SS.Common.GameEnvironment.GameSetting.kioskOpenGameList[t] == e) return !0;
                return !1
            }
            ClearFavoriteGame() {
                this.m_FavoriteGameAry.forEach(e => {
                    e.Clear()
                })
            }
            ClearHotGame() {
                this.m_HotGameAry.forEach(e => {
                    e.Clear()
                })
            }
            Clear() {
                this.ClearFavoriteGame(), this.ClearHotGame()
            }
        };
        o([d([c.ProfileFavoriteGame])], m.prototype, "m_FavoriteGameAry", void 0), o([d([c.ProfileFavoriteGame])], m.prototype, "m_HotGameAry", void 0), o([d(cc.Node)], m.prototype, "m_nodeHotGame", void 0), m = o([h], m), i.ProfileFavoriteGameCtrl = m, cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "./ProfileData": "ProfileData",
        "./ProfileFavoriteGame": "ProfileFavoriteGame"
    }],
    ProfileFavoriteGame: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "5d75bekzpBCs6dDs/f2f5xF", "ProfileFavoriteGame");
        var o = this && this.__decorate || function(e, t, i, o) {
                var r, n = arguments.length,
                    a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
                return n > 3 && a && Object.defineProperty(t, i, a), a
            },
            r = this && this.__awaiter || function(e, t, i, o) {
                return new(i || (i = Promise))(function(r, n) {
                    function a(e) {
                        try {
                            l(o.next(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function s(e) {
                        try {
                            l(o.throw(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    l((o = o.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.ProfileFavoriteGame = void 0;
        const n = e("../../../Component/BundleCtrl"),
            a = e("../../../PopupMessage/Script/PopupMsgMgr"),
            {
                ccclass: s,
                property: l
            } = cc._decorator;
        let c = class extends cc.Component {
            constructor() {
                super(...arguments), this.funcClicked = null, this.m_sprGameIcon = null, this.m_sprNoData = null, this.m_btnGame = null, this.m_labType = null, this.m_sprGameIconFrame = null, this.m_strThemeID = "", this.m_strGameName = "", this.m_strThemeTitle = "", this.m_bGameOpen = !0, this.m_vOriNodePosition = null, this.m_vOriLabTypeNodePosition = null, this.m_spDefaultGameIconFrame = null
            }
            _onLoad() {
                this.m_spDefaultGameIconFrame = this.m_sprGameIcon.spriteFrame
            }
            _onDestroy() {
                this.Clear(), this.funcClicked = null, this.m_btnGame.node && this.m_btnGame.node.targetOff(this)
            }
            Init() {
                this.m_vOriNodePosition = this.node.getPosition(), this.m_labType && (this.m_vOriLabTypeNodePosition = this.m_labType.node.getPosition()), this.RegisterBtnEvent(!0), this.SetEnable(!1), this.SetActive(!0), this.m_sprNoData.node.active = !0
            }
            RegisterBtnEvent(e) {
                e ? (this.m_btnGame.node.on(cc.Node.EventType.MOUSE_DOWN, this.OnBtnHover, this, !0), this.m_btnGame.node.on(cc.Node.EventType.MOUSE_UP, this.OnBtnHoverEnd, this, !0), this.m_btnGame.node.on(cc.Node.EventType.MOUSE_LEAVE, this.OnBtnHoverEnd, this, !0), this.m_btnGame.node.on(cc.Node.EventType.TOUCH_START, this.OnBtnHover, this, !0), this.m_btnGame.node.on(cc.Node.EventType.TOUCH_END, this.OnBtnHoverEnd, this, !0), this.m_btnGame.node.on(cc.Node.EventType.TOUCH_CANCEL, this.OnBtnHoverEnd, this, !0)) : this.m_btnGame.node.targetOff(this)
            }
            OnBtnHover() {
                this.m_sprGameIconFrame && this.m_btnGame.interactable && (this.m_sprGameIconFrame.node.color = cc.Color.YELLOW)
            }
            OnBtnHoverEnd() {
                this.m_sprGameIconFrame && this.m_btnGame.interactable && (this.m_sprGameIconFrame.node.color = cc.Color.WHITE)
            }
            SetGame(e, t, i = "", o, a) {
                return r(this, void 0, void 0, function*() {
                    this.SetEnable(!0), this.m_bGameOpen = o, this.m_strThemeID = e, this.m_strGameName = t, this.m_strThemeTitle = a, this.m_btnGame.normalColor = this.m_bGameOpen ? cc.Color.WHITE : cc.Color.GRAY, this.m_btnGame.hoverColor = this.m_bGameOpen ? cc.Color.WHITE : cc.Color.GRAY, this.m_btnGame.pressedColor = this.m_bGameOpen ? cc.Color.WHITE : cc.Color.GRAY, this.m_labType && "" != i && (this.m_labType.string = i);
                    let r = yield n.default.Instance.GetSpirte("SquareGameIcon", t);
                    r ? (this.m_sprGameIcon.spriteFrame = r, this.m_sprNoData.node.active = !1) : (this.m_sprGameIcon.spriteFrame = this.m_spDefaultGameIconFrame, this.m_sprNoData.node.active = !0)
                })
            }
            SetEnable(e) {
                this.m_btnGame.interactable = e, !e && this.m_labType && (this.m_labType.string = "")
            }
            SetActive(e) {
                this.node.active = e, this.m_labType && (this.m_labType.node.active = e)
            }
            RevertPosition() {
                this.node.setPosition(this.m_vOriNodePosition), this.m_labType && this.m_labType.node.setPosition(this.m_vOriLabTypeNodePosition)
            }
            OnClick() {
                this.m_bGameOpen ? this.funcClicked && "" != this.m_strGameName && this.funcClicked(this.m_strGameName) : (console.warn("\u904a\u6232\u6c92\u958b"), a.PopupMsgMgr.Instance.ShowPopMsg(a.PopupPriority.Info, "C65", null, "Game not available", null, this.m_strThemeTitle))
            }
            Clear() {
                this.m_strThemeID = "", this.m_strGameName = "", this.m_sprGameIcon.spriteFrame = this.m_spDefaultGameIconFrame, this.SetEnable(!1), this.m_sprNoData.node.active = !0
            }
        };
        o([l(cc.Sprite)], c.prototype, "m_sprGameIcon", void 0), o([l(cc.Sprite)], c.prototype, "m_sprNoData", void 0), o([l(cc.Button)], c.prototype, "m_btnGame", void 0), o([l(cc.Label)], c.prototype, "m_labType", void 0), o([l(cc.Sprite)], c.prototype, "m_sprGameIconFrame", void 0), c = o([s], c), i.ProfileFavoriteGame = c, cc._RF.pop()
    }, {
        "../../../Component/BundleCtrl": void 0,
        "../../../PopupMessage/Script/PopupMsgMgr": void 0
    }],
    ProfileIDCardMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "6cfeeHcBINLAKJS3G2kvvWV", "ProfileIDCardMgr");
        var o = this && this.__decorate || function(e, t, i, o) {
            var r, n = arguments.length,
                a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
            else
                for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
            return n > 3 && a && Object.defineProperty(t, i, a), a
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.ProfileIDCardMgr = void 0;
        const r = e("../../../Component/AudioMgr"),
            n = e("../../../Component/AvatarIcon"),
            a = e("../../../Component/CookieCtrl"),
            s = e("../../../Connect/Script/ConnectPanelMgr"),
            l = e("../../../EditMobileIDMgr/Script/EditMobileIDMgr"),
            c = e("../../../EditPassword/Script/EditPassword"),
            h = e("../../../Helper/EventSystem"),
            d = e("../../../Net/ClickLog"),
            m = e("../../../Net/ClickLogEnum"),
            p = e("./AvatarSettingMgr"),
            u = e("./EmailBindPageMgr"),
            {
                ccclass: f,
                property: _
            } = cc._decorator;
        let g = class extends cc.Component {
            constructor() {
                super(...arguments), this.m_labPlayerID = null, this.m_labPlayerNickname = null, this.m_nodeEntryRoot = null, this.m_labEntry = null, this.m_nodeWinningRoot = null, this.m_labWinning = null, this.m_nodeCreditRoot = null, this.m_labCredit = null, this.m_selfObjAry = [], this.m_editAccountObjAry = [], this.m_AvatarIcon = null, this.m_nodeMobileBtn = null, this.m_nodePwdBtn = null, this.m_pfbAvatar = null, this.m_nodeAvatarRoot = null, this.m_pfbEditMobileID = null, this.m_nodeEditMobileIDRoot = null, this.m_pfbEditPwd = null, this.m_nodeEditPwdRoot = null, this.m_nodePurchaseRoot = null, this.emailPageMgr = null, this.m_AvatarSettingMgr = null, this.m_EditMobileIDMgr = null, this.m_EditPasswordMgr = null, this.m_curData = null, this.m_posBtnPwdOriX = 96, this.m_forceOpenHelpInSettingUI = !1
            }
            _onLoad() {}
            _onDestroy() {
                this.m_curData = null, this.m_AvatarSettingMgr && (this.m_AvatarSettingMgr._onDestroy(), this.m_AvatarSettingMgr = null), this.m_EditMobileIDMgr && (this.m_EditMobileIDMgr.m_DelClickClose.Remove(this.OnEditMobileIDClickClose, this), this.m_EditMobileIDMgr.m_DelClickOK.Remove(this.OnEditMobileIDClickOK, this), this.m_EditMobileIDMgr._onDestroy(), this.m_EditMobileIDMgr = null), this.m_EditPasswordMgr && (this.m_EditPasswordMgr.m_DelClickClose.Remove(this.OnEditPWDClickClose, this), this.m_EditPasswordMgr.m_DelClickOK.Remove(this.OnEditPWDClickOK, this), this.m_EditPasswordMgr._onDestroy(), this.m_EditPasswordMgr = null)
            }
            Init() {
                SS.Common.GameEnvironment.IsUseScoreBox ? (this.m_nodeEntryRoot.active = !0, this.m_nodeWinningRoot.active = !0, this.m_nodeCreditRoot.active = !1) : (this.m_nodeEntryRoot.active = !1, this.m_nodeWinningRoot.active = !1, this.m_nodeCreditRoot.active = !0)
            }
            Show(e, t) {
                this.m_curData = e;
                for (let i = 0; i < this.m_selfObjAry.length; i++) this.m_selfObjAry[i].active = e.PlayerData.IsSelf;
                if (this.m_curData.PlayerData.IsSelf) {
                    let e = SS.Network.LoginModel.LoginInfo.user_id;
                    this.m_labPlayerID.string = "ID: " + e, null == SS.Common.GameEnvironment.CurrentGameNow ? e.includes("m-") || e.includes("M-") ? (this.m_nodeMobileBtn.active = !0, this.m_nodePwdBtn.setPosition(this.m_posBtnPwdOriX, this.m_nodeMobileBtn.getPosition().y)) : (this.m_nodeMobileBtn.active = !1, this.m_nodePwdBtn.setPosition(0, this.m_nodeMobileBtn.getPosition().y)) : this.m_editAccountObjAry.forEach(e => e.active = !1), this.emailPageMgr && this.emailPageMgr.CheckBtnShow()
                }
                this.SetAvatarIcon(this.m_curData.PlayerData), this.SetAssets(e.Winnings, e.Entries), t && this.ShowAvatarSetting()
            }
            SetAssets(e, t) {
                this.m_labEntry.string = SS.Common.BaseFunction.addCommas(t, 0), this.m_labCredit.string = SS.Common.BaseFunction.addCommas(t, 0), this.m_labWinning.string = SS.Common.BaseFunction.addCommas(e, 0)
            }
            SetAvatarIcon(e) {
                e.ArkID == this.m_curData.PlayerData.ArkID && (this.m_AvatarIcon.SetFaceByID(e.FaceID), this.m_AvatarIcon.SetFrameByID(e.FaceFrameID), this.m_AvatarIcon.SetNickname(e.NickName))
            }
            BtnGuideAvatarEdit() {
                this.ShowAvatarSetting(!0)
            }
            BtnAvatarEdit() {
                this.ShowAvatarSetting()
            }
            ShowAvatarSetting(e = !1) {
                if (null == this.m_AvatarSettingMgr && this.m_pfbAvatar) {
                    let e = this.CreateObj(this.m_pfbAvatar, this.m_nodeAvatarRoot);
                    this.m_AvatarSettingMgr = e.getComponent(p.default), this.m_AvatarSettingMgr.Init()
                }
                this.m_forceOpenHelpInSettingUI && this.m_AvatarSettingMgr.SetHaveToShowHelp(), e ? this.CheckCookieExist("avatareditor_beginnerguide") || d.ClickLog.recordClickLog(m.LogName.Profile, 0, m.LogType_Profile.Guide, m.LogEvent_Guide.Next9) : d.ClickLog.recordClickLog(m.LogName.Profile, 0, m.LogType_Profile.Button, m.LogEvent_Button.Avatar), this.m_forceOpenHelpInSettingUI = !1, this.m_AvatarSettingMgr.Show(this.m_curData.PlayerData, this.m_curData.PlayerData.IsSelf)
            }
            BtnMobileEdit() {
                if (null == this.m_EditMobileIDMgr && this.m_pfbEditMobileID) {
                    let e = this.CreateObj(this.m_pfbEditMobileID, this.m_nodeEditMobileIDRoot);
                    this.m_EditMobileIDMgr = e.getComponent(l.EditMobileIDMgr), this.m_EditMobileIDMgr._onLoad(), this.m_EditMobileIDMgr.m_DelClickClose.Insert(this.OnEditMobileIDClickClose, this), this.m_EditMobileIDMgr.m_DelClickOK.Insert(this.OnEditMobileIDClickOK, this)
                }
                this.m_EditMobileIDMgr.node.active = !0, r.AudioMgr.Instance.Play("Btn_Select_y_v01", !1, 1);
                let e = SS.Network.LoginModel.LoginInfo.user_id;
                this.m_EditMobileIDMgr.ShowEditID(() => {
                    a.CookieCtrl.SetCookie("GDC_USER_ID", ""), a.CookieCtrl.SetCookie("GDC_USER_PW", ""), s.ConnectPanelMgr.Instance.DisableConnectPanel(), h.EventSystem.Event(h.DoLogOut).Notify()
                }, e)
            }
            BtnPasswordEdit() {
                if (null == this.m_EditPasswordMgr && this.m_pfbEditPwd) {
                    let e = this.CreateObj(this.m_pfbEditPwd, this.m_nodeEditPwdRoot);
                    this.m_EditPasswordMgr = e.getComponent(c.EditPassword), this.m_EditPasswordMgr._onLoad(), this.m_EditPasswordMgr.m_DelClickClose.Insert(this.OnEditPWDClickClose, this), this.m_EditPasswordMgr.m_DelClickOK.Insert(this.OnEditPWDClickOK, this)
                }
                r.AudioMgr.Instance.Play("Btn_Select_y_v01", !1, 1), this.m_EditPasswordMgr.ShowEditPasaword(() => {
                    a.CookieCtrl.SetCookie("GDC_USER_PW", ""), s.ConnectPanelMgr.Instance.DisableConnectPanel(), h.EventSystem.Event(h.DoLogOut).Notify()
                })
            }
            BtnPurchase() {
                h.EventSystem.Event(h.PurchaseEvent.ShowPanel).Notify(this.m_curData.Winnings)
            }
            CreateObj(e, t) {
                let i = cc.instantiate(e.data);
                return i.parent = t, i.setPosition(cc.Vec3.ZERO), i
            }
            OnEditMobileIDClickClose() {
                this.PlayAutioSelectN()
            }
            OnEditMobileIDClickOK() {
                this.PlayAutioSelectY()
            }
            OnEditPWDClickOK() {
                this.PlayAutioSelectY()
            }
            OnEditPWDClickClose() {
                this.PlayAutioSelectN()
            }
            OnClickPurchaseBtn() {
                this.PlayAutioSelectN()
            }
            OnPurchaseSuccess(e, t) {
                this.PlayAutioSelectY(), h.EventSystem.Event(h.PurchaseEvent.OnPurchaseSuccess).Notify(e, t)
            }
            OnPurchasePanelDisable() {
                this.PlayAutioSelectN(), h.EventSystem.Event(h.PurchaseEvent.OnPurchasePanelDisable).Notify()
            }
            PlayAutioSelectN() {
                r.AudioMgr.Instance.Play("Btn_Select_n_v01", !1, 1)
            }
            PlayAutioSelectY() {
                r.AudioMgr.Instance.Play("Btn_Select_y_v01", !1, 1)
            }
            CheckCookieExist(e) {
                let t = "";
                return JSUtility.IsSupportLocalStorage() ? t = localStorage.getItem(e) : JSUtility.IsSupportCookie() && (t = JSUtility.GetCookie(e)), null != t
            }
            Clear() {
                this.m_AvatarSettingMgr && this.m_AvatarSettingMgr.Init(), this.m_AvatarIcon.SetFaceByID(""), this.m_AvatarIcon.SetFrameByID(""), this.m_AvatarIcon.SetNickname(""), this.m_labPlayerID.string = "ID: ", this.SetAssets(0, 0), this.m_curData = null
            }
        };
        o([_(cc.Label)], g.prototype, "m_labPlayerID", void 0), o([_(cc.Label)], g.prototype, "m_labPlayerNickname", void 0), o([_(cc.Node)], g.prototype, "m_nodeEntryRoot", void 0), o([_(cc.Label)], g.prototype, "m_labEntry", void 0), o([_(cc.Node)], g.prototype, "m_nodeWinningRoot", void 0), o([_(cc.Label)], g.prototype, "m_labWinning", void 0), o([_(cc.Node)], g.prototype, "m_nodeCreditRoot", void 0), o([_(cc.Label)], g.prototype, "m_labCredit", void 0), o([_([cc.Node])], g.prototype, "m_selfObjAry", void 0), o([_([cc.Node])], g.prototype, "m_editAccountObjAry", void 0), o([_(n.default)], g.prototype, "m_AvatarIcon", void 0), o([_(cc.Node)], g.prototype, "m_nodeMobileBtn", void 0), o([_(cc.Node)], g.prototype, "m_nodePwdBtn", void 0), o([_(cc.Prefab)], g.prototype, "m_pfbAvatar", void 0), o([_(cc.Node)], g.prototype, "m_nodeAvatarRoot", void 0), o([_(cc.Prefab)], g.prototype, "m_pfbEditMobileID", void 0), o([_(cc.Node)], g.prototype, "m_nodeEditMobileIDRoot", void 0), o([_(cc.Prefab)], g.prototype, "m_pfbEditPwd", void 0), o([_(cc.Node)], g.prototype, "m_nodeEditPwdRoot", void 0), o([_(cc.Node)], g.prototype, "m_nodePurchaseRoot", void 0), o([_(u.EmailBindPageMgr)], g.prototype, "emailPageMgr", void 0), g = o([f], g), i.ProfileIDCardMgr = g, cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0,
        "../../../Component/AvatarIcon": void 0,
        "../../../Component/CookieCtrl": void 0,
        "../../../Connect/Script/ConnectPanelMgr": void 0,
        "../../../EditMobileIDMgr/Script/EditMobileIDMgr": void 0,
        "../../../EditPassword/Script/EditPassword": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "./AvatarSettingMgr": "AvatarSettingMgr",
        "./EmailBindPageMgr": "EmailBindPageMgr"
    }],
    ProfileMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "c641eMNNvJFp778Qf1VJ4eC", "ProfileMgr");
        var o = this && this.__decorate || function(e, t, i, o) {
                var r, n = arguments.length,
                    a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
                else
                    for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
                return n > 3 && a && Object.defineProperty(t, i, a), a
            },
            r = this && this.__awaiter || function(e, t, i, o) {
                return new(i || (i = Promise))(function(r, n) {
                    function a(e) {
                        try {
                            l(o.next(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function s(e) {
                        try {
                            l(o.throw(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    l((o = o.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.ProfileMgr = void 0;
        const n = e("../../../Component/AudioMgr"),
            a = e("../../../Component/BundleCtrl"),
            s = e("../../../Helper/EventSystem"),
            l = e("../../../ModuleBase"),
            c = e("../../../PopupMessage/Script/PopupMsgMgr"),
            h = e("./ProfileSystem"),
            d = e("./ProfileUIMgr"),
            {
                ccclass: m,
                property: p
            } = cc._decorator;
        let u = class extends l.default {
            constructor() {
                super(...arguments), this.m_ProfileUIMgr = null, this.m_ProfileSystem = null, this.m_nodeLoading = null, this.SoundClip = [], this.m_curProfileData = null, this.m_tmpProfileData = null, this.m_isHelpLoded = !1, this.m_curQuestPlayerID = "", this.TIME_GETDATA_TIMEOUT = 15, this.m_isJumpToAnotherProfile = !1, this.m_forceEntries = -1, this.m_forceWinning = -1, this.m_isOpenAvatarEditPage = !1
            }
            _onLoad() {
                return r(this, void 0, void 0, function*() {
                    console.error("ProfileMgr, onLoad!!!!!!!"), this.m_ProfileUIMgr._onLoad(), this.m_ProfileSystem._onLoad(), this.Init(), this.m_nodeLoading.active = !1
                })
            }
            _onDestroy() {
                return r(this, void 0, void 0, function*() {
                    this.m_ProfileUIMgr._onDestroy(), this.m_ProfileSystem._onDestroy(), s.EventSystem.Event(s.Profile.OpenProfile).Remove(this.OpenProfile, this), s.EventSystem.Event(s.Profile.OpenAvatarEditor).Remove(this.OpenAvatarEditor, this), s.EventSystem.Event(s.Profile.ClearSelfUpdateCDTime).Remove(this.ClearSelfUpdateCDTime, this), s.EventSystem.Event(s.Profile.NotifyUpdatePlayerSetting).Remove(this.OnGetNotifyUpdatePlayerSetting, this), s.EventSystem.Event(s.Profile.SetLoadingNodeDisplay).Remove(this.OnSetLoadingDisplay, this), s.EventSystem.Event(s.Avatar.RequestUpdate).Remove(this.OnAvatarRequestUpdate, this), s.EventSystem.Event(s.PurchaseEvent.OnPurchaseSuccess).Remove(this.OnPurchaseSuccess, this), s.EventSystem.Event(s.BeginnersGuide.OnExit).Remove(this.OnBeginnerGuideComplete, this), s.EventSystem.Event(s.Profile.UpdatePlayerAsset).Remove(this.UpdatePlayerAsset, this), s.EventSystem.Event(s.CommunityBonus.TimesUp).Remove(this.OnCommunityBonusTimesUp, this)
                })
            }
            Init() {
                this.m_ProfileUIMgr.Init(), this.m_ProfileUIMgr.funOnClose = this.OnClose.bind(this), this.m_ProfileUIMgr.funcOnCallHelp = this.OnCallBeginnerGuideShow.bind(this), this.m_ProfileUIMgr.RecordMgr.funcClickPlayer = this.OnClickPlayer.bind(this), this.m_ProfileSystem.Init(), this.m_ProfileSystem.funcGetProfile = this.GetProfile.bind(this), s.EventSystem.Event(s.Profile.OpenProfile).Insert(this.OpenProfile, this), s.EventSystem.Event(s.Profile.OpenAvatarEditor).Insert(this.OpenAvatarEditor, this), s.EventSystem.Event(s.Profile.ClearSelfUpdateCDTime).Insert(this.ClearSelfUpdateCDTime, this), s.EventSystem.Event(s.Profile.NotifyUpdatePlayerSetting).Insert(this.OnGetNotifyUpdatePlayerSetting, this), s.EventSystem.Event(s.Profile.SetLoadingNodeDisplay).Insert(this.OnSetLoadingDisplay, this), s.EventSystem.Event(s.Avatar.RequestUpdate).Insert(this.OnAvatarRequestUpdate, this), s.EventSystem.Event(s.PurchaseEvent.OnPurchaseSuccess).Insert(this.OnPurchaseSuccess, this), s.EventSystem.Event(s.Profile.UpdatePlayerAsset).Insert(this.UpdatePlayerAsset, this), s.EventSystem.Event(s.CommunityBonus.TimesUp).Insert(this.OnCommunityBonusTimesUp, this);
                let e = [];
                for (let t = 0; t < this.SoundClip.length; t++) e.push(this.SoundClip[t].name);
                n.AudioMgr.Instance.setAudioClip(this.SoundClip, e)
            }
            GetProfile(e) {
                e.PlayerData.ArkID == this.m_curQuestPlayerID && (this.unschedule(this.CheckGetData), this.m_nodeLoading.active = !1, null != e ? this.ShowProfile(e) : console.warn("GetProfile Fail!"))
            }
            OpenProfile(e, t = "", i = -1, o = -1) {
                e && "" == t && (t = SS.Network.LoginModel.LoginInfo.pin_ark_id), console.warn("ProfileMgr, OpenProfile isSelf = " + e + ", playerID = " + t + ", \u6307\u5b9a Winning = " + i + ", \u6307\u5b9a Entries = " + o + ", \u958b\u555f\u982d\u50cf\u8a2d\u5b9a\u9801\u9762 = " + this.m_isOpenAvatarEditPage), this.node.active = !0, this.m_ProfileUIMgr.SetRootActive(!0), this.m_forceWinning = i, this.m_forceEntries = o, this.m_curQuestPlayerID = t;
                let r = this.m_ProfileSystem.GetProfileData(e, t);
                null == r ? (this.m_nodeLoading.active = !0, this.scheduleOnce(this.CheckGetData, this.TIME_GETDATA_TIMEOUT)) : (this.m_nodeLoading.active = !1, this.ShowProfile(r))
            }
            setOnTop() {
                let e = this.node.parent.children,
                    t = -1;
                for (let i = 0; i < e.length; i++) t = t > e[i].getSiblingIndex() ? t : e[i].getSiblingIndex();
                t++, this.node.setSiblingIndex(t)
            }
            CheckGetData() {
                this.ClearAndClose(), console.error("profile \u8cc7\u6599\u53d6\u5f97\u5931\u6557, id = " + this.m_curQuestPlayerID), c.PopupMsgMgr.Instance.ShowPopMsg(c.PopupPriority.Info, "C66", SS.Common.GameEnvironment.CurrentGameNow, "get Profile Data Timeout")
            }
            ShowProfile(e) {
                if (this.m_curProfileData = e, -1 != this.m_forceEntries && -1 != this.m_forceWinning && (this.m_curProfileData.Entries = this.m_forceEntries, this.m_curProfileData.Winnings = this.m_forceWinning), this.m_ProfileUIMgr.Show(this.m_curProfileData, this.m_isOpenAvatarEditPage), this.m_curProfileData.PlayerData.ArkID == SS.Network.LoginModel.LoginInfo.pin_ark_id) {
                    if (!this.m_isHelpLoded) {
                        let e = this.getComponentInChildren("BeginnersGuideMgr");
                        e.active || e.onLoad(), this.m_isHelpLoded = !0
                    }
                    s.EventSystem.Event(s.BeginnersGuide.OnExit).Insert(this.OnBeginnerGuideComplete, this), s.EventSystem.Event(s.BeginnersGuide.Show).Notify("profile", !1), s.EventSystem.Event(s.Avatar.CheckExpireTime).Notify()
                }
                this.m_isOpenAvatarEditPage = !1
            }
            OpenAvatarEditor(e, t = "") {
                this.CheckCookieExist("profile_ui_beginnerguide") && (this.m_isOpenAvatarEditPage = !0), this.OpenProfile(e, t)
            }
            OnGetNotifyUpdatePlayerSetting(e) {
                SS.Network.UserClient.UserInfo.avatar_id = e.FaceID, SS.Network.UserClient.UserInfo.avatar_frame_id = e.FaceFrameID, SS.Network.UserClient.UserInfo.nickname = e.NickName, SS.Network.UserClient.UserInfo.avatar_expired_time = e.FaceIDExpireTime, SS.Network.UserClient.UserInfo.avatar_frame_expired_time = e.FaceFrameIDExpireTime, this.m_ProfileSystem.SelfProfileData.PlayerData = e, this.m_ProfileUIMgr.IDCardMgr.SetAvatarIcon(e), s.EventSystem.Event(s.Avatar.CheckExpireTime).Notify()
            }
            ClearSelfUpdateCDTime() {
                this.m_ProfileSystem.ClearSelfUpdateCDTime()
            }
            OnAvatarRequestUpdate() {
                return r(this, void 0, void 0, function*() {
                    let e = SS.Network.UserClient.UserInfo.avatar_id,
                        t = SS.Network.UserClient.UserInfo.avatar_frame_id,
                        i = SS.Network.UserClient.UserInfo.nickname;
                    e && "" != e || (e = "FAC000");
                    let o = yield a.default.Instance.GetSpirte("Avatar", e);
                    if (o && s.EventSystem.Event(s.Avatar.SetFaceIcon).Notify(o), t && "" != t) {
                        let e = yield a.default.Instance.GetSpirte("Avatar", t);
                        e && s.EventSystem.Event(s.Avatar.SetFaceFrameIcon).Notify(e)
                    } else s.EventSystem.Event(s.Avatar.SetFaceFrameIcon).Notify(null);
                    this.m_ProfileSystem.SelfProfileData && (this.m_ProfileSystem.SelfProfileData.PlayerData.FaceID = SS.Network.UserClient.UserInfo.avatar_id, this.m_ProfileSystem.SelfProfileData.PlayerData.FaceFrameID = SS.Network.UserClient.UserInfo.avatar_frame_id), this.m_ProfileUIMgr.IsRootActive() && this.m_curProfileData.PlayerData.IsSelf && this.m_ProfileUIMgr.IDCardMgr.SetAvatarIcon(this.m_ProfileSystem.SelfProfileData.PlayerData), s.EventSystem.Event(s.Avatar.SetNickname).Notify(i), s.EventSystem.Event(s.Avatar.CheckExpireTime).Notify()
                })
            }
            OnPurchaseSuccess(e, t) {
                null != this.m_curProfileData && this.m_curProfileData.PlayerData.IsSelf && this.UpdatePlayerAsset(e, t)
            }
            UpdatePlayerAsset(e, t, i = !0, o = "") {
                if (i) null != this.m_ProfileSystem.SelfProfileData && (this.m_ProfileSystem.SelfProfileData.Winnings = e, this.m_ProfileSystem.SelfProfileData.Entries = t, this.m_ProfileUIMgr.IDCardMgr.SetAssets(e, t));
                else if ("" != o) {
                    let i = this.m_ProfileSystem.GetOtherPlayerData(o);
                    i && (i.Winnings = e, i.Entries = t, this.m_ProfileUIMgr.IDCardMgr.SetAssets(e, t))
                }
            }
            OnClickPlayer(e) {
                console.log("OnClickPlayer, \u8df3\u8f49 ID = " + e + ", \u7576\u524d\u73a9\u5bb6 ID = " + this.m_curProfileData.PlayerData.ArkID), e != this.m_curProfileData.PlayerData.ArkID && (0 == this.m_isJumpToAnotherProfile && (this.m_tmpProfileData = this.m_ProfileSystem.SelfProfileData, null != this.m_tmpProfileData && this.m_tmpProfileData.PlayerData.ArkID != this.m_curProfileData.PlayerData.ArkID && (this.m_tmpProfileData = null)), this.m_isJumpToAnotherProfile = !0, this.m_nodeLoading.active = !0, this.OpenProfile(!1, e))
            }
            OnClose(e = !0) {
                this.m_tmpProfileData && e ? (this.m_ProfileUIMgr.Show(this.m_tmpProfileData), this.m_curProfileData = this.m_tmpProfileData, this.m_forceEntries = -1, this.m_forceWinning = -1, this.m_tmpProfileData = null, this.m_isJumpToAnotherProfile = !1) : this.ClearAndClose()
            }
            ClearAndClose() {
                this.m_forceEntries = -1, this.m_forceWinning = -1, this.m_curProfileData = null, this.m_tmpProfileData = null, this.m_isOpenAvatarEditPage = !1, this.m_isJumpToAnotherProfile = !1, this.unschedule(this.CheckGetData), s.EventSystem.Event(s.BeginnersGuide.OnExit).Remove(this.OnBeginnerGuideComplete, this), this.m_nodeLoading.active = !1, this.m_ProfileUIMgr.Clear()
            }
            OnCommunityBonusTimesUp() {
                this.m_ProfileUIMgr.IsRootActive() && this.ClearAndClose()
            }
            OnSetLoadingDisplay(e) {
                this.m_nodeLoading.active = e
            }
            OnCallBeginnerGuideShow() {
                s.EventSystem.Event(s.BeginnersGuide.OnExit).Remove(this.OnBeginnerGuideComplete, this), s.EventSystem.Event(s.BeginnersGuide.OnExit).Insert(this.OnBeginnerGuideComplete, this), s.EventSystem.Event(s.BeginnersGuide.Show).Notify("profile", !0)
            }
            OnBeginnerGuideComplete(e, t, i) {
                console.warn("[111]" + t.name + ">> OnBeginnerGuildComplete!! " + e + "(" + i + ")"), "profile" == e && (s.EventSystem.Event(s.BeginnersGuide.OnExit).Remove(this.OnBeginnerGuideComplete, this), i || this.m_ProfileUIMgr.CloseOpenHelp())
            }
            CheckCookieExist(e) {
                let t = "";
                return JSUtility.IsSupportLocalStorage() ? t = localStorage.getItem(e) : JSUtility.IsSupportCookie() && (t = JSUtility.GetCookie(e)), null != t
            }
        };
        o([p(d.ProfileUIMgr)], u.prototype, "m_ProfileUIMgr", void 0), o([p(h.ProfileSystem)], u.prototype, "m_ProfileSystem", void 0), o([p(cc.Node)], u.prototype, "m_nodeLoading", void 0), o([p({
            type: [cc.AudioClip]
        })], u.prototype, "SoundClip", void 0), u = o([m], u), i.ProfileMgr = u, cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0,
        "../../../Component/BundleCtrl": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../ModuleBase": void 0,
        "../../../PopupMessage/Script/PopupMsgMgr": void 0,
        "./ProfileSystem": "ProfileSystem",
        "./ProfileUIMgr": "ProfileUIMgr"
    }],
    ProfileRecordMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "052daBjnclAGJnZnDuhvr0c", "ProfileRecordMgr");
        var o = this && this.__decorate || function(e, t, i, o) {
            var r, n = arguments.length,
                a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
            else
                for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
            return n > 3 && a && Object.defineProperty(t, i, a), a
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.ProfileRecordMgr = void 0;
        const r = e("../../../Component/AudioMgr"),
            n = e("./ProfileData"),
            a = e("./ProfileFavoriteGameCtrl"),
            s = e("./ProfileRecordUnitCtrl"),
            l = e("./ProfileRecoreBestPopupCtrl"),
            c = e("./ProfileRecoreSelfPopupCtrl"),
            {
                ccclass: h,
                property: d
            } = cc._decorator;
        let m = class extends cc.Component {
            constructor() {
                super(...arguments), this.funcClickPlayer = null, this.m_FavoriteGameCtrl = null, this.m_RecoreSelfPopupCtrl = null, this.m_RecoreBestPopupCtrl = null, this.m_RecoreTotalWinCtrl = null, this.m_RecoreMaxJPCtrl = null, this.m_RecoreMaxSlotCtrl = null, this.m_RecoreMaxFishCtrl = null, this.m_BtnHidePopup = null, this.m_v2TmpPos = cc.Vec2.ZERO
            }
            get FavoriteGameCtrl() {
                return this.m_FavoriteGameCtrl
            }
            _onLoad() {
                this.m_FavoriteGameCtrl._onLoad(), this.m_RecoreSelfPopupCtrl._onLoad(), this.m_RecoreBestPopupCtrl._onLoad(), this.m_RecoreTotalWinCtrl._onLoad(), this.m_RecoreMaxJPCtrl._onLoad(), this.m_RecoreMaxSlotCtrl._onLoad(), this.m_RecoreMaxFishCtrl._onLoad()
            }
            _onDestroy() {
                this.m_FavoriteGameCtrl && this.m_FavoriteGameCtrl._onDestroy(), this.m_RecoreSelfPopupCtrl && this.m_RecoreSelfPopupCtrl._onDestroy(), this.m_RecoreBestPopupCtrl && this.m_RecoreBestPopupCtrl._onDestroy(), this.m_RecoreTotalWinCtrl && this.m_RecoreTotalWinCtrl._onDestroy(), this.m_RecoreMaxJPCtrl && this.m_RecoreMaxJPCtrl._onDestroy(), this.m_RecoreMaxSlotCtrl && this.m_RecoreMaxSlotCtrl._onDestroy(), this.m_RecoreMaxFishCtrl && this.m_RecoreMaxFishCtrl._onDestroy(), this.funcClickPlayer = null, this.m_RecoreTotalWinCtrl = null, this.m_RecoreMaxJPCtrl = null, this.m_RecoreMaxSlotCtrl = null, this.m_RecoreMaxFishCtrl = null, this.m_FavoriteGameCtrl = null, this.m_RecoreSelfPopupCtrl = null, this.m_RecoreBestPopupCtrl = null, this.m_BtnHidePopup = null
            }
            Init() {
                this.m_FavoriteGameCtrl.Init(), this.m_RecoreSelfPopupCtrl.Init(), this.m_RecoreBestPopupCtrl.Init(), this.UnitInit(this.m_RecoreTotalWinCtrl), this.UnitInit(this.m_RecoreMaxJPCtrl), this.UnitInit(this.m_RecoreMaxSlotCtrl), this.UnitInit(this.m_RecoreMaxFishCtrl), this.m_FavoriteGameCtrl.funcClickShowHot = this.OnShowHotGame.bind(this), this.m_RecoreBestPopupCtrl.funcClickPlayer = this.OnClickPlayer.bind(this), this.m_BtnHidePopup.node.active = !1
            }
            UnitInit(e) {
                e.Init(), e.funcSelfClicked = this.OnShowSelfPopup.bind(this), e.funcBestClicked = this.OnShowBestPopup.bind(this)
                e.Hide()
            }
            Show(e) {
                this.m_FavoriteGameCtrl.UpdateFavoriteGameData(e.FavoriteGameAry), this.m_FavoriteGameCtrl.UpdateHotGameData(e.RecordData.HotGameAry), this.m_RecoreTotalWinCtrl.UpdateData(e.RecordData.RecordTotalWin), this.m_RecoreMaxJPCtrl.UpdateData(e.RecordData.RecordMaxJPWin), this.m_RecoreMaxSlotCtrl.UpdateData(e.RecordData.RecordMaxSlotMultiple), this.m_RecoreMaxFishCtrl.UpdateData(e.RecordData.RecordMaxFishMultiple)
            }
            OnShowSelfPopup(e, t, i) {
                this.OnHideOhterPopup(2), this.m_v2TmpPos.y = e, this.m_RecoreSelfPopupCtrl.node.setPosition(this.m_v2TmpPos), this.m_RecoreSelfPopupCtrl.Show(t, i), r.AudioMgr.Instance.Play(n.ProfileSoundClip.BtnShowSelfValue, !1, 1)
            }
            OnShowBestPopup(e, t, i) {
                this.OnHideOhterPopup(3), this.m_v2TmpPos.y = e, this.m_RecoreBestPopupCtrl.node.setPosition(this.m_v2TmpPos), this.m_RecoreBestPopupCtrl.Show(t, i), r.AudioMgr.Instance.Play(n.ProfileSoundClip.BtnShowBest, !1, 1)
            }
            OnShowHotGame() {
                this.OnHideOhterPopup(1)
            }
            OnClickPlayer(e) {
                "" != e && (this.OnHideAllPopup(), this.funcClickPlayer && this.funcClickPlayer(e))
            }
            OnHideAllPopup() {
                this.m_RecoreBestPopupCtrl.Hide(), this.m_RecoreSelfPopupCtrl.Hide(), this.m_FavoriteGameCtrl.HideHotGame(), this.m_BtnHidePopup.node.active = !1
            }
            OnHideOhterPopup(e = 0) {
                switch (e) {
                    case 1:
                        this.m_RecoreBestPopupCtrl.Hide(), this.m_RecoreSelfPopupCtrl.Hide();
                        break;
                    case 2:
                        this.m_RecoreBestPopupCtrl.Hide(), this.m_FavoriteGameCtrl.HideHotGame();
                        break;
                    case 3:
                        this.m_RecoreSelfPopupCtrl.Hide(), this.m_FavoriteGameCtrl.HideHotGame()
                }
                this.m_BtnHidePopup.node.active = !0
            }
            Clear() {
                this.OnHideAllPopup(), this.m_RecoreTotalWinCtrl.Clear(), this.m_RecoreMaxJPCtrl.Clear(), this.m_RecoreMaxSlotCtrl.Clear(), this.m_RecoreMaxFishCtrl.Clear(), this.m_FavoriteGameCtrl.Clear()
            }
        };
        o([d(a.ProfileFavoriteGameCtrl)], m.prototype, "m_FavoriteGameCtrl", void 0), o([d(c.ProfileRecoreSelfPopupCtrl)], m.prototype, "m_RecoreSelfPopupCtrl", void 0), o([d(l.ProfileRecoreBestPopupCtrl)], m.prototype, "m_RecoreBestPopupCtrl", void 0), o([d(s.ProfileRecordUnitCtrl)], m.prototype, "m_RecoreTotalWinCtrl", void 0), o([d(s.ProfileRecordUnitCtrl)], m.prototype, "m_RecoreMaxJPCtrl", void 0), o([d(s.ProfileRecordUnitCtrl)], m.prototype, "m_RecoreMaxSlotCtrl", void 0), o([d(s.ProfileRecordUnitCtrl)], m.prototype, "m_RecoreMaxFishCtrl", void 0), o([d(cc.Button)], m.prototype, "m_BtnHidePopup", void 0), m = o([h], m), i.ProfileRecordMgr = m, cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0,
        "./ProfileData": "ProfileData",
        "./ProfileFavoriteGameCtrl": "ProfileFavoriteGameCtrl",
        "./ProfileRecordUnitCtrl": "ProfileRecordUnitCtrl",
        "./ProfileRecoreBestPopupCtrl": "ProfileRecoreBestPopupCtrl",
        "./ProfileRecoreSelfPopupCtrl": "ProfileRecoreSelfPopupCtrl"
    }],
    ProfileRecordUnitCtrl: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "617dfdbkoFBrKrEH48OlMWO", "ProfileRecordUnitCtrl");
        var o = this && this.__decorate || function(e, t, i, o) {
            var r, n = arguments.length,
                a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
            else
                for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
            return n > 3 && a && Object.defineProperty(t, i, a), a
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.ProfileRecordUnitCtrl = void 0;
        const r = e("../../../Net/ClickLog"),
            n = e("../../../Net/ClickLogEnum"),
            a = e("./ProfileData"),
            {
                ccclass: s,
                property: l
            } = cc._decorator;
        let c = class extends cc.Component {
            constructor() {
                super(...arguments), this.funcSelfClicked = null, this.funcBestClicked = null, this.m_labCurValue = null, this.m_Type = a.ProfileRecordUnitType.TotalWin, this.m_recordData = null, this.m_posY = 0
            }
            get Type() {
                return this.m_Type
            }
            _onLoad() {}
            _onDestroy() {
                this.funcSelfClicked = null, this.funcBestClicked = null, this.m_recordData = null
            }
            Init() {
                this.m_labCurValue.string = "", this.m_recordData = null, this.m_posY = this.node.getPosition().y
            }
            UpdateData(e) {
                if (this.m_recordData != e) switch (this.m_labCurValue.spacingX = -1 == e.MaxValue ? 10 : -4, this.m_Type) {
                    case a.ProfileRecordUnitType.BiggestJp:
                    case a.ProfileRecordUnitType.TotalWin:
                        this.m_labCurValue.string = -1 == e.MaxValue ? "$-" : "$ " + e.MaxValue.toLocaleString("en-US", {
                            maximumFractionDigits: 2
                        });
                        break;
                    case a.ProfileRecordUnitType.MaxSlotMultiple:
                    case a.ProfileRecordUnitType.MaxFishMultiple:
                        this.m_labCurValue.fontSize = -1 == e.MaxValue ? 32 : 40, this.m_labCurValue.string = -1 == e.MaxValue ? "X-" : "X " + SS.Common.BaseFunction.addCommas(e.MaxValue, 0)
                }
                this.m_recordData = e
            }
            OnGuideClickBestRecordIcon() {
                this.ShowBestRecordIcon(!0)
            }
            OnClickBestRecordIcon() {
                this.ShowBestRecordIcon()
            }
            ShowBestRecordIcon(e = !1) {
                if (console.log("ProfileRecordUnitCtrl, OnClickBestRecordIcon"), this.funcBestClicked && (this.funcBestClicked(this.m_posY, this.m_Type, this.m_recordData.FirstPlayerData), !e)) {
                    let e = -1;
                    switch (this.m_recordData.RecordType) {
                        case a.ProfileRecordUnitType.TotalWin:
                            e = n.LogEvent_Button.TotalWin;
                            break;
                        case a.ProfileRecordUnitType.BiggestJp:
                            e = n.LogEvent_Button.MaxJP;
                            break;
                        case a.ProfileRecordUnitType.MaxSlotMultiple:
                            e = n.LogEvent_Button.MultiSlot;
                            break;
                        case a.ProfileRecordUnitType.MaxFishMultiple:
                            e = n.LogEvent_Button.MultiFish
                    }
                    r.ClickLog.recordClickLog(n.LogName.Profile, 0, n.LogType_Profile.Button, e)
                }
            }
            OnGuideClickSelfRecord() {
                this.ShowSelfRecord(!0)
            }
            OnClickSelfRecord() {
                this.ShowSelfRecord()
            }
            ShowSelfRecord(e = !1) {
                if (console.log("ProfileRecordUnitCtrl, OnClickSelfRecord"), this.funcSelfClicked && (this.funcSelfClicked(this.m_posY, this.m_recordData.FirstPlayerData.RecoreTitle, this.m_recordData.MaxPercent), !e)) {
                    let e = -1;
                    switch (this.m_recordData.RecordType) {
                        case a.ProfileRecordUnitType.TotalWin:
                            e = n.LogEvent_Button.TotalWin_Value;
                            break;
                        case a.ProfileRecordUnitType.BiggestJp:
                            e = n.LogEvent_Button.MaxJP_Value;
                            break;
                        case a.ProfileRecordUnitType.MaxSlotMultiple:
                            e = n.LogEvent_Button.MultiSlot_Value;
                            break;
                        case a.ProfileRecordUnitType.MaxFishMultiple:
                            e = n.LogEvent_Button.MultiFish_Value
                    }
                    r.ClickLog.recordClickLog(n.LogName.Profile, 0, n.LogType_Profile.Button, e)
                }
            }
            Clear() {
                this.m_labCurValue.string = "", this.m_recordData = null
            }
        };
        o([l(cc.Label)], c.prototype, "m_labCurValue", void 0), o([l({
            type: cc.Enum(a.ProfileRecordUnitType)
        })], c.prototype, "m_Type", void 0), c = o([s], c), i.ProfileRecordUnitCtrl = c, cc._RF.pop()
    }, {
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "./ProfileData": "ProfileData"
    }],
    ProfileRecoreBestPopupCtrl: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "a953dal0q5IU4s4+jnli5Jf", "ProfileRecoreBestPopupCtrl");
        var o = this && this.__decorate || function(e, t, i, o) {
            var r, n = arguments.length,
                a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
            else
                for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
            return n > 3 && a && Object.defineProperty(t, i, a), a
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.ProfileRecoreBestPopupCtrl = void 0;
        const r = e("../../../Component/AvatarIcon"),
            n = e("../../../Net/ClickLog"),
            a = e("../../../Net/ClickLogEnum"),
            s = e("./ProfileData"),
            {
                ccclass: l,
                property: c
            } = cc._decorator;
        let h = class extends cc.Component {
            constructor() {
                super(...arguments), this.funcClickPlayer = null, this.m_labTitle = null, this.m_labNickname = null, this.m_labBestVal = null, this.m_AvatarIcon = null, this.m_colorYellow = new cc.Color(255, 255, 140, 255), this.m_colorOrange = new cc.Color(255, 180, 100, 255), this.m_curData = null, this.m_curType = null
            }
            _onLoad() {}
            _onDestroy() {
                this.funcClickPlayer = null, this.m_labTitle = null, this.m_labNickname = null, this.m_labBestVal = null, this.m_AvatarIcon = null, this.m_curData = null, this.m_curType = null
            }
            Init() {}
            Show(e, t) {
                if (e == this.m_curType && this.node.activeInHierarchy) this.Hide();
                else {
                    switch (this.node.active = !0, this.m_curData = t, this.m_curType = e, this.m_labTitle.string = t.RecoreTitle, this.m_labNickname.string = t.NickName, e) {
                        case s.ProfileRecordUnitType.TotalWin:
                        case s.ProfileRecordUnitType.BiggestJp:
                            this.m_labBestVal.string = "$" + t.RecoreValue.toLocaleString("en-US", {
                                maximumFractionDigits: 2
                            }), this.m_labBestVal.node.color = this.m_colorYellow;
                            break;
                        case s.ProfileRecordUnitType.MaxSlotMultiple:
                        case s.ProfileRecordUnitType.MaxFishMultiple:
                            this.m_labBestVal.string = "X " + SS.Common.BaseFunction.addCommas(t.RecoreValue, 0), this.m_labBestVal.node.color = this.m_colorOrange
                    }
                    "" == t.ArkID && (this.m_labNickname.string = "-", this.m_labBestVal.string = "no data"), this.m_AvatarIcon.SetFaceByID(this.m_curData.FaceID), this.m_AvatarIcon.SetFrameByID(this.m_curData.FaceFrameID)
                }
            }
            Hide() {
                this.node.active = !1
            }
            OnClickGoBestPlayer() {
                if (console.log("OnClickGoBestPlayer, this.m_tmpData.ArkID = " + this.m_curData.ArkID), "" != this.m_curData.ArkID && this.funcClickPlayer) {
                    let e = -1;
                    switch (this.m_curData.RecordType) {
                        case s.ProfileRecordUnitType.TotalWin:
                            e = a.LogEvent_OpenOthersPanel.InProfileNo1_TotalWin;
                            break;
                        case s.ProfileRecordUnitType.BiggestJp:
                            e = a.LogEvent_OpenOthersPanel.InProfileNo1_MaxJP;
                            break;
                        case s.ProfileRecordUnitType.MaxSlotMultiple:
                            e = a.LogEvent_OpenOthersPanel.InProfileNo1_MultiSlot;
                            break;
                        case s.ProfileRecordUnitType.MaxFishMultiple:
                            e = a.LogEvent_OpenOthersPanel.InProfileNo1_MultiFish
                    }
                    n.ClickLog.recordClickLog(a.LogName.Profile, 0, a.LogType_Profile.OpenOthersPanel, e), this.funcClickPlayer(this.m_curData.ArkID), this.Hide()
                }
            }
        };
        o([c(cc.Label)], h.prototype, "m_labTitle", void 0), o([c(cc.Label)], h.prototype, "m_labNickname", void 0), o([c(cc.Label)], h.prototype, "m_labBestVal", void 0), o([c(r.default)], h.prototype, "m_AvatarIcon", void 0), h = o([l], h), i.ProfileRecoreBestPopupCtrl = h, cc._RF.pop()
    }, {
        "../../../Component/AvatarIcon": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "./ProfileData": "ProfileData"
    }],
    ProfileRecoreSelfPopupCtrl: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "844bfBYde5HxpkvTQtlGbC9", "ProfileRecoreSelfPopupCtrl");
        var o = this && this.__decorate || function(e, t, i, o) {
            var r, n = arguments.length,
                a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
            else
                for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
            return n > 3 && a && Object.defineProperty(t, i, a), a
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.ProfileRecoreSelfPopupCtrl = void 0;
        const r = e("../../../Component/AudioMgr"),
            n = e("../../../Component/NumberCountUp"),
            a = e("./ProfileData"),
            {
                ccclass: s,
                property: l
            } = cc._decorator;
        let c = class extends cc.Component {
            constructor() {
                super(...arguments), this.m_labTitle = null, this.m_CurPercentCountUp = null, this.m_nodeMinPos = null, this.m_nodeMaxPos = null, this.m_nodeProcArrow = null, this.m_iStartPosX = 0, this.m_iDistance = 0, this.m_v3Pos = cc.Vec3.ZERO, this.tween = null, this.m_iTweenDuration = .5
            }
            _onLoad() {}
            _onDestroy() {
                this.m_labTitle = null, this.m_CurPercentCountUp = null, this.m_nodeMinPos = null, this.m_nodeMaxPos = null, this.m_nodeProcArrow = null, this.tween = null
            }
            Init() {
                this.m_iStartPosX = this.m_nodeMinPos.getPosition().x, this.m_v3Pos.y = this.m_nodeProcArrow.getPosition().y, this.m_iDistance = this.m_nodeMaxPos.getPosition().x - this.m_iStartPosX, this.m_CurPercentCountUp.SetNumberFormat(!0, !1, !0)
            }
            Show(e, t) {
                this.m_labTitle.string = e, this.node.active = !0, this.tween && this.tween.stop(), this.m_v3Pos.x = this.m_iStartPosX, this.m_nodeProcArrow.setPosition(this.m_v3Pos);
                let i = .01 * this.m_iDistance * t + this.m_iStartPosX;
                this.m_v3Pos.x = i, this.tween = cc.tween(this.m_nodeProcArrow).to(this.m_iTweenDuration, {
                    position: this.m_v3Pos
                }, {
                    easing: "sineInOut"
                }).start(), this.m_CurPercentCountUp.SetNumberNow(0), this.m_CurPercentCountUp.CountUp(t, .5), t > 0 && r.AudioMgr.Instance.Play(a.ProfileSoundClip.SelfBeat, !1, 1)
            }
            Hide() {
                this.node.active = !1, this.Init()
            }
        };
        o([l(cc.Label)], c.prototype, "m_labTitle", void 0), o([l(n.NumberCountUp)], c.prototype, "m_CurPercentCountUp", void 0), o([l(cc.Node)], c.prototype, "m_nodeMinPos", void 0), o([l(cc.Node)], c.prototype, "m_nodeMaxPos", void 0), o([l(cc.Node)], c.prototype, "m_nodeProcArrow", void 0), c = o([s], c), i.ProfileRecoreSelfPopupCtrl = c, cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0,
        "../../../Component/NumberCountUp": void 0,
        "./ProfileData": "ProfileData"
    }],
    ProfileSystem: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "6865fNKuqBOIKaw54LQXCgg", "ProfileSystem");
        var o = this && this.__decorate || function(e, t, i, o) {
            var r, n = arguments.length,
                a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
            else
                for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
            return n > 3 && a && Object.defineProperty(t, i, a), a
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.ProfileSystem = void 0;
        const r = e("../../../Net/ClickLog"),
            n = e("../../../Net/ClickLogEnum"),
            a = e("../../../Net/LobbyClient"),
            s = e("../../../PopupMessage/Script/PopupMsgMgr"),
            l = e("./ProfileData"),
            {
                ccclass: c,
                property: h
            } = cc._decorator;
        let d = class extends cc.Component {
            constructor() {
                super(...arguments), this.funcGetProfile = null, this.SaveSelfProfileData = null, this.SaveOtherProfileData = [], this.SelfUpdateTimeInterval = 15, this.OtherUpdateTimeInterval = 60
            }
            get SelfProfileData() {
                return this.SaveSelfProfileData
            }
            _onLoad() {}
            _onDestroy() {
                this.funcGetProfile = null, this.SaveSelfProfileData = null, this.SaveOtherProfileData = []
            }
            Init() {}
            TestData() {
                let e = new l.ProfilePlayerData;
                e.ArkID = SS.Network.LoginModel.LoginInfo.pin_ark_id, e.NickName = "wei test", e.FaceID = "FAC002", e.FaceFrameID = "FRM001", e.IsSelf = !0;
                let t = this.CreateTestFirstPlayerData(0),
                    i = this.CreateTestFirstPlayerData(1),
                    o = this.CreateTestFirstPlayerData(2),
                    r = this.CreateTestFirstPlayerData(3),
                    n = new l.ProfileRecordData,
                    a = new l.HotGameData,
                    s = new l.HotGameData,
                    c = new l.HotGameData;
                a.GameID = "126001", a.Typt = "Slot", s.GameID = "154001", s.Typt = "Slot", c.GameID = "148001", c.Typt = "Fish", n.HotGameAry.push(a), n.HotGameAry.push(s), n.HotGameAry.push(c), n.RecordTotalWin = t, n.RecordMaxJPWin = i, n.RecordMaxSlotMultiple = o, n.RecordMaxFishMultiple = r;
                let h = new l.ProfileData;
                h.Entries = 1e3, h.Winnings = 2e3, h.FavoriteGameAry = ["100001", "172001", "154001"], h.PlayerData = e, h.RecordData = n, this.SaveSelfProfileData = h
            }
            TestOherData() {
                let e = new l.ProfilePlayerData;
                e.ArkID = "1234567", e.NickName = "this is Other", e.FaceID = "FAC001", e.FaceFrameID = "FRM001", e.IsSelf = !1;
                let t = this.CreateTestFirstPlayerData(4),
                    i = this.CreateTestFirstPlayerData(3),
                    o = this.CreateTestFirstPlayerData(2),
                    r = this.CreateTestFirstPlayerData(1),
                    n = new l.ProfileRecordData,
                    a = new l.HotGameData,
                    s = new l.HotGameData,
                    c = new l.HotGameData;
                a.GameID = "126001", a.Typt = "Slot", s.GameID = "154001", s.Typt = "Slot", c.GameID = "148001", c.Typt = "Fish", n.HotGameAry.push(a), n.HotGameAry.push(s), n.HotGameAry.push(c), n.RecordTotalWin = t, n.RecordMaxJPWin = i, n.RecordMaxSlotMultiple = o, n.RecordMaxFishMultiple = r;
                let h = new l.ProfileData;
                h.Entries = 1e4, h.Winnings = 9999, h.FavoriteGameAry = ["160001", "163001", "158001"], h.PlayerData = e, h.RecordData = n, this.SaveOtherProfileData.push(h)
            }
            CreateTestFirstPlayerData(e) {
                let t = new l.RecordFirstPlayerData;
                t.RecoreTitle = "Best Record " + e.toString(), t.RecoreValue = 1e3 * (e + 1), t.ArkID = "1234567", t.NickName = "JP first " + e.toString(), t.FaceID = "FAC003", t.FaceFrameID = "FRM001", t.IsSelf = !1;
                let i = new l.RecordPlayerData;
                return i.MaxValue = e, i.MaxPercent = 20 * (e + 1), i.FirstPlayerData = t, i
            }
            ClearSelfUpdateCDTime() {
                this.SaveSelfProfileData && (this.SaveSelfProfileData.LastUpdateTimestmp = 0)
            }
            GetProfileData(e, t) {
                let i = !0,
                    o = null;
                if (e) this.SaveSelfProfileData && ((i = this.CheckTimeUpdate(this.SaveSelfProfileData.LastUpdateTimestmp, this.SelfUpdateTimeInterval)) || (o = this.SaveSelfProfileData));
                else {
                    let e = this.GetOtherPlayerDataIndex(t);
                    if (-1 != e) {
                        let t = this.SaveOtherProfileData[e];
                        (i = this.CheckTimeUpdate(t.LastUpdateTimestmp, this.OtherUpdateTimeInterval)) || (o = t)
                    }
                }
                return i || null == o ? (this.SendGetPlayerProfileInfo(t), null) : o
            }
            GetOtherPlayerData(e) {
                return this.SaveOtherProfileData.find(t => t.PlayerData.ArkID == e)
            }
            GetOtherPlayerDataIndex(e) {
                return this.SaveOtherProfileData.findIndex(t => t.PlayerData.ArkID == e)
            }
            GetNowTime() {
                return .001 * Date.now()
            }
            CheckTimeUpdate(e, t) {
                let i = this.GetNowTime() - e;
                return console.warn("CheckTimeUpdate \u6642\u9593\u9593\u9694 = " + i), i >= t
            }
            SendGetPlayerProfileInfo(e, t = null) {
                console.warn("SendGetPlayerProfileInfo : playerID = " + e), a.LobbyClient.Instance.GetUserClient.GetProfileInfo(e, this.RecvProfileInfo.bind(this))
            }
            RecvProfileInfo(e, t) {
                console.warn("RecvProfileInfo : " + e), console.warn(t), e == ArkSDK.HttpResult.OK && t && t.cmd_data ? 0 == t.cmd_data.result ? t.cmd_data.hasOwnProperty("data") && this.PasreProfileData(t.cmd_data.data) : this.funcGetProfile && this.funcGetProfile(null) : (this.funcGetProfile && this.funcGetProfile(null), this.CheckCommonError(e))
            }
            PasreProfileData(e) {
                let t = new l.ProfilePlayerData,
                    i = e.player_data;
                t.ArkID = i.ark_id, t.NickName = i.nickname, t.FaceID = i.avatar_id, t.FaceFrameID = i.avatar_frame_id, t.FaceIDExpireTime = -1 == i.avatar_expired_time ? -1 : Date.parse(i.avatar_expired_time + "Z"), t.FaceFrameIDExpireTime = -1 == i.avatar_frame_expired_time ? -1 : Date.parse(i.avatar_frame_expired_time + "Z"), t.IsSelf = t.ArkID == SS.Network.LoginModel.LoginInfo.pin_ark_id;
                let o = new l.ProfileRecordData,
                    r = e.hot_game;
                for (let c = 0; c < r.length; c++) {
                    let e = r[c],
                        t = new l.HotGameData;
                    t.GameID = e.game_id, t.Typt = e.game_type, o.HotGameAry.push(t)
                }
                let n = e.record_data;
                for (let c = 0; c < n.length; c++) {
                    let e = n[c],
                        t = new l.RecordPlayerData;
                    t.RecordType = e.record_type, null != e.record_value && (t.MaxValue = e.record_value), null != e.record_percent && (t.MaxPercent = e.record_percent);
                    let i = new l.RecordFirstPlayerData,
                        r = e.best_record_info.player_data;
                    switch (null != r && (i.ArkID = r.ark_id, i.NickName = r.nickname, i.FaceID = r.avatar_id, i.FaceFrameID = r.avatar_frame_id, i.RecoreValue = e.best_record_info.record_value, i.RecordType = t.RecordType), t.FirstPlayerData = i, t.RecordType) {
                        case l.ProfileRecordUnitType.TotalWin:
                            i.RecoreTitle = "Big Winner", o.RecordTotalWin = t;
                            break;
                        case l.ProfileRecordUnitType.BiggestJp:
                            i.RecoreTitle = "Jackpot King", o.RecordMaxJPWin = t;
                            break;
                        case l.ProfileRecordUnitType.MaxSlotMultiple:
                            i.RecoreTitle = "Grand Champion", o.RecordMaxSlotMultiple = t;
                            break;
                        case l.ProfileRecordUnitType.MaxFishMultiple:
                            i.RecoreTitle = "Fish King", o.RecordMaxFishMultiple = t
                    }
                }
                let a = new l.ProfileData,
                    s = e.player_asset;
                if (a.Winnings = s.winnings, a.Entries = s.entries, a.FavoriteGameAry = e.favorite_game, a.PlayerData = t, a.RecordData = o, a.LastUpdateTimestmp = this.GetNowTime(), t.IsSelf) this.SaveSelfProfileData = a, SS.Network.UserClient.UserInfo.avatar_id = a.PlayerData.FaceID, SS.Network.UserClient.UserInfo.avatar_frame_id = a.PlayerData.FaceFrameID, SS.Network.UserClient.UserInfo.avatar_expired_time = a.PlayerData.FaceIDExpireTime, SS.Network.UserClient.UserInfo.avatar_frame_expired_time = a.PlayerData.FaceFrameIDExpireTime, SS.Network.UserClient.UserInfo.nickname = a.PlayerData.NickName;
                else {
                    let e = this.GetOtherPlayerDataIndex(t.ArkID); - 1 != e ? this.SaveOtherProfileData[e] = a : this.SaveOtherProfileData.push(a)
                }
                this.funcGetProfile && this.funcGetProfile(a)
            }
            CheckCommonError(e) {
                let t = !0;
                return e == ArkSDK.HttpResult.Abort ? this.ShowError("S397", "ERROR Status:" + e) : e == ArkSDK.HttpResult.Condition ? this.ShowError("S398", "ERROR Status:" + e) : e == ArkSDK.HttpResult.Error ? this.ShowError("S399", "ERROR Status:" + e) : e == ArkSDK.HttpResult.NotReset ? this.ShowError("S400", "ERROR Status:" + e) : e == ArkSDK.HttpResult.Status ? this.ShowError("S401", "ERROR Status:" + e) : e == ArkSDK.HttpResult.Timeout ? this.ShowError("S402", "ERROR Status:" + e) : t = !1, -39 == e ? r.ClickLog.recordClickLog(n.LogName.Profile, -1, n.LogType_Profile.Nickname, n.LogEvent_Nickname.Failed_Duplicate) : -40 == e ? r.ClickLog.recordClickLog(n.LogName.Profile, -1, n.LogType_Profile.Nickname, n.LogEvent_Nickname.Failed_TooLong) : -42 == e && r.ClickLog.recordClickLog(n.LogName.Profile, -1, n.LogType_Profile.Nickname, n.LogEvent_Nickname.Failed_BannedWords), t
            }
            ShowError(e, t) {
                console.error("[AvatarSetting]ERROR!" + e + " ; reason: " + t), s.PopupMsgMgr.Instance.ShowPopMsg(s.PopupPriority.Critical, e, SS.Common.GameEnvironment.CurrentGameNow, t)
            }
        };
        d = o([c], d), i.ProfileSystem = d, cc._RF.pop()
    }, {
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "../../../Net/LobbyClient": void 0,
        "../../../PopupMessage/Script/PopupMsgMgr": void 0,
        "./ProfileData": "ProfileData"
    }],
    ProfileTabMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "98c4bqOv29EpKk+doKYS672", "ProfileTabMgr");
        var o = this && this.__decorate || function(e, t, i, o) {
            var r, n = arguments.length,
                a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
            else
                for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
            return n > 3 && a && Object.defineProperty(t, i, a), a
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.ProfileTabMgr = void 0;
        const r = e("./ProfileTab"),
            {
                ccclass: n,
                property: a
            } = cc._decorator;
        let s = class extends cc.Component {
            constructor() {
                super(...arguments), this.funcClicked = null, this.m_nodeRoot = null, this.m_scrollView = null, this.m_layout = null, this.m_aryTabs = [], this.m_strCurFocusType = ""
            }
            isShowing() {
                return this.m_nodeRoot.active
            }
            length() {
                return this.m_aryTabs.length
            }
            _onLoad() {}
            _onDestroy() {
                this.Clear(), this.m_aryTabs = []
            }
            Init() {
                for (let e = 0; e < this.m_aryTabs.length; e++) this.m_aryTabs[e].m_funcClicked = this.OnClick.bind(this)
            }
            Clear() {
                this.m_strCurFocusType = ""
            }
            OnClick(e) {
                if (e.type == this.m_strCurFocusType) return;
                e.SetFocus(this.m_aryTabs.length);
                let t = this.m_aryTabs.find(e => e.type == this.m_strCurFocusType);
                null != t && t.SetNormal(), this.m_strCurFocusType = e.type, null != this.funcClicked && this.funcClicked(e.type)
            }
        };
        o([a(cc.Node)], s.prototype, "m_nodeRoot", void 0), o([a(cc.ScrollView)], s.prototype, "m_scrollView", void 0), o([a(cc.Layout)], s.prototype, "m_layout", void 0), o([a([r.default])], s.prototype, "m_aryTabs", void 0), s = o([n], s), i.ProfileTabMgr = s, cc._RF.pop()
    }, {
        "./ProfileTab": "ProfileTab"
    }],
    ProfileTab: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "0066aulL+hMjJPawpwXPTKt", "ProfileTab");
        var o = this && this.__decorate || function(e, t, i, o) {
            var r, n = arguments.length,
                a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
            else
                for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
            return n > 3 && a && Object.defineProperty(t, i, a), a
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const {
            ccclass: r,
            property: n
        } = cc._decorator;
        let a = class extends cc.Component {
            constructor() {
                super(...arguments), this.index = -1, this.type = "", this.m_nodeNormal = null, this.m_txtNormal = null, this.m_sizeNormal = cc.Size.ZERO.clone(), this.m_nodeFocus = null, this.m_txtFocus = null, this.m_sizeFocus = cc.Size.ZERO.clone(), this.m_nodeRedPoint = null, this.m_btn = null, this.m_isChangeSiblingIndex = !0, this.m_funcClicked = null
            }
            SetNormal() {
                this.m_nodeFocus.active = !1, this.m_nodeNormal.active = !0, this.m_sizeNormal && this.node.setContentSize(this.m_sizeNormal), this.m_isChangeSiblingIndex && this.node.setSiblingIndex(this.index)
            }
            SetFocus(e = 99) {
                this.m_nodeFocus.active = !0, this.m_nodeNormal.active = !1, this.m_sizeFocus && this.node.setContentSize(this.m_sizeFocus), this.m_isChangeSiblingIndex && this.node.setSiblingIndex(e)
            }
            ShowRedPoint() {
                this.m_nodeRedPoint.active = !0
            }
            HideRedPoint() {
                this.m_nodeRedPoint.active = !1
            }
            OnClick() {
                this.m_nodeFocus.active || null != this.m_funcClicked && this.m_funcClicked(this)
            }
        };
        o([n(cc.Node)], a.prototype, "m_nodeNormal", void 0), o([n(cc.Label)], a.prototype, "m_txtNormal", void 0), o([n(cc.Size)], a.prototype, "m_sizeNormal", void 0), o([n(cc.Node)], a.prototype, "m_nodeFocus", void 0), o([n(cc.Label)], a.prototype, "m_txtFocus", void 0), o([n(cc.Size)], a.prototype, "m_sizeFocus", void 0), o([n(cc.Node)], a.prototype, "m_nodeRedPoint", void 0), o([n(cc.Button)], a.prototype, "m_btn", void 0), o([n], a.prototype, "m_isChangeSiblingIndex", void 0), a = o([r], a), i.default = a, cc._RF.pop()
    }, {}],
    ProfileUIMgr: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "86edfnt9TFJBb2URt5OlPjZ", "ProfileUIMgr");
        var o = this && this.__decorate || function(e, t, i, o) {
            var r, n = arguments.length,
                a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
            else
                for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
            return n > 3 && a && Object.defineProperty(t, i, a), a
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.ProfileUIMgr = void 0;
        const r = e("../../../Component/AudioMgr"),
            n = e("../../../Helper/EventSystem"),
            a = e("../../../Net/ClickLog"),
            s = e("../../../Net/ClickLogEnum"),
            l = e("./ProfileData"),
            c = e("./ProfileIDCardMgr"),
            h = e("./ProfileRecordMgr"),
            d = e("./ProfileTabMgr"),
            {
                ccclass: m,
                property: p
            } = cc._decorator;
        let u = class extends cc.Component {
            constructor() {
                super(...arguments), this.funcOnCallHelp = null, this.funOnClose = null, this.m_Root = null, this.m_TabMgr = null, this.m_IDCardMgr = null, this.m_RecordMgr = null, this.m_curTabIndex = 0, this.m_sCurGameName = ""
            }
            get IDCardMgr() {
                return this.m_IDCardMgr
            }
            get RecordMgr() {
                return this.m_RecordMgr
            }
            _onLoad() {
                this.m_TabMgr._onLoad(), this.m_RecordMgr._onLoad(), this.m_IDCardMgr._onLoad()
            }
            _onDestroy() {
                this.m_TabMgr._onDestroy(), this.m_RecordMgr._onDestroy(), this.m_IDCardMgr._onDestroy()
            }
            Init() {
                this.m_TabMgr.Init(), this.m_TabMgr.funcClicked = this.OnTabClick.bind(this), this.m_RecordMgr.Init(), this.m_RecordMgr.FavoriteGameCtrl.funcClickGame = this.OnGameClick.bind(this), this.m_IDCardMgr.Init(), this.m_Root.active = !1
            }
            Show(e, t = !1) {
                r.AudioMgr.Instance.Play(l.ProfileSoundClip.OpenProfile, !1, 1), this.m_Root.active = !0, this.m_IDCardMgr.Show(e, t), this.m_RecordMgr.Show(e)
            }
            SetRootActive(e) {
                this.m_Root.active = e
            }
            IsRootActive() {
                return this.m_Root.activeInHierarchy
            }
            OnTabClick(e) {
                r.AudioMgr.Instance.Play(l.ProfileSoundClip.BtnTab, !1, 1), this.m_curTabIndex = 0, this.ShowCategoryContent(e)
            }
            ShowCategoryContent(e, t = !1) {}
            OnGameClick(e) {
                console.log("[ProfileUIMgr] %c OnGameClick gameName = ", "font-size:18px;font-weight:bold;color:orange;", e), r.AudioMgr.Instance.Play(l.ProfileSoundClip.BtnGame, !1, 1), n.EventSystem.Event(n.SwitchGame).Notify(e), this.Close(!1)
            }
            OnClose() {
                r.AudioMgr.Instance.Play(l.ProfileSoundClip.BtnX, !1, 1), this.Close()
            }
            Close(e = !0) {
                this.funOnClose && this.funOnClose(e)
            }
            Clear() {
                this.m_RecordMgr.Clear(), this.m_IDCardMgr.Clear(), this.SetRootActive(!1)
            }
            OnClickHelp() {
                this.funcOnCallHelp && this.funcOnCallHelp(), this.m_IDCardMgr.m_forceOpenHelpInSettingUI = !0, a.ClickLog.recordClickLog(s.LogName.Profile, 0, s.LogType_Profile.Button, s.LogEvent_Button.Guide)
            }
            CloseOpenHelp() {
                r.AudioMgr.Instance.Play(l.ProfileSoundClip.BtnX, !1, 1), this.m_IDCardMgr.m_forceOpenHelpInSettingUI = !1
            }
        };
        o([p(cc.Node)], u.prototype, "m_Root", void 0), o([p(d.ProfileTabMgr)], u.prototype, "m_TabMgr", void 0), o([p(c.ProfileIDCardMgr)], u.prototype, "m_IDCardMgr", void 0), o([p(h.ProfileRecordMgr)], u.prototype, "m_RecordMgr", void 0), u = o([m], u), i.ProfileUIMgr = u, cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "./ProfileData": "ProfileData",
        "./ProfileIDCardMgr": "ProfileIDCardMgr",
        "./ProfileRecordMgr": "ProfileRecordMgr",
        "./ProfileTabMgr": "ProfileTabMgr"
    }],
    SwitchSprite: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "b0547ZrwBRGwYJzLoU3xkUQ", "SwitchSprite");
        var o = this && this.__decorate || function(e, t, i, o) {
            var r, n = arguments.length,
                a = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, i, o);
            else
                for (var s = e.length - 1; s >= 0; s--)(r = e[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(t, i, a) : r(t, i)) || a);
            return n > 3 && a && Object.defineProperty(t, i, a), a
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.SpriteFrameSetting = void 0;
        const {
            ccclass: r,
            property: n
        } = cc._decorator;
        let a = class {
            constructor() {
                this.targetSpriteFrame = null, this.key = ""
            }
        };
        o([n({
            type: cc.SpriteFrame,
            displayName: "\u5716\u7247"
        })], a.prototype, "targetSpriteFrame", void 0), o([n({
            displayName: "KEY"
        })], a.prototype, "key", void 0), a = o([r("SpriteFrameSetting")], a), i.SpriteFrameSetting = a;
        let s = class extends cc.Component {
            constructor() {
                super(...arguments), this.sprite = null, this.spriteFrameAry = []
            }
            ChangeSprite(e) {
                let t = this.spriteFrameAry.find(t => t.key == e);
                t ? this.sprite.spriteFrame = t.targetSpriteFrame : console.error("[SwitchSprite]Not Find Key: " + e)
            }
        };
        o([n(cc.Sprite)], s.prototype, "sprite", void 0), o([n([a])], s.prototype, "spriteFrameAry", void 0), s = o([r], s), i.default = s, cc._RF.pop()
    }, {}]
}, {}, ["AvatarSettingBeginnerGuide", "AvatarSettingInfo", "AvatarSettingItem", "AvatarSettingMenu", "AvatarSettingMgr", "AvatarSettingPage", "BeginnersGuideJumper", "ChangeNicknameCtrl", "EmailBindPageMgr", "ProfileData", "ProfileFavoriteGame", "ProfileFavoriteGameCtrl", "ProfileIDCardMgr", "ProfileMgr", "ProfileRecordMgr", "ProfileRecordUnitCtrl", "ProfileRecoreBestPopupCtrl", "ProfileRecoreSelfPopupCtrl", "ProfileSystem", "ProfileTab", "ProfileTabMgr", "ProfileUIMgr", "SwitchSprite"]);