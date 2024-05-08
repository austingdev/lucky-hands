window.__require = function t(e, n, o) {
    function i(a, s) {
        if (!n[a]) {
            if (!e[a]) {
                var c = a.split("/");
                if (c = c[c.length - 1], !e[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!s && l) return l(c, !0);
                    if (r) return r(c, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = c
            }
            var p = n[a] = {
                exports: {}
            };
            e[a][0].call(p.exports, function(t) {
                return i(e[a][1][t] || t)
            }, p, p.exports, t, e, n, o)
        }
        return n[a].exports
    }
    for (var r = "function" == typeof __require && __require, a = 0; a < o.length; a++) i(o[a]);
    return i
}({
    BookPage: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "ec68erMdh5GMrsifU8rxcDu", "BookPage");
        var o, i = this && this.__extends || (o = function(t, e) {
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
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = cc._decorator,
            s = a.ccclass,
            c = a.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.button = null, e.root = null, e.callback = null, e.id = "", e
                }
                return i(e, t), e.prototype.SetContent = function(t) {
                    t.setParent(this.root), t.setPosition(cc.Vec3.ZERO)
                }, e.prototype.OnClick = function() {
                    this.callback()
                }, r([c({
                    type: cc.Button,
                    displayName: "\u6309\u9215"
                })], e.prototype, "button", void 0), r([c({
                    type: cc.Node,
                    displayName: "\u639b\u4e0a\u7269\u4ef6"
                })], e.prototype, "root", void 0), r([s], e)
            }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {}],
    Book: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "9bb42JDbPhM5LsVpCaDtAHW", "Book");
        var o, i = this && this.__extends || (o = function(t, e) {
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
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            a = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
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
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (s) {
                        r = [6, s], o = 0
                    } finally {
                        n = i = 0
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
        });
        var c = t("./BookPage"),
            l = t("./IconCrtl"),
            p = cc._decorator,
            u = p.ccclass,
            h = p.property,
            f = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.pageView = null, e.bookPage = null, e.point = null, e.curPoint = null, e.layout = null, e.dot = [], e.pageIndex = 0, e.pageNum = 0, e.width = 0, e._isScrolling = !1, e
                }
                return i(e, t), e.prototype.Download = function(t, e) {
                    return a(this, void 0, void 0, function() {
                        return s(this, function() {
                            return this.node.active = !0, e(), [2]
                        })
                    })
                }, e.prototype.onLoad = function() {
                    var e = this;
                    t.prototype.onLoad.call(this), this.width = this.pageView.node.width, this.pageView.scrollToPage(1, 0), this.pageView.node.on("page-turning", this.PointCrtl.bind(this)), this.pageView.node.on("scroll-began", function() {
                        e._isScrolling = !0
                    }), this.pageView.node.on("scroll-ended", function() {
                        console.log(e.pageView.getCurrentPageIndex()), 0 === e.pageView.getCurrentPageIndex() ? (e.pageView.scrollToPage(e.pageView.getPages().length - 2, 0), e.PointCrtl(e.pageView)) : e.pageView.getCurrentPageIndex() === e.pageView.getPages().length - 1 && (e.pageView.scrollToPage(1, 0), e.PointCrtl(e.pageView))
                    }), this.schedule(this.AutoNextPage, 5)
                }, e.prototype.onDestroy = function() {
                    this.unschedule(this.AutoNextPage)
                }, e.prototype.onEnable = function() {
                    this.pageView.scrollToPage(1, 0), this.pageView.setCurrentPageIndex(1), this.PointCrtl(this.pageView)
                }, e.prototype.AutoNextPage = function() {
                    if (!0 !== this._isScrolling) {
                        var t = this.pageView.getCurrentPageIndex();
                        this.pageView.scrollToPage(t + 1, .4)
                    } else this._isScrolling = !1
                }, e.prototype.SetContent = function(t) {
                    console.log("[Icon Module] Set Book Content : ", t);
                    for (var e = 0, n = this.dot; e < n.length; e++) n[e].node.destroy();
                    this.dot = [];
                    for (var o = 0, i = this.layout.node.children; o < i.length; o++) i[o].destroy();
                    if (this.layout.node.removeAllChildren(), !(t.length <= 0)) {
                        for (var r = function(t) {
                                var e = t.eventIcon.node;
                                if (!e) return "continue";
                                a.NewPage(e, null, function() {
                                    t.eventIcon.onClick.Notify()
                                });
                                var n = new cc.Node,
                                    o = n.addComponent(cc.Sprite);
                                n.setParent(a.layout.node), a.dot.push(o), o.spriteFrame = a.point
                            }, a = this, s = 0, c = t; s < c.length; s++) r(c[s]);
                        this.NewPage(t[t.length - 1].eventIcon.node, 0), this.NewPage(t[0].eventIcon.node), this.layout.enabled = !0, this.layout.updateLayout(), this.layout.enabled = !1, this.pageView.scrollToPage(1, 0), this.PointCrtl(this.pageView)
                    }
                }, e.prototype.NewPage = function(t, e, n) {
                    void 0 === e && (e = null), void 0 === n && (n = null);
                    var o;
                    o = null === e ? this.pageView.getPages().length : e;
                    var i = cc.instantiate(this.bookPage).getComponent(c.default),
                        r = cc.instantiate(t);
                    return this.scheduleOnce(function() {
                        r.active = !0
                    }, .5), i.callback = n, i.node.width = this.pageView.node.width, i.SetContent(r), this.pageView.insertPage(i.node, o), i
                }, e.prototype.PointCrtl = function(t) {
                    for (var e = t.getCurrentPageIndex() - 1, n = 0, o = this.dot; n < o.length; n++) o[n].spriteFrame = this.point;
                    this.dot[e] && (this.dot[e].spriteFrame = this.curPoint)
                }, r([h({
                    type: cc.PageView,
                    displayName: "PageView"
                })], e.prototype, "pageView", void 0), r([h({
                    type: cc.Prefab,
                    displayName: "\u66f8\u9801 Prefab"
                })], e.prototype, "bookPage", void 0), r([h({
                    type: cc.SpriteFrame,
                    displayName: "\u9801\u7c64\u7684\u5716\u7247"
                })], e.prototype, "point", void 0), r([h({
                    type: cc.SpriteFrame,
                    displayName: "\u4ee3\u8868\u7576\u524d\u5728\u54ea\u4e00\u9801\u7684\u5716\u7247"
                })], e.prototype, "curPoint", void 0), r([h({
                    type: cc.Layout,
                    displayName: "\u639b\u5716\u7247\u7684 Layout"
                })], e.prototype, "layout", void 0), r([u], e)
            }(l.IconCrtl);
        n.default = f, cc._RF.pop()
    }, {
        "./BookPage": "BookPage",
        "./IconCrtl": "IconCrtl"
    }],
    EventIcon_ExtraComps: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "dfdaeewPilMCockTZwrbr77", "EventIcon_ExtraComps");
        var o, i = this && this.__extends || (o = function(t, e) {
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
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            a = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
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
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (s) {
                        r = [6, s], o = 0
                    } finally {
                        n = i = 0
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
        });
        var c = t("../../../../LobbyCommon/Helper/EventSystem"),
            l = t("./EventIcon"),
            p = cc._decorator,
            u = p.ccclass,
            h = (p.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), e.prototype.Download = function(e, n) {
                    return a(this, void 0, void 0, function() {
                        return s(this, function() {
                            return this.HasEvent ? t.prototype.Download.call(this, e, n) : (this.node.active = !1, n()), [2]
                        })
                    })
                }, Object.defineProperty(e.prototype, "HasEvent", {
                    get: function() {
                        var t = !1,
                            e = c.EventSystem.Function("[extra_comps]_is_in_progress");
                        return e && (t = e()), t
                    },
                    enumerable: !1,
                    configurable: !0
                }), r([u], e)
            }(l.default));
        n.default = h, cc._RF.pop()
    }, {
        "../../../../LobbyCommon/Helper/EventSystem": void 0,
        "./EventIcon": "EventIcon"
    }],
    EventIcon_Game: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "ca5b0U64kpKSrrj7c4Oet5l", "EventIcon_Game");
        var o, i = this && this.__extends || (o = function(t, e) {
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
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            a = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
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
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (s) {
                        r = [6, s], o = 0
                    } finally {
                        n = i = 0
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
        });
        var c = t("../../../../LobbyCommon/Helper/EventSystem"),
            l = t("./EventIcon"),
            p = cc._decorator,
            u = p.ccclass,
            h = (p.property, function(t) {
                function e() {
                    return null !== t && t.apply(this, arguments) || this
                }
                return i(e, t), e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.onClick.Insert(this.OnClick, this)
                }, e.prototype.OnClick = function() {
                    return a(this, void 0, void 0, function() {
                        var t;
                        return s(this, function() {
                            return t = this.extraData.game_name, c.EventSystem.Event(c.Icon.OnClickIcon).Notify(t), [2]
                        })
                    })
                }, r([u], e)
            }(l.default));
        n.default = h, cc._RF.pop()
    }, {
        "../../../../LobbyCommon/Helper/EventSystem": void 0,
        "./EventIcon": "EventIcon"
    }],
    EventIcon: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "95db33Qye9CRo+rDvO9nXW7", "EventIcon");
        var o, i = this && this.__extends || (o = function(t, e) {
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
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            a = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
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
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (s) {
                        r = [6, s], o = 0
                    } finally {
                        n = i = 0
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
        });
        var c = t("../../../../LobbyCommon/Component/AudioMgr"),
            l = t("../../../../LobbyCommon/Connect/Script/ConnectPanelMgr"),
            p = t("../../../../LobbyCommon/Helper/Download"),
            u = t("../../../../LobbyCommon/Helper/EventSystem"),
            h = t("./IconCrtl"),
            f = cc._decorator,
            y = f.ccclass,
            d = f.property,
            m = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.extraSprite = null, e.horizon = null, e.vertical = null, e.extraSpriteButton = null, e.text = null, e.bundleName = "", e.bundleType = "", e.buttonAction = "", e.thumbNail = "", e.bindInfo = null, e.extraData = null, e.version = "", e.close = null, e.interrupt = !1, e
                }
                var n;
                return i(e, t), n = e, Object.defineProperty(e.prototype, "buttonText", {
                    set: function(t) {
                        this.text && (this.text.string = t, this.extraSpriteButton.active = "" !== t)
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.Download = function(t, e) {
                    return a(this, void 0, void 0, function() {
                        return s(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.version = t, "" === this.thumbNail ? [3, 3] : [4, this.DownloadImage()];
                                case 1:
                                    return n.sent(), [4, this.DownloadExtraImage(!1)];
                                case 2:
                                    n.sent(), n.label = 3;
                                case 3:
                                    return this.node.active = !0, this.extraSprite.active = !1, e(), [2]
                            }
                        })
                    })
                }, e.prototype.DownloadImage = function() {
                    return a(this, void 0, void 0, function() {
                        var t;
                        return s(this, function(e) {
                            switch (e.label) {
                                case 0:
                                    return this.thumbNail.includes(".png") || (this.thumbNail += ".png"), [4, p.Download.Image("Popup/" + this.version + "/" + this.thumbNail)];
                                case 1:
                                    return (t = e.sent()) && (this.sprite.spriteFrame = t), [2]
                            }
                        })
                    })
                }, e.prototype.DownloadExtraImage = function(t) {
                    return a(this, void 0, void 0, function() {
                        var e, n, o, i;
                        return s(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return t && l.ConnectPanelMgr.Instance.ShowConnectPanel(5), this.horizon.spriteFrame ? [3, 2] : ((e = this.extraData.horizontal).includes(".png") || (e += ".png"), [4, p.Download.Image("Popup/" + this.version + "/" + e + "?" + this.version)]);
                                case 1:
                                    (n = r.sent()) && (this.horizon.spriteFrame = n), r.label = 2;
                                case 2:
                                    return this.vertical.spriteFrame ? [3, 4] : ((o = this.extraData.vertical).includes(".png") || (o += ".png"), [4, p.Download.Image("Popup/" + this.version + "/" + o + "?" + this.version)]);
                                case 3:
                                    (i = r.sent()) && (this.vertical.spriteFrame = i), r.label = 4;
                                case 4:
                                    return t && l.ConnectPanelMgr.Instance.DisableConnectPanel(5), [2]
                            }
                        })
                    })
                }, e.prototype.SetCustomData = function(t, e) {
                    this.bindInfo = t, this.extraData = e
                }, e.prototype.onLoad = function() {
                    t.prototype.onLoad.call(this), this.close = this.Close.bind(this), this.onClick.Insert(this.OnClick, this), this.horizon && (this.horizon.node.active = !1), this.vertical && (this.vertical.node.active = !1)
                }, e.prototype.OnClick = function() {
                    n.IsOpen || (c.AudioMgr.Instance.Play("event_open", !1, .5), n.IsOpen = !0, this.extraSprite.active = !0, u.EventSystem.Event(u.SystemMsg.Open).Notify(this.extraSprite, cc.Size.ZERO, cc.Size.ZERO, 150, this.close, !0))
                }, e.prototype.OnClickButton = function() {
                    if ("game" === this.buttonAction) {
                        this.interrupt = !0, u.EventSystem.Event(u.SystemMsg.ClearQueue).Notify();
                        var t = this.extraData.game_name;
                        u.EventSystem.Event(u.Icon.OnClickIcon).Notify(t)
                    }
                    this.Close()
                }, e.prototype.Show = function() {
                    return a(this, void 0, Promise, function() {
                        return s(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    this.interrupt = !1, this.OnClick(), t.label = 1;
                                case 1:
                                    return this.extraSprite.active ? [4, SS.Common.WaitForSeconds(0)] : [3, 3];
                                case 2:
                                    return t.sent(), [3, 1];
                                case 3:
                                    return [2, this.interrupt]
                            }
                        })
                    })
                }, e.prototype.Close = function() {
                    n.IsOpen && (u.EventSystem.Event(u.SystemMsg.Close).Notify(), n.IsOpen = !1, this.extraSprite.active = !1)
                }, e.IsOpen = !1, r([d({
                    type: cc.Node,
                    displayName: "\u984d\u5916\u8df3\u51fa\u7684\u5716\u7247"
                })], e.prototype, "extraSprite", void 0), r([d({
                    type: cc.Sprite,
                    displayName: "\u984d\u5916\u8df3\u51fa\u7684\u6a6b\u7248\u5716\u7247"
                })], e.prototype, "horizon", void 0), r([d({
                    type: cc.Sprite,
                    displayName: "\u984d\u5916\u8df3\u51fa\u7684\u76f4\u7248\u5716\u7247"
                })], e.prototype, "vertical", void 0), r([d({
                    type: cc.Node,
                    displayName: "\u984d\u5916\u8df3\u51fa\u7684\u5716\u7247\u4e0a\u6309\u9215"
                })], e.prototype, "extraSpriteButton", void 0), r([d({
                    type: cc.Label,
                    displayName: "\u984d\u5916\u8df3\u51fa\u7684\u5716\u7247\u4e0a\u6309\u9215\u7684\u5b57"
                })], e.prototype, "text", void 0), n = r([y], e)
            }(h.IconCrtl);
        n.default = m, cc._RF.pop()
    }, {
        "../../../../LobbyCommon/Component/AudioMgr": void 0,
        "../../../../LobbyCommon/Connect/Script/ConnectPanelMgr": void 0,
        "../../../../LobbyCommon/Helper/Download": void 0,
        "../../../../LobbyCommon/Helper/EventSystem": void 0,
        "./IconCrtl": "IconCrtl"
    }],
    Favorite: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "37d6dJVteNDlrxgvXfluoOY", "Favorite");
        var o, i = this && this.__extends || (o = function(t, e) {
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
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.Favorite = void 0;
        var a = t("../../../../LobbyCommon/Component/AudioMgr"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.nodeList = [], e.button = null, e.onClick = null, e._status = !1, e
                }
                return i(e, t), Object.defineProperty(e.prototype, "status", {
                    get: function() {
                        return this._status
                    },
                    set: function(t) {
                        this._status = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.Init = function() {
                    if (this.button) {
                        var t = new cc.Component.EventHandler;
                        t.target = this.node, t.component = "Favorite", t.handler = "OnClick", this.button.clickEvents = [], this.button.clickEvents.push(t)
                    }
                    this.onClick = new SS.Common.Delegate
                }, e.prototype.Set = function(t) {
                    this._status = t;
                    for (var e = 0, n = this.nodeList; e < n.length; e++) n[e].active = t
                }, e.prototype.OnClick = function() {
                    this.Set(!this._status), this.onClick.Notify(this._status), this._status && a.AudioMgr.Instance.Play("favorite", !1, 1)
                }, r([l({
                    type: cc.Node,
                    displayName: "\u4e3b\u8981\u7bc0\u9ede"
                })], e.prototype, "nodeList", void 0), r([l({
                    type: cc.Button,
                    displayName: "\u6309\u9215"
                })], e.prototype, "button", void 0), r([c], e)
            }(cc.Component);
        n.Favorite = p, cc._RF.pop()
    }, {
        "../../../../LobbyCommon/Component/AudioMgr": void 0
    }],
    Flags: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "7d83c/t+WJOAYRJo9Bu0vEv", "Flags");
        var o, i = this && this.__extends || (o = function(t, e) {
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
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.Flag = void 0;
        var a = cc._decorator,
            s = a.ccclass,
            c = a.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.key = "", e.nodeList = [], e
                }
                return i(e, t), Object.defineProperty(e.prototype, "active", {
                    set: function(t) {
                        for (var e = 0, n = this.nodeList; e < n.length; e++) n[e].active = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), r([c({
                    displayName: "Flag \u7684 key"
                })], e.prototype, "key", void 0), r([c({
                    type: cc.Node,
                    displayName: "Flag \u7684\u7bc0\u9ede"
                })], e.prototype, "nodeList", void 0), r([s], e)
            }(cc.Component);
        n.Flag = l, cc._RF.pop()
    }, {}],
    IconAnimation: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "fd720QqybVH2JZ4BP3lgurq", "IconAnimation");
        var o, i = this && this.__extends || (o = function(t, e) {
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
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            a = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
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
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (s) {
                        r = [6, s], o = 0
                    } finally {
                        n = i = 0
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
        });
        var c = cc._decorator,
            l = c.ccclass,
            p = c.property,
            u = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.animation = null, e.animationClip = null, e.spine = null, e.static = null, e.animRoot = null, e.spineAnimName = "", e._count = 99, e._loop = 0, e._callback = null, e
                }
                return i(e, t), e.prototype.Play = function(t, e) {
                    return a(this, void 0, void 0, function() {
                        var n;
                        return s(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    this.active = !0, this._callback = e, this._loop = t, n = 0, o.label = 1;
                                case 1:
                                    return n < t ? [4, this.PlayAnimation()] : [3, 4];
                                case 2:
                                    o.sent(), o.label = 3;
                                case 3:
                                    return ++n, [3, 1];
                                case 4:
                                    return [2]
                            }
                        })
                    })
                }, Object.defineProperty(e.prototype, "active", {
                    set: function(t) {
                        this.static && (this.static.active = !t), this.animRoot && (this.animRoot.active = t)
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.Stop = function() {
                    this._count = 99, this.animation && this.animation.stop(this.animationClip.name), this.spine && this.spine.clearTracks(), this.active = !1
                }, e.prototype.onDisable = function() {
                    this.Stop(), this.Callback()
                }, e.prototype.PlayAnimation = function() {
                    return a(this, void 0, void 0, function() {
                        return s(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    this._count = 0, this.animation && (++this._count, this.animation.play(this.animationClip.name), this.animation.on("finished", this.OnAnimationFinished.bind(this))), this.spine && (++this._count, this.spine.setAnimation(0, this.spineAnimName, !1), this.spine.setCompleteListener(this.OnSpineAnimationFinished.bind(this))), t.label = 1;
                                case 1:
                                    return this._count > 0 && 99 != this._count ? [4, SS.Common.WaitForSeconds(.25)] : [3, 3];
                                case 2:
                                    return t.sent(), [3, 1];
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.OnAnimationFinished = function() {
                    this.animation.off("finished", this.OnAnimationFinished.bind(this)), --this._count, 0 === this._count && this.Callback()
                }, e.prototype.OnSpineAnimationFinished = function() {
                    this.spine.setCompleteListener(null), --this._count, 0 === this._count && this.Callback()
                }, e.prototype.Callback = function() {
                    if (--this._loop, this._loop <= 0) {
                        this.active = !1;
                        var t = this._callback;
                        this._callback = null, t && t()
                    }
                }, r([p({
                    type: cc.Animation,
                    displayName: "Animation"
                })], e.prototype, "animation", void 0), r([p({
                    type: cc.AnimationClip,
                    displayName: "animationClip"
                })], e.prototype, "animationClip", void 0), r([p({
                    type: sp.Skeleton,
                    displayName: "Spine"
                })], e.prototype, "spine", void 0), r([p({
                    type: cc.Node,
                    displayName: "\u975c\u614b\u5716\u7247"
                })], e.prototype, "static", void 0), r([p({
                    type: cc.Node,
                    displayName: "\u52d5\u614b\u7269\u4ef6"
                })], e.prototype, "animRoot", void 0), r([p({
                    displayName: "Spine \u52d5\u756b\u540d"
                })], e.prototype, "spineAnimName", void 0), r([l], e)
            }(cc.Component);
        n.default = u, cc._RF.pop()
    }, {}],
    IconCrtl: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "9aa39ixolxEYKlLne/Myp2H", "IconCrtl");
        var o, i = this && this.__extends || (o = function(t, e) {
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
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            a = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
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
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (s) {
                        r = [6, s], o = 0
                    } finally {
                        n = i = 0
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
        }), n.IconCrtl = void 0;
        var c = t("../../../../LobbyCommon/Helper/Download"),
            l = t("../../../../LobbyCommon/Helper/LayerSystem"),
            p = t("../../../../LobbyCommon/Helper/Setting"),
            u = t("./Favorite"),
            h = t("./Flags"),
            f = t("./IconAnimation"),
            y = t("./Lock"),
            d = t("./WaysText"),
            m = cc._decorator,
            v = m.ccclass,
            b = m.property,
            g = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.button = null, e.sprite = null, e.flags = [], e.waysText = null, e.favorite = null, e.lock = null, e.jpBgRoot = null, e.jpRoot = null, e.chiliLevel = [], e.onClick = null, e.onClickFavorite = null, e.gameName = "", e.isLock = !1, e.iconAnimation = null, e
                }
                var n;
                return i(e, t), n = e, e.prototype.onLoad = function() {
                    this.node.active = !1, this.onClick = new SS.Common.Delegate, this.onClickFavorite = new SS.Common.Delegate, this.Lock = !1, this.favorite && (this.favorite.Init(), this.favorite.onClick.Insert(this.OnClickFavorite, this))
                }, e.prototype.onDestroy = function() {
                    null != this.sprite && (this.sprite.spriteFrame = null), null != this.onClick && (this.onClick.Clear(), this.onClick = null)
                }, Object.defineProperty(e.prototype, "Lock", {
                    set: function(t) {
                        null != this.lock && (this.lock.node.active = t), this.isLock = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "Flags", {
                    set: function(t) {
                        this.flags.forEach(function(t) {
                            return t.active = !1
                        }), this.ChangeFlags(t)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "Favorite", {
                    set: function(t) {
                        this.favorite && this.favorite.Set(t)
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.ChangeFlags = function(t) {
                    for (var e = function(t) {
                            var e = n.flags.findIndex(function(e) {
                                return e.key === t
                            }); - 1 !== e && (n.flags[e].active = !0)
                        }, n = this, o = 0, i = t; o < i.length; o++) e(i[o])
                }, Object.defineProperty(e.prototype, "WaysText", {
                    set: function(t) {
                        this.waysText && (this.waysText.content = t)
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "GameName", {
                    set: function(t) {
                        this.gameName = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.DisableAllUI = function() {}, e.prototype.OnIconClicked = function() {
                    this.isLock ? this.ShowLockTips() : (n.CanClickIcon = !1, this.onClick.Length > 0 && this.onClick.Notify(this.gameName))
                }, e.prototype.ShowLockTips = function() {
                    this.sprite && cc.tween(this.sprite.node).then(cc.tween().to(.5, {
                        color: cc.color(100, 100, 100, 255)
                    }, {
                        easing: "sineInOut"
                    })).then(cc.tween().to(3, {
                        color: cc.color(100, 100, 100, 255)
                    }, {
                        easing: "sineInOut"
                    })).then(cc.tween().to(.5, {
                        color: cc.color(255, 255, 255, 255)
                    }, {
                        easing: "sineInOut"
                    })).start(), this.lock && this.lock.Show()
                }, e.prototype.SetChiliLevel = function(t) {
                    if (!(t < 0 || this.chiliLevel.length <= 0 || t > this.chiliLevel.length))
                        for (var e = 0; e < this.chiliLevel.length; ++e) this.chiliLevel[e].active = e < t
                }, e.prototype.OnClickFavorite = function(t) {
                    this.onClickFavorite.Notify(this.gameName, t)
                }, e.prototype.Download = function(t, e) {
                    return a(this, void 0, void 0, function() {
                        var n, o, i;
                        return s(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    return "" === this.gameName ? [3, 7] : p.default.GetSetting("GameIconMgr").hasPrefab ? [3, 2] : [4, c.Download.Image("Icons/" + this.gameName + ".png?" + t)];
                                case 1:
                                    return (i = r.sent()) && (this.sprite.spriteFrame = i, this.node.active = !0), [3, 6];
                                case 2:
                                    return [4, c.Download.Prefab("GameIconMgr", "Prefabs/Icons/" + this.gameName)];
                                case 3:
                                    return (n = r.sent()) ? ((o = cc.instantiate(n)).parent = this.sprite.node, this.node.active = !0, this.iconAnimation = o.getComponent(f.default), [3, 6]) : [3, 4];
                                case 4:
                                    return [4, c.Download.Image("Icons/" + this.gameName + ".png?" + t)];
                                case 5:
                                    (i = r.sent()) && (this.sprite.spriteFrame = i, this.node.active = !0), r.label = 6;
                                case 6:
                                    return l.default.SetParent(this.jpBgRoot, "JP_BG"), l.default.SetParent(this.jpRoot, "JP_Panel"), l.default.SetParent(this.sprite.node, "Icon_Frame"), l.default.SetParent(this.waysText.node, "Icon_Text"), [3, 8];
                                case 7:
                                    console.warn("[IconCrtl] You Should Assign Game Name First !"), r.label = 8;
                                case 8:
                                    return e(), [2]
                            }
                        })
                    })
                }, e.prototype.PlayAnimaiton = function(t, e) {
                    this.iconAnimation ? this.iconAnimation.Play(t, e) : e && e()
                }, e.prototype.StopAnimaiton = function() {
                    this.iconAnimation && this.iconAnimation.Stop()
                }, Object.defineProperty(e.prototype, "JpPanel", {
                    set: function(t) {
                        t.parent = this.jpRoot
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "JpBg", {
                    set: function(t) {
                        t.parent = this.jpBgRoot
                    },
                    enumerable: !1,
                    configurable: !0
                }), Object.defineProperty(e.prototype, "active", {
                    set: function(t) {
                        this.jpBgRoot.active = t, this.jpRoot.active = t, this.sprite.node.active = t, this.waysText.node.active = t, this.node.active = t
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.Sync = function() {
                    this.jpBgRoot.position = this.node.position.clone(), this.jpRoot.position = this.node.position.clone(), this.sprite.node.position = this.node.position.clone(), this.waysText.node.position = this.node.position.clone()
                }, e.CanClickIcon = !0, r([b({
                    type: cc.Button,
                    displayName: "\u6574\u500b Icon \u7684 Button"
                })], e.prototype, "button", void 0), r([b({
                    type: cc.Sprite,
                    displayName: "Icon \u7684\u5716\u7247, \u82e5\u662f Prefab \u4e5f\u6703\u639b\u5728\u9019\u500b\u7bc0\u9ede"
                })], e.prototype, "sprite", void 0), r([b({
                    type: h.Flag,
                    displayName: "Icon \u4e0a\u7684\u5404 Flag"
                })], e.prototype, "flags", void 0), r([b({
                    type: d.WaysText,
                    displayName: "Icon \u4e0a\u7684 Ways \u6587\u5b57"
                })], e.prototype, "waysText", void 0), r([b({
                    type: u.Favorite,
                    displayName: "\u6700\u611b\u529f\u80fd"
                })], e.prototype, "favorite", void 0), r([b({
                    type: y.Lock,
                    displayName: "\u9396\u982d\u529f\u80fd"
                })], e.prototype, "lock", void 0), r([b({
                    type: cc.Node,
                    displayName: "JP \u80cc\u666f\u7684\u7bc0\u9ede"
                })], e.prototype, "jpBgRoot", void 0), r([b({
                    type: cc.Node,
                    displayName: "JP \u9762\u677f\u7684\u7bc0\u9ede"
                })], e.prototype, "jpRoot", void 0), r([b({
                    type: cc.Node,
                    displayName: "\u4ee3\u8868\u904a\u6232\u8d77\u4f0f\u7684\u7269\u4ef6"
                })], e.prototype, "chiliLevel", void 0), n = r([v], e)
            }(cc.Component);
        n.IconCrtl = g, cc._RF.pop()
    }, {
        "../../../../LobbyCommon/Helper/Download": void 0,
        "../../../../LobbyCommon/Helper/LayerSystem": void 0,
        "../../../../LobbyCommon/Helper/Setting": void 0,
        "./Favorite": "Favorite",
        "./Flags": "Flags",
        "./IconAnimation": "IconAnimation",
        "./Lock": "Lock",
        "./WaysText": "WaysText"
    }],
    IconModule: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "12f67YL1xJGXY0zKf8dec08", "IconModule");
        var o, i = this && this.__extends || (o = function(t, e) {
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
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            a = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
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
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (s) {
                        r = [6, s], o = 0
                    } finally {
                        n = i = 0
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
        }), n.IconModule = n.IconAnimationParameter = n.GameIcon = n.IconModuleSetting = void 0;
        var c = t("../../../Component/GameIconMgr/Script/InGameJpBg"),
            l = t("../../../Component/GameIconMgr/Script/InGameJpPanel"),
            p = t("../../../LobbyCommon/FullScreenHandler"),
            u = t("../../../LobbyCommon/Helper/Download"),
            h = t("../../../LobbyCommon/Helper/EventSystem"),
            f = t("../../../LobbyCommon/Helper/LayerSystem"),
            y = t("../../../LobbyCommon/InGameJp/Script/GameJpMgr"),
            d = t("../../../LobbyCommon/ModuleBase"),
            m = t("../../../LobbyCommon/Net/LobbyClient"),
            v = t("../../../LobbyCommon/PopupMessage/Script/PopupMsgMgr"),
            b = t("./IconCrtl/IconCrtl"),
            g = cc._decorator,
            C = g.ccclass,
            S = g.property,
            w = function() {
                function t() {
                    this.key = "", this.prefab = null
                }
                return r([S({
                    displayName: "\u5c0d\u61c9\u5b57\u4e32"
                })], t.prototype, "key", void 0), r([S({
                    type: cc.Prefab,
                    displayName: "\u5c0d\u61c9\u7684 Prefab"
                })], t.prototype, "prefab", void 0), r([C("IconModuleSetting")], t)
            }();
        n.IconModuleSetting = w;
        var I = function() {
            function t() {
                this.themeTitle = "", this.themeID = "", this.groupName = "", this.lock = !1, this.status = "", this.label = [], this.showIndex = 0, this.gameLevel = 0, this.inGameJpName = "", this.platformJpName = "", this.waysText = "", this.customData = null, this.jpType = "", this.favorite = !1, this.iconCrtl = null
            }
            return t.prototype.Init = function(t) {
                return this.themeTitle = t.ThemeTitle, this.themeID = t.ThemeID, this.groupName = t.GroupName, this.lock = t.Lock, this.status = t.Status, this.label = t.Label, this.showIndex = t.ShowIndex, this.gameLevel = t.GameLevel, this.inGameJpName = t.InGameJpName ? t.InGameJpName : "", this.platformJpName = t.CustomData.platformJpName ? t.CustomData.platformJpName : "", this.waysText = t.WaysText, this.customData = t.CustomData, this.jpType = "", this.favorite = !1, this.iconCrtl = null, this
            }, t
        }();
        n.GameIcon = I;
        var _ = function() {
            function t() {
                this.num = 1, this.loop = 1, this.interval = 3
            }
            return t.prototype.Set = function(t, e, n) {
                this.num = t, this.loop = e, this.interval = n
            }, r([S({
                type: cc.Integer,
                displayName: "\u8981\u64a5\u653e\u52d5\u756b\u7684 Icon \u6578\u91cf"
            })], t.prototype, "num", void 0), r([S({
                type: cc.Integer,
                displayName: "\u8981\u64a5\u653e\u52d5\u756b\u7684\u5faa\u74b0\u6b21\u6578"
            })], t.prototype, "loop", void 0), r([S({
                type: cc.Float,
                displayName: "\u5169\u6b21\u64a5\u653e\u52d5\u756b\u7684\u9593\u9694\u6642\u9593"
            })], t.prototype, "interval", void 0), r([C("IconAnimationParameter")], t)
        }();
        n.IconAnimationParameter = _;
        var O = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.scrollView = null, e.layout = null, e.moduleSetting = [], e.widget = null, e.parameter = null, e.jpBgLayer = null, e.jpPanelLayer = null, e.iconContentLayer = null, e.iconTextLayer = null, e.landscape = null, e.portrait = null, e.version = "", e.iconSettings = null, e.ingameJpPrefab = null, e.ingameJpBgPrefab = null, e.ingameJp = null, e.ingameJpObject = null, e.iconList = [], e.icon = null, e.lobbyBox = null, e.favoriteList = [], e.layoutWidth = 0, e.layoutHeight = 0, e.animationIndexList = [], e.packetCount = 0, e.instantiateIconComplete = !1, e.downloadInGameJpComplete = !1, e.instantiateInGameJpComplete = !1, e
            }
            return i(e, t), e.prototype._onLoad = function() {
                return a(this, void 0, void 0, function() {
                    var t, e, n;
                    return s(this, function() {
                        if (u.Download.Preload("GameIconMgr"), this.iconSettings = JSON.parse("{}"), this.ingameJpPrefab = JSON.parse("{}"), this.ingameJpBgPrefab = JSON.parse("{}"), this.ingameJp = JSON.parse("{}"), this.ingameJpObject = JSON.parse("{}"), this.icon = JSON.parse("{}"), this.packetCount = 0, this.layoutWidth = this.landscape.width, this.layoutHeight = this.landscape.height, this.lobbyBox = f.default.GetLayer("LobbyBound").getBoundingBoxToWorld().clone(), f.default.RegisterLayer("JP_BG", this.jpBgLayer), f.default.RegisterLayer("JP_Panel", this.jpPanelLayer), f.default.RegisterLayer("Icon_Frame", this.iconContentLayer), f.default.RegisterLayer("Icon_Text", this.iconTextLayer), this.layout && (this.layout.enabled = !1), this.widget && (this.widget.enabled = !1), this.moduleSetting.length <= 0) console.warn("[IconModule] There is no Module Setting!");
                        else {
                            for (t = 0, e = this.moduleSetting; t < e.length; t++) n = e[t], this.iconSettings[n.key] = n.prefab;
                            this.iconSettings.default || (console.log("[IconModule] No Default Setting, Use " + this.moduleSetting[0]), this.iconSettings.default = this.moduleSetting[0].prefab)
                        }
                        return h.EventSystem.Event(h.Icon.ShowIcon).Insert(this.ShowIcon, this), h.EventSystem.Event(h.Icon.OnClickIcon).Insert(this.OnClickIcon, this), h.EventSystem.Event(h.Icon.SetIcon).Insert(this.SetIcon, this), h.EventSystem.Event("change_icon_parameter").Insert(this.ParameterSet, this), h.EventSystem.Event("change_icon_parameter").Insert(this.PlayAnimation, this), h.EventSystem.RegisterFunction(h.Icon.SetGroup, this.SetGroup.bind(this)), y.GameJpMgr.Instance.RegisterGameJpBroadcastEvent(this.SetRefreshJpVal.bind(this)), y.GameJpMgr.Instance.RegisterFishPlatformJpBroadcastEvent(this.SetFishPlatformJpVal.bind(this)), h.EventSystem.Event(h.Icon.GetFishJP).Insert(this.SendGetFishJP, this), [2]
                    })
                })
            }, e.prototype.UpdateResolution = function() {
                return a(this, void 0, void 0, function() {
                    return s(this, function(t) {
                        switch (t.label) {
                            case 0:
                                return [4, SS.Common.WaitForSeconds(0)];
                            case 1:
                                return t.sent(), this.lobbyBox = f.default.GetLayer("LobbyBound").getBoundingBoxToWorld().clone(), this.layoutWidth = this.landscape.width, this.layoutHeight = this.landscape.height, this.onScrollingDrawCallOpt(), [2]
                        }
                    })
                })
            }, e.prototype.ChangeOrientation = function(t) {
                return a(this, void 0, void 0, function() {
                    return s(this, function() {
                        return t === p.Orientation.Portrait ? (this.layoutWidth = this.portrait.width, this.layoutHeight = this.portrait.height) : t === p.Orientation.Landscape && (this.layoutWidth = this.landscape.width, this.layoutHeight = this.landscape.height), [2]
                    })
                })
            }, e.prototype._onDestroy = function() {
                return a(this, void 0, Promise, function() {
                    return s(this, function() {
                        return h.EventSystem.Event(h.Icon.ShowIcon).Remove(this.ShowIcon, this), h.EventSystem.Event(h.Icon.OnClickIcon).Remove(this.OnClickIcon, this), h.EventSystem.Event(h.Icon.SetIcon).Remove(this.SetIcon, this), h.EventSystem.Event(h.UpdateSafeArea).Remove(this.UpdateResolution, this), h.EventSystem.Event(h.LobbyState.EnterLobby).Remove(this.OnEnterLobby, this), h.EventSystem.Event(h.ScreenOrientationState.ChangeOrientation).Remove(this.ChangeOrientation, this), h.EventSystem.Event("change_icon_parameter").Remove(this.ParameterSet, this), h.EventSystem.Event("change_icon_parameter").Remove(this.PlayAnimation, this), y.GameJpMgr.Instance.RemoveGameJpBroadcastEvent(this.SetRefreshJpVal.bind(this)), y.GameJpMgr.Instance.RemoveFishPlatformJpBroadcastEvent(this.SetFishPlatformJpVal.bind(this)), h.EventSystem.UnregisterFunction(h.Icon.SetGroup), h.EventSystem.Event(h.Icon.GetFishJP).Remove(this.SendGetFishJP, this), [2]
                    })
                })
            }, e.prototype._checkVersion = function() {
                return a(this, void 0, Promise, function() {
                    var t;
                    return s(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return t = this, [4, u.Download.Version("Icons")];
                            case 1:
                                return t.version = e.sent(), [2]
                        }
                    })
                })
            }, e.prototype._waitPacket = function() {
                return a(this, void 0, void 0, function() {
                    return s(this, function(t) {
                        switch (t.label) {
                            case 0:
                                this.packetCount += 2, this.SendGetFavoriteList(), this.SendGetGameList(), t.label = 1;
                            case 1:
                                return this.packetCount > 0 ? [4, SS.Common.WaitForSeconds(.25)] : [3, 3];
                            case 2:
                                return t.sent(), [3, 1];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e.prototype._logout = function() {
                return a(this, void 0, void 0, function() {
                    var t;
                    return s(this, function(e) {
                        switch (e.label) {
                            case 0:
                                t = !1, this.SendUpdateFavoriteList(function() {
                                    t = !0
                                }), SS.Common.GameEnvironment.CurrentGameTypeNow = "", SS.Common.GameEnvironment.GameTypeMapScrollContentPos = JSON.parse("{}"), e.label = 1;
                            case 1:
                                return t ? [3, 3] : [4, SS.Common.WaitForSeconds(.25)];
                            case 2:
                                return e.sent(), [3, 1];
                            case 3:
                                return [2]
                        }
                    })
                })
            }, e.prototype.SendGetGameList = function() {
                var t = JSON.parse("{}");
                t.logo = "FireStorm", m.LobbyClient.Instance.GetUserClient.SendCommand("theme", "getGameList", t, this.OnGetGameList.bind(this))
            }, e.prototype.OnGetGameList = function(t, e) {
                if (console.log("[IconModule] On Get Game List, status: " + t + "\ndata: " + JSON.stringify(e)), 0 === t && e) {
                    this.instantiateIconComplete = !1, --this.packetCount;
                    for (var n = 0, o = e.cmd_data.data.GameList; n < o.length; n++) {
                        var i = o[n],
                            r = (new I).Init(i);
                        this.iconList.push(r), this.icon[r.themeTitle] = r
                    }
                    this.iconList.sort(function(t, e) {
                        return t.showIndex - e.showIndex
                    }), console.warn("[IconModule] Game List: ", this.iconList), this.DownloadInGameJp(), this.InstantiateIcon()
                } else v.PopupMsgMgr.Instance.ShowPopMsg(v.PopupPriority.Critical, "C70-" + t, "Lobby", "Get Game List Failed")
            }, e.prototype.SendGetFavoriteList = function() {
                var t = JSON.parse("{}");
                t.logo = "FireStorm", t.device = "H5", m.LobbyClient.Instance.GetUserClient.SendCommand("theme", "getFavList", t, this.OnGetFavoriteList.bind(this))
            }, e.prototype.OnGetFavoriteList = function(t, e) {
                console.log("[IconModule] On Get Favorite List, status: " + t + "\ndata: " + JSON.stringify(e)), 0 === t && e ? (--this.packetCount, this.favoriteList = e.cmd_data.data.FavList) : v.PopupMsgMgr.Instance.ShowPopMsg(v.PopupPriority.Critical, "C71-" + t, "Lobby", "Update Favorite List Failed")
            }, e.prototype.SendUpdateFavoriteList = function(t) {
                void 0 === t && (t = null);
                var e = JSON.parse("{}");
                e.FavList = this.favoriteList, console.log("[IconModule] Update Favorite List\ndata: " + JSON.stringify(e)), m.LobbyClient.Instance.GetUserClient.SendCommand("theme", "updateFavList", e, this.OnUpdateFavoriteList.bind(this, t))
            }, e.prototype.OnUpdateFavoriteList = function(t, e, n) {
                void 0 === t && (t = null), console.log("[IconModule] On Update Favorite List, status: " + e + "\ndata: " + JSON.stringify(n)), t && t()
            }, e.prototype.DownloadInGameJp = function() {
                for (var t = this, e = 1, n = function() {
                        --e <= 0 && (t.downloadInGameJpComplete = !0)
                    }, o = 0, i = this.iconList; o < i.length; o++) {
                    var r = i[o];
                    r.inGameJpName ? (this.DownloadJpPrefab(r.inGameJpName, n), ++e) : r.platformJpName && (this.DownloadJpPrefab(r.platformJpName, n), ++e)
                }
                this.DownloadJpPrefab("default", n)
            }, e.prototype.DownloadJpPrefab = function(t, e) {
                return a(this, void 0, void 0, function() {
                    var n, o, i, r;
                    return s(this, function(a) {
                        switch (a.label) {
                            case 0:
                                return n = this.ingameJpPrefab, o = t, [4, u.Download.Prefab("GameIconMgr", "Prefabs/InGameJP/" + t)];
                            case 1:
                                return n[o] = a.sent(), i = this.ingameJpBgPrefab, r = t, [4, u.Download.Prefab("GameIconMgr", "Prefabs/InGameJP/" + t + "_bg")];
                            case 2:
                                return i[r] = a.sent(), e(), [2]
                        }
                    })
                })
            }, e.prototype.InstantiateIcon = function() {
                var t = this;
                console.log("[Icon Module] Instantiate Icon Complete");
                var e = this.iconSettings.default,
                    n = this.iconList.length,
                    o = function() {
                        0 == --n && (t.instantiateIconComplete = !0)
                    };
                if (n > 0)
                    for (var i = 0, r = this.iconList; i < r.length; i++) {
                        var a = r[i];
                        this.NewIcon(a, e, o)
                    } else this.instantiateIconComplete = !0
            }, e.prototype.NewIcon = function(t, e, n) {
                var o = cc.instantiate(e);
                o.parent = this.layout.node;
                var i = o.getComponent(b.IconCrtl);
                i.GameName = t.themeTitle, i.WaysText = t.waysText ? t.waysText : t.groupName, i.Lock = t.lock, i.Flags = t.label, i.SetChiliLevel(t.gameLevel), i.Favorite = t.favorite, t.iconCrtl = i, i.onClickFavorite.Insert(this.OnClickFavorite, this), i.onClick.Insert(this.OnClickIcon, this), i.Download(this.version, n)
            }, e.prototype.SetIcon = function(t, e) {
                return a(this, void 0, void 0, function() {
                    var t;
                    return s(this, function(n) {
                        switch (n.label) {
                            case 0:
                                return this.instantiateIconComplete && this.downloadInGameJpComplete ? [3, 2] : [4, SS.Common.WaitForSeconds(.25)];
                            case 1:
                                return n.sent(), [3, 0];
                            case 2:
                                return console.log("[Icon Module] Set Icon"), (t = SS.Common.GameEnvironment.CurrentGameTypeNow) ? this.ShowIcon(t) : this.ShowIcon("ALL", !0), this.lobbyBox = f.default.GetLayer("LobbyBound").getBoundingBoxToWorld().clone(), h.EventSystem.Event(h.LobbyState.EnterLobby).Insert(this.OnEnterLobby, this), h.EventSystem.Event(h.UpdateSafeArea).Insert(this.UpdateResolution, this), h.EventSystem.Event(h.ScreenOrientationState.ChangeOrientation).Insert(this.ChangeOrientation, this), e(), [2]
                        }
                    })
                })
            }, e.prototype.OnEnterLobby = function(t, e, n) {
                return a(this, void 0, void 0, function() {
                    var e, o;
                    return s(this, function() {
                        if ("SetIconLayoutPos" !== t) return [2];
                        if (!n) return console.error("No On Enter Lobby Callback"), [2];
                        try {
                            (o = h.EventSystem.Function(h.ScreenOrientationState.GetOrientation)()) === p.Orientation.Portrait ? e = SS.Common.GameEnvironment.GameTypeMapVerticalScrollContentPos.pos : o === p.Orientation.Landscape && (e = SS.Common.GameEnvironment.GameTypeMapScrollContentPos.pos), e && (this.scrollView.setContentPosition(e), this.scrollView._startBounceBackIfNeeded()), this.onScrollingDrawCallOpt()
                        } catch (i) {
                            console.warn("[IconModule] On Enter Lobby", i)
                        }
                        return n(), [2]
                    })
                })
            }, e.prototype.InstantiateInGameJp = function() {
                var t, e = 0,
                    n = null,
                    o = null,
                    i = null;
                this.ingameJpObject[SS.Common.GameEnvironment.CurrentGameTypeNow] = [];
                for (var r = 0, a = this.iconList; r < a.length; r++) {
                    var s = a[r];
                    if (!1 !== s.iconCrtl.node.active)
                        if (e > 0 && s.inGameJpName === n.inGameJpName && s.platformJpName === n.platformJpName) n = s, ++e;
                        else {
                            if (e > 0) {
                                n.iconCrtl.JpPanel = o.node;
                                var c = .5 * (e - 1) * ((t = n.iconCrtl.node.getContentSize().width) + this.layout.spacingX);
                                if (o.node.x -= c, i) {
                                    i.node.x += c;
                                    var l = e * (t + this.layout.spacingX) - this.layout.spacingX;
                                    i.AutoFitWidth(l)
                                }
                                o = null, i = null, e = 0
                            }
                            if ("" !== s.inGameJpName || "" !== s.platformJpName) {
                                var p = "" === s.inGameJpName ? s.platformJpName : s.inGameJpName;
                                (o = this.NewInGameJp(p)) && (this.ingameJpObject[SS.Common.GameEnvironment.CurrentGameTypeNow].push(o.node), this.ingameJp[p] || (this.ingameJp[p] = JSON.parse("{}"), this.ingameJp[p].object = [], this.ingameJp[p].value = 0), this.ingameJp[p].object || (this.ingameJp[p].object = []), this.ingameJp[p].value && o.SetJpVal(this.ingameJp[p].value), this.ingameJp[p].object.push(o)), (i = this.NewInGameJpBg(p)) && (s.iconCrtl.JpBg = i.node, this.ingameJpObject[SS.Common.GameEnvironment.CurrentGameTypeNow].push(i.node)), e = 1, n = s
                            } else n = s
                        }
                }
                e > 0 && (n.iconCrtl.JpPanel = o.node, c = .5 * (e - 1) * ((t = n.iconCrtl.node.getContentSize().width) + this.layout.spacingX), o.node.x -= c, i && (i.node.x += c, l = e * (t + this.layout.spacingX) - this.layout.spacingX, i.AutoFitWidth(l)), o = null, i = null, e = 0)
            }, e.prototype.NewInGameJp = function(t) {
                var e = null,
                    n = null;
                return this.ingameJpPrefab[t] ? n = cc.instantiate(this.ingameJpPrefab[t]) : this.ingameJpPrefab.default && (n = cc.instantiate(this.ingameJpPrefab.default)), n && (e = n.getComponent(l.InGameJpPanel)), e
            }, e.prototype.NewInGameJpBg = function(t) {
                var e = null,
                    n = null;
                return this.ingameJpBgPrefab[t] ? n = cc.instantiate(this.ingameJpBgPrefab[t]) : this.ingameJpBgPrefab.default && (n = cc.instantiate(this.ingameJpBgPrefab.default)), n && (e = n.getComponent(c.InGameJpBg)), e
            }, e.prototype.ShowIcon = function(t, e) {
                if (void 0 === e && (e = !1), t !== SS.Common.GameEnvironment.CurrentGameTypeNow || e) {
                    if (this.scrollView.stopAutoScroll(), console.log("[Icon Module] Close " + SS.Common.GameEnvironment.CurrentGameTypeNow + " Page"), this.ToggleInGameJp(!1), SS.Common.GameEnvironment.CurrentGameTypeNow = t, "FAVORITE" === SS.Common.GameEnvironment.CurrentGameTypeNow) {
                        if (this.ingameJpObject[SS.Common.GameEnvironment.CurrentGameTypeNow])
                            for (var n = 0, o = this.ingameJpObject[SS.Common.GameEnvironment.CurrentGameTypeNow]; n < o.length; n++) o[n].destroy();
                        this.ingameJpObject[SS.Common.GameEnvironment.CurrentGameTypeNow] = null
                    }
                    console.log("[Icon Module] Open " + SS.Common.GameEnvironment.CurrentGameTypeNow + " Page"), this.FilterIcon(t), this.ToggleInGameJp(!0), this.UpdateLayout(), this.onScrollingDrawCallOpt(), this.unschedule(this.PlayAnimation), this.PlayAnimation()
                }
            }, e.prototype.UpdateLayout = function() {
                if (this.layout) {
                    this.layout.enabled = !0, this.layout.updateLayout(), this.layout.enabled = !1, this.scrollView.content.setContentSize(this.layout.node.getContentSize()), this.layout.node.width < this.layoutWidth && this.widget ? (this.widget.enabled = !0, this.widget.updateAlignment(), this.widget.enabled = !1) : this.scrollView.scrollToLeft();
                    for (var t = 0, e = this.iconList; t < e.length; t++) {
                        var n = e[t];
                        n.iconCrtl.node.opacity = 255, n.iconCrtl.Sync()
                    }
                }
            }, e.prototype.FilterIcon = function(t) {
                for (var e = 0, n = this.iconList; e < n.length; e++)(c = n[e]).iconCrtl.Favorite = !1;
                for (var o = 0, i = this.favoriteList; o < i.length; o++) {
                    var r = i[o];
                    (c = this.icon[r]) && (c.iconCrtl.Favorite = c.favorite = !0)
                }
                for (var a = 0, s = this.iconList; a < s.length; a++) {
                    var c;
                    if ((c = s[a]).iconCrtl)
                        if ("NORMAL" === c.status) switch (t) {
                            case "FAVORITE":
                                c.iconCrtl.active = c.favorite;
                                break;
                            case "ALL":
                                c.iconCrtl.active = !0;
                                break;
                            case "OTHERS":
                                c.iconCrtl.active = "ALL" !== c.groupName && "SLOT" !== c.groupName && "FISH" !== c.groupName;
                                break;
                            default:
                                c.iconCrtl.active = c.groupName === t
                        } else c.iconCrtl.active = !1
                }
            }, e.prototype.SetRefreshJpVal = function(t) {
                console.log("[Icon Module] JP Value: ", t);
                var e = Object.keys(t),
                    n = [];
                if (null != e && null != e) {
                    for (var o = 0; o < e.length; o++) n.push(e[o]);
                    for (var i = 0, r = e; i < r.length; i++) {
                        var a = r[i];
                        this.ingameJp[a] || (this.ingameJp[a] = JSON.parse("{}"));
                        var s = y.GameJpMgr.Instance.GetInGameJpArray(a, !0)[0];
                        if (0 === this.ingameJp[a].value || s < this.ingameJp[a].value)
                            for (var c = 0, l = this.ingameJp[a].object; c < l.length; c++)(h = l[c]) && h.SetJpVal(s);
                        else if (s > this.ingameJp[a].value)
                            for (var p = 0, u = this.ingameJp[a].object; p < u.length; p++) {
                                var h;
                                (h = u[p]) && h.JpNumberCountUp(s, 10)
                            }
                        this.ingameJp[a].value = s
                    }
                } else console.error("[Icon Module] JP Value: ", JSON.stringify(t))
            }, e.prototype.SendGetFishJP = function() {
                var t = this;
                m.LobbyClient.Instance.GetJPSystem.SendGetJPValCmd("Fish", function(e, n, o, i, r) {
                    t.SetFishPlatformJpVal(e, r)
                })
            }, e.prototype.SetFishPlatformJpVal = function(t, e) {
                if (null != t && null != t && this.ingameJp.fish_link && !(this.ingameJp.fish_link.object.length <= 0)) {
                    for (var n = t * e, o = 0, i = this.ingameJp.fish_link.object; o < i.length; o++) {
                        var r = i[o];
                        r && r.SetJpVal(t * e)
                    }
                    this.ingameJp.fish_link.value = n
                }
            }, e.prototype.ToggleInGameJp = function(t) {
                if (this.ingameJpObject[SS.Common.GameEnvironment.CurrentGameTypeNow])
                    for (var e = 0, n = this.ingameJpObject[SS.Common.GameEnvironment.CurrentGameTypeNow]; e < n.length; e++) n[e].active = t;
                else t && this.InstantiateInGameJp()
            }, e.prototype.onScrollingDrawCallOpt = function() {
                for (var t = 0, e = this.iconList; t < e.length; t++) {
                    var n = e[t];
                    !0 !== n.iconCrtl.node.active && 0 !== n.iconCrtl.node.opacity || (n.iconCrtl.node.getBoundingBoxToWorld().intersects(this.lobbyBox) ? (n.iconCrtl.active = !0, n.iconCrtl.node.opacity = 255) : (n.iconCrtl.active = !1, n.iconCrtl.node.opacity = 0))
                }
            }, e.prototype.OnClickIcon = function(t) {
                this.SendUpdateFavoriteList();
                var e = h.EventSystem.Function(h.ScreenOrientationState.GetOrientation)();
                e === p.Orientation.Portrait ? SS.Common.GameEnvironment.GameTypeMapVerticalScrollContentPos.pos = this.scrollView.content.position.clone() : e === p.Orientation.Landscape && (SS.Common.GameEnvironment.GameTypeMapScrollContentPos.pos = this.scrollView.content.position.clone()), h.EventSystem.Event(h.Icon.ClickIcon).Notify(t)
            }, e.prototype.OnClickFavorite = function(t, e) {
                if (this.icon[t])
                    if (this.icon[t].favorite = e, e) this.favoriteList.push(t);
                    else {
                        var n = this.favoriteList.findIndex(function(e) {
                            return e === t
                        });
                        n >= 0 && this.favoriteList.splice(n, 1)
                    }
            }, e.prototype.SetGroup = function() {
                return []
            }, e.prototype.PlayAnimation = function() {
                return a(this, void 0, void 0, function() {
                    var t, e, n, o, i, r, a, c, l, p, u, h, f, y, d, m, v = this;
                    return s(this, function() {
                        for (t = 0, e = this.animationIndexList; t < e.length; t++) c = e[t], this.iconList[c].iconCrtl.StopAnimaiton();
                        if (this.parameter.loop <= 0 || this.parameter.num <= 0) return [2];
                        for (n = [], h = 0; h < this.iconList.length; ++h) this.iconList[h].iconCrtl && 255 === this.iconList[h].iconCrtl.node.opacity && !0 === this.iconList[h].iconCrtl.node.active && n.push(h);
                        if (o = 0, i = function() {
                                --o <= 0 && (v.unscheduleAllCallbacks(), v.scheduleOnce(v.PlayAnimation.bind(v), v.parameter.interval))
                            }, this.parameter.num >= n.length)
                            for (r = 0, a = n; r < a.length; r++) c = a[r], ++o, this.iconList[c].iconCrtl.PlayAnimaiton(this.parameter.loop, i);
                        else {
                            for (l = Math.floor(n.length * Math.random()), p = function(t) {
                                    if (-1 === u.animationIndexList.findIndex(function(e) {
                                            return e === n[(t + l) % n.length]
                                        })) return u.animationIndexList = [], u.animationIndexList.push(n[(t + l) % n.length]), n.splice((t + l) % n.length, 1), "break"
                                }, u = this, h = 0; h < n.length && "break" !== p(h); ++h);
                            for (h = 1; h < this.parameter.num; ++h) f = Math.floor(n.length * Math.random()), this.animationIndexList.push(n[f]), n.splice(f, 1);
                            for (console.log("[Icon Module] Animation", this.animationIndexList), y = 0, d = this.animationIndexList; y < d.length; y++) m = d[y], ++o, this.iconList[m].iconCrtl.PlayAnimaiton(this.parameter.loop, i)
                        }
                        return [2]
                    })
                })
            }, e.prototype.ParameterSet = function(t, e, n) {
                this.parameter && this.parameter.Set(t, e, n)
            }, r([S({
                type: cc.ScrollView,
                displayName: "ScrollView"
            })], e.prototype, "scrollView", void 0), r([S({
                type: cc.Layout,
                displayName: "Layout"
            })], e.prototype, "layout", void 0), r([S({
                type: w,
                displayName: "\u8a2d\u5b9a\u503c"
            })], e.prototype, "moduleSetting", void 0), r([S({
                type: cc.Widget,
                displayName: "\u7528\u4f86\u7f6e\u4e2d\u7684 Widget"
            })], e.prototype, "widget", void 0), r([S({
                type: _,
                displayName: "\u53c3\u6578"
            })], e.prototype, "parameter", void 0), r([S({
                type: cc.Node,
                displayName: "JP \u80cc\u666f\u5716\u5c64"
            })], e.prototype, "jpBgLayer", void 0), r([S({
                type: cc.Node,
                displayName: "JP \u9762\u677f\u5716\u5c64"
            })], e.prototype, "jpPanelLayer", void 0), r([S({
                type: cc.Node,
                displayName: "Icon \u5167\u5bb9\u5716\u5c64"
            })], e.prototype, "iconContentLayer", void 0), r([S({
                type: cc.Node,
                displayName: "Icon \u6587\u5b57\u5716\u5c64"
            })], e.prototype, "iconTextLayer", void 0), r([S({
                displayName: "\u6a6b\u7248\u5927\u5c0f"
            })], e.prototype, "landscape", void 0), r([S({
                displayName: "\u76f4\u7248\u5927\u5c0f"
            })], e.prototype, "portrait", void 0), r([C], e)
        }(d.default);
        n.IconModule = O, cc._RF.pop()
    }, {
        "../../../Component/GameIconMgr/Script/InGameJpBg": void 0,
        "../../../Component/GameIconMgr/Script/InGameJpPanel": void 0,
        "../../../LobbyCommon/FullScreenHandler": void 0,
        "../../../LobbyCommon/Helper/Download": void 0,
        "../../../LobbyCommon/Helper/EventSystem": void 0,
        "../../../LobbyCommon/Helper/LayerSystem": void 0,
        "../../../LobbyCommon/InGameJp/Script/GameJpMgr": void 0,
        "../../../LobbyCommon/ModuleBase": void 0,
        "../../../LobbyCommon/Net/LobbyClient": void 0,
        "../../../LobbyCommon/PopupMessage/Script/PopupMsgMgr": void 0,
        "./IconCrtl/IconCrtl": "IconCrtl"
    }],
    Lock: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "8d299L4ErFMDLaH3/m9tGyN", "Lock");
        var o, i = this && this.__extends || (o = function(t, e) {
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
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.Lock = void 0;
        var a = cc._decorator,
            s = a.ccclass,
            c = a.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.tips = null, e
                }
                return i(e, t), e.prototype.Show = function() {
                    this.tips.active = !0, null != this.tips && cc.tween(this.tips).then(cc.tween().to(.5, {
                        opacity: 255
                    }, {
                        easing: "sineInOut"
                    })).then(cc.tween().to(3, {
                        opacity: 255
                    }, {
                        easing: "sineInOut"
                    })).then(cc.tween().to(.5, {
                        opacity: 0
                    }, {
                        easing: "sineInOut"
                    })).start()
                }, r([c({
                    type: cc.Node,
                    displayName: "\u586b\u5165\u6587\u5b57\u7684 Label"
                })], e.prototype, "tips", void 0), r([s], e)
            }(cc.Component);
        n.Lock = l, cc._RF.pop()
    }, {}],
    MagicCityIconModule: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "26c00hjkFlAzIkXzdyiKNWk", "MagicCityIconModule");
        var o, i = this && this.__extends || (o = function(t, e) {
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
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            },
            a = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            c(o.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        try {
                            c(o.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(a, s)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var n, o, i, r, a = {
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
                        return c([t, e])
                    }
                }

                function c(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (s) {
                        r = [6, s], o = 0
                    } finally {
                        n = i = 0
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
        }), n.EventData = void 0;
        var c = t("../../../LobbyCommon/Component/AudioMgr"),
            l = t("../../../LobbyCommon/FullScreenHandler"),
            p = t("../../../LobbyCommon/Helper/Download"),
            u = t("../../../LobbyCommon/Helper/EventSystem"),
            h = t("../../../LobbyCommon/Net/LobbyClient"),
            f = t("../../../LobbyCommon/PopupMessage/Script/PopupMsgMgr"),
            y = t("./IconCrtl/EventIcon"),
            d = t("./IconModule"),
            m = cc._decorator,
            v = m.ccclass,
            b = m.property,
            g = function() {
                function t() {
                    this.priority = Number.MAX_SAFE_INTEGER, this.version = "", this.thumbNail = "", this.bundleName = "", this.buttonAction = "", this.buttonText = "", this.bundleType = "", this.gameName = "", this.bindInfo = null, this.extraData = null, this.eventIcon = null
                }
                return t.prototype.Init = function(t) {
                    return this.priority = t.Piority, this.version = t.BundleVersion, this.bundleName = t.BundleName, this.buttonAction = t.ButtonAction, this.buttonText = t.ButtonText, this.bindInfo = t.bind_info, this.extraData = t.extra_data, this.extraData && (this.extraData.hasOwnProperty("thumb_nail") && (this.thumbNail = this.extraData.thumb_nail), this.extraData.hasOwnProperty("bundle_type") && (this.bundleType = this.extraData.bundle_type), this.extraData.hasOwnProperty("game_name") && (this.gameName = this.extraData.game_name)), this.eventIcon = null, this
                }, t
            }();
        n.EventData = g;
        var C = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.audioEventShow = null, e.audioEventOpen = null, e.eventList = [], e.instantiateEventComplete = !1, e.bookIcon = null, e.eventCmdData = null, e.eventIconTween = [], e.eventIcon = null, e.interrupt = !1, e
            }
            return i(e, t), e.prototype._start = function() {
                return a(this, void 0, void 0, function() {
                    return s(this, function() {
                        return c.AudioMgr.Instance.setAudioClip([this.audioEventShow], ["event_show"]), c.AudioMgr.Instance.setAudioClip([this.audioEventOpen], ["event_open"]), [2]
                    })
                })
            }, e.prototype._waitPacket = function() {
                return a(this, void 0, void 0, function() {
                    return s(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return ++this.packetCount, this.SendGetEventList(), [4, t.prototype._waitPacket.call(this)];
                            case 1:
                                return e.sent(), [2]
                        }
                    })
                })
            }, e.prototype._onDestroy = function() {
                return a(this, void 0, void 0, function() {
                    return s(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return u.EventSystem.Event(u.ScreenOrientationState.ChangeOrientation).Remove(this.OnOrientationChange, this), u.EventSystem.Event(u.LobbyState.EnterLobby).Remove(this.OnEvents, this), [4, p.Download.ReleaseBundle("EventIcon")];
                            case 1:
                                return e.sent(), [4, t.prototype._onDestroy.call(this)];
                            case 2:
                                return e.sent(), [2]
                        }
                    })
                })
            }, e.prototype.SendGetEventList = function() {
                var t = JSON.parse("{}");
                t.logo = "FireStorm", t.TitleID = "lobby", t.TagID = "icon", h.LobbyClient.Instance.GetUserClient.SendCommand("popup", "getPopupContent", t, this.OnGetEventList.bind(this))
            }, e.prototype._logout = function() {
                return a(this, void 0, void 0, function() {
                    return s(this, function(e) {
                        switch (e.label) {
                            case 0:
                                return this.interrupt = !0, this.eventList = [], this.eventIcon && this.eventIcon.eventIcon && this.eventIcon.eventIcon.Close(), [4, t.prototype._logout.call(this)];
                            case 1:
                                return e.sent(), [2]
                        }
                    })
                })
            }, e.prototype.OnEvents = function(t, e, n) {
                return a(this, void 0, void 0, function() {
                    var o, i, r;
                    return s(this, function(a) {
                        switch (a.label) {
                            case 0:
                                if ("ShowEvents" !== t) return [2];
                                if (!n) return console.error("No On Enter Lobby Callback"), [2];
                                if (!e) return [3, 4];
                                o = 0, i = this.eventList, a.label = 1;
                            case 1:
                                return o < i.length ? (r = i[o], this.eventIcon = r, [4, r.eventIcon.Show()]) : [3, 4];
                            case 2:
                                if (a.sent() || this.interrupt) return [3, 4];
                                a.label = 3;
                            case 3:
                                return o++, [3, 1];
                            case 4:
                                return n(), [2]
                        }
                    })
                })
            }, e.prototype.OnGetEventList = function(t, e) {
                if (console.log("[IconModule] On Get Event List, status: " + t + "\ndata: " + JSON.stringify(e)), 0 !== t || !e) return this.eventCmdData = null, void f.PopupMsgMgr.Instance.ShowPopMsg(f.PopupPriority.Critical, "C72-" + t, "Lobby", "Get Event List Failed");
                this.eventCmdData = e
            }, e.prototype.OnGetGameList = function(e, n) {
                return a(this, void 0, void 0, function() {
                    return s(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return null != this.eventCmdData ? [3, 2] : [4, SS.Common.WaitForSeconds(.25)];
                            case 1:
                                return o.sent(), [3, 0];
                            case 2:
                                return console.log("[Icon Module] Get Event Cmd Data"), t.prototype.OnGetGameList.call(this, e, n), this.EventFilter(), [2]
                        }
                    })
                })
            }, e.prototype.EventFilter = function() {
                for (var t = 0, e = this.eventList; t < e.length; t++)(i = e[t]).eventIcon.destroy();
                this.eventList = [];
                for (var n = 0, o = this.eventCmdData.cmd_data.data; n < o.length; n++) {
                    var i, r = o[n];
                    if ("" != (i = (new g).Init(r)).gameName)
                        for (var a = 0, s = this.iconList; a < s.length; a++) {
                            var c = s[a];
                            if ("NORMAL" == c.status && c.themeTitle == i.gameName) {
                                this.eventList.push(i);
                                break
                            }
                        } else this.eventList.push(i)
                }
                this.eventList.sort(function(t, e) {
                    return t.priority - e.priority
                }), this.InstantiateEvent(), --this.packetCount
            }, e.prototype.InstantiateEvent = function() {
                return a(this, void 0, void 0, function() {
                    var t, e, n, o, i, r = this;
                    return s(this, function(a) {
                        switch (a.label) {
                            case 0:
                                if (t = this.eventList.length, e = function() {
                                        0 == --t && (console.log("[Icon Module] Instantiate Event Complete"), console.log("[Icon Module] Event List", r.eventList), r.instantiateEventComplete = !0)
                                    }, console.log("[Icon Module] Instantiate Event"), !(t > 0)) return [3, 5];
                                n = 0, o = this.eventList, a.label = 1;
                            case 1:
                                return n < o.length ? (i = o[n], [4, this.NewEvent(i, e)]) : [3, 4];
                            case 2:
                                a.sent(), a.label = 3;
                            case 3:
                                return n++, [3, 1];
                            case 4:
                                return [3, 6];
                            case 5:
                                this.instantiateEventComplete = !0, a.label = 6;
                            case 6:
                                return [2]
                        }
                    })
                })
            }, e.prototype.NewEvent = function(t, e) {
                return a(this, void 0, void 0, function() {
                    var n, o, i;
                    return s(this, function(r) {
                        switch (r.label) {
                            case 0:
                                return [4, p.Download.Prefab("EventIcon", "Prefabs/" + t.bundleName)];
                            case 1:
                                return null === (n = r.sent()) && (console.warn("[MC Icon Module] No '" + t.bundleName + "' in Bundle"), n = this.iconSettings.default_event), (o = cc.instantiate(n)).parent = this.layout.node, i = o.getComponent(y.default), t.eventIcon = i, i.bundleName = t.bundleName, i.bundleType = t.bundleType, i.thumbNail = t.thumbNail, i.buttonText = t.buttonText, i.buttonAction = t.buttonAction, i.SetCustomData(t.bindInfo, t.extraData), i.Download(t.version, e), [2]
                        }
                    })
                })
            }, e.prototype.InstantiateIcon = function() {
                return a(this, void 0, void 0, function() {
                    var e, n;
                    return s(this, function(o) {
                        switch (o.label) {
                            case 0:
                                return this.instantiateEventComplete ? [3, 2] : [4, SS.Common.WaitForSeconds(.25)];
                            case 1:
                                return o.sent(), [3, 0];
                            case 2:
                                for (e = 0; e < this.eventList.length; ++e) this.eventList[e].eventIcon.node.active || this.eventList.splice(e, 1);
                                console.log("[Icon Module] Instantiate Book"), n = !1, this.InstantiateBook(function() {
                                    n = !0
                                }), o.label = 3;
                            case 3:
                                return n ? [3, 5] : [4, SS.Common.WaitForSeconds(.25)];
                            case 4:
                                return o.sent(), [3, 3];
                            case 5:
                                return console.log("[Icon Module] Instantiate Book Complete"), t.prototype.InstantiateIcon.call(this), [2]
                        }
                    })
                })
            }, e.prototype.SetIcon = function(e, n) {
                return a(this, void 0, void 0, function() {
                    var o = this;
                    return s(this, function(i) {
                        switch (i.label) {
                            case 0:
                                return this.instantiateIconComplete && this.downloadInGameJpComplete && this.instantiateEventComplete ? [3, 2] : [4, SS.Common.WaitForSeconds(.25)];
                            case 1:
                                return i.sent(), [3, 0];
                            case 2:
                                return this.eventList.forEach(function(t, e) {
                                    t.eventIcon && t.eventIcon.node || o.eventList.splice(e, 1)
                                }), this.bookIcon.iconCrtl.SetContent(this.eventList), u.EventSystem.Event(u.ScreenOrientationState.ChangeOrientation).Insert(this.OnOrientationChange, this), u.EventSystem.Event(u.LobbyState.EnterLobby).Insert(this.OnEvents, this), t.prototype.SetIcon.call(this, e, n), [2]
                        }
                    })
                })
            }, e.prototype.InstantiateBook = function(t) {
                var e = this.iconSettings.book;
                this.bookIcon = new d.GameIcon, this.bookIcon.groupName = "ALL", this.NewIcon(this.bookIcon, e, t)
            }, e.prototype.ShowIcon = function(e, n) {
                void 0 === n && (n = !1);
                var o = u.EventSystem.Function(u.ScreenOrientationState.GetOrientation)();
                if ("FAVORITE" === e) {
                    if (this.ingameJpObject[e + l.Orientation.Landscape])
                        for (var i = 0, r = this.ingameJpObject[e + l.Orientation.Landscape]; i < r.length; i++) r[i].destroy();
                    if (this.ingameJpObject[e + l.Orientation.Portrait])
                        for (var a = 0, s = this.ingameJpObject[e + l.Orientation.Portrait]; a < s.length; a++) s[a].destroy();
                    this.ingameJpObject[e + l.Orientation.Landscape] = null, this.ingameJpObject[e + l.Orientation.Portrait] = null
                }
                t.prototype.ShowIcon.call(this, e, n), "EVENT" === e && this.ShowEventsAnimation(), "ALL" === e && o === l.Orientation.Portrait && (this.bookIcon.iconCrtl.node.x = 0);
                for (var c = 0, p = null, h = 0, f = this.iconList; h < f.length; h++) {
                    var y = f[h];
                    y.iconCrtl.node.active && (++c, p = y.iconCrtl)
                }
                o === l.Orientation.Portrait && c % 2 && p && (p.node.x = 0, p.Sync())
            }, e.prototype.FilterIcon = function(e) {
                t.prototype.FilterIcon.call(this, e);
                for (var n = 0, o = this.eventList; n < o.length; n++) {
                    var i = o[n];
                    i.eventIcon && (i.eventIcon.node.active = "EVENT" === e)
                }
                this.bookIcon.iconCrtl.node.active = "ALL" === e
            }, e.prototype.ShowEventsAnimation = function() {
                return a(this, void 0, void 0, function() {
                    var t, e, n, o, i;
                    return s(this, function() {
                        for (t = function(t) {
                                var n = t.eventIcon.node,
                                    o = n.position.clone();
                                n.opacity = 0, n.stopAllActions();
                                var i = cc.tween(n).to(0, {
                                    position: cc.Vec3.ZERO,
                                    opacity: 255
                                }).delay(.4).to(.3, {
                                    position: o
                                }, {
                                    easing: "easeInQuart"
                                }).call(function() {
                                    console.log("to position: " + o)
                                }).start();
                                e.eventIconTween.push(i)
                            }, e = this, n = 0, o = this.eventList; n < o.length; n++) i = o[n], t(i);
                        return this.scheduleOnce(function() {
                            y.default.IsOpen || c.AudioMgr.Instance.Play("event_show", !1, .5)
                        }, .7), [2]
                    })
                })
            }, e.prototype.onScrollingDrawCallOpt = function() {
                t.prototype.onScrollingDrawCallOpt.call(this), this.bookIcon.iconCrtl.node.active && (this.bookIcon.iconCrtl.node.getBoundingBoxToWorld().intersects(this.lobbyBox) ? this.bookIcon.iconCrtl.node.opacity = 255 : this.bookIcon.iconCrtl.node.opacity = 0);
                for (var e = 0, n = this.eventList; e < n.length; e++) {
                    var o = n[e];
                    !0 !== o.eventIcon.node.active && 0 !== o.eventIcon.node.opacity || (o.eventIcon.node.getBoundingBoxToWorld().intersects(this.lobbyBox) ? o.eventIcon.node.opacity = 255 : o.eventIcon.node.opacity = 0)
                }
            }, e.prototype.OnOrientationChange = function(t) {
                var e = this;
                if (this.eventIconTween.length > 0)
                    for (var n = 0, o = this.eventIconTween; n < o.length; n++) o[n].stop();
                if (this.scrollView.stopAutoScroll(), t === l.Orientation.Landscape) {
                    for (var i = 0, r = this.iconList; i < r.length; i++) r[i].iconCrtl.node.y = 0;
                    for (var a = 0, s = this.eventList; a < s.length; a++) s[a].eventIcon.node.y = 0;
                    this.bookIcon.iconCrtl.node.y = 0
                } else {
                    for (var c = 0, p = this.iconList; c < p.length; c++) p[c].iconCrtl.node.x = 0;
                    for (var u = 0, h = this.eventList; u < h.length; u++) h[u].eventIcon.node.x = 0;
                    this.bookIcon.iconCrtl.node.x = 0
                }
                this.unscheduleAllCallbacks(), this.scheduleOnce(function() {
                    e.ShowIcon(SS.Common.GameEnvironment.CurrentGameTypeNow, !0)
                }, .1)
            }, e.prototype.InstantiateInGameJp = function() {
                var t, e = 0,
                    n = 0,
                    o = null,
                    i = null,
                    r = null,
                    a = u.EventSystem.Function(u.ScreenOrientationState.GetOrientation)();
                this.ingameJpObject[SS.Common.GameEnvironment.CurrentGameTypeNow + a] = [];
                for (var s = 0, c = this.iconList; s < c.length; s++) {
                    var p, h = c[s];
                    if (!1 !== h.iconCrtl.node.active)
                        if (++n, p = a === l.Orientation.Portrait && n % 2 == 1, e > 0 && h.inGameJpName === o.inGameJpName && h.platformJpName === o.platformJpName && !p) o = h, ++e;
                        else {
                            if (e > 0) {
                                o.iconCrtl.JpPanel = i.node;
                                var f = .5 * (e - 1) * ((t = o.iconCrtl.node.getContentSize().width) + this.layout.spacingX);
                                if (i.node.x -= f, r) {
                                    r.node.x += f;
                                    var y = e * (t + this.layout.spacingX) - this.layout.spacingX;
                                    r.AutoFitWidth(y)
                                }
                                i = null, r = null, e = 0
                            }
                            if ("" !== h.inGameJpName || "" !== h.platformJpName) {
                                var d = "" === h.inGameJpName ? h.platformJpName : h.inGameJpName;
                                (i = this.NewInGameJp(d)) && (this.ingameJpObject[SS.Common.GameEnvironment.CurrentGameTypeNow + a].push(i.node), this.ingameJp[d] || (this.ingameJp[d] = JSON.parse("{}"), this.ingameJp[d].object = [], this.ingameJp[d].value = 0), this.ingameJp[d].object || (this.ingameJp[d].object = []), this.ingameJp[d].value && i.SetJpVal(this.ingameJp[d].value), this.ingameJp[d].object.push(i)), (r = this.NewInGameJpBg(d)) && (h.iconCrtl.JpBg = r.node, this.ingameJpObject[SS.Common.GameEnvironment.CurrentGameTypeNow + a].push(r.node)), e = 1, o = h
                            } else o = h
                        }
                }
                e > 0 && (o.iconCrtl.JpPanel = i.node, f = .5 * (e - 1) * ((t = o.iconCrtl.node.getContentSize().width) + this.layout.spacingX), i.node.x -= f, r && (r.node.x += f, y = e * (t + this.layout.spacingX) - this.layout.spacingX, r.AutoFitWidth(y)), i = null, r = null, e = 0)
            }, e.prototype.ToggleInGameJp = function(t) {
                var e = u.EventSystem.Function(u.ScreenOrientationState.GetOrientation)();
                if (this.ingameJpObject[SS.Common.GameEnvironment.CurrentGameTypeNow + l.Orientation.Portrait])
                    for (var n = 0, o = this.ingameJpObject[SS.Common.GameEnvironment.CurrentGameTypeNow + l.Orientation.Portrait]; n < o.length; n++) o[n].active = t && e === l.Orientation.Portrait;
                if (this.ingameJpObject[SS.Common.GameEnvironment.CurrentGameTypeNow + l.Orientation.Landscape])
                    for (var i = 0, r = this.ingameJpObject[SS.Common.GameEnvironment.CurrentGameTypeNow + l.Orientation.Landscape]; i < r.length; i++) r[i].active = t && e === l.Orientation.Landscape;
                !this.ingameJpObject[SS.Common.GameEnvironment.CurrentGameTypeNow + e] && t && (this.InstantiateInGameJp(), this.ingameJp.fish_link && u.EventSystem.Event(u.Icon.GetFishJP).Notify())
            }, e.prototype.UpdateLayout = function() {
                if (this.layout) {
                    var t = u.EventSystem.Function(u.ScreenOrientationState.GetOrientation)();
                    this.layout.enabled = !0, this.layout.updateLayout(), this.layout.enabled = !1, this.scrollView.content.setContentSize(this.layout.node.getContentSize()), t === l.Orientation.Landscape ? (this.layout.node.width < this.layoutWidth && this.widget ? (this.widget.enabled = !0, this.widget.updateAlignment(), this.widget.enabled = !1) : this.scrollView.scrollToLeft(), this.scrollView.content.position = new cc.Vec3(this.scrollView.content.position.x, -10, 0)) : this.layout.node.height < this.layoutHeight && this.widget ? (this.widget.enabled = !0, this.widget.updateAlignment(), this.widget.enabled = !1) : this.scrollView.scrollToTop();
                    for (var e = 0, n = this.iconList; e < n.length; e++) {
                        var o = n[e];
                        o.iconCrtl.node.opacity = 255, o.iconCrtl.Sync()
                    }
                }
            }, r([b({
                type: cc.AudioClip,
                displayName: "Event \u5c55\u958b\u8868\u6f14\u7684\u8072\u97f3"
            })], e.prototype, "audioEventShow", void 0), r([b({
                type: cc.AudioClip,
                displayName: "Event \u9ede\u958b\u7684\u8072\u97f3"
            })], e.prototype, "audioEventOpen", void 0), r([v], e)
        }(d.IconModule);
        n.default = C, cc._RF.pop()
    }, {
        "../../../LobbyCommon/Component/AudioMgr": void 0,
        "../../../LobbyCommon/FullScreenHandler": void 0,
        "../../../LobbyCommon/Helper/Download": void 0,
        "../../../LobbyCommon/Helper/EventSystem": void 0,
        "../../../LobbyCommon/Net/LobbyClient": void 0,
        "../../../LobbyCommon/PopupMessage/Script/PopupMsgMgr": void 0,
        "./IconCrtl/EventIcon": "EventIcon",
        "./IconModule": "IconModule"
    }],
    ParameterChange: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "1d449zjZV5FqZ0TkWxomxN8", "ParameterChange");
        var o, i = this && this.__extends || (o = function(t, e) {
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
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var a = t("../../../../LobbyCommon/Helper/EventSystem"),
            s = cc._decorator,
            c = s.ccclass,
            l = s.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.panel = null, e.num = null, e.loop = null, e.interval = null, e
                }
                return i(e, t), e.prototype.OnClickSwitch = function(t, e) {
                    this.panel.active = "true" === e
                }, e.prototype.OnClickOK = function() {
                    var t = Number(this.num.string),
                        e = Number(this.loop.string),
                        n = Number(this.interval.string);
                    a.EventSystem.Event("change_icon_parameter").Notify(t, e, n)
                }, r([l({
                    type: cc.Node,
                    displayName: "Panel"
                })], e.prototype, "panel", void 0), r([l({
                    type: cc.EditBox,
                    displayName: "\u6578\u91cf"
                })], e.prototype, "num", void 0), r([l({
                    type: cc.EditBox,
                    displayName: "\u5faa\u74b0\u6b21\u6578"
                })], e.prototype, "loop", void 0), r([l({
                    type: cc.EditBox,
                    displayName: "\u9593\u9694\u6642\u9593"
                })], e.prototype, "interval", void 0), r([c], e)
            }(cc.Component);
        n.default = p, cc._RF.pop()
    }, {
        "../../../../LobbyCommon/Helper/EventSystem": void 0
    }],
    WaysText: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "c83b5pG9ihIhqV/YRGZhfRe", "WaysText");
        var o, i = this && this.__extends || (o = function(t, e) {
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
            r = this && this.__decorate || function(t, e, n, o) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, n, o);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, n, a) : i(e, n)) || a);
                return r > 3 && a && Object.defineProperty(e, n, a), a
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.WaysText = void 0;
        var a = cc._decorator,
            s = a.ccclass,
            c = a.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.layout = null, e.labels = [], e
                }
                return i(e, t), Object.defineProperty(e.prototype, "content", {
                    set: function(t) {
                        this.labels.forEach(function(t) {
                            return t.node.active = !1
                        });
                        for (var e = t.split("_"), n = this.labels.length, o = 0; o < n && e[o]; o++) this.labels[o].node.active = !0, this.labels[o].string = e[o];
                        this.node.active = !0
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.onEnable = function() {
                    this.layout.enabled = !0, this.layout.updateLayout(), this.layout.enabled = !1
                }, r([c({
                    type: cc.Layout,
                    displayName: "Layout"
                })], e.prototype, "layout", void 0), r([c({
                    type: cc.Label,
                    displayName: "\u586b\u5165\u6587\u5b57\u7684 Label"
                })], e.prototype, "labels", void 0), r([s], e)
            }(cc.Component);
        n.WaysText = l, cc._RF.pop()
    }, {}]
}, {}, ["Book", "BookPage", "EventIcon", "EventIcon_ExtraComps", "EventIcon_Game", "Favorite", "Flags", "IconAnimation", "IconCrtl", "Lock", "ParameterChange", "WaysText", "IconModule", "MagicCityIconModule"]);