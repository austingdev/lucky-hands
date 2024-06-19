window.__require = function e(t, o, r) {
    function i(a, s) {
        if (!o[a]) {
            if (!t[a]) {
                var c = a.split("/");
                if (c = c[c.length - 1], !t[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!s && l) return l(c, !0);
                    if (n) return n(c, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = c
            }
            var d = o[a] = {
                exports: {}
            };
            t[a][0].call(d.exports, function(e) {
                return i(t[a][1][e] || e)
            }, d, d.exports, e, t, o, r)
        }
        return o[a].exports
    }
    for (var n = "function" == typeof __require && __require, a = 0; a < r.length; a++) i(r[a]);
    return i
}({
    HistoryObj: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "b9350fQKINL0JsRdnrT/7ju", "HistoryObj");
        var r = this && this.__decorate || function(e, t, o, r) {
            var i, n = arguments.length,
                a = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, o, a) : i(t, o)) || a);
            return n > 3 && a && Object.defineProperty(t, o, a), a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.ReferralCode = void 0;
        const i = e("../../../../LobbyCommon/Component/ListView/ScrollObject"),
            n = e("../../../../LobbyCommon/Helper/LayerSystem"),
            a = e("./HistoryPage"),
            s = e("./RewardObj"),
            {
                ccclass: c,
                property: l
            } = cc._decorator;
        (function(e) {
            let t = class extends i.default {
                constructor() {
                    super(...arguments), this.rewardObj = null, this.backgroundH = (new i.Unit).Init(i.UnitType.Sprite), this.backgroundV = (new i.Unit).Init(i.UnitType.Sprite), this.icon = (new i.Unit).Init(i.UnitType.Node), this.time = (new i.Unit).Init(i.UnitType.Label), this.playerId = (new i.Unit).Init(i.UnitType.Label), this.content = (new i.Unit).Init(i.UnitType.Label)
                }
                UnitForEach(e) {
                    [this.backgroundH, this.backgroundV, this.icon, this.time, this.playerId, this.content].forEach(e)
                }
                onLoad() {
                    this.UnitForEach(e => {
                        this.units.push(e)
                    })
                }
                Init() {
                    n.default.SetParent(this.backgroundH.node, a.RCHistoryLayer.Background), n.default.SetParent(this.backgroundV.node, a.RCHistoryLayer.Background), n.default.SetParent(this.icon.node, a.RCHistoryLayer.Icon), n.default.SetParent(this.time.node, a.RCHistoryLayer.Label), n.default.SetParent(this.playerId.node, a.RCHistoryLayer.Label), n.default.SetParent(this.content.node, a.RCHistoryLayer.Label)
                }
                set data(e) {
                    const {
                        CreateTime: t,
                        Nickname: o,
                        Reward: r
                    } = e, i = new Date(t);
                    this.time.content = this.Convert(i), this.playerId.content = o;
                    for (let n of Object.keys(r)) this.rewardObj.SetData(n, r[n])
                }
                Convert(e) {
                    let t = "";
                    return (t = e.toLocaleDateString("en-US", {
                        year: "numeric",
                        month: "2-digit",
                        day: "2-digit"
                    })) + "\n" + e.toLocaleString("en-US", {
                        hour: "2-digit",
                        minute: "2-digit"
                    })
                }
            };
            r([l(s.RewardObj)], t.prototype, "rewardObj", void 0), r([l({
                type: i.Unit,
                displayName: "\u80cc\u666fH"
            })], t.prototype, "backgroundH", void 0), r([l({
                type: i.Unit,
                displayName: "\u80cc\u666fV"
            })], t.prototype, "backgroundV", void 0), r([l({
                type: i.Unit,
                displayName: "\u5716\u793a"
            })], t.prototype, "icon", void 0), r([l({
                type: i.Unit,
                displayName: "\u6642\u9593"
            })], t.prototype, "time", void 0), r([l({
                type: i.Unit,
                displayName: "\u73a9\u5bb6\u540d\u7a31"
            })], t.prototype, "playerId", void 0), r([l({
                type: i.Unit,
                displayName: "\u54c1\u9805\u6578\u91cf"
            })], t.prototype, "content", void 0), t = r([c], t), e.HistoryObj = t
        })(o.ReferralCode || (o.ReferralCode = {})), cc._RF.pop()
    }, {
        "../../../../LobbyCommon/Component/ListView/ScrollObject": void 0,
        "../../../../LobbyCommon/Helper/LayerSystem": void 0,
        "./HistoryPage": "HistoryPage",
        "./RewardObj": "RewardObj"
    }],
    HistoryPage: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "2fb9aMEF29H8aElYEJy5hBC", "HistoryPage");
        var r = this && this.__decorate || function(e, t, o, r) {
                var i, n = arguments.length,
                    a = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, r);
                else
                    for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, o, a) : i(t, o)) || a);
                return n > 3 && a && Object.defineProperty(t, o, a), a
            },
            i = this && this.__awaiter || function(e, t, o, r) {
                return new(o || (o = Promise))(function(i, n) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.HistoryPage = o.RCHistoryLayer = void 0;
        const n = e("../../../../LobbyCommon/Component/AudioMgr"),
            a = e("../../../../LobbyCommon/Component/ListView/ScrollList"),
            s = e("../../../../LobbyCommon/Helper/LayerSystem"),
            c = e("./ReferralCodeDataCtrl"),
            l = e("./ReferralCodeDefine"),
            {
                ccclass: d,
                property: h
            } = cc._decorator;
        var u;
        (function(e) {
            e.Background = "[RC][History]_background", e.Icon = "[RC][History]_icon", e.Label = "[RC][History]_label"
        })(u = o.RCHistoryLayer || (o.RCHistoryLayer = {}));
        let f = class extends a.default {
            constructor() {
                super(...arguments), this.FunClose = null, this.bgLayer = null, this.iconLayer = null, this.labelLayer = null, this.count = 11, this.Max = !1, this.SendPacket = !1
            }
            onLoad() {
                s.default.RegisterLayer(u.Background, this.bgLayer), s.default.RegisterLayer(u.Icon, this.iconLayer), s.default.RegisterLayer(u.Label, this.labelLayer), this.count = 10, super.onLoad()
            }
            onDestroy() {
                s.default.UnregisterLayer(u.Background, this.bgLayer), s.default.UnregisterLayer(u.Icon, this.iconLayer), s.default.UnregisterLayer(u.Label, this.labelLayer), super.onDestroy()
            }
            OnScroll(e) {
                super.OnScroll(e), e.getScrollOffset().y / e.getMaxScrollOffset().y >= .99 && !this.Max && !this.SendPacket && (this.SendPacket = !0, this.GetHistory(this.count + 10))
            }
            GetHistory(e = this.count) {
                return i(this, void 0, void 0, function*() {
                    const t = e > 11 ? e : 11,
                        o = yield c.ReferralCode.GetHistory(t).catch(() => {});
                    this.SendPacket = !1;
                    const {
                        DataList: r
                    } = o.cmd_data;
                    this.SetData(r), this.count = r.length, this.Max = e > this.count
                })
            }
            ResetScrollViewPos() {
                this.scrollView.stopAutoScroll(), this.scrollView.scrollToTop(), this.UpdateShowBox(), this.offset = this.scrollView.getScrollOffset()
            }
            OnClose() {
                n.AudioMgr.Instance.Play(l.ReferralCodeAudio.BtnN, !1, 1), this.node.active = !1, this.FunClose && this.FunClose()
            }
        };
        r([h(cc.Node)], f.prototype, "bgLayer", void 0), r([h(cc.Node)], f.prototype, "iconLayer", void 0), r([h(cc.Node)], f.prototype, "labelLayer", void 0), f = r([d], f), o.HistoryPage = f, cc._RF.pop()
    }, {
        "../../../../LobbyCommon/Component/AudioMgr": void 0,
        "../../../../LobbyCommon/Component/ListView/ScrollList": void 0,
        "../../../../LobbyCommon/Helper/LayerSystem": void 0,
        "./ReferralCodeDataCtrl": "ReferralCodeDataCtrl",
        "./ReferralCodeDefine": "ReferralCodeDefine"
    }],
    InfoPage: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "b68betIP+JCBaiaHoKw3nqR", "InfoPage");
        var r = this && this.__decorate || function(e, t, o, r) {
                var i, n = arguments.length,
                    a = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, r);
                else
                    for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, o, a) : i(t, o)) || a);
                return n > 3 && a && Object.defineProperty(t, o, a), a
            },
            i = this && this.__awaiter || function(e, t, o, r) {
                return new(o || (o = Promise))(function(i, n) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.InfoPage = o.RewardGroup = void 0;
        const n = e("../../../../LobbyCommon/Component/AudioMgr"),
            a = e("../../../../LobbyCommon/Component/SSSpawnPool"),
            s = e("./ReferralCodeDefine"),
            c = e("./ReferralCodeLayout"),
            l = e("./RewardObj"),
            {
                ccclass: d,
                property: h
            } = cc._decorator;
        let u = class {
            constructor() {
                this.layout = null, this.rewardPf = null, this.pool = null, this.tsAry = []
            }
            SetData(e) {
                this.tsAry = [];
                let t = null;
                for (let o = 0; o < e.length; o++) {
                    let r = (t = this.pool.Spawn(this.rewardPf.data, this.layout.node)).getComponent(l.RewardObj);
                    r && (r.node.active = !0, r.SetData(e[o].ItemID, e[o].Amount), this.tsAry.push(r))
                }
                this.layout.updateLayout()
            }
            Clear() {
                this.tsAry.forEach(e => {
                    e.Clear(), e.node.active = !1, this.pool.Despawn(e.node)
                })
            }
        };
        r([h(c.default)], u.prototype, "layout", void 0), r([h(cc.Prefab)], u.prototype, "rewardPf", void 0), r([h(a.SpawnPool)], u.prototype, "pool", void 0), u = r([d("RewardLayout")], u), o.RewardGroup = u;
        let f = class extends cc.Component {
            constructor() {
                super(...arguments), this.FunClose = null, this.scrollView = null, this.referrerReward = null, this.friendReward = null, this.saveData = null
            }
            onEnable() {
                this.scrollView.scrollTo(new cc.Vec2(0, 1))
            }
            SetReward(e) {
                return i(this, void 0, void 0, function*() {
                    if (null != this.saveData) {
                        if (this.saveData.StartTime == e.StartTime) return void console.log("[ReferralCode][InfoPage] SetReward \u4e0d\u5237\u65b0\u8cc7\u6599");
                        console.log("[ReferralCode][InfoPage] SetReward \u5237\u65b0\u8cc7\u6599"), this.referrerReward.Clear(), this.friendReward.Clear()
                    }
                    console.log("[ReferralCode][InfoPage] SetReward \u8cc7\u6599\u8a2d\u5b9a data = ", e), this.referrerReward.SetData(e.InviteReward), this.friendReward.SetData(e.ReferrerReward), this.saveData = e
                })
            }
            OnClose() {
                n.AudioMgr.Instance.Play(s.ReferralCodeAudio.BtnN, !1, 1), this.node.active = !1, this.FunClose && this.FunClose()
            }
        };
        r([h(cc.ScrollView)], f.prototype, "scrollView", void 0), r([h(u)], f.prototype, "referrerReward", void 0), r([h(u)], f.prototype, "friendReward", void 0), f = r([d], f), o.InfoPage = f, cc._RF.pop()
    }, {
        "../../../../LobbyCommon/Component/AudioMgr": void 0,
        "../../../../LobbyCommon/Component/SSSpawnPool": void 0,
        "./ReferralCodeDefine": "ReferralCodeDefine",
        "./ReferralCodeLayout": "ReferralCodeLayout",
        "./RewardObj": "RewardObj"
    }],
    ReferralCodeDataCtrl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "59a88tHiLRKNK9PNtJqPJPe", "ReferralCodeDataCtrl"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.ReferralCode = void 0;
        const r = e("../../../../LobbyCommon/Net/LobbyClient"),
            {
                ccclass: i,
                property: n
            } = cc._decorator;
        var a, s;
        (function(e) {
            e.ReferralCode = "ReferralBonus"
        })(a || (a = {})),
        function(e) {
            e.GetInfo = "REF_GET_INFO", e.AddReferrer = "REF_ADD_REFERRER", e.GetRewardList = "REF_GET_REWARD_LIST", e.TakeReward = "REF_TAKE_REWARD", e.GetHistory = "REF_GET_HISTORY"
        }(s || (s = {}));
        const c = (e, t, o, r) => {
                if (t && t.cmd_data) {
                    const {
                        Code: i
                    } = null == t ? void 0 : t.cmd_data;
                    console.log("[ReferralCode] Status: " + e + " Code: " + i + "\n", t), e || i ? r(i) : o(t)
                } else r(-1)
            },
            l = {
                GetInfo: () => new Promise((e, t) => {
                    r.LobbyClient.Instance.GetUserClient.SendCommand(a.ReferralCode, s.GetInfo, {}, (o, r) => {
                        c(o, r, e, t)
                    })
                }),
                AddReferrer: e => new Promise((t, o) => {
                    const i = {};
                    i.InviteCode = e, r.LobbyClient.Instance.GetUserClient.SendCommand(a.ReferralCode, s.AddReferrer, i, (e, r) => {
                        c(e, r, t, o)
                    })
                }),
                GetRewardList: () => new Promise((e, t) => {
                    r.LobbyClient.Instance.GetUserClient.SendCommand(a.ReferralCode, s.GetRewardList, {}, (o, r) => {
                        c(o, r, e, t)
                    })
                }),
                TakeReward: e => new Promise((t, o) => {
                    const i = {};
                    i.RewardSn = e, r.LobbyClient.Instance.GetUserClient.SendCommand(a.ReferralCode, s.TakeReward, i, (e, r) => {
                        c(e, r, t, o)
                    })
                }),
                GetHistory: (e = 10) => new Promise((t, o) => {
                    const i = {};
                    i.Length = e, r.LobbyClient.Instance.GetUserClient.SendCommand(a.ReferralCode, s.GetHistory, i, (e, r) => {
                        c(e, r, t, o)
                    })
                })
            };
        o.ReferralCode = l, cc._RF.pop()
    }, {
        "../../../../LobbyCommon/Net/LobbyClient": void 0
    }],
    ReferralCodeDefine: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "10553gvWkJOPIAOnJRVhpmp", "ReferralCodeDefine"), Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.ReferralCodeData = o.Reward = o.ReferralCodeAudio = void 0,
            function(e) {
                e.Open = "Btn_Confirm_openwindow_v02", e.BtnN = "Btn_Select_n_v01", e.BtnY = "Btn_Select_y_v01"
            }(o.ReferralCodeAudio || (o.ReferralCodeAudio = {}));
        class r {
            constructor(e, t) {
                this.ItemID = null, this.Amount = null, this.ItemID = e, this.Amount = t
            }
        }
        o.Reward = r, o.ReferralCodeData = class {
            constructor(e) {
                this.Type = "", this.Curent = 0, this.Target = 0, this.InviteCode = "", this.InviteReward = [], this.ReferrerCount = 0, this.ReferrerCountMax = 0, this.InviteCount = 0, this.InviteLimit = 0, this.ReferrerReward = [], this.Type = e.Type, this.Curent = e.Progress[0], this.Target = e.Progress[1], this.InviteCode = e.InviteCode, this.InviteReward = this.ParseReward(e.Reward), this.InviteCount = e.InviteCount, this.InviteLimit = e.InviteLimit, this.ReferrerCount = e.Referrer.UseCount, this.ReferrerCountMax = e.Referrer.Limit, this.ReferrerReward = this.ParseReward(e.Referrer.Reward)
            }
            ParseReward(e) {
                let t = [];
                for (let o of Object.keys(e)) {
                    let i = new r(o, Number(e[o]));
                    t.push(i)
                }
                return t
            }
        }, cc._RF.pop()
    }, {}],
    ReferralCodeIconCtrl: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "44b92HUfd1NVo3z936ljeBH", "ReferralCodeIconCtrl");
        var r = this && this.__decorate || function(e, t, o, r) {
            var i, n = arguments.length,
                a = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, o, a) : i(t, o)) || a);
            return n > 3 && a && Object.defineProperty(t, o, a), a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const i = e("../../../../LobbyCommon/Component/NodeDrag"),
            {
                ccclass: n,
                property: a
            } = cc._decorator;
        let s = class extends cc.Component {
            constructor() {
                super(...arguments), this.FunOnClick = null, this.redPoint = null, this.newAnim = null, this.m_nodeDragFloatBtn = null
            }
            onLoad() {
                this.m_nodeDragFloatBtn.Event_DragEnd = this.OnDragEnd.bind(this), this.m_nodeDragFloatBtn.Event_ClickItem = this.OnClick.bind(this), this.SetNew(!1), this.SetShake(!1)
            }
            onDestroy() {
                this.FunOnClick = null, this.m_nodeDragFloatBtn.Event_DragEnd = null, this.m_nodeDragFloatBtn.Event_ClickItem = null
            }
            SetNew(e) {
                this.redPoint.active = e
            }
            SetShake(e) {
                e ? this.newAnim.play() : (this.newAnim.stop(), this.newAnim.setCurrentTime(0))
            }
            OnClick() {
                this.FunOnClick && this.FunOnClick()
            }
            OnDragEnd() {}
        };
        r([a(cc.Node)], s.prototype, "redPoint", void 0), r([a(cc.Animation)], s.prototype, "newAnim", void 0), r([a(i.NodeDrag)], s.prototype, "m_nodeDragFloatBtn", void 0), s = r([n], s), o.default = s, cc._RF.pop()
    }, {
        "../../../../LobbyCommon/Component/NodeDrag": void 0
    }],
    ReferralCodeLayout: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "083aeZXpKdKk4Y+R8sA1nXP", "ReferralCodeLayout");
        var r = this && this.__decorate || function(e, t, o, r) {
            var i, n = arguments.length,
                a = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, r);
            else
                for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, o, a) : i(t, o)) || a);
            return n > 3 && a && Object.defineProperty(t, o, a), a
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const i = e("../../../../LobbyCommon/FullScreenHandler"),
            {
                ccclass: n,
                property: a
            } = cc._decorator;
        let s = class extends cc.Layout {
            constructor() {
                super(...arguments), this.maxWidth_H = 0, this.maxWidth_V = 0
            }
            updateLayout() {
                if (super.updateLayout(), this.node.getContentSize().width > this.maxWidth) {
                    let e = 0;
                    this.node.children.forEach(t => {
                        t.active && e++
                    });
                    let t = this.node.children[0].getContentSize().width,
                        o = this.node.children[0].getContentSize().height,
                        r = .01 * Math.floor(this.maxWidth / e / t * 100);
                    this.node.children.forEach(e => {
                        e.setScale(new cc.Vec2(r, r)), e.setContentSize(new cc.Size(t * r, o * r))
                    }), this.updateLayout()
                }
            }
            get maxWidth() {
                return i.Orientation.Landscape == i.Orientation.Landscape ? this.maxWidth_H : this.maxWidth_V
            }
        };
        r([a], s.prototype, "maxWidth_H", void 0), r([a], s.prototype, "maxWidth_V", void 0), s = r([n], s), o.default = s, cc._RF.pop()
    }, {
        "../../../../LobbyCommon/FullScreenHandler": void 0
    }],
    ReferralCodeMgr: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "3288fxBI7pDhqtYqVQWDcDO", "ReferralCodeMgr");
        var r = this && this.__decorate || function(e, t, o, r) {
                var i, n = arguments.length,
                    a = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, r);
                else
                    for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, o, a) : i(t, o)) || a);
                return n > 3 && a && Object.defineProperty(t, o, a), a
            },
            i = this && this.__awaiter || function(e, t, o, r) {
                return new(o || (o = Promise))(function(i, n) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.ReferralCodeMgr = o.RewardType = void 0;
        const n = e("./InfoPage"),
            a = e("./ReferralCodeDataCtrl"),
            s = e("./HistoryPage"),
            c = e("./ReferralCodeDefine"),
            l = e("./RewardPage"),
            d = e("../../../../LobbyCommon/ModuleBase"),
            h = e("../../../../LobbyCommon/Helper/EventSystem"),
            u = e("./ReferralCodeIconCtrl"),
            f = e("../../../../LobbyCommon/PopUpMgr/Scripts/PriorityCustomEvent"),
            y = e("../../../../LobbyCommon/Connect/Script/ConnectPanelMgr"),
            p = e("../../../../LobbyCommon/Component/AudioMgr"),
            C = e("../../../../LobbyCommon/Net/ClickLog"),
            R = e("../../../../LobbyCommon/Net/ClickLogEnum"),
            v = e("../../../../LobbyCommon/Component/CookieCtrl"),
            {
                ccclass: g,
                property: m
            } = cc._decorator;
        var w, b;
        (function(e) {
            e[e.Main = 0] = "Main", e[e.Rule = 1] = "Rule", e[e.History = 2] = "History", e[e.Reward = 3] = "Reward", e[e.Close = 4] = "Close"
        })(w || (w = {})),
        function(e) {
            e.Invite = "Invite", e.Referrer = "Referrer"
        }(b = o.RewardType || (o.RewardType = {}));
        let P = class extends d.default {
            constructor() {
                super(...arguments), this.root = null, this.iconCtrl = null, this.mainPage = null, this.limetPage = null, this.completePage = null, this.infoPage = null, this.historyPage = null, this.rewardPage = null, this.myCode = null, this.ReferrerCount = null, this.copyMsg = null, this.progessLabel = null, this.progressBar = null, this.editBox = null, this.editBoxTips = null, this.editBoxLabel = null, this.inputPen = null, this.enteredCode = null, this.errorMsg = null, this.errorMsgSpAry = [], this.enterBtn = null, this.rcData = null, this.eventActive = !1, this.isEnterError = !1, this.historyTimeout = !0, this.historyTimeoutID = void 0, this.mainInfoTimeout = !1, this.mainInfoTimeoutID = void 0, this.HistoryTimeOut = 60, this.MainInfoTimeOut = 60, this.CheckRewardTime = 60, this.ReferralCodeLength = 6, this.rewardQueue = [], this.type = w.Main, this.isLoginReward = !1, this._active = !1, this.shakeCookieKey = "ReferralBonusShakeClick", this.tween = null
            }
            _onLoad() {
                return i(this, void 0, void 0, function*() {
                    this.shakeCookieKey = v.CookieCtrl.SetKeyBindUserPinArkID(this.shakeCookieKey), console.log("[ReferralCode] _onLoad")
                })
            }
            _start() {
                return i(this, void 0, void 0, function*() {
                    console.log("[ReferralCode] _start")
                })
            }
            ErrorHandler() {
                console.warn("[ReferralCode] ErrorHandler"), this._active = !1, this.iconCtrl.node.active = !1, this.OnClose()
            }
            _waitPacket() {
                return i(this, void 0, void 0, function*() {
                    console.log("[ReferralCode] _waitPacket"), this._active = !0;
                    const e = yield a.ReferralCode.GetInfo().catch(() => {
                        this.ErrorHandler()
                    });
                    if (!this._active) return;
                    const t = null == e ? void 0 : e.cmd_data;
                    null == t ? (this.eventActive = !1, this.iconCtrl.node.active = !1) : (this.rcData = new c.ReferralCodeData(t), this.eventActive = !0, this.iconCtrl.node.active = !0)
                })
            }
            _downloadResources() {
                return i(this, void 0, void 0, function*() {
                    console.log("[ReferralCode] _downloadResources"), this.Init(), this.mainInfoTimeoutID = setTimeout(() => {
                        this.mainInfoTimeout = !0
                    }, 1e3 * this.MainInfoTimeOut)
                })
            }
            Init() {
                this.myCode.string = "", this.progessLabel.string = "", this.errorMsg.node.active = !1, this.enterBtn.interactable = !1, this.editBox.enabled = !1, this.SetProgressBar(0), this.root.active = !1, this.rewardPage.node.active = !1, h.EventSystem.Event(h.ScreenOrientationState.ChangeOrientation).Insert(this.OnOrientationChange, this), this.iconCtrl.FunOnClick = this.OnIconBtnClicked.bind(this), this.infoPage.FunClose = this.BackMainPage.bind(this), this.historyPage.FunClose = this.BackMainPage.bind(this), h.EventSystem.Event(h.RegistPopupBanner).Notify("ReferralBonusPopup", !0, () => {
                    C.ClickLog.SendLog(R.LogName.PlayerAction, R.LogType_PlayerAction.ReferralBonus, R.LogEvent_ReferralBonus.Popup), this.ShowPanel()
                }), h.EventSystem.Event(h.RegistPopupBanner).Notify("ReferralBonusBanner", !1, () => {
                    C.ClickLog.SendLog(R.LogName.PlayerAction, R.LogType_PlayerAction.ReferralBonus, R.LogEvent_ReferralBonus.Banner), this.ShowPanel()
                }), h.EventSystem.Event(h.RegistPopupEvent).Notify(f.PopEventPriority.ReferralCode, this.EnterLobby.bind(this), null), window.ReferralCode = this
            }
            _onDestroy() {
                return i(this, void 0, void 0, function*() {
                    this.infoPage.FunClose = null, this.historyPage = null, h.EventSystem.Event(h.ScreenOrientationState.ChangeOrientation).Remove(this.OnOrientationChange, this)
                })
            }
            OnOrientationChange(e) {
                return i(this, void 0, void 0, function*() {
                    yield SS.Common.WaitForSeconds(0), this.mainPage.active = this.type == w.Main, this.infoPage.node.active = this.type == w.Rule, this.historyPage.node.active = this.type == w.History, this.rewardPage.node.active = this.type == w.Reward, this.type == w.Main && this.UpdateUI(), this.type == w.Reward && this.rewardPage.UpdateObjects()
                })
            }
            OnMenuBtnClicked() {
                this.eventActive ? (C.ClickLog.SendLog(R.LogName.PlayerAction, R.LogType_PlayerAction.ReferralBonus, R.LogEvent_ReferralBonus.Icon), this.ShowPanel()) : console.error("[ReferralCode] \u6d3b\u52d5\u6c92\u958b")
            }
            OnIconBtnClicked() {
                this.eventActive ? (C.ClickLog.SendLog(R.LogName.PlayerAction, R.LogType_PlayerAction.ReferralBonus, R.LogEvent_ReferralBonus.Icon), this.ShowPanel()) : console.error("[ReferralCode] \u6d3b\u52d5\u6c92\u958b")
            }
            EnterLobby() {
                return i(this, void 0, void 0, function*() {
                    if (console.log("[ReferralCode] EnterLobby"), !this._active) return void h.EventSystem.Event(h.CheckNextPopup).Notify();
                    let e = (0 == this.rcData.Target ? 100 : 100 * this.rcData.Curent / this.rcData.Target) >= 100 && 0 == this.rcData.InviteCount;
                    this.iconCtrl.SetNew(e);
                    let t = this.rcData.ReferrerCountMax - this.rcData.ReferrerCount;
                    h.EventSystem.Function(h.IsLoginProcess)() && v.CookieCtrl.SetCookie(this.shakeCookieKey, "false");
                    let o = v.CookieCtrl.GetCookie(this.shakeCookieKey);
                    t > 0 && "true" != o && this.iconCtrl.SetShake(!0), yield this.GetRewardList();
                    const r = (yield this.GetRewardList()) > 0;
                    console.log("[ReferralCode] EnterLobby AFTER GetRewardList hasReward = ", r), r ? this.isLoginReward = !0 : h.EventSystem.Event(h.CheckNextPopup).Notify()
                })
            }
            BackMainPage() {
                this.mainPage.active = !0, this.type = w.Main, this.UpdateUI()
            }
            GetRewardList() {
                return i(this, void 0, void 0, function*() {
                    console.log("[ReferralCode] GetRewardList");
                    let e = !1;
                    const t = yield a.ReferralCode.GetRewardList().catch(() => {
                        e = !0
                    });
                    if (e) return void this.scheduleOnce(this.GetRewardList, this.CheckRewardTime);
                    let o = t.cmd_data.RewardSn;
                    if (this.rewardQueue = [], o && o.length > 0)
                        for (let i = 0; i < o.length; i++) this.rewardQueue.push(o[i]);
                    const r = this.rewardQueue.length;
                    return this.rewardQueue.length > 0 && this.CheckReward(), this.scheduleOnce(this.GetRewardList, this.CheckRewardTime), r
                })
            }
            CheckReward() {
                return i(this, void 0, void 0, function*() {
                    if (console.log("[ReferralCode] CheckReward, rewardQueue.length = " + this.rewardQueue.length), this.rewardQueue.length <= 0 || this.type == w.Reward) return;
                    const e = this.rewardQueue.shift(),
                        t = yield a.ReferralCode.TakeReward(e).catch(() => {
                            this.ErrorHandler()
                        });
                    this._active && this.ShowRewardPanel(t, b.Referrer)
                })
            }
            ShowPanel() {
                p.AudioMgr.Instance.Play(c.ReferralCodeAudio.Open, !1, 1), this.type = w.Main, this.UpdateUI(), this.mainPage.active = !0, this.infoPage.node.active = !1, this.historyPage.node.active = !1, this.root.active = !0, "true" != v.CookieCtrl.GetCookie(this.shakeCookieKey) && v.CookieCtrl.SetCookie(this.shakeCookieKey, "true"), this.iconCtrl.SetShake(!1), h.EventSystem.Event(h.SystemMsg.Open).Notify(this.root, cc.Size.ZERO, cc.Size.ZERO, 200, this.OnClose.bind(this))
            }
            ShowRewardPanel(e, t) {
                return i(this, void 0, void 0, function*() {
                    console.log("[ReferralCode] ShowRewardPanel Reward = ", e, ", type = ", t), this.OnClose(), this.rewardPage.node.active = !0, this.rewardPage.SetData(e, t), h.EventSystem.Event(h.SystemMsg.Open).Notify(this.rewardPage.node, cc.Size.ZERO, cc.Size.ZERO, 175, null, !0, !1, () => {
                        this.type = w.Close, this.CloseRewardPage(t)
                    }), this.type = w.Reward
                })
            }
            CloseRewardPage(e) {
                return i(this, void 0, void 0, function*() {
                    p.AudioMgr.Instance.Play(c.ReferralCodeAudio.BtnN, !1, 1), this.rewardQueue.length <= 0 && e == b.Referrer ? (yield this.UpdateInfo(), this.UpdateUI(), this.isLoginReward && (console.log("[ReferralCode] CloseRewardPage \u767b\u5165\u9818\u734e\u7d50\u675f"), this.isLoginReward = !1, h.EventSystem.Event(h.CheckNextPopup).Notify())) : this.CheckReward()
                })
            }
            UpdateUI() {
                this.myCode.string = this.rcData.InviteCode;
                let e = 0 == this.rcData.Target ? 100 : 100 * this.rcData.Curent / this.rcData.Target;
                this.SetProgressBar(e), this.SetEditBoxEnable(e >= 100), this.editBoxTips.active = e < 100, this.inputPen.active = !1, this.errorMsg.node.active = this.isEnterError;
                let t = this.rcData.ReferrerCountMax - this.rcData.ReferrerCount;
                this.ReferrerCount.string = t.toString(), this.limetPage.active = t <= 0, this.enteredCode.node.active = !1, 0 == this.rcData.InviteCount ? (this.completePage.active = !1, this.enterBtn.node.active = !0, this.enterBtn.interactable = e >= 100, this.inputPen.active = e >= 100 && "" == this.editBox.string) : this.rcData.InviteCount > 0 && this.rcData.InviteCount == this.rcData.InviteLimit ? (this.completePage.active = !0, this.editBox.node.active = !1, this.enterBtn.node.active = !1) : console.log("[ReferralCode] updateData error, this.rcData.InputCount = ", this.rcData.InviteCount, ", this.rcData.InputCountMax = ", this.rcData.InviteLimit)
            }
            UpdateInfo() {
                return i(this, void 0, void 0, function*() {
                    console.log("[ReferralCode] UpdateInfo \u8cc7\u6599\u66f4\u65b0");
                    const e = yield a.ReferralCode.GetInfo().catch(() => {
                        this.ErrorHandler()
                    });
                    if (!this._active) return;
                    const t = null == e ? void 0 : e.cmd_data;
                    t && (this.rcData = new c.ReferralCodeData(t), console.log("[ReferralCode] UpdateInfo \u8cc7\u6599\u5237\u65b0 data = ", this.rcData))
                })
            }
            SetEditBoxEnable(e) {
                this.editBox.enabled = e
            }
            SetProgressBar(e) {
                let t = Math.floor(10 * e) / 10;
                t >= 100 && (t = 100), this.progressBar.progress = t / 100 < .1 && t > 0 ? .1 : t / 100, this.progessLabel.string = t + "%"
            }
            OnClickCopyCode() {
                return i(this, void 0, void 0, function*() {
                    p.AudioMgr.Instance.Play(c.ReferralCodeAudio.BtnY, !1, 1);
                    const e = this.myCode.string;
                    if (console.log("[ReferralCode] OnClickCopyCode", this.myCode.string), navigator.clipboard && window.isSecureContext) yield navigator.clipboard.writeText(e);
                    else {
                        const o = document.createElement("textarea");
                        o.value = e, o.style.position = "absolute", o.style.left = "-999999px", document.body.prepend(o), o.select();
                        try {
                            document.execCommand("copy")
                        } catch (t) {
                            console.error(t)
                        } finally {
                            o.remove()
                        }
                    }
                    this.ShowCopyMessage()
                })
            }
            ShowCopyMessage() {
                this.tween && (this.tween.stop(), this.tween = null), this.copyMsg.active = !0, this.tween = cc.tween(this.copyMsg).to(.2, {
                    opacity: 255
                }).delay(1).to(.2, {
                    opacity: 0
                }).call(() => {
                    this.copyMsg.active = !1
                }).start()
            }
            OnEditDidBegin() {
                this.inputPen.active = !1, console.log("[ReferralCode] OnEditDidBegin code = " + this.editBox.string), window.hasOwnProperty("isForcusEditbox") && (isForcusEditbox = !0)
            }
            OnEditDidEnd() {
                window.hasOwnProperty("isForcusEditbox") && (isForcusEditbox = !1), this.inputPen.active = "" == this.editBox.string, this.editBoxLabel.node.active = !0, console.error("[ReferralCode] OnEditDidEnd code = " + this.editBox.string + ", invitationCodeLabel = " + this.editBoxLabel.string)
            }
            OnClickHistory() {
                return i(this, void 0, void 0, function*() {
                    p.AudioMgr.Instance.Play(c.ReferralCodeAudio.BtnY, !1, 1), this.historyTimeout && (this.historyTimeout = !1, yield this.SyncHistoryData()), this.mainPage.active = !1, this.historyPage.node.active = !0, this.historyPage.ResetScrollViewPos(), this.type = w.History
                })
            }
            SyncHistoryData() {
                return i(this, void 0, void 0, function*() {
                    y.ConnectPanelMgr.Instance.ShowConnectPanel(0), yield this.historyPage.GetHistory(), y.ConnectPanelMgr.Instance.DisableConnectPanel(0), clearTimeout(this.historyTimeoutID), this.historyTimeoutID = setTimeout(() => {
                        console.log("[ReferralCode] SyncHistoryData Timeout "), this.historyTimeout = !0
                    }, 1e3 * this.HistoryTimeOut)
                })
            }
            OnClicEnter() {
                return i(this, void 0, void 0, function*() {
                    if (this.isEnterError = !1, this.errorMsg.node.active = !1, p.AudioMgr.Instance.Play(c.ReferralCodeAudio.BtnY, !1, 1), this.editBox.string.length != this.ReferralCodeLength) return console.log("[ReferralCode] OnClicEnter this.editBox.string.length \u4e0d\u5c0d = " + this.editBox.string.length), this.isEnterError = !0, this.errorMsg.node.active = !0, void(this.errorMsg.spriteFrame = this.errorMsgSpAry[0]);
                    this.enterBtn.interactable = !1, y.ConnectPanelMgr.Instance.ShowConnectPanel(0);
                    const e = yield a.ReferralCode.AddReferrer(this.editBox.string).catch(e => {
                        y.ConnectPanelMgr.Instance.DisableConnectPanel(0), console.error("[ReferralCode] SendCodeError ", e), this.isEnterError = !0, this.errorMsg.node.active = !0, this.errorMsg.spriteFrame = -8 == e ? this.errorMsgSpAry[1] : this.errorMsgSpAry[0], this.scheduleOnce(() => {
                            this.enterBtn.interactable = !0
                        }, 1)
                    });
                    y.ConnectPanelMgr.Instance.DisableConnectPanel(0), this.isEnterError || (this.rcData.InviteCount++, this.ShowRewardPanel(e, b.Invite), this.iconCtrl.SetNew(!1))
                })
            }
            OnClicInfo() {
                return i(this, void 0, void 0, function*() {
                    p.AudioMgr.Instance.Play(c.ReferralCodeAudio.BtnY, !1, 1), this.mainInfoTimeout && (this.mainInfoTimeout = !1, y.ConnectPanelMgr.Instance.ShowConnectPanel(0), yield this.UpdateInfo(), y.ConnectPanelMgr.Instance.DisableConnectPanel(0), clearTimeout(this.mainInfoTimeoutID), this.mainInfoTimeoutID = setTimeout(() => {
                        this.mainInfoTimeout = !0
                    }, 1e3 * this.MainInfoTimeOut)), this.mainPage.active = !1, this.infoPage.node.active = !0, this.infoPage.SetReward(this.rcData), this.type = w.Rule
                })
            }
            OnClose() {
                p.AudioMgr.Instance.Play(c.ReferralCodeAudio.BtnN, !1, 1), this.root.active = !1, h.EventSystem.Event(h.SystemMsg.Close).Notify()
            }
        };
        r([m(cc.Node)], P.prototype, "root", void 0), r([m(u.default)], P.prototype, "iconCtrl", void 0), r([m(cc.Node)], P.prototype, "mainPage", void 0), r([m(cc.Node)], P.prototype, "limetPage", void 0), r([m(cc.Node)], P.prototype, "completePage", void 0), r([m(n.InfoPage)], P.prototype, "infoPage", void 0), r([m(s.HistoryPage)], P.prototype, "historyPage", void 0), r([m(l.default)], P.prototype, "rewardPage", void 0), r([m(cc.Label)], P.prototype, "myCode", void 0), r([m(cc.Label)], P.prototype, "ReferrerCount", void 0), r([m(cc.Node)], P.prototype, "copyMsg", void 0), r([m(cc.Label)], P.prototype, "progessLabel", void 0), r([m(cc.ProgressBar)], P.prototype, "progressBar", void 0), r([m(cc.EditBox)], P.prototype, "editBox", void 0), r([m(cc.Node)], P.prototype, "editBoxTips", void 0), r([m(cc.Label)], P.prototype, "editBoxLabel", void 0), r([m(cc.Node)], P.prototype, "inputPen", void 0), r([m(cc.Label)], P.prototype, "enteredCode", void 0), r([m(cc.Sprite)], P.prototype, "errorMsg", void 0), r([m([cc.SpriteFrame])], P.prototype, "errorMsgSpAry", void 0), r([m(cc.Button)], P.prototype, "enterBtn", void 0), P = r([g], P), o.ReferralCodeMgr = P, cc._RF.pop()
    }, {
        "../../../../LobbyCommon/Component/AudioMgr": void 0,
        "../../../../LobbyCommon/Component/CookieCtrl": void 0,
        "../../../../LobbyCommon/Connect/Script/ConnectPanelMgr": void 0,
        "../../../../LobbyCommon/Helper/EventSystem": void 0,
        "../../../../LobbyCommon/ModuleBase": void 0,
        "../../../../LobbyCommon/Net/ClickLog": void 0,
        "../../../../LobbyCommon/Net/ClickLogEnum": void 0,
        "../../../../LobbyCommon/PopUpMgr/Scripts/PriorityCustomEvent": void 0,
        "./HistoryPage": "HistoryPage",
        "./InfoPage": "InfoPage",
        "./ReferralCodeDataCtrl": "ReferralCodeDataCtrl",
        "./ReferralCodeDefine": "ReferralCodeDefine",
        "./ReferralCodeIconCtrl": "ReferralCodeIconCtrl",
        "./RewardPage": "RewardPage"
    }],
    RewardObj: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "50a63yVSSBO65PZh9wQsQle", "RewardObj");
        var r = this && this.__decorate || function(e, t, o, r) {
                var i, n = arguments.length,
                    a = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, r);
                else
                    for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, o, a) : i(t, o)) || a);
                return n > 3 && a && Object.defineProperty(t, o, a), a
            },
            i = this && this.__awaiter || function(e, t, o, r) {
                return new(o || (o = Promise))(function(i, n) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.RewardObj = void 0;
        const n = e("../../../../LobbyCommon/Helper/Download"),
            {
                ccclass: a,
                property: s
            } = cc._decorator;
        let c = class extends cc.Component {
            constructor() {
                super(...arguments), this.spIcon = null, this.value = null, this.itemId = ""
            }
            SetData(e, t) {
                this.itemId = e, -1 != e.indexOf("FAC") || -1 != e.indexOf("FRM") ? this.GetIcon("Avatar", "", e) : this.GetIcon("Common", "Texture/Reward/", e), this.value.string = SS.Common.BaseFunction.addCommas(t, 0)
            }
            get IsAsset() {
                return "entries" == this.itemId || "winnings" == this.itemId
            }
            get NodeWorldPosition() {
                return this.node.convertToWorldSpaceAR(cc.Vec3.ZERO)
            }
            GetIcon(e, t, o) {
                return i(this, void 0, void 0, function*() {
                    let r = yield n.Download.SpriteFrame(e, t + o);
                    this.spIcon.spriteFrame = r
                })
            }
            Clear() {
                this.spIcon.spriteFrame = null, this.value.string = ""
            }
        };
        r([s(cc.Sprite)], c.prototype, "spIcon", void 0), r([s(cc.Label)], c.prototype, "value", void 0), c = r([a], c), o.RewardObj = c, cc._RF.pop()
    }, {
        "../../../../LobbyCommon/Helper/Download": void 0
    }],
    RewardPage: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "5162aSTHIRCma626kSRZOqN", "RewardPage");
        var r = this && this.__decorate || function(e, t, o, r) {
                var i, n = arguments.length,
                    a = n < 3 ? t : null === r ? r = Object.getOwnPropertyDescriptor(t, o) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, r);
                else
                    for (var s = e.length - 1; s >= 0; s--)(i = e[s]) && (a = (n < 3 ? i(a) : n > 3 ? i(t, o, a) : i(t, o)) || a);
                return n > 3 && a && Object.defineProperty(t, o, a), a
            },
            i = this && this.__awaiter || function(e, t, o, r) {
                return new(o || (o = Promise))(function(i, n) {
                    function a(e) {
                        try {
                            c(r.next(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function s(e) {
                        try {
                            c(r.throw(e))
                        } catch (t) {
                            n(t)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? i(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                            e(t)
                        })).then(a, s)
                    }
                    c((r = r.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const n = e("../../../../LobbyCommon/Component/SSSpawnPool"),
            a = e("../../../../LobbyCommon/FakeScoreBox/Script/FakeScoreBoxCtrl"),
            s = e("../../../../LobbyCommon/Helper/EventSystem"),
            c = e("./ReferralCodeLayout"),
            l = e("./ReferralCodeMgr"),
            d = e("./RewardObj"),
            {
                ccclass: h,
                property: u
            } = cc._decorator;
        var f;
        (function(e) {
            e[e.WaitConfirm = 0] = "WaitConfirm", e[e.WaitClose = 1] = "WaitClose"
        })(f || (f = {}));
        let y = class extends cc.Component {
            constructor() {
                super(...arguments), this.contentTypeInvite = null, this.contentTypeReferrer_H = null, this.contentTypeReferrer_V = null, this.referrerName = null, this.layout = null, this.rewardPf = null, this.pool = null, this.fakeScoreRoot = null, this.fakeScorePf = null, this.entriesPf = null, this.confirmBtn = null, this.tsAry = [], this.asset = null, this.type = null, this.step = null, this.scoreBoxCtrl = null, this.entriesWorldPos = null
            }
            onLoad() {
                this.CreateScoreBox()
            }
            CreateScoreBox() {
                let e = cc.instantiate(this.fakeScorePf.data);
                e.parent = this.fakeScoreRoot, e.setPosition(cc.Vec3.ZERO), this.scoreBoxCtrl = e.getComponent(a.FakeScoreBoxCtrl), this.scoreBoxCtrl.SetCoinEffect(this.entriesPf, 5, 100, 50), this.scoreBoxCtrl.hide(), this.scoreBoxCtrl.node.active = !1
            }
            UpdateObjects() {
                null != this.type && (this.contentTypeInvite.active = this.type == l.RewardType.Invite, this.contentTypeReferrer_H.active = this.type == l.RewardType.Referrer, this.contentTypeReferrer_V.active = !1, this.referrerName.node.active = this.type == l.RewardType.Referrer, this.confirmBtn.interactable = this.step == f.WaitConfirm, this.layout.updateLayout())
            }
            SetData(e, t) {
                console.log("[ReferralCode][RewardPage] SetData = ", e, ", type = ", t), this.step = f.WaitConfirm, this.type = t, this.UpdateObjects(), this.tsAry = [];
                let o = null;
                const {
                    Asset: r,
                    Reward: i,
                    ExtraData: n
                } = e.cmd_data;
                for (let a of Object.keys(i)) {
                    let e = (o = this.pool.Spawn(this.rewardPf.data, this.layout.node)).getComponent(d.RewardObj);
                    e && (e.node.active = !0, e.SetData(a, i[a]), this.tsAry.push(e))
                }
                t == l.RewardType.Referrer && (this.referrerName.string = null == n ? void 0 : n.Nickname), this.asset = r, this.layout.updateLayout()
            }
            Confirm() {
                console.log("[ReferralCode][RewardPage] Confirm, this.asset = ", this.asset), this.confirmBtn.interactable = !1, this.step = f.WaitClose, this.asset && this.GetAsset(this.asset)
            }
            Clear() {
                this.type = null, this.step = null, this.asset = null, this.confirmBtn.interactable = !0, this.tsAry.forEach(e => {
                    e.Clear(), e.node.active = !1, this.pool.Despawn(e.node)
                })
            }
            GetAsset(e) {
                return i(this, void 0, void 0, function*() {
                    console.log("[ReferralCode][RewardPage] \u8cc7\u7522\u540c\u6b65 asset = ", e);
                    let t = !1;
                    if (this.tsAry.forEach(e => {
                            e.IsAsset && (t = !0, this.entriesWorldPos = e.NodeWorldPosition)
                        }), t) {
                        null == this.scoreBoxCtrl && this.CreateScoreBox();
                        const t = s.EventSystem.Function(s.DownBar.GetPlayerEntries)(),
                            o = s.EventSystem.Function(s.DownBar.GetPlayerWinnings)(),
                            {
                                entries: r,
                                winnings: i
                            } = e;
                        this.scoreBoxCtrl.node.active = !0, this.scoreBoxCtrl.show(a.ShowType.ENTRIES, t), this.scoreBoxCtrl.countUpShowJumpMoneyCustom(this.entriesWorldPos, r, 1, .5, () => {
                            console.log("[ReferralCode], GetAsset, countUpShowJumpMoney CB"), s.EventSystem.Event(s.DownBar.SetPlayerInfo).Notify(r, o), this.scheduleOnce(() => {
                                this.OnClose()
                            }, .5)
                        })
                    } else this.OnClose()
                })
            }
            OnClose() {
                console.log("[ReferralCode][OnClose]"), this.Clear(), this.scoreBoxCtrl && (this.scoreBoxCtrl.node.active = !1), this.node.active = !1, s.EventSystem.Event(s.SystemMsg.Close).Notify()
            }
        };
        r([u(cc.Node)], y.prototype, "contentTypeInvite", void 0), r([u(cc.Node)], y.prototype, "contentTypeReferrer_H", void 0), r([u(cc.Node)], y.prototype, "contentTypeReferrer_V", void 0), r([u(cc.Label)], y.prototype, "referrerName", void 0), r([u(c.default)], y.prototype, "layout", void 0), r([u(cc.Prefab)], y.prototype, "rewardPf", void 0), r([u(n.SpawnPool)], y.prototype, "pool", void 0), r([u(cc.Node)], y.prototype, "fakeScoreRoot", void 0), r([u(cc.Prefab)], y.prototype, "fakeScorePf", void 0), r([u(cc.Prefab)], y.prototype, "entriesPf", void 0), r([u(cc.Button)], y.prototype, "confirmBtn", void 0), y = r([h], y), o.default = y, cc._RF.pop()
    }, {
        "../../../../LobbyCommon/Component/SSSpawnPool": void 0,
        "../../../../LobbyCommon/FakeScoreBox/Script/FakeScoreBoxCtrl": void 0,
        "../../../../LobbyCommon/Helper/EventSystem": void 0,
        "./ReferralCodeLayout": "ReferralCodeLayout",
        "./ReferralCodeMgr": "ReferralCodeMgr",
        "./RewardObj": "RewardObj"
    }]
}, {}, ["HistoryObj", "HistoryPage", "InfoPage", "ReferralCodeDataCtrl", "ReferralCodeDefine", "ReferralCodeIconCtrl", "ReferralCodeLayout", "ReferralCodeMgr", "RewardObj", "RewardPage"]);