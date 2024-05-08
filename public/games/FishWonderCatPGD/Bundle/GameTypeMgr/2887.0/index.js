window.__require = function e(t, o, n) {
    function r(a, p) {
        if (!o[a]) {
            if (!t[a]) {
                var c = a.split("/");
                if (c = c[c.length - 1], !t[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!p && l) return l(c, !0);
                    if (i) return i(c, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = c
            }
            var y = o[a] = {
                exports: {}
            };
            t[a][0].call(y.exports, function(e) {
                return r(t[a][1][e] || e)
            }, y, y.exports, e, t, o, n)
        }
        return o[a].exports
    }
    for (var i = "function" == typeof __require && __require, a = 0; a < n.length; a++) r(n[a]);
    return r
}({
    GameTypeElement: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "f088elWYWlGpIaYMtxeLyTw", "GameTypeElement");
        var n, r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                    })(e, t)
            }, function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            }),
            i = this && this.__decorate || function(e, t, o, n) {
                var r, i = arguments.length,
                    a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
                else
                    for (var p = e.length - 1; p >= 0; p--)(r = e[p]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
                return i > 3 && a && Object.defineProperty(t, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.GameTypeElement = void 0;
        var a = cc._decorator,
            p = a.ccclass,
            c = a.property,
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.TypeName = "", t.NormalNode = null, t.SelectNode = null, t
                }
                return r(t, e), t.prototype._onLoad = function() {
                    this.m_DelClickGameType = new SS.Common.Delegate
                }, t.prototype._onDestroy = function() {
                    this.m_DelClickGameType = null
                }, t.prototype.OnClickGameType = function() {
                    this.m_DelClickGameType.Length > 0 && this.m_DelClickGameType.Notify(this.TypeName)
                }, i([c()], t.prototype, "TypeName", void 0), i([c(cc.Node)], t.prototype, "NormalNode", void 0), i([c(cc.Node)], t.prototype, "SelectNode", void 0), i([p], t)
            }(cc.Component);
        o.GameTypeElement = l, cc._RF.pop()
    }, {}],
    GameTypeMgr: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "fe6bcqNF39GPbHNi5D77dNK", "GameTypeMgr");
        var n, r = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var o in t) t.hasOwnProperty(o) && (e[o] = t[o])
                    })(e, t)
            }, function(e, t) {
                function o() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (o.prototype = t.prototype, new o)
            }),
            i = this && this.__decorate || function(e, t, o, n) {
                var r, i = arguments.length,
                    a = i < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, o, n);
                else
                    for (var p = e.length - 1; p >= 0; p--)(r = e[p]) && (a = (i < 3 ? r(a) : i > 3 ? r(t, o, a) : r(t, o)) || a);
                return i > 3 && a && Object.defineProperty(t, o, a), a
            },
            a = this && this.__awaiter || function(e, t, o, n) {
                return new(o || (o = Promise))(function(r, i) {
                    function a(e) {
                        try {
                            c(n.next(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function p(e) {
                        try {
                            c(n.throw(e))
                        } catch (t) {
                            i(t)
                        }
                    }

                    function c(e) {
                        var t;
                        e.done ? r(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                            e(t)
                        })).then(a, p)
                    }
                    c((n = n.apply(e, t || [])).next())
                })
            },
            p = this && this.__generator || function(e, t) {
                var o, n, r, i, a = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: p(0),
                    throw: p(1),
                    return: p(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function p(e) {
                    return function(t) {
                        return c([e, t])
                    }
                }

                function c(i) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, i[1])).done) return r;
                        switch (n = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return a.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = a.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    a.label = i[1];
                                    break
                                }
                                if (6 === i[0] && a.label < r[1]) {
                                    a.label = r[1], r = i;
                                    break
                                }
                                if (r && a.label < r[2]) {
                                    a.label = r[2], a.ops.push(i);
                                    break
                                }
                                r[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        i = t.call(e, a)
                    } catch (p) {
                        i = [6, p], n = 0
                    } finally {
                        o = r = 0
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
        }), o.GameTypeMgr = o.GameType = void 0;
        var c = e("../../../LobbyCommon/Helper/EventSystem"),
            l = e("../../../LobbyCommon/Helper/LayerSystem"),
            y = e("../../../LobbyCommon/ModuleBase"),
            s = e("./GameTypeElement"),
            m = cc._decorator,
            u = m.ccclass,
            h = m.property;
        (function(e) {
            e[e.All = -1] = "All", e[e.SLOT = 0] = "SLOT", e[e.FISH = 1] = "FISH", e[e.PICKEM = 2] = "PICKEM", e[e.KENO = 3] = "KENO", e[e.BINGO = 4] = "BINGO", e[e.ARCADE = 5] = "ARCADE"
        })(o.GameType || (o.GameType = {}));
        var f = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.gameTypeElement = [], t.verticleLayout = null, t.maskSprite = null, t.lightMaskNode = null, t.lightSpriteNode = null, t.layerName = "", t
            }
            return r(t, e), t.prototype._onLoad = function() {
                return a(this, void 0, void 0, function() {
                    var e;
                    return p(this, function() {
                        return (e = this).lightMoveSeq = cc.sequence(cc.callFunc(function() {
                            return e.lightSpriteNode.setPosition(cc.v2(-210, 0))
                        }), cc.moveTo(2, cc.v2(210, 0)), cc.delayTime(1)).repeatForever(), e.gameTypeElement.forEach(function(t) {
                            t._onLoad(), t.m_DelClickGameType.Insert(e.OnClickGameType, e), t.node.active = !1
                        }), "" !== this.layerName && l.default.SetParent(this.node, this.layerName), c.EventSystem.Event(c.Type.ShowSelectType).Insert(this.ShowSelectType, this), c.EventSystem.Event(c.Type.HideSelectType).Insert(this.HideSelectType, this), c.EventSystem.Event(c.Type.SetBackground).Insert(this.SetDarkMaskSprite, this), c.EventSystem.Event(c.Type.InitGameType).Insert(this.InitGameType, this), [2]
                    })
                })
            }, t.prototype._onDestroy = function() {
                return a(this, void 0, void 0, function() {
                    return p(this, function() {
                        return this.gameTypeElement && (this.gameTypeElement = null), this.maskSprite && this.maskSprite.spriteFrame && this.maskSprite.spriteFrame.decRef(), c.EventSystem.Event(c.Type.ShowSelectType).Remove(this.ShowSelectType, this), c.EventSystem.Event(c.Type.HideSelectType).Remove(this.HideSelectType, this), c.EventSystem.Event(c.Type.SetBackground).Remove(this.SetDarkMaskSprite, this), c.EventSystem.Event(c.Type.InitGameType).Remove(this.InitGameType, this), [2]
                    })
                })
            }, t.prototype.InitGameType = function(e) {
                var t = function(e) {
                        var t = o.gameTypeElement.findIndex(function(t) {
                            return t.TypeName === e
                        }); - 1 !== t && (o.gameTypeElement[t].node.active = !0)
                    },
                    o = this;
                for (var n in e) t(n);
                var r = SS.Common.GameEnvironment.CurrentGameTypeNow;
                r || (r = "ALL"), this.ShowTypeLightFlow(r), this.UpdateLayout()
            }, t.prototype.UpdateLayout = function() {
                this.verticleLayout.enabled = !0, this.verticleLayout.updateLayout(), this.verticleLayout.enabled = !1
            }, t.prototype.OnClickGameType = function(e) {
                e !== SS.Common.GameEnvironment.CurrentGameTypeNow && (this.ShowTypeLightFlow(e), c.EventSystem.Event(c.Type.ClickType).Notify(e))
            }, t.prototype.ShowTypeLightFlow = function(e) {
                this.currentLightSeq && this.lightSpriteNode.stopAction(this.currentLightSeq);
                var t = this.gameTypeElement.findIndex(function(t) {
                    return t.TypeName === e
                }); - 1 != t && (this.gameTypeElement.forEach(function(t) {
                    t.TypeName === e ? (t.NormalNode.active = !1, t.SelectNode.active = !0) : (t.NormalNode.active = !0, t.SelectNode.active = !1)
                }), this.lightMaskNode.setParent(this.gameTypeElement[t].node), this.lightMaskNode.setPosition(cc.Vec2.ZERO), this.currentLightSeq = this.lightSpriteNode.runAction(this.lightMoveSeq))
            }, t.prototype.ShowSelectType = function() {
                this.ShowTypeLightFlow(SS.Common.GameEnvironment.CurrentGameTypeNow), this.lightSpriteNode.opacity = 255
            }, t.prototype.HideSelectType = function() {
                if (console.log("HideSelectType !!"), this.lightSpriteNode.opacity = 0, "" != SS.Common.GameEnvironment.CurrentGameTypeNow)
                    for (var e = 0; e < this.gameTypeElement.length; e++)
                        if (console.log(SS.Common.GameEnvironment.CurrentGameTypeNow + " == " + this.gameTypeElement[e].TypeName), SS.Common.GameEnvironment.CurrentGameTypeNow == this.gameTypeElement[e].TypeName) {
                            this.gameTypeElement[e].NormalNode.active = !0, this.gameTypeElement[e].SelectNode.active = !1;
                            break
                        }
            }, t.prototype.SetDarkMaskSprite = function(e) {
                this.maskSprite.spriteFrame = e, this.maskSprite.spriteFrame.addRef()
            }, i([h([s.GameTypeElement])], t.prototype, "gameTypeElement", void 0), i([h(cc.Layout)], t.prototype, "verticleLayout", void 0), i([h(cc.Sprite)], t.prototype, "maskSprite", void 0), i([h(cc.Node)], t.prototype, "lightMaskNode", void 0), i([h(cc.Node)], t.prototype, "lightSpriteNode", void 0), i([h({
                displayName: "\u662f\u5426\u8981\u639b\u5728\u81ea\u5b9a\u7fa9\u7684\u5716\u5c64(\u9810\u8a2d\u662f GameTypeMgr)"
            })], t.prototype, "layerName", void 0), i([u], t)
        }(y.default);
        o.GameTypeMgr = f, cc._RF.pop()
    }, {
        "../../../LobbyCommon/Helper/EventSystem": void 0,
        "../../../LobbyCommon/Helper/LayerSystem": void 0,
        "../../../LobbyCommon/ModuleBase": void 0,
        "./GameTypeElement": "GameTypeElement"
    }]
}, {}, ["GameTypeElement", "GameTypeMgr"]);