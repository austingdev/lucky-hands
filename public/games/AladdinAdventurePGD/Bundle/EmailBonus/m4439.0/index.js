window.__require = function t(e, o, n) {
    function i(s, r) {
        if (!o[s]) {
            if (!e[s]) {
                var l = s.split("/");
                if (l = l[l.length - 1], !e[l]) {
                    var c = "function" == typeof __require && __require;
                    if (!r && c) return c(l, !0);
                    if (a) return a(l, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                s = l
            }
            var d = o[s] = {
                exports: {}
            };
            e[s][0].call(d.exports, function(t) {
                return i(e[s][1][t] || t)
            }, d, d.exports, t, e, o, n)
        }
        return o[s].exports
    }
    for (var a = "function" == typeof __require && __require, s = 0; s < n.length; s++) i(n[s]);
    return i
}({
    EB_ButtonCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c2925BE/jZKl4rvCMQFq6Dh", "EB_ButtonCtrl");
        var n = this && this.__decorate || function(t, e, o, n) {
            var i, a = arguments.length,
                s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
            else
                for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
            return a > 3 && s && Object.defineProperty(e, o, s), s
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const i = t("../../../../../LobbyCommon/Helper/EventSystem"),
            a = t("../EB_Define"),
            s = t("../Event/EB_Events"),
            r = t("./EB_ButtonStatus"),
            {
                ccclass: l,
                property: c,
                menu: d
            } = cc._decorator;
        let E = class extends cc.Component {
            constructor() {
                super(...arguments), this.buttonName = a.EB_ButtonName.Ok, this.btn = null, this.label = null, this.interactableNode = null, this.notinteractableNode = null, this.sec = 0, this.preStatus = null
            }
            setBtn(t, e) {
                if (null != e && e != this.buttonName || this.sec > 0) return;
                const {
                    interactable: o,
                    countdown: n,
                    active: i
                } = t[this.buttonName];
                null != n && n > 0 && 0 == o && (this.preStatus = new r.default(this.btn.interactable, this.sec, this.btn.node.active), this.showCountDownAnim(n)), this.btn.interactable = o, this.btn.node.active = i, this.setDisplay()
            }
            updateCountDownLabel() {
                this.sec--, this.sec <= 0 ? (this.label.string = "", this.label.node.active = !1, i.EventSystem.Event(s.EB_Events.OnBtnCountDownComplete).Notify(this.buttonName, this.preStatus), this.unscheduleAllCallbacks(), this.setDisplay()) : (this.label.node.activeInHierarchy || (this.label.node.active = !0), this.label.string = `(${this.sec})`)
            }
            setDisplay() {
                const t = this.btn.interactable;
                this.interactableNode && (this.interactableNode.active = t), this.notinteractableNode && (this.notinteractableNode.active = !t)
            }
            showCountDownAnim(t) {
                this.label && (this.sec = t, this.label.string = `(${this.sec})`, this.schedule(this.updateCountDownLabel, 1, cc.macro.REPEAT_FOREVER), this.setDisplay())
            }
            onLoad() {
                i.EventSystem.Event(s.EB_Events.SetBtn).Insert(this.setBtn, this)
            }
            onDestroy() {
                i.EventSystem.Event(s.EB_Events.SetBtn).Remove(this.setBtn, this)
            }
        };
        n([c({
            type: cc.Enum(a.EB_ButtonName)
        })], E.prototype, "buttonName", void 0), n([c(cc.Button)], E.prototype, "btn", void 0), n([c(cc.Label)], E.prototype, "label", void 0), n([c(cc.Node)], E.prototype, "interactableNode", void 0), n([c(cc.Node)], E.prototype, "notinteractableNode", void 0), E = n([l, d("EmailBonus/EB_ButtonCtrl")], E), o.default = E, cc._RF.pop()
    }, {
        "../../../../../LobbyCommon/Helper/EventSystem": void 0,
        "../EB_Define": "EB_Define",
        "../Event/EB_Events": "EB_Events",
        "./EB_ButtonStatus": "EB_ButtonStatus"
    }],
    EB_ButtonEventMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "890daKbpyBLsLTltA5wr+tr", "EB_ButtonEventMgr");
        var n = this && this.__decorate || function(t, e, o, n) {
            var i, a = arguments.length,
                s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
            else
                for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
            return a > 3 && s && Object.defineProperty(e, o, s), s
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const i = t("../../../../../LobbyCommon/Helper/EventSystem"),
            a = t("../Event/EB_Events"),
            {
                ccclass: s
            } = cc._decorator;
        let r = class extends cc.Component {
            CloseMain() {
                i.EventSystem.Event(a.EB_Events.OnCloseMainClicked).Notify()
            }
            OpenInfo() {
                i.EventSystem.Event(a.EB_Events.OnOpenInfoClicked).Notify()
            }
            CloseInfo() {
                i.EventSystem.Event(a.EB_Events.OnCloseInfoClicked).Notify()
            }
            GetCode() {
                i.EventSystem.Event(a.EB_Events.OnGetCodeClicked).Notify()
            }
            Confirm() {
                i.EventSystem.Event(a.EB_Events.OnConfirmClicked).Notify()
            }
            PasteCodeClicked() {
                i.EventSystem.Event(a.EB_Events.OnPasteCodeClicked).Notify()
            }
            PasteEmailClicked() {
                i.EventSystem.Event(a.EB_Events.OnPasteEmailClicked).Notify()
            }
            EditEmailClicked() {
                i.EventSystem.Event(a.EB_Events.OnEditEmailClicked).Notify()
            }
            OK() {
                i.EventSystem.Event(a.EB_Events.OnOkClicked).Notify()
            }
            Agree() {
                i.EventSystem.Event(a.EB_Events.OnAgreeClicked).Notify()
            }
            DontShowAgain() {
                i.EventSystem.Event(a.EB_Events.OnDontShowAgainClicked).Notify()
            }
        };
        r = n([s], r), o.default = r, cc._RF.pop()
    }, {
        "../../../../../LobbyCommon/Helper/EventSystem": void 0,
        "../Event/EB_Events": "EB_Events"
    }],
    EB_ButtonStateCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ba5c4fboQpJN5DJrx84o8GN", "EB_ButtonStateCtrl");
        var n = this && this.__decorate || function(t, e, o, n) {
            var i, a = arguments.length,
                s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
            else
                for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
            return a > 3 && s && Object.defineProperty(e, o, s), s
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const i = t("../../../../../LobbyCommon/Helper/EventSystem"),
            a = t("../EB_Data"),
            s = t("../EB_Define"),
            r = t("../Event/EB_Events"),
            l = t("./EB_ButtonStatus"),
            {
                ccclass: c,
                menu: d
            } = cc._decorator;
        let E = class extends cc.Component {
            constructor() {
                super(...arguments), this.buttonStatus = null
            }
            generateAllState() {
                this.buttonStatus = {}, Object.keys(s.EB_ButtonName).forEach(t => {
                    const e = new l.default;
                    this.buttonStatus[s.EB_ButtonName[t]] = e
                })
            }
            onBtnCountDownComplete(t, e) {
                this.buttonStatus[t] = e, this.sendEvent(t)
            }
            init() {
                this.generateAllState(), this.buttonStatus[s.EB_ButtonName.GetCode].setStatus(!1), this.buttonStatus[s.EB_ButtonName.EditEmail].setStatus(!1, null, !1), this.buttonStatus[s.EB_ButtonName.PasteCode].setStatus(!1), this.buttonStatus[s.EB_ButtonName.Confirm].setStatus(!1), this.buttonStatus[s.EB_ButtonName.Ok].setStatus(!1), this.sendEvent(), i.EventSystem.Event(r.EB_Events.OnBtnCountDownComplete).Insert(this.onBtnCountDownComplete, this)
            }
            onDestroy() {
                i.EventSystem.Event(r.EB_Events.OnBtnCountDownComplete).Remove(this.onBtnCountDownComplete, this), this.buttonStatus = null
            }
            setGetCodeCoolDown(t = null) {
                const e = null != t ? t : a.default.Instance.config.GET_CODE_CD;
                this.buttonStatus[s.EB_ButtonName.GetCode].setStatus(!1, e), this.sendEvent()
            }
            setPasteEmail(t) {
                this.buttonStatus[s.EB_ButtonName.PasteEmail].setStatus(t, null, t), this.sendEvent(s.EB_ButtonName.PasteEmail)
            }
            setPasteCode(t) {
                this.buttonStatus[s.EB_ButtonName.PasteCode].setStatus(t, null), this.sendEvent(s.EB_ButtonName.PasteCode)
            }
            setGetCode(t) {
                this.buttonStatus[s.EB_ButtonName.GetCode].setStatus(t), this.sendEvent()
            }
            setConfirm(t) {
                this.buttonStatus[s.EB_ButtonName.Confirm].setStatus(t, null, t), this.sendEvent(s.EB_ButtonName.Confirm)
            }
            canPasteCode() {
                this.buttonStatus[s.EB_ButtonName.GetCode].setStatus(!1), this.sendEvent()
            }
            canNotGetCode() {
                this.buttonStatus[s.EB_ButtonName.GetCode].setStatus(!1), this.sendEvent()
            }
            setCloseMain(t) {
                this.buttonStatus[s.EB_ButtonName.CloseMain].setStatus(t)
            }
            setEditEmailActive(t) {
                this.buttonStatus[s.EB_ButtonName.EditEmail].setStatus(t, null, t), this.sendEvent(s.EB_ButtonName.EditEmail)
            }
            sendEvent(t = null) {
                i.EventSystem.Event(r.EB_Events.SetBtn).Notify(this.buttonStatus, t)
            }
        };
        E = n([c, d("EmailBonus/EB_ButtonStateCtrl")], E), o.default = E, cc._RF.pop()
    }, {
        "../../../../../LobbyCommon/Helper/EventSystem": void 0,
        "../EB_Data": "EB_Data",
        "../EB_Define": "EB_Define",
        "../Event/EB_Events": "EB_Events",
        "./EB_ButtonStatus": "EB_ButtonStatus"
    }],
    EB_ButtonStatus: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "fbca7YF205Kup7IS2EDwy3y", "EB_ButtonStatus"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = class {
            constructor(t = !0, e = 0, o = !0) {
                this._interactable = null, this._countdown = null, this._active = null, this._interactable = t, this._countdown = e, this._active = o
            }
            setStatus(t = !0, e = 0, o = !0) {
                this._interactable = t, this._countdown = e, this._active = o
            }
            get status() {
                return {
                    interactable: this._interactable,
                    countdown: this._countdown
                }
            }
            get interactable() {
                return this._interactable
            }
            get countdown() {
                return this._countdown
            }
            get active() {
                return this._active
            }
        }, cc._RF.pop()
    }, {}],
    EB_CodeEditBox: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "cb1a5pxDKhDAbUpTtMMUlCN", "EB_CodeEditBox");
        var n = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            },
            i = this && this.__awaiter || function(t, e, o, n) {
                return new(o || (o = Promise))(function(i, a) {
                    function s(t) {
                        try {
                            l(n.next(t))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function r(t) {
                        try {
                            l(n.throw(t))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(s, r)
                    }
                    l((n = n.apply(t, e || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const a = t("../../../../../LobbyCommon/Helper/EventSystem"),
            s = t("../EB_Data"),
            r = t("../EB_Utils"),
            l = t("../Event/EB_Events"),
            c = t("./EB_EditBox"),
            {
                ccclass: d,
                menu: E
            } = cc._decorator;
        let m = class extends c.default {
            sendCodeEvent() {
                const t = this.string.length == s.default.Instance.config.CODE_MAX_LEN;
                t ? (s.default.Instance.code = this.string, a.EventSystem.Event(l.EB_Events.OnVerificationCodeFormatValid).Notify()) : !t && this.string.length > 0 ? a.EventSystem.Event(l.EB_Events.OnVerificationCodeFormatError).Notify(!0) : a.EventSystem.Event(l.EB_Events.OnVerificationCodeFormatError).Notify(!1)
            }
            onEditDidBegan() {
                a.EventSystem.Event(a.Keyboard.Show).Notify(this.editBox, this.onTextChanged.bind(this), null, s.default.Instance.root, !0), console.log("[EB_CodeEditBox]onEditDidBegan")
            }
            onEditDidEnded() {
                this.sendCodeEvent()
            }
            onTextChanged() {
                this.sendCodeEvent()
            }
            onEditingReturn() {}
            onPasteCodeClicked() {
                return i(this, void 0, void 0, function*() {
                    const t = yield r.default.getTextFromClipboard();
                    t.length > this.editBox.maxLength ? this.editBox.string = t.slice(0, this.editBox.maxLength) : this.editBox.string = t, this.onEditDidEnded()
                })
            }
            clear() {
                super.clear(), this.sendCodeEvent()
            }
            onLoad() {
                super.onLoad(), this.editBox.inputMode = cc.EditBox.InputMode.EMAIL_ADDR, a.EventSystem.Event(l.EB_Events.OnPasteCodeClicked).Insert(this.onPasteCodeClicked, this)
            }
            onDestroy() {
                a.EventSystem.Event(l.EB_Events.OnPasteCodeClicked).Remove(this.onPasteCodeClicked, this)
            }
        };
        m = n([d, E("EmailBonus/EB_CodeEditBox")], m), o.default = m, cc._RF.pop()
    }, {
        "../../../../../LobbyCommon/Helper/EventSystem": void 0,
        "../EB_Data": "EB_Data",
        "../EB_Utils": "EB_Utils",
        "../Event/EB_Events": "EB_Events",
        "./EB_EditBox": "EB_EditBox"
    }],
    EB_Command: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "6a907/j/itDEblTeebyV51M", "EB_Command"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const n = t("../../../LobbyCommon/Net/LobbyClient");
        var i;
        (function(t) {
            t.GetInfo = "GET_INFO", t.SendVerificationCode = "SEND_VERIFICATION_CODE", t.Verify = "VERIFY", t.GetPlayer = "GET_PLAYER", t.UpdateSpecialOffers = "UPDATE_SPECIAL_OFFERS"
        })(i || (i = {}));
        class a {
            static GetInfo() {
                return new Promise((t, e) => {
                    const o = {
                        ark_id: SS.Network.LoginModel.LoginInfo.pin_ark_id
                    };
                    n.LobbyClient.Instance.GetUserClient.SentNoRetryCommond(a.CmdId, i.GetInfo, o, (o, n) => {
                        if (0 == o) {
                            const {
                                Code: o,
                                DataList: i,
                                CountList: a
                            } = n.cmd_data;
                            console.log("[GetInfo] EB_Data:", n), 0 == o ? t(n.cmd_data) : e(o)
                        } else e(o)
                    })
                })
            }
            static SendGetVerificationCode(t) {
                return new Promise((e, o) => {
                    const s = {
                        ark_id: SS.Network.LoginModel.LoginInfo.pin_ark_id,
                        Bind: t,
                        BindType: "MAIL"
                    };
                    console.log("EB_SendGetVerificationCode", s), n.LobbyClient.Instance.GetUserClient.SentNoRetryCommond(a.CmdId, i.SendVerificationCode, s, (t, n) => {
                        if (console.log("EB_SendGetVerificationCode", t, n), 0 == t) {
                            const {
                                Code: t
                            } = n.cmd_data;
                            0 == t ? e(t) : o(t)
                        } else o(t)
                    })
                })
            }
            static Verify(t, e, o) {
                return new Promise((s, r) => {
                    const l = {
                        ark_id: SS.Network.LoginModel.LoginInfo.pin_ark_id,
                        Bind: t,
                        VerificationCode: e,
                        BindType: "MAIL",
                        SpecialOffers: o
                    };
                    n.LobbyClient.Instance.GetUserClient.SentNoRetryCommond(a.CmdId, i.Verify, l, (t, e) => {
                        if (console.log("EB_Verify", t, e), 0 == t) {
                            const {
                                Code: t
                            } = e.cmd_data;
                            0 == t ? s(e.cmd_data) : r(t)
                        } else r(t)
                    })
                })
            }
            static GetPlayer() {
                return new Promise((t, e) => {
                    const o = {
                        ark_id: SS.Network.LoginModel.LoginInfo.pin_ark_id,
                        BindType: "MAIL"
                    };
                    n.LobbyClient.Instance.GetUserClient.SentNoRetryCommond(a.CmdId, i.GetPlayer, o, (o, n) => {
                        if (console.log("EB_GetPlayer", o, n), 0 == o) {
                            const {
                                Code: o,
                                Data: i
                            } = n.cmd_data;
                            0 == o ? t(i) : e(o)
                        } else e(o)
                    })
                })
            }
            static UpdateSpecialOffer(t) {
                return new Promise((e, o) => {
                    const s = {
                        ark_id: SS.Network.LoginModel.LoginInfo.pin_ark_id,
                        BindType: "MAIL",
                        SpecialOffers: t
                    };
                    n.LobbyClient.Instance.GetUserClient.SentNoRetryCommond(a.CmdId, i.UpdateSpecialOffers, s, (t, n) => {
                        if (console.log("EB_UpdateSpecialOffer", t, n), 0 == t) {
                            const {
                                Code: t,
                                Data: i
                            } = n.cmd_data;
                            0 == t ? e(i) : o(t)
                        } else o(t)
                    })
                })
            }
        }
        o.default = a, a.CmdId = "BindAccount", cc._RF.pop()
    }, {
        "../../../LobbyCommon/Net/LobbyClient": void 0
    }],
    EB_Data: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "078b4jPv/tJlL1gDuH6RNC7", "EB_Data");
        var n, i = this && this.__decorate || function(t, e, o, n) {
            var i, a = arguments.length,
                s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
            else
                for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
            return a > 3 && s && Object.defineProperty(e, o, s), s
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const a = t("./EB_Define"),
            s = t("./EB_Utils"),
            {
                ccclass: r
            } = cc._decorator;
        let l = n = class extends cc.Component {
            constructor() {
                super(...arguments), this.root = null, this.text = null, this.config = null, this.getCodeTime = null, this.confirmTime = null, this.getCodeAttempts = 0, this.confirmAttempts = 0, this.email = "", this.code = "", this.info = "", this.reward = [], this.asset = null, this.sendCodeEmail = "", this.verifyReward = null, this.dontShowAgainTime = null, this.TodayFirstShowTime = null
            }
            static get Instance() {
                return n.instance || (n.instance = new n), n.instance
            }
            static get getCodeAttemptExceeded() {
                const {
                    config: t,
                    getCodeAttempts: e
                } = n.Instance;
                return e >= t.MAX_GET_CODE_ATTEMPS
            }
            static get confirmAttemptExceeded() {
                const {
                    config: t,
                    confirmAttempts: e
                } = n.Instance;
                return e >= t.MAX_CONFIRM_ERROR
            }
            static get lastCodeInterval() {
                const {
                    config: t,
                    getCodeTime: e
                } = n.Instance;
                let o = Math.floor(t.EMAIL_LIFE_TIME - (Date.now() - e) / 1e3);
                return o < 0 && (o = 0), o
            }
            static get lastConfirmInterval() {
                const {
                    config: t,
                    confirmTime: e
                } = n.Instance;
                let o = Math.floor(t.CONFIRM_CD - (Date.now() - e) / 1e3);
                return o < 0 && (o = 0), o
            }
            static get isDifferentEmail() {
                const {
                    sendCodeEmail: t,
                    email: e
                } = n.Instance;
                return "" == t || "" != t && t != e
            }
            static get isLastSendEmail() {
                const {
                    sendCodeEmail: t,
                    email: e
                } = n.Instance;
                return "" != t && t == e
            }
            static get lastCodeExpired() {
                return n.lastCodeInterval <= 0 && n.instance.getCodeAttempts > 0
            }
            static get lastConfirmCDEnd() {
                return n.lastConfirmInterval <= 0
            }
            static storeGetCodeAttempts(t) {
                n.Instance.getCodeAttempts = t, s.default.storeToLocalStorage(a.EB_LocalStorageKey.GetCodeAttempts, t.toString())
            }
            static storeSendCodeEmail() {
                n.Instance.sendCodeEmail = n.Instance.email, s.default.storeToLocalStorage(a.EB_LocalStorageKey.Email, n.Instance.sendCodeEmail)
            }
            static storeConfirmAttempts(t) {
                n.Instance.confirmAttempts = t, s.default.storeToLocalStorage(a.EB_LocalStorageKey.ConfirmAttempts, t.toString())
            }
            static storeGetCodeCurrentTime(t) {
                n.Instance.getCodeTime = t, t ? s.default.storeToLocalStorage(a.EB_LocalStorageKey.GetCodeCurrentTime, t.toString()) : s.default.removeFromLocallStorage(a.EB_LocalStorageKey.GetCodeCurrentTime)
            }
            static storeConfirmCurrentTime(t) {
                n.Instance.confirmTime = t, t ? s.default.storeToLocalStorage(a.EB_LocalStorageKey.ConfirmCurrentTime, t.toString()) : s.default.removeFromLocallStorage(a.EB_LocalStorageKey.ConfirmCurrentTime)
            }
            static storeDontShowAgainTime(t) {
                n.Instance.dontShowAgainTime = t, t ? s.default.storeToLocalStorage(a.EB_LocalStorageKey.DontShowAgain, t.toString()) : s.default.removeFromLocallStorage(a.EB_LocalStorageKey.DontShowAgain)
            }
            static storeTodayFirstShowTime(t) {
                n.Instance.TodayFirstShowTime = t, t ? s.default.storeToLocalStorage(a.EB_LocalStorageKey.TodayFirstShowTime, t.toString()) : s.default.removeFromLocallStorage(a.EB_LocalStorageKey.TodayFirstShowTime)
            }
            static getIsTodayFirstShowTime() {
                let t = !0;
                const {
                    TodayFirstShowTime: e
                } = n.Instance;
                if (null != e && e > 0) {
                    let o = new Date(e).getDate(),
                        n = (new Date).getDate();
                    o == n && (t = !1), console.warn("[EmailBonus] day check , lastDay = " + o + ", today = " + n + ", isTodayFirstShow = " + t)
                }
                return t
            }
        };
        l = n = i([r], l), o.default = l, cc._RF.pop()
    }, {
        "./EB_Define": "EB_Define",
        "./EB_Utils": "EB_Utils"
    }],
    EB_DefaultSettings: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "0f6d0/9MiFOpJYpV+WXd1CG", "EB_DefaultSettings"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.defaultInfo = o.defaultConfig = o.defaultText = void 0, o.defaultText = {
            EMAIL_INVALID: {
                text: "Invalid Email Format.",
                color: "#ff0000"
            },
            USED_EMAIL: {
                text: "Email Already in Use.",
                color: "#ff0000"
            },
            CODE_SENT: {
                text: "Verification Code Sent.",
                color: "#00ff00"
            },
            VERIFICATION_CODE_INVALID: {
                text: "Invalid Verification Code.",
                color: "#ff0000"
            },
            EMAIL_COUNT_DOWN: {
                text: "Please enter verification code in {0}.",
                color: "#000000"
            },
            ATTEMP_EXCEEDED: {
                text: "Too many attempts. Please try again tomorrow.",
                color: "#ff0000"
            },
            EMAIL_PLACEHOLDER: {
                text: "Enter Your Email",
                color: "#bbbbbb"
            },
            VERIFICATION_CODE_PLACEHOLDER: {
                text: "Enter Verification Code",
                color: "#bbbbbb"
            },
            CONFIRM_COUNTDOWN: {
                text: "Verification failed 3 times, Please try again after {0}.",
                color: "#ff0000"
            },
            VERIFICATION_CODE_EXPIRED: {
                text: "Verification Code Expired.",
                color: "#ff0000"
            }
        }, o.defaultInfo = "\nDear Player\nAssign your email address to your player account and get a bonus\nright now!\nYou may get more personal bonuses in the future as well!\n\nHow to get bonus now ?\n1.Enter your email address and click GET CODE.\n2.A verification code will be sent to your email.\n3.Enter verification code and click CONFIRM.\n4.500 Entries will be added yo tour player account immediately.\n\n* Only one email address can be registered.\n", o.defaultConfig = {
            EMAIL_MAX_LEN: 30,
            CODE_MAX_LEN: 8,
            MAX_GET_CODE_ATTEMPS: 3,
            DAY_GET_CODE_CD: 1600,
            EMAIL_LIFE_TIME: 300,
            MAX_CONFIRM_ERROR: 3,
            CONFIRM_CD: 300,
            GET_CODE_CD: 60,
            DONT_SHOW_AGAIN_DAY: 30
        }, cc._RF.pop()
    }, {}],
    EB_Define: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f0193m0b+hBZLuVq40o2NoP", "EB_Define"), Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.EB_Step = o.EB_EventGroup = o.EB_LocalStorageKey = o.EB_ButtonName = o.EB_State = void 0,
            function(t) {
                t[t.INIT = 0] = "INIT", t[t.MAIN = 1] = "MAIN", t[t.FINAL = 2] = "FINAL"
            }(o.EB_State || (o.EB_State = {})),
            function(t) {
                t[t.CloseMain = 0] = "CloseMain", t[t.GetCode = 1] = "GetCode", t[t.PasteEmail = 2] = "PasteEmail", t[t.EditEmail = 3] = "EditEmail", t[t.PasteCode = 4] = "PasteCode", t[t.OpenInfo = 5] = "OpenInfo", t[t.CloseInfo = 6] = "CloseInfo", t[t.Confirm = 7] = "Confirm", t[t.Ok = 8] = "Ok"
            }(o.EB_ButtonName || (o.EB_ButtonName = {})),
            function(t) {
                t.Email = "Email", t.GetCodeCurrentTime = "GetCodeCurrentTime", t.ConfirmCurrentTime = "ConfirmCurrentTime", t.GetCodeAttempts = "GetCodeAttempts", t.ConfirmAttempts = "ConfirmAttempts", t.DontShowAgain = "DontShowAgain", t.TodayFirstShowTime = "TodayFirstShowTime"
            }(o.EB_LocalStorageKey || (o.EB_LocalStorageKey = {})),
            function(t) {
                t.EmailBonus = "EB_EventGroup_EmailBonus", t.InfoPage = "EB_EventGroup_InfoPage", t.MainPage = "EB_EventGroup_MainPage", t.MainState = "EB_EventGroup_State_Main"
            }(o.EB_EventGroup || (o.EB_EventGroup = {})),
            function(t) {
                t[t.EnterEmail = 0] = "EnterEmail", t[t.SendCode = 1] = "SendCode", t[t.Verify = 2] = "Verify"
            }(o.EB_Step || (o.EB_Step = {})), cc._RF.pop()
    }, {}],
    EB_EditBoxCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "016e0eqKu5AAoeTanRUPhh/", "EB_EditBoxCtrl");
        var n = this && this.__decorate || function(t, e, o, n) {
            var i, a = arguments.length,
                s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
            else
                for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
            return a > 3 && s && Object.defineProperty(e, o, s), s
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const i = t("../EB_Data"),
            a = t("./EB_CodeEditBox"),
            s = t("./EB_EmailEditBox"),
            {
                ccclass: r,
                property: l
            } = cc._decorator;
        let c = class extends cc.Component {
            constructor() {
                super(...arguments), this.email = null, this.code = null
            }
            setPlaceHolder() {
                const {
                    text: t
                } = i.default.Instance, {
                    EMAIL_PLACEHOLDER: e,
                    VERIFICATION_CODE_PLACEHOLDER: o
                } = t;
                this.email.setPlaceHolder(e), this.code.setPlaceHolder(o)
            }
            setMaxLen() {
                const {
                    EMAIL_MAX_LEN: t,
                    CODE_MAX_LEN: e
                } = i.default.Instance.config;
                this.email.setMaxLen(t), this.code.setMaxLen(e)
            }
            initState() {
                console.log("[EB_EditBoxCtrl]Init"), this.setEmailEditable(!0), this.setVerificationCodeEditable(!1), this.setPlaceHolder(), this.setMaxLen()
            }
            checkEmailValid() {
                this.email.sendEmailEvent()
            }
            setEmailEditable(t) {
                this.email.editable = t
            }
            setVerificationCodeEditable(t) {
                this.code.editable = t
            }
            recoverEmailEditBox() {
                this.email.setFromData()
            }
            clearCode() {
                this.code.clear()
            }
            clearEmail() {
                this.email.clear()
            }
            canEnterCode() {
                this.code.editable = !0
            }
            onGetCode() {
                this.email.editable = !1
            }
            onConfirm() {
                this.email.editable = !0, this.code.editable = !1
            }
            onGetCodeComplete() {
                this.email.editable = !0
            }
        };
        n([l(s.default)], c.prototype, "email", void 0), n([l(a.default)], c.prototype, "code", void 0), c = n([r], c), o.default = c, cc._RF.pop()
    }, {
        "../EB_Data": "EB_Data",
        "./EB_CodeEditBox": "EB_CodeEditBox",
        "./EB_EmailEditBox": "EB_EmailEditBox"
    }],
    EB_EditBox: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "24cb3PDeXBNILQ0q4vVcmUw", "EB_EditBox");
        var n = this && this.__decorate || function(t, e, o, n) {
            var i, a = arguments.length,
                s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
            else
                for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
            return a > 3 && s && Object.defineProperty(e, o, s), s
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const {
            ccclass: i,
            property: a
        } = cc._decorator;
        let s = class extends cc.Component {
            constructor() {
                super(...arguments), this.editBox = null, this.block = null, this._editable = !0
            }
            onLoad() {
                this.editBox.node.on("editing-did-began", this.onEditDidBegan, this), this.editBox.node.on("editing-did-ended", this.onEditDidEnded, this), this.editBox.node.on("text-changed", this.onTextChanged, this), this.editBox.node.on("editing-return", this.onEditingReturn, this)
            }
            onDestroy() {
                this.editBox.node.targetOff(this.editBox.node)
            }
            clear() {
                this.editBox.string = ""
            }
            setPlaceHolder(t) {
                this.editBox.placeholder = t.text, this.editBox.placeholderLabel.node.color = (new cc.Color).fromHEX(t.color)
            }
            setMaxLen(t) {
                this.editBox.maxLength = t
            }
            set editable(t) {
                this._editable = t, this.block.active = !t
            }
            get editable() {
                return this._editable
            }
            get string() {
                return this.editBox.string
            }
        };
        n([a(cc.EditBox)], s.prototype, "editBox", void 0), n([a(cc.Node)], s.prototype, "block", void 0), s = n([i], s), o.default = s, cc._RF.pop()
    }, {}],
    EB_EmailEditBox: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "83bdayI9z1O/Jzaa+zwWDlg", "EB_EmailEditBox");
        var n = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            },
            i = this && this.__awaiter || function(t, e, o, n) {
                return new(o || (o = Promise))(function(i, a) {
                    function s(t) {
                        try {
                            l(n.next(t))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function r(t) {
                        try {
                            l(n.throw(t))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(s, r)
                    }
                    l((n = n.apply(t, e || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const a = t("../../../../../LobbyCommon/Helper/EventSystem"),
            s = t("../EB_Data"),
            r = t("../Event/EB_Events"),
            l = t("./EB_EditBox"),
            c = t("../EB_Utils"),
            {
                ccclass: d,
                menu: E
            } = cc._decorator;
        let m = class extends l.default {
            onEditDidBegan() {
                a.EventSystem.Event(a.Keyboard.Show).Notify(this.editBox, this.onTextChanged.bind(this), null, s.default.Instance.root, !0)
            }
            onEditDidEnded() {
                const t = c.default.isValidEmail(this.string);
                this.setEmailErrorState(!t && this.string.length > 0), this.sendEmailEvent()
            }
            sendEmailEvent() {
                const t = c.default.isValidEmail(this.string);
                t ? (s.default.Instance.email = this.string, a.EventSystem.Event(r.EB_Events.OnEmailFormatVaild).Notify()) : !t && this.string.length > 0 ? a.EventSystem.Event(r.EB_Events.OnEmailFormatError).Notify(!0) : a.EventSystem.Event(r.EB_Events.OnEmailFormatError).Notify(!1)
            }
            onTextChanged() {
                this.editBox.string = c.default.removeBlank(this.string), this.setEmailErrorState(!1), c.default.isValidEmail(this.string) ? (s.default.Instance.email = this.string, a.EventSystem.Event(r.EB_Events.OnEmailFormatVaild).Notify()) : a.EventSystem.Event(r.EB_Events.OnEmailFormatError).Notify(!1)
            }
            onEditingReturn() {}
            setEmailErrorState(t) {
                this.editBox.background.node.color = t ? cc.Color.RED : cc.Color.BLACK
            }
            onPasteEmailClicked() {
                return i(this, void 0, void 0, function*() {
                    const t = yield c.default.getTextFromClipboard();
                    t.length > this.editBox.maxLength ? this.editBox.string = t.slice(0, this.editBox.maxLength) : this.editBox.string = t, this.onEditDidEnded()
                })
            }
            onLoad() {
                super.onLoad(), this.editBox.inputMode = cc.EditBox.InputMode.EMAIL_ADDR, a.EventSystem.Event(r.EB_Events.OnPasteEmailClicked).Insert(this.onPasteEmailClicked, this)
            }
            onDestroy() {
                a.EventSystem.Event(r.EB_Events.OnPasteEmailClicked).Remove(this.onPasteEmailClicked, this)
            }
            setFromData() {
                this.editBox.string = s.default.Instance.email, this.sendEmailEvent()
            }
        };
        m = n([d, E("EmailBonus/EB_EmailEditBox")], m), o.default = m, cc._RF.pop()
    }, {
        "../../../../../LobbyCommon/Helper/EventSystem": void 0,
        "../EB_Data": "EB_Data",
        "../EB_Utils": "EB_Utils",
        "../Event/EB_Events": "EB_Events",
        "./EB_EditBox": "EB_EditBox"
    }],
    EB_Events: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "9c2aabYvTFPCrByTMN6UP8P", "EB_Events"), Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.EB_Functions = o.EB_Events = void 0,
            function(t) {
                t.OnCloseMainClicked = "[EB_Events]OnCloseMainClicked", t.OnCloseInfoClicked = "[EB_Events]OnCloseInfoClicked", t.OnOpenInfoClicked = "[EB_Events]OnOpenInfoClicked", t.OnGetCodeClicked = "[EB_Events]OnGetCodeClicked", t.OnGetCodeCmdRecieved = "[EB_Events]OnGetCodeCmdRecieved", t.OnConfirmCmdRecieved = "[EB_Events]OnConfirmCmdRecieved", t.OnConfirmClicked = "[EB_Events]OnConfirmClicked", t.OnPasteEmailClicked = "[EB_Events]OnPasteEmailClicked", t.OnEditEmailClicked = "[EB_Events]OnEditEmailClicked", t.OnPasteCodeClicked = "[EB_Events]OnPasteCodeClicked", t.OnOkClicked = "[EB_Events]OnOkClicked", t.OnAgreeClicked = "[EB_Events]OnAgreeClicked", t.OnDontShowAgainClicked = "[EB_Events]OnDontShowAgainClicked", t.OnEmailFormatError = "[EB_Events]OnEmailFormatError", t.OnEmailFormatVaild = "[EB_Events]OnEmailFormatVaild", t.OnEmailDuplicate = "[EB_Events]OnEmailDuplicate", t.OnVerificationCodeFormatValid = "[EB_Events]OnVerificationCodeFormatValid", t.OnVerificationCodeFormatError = "[EB_Events]OnVerificationCodeFormatError", t.OnVerificationCodeError = "[EB_Events]OnVerificationCodeError", t.SetBtn = "[EB_Events]SetBtn", t.OnInitComplete = "[EB_Events]OnInitComplete", t.OnBtnCountDownComplete = "[EB_Events]OnBtnCountDownComplete", t.OnGetCodeDailyCoolDownOff = "[EB_Events]OnGetCodeDailyCoolDownOff", t.OnConfirmDailyCoolDownOff = "[EB_Events]OnConfirmDailyCoolDownOff", t.OnEmailExpired = "[EB_Events]OnEmailExpired", t.OnConfirmCDEnd = "[EB_Events]OnConfirmCDEnd", t.CloseAll = "[EB_Events]CloseAll"
            }(o.EB_Events || (o.EB_Events = {})), (o.EB_Functions || (o.EB_Functions = {})).HideTypeItem = "[EB_Functions]HideTypeItem", cc._RF.pop()
    }, {}],
    EB_FSM: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "9fc09h0XIRMuYeh1AFMOzTD", "EB_FSM"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = class {
            constructor() {
                this.m_CurrentState = 0, this.m_ActiveState = null, this.m_StateList = null, this.m_StateIDList = null, this.m_StateListLength = 0, this.m_CurrentState = -1, this.m_StateList = [], this.m_StateIDList = [], this.m_StateListLength = 0
            }
            get CurrentState() {
                return this.m_CurrentState
            }
            addState(t, e, o) {
                if (null != this.m_StateList[t]) return !1;
                this.m_StateIDList[this.m_StateListLength++] = t, this.m_StateList[t] = e, e.onLoadInit(this, o)
            }
            release() {
                null != this.m_ActiveState && this.m_ActiveState.onQuitState(), this.m_ActiveState = null;
                for (let t = 0; t < this.m_StateListLength; t++) this.m_StateList[this.m_StateIDList[t]] = null;
                this.m_StateList = null, this.m_StateIDList = null, this.m_StateListLength = 0
            }
            update(t) {
                null != this.m_ActiveState && this.m_ActiveState.update(t)
            }
            setState(t) {
                this.m_CurrentState !== t ? (null != this.m_ActiveState && (this.m_ActiveState.onQuitState(), this.m_ActiveState.isActive = !1, this.m_ActiveState = null, this.m_CurrentState = -1), null != this.m_StateList[t] ? (this.m_CurrentState = t, this.m_ActiveState = this.m_StateList[t], this.m_ActiveState.isActive = !0, cc.log("[FSM] Transit to " + this.m_ActiveState.constructor.name), this.m_ActiveState.onEnterState()) : cc.error("[FSM] Transit is failed " + t.toString())) : cc.log("[FSM] Transit to same state do nothing.")
            }
        }, cc._RF.pop()
    }, {}],
    EB_Final: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "9bbcdhUtu1HC4PfdaoO7fJk", "EB_Final");
        var n = this && this.__decorate || function(t, e, o, n) {
            var i, a = arguments.length,
                s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
            else
                for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
            return a > 3 && s && Object.defineProperty(e, o, s), s
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const i = t("../../../../../LobbyCommon/Connect/Script/ConnectPanelMgr"),
            a = t("../../../../../LobbyCommon/Helper/EventSystem"),
            s = t("../EB_RewardPage"),
            r = t("../EB_StateBase"),
            l = t("../Event/EB_Events"),
            {
                ccclass: c,
                property: d
            } = cc._decorator;
        let E = class extends r.default {
            constructor() {
                super(...arguments), this.rewardPage = null
            }
            onEnterState() {
                i.ConnectPanelMgr.Instance.DisableConnectPanel(), console.log("[EB_Final]"), this.rewardPage.show(), a.EventSystem.Function(l.EB_Functions.HideTypeItem)()
            }
            onQuitState() {}
            update(t) {}
        };
        n([d(s.default)], E.prototype, "rewardPage", void 0), E = n([c], E), o.default = E, cc._RF.pop()
    }, {
        "../../../../../LobbyCommon/Connect/Script/ConnectPanelMgr": void 0,
        "../../../../../LobbyCommon/Helper/EventSystem": void 0,
        "../EB_RewardPage": "EB_RewardPage",
        "../EB_StateBase": "EB_StateBase",
        "../Event/EB_Events": "EB_Events"
    }],
    EB_InfoPage: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "34f5f2DE/9EiJ246eGu7SJn", "EB_InfoPage");
        var n = this && this.__decorate || function(t, e, o, n) {
            var i, a = arguments.length,
                s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
            else
                for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
            return a > 3 && s && Object.defineProperty(e, o, s), s
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const i = t("../../../../LobbyCommon/Helper/EventSystemObjectCtrl"),
            a = t("./EB_Define"),
            s = t("./Event/EB_Events"),
            {
                ccclass: r,
                property: l,
                menu: c
            } = cc._decorator;
        let d = class extends cc.Component {
            constructor() {
                super(...arguments), this.root = null
            }
            registerEvents() {
                i.default.Insert(a.EB_EventGroup.InfoPage, s.EB_Events.OnOpenInfoClicked, this.onOpenInfoClicked, this), i.default.Insert(a.EB_EventGroup.InfoPage, s.EB_Events.OnCloseInfoClicked, this.onCloseInfoClicked, this)
            }
            onLoad() {
                this.registerEvents(), this.onCloseInfoClicked(), this.root.active = !1
            }
            onDestroy() {
                i.default.Remove(a.EB_EventGroup.InfoPage)
            }
            onOpenInfoClicked() {
                this.root.active = !0
            }
            onCloseInfoClicked() {
                this.root.active = !1
            }
            get active() {
                return this.root.active
            }
            set active(t) {
                this.root.active = t
            }
        };
        n([l(cc.Node)], d.prototype, "root", void 0), d = n([r, c("EmailBonus/EB_InfoPage")], d), o.default = d, cc._RF.pop()
    }, {
        "../../../../LobbyCommon/Helper/EventSystemObjectCtrl": void 0,
        "./EB_Define": "EB_Define",
        "./Event/EB_Events": "EB_Events"
    }],
    EB_Init: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b5d8fqwaRRDKptXxbb/CIip", "EB_Init");
        var n = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            },
            i = this && this.__awaiter || function(t, e, o, n) {
                return new(o || (o = Promise))(function(i, a) {
                    function s(t) {
                        try {
                            l(n.next(t))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function r(t) {
                        try {
                            l(n.throw(t))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(s, r)
                    }
                    l((n = n.apply(t, e || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const a = t("../../../../../LobbyCommon/Helper/EventSystem"),
            s = t("../EB_Data"),
            r = t("../EB_Define"),
            l = t("../EB_StateBase"),
            c = t("../EB_Utils"),
            d = t("../Event/EB_Events"),
            E = t("../TypeItem/EB_TypeItemCtrl"),
            {
                ccclass: m,
                property: u
            } = cc._decorator;
        let h = class extends l.default {
            constructor() {
                super(...arguments), this.typeItemCtrl = null, this.mainPage = null, this.btnStateCtrl = null, this.titleLabel = null, this.infoLabel = null, this.gdText = null, this.mcText = null
            }
            initButtonState() {
                const {
                    btnStateCtrl: t
                } = this.controller;
                t.init()
            }
            initEditBox() {
                const {
                    mainPage: t
                } = this.controller;
                c.default.closeSuggestion(), t.editBoxCtrl.initState()
            }
            initHintLabels() {
                const {
                    mainPage: t
                } = this.controller;
                t.richTextCtrl.clearAll()
            }
            initText() {
                const t = "magiccity" == window.gd_nowLOGO;
                this.gdText.active = !t, this.mcText.active = t
            }
            initInfo() {
                this.infoLabel.string = s.default.Instance.info
            }
            syncDataFromLocalStorage() {
                var t, e, o, n, i, a, l, d;
                s.default.Instance.email = null !== (t = c.default.getLocalStorageData(r.EB_LocalStorageKey.Email)) && void 0 !== t ? t : "", s.default.Instance.sendCodeEmail = null !== (e = c.default.getLocalStorageData(r.EB_LocalStorageKey.Email)) && void 0 !== e ? e : "";
                const E = null !== (o = c.default.getLocalStorageData(r.EB_LocalStorageKey.GetCodeCurrentTime)) && void 0 !== o ? o : "0";
                s.default.Instance.getCodeTime = parseInt(E);
                const m = null !== (n = c.default.getLocalStorageData(r.EB_LocalStorageKey.ConfirmCurrentTime)) && void 0 !== n ? n : "0";
                s.default.Instance.confirmTime = parseInt(m);
                const u = null !== (i = c.default.getLocalStorageData(r.EB_LocalStorageKey.GetCodeAttempts)) && void 0 !== i ? i : "0";
                s.default.Instance.getCodeAttempts = parseInt(u);
                const h = null !== (a = c.default.getLocalStorageData(r.EB_LocalStorageKey.ConfirmAttempts)) && void 0 !== a ? a : "0";
                s.default.Instance.confirmAttempts = parseInt(h);
                const C = null !== (l = c.default.getLocalStorageData(r.EB_LocalStorageKey.DontShowAgain)) && void 0 !== l ? l : "0";
                s.default.Instance.dontShowAgainTime = parseInt(C);
                const f = null !== (d = c.default.getLocalStorageData(r.EB_LocalStorageKey.TodayFirstShowTime)) && void 0 !== d ? d : "0";
                s.default.Instance.TodayFirstShowTime = parseInt(f)
            }
            checkGetCodeAttemps() {
                const {
                    getCodeTime: t,
                    config: e
                } = s.default.Instance;
                c.default.WithInDuration(t, e.DAY_GET_CODE_CD) || (console.log("[EB_Init]checkGetCodeAttemps"), s.default.Instance.getCodeAttempts = 0, c.default.removeFromLocallStorage(r.EB_LocalStorageKey.GetCodeAttempts))
            }
            checkConfirmAttemps() {
                const {
                    confirmTime: t,
                    config: e
                } = s.default.Instance;
                c.default.WithInDuration(t, e.CONFIRM_CD) || (console.log("[EB_Init]checkConfirmAttemps"), s.default.Instance.confirmAttempts = 0, c.default.removeFromLocallStorage(r.EB_LocalStorageKey.ConfirmAttempts))
            }
            onEnterState() {
                return i(this, void 0, void 0, function*() {
                    try {
                        this.mainPage = this.controller.mainPage, this.btnStateCtrl = this.controller.btnStateCtrl, console.log("EB_Init]onEnterState", s.default.Instance);
                        const e = s.default.Instance.reward[0].Amount;
                        this.typeItemCtrl.generateBtn(e / 100), this.titleLabel.string = e.toString(), s.default.Instance.info = s.default.Instance.info.replace("{0}", e.toString()), this.mainPage.active = !1, this.controller.infopage.active = !1, this.initButtonState(), this.initEditBox(), this.initHintLabels(), this.syncDataFromLocalStorage(), this.checkGetCodeAttemps(), this.checkConfirmAttemps(), this.initInfo(), this.initText(), this.mainPage.initStepHint(), this.recovery(), this.btnStateCtrl.setConfirm(!1), a.EventSystem.Event(d.EB_Events.OnInitComplete).Notify(), console.log("EB_Init]onEnterState", s.default.Instance)
                    } catch (t) {
                        console.error("EB_Init]onEnterStateError:", t), a.EventSystem.Event(d.EB_Events.CloseAll).Notify()
                    }
                })
            }
            recovery() {
                if (this.mainPage.editBoxCtrl.recoverEmailEditBox(), s.default.getCodeAttemptExceeded) s.default.lastCodeExpired ? (console.log("[EB_Init] recovery \u9a57\u8b49\u78bc\u8d85\u904e\u6b21\u6578&\u904e\u671f"), this.mainPage.editBoxCtrl.clearEmail(), this.mainPage.richTextCtrl.showGetCodeAttemptExceed(!0), this.mainPage.editBoxCtrl.setVerificationCodeEditable(!1), this.btnStateCtrl.setPasteCode(!1), this.mainPage.richTextCtrl.showCodeExpired()) : (console.log("[EB_Init] recovery \u9a57\u8b49\u78bc\u8d85\u904e\u6b21\u6578\u4f46\u9084\u6c92\u904e\u671f"), this.mainPage.editBoxCtrl.setVerificationCodeEditable(!0), this.btnStateCtrl.setPasteCode(!0), this.mainPage.richTextCtrl.showVerificationCodeSent(!0), this.mainPage.richTextCtrl.showEnterCodeHint(!0), this.mainPage.setCheck(r.EB_Step.EnterEmail, !0), this.mainPage.setCheck(r.EB_Step.SendCode, !0)), this.btnStateCtrl.setGetCode(!1), this.mainPage.editBoxCtrl.setEmailEditable(!1);
                else {
                    console.log("[EB_Init] recovery \u672a\u9054\u4e0a\u9650\u53ef\u7e7c\u7e8c\u8f38\u5165");
                    const {
                        getCodeTime: t,
                        config: e,
                        getCodeAttempts: o
                    } = s.default.Instance, n = Date.now(), i = Math.floor((n - t) / 1e3);
                    0 != t && i <= e.GET_CODE_CD && (console.log("[EB_Init] recovery \u7576\u524d\u6642\u9593\u5230\u4e0a\u4e00\u6b21\u9edegetCode\u6642\u9593<CD\u6642\u9593"), this.btnStateCtrl.setGetCodeCoolDown(e.GET_CODE_CD - i), this.btnStateCtrl.setEditEmailActive(!0), this.mainPage.editBoxCtrl.setEmailEditable(!1), this.btnStateCtrl.setPasteEmail(!1), this.mainPage.setCheck(r.EB_Step.EnterEmail, !0), this.mainPage.setCheck(r.EB_Step.SendCode, !0)), s.default.lastCodeExpired ? (console.log("[EB_Init] recovery \u82e5email\u904e\u671f (\u53ef\u91cd\u9001\u9a57\u8b49\u78bc)"), this.mainPage.editBoxCtrl.setVerificationCodeEditable(!1), this.btnStateCtrl.setPasteCode(!1), this.mainPage.richTextCtrl.showCodeExpired(), this.mainPage.btnStateCtrl.setConfirm(!1), this.mainPage.setCheck(r.EB_Step.EnterEmail, !0)) : !s.default.lastCodeExpired && o > 0 && (console.log("[EB_Init] recovery \u9a57\u8b49\u78bc\u672a\u904e\u671f&\u53ef\u7e7c\u7e8c\u8f38\u5165email"), this.mainPage.editBoxCtrl.setVerificationCodeEditable(!0), this.btnStateCtrl.setPasteCode(!0), this.mainPage.richTextCtrl.showVerificationCodeSent(!0), this.mainPage.richTextCtrl.showEnterCodeHint(!0), this.mainPage.editBoxCtrl.setEmailEditable(!1), this.btnStateCtrl.setPasteEmail(!1), this.btnStateCtrl.setEditEmailActive(!0), this.mainPage.setCheck(r.EB_Step.EnterEmail, !0), this.mainPage.setCheck(r.EB_Step.SendCode, !0))
                }!s.default.lastConfirmCDEnd && s.default.confirmAttemptExceeded && s.default.Instance.confirmAttempts > 0 && this.mainPage.startConfirmCoolDown();
                let t = s.default.Instance.dontShowAgainTime + 864e5 * s.default.Instance.config.DONT_SHOW_AGAIN_DAY;
                this.mainPage.dontShowToggle.isChecked = s.default.Instance.dontShowAgainTime > 0 && Date.now() < t, this.mainPage.OriDontShowState = this.mainPage.dontShowToggle.isChecked
            }
            onQuitState() {}
            update(t) {}
        };
        n([u(E.default)], h.prototype, "typeItemCtrl", void 0), n([u(cc.Label)], h.prototype, "titleLabel", void 0), n([u(cc.RichText)], h.prototype, "infoLabel", void 0), n([u(cc.Node)], h.prototype, "gdText", void 0), n([u(cc.Node)], h.prototype, "mcText", void 0), h = n([m], h), o.default = h, cc._RF.pop()
    }, {
        "../../../../../LobbyCommon/Helper/EventSystem": void 0,
        "../EB_Data": "EB_Data",
        "../EB_Define": "EB_Define",
        "../EB_StateBase": "EB_StateBase",
        "../EB_Utils": "EB_Utils",
        "../Event/EB_Events": "EB_Events",
        "../TypeItem/EB_TypeItemCtrl": "EB_TypeItemCtrl"
    }],
    EB_MainPage: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f72ebtEHYFKEZjpN/300BZQ", "EB_MainPage");
        var n = this && this.__decorate || function(t, e, o, n) {
            var i, a = arguments.length,
                s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
            else
                for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
            return a > 3 && s && Object.defineProperty(e, o, s), s
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const i = t("../Event/EB_Events"),
            a = t("../EditBox/EB_EditBoxCtrl"),
            s = t("./EB_RichTextCtrl"),
            r = t("../../../../../LobbyCommon/Helper/EventSystem"),
            l = t("../Button/EB_ButtonStateCtrl"),
            c = t("../EB_Data"),
            d = t("../../../../../LobbyCommon/Helper/EventSystemObjectCtrl"),
            E = t("../EB_Define"),
            m = t("../../../../../LobbyCommon/Net/ClickLog"),
            u = t("../../../../../LobbyCommon/Net/ClickLogEnum"),
            {
                ccclass: h,
                property: C,
                menu: f
            } = cc._decorator;
        let _ = class extends cc.Component {
            constructor() {
                super(...arguments), this.root = null, this.editBoxCtrl = null, this.richTextCtrl = null, this.btnStateCtrl = null, this.toggle = null, this.dontShowToggle = null, this.stepHints = [], this.emailFormatVaild = !1, this.oriDontShowState = !1, this.isShowByPopup = !1
            }
            set OriDontShowState(t) {
                this.oriDontShowState = t
            }
            registerEvents() {
                d.default.Insert(E.EB_EventGroup.MainPage, i.EB_Events.OnCloseMainClicked, this.onCloseMainClicked, this), d.default.Insert(E.EB_EventGroup.MainPage, i.EB_Events.OnOpenInfoClicked, this.onOpenInfoClicked, this), d.default.Insert(E.EB_EventGroup.MainPage, i.EB_Events.OnCloseInfoClicked, this.onCloseInfoClicked, this), d.default.Insert(E.EB_EventGroup.MainPage, i.EB_Events.OnDontShowAgainClicked, this.OnDontShowAgainClicked, this)
            }
            onLoad() {
                this.registerEvents(), this.root.active = !1
            }
            onDestroy() {
                d.default.Remove(E.EB_EventGroup.MainPage)
            }
            onCloseMainClicked() {
                if (r.EventSystem.Event(r.SystemMsg.Close).Notify(), this.root.active = !1, this.oriDontShowState != this.dontShowToggle.isChecked) {
                    c.default.storeDontShowAgainTime(this.dontShowToggle.isChecked ? Date.now() : null);
                    let t = {
                        DontShowAgain: this.dontShowToggle.isChecked
                    };
                    m.ClickLog.DirectSend(u.LogName.PlayerAction, u.LogType_PlayerAction.EmailBonus, u.LogEvent_EmailBonus.DontShowAgain, "Lobby", t)
                }
                this.isShowByPopup && (this.isShowByPopup = !1, r.EventSystem.Event(r.CheckNextPopup).Notify())
            }
            onOpenInfoClicked() {
                this.root.opacity = 0, this.btnStateCtrl.setCloseMain(!1)
            }
            onCloseInfoClicked() {
                this.root.opacity = 255, this.btnStateCtrl.setCloseMain(!0)
            }
            OnDontShowAgainClicked() {}
            onGetCodeAttemptExceed() {
                this.richTextCtrl.showGetCodeAttemptExceed(!0), this.btnStateCtrl.setGetCode(!1), this.editBoxCtrl.setEmailEditable(!1)
            }
            startConfirmCoolDown() {
                this.btnStateCtrl.setGetCode(!1), this.richTextCtrl.showEnterCodeHint(!1), this.editBoxCtrl.setVerificationCodeEditable(!1), this.editBoxCtrl.clearCode(), this.btnStateCtrl.setPasteCode(!1), this.richTextCtrl.showConfirmCDHint(!0), this.unschedule(this.updateConfirmCoolDown), this.schedule(this.updateConfirmCoolDown, 1, cc.macro.REPEAT_FOREVER)
            }
            updateConfirmCoolDown() {
                c.default.lastConfirmCDEnd ? (c.default.storeConfirmAttempts(0), c.default.storeConfirmCurrentTime(null), this.richTextCtrl.showConfirmCDHint(!1), this.emailFormatVaild && (this.btnStateCtrl.setGetCode(!0), c.default.lastCodeExpired ? this.richTextCtrl.showCodeExpired() : (this.richTextCtrl.showEnterCodeHint(!0), this.editBoxCtrl.setVerificationCodeEditable(!0), this.btnStateCtrl.setPasteCode(!0))), this.unschedule(this.updateConfirmCoolDown)) : console.log("[EB_EnterEmail]updateConfirmCoolDown", c.default.lastConfirmInterval)
            }
            get active() {
                return this.root.active
            }
            set active(t) {
                this.root.active = t
            }
            initStepHint() {
                this.stepHints.forEach(t => {
                    t.isChecked = !1, t.interactable = !1
                })
            }
            setCheck(t, e) {
                this.stepHints[t].isChecked = e
            }
        };
        n([C(cc.Node)], _.prototype, "root", void 0), n([C(a.default)], _.prototype, "editBoxCtrl", void 0), n([C(s.default)], _.prototype, "richTextCtrl", void 0), n([C(l.default)], _.prototype, "btnStateCtrl", void 0), n([C(cc.Toggle)], _.prototype, "toggle", void 0), n([C(cc.Toggle)], _.prototype, "dontShowToggle", void 0), n([C([cc.Toggle])], _.prototype, "stepHints", void 0), _ = n([h, f("EmailBonus/EB_MainPage")], _), o.default = _, cc._RF.pop()
    }, {
        "../../../../../LobbyCommon/Helper/EventSystem": void 0,
        "../../../../../LobbyCommon/Helper/EventSystemObjectCtrl": void 0,
        "../../../../../LobbyCommon/Net/ClickLog": void 0,
        "../../../../../LobbyCommon/Net/ClickLogEnum": void 0,
        "../Button/EB_ButtonStateCtrl": "EB_ButtonStateCtrl",
        "../EB_Data": "EB_Data",
        "../EB_Define": "EB_Define",
        "../EditBox/EB_EditBoxCtrl": "EB_EditBoxCtrl",
        "../Event/EB_Events": "EB_Events",
        "./EB_RichTextCtrl": "EB_RichTextCtrl"
    }],
    EB_Main: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "13b75sdwPVFlpigeLRz26EI", "EB_Main");
        var n = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            },
            i = this && this.__awaiter || function(t, e, o, n) {
                return new(o || (o = Promise))(function(i, a) {
                    function s(t) {
                        try {
                            l(n.next(t))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function r(t) {
                        try {
                            l(n.throw(t))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(s, r)
                    }
                    l((n = n.apply(t, e || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const a = t("../../../../../LobbyCommon/Connect/Script/ConnectPanelMgr"),
            s = t("../../../../../LobbyCommon/Helper/EventSystem"),
            r = t("../../../../../LobbyCommon/Helper/EventSystemObjectCtrl"),
            l = t("../../../../../LobbyCommon/PopupMessage/Script/PopupMsgMgr"),
            c = t("../EB_Data"),
            d = t("../EB_Define"),
            E = t("../EB_StateBase"),
            m = t("../EB_Utils"),
            u = t("../Event/EB_Events"),
            {
                ccclass: h
            } = cc._decorator;
        let C = class extends E.default {
            constructor() {
                super(...arguments), this.mainPage = null, this.btnStateCtrl = null
            }
            onEmailFormatError(t) {
                m.default.removeFromLocallStorage(d.EB_LocalStorageKey.Email), this.mainPage.richTextCtrl.showEmailFormatError(t), this.mainPage.emailFormatVaild = !1, this.btnStateCtrl.setGetCode(!1), this.mainPage.setCheck(d.EB_Step.EnterEmail, !1), this.mainPage.setCheck(d.EB_Step.SendCode, !1)
            }
            onEmailFormatVaild() {
                c.default.getCodeAttemptExceeded || (c.default.lastConfirmCDEnd && this.btnStateCtrl.setGetCode(!0), m.default.storeToLocalStorage(d.EB_LocalStorageKey.Email, c.default.Instance.email), this.mainPage.emailFormatVaild = !0, this.mainPage.richTextCtrl.showEmailFormatError(!1), this.mainPage.setCheck(d.EB_Step.EnterEmail, !0), this.mainPage.setCheck(d.EB_Step.SendCode, c.default.isLastSendEmail && !c.default.lastCodeExpired))
            }
            onGetCodeClicked() {
                c.default.getCodeAttemptExceeded ? this.mainPage.onGetCodeAttemptExceed() : (this.mainPage.editBoxCtrl.clearCode(), this.mainPage.editBoxCtrl.setEmailEditable(!1), this.btnStateCtrl.setPasteEmail(!1), this.btnStateCtrl.setEditEmailActive(!0), this.controller.sendGetCodeCmd(), a.ConnectPanelMgr.Instance.ShowConnectPanel())
            }
            onGetCodeCmdRecieved(t, e) {
                if (a.ConnectPanelMgr.Instance.DisableConnectPanel(), this.mainPage.editBoxCtrl.setVerificationCodeEditable(t), this.btnStateCtrl.setPasteCode(t), this.btnStateCtrl.setGetCodeCoolDown(), c.default.storeGetCodeCurrentTime(Date.now()), t) c.default.storeGetCodeAttempts(++c.default.Instance.getCodeAttempts), this.mainPage.richTextCtrl.showVerificationCodeSent(!0), this.mainPage.richTextCtrl.showEnterCodeHint(!0), this.mainPage.setCheck(d.EB_Step.SendCode, !0), c.default.storeSendCodeEmail(), c.default.getCodeAttemptExceeded && this.btnStateCtrl.setEditEmailActive(!1);
                else switch (this.mainPage.setCheck(d.EB_Step.SendCode, !1), this.onEditEmailClicked(), e) {
                    case -19:
                        this.mainPage.richTextCtrl.showDuplicateEmail(!0);
                        break;
                    case -10:
                        this.mainPage.richTextCtrl.showGetCodeAttemptExceed(!0);
                        break;
                    case -9:
                        this.mainPage.richTextCtrl.showEmailFormatError(!0);
                        break;
                    case -11:
                        l.PopupMsgMgr.Instance.ShowPopMsg(l.PopupPriority.Warning, e.toString(), "Lobby", e.toString(), () => {
                            s.EventSystem.Event(u.EB_Events.OnCloseMainClicked).Notify()
                        }, "System Busy, try again next time.");
                        break;
                    default:
                        l.PopupMsgMgr.Instance.ShowPopMsg(l.PopupPriority.Warning, e.toString(), "Lobby", e.toString(), () => {
                            s.EventSystem.Event(u.EB_Events.CloseAll).Notify()
                        }, "System Busy, try again next time.")
                }
            }
            onConfirmClicked() {
                return i(this, void 0, void 0, function*() {
                    const {
                        confirmAttempts: t,
                        config: e
                    } = c.default.Instance;
                    t == e.MAX_CONFIRM_ERROR ? this.mainPage.startConfirmCoolDown() : (a.ConnectPanelMgr.Instance.ShowConnectPanel(), yield this.controller.sendConfirmCmd(), this.btnStateCtrl.setConfirm(!1))
                })
            }
            onEditEmailClicked() {
                this.btnStateCtrl.setEditEmailActive(!1), this.btnStateCtrl.setPasteEmail(!0), this.mainPage.editBoxCtrl.setEmailEditable(!0), this.mainPage.setCheck(d.EB_Step.SendCode, !1)
            }
            onBtnCountDownComplete(t) {
                t == d.EB_ButtonName.GetCode && (this.mainPage.emailFormatVaild && c.default.lastConfirmCDEnd && !c.default.confirmAttemptExceeded && !c.default.getCodeAttemptExceeded ? this.mainPage.btnStateCtrl.setGetCode(!0) : this.mainPage.btnStateCtrl.setGetCode(!1))
            }
            onConfirmCmdRecieved(t, e) {
                if (a.ConnectPanelMgr.Instance.DisableConnectPanel(), this.mainPage.richTextCtrl.showEnterCodeHint(!1), !t) switch (this.btnStateCtrl.setConfirm(!0), this.mainPage.editBoxCtrl.clearCode(), e) {
                    case -13:
                        c.default.storeConfirmCurrentTime(Date.now()), c.default.storeConfirmAttempts(++c.default.Instance.confirmAttempts);
                        const {
                            confirmAttempts: t,
                            config: o
                        } = c.default.Instance;
                        t == o.MAX_CONFIRM_ERROR ? this.mainPage.startConfirmCoolDown() : this.mainPage.richTextCtrl.showVerificationCodeError(!0, !0);
                        break;
                    case -19:
                        this.mainPage.richTextCtrl.showDuplicateEmail(!0);
                        break;
                    default:
                        s.EventSystem.Event(u.EB_Events.CloseAll).Notify(), l.PopupMsgMgr.Instance.ShowPopMsg(l.PopupPriority.Error, e.toString(), "Lobby", e.toString(), null)
                }
            }
            onVerificationCodeFormatValid() {
                this.mainPage.setCheck(d.EB_Step.Verify, !0), this.btnStateCtrl.setConfirm(!0)
            }
            onVerificationCodeFormatError() {
                this.mainPage.setCheck(d.EB_Step.Verify, !1), this.btnStateCtrl.setConfirm(!1)
            }
            onEmailExpired() {
                this.mainPage.editBoxCtrl.setVerificationCodeEditable(!1), this.mainPage.btnStateCtrl.setPasteCode(!1), this.mainPage.setCheck(d.EB_Step.SendCode, !1), c.default.getCodeAttemptExceeded && (console.log("[EB_Main] \u9a57\u8b49\u78bc\u904e\u671f & \u8f38\u5165\u8d85\u904e\u6b21\u6578\u6e05\u6389\u8cc7\u6599"), this.mainPage.editBoxCtrl.clearEmail(), this.mainPage.richTextCtrl.showGetCodeAttemptExceed(!0), this.mainPage.setCheck(d.EB_Step.EnterEmail, !1))
            }
            registerEvents() {
                r.default.Insert(d.EB_EventGroup.MainState, u.EB_Events.OnGetCodeClicked, this.onGetCodeClicked, this), r.default.Insert(d.EB_EventGroup.MainState, u.EB_Events.OnConfirmClicked, this.onConfirmClicked, this), r.default.Insert(d.EB_EventGroup.MainState, u.EB_Events.OnEmailFormatError, this.onEmailFormatError, this), r.default.Insert(d.EB_EventGroup.MainState, u.EB_Events.OnEmailFormatVaild, this.onEmailFormatVaild, this), r.default.Insert(d.EB_EventGroup.MainState, u.EB_Events.OnBtnCountDownComplete, this.onBtnCountDownComplete, this), r.default.Insert(d.EB_EventGroup.MainState, u.EB_Events.OnEditEmailClicked, this.onEditEmailClicked, this), r.default.Insert(d.EB_EventGroup.MainState, u.EB_Events.OnGetCodeCmdRecieved, this.onGetCodeCmdRecieved, this), r.default.Insert(d.EB_EventGroup.MainState, u.EB_Events.OnConfirmCmdRecieved, this.onConfirmCmdRecieved, this), r.default.Insert(d.EB_EventGroup.MainState, u.EB_Events.OnVerificationCodeFormatValid, this.onVerificationCodeFormatValid, this), r.default.Insert(d.EB_EventGroup.MainState, u.EB_Events.OnVerificationCodeFormatError, this.onVerificationCodeFormatError, this), r.default.Insert(d.EB_EventGroup.MainState, u.EB_Events.OnEmailExpired, this.onEmailExpired, this)
            }
            onEnterState() {
                this.registerEvents(), this.mainPage = this.controller.mainPage, this.btnStateCtrl = this.controller.btnStateCtrl, c.default.getCodeAttemptExceeded || this.mainPage.editBoxCtrl.checkEmailValid()
            }
            onQuitState() {
                r.default.Remove(d.EB_EventGroup.MainState)
            }
            update(t) {}
        };
        C = n([h], C), o.default = C, cc._RF.pop()
    }, {
        "../../../../../LobbyCommon/Connect/Script/ConnectPanelMgr": void 0,
        "../../../../../LobbyCommon/Helper/EventSystem": void 0,
        "../../../../../LobbyCommon/Helper/EventSystemObjectCtrl": void 0,
        "../../../../../LobbyCommon/PopupMessage/Script/PopupMsgMgr": void 0,
        "../EB_Data": "EB_Data",
        "../EB_Define": "EB_Define",
        "../EB_StateBase": "EB_StateBase",
        "../EB_Utils": "EB_Utils",
        "../Event/EB_Events": "EB_Events"
    }],
    EB_RewardPage: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "29cd3ae+iBGhY7L7Zx1LKpG", "EB_RewardPage");
        var n = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            },
            i = this && this.__awaiter || function(t, e, o, n) {
                return new(o || (o = Promise))(function(i, a) {
                    function s(t) {
                        try {
                            l(n.next(t))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function r(t) {
                        try {
                            l(n.throw(t))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(s, r)
                    }
                    l((n = n.apply(t, e || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const a = t("../../../../LobbyCommon/FakeScoreBox/Script/FakeScoreBoxCtrl"),
            s = t("../../../../LobbyCommon/Helper/EventSystem"),
            r = t("./EB_Data"),
            l = t("./Event/EB_Events"),
            {
                ccclass: c,
                property: d
            } = cc._decorator;
        let E = class extends cc.Component {
            constructor() {
                super(...arguments), this.root = null, this.rewardlabel = null, this.reward = null, this.fakeScoreBoxCtrl = null
            }
            show() {
                const {
                    verifyReward: t
                } = r.default.Instance;
                try {
                    this.rewardlabel.string = t.Amount.toString()
                } catch (e) {
                    console.error("EB_RewardPage_show", e), s.EventSystem.Event(l.EB_Events.OnCloseMainClicked).Notify()
                }
                this.root.active = !0
            }
            onClickOK() {
                return i(this, void 0, void 0, function*() {
                    try {
                        const {
                            asset: e
                        } = r.default.Instance, {
                            entries: o,
                            winnings: n
                        } = e;
                        this.root.active = !1;
                        let i = s.EventSystem.Function(s.DownBar.GetPlayerEntries)(),
                            c = s.EventSystem.Function(s.DownBar.GetPlayerWinnings)();
                        this.fakeScoreBoxCtrl.show(a.ShowType.ENTRIES, i), yield this.fakeScoreBoxCtrl.FlyThenCountUpMoney(o, .5, 1, this.reward.convertToWorldSpaceAR(cc.Vec3.ZERO)), s.EventSystem.Event(s.DownBar.SetPlayerInfo).Notify(o, c), yield SS.Common.WaitForSeconds(1.5), s.EventSystem.Event(l.EB_Events.OnCloseMainClicked).Notify()
                    } catch (t) {
                        console.error("EB_RewardPage_onClickOK", t), s.EventSystem.Event(l.EB_Events.OnCloseMainClicked).Notify()
                    }
                })
            }
        };
        n([d(cc.Node)], E.prototype, "root", void 0), n([d(cc.Label)], E.prototype, "rewardlabel", void 0), n([d(cc.Node)], E.prototype, "reward", void 0), n([d(a.FakeScoreBoxCtrl)], E.prototype, "fakeScoreBoxCtrl", void 0), E = n([c], E), o.default = E, cc._RF.pop()
    }, {
        "../../../../LobbyCommon/FakeScoreBox/Script/FakeScoreBoxCtrl": void 0,
        "../../../../LobbyCommon/Helper/EventSystem": void 0,
        "./EB_Data": "EB_Data",
        "./Event/EB_Events": "EB_Events"
    }],
    EB_RichTextCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "630d8xwkQJKOZbxtX1ekoGB", "EB_RichTextCtrl");
        var n = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            },
            i = this && this.__awaiter || function(t, e, o, n) {
                return new(o || (o = Promise))(function(i, a) {
                    function s(t) {
                        try {
                            l(n.next(t))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function r(t) {
                        try {
                            l(n.throw(t))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(s, r)
                    }
                    l((n = n.apply(t, e || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const a = t("../../../../../LobbyCommon/Helper/EventSystem"),
            s = t("../EB_Data"),
            r = t("../Event/EB_Events"),
            {
                ccclass: l,
                property: c
            } = cc._decorator,
            d = (t, e = "") => {
                let {
                    text: o,
                    color: n
                } = t;
                return `<color=${n}> ${o=o.includes("{0}")?o.replace("{0}",e):`
                $ {
                    o
                }
                $ {
                    e
                }
                `} < /c>`
            };
        let E = class extends cc.Component {
            constructor() {
                super(...arguments), this.email = null, this.code = null
            }
            clearEmailHint() {
                this.email.string = ""
            }
            clearCodeHint() {
                this.code.string = ""
            }
            clearAll() {
                this.clearEmailHint(), this.clearCodeHint()
            }
            showEmailFormatError(t) {
                const {
                    text: e
                } = s.default.Instance;
                this.email.string = t ? d(e.EMAIL_INVALID) : ""
            }
            showVerificationCodeError(t, e) {
                return i(this, void 0, void 0, function*() {
                    const {
                        text: o
                    } = s.default.Instance;
                    this.unschedule(this.emailLifeTimeCountDown), this.code.string = t ? d(o.VERIFICATION_CODE_INVALID) : "", e && cc.tween(this.node).delay(3).call(() => {
                        this.showEmailLifeTimeStr(), this.schedule(this.emailLifeTimeCountDown, 1, cc.macro.REPEAT_FOREVER)
                    }).start()
                })
            }
            showGetCodeAttemptExceed(t) {
                const {
                    text: e
                } = s.default.Instance;
                this.email.string = t ? d(e.ATTEMP_EXCEEDED) : ""
            }
            showVerificationCodeSent(t) {
                const {
                    text: e,
                    config: o,
                    getCodeAttempts: n
                } = s.default.Instance;
                this.email.string = t ? d(e.CODE_SENT, `(${n}/${o.MAX_GET_CODE_ATTEMPS})`) : ""
            }
            showDuplicateEmail(t) {
                const {
                    text: e,
                    config: o,
                    getCodeAttempts: n
                } = s.default.Instance;
                this.email.string = t ? d(e.USED_EMAIL, 0 != n ? `(${n}/${o.MAX_GET_CODE_ATTEMPS})` : "") : ""
            }
            showEnterCodeHint(t) {
                t ? (this.showEmailLifeTimeStr(), this.schedule(this.emailLifeTimeCountDown, 1, cc.macro.REPEAT_FOREVER)) : this.unschedule(this.emailLifeTimeCountDown), t ? this.showEmailLifeTimeStr() : this.code.string = ""
            }
            emailLifeTimeCountDown() {
                s.default.lastCodeExpired ? (this.unschedule(this.emailLifeTimeCountDown), this.showCodeExpired()) : this.showEmailLifeTimeStr()
            }
            showConfirmCDHint(t) {
                t ? (this.showConfirmTimeStr(), this.schedule(this.confirmTimeCountDown, 1, cc.macro.REPEAT_FOREVER)) : this.unschedule(this.confirmTimeCountDown), t ? this.showConfirmTimeStr() : this.code.string = ""
            }
            confirmTimeCountDown() {
                s.default.lastConfirmCDEnd ? a.EventSystem.Event(r.EB_Events.OnConfirmCDEnd).Notify() : (this.unschedule(this.emailLifeTimeCountDown), this.showConfirmTimeStr())
            }
            showCodeExpired() {
                const {
                    text: t
                } = s.default.Instance;
                this.code.string = d(t.VERIFICATION_CODE_EXPIRED), a.EventSystem.Event(r.EB_Events.OnEmailExpired).Notify()
            }
            showEmailLifeTimeStr() {
                if (s.default.lastCodeExpired) return;
                const {
                    text: t
                } = s.default.Instance, e = `${s.default.lastCodeInterval.toString()}s`;
                this.code.string = d(t.EMAIL_COUNT_DOWN, e)
            }
            showConfirmTimeStr() {
                if (s.default.lastCodeExpired) return;
                const {
                    text: t
                } = s.default.Instance, e = `${s.default.lastConfirmInterval.toString()}s`;
                this.code.string = d(t.CONFIRM_COUNTDOWN, e)
            }
        };
        n([c(cc.RichText)], E.prototype, "email", void 0), n([c(cc.RichText)], E.prototype, "code", void 0), E = n([l], E), o.default = E, cc._RF.pop()
    }, {
        "../../../../../LobbyCommon/Helper/EventSystem": void 0,
        "../EB_Data": "EB_Data",
        "../Event/EB_Events": "EB_Events"
    }],
    EB_StateBase: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "83ce0bfMHxJTo0y1yB+8lKL", "EB_StateBase"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.default = class extends cc.Component {
            constructor() {
                super(...arguments), this._FSM = null, this.controller = null, this.isActive = !1
            }
            onLoadInit(t, e) {
                this._FSM = t, this.controller = e
            }
        }, cc._RF.pop()
    }, {}],
    EB_TypeItemBtn: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "297f1WNPhlNJL5Uw/PtnU1x", "EB_TypeItemBtn");
        var n = this && this.__decorate || function(t, e, o, n) {
            var i, a = arguments.length,
                s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
            else
                for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
            return a > 3 && s && Object.defineProperty(e, o, s), s
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const i = t("../../../../../LobbyCommon/Helper/EventSystem"),
            a = t("../../../../../LobbyCommon/Net/ClickLog"),
            s = t("../../../../../LobbyCommon/Net/ClickLogEnum"),
            {
                ccclass: r,
                property: l
            } = cc._decorator;
        let c = class extends cc.Component {
            constructor() {
                super(...arguments), this.prizelabel = null
            }
            setPrizeNum(t) {
                this.prizelabel.string = `$${t.toString()}`
            }
            onTypeItemBtnClicked() {
                a.ClickLog.SendLog(s.LogName.PlayerAction, s.LogType_PlayerAction.EmailBonus, s.LogEvent_EmailBonus.Icon), i.EventSystem.Event(i.EmailBonusEvent.OnBtnClicked).Notify()
            }
        };
        n([l(cc.Label)], c.prototype, "prizelabel", void 0), c = n([r], c), o.default = c, cc._RF.pop()
    }, {
        "../../../../../LobbyCommon/Helper/EventSystem": void 0,
        "../../../../../LobbyCommon/Net/ClickLog": void 0,
        "../../../../../LobbyCommon/Net/ClickLogEnum": void 0
    }],
    EB_TypeItemCtrl: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "5ff5bMBK89HILECdFw8IqkX", "EB_TypeItemCtrl");
        var n = this && this.__decorate || function(t, e, o, n) {
            var i, a = arguments.length,
                s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
            else
                for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
            return a > 3 && s && Object.defineProperty(e, o, s), s
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const i = t("../../../../../LobbyCommon/Helper/EventSystem"),
            a = t("../Event/EB_Events"),
            s = t("./EB_TypeItemBtn"),
            {
                ccclass: r,
                property: l
            } = cc._decorator;
        let c = class extends cc.Component {
            constructor() {
                super(...arguments), this._typeItemNode = null, this.typeItemPrefab = null
            }
            get typeItemNode() {
                return this._typeItemNode
            }
            generateBtn(t) {
                console.log("[EmailBonus] generateBtn"), this._typeItemNode = cc.instantiate(this.typeItemPrefab), this._typeItemNode.getComponent(s.default).setPrizeNum(t);
                const e = i.EventSystem.Function(i.GameTypeMgrEvent.GetContainer)();
                i.EventSystem.RegisterFunction(a.EB_Functions.HideTypeItem, this.hide.bind(this)), this._typeItemNode.parent = e
            }
            hide() {
                this._typeItemNode.active = !1
            }
            show() {
                this._typeItemNode.active = !0
            }
            onDestroy() {
                i.EventSystem.UnregisterFunction(a.EB_Functions.HideTypeItem)
            }
        };
        n([l(cc.Prefab)], c.prototype, "typeItemPrefab", void 0), c = n([r], c), o.default = c, cc._RF.pop()
    }, {
        "../../../../../LobbyCommon/Helper/EventSystem": void 0,
        "../Event/EB_Events": "EB_Events",
        "./EB_TypeItemBtn": "EB_TypeItemBtn"
    }],
    EB_Utils: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "f134crMThdJqqCDAONAS2XB", "EB_Utils"), Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const n = t("../../../../LobbyCommon/Component/CookieCtrl");
        o.default = class {
            static isValidEmail(t) {
                return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(t)
            }
            static isAlphaNumeric(t) {
                return /^[a-zA-Z0-9]+$/.test(t)
            }
            static removeBlank(t) {
                return t.replace(/\s/g, "")
            }
            static storeToLocalStorage(t, e) {
                n.CookieCtrl.SetCookie(`${SS.Common.GameEnvironment.UserID}_${t}`, e)
            }
            static getLocalStorageData(t) {
                return n.CookieCtrl.GetCookie(`${SS.Common.GameEnvironment.UserID}_${t}`)
            }
            static removeFromLocallStorage(t) {
                console.log("[EB_Utils]removeFromLocallStorage", `${SS.Common.GameEnvironment.UserID}_${t}`);
                let e = `${SS.Common.GameEnvironment.UserID}_${t}`;
                JSUtility.IsSupportLocalStorage() ? localStorage.removeItem(e) : JSUtility.IsSupportCookie() && (document.cookie = e + "=; expires=100")
            }
            static getTextFromClipboard() {
                return new Promise(t => {
                    navigator.clipboard.readText().then(e => {
                        console.log("[EB_Utils]getTextFromClipboard", e), t(this.removeBlank(e))
                    }).catch(e => {
                        console.warn("[EB_Utils]getTextFromClipboard_failed", e), t("")
                    })
                })
            }
            static closeSuggestion() {
                try {
                    const e = document.getElementsByClassName("cocosEditBox");
                    e.EditBoxId_3.autocomplete = "off", e.EditBoxId_4.autocomplete = "off"
                } catch (t) {
                    console.warn("[EB_Utils]editbox not found")
                }
            }
            static WithInDuration(t, e) {
                return Math.floor((Date.now() - t) / 1e3) < e
            }
        }, cc._RF.pop()
    }, {
        "../../../../LobbyCommon/Component/CookieCtrl": void 0
    }],
    EmailBonus: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "83307nwtuBJYZ2dPlG4iFob", "EmailBonus");
        var n = this && this.__decorate || function(t, e, o, n) {
                var i, a = arguments.length,
                    s = a < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (a < 3 ? i(s) : a > 3 ? i(e, o, s) : i(e, o)) || s);
                return a > 3 && s && Object.defineProperty(e, o, s), s
            },
            i = this && this.__awaiter || function(t, e, o, n) {
                return new(o || (o = Promise))(function(i, a) {
                    function s(t) {
                        try {
                            l(n.next(t))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function r(t) {
                        try {
                            l(n.throw(t))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(s, r)
                    }
                    l((n = n.apply(t, e || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const a = t("../../../../LobbyCommon/Helper/Download"),
            s = t("../../../../LobbyCommon/Helper/EventSystem"),
            r = t("../../../../LobbyCommon/Helper/EventSystemObjectCtrl"),
            l = t("../../../../LobbyCommon/ModuleBase"),
            c = t("./Button/EB_ButtonStateCtrl"),
            d = t("../EB_Command"),
            E = t("./EB_Data"),
            m = t("./EB_Define"),
            u = t("./EB_FSM"),
            h = t("./EB_InfoPage"),
            C = t("./EB_StateBase"),
            f = t("./Event/EB_Events"),
            _ = t("./Main/EB_DefaultSettings"),
            B = t("./Main/EB_MainPage"),
            p = t("../../../../LobbyCommon/PopUpMgr/Scripts/PriorityCustomEvent"),
            v = t("../../../../LobbyCommon/Net/ClickLog"),
            g = t("../../../../LobbyCommon/Net/ClickLogEnum"),
            {
                ccclass: S,
                property: y
            } = cc._decorator;
        let b = class extends l.default {
            constructor() {
                super(...arguments), this._FSM = null, this.root = null, this.states = [], this.mainPage = null, this.infopage = null, this.btnStateCtrl = null, this.packetCode = -1
            }
            sendGetCodeCmd() {
                return i(this, void 0, void 0, function*() {
                    const {
                        email: t
                    } = E.default.Instance;
                    try {
                        yield d.default.SendGetVerificationCode(t), s.EventSystem.Event(f.EB_Events.OnGetCodeCmdRecieved).Notify(!0)
                    } catch (e) {
                        console.error("EmailBonus_sendGetCodeCmd", e), s.EventSystem.Event(f.EB_Events.OnGetCodeCmdRecieved).Notify(!1, e)
                    }
                })
            }
            sendConfirmCmd() {
                return i(this, void 0, void 0, function*() {
                    const {
                        email: t,
                        code: e
                    } = E.default.Instance;
                    try {
                        const n = yield d.default.Verify(t, e, this.mainPage.toggle.isChecked);
                        console.log("EB_sendConfirm", n), 0 == n.Code ? (s.EventSystem.Event(f.EB_Events.OnConfirmCmdRecieved).Notify(!0), E.default.Instance.asset = n.Asset, E.default.Instance.verifyReward = n.Reward[0], this._FSM.setState(m.EB_State.FINAL)) : s.EventSystem.Event(f.EB_Events.OnConfirmCmdRecieved).Notify(!1, n.Code)
                    } catch (o) {
                        s.EventSystem.Event(f.EB_Events.OnConfirmCmdRecieved).Notify(!1, o)
                    }
                })
            }
            onTypeItemBtnClicked() {
                s.EventSystem.Event(s.SystemMsg.Open).Notify(this.root, cc.Size.ZERO, cc.Size.ZERO, 0, null, !0), this.root.active = !0, this.mainPage.active = !0, this.mainPage.OriDontShowState = this.mainPage.dontShowToggle.isChecked
            }
            registerEvents() {
                r.default.Insert(m.EB_EventGroup.EmailBonus, f.EB_Events.OnInitComplete, this.onInitComplete, this), r.default.Insert(m.EB_EventGroup.EmailBonus, s.EmailBonusEvent.OnBtnClicked, this.onTypeItemBtnClicked, this), r.default.Insert(m.EB_EventGroup.EmailBonus, f.EB_Events.CloseAll, this.CloseAll, this)
            }
            fetchSettingFile() {
                return i(this, void 0, void 0, function*() {
                    const t = window.gd_nowLOGO,
                        e = yield a.Download.JSON(`${t}/EmailBonus`);
                    0 == Object.keys(e).length ? (console.log("[EmailBonus] fetchMsg failed, use default.", e), E.default.Instance.text = _.defaultText, E.default.Instance.config = _.defaultConfig, E.default.Instance.info = _.defaultInfo) : (console.log("[EmailBonus] fetchMsg success.", e), E.default.Instance.text = e.text, E.default.Instance.config = e.config, E.default.Instance.info = e.info)
                })
            }
            _onLoad() {
                return i(this, void 0, void 0, function*() {
                    console.log("[EmailBonus] onload"), this._FSM = new u.default;
                    for (let t = 0; t < this.states.length; t++) {
                        const e = this.states[t].getComponent(C.default);
                        this._FSM.addState(t, e, this)
                    }
                    E.default.Instance.root = this.root
                })
            }
            _onDestroy() {
                return i(this, void 0, void 0, function*() {
                    s.EventSystem.UnregisterFunction(s.EmailBonusEvent.CheckEventOpen), r.default.Remove(m.EB_EventGroup.EmailBonus), this.mainPage = null, this.infopage = null, this.btnStateCtrl = null, this._FSM.release(), this._FSM = null
                })
            }
            _downloadResources() {
                return i(this, void 0, void 0, function*() {
                    console.log("[EmailBonus] _downloadResources"), s.EventSystem.Event(s.RegistPopupBanner).Notify("EmailBonusPopup", !0, () => {
                        0 == this.packetCode && (v.ClickLog.SendLog(g.LogName.PlayerAction, g.LogType_PlayerAction.EmailBonus, g.LogEvent_EmailBonus.Popup), this.onTypeItemBtnClicked())
                    }), s.EventSystem.Event(s.RegistPopupBanner).Notify("EmailBonusBanner", !1, () => {
                        0 == this.packetCode && (v.ClickLog.SendLog(g.LogName.PlayerAction, g.LogType_PlayerAction.EmailBonus, g.LogEvent_EmailBonus.Banner), this.onTypeItemBtnClicked())
                    }), s.EventSystem.Event(s.RegistPopupEvent).Notify(p.PopEventPriority.EmailBonus, () => {
                        0 == this.packetCode && 0 == this.mainPage.dontShowToggle.isChecked && E.default.getIsTodayFirstShowTime() ? (this.mainPage.isShowByPopup = !0, E.default.storeTodayFirstShowTime(Date.now()), this.onTypeItemBtnClicked()) : s.EventSystem.Event(s.CheckNextPopup).Notify()
                    }, null)
                })
            }
            _waitPacket() {
                return i(this, void 0, void 0, function*() {
                    console.log("[EmailBonus]_waitPacket"), s.EventSystem.RegisterFunction(s.EmailBonusEvent.CheckEventOpen, () => (console.log("[EmailBonus]packetCode = " + this.packetCode), 0 == this.packetCode || -7 == this.packetCode));
                    try {
                        const e = yield Promise.all([d.default.GetInfo(), this.fetchSettingFile()]);
                        console.log("EB_Data:", e);
                        let {
                            Code: o,
                            DataList: n,
                            CountList: i
                        } = e[0];
                        this.packetCode = o;
                        let a = i[0].MAIL.Count;
                        E.default.Instance.reward = n[0].MAIL.Reward, E.default.storeGetCodeAttempts(a), this.Init()
                    } catch (t) {
                        this.packetCode = t, console.error("[EmailBonus]_waitPacket", t)
                    }
                })
            }
            Init() {
                this.registerEvents(), this._FSM.setState(m.EB_State.INIT)
            }
            onInitComplete() {
                this._FSM.setState(m.EB_State.MAIN)
            }
            CloseAll() {
                s.EventSystem.Function(f.EB_Functions.HideTypeItem)(), s.EventSystem.Event(f.EB_Events.OnCloseMainClicked).Notify()
            }
        };
        n([y(cc.Node)], b.prototype, "root", void 0), n([y([cc.Node])], b.prototype, "states", void 0), n([y(B.default)], b.prototype, "mainPage", void 0), n([y(h.default)], b.prototype, "infopage", void 0), n([y(c.default)], b.prototype, "btnStateCtrl", void 0), b = n([S], b), o.default = b, cc._RF.pop()
    }, {
        "../../../../LobbyCommon/Helper/Download": void 0,
        "../../../../LobbyCommon/Helper/EventSystem": void 0,
        "../../../../LobbyCommon/Helper/EventSystemObjectCtrl": void 0,
        "../../../../LobbyCommon/ModuleBase": void 0,
        "../../../../LobbyCommon/Net/ClickLog": void 0,
        "../../../../LobbyCommon/Net/ClickLogEnum": void 0,
        "../../../../LobbyCommon/PopUpMgr/Scripts/PriorityCustomEvent": void 0,
        "../EB_Command": "EB_Command",
        "./Button/EB_ButtonStateCtrl": "EB_ButtonStateCtrl",
        "./EB_Data": "EB_Data",
        "./EB_Define": "EB_Define",
        "./EB_FSM": "EB_FSM",
        "./EB_InfoPage": "EB_InfoPage",
        "./EB_StateBase": "EB_StateBase",
        "./Event/EB_Events": "EB_Events",
        "./Main/EB_DefaultSettings": "EB_DefaultSettings",
        "./Main/EB_MainPage": "EB_MainPage"
    }]
}, {}, ["EB_Command", "EB_ButtonCtrl", "EB_ButtonEventMgr", "EB_ButtonStateCtrl", "EB_ButtonStatus", "EB_Data", "EB_Define", "EB_FSM", "EB_InfoPage", "EB_RewardPage", "EB_StateBase", "EB_Utils", "EB_CodeEditBox", "EB_EditBox", "EB_EditBoxCtrl", "EB_EmailEditBox", "EmailBonus", "EB_Events", "EB_DefaultSettings", "EB_MainPage", "EB_RichTextCtrl", "EB_Final", "EB_Init", "EB_Main", "EB_TypeItemBtn", "EB_TypeItemCtrl"]);