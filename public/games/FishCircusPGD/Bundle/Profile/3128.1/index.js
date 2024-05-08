window.__require = function t(e, o, i) {
    function r(a, s) {
        if (!o[a]) {
            if (!e[a]) {
                var c = a.split("/");
                if (c = c[c.length - 1], !e[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!s && l) return l(c, !0);
                    if (n) return n(c, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = c
            }
            var p = o[a] = {
                exports: {}
            };
            e[a][0].call(p.exports, function(t) {
                return r(e[a][1][t] || t)
            }, p, p.exports, t, e, o, i)
        }
        return o[a].exports
    }
    for (var n = "function" == typeof __require && __require, a = 0; a < i.length; a++) r(i[a]);
    return r
}({
    AvatarSettingBeginnerGuide: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c3934iP4qpDKb/rVLaaJW+i", "AvatarSettingBeginnerGuide");
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            n = this && this.__decorate || function(t, e, o, i) {
                var r, n = arguments.length,
                    a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(e, o, a) : r(e, o)) || a);
                return n > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function(t, e, o, i) {
                return new(o || (o = Promise))(function(r, n) {
                    function a(t) {
                        try {
                            c(i.next(t))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function s(t) {
                        try {
                            c(i.throw(t))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(a, s)
                    }
                    c((i = i.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var o, i, r, n, a = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return n = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
                    return this
                }), n;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(n) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, i && (r = 2 & n[0] ? i.return : n[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, n[1])).done) return r;
                        switch (i = 0, r && (n = [2 & n[0], r.value]), n[0]) {
                            case 0:
                            case 1:
                                r = n;
                                break;
                            case 4:
                                return a.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = n[1], n = [0];
                                continue;
                            case 7:
                                n = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === n[0] && (!r || n[1] > r[0] && n[1] < r[3])) {
                                    a.label = n[1];
                                    break
                                }
                                if (6 === n[0] && a.label < r[1]) {
                                    a.label = r[1], r = n;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(n);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        n = e.call(t, a)
                    } catch (s) {
                        n = [6, s], i = 0
                    } finally {
                        o = r = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = t("../../../BeginnersGuide/BeginnersGuideMgr"),
            l = t("../../../BeginnersGuide/BeginnersGuideStepItem"),
            p = t("../../../Helper/EventSystem"),
            u = t("../../../Net/ClickLog"),
            h = t("../../../Net/ClickLogEnum"),
            f = t("./AvatarSettingMgr"),
            d = cc._decorator,
            m = d.ccclass,
            y = d.property,
            _ = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.mgr = null, e.bgMgr = null, e.showFirstFaceItem = null, e.showFaceItem = null, e.groupLayout = null, e.oringinClickIconFunction = null, e
                }
                return r(e, t), e.prototype.start = function() {
                    p.EventSystem.Event(p.BeginnersGuide.OnExit).Insert(this.ResetItemPressStatus, this)
                }, e.prototype.onDestroy = function() {
                    p.EventSystem.Event(p.BeginnersGuide.OnExit).Remove(this.ResetItemPressStatus, this)
                }, e.prototype.ShowFirstItemInfo = function() {
                    this.mgr.pageAry[0].SetAllPressStatus(!1);
                    var t = this.mgr.pageAry[0].GetFirstItem();
                    t && (1 == this.showFirstFaceItem.showNodeAry.length ? this.showFirstFaceItem.showNodeAry.unshift(t.node) : this.showFirstFaceItem.showNodeAry[0] = t.node, this.mgr.OnLongPressItem(t.name, t.infoAry, t.infoNode.convertToWorldSpaceAR(cc.Vec3.ZERO))), this.groupLayout || (this.groupLayout = this.mgr.pageAry[0].GetFirstGruop().getComponent(cc.Layout)), this.groupLayout.enabled = !1
                }, e.prototype.HideInfo = function() {
                    return a(this, void 0, void 0, function() {
                        return s(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.groupLayout.enabled = !0, this.mgr.infoCtrl.HideInfo(), [4, SS.Common.WaitForSeconds(.01)];
                                case 1:
                                    return t.sent(), this.mgr.pageAry[0].SetAllPressStatus(!0), [2]
                            }
                        })
                    })
                }, e.prototype.SetFiveItemsRootNode = function() {
                    if (0 == this.showFaceItem.showNodeAry.length) {
                        var t = this.mgr.pageAry[0].GetFirstGruop();
                        this.showFaceItem.showNodeAry.push(t)
                    }
                    this.mgr.pageAry[0].SetLayout(!1), this.oringinClickIconFunction = this.mgr.pageAry[0].clickItemFunc, this.mgr.pageAry[0].clickItemFunc = this.OnClickItem.bind(this)
                }, e.prototype.OnClickItem = function(t, e, o) {
                    this.mgr.OnClickItem(t, e, o), this.bgMgr.OnClickNext(), this.mgr.pageAry[0].SetAllPressStatus(!1), this.CheckCookieExist("avatareditor_beginnerguide") || u.ClickLog.recordClickLog(h.LogName.Profile, 0, h.LogType_Profile.Guide, h.LogEvent_Guide.Next11)
                }, e.prototype.EndFaceItem = function() {
                    this.mgr.pageAry[0].clickItemFunc = this.oringinClickIconFunction, this.mgr.pageAry[0].SetLayout(!0)
                }, e.prototype.SetNickNameChanged = function() {
                    this.mgr.nicknameCtrl.editIconNode.active ? (this.mgr.nicknameCtrl.editStartFunc = this.OnNicknameStartEdit.bind(this), this.mgr.nicknameCtrl.editEndFunc = this.OnNicknameEdited.bind(this)) : (this.bgMgr.OnClickNext(), this.bgMgr.OnClickNext())
                }, e.prototype.OnNicknameStartEdit = function() {
                    this.mgr.nicknameCtrl.editStartFunc = null, this.bgMgr.OnClickNext(), this.CheckCookieExist("avatareditor_beginnerguide") || u.ClickLog.recordClickLog(h.LogName.Profile, 0, h.LogType_Profile.Guide, h.LogEvent_Guide.Next12)
                }, e.prototype.OnNicknameEdited = function() {
                    this.mgr.nicknameCtrl.editEndFunc = null, this.bgMgr.OnClickNext()
                }, e.prototype.ResetItemPressStatus = function() {
                    this.mgr.pageAry[0].SetAllPressStatus(!0)
                }, e.prototype.CheckCookieExist = function(t) {
                    var e = "";
                    return JSUtility.IsSupportLocalStorage() ? e = localStorage.getItem(t) : JSUtility.IsSupportCookie() && (e = JSUtility.GetCookie(t)), null != e
                }, n([y(f.default)], e.prototype, "mgr", void 0), n([y(c.default)], e.prototype, "bgMgr", void 0), n([y(l.default)], e.prototype, "showFirstFaceItem", void 0), n([y(l.default)], e.prototype, "showFaceItem", void 0), n([m], e)
            }(cc.Component);
        o.default = _, cc._RF.pop()
    }, {
        "../../../BeginnersGuide/BeginnersGuideMgr": void 0,
        "../../../BeginnersGuide/BeginnersGuideStepItem": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "./AvatarSettingMgr": "AvatarSettingMgr"
    }],
    AvatarSettingInfo: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "872e4TfISJFUYjxbc7s86NP", "AvatarSettingInfo");
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            n = this && this.__decorate || function(t, e, o, i) {
                var r, n = arguments.length,
                    a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(e, o, a) : r(e, o)) || a);
                return n > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            s = a.ccclass,
            c = a.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.showDuration = 3, e.bg = null, e.titleLabel = null, e.conditionLabel = null, e.detailLabel = null, e.itemID = "", e.tween = null, e
                }
                return r(e, t), e.prototype.HideInfo = function() {
                    this.node.active = !1, this.node.opacity = 0, this.unschedule(this.PlayInfoFadeOut), this.tween && this.tween.stop().removeSelf(), this.tween = null, this.itemID = ""
                }, e.prototype.ShowInfo = function(t, e, o) {
                    this.node.position = this.node.parent.convertToNodeSpaceAR(o), console.log("[Avatar Setting][Show Info] ", e), e && 3 == e.length ? (this.titleLabel.string = e[0], this.conditionLabel.string = e[1], this.detailLabel.string = e[2], this.itemID.length > 0 && (this.unschedule(this.PlayInfoFadeOut), this.tween && this.tween.stop().removeSelf(), this.tween = null), this.node.active = !0, this.node.opacity = 255, this.itemID = t) : this.scheduleOnce(this.PlayInfoFadeOut, this.showDuration)
                }, e.prototype.PlayInfoFadeOut = function() {
                    this.node.active && (this.unschedule(this.PlayInfoFadeOut), this.tween = cc.tween(this.node).to(.25, {
                        opacity: 0
                    }).call(this.SetInfoHide.bind(this)).start())
                }, e.prototype.SetInfoHide = function() {
                    this.node.active && this.HideInfo()
                }, n([c], e.prototype, "showDuration", void 0), n([c(cc.Node)], e.prototype, "bg", void 0), n([c(cc.Label)], e.prototype, "titleLabel", void 0), n([c(cc.Label)], e.prototype, "conditionLabel", void 0), n([c(cc.Label)], e.prototype, "detailLabel", void 0), n([s], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    AvatarSettingItem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "274dfWrHqFLBYqu+vzGfZm7", "AvatarSettingItem");
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            n = this && this.__decorate || function(t, e, o, i) {
                var r, n = arguments.length,
                    a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(e, o, a) : r(e, o)) || a);
                return n > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function(t, e, o, i) {
                return new(o || (o = Promise))(function(r, n) {
                    function a(t) {
                        try {
                            c(i.next(t))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function s(t) {
                        try {
                            c(i.throw(t))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(a, s)
                    }
                    c((i = i.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var o, i, r, n, a = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return n = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
                    return this
                }), n;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(n) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, i && (r = 2 & n[0] ? i.return : n[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, n[1])).done) return r;
                        switch (i = 0, r && (n = [2 & n[0], r.value]), n[0]) {
                            case 0:
                            case 1:
                                r = n;
                                break;
                            case 4:
                                return a.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = n[1], n = [0];
                                continue;
                            case 7:
                                n = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === n[0] && (!r || n[1] > r[0] && n[1] < r[3])) {
                                    a.label = n[1];
                                    break
                                }
                                if (6 === n[0] && a.label < r[1]) {
                                    a.label = r[1], r = n;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(n);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        n = e.call(t, a)
                    } catch (s) {
                        n = [6, s], i = 0
                    } finally {
                        o = r = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = t("../../../Component/AudioMgr"),
            l = t("../../../Component/BundleCtrl"),
            p = t("../../../Component/NodeLongPress"),
            u = t("../../../Net/ClickLog"),
            h = t("../../../Net/ClickLogEnum"),
            f = t("./ProfileData"),
            d = cc._decorator,
            m = d.ccclass,
            y = d.property,
            _ = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.id = "", e.groupName = "", e.infoAry = [], e.sprtie = null, e.timeLabel = null, e.infoNode = null, e.newSprite = null, e.equipSprite = null, e.lockSprite = null, e.longPressCtrl = null, e.expiredTime = 0, e.oriExpiredTime = 0, e.isOwn = !1, e.infoShowFunc = null, e.clickFunc = null, e.timeCountDownDuration = 0, e
                }
                return r(e, t), Object.defineProperty(e.prototype, "isEquiped", {
                    get: function() {
                        return this.equipSprite.node.active
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.Init = function() {
                    this.Clear(), this.longPressCtrl.longPressFunc = this.OnLongPress.bind(this), this.longPressCtrl.clickFunc = this.OnClick.bind(this)
                }, e.prototype.Clear = function() {
                    this.node.parent = this.node.parent ? this.node.parent.parent : this.node.parent, this.id = "", this.groupName = "", this.expiredTime = 0, this.oriExpiredTime = 0, this.timeCountDownDuration = 0, this.infoAry = null, this.isOwn = !1, this.timeLabel.string = "", this.timeLabel.node.color = cc.Color.WHITE, this.sprtie.spriteFrame && (this.sprtie.spriteFrame = null), this.newSprite.node.active = !1, this.equipSprite.node.active = !1, this.lockSprite.node.active = !1, this.longPressCtrl.canClick = !1, this.clickFunc = null, this.unscheduleAllCallbacks()
                }, e.prototype.SetPress = function(t) {
                    this.longPressCtrl.canPress = t
                }, e.prototype.SetUnequip = function() {
                    this.equipSprite.node.active = !1
                }, e.prototype.SetData = function(t, e) {
                    if (this.id = t.id, this.node.name = this.id, this.SetIconSprite(), this.groupName = t.kind, this.infoAry = [this.groupName, t.get_info_1, t.get_info_2], this.SetInfoKind(t.info_kind, t.task_progress), this.expiredTime = parseFloat(t.expired_time), this.oriExpiredTime = parseFloat(t.expired_time), null != t.status) {
                        var o = t.status;
                        this.isOwn = !0, this.equipSprite.node.active = 1 == parseInt(o.slice(0, 1)), this.newSprite.node.active = 1 == parseInt(o.slice(1, 2))
                    }
                    this.isOwn ? (this.sprtie.node.color = cc.Color.WHITE, this.longPressCtrl.canClick = e, this.expiredTime > -1 && e && (this.ResetTimeLabel(), this.FirstSetTimeCountDown())) : this.SetLockStatus()
                }, e.prototype.SetIconSprite = function() {
                    return a(this, void 0, void 0, function() {
                        var t, e, o, i;
                        return s(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return [4, l.default.Instance.GetSpirte("Avatar", this.id)];
                                case 1:
                                    return t = r.sent(), this.sprtie.spriteFrame = t, e = this.equipSprite, [4, l.default.Instance.GetSpirte("Avatar", "use")];
                                case 2:
                                    return e.spriteFrame = r.sent(), o = this.newSprite, [4, l.default.Instance.GetSpirte("Avatar", "new")];
                                case 3:
                                    return o.spriteFrame = r.sent(), i = this.lockSprite, [4, l.default.Instance.GetSpirte("Avatar", "lock")];
                                case 4:
                                    return i.spriteFrame = r.sent(), [2]
                            }
                        })
                    })
                }, e.prototype.SetInfoKind = function(t, e) {
                    1 == t ? this.infoAry[1] += " " + e : 2 == t && (this.infoAry[2] = e + " " + this.infoAry[2])
                }, e.prototype.SetLockStatus = function() {
                    this.isOwn = !1, this.sprtie.node.color = cc.Color.GRAY, this.longPressCtrl.canClick = !0, this.lockSprite.node.active = !0, this.newSprite.node.active = !1, this.timeLabel.string = "", this.timeLabel.node.active = !1, this.expiredTime = 0
                }, e.prototype.FirstSetTimeCountDown = function() {
                    var t = this.expiredTime - Date.now(),
                        e = Math.floor(t / 864e5),
                        o = 1;
                    if (e > 1) o = t / 1e3 - 86400 * e;
                    else {
                        var i = t % 6e4;
                        i > 0 && (o = i - Math.floor(i))
                    }
                    this.scheduleOnce(this.OnTimeCountDown, o), this.expiredTime = this.expiredTime - 1e3 * (o + .1)
                }, e.prototype.OnTimeCountDown = function() {
                    this.SetNextCountDown(), this.schedule(this.SetNextCountDown, this.timeCountDownDuration)
                }, e.prototype.SetNextCountDown = function() {
                    this.ResetTimeLabel();
                    var t = this.expiredTime - Date.now();
                    if (t <= 0) this.unschedule(this.SetNextCountDown);
                    else {
                        if (this.timeCountDownDuration > 1) {
                            var e = 1;
                            Math.floor(t / 864e5) > 1 && (e = 86400), e < this.timeCountDownDuration && (this.unschedule(this.SetNextCountDown), this.schedule(this.SetNextCountDown, e)), this.timeCountDownDuration = e
                        }
                        this.expiredTime = this.expiredTime - 1e3 * this.timeCountDownDuration
                    }
                }, e.prototype.ResetTimeLabel = function() {
                    if (this.isOwn) {
                        var t = this.expiredTime - Date.now();
                        if (t < 1e3) return console.warn("ResetTimeLabel, ID = " + this.id + ", \u88dd\u5099\u4e2d = " + this.isEquiped), this.isEquiped && this.OnClick(!0), void this.SetLockStatus();
                        this.timeLabel.node.active = !0;
                        var e = Math.floor(t / 864e5);
                        if (e < 1) {
                            255 == this.timeLabel.node.color.b && (this.timeLabel.node.color = new cc.Color(255, 90, 90, 255));
                            var o = t % 864e5,
                                i = Math.floor(o / 36e5),
                                r = o % 36e5,
                                n = Math.floor(r / 6e4);
                            if (this.timeLabel.string = "", i > 0 && (this.timeLabel.string = i + "h"), n > 0 && (this.timeLabel.string += n + "m"), 0 == i) {
                                var a = r % 6e4,
                                    s = Math.floor(a / 1e3);
                                s > 0 && (this.timeLabel.string += s + "s")
                            }
                        } else this.timeLabel.string = e + "days"
                    }
                }, e.prototype.OnClick = function(t) {
                    void 0 === t && (t = !1), console.log("[AvatarSetting]" + this.id + " OnClick, isAutoSave = " + t), this.lockSprite.node.activeInHierarchy ? c.AudioMgr.Instance.Play(f.ProfileSoundClip.ClickItemNo, !1, 1) : (c.AudioMgr.Instance.Play(f.ProfileSoundClip.ClickItemOwn, !1, 1), this.equipSprite.node.active = !this.equipSprite.node.active, this.equipSprite.node.active ? this.clickFunc && this.clickFunc(this.id, this.sprtie.spriteFrame, t, this.oriExpiredTime) : this.clickFunc && this.clickFunc("", null, t, this.oriExpiredTime))
                }, e.prototype.OnLongPress = function(t) {
                    if (console.log("[AvatarSetting]" + this.id + " OnLongPress:" + t), this.infoShowFunc && (this.infoShowFunc(this.id, t ? this.infoAry : null, this.infoNode.convertToWorldSpaceAR(cc.Vec3.ZERO)), t)) {
                        var e = {};
                        e.Type = h.LogType_Profile.ShowRule, e.TempStr1 = this.id, u.ClickLog.recordClickLogNewVersion(h.LogName.Profile, e)
                    }
                }, n([y(cc.Sprite)], e.prototype, "sprtie", void 0), n([y(cc.Label)], e.prototype, "timeLabel", void 0), n([y(cc.Node)], e.prototype, "infoNode", void 0), n([y(cc.Sprite)], e.prototype, "newSprite", void 0), n([y(cc.Sprite)], e.prototype, "equipSprite", void 0), n([y(cc.Sprite)], e.prototype, "lockSprite", void 0), n([y(p.default)], e.prototype, "longPressCtrl", void 0), n([m], e)
            }(cc.Component);
        o.default = _, cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0,
        "../../../Component/BundleCtrl": void 0,
        "../../../Component/NodeLongPress": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "./ProfileData": "ProfileData"
    }],
    AvatarSettingMenu: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "dba7eoCW65CIYwnDKPI0+51", "AvatarSettingMenu");
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            n = this && this.__decorate || function(t, e, o, i) {
                var r, n = arguments.length,
                    a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(e, o, a) : r(e, o)) || a);
                return n > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.MenuItem = void 0;
        var a = t("../../../Component/AudioMgr"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            p = function() {
                function t() {
                    this.choosedNode = null, this.unchooseNode = null
                }
                return t.prototype.ChooseTab = function() {
                    this.choosedNode.active = !0, this.unchooseNode.active = !1
                }, t.prototype.UnchooseTab = function() {
                    this.choosedNode.active = !1, this.unchooseNode.active = !0
                }, n([l(cc.Node)], t.prototype, "choosedNode", void 0), n([l(cc.Node)], t.prototype, "unchooseNode", void 0), n([c("MenuItem")], t)
            }();
        o.MenuItem = p;
        var u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.tabAry = [], e.currentTabIndex = 0, e.clickFunc = null, e
            }
            return r(e, t), e.prototype.Init = function(t, e) {
                this.clickFunc = e, this.Reset(t)
            }, e.prototype.Reset = function(t) {
                this.currentTabIndex = t;
                for (var e = 0; e < this.tabAry.length; e++) e == t ? this.tabAry[e].ChooseTab() : this.tabAry[e].UnchooseTab()
            }, e.prototype.OnClickTab = function(t, e) {
                var o = parseInt(e);
                if (this.currentTabIndex != o) {
                    this.currentTabIndex = o;
                    for (var i = 0; i < this.tabAry.length; i++) i == o ? this.tabAry[i].ChooseTab() : this.tabAry[i].UnchooseTab();
                    this.clickFunc && this.clickFunc(o), a.AudioMgr.Instance.Play("Btn_LeftTabClick", !1, 1)
                }
            }, n([l([p])], e.prototype, "tabAry", void 0), n([c], e)
        }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0
    }],
    AvatarSettingMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "06180iDGftJb72BD5CYFGgg", "AvatarSettingMgr");
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            n = this && this.__decorate || function(t, e, o, i) {
                var r, n = arguments.length,
                    a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(e, o, a) : r(e, o)) || a);
                return n > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function(t, e, o, i) {
                return new(o || (o = Promise))(function(r, n) {
                    function a(t) {
                        try {
                            c(i.next(t))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function s(t) {
                        try {
                            c(i.throw(t))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(a, s)
                    }
                    c((i = i.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var o, i, r, n, a = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return n = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
                    return this
                }), n;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(n) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, i && (r = 2 & n[0] ? i.return : n[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, n[1])).done) return r;
                        switch (i = 0, r && (n = [2 & n[0], r.value]), n[0]) {
                            case 0:
                            case 1:
                                r = n;
                                break;
                            case 4:
                                return a.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = n[1], n = [0];
                                continue;
                            case 7:
                                n = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === n[0] && (!r || n[1] > r[0] && n[1] < r[3])) {
                                    a.label = n[1];
                                    break
                                }
                                if (6 === n[0] && a.label < r[1]) {
                                    a.label = r[1], r = n;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(n);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        n = e.call(t, a)
                    } catch (s) {
                        n = [6, s], i = 0
                    } finally {
                        o = r = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var c = t("../../../Component/AvatarIcon"),
            l = t("./AvatarSettingPage"),
            p = t("./AvatarSettingMenu"),
            u = t("./ChangeNicknameCtrl"),
            h = t("./ProfileData"),
            f = t("./SwitchSprite"),
            d = t("../../../Net/Downloader/JSONDownloder"),
            m = t("../../../PopupMessage/Script/PopupMsgMgr"),
            y = t("./AvatarSettingInfo"),
            _ = t("../../../Helper/EventSystem"),
            v = t("../../../Net/LobbyClient"),
            g = t("../../../Component/AudioMgr"),
            P = t("../../../Net/ClickLog"),
            S = t("../../../Net/ClickLogEnum"),
            C = cc._decorator,
            b = C.ccclass,
            I = C.property,
            D = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.nicknameCtrl = null, e.checkPopupNode = null, e.checkPopupNicknameLabel = null, e.nicknameErrorLabel = null, e.avatorPageRoot = null, e.infoCtrl = null, e.headCtrl = null, e.pagePrefab = null, e.tabTitleSwitch = null, e.menu = null, e.saveBtnNode = null, e.playerTitleLabel = null, e.pageAry = [], e.playerData = null, e.settingJSAry = null, e.tabKeyAry = ["photos", "frames"], e.isEditMode = !0, e.forceToShowHelp = !1, e.isHelpLoaded = !1, e.curAvatarExpiredTime = -1, e.curAvatarFrameExpiredTime = -1, e.curAvatarID = "", e.curAvatarFrameID = "", e.isAutoSave = !1, e
                }
                return r(e, t), e.prototype.Init = function() {
                    this.tabTitleSwitch.ChangeSprite("0"), this.nicknameCtrl.Init(), this.nicknameCtrl.editErrorFunc = this.OnNicknameEditError.bind(this), this.nicknameErrorLabel.string = "", this.menu.Init(0, this.OnClickMenuTab.bind(this)), this.checkPopupNode.active = !1, this.forceToShowHelp = !1, this.isHelpLoaded = !1, this.saveBtnNode.active = !1, this.saveBtnNode.scale = 1
                }, e.prototype.onDestroy = function() {
                    this.settingJSAry = null;
                    for (var t = 0; t < this.pageAry.length; t++) this.pageAry[t].Exit();
                    this.pageAry = null, this.nicknameCtrl.Exit()
                }, e.prototype.Show = function(t, e) {
                    console.warn("[111]" + this.node.name + ">> Show: " + t.ArkID + " isEditMode:" + e), this.isEditMode = e, this.SetLoadingDisplay(!0), this.SetPlayerData(t), this.nicknameCtrl.Show(this.playerData.NickName, e), this.headCtrl.SetFaceByID(t.FaceID), this.headCtrl.SetFrameByID(t.FaceFrameID), this.menu.Reset(0), this.saveBtnNode.scale = 1, this.saveBtnNode.active = !1, this.playerTitleLabel.string = e ? "Edit Personal Info" : t.NickName + "'s Personal Info", null == this.settingJSAry ? this.GetAvatarItemSetting() : this.SendInitCommand(), this.node.active = !0, g.AudioMgr.Instance.Play(h.ProfileSoundClip.OpenAvatarSetting, !1, 1)
                }, e.prototype.SetPlayerData = function(t) {
                    this.playerData || (this.playerData = new h.ProfilePlayerData), Object.assign(this.playerData, t), this.curAvatarID = t.FaceID, this.curAvatarFrameID = t.FaceFrameID, console.log("this.curAvatarID = " + this.curAvatarID + ", this.curAvatarFrameID = " + this.curAvatarFrameID)
                }, e.prototype.Hide = function() {
                    this.forceToShowHelp = !1, this.checkPopupNode.active = !1, this.node.active = !1, this.isAutoSave = !1, this.nicknameErrorLabel.string = "", this.curAvatarID = "", this.curAvatarFrameID = "", this.infoCtrl.HideInfo(), this.ClearPage()
                }, e.prototype.ClearPage = function() {
                    for (var t = 0; t < this.pageAry.length; t++) this.pageAry[t].Clear()
                }, e.prototype.SetHaveToShowHelp = function() {
                    this.forceToShowHelp = !0
                }, e.prototype.SetPages = function() {
                    return a(this, void 0, void 0, function() {
                        var t, e, o, i, r, n, a = this;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    if (console.log("[AvatarSetting]CreatePages!!", this.settingJSAry), this.pageAry && 0 != this.pageAry.length)
                                        for (o = function(t) {
                                                i.UpdatePage(i.pageAry[t], i.settingJSAry.filter(function(e) {
                                                    return e.type == a.tabKeyAry[t]
                                                })), 0 == t ? i.pageAry[t].Show() : i.pageAry[t].Hide()
                                            }, i = this, r = 0; r < this.pageAry.length; r++) o(r);
                                    else
                                        for (t = function(t) {
                                                e.CreatePage(t, e.settingJSAry.filter(function(e) {
                                                    return e.type == a.tabKeyAry[t]
                                                }))
                                            }, e = this, r = 0; r < this.tabKeyAry.length; r++) t(r);
                                    return this.isEditMode ? [4, SS.Common.WaitForSeconds(.25)] : [3, 2];
                                case 1:
                                    s.sent(), this.isHelpLoaded || ((n = this.getComponentInChildren("BeginnersGuideMgr")).active || n.onLoad(), this.isHelpLoaded = !0), _.EventSystem.Event(_.BeginnersGuide.Show).Notify("avatar_setting", this.forceToShowHelp), s.label = 2;
                                case 2:
                                    return this.SetLoadingDisplay(!1), [2]
                            }
                        })
                    })
                }, e.prototype.CreatePage = function(t, e) {
                    var o = cc.instantiate(this.pagePrefab);
                    o.parent = this.avatorPageRoot;
                    var i = o.getComponent(l.default);
                    i.Init(), i.SetRect(this.avatorPageRoot.width, this.avatorPageRoot.height), i.pageID = t, i.SetData(e, this.isEditMode), i.clickItemFunc = this.OnClickItem.bind(this), i.longPressItemFunc = this.OnLongPressItem.bind(this), i.scrollingFunc = this.OnPageScrolling.bind(this), this.pageAry.push(i), 0 == t ? i.Show() : i.Hide()
                }, e.prototype.UpdatePage = function(t, e) {
                    t.Clear(), t.SetData(e, this.isEditMode)
                }, e.prototype.ShowCheckNicknameMessage = function() {
                    this.checkPopupNicknameLabel.string = this.nicknameCtrl.nickname, this.checkPopupNode.active = !0
                }, e.prototype.SetLoadingDisplay = function(t) {
                    _.EventSystem.Event(_.Profile.SetLoadingNodeDisplay).Notify(t)
                }, e.prototype.GetAvatarItemSetting = function() {
                    (new d.JSONDownloader).Start(SS.Common.GameEnvironment.S3URL + "/Data/AvatarItemSetting.json", this.OnGetAvatarItemSetting.bind(this), this.OnDownloadSettingErr.bind(this))
                }, e.prototype.OnGetAvatarItemSetting = function(t) {
                    this.settingJSAry = t, this.SendInitCommand()
                }, e.prototype.SendInitCommand = function() {
                    this.ClearPage(), v.LobbyClient.Instance.GetUserClient.GetItemInfo(this.playerData.ArkID, this.ReceiveInitData.bind(this))
                }, e.prototype.ReceiveInitData = function(t, e) {
                    if (console.warn("[AvatarSetting]ReceiveInitData:", t, JSON.stringify(e)), 0 == t)
                        if (null != e.cmd_data && e.cmd_data) {
                            var o = e.cmd_data.data;
                            if (o)
                                if (o.ark_id == this.playerData.ArkID) {
                                    this.nicknameCtrl.Show(this.playerData.NickName, this.isEditMode && o.nickname_status);
                                    var i = o.show_items,
                                        r = o.player_items,
                                        n = 0,
                                        a = "";
                                    for (n = 0; n < i.length; n++) {
                                        a = i[n];
                                        var s = this.settingJSAry.find(function(t) {
                                            return t.id == a
                                        });
                                        if (null != s) {
                                            s.is_open = !0;
                                            var c = r.findIndex(function(t) {
                                                return t.id == a
                                            });
                                            if (c > -1) {
                                                var l = r.splice(c, 1)[0],
                                                    p = l.expired_time;
                                                "-1" != p && (p = Date.parse(p + "Z")), s.expired_time = p, s.status = l.status, s.task_progress = l.task_progress
                                            } else s.expired_time = -1, s.status = void 0, s.task_progress = void 0
                                        } else console.error("[Avatar]Server SEND Item: '" + a + "'. But Setting File No Data.")
                                    }
                                    this.SetPages()
                                } else this.ShowError("", "ARK ID is NOT MATCH!!");
                            else this.ShowError("", "'data' Data is NULL")
                        } else this.ShowError("", "'cmd_data' Data is NULL");
                    else this.CheckCommonError(t, !1)
                }, e.prototype.SendSaveCommand = function() {
                    console.warn("[AvatarSetting]SendSaveCommand"), this.isAutoSave = !1;
                    var t = {};
                    t.face_id = this.curAvatarID, t.frame_id = this.curAvatarFrameID, t.change_name_status = this.nicknameCtrl.nickname != this.playerData.NickName, v.LobbyClient.Instance.GetUserClient.ChangePlayerInfo(this.playerData.ArkID, this.nicknameCtrl.nickname, t, this.ReceiveSaveData.bind(this))
                }, e.prototype.SendAutoSaveCommand = function() {
                    console.warn("[AvatarSetting]SendAutoSaveCommand"), this.isAutoSave = !0;
                    var t = {};
                    t.face_id = this.playerData.FaceID, t.frame_id = this.playerData.FaceFrameID, t.change_name_status = !1, v.LobbyClient.Instance.GetUserClient.ChangePlayerInfo(this.playerData.ArkID, this.playerData.NickName, t, this.ReceiveSaveData.bind(this))
                }, e.prototype.ReceiveSaveData = function(t, e) {
                    if (console.warn("[AvatarSetting]ReceiveSaveData:", e), 0 == t || !this.CheckCommonError(t, !0))
                        if (null != e.cmd_data && e.cmd_data) {
                            var o = !1,
                                i = e.cmd_data;
                            if (i) {
                                i.result < 0 && this.CheckCommonError(i.result, !1);
                                var r = i.data;
                                r && r.error_msg && (this.nicknameErrorLabel.string = r.error_msg)
                            }
                            0 == this.nicknameErrorLabel.string.length && this.playerData.IsSelf ? (this.playerData.NickName = this.nicknameCtrl.nickname, this.playerData.FaceID = this.curAvatarID, this.playerData.FaceFrameID = this.curAvatarFrameID, this.playerData.FaceIDExpireTime = this.curAvatarExpiredTime, this.playerData.FaceFrameIDExpireTime = this.curAvatarFrameExpiredTime, _.EventSystem.Event(_.Profile.NotifyUpdatePlayerSetting).Notify(this.playerData)) : o = !0, this.isAutoSave || (this.checkPopupNode.active = !1, this.saveBtnNode.active = !1, o || this.Hide())
                        } else this.ShowError("S408", "'cmd_data' Data is NULL")
                }, e.prototype.OnNicknameEditError = function(t) {
                    this.nicknameErrorLabel.string = t, t.length > 0 ? this.saveBtnNode.scale = 0 : this.saveBtnNode.scale = 1, this.CheckSaveBtnActive()
                }, e.prototype.CheckSaveBtnActive = function() {
                    this.curAvatarID != this.playerData.FaceID || this.curAvatarFrameID != this.playerData.FaceFrameID || this.nicknameCtrl.nickname != this.playerData.NickName ? this.saveBtnNode.active = !0 : this.saveBtnNode.active = !1
                }, e.prototype.OnClickItem = function(t, e, o, i, r) {
                    void 0 === i && (i = !1), 0 == t ? (o ? this.headCtrl.SetFaceSprite(o) : this.headCtrl.SetFaceByID(""), this.curAvatarID = e, this.curAvatarExpiredTime = r) : 1 == t && (this.headCtrl.SetFrameSprite(o), this.curAvatarFrameID = e, this.curAvatarFrameExpiredTime = r), this.infoCtrl.HideInfo(), i ? this.SendAutoSaveCommand() : (console.log("\u7576\u524d this.playerData.FaceID =" + this.playerData.FaceID + ", \u76ee\u524d\u9078\u64c7 = " + this.curAvatarID), this.CheckSaveBtnActive())
                }, e.prototype.OnLongPressItem = function(t, e, o) {
                    this.infoCtrl.ShowInfo(t, e, o)
                }, e.prototype.OnPageScrolling = function() {
                    this.infoCtrl.HideInfo()
                }, e.prototype.OnClickMenuTab = function(t) {
                    g.AudioMgr.Instance.Play(h.ProfileSoundClip.AvatarTab, !1, 1);
                    for (var e = 0; e < this.pageAry.length; e++) e != t ? this.pageAry[e].Hide() : this.pageAry[e].Show();
                    this.tabTitleSwitch.ChangeSprite(t.toString()), this.infoCtrl.HideInfo()
                }, e.prototype.OnClickSave = function() {
                    0 != this.saveBtnNode.scale && (this.nicknameErrorLabel.string.length > 0 || (g.AudioMgr.Instance.Play(h.ProfileSoundClip.BtnSave, !1, 1), this.infoCtrl.HideInfo(), this.nicknameCtrl.nickname != this.playerData.NickName ? this.ShowCheckNicknameMessage() : this.SendSaveCommand()))
                }, e.prototype.OnClickClose = function() {
                    g.AudioMgr.Instance.Play("Btn_Select_n_v01", !1, 1), this.Hide()
                }, e.prototype.OnClickSaveOK = function() {
                    g.AudioMgr.Instance.Play(h.ProfileSoundClip.BtnSave, !1, 1), this.SendSaveCommand()
                }, e.prototype.OnClickSaveCancel = function() {
                    g.AudioMgr.Instance.Play("Btn_Select_n_v01", !1, 1), this.checkPopupNode.active = !1
                }, e.prototype.OnDownloadSettingErr = function(t) {
                    console.error("[AvatarSetting]JSON File Download Failed\n", t), this.ShowError("", "S3 Setting JSON File Download Failed"), this.Hide()
                }, e.prototype.CheckCommonError = function(t, e) {
                    var o = !0;
                    return t == ArkSDK.HttpResult.Abort ? this.ShowError("S397", "ERROR Status:" + t, m.PopupPriority.Critical) : t == ArkSDK.HttpResult.Condition ? this.ShowError("S398", "ERROR Status:" + t, m.PopupPriority.Critical) : t == ArkSDK.HttpResult.Error ? this.ShowError("S399", "ERROR Status:" + t, m.PopupPriority.Critical) : t == ArkSDK.HttpResult.NotReset ? this.ShowError("S400", "ERROR Status:" + t, m.PopupPriority.Critical) : t == ArkSDK.HttpResult.Status ? this.ShowError("S401", "ERROR Status:" + t, m.PopupPriority.Critical) : t == ArkSDK.HttpResult.Timeout ? this.ShowError("S402", "ERROR Status:" + t, m.PopupPriority.Critical) : -1 == t ? this.ShowError(e ? "S405" : "S403", "ERROR Status:" + t) : -9 == t ? this.ShowError(e ? "S406" : "S404", "ERROR Status:" + t) : -41 == t ? this.ShowError("S407", "ERROR Status:" + t) : -47 == t ? this.ShowError("S408", "ERROR Status:" + t) : o = !1, -39 == t ? P.ClickLog.recordClickLog(S.LogName.Profile, -1, S.LogType_Profile.Nickname, S.LogEvent_Nickname.Failed_Duplicate) : -40 == t ? P.ClickLog.recordClickLog(S.LogName.Profile, -1, S.LogType_Profile.Nickname, S.LogEvent_Nickname.Failed_TooLong) : -42 == t && P.ClickLog.recordClickLog(S.LogName.Profile, -1, S.LogType_Profile.Nickname, S.LogEvent_Nickname.Failed_BannedWords), o
                }, e.prototype.ShowError = function(t, e, o) {
                    void 0 === o && (o = m.PopupPriority.Info), console.error("[AvatarSetting]ERROR!" + t + " ; reason: " + e), m.PopupMsgMgr.Instance.ShowPopMsg(o, t, SS.Common.GameEnvironment.CurrentGameNow, e)
                }, n([I(u.default)], e.prototype, "nicknameCtrl", void 0), n([I(cc.Node)], e.prototype, "checkPopupNode", void 0), n([I(cc.Label)], e.prototype, "checkPopupNicknameLabel", void 0), n([I(cc.Label)], e.prototype, "nicknameErrorLabel", void 0), n([I(cc.Node)], e.prototype, "avatorPageRoot", void 0), n([I(y.default)], e.prototype, "infoCtrl", void 0), n([I(c.default)], e.prototype, "headCtrl", void 0), n([I(cc.Prefab)], e.prototype, "pagePrefab", void 0), n([I(f.default)], e.prototype, "tabTitleSwitch", void 0), n([I(p.default)], e.prototype, "menu", void 0), n([I(cc.Node)], e.prototype, "saveBtnNode", void 0), n([I(cc.Label)], e.prototype, "playerTitleLabel", void 0), n([b], e)
            }(cc.Component);
        o.default = D, cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0,
        "../../../Component/AvatarIcon": void 0,
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
    AvatarSettingPage: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ce98cJVzk9C14NQ1NZBnUNl", "AvatarSettingPage");
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            n = this && this.__decorate || function(t, e, o, i) {
                var r, n = arguments.length,
                    a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(e, o, a) : r(e, o)) || a);
                return n > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("./AvatarSettingItem"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.pageID = 0, e.itemAry = null, e.scrollView = null, e.itemPrefab = null, e.groupTitleSample = null, e.groupRootSample = null, e.clickItemFunc = null, e.longPressItemFunc = null, e.scrollingFunc = null, e.nodePool = null, e.groupNameAry = null, e.useItemID = "", e.layout = null, e.currentScrollY = 0, e
                }
                return r(e, t), e.prototype.Init = function() {
                    this.clickItemFunc = null, this.longPressItemFunc = null, this.useItemID = "", this.nodePool = new cc.NodePool, this.itemAry = [], this.currentScrollY = this.scrollView.getScrollOffset().y
                }, e.prototype.Clear = function() {
                    this.scrollView.scrollToTop(0), this.currentScrollY = this.scrollView.getScrollOffset().y;
                    var t = 0;
                    if (this.itemAry) {
                        for (t = 0; t < this.itemAry.length; t++) this.nodePool.put(this.itemAry[t].node), this.itemAry[t].Clear();
                        this.itemAry = []
                    }
                    this.useItemID = ""
                }, e.prototype.Exit = function() {
                    this.nodePool && this.nodePool.clear(), this.groupNameAry = null, this.itemAry = null, this.clickItemFunc = null, this.longPressItemFunc = null, this.useItemID = ""
                }, e.prototype.Show = function() {
                    this.node.active = !0
                }, e.prototype.Hide = function() {
                    this.node.active = !1
                }, e.prototype.SetRect = function(t, e) {
                    this.scrollView.node.setContentSize(t, e), this.scrollView.content.parent.setContentSize(t - 20, e), this.scrollView.content.parent.y = .5 * e, this.scrollView.content.setContentSize(t - 20, e), this.scrollView.verticalScrollBar.getComponent(cc.Widget).top = 0, this.groupRootSample.width = t - 40, this.groupRootSample.x = .5 * -this.groupRootSample.width, this.groupTitleSample.width = this.scrollView.content.width, this.currentScrollY = this.scrollView.getScrollOffset().y
                }, e.prototype.SetData = function(t, e) {
                    var o = "";
                    if (this.scrollView.content.childrenCount > 0)
                        for (var i = 0; i < this.scrollView.content.childrenCount; i++) this.scrollView.content.children[i].active = !1;
                    for (this.groupNameAry = [], i = 0; i < t.length; i++) 1 == t[i].is_open && (this.CreateItem(t[i], e), o = t[i].kind, -1 == this.groupNameAry.indexOf(o, 0) && this.groupNameAry.push(o));
                    this.SetGroups()
                }, e.prototype.CreateItem = function(t, e) {
                    console.log("[AvatarSetting]CreateItem: ", t);
                    var o = t.game_id;
                    if ("" != o && SS.Common.GameEnvironment.GameSetting.DisableGame)
                        for (var i = 0; i < SS.Common.GameEnvironment.GameSetting.DisableGame.length; i++)
                            if (SS.Common.GameEnvironment.GameSetting.DisableGame[i] == o) return void console.error("\u5275\u5efa\u982d\u50cf\u982d\u50cf\u6846\uff0c\u4f7f\u7528\u7684\u982d\u50cf\u904a\u6232\u6c92\u958b!!!!!, itemID = " + t.id + " itemGameTheme = " + o);
                    var r, n = this.nodePool.get();
                    (r = !n) && (n = cc.instantiate(this.itemPrefab));
                    var s = n.getComponent(a.default);
                    r && s.Init(), s.clickFunc = this.OnClickItem.bind(this), s.infoShowFunc = this.OnLongPressItem.bind(this), s.SetData(t, e), this.itemAry.push(s), s.isEquiped && (this.useItemID = s.id)
                }, e.prototype.SetGroups = function() {
                    for (var t = "", e = 0; e < this.groupNameAry.length; e++) {
                        t = this.groupNameAry[e];
                        var o = this.scrollView.content.children.filter(function(e) {
                            return e.name.includes(t)
                        });
                        if (0 == o.length) this.CreateGroupTitle(t), this.CreateGroups(t);
                        else
                            for (var i = 0; i < o.length; i++) o[i].active = !0, o[i].name == t + "_GROUP" && this.SetItemsParent(o[i], t)
                    }
                }, e.prototype.CreateGroupTitle = function(t) {
                    var e = cc.instantiate(this.groupTitleSample);
                    e.name = t, e.parent = this.scrollView.content, e.getComponent(cc.Label).string = t, e.width = this.scrollView.content.width, e.active = !0
                }, e.prototype.CreateGroups = function(t) {
                    var e = cc.instantiate(this.groupRootSample);
                    e.name = t + "_GROUP", e.parent = this.scrollView.content, e.width = this.scrollView.content.width, e.active = !0, this.SetItemsParent(e, t)
                }, e.prototype.SetItemsParent = function(t, e) {
                    var o = this.itemAry.filter(function(t) {
                        return t.groupName == e
                    });
                    if (o.length > 0) {
                        t.active = !0;
                        for (var i = 0; i < o.length; i++) o[i].node.parent = t, o[i].node.active = !0
                    } else {
                        t.active = !1;
                        var r = this.scrollView.content.children.find(function(t) {
                            return t.name == e
                        });
                        r && (r.active = !1)
                    }
                }, e.prototype.GetFirstItem = function() {
                    var t = this.scrollView.content.children[1].children[0].name,
                        e = this.itemAry.findIndex(function(e) {
                            return e.id == t
                        });
                    return e > -1 ? this.itemAry[e] : null
                }, e.prototype.GetFirstGruop = function() {
                    return this.scrollView.content.children[1]
                }, e.prototype.SetAllPressStatus = function(t) {
                    for (var e = 0; e < this.itemAry.length; e++) this.itemAry[e].SetPress(t)
                }, e.prototype.SetLayout = function(t) {
                    this.layout || (this.layout = this.scrollView.content.getComponent(cc.Layout)), this.layout.enabled = t
                }, e.prototype.OnClickItem = function(t, e, o, i) {
                    var r = this;
                    if (void 0 === i && (i = -1), console.log("[AvatarSetting]OnClickItem: ", t), this.useItemID.length > 0) {
                        var n = this.itemAry.find(function(t) {
                            return t.id == r.useItemID
                        });
                        n && n.SetUnequip()
                    }
                    this.useItemID = t, this.clickItemFunc && this.clickItemFunc(this.pageID, t, e, o, i)
                }, e.prototype.OnLongPressItem = function(t, e, o) {
                    this.longPressItemFunc && this.longPressItemFunc(t, e, o)
                }, e.prototype.OnScrolling = function() {
                    var t = this.scrollView.getScrollOffset().y;
                    Math.abs(this.currentScrollY - t) > .01 && this.scrollingFunc && this.scrollingFunc(), this.currentScrollY = t
                }, n([l(cc.ScrollView)], e.prototype, "scrollView", void 0), n([l(cc.Prefab)], e.prototype, "itemPrefab", void 0), n([l(cc.Node)], e.prototype, "groupTitleSample", void 0), n([l(cc.Node)], e.prototype, "groupRootSample", void 0), n([c], e)
            }(cc.Component);
        o.default = p, cc._RF.pop()
    }, {
        "./AvatarSettingItem": "AvatarSettingItem"
    }],
    BeginnersGuideJumper: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c6ca6Jrp7RBRZscnzALqiXN", "BeginnersGuideJumper");
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            n = this && this.__decorate || function(t, e, o, i) {
                var r, n = arguments.length,
                    a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(e, o, a) : r(e, o)) || a);
                return n > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            s = a.ccclass,
            c = a.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.m_btnClickNext = null, e.m_isEnable = !1, e
                }
                return r(e, t), e.prototype.onEnable = function() {
                    this.m_isEnable = !1
                }, e.prototype.update = function() {
                    if (!this.m_isEnable && !SS.Common.GameEnvironment.IsUseScoreBox)
                        for (var t = 0; t < this.m_btnClickNext.clickEvents.length; t++) this.m_btnClickNext.clickEvents[t].emit(null);
                    this.m_isEnable = !0
                }, n([c(cc.Button)], e.prototype, "m_btnClickNext", void 0), n([s], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    ChangeNicknameCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "877e4jKGcNCt5xugI5ZeWl4", "ChangeNicknameCtrl");
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            n = this && this.__decorate || function(t, e, o, i) {
                var r, n = arguments.length,
                    a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(e, o, a) : r(e, o)) || a);
                return n > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = t("../../../Net/ClickLog"),
            s = t("../../../Net/ClickLogEnum"),
            c = cc._decorator,
            l = c.ccclass,
            p = c.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.nicknameLabel = null, e.nicknameEditor = null, e.editButton = null, e.editIconNode = null, e.editLineNode = null, e.editStartFunc = null, e.editEndFunc = null, e.editErrorFunc = null, e.originNickname = "", e
                }
                return r(e, t), Object.defineProperty(e.prototype, "nickname", {
                    get: function() {
                        return this.nicknameLabel.string
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.Init = function() {}, e.prototype.Exit = function() {}, e.prototype.Show = function(t, e) {
                    this.nicknameEditor.string = t, this.editButton.node.active = e, this.editIconNode.active = e, this.nicknameEditor.enabled = e, this.editLineNode.active = e, this.node.active = !0, this.originNickname = t
                }, e.prototype.Hide = function() {
                    this.node.active = !1
                }, e.prototype.OnClickEdit = function() {
                    window.hasOwnProperty("isForcusEditbox") && (isForcusEditbox = !0), this.editButton.node.active = !1, this.nicknameEditor.focus(), this.editStartFunc && this.editStartFunc()
                }, e.prototype.OnEditDidEnd = function() {
                    window.hasOwnProperty("isForcusEditbox") && (isForcusEditbox = !1), console.log(this.originNickname + "!=" + this.nicknameEditor.textLabel.string), this.originNickname != this.nicknameEditor.textLabel.string && (new RegExp("^[!-~]{4,13}$").test(this.nicknameEditor.textLabel.string) ? "M-" == this.nicknameEditor.textLabel.string.substring(0, 2) || "m-" == this.nicknameEditor.textLabel.string.substring(0, 2) ? (this.editErrorFunc('Your name cannot start with "M-"'), a.ClickLog.recordClickLog(s.LogName.Profile, -1, s.LogType_Profile.Nickname, s.LogEvent_Nickname.Failed_PrefixM)) : this.editErrorFunc && this.editErrorFunc("") : this.nickname.length < 4 ? this.editErrorFunc && (this.editErrorFunc("Name must be 4 ~ 11 characters in length."), a.ClickLog.recordClickLog(s.LogName.Profile, -1, s.LogType_Profile.Nickname, s.LogEvent_Nickname.Failed_TooShort)) : this.editErrorFunc && (this.editErrorFunc("Your name must not contain special characters or taboo words."), a.ClickLog.recordClickLog(s.LogName.Profile, -1, s.LogType_Profile.Nickname, s.LogEvent_Nickname.Failed_SpecialSymbol))), this.originNickname = this.nicknameEditor.textLabel.string, this.nicknameLabel.node.active = !0, this.editButton.node.active = !0, this.editEndFunc && this.editEndFunc()
                }, n([p(cc.Label)], e.prototype, "nicknameLabel", void 0), n([p(cc.EditBox)], e.prototype, "nicknameEditor", void 0), n([p(cc.Button)], e.prototype, "editButton", void 0), n([p(cc.Node)], e.prototype, "editIconNode", void 0), n([p(cc.Node)], e.prototype, "editLineNode", void 0), n([l], e)
            }(cc.Component);
        o.default = u, cc._RF.pop()
    }, {
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0
    }],
    ProfileData: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "977b02M4cVB8beCwQJWrtDh", "ProfileData");
        var i, r = this && this.__extends || (i = function(t, e) {
            return (i = Object.setPrototypeOf || {
                    __proto__: []
                }
                instanceof Array && function(t, e) {
                    t.__proto__ = e
                } || function(t, e) {
                    for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                })(t, e)
        }, function(t, e) {
            function o() {
                this.constructor = t
            }
            i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
        });
        Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.ProfileSoundClip = o.ProfileTabData = o.HotGameData = o.ProfileRecordData = o.RecordPlayerData = o.RecordFirstPlayerData = o.ProfilePlayerData = o.ProfileData = o.ProfileRecordUnitType = void 0,
            function(t) {
                t[t.TotalWin = 0] = "TotalWin", t[t.BiggestJp = 1] = "BiggestJp", t[t.MaxSlotMultiple = 2] = "MaxSlotMultiple", t[t.MaxFishMultiple = 3] = "MaxFishMultiple"
            }(o.ProfileRecordUnitType || (o.ProfileRecordUnitType = {}));
        o.ProfileData = function() {
            this.PlayerData = null, this.RecordData = null, this.Entries = 0, this.Winnings = 0, this.FavoriteGameAry = [], this.LastUpdateTimestmp = 0
        };
        var n = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.ArkID = "", e.NickName = "", e.FaceID = "", e.FaceFrameID = "", e.IsSelf = !1, e.FaceIDExpireTime = -1, e.FaceFrameIDExpireTime = -1, e
            }
            return r(e, t), e
        }(cc.Component);
        o.ProfilePlayerData = n;
        var a = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.RecordType = void 0, e.RecoreTitle = "", e.RecoreValue = 0, e
            }
            return r(e, t), e
        }(n);
        o.RecordFirstPlayerData = a;
        o.RecordPlayerData = function() {
            this.RecordType = void 0, this.MaxValue = -1, this.MaxPercent = 0, this.FirstPlayerData = null
        };
        o.ProfileRecordData = function() {
            this.HotGameAry = [], this.RecordTotalWin = null, this.RecordMaxJPWin = null, this.RecordMaxSlotMultiple = null, this.RecordMaxFishMultiple = null
        };
        o.HotGameData = function() {
            this.GameID = "", this.Typt = ""
        };
        o.ProfileTabData = function() {
                this.Type = "", this.Index = -1, this.Title = "", this.HaveRedPoint = !1
            },
            function(t) {
                t.BtnX = "Btn_Select_n_v01", t.BtnSave = "PS_SAVE", t.BeginnersGuide = "PS_Beginner", t.OpenProfile = "PS_Open", t.BtnTab = "PS_Info_Class", t.OpenAvatarSetting = "PS_Info_Avatar_Setting", t.AvatarTab = "PS_Info_Avatar_Class", t.ClickItemOwn = "PS_Info_Avatar_Setting", t.ClickItemNo = "PS_Info_Avatar_No", t.BtnPurchase = "", t.BtnPurchaseCoin = "", t.BtnAccoutSetting = "", t.BtnGame = "PS_Record_IntoGame", t.BtnShowBest = "PS_Record_TitleClick", t.BtnShowSelfValue = "PS_Record_ValueClick", t.SelfBeat = "PS_Record_Beat"
            }(o.ProfileSoundClip || (o.ProfileSoundClip = {})), cc._RF.pop()
    }, {}],
    ProfileFavoriteGameCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e5921xnc0NNqJw73wzidqDn", "ProfileFavoriteGameCtrl");
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            n = this && this.__decorate || function(t, e, o, i) {
                var r, n = arguments.length,
                    a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(e, o, a) : r(e, o)) || a);
                return n > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function(t, e, o, i) {
                return new(o || (o = Promise))(function(r, n) {
                    function a(t) {
                        try {
                            c(i.next(t))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function s(t) {
                        try {
                            c(i.throw(t))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(a, s)
                    }
                    c((i = i.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var o, i, r, n, a = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return n = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
                    return this
                }), n;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(n) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, i && (r = 2 & n[0] ? i.return : n[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, n[1])).done) return r;
                        switch (i = 0, r && (n = [2 & n[0], r.value]), n[0]) {
                            case 0:
                            case 1:
                                r = n;
                                break;
                            case 4:
                                return a.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = n[1], n = [0];
                                continue;
                            case 7:
                                n = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === n[0] && (!r || n[1] > r[0] && n[1] < r[3])) {
                                    a.label = n[1];
                                    break
                                }
                                if (6 === n[0] && a.label < r[1]) {
                                    a.label = r[1], r = n;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(n);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        n = e.call(t, a)
                    } catch (s) {
                        n = [6, s], i = 0
                    } finally {
                        o = r = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.ProfileFavoriteGameCtrl = void 0;
        var c = t("../../../Component/AudioMgr"),
            l = t("../../../Net/ClickLog"),
            p = t("../../../Net/ClickLogEnum"),
            u = t("./ProfileData"),
            h = t("./ProfileFavoriteGame"),
            f = cc._decorator,
            d = f.ccclass,
            m = f.property,
            y = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.funcClickGame = null, e.funcClickShowHot = null, e.m_FavoriteGameAry = [], e.m_HotGameAry = [], e.m_nodeHotGame = null, e.m_vOneHotGamePos = cc.v2(0, -15), e.m_vOneHotGameLabPos = cc.v2(0, -88), e
                }
                return r(e, t), e.prototype.Init = function() {
                    var t = this;
                    this.m_FavoriteGameAry.forEach(function(e) {
                        e.Init(), e.funcClicked = t.OpenSelectOptionPage.bind(t)
                    }), this.m_HotGameAry.forEach(function(e) {
                        e.Init(), e.funcClicked = t.OpenSelectOptionPage.bind(t)
                    })
                }, e.prototype.UpdateFavoriteGameData = function(t) {
                    this.ClearFavoriteGame();
                    for (var e = 0; e < t.length; e++) this.SetGameData(t[e], this.m_FavoriteGameAry[e])
                }, e.prototype.UpdateHotGameData = function(t) {
                    return a(this, void 0, void 0, function() {
                        var e, o, i, r;
                        return s(this, function() {
                            for (this.ClearHotGame(), e = 0, o = 0, r = 0; r < t.length; r++)(i = this.getGameNameByThemeID(t[r].GameID)) && (this.checkThemeIsOpen(i) ? o = r : e++);
                            if (1 == e) this.m_HotGameAry[0].node.setPosition(this.m_vOneHotGamePos), this.m_HotGameAry[0].m_labType.node.setPosition(this.m_vOneHotGameLabPos), this.m_HotGameAry[1].SetActive(!1), this.SetGameData(t[o].GameID, this.m_HotGameAry[0], t[o].Typt);
                            else {
                                for (r = 0; r < this.m_HotGameAry.length; r++) this.m_HotGameAry[r].RevertPosition();
                                if (0 == e)
                                    for (r = 0; r < t.length; r++) this.SetGameData(t[r].GameID, this.m_HotGameAry[r], t[r].Typt);
                                else if (e == t.length) {
                                    for (r = 0; r < this.m_HotGameAry.length; r++) this.m_HotGameAry[r].SetActive(!0), this.m_HotGameAry[r].SetEnable(!1);
                                    this.m_HotGameAry[0].m_labType.string = "SLOT", this.m_HotGameAry[1].m_labType.string = "FISH"
                                }
                            }
                            return [2]
                        })
                    })
                }, e.prototype.SetGameData = function(t, e, o) {
                    void 0 === o && (o = "");
                    var i = this.getGameNameByThemeID(t);
                    if ("" != i) {
                        var r = this.checkThemeIsOpen(i),
                            n = this.getThemeTitleByThemeID(t);
                        e.SetGame(t, i, o, r, n)
                    } else e.SetEnable(!1), console.error("\u8a2d\u5b9a\u904a\u6232 icon \u627e\u4e0d\u5230 ThemeID, gameID = " + t)
                }, e.prototype.getGameNameByThemeID = function(t) {
                    var e = "";
                    try {
                        e = SS.Common.GameEnvironment.GameSetting.Icon[t].GameName
                    } catch (f) {}
                    return e
                }, e.prototype.getThemeTitleByThemeID = function(t) {
                    var e = "";
                    try {
                        e = SS.Common.GameEnvironment.GameSetting.Icon[t].ThemeTitle
                    } catch (f) {}
                    return e
                }, e.prototype.OpenSelectOptionPage = function(t) {
                    console.warn("OpenSelectOptionPage !!, GameName = " + t), this.funcClickGame && this.funcClickGame(t)
                }, e.prototype.ShowHotGame = function() {
                    this.funcClickShowHot && this.funcClickShowHot(), this.m_nodeHotGame.activeInHierarchy ? this.HideHotGame() : (this.m_nodeHotGame.active = !0, this.SetRegisterBtnEvent(this.m_FavoriteGameAry, !1), this.SetRegisterBtnEvent(this.m_HotGameAry, !0)), c.AudioMgr.Instance.Play(u.ProfileSoundClip.BtnShowBest, !1, 1), l.ClickLog.recordClickLog(p.LogName.Profile, 0, p.LogType_Profile.Button, p.LogEvent_Button.HotGame)
                }, e.prototype.HideHotGame = function() {
                    this.m_nodeHotGame.active = !1, this.SetRegisterBtnEvent(this.m_FavoriteGameAry, !0), this.SetRegisterBtnEvent(this.m_HotGameAry, !1)
                }, e.prototype.SetRegisterBtnEvent = function(t, e) {
                    t.forEach(function(t) {
                        t.RegisterBtnEvent(e)
                    })
                }, e.prototype.checkThemeIsOpen = function(t) {
                    for (var e = 0; e < SS.Common.GameEnvironment.GameSetting.kioskOpenGameList.length; e++)
                        if (SS.Common.GameEnvironment.GameSetting.kioskOpenGameList[e] == t) return !0;
                    return !1
                }, e.prototype.ClearFavoriteGame = function() {
                    this.m_FavoriteGameAry.forEach(function(t) {
                        t.Clear()
                    })
                }, e.prototype.ClearHotGame = function() {
                    this.m_HotGameAry.forEach(function(t) {
                        t.Clear()
                    })
                }, e.prototype.Clear = function() {
                    this.ClearFavoriteGame(), this.ClearHotGame()
                }, n([m([h.ProfileFavoriteGame])], e.prototype, "m_FavoriteGameAry", void 0), n([m([h.ProfileFavoriteGame])], e.prototype, "m_HotGameAry", void 0), n([m(cc.Node)], e.prototype, "m_nodeHotGame", void 0), n([d], e)
            }(cc.Component);
        o.ProfileFavoriteGameCtrl = y, cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "./ProfileData": "ProfileData",
        "./ProfileFavoriteGame": "ProfileFavoriteGame"
    }],
    ProfileFavoriteGame: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "5d75bekzpBCs6dDs/f2f5xF", "ProfileFavoriteGame");
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            n = this && this.__decorate || function(t, e, o, i) {
                var r, n = arguments.length,
                    a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(e, o, a) : r(e, o)) || a);
                return n > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function(t, e, o, i) {
                return new(o || (o = Promise))(function(r, n) {
                    function a(t) {
                        try {
                            c(i.next(t))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function s(t) {
                        try {
                            c(i.throw(t))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(a, s)
                    }
                    c((i = i.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var o, i, r, n, a = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return n = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
                    return this
                }), n;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(n) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, i && (r = 2 & n[0] ? i.return : n[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, n[1])).done) return r;
                        switch (i = 0, r && (n = [2 & n[0], r.value]), n[0]) {
                            case 0:
                            case 1:
                                r = n;
                                break;
                            case 4:
                                return a.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = n[1], n = [0];
                                continue;
                            case 7:
                                n = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === n[0] && (!r || n[1] > r[0] && n[1] < r[3])) {
                                    a.label = n[1];
                                    break
                                }
                                if (6 === n[0] && a.label < r[1]) {
                                    a.label = r[1], r = n;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(n);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        n = e.call(t, a)
                    } catch (s) {
                        n = [6, s], i = 0
                    } finally {
                        o = r = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.ProfileFavoriteGame = void 0;
        var c = t("../../../Component/BundleCtrl"),
            l = t("../../../PopupMessage/Script/PopupMsgMgr"),
            p = cc._decorator,
            u = p.ccclass,
            h = p.property,
            f = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.funcClicked = null, e.m_sprGameIcon = null, e.m_sprNoData = null, e.m_btnGame = null, e.m_labType = null, e.m_sprGameIconFrame = null, e.m_strThemeID = "", e.m_strGameName = "", e.m_strThemeTitle = "", e.m_bGameOpen = !0, e.m_vOriNodePosition = null, e.m_vOriLabTypeNodePosition = null, e.m_spDefaultGameIconFrame = null, e
                }
                return r(e, t), e.prototype.RegisterBtnEvent = function(t) {
                    t ? (this.m_btnGame.node.on(cc.Node.EventType.MOUSE_DOWN, this.OnBtnHover, this, !0), this.m_btnGame.node.on(cc.Node.EventType.MOUSE_UP, this.OnBtnHoverEnd, this, !0), this.m_btnGame.node.on(cc.Node.EventType.MOUSE_LEAVE, this.OnBtnHoverEnd, this, !0), this.m_btnGame.node.on(cc.Node.EventType.TOUCH_START, this.OnBtnHover, this, !0), this.m_btnGame.node.on(cc.Node.EventType.TOUCH_END, this.OnBtnHoverEnd, this, !0), this.m_btnGame.node.on(cc.Node.EventType.TOUCH_CANCEL, this.OnBtnHoverEnd, this, !0)) : this.m_btnGame.node.targetOff(this)
                }, e.prototype.onDestroy = function() {
                    this.m_btnGame.node && this.m_btnGame.node.targetOff(this)
                }, e.prototype.onLoad = function() {
                    this.m_spDefaultGameIconFrame = this.m_sprGameIcon.spriteFrame
                }, e.prototype.Init = function() {
                    this.m_vOriNodePosition = this.node.getPosition(), this.m_labType && (this.m_vOriLabTypeNodePosition = this.m_labType.node.getPosition()), this.RegisterBtnEvent(!0), this.SetEnable(!1), this.SetActive(!0), this.m_sprNoData.node.active = !0
                }, e.prototype.OnBtnHover = function() {
                    this.m_sprGameIconFrame && this.m_btnGame.interactable && (this.m_sprGameIconFrame.node.color = cc.Color.YELLOW)
                }, e.prototype.OnBtnHoverEnd = function() {
                    this.m_sprGameIconFrame && this.m_btnGame.interactable && (this.m_sprGameIconFrame.node.color = cc.Color.WHITE)
                }, e.prototype.SetGame = function(t, e, o, i, r) {
                    return void 0 === o && (o = ""), a(this, void 0, void 0, function() {
                        var n;
                        return s(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return this.SetEnable(!0), this.m_bGameOpen = i, this.m_strThemeID = t, this.m_strGameName = e, this.m_strThemeTitle = r, this.m_btnGame.normalColor = this.m_bGameOpen ? cc.Color.WHITE : cc.Color.GRAY, this.m_btnGame.hoverColor = this.m_bGameOpen ? cc.Color.WHITE : cc.Color.GRAY, this.m_btnGame.pressedColor = this.m_bGameOpen ? cc.Color.WHITE : cc.Color.GRAY, this.m_labType && "" != o && (this.m_labType.string = o), [4, c.default.Instance.GetSpirte("SquareGameIcon", e)];
                                case 1:
                                    return (n = a.sent()) ? (this.m_sprGameIcon.spriteFrame = n, this.m_sprNoData.node.active = !1) : (this.m_sprGameIcon.spriteFrame = this.m_spDefaultGameIconFrame, this.m_sprNoData.node.active = !0), [2]
                            }
                        })
                    })
                }, e.prototype.SetEnable = function(t) {
                    this.m_btnGame.interactable = t, !t && this.m_labType && (this.m_labType.string = "")
                }, e.prototype.SetActive = function(t) {
                    this.node.active = t, this.m_labType && (this.m_labType.node.active = t)
                }, e.prototype.RevertPosition = function() {
                    this.node.setPosition(this.m_vOriNodePosition), this.m_labType && this.m_labType.node.setPosition(this.m_vOriLabTypeNodePosition)
                }, e.prototype.OnClick = function() {
                    this.m_bGameOpen ? this.funcClicked && "" != this.m_strGameName && this.funcClicked(this.m_strGameName) : (console.warn("\u904a\u6232\u6c92\u958b"), l.PopupMsgMgr.Instance.ShowPopMsg(l.PopupPriority.Info, "C65", null, "Game not available", null, this.m_strThemeTitle))
                }, e.prototype.Clear = function() {
                    this.m_strThemeID = "", this.m_strGameName = "", this.m_sprGameIcon.spriteFrame = this.m_spDefaultGameIconFrame, this.SetEnable(!1), this.m_sprNoData.node.active = !0
                }, n([h(cc.Sprite)], e.prototype, "m_sprGameIcon", void 0), n([h(cc.Sprite)], e.prototype, "m_sprNoData", void 0), n([h(cc.Button)], e.prototype, "m_btnGame", void 0), n([h(cc.Label)], e.prototype, "m_labType", void 0), n([h(cc.Sprite)], e.prototype, "m_sprGameIconFrame", void 0), n([u], e)
            }(cc.Component);
        o.ProfileFavoriteGame = f, cc._RF.pop()
    }, {
        "../../../Component/BundleCtrl": void 0,
        "../../../PopupMessage/Script/PopupMsgMgr": void 0
    }],
    ProfileIDCardMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6cfeeHcBINLAKJS3G2kvvWV", "ProfileIDCardMgr");
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            n = this && this.__decorate || function(t, e, o, i) {
                var r, n = arguments.length,
                    a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(e, o, a) : r(e, o)) || a);
                return n > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.ProfileIDCardMgr = void 0;
        var a = t("../../../../GameCommon/Pruchase/Script/PurchaseMgr"),
            s = t("../../../Component/AudioMgr"),
            c = t("../../../Component/AvatarIcon"),
            l = t("../../../Component/CookieCtrl"),
            p = t("../../../Connect/Script/ConnectPanelMgr"),
            u = t("../../../EditMobileIDMgr/Script/EditMobileIDMgr"),
            h = t("../../../EditPassword/Script/EditPassword"),
            f = t("../../../Helper/EventSystem"),
            d = t("../../../Net/ClickLog"),
            m = t("../../../Net/ClickLogEnum"),
            y = t("./AvatarSettingMgr"),
            _ = cc._decorator,
            v = _.ccclass,
            g = _.property,
            P = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.m_labPlayerID = null, e.m_labPlayerNickname = null, e.m_nodeEntryRoot = null, e.m_labEntry = null, e.m_nodeWinningRoot = null, e.m_labWinning = null, e.m_nodeCreditRoot = null, e.m_labCredit = null, e.m_selfObjAry = [], e.m_AvatarIcon = null, e.m_nodeMobileBtn = null, e.m_nodePwdBtn = null, e.m_pfbAvatar = null, e.m_nodeAvatarRoot = null, e.m_pfbEditMobileID = null, e.m_nodeEditMobileIDRoot = null, e.m_pfbEditPwd = null, e.m_nodeEditPwdRoot = null, e.m_pfbPurchase = null, e.m_nodePurchaseRoot = null, e.m_AvatarSettingMgr = null, e.m_EditMobileIDMgr = null, e.m_EditPasswordMgr = null, e.m_PurchaseMgr = null, e.m_curData = null, e.m_posBtnPwdOriX = 96, e.m_forceOpenHelpInSettingUI = !1, e
                }
                return r(e, t), e.prototype.start = function() {}, e.prototype.Init = function() {
                    SS.Common.GameEnvironment.IsUseScoreBox ? (this.m_nodeEntryRoot.active = !0, this.m_nodeWinningRoot.active = !0, this.m_nodeCreditRoot.active = !1) : (this.m_nodeEntryRoot.active = !1, this.m_nodeWinningRoot.active = !1, this.m_nodeCreditRoot.active = !0)
                }, e.prototype.onDestroy = function() {
                    this.m_AvatarSettingMgr && (this.m_AvatarSettingMgr = null), this.m_EditMobileIDMgr && (this.m_EditMobileIDMgr.m_DelClickClose.Remove(this.OnEditMobileIDClickClose, this), this.m_EditMobileIDMgr.m_DelClickOK.Remove(this.OnEditMobileIDClickOK, this), this.m_EditMobileIDMgr._onDestroy(), this.m_EditMobileIDMgr = null), this.m_EditPasswordMgr && (this.m_EditPasswordMgr.m_DelClickClose.Remove(this.OnEditPWDClickClose, this), this.m_EditPasswordMgr.m_DelClickOK.Remove(this.OnEditPWDClickOK, this), this.m_EditPasswordMgr._onDestroy(), this.m_EditPasswordMgr = null), this.m_PurchaseMgr && (this.m_PurchaseMgr.OnClickPurchaseBtn.Remove(this.OnClickPurchaseBtn, this), this.m_PurchaseMgr.OnPurchaseSuccess.Remove(this.OnPurchaseSuccess, this), this.m_PurchaseMgr.OnPurchasePanelDisable.Remove(this.OnPurchasePanelDisable, this), this.m_PurchaseMgr = null)
                }, e.prototype.Show = function(t, e) {
                    this.m_curData = t;
                    for (var o = 0; o < this.m_selfObjAry.length; o++) this.m_selfObjAry[o].active = t.PlayerData.IsSelf;
                    if (this.m_curData.PlayerData.IsSelf) {
                        var i = SS.Network.LoginModel.LoginInfo.user_id;
                        this.m_labPlayerID.string = "ID: " + i, i.includes("m-") || i.includes("M-") ? (this.m_nodeMobileBtn.active = !0, this.m_nodePwdBtn.setPosition(this.m_posBtnPwdOriX, this.m_nodeMobileBtn.getPosition().y)) : (this.m_nodeMobileBtn.active = !1, this.m_nodePwdBtn.setPosition(0, this.m_nodeMobileBtn.getPosition().y))
                    }
                    this.SetAvatarIcon(this.m_curData.PlayerData), this.SetAssets(t.Winnings, t.Entries), e && this.ShowAvatarSetting()
                }, e.prototype.SetAssets = function(t, e) {
                    this.m_labEntry.string = SS.Common.BaseFunction.addCommas(e, 0), this.m_labCredit.string = SS.Common.BaseFunction.addCommas(e, 0), this.m_labWinning.string = SS.Common.BaseFunction.addCommas(t, 0)
                }, e.prototype.SetAvatarIcon = function(t) {
                    t.ArkID == this.m_curData.PlayerData.ArkID && (this.m_AvatarIcon.SetFaceByID(t.FaceID), this.m_AvatarIcon.SetFrameByID(t.FaceFrameID), this.m_AvatarIcon.SetNickname(t.NickName))
                }, e.prototype.BtnGuideAvatarEdit = function() {
                    this.ShowAvatarSetting(!0)
                }, e.prototype.BtnAvatarEdit = function() {
                    this.ShowAvatarSetting()
                }, e.prototype.ShowAvatarSetting = function(t) {
                    if (void 0 === t && (t = !1), null == this.m_AvatarSettingMgr && this.m_pfbAvatar) {
                        var e = this.CreateObj(this.m_pfbAvatar, this.m_nodeAvatarRoot);
                        this.m_AvatarSettingMgr = e.getComponent(y.default), this.m_AvatarSettingMgr.Init()
                    }
                    this.m_forceOpenHelpInSettingUI && this.m_AvatarSettingMgr.SetHaveToShowHelp(), t ? this.CheckCookieExist("avatareditor_beginnerguide") || d.ClickLog.recordClickLog(m.LogName.Profile, 0, m.LogType_Profile.Guide, m.LogEvent_Guide.Next9) : d.ClickLog.recordClickLog(m.LogName.Profile, 0, m.LogType_Profile.Button, m.LogEvent_Button.Avatar), this.m_forceOpenHelpInSettingUI = !1, this.m_AvatarSettingMgr.Show(this.m_curData.PlayerData, this.m_curData.PlayerData.IsSelf), f.EventSystem.Event(f.NoticedArrived.SetNewsRedPoint).Length && f.EventSystem.Event(f.NoticedArrived.SetNewsRedPoint).Notify(!1)
                }, e.prototype.BtnMobileEdit = function() {
                    if (null == this.m_EditMobileIDMgr && this.m_pfbEditMobileID) {
                        var t = this.CreateObj(this.m_pfbEditMobileID, this.m_nodeEditMobileIDRoot);
                        this.m_EditMobileIDMgr = t.getComponent(u.EditMobileIDMgr), this.m_EditMobileIDMgr._onLoad(), this.m_EditMobileIDMgr.m_DelClickClose.Insert(this.OnEditMobileIDClickClose, this), this.m_EditMobileIDMgr.m_DelClickOK.Insert(this.OnEditMobileIDClickOK, this)
                    }
                    this.m_EditMobileIDMgr.node.active = !0, s.AudioMgr.Instance.Play("Btn_Select_y_v01", !1, 1);
                    var e = SS.Network.LoginModel.LoginInfo.user_id;
                    this.m_EditMobileIDMgr.ShowEditID(function() {
                        l.CookieCtrl.SetCookie("GDC_USER_ID", ""), l.CookieCtrl.SetCookie("GDC_USER_PW", ""), p.ConnectPanelMgr.Instance.DisableConnectPanel(), f.EventSystem.Event(f.DoLogOut).Notify()
                    }, e)
                }, e.prototype.BtnPasswordEdit = function() {
                    if (null == this.m_EditPasswordMgr && this.m_pfbEditPwd) {
                        var t = this.CreateObj(this.m_pfbEditPwd, this.m_nodeEditPwdRoot);
                        this.m_EditPasswordMgr = t.getComponent(h.EditPassword), this.m_EditPasswordMgr._onLoad(), this.m_EditPasswordMgr.m_DelClickClose.Insert(this.OnEditPWDClickClose, this), this.m_EditPasswordMgr.m_DelClickOK.Insert(this.OnEditPWDClickOK, this)
                    }
                    s.AudioMgr.Instance.Play("Btn_Select_y_v01", !1, 1), this.m_EditPasswordMgr.ShowEditPasaword(function() {
                        l.CookieCtrl.SetCookie("GDC_USER_PW", ""), p.ConnectPanelMgr.Instance.DisableConnectPanel(), f.EventSystem.Event(f.DoLogOut).Notify()
                    })
                }, e.prototype.BtnPurchase = function() {
                    if (null == this.m_PurchaseMgr && this.m_pfbPurchase) {
                        var t = this.CreateObj(this.m_pfbPurchase, this.m_nodePurchaseRoot);
                        this.m_PurchaseMgr = t.getComponent(a.PurchaseMgr), this.m_PurchaseMgr._onLoad(), this.m_PurchaseMgr._start(), this.m_PurchaseMgr.OnClickPurchaseBtn.Insert(this.OnClickPurchaseBtn, this), this.m_PurchaseMgr.OnPurchaseSuccess.Insert(this.OnPurchaseSuccess, this), this.m_PurchaseMgr.OnPurchasePanelDisable.Insert(this.OnPurchasePanelDisable, this)
                    }
                    this.m_PurchaseMgr.node.active = !0, this.m_PurchaseMgr.ShowPanel(this.m_curData.Winnings)
                }, e.prototype.CreateObj = function(t, e) {
                    var o = cc.instantiate(t.data);
                    return o.parent = e, o.setPosition(cc.Vec3.ZERO), o
                }, e.prototype.OnEditMobileIDClickClose = function() {
                    this.PlayAutioSelectN()
                }, e.prototype.OnEditMobileIDClickOK = function() {
                    this.PlayAutioSelectY()
                }, e.prototype.OnEditPWDClickOK = function() {
                    this.PlayAutioSelectY()
                }, e.prototype.OnEditPWDClickClose = function() {
                    this.PlayAutioSelectN()
                }, e.prototype.OnClickPurchaseBtn = function() {
                    this.PlayAutioSelectN()
                }, e.prototype.OnPurchaseSuccess = function(t, e) {
                    this.PlayAutioSelectY(), f.EventSystem.Event(f.PurchaseEvent.OnPurchaseSuccess).Notify(t, e)
                }, e.prototype.OnPurchasePanelDisable = function() {
                    this.PlayAutioSelectN(), f.EventSystem.Event(f.PurchaseEvent.OnPurchasePanelDisable).Notify()
                }, e.prototype.PlayAutioSelectN = function() {
                    s.AudioMgr.Instance.Play("Btn_Select_n_v01", !1, 1)
                }, e.prototype.PlayAutioSelectY = function() {
                    s.AudioMgr.Instance.Play("Btn_Select_y_v01", !1, 1)
                }, e.prototype.CheckCookieExist = function(t) {
                    var e = "";
                    return JSUtility.IsSupportLocalStorage() ? e = localStorage.getItem(t) : JSUtility.IsSupportCookie() && (e = JSUtility.GetCookie(t)), null != e
                }, e.prototype.Clear = function() {
                    this.m_AvatarSettingMgr && this.m_AvatarSettingMgr.Init(), this.m_AvatarIcon.SetFaceByID(""), this.m_AvatarIcon.SetFrameByID(""), this.m_AvatarIcon.SetNickname(""), this.m_labPlayerID.string = "ID: ", this.SetAssets(0, 0), this.m_curData = null
                }, n([g(cc.Label)], e.prototype, "m_labPlayerID", void 0), n([g(cc.Label)], e.prototype, "m_labPlayerNickname", void 0), n([g(cc.Node)], e.prototype, "m_nodeEntryRoot", void 0), n([g(cc.Label)], e.prototype, "m_labEntry", void 0), n([g(cc.Node)], e.prototype, "m_nodeWinningRoot", void 0), n([g(cc.Label)], e.prototype, "m_labWinning", void 0), n([g(cc.Node)], e.prototype, "m_nodeCreditRoot", void 0), n([g(cc.Label)], e.prototype, "m_labCredit", void 0), n([g([cc.Node])], e.prototype, "m_selfObjAry", void 0), n([g(c.default)], e.prototype, "m_AvatarIcon", void 0), n([g(cc.Node)], e.prototype, "m_nodeMobileBtn", void 0), n([g(cc.Node)], e.prototype, "m_nodePwdBtn", void 0), n([g(cc.Prefab)], e.prototype, "m_pfbAvatar", void 0), n([g(cc.Node)], e.prototype, "m_nodeAvatarRoot", void 0), n([g(cc.Prefab)], e.prototype, "m_pfbEditMobileID", void 0), n([g(cc.Node)], e.prototype, "m_nodeEditMobileIDRoot", void 0), n([g(cc.Prefab)], e.prototype, "m_pfbEditPwd", void 0), n([g(cc.Node)], e.prototype, "m_nodeEditPwdRoot", void 0), n([g(cc.Prefab)], e.prototype, "m_pfbPurchase", void 0), n([g(cc.Node)], e.prototype, "m_nodePurchaseRoot", void 0), n([v], e)
            }(cc.Component);
        o.ProfileIDCardMgr = P, cc._RF.pop()
    }, {
        "../../../../GameCommon/Pruchase/Script/PurchaseMgr": void 0,
        "../../../Component/AudioMgr": void 0,
        "../../../Component/AvatarIcon": void 0,
        "../../../Component/CookieCtrl": void 0,
        "../../../Connect/Script/ConnectPanelMgr": void 0,
        "../../../EditMobileIDMgr/Script/EditMobileIDMgr": void 0,
        "../../../EditPassword/Script/EditPassword": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "./AvatarSettingMgr": "AvatarSettingMgr"
    }],
    ProfileMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c641eMNNvJFp778Qf1VJ4eC", "ProfileMgr");
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            n = this && this.__decorate || function(t, e, o, i) {
                var r, n = arguments.length,
                    a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(e, o, a) : r(e, o)) || a);
                return n > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function(t, e, o, i) {
                return new(o || (o = Promise))(function(r, n) {
                    function a(t) {
                        try {
                            c(i.next(t))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function s(t) {
                        try {
                            c(i.throw(t))
                        } catch (e) {
                            n(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(a, s)
                    }
                    c((i = i.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var o, i, r, n, a = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return n = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (n[Symbol.iterator] = function() {
                    return this
                }), n;

                function s(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(n) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, i && (r = 2 & n[0] ? i.return : n[0] ? i.throw || ((r = i.return) && r.call(i), 0) : i.next) && !(r = r.call(i, n[1])).done) return r;
                        switch (i = 0, r && (n = [2 & n[0], r.value]), n[0]) {
                            case 0:
                            case 1:
                                r = n;
                                break;
                            case 4:
                                return a.label++, {
                                    value: n[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = n[1], n = [0];
                                continue;
                            case 7:
                                n = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === n[0] || 2 === n[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === n[0] && (!r || n[1] > r[0] && n[1] < r[3])) {
                                    a.label = n[1];
                                    break
                                }
                                if (6 === n[0] && a.label < r[1]) {
                                    a.label = r[1], r = n;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(n);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        n = e.call(t, a)
                    } catch (s) {
                        n = [6, s], i = 0
                    } finally {
                        o = r = 0
                    }
                    if (5 & n[0]) throw n[1];
                    return {
                        value: n[0] ? n[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.ProfileMgr = void 0;
        var c = t("../../../Component/AudioMgr"),
            l = t("../../../Component/BundleCtrl"),
            p = t("../../../Helper/EventSystem"),
            u = t("../../../PopupMessage/Script/PopupMsgMgr"),
            h = t("./ProfileSystem"),
            f = t("./ProfileUIMgr"),
            d = cc._decorator,
            m = d.ccclass,
            y = d.property,
            _ = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.m_ProfileUIMgr = null, e.m_ProfileSystem = null, e.m_nodeLoading = null, e.SoundClip = [], e.m_curProfileData = null, e.m_tmpProfileData = null, e.m_isHelpLoded = !1, e.m_curQuestPlayerID = "", e.TIME_GETDATA_TIMEOUT = 15, e.m_isJumpToAnotherProfile = !1, e.m_forceEntries = -1, e.m_forceWinning = -1, e.m_isOpenAvatarEditPage = !1, e
                }
                return r(e, t), e.prototype.onLoad = function() {
                    console.error("ProfileMgr, onLoad!!!!!!!"), this.Init(), this.m_nodeLoading.active = !1
                }, e.prototype.Init = function() {
                    this.m_ProfileUIMgr.Init(), this.m_ProfileUIMgr.funOnClose = this.OnClose.bind(this), this.m_ProfileUIMgr.funcOnCallHelp = this.OnCallBeginnerGuideShow.bind(this), this.m_ProfileUIMgr.RecordMgr.funcClickPlayer = this.OnClickPlayer.bind(this), this.m_ProfileSystem.Init(), this.m_ProfileSystem.funcGetProfile = this.GetProfile.bind(this), p.EventSystem.Event(p.Profile.OpenProfile).Insert(this.OpenProfile, this), p.EventSystem.Event(p.Profile.OpenAvatarEditor).Insert(this.OpenAvatarEditor, this), p.EventSystem.Event(p.Profile.ClearSelfUpdateCDTime).Insert(this.ClearSelfUpdateCDTime, this), p.EventSystem.Event(p.Profile.NotifyUpdatePlayerSetting).Insert(this.OnGetNotifyUpdatePlayerSetting, this), p.EventSystem.Event(p.Profile.SetLoadingNodeDisplay).Insert(this.OnSetLoadingDisplay, this), p.EventSystem.Event(p.Avatar.RequestUpdate).Insert(this.OnAvatarRequestUpdate, this), p.EventSystem.Event(p.PurchaseEvent.OnPurchaseSuccess).Insert(this.OnPurchaseSuccess, this), p.EventSystem.Event(p.Profile.UpdatePlayerAsset).Insert(this.UpdatePlayerAsset, this), p.EventSystem.Event(p.CommunityBonus.TimesUp).Insert(this.OnCommunityBonusTimesUp, this);
                    for (var t = [], e = 0; e < this.SoundClip.length; e++) t.push(this.SoundClip[e].name);
                    c.AudioMgr.Instance.setAudioClip(this.SoundClip, t)
                }, e.prototype.onDestroy = function() {
                    p.EventSystem.Event(p.Profile.OpenProfile).Remove(this.OpenProfile, this), p.EventSystem.Event(p.Profile.OpenAvatarEditor).Remove(this.OpenAvatarEditor, this), p.EventSystem.Event(p.Profile.ClearSelfUpdateCDTime).Remove(this.ClearSelfUpdateCDTime, this), p.EventSystem.Event(p.Profile.NotifyUpdatePlayerSetting).Remove(this.OnGetNotifyUpdatePlayerSetting, this), p.EventSystem.Event(p.Profile.SetLoadingNodeDisplay).Remove(this.OnSetLoadingDisplay, this), p.EventSystem.Event(p.Avatar.RequestUpdate).Remove(this.OnAvatarRequestUpdate, this), p.EventSystem.Event(p.PurchaseEvent.OnPurchaseSuccess).Remove(this.OnPurchaseSuccess, this), p.EventSystem.Event(p.BeginnersGuide.OnExit).Remove(this.OnBeginnerGuideComplete, this), p.EventSystem.Event(p.Profile.UpdatePlayerAsset).Remove(this.UpdatePlayerAsset, this), p.EventSystem.Event(p.CommunityBonus.TimesUp).Remove(this.OnCommunityBonusTimesUp, this)
                }, e.prototype.GetProfile = function(t) {
                    t.PlayerData.ArkID == this.m_curQuestPlayerID && (this.unschedule(this.CheckGetData), this.m_nodeLoading.active = !1, null != t ? this.ShowProfile(t) : console.warn("GetProfile Fail!"))
                }, e.prototype.OpenProfile = function(t, e, o, i) {
                    void 0 === e && (e = ""), void 0 === o && (o = -1), void 0 === i && (i = -1), t && "" == e && (e = SS.Network.LoginModel.LoginInfo.pin_ark_id), console.warn("ProfileMgr, OpenProfile isSelf = " + t + ", playerID = " + e + ", \u6307\u5b9a Winning = " + o + ", \u6307\u5b9a Entries = " + i + ", \u958b\u555f\u982d\u50cf\u8a2d\u5b9a\u9801\u9762 = " + this.m_isOpenAvatarEditPage), this.node.active = !0, this.m_ProfileUIMgr.SetRootActive(!0), this.setOnTop(), this.m_forceWinning = o, this.m_forceEntries = i, this.m_curQuestPlayerID = e;
                    var r = this.m_ProfileSystem.GetProfileData(t, e);
                    null == r ? (this.m_nodeLoading.active = !0, this.scheduleOnce(this.CheckGetData, this.TIME_GETDATA_TIMEOUT)) : (this.m_nodeLoading.active = !1, this.ShowProfile(r))
                }, e.prototype.setOnTop = function() {
                    for (var t = this.node.parent.children, e = -1, o = 0; o < t.length; o++) e = e > t[o].getSiblingIndex() ? e : t[o].getSiblingIndex();
                    e++, this.node.setSiblingIndex(e)
                }, e.prototype.CheckGetData = function() {
                    this.ClearAndClose(), console.error("profile \u8cc7\u6599\u53d6\u5f97\u5931\u6557, id = " + this.m_curQuestPlayerID), u.PopupMsgMgr.Instance.ShowPopMsg(u.PopupPriority.Info, "C66", SS.Common.GameEnvironment.CurrentGameNow, "get Profile Data Timeout")
                }, e.prototype.ShowProfile = function(t) {
                    if (this.m_curProfileData = t, -1 != this.m_forceEntries && -1 != this.m_forceWinning && (this.m_curProfileData.Entries = this.m_forceEntries, this.m_curProfileData.Winnings = this.m_forceWinning), this.m_ProfileUIMgr.Show(this.m_curProfileData, this.m_isOpenAvatarEditPage), this.m_curProfileData.PlayerData.ArkID == SS.Network.LoginModel.LoginInfo.pin_ark_id) {
                        if (!this.m_isHelpLoded) {
                            var e = this.getComponentInChildren("BeginnersGuideMgr");
                            e.active || e.onLoad(), this.m_isHelpLoded = !0
                        }
                        p.EventSystem.Event(p.BeginnersGuide.OnExit).Insert(this.OnBeginnerGuideComplete, this), p.EventSystem.Event(p.BeginnersGuide.Show).Notify("profile", !1), p.EventSystem.Event(p.Avatar.CheckExpireTime).Notify()
                    }
                    this.m_isOpenAvatarEditPage = !1
                }, e.prototype.OpenAvatarEditor = function(t, e) {
                    void 0 === e && (e = ""), this.OpenProfile(t, e), this.CheckCookieExist("profile_ui_beginnerguide") && (this.m_isOpenAvatarEditPage = !0)
                }, e.prototype.OnGetNotifyUpdatePlayerSetting = function(t) {
                    SS.Network.UserClient.UserInfo.avatar_id = t.FaceID, SS.Network.UserClient.UserInfo.avatar_frame_id = t.FaceFrameID, SS.Network.UserClient.UserInfo.nickname = t.NickName, SS.Network.UserClient.UserInfo.avatar_expired_time = t.FaceIDExpireTime, SS.Network.UserClient.UserInfo.avatar_frame_expired_time = t.FaceFrameIDExpireTime, this.m_ProfileSystem.SelfProfileData.PlayerData = t, this.m_ProfileUIMgr.IDCardMgr.SetAvatarIcon(t), p.EventSystem.Event(p.Avatar.CheckExpireTime).Notify()
                }, e.prototype.ClearSelfUpdateCDTime = function() {
                    this.m_ProfileSystem.ClearSelfUpdateCDTime()
                }, e.prototype.OnAvatarRequestUpdate = function() {
                    return a(this, void 0, void 0, function() {
                        var t, e, o, i, r;
                        return s(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return t = SS.Network.UserClient.UserInfo.avatar_id, e = SS.Network.UserClient.UserInfo.avatar_frame_id, o = SS.Network.UserClient.UserInfo.nickname, t && "" != t || (t = "FAC000"), [4, l.default.Instance.GetSpirte("Avatar", t)];
                                case 1:
                                    return (i = n.sent()) && p.EventSystem.Event(p.Avatar.SetFaceIcon).Notify(i), e && "" != e ? [4, l.default.Instance.GetSpirte("Avatar", e)] : [3, 3];
                                case 2:
                                    (r = n.sent()) && p.EventSystem.Event(p.Avatar.SetFaceFrameIcon).Notify(r), n.label = 3;
                                case 3:
                                    return this.m_ProfileSystem.SelfProfileData && (this.m_ProfileSystem.SelfProfileData.PlayerData.FaceID = SS.Network.UserClient.UserInfo.avatar_id, this.m_ProfileSystem.SelfProfileData.PlayerData.FaceFrameID = SS.Network.UserClient.UserInfo.avatar_frame_id), this.m_ProfileUIMgr.IsRootActive() && this.m_curProfileData.PlayerData.IsSelf && this.m_ProfileUIMgr.IDCardMgr.SetAvatarIcon(this.m_ProfileSystem.SelfProfileData.PlayerData), p.EventSystem.Event(p.Avatar.SetNickname).Notify(o), p.EventSystem.Event(p.Avatar.CheckExpireTime).Notify(), [2]
                            }
                        })
                    })
                }, e.prototype.OnPurchaseSuccess = function(t, e) {
                    this.m_curProfileData.PlayerData.IsSelf && this.UpdatePlayerAsset(t, e)
                }, e.prototype.UpdatePlayerAsset = function(t, e, o, i) {
                    if (void 0 === o && (o = !0), void 0 === i && (i = ""), o) null != this.m_ProfileSystem.SelfProfileData && (this.m_ProfileSystem.SelfProfileData.Winnings = t, this.m_ProfileSystem.SelfProfileData.Entries = e, this.m_ProfileUIMgr.IDCardMgr.SetAssets(t, e));
                    else if ("" != i) {
                        var r = this.m_ProfileSystem.GetOtherPlayerData(i);
                        r && (r.Winnings = t, r.Entries = e, this.m_ProfileUIMgr.IDCardMgr.SetAssets(t, e))
                    }
                }, e.prototype.OnClickPlayer = function(t) {
                    console.log("OnClickPlayer, \u8df3\u8f49 ID = " + t + ", \u7576\u524d\u73a9\u5bb6 ID = " + this.m_curProfileData.PlayerData.ArkID), t != this.m_curProfileData.PlayerData.ArkID && (0 == this.m_isJumpToAnotherProfile && (this.m_tmpProfileData = this.m_ProfileSystem.SelfProfileData, null != this.m_tmpProfileData && this.m_tmpProfileData.PlayerData.ArkID != this.m_curProfileData.PlayerData.ArkID && (this.m_tmpProfileData = null)), this.m_isJumpToAnotherProfile = !0, this.m_nodeLoading.active = !0, this.OpenProfile(!1, t))
                }, e.prototype.OnClose = function(t) {
                    void 0 === t && (t = !0), this.m_tmpProfileData && t ? (this.m_ProfileUIMgr.Show(this.m_tmpProfileData), this.m_curProfileData = this.m_tmpProfileData, this.m_forceEntries = -1, this.m_forceWinning = -1, this.m_tmpProfileData = null, this.m_isJumpToAnotherProfile = !1) : this.ClearAndClose()
                }, e.prototype.ClearAndClose = function() {
                    this.m_forceEntries = -1, this.m_forceWinning = -1, this.m_curProfileData = null, this.m_tmpProfileData = null, this.m_isOpenAvatarEditPage = !1, this.m_isJumpToAnotherProfile = !1, this.unschedule(this.CheckGetData), p.EventSystem.Event(p.BeginnersGuide.OnExit).Remove(this.OnBeginnerGuideComplete, this), this.m_nodeLoading.active = !1, this.m_ProfileUIMgr.Clear()
                }, e.prototype.OnCommunityBonusTimesUp = function() {
                    this.m_ProfileUIMgr.IsRootActive() && this.ClearAndClose()
                }, e.prototype.OnSetLoadingDisplay = function(t) {
                    this.m_nodeLoading.active = t
                }, e.prototype.OnCallBeginnerGuideShow = function() {
                    p.EventSystem.Event(p.BeginnersGuide.OnExit).Remove(this.OnBeginnerGuideComplete, this), p.EventSystem.Event(p.BeginnersGuide.OnExit).Insert(this.OnBeginnerGuideComplete, this), p.EventSystem.Event(p.BeginnersGuide.Show).Notify("profile", !0)
                }, e.prototype.OnBeginnerGuideComplete = function(t, e, o) {
                    console.warn("[111]" + e.name + ">> OnBeginnerGuildComplete!! " + t + "(" + o + ")"), "profile" == t && (p.EventSystem.Event(p.BeginnersGuide.OnExit).Remove(this.OnBeginnerGuideComplete, this), o || this.m_ProfileUIMgr.CloseOpenHelp())
                }, e.prototype.CheckCookieExist = function(t) {
                    var e = "";
                    return JSUtility.IsSupportLocalStorage() ? e = localStorage.getItem(t) : JSUtility.IsSupportCookie() && (e = JSUtility.GetCookie(t)), null != e
                }, n([y(f.ProfileUIMgr)], e.prototype, "m_ProfileUIMgr", void 0), n([y(h.ProfileSystem)], e.prototype, "m_ProfileSystem", void 0), n([y(cc.Node)], e.prototype, "m_nodeLoading", void 0), n([y({
                    type: [cc.AudioClip]
                })], e.prototype, "SoundClip", void 0), n([m], e)
            }(cc.Component);
        o.ProfileMgr = _, cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0,
        "../../../Component/BundleCtrl": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../PopupMessage/Script/PopupMsgMgr": void 0,
        "./ProfileSystem": "ProfileSystem",
        "./ProfileUIMgr": "ProfileUIMgr"
    }],
    ProfileRecordMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "052daBjnclAGJnZnDuhvr0c", "ProfileRecordMgr");
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            n = this && this.__decorate || function(t, e, o, i) {
                var r, n = arguments.length,
                    a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(e, o, a) : r(e, o)) || a);
                return n > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.ProfileRecordMgr = void 0;
        var a = t("../../../Component/AudioMgr"),
            s = t("./ProfileData"),
            c = t("./ProfileFavoriteGameCtrl"),
            l = t("./ProfileRecordUnitCtrl"),
            p = t("./ProfileRecoreBestPopupCtrl"),
            u = t("./ProfileRecoreSelfPopupCtrl"),
            h = cc._decorator,
            f = h.ccclass,
            d = h.property,
            m = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.funcClickPlayer = null, e.m_FavoriteGameCtrl = null, e.m_RecoreSelfPopupCtrl = null, e.m_RecoreBestPopupCtrl = null, e.m_RecoreTotalWinCtrl = null, e.m_RecoreMaxJPCtrl = null, e.m_RecoreMaxSlotCtrl = null, e.m_RecoreMaxFishCtrl = null, e.m_BtnHidePopup = null, e.m_v2TmpPos = cc.Vec2.ZERO, e
                }
                return r(e, t), Object.defineProperty(e.prototype, "FavoriteGameCtrl", {
                    get: function() {
                        return this.m_FavoriteGameCtrl
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.Init = function() {
                    this.m_FavoriteGameCtrl.Init(), this.m_RecoreSelfPopupCtrl.Init(), this.m_RecoreBestPopupCtrl.Init(), this.UnitInit(this.m_RecoreTotalWinCtrl), this.UnitInit(this.m_RecoreMaxJPCtrl), this.UnitInit(this.m_RecoreMaxSlotCtrl), this.UnitInit(this.m_RecoreMaxFishCtrl), this.m_FavoriteGameCtrl.funcClickShowHot = this.OnShowHotGame.bind(this), this.m_RecoreBestPopupCtrl.funcClickPlayer = this.OnClickPlayer.bind(this), this.m_BtnHidePopup.node.active = !1
                }, e.prototype.UnitInit = function(t) {
                    t.Init(), t.funcSelfClicked = this.OnShowSelfPopup.bind(this), t.funcBestClicked = this.OnShowBestPopup.bind(this)
                }, e.prototype.Show = function(t) {
                    this.m_FavoriteGameCtrl.UpdateFavoriteGameData(t.FavoriteGameAry), this.m_FavoriteGameCtrl.UpdateHotGameData(t.RecordData.HotGameAry), this.m_RecoreTotalWinCtrl.UpdateData(t.RecordData.RecordTotalWin), this.m_RecoreMaxJPCtrl.UpdateData(t.RecordData.RecordMaxJPWin), this.m_RecoreMaxSlotCtrl.UpdateData(t.RecordData.RecordMaxSlotMultiple), this.m_RecoreMaxFishCtrl.UpdateData(t.RecordData.RecordMaxFishMultiple)
                }, e.prototype.OnShowSelfPopup = function(t, e, o) {
                    this.OnHideOhterPopup(2), this.m_v2TmpPos.y = t, this.m_RecoreSelfPopupCtrl.node.setPosition(this.m_v2TmpPos), this.m_RecoreSelfPopupCtrl.Show(e, o), a.AudioMgr.Instance.Play(s.ProfileSoundClip.BtnShowSelfValue, !1, 1)
                }, e.prototype.OnShowBestPopup = function(t, e, o) {
                    this.OnHideOhterPopup(3), this.m_v2TmpPos.y = t, this.m_RecoreBestPopupCtrl.node.setPosition(this.m_v2TmpPos), this.m_RecoreBestPopupCtrl.Show(e, o), a.AudioMgr.Instance.Play(s.ProfileSoundClip.BtnShowBest, !1, 1)
                }, e.prototype.OnShowHotGame = function() {
                    this.OnHideOhterPopup(1)
                }, e.prototype.OnClickPlayer = function(t) {
                    "" != t && (this.OnHideAllPopup(), this.funcClickPlayer && this.funcClickPlayer(t))
                }, e.prototype.OnHideAllPopup = function() {
                    this.m_RecoreBestPopupCtrl.Hide(), this.m_RecoreSelfPopupCtrl.Hide(), this.m_FavoriteGameCtrl.HideHotGame(), this.m_BtnHidePopup.node.active = !1
                }, e.prototype.OnHideOhterPopup = function(t) {
                    switch (void 0 === t && (t = 0), t) {
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
                }, e.prototype.Clear = function() {
                    this.OnHideAllPopup(), this.m_RecoreTotalWinCtrl.Clear(), this.m_RecoreMaxJPCtrl.Clear(), this.m_RecoreMaxSlotCtrl.Clear(), this.m_RecoreMaxFishCtrl.Clear(), this.m_FavoriteGameCtrl.Clear()
                }, n([d(c.ProfileFavoriteGameCtrl)], e.prototype, "m_FavoriteGameCtrl", void 0), n([d(u.ProfileRecoreSelfPopupCtrl)], e.prototype, "m_RecoreSelfPopupCtrl", void 0), n([d(p.ProfileRecoreBestPopupCtrl)], e.prototype, "m_RecoreBestPopupCtrl", void 0), n([d(l.ProfileRecordUnitCtrl)], e.prototype, "m_RecoreTotalWinCtrl", void 0), n([d(l.ProfileRecordUnitCtrl)], e.prototype, "m_RecoreMaxJPCtrl", void 0), n([d(l.ProfileRecordUnitCtrl)], e.prototype, "m_RecoreMaxSlotCtrl", void 0), n([d(l.ProfileRecordUnitCtrl)], e.prototype, "m_RecoreMaxFishCtrl", void 0), n([d(cc.Button)], e.prototype, "m_BtnHidePopup", void 0), n([f], e)
            }(cc.Component);
        o.ProfileRecordMgr = m, cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0,
        "./ProfileData": "ProfileData",
        "./ProfileFavoriteGameCtrl": "ProfileFavoriteGameCtrl",
        "./ProfileRecordUnitCtrl": "ProfileRecordUnitCtrl",
        "./ProfileRecoreBestPopupCtrl": "ProfileRecoreBestPopupCtrl",
        "./ProfileRecoreSelfPopupCtrl": "ProfileRecoreSelfPopupCtrl"
    }],
    ProfileRecordUnitCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "617dfdbkoFBrKrEH48OlMWO", "ProfileRecordUnitCtrl");
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            n = this && this.__decorate || function(t, e, o, i) {
                var r, n = arguments.length,
                    a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(e, o, a) : r(e, o)) || a);
                return n > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.ProfileRecordUnitCtrl = void 0;
        var a = t("../../../Net/ClickLog"),
            s = t("../../../Net/ClickLogEnum"),
            c = t("./ProfileData"),
            l = cc._decorator,
            p = l.ccclass,
            u = l.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.funcSelfClicked = null, e.funcBestClicked = null, e.m_labCurValue = null, e.m_Type = c.ProfileRecordUnitType.TotalWin, e.m_recordData = null, e.m_posY = 0, e
                }
                return r(e, t), Object.defineProperty(e.prototype, "Type", {
                    get: function() {
                        return this.m_Type
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.Init = function() {
                    this.m_labCurValue.string = "", this.m_recordData = null, this.m_posY = this.node.getPosition().y
                }, e.prototype.UpdateData = function(t) {
                    if (this.m_recordData != t) switch (this.m_labCurValue.spacingX = -1 == t.MaxValue ? 10 : -4, this.m_Type) {
                        case c.ProfileRecordUnitType.BiggestJp:
                        case c.ProfileRecordUnitType.TotalWin:
                            this.m_labCurValue.string = -1 == t.MaxValue ? "$-" : "$ " + t.MaxValue.toLocaleString("en-US", {
                                maximumFractionDigits: 2
                            });
                            break;
                        case c.ProfileRecordUnitType.MaxSlotMultiple:
                        case c.ProfileRecordUnitType.MaxFishMultiple:
                            this.m_labCurValue.fontSize = -1 == t.MaxValue ? 32 : 40, this.m_labCurValue.string = -1 == t.MaxValue ? "X-" : "X " + SS.Common.BaseFunction.addCommas(t.MaxValue, 0)
                    }
                    this.m_recordData = t
                }, e.prototype.OnGuideClickBestRecordIcon = function() {
                    this.ShowBestRecordIcon(!0)
                }, e.prototype.OnClickBestRecordIcon = function() {
                    this.ShowBestRecordIcon()
                }, e.prototype.ShowBestRecordIcon = function(t) {
                    if (void 0 === t && (t = !1), console.log("ProfileRecordUnitCtrl, OnClickBestRecordIcon"), this.funcBestClicked && (this.funcBestClicked(this.m_posY, this.m_Type, this.m_recordData.FirstPlayerData), !t)) {
                        var e = -1;
                        switch (this.m_recordData.RecordType) {
                            case c.ProfileRecordUnitType.TotalWin:
                                e = s.LogEvent_Button.TotalWin;
                                break;
                            case c.ProfileRecordUnitType.BiggestJp:
                                e = s.LogEvent_Button.MaxJP;
                                break;
                            case c.ProfileRecordUnitType.MaxSlotMultiple:
                                e = s.LogEvent_Button.MultiSlot;
                                break;
                            case c.ProfileRecordUnitType.MaxFishMultiple:
                                e = s.LogEvent_Button.MultiFish
                        }
                        a.ClickLog.recordClickLog(s.LogName.Profile, 0, s.LogType_Profile.Button, e)
                    }
                }, e.prototype.OnGuideClickSelfRecord = function() {
                    this.ShowSelfRecord(!0)
                }, e.prototype.OnClickSelfRecord = function() {
                    this.ShowSelfRecord()
                }, e.prototype.ShowSelfRecord = function(t) {
                    if (void 0 === t && (t = !1), console.log("ProfileRecordUnitCtrl, OnClickSelfRecord"), this.funcSelfClicked && (this.funcSelfClicked(this.m_posY, this.m_recordData.FirstPlayerData.RecoreTitle, this.m_recordData.MaxPercent), !t)) {
                        var e = -1;
                        switch (this.m_recordData.RecordType) {
                            case c.ProfileRecordUnitType.TotalWin:
                                e = s.LogEvent_Button.TotalWin_Value;
                                break;
                            case c.ProfileRecordUnitType.BiggestJp:
                                e = s.LogEvent_Button.MaxJP_Value;
                                break;
                            case c.ProfileRecordUnitType.MaxSlotMultiple:
                                e = s.LogEvent_Button.MultiSlot_Value;
                                break;
                            case c.ProfileRecordUnitType.MaxFishMultiple:
                                e = s.LogEvent_Button.MultiFish_Value
                        }
                        a.ClickLog.recordClickLog(s.LogName.Profile, 0, s.LogType_Profile.Button, e)
                    }
                }, e.prototype.Clear = function() {
                    this.m_labCurValue.string = "", this.m_recordData = null
                }, n([u(cc.Label)], e.prototype, "m_labCurValue", void 0), n([u({
                    type: cc.Enum(c.ProfileRecordUnitType)
                })], e.prototype, "m_Type", void 0), n([p], e)
            }(cc.Component);
        o.ProfileRecordUnitCtrl = h, cc._RF.pop()
    }, {
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "./ProfileData": "ProfileData"
    }],
    ProfileRecoreBestPopupCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a953dal0q5IU4s4+jnli5Jf", "ProfileRecoreBestPopupCtrl");
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            n = this && this.__decorate || function(t, e, o, i) {
                var r, n = arguments.length,
                    a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(e, o, a) : r(e, o)) || a);
                return n > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.ProfileRecoreBestPopupCtrl = void 0;
        var a = t("../../../Component/AvatarIcon"),
            s = t("../../../Net/ClickLog"),
            c = t("../../../Net/ClickLogEnum"),
            l = t("./ProfileData"),
            p = cc._decorator,
            u = p.ccclass,
            h = p.property,
            f = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.funcClickPlayer = null, e.m_labTitle = null, e.m_labNickname = null, e.m_labBestVal = null, e.m_AvatarIcon = null, e.m_colorYellow = new cc.Color(255, 255, 140, 255), e.m_colorOrange = new cc.Color(255, 180, 100, 255), e.m_curData = null, e.m_curType = null, e
                }
                return r(e, t), e.prototype.Init = function() {}, e.prototype.Show = function(t, e) {
                    if (t == this.m_curType && this.node.activeInHierarchy) this.Hide();
                    else {
                        switch (this.node.active = !0, this.m_curData = e, this.m_curType = t, this.m_labTitle.string = e.RecoreTitle, this.m_labNickname.string = e.NickName, t) {
                            case l.ProfileRecordUnitType.TotalWin:
                            case l.ProfileRecordUnitType.BiggestJp:
                                this.m_labBestVal.string = "$" + e.RecoreValue.toLocaleString("en-US", {
                                    maximumFractionDigits: 2
                                }), this.m_labBestVal.node.color = this.m_colorYellow;
                                break;
                            case l.ProfileRecordUnitType.MaxSlotMultiple:
                            case l.ProfileRecordUnitType.MaxFishMultiple:
                                this.m_labBestVal.string = "X " + SS.Common.BaseFunction.addCommas(e.RecoreValue, 0), this.m_labBestVal.node.color = this.m_colorOrange
                        }
                        "" == e.ArkID && (this.m_labNickname.string = "-", this.m_labBestVal.string = "no data"), this.m_AvatarIcon.SetFaceByID(this.m_curData.FaceID), this.m_AvatarIcon.SetFrameByID(this.m_curData.FaceFrameID)
                    }
                }, e.prototype.Hide = function() {
                    this.node.active = !1
                }, e.prototype.OnClickGoBestPlayer = function() {
                    if (console.log("OnClickGoBestPlayer, this.m_tmpData.ArkID = " + this.m_curData.ArkID), "" != this.m_curData.ArkID && this.funcClickPlayer) {
                        var t = -1;
                        switch (this.m_curData.RecordType) {
                            case l.ProfileRecordUnitType.TotalWin:
                                t = c.LogEvent_OpenOthersPanel.InProfileNo1_TotalWin;
                                break;
                            case l.ProfileRecordUnitType.BiggestJp:
                                t = c.LogEvent_OpenOthersPanel.InProfileNo1_MaxJP;
                                break;
                            case l.ProfileRecordUnitType.MaxSlotMultiple:
                                t = c.LogEvent_OpenOthersPanel.InProfileNo1_MultiSlot;
                                break;
                            case l.ProfileRecordUnitType.MaxFishMultiple:
                                t = c.LogEvent_OpenOthersPanel.InProfileNo1_MultiFish
                        }
                        s.ClickLog.recordClickLog(c.LogName.Profile, 0, c.LogType_Profile.OpenOthersPanel, t), this.funcClickPlayer(this.m_curData.ArkID), this.Hide()
                    }
                }, n([h(cc.Label)], e.prototype, "m_labTitle", void 0), n([h(cc.Label)], e.prototype, "m_labNickname", void 0), n([h(cc.Label)], e.prototype, "m_labBestVal", void 0), n([h(a.default)], e.prototype, "m_AvatarIcon", void 0), n([u], e)
            }(cc.Component);
        o.ProfileRecoreBestPopupCtrl = f, cc._RF.pop()
    }, {
        "../../../Component/AvatarIcon": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "./ProfileData": "ProfileData"
    }],
    ProfileRecoreSelfPopupCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "844bfBYde5HxpkvTQtlGbC9", "ProfileRecoreSelfPopupCtrl");
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            n = this && this.__decorate || function(t, e, o, i) {
                var r, n = arguments.length,
                    a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(e, o, a) : r(e, o)) || a);
                return n > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.ProfileRecoreSelfPopupCtrl = void 0;
        var a = t("../../../Component/AudioMgr"),
            s = t("../../../Component/NumberCountUp"),
            c = t("./ProfileData"),
            l = cc._decorator,
            p = l.ccclass,
            u = l.property,
            h = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.m_labTitle = null, e.m_CurPercentCountUp = null, e.m_nodeMinPos = null, e.m_nodeMaxPos = null, e.m_nodeProcArrow = null, e.m_iStartPosX = 0, e.m_iDistance = 0, e.m_v3Pos = cc.Vec3.ZERO, e.tween = null, e.m_iTweenDuration = .5, e
                }
                return r(e, t), e.prototype.Init = function() {
                    this.m_iStartPosX = this.m_nodeMinPos.getPosition().x, this.m_v3Pos.y = this.m_nodeProcArrow.getPosition().y, this.m_iDistance = this.m_nodeMaxPos.getPosition().x - this.m_iStartPosX, this.m_CurPercentCountUp.SetNumberFormat(!0, !1, !0)
                }, e.prototype.Show = function(t, e) {
                    this.m_labTitle.string = t, this.node.active = !0, this.tween && this.tween.stop(), this.m_v3Pos.x = this.m_iStartPosX, this.m_nodeProcArrow.setPosition(this.m_v3Pos);
                    var o = .01 * this.m_iDistance * e + this.m_iStartPosX;
                    this.m_v3Pos.x = o, this.tween = cc.tween(this.m_nodeProcArrow).to(this.m_iTweenDuration, {
                        position: this.m_v3Pos
                    }, {
                        easing: "sineInOut"
                    }).start(), this.m_CurPercentCountUp.SetNumberNow(0), this.m_CurPercentCountUp.CountUp(e, .5), e > 0 && a.AudioMgr.Instance.Play(c.ProfileSoundClip.SelfBeat, !1, 1)
                }, e.prototype.Hide = function() {
                    this.node.active = !1, this.Init()
                }, n([u(cc.Label)], e.prototype, "m_labTitle", void 0), n([u(s.NumberCountUp)], e.prototype, "m_CurPercentCountUp", void 0), n([u(cc.Node)], e.prototype, "m_nodeMinPos", void 0), n([u(cc.Node)], e.prototype, "m_nodeMaxPos", void 0), n([u(cc.Node)], e.prototype, "m_nodeProcArrow", void 0), n([p], e)
            }(cc.Component);
        o.ProfileRecoreSelfPopupCtrl = h, cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0,
        "../../../Component/NumberCountUp": void 0,
        "./ProfileData": "ProfileData"
    }],
    ProfileSystem: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6865fNKuqBOIKaw54LQXCgg", "ProfileSystem");
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            n = this && this.__decorate || function(t, e, o, i) {
                var r, n = arguments.length,
                    a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(e, o, a) : r(e, o)) || a);
                return n > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.ProfileSystem = void 0;
        var a = t("../../../Net/ClickLog"),
            s = t("../../../Net/ClickLogEnum"),
            c = t("../../../Net/LobbyClient"),
            l = t("../../../PopupMessage/Script/PopupMsgMgr"),
            p = t("./ProfileData"),
            u = cc._decorator,
            h = u.ccclass,
            f = (u.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.funcGetProfile = null, e.SaveSelfProfileData = null, e.SaveOtherProfileData = [], e.SelfUpdateTimeInterval = 15, e.OtherUpdateTimeInterval = 60, e
                }
                return r(e, t), Object.defineProperty(e.prototype, "SelfProfileData", {
                    get: function() {
                        return this.SaveSelfProfileData
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.Init = function() {}, e.prototype.TestData = function() {
                    var t = new p.ProfilePlayerData;
                    t.ArkID = SS.Network.LoginModel.LoginInfo.pin_ark_id, t.NickName = "wei test", t.FaceID = "FAC002", t.FaceFrameID = "FRM001", t.IsSelf = !0;
                    var e = this.CreateTestFirstPlayerData(0),
                        o = this.CreateTestFirstPlayerData(1),
                        i = this.CreateTestFirstPlayerData(2),
                        r = this.CreateTestFirstPlayerData(3),
                        n = new p.ProfileRecordData,
                        a = new p.HotGameData,
                        s = new p.HotGameData,
                        c = new p.HotGameData;
                    a.GameID = "126001", a.Typt = "Slot", s.GameID = "154001", s.Typt = "Slot", c.GameID = "148001", c.Typt = "Fish", n.HotGameAry.push(a), n.HotGameAry.push(s), n.HotGameAry.push(c), n.RecordTotalWin = e, n.RecordMaxJPWin = o, n.RecordMaxSlotMultiple = i, n.RecordMaxFishMultiple = r;
                    var l = new p.ProfileData;
                    l.Entries = 1e3, l.Winnings = 2e3, l.FavoriteGameAry = ["100001", "172001", "154001"], l.PlayerData = t, l.RecordData = n, this.SaveSelfProfileData = l
                }, e.prototype.TestOherData = function() {
                    var t = new p.ProfilePlayerData;
                    t.ArkID = "1234567", t.NickName = "this is Other", t.FaceID = "FAC001", t.FaceFrameID = "FRM001", t.IsSelf = !1;
                    var e = this.CreateTestFirstPlayerData(4),
                        o = this.CreateTestFirstPlayerData(3),
                        i = this.CreateTestFirstPlayerData(2),
                        r = this.CreateTestFirstPlayerData(1),
                        n = new p.ProfileRecordData,
                        a = new p.HotGameData,
                        s = new p.HotGameData,
                        c = new p.HotGameData;
                    a.GameID = "126001", a.Typt = "Slot", s.GameID = "154001", s.Typt = "Slot", c.GameID = "148001", c.Typt = "Fish", n.HotGameAry.push(a), n.HotGameAry.push(s), n.HotGameAry.push(c), n.RecordTotalWin = e, n.RecordMaxJPWin = o, n.RecordMaxSlotMultiple = i, n.RecordMaxFishMultiple = r;
                    var l = new p.ProfileData;
                    l.Entries = 1e4, l.Winnings = 9999, l.FavoriteGameAry = ["160001", "163001", "158001"], l.PlayerData = t, l.RecordData = n, this.SaveOtherProfileData.push(l)
                }, e.prototype.CreateTestFirstPlayerData = function(t) {
                    var e = new p.RecordFirstPlayerData;
                    e.RecoreTitle = "Best Record " + t.toString(), e.RecoreValue = 1e3 * (t + 1), e.ArkID = "1234567", e.NickName = "JP first " + t.toString(), e.FaceID = "FAC003", e.FaceFrameID = "FRM001", e.IsSelf = !1;
                    var o = new p.RecordPlayerData;
                    return o.MaxValue = t, o.MaxPercent = 20 * (t + 1), o.FirstPlayerData = e, o
                }, e.prototype.ClearSelfUpdateCDTime = function() {
                    this.SaveSelfProfileData && (this.SaveSelfProfileData.LastUpdateTimestmp = 0)
                }, e.prototype.GetProfileData = function(t, e) {
                    var o = !0,
                        i = null;
                    if (t) this.SaveSelfProfileData && ((o = this.CheckTimeUpdate(this.SaveSelfProfileData.LastUpdateTimestmp, this.SelfUpdateTimeInterval)) || (i = this.SaveSelfProfileData));
                    else {
                        var r = this.GetOtherPlayerDataIndex(e);
                        if (-1 != r) {
                            var n = this.SaveOtherProfileData[r];
                            (o = this.CheckTimeUpdate(n.LastUpdateTimestmp, this.OtherUpdateTimeInterval)) || (i = n)
                        }
                    }
                    return o || null == i ? (this.SendGetPlayerProfileInfo(e), null) : i
                }, e.prototype.GetOtherPlayerData = function(t) {
                    return this.SaveOtherProfileData.find(function(e) {
                        return e.PlayerData.ArkID == t
                    })
                }, e.prototype.GetOtherPlayerDataIndex = function(t) {
                    return this.SaveOtherProfileData.findIndex(function(e) {
                        return e.PlayerData.ArkID == t
                    })
                }, e.prototype.GetNowTime = function() {
                    return .001 * Date.now()
                }, e.prototype.CheckTimeUpdate = function(t, e) {
                    var o = this.GetNowTime() - t;
                    return console.warn("CheckTimeUpdate \u6642\u9593\u9593\u9694 = " + o), o >= e
                }, e.prototype.SendGetPlayerProfileInfo = function(t, e) {
                    void 0 === e && (e = null), console.warn("SendGetPlayerProfileInfo : playerID = " + t), c.LobbyClient.Instance.GetUserClient.GetProfileInfo(t, this.RecvProfileInfo.bind(this))
                }, e.prototype.RecvProfileInfo = function(t, e) {
                    console.warn("RecvProfileInfo : " + t), console.warn(e), t == ArkSDK.HttpResult.OK && e && e.cmd_data ? 0 == e.cmd_data.result ? e.cmd_data.hasOwnProperty("data") && this.PasreProfileData(e.cmd_data.data) : this.funcGetProfile && this.funcGetProfile(null) : (this.funcGetProfile && this.funcGetProfile(null), this.CheckCommonError(t))
                }, e.prototype.PasreProfileData = function(t) {
                    var e = new p.ProfilePlayerData,
                        o = t.player_data;
                    e.ArkID = o.ark_id, e.NickName = o.nickname, e.FaceID = o.avatar_id, e.FaceFrameID = o.avatar_frame_id, e.FaceIDExpireTime = -1 == o.avatar_expired_time ? -1 : Date.parse(o.avatar_expired_time + "Z"), e.FaceFrameIDExpireTime = -1 == o.avatar_frame_expired_time ? -1 : Date.parse(o.avatar_frame_expired_time + "Z"), e.IsSelf = e.ArkID == SS.Network.LoginModel.LoginInfo.pin_ark_id;
                    for (var i = new p.ProfileRecordData, r = t.hot_game, n = 0; n < r.length; n++) {
                        var a = r[n],
                            s = new p.HotGameData;
                        s.GameID = a.game_id, s.Typt = a.game_type, i.HotGameAry.push(s)
                    }
                    var c = t.record_data;
                    for (n = 0; n < c.length; n++) {
                        var l = c[n],
                            u = new p.RecordPlayerData;
                        u.RecordType = l.record_type, null != l.record_value && (u.MaxValue = l.record_value), null != l.record_percent && (u.MaxPercent = l.record_percent);
                        var h = new p.RecordFirstPlayerData,
                            f = l.best_record_info.player_data;
                        switch (null != f && (h.ArkID = f.ark_id, h.NickName = f.nickname, h.FaceID = f.avatar_id, h.FaceFrameID = f.avatar_frame_id, h.RecoreValue = l.best_record_info.record_value, h.RecordType = u.RecordType), u.FirstPlayerData = h, u.RecordType) {
                            case p.ProfileRecordUnitType.TotalWin:
                                h.RecoreTitle = "Big Winner", i.RecordTotalWin = u;
                                break;
                            case p.ProfileRecordUnitType.BiggestJp:
                                h.RecoreTitle = "Jackpot King", i.RecordMaxJPWin = u;
                                break;
                            case p.ProfileRecordUnitType.MaxSlotMultiple:
                                h.RecoreTitle = "Grand Champion", i.RecordMaxSlotMultiple = u;
                                break;
                            case p.ProfileRecordUnitType.MaxFishMultiple:
                                h.RecoreTitle = "Fish King", i.RecordMaxFishMultiple = u
                        }
                    }
                    var d = new p.ProfileData,
                        m = t.player_asset;
                    if (d.Winnings = m.winnings, d.Entries = m.entries, d.FavoriteGameAry = t.favorite_game, d.PlayerData = e, d.RecordData = i, d.LastUpdateTimestmp = this.GetNowTime(), e.IsSelf) this.SaveSelfProfileData = d, SS.Network.UserClient.UserInfo.avatar_id = d.PlayerData.FaceID, SS.Network.UserClient.UserInfo.avatar_frame_id = d.PlayerData.FaceFrameID, SS.Network.UserClient.UserInfo.avatar_expired_time = d.PlayerData.FaceIDExpireTime, SS.Network.UserClient.UserInfo.avatar_frame_expired_time = d.PlayerData.FaceFrameIDExpireTime, SS.Network.UserClient.UserInfo.nickname = d.PlayerData.NickName;
                    else {
                        var y = this.GetOtherPlayerDataIndex(e.ArkID); - 1 != y ? this.SaveOtherProfileData[y] = d : this.SaveOtherProfileData.push(d)
                    }
                    this.funcGetProfile && this.funcGetProfile(d)
                }, e.prototype.CheckCommonError = function(t) {
                    var e = !0;
                    return t == ArkSDK.HttpResult.Abort ? this.ShowError("S397", "ERROR Status:" + t) : t == ArkSDK.HttpResult.Condition ? this.ShowError("S398", "ERROR Status:" + t) : t == ArkSDK.HttpResult.Error ? this.ShowError("S399", "ERROR Status:" + t) : t == ArkSDK.HttpResult.NotReset ? this.ShowError("S400", "ERROR Status:" + t) : t == ArkSDK.HttpResult.Status ? this.ShowError("S401", "ERROR Status:" + t) : t == ArkSDK.HttpResult.Timeout ? this.ShowError("S402", "ERROR Status:" + t) : e = !1, -39 == t ? a.ClickLog.recordClickLog(s.LogName.Profile, -1, s.LogType_Profile.Nickname, s.LogEvent_Nickname.Failed_Duplicate) : -40 == t ? a.ClickLog.recordClickLog(s.LogName.Profile, -1, s.LogType_Profile.Nickname, s.LogEvent_Nickname.Failed_TooLong) : -42 == t && a.ClickLog.recordClickLog(s.LogName.Profile, -1, s.LogType_Profile.Nickname, s.LogEvent_Nickname.Failed_BannedWords), e
                }, e.prototype.ShowError = function(t, e) {
                    console.error("[AvatarSetting]ERROR!" + t + " ; reason: " + e), l.PopupMsgMgr.Instance.ShowPopMsg(l.PopupPriority.Critical, t, SS.Common.GameEnvironment.CurrentGameNow, e)
                }, n([h], e)
            }(cc.Component));
        o.ProfileSystem = f, cc._RF.pop()
    }, {
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "../../../Net/LobbyClient": void 0,
        "../../../PopupMessage/Script/PopupMsgMgr": void 0,
        "./ProfileData": "ProfileData"
    }],
    ProfileTabMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "98c4bqOv29EpKk+doKYS672", "ProfileTabMgr");
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            n = this && this.__decorate || function(t, e, o, i) {
                var r, n = arguments.length,
                    a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(e, o, a) : r(e, o)) || a);
                return n > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.ProfileTabMgr = void 0;
        var a = t("./ProfileTab"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.funcClicked = null, e.m_nodeRoot = null, e.m_scrollView = null, e.m_layout = null, e.m_aryTabs = [], e.m_strCurFocusType = "", e
                }
                return r(e, t), e.prototype.isShowing = function() {
                    return this.m_nodeRoot.active
                }, e.prototype.length = function() {
                    return this.m_aryTabs.length
                }, e.prototype.onDestroy = function() {
                    this.Exit()
                }, e.prototype.Exit = function() {
                    this.m_aryTabs = [], this.m_strCurFocusType = ""
                }, e.prototype.Init = function() {
                    for (var t = 0; t < this.m_aryTabs.length; t++) this.m_aryTabs[t].m_funcClicked = this.OnClick.bind(this)
                }, e.prototype.OnClick = function(t) {
                    var e = this;
                    if (t.type != this.m_strCurFocusType) {
                        t.SetFocus(this.m_aryTabs.length);
                        var o = this.m_aryTabs.find(function(t) {
                            return t.type == e.m_strCurFocusType
                        });
                        null != o && o.SetNormal(), this.m_strCurFocusType = t.type, null != this.funcClicked && this.funcClicked(t.type)
                    }
                }, n([l(cc.Node)], e.prototype, "m_nodeRoot", void 0), n([l(cc.ScrollView)], e.prototype, "m_scrollView", void 0), n([l(cc.Layout)], e.prototype, "m_layout", void 0), n([l([a.default])], e.prototype, "m_aryTabs", void 0), n([c], e)
            }(cc.Component);
        o.ProfileTabMgr = p, cc._RF.pop()
    }, {
        "./ProfileTab": "ProfileTab"
    }],
    ProfileTab: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "0066aulL+hMjJPawpwXPTKt", "ProfileTab");
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            n = this && this.__decorate || function(t, e, o, i) {
                var r, n = arguments.length,
                    a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(e, o, a) : r(e, o)) || a);
                return n > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            s = a.ccclass,
            c = a.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.index = -1, e.type = "", e.m_nodeNormal = null, e.m_txtNormal = null, e.m_nodeFocus = null, e.m_txtFocus = null, e.m_nodeRedPoint = null, e.m_btn = null, e.m_isChangeSiblingIndex = !0, e.m_funcClicked = null, e
                }
                return r(e, t), e.prototype.SetNormal = function() {
                    this.m_nodeFocus.active = !1, this.m_nodeNormal.active = !0, this.m_sizeNormal && this.node.setContentSize(this.m_sizeNormal), this.m_isChangeSiblingIndex && this.node.setSiblingIndex(this.index)
                }, e.prototype.SetFocus = function(t) {
                    void 0 === t && (t = 99), this.m_nodeFocus.active = !0, this.m_nodeNormal.active = !1, this.m_sizeFocus && this.node.setContentSize(this.m_sizeFocus), this.m_isChangeSiblingIndex && this.node.setSiblingIndex(t)
                }, e.prototype.ShowRedPoint = function() {
                    this.m_nodeRedPoint.active = !0
                }, e.prototype.HideRedPoint = function() {
                    this.m_nodeRedPoint.active = !1
                }, e.prototype.OnClick = function() {
                    this.m_nodeFocus.active || null != this.m_funcClicked && this.m_funcClicked(this)
                }, n([c(cc.Node)], e.prototype, "m_nodeNormal", void 0), n([c(cc.Label)], e.prototype, "m_txtNormal", void 0), n([c(cc.Size)], e.prototype, "m_sizeNormal", void 0), n([c(cc.Node)], e.prototype, "m_nodeFocus", void 0), n([c(cc.Label)], e.prototype, "m_txtFocus", void 0), n([c(cc.Size)], e.prototype, "m_sizeFocus", void 0), n([c(cc.Node)], e.prototype, "m_nodeRedPoint", void 0), n([c(cc.Button)], e.prototype, "m_btn", void 0), n([c], e.prototype, "m_isChangeSiblingIndex", void 0), n([s], e)
            }(cc.Component);
        o.default = l, cc._RF.pop()
    }, {}],
    ProfileUIMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "86edfnt9TFJBb2URt5OlPjZ", "ProfileUIMgr");
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            n = this && this.__decorate || function(t, e, o, i) {
                var r, n = arguments.length,
                    a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(e, o, a) : r(e, o)) || a);
                return n > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.ProfileUIMgr = void 0;
        var a = t("../../../Component/AudioMgr"),
            s = t("../../../Helper/EventSystem"),
            c = t("../../../Net/ClickLog"),
            l = t("../../../Net/ClickLogEnum"),
            p = t("./ProfileData"),
            u = t("./ProfileIDCardMgr"),
            h = t("./ProfileRecordMgr"),
            f = t("./ProfileTabMgr"),
            d = cc._decorator,
            m = d.ccclass,
            y = d.property,
            _ = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.funcOnCallHelp = null, e.funOnClose = null, e.m_Root = null, e.m_TabMgr = null, e.m_IDCardMgr = null, e.m_RecordMgr = null, e.m_curTabIndex = 0, e.m_sCurGameName = "", e
                }
                return r(e, t), Object.defineProperty(e.prototype, "IDCardMgr", {
                    get: function() {
                        return this.m_IDCardMgr
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "RecordMgr", {
                    get: function() {
                        return this.m_RecordMgr
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.Init = function() {
                    this.m_TabMgr.funcClicked = this.OnTabClick.bind(this), this.m_RecordMgr.Init(), this.m_RecordMgr.FavoriteGameCtrl.funcClickGame = this.OnGameClick.bind(this), this.m_IDCardMgr.Init(), this.m_Root.active = !1
                }, e.prototype.Show = function(t, e) {
                    void 0 === e && (e = !1), a.AudioMgr.Instance.Play(p.ProfileSoundClip.OpenProfile, !1, 1), this.m_Root.active = !0, this.m_IDCardMgr.Show(t, e), this.m_RecordMgr.Show(t)
                }, e.prototype.SetRootActive = function(t) {
                    this.m_Root.active = t
                }, e.prototype.IsRootActive = function() {
                    return this.m_Root.activeInHierarchy
                }, e.prototype.OnTabClick = function(t) {
                    a.AudioMgr.Instance.Play(p.ProfileSoundClip.BtnTab, !1, 1), this.m_curTabIndex = 0, this.ShowCategoryContent(t)
                }, e.prototype.ShowCategoryContent = function(t, e) {
                    void 0 === e && (e = !1)
                }, e.prototype.OnGameClick = function(t) {
                    console.log("[ProfileUIMgr] %c OnGameClick gameName = ", "font-size:18px;font-weight:bold;color:orange;", t), a.AudioMgr.Instance.Play(p.ProfileSoundClip.BtnGame, !1, 1), s.EventSystem.Event(s.SwitchGame).Notify(t), this.Close(!1)
                }, e.prototype.OnClose = function() {
                    a.AudioMgr.Instance.Play(p.ProfileSoundClip.BtnX, !1, 1), this.Close()
                }, e.prototype.Close = function(t) {
                    void 0 === t && (t = !0), this.funOnClose && this.funOnClose(t)
                }, e.prototype.Clear = function() {
                    this.m_RecordMgr.Clear(), this.m_IDCardMgr.Clear(), this.SetRootActive(!1)
                }, e.prototype.OnClickHelp = function() {
                    this.funcOnCallHelp && this.funcOnCallHelp(), this.m_IDCardMgr.m_forceOpenHelpInSettingUI = !0, c.ClickLog.recordClickLog(l.LogName.Profile, 0, l.LogType_Profile.Button, l.LogEvent_Button.Guide)
                }, e.prototype.CloseOpenHelp = function() {
                    a.AudioMgr.Instance.Play(p.ProfileSoundClip.BtnX, !1, 1), this.m_IDCardMgr.m_forceOpenHelpInSettingUI = !1
                }, n([y(cc.Node)], e.prototype, "m_Root", void 0), n([y(f.ProfileTabMgr)], e.prototype, "m_TabMgr", void 0), n([y(u.ProfileIDCardMgr)], e.prototype, "m_IDCardMgr", void 0), n([y(h.ProfileRecordMgr)], e.prototype, "m_RecordMgr", void 0), n([m], e)
            }(cc.Component);
        o.ProfileUIMgr = _, cc._RF.pop()
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
    SwitchSprite: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b0547ZrwBRGwYJzLoU3xkUQ", "SwitchSprite");
        var i, r = this && this.__extends || (i = function(t, e) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var o in e) e.hasOwnProperty(o) && (t[o] = e[o])
                    })(t, e)
            }, function(t, e) {
                function o() {
                    this.constructor = t
                }
                i(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            n = this && this.__decorate || function(t, e, o, i) {
                var r, n = arguments.length,
                    a = n < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(r = t[s]) && (a = (n < 3 ? r(a) : n > 3 ? r(e, o, a) : r(e, o)) || a);
                return n > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.SpriteFrameSetting = void 0;
        var a = cc._decorator,
            s = a.ccclass,
            c = a.property,
            l = function() {
                function t() {
                    this.targetSpriteFrame = null, this.key = ""
                }
                return n([c({
                    type: cc.SpriteFrame,
                    displayName: "\u5716\u7247"
                })], t.prototype, "targetSpriteFrame", void 0), n([c({
                    displayName: "KEY"
                })], t.prototype, "key", void 0), n([s("SpriteFrameSetting")], t)
            }();
        o.SpriteFrameSetting = l;
        var p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.sprite = null, e.spriteFrameAry = [], e
            }
            return r(e, t), e.prototype.ChangeSprite = function(t) {
                var e = this.spriteFrameAry.find(function(e) {
                    return e.key == t
                });
                e ? this.sprite.spriteFrame = e.targetSpriteFrame : console.error("[SwitchSprite]Not Find Key: " + t)
            }, n([c(cc.Sprite)], e.prototype, "sprite", void 0), n([c([l])], e.prototype, "spriteFrameAry", void 0), n([s], e)
        }(cc.Component);
        o.default = p, cc._RF.pop()
    }, {}]
}, {}, ["AvatarSettingBeginnerGuide", "AvatarSettingInfo", "AvatarSettingItem", "AvatarSettingMenu", "AvatarSettingMgr", "AvatarSettingPage", "BeginnersGuideJumper", "ChangeNicknameCtrl", "ProfileData", "ProfileFavoriteGame", "ProfileFavoriteGameCtrl", "ProfileIDCardMgr", "ProfileMgr", "ProfileRecordMgr", "ProfileRecordUnitCtrl", "ProfileRecoreBestPopupCtrl", "ProfileRecoreSelfPopupCtrl", "ProfileSystem", "ProfileTab", "ProfileTabMgr", "ProfileUIMgr", "SwitchSprite"]);