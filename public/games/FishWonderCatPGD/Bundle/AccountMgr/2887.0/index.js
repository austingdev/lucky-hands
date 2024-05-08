window.__require = function t(e, o, n) {
    function c(r, s) {
        if (!o[r]) {
            if (!e[r]) {
                var a = r.split("/");
                if (a = a[a.length - 1], !e[a]) {
                    var u = "function" == typeof __require && __require;
                    if (!s && u) return u(a, !0);
                    if (i) return i(a, !0);
                    throw new Error("Cannot find module '" + r + "'")
                }
                r = a
            }
            var l = o[r] = {
                exports: {}
            };
            e[r][0].call(l.exports, function(t) {
                return c(e[r][1][t] || t)
            }, l, l.exports, t, e, o, n)
        }
        return o[r].exports
    }
    for (var i = "function" == typeof __require && __require, r = 0; r < n.length; r++) c(n[r]);
    return c
}({
    AccountPageMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c53a9JhbnpLv4XZwJ1UynFu", "AccountPageMgr");
        var n, c = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
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
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            i = this && this.__decorate || function(t, e, o, n) {
                var c, i = arguments.length,
                    r = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(c = t[s]) && (r = (i < 3 ? c(r) : i > 3 ? c(e, o, r) : c(e, o)) || r);
                return i > 3 && r && Object.defineProperty(e, o, r), r
            },
            r = this && this.__awaiter || function(t, e, o, n) {
                return new(o || (o = Promise))(function(c, i) {
                    function r(t) {
                        try {
                            a(n.next(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function s(t) {
                        try {
                            a(n.throw(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(t) {
                        var e;
                        t.done ? c(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(r, s)
                    }
                    a((n = n.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var o, n, c, i, r = {
                    label: 0,
                    sent: function() {
                        if (1 & c[0]) throw c[1];
                        return c[1]
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
                        return a([t, e])
                    }
                }

                function a(i) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; r;) try {
                        if (o = 1, n && (c = 2 & i[0] ? n.return : i[0] ? n.throw || ((c = n.return) && c.call(n), 0) : n.next) && !(c = c.call(n, i[1])).done) return c;
                        switch (n = 0, c && (i = [2 & i[0], c.value]), i[0]) {
                            case 0:
                            case 1:
                                c = i;
                                break;
                            case 4:
                                return r.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                r.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = r.ops.pop(), r.trys.pop();
                                continue;
                            default:
                                if (!(c = (c = r.trys).length > 0 && c[c.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    r = 0;
                                    continue
                                }
                                if (3 === i[0] && (!c || i[1] > c[0] && i[1] < c[3])) {
                                    r.label = i[1];
                                    break
                                }
                                if (6 === i[0] && r.label < c[1]) {
                                    r.label = c[1], c = i;
                                    break
                                }
                                if (c && r.label < c[2]) {
                                    r.label = c[2], r.ops.push(i);
                                    break
                                }
                                c[2] && r.ops.pop(), r.trys.pop();
                                continue
                        }
                        i = e.call(t, r)
                    } catch (s) {
                        i = [6, s], n = 0
                    } finally {
                        o = c = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.AccountPageMgr = void 0;
        var a = t("../../../LobbyCommon/Connect/Script/ConnectPanelMgr"),
            u = t("../../../LobbyCommon/Helper/EventSystem"),
            l = t("../../../LobbyCommon/ModuleBase"),
            p = t("../../../LobbyCommon/Net/LobbyClient"),
            h = t("../../../LobbyCommon/PopupMessage/Script/PopupMsgMgr"),
            g = cc._decorator,
            d = g.ccclass,
            f = g.property,
            m = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.customeAccountPage = null, e.custom_UserName = null, e.defaultAccountPage = null, e.default_UserName = null, e.root = null, e.accountPageRoot = null, e.msgRoot = null, e.msgToggle = null, e.reCheckPage = null, e.reCheckPageLabel = null, e.popup = null, e.isShowAniNow = !1, e.recvCmdCallBack = null, e.isShowPhoneMsg = !1, e.isSelectPhoneMsgOption = !1, e.checkAndShowPopup = null, e
                }
                return c(e, t), e.prototype._onLoad = function() {
                    return r(this, void 0, void 0, function() {
                        return s(this, function() {
                            return u.EventSystem.Event(u.Account.Show).Insert(this.ShowAccountPage, this), [2]
                        })
                    })
                }, e.prototype._onDestroy = function() {
                    return r(this, void 0, void 0, function() {
                        return s(this, function() {
                            return u.EventSystem.Event(u.Account.Show).Remove(this.ShowAccountPage, this), [2]
                        })
                    })
                }, e.prototype.ShowPhoneMsgPopupEvent = function() {
                    this.popup.active = !0, this.root.active = !0, this.recvCmdCallBack = function() {
                        this.popup.active = !1, this.root.active = !1, this.recvCmdCallBack = null, this.checkAndShowPopup()
                    }
                }, e.prototype.OnClickPopupBtn = function(t, e) {
                    "true" == e ? this.SendSmsChangeCmd(!0) : this.SendSmsChangeCmd(!1)
                }, e.prototype.ShowAccountPage = function(t) {
                    this.isShowAniNow || (t.includes("m-") || t.includes("M-") ? (this.default_UserName.string = t, this.defaultAccountPage.active = !0, this.customeAccountPage.active = !1) : (this.custom_UserName.string = t, this.defaultAccountPage.active = !1, this.customeAccountPage.active = !0), this.isShowPhoneMsg && (this.msgRoot.parent = this.root, this.msgRoot.active = !0, this.msgToggle.isChecked = this.isSelectPhoneMsgOption), u.EventSystem.Event(u.SystemMsg.Open).Notify(this.root, new cc.Size(780, 400), new cc.Size(700, 400), 150, this.OnClickClose.bind(this)), this.accountPageRoot.active = !0, this.root.active = !0)
                }, e.prototype.OnToggleMsgOptions = function() {
                    var t = this.msgToggle.isChecked ? "I would like to receive GD latest news through text messages." : "I don\u2019t want to receive GD latest news through text messages.";
                    this.reCheckPageLabel.string = t, this.reCheckPage.active = !0
                }, e.prototype.OnClickChangeSmsOption = function(t, e) {
                    "true" == e ? this.SendSmsChangeCmd(this.msgToggle.isChecked) : (this.msgToggle.isChecked = !this.msgToggle.isChecked, this.isSelectPhoneMsgOption = this.msgToggle.isChecked, this.reCheckPage.active = !1)
                }, e.prototype.SendSmsChangeCmd = function(t) {
                    a.ConnectPanelMgr.Instance.ShowConnectPanel(), p.LobbyClient.Instance.GetUserClient.SendChangeSmsSetting(t, this.RecvChangeSmsOption.bind(this))
                }, e.prototype.RecvChangeSmsOption = function(t, e) {
                    console.warn("ChangeSmsOption"), console.warn(t), console.warn(e);
                    var o = null,
                        n = "The Internet was lost! Please login again!";
                    t == ArkSDK.HttpResult.OK && e && e.cmd_data && e.cmd_data.data ? 0 == e.cmd_data.result ? (e.cmd_data.data.hasOwnProperty("is_accept_sms") && (this.isSelectPhoneMsgOption = e.cmd_data.data.is_accept_sms, this.msgToggle.isChecked = e.cmd_data.data.is_accept_sms), a.ConnectPanelMgr.Instance.DisableConnectPanel(), this.reCheckPage.active = !1, null != this.recvCmdCallBack && (console.warn("RecvChangeSmsOption CallBack !!"), this.recvCmdCallBack())) : (o = "S338", this.ErrorHandler(o, n)) : (o = t == ArkSDK.HttpResult.Abort ? "S332" : t == ArkSDK.HttpResult.Condition ? "S333" : t == ArkSDK.HttpResult.Error ? "S334" : t == ArkSDK.HttpResult.NotReset ? "S335" : t == ArkSDK.HttpResult.Status ? "S336" : t == ArkSDK.HttpResult.Timeout ? "S337" : "S338", this.ErrorHandler(o, n))
                }, e.prototype.ErrorHandler = function(t, e) {
                    h.PopupMsgMgr.Instance.ShowPopMsg(h.PopupPriority.Error, t, "Lobby", e, null)
                }, e.prototype.OnClickPWEdit = function() {
                    this.isShowAniNow || (u.EventSystem.Event(u.Account.EditPassword).Notify(), this.accountPageRoot.active = !1)
                }, e.prototype.OnClickIDEdit = function() {
                    this.isShowAniNow || (u.EventSystem.Event(u.Account.EditMobileID).Notify(), this.accountPageRoot.active = !1)
                }, e.prototype.OnClickClose = function() {
                    this.isShowAniNow || (u.EventSystem.Event(u.Account.Close).Notify(), this.root.active && u.EventSystem.Event(u.SystemMsg.Close).Notify(), this.root.active = !1, this.defaultAccountPage.active = !1, this.customeAccountPage.active = !1)
                }, e.prototype.PlayAni = function(t) {
                    var e = this;
                    this.isShowPhoneMsg && null != this.msgRoot && (this.msgRoot.parent = t);
                    var o = cc.sequence(cc.spawn(cc.scaleTo(.3, .2, .2), cc.fadeOut(.3)), cc.callFunc(function() {
                        e.isShowAniNow = !1, e.accountPageRoot.active = !1, e.root.active = !1, t.setScale(cc.v2(1, 1)), t.opacity = 255
                    }));
                    t.runAction(o)
                }, i([f(cc.Node)], e.prototype, "customeAccountPage", void 0), i([f(cc.Label)], e.prototype, "custom_UserName", void 0), i([f(cc.Node)], e.prototype, "defaultAccountPage", void 0), i([f(cc.Label)], e.prototype, "default_UserName", void 0), i([f(cc.Node)], e.prototype, "root", void 0), i([f(cc.Node)], e.prototype, "accountPageRoot", void 0), i([f(cc.Node)], e.prototype, "msgRoot", void 0), i([f(cc.Toggle)], e.prototype, "msgToggle", void 0), i([f(cc.Node)], e.prototype, "reCheckPage", void 0), i([f(cc.Label)], e.prototype, "reCheckPageLabel", void 0), i([f(cc.Node)], e.prototype, "popup", void 0), i([d], e)
            }(l.default);
        o.AccountPageMgr = m, cc._RF.pop()
    }, {
        "../../../LobbyCommon/Connect/Script/ConnectPanelMgr": void 0,
        "../../../LobbyCommon/Helper/EventSystem": void 0,
        "../../../LobbyCommon/ModuleBase": void 0,
        "../../../LobbyCommon/Net/LobbyClient": void 0,
        "../../../LobbyCommon/PopupMessage/Script/PopupMsgMgr": void 0
    }]
}, {}, ["AccountPageMgr"]);