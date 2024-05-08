window.__require = function t(e, o, n) {
    function i(c, s) {
        if (!o[c]) {
            if (!e[c]) {
                var l = c.split("/");
                if (l = l[l.length - 1], !e[l]) {
                    var a = "function" == typeof __require && __require;
                    if (!s && a) return a(l, !0);
                    if (r) return r(l, !0);
                    throw new Error("Cannot find module '" + c + "'")
                }
                c = l
            }
            var u = o[c] = {
                exports: {}
            };
            e[c][0].call(u.exports, function(t) {
                return i(e[c][1][t] || t)
            }, u, u.exports, t, e, o, n)
        }
        return o[c].exports
    }
    for (var r = "function" == typeof __require && __require, c = 0; c < n.length; c++) i(n[c]);
    return i
}({
    SkillGameArrowAni: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "3f7c5accP9JMZn3KjeLU+L/", "SkillGameArrowAni");
        var n, i = this && this.__extends || (n = function(t, e) {
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
            r = this && this.__decorate || function(t, e, o, n) {
                var i, r = arguments.length,
                    c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.SkillGameArrowAni = void 0;
        var c, s = cc._decorator,
            l = s.ccclass,
            a = s.property;
        (function(t) {
            t[t.Idle = 0] = "Idle", t[t.Run = 1] = "Run", t[t.Stop = 2] = "Stop"
        })(c || (c = {}));
        var u = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.m_nodeArrowPivot = null, e.m_nowState = c.Idle, e.RIGHT_SPEED = 40, e.BACK_SPEED = -40, e.MAX_ANGLE = 60, e.MIN_ANGLE = -60, e.MAX_RED_ANGLE = 39, e.MIN_RED_ANGLE = -39, e
            }
            return i(e, t), e.prototype.Run = function() {
                this.m_nodeArrowPivot.setRotation(this.MIN_RED_ANGLE), this.m_moveSpeed = this.RIGHT_SPEED, this.m_nowState = c.Run
            }, e.prototype.Stop = function() {
                this.m_nowState = c.Stop
            }, e.prototype.GetResult = function() {
                return this.m_nodeArrowPivot.rotation >= this.MIN_RED_ANGLE && this.m_nodeArrowPivot.rotation <= this.MAX_RED_ANGLE ? 0 : 1
            }, e.prototype.update = function(t) {
                switch (this.m_nowState) {
                    case c.Idle:
                        break;
                    case c.Run:
                        this.RunState(t);
                        break;
                    case c.Stop:
                        this.StopState()
                }
            }, e.prototype.lateUpdate = function() {
                switch (this.m_nowState) {
                    case c.Idle:
                        break;
                    case c.Run:
                        this.CheckMaxAngle();
                        break;
                    case c.Stop:
                }
            }, e.prototype.RunState = function(t) {
                this.m_nodeArrowPivot.rotation += t * this.m_moveSpeed
            }, e.prototype.CheckMaxAngle = function() {
                this.m_nodeArrowPivot.rotation >= this.MAX_ANGLE ? this.m_moveSpeed = this.BACK_SPEED : this.m_nodeArrowPivot.rotation <= this.MIN_ANGLE && (this.m_moveSpeed = this.RIGHT_SPEED)
            }, e.prototype.StopState = function() {
                this.m_nowState = c.Idle
            }, r([a(cc.Node)], e.prototype, "m_nodeArrowPivot", void 0), r([l], e)
        }(cc.Component);
        o.SkillGameArrowAni = u, cc._RF.pop()
    }, {}],
    SkillGameMgr: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "ec5a9X3ZU9N5pPLye14tevO", "SkillGameMgr");
        var n, i = this && this.__extends || (n = function(t, e) {
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
            r = this && this.__decorate || function(t, e, o, n) {
                var i, r = arguments.length,
                    c = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, o, c) : i(e, o)) || c);
                return r > 3 && c && Object.defineProperty(e, o, c), c
            },
            c = this && this.__awaiter || function(t, e, o, n) {
                return new(o || (o = Promise))(function(i, r) {
                    function c(t) {
                        try {
                            l(n.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        try {
                            l(n.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(c, s)
                    }
                    l((n = n.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var o, n, i, r, c = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: s(0),
                    throw: s(1),
                    return: s(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function s(t) {
                    return function(e) {
                        return l([t, e])
                    }
                }

                function l(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return c.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                c.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    c.label = r[1];
                                    break
                                }
                                if (6 === r[0] && c.label < i[1]) {
                                    c.label = i[1], i = r;
                                    break
                                }
                                if (i && c.label < i[2]) {
                                    c.label = i[2], c.ops.push(r);
                                    break
                                }
                                i[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        r = e.call(t, c)
                    } catch (s) {
                        r = [6, s], n = 0
                    } finally {
                        o = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.SkillGameMgr = void 0;
        var l, a = t("./SkillGameArrowAni"),
            u = t("../../../LobbyCommon/ModuleBase"),
            p = t("../../../LobbyCommon/Helper/EventSystem"),
            _ = cc._decorator,
            m = _.ccclass,
            h = _.property;
        (function(t) {
            t[t.Win = 0] = "Win", t[t.Lose = 1] = "Lose"
        })(l || (l = {}));
        var f = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.root = null, e.m_nodePromptPanel = null, e.m_labelUserWin = null, e.m_labelLosePercent = [], e.m_StopBtn = null, e.m_nodeResultPanel = null, e.m_labelResultWin = null, e.m_labelResultPercent = null, e.m_arrowAni = null, e.m_landscape = cc.Size.ZERO, e.m_portrait = cc.Size.ZERO, e.m_nodeAnnounce = null, e.DENOMINATION = .01, e.m_isClickStop = !1, e
            }
            return i(e, t), e.prototype._onLoad = function() {
                return c(this, void 0, void 0, function() {
                    return s(this, function() {
                        return p.EventSystem.Event(p.ShowLogoutSkillGame).Insert(this.ShowPanel, this), [2]
                    })
                })
            }, e.prototype._onDestroy = function() {
                return c(this, void 0, void 0, function() {
                    return s(this, function() {
                        return p.EventSystem.Event(p.ShowLogoutSkillGame).Remove(this.ShowPanel, this), [2]
                    })
                })
            }, e.prototype.ShowPanel = function(t, e, o) {
                this.m_userWin = t, this.m_loseRate = e;
                var n = SS.Common.BaseFunction.accMul(t, this.DENOMINATION);
                this.m_labelUserWin.string = "$" + this.TruncateCurrency(n, this.DENOMINATION);
                for (var i = SS.Common.BaseFunction.accMul(this.m_loseRate, 100).toString() + "%", r = 0, c = this.m_labelLosePercent; r < c.length; r++) c[r].string = i;
                this.m_onStopSkillGame = o, this.m_nodePromptPanel.active = !0, this.m_nodeAnnounce.active = !0, this.m_nodeResultPanel.active = !1, this.root.active = !0, this.m_arrowAni.Run(), this.m_isClickStop = !1, this.m_StopBtn.interactable = !0, p.EventSystem.Event(p.SystemMsg.Open).Notify(this.root, this.m_landscape, this.m_portrait, 150, this.OnClickClose.bind(this))
            }, e.prototype.TruncateCurrency = function(t, e) {
                var o = SS.Common.BaseFunction.accDiv(1, e);
                return t = SS.Common.BaseFunction.accMul(t, o), t = Math.floor(t), SS.Common.BaseFunction.accDiv(t, o)
            }, e.prototype.OnClickStop = function() {
                if (!this.m_isClickStop) {
                    this.m_isClickStop = !0, this.m_StopBtn.interactable = !1, this.m_arrowAni.Stop();
                    var t = this.m_arrowAni.GetResult();
                    if (t == l.Win) this.m_labelResultWin.string = this.m_labelUserWin.string, this.m_labelResultPercent.string = "100%";
                    else {
                        this.m_userWin = SS.Common.BaseFunction.accMul(this.m_loseRate, this.m_userWin);
                        var e = SS.Common.BaseFunction.accMul(this.m_userWin, this.DENOMINATION);
                        this.m_labelResultWin.string = "$" + this.TruncateCurrency(e, this.DENOMINATION), this.m_labelResultPercent.string = this.m_labelLosePercent[0].string
                    }
                    this.m_nodePromptPanel.active = !1, this.m_nodeAnnounce.active = !1, this.m_nodeResultPanel.active = !0, this.DelayToLogout(t)
                }
            }, e.prototype.DelayToLogout = function(t) {
                return c(this, void 0, void 0, function() {
                    return s(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return [4, SS.Common.WaitForSeconds(3)];
                            case 1:
                                return e.sent(), p.EventSystem.Event(p.SystemMsg.Close).Notify(), this.m_onStopSkillGame(t), [2]
                        }
                    })
                })
            }, e.prototype.OnClickClose = function() {
                this.m_isClickStop || (p.EventSystem.Event(p.SkillGame.OnClickClose).Notify(), p.EventSystem.Event(p.SystemMsg.Close).Notify(), this.root.active = !1)
            }, r([h(cc.Node)], e.prototype, "root", void 0), r([h(cc.Node)], e.prototype, "m_nodePromptPanel", void 0), r([h(cc.Label)], e.prototype, "m_labelUserWin", void 0), r([h([cc.Label])], e.prototype, "m_labelLosePercent", void 0), r([h(cc.Button)], e.prototype, "m_StopBtn", void 0), r([h(cc.Node)], e.prototype, "m_nodeResultPanel", void 0), r([h(cc.Label)], e.prototype, "m_labelResultWin", void 0), r([h(cc.Label)], e.prototype, "m_labelResultPercent", void 0), r([h(a.SkillGameArrowAni)], e.prototype, "m_arrowAni", void 0), r([h(cc.Size)], e.prototype, "m_landscape", void 0), r([h(cc.Size)], e.prototype, "m_portrait", void 0), r([h(cc.Node)], e.prototype, "m_nodeAnnounce", void 0), r([m], e)
        }(u.default);
        o.SkillGameMgr = f, cc._RF.pop()
    }, {
        "../../../LobbyCommon/Helper/EventSystem": void 0,
        "../../../LobbyCommon/ModuleBase": void 0,
        "./SkillGameArrowAni": "SkillGameArrowAni"
    }]
}, {}, ["SkillGameArrowAni", "SkillGameMgr"]);