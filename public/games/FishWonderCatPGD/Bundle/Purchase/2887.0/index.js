window.__require = function t(e, n, l) {
    function o(s, a) {
        if (!n[s]) {
            if (!e[s]) {
                var i = s.split("/");
                if (i = i[i.length - 1], !e[i]) {
                    var c = "function" == typeof __require && __require;
                    if (!a && c) return c(i, !0);
                    if (r) return r(i, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                s = i
            }
            var u = n[s] = {
                exports: {}
            };
            e[s][0].call(u.exports, function(t) {
                return o(e[s][1][t] || t)
            }, u, u.exports, t, e, n, l)
        }
        return n[s].exports
    }
    for (var r = "function" == typeof __require && __require, s = 0; s < l.length; s++) o(l[s]);
    return o
}({
    PurchaseMgr: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "29deaiMA2JFfZRArsx7QPzY", "PurchaseMgr");
        var l, o = this && this.__extends || (l = function(t, e) {
                return (l = Object.setPrototypeOf || {
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
                l(t, e), t.prototype = null === e ? Object.create(e) : (n.prototype = e.prototype, new n)
            }),
            r = this && this.__decorate || function(t, e, n, l) {
                var o, r = arguments.length,
                    s = r < 3 ? e : null === l ? l = Object.getOwnPropertyDescriptor(e, n) : l;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, l);
                else
                    for (var a = t.length - 1; a >= 0; a--)(o = t[a]) && (s = (r < 3 ? o(s) : r > 3 ? o(e, n, s) : o(e, n)) || s);
                return r > 3 && s && Object.defineProperty(e, n, s), s
            },
            s = this && this.__awaiter || function(t, e, n, l) {
                return new(n || (n = Promise))(function(o, r) {
                    function s(t) {
                        try {
                            i(l.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function a(t) {
                        try {
                            i(l.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function i(t) {
                        var e;
                        t.done ? o(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(s, a)
                    }
                    i((l = l.apply(t, e || [])).next())
                })
            },
            a = this && this.__generator || function(t, e) {
                var n, l, o, r, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function a(t) {
                    return function(e) {
                        return i([t, e])
                    }
                }

                function i(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, l && (o = 2 & r[0] ? l.return : r[0] ? l.throw || ((o = l.return) && o.call(l), 0) : l.next) && !(o = o.call(l, r[1])).done) return o;
                        switch (l = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                            case 0:
                            case 1:
                                o = r;
                                break;
                            case 4:
                                return s.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, l = r[1], r = [0];
                                continue;
                            case 7:
                                r = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                    s.label = r[1];
                                    break
                                }
                                if (6 === r[0] && s.label < o[1]) {
                                    s.label = o[1], o = r;
                                    break
                                }
                                if (o && s.label < o[2]) {
                                    s.label = o[2], s.ops.push(r);
                                    break
                                }
                                o[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        r = e.call(t, s)
                    } catch (a) {
                        r = [6, a], l = 0
                    } finally {
                        n = o = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.PurchaseMgr = void 0;
        var i = t("../../../Net/LobbyClient"),
            c = t("../../../Connect/Script/ConnectPanelMgr"),
            u = t("../../../PopupMessage/Script/PopupMsgMgr"),
            h = t("../../../ModuleBase"),
            b = t("../../../Helper/EventSystem"),
            m = cc._decorator,
            p = m.ccclass,
            v = m.property,
            P = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.m_btn1Dollars = null, e.m_btn5Dollars = null, e.m_btn10Dollars = null, e.m_btn20Dollars = null, e.m_btn100Dollars = null, e.m_btnAllDollars = null, e.m_btnClose = null, e.m_PanelRoot = null, e.m_titleLabel = null, e.m_spriteTitle = null, e.m_spriteframeTitleDonate = null, e.m_spriteframeTitlePurchase = null, e.isPlayExitAudio = !0, e
                }
                return o(e, t), e.prototype._onLoad = function() {
                    return s(this, void 0, Promise, function() {
                        return a(this, function() {
                            return cc.error("PurchaseMgr._onLoad"), b.EventSystem.Event(b.PurchaseEvent.ShowPanel).Insert(this.ShowPanel, this), b.EventSystem.Event(b.PurchaseEvent.DisablePanel).Insert(this.DisablePanel, this), b.EventSystem.Event(b.LobbyState.RecvAllPacket).Insert(this.OnLobbyRecvAllPacket, this), [2]
                        })
                    })
                }, e.prototype._onDestroy = function() {
                    return s(this, void 0, void 0, function() {
                        return a(this, function() {
                            return b.EventSystem.Event(b.PurchaseEvent.ShowPanel).Remove(this.ShowPanel, this), b.EventSystem.Event(b.PurchaseEvent.DisablePanel).Remove(this.DisablePanel, this), b.EventSystem.Event(b.LobbyState.RecvAllPacket).Remove(this.OnLobbyRecvAllPacket, this), [2]
                        })
                    })
                }, e.prototype._start = function() {
                    return s(this, void 0, Promise, function() {
                        return a(this, function() {
                            return null != this.m_titleLabel && (SS.Common.GameEnvironment.IsShowDonate ? this.m_titleLabel.string = "Donate Amount" : this.m_titleLabel.string = "Purchase Amount"), null != this.m_spriteTitle && (SS.Common.GameEnvironment.IsShowDonate ? this.m_spriteTitle.spriteFrame = this.m_spriteframeTitleDonate : this.m_spriteTitle.spriteFrame = this.m_spriteframeTitlePurchase), [2]
                        })
                    })
                }, e.prototype.OnLobbyRecvAllPacket = function() {
                    this._start()
                }, e.prototype.ShowPanel = function(t) {
                    this.EnableBtn(t), !0 !== this.m_PanelRoot.active && b.EventSystem.Event(b.SystemMsg.Open).Notify(this.m_PanelRoot, new cc.Size(900, 400), new cc.Size(700, 350), 150, this.DisablePanel.bind(this)), this.isPlayExitAudio = !0, this.m_PanelRoot.active = !0
                }, e.prototype.DisablePanel = function() {
                    this.m_PanelRoot.active && b.EventSystem.Event(b.SystemMsg.Close).Notify(), this.m_PanelRoot.active = !1, this.isPlayExitAudio && b.EventSystem.Event(b.PurchaseEvent.OnPurchasePanelDisable).Length > 0 && b.EventSystem.Event(b.PurchaseEvent.OnPurchasePanelDisable).Notify()
                }, e.prototype.DisableAllBtn = function() {
                    this.m_btn1Dollars.enabled = this.m_btn1Dollars.interactable = !1, this.m_btn5Dollars.enabled = this.m_btn5Dollars.interactable = !1, this.m_btn10Dollars.enabled = this.m_btn10Dollars.interactable = !1, this.m_btn20Dollars.enabled = this.m_btn20Dollars.interactable = !1, this.m_btnAllDollars.enabled = this.m_btnAllDollars.interactable = !1, this.m_btn100Dollars.enabled = this.m_btn100Dollars.interactable = !1
                }, e.prototype.EnableBtn = function(t) {
                    var e = this;
                    this.m_btn1Dollars.enabled = this.m_btn1Dollars.interactable = t >= 100;
                    var n = this.m_btn1Dollars.getComponentInChildren(cc.Label);
                    n && (n.node.color = this.m_btn1Dollars.enabled ? this.m_btn1Dollars.normalColor : this.m_btn1Dollars.disabledColor), this.m_btn5Dollars.enabled = this.m_btn5Dollars.interactable = t >= 500;
                    var l = this.m_btn5Dollars.getComponentInChildren(cc.Label);
                    l && (l.node.color = this.m_btn5Dollars.enabled ? this.m_btn5Dollars.normalColor : this.m_btn5Dollars.disabledColor), this.m_btn10Dollars.enabled = this.m_btn10Dollars.interactable = t >= 1e3;
                    var o = this.m_btn10Dollars.getComponentInChildren(cc.Label);
                    o && (o.node.color = this.m_btn10Dollars.enabled ? this.m_btn10Dollars.normalColor : this.m_btn10Dollars.disabledColor), this.m_btn20Dollars.enabled = this.m_btn20Dollars.interactable = t >= 2e3;
                    var r = this.m_btn20Dollars.getComponentInChildren(cc.Label);
                    r && (r.node.color = this.m_btn20Dollars.enabled ? this.m_btn20Dollars.normalColor : this.m_btn20Dollars.disabledColor), this.m_btn100Dollars.enabled = this.m_btn100Dollars.interactable = t >= 1e4;
                    var s = this.m_btn100Dollars.getComponentInChildren(cc.Label);
                    s && (s.node.color = this.m_btn100Dollars.enabled ? this.m_btn100Dollars.normalColor : this.m_btn100Dollars.disabledColor), this.m_btnAllDollars.enabled = this.m_btnAllDollars.interactable = t >= 100, this.m_btnAllDollars.getComponentsInChildren(cc.Sprite).forEach(function(t) {
                        t.node.color = e.m_btnAllDollars.enabled ? e.m_btnAllDollars.normalColor : e.m_btnAllDollars.disabledColor
                    })
                }, e.prototype.OnClick1Dollars = function() {
                    var t = this;
                    this.DisableAllBtn(), b.EventSystem.Event(b.PurchaseEvent.OnClickPurchaseBtn).Length > 0 && b.EventSystem.Event(b.PurchaseEvent.OnClickPurchaseBtn).Notify(), c.ConnectPanelMgr.Instance.ShowConnectPanel(), this.SendPurchaseCmd("$1", function(e, n) {
                        b.EventSystem.Event(b.PurchaseEvent.OnPurchaseSuccess).Notify(e, n), t.EnableBtn(e), c.ConnectPanelMgr.Instance.DisableConnectPanel()
                    })
                }, e.prototype.OnClick5Dollars = function() {
                    var t = this;
                    this.DisableAllBtn(), b.EventSystem.Event(b.PurchaseEvent.OnClickPurchaseBtn).Length > 0 && b.EventSystem.Event(b.PurchaseEvent.OnClickPurchaseBtn).Notify(), c.ConnectPanelMgr.Instance.ShowConnectPanel(), this.SendPurchaseCmd("$5", function(e, n) {
                        b.EventSystem.Event(b.PurchaseEvent.OnPurchaseSuccess).Notify(e, n), t.EnableBtn(e), c.ConnectPanelMgr.Instance.DisableConnectPanel()
                    })
                }, e.prototype.OnClick10Dollars = function() {
                    var t = this;
                    this.DisableAllBtn(), b.EventSystem.Event(b.PurchaseEvent.OnClickPurchaseBtn).Length > 0 && b.EventSystem.Event(b.PurchaseEvent.OnClickPurchaseBtn).Notify(), c.ConnectPanelMgr.Instance.ShowConnectPanel(), this.SendPurchaseCmd("$10", function(e, n) {
                        b.EventSystem.Event(b.PurchaseEvent.OnPurchaseSuccess).Notify(e, n), t.EnableBtn(e), c.ConnectPanelMgr.Instance.DisableConnectPanel()
                    })
                }, e.prototype.OnClick20Dollars = function() {
                    var t = this;
                    this.DisableAllBtn(), b.EventSystem.Event(b.PurchaseEvent.OnClickPurchaseBtn).Length > 0 && b.EventSystem.Event(b.PurchaseEvent.OnClickPurchaseBtn).Notify(), c.ConnectPanelMgr.Instance.ShowConnectPanel(), this.SendPurchaseCmd("$20", function(e, n) {
                        b.EventSystem.Event(b.PurchaseEvent.OnPurchaseSuccess).Notify(e, n), t.EnableBtn(e), c.ConnectPanelMgr.Instance.DisableConnectPanel()
                    })
                }, e.prototype.OnClick100Dollars = function() {
                    var t = this;
                    this.DisableAllBtn(), b.EventSystem.Event(b.PurchaseEvent.OnClickPurchaseBtn).Length > 0 && b.EventSystem.Event(b.PurchaseEvent.OnClickPurchaseBtn).Notify(), c.ConnectPanelMgr.Instance.ShowConnectPanel(), this.SendPurchaseCmd("$100", function(e, n) {
                        b.EventSystem.Event(b.PurchaseEvent.OnPurchaseSuccess).Notify(e, n), t.EnableBtn(e), c.ConnectPanelMgr.Instance.DisableConnectPanel()
                    })
                }, e.prototype.OnClickALLDollars = function() {
                    var t = this;
                    this.DisableAllBtn(), b.EventSystem.Event(b.PurchaseEvent.OnClickPurchaseBtn).Length > 0 && b.EventSystem.Event(b.PurchaseEvent.OnClickPurchaseBtn).Notify(), c.ConnectPanelMgr.Instance.ShowConnectPanel(), this.SendPurchaseCmd("all", function(e, n) {
                        b.EventSystem.Event(b.PurchaseEvent.OnPurchaseSuccess).Notify(e, n), t.EnableBtn(e), c.ConnectPanelMgr.Instance.DisableConnectPanel()
                    })
                }, e.prototype.SendPurchaseCmd = function(t, e) {
                    var n = this;
                    i.LobbyClient.Instance.GetUserClient.SendPurchase(t, function(t, l) {
                        if (t === ArkSDK.HttpConnect.HttpResult.OK) null == l || 0 !== l.cmd_data.result && 1 !== l.cmd_data.result ? (console.warn("SendPurchaseCmd error !!"), c.ConnectPanelMgr.Instance.DisableConnectPanel(), u.PopupMsgMgr.Instance.ShowPopMsg(u.PopupPriority.Critical, "S196", null, "purchase error : " + JSON.stringify(l), null)) : (e(l.cmd_data.winnings, l.cmd_data.entries), n.isPlayExitAudio = !1, n.DisablePanel());
                        else {
                            console.warn("SendPurchaseCmd is Error !!!!");
                            var o;
                            o = t == ArkSDK.HttpResult.Abort ? "S295" : t == ArkSDK.HttpResult.Condition ? "S190" : t == ArkSDK.HttpResult.NotReset ? "S191" : t == ArkSDK.HttpResult.Status ? "S192" : t == ArkSDK.HttpResult.Error ? "S193" : t == ArkSDK.HttpResult.Timeout ? "S194" : "S195", c.ConnectPanelMgr.Instance.DisableConnectPanel(), u.PopupMsgMgr.Instance.ShowPopMsg(u.PopupPriority.Critical, o, null, "purchase ark error", null)
                        }
                    })
                }, r([v(cc.Button)], e.prototype, "m_btn1Dollars", void 0), r([v(cc.Button)], e.prototype, "m_btn5Dollars", void 0), r([v(cc.Button)], e.prototype, "m_btn10Dollars", void 0), r([v(cc.Button)], e.prototype, "m_btn20Dollars", void 0), r([v(cc.Button)], e.prototype, "m_btn100Dollars", void 0), r([v(cc.Button)], e.prototype, "m_btnAllDollars", void 0), r([v(cc.Button)], e.prototype, "m_btnClose", void 0), r([v(cc.Node)], e.prototype, "m_PanelRoot", void 0), r([v(cc.Label)], e.prototype, "m_titleLabel", void 0), r([v(cc.Sprite)], e.prototype, "m_spriteTitle", void 0), r([v(cc.SpriteFrame)], e.prototype, "m_spriteframeTitleDonate", void 0), r([v(cc.SpriteFrame)], e.prototype, "m_spriteframeTitlePurchase", void 0), r([p], e)
            }(h.default);
        n.PurchaseMgr = P, cc._RF.pop()
    }, {
        "../../../Connect/Script/ConnectPanelMgr": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../ModuleBase": void 0,
        "../../../Net/LobbyClient": void 0,
        "../../../PopupMessage/Script/PopupMsgMgr": void 0
    }]
}, {}, ["PurchaseMgr"]);