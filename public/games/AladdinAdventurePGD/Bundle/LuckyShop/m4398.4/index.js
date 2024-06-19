window.__require = function t(e, o, i) {
    function n(c, a) {
        if (!o[c]) {
            if (!e[c]) {
                var r = c.split("/");
                if (r = r[r.length - 1], !e[r]) {
                    var h = "function" == typeof __require && __require;
                    if (!a && h) return h(r, !0);
                    if (s) return s(r, !0);
                    throw new Error("Cannot find module '" + c + "'")
                }
                c = r
            }
            var l = o[c] = {
                exports: {}
            };
            e[c][0].call(l.exports, function(t) {
                return n(e[c][1][t] || t)
            }, l, l.exports, t, e, o, i)
        }
        return o[c].exports
    }
    for (var s = "function" == typeof __require && __require, c = 0; c < i.length; c++) n(i[c]);
    return n
}({
    Exchange: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "c0d1a5mL6lBSJ2jVcr+15DB", "Exchange"), Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.Exchange = void 0;
        const i = t("../../../Net/LobbyClient");
        var n, s;
        (function(t) {
            t.Exchange = "Exchange"
        })(n || (n = {})),
        function(t) {
            t.GetInfo = "EXG_GET_INFO", t.GetProduct = "EXG_GET_PRODUCT", t.Do = "EXG_EXCHANGE", t.GetHistoryCount = "EXG_GET_HISTORY_COUNT", t.GetHistory = "EXG_GET_HISTORY", t.AddItem = "ADD_ITEM", t.ResetProductLimit = "RESET_PRODUCT_LIMIT"
        }(s || (s = {}));
        const c = (t, e, o, i) => {
                if (e && e.cmd_data) {
                    const {
                        Code: n
                    } = null == e ? void 0 : e.cmd_data;
                    console.log("[LuckyShop] [Exchange] Status: " + t + " Code: " + n + "\n", e), t || n ? i(n) : o(e)
                } else i(-1)
            },
            a = {
                GetInfo: () => new Promise((t, e) => {
                    i.LobbyClient.Instance.GetUserClient.SendCommand(n.Exchange, s.GetInfo, {}, (o, i) => {
                        c(o, i, t, e)
                    })
                }),
                GetProduct: t => new Promise((e, o) => {
                    const a = {
                        PkgName: "LuckyShop"
                    };
                    a.RoundId = t, i.LobbyClient.Instance.GetUserClient.SendCommand(n.Exchange, s.GetProduct, a, (t, i) => {
                        c(t, i, e, o)
                    })
                }),
                Do: (t, e) => new Promise((o, a) => {
                    const r = {};
                    r.RoundId = t, r.ProductId = e, i.LobbyClient.Instance.GetUserClient.SendCommand(n.Exchange, s.Do, r, (t, e) => {
                        c(t, e, o, a)
                    })
                }),
                GetHistoryCount: t => new Promise((e, o) => {
                    const a = {};
                    a.RoundId = t, i.LobbyClient.Instance.GetUserClient.SendCommand(n.Exchange, s.GetHistoryCount, a, (t, i) => {
                        c(t, i, e, o)
                    })
                }),
                GetHistory: (t, e = 10) => new Promise((o, a) => {
                    const r = {};
                    r.RoundId = t, r.Length = e, i.LobbyClient.Instance.GetUserClient.SendCommand(n.Exchange, s.GetHistory, r, (t, e) => {
                        c(t, e, o, a)
                    })
                }),
                AddItem: (t, e) => new Promise((o, a) => {
                    const r = {};
                    r.RoundId = t, r.ItemId = "EC-000002", r.Amount = e, i.LobbyClient.Instance.GetUserClient.SendCommand(n.Exchange, s.AddItem, r, (t, e) => {
                        c(t, e, o, a)
                    })
                }),
                ResetProductLimit: (t, e) => new Promise((o, a) => {
                    const r = {};
                    r.RoundId = t, r.ProductId = e, i.LobbyClient.Instance.GetUserClient.SendCommand(n.Exchange, s.ResetProductLimit, r, (t, e) => {
                        c(t, e, o, a)
                    })
                })
            };
        o.Exchange = a, cc._RF.pop()
    }, {
        "../../../Net/LobbyClient": void 0
    }],
    GameList: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "48476CXAPVMlLF956yCLXZq", "GameList");
        var i = this && this.__decorate || function(t, e, o, i) {
                var n, s = arguments.length,
                    c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
                else
                    for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
                return s > 3 && c && Object.defineProperty(e, o, c), c
            },
            n = this && this.__awaiter || function(t, e, o, i) {
                return new(o || (o = Promise))(function(n, s) {
                    function c(t) {
                        try {
                            r(i.next(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(t) {
                        try {
                            r(i.throw(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function r(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(c, a)
                    }
                    r((i = i.apply(t, e || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const s = t("../../../Achieve/AchieveName"),
            c = t("../../../Component/ListView/ScrollList"),
            a = t("../../../Helper/EventSystem"),
            r = t("../../../Net/ClickLog"),
            h = t("../../../Net/ClickLogEnum"),
            l = t("./GetIcon"),
            d = t("./MissionDefine"),
            {
                ccclass: u,
                property: p
            } = cc._decorator;
        let y = class extends c.default {
            constructor() {
                super(...arguments), this.check = null, this.icon = null, this.iconGameName = null, this.confirm = null, this.cancel = null, this.lobbyIcon = null, this.background = null, this.gameName = "", this.fromList = !1, this._handler = null, this.script = "GameList"
            }
            onLoad() {
                try {
                    super.onLoad(), a.EventSystem.Event(d.ChooseGame).Insert(this.OnMissionClick, this), a.EventSystem.Event(d.Confirm).Insert(this.Confirm, this), this.node.active = !1, this.check.active = !1;
                    let e = new cc.Component.EventHandler;
                    e.component = this.script, e.target = this.node, e.handler = "onClickReturn", this.cancel.clickEvents = [], this.cancel.clickEvents.push(e);
                    const o = new cc.Component.EventHandler;
                    o.component = this.script, o.target = this.node, o.handler = "onClickConfirm", this.confirm.clickEvents = [], this.confirm.clickEvents.push(o), this._handler = t => {
                        t.stopPropagation()
                    }, this.confirm.node.on(cc.Node.EventType.TOUCH_START, this._handler), this.confirm.node.on(cc.Node.EventType.TOUCH_MOVE, this._handler), this.confirm.node.on(cc.Node.EventType.TOUCH_END, this._handler), this.confirm.node.on(cc.Node.EventType.TOUCH_CANCEL, this._handler), this.cancel.node.on(cc.Node.EventType.TOUCH_START, this._handler), this.cancel.node.on(cc.Node.EventType.TOUCH_MOVE, this._handler), this.cancel.node.on(cc.Node.EventType.TOUCH_END, this._handler), this.cancel.node.on(cc.Node.EventType.TOUCH_CANCEL, this._handler)
                } catch (t) {
                    console.log("[GameList] onLoad: ", t)
                }
            }
            onDestroy() {
                super.onDestroy(), a.EventSystem.Event(d.ChooseGame).Remove(this.OnMissionClick, this), a.EventSystem.Event(d.Confirm).Remove(this.Confirm, this)
            }
            onEnable() {
                try {
                    this.gameName = "", this.check.active = !1, this.scrollView.node.active = !0, super.onEnable()
                } catch (t) {
                    console.log("[GameList] onEnable: ", t)
                }
            }
            OnOrientationChange(t) {
                const e = Object.create(null, {
                    OnOrientationChange: {
                        get: () => super.OnOrientationChange
                    }
                });
                return n(this, void 0, void 0, function*() {
                    this.gameName && this.Confirm(this.gameName), yield e.OnOrientationChange.call(this, t)
                })
            }
            Init() {
                this.lobbyIcon || (this.lobbyIcon = JSON.parse("{}"), SS.Common.GameEnvironment.ProjectSetting.hasOwnProperty(s.AchieveName.LuckyShop) ? this.lobbyIcon = SS.Common.GameEnvironment.ProjectSetting[s.AchieveName.LuckyShop] : (this.SetTypeGame("SLOT", "SLOT"), this.SetTypeGame("PICKEM", "SLOT"), this.SetTypeGame("KENO", "SLOT"), this.SetTypeGame("OTHER", "SLOT"), this.SetTypeGame("FISH", "FISH"), SS.Common.GameEnvironment.ProjectSetting[s.AchieveName.LuckyShop] = this.lobbyIcon))
            }
            SetTypeGame(t, e) {
                let o = SS.Common.GameEnvironment.GameSetting.kioskOpenGameList,
                    i = SS.Common.GameEnvironment.GameSetting.Type[t];
                i && null != i && i.length > 0 && i.forEach(t => {
                    let i = t.indexOf("BIGICON"),
                        n = t.indexOf("BIGX2"),
                        s = t.indexOf("BIGX3"); - 1 != i && (t = t.substring(i + 8)), -1 == n && -1 == s || (t = t.substring(n + 6)), o.indexOf(t) >= 0 && (this.lobbyIcon[t] = !0, this.lobbyIcon.hasOwnProperty(e) || (this.lobbyIcon[e] = []), this.lobbyIcon[e].push(t))
                })
            }
            OnMissionClick(t, e) {
                return n(this, void 0, void 0, function*() {
                    if (this.Init(), console.log("[LuckyShop] GameName: " + t + "\nList: ", this.lobbyIcon), this.node.active = !0, this.check.active = !1, this.scrollView.node.active = !0, this.fromList = !0, this.gameName = "", e) {
                        const t = [];
                        e.forEach(e => {
                            this.lobbyIcon[e] && t.push(e)
                        }), 1 === t.length ? (this.fromList = !1, this.Confirm(t[0])) : this.SetData(t)
                    } else if ("FISH" === t || "SLOT" === t) {
                        const e = this.lobbyIcon[t];
                        this.SetData(e)
                    } else "LOGIN" === t || "PURCHASE" == t || "" == t ? this.onClickCancel() : (this.fromList = !1, this.Confirm(t))
                })
            }
            Confirm(t) {
                return n(this, void 0, void 0, function*() {
                    this.gameName = t, this.iconGameName.string = a.EventSystem.Function(d.GetGameName)(t), this.icon.spriteFrame = yield l.GetGameIcon(t), this.check.active = !0, this.scrollView.node.active = !1, this.confirm.interactable = !0, this.cancel.interactable = !0
                })
            }
            onClickConfirm() {
                this.node.active = !1, this.scrollView.node.active = !0, console.log("[Game] Confirm ", this.gameName), a.EventSystem.Event(d.ChangeTo).Notify(this.gameName), r.ClickLog.DirectSend(h.LogName.PlayerAction, h.LogType_PlayerAction.LuckyShop, h.LogEvent_LuckyShop.ToGameStep3, SS.Common.GameEnvironment.CurrentGameNow, {
                    GameName: this.gameName
                }), this.gameName = ""
            }
            onClickCancel() {
                console.log("[Game] Back ", this.gameName), this.node.active = !1, this.scrollView.node.active = !0, this.gameName = "", a.EventSystem.Event(d.ChangeTo).Notify("Cancel")
            }
            onClickReturn() {
                console.log("[Game] Return ", this.gameName), this.fromList ? (this.scrollView.node.active = !0, this.check.active = !1, this.gameName = "") : this.onClickCancel()
            }
        };
        i([p({
            type: cc.Node,
            displayName: "\u78ba\u8a8d\u9762\u677f"
        })], y.prototype, "check", void 0), i([p({
            type: cc.Sprite,
            displayName: "\u904a\u6232 Icon"
        })], y.prototype, "icon", void 0), i([p({
            type: cc.Label,
            displayName: "\u904a\u6232\u540d\u7a31"
        })], y.prototype, "iconGameName", void 0), i([p({
            type: cc.Button,
            displayName: "\u78ba\u8a8d"
        })], y.prototype, "confirm", void 0), i([p({
            type: cc.Button,
            displayName: "\u53d6\u6d88"
        })], y.prototype, "cancel", void 0), y = i([u], y), o.default = y, cc._RF.pop()
    }, {
        "../../../Achieve/AchieveName": void 0,
        "../../../Component/ListView/ScrollList": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "./GetIcon": "GetIcon",
        "./MissionDefine": "MissionDefine"
    }],
    GameObject: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "18a91hP04xOZpzOweZ0nTSi", "GameObject");
        var i = this && this.__decorate || function(t, e, o, i) {
                var n, s = arguments.length,
                    c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
                else
                    for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
                return s > 3 && c && Object.defineProperty(e, o, c), c
            },
            n = this && this.__awaiter || function(t, e, o, i) {
                return new(o || (o = Promise))(function(n, s) {
                    function c(t) {
                        try {
                            r(i.next(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(t) {
                        try {
                            r(i.throw(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function r(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(c, a)
                    }
                    r((i = i.apply(t, e || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const s = t("../../../Component/ListView/ScrollObject"),
            c = t("../../../Helper/EventSystem"),
            a = t("../../../Net/ClickLog"),
            r = t("../../../Net/ClickLogEnum"),
            h = t("./GetIcon"),
            l = t("./MissionDefine"),
            {
                ccclass: d,
                property: u
            } = cc._decorator;
        let p = class extends s.default {
            constructor() {
                super(...arguments), this.sprite = (new s.Unit).Init(s.UnitType.Sprite), this.gameName = (new s.Unit).Init(s.UnitType.Label), this.button = null, this._gameName = ""
            }
            UnitForEach(t) {
                [this.sprite, this.gameName].forEach(t)
            }
            set data(t) {
                const e = t;
                e && (this.gameName.content = c.EventSystem.Function(l.GetGameName)(e), this._gameName = e, this.LazyLoading(e))
            }
            onLoad() {
                try {
                    this.button = this.sprite.node.addComponent(cc.Button), this.button.interactable = !0, this.button.clickEvents = [];
                    const e = new cc.Component.EventHandler;
                    e.target = this.node, e.component = "GameObject", e.handler = "OnClick", this.button.clickEvents.push(e)
                } catch (t) {
                    console.log("[GameObject] onLoad: ", t)
                }
            }
            LazyLoading(t) {
                return n(this, void 0, void 0, function*() {
                    this.sprite.content = yield h.GetGameIcon("Loading"), this.sprite.content = yield h.GetGameIcon(t)
                })
            }
            OnClick(t) {
                const e = this._gameName;
                c.EventSystem.Event(l.Confirm).Notify(e), a.ClickLog.SendLog(r.LogName.PlayerAction, r.LogType_PlayerAction.LuckyShop, r.LogEvent_LuckyShop.ToGameStep2, SS.Common.GameEnvironment.CurrentGameNow, {
                    GameName: e
                })
            }
        };
        i([u({
            type: s.Unit,
            displayName: "\u5716\u7247"
        })], p.prototype, "sprite", void 0), i([u({
            type: s.Unit,
            displayName: "\u904a\u6232\u540d"
        })], p.prototype, "gameName", void 0), p = i([d], p), o.default = p, cc._RF.pop()
    }, {
        "../../../Component/ListView/ScrollObject": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "./GetIcon": "GetIcon",
        "./MissionDefine": "MissionDefine"
    }],
    GetIcon: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "5de12hfNbVNRrMWG2zPb5UL", "GetIcon");
        var i = this && this.__awaiter || function(t, e, o, i) {
            return new(o || (o = Promise))(function(n, s) {
                function c(t) {
                    try {
                        r(i.next(t))
                    } catch (e) {
                        s(e)
                    }
                }

                function a(t) {
                    try {
                        r(i.throw(t))
                    } catch (e) {
                        s(e)
                    }
                }

                function r(t) {
                    var e;
                    t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                        t(e)
                    })).then(c, a)
                }
                r((i = i.apply(t, e || [])).next())
            })
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.Clear = o.PutRewardInstance = o.GetRewardInstance = o.GetReward = o.GetGameIcon = void 0;
        const n = t("../../../Helper/Download");
        let s = {},
            c = {},
            a = {};
        o.GetGameIcon = t => i(void 0, void 0, void 0, function*() {
            let e = null;
            return s.hasOwnProperty(t) ? e = s[t] : (e = yield n.Download.SpriteFrame("SquareGameIcon", "" + t), s[t] = e), e
        });
        const r = t => i(void 0, void 0, void 0, function*() {
            let e = null;
            return c.hasOwnProperty(t) ? e = c[t] : (e = yield n.Download.Prefab("SquareGameIcon", "Reward/Prefabs/" + t), c[t] = e), e
        });
        o.GetReward = r, o.GetRewardInstance = t => i(void 0, void 0, void 0, function*() {
            let e = null;
            if (a.hasOwnProperty(t) && a[t].length >= 1) e = a[t].pop();
            else {
                const o = yield r(t);
                o && ((e = cc.instantiate(o)).name = t)
            }
            return e
        }), o.PutRewardInstance = t => {
            const e = t.name;
            t.active = !1, a.hasOwnProperty(e) || (a[e] = []), a[e].push(t)
        }, o.Clear = () => {
            s = {}, c = {}, a = {}
        }, cc._RF.pop()
    }, {
        "../../../Helper/Download": void 0
    }],
    HistoryDefine: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ffe61yOd81M0aMg4UF8l4Mf", "HistoryDefine");
        var i = this && this.__decorate || function(t, e, o, i) {
            var n, s = arguments.length,
                c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
            else
                for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
            return s > 3 && c && Object.defineProperty(e, o, c), c
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.HistoryLayerSetting = o.HistoryElement = o.HistoryObjectLayer = void 0;
        const {
            ccclass: n,
            property: s
        } = cc._decorator;
        var c, a;
        (function(t) {
            t.Background = "[History]_background", t.Foreground = "[History]_foreground", t.Icon = "[History]_icon", t.Description = "[History]_description", t.Time = "[History]_time", t.Info = "[History]_info", t.Button = "[History]_button"
        })(c = o.HistoryObjectLayer || (o.HistoryObjectLayer = {})),
        function(t) {
            t[t.Background = 0] = "Background", t[t.Foreground = 1] = "Foreground", t[t.Icon = 2] = "Icon", t[t.Description = 3] = "Description", t[t.Time = 4] = "Time", t[t.Info = 5] = "Info", t[t.Button = 6] = "Button"
        }(a = o.HistoryElement || (o.HistoryElement = {}));
        let r = class {
            constructor() {
                this.enum = a.Background, this.root = null
            }
            get name() {
                return Object.values(c)[this.enum]
            }
        };
        i([s({
            type: cc.Enum(a),
            displayName: "\u5716\u5c64"
        })], r.prototype, "enum", void 0), i([s({
            type: cc.Node,
            displayName: "\u5716\u5c64\u7bc0\u9ede"
        })], r.prototype, "root", void 0), r = i([n("HistoryLayerSetting")], r), o.HistoryLayerSetting = r, cc._RF.pop()
    }, {}],
    HistoryList: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "8ef56HlBZFHt6lhA8boEial", "HistoryList");
        var i = this && this.__decorate || function(t, e, o, i) {
                var n, s = arguments.length,
                    c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
                else
                    for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
                return s > 3 && c && Object.defineProperty(e, o, c), c
            },
            n = this && this.__awaiter || function(t, e, o, i) {
                return new(o || (o = Promise))(function(n, s) {
                    function c(t) {
                        try {
                            r(i.next(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(t) {
                        try {
                            r(i.throw(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function r(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(c, a)
                    }
                    r((i = i.apply(t, e || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const s = t("../../../Component/ListView/ScrollList"),
            c = t("../../../Helper/EventSystem"),
            a = t("../../../Helper/LayerSystem"),
            r = t("./Exchange"),
            h = t("./HistoryDefine"),
            {
                ccclass: l,
                property: d
            } = cc._decorator;
        let u = class extends s.default {
            constructor() {
                super(...arguments), this.layers = [], this.RoundID = "", this.count = 11, this.Max = !1, this.SendPacket = !1
            }
            onLoad() {
                try {
                    c.EventSystem.Event(c.RegisterLayer).Insert(this.RegisterLayer, this), this.layers.forEach(t => {
                        a.default.RegisterLayer(t.name, t.root)
                    }), super.onLoad(), this.count = 10, window[this.node.name] = this
                } catch (t) {
                    console.log("[HistoryList] onLoad: ", t)
                }
            }
            OnScroll(t) {
                super.OnScroll(t), t.getScrollOffset().y / t.getMaxScrollOffset().y >= .99 && !this.Max && !this.SendPacket && (this.SendPacket = !0, this.GetHistory(this.count + 10))
            }
            onDestroy() {
                c.EventSystem.Event(c.RegisterLayer).Remove(this.RegisterLayer, this), super.onDestroy(), this.layers.forEach(t => {
                    a.default.UnregisterLayer(t.name, t.root)
                })
            }
            RegisterLayer() {
                this.layers.forEach(t => {
                    a.default.RegisterLayer(t.name, t.root)
                })
            }
            GetHistory(t = this.count) {
                return n(this, void 0, void 0, function*() {
                    const e = t > 11 ? t : 11,
                        o = yield r.Exchange.GetHistory(this.RoundID, e);
                    this.SendPacket = !1;
                    const {
                        DataList: i
                    } = o.cmd_data;
                    this.SetData(i), this.count = i.length, this.Max = t > this.count
                })
            }
            ResetScrollViewPos() {
                this.scrollView.stopAutoScroll(), this.scrollView.scrollToTop(), this.UpdateShowBox(), this.offset = this.scrollView.getScrollOffset()
            }
        };
        i([d({
            type: h.HistoryLayerSetting
        })], u.prototype, "layers", void 0), u = i([l], u), o.default = u, cc._RF.pop()
    }, {
        "../../../Component/ListView/ScrollList": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../Helper/LayerSystem": void 0,
        "./Exchange": "Exchange",
        "./HistoryDefine": "HistoryDefine"
    }],
    HistoryObject: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "5708fN+SzlIY7cK6pWIqd1K", "HistoryObject");
        var i = this && this.__decorate || function(t, e, o, i) {
                var n, s = arguments.length,
                    c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
                else
                    for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
                return s > 3 && c && Object.defineProperty(e, o, c), c
            },
            n = this && this.__awaiter || function(t, e, o, i) {
                return new(o || (o = Promise))(function(n, s) {
                    function c(t) {
                        try {
                            r(i.next(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(t) {
                        try {
                            r(i.throw(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function r(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(c, a)
                    }
                    r((i = i.apply(t, e || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const s = t("../../../Component/ListView/ScrollObject"),
            c = t("../../../Helper/EventSystem"),
            a = t("../../../Net/ClickLog"),
            r = t("../../../Net/ClickLogEnum"),
            h = t("./GetIcon"),
            l = t("./LuckyShopDefine"),
            d = t("./RewardDefine"),
            {
                ccclass: u,
                property: p
            } = cc._decorator;
        let y = class extends s.default {
            constructor() {
                super(...arguments), this.background = (new s.Unit).Init(s.UnitType.Sprite), this.divide1 = (new s.Unit).Init(s.UnitType.Sprite), this.icon = (new s.Unit).Init(s.UnitType.Node), this.description = (new s.Unit).Init(s.UnitType.Label), this.time = (new s.Unit).Init(s.UnitType.Label), this.info = (new s.Unit).Init(s.UnitType.Label), this.button = (new s.Unit).Init(s.UnitType.Node), this._button = null, this.content = null, this.Recycle = null
            }
            UnitForEach(t) {
                [this.background, this.divide1, this.icon, this.description, this.time, this.info, this.button].forEach(t)
            }
            onLoad() {
                try {
                    this.UnitForEach(t => {
                        this.units.push(t)
                    }), this._button = this.button.node.getComponent(cc.Button), this._button.interactable = !1;
                    const e = new cc.Component.EventHandler;
                    e.target = this.node, e.component = "HistoryObject", e.handler = "OnClick", this._button.clickEvents.push(e)
                } catch (t) {
                    console.log("[HistoryObject] onLoad: ", t)
                }
            }
            onDestroy() {
                h.Clear()
            }
            set data(t) {
                const {
                    CreateTime: e,
                    ExtraData: o,
                    Source: i,
                    Target: n
                } = t, s = new Date(e), {
                    Prefab: a,
                    Name: r
                } = c.EventSystem.Function(d.GetConfig)(n.ItemId);
                this.description.content = (null == r ? void 0 : r.replace("$Amount", n.Amount)) + (o ? "\n" : ""), this.time.content = this.Convert(s), o ? (this.info.content = o, this.info.node.active = !0, this.button.node.active = !0, this._button.interactable = !0) : (this.info.node.active = !1, this.button.node.active = !1), this.LazyLoading(a)
            }
            LazyLoading(t) {
                return n(this, void 0, void 0, function*() {
                    if (this.content && this.content.name === t) return;
                    this.content && this.Recycle();
                    const e = yield h.GetRewardInstance(t);
                    e && (this.content || (this.content = e, this.Recycle = () => {
                        this.content && (this.content.active = !1, h.PutRewardInstance(this.content), this.content = null)
                    }), this.content && (this.content.parent = this.icon.node, this.content.active = !0))
                })
            }
            Convert(t) {
                let e = "";
                return (e = t.toLocaleDateString("en-US", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit"
                })) + "\n" + t.toLocaleString("en-US", {
                    hour: "2-digit",
                    minute: "2-digit"
                })
            }
            OnClick(t) {
                return n(this, void 0, void 0, function*() {
                    const t = this.info.label.string;
                    if (a.ClickLog.SendLog(r.LogName.PlayerAction, r.LogType_PlayerAction.LuckyShop, r.LogEvent_LuckyShop.HistoryCopy), navigator.clipboard && window.isSecureContext) yield navigator.clipboard.writeText(t);
                    else {
                        const o = document.createElement("textarea");
                        o.value = t, o.style.position = "absolute", o.style.left = "-999999px", document.body.prepend(o), o.select();
                        try {
                            document.execCommand("copy")
                        } catch (e) {
                            console.error(e)
                        } finally {
                            o.remove()
                        }
                    }
                    c.EventSystem.Event(l.CopyMessage).Notify()
                })
            }
        };
        i([p({
            type: s.Unit,
            displayName: "\u80cc\u666f"
        })], y.prototype, "background", void 0), i([p({
            type: s.Unit,
            displayName: "\u5206\u9694 1"
        })], y.prototype, "divide1", void 0), i([p({
            type: s.Unit,
            displayName: "\u54c1\u9805"
        })], y.prototype, "icon", void 0), i([p({
            type: s.Unit,
            displayName: "\u54c1\u9805\u63cf\u8ff0"
        })], y.prototype, "description", void 0), i([p({
            type: s.Unit,
            displayName: "\u6642\u9593"
        })], y.prototype, "time", void 0), i([p({
            type: s.Unit,
            displayName: "\u8cc7\u8a0a"
        })], y.prototype, "info", void 0), i([p({
            type: s.Unit,
            displayName: "\u6309\u9215"
        })], y.prototype, "button", void 0), y = i([u], y), o.default = y, cc._RF.pop()
    }, {
        "../../../Component/ListView/ScrollObject": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "./GetIcon": "GetIcon",
        "./LuckyShopDefine": "LuckyShopDefine",
        "./RewardDefine": "RewardDefine"
    }],
    IconTimer: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "44ddbvWMENH8qMURjs20AN0", "IconTimer");
        var i = this && this.__decorate || function(t, e, o, i) {
            var n, s = arguments.length,
                c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
            else
                for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
            return s > 3 && c && Object.defineProperty(e, o, c), c
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const n = t("../../../Component/DateTimeCountDown"),
            {
                ccclass: s,
                property: c
            } = cc._decorator;
        let a = class extends cc.Component {
            constructor() {
                super(...arguments), this.timeCountDown = null, this.bg = null, this.endTime = 0, this.timerScheduled = !1
            }
            onLoad() {
                this.bg.active = !1, this.timeCountDown.node.active = !1
            }
            onEnable() {
                try {
                    this.EventTimeCheck()
                } catch (t) {
                    console.log("[IconTimer] onLoad: ", t)
                }
            }
            SetEndTime(t) {
                this.endTime = t.getTime() / 1e3, this.timerScheduled ? this.EventTimeCheck() : (this.timerScheduled = !0, this.schedule(this.EventTimeCheck, 1, cc.macro.REPEAT_FOREVER))
            }
            EventTimeCheck() {
                if (this.endTime > 0) {
                    let t = Date.now() / 1e3,
                        e = this.endTime - t;
                    if (e <= 0) return this.unschedule(this.EventTimeCheck), void this.TimesUp();
                    this.UpdateTime(Math.floor(e))
                } else this.TimesUp()
            }
            UpdateTime(t) {
                if (null != this.timeCountDown) {
                    this.timeCountDown.UpdateUIWithDay(t), this.timeCountDown.node.active = !0, this.bg.activeInHierarchy || (this.bg.active = !0);
                    const e = Math.floor(t / 3600);
                    this.timeCountDown.node.color = e < 24 ? cc.Color.RED : new cc.Color(128, 255, 128)
                }
            }
            TimesUp() {
                this.endTime = 0, this.bg.active = !1, this.timeCountDown.node.active = !1, this.timerScheduled = !1
            }
        };
        i([c(n.DateTimeCountDown)], a.prototype, "timeCountDown", void 0), i([c(cc.Node)], a.prototype, "bg", void 0), a = i([s], a), o.default = a, cc._RF.pop()
    }, {
        "../../../Component/DateTimeCountDown": void 0
    }],
    IconTips: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "38b6dW70J1GJLO55p668akK", "IconTips");
        var i = this && this.__decorate || function(t, e, o, i) {
            var n, s = arguments.length,
                c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
            else
                for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
            return s > 3 && c && Object.defineProperty(e, o, c), c
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.DialogType = void 0;
        const {
            ccclass: n,
            property: s
        } = cc._decorator;
        var c;
        (function(t) {
            t[t.Collect = 0] = "Collect", t[t.Redeem = 1] = "Redeem", t[t.Default = 2] = "Default"
        })(c = o.DialogType || (o.DialogType = {}));
        let a = class extends cc.Component {
            constructor() {
                super(...arguments), this.dialog = null, this.dialogMessage = null, this.dialogBg = null, this.shakeAnim = null, this.shineIcon = null, this.STR_Collect = "Rewards have not been claimed yet.", this.STR_Redeem = "Prizes have not been redeemed yet.", this.STR_Default = "Complete Mission to claim prizes!"
            }
            onLoad() {
                this.CloseTips(), this.StopEffect()
            }
            ShowCollect() {
                this.dialog.active = !0, cc.tween(this.dialog).to(.75, {
                    scaleX: -1.1,
                    scaleY: 1.1
                }).to(.75, {
                    scaleX: -1,
                    scaleY: 1
                }).union().repeatForever().start(), this.SetDialogMsg(c.Collect), this.PlayEffect()
            }
            ShowRedeem() {
                this.dialog.active = !0, this.SetDialogMsg(c.Redeem), cc.tween(this.dialog).to(.75, {
                    scaleX: -1.1,
                    scaleY: 1.1
                }).to(.75, {
                    scaleX: -1,
                    scaleY: 1
                }).union().repeatForever().start(), this.PlayEffect()
            }
            ShowDefault() {
                this.dialog.active = !0, this.SetDialogMsg(c.Default), cc.Tween.stopAllByTarget(this.dialog), this.dialog.scaleX = -1, this.dialog.scaleY = 1
            }
            CloseTips() {
                this.dialog.active = !1, this.dialogBg.active = !1, cc.Tween.stopAllByTarget(this.dialog), this.dialog.scale = 1
            }
            PlayEffect() {
                this.shakeAnim.play(), this.shineIcon.active = !0
            }
            StopEffect() {
                this.shakeAnim.stop(), this.shakeAnim.setCurrentTime(0), this.shineIcon.active = !1
            }
            SetDialogMsg(t) {
                switch (t) {
                    case c.Collect:
                        this.dialogMessage.string = this.STR_Collect;
                    case c.Redeem:
                        this.dialogMessage.string = this.STR_Redeem;
                    case c.Default:
                        this.dialogMessage.string = this.STR_Default
                }
            }
        };
        i([s({
            type: cc.Node
        })], a.prototype, "dialog", void 0), i([s({
            type: cc.Label
        })], a.prototype, "dialogMessage", void 0), i([s({
            type: cc.Node
        })], a.prototype, "dialogBg", void 0), i([s(cc.Animation)], a.prototype, "shakeAnim", void 0), i([s(cc.Node)], a.prototype, "shineIcon", void 0), a = i([n], a), o.default = a, cc._RF.pop()
    }, {}],
    LuckyShopDefine: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "18218+QinNOnpDhwuuAKQDp", "LuckyShopDefine"), Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.CopyMessage = o.InfoButtonVisible = o.Tutorial = o.SyncData = o.AssetKey = o.LuckyShopTutorialSteps = o.ShopAsset = void 0, o.AssetKey = "EC-000002", o.SyncData = "[LuckyShop]_sync_data", o.Tutorial = "[LuckyShop]_tutorial", o.InfoButtonVisible = "[LuckyShop]_info_button_visible", o.CopyMessage = "[LuckyShop]_copy_message",
            function(t) {
                t.Add = "[Shop_Asset]_Add", t.Sub = "[Shop_Asset]_Sub", t.Set = "[Shop_Asset]_Set", t.Get = "[Shop_Asset]_Get"
            }(o.ShopAsset || (o.ShopAsset = {})),
            function(t) {
                t[t.ClickIcon = 0] = "ClickIcon", t[t.Collect = 1] = "Collect", t[t.Change = 2] = "Change", t[t.Exchange_1 = 3] = "Exchange_1", t[t.Exchange_2 = 4] = "Exchange_2", t[t.End = 5] = "End", t[t.Info_Mission = 6] = "Info_Mission", t[t.Info_Reward = 7] = "Info_Reward"
            }(o.LuckyShopTutorialSteps || (o.LuckyShopTutorialSteps = {})), cc._RF.pop()
    }, {}],
    LuckyShopTutorial: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "a4885xsJyBPn7MHBtQ9OnHd", "LuckyShopTutorial");
        var i = this && this.__decorate || function(t, e, o, i) {
            var n, s = arguments.length,
                c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
            else
                for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
            return s > 3 && c && Object.defineProperty(e, o, c), c
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const n = t("../../../Helper/EventSystem"),
            s = t("./LuckyShopDefine"),
            {
                ccclass: c,
                property: a
            } = cc._decorator;
        class r {
            constructor() {
                this.node = null, this.parent = null, this.container = null
            }
        }
        let h = class extends cc.Component {
            constructor() {
                super(...arguments), this.bg = null, this.ui = null, this.step = [], this.cover = null, this.hand = null, this.next = null, this.config = null, this.list = [], this.index = s.LuckyShopTutorialSteps.End, this.isInfo = !1, this.isInteractable = !1
            }
            OnOrientationChange() {
                this.list.forEach(t => {
                    const e = t.parent.convertToWorldSpaceAR(cc.Vec3.ZERO);
                    t.container.position = this.ui.convertToNodeSpaceAR(e)
                }), this.cover.active = !this.isInteractable, this.next.active = !this.isInteractable && !this.isInfo, this.MoveHand()
            }
            Show(t, e, o, i = !1) {
                this.index >= t && !i || (this.Close(), this.isInfo = i, this.isInteractable = o, i || (this.index = t), this.step.forEach((e, o) => {
                    e && (e.active = o === t)
                }), e.forEach(t => {
                    const e = this.CreateObject(t);
                    this.list.push(e)
                }), this.cover.active = !o, this.next.active = !o && !i, this.MoveHand())
            }
            Close() {
                this.list.forEach(t => {
                    t.node.parent = t.parent, t.container.destroy()
                }), this.list = []
            }
            CreateObject(t) {
                const e = new r,
                    o = t.parent,
                    i = new cc.Node;
                i.name = "container", i.parent = this.ui, e.node = t, e.parent = t.parent, e.container = i;
                const n = o.convertToWorldSpaceAR(cc.Vec3.ZERO);
                return i.position = this.ui.convertToNodeSpaceAR(n), t.parent = i, e
            }
            OnClick() {
                this.isInfo ? n.EventSystem.Event(s.Tutorial).Notify(s.LuckyShopTutorialSteps.End, !0) : n.EventSystem.Event(s.Tutorial).Notify(this.index + 1)
            }
            MoveHand() {
                const t = !this.cover.active;
                if (this.hand.active = t, t) {
                    const t = this.list[0].node.convertToWorldSpaceAR(cc.Vec3.ZERO).add(new cc.Vec3(.5 * this.hand.width, -.5 * this.hand.height));
                    this.hand.position = this.hand.parent.convertToNodeSpaceAR(t)
                }
            }
        };
        i([a({
            type: cc.Node,
            displayName: "\u58d3\u9ed1"
        })], h.prototype, "bg", void 0), i([a({
            type: cc.Node,
            displayName: "UI"
        })], h.prototype, "ui", void 0), i([a({
            type: cc.Node,
            displayName: "\u6b65\u9a5f"
        })], h.prototype, "step", void 0), i([a({
            type: cc.Node,
            displayName: "\u963b\u64cb\u6309\u9215\u9ede\u64ca"
        })], h.prototype, "cover", void 0), i([a({
            type: cc.Node,
            displayName: "\u5f15\u5c0e\u9ede\u64ca"
        })], h.prototype, "hand", void 0), i([a({
            type: cc.Node,
            displayName: "\u9ede\u64ca\u63d0\u793a"
        })], h.prototype, "next", void 0), h = i([c], h), o.default = h, cc._RF.pop()
    }, {
        "../../../Helper/EventSystem": void 0,
        "./LuckyShopDefine": "LuckyShopDefine"
    }],
    LuckyShop: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ff4bbtU7d5BR6xbiJAkwNDp", "LuckyShop");
        var i = this && this.__decorate || function(t, e, o, i) {
                var n, s = arguments.length,
                    c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
                else
                    for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
                return s > 3 && c && Object.defineProperty(e, o, c), c
            },
            n = this && this.__awaiter || function(t, e, o, i) {
                return new(o || (o = Promise))(function(n, s) {
                    function c(t) {
                        try {
                            r(i.next(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(t) {
                        try {
                            r(i.throw(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function r(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(c, a)
                    }
                    r((i = i.apply(t, e || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const s = t("../../../Achieve/AchieveMgr"),
            c = t("../../../Achieve/AchieveName"),
            a = t("../../../Achieve/TaskDefine"),
            r = t("../../../Component/CookieCtrl"),
            h = t("../../../Component/NodeDrag"),
            l = t("../../../Connect/Script/ConnectPanelMgr"),
            d = t("../../../FullScreenHandler"),
            u = t("../../../Helper/Download"),
            p = t("../../../Helper/EventSystem"),
            y = t("../../../Net/ClickLog"),
            m = t("../../../Net/ClickLogEnum"),
            v = t("../../../Quest/Scripts/QuestEvents"),
            f = t("./GameList"),
            S = t("./HistoryList"),
            g = t("./LuckyShopDefine"),
            b = t("./LuckyShopTutorial"),
            C = t("./MissionAsset"),
            w = t("./MissionDefine"),
            E = t("./MissionList"),
            L = t("./RewardDefine"),
            R = t("./RewardList"),
            T = t("../../../../GameCommon/CommonRoot/Script/CommonRoot"),
            _ = t("./IconTimer"),
            O = t("../../../PopUpMgr/Scripts/PriorityCustomEvent"),
            I = t("./IconTips"),
            {
                ccclass: k,
                property: N
            } = cc._decorator,
            P = c.AchieveName.LuckyShop;
        var D;
        (function(t) {
            t[t.Mission = 0] = "Mission", t[t.Reward = 1] = "Reward", t[t.History = 2] = "History"
        })(D || (D = {}));
        let G = class extends cc.Component {
            constructor() {
                super(...arguments), this.root = null, this.anchor = null, this.mission = null, this.changeGame = null, this.reward = null, this.history = null, this.button_D = [], this.button_L = [], this.rewardRedPoint = [], this.asset = null, this.tutorial = null, this.roundID = null, this.iconTimer = null, this.icon = null, this.iconNew = null, this.iconTips = null, this.info = null, this.copyMessage = null, this.panel = null, this.iconInterActable = !0, this.inited = !1, this.achieve = null, this.type = D.Mission, this.pickGame = !1, this.isTutorial = !1, this.assetAmount = 0, this.config = null, this.callback = null, this.InLobby = !1, this.InFish = !1, this.syncID = void 0, this.timeout = !1, this.timeoutID = void 0, this.isSupport = !0, this.TimeOut = 30, this.PromptTimeID = void 0, this.PromptTimeOut = 60, this.tween = null
            }
            get RoundID() {
                let t = "";
                return this.achieve && (t = this.achieve.data.roundId), t
            }
            onLoad() {
                if (window.luckyshop) return console.warn("[LuckyShop] Repeated"), this.anchor.active = !1, this.root.active = !1, this.icon.node.active = !1, void(this.node.active = !1);
                window.luckyshop = this, p.EventSystem.Event(p.ScreenOrientationState.ChangeOrientation).Insert(this.OnOrientationChange, this), p.EventSystem.Event(g.InfoButtonVisible).Insert(this.InfoButtonVisible, this), p.EventSystem.Event(g.Tutorial).Insert(this.Tutorial, this), p.EventSystem.Event(g.CopyMessage).Insert(this.ShowCopyMessage, this), p.EventSystem.Event(v.QuestEvent.OnQuestInited).Insert(this.OnQuestInited, this), p.EventSystem.Event(v.QuestEvent.OnQuestRefresh).Insert(this.OnQuestRefresh, this), p.EventSystem.Event(w.ChangeTo).Insert(this.ChangeTo, this), p.EventSystem.Event(w.ChooseGame).Insert(this.OnPickGame, this), p.EventSystem.Event(g.SyncData).Insert(this.SyncData, this), p.EventSystem.Event(L.History).Insert(this.OnViewHistory, this), p.EventSystem.RegisterFunction(g.ShopAsset.Get, () => this.assetAmount), p.EventSystem.Event(g.ShopAsset.Add).Insert(this.Add, this), p.EventSystem.Event(g.ShopAsset.Sub).Insert(this.Subtrack, this), p.EventSystem.Event(g.ShopAsset.Set).Insert(this.Set, this), null != p.InGameEvent && p.EventSystem.Event(p.InGameEvent.SetIconInteractable).Insert(this.SetIconInteract, this), this.icon.Event_ClickItem = this.onIconClicked.bind(this), this.icon.node.active = !0, this.icon.node.setScale(cc.v2(.75, .75)), this.button_D.forEach((t, e) => {
                    t.clickEvents = [];
                    let o = new cc.Component.EventHandler;
                    o.component = "LuckyShop", o.target = this.node, o.handler = "onClickCategory", o.customEventData = e.toString(), t.clickEvents.push(o)
                }), this.info.clickEvents = [];
                let t = new cc.Component.EventHandler;
                t.component = "LuckyShop", t.target = this.node, t.handler = "Info", this.info.clickEvents.push(t), this.iconTips.CloseTips();
                const e = window.gd_nowLOGO;
                (() => n(this, void 0, void 0, function*() {
                    const t = yield u.Download.JSON(e + "/LuckyShop");
                    console.warn("[LuckyShop]", t), this.mission.config = t.Mission, this.reward.config = t.Reward, this.tutorial.config = t.Tutorial, this.config = t, this.isSupport = this.CheckSupportGmae(t.SupportGame), this.isSupport || (this.icon.node.active = !1)
                }))(), this.CheckLobby() && (p.EventSystem.Event(p.RegistPopupBanner).Notify("LuckyShopPopup", !0, () => {
                    this.ShowPanel(), y.ClickLog.SendLog(m.LogName.PlayerAction, m.LogType_PlayerAction.LuckyShop, m.LogEvent_LuckyShop.Popup)
                }), p.EventSystem.Event(p.RegistPopupBanner).Notify("LuckyShopBanner", !1, () => {
                    this.ShowPanel(), y.ClickLog.SendLog(m.LogName.PlayerAction, m.LogType_PlayerAction.LuckyShop, m.LogEvent_LuckyShop.Banner)
                }), p.EventSystem.Event(p.RegistPopupEvent).Notify(O.PopEventPriority.LuckyShop, this.CheckCollect.bind(this), null)), this.InFish = this.CheckInFishGame(), this.icon.setLocked(this.InFish), this.InFish && p.EventSystem.Event(p.FishHunter.RegisterMouseObjs).Notify(this.node.children), this.ReadPosition(this.InFish)
            }
            start() {
                this.anchor.active = !1, this.root.active = !1
            }
            CheckSupportGmae(t) {
                let e = SS.Common.GameEnvironment.CurrentGameNow;
                if (console.warn("[LuckyShop] CheckSupportGmae ", t, ", curGame = " + e), this.CheckLobby() || 0 == t.length) return !0; {
                    let o = !1;
                    return t.forEach(t => {
                        t == e && (o = !0)
                    }), o
                }
            }
            CheckLobby() {
                let t = SS.Common.GameEnvironment.CurrentGameNow;
                return null == t || "" === t
            }
            CheckInFishGame() {
                let t = SS.Common.GameEnvironment.GetGameIdByName(SS.Common.GameEnvironment.CurrentGameNow);
                return !this.CheckLobby() && null != t && "" != t && "FISH" == SS.Common.GameEnvironment.GameSetting.Icon[t].IconWaysText
            }
            CheckCollect() {
                this.EnterLobby(!0, null)
            }
            EnterLobby(t, e) {
                var o, i, n;
                console.warn("[LuckyShop] EnterLobby");
                const s = this.iconNew.active;
                if (this.icon.node.setScale(cc.Vec2.ONE), this.icon.node.active = !0, !this.InLobby) {
                    if (this.InLobby = !0, this.changeGame.Init(), this.mission.data = this.achieve, t && (this.mission.InProgress || this.reward.InProgress)) {
                        const t = null === (n = null === (i = null === (o = this.achieve) || void 0 === o ? void 0 : o.task) || void 0 === i ? void 0 : i.info) || void 0 === n ? void 0 : n.values();
                        let e = !1,
                            s = this.CheckReward();
                        this.mission.InProgress && (null == t || t.forEach(t => {
                            e = e || t.Status === a.Status.COMPLETE
                        })), this.iconNew.active = e, e ? this.iconTips.ShowCollect() : s ? this.iconTips.ShowRedeem() : this.iconTips.ShowDefault()
                    } else this.iconTips.CloseTips(), this.inited || (console.warn("[LuckyShop] EnterLobby \u4e0d\u5728\u4efb\u52d9\u671f\u9593\uff0c\u547c\u53eb init"), this.SetIconInteract(!1), this.OnQuestInited());
                    const e = P + SS.Network.LoginModel.LoginInfo.pin_id,
                        s = r.CookieCtrl.GetCookie(e);
                    t && s !== this.RoundID && (this.icon.setLocked(!0), this.isTutorial = this.mission.InProgress && this.reward.InProgress, p.EventSystem.Event(g.Tutorial).Notify(g.LuckyShopTutorialSteps.ClickIcon)), this.iconTips.dialog.activeInHierarchy && !this.isTutorial && (this.PromptTimeID = setTimeout(() => {
                        this.iconTips.CloseTips()
                    }, 1e3 * this.PromptTimeOut))
                }
                "" == SS.Common.GameEnvironment.ChangeToGameName && s && !this.isTutorial && this.inited && (this.callback = e, this.ShowPanel())
            }
            onDestroy() {
                this.unscheduleAllCallbacks(), this.button_D.forEach(t => {
                    t.clickEvents = []
                }), p.EventSystem.Event(p.ScreenOrientationState.ChangeOrientation).Remove(this.OnOrientationChange, this), p.EventSystem.Event(g.InfoButtonVisible).Remove(this.InfoButtonVisible, this), p.EventSystem.Event(g.Tutorial).Remove(this.Tutorial, this), p.EventSystem.Event(g.CopyMessage).Remove(this.ShowCopyMessage, this), p.EventSystem.Event(v.QuestEvent.OnQuestInited).Remove(this.OnQuestInited, this), p.EventSystem.Event(v.QuestEvent.OnQuestRefresh).Remove(this.OnQuestRefresh, this), p.EventSystem.Event(w.ChangeTo).Remove(this.ChangeTo, this), p.EventSystem.Event(w.ChooseGame).Remove(this.OnPickGame, this), p.EventSystem.Event(g.SyncData).Remove(this.SyncData, this), p.EventSystem.Event(L.History).Remove(this.OnViewHistory, this), p.EventSystem.UnregisterFunction(g.ShopAsset.Get), p.EventSystem.Event(g.ShopAsset.Add).Remove(this.Add, this), p.EventSystem.Event(g.ShopAsset.Sub).Remove(this.Subtrack, this), p.EventSystem.Event(g.ShopAsset.Set).Remove(this.Set, this), null != p.InGameEvent && p.EventSystem.Event(p.InGameEvent.SetIconInteractable).Remove(this.SetIconInteract, this), this.icon.node && (this.icon.node.parent = this.node, this.icon._onDestroy()), window.luckyshop = null
            }
            InfoButtonVisible(t) {
                this.info.node.active = t
            }
            onMenuBtnClicked() {
                this.inited ? (y.ClickLog.SendLog(m.LogName.PlayerAction, m.LogType_PlayerAction.LuckyShop, m.LogEvent_LuckyShop.Icon), this.ShowPanel()) : console.error("[LuckyShop] LuckyShop not inited")
            }
            onIconClicked() {
                if (this.inited) {
                    if (y.ClickLog.SendLog(m.LogName.PlayerAction, m.LogType_PlayerAction.LuckyShop, m.LogEvent_LuckyShop.IconInGame), this.CheckLobby() && !this.InLobby) return void this.EnterLobby(!0, null);
                    this.ShowPanel(), this.iconTips.StopEffect()
                } else console.error("[LuckyShop] LuckyShop not inited")
            }
            ShowPanel() {
                console.warn("[LuckyShop] ShowPanel, iconInterActable = " + this.iconInterActable), this.iconInterActable && !this.IsActive && (this.changeGame.Init(), this.iconTips.CloseTips(), this.icon.node.active = !1, this.icon.setLocked(!0), this.root.active = !0, this.anchor.active = !0, this.type !== D.Mission || this.mission.InProgress || (this.type = D.Reward), this.type !== D.Reward || this.reward.InProgress || (this.type = D.History), this.ChangeCategory(this.type), p.EventSystem.Event(p.SystemMsg.Open).Notify(this.anchor, cc.Size.ZERO, cc.Size.ZERO, 200, null, !1, !0, this.OnClose.bind(this)), this.timeout && (this.timeout = !1, this.SyncData()), null != this.PromptTimeID && clearTimeout(this.timeoutID), p.EventSystem.Event(g.Tutorial).Notify(g.LuckyShopTutorialSteps.Collect))
            }
            ClosePanel() {
                if (this.IsActive) {
                    p.EventSystem.Event(p.SystemMsg.Close).Notify();
                    const t = this.callback;
                    this.callback = null, t && t()
                }
            }
            OnClose() {
                l.ConnectPanelMgr.Instance.DisableConnectPanel(0), console.warn("[LuckyShop] OnClose this.InLobby = " + this.InLobby), this.root.active = !1, this.icon.node.active = this.InLobby || !this.InLobby && this.mission.InProgress, this.icon.setLocked(this.InFish), this.timeout = !1, this.ChangeTo("Cancel"), this.anchor.active = !1, clearTimeout(this.timeoutID), this.timeoutID = setTimeout(() => {
                    this.timeout = !0
                }, 1e3 * this.TimeOut), this.InLobby && p.EventSystem.Event(p.CheckNextPopup).Notify()
            }
            OnQuestInited() {
                return n(this, void 0, void 0, function*() {
                    this.root.active = !1, yield this.OnQuestRefresh()
                })
            }
            OnQuestRefresh() {
                return n(this, void 0, void 0, function*() {
                    this.getAchieveData(), this.reward.RoundID = this.RoundID, this.history.RoundID = this.RoundID, this.roundID.string = this.RoundID, yield this.SyncData(), !1 === this.isTutorial && (this.tutorial.Close(), this.tutorial.node.active = !1), this.inited || (this.inited = !0, this.SetIconInteract(!0)), this.mission.StartCountDown(), this.reward.StartCountDown()
                })
            }
            SyncData() {
                return n(this, void 0, void 0, function*() {
                    if (!this.isTutorial && this.isSupport) {
                        if (!this.InLobby && !this.mission.InProgress && this.inited) return this.IsActive && this.ClosePanel(), void(this.icon.node.active = !1);
                        this.IsActive && l.ConnectPanelMgr.Instance.ShowConnectPanel(0), yield this.GetShopData().catch(t => {
                            this.IsActive && (l.ConnectPanelMgr.Instance.DisableConnectPanel(0), -1 !== t && 0 !== t && this.ClosePanel())
                        }), this.IsActive && l.ConnectPanelMgr.Instance.DisableConnectPanel(0), this.isTutorial
                    }
                })
            }
            GetShopData() {
                return n(this, void 0, void 0, function*() {
                    console.warn("[LuckyShop] GetShopData"), yield Promise.all([this.history.GetHistory().catch(t => {
                        throw console.log("[LuckyShop] GetHistory ", t), t
                    }), this.reward.SendGetInfo().catch(t => {
                        throw console.log("[LuckyShop] GetInfo ", t), this.reward.shopInfo = null, this.type === D.Reward && (this.panel.active = !0), this.SetRewardRedPoint(!1), t
                    }), this.reward.SendGetProduct().catch(t => {
                        throw console.log("[LuckyShop] GetProduct ", t), this.reward.shopInfo = null, this.type === D.Reward && (this.panel.active = !0), this.SetRewardRedPoint(!1), -5001 === t ? -1 : t
                    })]).then(() => {
                        var t, e, o, i, n;
                        const s = null === (e = null === (t = this.reward) || void 0 === t ? void 0 : t.data) || void 0 === e ? void 0 : e.Asset;
                        s && (this.assetAmount = this.GetAsset(s), this.asset.Set(this.assetAmount));
                        const c = null === (n = null === (i = null === (o = this.achieve) || void 0 === o ? void 0 : o.task) || void 0 === i ? void 0 : i.info) || void 0 === n ? void 0 : n.values();
                        let r = !1;
                        this.mission.InProgress && (null == c || c.forEach(t => {
                            r = r || t.Status === a.Status.COMPLETE
                        })), this.iconNew.active = r;
                        let h = this.CheckReward();
                        this.SetRewardRedPoint(h), console.warn("[LuckyShop] this.iconNew.active = " + r), this.getAchieveData(), this.ChangeCategory(this.type)
                    }).catch(t => {
                        throw this.iconNew.active = !1, console.log("[LuckyShop] Sync Data Error", t), t
                    })
                })
            }
            getAchieveData() {
                var t, e, o, i;
                if (this.achieve = s.default.Instance.GetAchieve(P)[0], console.log("[LuckyShop] Get Achieve Data ", this.achieve), this.achieve) {
                    this.mission.data = this.achieve;
                    const n = null === (i = null === (o = null === (e = null === (t = this.achieve) || void 0 === t ? void 0 : t.task) || void 0 === e ? void 0 : e.info) || void 0 === o ? void 0 : o.values()[0]) || void 0 === i ? void 0 : i.EndTime;
                    n && this.iconTimer.SetEndTime(n)
                }
            }
            onClickCategory(t, e) {
                const o = Number(e);
                this.ChangeCategory(o), o === D.Reward && p.EventSystem.Event(g.Tutorial).Notify(g.LuckyShopTutorialSteps.Exchange_1)
            }
            ChangeCategory(t) {
                console.log("[LuckyShop] Change Category to ", D[t]), this.type = t, t !== D.Mission && (this.pickGame = !1, this.changeGame.node.active = !1), this.changeGame.node.active = t === D.Mission && this.pickGame, this.mission.node.active = t === D.Mission && !this.pickGame && this.mission.InProgress, this.reward.node.active = t === D.Reward && this.reward.InProgress, this.history.node.active = t === D.History, this.asset.node.active = this.mission.node.active || this.reward.node.active, this.info.node.active = this.mission.node.active || this.reward.node.active && null === this.reward.info, t === D.Mission && !this.mission.InProgress || t === D.Reward && !this.reward.InProgress ? this.panel.active = !0 : this.panel.active = !1, this.mission.ResetScrollViewPos(), this.reward.ResetScrollViewPos(), this.history.ResetScrollViewPos(), this.button_D.forEach((e, o) => {
                    e.node.active = o !== t
                }), this.button_L.forEach((e, o) => {
                    e.node.active = o === t
                })
            }
            OnOrientationChange(t) {
                return n(this, void 0, void 0, function*() {
                    yield SS.Common.WaitForSeconds(0), this.ChangeCategory(this.type), this.isSupport && (this.icon.node.active = !this.root.active && !this.InLobby && this.mission.InProgress), this.tutorial.OnOrientationChange()
                })
            }
            OnViewHistory(t) {
                return n(this, void 0, void 0, function*() {
                    if (y.ClickLog.SendLog(m.LogName.PlayerAction, m.LogType_PlayerAction.LuckyShop, m.LogEvent_LuckyShop.RewardCopy), navigator.clipboard && window.isSecureContext) yield navigator.clipboard.writeText(t);
                    else {
                        const o = document.createElement("textarea");
                        o.value = t, o.style.position = "absolute", o.style.left = "-999999px", document.body.prepend(o), o.select();
                        try {
                            document.execCommand("copy")
                        } catch (e) {
                            console.error(e)
                        } finally {
                            o.remove()
                        }
                    }
                    this.ShowCopyMessage()
                })
            }
            OnPickGame(t, e) {
                this.mission.node.active = !1, this.asset.node.active = !1, this.info.node.active = !1, this.pickGame = !0
            }
            ChangeTo(t) {
                "Cancel" === t ? (this.pickGame = !1, this.asset.node.active = !0, this.info.node.active = !0, this.mission.node.active = !0) : SS.Common.GameEnvironment.CurrentGameNow === t ? (this.pickGame = !1, this.asset.node.active = !0, this.info.node.active = !0, this.mission.node.active = !0, this.ClosePanel()) : (this.ClosePanel(), y.ClickLog.EntryPoint = m.LogEvent_EntryPoint.LuckyShop, this.InLobby ? p.EventSystem.Event(p.SwitchGame).Notify(t) : (SS.Common.GameEnvironment.ChangeToGameName = t, this.InFish && r.CookieCtrl.SetCookie("changeToGameName", t), T.CommonRoot.Instance ? T.CommonRoot.Instance.GetTopBarMgr.m_DelClickBackToLobby.Length > 0 && T.CommonRoot.Instance.GetTopBarMgr.m_DelClickBackToLobby.Notify() : p.EventSystem.Event(p.BackToLobby).Notify()))
            }
            Set(t) {
                this.assetAmount = this.GetAsset(t), this.asset.Set(this.assetAmount)
            }
            Add(t, e, o) {
                return n(this, void 0, void 0, function*() {
                    this.assetAmount = t ? this.GetAsset(t) : this.assetAmount + e, clearTimeout(this.syncID), this.syncID = setTimeout(this.SyncData.bind(this), 1500), yield this.asset.Add(this.assetAmount, e, o), p.EventSystem.Event(g.Tutorial).Notify(g.LuckyShopTutorialSteps.Change)
                })
            }
            Subtrack(t, e) {
                this.assetAmount = t ? this.GetAsset(t) : this.assetAmount + e, this.asset.Subtrack(this.assetAmount, e)
            }
            GetAsset(t) {
                return (null == t ? void 0 : t.hasOwnProperty(g.AssetKey)) ? t[g.AssetKey] : 0
            }
            Tutorial(t = g.LuckyShopTutorialSteps.ClickIcon, e = !1) {
                return n(this, void 0, void 0, function*() {
                    if (!this.isTutorial && !e) return this.tutorial.node.active = !1, void this.tutorial.Close();
                    if (t < g.LuckyShopTutorialSteps.End && !this.mission.InProgress && !this.reward.InProgress) return void(this.isTutorial && (this.isTutorial = !1, this.tutorial.Close(), this.SyncData()));
                    const o = [];
                    let i = !1;
                    switch (t) {
                        case g.LuckyShopTutorialSteps.ClickIcon:
                            o.push(this.icon.node), this.tutorial.index = -1, i = !0;
                            break;
                        case g.LuckyShopTutorialSteps.Collect:
                            this.ChangeCategory(D.Mission), this.mission.SelectTab("LOGIN"), yield SS.Common.WaitForSeconds(0);
                            const n = this.mission.elements.find(t => {
                                const e = t.object;
                                return e && null !== e.node && e._info.Status === a.Status.COMPLETE
                            });
                            if (n) {
                                const t = n.object;
                                o.push(t.button.node), o.push(t.effect.node), o.push(t.reward.node), o.push(t.rewardAmount.node), o.push(this.asset.node), i = !0;
                                break
                            }
                        case g.LuckyShopTutorialSteps.Exchange_1:
                            this.ChangeCategory(D.Reward), yield SS.Common.WaitForSeconds(.1), this.reward.SelectTab("Entries"), yield SS.Common.WaitForSeconds(0);
                            const s = this.reward.elements.find(t => {
                                const e = t.object;
                                return e && e.node && e._button.interactable
                            });
                            if (s) {
                                const t = s.object;
                                o.push(t.button.node), o.push(t.effect.node), o.push(t.cost.node), o.push(t.costAmount.node), o.push(this.asset.node), i = !0;
                                break
                            }
                        case g.LuckyShopTutorialSteps.End:
                            if (t = g.LuckyShopTutorialSteps.End, !e) {
                                const t = P + SS.Network.LoginModel.LoginInfo.pin_id;
                                r.CookieCtrl.SetCookie(t, this.RoundID), this.isTutorial = !1
                            }
                            break;
                        case g.LuckyShopTutorialSteps.Exchange_2:
                            o.push(this.reward.panel.confirm.node), o.push(this.asset.node), i = !0;
                            break;
                        case g.LuckyShopTutorialSteps.Change:
                            o.push(this.button_D[D.Reward].node), i = !0;
                            break;
                        case g.LuckyShopTutorialSteps.Info_Mission:
                            this.mission.SelectTab("LOGIN", !0), yield SS.Common.WaitForSeconds(0);
                            const c = this.mission.elements[1].object;
                            o.push(c.progress.node), o.push(c.description.node), o.push(c.button.node), o.push(c.reward.node), o.push(c.rewardAmount.node), o.push(c.statistics.node), o.push(this.mission.tabController.layout.node);
                            break;
                        case g.LuckyShopTutorialSteps.Info_Reward:
                            this.reward.SelectTab("Entries", !0), this.reward.scrollView.scrollTo(new cc.Vec2(0, 1)), this.reward.UpdateShowBox(), yield SS.Common.WaitForSeconds(0);
                            const h = this.reward.elements[0].object;
                            o.push(h.background.node), o.push(h.rewardBg.node), o.push(h.reward.node), o.push(h.description.node), o.push(h.button.node), o.push(h.cost.node), o.push(h.costAmount.node), o.push(h.remain.node), o.push(h.soldOut.node), o.push(h.soldOutBg.node), o.push(this.reward.tabController.layout.node), o.push(this.button_D[D.History].node);
                            break;
                        default:
                            e = !1
                    }
                    const n = t !== g.LuckyShopTutorialSteps.End;
                    this.tutorial.node.active = n, n ? (this.anchor.active = !0, this.tutorial.Show(t, o, i, e)) : (this.tutorial.Close(), e || this.SyncData())
                })
            }
            ShowCopyMessage() {
                this.tween && (this.tween.stop(), this.tween = null), this.copyMessage.active = !0, this.tween = cc.tween(this.copyMessage).to(.2, {
                    opacity: 255
                }).delay(1).to(.2, {
                    opacity: 0
                }).call(() => {
                    this.copyMessage.active = !1
                }).start()
            }
            ReadPosition(t) {
                if (t) this.icon.m_sRecordKey = "", this.icon.node.setPosition(new cc.Vec3(1215, 550));
                else {
                    const t = this.icon.m_sRecordKey;
                    let e = SS.Common.GameEnvironment.ProjectSetting[t + d.Orientation.Landscape];
                    null != e && "" != e || (SS.Common.GameEnvironment.ProjectSetting[t + d.Orientation.Landscape] = new cc.Vec3(1050, 620));
                    let o = SS.Common.GameEnvironment.ProjectSetting[t + d.Orientation.Portrait];
                    null != o && "" != o || (SS.Common.GameEnvironment.ProjectSetting[t + d.Orientation.Portrait] = new cc.Vec3(640, 1100))
                }
                this.icon.returnToRecordPos()
            }
            SetPosition() {
                if (this.InFish) return;
                let t = this.icon.m_sRecordKey;
                "" == t && (t = "LuckyShop");
                const e = SS.Common.GameEnvironment.ProjectSetting[t + d.Orientation.Landscape];
                e && (r.CookieCtrl.SetCookie(t + d.Orientation.Landscape + "x", e.x.toString()), r.CookieCtrl.SetCookie(t + d.Orientation.Landscape + "y", e.y.toString()));
                const o = SS.Common.GameEnvironment.ProjectSetting[t + d.Orientation.Portrait];
                o && (r.CookieCtrl.SetCookie(t + d.Orientation.Portrait + "x", o.x.toString()), r.CookieCtrl.SetCookie(t + d.Orientation.Portrait + "y", o.y.toString())), console.warn("[LuckyShop]SetPosition key = " + t + ", landscapePosition = " + e)
            }
            ResetTutorial() {
                const t = P + SS.Network.LoginModel.LoginInfo.pin_id;
                r.CookieCtrl.SetCookie(t, "0")
            }
            Info() {
                switch (this.type) {
                    case D.Mission:
                        this.Tutorial(g.LuckyShopTutorialSteps.Info_Mission, !0);
                        break;
                    case D.Reward:
                        this.Tutorial(g.LuckyShopTutorialSteps.Info_Reward, !0)
                }
            }
            SetIconInteract(t) {
                this.iconInterActable = t, this.icon.node.opacity = t ? 255 : 150
            }
            get IsActive() {
                return this.root.active && this.anchor.active
            }
            CheckReward() {
                let t = !1;
                return this.reward.InProgress && this.reward.group.forEach(e => {
                    this.reward.data[e].forEach(e => {
                        var o, i;
                        const n = (null === (o = null == e ? void 0 : e.Remain) || void 0 === o ? void 0 : o.hasOwnProperty("PlayerQuota")) ? e.Remain.PlayerQuota : null === (i = null == e ? void 0 : e.Remain) || void 0 === i ? void 0 : i.Limit;
                        if (null == n) return;
                        const s = e.Source[0].Amount;
                        this.assetAmount >= s && n > 0 && (t = !0)
                    })
                }), console.warn("[LuckyShop] CheckReward \u662f\u5426\u6709\u734e\u52f5\u53ef\u4ee5\u514c\u63db = " + t + ", this.reward.InProgress = " + this.reward.InProgress), t
            }
            SetRewardRedPoint(t) {
                this.rewardRedPoint.forEach(e => {
                    e.active = t
                })
            }
        };
        i([N({
            type: cc.Node
        })], G.prototype, "root", void 0), i([N({
            type: cc.Node
        })], G.prototype, "anchor", void 0), i([N({
            type: E.default,
            displayName: "\u4efb\u52d9\u5217\u8868"
        })], G.prototype, "mission", void 0), i([N({
            type: f.default,
            displayName: "\u904a\u6232\u5217\u8868"
        })], G.prototype, "changeGame", void 0), i([N({
            type: R.default,
            displayName: "\u514c\u63db\u5217\u8868"
        })], G.prototype, "reward", void 0), i([N({
            type: S.default,
            displayName: "\u6b77\u53f2\u5217\u8868"
        })], G.prototype, "history", void 0), i([N({
            type: cc.Button,
            displayName: "\u53ef\u9ede\u64ca\u7684\u6309\u9215"
        })], G.prototype, "button_D", void 0), i([N({
            type: cc.Button,
            displayName: "\u4e0d\u53ef\u9ede\u64ca\u7684\u6309\u9215"
        })], G.prototype, "button_L", void 0), i([N({
            type: cc.Node,
            displayName: "\u514c\u63db\u9801\u7c3d\u4e0a\u7684\u7d05\u9ede"
        })], G.prototype, "rewardRedPoint", void 0), i([N({
            type: C.default,
            displayName: "\u8cc7\u7522"
        })], G.prototype, "asset", void 0), i([N({
            type: b.default,
            displayName: "\u6559\u5b78"
        })], G.prototype, "tutorial", void 0), i([N({
            type: cc.Label
        })], G.prototype, "roundID", void 0), i([N({
            type: _.default
        })], G.prototype, "iconTimer", void 0), i([N({
            type: h.NodeDrag
        })], G.prototype, "icon", void 0), i([N({
            type: cc.Node
        })], G.prototype, "iconNew", void 0), i([N({
            type: I.default
        })], G.prototype, "iconTips", void 0), i([N({
            type: cc.Button
        })], G.prototype, "info", void 0), i([N({
            type: cc.Node
        })], G.prototype, "copyMessage", void 0), i([N({
            type: cc.Node
        })], G.prototype, "panel", void 0), G = i([k], G), o.default = G, cc._RF.pop()
    }, {
        "../../../../GameCommon/CommonRoot/Script/CommonRoot": void 0,
        "../../../Achieve/AchieveMgr": void 0,
        "../../../Achieve/AchieveName": void 0,
        "../../../Achieve/TaskDefine": void 0,
        "../../../Component/CookieCtrl": void 0,
        "../../../Component/NodeDrag": void 0,
        "../../../Connect/Script/ConnectPanelMgr": void 0,
        "../../../FullScreenHandler": void 0,
        "../../../Helper/Download": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "../../../PopUpMgr/Scripts/PriorityCustomEvent": void 0,
        "../../../Quest/Scripts/QuestEvents": void 0,
        "./GameList": "GameList",
        "./HistoryList": "HistoryList",
        "./IconTimer": "IconTimer",
        "./IconTips": "IconTips",
        "./LuckyShopDefine": "LuckyShopDefine",
        "./LuckyShopTutorial": "LuckyShopTutorial",
        "./MissionAsset": "MissionAsset",
        "./MissionDefine": "MissionDefine",
        "./MissionList": "MissionList",
        "./RewardDefine": "RewardDefine",
        "./RewardList": "RewardList"
    }],
    MissionAsset: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1512cqqHIxKqLaaDxLbkwop", "MissionAsset");
        var i = this && this.__decorate || function(t, e, o, i) {
                var n, s = arguments.length,
                    c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
                else
                    for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
                return s > 3 && c && Object.defineProperty(e, o, c), c
            },
            n = this && this.__awaiter || function(t, e, o, i) {
                return new(o || (o = Promise))(function(n, s) {
                    function c(t) {
                        try {
                            r(i.next(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(t) {
                        try {
                            r(i.throw(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function r(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(c, a)
                    }
                    r((i = i.apply(t, e || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const s = t("../../../Component/NumberCountUp"),
            {
                ccclass: c,
                property: a
            } = cc._decorator;
        let r = class extends cc.Component {
            constructor() {
                super(...arguments), this.value = null, this.differ = null, this.differY = 20, this.fly = null, this.animRoot = null
            }
            onDisable() {
                try {
                    this.animRoot.active = !1, this.animRoot.children.forEach(t => {
                        t.destroy()
                    })
                } catch (t) {
                    console.log("[MissionAsset] onDisable: ", t)
                }
            }
            Set(t) {
                this.value.SetNumberNow(t)
            }
            Add(t, e, o) {
                return n(this, void 0, void 0, function*() {
                    this.animRoot.active = !0, yield this.FlyAnimation(o, 1), this.value.CountUp(t, .5), yield this.DifferAnim(e, .5), cc.tween(this.value.node).to(.2, {
                        scale: 1.2
                    }).to(.1, {
                        scale: .9
                    }).to(.1, {
                        scale: 1
                    }).start
                })
            }
            Subtrack(t, e) {
                this.DifferAnim(e, .5), this.value.SetNumberNow(t)
            }
            FlyAnimation(t, e) {
                return n(this, void 0, void 0, function*() {
                    const o = this.animRoot.convertToNodeSpaceAR(t),
                        i = this.animRoot.convertToNodeSpaceAR(this.value.node.convertToWorldSpaceAR(cc.Vec3.ZERO)),
                        n = cc.instantiate(this.fly);
                    n.parent = this.animRoot, cc.tween(n).call(() => {
                        n.active = !0, n.position = o
                    }).to(e, {
                        position: i
                    }).call(() => {
                        n.active = !1
                    }).start(), yield SS.Common.WaitForSeconds(e)
                })
            }
            DifferAnim(t, e) {
                return n(this, void 0, void 0, function*() {
                    const o = cc.instantiate(this.differ);
                    o.getComponent(cc.Label).string = (t > 0 ? "+" : "") + t.toString(), o.opacity = 55, o.parent = this.animRoot, cc.tween(o).call(() => {
                        o.active = !0, o.opacity = 105
                    }).by(e, {
                        opacity: 150,
                        y: this.differY
                    }).call(() => {
                        o.destroy()
                    }).start(), yield SS.Common.WaitForSeconds(e)
                })
            }
        };
        i([a({
            type: s.NumberCountUp,
            displayName: "\u6578\u503c"
        })], r.prototype, "value", void 0), i([a({
            type: cc.Prefab,
            displayName: "\u5dee\u503c"
        })], r.prototype, "differ", void 0), i([a({
            type: cc.Float,
            displayName: "\u5dee\u503c\u4f4d\u79fb\u8ddd\u96e2"
        })], r.prototype, "differY", void 0), i([a({
            type: cc.Prefab,
            displayName: "\u8996\u7dda\u5f15\u5c0e\u7c92\u5b50"
        })], r.prototype, "fly", void 0), i([a({
            type: cc.Node,
            displayName: "\u8996\u7dda\u5f15\u5c0e\u7c92\u5b50"
        })], r.prototype, "animRoot", void 0), r = i([c], r), o.default = r, cc._RF.pop()
    }, {
        "../../../Component/NumberCountUp": void 0
    }],
    MissionDefine: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "42c7a1/qaBIw7K1cYwYsC4O", "MissionDefine");
        var i = this && this.__decorate || function(t, e, o, i) {
            var n, s = arguments.length,
                c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
            else
                for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
            return s > 3 && c && Object.defineProperty(e, o, c), c
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.GetGameName = o.GetDescription = o.SelectTab = o.Confirm = o.ChangeTo = o.ChooseGame = o.MissionLayerSetting = o.MissionElement = o.MissionObjectLayer = void 0;
        const {
            ccclass: n,
            property: s
        } = cc._decorator;
        var c, a;
        (function(t) {
            t.Background = "[Mission]_background", t.Description = "[Mission]_description", t.Progress = "[Mission]_progress", t.Statistics = "[Mission]_statistics", t.Reward = "[Mission]_reward", t.RewardAmount = "[Mission]_reward_amount", t.Button = "[Mission]_button", t.Foreground = "[Mission]_foreground", t.Icon = "[Mission]_icon", t.IconFrame = "[Mission]_icon_frame", t.Claimed = "[Mission]_claimed", t.Go = "[Mission]_go", t.Effect = "[Mission]_effect"
        })(c = o.MissionObjectLayer || (o.MissionObjectLayer = {})),
        function(t) {
            t[t.Background = 0] = "Background", t[t.Description = 1] = "Description", t[t.Progress = 2] = "Progress", t[t.Statistics = 3] = "Statistics", t[t.Reward = 4] = "Reward", t[t.RewardAmount = 5] = "RewardAmount", t[t.Button = 6] = "Button", t[t.Foreground = 7] = "Foreground", t[t.Icon = 8] = "Icon", t[t.IconFrame = 9] = "IconFrame", t[t.Claimed = 10] = "Claimed", t[t.Go = 11] = "Go", t[t.Effect = 12] = "Effect"
        }(a = o.MissionElement || (o.MissionElement = {})), o.ChooseGame = "[Mission]_choose_game", o.ChangeTo = "[Mission]_change_to", o.Confirm = "[Mission]_confirm", o.SelectTab = "[Mission]_select_tab", o.GetDescription = "[Mission]_get_description", o.GetGameName = "[Mission]_get_game_name";
        let r = class {
            constructor() {
                this.enum = a.Reward, this.root = null
            }
            get name() {
                return Object.values(c)[this.enum]
            }
        };
        i([s({
            type: cc.Enum(a),
            displayName: "\u5716\u5c64"
        })], r.prototype, "enum", void 0), i([s({
            type: cc.Node,
            displayName: "\u5716\u5c64\u7bc0\u9ede"
        })], r.prototype, "root", void 0), r = i([n("MissionLayerSetting")], r), o.MissionLayerSetting = r, cc._RF.pop()
    }, {}],
    MissionList: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b665c7NhXVO74jq9Py4952M", "MissionList");
        var i, n = this && this.__decorate || function(t, e, o, i) {
                var n, s = arguments.length,
                    c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
                else
                    for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
                return s > 3 && c && Object.defineProperty(e, o, c), c
            },
            s = this && this.__awaiter || function(t, e, o, i) {
                return new(o || (o = Promise))(function(n, s) {
                    function c(t) {
                        try {
                            r(i.next(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(t) {
                        try {
                            r(i.throw(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function r(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(c, a)
                    }
                    r((i = i.apply(t, e || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const c = t("../../../Component/ListView/ScrollList"),
            a = t("../../../Helper/EventSystem"),
            r = t("../../../Helper/LayerSystem"),
            h = t("./MissionDefine"),
            l = t("./MissionTabController"),
            d = t("./MissionDefine"),
            u = t("../../../Achieve/AchieveDefine"),
            p = t("../../../Achieve/TaskDefine"),
            y = t("../../../Component/DateTimeCountDown"),
            m = t("./LuckyShopDefine"),
            v = t("../../../Achieve/AchieveName"),
            f = t("../../../Quest/Scripts/QuestCmd"),
            S = t("../../../Connect/Script/ConnectPanelMgr"),
            {
                ccclass: g,
                property: b
            } = cc._decorator;
        let C = i = class extends c.default {
            constructor() {
                super(...arguments), this.tabController = new l.default, this.layers = [], this.time = null, this._data = null, this.config = null, this.tab = "", this.taskData = null
            }
            onLoad() {
                try {
                    a.EventSystem.Event(a.RegisterLayer).Insert(this.RegisterLayer, this), a.EventSystem.Event(d.SelectTab).Insert(this.SelectTab, this), a.EventSystem.RegisterFunction(h.GetDescription, this.GetDescription.bind(this)), a.EventSystem.RegisterFunction(h.GetGameName, this.GetGameName.bind(this)), this._data = JSON.parse("{}"), this.layers.forEach(t => {
                        r.default.RegisterLayer(t.name, t.root)
                    }), super.onLoad(), this.tabController.Init(), i.Queue = new SS.Common.Queue, window[this.node.name] = this
                } catch (t) {
                    console.log("[MissionList] onLoad: ", t)
                }
            }
            onEnable() {
                try {
                    super.onEnable(), this.SelectTab(this.tab)
                } catch (t) {
                    console.log("[MissionList] onEable: ", t)
                }
            }
            StartCountDown() {
                this.InProgress && (this.unschedule(this.CountDown), this.schedule(this.CountDown, 1))
            }
            get InProgress() {
                if (!this.taskData) return !1;
                const {
                    StartTime: t,
                    EndTime: e
                } = this.taskData.info.values()[0], o = new Date;
                return t <= o && o <= e
            }
            onDestroy() {
                a.EventSystem.UnregisterFunction(h.GetGameName), a.EventSystem.UnregisterFunction(h.GetDescription), a.EventSystem.Event(a.RegisterLayer).Remove(this.RegisterLayer, this), super.onDestroy(), this.layers.forEach(t => {
                    r.default.UnregisterLayer(t.name, t.root)
                })
            }
            get data() {
                return this._data
            }
            set data(t) {
                if (!t || !t.info || !t.task) return;
                this.taskData = t.task, this.tabController.tabs = t.info.tab, t.info.tab.forEach(e => {
                    this._data[e] = [], t.task.info.keys().forEach(o => {
                        if (-1 !== o.indexOf(e)) {
                            const i = t.task.info.getValue(o);
                            this.Filter(i) && this._data[e].push(i)
                        }
                    })
                });
                const e = t.info.tab[0],
                    o = t.info.tab.indexOf(this.tab);
                this.tab && -1 !== o ? this.SelectTab(this.tab) : this.SelectTab(e)
            }
            RegisterLayer() {
                this.layers.forEach(t => {
                    r.default.RegisterLayer(t.name, t.root)
                })
            }
            SelectTab(t, e = !1) {
                this._data && (this.tabController.Selected(t), this.SetData(this._data[t]), e && this.tab != t && this.ResetScrollViewPos(), this.tab = t)
            }
            ResetScrollViewPos() {
                this.scrollView.stopAutoScroll(), this.scrollView.scrollTo(new cc.Vec2(0, 1)), this.UpdateShowBox(), this.offset = this.scrollView.getScrollOffset()
            }
            GetDescription(t) {
                let e = "",
                    o = !1,
                    i = t.GameName && 1 === t.GameName.length ? "SPE_" + ("SLOT_GAME" === t.Type ? "SLOT" : "FISH") : t.Type;
                "SPE_FISH" == i && null != t.FishType && t.FishType.length > 0 && (i += "TYPE", o = !0);
                const n = i + "-" + t.Attribute,
                    s = this.config ? this.config.Parameter : [],
                    c = this.config ? this.config.Description : [];
                return c.hasOwnProperty(n) ? (e = c[n], s.forEach(i => {
                    const n = t.data[i];
                    let s = (null == n ? void 0 : n.length) ? n[0] : n,
                        c = i;
                    o && "FishType" == i && (c = i + "_" + t.GameName), this.config[c] && this.config[c][s] ? s = this.config[c][s] : "number" == typeof s && (s = s.toLocaleString()), e = e.replace("$" + i, s)
                })) : e = "Attribute: " + t.Attribute + "\nType: " + t.Type, e
            }
            GetGameName(t) {
                const e = this.config ? this.config.GameName : {};
                let o = t;
                return e.hasOwnProperty(t) && (o = e[t]), o
            }
            Filter(t) {
                const e = SS.Common.GameEnvironment.ProjectSetting[v.AchieveName.LuckyShop],
                    {
                        GameType: o,
                        GameName: i
                    } = t;
                if (void 0 === e || void 0 === o && void 0 === i) return !0; {
                    const n = o[0];
                    if (i) {
                        let o = [];
                        return i.forEach(t => {
                            e[t] && o.push(t)
                        }), t.data.GameName = o, o.length > 0
                    }
                    return "LOGIN" === n || "PURCHASE" === n || e.hasOwnProperty(n)
                }
            }
            Sort(t) {
                return t.sort((t, e) => {
                    const o = t,
                        i = e,
                        n = SS.Common.GameEnvironment.CurrentGameNow,
                        s = this.IsInGame(o, n),
                        c = this.IsInGame(i, n),
                        a = o.percentage > 100 ? 100 : o.percentage,
                        r = i.percentage > 100 ? 100 : i.percentage;
                    return o.Status === p.Status.TAKE && i.Status !== p.Status.TAKE || o.Status !== p.Status.COMPLETE && i.Status === p.Status.COMPLETE ? 1 : o.Status !== p.Status.TAKE && i.Status === p.Status.TAKE || o.Status === p.Status.COMPLETE && i.Status !== p.Status.COMPLETE ? -1 : !s && c ? 1 : s && !c ? -1 : a > r ? -1 : a < r ? 1 : 0
                }), t
            }
            IsInGame(t, e) {
                const o = SS.Common.GameEnvironment.ProjectSetting[v.AchieveName.LuckyShop];
                if (e && t.GameName) return -1 !== t.GameName.indexOf(e);
                if (e && t.GameType && o) {
                    const i = t.GameType[0];
                    return -1 !== (o.hasOwnProperty(i) ? o[i] : []).indexOf(e)
                }
                return !1
            }
            CountDown() {
                if (this.taskData && this.InProgress) {
                    const {
                        EndTime: t
                    } = this.taskData.info.values()[0], e = Date.now() / 1e3, o = t.getTime() / 1e3 - e;
                    this.UpdateTime(Math.floor(o))
                } else this.unschedule(this.CountDown), this.TimesUp()
            }
            UpdateTime(t) {
                if (null != this.time) {
                    this.time.UpdateUIWithDay(t), this.time.node.active = !0;
                    const e = Math.floor(t / 3600);
                    this.time.node.color = e < 24 ? cc.Color.RED : new cc.Color(128, 255, 128)
                }
            }
            TimesUp() {
                this.time.node.active = !1, a.EventSystem.Event(m.SyncData).Notify()
            }
            static SendTakeReward() {
                return s(this, void 0, void 0, function*() {
                    if (i.packet || !i.Queue || i.Queue.Count <= 0) return void S.ConnectPanelMgr.Instance.DisableConnectPanel(0);
                    i.packet = i.Queue.Dequeue();
                    const {
                        resolve: t,
                        RoundId: e,
                        SessionId: o
                    } = i.packet;
                    t(yield f.QuestCmd.TakeAchieveReward(e, o, new u.AchieveRewardResult).catch(t => {
                        console.warn("[LuckyShop] [Mission] TakeAchieveReward: " + t)
                    })), i.packet = null, i.Queue.Count > 0 ? i.SendTakeReward() : S.ConnectPanelMgr.Instance.DisableConnectPanel(0)
                })
            }
        };
        C.Queue = null, C.packet = null, n([b({
            type: l.default,
            displayName: "\u5206\u9801\u63a7\u5236"
        })], C.prototype, "tabController", void 0), n([b({
            type: h.MissionLayerSetting
        })], C.prototype, "layers", void 0), n([b({
            type: y.DateTimeCountDown
        })], C.prototype, "time", void 0), C = i = n([g], C), o.default = C, cc._RF.pop()
    }, {
        "../../../Achieve/AchieveDefine": void 0,
        "../../../Achieve/AchieveName": void 0,
        "../../../Achieve/TaskDefine": void 0,
        "../../../Component/DateTimeCountDown": void 0,
        "../../../Component/ListView/ScrollList": void 0,
        "../../../Connect/Script/ConnectPanelMgr": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../Helper/LayerSystem": void 0,
        "../../../Quest/Scripts/QuestCmd": void 0,
        "./LuckyShopDefine": "LuckyShopDefine",
        "./MissionDefine": "MissionDefine",
        "./MissionTabController": "MissionTabController"
    }],
    MissionObjectSetting: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2c5ccjUvqRFd49oH4QyIowf", "MissionObjectSetting");
        var i = this && this.__decorate || function(t, e, o, i) {
            var n, s = arguments.length,
                c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
            else
                for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
            return s > 3 && c && Object.defineProperty(e, o, c), c
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const {
            ccclass: n,
            property: s
        } = cc._decorator;
        let c = class extends cc.Component {
            constructor() {
                super(...arguments), this.data = JSON.parse('{"description":{"settingH":{"position":{"x":-195,"y":24,"z":0},"scale":{"x":1,"y":1,"z":0},"size":{"width":175,"height":40}},"settingV":{"position":{"x":-152,"y":22,"z":0},"scale":{"x":0.8,"y":0.8,"z":0},"size":{"width":175,"height":40}}},"progress":{"settingH":{"position":{"x":-202.41,"y":-23.851,"z":0},"scale":{"x":1,"y":1,"z":0},"size":{"width":392,"height":37}},"settingV":{"position":{"x":-159.5,"y":-18.5,"z":0},"scale":{"x":0.71,"y":0.8,"z":0},"size":{"width":392,"height":37}}},"statistics":{"settingH":{"position":{"x":-6,"y":-21,"z":0},"scale":{"x":1,"y":1,"z":0},"size":{"width":43.8,"height":25}},"settingV":{"position":{"x":-15.5,"y":-17.5,"z":0},"scale":{"x":0.8,"y":0.8,"z":0},"size":{"width":43.8,"height":25}}},"reward":{"settingH":{"position":{"x":-270,"y":1,"z":0},"scale":{"x":1,"y":1,"z":0},"size":{"width":119,"height":98}},"settingV":{"position":{"x":-217,"y":1,"z":0},"scale":{"x":0.8,"y":0.8,"z":0},"size":{"width":119,"height":98}}},"rewardAmount":{"settingH":{"position":{"x":-230,"y":-26,"z":0},"scale":{"x":1,"y":1,"z":0},"size":{"width":19.37,"height":30}},"settingV":{"position":{"x":-185,"y":-20,"z":0},"scale":{"x":0.8,"y":0.8,"z":0},"size":{"width":19.37,"height":30}}},"button":{"settingH":{"position":{"x":266,"y":0,"z":0},"scale":{"x":1,"y":1,"z":0},"size":{"width":138,"height":55}},"settingV":{"position":{"x":189.5,"y":0.4,"z":0},"scale":{"x":0.84,"y":0.84,"z":0},"size":{"width":138,"height":55}}},"background":{"settingH":{"position":{"x":0,"y":-1,"z":0},"scale":{"x":1,"y":1,"z":0},"size":{"width":695,"height":124}},"settingV":{"position":{"x":-2,"y":0,"z":0},"scale":{"x":1,"y":1,"z":0},"size":{"width":546,"height":105}}},"rewardBackground":{"settingH":{"position":{"x":-270,"y":-1,"z":0},"scale":{"x":1,"y":1,"z":0},"size":{"width":111,"height":100}},"settingV":{"position":{"x":-217,"y":1.5,"z":0},"scale":{"x":1,"y":1,"z":0},"size":{"width":92,"height":83}}},"claimed":{"settingH":{"position":{"x":266,"y":0.5,"z":0},"scale":{"x":1,"y":1,"z":0},"size":{"width":139,"height":55}},"settingV":{"position":{"x":189.5,"y":0.4,"z":0},"scale":{"x":0.84,"y":0.84,"z":0},"size":{"width":139,"height":55}}},"black":{"settingH":{"position":{"x":0,"y":-1,"z":0},"scale":{"x":1,"y":1,"z":0},"size":{"width":695,"height":124}},"settingV":{"position":{"x":-2,"y":0,"z":0},"scale":{"x":1,"y":1,"z":0},"size":{"width":546,"height":105}}}}')
            }
        };
        c = i([n], c), o.default = c, cc._RF.pop()
    }, {}],
    MissionObject: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "7e1balTdPJCXqaFL9AJ+RM6", "MissionObject");
        var i = this && this.__decorate || function(t, e, o, i) {
                var n, s = arguments.length,
                    c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
                else
                    for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
                return s > 3 && c && Object.defineProperty(e, o, c), c
            },
            n = this && this.__awaiter || function(t, e, o, i) {
                return new(o || (o = Promise))(function(n, s) {
                    function c(t) {
                        try {
                            r(i.next(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(t) {
                        try {
                            r(i.throw(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function r(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(c, a)
                    }
                    r((i = i.apply(t, e || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const s = t("../../../Achieve/TaskDefine"),
            c = t("../../../Component/ListView/ScrollObject"),
            a = t("../../../Helper/EventSystem"),
            r = t("../../../Helper/LayerSystem"),
            h = t("./GetIcon"),
            l = t("./MissionDefine"),
            d = t("./MissionObjectSetting"),
            u = t("./LuckyShopDefine"),
            p = t("../../../Net/ClickLog"),
            y = t("../../../Net/ClickLogEnum"),
            m = t("./MissionList"),
            {
                ccclass: v,
                property: f
            } = cc._decorator;
        let S = class extends c.default {
            constructor() {
                super(...arguments), this.background = (new c.Unit).Init(c.UnitType.Node), this.description = (new c.Unit).Init(c.UnitType.Label), this.progress = (new c.Unit).Init(c.UnitType.Node), this.statistics = (new c.Unit).Init(c.UnitType.Label), this.reward = (new c.Unit).Init(c.UnitType.Sprite), this.rewardAmount = (new c.Unit).Init(c.UnitType.Label), this.iconFrame = (new c.Unit).Init(c.UnitType.Node), this.button = (new c.Unit).Init(c.UnitType.Node), this.claimed = (new c.Unit).Init(c.UnitType.Node), this.black = (new c.Unit).Init(c.UnitType.Node), this.icon = (new c.Unit).Init(c.UnitType.Sprite), this.go = (new c.Unit).Init(c.UnitType.Node), this.effect = (new c.Unit).Init(c.UnitType.Node), this.setting = null, this._progressBar = null, this.collect = null, this.iconButton = null, this._icon = null, this._info = null, this._handler = null
            }
            set toJSON(t) {
                let e = JSON.parse("{}");
                e.description = this.description.toJSON(), e.progress = this.progress.toJSON(), e.statistics = this.statistics.toJSON(), e.reward = this.reward.toJSON(), e.rewardAmount = this.rewardAmount.toJSON(), e.button = this.button.toJSON(), e.background = this.background.toJSON(), e.rewardBackground = this.iconFrame.toJSON(), e.claimed = this.claimed.toJSON(), e.black = this.black.toJSON(), Editor.log("toJSON"), Editor.log(JSON.stringify(e))
            }
            get toJSON() {
                return !1
            }
            set toSetting(t) {
                let e = this.setting.data;
                this.description.toSetting(e.description), this.progress.toSetting(e.progress), this.statistics.toSetting(e.statistics), this.reward.toSetting(e.reward), this.rewardAmount.toSetting(e.rewardAmount), this.button.toSetting(e.button), this.background.toSetting(e.background), this.iconFrame.toSetting(e.rewardBackground), this.claimed.toSetting(e.claimed), this.black.toSetting(e.black), Editor.log("toSetting Finished")
            }
            get toSetting() {
                return !1
            }
            UnitForEach(t) {
                [this.description, this.progress, this.statistics, this.reward, this.rewardAmount, this.button, this.background, this.iconFrame, this.claimed, this.black, this.icon, this.go, this.effect].forEach(t)
            }
            onLoad() {
                try {
                    this.UnitForEach(t => {
                        this.units.push(t)
                    }), this._progressBar = this.progress.node.getComponent(cc.ProgressBar), this.collect = this.button.node.getComponent(cc.Button), this.iconButton = this.icon.node.addComponent(cc.Button), this.iconButton.clickEvents = [];
                    const e = new cc.Component.EventHandler;
                    e.target = this.node, e.component = "MissionObject", e.handler = "OnClickIcon", this.iconButton.clickEvents.push(e), this.collect.clickEvents = [];
                    const o = new cc.Component.EventHandler;
                    o.target = this.node, o.component = "MissionObject", o.handler = "OnClickReward", this.collect.clickEvents.push(o), this._handler = t => {
                        t.stopPropagation()
                    }, this.collect.node.on(cc.Node.EventType.TOUCH_START, this._handler), this.collect.node.on(cc.Node.EventType.TOUCH_MOVE, this._handler), this.collect.node.on(cc.Node.EventType.TOUCH_END, this._handler), this.collect.node.on(cc.Node.EventType.TOUCH_CANCEL, this._handler), this.iconButton.node.on(cc.Node.EventType.TOUCH_START, this._handler), this.iconButton.node.on(cc.Node.EventType.TOUCH_MOVE, this._handler), this.iconButton.node.on(cc.Node.EventType.TOUCH_END, this._handler), this.iconButton.node.on(cc.Node.EventType.TOUCH_CANCEL, this._handler)
                } catch (t) {
                    console.log("[MissionObject] onLoad: ", t)
                }
            }
            onDisable() {
                return n(this, void 0, void 0, function*() {
                    try {
                        this.icon.content = yield h.GetGameIcon("Loading")
                    } catch (t) {
                        console.log("[MissionObject] onDisable: ", t)
                    }
                })
            }
            Init() {
                r.default.SetParent(this.background.node, l.MissionObjectLayer.Background), r.default.SetParent(this.iconFrame.node, l.MissionObjectLayer.IconFrame), r.default.SetParent(this.claimed.node, l.MissionObjectLayer.Claimed), r.default.SetParent(this.black.node, l.MissionObjectLayer.Foreground), r.default.SetParent(this.description.node, l.MissionObjectLayer.Description), r.default.SetParent(this.progress.node, l.MissionObjectLayer.Progress), r.default.SetParent(this.statistics.node, l.MissionObjectLayer.Statistics), r.default.SetParent(this.reward.node, l.MissionObjectLayer.Reward), r.default.SetParent(this.rewardAmount.node, l.MissionObjectLayer.RewardAmount), r.default.SetParent(this.button.node, l.MissionObjectLayer.Button), r.default.SetParent(this.icon.node, l.MissionObjectLayer.Icon), r.default.SetParent(this.go.node, l.MissionObjectLayer.Go), r.default.SetParent(this.effect.node, l.MissionObjectLayer.Effect)
            }
            set data(t) {
                const e = t;
                if (e && this.CheckData(e)) {
                    if (this._info = e, this.description.content = a.EventSystem.Function(l.GetDescription)(e), this._progressBar) {
                        const t = e.percentage / 100;
                        this._progressBar.progress = t > .05 || 0 === t ? t : .05
                    }
                    let t = e.Progress > e.Target ? e.Target : e.Progress;
                    const o = SS.Common.BaseFunction.addCommas(t, 0),
                        i = SS.Common.BaseFunction.addCommas(e.Target, 0);
                    if (this.statistics.content = o + "/" + i, this.rewardAmount.content = e.Reward[0].amount.toString(), this.collect) {
                        const t = e.Status === s.Status.COMPLETE;
                        this.effect.active = t, this.collect.interactable = t, this.reward.node.color = t ? this.collect.normalColor : this.collect.disabledColor, this.rewardAmount.node.color = t ? this.collect.normalColor : this.collect.disabledColor
                    }
                    if (this.black.active = e.Status === s.Status.TAKE, this.claimed.active = e.Status === s.Status.TAKE, this.iconButton) {
                        const t = void 0 !== e.GameType && "PURCHASE" !== e.GameType[0] && "LOGIN" !== e.GameType[0] || void 0 !== e.GameName;
                        this.iconButton.interactable = t, this.go.active = t
                    }
                    void 0 === e.GameType && (e.data.GameType = [e.Type]), this.LazyLoading(e.GameType, e.GameName)
                }
            }
            CheckData(t) {
                let e = !0;
                return null != t.Progress && null != t.Progress || (e = !1, console.error("[LuckyShop][MissionObject] info.Progress = null")), null != t.Target && null != t.Target || (e = !1, console.error("[LuckyShop][MissionObject] info.Target = null")), null != t.Reward && 0 != t.Reward.length || console.error("[LuckyShop][MissionObject] info.Reward = null or length = 0"), e
            }
            LazyLoading(t, e) {
                return n(this, void 0, void 0, function*() {
                    const o = e ? e[0] : t ? t[0] : "";
                    this.icon.content = yield h.GetGameIcon("Loading"), this.icon.content = yield h.GetGameIcon(o)
                })
            }
            OnClickIcon(t) {
                this.effect.active = !1;
                const e = this._info.GameType ? this._info.GameType[0] : "";
                a.EventSystem.Event(l.ChooseGame).Notify(e, this._info.GameName);
                const o = this._info.GameType ? this._info.GameType[0] : this._info.GameName ? this._info.GameName[0] : "";
                p.ClickLog.SendLog(y.LogName.PlayerAction, y.LogType_PlayerAction.LuckyShop, y.LogEvent_LuckyShop.ToGameStep1, SS.Common.GameEnvironment.CurrentGameNow, {
                    GameName: o
                })
            }
            OnClickReward() {
                return n(this, void 0, void 0, function*() {
                    const {
                        RoundId: t,
                        SessionId: e
                    } = this._info;
                    this.collect.interactable = !1;
                    const o = yield new Promise(o => {
                        m.default.Queue.Enqueue({
                            resolve: o,
                            RoundId: t,
                            SessionId: e
                        }), m.default.SendTakeReward()
                    });
                    if (o) {
                        const {
                            asset: t
                        } = o, e = this._info.Reward[0].amount, i = {
                            "EC-000002": t.data.getValue(u.AssetKey)
                        }, n = this.claimed.node.convertToWorldSpaceAR(cc.Vec3.ZERO);
                        console.log("[MissionObj] Asset: ", i), a.EventSystem.Event(u.ShopAsset.Add).Notify(i, e, n), this._info.data.Status = s.Status.TAKE, this.data = this._info
                    }
                })
            }
        };
        i([f({
            type: c.Unit,
            displayName: "\u80cc\u666f"
        })], S.prototype, "background", void 0), i([f({
            type: c.Unit,
            displayName: "\u4efb\u52d9\u63cf\u8ff0"
        })], S.prototype, "description", void 0), i([f({
            type: c.Unit,
            displayName: "\u4efb\u52d9\u9032\u5ea6"
        })], S.prototype, "progress", void 0), i([f({
            type: c.Unit,
            displayName: "\u4efb\u52d9\u9032\u5ea6\u6578\u503c"
        })], S.prototype, "statistics", void 0), i([f({
            type: c.Unit,
            displayName: "\u734e\u52f5\u5716\u7247"
        })], S.prototype, "reward", void 0), i([f({
            type: c.Unit,
            displayName: "\u734e\u52f5\u6578\u91cf"
        })], S.prototype, "rewardAmount", void 0), i([f({
            type: c.Unit,
            displayName: "Icon \u6846"
        })], S.prototype, "iconFrame", void 0), i([f({
            type: c.Unit,
            displayName: "\u9818\u734e\u9215"
        })], S.prototype, "button", void 0), i([f({
            type: c.Unit,
            displayName: "\u5df2\u9818\u53d6"
        })], S.prototype, "claimed", void 0), i([f({
            type: c.Unit,
            displayName: "\u58d3\u9ed1"
        })], S.prototype, "black", void 0), i([f({
            type: c.Unit,
            displayName: "\u4efb\u52d9\u5716\u7247"
        })], S.prototype, "icon", void 0), i([f({
            type: c.Unit,
            displayName: "\u4efb\u52d9\u5716\u7247"
        })], S.prototype, "go", void 0), i([f({
            type: c.Unit,
            displayName: "\u6548\u679c"
        })], S.prototype, "effect", void 0), i([f({
            displayName: "\u5370\u51fa\u8cc7\u8a0a"
        })], S.prototype, "toJSON", null), i([f({
            type: d.default,
            displayName: "\u8cc7\u8a0a\u4f86\u6e90"
        })], S.prototype, "setting", void 0), i([f({
            displayName: "\u53d6\u5f97\u5167\u5bb9",
            visible: function() {
                return null !== this.setting
            }
        })], S.prototype, "toSetting", null), S = i([v], S), o.default = S, cc._RF.pop()
    }, {
        "../../../Achieve/TaskDefine": void 0,
        "../../../Component/ListView/ScrollObject": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../Helper/LayerSystem": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "./GetIcon": "GetIcon",
        "./LuckyShopDefine": "LuckyShopDefine",
        "./MissionDefine": "MissionDefine",
        "./MissionList": "MissionList",
        "./MissionObjectSetting": "MissionObjectSetting"
    }],
    MissionTabController: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "5ecdarhc5JN9bOKsMOWK2Hr", "MissionTabController");
        var i = this && this.__decorate || function(t, e, o, i) {
            var n, s = arguments.length,
                c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
            else
                for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
            return s > 3 && c && Object.defineProperty(e, o, c), c
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const n = t("../../../Component/ComponentPool"),
            s = t("./MissionTab"),
            {
                ccclass: c,
                property: a
            } = cc._decorator;
        class r {
            constructor() {
                this.object = null, this.string = "", this.enable = !1
            }
        }
        let h = class {
            constructor() {
                this.enable = null, this.disable = null, this.layout = null, this.poolDisable = null, this.poolEnable = null, this.listDisable = [], this.listEnable = []
            }
            Init() {
                this.poolEnable = new n.ComponentPool, this.poolDisable = new n.ComponentPool;
                const t = t => t.getComponent(s.default),
                    e = t => {
                        t.Init()
                    },
                    o = t => {
                        t.node.active = !1
                    };
                this.poolDisable.Init(this.disable, this.layout.node, t, e, o), this.poolEnable.Init(this.enable, this.layout.node, t, e, o), this.layout.enabled = !1
            }
            set tabs(t) {
                this.Clear(), t.forEach((t, e) => {
                    let o = new r;
                    o.string = t, o.object = this.poolDisable.Get(), o.object.text = o.string, o.object.interactable = !0, o.object.node.setSiblingIndex(2 * e), this.listDisable.push(o);
                    let i = new r;
                    i.string = t, i.object = this.poolEnable.Get(), i.object.text = i.string, i.object.interactable = !1, i.object.node.setSiblingIndex(2 * e + 1), this.listEnable.push(i)
                }), this.Selected(t[0])
            }
            Selected(t) {
                this.listDisable.forEach(e => {
                    e.object.node.active = e.string !== t
                }), this.listEnable.forEach(e => {
                    e.object.node.active = e.string === t
                }), this.UpdateLayout()
            }
            Clear() {
                this.Recycle(), this.listEnable = [], this.listDisable = []
            }
            Recycle() {
                const t = [],
                    e = [];
                this.listDisable.forEach(t => {
                    e.push(t.object)
                }), this.listEnable.forEach(e => {
                    t.push(e.object)
                }), this.poolEnable.Put(t), this.poolDisable.Put(e)
            }
            UpdateLayout() {
                this.layout.enabled = !0, this.layout.updateLayout(), this.layout.enabled = !1
            }
        };
        i([a({
            type: cc.Prefab,
            displayName: "\u4e0d\u80fd\u9ede\u9078\u7684"
        })], h.prototype, "enable", void 0), i([a({
            type: cc.Prefab,
            displayName: "\u53ef\u4ee5\u9ede\u9078\u7684"
        })], h.prototype, "disable", void 0), i([a({
            type: cc.Layout
        })], h.prototype, "layout", void 0), h = i([c("MissionTabController")], h), o.default = h, cc._RF.pop()
    }, {
        "../../../Component/ComponentPool": void 0,
        "./MissionTab": "MissionTab"
    }],
    MissionTab: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ab458AoI9ZEiapHdw5DGLly", "MissionTab");
        var i = this && this.__decorate || function(t, e, o, i) {
            var n, s = arguments.length,
                c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
            else
                for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
            return s > 3 && c && Object.defineProperty(e, o, c), c
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const n = t("../../../Helper/EventSystem"),
            s = t("./MissionDefine"),
            {
                ccclass: c,
                property: a
            } = cc._decorator;
        let r = class extends cc.Component {
            constructor() {
                super(...arguments), this.background = null, this.label = null, this._handler = null, this.button = null
            }
            onLoad() {
                try {
                    this.Init()
                } catch (t) {
                    console.log("[MissionTab] onLoad: ", t)
                }
            }
            Init() {
                this.button = this.background.node.addComponent(cc.Button), this.button.clickEvents = [];
                const t = new cc.Component.EventHandler;
                t.target = this.node, t.component = "MissionTab", t.handler = "OnClick", this.button.clickEvents.push(t), this._handler = t => {
                    t.stopPropagation()
                }, this.button.node.on(cc.Node.EventType.TOUCH_START, this._handler), this.button.node.on(cc.Node.EventType.TOUCH_MOVE, this._handler), this.button.node.on(cc.Node.EventType.TOUCH_END, this._handler), this.button.node.on(cc.Node.EventType.TOUCH_CANCEL, this._handler)
            }
            set text(t) {
                this.label.string = t, this.background.node.width = 30 * t.length + 25
            }
            set interactable(t) {
                this.button.interactable = t
            }
            OnClick(t) {
                n.EventSystem.Event(s.SelectTab).Notify(this.label.string, !0)
            }
        };
        i([a({
            type: cc.Sprite
        })], r.prototype, "background", void 0), i([a({
            type: cc.Label
        })], r.prototype, "label", void 0), r = i([c], r), o.default = r, cc._RF.pop()
    }, {
        "../../../Helper/EventSystem": void 0,
        "./MissionDefine": "MissionDefine"
    }],
    RewardDefine: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "3a5adNYov9MfYHZDYO2Yyd/", "RewardDefine");
        var i = this && this.__decorate || function(t, e, o, i) {
            var n, s = arguments.length,
                c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
            else
                for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
            return s > 3 && c && Object.defineProperty(e, o, c), c
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.RewardInfo = o.GetConfig = o.SelectTab = o.History = o.Return = o.Confirm = o.RewardLayerSetting = o.RewardElement = o.RewardObjectLayer = void 0;
        const {
            ccclass: n,
            property: s
        } = cc._decorator;
        var c, a;
        (function(t) {
            t.Background = "[Reward]_background", t.Description = "[Reward]_description", t.Cost = "[Reward]_cost", t.CostAmount = "[Reward]_cost_amount", t.Button = "[Reward]_button", t.Foreground = "[Reward]_foreground", t.Remain = "[Reward]_remain", t.Icon = "[Reward]_icon", t.IconFrame = "[Reward]_icon_frame", t.SoldOut = "[Reward]_sold_out", t.RewardBg = "[Reward]_reward_bg", t.Effect = "[Reward]_effect"
        })(c = o.RewardObjectLayer || (o.RewardObjectLayer = {})),
        function(t) {
            t[t.Background = 0] = "Background", t[t.Description = 1] = "Description", t[t.Cost = 2] = "Cost", t[t.CostAmount = 3] = "CostAmount", t[t.Button = 4] = "Button", t[t.Foreground = 5] = "Foreground", t[t.Remain = 6] = "Remain", t[t.Icon = 7] = "Icon", t[t.IconFrame = 8] = "IconFrame", t[t.SoldOut = 9] = "SoldOut", t[t.RewardBg = 10] = "RewardBg", t[t.Effect = 11] = "Effect"
        }(a = o.RewardElement || (o.RewardElement = {})), o.Confirm = "[Reward]_confirm", o.Return = "[Reward]_return", o.History = "[Reward]_history", o.SelectTab = "[Reward]_select_tab", o.GetConfig = "[Reward]_get_config";
        let r = class {
            constructor() {
                this.enum = a.Background, this.root = null
            }
            get name() {
                return Object.values(c)[this.enum]
            }
        };
        i([s({
            type: cc.Enum(a),
            displayName: "\u5716\u5c64"
        })], r.prototype, "enum", void 0), i([s({
            type: cc.Node,
            displayName: "\u5716\u5c64\u7bc0\u9ede"
        })], r.prototype, "root", void 0), r = i([n("RewardLayerSetting")], r), o.RewardLayerSetting = r, o.RewardInfo = class {}, cc._RF.pop()
    }, {}],
    RewardList: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ed175RGtYRMAp3FhD1b2iiu", "RewardList");
        var i = this && this.__decorate || function(t, e, o, i) {
                var n, s = arguments.length,
                    c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
                else
                    for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
                return s > 3 && c && Object.defineProperty(e, o, c), c
            },
            n = this && this.__awaiter || function(t, e, o, i) {
                return new(o || (o = Promise))(function(n, s) {
                    function c(t) {
                        try {
                            r(i.next(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(t) {
                        try {
                            r(i.throw(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function r(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(c, a)
                    }
                    r((i = i.apply(t, e || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const s = t("../../../Component/DateTimeCountDown"),
            c = t("../../../Component/ListView/ScrollList"),
            a = t("../../../Helper/EventSystem"),
            r = t("../../../Helper/LayerSystem"),
            h = t("./Exchange"),
            l = t("./LuckyShopDefine"),
            d = t("./RewardDefine"),
            u = t("./RewardPanel"),
            p = t("./RewardTabController"),
            {
                ccclass: y,
                property: m
            } = cc._decorator;
        let v = class extends c.default {
            constructor() {
                super(...arguments), this.layers = [], this.tabController = new p.default, this.panel = new u.RewardPanel, this.time = null, this.RoundID = "", this.info = null, this.group = [], this.tab = "", this.data = null, this.shopInfo = null, this.config = null, this.isShowEntries = !1
            }
            onLoad() {
                try {
                    a.EventSystem.Event(a.RegisterLayer).Insert(this.RegisterLayer, this), a.EventSystem.Event(d.Confirm).Insert(this.OnConfirm, this), a.EventSystem.Event(d.SelectTab).Insert(this.SelectTab, this), a.EventSystem.RegisterFunction(d.GetConfig, this.GetConfig.bind(this)), this.layers.forEach(t => {
                        r.default.RegisterLayer(t.name, t.root)
                    }), super.onLoad(), this.tabController.Init(), this.panel.Init(), window[this.node.name] = this, window.Exchange = h.Exchange
                } catch (t) {
                    console.log("[RewardList] onLoad: ", t)
                }
            }
            onDestroy() {
                try {
                    a.EventSystem.UnregisterFunction(d.GetConfig), a.EventSystem.Event(a.RegisterLayer).Remove(this.RegisterLayer, this), a.EventSystem.Event(d.Confirm).Remove(this.OnConfirm, this), a.EventSystem.Event(d.SelectTab).Remove(this.SelectTab, this), super.onDestroy(), this.layers.forEach(t => {
                        r.default.UnregisterLayer(t.name, t.root)
                    })
                } catch (t) {
                    console.log("[RewardList] onDestroy: ", t)
                }
            }
            get InProgress() {
                if (!this.shopInfo) return !1;
                const {
                    StartTime: t,
                    EndTime: e
                } = this.shopInfo, o = new Date, i = new Date(t), n = new Date(e);
                return i <= o && o <= n
            }
            onEnable() {
                try {
                    super.onEnable(), this.SelectTab(this.tab), this.scrollView.node.active = !0, a.EventSystem.Event(l.InfoButtonVisible).Notify(!0), this.info = null, this.panel.active = !1
                } catch (t) {
                    console.log("[RewardList] onLoad: ", t)
                }
            }
            StartCountDown() {
                this.InProgress && (this.unschedule(this.CountDown), this.schedule(this.CountDown, 1))
            }
            RegisterLayer() {
                this.layers.forEach(t => {
                    r.default.RegisterLayer(t.name, t.root)
                })
            }
            OnOrientationChange(t) {
                const e = Object.create(null, {
                    OnOrientationChange: {
                        get: () => super.OnOrientationChange
                    }
                });
                return n(this, void 0, void 0, function*() {
                    yield e.OnOrientationChange.call(this, t), this.scrollView.node.active = null === this.info, this.tabController.active = null === this.info, this.panel.active = null !== this.info, this.panel.root.active = this.isShowEntries, this.panel.history.node.active = "" !== this.panel.info.string
                })
            }
            SendGetInfo() {
                var t, e;
                return n(this, void 0, void 0, function*() {
                    const o = yield h.Exchange.GetInfo(), i = null === (e = null === (t = null == o ? void 0 : o.cmd_data) || void 0 === t ? void 0 : t.Data) || void 0 === e ? void 0 : e.LuckyShop;
                    i && i.RoundId === this.RoundID && (this.shopInfo = i, this.time)
                })
            }
            SendGetProduct() {
                return n(this, void 0, void 0, function*() {
                    const t = yield h.Exchange.GetProduct(this.RoundID);
                    if (this.data = t.cmd_data, this.group = this.data.PkgGroup, this.tabController.tabs = this.group, t && this.data) {
                        const t = this.group[0],
                            e = this.group.indexOf(this.tab);
                        this.tab && -1 !== e ? this.SelectTab(this.tab) : this.SelectTab(t)
                    }
                    return t
                })
            }
            OnConfirm(t) {
                this.info = t, this.scrollView.node.active = !1, this.tabController.active = !1, this.panel.data = t, this.panel.status = u.ExchangeStatus.Check, this.panel.active = !0, this.panel.confirm.interactable = !0, a.EventSystem.Event(l.InfoButtonVisible).Notify(!1), a.EventSystem.Event(l.Tutorial).Notify(l.LuckyShopTutorialSteps.Exchange_2)
            }
            OnViewHistory() {
                a.EventSystem.Event(d.History).Notify(this.panel.info.string)
            }
            SendExchange() {
                return n(this, void 0, void 0, function*() {
                    this.panel.confirm.interactable = !1, yield h.Exchange.Do(this.RoundID, this.info.ProductId).then(t => {
                        var e, o, i;
                        const n = this.datas.findIndex(t => t.Target[0].ItemId === this.info.Target[0].ItemId && t.Target[0].Amount === this.info.Target[0].Amount);
                        (null === (e = this.datas[n].Remain) || void 0 === e ? void 0 : e.hasOwnProperty("PlayerQuota")) ? --this.datas[n].Remain.PlayerQuota: --this.datas[n].Remain.Limit, this.panel.status = u.ExchangeStatus.Success;
                        const s = this.info.Source[0].Amount,
                            c = null === (o = null == t ? void 0 : t.cmd_data) || void 0 === o ? void 0 : o.Asset;
                        a.EventSystem.Event(l.ShopAsset.Sub).Notify(null, -s), a.EventSystem.Event(l.Tutorial).Notify(l.LuckyShopTutorialSteps.End);
                        const r = null === (i = null == t ? void 0 : t.cmd_data) || void 0 === i ? void 0 : i.TransId;
                        c && Object.keys(c).forEach(e => {
                            var o, i;
                            if (-1 !== e.indexOf("GC-Amazon")) this.panel.history.node.active = !0, this.panel.info.node.active = !0, this.panel.info.string = c[e].ExtraData[r][0];
                            else if ("entries" == e) {
                                const e = null === (i = null === (o = null == t ? void 0 : t.cmd_data) || void 0 === o ? void 0 : o.Asset) || void 0 === i ? void 0 : i.entries,
                                    n = a.EventSystem.Function(a.DownBar.GetPlayerEntries)(),
                                    s = a.EventSystem.Function(a.DownBar.GetPlayerWinnings)();
                                a.EventSystem.Event(a.DownBar.SetPlayerInfo).Notify(e, s), this.panel.ShowEntriesAnimation(n, e), this.isShowEntries = !0
                            }
                        })
                    }).catch(() => {
                        this.panel.status = u.ExchangeStatus.Failed
                    })
                })
            }
            OnReturn() {
                this.OnClose(), this.isShowEntries = !1, this.panel.info.string = "", a.EventSystem.Event(l.SyncData).Notify()
            }
            OnClose() {
                this.scrollView.node.active = !0, this.tabController.active = !0, this.panel.node.active = !1, this.isShowEntries = !1, this.info = null, this.panel.info.string = "", a.EventSystem.Event(l.InfoButtonVisible).Notify(!0)
            }
            SelectTab(t, e = !1) {
                if (!this.data || !this.group) return;
                const o = this.group.indexOf(t);
                this.tabController.Selected(t), this.SetData(this.data[this.group[o]]), e && this.tab != t && this.ResetScrollViewPos(), this.tab = t
            }
            ResetScrollViewPos() {
                this.scrollView.stopAutoScroll(), this.scrollView.scrollTo(new cc.Vec2(0, 1)), this.UpdateShowBox(), this.offset = this.scrollView.getScrollOffset()
            }
            GetConfig(t) {
                const e = {},
                    o = t.split("-");
                if (this.config)
                    for (let i = 0; i < o.length; ++i) {
                        let t = "";
                        const n = [];
                        for (let e = 0; e < o.length; ++e) e < o.length - i ? ("" !== t && (t += "-"), t += o[e]) : n.push(o[e]);
                        if (this.config.hasOwnProperty(t)) {
                            const o = this.config[t];
                            let i = o.Name;
                            e.Prefab = o.Prefab, n.forEach((t, e) => {
                                i = i.replace("$" + e, t)
                            }), e.Name = i;
                            break
                        }
                    }
                return e
            }
            CountDown() {
                if (this.shopInfo && this.InProgress) {
                    const {
                        EndTime: t
                    } = this.shopInfo, e = Date.now() / 1e3, o = new Date(t).getTime() / 1e3 - e;
                    this.UpdateTime(Math.floor(o))
                } else this.unschedule(this.CountDown), this.TimesUp()
            }
            UpdateTime(t) {
                if (null != this.time) {
                    this.time.UpdateUIWithDay(t), this.time.node.active = !0;
                    const e = Math.floor(t / 3600);
                    this.time.node.color = e < 24 ? cc.Color.RED : new cc.Color(128, 255, 128)
                }
            }
            TimesUp() {
                a.EventSystem.Event(l.SyncData).Notify(), this.time.node.active = !1
            }
        };
        i([m({
            type: d.RewardLayerSetting
        })], v.prototype, "layers", void 0), i([m({
            type: p.default
        })], v.prototype, "tabController", void 0), i([m({
            type: u.RewardPanel
        })], v.prototype, "panel", void 0), i([m({
            type: s.DateTimeCountDown
        })], v.prototype, "time", void 0), v = i([y], v), o.default = v, cc._RF.pop()
    }, {
        "../../../Component/DateTimeCountDown": void 0,
        "../../../Component/ListView/ScrollList": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../Helper/LayerSystem": void 0,
        "./Exchange": "Exchange",
        "./LuckyShopDefine": "LuckyShopDefine",
        "./RewardDefine": "RewardDefine",
        "./RewardPanel": "RewardPanel",
        "./RewardTabController": "RewardTabController"
    }],
    RewardObject: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "b9f48pcYxBKnZ3hAJLivm7I", "RewardObject");
        var i = this && this.__decorate || function(t, e, o, i) {
                var n, s = arguments.length,
                    c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
                else
                    for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
                return s > 3 && c && Object.defineProperty(e, o, c), c
            },
            n = this && this.__awaiter || function(t, e, o, i) {
                return new(o || (o = Promise))(function(n, s) {
                    function c(t) {
                        try {
                            r(i.next(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(t) {
                        try {
                            r(i.throw(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function r(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(c, a)
                    }
                    r((i = i.apply(t, e || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const s = t("../../../Component/ListView/ScrollObject"),
            c = t("../../../Helper/EventSystem"),
            a = t("../../../Helper/LayerSystem"),
            r = t("./GetIcon"),
            h = t("./LuckyShopDefine"),
            l = t("./RewardDefine"),
            {
                ccclass: d,
                property: u
            } = cc._decorator;
        let p = class extends s.default {
            constructor() {
                super(...arguments), this.background = (new s.Unit).Init(s.UnitType.Sprite), this.reward = (new s.Unit).Init(s.UnitType.Node), this.description = (new s.Unit).Init(s.UnitType.Label), this.button = (new s.Unit).Init(s.UnitType.Node), this.cost = (new s.Unit).Init(s.UnitType.Sprite), this.costAmount = (new s.Unit).Init(s.UnitType.Label), this.remain = (new s.Unit).Init(s.UnitType.Label), this.soldOut = (new s.Unit).Init(s.UnitType.Node), this.soldOutBg = (new s.Unit).Init(s.UnitType.Node), this.rewardBg = (new s.Unit).Init(s.UnitType.Node), this.effect = (new s.Unit).Init(s.UnitType.Node), this._isInit = !1, this._button = null, this._data = null, this.content = null, this.Recycle = null, this._handler = null
            }
            UnitForEach(t) {
                [this.background, this.reward, this.description, this.button, this.cost, this.costAmount, this.remain, this.soldOut, this.soldOutBg, this.rewardBg, this.effect].forEach(t)
            }
            onLoad() {
                try {
                    this.Init()
                } catch (t) {
                    console.log("[RewardObject] onLoad: ", t)
                }
            }
            onDestroy() {
                try {
                    r.Clear()
                } catch (t) {
                    console.log("[RewardObject] onDestroy: ", t)
                }
            }
            Init() {
                if (this._isInit) return;
                this._isInit = !0, a.default.SetParent(this.background.node, l.RewardObjectLayer.Background), a.default.SetParent(this.reward.node, l.RewardObjectLayer.Icon), a.default.SetParent(this.description.node, l.RewardObjectLayer.Description), a.default.SetParent(this.button.node, l.RewardObjectLayer.Button), a.default.SetParent(this.cost.node, l.RewardObjectLayer.Cost), a.default.SetParent(this.costAmount.node, l.RewardObjectLayer.CostAmount), a.default.SetParent(this.remain.node, l.RewardObjectLayer.Remain), a.default.SetParent(this.soldOut.node, l.RewardObjectLayer.SoldOut), a.default.SetParent(this.soldOutBg.node, l.RewardObjectLayer.Foreground), a.default.SetParent(this.rewardBg.node, l.RewardObjectLayer.RewardBg), a.default.SetParent(this.effect.node, l.RewardObjectLayer.Effect), this.UnitForEach(t => {
                    this.units.push(t)
                }), this._button = this.button.node.getComponent(cc.Button), this._button.interactable = !1;
                const t = new cc.Component.EventHandler;
                t.target = this.node, t.component = "RewardObject", t.handler = "OnClick", this._button.clickEvents.push(t), this._handler = t => {
                    t.stopPropagation()
                }, this._button.node.on(cc.Node.EventType.TOUCH_START, this._handler), this._button.node.on(cc.Node.EventType.TOUCH_MOVE, this._handler), this._button.node.on(cc.Node.EventType.TOUCH_END, this._handler), this._button.node.on(cc.Node.EventType.TOUCH_CANCEL, this._handler)
            }
            set data(t) {
                var e, o;
                this._data = t;
                const i = (null === (e = null == t ? void 0 : t.Remain) || void 0 === e ? void 0 : e.hasOwnProperty("PlayerQuota")) ? t.Remain.PlayerQuota : null === (o = null == t ? void 0 : t.Remain) || void 0 === o ? void 0 : o.Limit;
                if (null == i) return;
                this.soldOut.active = 0 === i, this.soldOutBg.active = 0 === i;
                const {
                    Prefab: n,
                    Name: s
                } = c.EventSystem.Function(l.GetConfig)(t.Target[0].ItemId), a = c.EventSystem.Function(h.ShopAsset.Get)(), r = t.Source[0].Amount;
                this.remain.content = i + " left";
                const d = a >= r && i > 0;
                this._button.interactable = d, this.cost.node.color = d ? this._button.normalColor : this._button.disabledColor, this.costAmount.node.color = d ? this._button.normalColor : this._button.disabledColor, this.effect.active = d, this.costAmount.content = SS.Common.BaseFunction.addCommas(t.Source[0].Amount, 0), this.description.content = s.replace("$Amount", t.Target[0].Amount), this.LazyLoading(n)
            }
            set active(t) {
                this.units.forEach(e => {
                    e.active = t
                }), this.node.active = t
            }
            LazyLoading(t) {
                return n(this, void 0, void 0, function*() {
                    if (this.content && this.content.name === t) return;
                    this.content && this.Recycle();
                    const e = yield r.GetRewardInstance(t);
                    e && (this.content || (this.content = e, this.Recycle = () => {
                        this.content && (this.content.active = !1, r.PutRewardInstance(this.content), this.content = null)
                    }), this.content && (this.content.parent = this.reward.node, this.content.active = !0))
                })
            }
            OnClick(t) {
                c.EventSystem.Event(l.Confirm).Notify(this._data)
            }
        };
        i([u({
            type: s.Unit,
            displayName: "\u80cc\u666f"
        })], p.prototype, "background", void 0), i([u({
            type: s.Unit,
            displayName: "\u734e\u54c1"
        })], p.prototype, "reward", void 0), i([u({
            type: s.Unit,
            displayName: "\u734e\u54c1\u6558\u8ff0"
        })], p.prototype, "description", void 0), i([u({
            type: s.Unit,
            displayName: "\u514c\u63db\u9215"
        })], p.prototype, "button", void 0), i([u({
            type: s.Unit,
            displayName: "\u8ca8\u5e63"
        })], p.prototype, "cost", void 0), i([u({
            type: s.Unit,
            displayName: "\u82b1\u8cbb"
        })], p.prototype, "costAmount", void 0), i([u({
            type: s.Unit,
            displayName: "\u5269\u9918\u6578\u91cf"
        })], p.prototype, "remain", void 0), i([u({
            type: s.Unit,
            displayName: "\u552e\u5b8c"
        })], p.prototype, "soldOut", void 0), i([u({
            type: s.Unit,
            displayName: "\u552e\u5b8c\u80cc\u666f"
        })], p.prototype, "soldOutBg", void 0), i([u({
            type: s.Unit,
            displayName: "\u734e\u54c1\u80cc\u666f"
        })], p.prototype, "rewardBg", void 0), i([u({
            type: s.Unit,
            displayName: "\u6548\u679c"
        })], p.prototype, "effect", void 0), p = i([d], p), o.default = p, cc._RF.pop()
    }, {
        "../../../Component/ListView/ScrollObject": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../Helper/LayerSystem": void 0,
        "./GetIcon": "GetIcon",
        "./LuckyShopDefine": "LuckyShopDefine",
        "./RewardDefine": "RewardDefine"
    }],
    RewardPanel: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e2d68gBo1JNnqFLYCz2NuYs", "RewardPanel");
        var i = this && this.__decorate || function(t, e, o, i) {
                var n, s = arguments.length,
                    c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
                else
                    for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
                return s > 3 && c && Object.defineProperty(e, o, c), c
            },
            n = this && this.__awaiter || function(t, e, o, i) {
                return new(o || (o = Promise))(function(n, s) {
                    function c(t) {
                        try {
                            r(i.next(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function a(t) {
                        try {
                            r(i.throw(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function r(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(c, a)
                    }
                    r((i = i.apply(t, e || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.RewardPanel = o.RewardPanelSprite = o.ExchangeStatus = void 0;
        const s = t("../../../Component/NumberCountUp"),
            c = t("../../../Component/OrientationHandler/MultiStateNodeHandler"),
            a = t("../../../Helper/EventSystem"),
            r = t("./GetIcon"),
            h = t("./RewardDefine"),
            {
                ccclass: l,
                property: d
            } = cc._decorator;
        var u;
        (function(t) {
            t[t.Check = 0] = "Check", t[t.Success = 1] = "Success", t[t.Failed = 2] = "Failed", t[t.RunOut = 3] = "RunOut"
        })(u = o.ExchangeStatus || (o.ExchangeStatus = {}));
        let p = class {
            constructor() {
                this.sprite = null, this.check = null, this.success = null, this.failed = null, this.runOut = null
            }
            set content(t) {
                switch (t) {
                    case u.Check:
                        this.sprite.spriteFrame = this.check;
                        break;
                    case u.Success:
                        this.sprite.spriteFrame = this.success;
                        break;
                    case u.Failed:
                        this.sprite.spriteFrame = this.failed;
                        break;
                    case u.RunOut:
                        this.sprite.spriteFrame = this.runOut;
                        break;
                    default:
                        this.sprite.spriteFrame = this.failed
                }
            }
        };
        i([d({
            type: cc.Sprite
        })], p.prototype, "sprite", void 0), i([d({
            type: cc.SpriteFrame
        })], p.prototype, "check", void 0), i([d({
            type: cc.SpriteFrame
        })], p.prototype, "success", void 0), i([d({
            type: cc.SpriteFrame
        })], p.prototype, "failed", void 0), i([d({
            type: cc.SpriteFrame
        })], p.prototype, "runOut", void 0), p = i([l("RewardPanelSprite")], p), o.RewardPanelSprite = p;
        let y = class {
            constructor() {
                this.node = null, this.nodeHandler = null, this.title = new p, this.text = new p, this.icon = null, this.confirm = null, this.return = null, this.history = null, this.back = null, this.description = null, this.emoji = new p, this.costAmount = null, this.root = null, this.entries = null, this.fly = null, this.info = null, this.content = null, this._handler = null, this.Recycle = null
            }
            get active() {
                return this.node.active
            }
            set active(t) {
                this.node.active = t
            }
            Init() {
                this._handler = t => {
                    t.stopPropagation()
                }, this.confirm.node.on(cc.Node.EventType.TOUCH_START, this._handler), this.confirm.node.on(cc.Node.EventType.TOUCH_MOVE, this._handler), this.confirm.node.on(cc.Node.EventType.TOUCH_END, this._handler), this.confirm.node.on(cc.Node.EventType.TOUCH_CANCEL, this._handler), this.return.node.on(cc.Node.EventType.TOUCH_START, this._handler), this.return.node.on(cc.Node.EventType.TOUCH_MOVE, this._handler), this.return.node.on(cc.Node.EventType.TOUCH_END, this._handler), this.return.node.on(cc.Node.EventType.TOUCH_CANCEL, this._handler), this.history.node.on(cc.Node.EventType.TOUCH_START, this._handler), this.history.node.on(cc.Node.EventType.TOUCH_MOVE, this._handler), this.history.node.on(cc.Node.EventType.TOUCH_END, this._handler), this.history.node.on(cc.Node.EventType.TOUCH_CANCEL, this._handler), this.back.node.on(cc.Node.EventType.TOUCH_START, this._handler), this.back.node.on(cc.Node.EventType.TOUCH_MOVE, this._handler), this.back.node.on(cc.Node.EventType.TOUCH_END, this._handler), this.back.node.on(cc.Node.EventType.TOUCH_CANCEL, this._handler)
            }
            set status(t) {
                this.title.content = t, this.text.content = t, this.emoji.content = t, this.nodeHandler.status = t
            }
            set data(t) {
                this.content && this.Recycle();
                const {
                    Prefab: e,
                    Name: o
                } = a.EventSystem.Function(h.GetConfig)(t.Target[0].ItemId);
                this.costAmount.string = t.Source[0].Amount, this.description.string = o.replace("$Amount", t.Target[0].Amount), this.info.string = "", this.LazyLoading(e)
            }
            LazyLoading(t) {
                return n(this, void 0, void 0, function*() {
                    const e = yield r.GetRewardInstance(t);
                    e && (this.content || (this.content = e, this.Recycle = () => {
                        this.content && (this.content.active = !1, r.PutRewardInstance(this.content), this.content = null)
                    }), this.content && (this.content.parent = this.icon, this.content.active = !0))
                })
            }
            ShowEntriesAnimation(t, e) {
                return n(this, void 0, void 0, function*() {
                    const o = this.icon.convertToWorldSpaceAR(cc.Vec3.ZERO),
                        i = this.root;
                    i.active = !0, i.opacity = 0, this.entries.SetNumberNow(t), cc.tween(i).to(.5, {
                        opacity: 255
                    }).start(), yield SS.Common.WaitForSeconds(.5), yield this.FlyAnimation(o, .5), this.entries.CountUp(e, .5), yield SS.Common.WaitForSeconds(.5)
                })
            }
            FlyAnimation(t, e) {
                return n(this, void 0, void 0, function*() {
                    const o = this.fly.parent.convertToNodeSpaceAR(t),
                        i = this.fly.parent.convertToNodeSpaceAR(this.entries.node.convertToWorldSpaceAR(cc.Vec3.ZERO)),
                        n = this.fly;
                    cc.tween(n).call(() => {
                        n.active = !0, n.position = o
                    }).to(e, {
                        position: i
                    }).call(() => {
                        n.active = !1
                    }).start(), yield SS.Common.WaitForSeconds(e)
                })
            }
        };
        i([d({
            type: cc.Node
        })], y.prototype, "node", void 0), i([d({
            type: c.default
        })], y.prototype, "nodeHandler", void 0), i([d({
            type: p
        })], y.prototype, "title", void 0), i([d({
            type: p
        })], y.prototype, "text", void 0), i([d({
            type: cc.Node
        })], y.prototype, "icon", void 0), i([d({
            type: cc.Button
        })], y.prototype, "confirm", void 0), i([d({
            type: cc.Button
        })], y.prototype, "return", void 0), i([d({
            type: cc.Button
        })], y.prototype, "history", void 0), i([d({
            type: cc.Button
        })], y.prototype, "back", void 0), i([d({
            type: cc.Label
        })], y.prototype, "description", void 0), i([d({
            type: p
        })], y.prototype, "emoji", void 0), i([d({
            type: cc.Label
        })], y.prototype, "costAmount", void 0), i([d({
            type: cc.Node
        })], y.prototype, "root", void 0), i([d({
            type: s.NumberCountUp
        })], y.prototype, "entries", void 0), i([d({
            type: cc.Node
        })], y.prototype, "fly", void 0), i([d({
            type: cc.Label
        })], y.prototype, "info", void 0), y = i([l("RewardPanel")], y), o.RewardPanel = y, cc._RF.pop()
    }, {
        "../../../Component/NumberCountUp": void 0,
        "../../../Component/OrientationHandler/MultiStateNodeHandler": void 0,
        "../../../Helper/EventSystem": void 0,
        "./GetIcon": "GetIcon",
        "./RewardDefine": "RewardDefine"
    }],
    RewardTabController: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "8bb3d0z9YRAKpT6i1NyLwch", "RewardTabController");
        var i = this && this.__decorate || function(t, e, o, i) {
            var n, s = arguments.length,
                c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
            else
                for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
            return s > 3 && c && Object.defineProperty(e, o, c), c
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const n = t("../../../Component/ComponentPool"),
            s = t("./RewardTab"),
            {
                ccclass: c,
                property: a
            } = cc._decorator;
        class r {
            constructor() {
                this.object = null, this.string = "", this.enable = !1
            }
        }
        let h = class {
            constructor() {
                this.enable = null, this.disable = null, this.layout = null, this.poolDisable = null, this.poolEnable = null, this.listDisable = [], this.listEnable = []
            }
            Init() {
                this.poolDisable = new n.ComponentPool, this.poolEnable = new n.ComponentPool;
                const t = t => t.getComponent(s.default),
                    e = t => {
                        t.Init()
                    },
                    o = t => {
                        t.node.active = !1
                    };
                this.poolDisable.Init(this.disable, this.layout.node, t, e, o), this.poolEnable.Init(this.enable, this.layout.node, t, e, o), this.layout.enabled = !1
            }
            set active(t) {
                this.layout.node.active = t
            }
            set tabs(t) {
                this.Clear(), t.forEach((t, e) => {
                    let o = new r;
                    o.string = t, o.object = this.poolDisable.Get(), o.object.text = o.string, o.object.interactable = !0, o.object.node.setSiblingIndex(2 * e), this.listDisable.push(o);
                    let i = new r;
                    i.string = t, i.object = this.poolEnable.Get(), i.object.text = i.string, i.object.interactable = !1, i.object.node.setSiblingIndex(2 * e + 1), this.listEnable.push(i)
                }), this.Selected(t[0])
            }
            Selected(t) {
                this.listDisable.forEach(e => {
                    e.object.node.active = e.string !== t
                }), this.listEnable.forEach(e => {
                    e.object.node.active = e.string === t
                }), this.UpdateLayout()
            }
            Clear() {
                this.Recycle(), this.listEnable = [], this.listDisable = []
            }
            Recycle() {
                const t = [],
                    e = [];
                this.listDisable.forEach(t => {
                    e.push(t.object)
                }), this.listEnable.forEach(e => {
                    t.push(e.object)
                }), this.poolEnable.Put(t), this.poolDisable.Put(e)
            }
            UpdateLayout() {
                this.layout.enabled = !0, this.layout.updateLayout(), this.layout.enabled = !1
            }
        };
        i([a({
            type: cc.Prefab,
            displayName: "\u4e0d\u80fd\u9ede\u9078\u7684"
        })], h.prototype, "enable", void 0), i([a({
            type: cc.Prefab,
            displayName: "\u53ef\u4ee5\u9ede\u9078\u7684"
        })], h.prototype, "disable", void 0), i([a({
            type: cc.Layout
        })], h.prototype, "layout", void 0), h = i([c("RewardTabController")], h), o.default = h, cc._RF.pop()
    }, {
        "../../../Component/ComponentPool": void 0,
        "./RewardTab": "RewardTab"
    }],
    RewardTab: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "76b3etRdQZHk7cWK93yKjy4", "RewardTab");
        var i = this && this.__decorate || function(t, e, o, i) {
            var n, s = arguments.length,
                c = s < 3 ? e : null === i ? i = Object.getOwnPropertyDescriptor(e, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, i);
            else
                for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (c = (s < 3 ? n(c) : s > 3 ? n(e, o, c) : n(e, o)) || c);
            return s > 3 && c && Object.defineProperty(e, o, c), c
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const n = t("../../../Helper/EventSystem"),
            s = t("./RewardDefine"),
            {
                ccclass: c,
                property: a
            } = cc._decorator;
        let r = class extends cc.Component {
            constructor() {
                super(...arguments), this.background = null, this.label = null, this._handler = null, this.button = null
            }
            onLoad() {
                try {
                    this.Init()
                } catch (t) {
                    console.log("[RewardTab] onLoad: ", t)
                }
            }
            Init() {
                this.button = this.background.node.addComponent(cc.Button), this.button.clickEvents = [];
                const t = new cc.Component.EventHandler;
                t.target = this.node, t.component = "RewardTab", t.handler = "OnClick", this.button.clickEvents.push(t), this._handler = t => {
                    t.stopPropagation()
                }, this.button.node.on(cc.Node.EventType.TOUCH_START, this._handler), this.button.node.on(cc.Node.EventType.TOUCH_MOVE, this._handler), this.button.node.on(cc.Node.EventType.TOUCH_END, this._handler), this.button.node.on(cc.Node.EventType.TOUCH_CANCEL, this._handler)
            }
            set text(t) {
                this.label.string = t, this.background.node.width = 22 * t.length + 25
            }
            set interactable(t) {
                this.button.interactable = t
            }
            OnClick(t) {
                n.EventSystem.Event(s.SelectTab).Notify(this.label.string, !0)
            }
        };
        i([a({
            type: cc.Sprite
        })], r.prototype, "background", void 0), i([a({
            type: cc.Label
        })], r.prototype, "label", void 0), r = i([c], r), o.default = r, cc._RF.pop()
    }, {
        "../../../Helper/EventSystem": void 0,
        "./RewardDefine": "RewardDefine"
    }]
}, {}, ["Exchange", "GameList", "GameObject", "GetIcon", "HistoryDefine", "HistoryList", "HistoryObject", "IconTimer", "IconTips", "LuckyShop", "LuckyShopDefine", "LuckyShopTutorial", "MissionAsset", "MissionDefine", "MissionList", "MissionObject", "MissionObjectSetting", "MissionTab", "MissionTabController", "RewardDefine", "RewardList", "RewardObject", "RewardPanel", "RewardTab", "RewardTabController"]);