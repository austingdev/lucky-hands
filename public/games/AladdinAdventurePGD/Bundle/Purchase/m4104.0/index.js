window.__require = function t(e, n, l) {
    function s(r, a) {
        if (!n[r]) {
            if (!e[r]) {
                var i = r.split("/");
                if (i = i[i.length - 1], !e[i]) {
                    var c = "function" == typeof __require && __require;
                    if (!a && c) return c(i, !0);
                    if (o) return o(i, !0);
                    throw new Error("Cannot find module '" + r + "'")
                }
                r = i
            }
            var h = n[r] = {
                exports: {}
            };
            e[r][0].call(h.exports, function(t) {
                return s(e[r][1][t] || t)
            }, h, h.exports, t, e, n, l)
        }
        return n[r].exports
    }
    for (var o = "function" == typeof __require && __require, r = 0; r < l.length; r++) s(l[r]);
    return s
}({
    PurchaseMgr: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "29deaiMA2JFfZRArsx7QPzY", "PurchaseMgr");
        var l = this && this.__decorate || function(t, e, n, l) {
                var s, o = arguments.length,
                    r = o < 3 ? e : null === l ? l = Object.getOwnPropertyDescriptor(e, n) : l;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, n, l);
                else
                    for (var a = t.length - 1; a >= 0; a--)(s = t[a]) && (r = (o < 3 ? s(r) : o > 3 ? s(e, n, r) : s(e, n)) || r);
                return o > 3 && r && Object.defineProperty(e, n, r), r
            },
            s = this && this.__awaiter || function(t, e, n, l) {
                return new(n || (n = Promise))(function(s, o) {
                    function r(t) {
                        try {
                            i(l.next(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function a(t) {
                        try {
                            i(l.throw(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function i(t) {
                        var e;
                        t.done ? s(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(r, a)
                    }
                    i((l = l.apply(t, e || [])).next())
                })
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.PurchaseMgr = void 0;
        const o = t("../../../Connect/Script/ConnectPanelMgr"),
            r = t("../../../Helper/EventSystem"),
            a = t("../../../ModuleBase"),
            i = t("../../../Net/LobbyClient"),
            c = t("../../../PopupMessage/Script/PopupMsgMgr"),
            {
                ccclass: h,
                property: u
            } = cc._decorator;
        let b = class extends a.default {
            constructor() {
                super(...arguments), this.m_btn1Dollars = null, this.m_btn5Dollars = null, this.m_btn10Dollars = null, this.m_btn20Dollars = null, this.m_btn100Dollars = null, this.m_btnAllDollars = null, this.m_btnClose = null, this.m_PanelRoot = null, this.m_titleLabel = null, this.isPlayExitAudio = !0
            }
            _onLoad() {
                return s(this, void 0, void 0, function*() {
                    r.EventSystem.Event(r.PurchaseEvent.ShowPanel).Insert(this.ShowPanel, this), r.EventSystem.Event(r.PurchaseEvent.DisablePanel).Insert(this.DisablePanel, this), r.EventSystem.Event(r.LobbyState.RecvAllPacket).Insert(this.OnLobbyRecvAllPacket, this)
                })
            }
            _start() {
                return s(this, void 0, void 0, function*() {
                    SS.Common.GameEnvironment.IsShowDonate ? this.m_titleLabel.string = "Donate Amount" : this.m_titleLabel.string = "Purchase Amount"
                })
            }
            _onDestroy() {
                return s(this, void 0, void 0, function*() {
                    console.error("PurchaseMgr _onDestroy"), r.EventSystem.Event(r.PurchaseEvent.ShowPanel).Remove(this.ShowPanel, this), r.EventSystem.Event(r.PurchaseEvent.DisablePanel).Remove(this.DisablePanel, this), r.EventSystem.Event(r.LobbyState.RecvAllPacket).Remove(this.OnLobbyRecvAllPacket, this)
                })
            }
            OnLobbyRecvAllPacket() {
                this._start()
            }
            ShowPanel(t) {
                this.EnableBtn(t), !0 !== this.m_PanelRoot.active && r.EventSystem.Event(r.SystemMsg.Open).Notify(this.m_PanelRoot, cc.Size.ZERO, cc.Size.ZERO, 150, this.DisablePanel.bind(this)), this.isPlayExitAudio = !0, this.m_PanelRoot.active = !0
            }
            DisablePanel() {
                this.m_PanelRoot.active && r.EventSystem.Event(r.SystemMsg.Close).Notify(), this.m_PanelRoot.active = !1, this.isPlayExitAudio && r.EventSystem.Event(r.PurchaseEvent.OnPurchasePanelDisable).Length > 0 && r.EventSystem.Event(r.PurchaseEvent.OnPurchasePanelDisable).Notify()
            }
            DisableAllBtn() {
                this.m_btn1Dollars.enabled = this.m_btn1Dollars.interactable = !1, this.m_btn5Dollars.enabled = this.m_btn5Dollars.interactable = !1, this.m_btn10Dollars.enabled = this.m_btn10Dollars.interactable = !1, this.m_btn20Dollars.enabled = this.m_btn20Dollars.interactable = !1, this.m_btnAllDollars.enabled = this.m_btnAllDollars.interactable = !1, this.m_btn100Dollars.enabled = this.m_btn100Dollars.interactable = !1
            }
            EnableBtn(t) {
                this.m_btn1Dollars.enabled = this.m_btn1Dollars.interactable = t >= 100, this.m_btn5Dollars.enabled = this.m_btn5Dollars.interactable = t >= 500, this.m_btn10Dollars.enabled = this.m_btn10Dollars.interactable = t >= 1e3, this.m_btn20Dollars.enabled = this.m_btn20Dollars.interactable = t >= 2e3, this.m_btn100Dollars.enabled = this.m_btn100Dollars.interactable = t >= 1e4, this.m_btnAllDollars.enabled = this.m_btnAllDollars.interactable = t >= 100
            }
            OnClick1Dollars() {
                this.OnClickPruchase("$1")
            }
            OnClick5Dollars() {
                this.OnClickPruchase("$5")
            }
            OnClick10Dollars() {
                this.OnClickPruchase("$10")
            }
            OnClick20Dollars() {
                this.OnClickPruchase("$20")
            }
            OnClick100Dollars() {
                this.OnClickPruchase("$100")
            }
            OnClickALLDollars() {
                this.OnClickPruchase("all")
            }
            OnClickPruchase(t) {
                this.DisableAllBtn(), r.EventSystem.Event(r.PurchaseEvent.OnClickPurchaseBtn).Length > 0 && r.EventSystem.Event(r.PurchaseEvent.OnClickPurchaseBtn).Notify(), o.ConnectPanelMgr.Instance.ShowConnectPanel(), this.SendPurchaseCmd(t, (t, e) => {
                    r.EventSystem.Event(r.PurchaseEvent.OnPurchaseSuccess).Notify(t, e), this.EnableBtn(t), o.ConnectPanelMgr.Instance.DisableConnectPanel()
                })
            }
            SendPurchaseCmd(t, e) {
                i.LobbyClient.Instance.GetUserClient.SendPurchase(t, (t, n) => {
                    if (t === ArkSDK.HttpConnect.HttpResult.OK) null == n || 0 !== n.cmd_data.result && 1 !== n.cmd_data.result ? (console.warn("SendPurchaseCmd error !!"), o.ConnectPanelMgr.Instance.DisableConnectPanel(), c.PopupMsgMgr.Instance.ShowPopMsg(c.PopupPriority.Critical, "S196", null, "purchase error : " + JSON.stringify(n), null)) : (e(n.cmd_data.winnings, n.cmd_data.entries), this.isPlayExitAudio = !1, this.DisablePanel());
                    else {
                        console.warn("SendPurchaseCmd is Error !!!!");
                        let e = "";
                        e = t == ArkSDK.HttpResult.Abort ? "S295" : t == ArkSDK.HttpResult.Condition ? "S190" : t == ArkSDK.HttpResult.NotReset ? "S191" : t == ArkSDK.HttpResult.Status ? "S192" : t == ArkSDK.HttpResult.Error ? "S193" : t == ArkSDK.HttpResult.Timeout ? "S194" : "S195", o.ConnectPanelMgr.Instance.DisableConnectPanel(), c.PopupMsgMgr.Instance.ShowPopMsg(c.PopupPriority.Critical, e, null, "purchase ark error", null)
                    }
                })
            }
        };
        l([u(cc.Button)], b.prototype, "m_btn1Dollars", void 0), l([u(cc.Button)], b.prototype, "m_btn5Dollars", void 0), l([u(cc.Button)], b.prototype, "m_btn10Dollars", void 0), l([u(cc.Button)], b.prototype, "m_btn20Dollars", void 0), l([u(cc.Button)], b.prototype, "m_btn100Dollars", void 0), l([u(cc.Button)], b.prototype, "m_btnAllDollars", void 0), l([u(cc.Button)], b.prototype, "m_btnClose", void 0), l([u(cc.Node)], b.prototype, "m_PanelRoot", void 0), l([u(cc.Label)], b.prototype, "m_titleLabel", void 0), b = l([h], b), n.PurchaseMgr = b, cc._RF.pop()
    }, {
        "../../../Connect/Script/ConnectPanelMgr": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../ModuleBase": void 0,
        "../../../Net/LobbyClient": void 0,
        "../../../PopupMessage/Script/PopupMsgMgr": void 0
    }]
}, {}, ["PurchaseMgr"]);