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
            var u = n[s] = {
                exports: {}
            };
            e[s][0].call(u.exports, function(t) {
                return r(e[s][1][t] || t)
            }, u, u.exports, t, e, n, o)
        }
        return n[s].exports
    }
    for (var i = "function" == typeof __require && __require, s = 0; s < o.length; s++) r(o[s]);
    return r
}({
    EditMobileIDMgr: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "a0361IjxthB/6Qa2Novk73q", "EditMobileIDMgr");
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
        }), n.EditMobileIDMgr = void 0;
        var a = t("../../../LobbyCommon/PopupMessage/Script/PopupMsgMgr"),
            l = t("../../../LobbyCommon/Connect/Script/ConnectPanelMgr"),
            u = t("../../../LobbyCommon/Net/LobbyClient"),
            p = t("../../../LobbyCommon/Helper/EventSystem"),
            h = t("../../../LobbyCommon/ModuleBase"),
            d = cc._decorator,
            m = d.ccclass,
            g = d.property,
            I = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.m_LabelID = null, e.m_EBNewID = null, e.m_EBnewIDAgain = null, e.m_LBPromptNewID = null, e.m_LBPromptIDAgain = null, e.m_LBErrorNewID = null, e.m_LBErrorIDAgain = null, e.m_BtnOK = null, e.m_BtnClose = null, e.root = null, e.m_landscape = cc.Size.ZERO, e.m_portrait = cc.Size.ZERO, e
                }
                return r(e, t), e.prototype._onLoad = function() {
                    return s(this, void 0, void 0, function() {
                        return c(this, function() {
                            return p.EventSystem.Event(p.MobileID.Edit).Insert(this.ShowEditID, this), [2]
                        })
                    })
                }, e.prototype._onDestroy = function() {
                    return s(this, void 0, void 0, function() {
                        return c(this, function() {
                            return p.EventSystem.Event(p.MobileID.EditOk).Clear(), p.EventSystem.Event(p.MobileID.EditClose).Clear(), p.EventSystem.Event(p.MobileID.Edit).Remove(this.ShowEditID, this), this.OnChangeIDdSuccess = null, [2]
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
                }, e.prototype.IgnoreTextEnterSpace = function(t) {
                    var e = t.string.replace("\n", "");
                    t._impl._elem.value = e, t.string = e
                }, e.prototype.ShowEditID = function(t, e) {
                    this.OnChangeIDdSuccess = t, this.m_BtnClose.node.active = !0, this.m_LabelID.string = e, this.m_EBNewID.string = "", this.m_EBnewIDAgain.string = "", cc.sys.isMobile && cc.sys.browserType == cc.sys.BROWSER_TYPE_SAFARI || this.m_EBNewID.setFocus(), p.EventSystem.Event(p.SystemMsg.Open).Notify(this.root, this.m_landscape, this.m_portrait, 150, this.OnClickClose.bind(this)), this.root.active = !0
                }, e.prototype.OnNewIDDidBegan = function() {
                    document.body.style.position = "absolute", window.hasOwnProperty("isForcusEditbox") && (isForcusEditbox = !0), this.m_LBPromptNewID.enabled = !1, this.m_LBErrorNewID.enabled = !1, this.EditBoxAdjustWindowScroll(this.m_EBNewID)
                }, e.prototype.OnNewIDDidEnd = function() {
                    window.needFixed && (document.body.style.position = "fixed"), window.hasOwnProperty("isForcusEditbox") && (isForcusEditbox = !1), 0 == this.m_EBNewID.string.length && (this.m_LBPromptNewID.enabled = !0)
                }, e.prototype.OnNewIDTextChanged = function() {
                    this.SetBtnOKInteractable(), this.IgnoreTextEnterSpace(this.m_EBNewID)
                }, e.prototype.SetBtnOKInteractable = function() {
                    this.checkCanClickOK() ? this.m_BtnOK.interactable = !0 : this.m_BtnOK.interactable = !1
                }, e.prototype.OnNewIDReturn = function() {
                    this.m_EBNewID.string.length > 0 ? 0 == this.m_EBnewIDAgain.string.length && (cc.sys.isMobile && cc.sys.browserType == cc.sys.BROWSER_TYPE_SAFARI || this.m_EBnewIDAgain.setFocus()) : 0 == this.m_EBNewID.string.length && (this.m_LBPromptNewID.enabled = !0)
                }, e.prototype.OnNewIDAgainDidBegan = function() {
                    document.body.style.position = "absolute", window.hasOwnProperty("isForcusEditbox") && (isForcusEditbox = !0), this.m_LBPromptIDAgain.enabled = !1, this.m_LBErrorIDAgain.enabled = !1, this.EditBoxAdjustWindowScroll(this.m_EBnewIDAgain)
                }, e.prototype.OnNewIDAgaingDidEnd = function() {
                    window.needFixed && (document.body.style.position = "fixed"), window.hasOwnProperty("isForcusEditbox") && (isForcusEditbox = !1), 0 == this.m_EBnewIDAgain.string.length && (this.m_LBPromptIDAgain.enabled = !0)
                }, e.prototype.OnNewIDAgainTextChanged = function() {
                    this.SetBtnOKInteractable(), this.IgnoreTextEnterSpace(this.m_EBnewIDAgain)
                }, e.prototype.OnNewIDAgainRetrun = function() {
                    this.m_BtnOK.interactable && this.OnClickOK()
                }, e.prototype.OnClickClose = function() {
                    p.EventSystem.Event(p.MobileID.EditClose).Notify(), p.EventSystem.Event(p.SystemMsg.Close).Notify(), this.m_BtnOK.interactable = !1, this.m_LBErrorIDAgain.enabled = !1, this.m_LBErrorNewID.enabled = !1, this.root.active = !1
                }, e.prototype.OnClickOK = function() {
                    var t = this;
                    p.EventSystem.Event(p.MobileID.EditOk).Notify(), l.ConnectPanelMgr.Instance.ShowConnectPanel(), this.m_BtnOK.interactable = !1, this.m_LBErrorIDAgain.enabled = !1, this.m_LBErrorNewID.enabled = !1, this.checkIsLegalCharcaterByNewID() ? (this.m_EBNewID.string = this.m_EBNewID.string.toLowerCase(), this.m_EBnewIDAgain.string = this.m_EBnewIDAgain.string.toLowerCase(), u.LobbyClient.Instance.GetUserClient.SendChangeID(this.m_EBNewID.string, function(e, n) {
                        var o;
                        if (console.log("SendChangeID result : ", n), e === ArkSDK.HttpResult.OK && n.hasOwnProperty("cmd_data") && n.cmd_data.hasOwnProperty("result"))
                            if (0 === n.cmd_data.result) p.EventSystem.Event(p.SystemMsg.Close).Notify(), t.OnChangeIDdSuccess && (t.OnChangeIDdSuccess(t.m_EBNewID.string), t.OnChangeIDdSuccess = null);
                            else {
                                var r = n.cmd_data.result; - 4 == r ? t.ErrorHandler("S282", "The Mobile ID you entered is incorrect.") : -17 == r ? t.ErrorHandler("S283", "The Mobile ID you entered is incorrect.") : -18 == r ? t.ErrorHandler("S284", "This Mobile ID is already in use.") : t.ErrorHandler("S285", "The Internet was lost! Please login again!")
                            }
                        else o = o == ArkSDK.HttpResult.Abort ? "S286" : o == ArkSDK.HttpResult.Timeout ? "S287" : o == ArkSDK.HttpResult.Error ? "S288" : o == ArkSDK.HttpResult.Status ? "S289" : o == ArkSDK.HttpResult.NotReset ? "S290" : o == ArkSDK.HttpResult.Condition ? "S291" : "S292", t.ErrorHandler(o, "The Internet was lost! Please login again!")
                    })) : (this.SetBtnOKInteractable(), l.ConnectPanelMgr.Instance.DisableConnectPanel())
                }, e.prototype.ErrorHandler = function(t, e) {
                    var n = this;
                    l.ConnectPanelMgr.Instance.DisableConnectPanel(), a.PopupMsgMgr.Instance.ShowPopMsg(a.PopupPriority.Info, t, cc.director.getScene().name, e, function() {
                        n.m_EBNewID.string = "", n.m_EBnewIDAgain.string = "", n.m_LBPromptNewID.enabled = !0
                    })
                }, e.prototype.checkCanClickOK = function() {
                    return this.m_LabelID.string.length > 0 && this.m_EBNewID.string.length > 0 && this.m_EBnewIDAgain.string.length > 0
                }, e.prototype.checkIsLegalCharcaterByNewID = function() {
                    var t = "";
                    (this.m_EBNewID.string.length < 4 || this.m_EBNewID.string.length > 20) && (console.warn("[EditID.checkIsLegalCharcaterByNewID] New Mobile ID IllegalLength", this.m_EBNewID.string.length), t += "4-20 characters! ");
                    var e = this.m_EBNewID.string.match("[^a-zA-Z0-9]");
                    return null != e && (console.warn("[EditID.checkIsLegalCharcaterByNewID] New Mobile ID IllegalCharacter", e), t += "Can only use alphabet and number only."), t ? (this.m_LBErrorNewID.string = t, this.m_LBErrorNewID.enabled = !0, !1) : this.m_EBnewIDAgain.string != this.m_EBNewID.string ? (console.warn("[EditID.checkIsLegalCharcaterByNewID] Input againg error", this.m_EBnewIDAgain.string), this.m_LBErrorIDAgain.string = "Must enter the same Mobile ID twice in order to confirm it.", this.m_LBErrorIDAgain.enabled = !0, !1) : !(!t && this.m_EBNewID.string === this.m_LabelID.string && (t = "ID must differ from old Mobile ID.", this.m_LBErrorNewID.string = t, this.m_LBErrorNewID.enabled = !0, 1))
                }, i([g(cc.Label)], e.prototype, "m_LabelID", void 0), i([g(cc.EditBox)], e.prototype, "m_EBNewID", void 0), i([g(cc.EditBox)], e.prototype, "m_EBnewIDAgain", void 0), i([g(cc.Label)], e.prototype, "m_LBPromptNewID", void 0), i([g(cc.Label)], e.prototype, "m_LBPromptIDAgain", void 0), i([g(cc.Label)], e.prototype, "m_LBErrorNewID", void 0), i([g(cc.Label)], e.prototype, "m_LBErrorIDAgain", void 0), i([g(cc.Button)], e.prototype, "m_BtnOK", void 0), i([g(cc.Button)], e.prototype, "m_BtnClose", void 0), i([g(cc.Node)], e.prototype, "root", void 0), i([g(cc.Size)], e.prototype, "m_landscape", void 0), i([g(cc.Size)], e.prototype, "m_portrait", void 0), i([m], e)
            }(h.default);
        n.EditMobileIDMgr = I, cc._RF.pop()
    }, {
        "../../../LobbyCommon/Connect/Script/ConnectPanelMgr": void 0,
        "../../../LobbyCommon/Helper/EventSystem": void 0,
        "../../../LobbyCommon/ModuleBase": void 0,
        "../../../LobbyCommon/Net/LobbyClient": void 0,
        "../../../LobbyCommon/PopupMessage/Script/PopupMsgMgr": void 0
    }],
    MagicCityEditMobileID: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "e8f8b0PI3xOxZMPCldFxT9I", "MagicCityEditMobileID");
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
            c = t("./EditMobileIDMgr"),
            a = cc._decorator,
            l = a.ccclass,
            u = a.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.normalMsg = null, e.errorMsg = null, e
                }
                return r(e, t), e.prototype.OnNewIDDidBegan = function() {
                    t.prototype.OnNewIDDidBegan.call(this), this.errorMsg.enabled = !1, this.normalMsg.enabled = !0
                }, e.prototype.checkIsLegalCharcaterByNewID = function() {
                    var e = t.prototype.checkIsLegalCharcaterByNewID.call(this);
                    return this.normalMsg.enabled = !1, e
                }, e.prototype.ErrorHandler = function(t, e) {
                    s.ConnectPanelMgr.Instance.DisableConnectPanel();
                    var n = SS.Common.GameEnvironment.ErrorMsg && SS.Common.GameEnvironment.ErrorMsg[t] && "" != SS.Common.GameEnvironment.ErrorMsg[t] ? SS.Common.GameEnvironment.ErrorMsg[t] : e;
                    this.m_EBNewID.string = "", this.m_EBnewIDAgain.string = "", this.errorMsg.string = n + " (" + t + ")", this.errorMsg.enabled = !0, this.normalMsg.enabled = !1
                }, i([u(cc.Label)], e.prototype, "normalMsg", void 0), i([u(cc.Label)], e.prototype, "errorMsg", void 0), i([l], e)
            }(c.EditMobileIDMgr);
        n.default = p, cc._RF.pop()
    }, {
        "../../../LobbyCommon/Connect/Script/ConnectPanelMgr": void 0,
        "./EditMobileIDMgr": "EditMobileIDMgr"
    }]
}, {}, ["EditMobileIDMgr", "MagicCityEditMobileID"]);