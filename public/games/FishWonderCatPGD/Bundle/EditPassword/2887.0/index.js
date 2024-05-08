window.__require = function t(e, n, o) {
    function r(s, c) {
        if (!n[s]) {
            if (!e[s]) {
                var a = s.split("/");
                if (a = a[a.length - 1], !e[a]) {
                    var l = "function" == typeof __require && __require;
                    if (!c && l) return l(a, !0);
                    if (i) return i(a, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                s = a
            }
            var d = n[s] = {
                exports: {}
            };
            e[s][0].call(d.exports, function(t) {
                return r(e[s][1][t] || t)
            }, d, d.exports, t, e, n, o)
        }
        return n[s].exports
    }
    for (var i = "function" == typeof __require && __require, s = 0; s < o.length; s++) r(o[s]);
    return r
}({
    EditPassword: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "8d92aBCcn5BAqYwC85YmsgD", "EditPassword");
        var o, r = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            i = this && this.__decorate || function(t, e, n, o) {
                var r, i = arguments.length,
                    s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
                return i > 3 && s && Object.defineProperty(e, n, s), s
            },
            s = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(r, i) {
                    function s(t) {
                        try {
                            a(o.next(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(t) {
                        try {
                            a(o.throw(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(s, c)
                    }
                    a((o = o.apply(t, e || [])).next())
                })
            },
            c = this && this.__generator || function(t, e) {
                var n, o, r, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: c(0),
                    throw: c(1),
                    return: c(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function c(t) {
                    return function(e) {
                        return a([t, e])
                    }
                }

                function a(i) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, o && (r = 2 & i[0] ? o.return : i[0] ? o.throw || ((r = o.return) && r.call(o), 0) : o.next) && !(r = r.call(o, i[1])).done) return r;
                        switch (o = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return s.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, o = i[1], i = [0];
                                continue;
                            case 7:
                                i = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    s.label = i[1];
                                    break
                                }
                                if (6 === i[0] && s.label < r[1]) {
                                    s.label = r[1], r = i;
                                    break
                                }
                                if (r && s.label < r[2]) {
                                    s.label = r[2], s.ops.push(i);
                                    break
                                }
                                r[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        i = e.call(t, s)
                    } catch (c) {
                        i = [6, c], o = 0
                    } finally {
                        n = r = 0
                    }
                    if (5 & i[0]) throw i[1];
                    return {
                        value: i[0] ? i[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.EditPassword = void 0;
        var a = t("../../../LobbyCommon/PopupMessage/Script/PopupMsgMgr"),
            l = t("../../../LobbyCommon/Connect/Script/ConnectPanelMgr"),
            d = t("../../../LobbyCommon/Net/LobbyClient"),
            w = t("../../../LobbyCommon/ModuleBase"),
            h = t("../../../LobbyCommon/Helper/EventSystem"),
            u = cc._decorator,
            p = u.ccclass,
            m = u.property,
            P = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.m_EBoldPw = null, e.m_EBNewPw = null, e.m_EBnewPwAgain = null, e.m_LBPromptOldPw = null, e.m_LBPromptNewPw = null, e.m_LBPromptPwAgain = null, e.m_LBErrorNewPw = null, e.m_LBErrorPwAgain = null, e.m_BtnOK = null, e.m_BtnClose = null, e.root = null, e.m_landscape = cc.Size.ZERO, e.m_portrait = cc.Size.ZERO, e
                }
                return r(e, t), e.prototype._onLoad = function() {
                    return s(this, void 0, void 0, function() {
                        return c(this, function() {
                            return h.EventSystem.Event(h.Password.Edit).Insert(this.ShowEditPasaword, this), h.EventSystem.Event(h.Password.ForceClose).Insert(this.ForceClose, this), this.root.active = !1, [2]
                        })
                    })
                }, e.prototype._onDestroy = function() {
                    return s(this, void 0, void 0, function() {
                        return c(this, function() {
                            return h.EventSystem.Event(h.Password.EditClose).Clear(), h.EventSystem.Event(h.Password.EditOk).Clear(), this.OnChnagePwdSuccess = null, h.EventSystem.Event(h.Password.Edit).Remove(this.ShowEditPasaword, this), h.EventSystem.Event(h.Password.ForceClose).Remove(this.ForceClose, this), [2]
                        })
                    })
                }, e.prototype.EditBoxAdjustWindowScroll = function(t) {
                    t && t._impl && (cc.sys.os === cc.sys.OS_ANDROID ? (this.schedule(function() {
                        cc.screen.fullScreen() && (t._impl._adjustWindowScroll(), this.unscheduleAllCallbacks())
                    }, 0), this.scheduleOnce(function() {
                        t._impl._adjustWindowScroll(), this.unscheduleAllCallbacks()
                    }, 10)) : this.scheduleOnce(function() {
                        t._impl._adjustWindowScroll(), this.unscheduleAllCallbacks()
                    }, .5))
                }, e.prototype.OnOldPwDidBegan = function() {
                    document.body.style.position = "absolute", window.hasOwnProperty("isForcusEditbox") && (isForcusEditbox = !0), this.m_LBPromptOldPw.enabled = !1, this.EditBoxAdjustWindowScroll(this.m_EBoldPw)
                }, e.prototype.ShowEditPasaword = function(t, e, n) {
                    void 0 === e && (e = !0), void 0 === n && (n = ""), this.OnChnagePwdSuccess = t, this.m_BtnClose.node.active = e, this.m_EBoldPw.string = n, this.m_EBoldPw.string.length > 0 && (this.m_LBPromptOldPw.enabled = !1, 0 == this.m_EBNewPw.string.length && (cc.sys.isMobile && cc.sys.browserType == cc.sys.BROWSER_TYPE_SAFARI || this.m_EBNewPw.setFocus())), this.m_EBNewPw.string = "", this.m_EBnewPwAgain.string = "", h.EventSystem.Event(h.SystemMsg.Open).Notify(this.root, this.m_landscape, this.m_portrait, 150, this.ForceClose.bind(this)), this.root.active = !0
                }, e.prototype.OnOldPwDidEnd = function() {
                    window.needFixed && (document.body.style.position = "fixed"), window.hasOwnProperty("isForcusEditbox") && (isForcusEditbox = !1), 0 == this.m_EBoldPw.string.length && (this.m_LBPromptOldPw.enabled = !0)
                }, e.prototype.IgnoreTextEnterSpace = function(t) {
                    var e = t.string.replace("\n", "");
                    t._impl._elem.value = e, t.string = e
                }, e.prototype.OnOldPwTextChanged = function() {
                    this.SetBtnOKInteractable(), this.IgnoreTextEnterSpace(this.m_EBoldPw)
                }, e.prototype.OnOldPwReturn = function() {
                    this.m_EBoldPw.string.length > 0 ? 0 == this.m_EBNewPw.string.length && (cc.sys.isMobile && cc.sys.browserType == cc.sys.BROWSER_TYPE_SAFARI || this.m_EBNewPw.setFocus()) : 0 == this.m_EBoldPw.string.length && (this.m_LBPromptOldPw.enabled = !0)
                }, e.prototype.OnNewPwDidBegan = function() {
                    document.body.style.position = "absolute", window.hasOwnProperty("isForcusEditbox") && (isForcusEditbox = !0), this.m_LBPromptNewPw.enabled = !1, this.m_LBErrorNewPw.enabled = !1, this.EditBoxAdjustWindowScroll(this.m_EBNewPw)
                }, e.prototype.OnNewPwDidEnd = function() {
                    window.needFixed && (document.body.style.position = "fixed"), window.hasOwnProperty("isForcusEditbox") && (isForcusEditbox = !1), 0 == this.m_EBNewPw.string.length && (this.m_LBPromptNewPw.enabled = !0)
                }, e.prototype.OnNewPwTextChanged = function() {
                    this.SetBtnOKInteractable(), this.IgnoreTextEnterSpace(this.m_EBNewPw)
                }, e.prototype.SetBtnOKInteractable = function() {
                    this.checkCanClickOK() ? this.m_BtnOK.interactable = !0 : this.m_BtnOK.interactable = !1
                }, e.prototype.OnNewPwReturn = function() {
                    this.m_EBNewPw.string.length > 0 ? 0 == this.m_EBnewPwAgain.string.length && (cc.sys.isMobile && cc.sys.browserType == cc.sys.BROWSER_TYPE_SAFARI || this.m_EBnewPwAgain.setFocus()) : 0 == this.m_EBNewPw.string.length && (this.m_LBPromptNewPw.enabled = !0)
                }, e.prototype.OnNewPwAgainDidBegan = function() {
                    document.body.style.position = "absolute", window.hasOwnProperty("isForcusEditbox") && (isForcusEditbox = !0), this.m_LBPromptPwAgain.enabled = !1, this.m_LBErrorPwAgain.enabled = !1, this.EditBoxAdjustWindowScroll(this.m_EBnewPwAgain)
                }, e.prototype.OnNewPwAgaingDidEnd = function() {
                    window.needFixed && (document.body.style.position = "fixed"), window.hasOwnProperty("isForcusEditbox") && (isForcusEditbox = !1), 0 == this.m_EBnewPwAgain.string.length && (this.m_LBPromptPwAgain.enabled = !0)
                }, e.prototype.OnNewPwAgainTextChanged = function() {
                    this.SetBtnOKInteractable(), this.IgnoreTextEnterSpace(this.m_EBnewPwAgain)
                }, e.prototype.OnNewPwAgainRetrun = function() {
                    this.m_BtnOK.interactable && this.OnClickOK()
                }, e.prototype.OnClickClose = function() {
                    h.EventSystem.Event(h.Password.EditClose).Notify(), h.EventSystem.Event(h.SystemMsg.Close).Notify(), this.m_BtnOK.interactable = !1, this.m_LBErrorPwAgain.enabled = !1, this.m_LBErrorNewPw.enabled = !1, this.root.active = !1
                }, e.prototype.ForceClose = function() {
                    this.root.active && h.EventSystem.Event(h.SystemMsg.Close).Notify(), this.m_BtnOK.interactable = !1, this.m_LBErrorPwAgain.enabled = !1, this.m_LBErrorNewPw.enabled = !1, this.root.active = !1
                }, e.prototype.OnClickOK = function() {
                    var t = this;
                    h.EventSystem.Event(h.Password.EditOk).Notify(), l.ConnectPanelMgr.Instance.ShowConnectPanel(), this.m_BtnOK.interactable = !1, this.m_LBErrorPwAgain.enabled = !1, this.m_LBErrorNewPw.enabled = !1, this.m_EBoldPw.blur(), this.m_EBNewPw.blur(), this.m_EBnewPwAgain.blur(), this.checkIsLegalCharcaterByOldPw() ? this.checkIsLegalCharcaterByNewPw() ? d.LobbyClient.Instance.GetUserClient.SendChangePassword(this.m_EBoldPw.string, this.m_EBNewPw.string, function(e, n) {
                        var o;
                        if (e === ArkSDK.HttpResult.OK && n.hasOwnProperty("cmd_data") && n.cmd_data.hasOwnProperty("result"))
                            if (0 === n.cmd_data.result) t.OnChnagePwdSuccess && (h.EventSystem.Event(h.SystemMsg.Close).Notify(), t.root.active = !1, t.OnChnagePwdSuccess(t.m_EBNewPw.string), t.OnChnagePwdSuccess = null);
                            else {
                                console.log(n);
                                var r = n.cmd_data.result; - 13 == r ? t.ErrorHandler("S157", "The password you entered is incorrect.") : -12 == r ? t.ErrorHandler("S158", "The password you entered is incorrect.") : t.ErrorHandler("S159", "The Internet was lost! Please try again!")
                            }
                        else o == ArkSDK.HttpResult.Abort ? o = "S137" : o == ArkSDK.HttpResult.Timeout ? o = "S138" : o == ArkSDK.HttpResult.Error ? o = "S139" : o == ArkSDK.HttpResult.Status ? o = "S140" : o == ArkSDK.HttpResult.NotReset ? o = "S141" : o == ArkSDK.HttpResult.Condition && (o = "S142"), t.ErrorHandler(o, "The Internet was lost! Please try again!")
                    }) : (this.SetBtnOKInteractable(), l.ConnectPanelMgr.Instance.DisableConnectPanel()) : this.ErrorHandler("C05", "The password you entered is incorrect.")
                }, e.prototype.ErrorHandler = function(t, e) {
                    var n = this;
                    l.ConnectPanelMgr.Instance.DisableConnectPanel(), a.PopupMsgMgr.Instance.ShowPopMsg(a.PopupPriority.Info, t, cc.director.getScene().name, e, function() {
                        n.m_EBoldPw.string = "", n.m_LBPromptOldPw.enabled = !0
                    })
                }, e.prototype.checkCanClickOK = function() {
                    return this.m_EBoldPw.string.length > 0 && this.m_EBNewPw.string.length > 0 && this.m_EBnewPwAgain.string.length > 0
                }, e.prototype.checkIsLegalCharcaterByNewPw = function() {
                    var t = "";
                    (this.m_EBNewPw.string.length < 4 || this.m_EBNewPw.string.length > 20) && (console.warn("[EditPassword.checkIsLegalCharcaterByNewPw] New PW IllegalLength", this.m_EBNewPw.string.length), t += "4-20 characters! ");
                    var e = this.m_EBNewPw.string.match("[^a-zA-Z0-9]");
                    return null != e && (console.warn("[EditPassword.checkIsLegalCharcaterByNewPw] New PW IllegalCharacter", e), t += "Can only use alphabet and number only."), t ? (this.m_LBErrorNewPw.string = t, this.m_LBErrorNewPw.enabled = !0, !1) : this.m_EBnewPwAgain.string != this.m_EBNewPw.string ? (console.warn("[EditPassword.checkIsLegalCharcaterByNewPw] Input againg error", this.m_EBnewPwAgain.string), this.m_LBErrorPwAgain.string = "Must enter the same password twice in order to confirm it.", this.m_LBErrorPwAgain.enabled = !0, !1) : !(!t && this.m_EBNewPw.string === this.m_EBoldPw.string && (t = "Password must differ from old password.", this.m_LBErrorNewPw.string = t, this.m_LBErrorNewPw.enabled = !0, 1))
                }, e.prototype.checkIsLegalCharcaterByOldPw = function() {
                    var t = this.m_EBoldPw.string.match("[^a-zA-Z0-9]");
                    return null != t ? (console.warn("[EditPassword.checkIsLegalCharcaterByOldPw] OldPw IllegalCharacter", t), !1) : !(this.m_EBoldPw.string.length < 4 || this.m_EBoldPw.string.length > 20) || (console.warn("[EditPassword.checkIsLegalCharcaterByOldPw] ID IllegalLength", this.m_EBoldPw.string.length), !1)
                }, i([m(cc.EditBox)], e.prototype, "m_EBoldPw", void 0), i([m(cc.EditBox)], e.prototype, "m_EBNewPw", void 0), i([m(cc.EditBox)], e.prototype, "m_EBnewPwAgain", void 0), i([m(cc.Label)], e.prototype, "m_LBPromptOldPw", void 0), i([m(cc.Label)], e.prototype, "m_LBPromptNewPw", void 0), i([m(cc.Label)], e.prototype, "m_LBPromptPwAgain", void 0), i([m(cc.Label)], e.prototype, "m_LBErrorNewPw", void 0), i([m(cc.Label)], e.prototype, "m_LBErrorPwAgain", void 0), i([m(cc.Button)], e.prototype, "m_BtnOK", void 0), i([m(cc.Button)], e.prototype, "m_BtnClose", void 0), i([m(cc.Node)], e.prototype, "root", void 0), i([m(cc.Size)], e.prototype, "m_landscape", void 0), i([m(cc.Size)], e.prototype, "m_portrait", void 0), i([p], e)
            }(w.default);
        n.EditPassword = P, cc._RF.pop()
    }, {
        "../../../LobbyCommon/Connect/Script/ConnectPanelMgr": void 0,
        "../../../LobbyCommon/Helper/EventSystem": void 0,
        "../../../LobbyCommon/ModuleBase": void 0,
        "../../../LobbyCommon/Net/LobbyClient": void 0,
        "../../../LobbyCommon/PopupMessage/Script/PopupMsgMgr": void 0
    }],
    MagicCityEditPassword: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "564fdcvRLJDq56Hh8cQsLYB", "MagicCityEditPassword");
        var o, r = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var n in e) e.hasOwnProperty(n) && (t[n] = e[n])
                    })(t, e)
            }, function(t, e) {
                function n() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            i = this && this.__decorate || function(t, e, n, o) {
                var r, i = arguments.length,
                    s = i < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var c = t.length - 1; c >= 0; c--)(r = t[c]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, n, s) : r(e, n)) || s);
                return i > 3 && s && Object.defineProperty(e, n, s), s
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("../../../LobbyCommon/Connect/Script/ConnectPanelMgr"),
            c = t("./EditPassword"),
            a = cc._decorator,
            l = a.ccclass,
            d = a.property,
            w = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.m_LBErrorOldPw = null, e
                }
                return r(e, t), e.prototype.OnOldPwDidBegan = function() {
                    t.prototype.OnOldPwDidBegan.call(this), this.m_LBErrorOldPw.enabled = !1
                }, e.prototype.ErrorHandler = function(t, e) {
                    s.ConnectPanelMgr.Instance.DisableConnectPanel();
                    var n = SS.Common.GameEnvironment.ErrorMsg && SS.Common.GameEnvironment.ErrorMsg[t] && "" != SS.Common.GameEnvironment.ErrorMsg[t] ? SS.Common.GameEnvironment.ErrorMsg[t] : e;
                    this.m_EBoldPw.string = "", this.m_LBErrorOldPw.string = n + " (" + t + ")", this.m_LBErrorOldPw.enabled = !0
                }, i([d(cc.Label)], e.prototype, "m_LBErrorOldPw", void 0), i([l], e)
            }(c.EditPassword);
        n.default = w, cc._RF.pop()
    }, {
        "../../../LobbyCommon/Connect/Script/ConnectPanelMgr": void 0,
        "./EditPassword": "EditPassword"
    }]
}, {}, ["EditPassword", "MagicCityEditPassword"]);