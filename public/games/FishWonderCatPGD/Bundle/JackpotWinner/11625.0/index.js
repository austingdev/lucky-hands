window.__require = function t(e, i, o) {
    function n(r, l) {
        if (!i[r]) {
            if (!e[r]) {
                var s = r.split("/");
                if (s = s[s.length - 1], !e[s]) {
                    var c = "function" == typeof __require && __require;
                    if (!l && c) return c(s, !0);
                    if (a) return a(s, !0);
                    throw new Error("Cannot find module '" + r + "'")
                }
                r = s
            }
            var p = i[r] = {
                exports: {}
            };
            e[r][0].call(p.exports, function(t) {
                return n(e[r][1][t] || t)
            }, p, p.exports, t, e, i, o)
        }
        return i[r].exports
    }
    for (var a = "function" == typeof __require && __require, r = 0; r < o.length; r++) n(o[r]);
    return n
}({
    MagicCityJPWinnerItem: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "3e4adcwnDhMoYXcLJs1zu1X", "MagicCityJPWinnerItem");
        var o, n = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            a = this && this.__decorate || function(t, e, i, o) {
                var n, a = arguments.length,
                    r = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
                else
                    for (var l = t.length - 1; l >= 0; l--)(n = t[l]) && (r = (a < 3 ? n(r) : a > 3 ? n(e, i, r) : n(e, i)) || r);
                return a > 3 && r && Object.defineProperty(e, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var r = t("../../../Component/NumberCountUp"),
            l = t("../../../Helper/LayerSystem"),
            s = cc._decorator,
            c = s.ccclass,
            p = s.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.type = null, e.jpValue = null, e.date = null, e.machineID = null, e.shared = null, e.isMoney = !0, e.typePos = null, e.jpValuePos = null, e.datePos = null, e.machineIDPos = null, e.sharedPos = null, e
                }
                return n(e, t), e.prototype.Init = function() {
                    this.typePos = this.type.node.position.clone(), this.jpValuePos = this.jpValue.node.position.clone(), this.datePos = this.date.node.position.clone(), this.machineIDPos = this.machineID.node.position.clone(), this.sharedPos = this.shared.node.position.clone(), l.default.SetParent(this.type.node, "type"), l.default.SetParent(this.jpValue.node, "jp_value"), l.default.SetParent(this.date.node, "date"), l.default.SetParent(this.machineID.node, "machine_id"), l.default.SetParent(this.shared.node, "shared")
                }, e.prototype.Set = function(t) {
                    if (void 0 === t && (t = null), t) {
                        this.type.string = this.GetType(t.jp_type);
                        var e = t.jp_value;
                        if (this.isMoney) {
                            var i = SS.Common.GameEnvironment.exchange_rate,
                                o = SS.Common.BaseFunction.accMul(e, i);
                            e = this.TruncateCurrency(o, i)
                        }
                        this.jpValue.SetNumberNow(e), this.date.string = this.GetDate(t.time), 1 === t.WinPlayerCount ? (this.machineID.string = t.machine_id, this.machineID.node.active = !0, this.shared.node.active = !1) : (this.shared.string = t.WinPlayerCount, this.machineID.node.active = !1, this.shared.node.active = !0), this.active = !0
                    } else this.active = !1
                }, Object.defineProperty(e.prototype, "active", {
                    set: function(t) {
                        this.type.node.active = t, this.jpValue.node.active = t, this.date.node.active = t, this.machineID.node.active = this.machineID.node.active && t, this.shared.node.active = this.shared.node.active && t, this.node.active = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.Sync = function() {
                    this.type.node.position = this.node.position.clone().add(this.typePos), this.jpValue.node.position = this.node.position.clone().add(this.jpValuePos), this.date.node.position = this.node.position.clone().add(this.datePos), this.machineID.node.position = this.node.position.clone().add(this.machineIDPos), this.shared.node.position = this.node.position.clone().add(this.sharedPos)
                }, e.prototype.GetType = function(t) {
                    var e = "NONE";
                    switch (t) {
                        case 0:
                            e = "GRAND";
                            break;
                        case 1:
                            e = "MAJOR";
                            break;
                        case 2:
                            e = "MINOR";
                            break;
                        case 3:
                            e = "MINI"
                    }
                    return e
                }, e.prototype.GetDate = function(t) {
                    var e = "";
                    return t.split("-:"), t.slice(), e + (t.slice(5, 7) + "/") + t.slice(8, 10) + "\n" + t.slice(11, 13) + ":" + t.slice(14, 16)
                }, e.prototype.SetJPValueFormat = function(t) {
                    this.isMoney = t, this.jpValue.SetNumberFormat(!t, t)
                }, e.prototype.TruncateCurrency = function(t, e) {
                    var i = SS.Common.BaseFunction.accDiv(1, e);
                    return t = SS.Common.BaseFunction.accMul(t, i), t = Math.floor(t), SS.Common.BaseFunction.accDiv(t, i)
                }, a([p({
                    type: cc.Label,
                    displayName: "JP \u985e\u578b"
                })], e.prototype, "type", void 0), a([p({
                    type: r.NumberCountUp,
                    displayName: "JP \u91d1\u984d"
                })], e.prototype, "jpValue", void 0), a([p({
                    type: cc.Label,
                    displayName: "\u4e2d\u734e\u65e5\u671f"
                })], e.prototype, "date", void 0), a([p({
                    type: cc.Label,
                    displayName: "\u7368\u5f97\u8005\u7684 Machine ID"
                })], e.prototype, "machineID", void 0), a([p({
                    type: cc.Label,
                    displayName: "\u7531\u591a\u5c11\u4eba\u5206\u4eab"
                })], e.prototype, "shared", void 0), a([c], e)
            }(cc.Component);
        i.default = u, cc._RF.pop()
    }, {
        "../../../Component/NumberCountUp": void 0,
        "../../../Helper/LayerSystem": void 0
    }],
    MagicCityJPWinner: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "46fbeWXiEdCVZFWj969vRuD", "MagicCityJPWinner");
        var o, n = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, e) {
                        t.__proto__ = e
                    } || function(t, e) {
                        for (var i in e) e.hasOwnProperty(i) && (t[i] = e[i])
                    })(t, e)
            }, function(t, e) {
                function i() {
                    this.constructor = t
                }
                o(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            a = this && this.__decorate || function(t, e, i, o) {
                var n, a = arguments.length,
                    r = a < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(t, e, i, o);
                else
                    for (var l = t.length - 1; l >= 0; l--)(n = t[l]) && (r = (a < 3 ? n(r) : a > 3 ? n(e, i, r) : n(e, i)) || r);
                return a > 3 && r && Object.defineProperty(e, i, r), r
            },
            r = this && this.__awaiter || function(t, e, i, o) {
                return new(i || (i = Promise))(function(n, a) {
                    function r(t) {
                        try {
                            s(o.next(t))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function l(t) {
                        try {
                            s(o.throw(t))
                        } catch (e) {
                            a(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
                            t(e)
                        })).then(r, l)
                    }
                    s((o = o.apply(t, e || [])).next())
                })
            },
            l = this && this.__generator || function(t, e) {
                var i, o, n, a, r = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: l(0),
                    throw: l(1),
                    return: l(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function l(t) {
                    return function(e) {
                        return s([t, e])
                    }
                }

                function s(a) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; r;) try {
                        if (i = 1, o && (n = 2 & a[0] ? o.return : a[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, a[1])).done) return n;
                        switch (o = 0, n && (a = [2 & a[0], n.value]), a[0]) {
                            case 0:
                            case 1:
                                n = a;
                                break;
                            case 4:
                                return r.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                r.label++, o = a[1], a = [0];
                                continue;
                            case 7:
                                a = r.ops.pop(), r.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = r.trys).length > 0 && n[n.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    r = 0;
                                    continue
                                }
                                if (3 === a[0] && (!n || a[1] > n[0] && a[1] < n[3])) {
                                    r.label = a[1];
                                    break
                                }
                                if (6 === a[0] && r.label < n[1]) {
                                    r.label = n[1], n = a;
                                    break
                                }
                                if (n && r.label < n[2]) {
                                    r.label = n[2], r.ops.push(a);
                                    break
                                }
                                n[2] && r.ops.pop(), r.trys.pop();
                                continue
                        }
                        a = e.call(t, r)
                    } catch (l) {
                        a = [6, l], o = 0
                    } finally {
                        i = n = 0
                    }
                    if (5 & a[0]) throw a[1];
                    return {
                        value: a[0] ? a[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = t("../../../Component/AudioMgr"),
            c = t("../../../Connect/Script/ConnectPanelMgr"),
            p = t("../../../Helper/EventSystem"),
            u = t("../../../Helper/LayerSystem"),
            h = t("../../../ModuleBase"),
            y = t("../../../Net/LobbyClient"),
            d = t("./MagicCityJPWinnerItem"),
            f = cc._decorator,
            v = f.ccclass,
            g = f.property,
            P = function() {
                function t() {
                    this.button = null, this.normal = null, this.disable = null
                }
                return Object.defineProperty(t.prototype, "interactable", {
                    set: function(t) {
                        this.button.interactable = t, this.normal.active = t, this.disable.active = !t
                    },
                    enumerable: !1,
                    configurable: !0
                }), a([g({
                    type: cc.Button,
                    displayName: "\u6309\u9215"
                })], t.prototype, "button", void 0), a([g({
                    type: cc.Node,
                    displayName: "\u6b63\u5e38\u6309\u9215\u986f\u793a"
                })], t.prototype, "normal", void 0), a([g({
                    type: cc.Node,
                    displayName: "\u95dc\u9589\u9ede\u64ca\u6642\u6309\u9215\u986f\u793a"
                })], t.prototype, "disable", void 0), a([v("CustomButton")], t)
            }(),
            m = function() {
                function t() {
                    this.type = "", this.content = null, this.item = []
                }
                return a([g({
                    type: cc.String,
                    displayName: "\u986f\u793a\u985e\u578b"
                })], t.prototype, "type", void 0), a([g({
                    type: cc.Node,
                    displayName: "Scroll View Content"
                })], t.prototype, "content", void 0), a([g({
                    type: cc.Node,
                    displayName: "\u8981\u986f\u793a\u7684\u7269\u4ef6"
                })], t.prototype, "item", void 0), a([v("InfoPageDic")], t)
            }(),
            S = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.root = null, e.backgroundSizeLandscape = cc.Size.ZERO, e.backgroundSizePortrait = cc.Size.ZERO, e.allLayout = null, e.bigLayout = null, e.bigPrizeItemList = [], e.buttonAll = null, e.buttonBigPrize = null, e.buttonInfo = null, e.allPrize = null, e.allNoData = null, e.bigPrize = null, e.grandNoData = null, e.majorNoData = null, e.jpInfo = null, e.layerType = null, e.layerJpValue = null, e.layerDate = null, e.layerMachineID = null, e.layerShared = null, e.scrollView = null, e.bigPrizeScrollView = null, e.infoScrollView = null, e.infoPageDic = [], e.allPrizeData = [], e.bigPrizeData = [], e.showBox = null, e.isMoney = !0, e.allPageItemList = [], e.topBar = null, e.topBarParent = null, e.jpTimer = null, e.jpTimerParent = null, e.isAllPageSetData = !1, e.isBigPrizePageSetData = !1, e.infoContentHeight = 0, e
                }
                return n(e, t), e.prototype._onLoad = function() {
                    return r(this, void 0, void 0, function() {
                        return l(this, function() {
                            return this.root.active = !0, this.root.active = !1, this.allLayout.enabled = !1, this.bigLayout.enabled = !1, this.allPrize.active = !1, this.bigPrize.active = !1, this.jpInfo.active = !1, this.showBox = this.allPrize.getBoundingBoxToWorld().clone(), this.infoContentHeight = this.infoScrollView.content.height, p.EventSystem.Event(p.JackpotWinner.SetJpValueFormat).Insert(this.SetJPValueFormat, this), p.EventSystem.Event(p.JackpotWinner.Show).Insert(this.ShowJpWinner, this), p.EventSystem.Event(p.JackpotWinner.SetInfoPage).Insert(this.SetInfoPage, this), u.default.RegisterLayer("type", this.layerType), u.default.RegisterLayer("jp_value", this.layerJpValue), u.default.RegisterLayer("date", this.layerDate), u.default.RegisterLayer("machine_id", this.layerMachineID), u.default.RegisterLayer("shared", this.layerShared), p.EventSystem.Event(p.ScreenOrientationState.ChangeOrientation).Insert(this.OnOrientationChange, this), [2]
                        })
                    })
                }, e.prototype._onDestroy = function() {
                    return r(this, void 0, void 0, function() {
                        return l(this, function() {
                            return p.EventSystem.Event(p.JackpotWinner.OnClickClose).Clear(), p.EventSystem.Event(p.JackpotWinner.SetJpValueFormat).Remove(this.SetJPValueFormat, this), p.EventSystem.Event(p.JackpotWinner.Show).Remove(this.ShowJpWinner, this), p.EventSystem.Event(p.JackpotWinner.SetInfoPage).Remove(this.SetInfoPage, this), p.EventSystem.Event(p.ScreenOrientationState.ChangeOrientation).Remove(this.OnOrientationChange, this), [2]
                        })
                    })
                }, e.prototype.OnOrientationChange = function() {
                    var t = this;
                    this.scheduleOnce(function() {
                        t.allPrize.active ? t.ShowAll() : t.bigPrize.active ? t.ShowBigPrize() : t.ShowJPInfo(), t.scrollView._calculateBoundary(), t.bigPrizeScrollView._calculateBoundary(), t.infoScrollView._calculateBoundary()
                    }, .1)
                }, e.prototype.ShowJpWinner = function(t) {
                    void 0 === t && (t = "Slot"), this.root.active || (p.EventSystem.Event(p.Menu.SetDockButton).Notify(p.DockFunction.JPHistory, !0, !1), c.ConnectPanelMgr.Instance.ShowConnectPanel(), s.AudioMgr.Instance.Play("open_page", !1, 1), this.showBox = this.allPrize.getBoundingBoxToWorld().clone(), y.LobbyClient.Instance.GetJPSystem.SendGetJPHistory(t, this.ReceiveData.bind(this)))
                }, e.prototype.ReceiveData = function(t, e) {
                    if (c.ConnectPanelMgr.Instance.DisableConnectPanel(), this.root.active = !0, console.log("[JP Winner] Result: " + t + "\nGet Data: ", e), p.EventSystem.Event(p.SystemMsg.Open).Notify(this.root, this.backgroundSizeLandscape, this.backgroundSizePortrait, 150, this.OnCloseClicked.bind(this), !1), this.allPrizeData = e.history ? e.history : this.allPrizeData, this.bigPrizeData = [], e.jp0_history)
                        for (var i = 0, o = e.jp0_history; i < o.length; i++) {
                            var n = o[i];
                            this.bigPrizeData.push(n)
                        }
                    this.grandNoData.active = 0 === this.bigPrizeData.length;
                    for (var a = this.bigPrizeData.length; a < 3; ++a) this.bigPrizeData.push(null);
                    if (e.jp1_history)
                        for (var r = 0, l = e.jp1_history; r < l.length; r++) n = l[r], this.bigPrizeData.push(n);
                    for (this.majorNoData.active = 3 === this.bigPrizeData.length, a = this.bigPrizeData.length; a < 6; ++a) this.bigPrizeData.push(null);
                    this.ShowAll()
                }, e.prototype.SetJPValueFormat = function(t) {
                    this.isMoney = t;
                    for (var e = 0, i = this.bigPrizeItemList; e < i.length; e++) i[e].SetJPValueFormat(t)
                }, e.prototype.OnCloseClicked = function() {
                    this.root.active = !1, this.isAllPageSetData = !1, this.isBigPrizePageSetData = !1, s.AudioMgr.Instance.Play("Btn_Select_n_v01", !1, 1), p.EventSystem.Event(p.JackpotWinner.OnClickClose).Notify(), p.EventSystem.Event(p.Menu.SetDockButton).Notify(p.DockFunction.JPHistory, !0, !0), p.EventSystem.Event(p.SystemMsg.Close).Notify()
                }, e.prototype.OnAllClick = function() {
                    s.AudioMgr.Instance.Play("Btn_Select_y_v01", !1, 1), this.ShowAll()
                }, e.prototype.OnBigPrizeClick = function() {
                    s.AudioMgr.Instance.Play("Btn_Select_y_v01", !1, 1), this.ShowBigPrize()
                }, e.prototype.OnJPInfoClick = function() {
                    s.AudioMgr.Instance.Play("Btn_Select_y_v01", !1, 1), this.ShowJPInfo()
                }, e.prototype.ShowAll = function() {
                    if (this.LayoutUpdate("all"), !this.isAllPageSetData) {
                        for (var t = 0, e = this.allPageItemList; t < e.length; t++)(a = e[t]).Set(null);
                        for (var i = 0; i < this.allPrizeData.length; ++i) this.allPageItemList[i] ? this.allPageItemList[i].Set(this.allPrizeData[i]) : ((a = cc.instantiate(this.bigPrizeItemList[0].node).getComponent(d.default)).Init(), a.Set(this.allPrizeData[i]), a.node.setParent(this.allLayout.node), this.allPageItemList.push(a));
                        this.allNoData.active = 0 === this.allPageItemList.length, this.allLayout.enabled = !0, this.allLayout.updateLayout(), this.allLayout.enabled = !1;
                        for (var o = 0, n = this.allPageItemList; o < n.length; o++) {
                            var a;
                            (a = n[o]).Sync()
                        }
                        this.scrollView.content.setContentSize(this.allLayout.node.getContentSize()), this.isAllPageSetData = !0
                    }
                }, e.prototype.OnScroll = function() {}, e.prototype.LayoutUpdate = function(t) {
                    this.allPrize.active = "all" === t, this.bigPrize.active = "big" === t, this.jpInfo.active = "info" === t, this.buttonAll.interactable = "all" !== t, this.buttonBigPrize.interactable = "big" !== t, this.buttonInfo.interactable = "info" !== t
                }, e.prototype.ShowBigPrize = function() {
                    if (this.LayoutUpdate("big"), !this.isBigPrizePageSetData) {
                        for (var t = 0; t < this.bigPrizeItemList.length; ++t) this.bigPrizeItemList[t].Set(this.bigPrizeData[t]);
                        this.bigLayout.enabled = !0, this.bigLayout.updateLayout(), this.bigLayout.enabled = !1, this.bigPrizeScrollView.content.setContentSize(this.bigLayout.node.getContentSize()), this.isBigPrizePageSetData = !0
                    }
                }, e.prototype.ShowJPInfo = function() {
                    this.LayoutUpdate("info"), this.infoScrollView.content.height = this.infoContentHeight
                }, e.prototype.SetInfoPage = function(t) {
                    var e = this;
                    this.infoContentHeight = 0;
                    for (var i = 0; i < this.infoPageDic.length; i++)
                        if (t == this.infoPageDic[i].type) {
                            this.infoPageDic[i].content.children.forEach(function(t) {
                                return t.active = !1
                            }), this.infoPageDic[i].item.forEach(function(t) {
                                t.active = !0, e.infoContentHeight += t.height
                            });
                            break
                        }
                }, a([g({
                    type: cc.Node,
                    displayName: "\u6839\u7bc0\u9ede"
                })], e.prototype, "root", void 0), a([g({
                    displayName: "\u6a6b\u7248\u80cc\u666f\u5927\u5c0f"
                })], e.prototype, "backgroundSizeLandscape", void 0), a([g({
                    displayName: "\u76f4\u7248\u80cc\u666f\u5927\u5c0f"
                })], e.prototype, "backgroundSizePortrait", void 0), a([g({
                    type: cc.Layout,
                    displayName: "All Layout"
                })], e.prototype, "allLayout", void 0), a([g({
                    type: cc.Layout,
                    displayName: "Big Layout"
                })], e.prototype, "bigLayout", void 0), a([g({
                    type: d.default,
                    displayName: "\u986f\u793a\u5217\u8868\u7684\u7269\u4ef6"
                })], e.prototype, "bigPrizeItemList", void 0), a([g({
                    type: P,
                    displayName: "ALL \u6309\u9215"
                })], e.prototype, "buttonAll", void 0), a([g({
                    type: P,
                    displayName: "Big Prize \u6309\u9215"
                })], e.prototype, "buttonBigPrize", void 0), a([g({
                    type: P,
                    displayName: "Big Prize \u6309\u9215"
                })], e.prototype, "buttonInfo", void 0), a([g({
                    type: cc.Node,
                    displayName: "All Prize \u4e3b\u7bc0\u9ede"
                })], e.prototype, "allPrize", void 0), a([g({
                    type: cc.Node,
                    displayName: "Grand No Data"
                })], e.prototype, "allNoData", void 0), a([g({
                    type: cc.Node,
                    displayName: "Big Prize \u4e3b\u7bc0\u9ede"
                })], e.prototype, "bigPrize", void 0), a([g({
                    type: cc.Node,
                    displayName: "Grand No Data"
                })], e.prototype, "grandNoData", void 0), a([g({
                    type: cc.Node,
                    displayName: "Major No Data"
                })], e.prototype, "majorNoData", void 0), a([g({
                    type: cc.Node,
                    displayName: "JP Info \u4e3b\u7bc0\u9ede"
                })], e.prototype, "jpInfo", void 0), a([g({
                    type: cc.Node,
                    displayName: "JP \u7a2e\u985e\u5716\u5c64"
                })], e.prototype, "layerType", void 0), a([g({
                    type: cc.Node,
                    displayName: "JP Value \u5716\u5c64"
                })], e.prototype, "layerJpValue", void 0), a([g({
                    type: cc.Node,
                    displayName: "\u4e2d\u734e\u65e5\u671f\u5716\u5c64"
                })], e.prototype, "layerDate", void 0), a([g({
                    type: cc.Node,
                    displayName: "Machine ID \u5716\u5c64"
                })], e.prototype, "layerMachineID", void 0), a([g({
                    type: cc.Node,
                    displayName: "\u5171\u62c9\u4eba\u6578\u5716\u5c64"
                })], e.prototype, "layerShared", void 0), a([g({
                    type: cc.ScrollView,
                    displayName: "ScrollView"
                })], e.prototype, "scrollView", void 0), a([g({
                    type: cc.ScrollView,
                    displayName: "BigPrize ScrollView"
                })], e.prototype, "bigPrizeScrollView", void 0), a([g({
                    type: cc.ScrollView,
                    displayName: "Info ScrollView"
                })], e.prototype, "infoScrollView", void 0), a([g({
                    type: m,
                    displayName: "Info\u9801\u986f\u793a\u5167\u5bb9"
                })], e.prototype, "infoPageDic", void 0), a([v], e)
            }(h.default);
        i.default = S, cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0,
        "../../../Connect/Script/ConnectPanelMgr": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../Helper/LayerSystem": void 0,
        "../../../ModuleBase": void 0,
        "../../../Net/LobbyClient": void 0,
        "./MagicCityJPWinnerItem": "MagicCityJPWinnerItem"
    }]
}, {}, ["MagicCityJPWinner", "MagicCityJPWinnerItem"]);