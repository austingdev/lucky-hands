window.__require = function t(e, o, r) {
    function n(s, a) {
        if (!o[s]) {
            if (!e[s]) {
                var c = s.split("/");
                if (c = c[c.length - 1], !e[c]) {
                    var u = "function" == typeof __require && __require;
                    if (!a && u) return u(c, !0);
                    if (i) return i(c, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                s = c
            }
            var l = o[s] = {
                exports: {}
            };
            e[s][0].call(l.exports, function(t) {
                return n(e[s][1][t] || t)
            }, l, l.exports, t, e, o, r)
        }
        return o[s].exports
    }
    for (var i = "function" == typeof __require && __require, s = 0; s < r.length; s++) n(r[s]);
    return n
}({
    SystemBackground: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "8e67c/ntwxAPbug4dCwxZGV", "SystemBackground");
        var r, n = this && this.__extends || (r = function(t, e) {
                return (r = Object.setPrototypeOf || {
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
                r(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            i = this && this.__decorate || function(t, e, o, r) {
                var n, i = arguments.length,
                    s = i < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, o) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, r);
                else
                    for (var a = t.length - 1; a >= 0; a--)(n = t[a]) && (s = (i < 3 ? n(s) : i > 3 ? n(e, o, s) : n(e, o)) || s);
                return i > 3 && s && Object.defineProperty(e, o, s), s
            },
            s = this && this.__awaiter || function(t, e, o, r) {
                return new(o || (o = Promise))(function(n, i) {
                    function s(t) {
                        try {
                            c(r.next(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(t) {
                        try {
                            c(r.throw(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(s, a)
                    }
                    c((r = r.apply(t, e || [])).next())
                })
            },
            a = this && this.__generator || function(t, e) {
                var o, r, n, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return i = {
                    next: a(0),
                    throw: a(1),
                    return: a(2)
                }, "function" == typeof Symbol && (i[Symbol.iterator] = function() {
                    return this
                }), i;

                function a(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(i) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (o = 1, r && (n = 2 & i[0] ? r.return : i[0] ? r.throw || ((n = r.return) && n.call(r), 0) : r.next) && !(n = n.call(r, i[1])).done) return n;
                        switch (r = 0, n && (i = [2 & i[0], n.value]), i[0]) {
                            case 0:
                            case 1:
                                n = i;
                                break;
                            case 4:
                                return s.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, r = i[1], i = [0];
                                continue;
                            case 7:
                                i = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = s.trys).length > 0 && n[n.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === i[0] && (!n || i[1] > n[0] && i[1] < n[3])) {
                                    s.label = i[1];
                                    break
                                }
                                if (6 === i[0] && s.label < n[1]) {
                                    s.label = n[1], n = i;
                                    break
                                }
                                if (n && s.label < n[2]) {
                                    s.label = n[2], s.ops.push(i);
                                    break
                                }
                                n[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        i = e.call(t, s)
                    } catch (a) {
                        i = [6, a], r = 0
                    } finally {
                        o = n = 0
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
        }), o.MessageParameter = void 0;
        var c = t("../../../Component/AutoFitObject"),
            u = t("../../../FullScreenHandler"),
            l = t("../../../Helper/EventSystem"),
            p = t("../../../Helper/LayerSystem"),
            h = t("../../../ModuleBase"),
            y = cc._decorator,
            v = y.ccclass,
            d = y.property,
            f = function() {
                function t() {
                    this.customUI = null, this.customSizeLandscape = cc.Size.ZERO, this.customSizePortrait = cc.Size.ZERO, this.backgroundOpacity = 150, this.cancelEvent = null, this.interruptable = !0
                }
                return t.prototype.Set = function(t, e, o, r, n, i) {
                    return void 0 === e && (e = cc.Size.ZERO), void 0 === o && (o = cc.Size.ZERO), void 0 === r && (r = 150), void 0 === n && (n = null), void 0 === i && (i = !0), this.customUI = t, this.customSizeLandscape = e, this.customSizePortrait = o, this.backgroundOpacity = r, this.cancelEvent = n, this.interruptable = i, this
                }, t
            }();
        o.MessageParameter = f;
        var m = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.root = null, e.background = null, e.rootLandscape = null, e.objLandscape = [], e.rootPortrait = null, e.objPortrait = [], e.UIRoot = null, e._cancelCallback = null, e._customUI = null, e._previousParent = null, e._queue = [], e._canNotInterrupt = !1, e
            }
            return n(e, t), e.prototype._onLoad = function() {
                return s(this, void 0, void 0, function() {
                    var t, e;
                    return a(this, function() {
                        for (l.EventSystem.Event(l.RegisterLayer).Insert(this.RegisterUILayer, this), this.root.active = !1, t = 0, e = this.objLandscape; t < e.length; t++) e[t].Init();
                        return l.EventSystem.Event(l.SystemMsg.Open).Insert(this.Open, this), l.EventSystem.Event(l.SystemMsg.Close).Insert(this.Close, this), l.EventSystem.Event(l.SystemMsg.ClearQueue).Insert(this.ClearQueue, this), [2]
                    })
                })
            }, e.prototype._onDestroy = function() {
                return s(this, void 0, void 0, function() {
                    return a(this, function() {
                        return p.default.UnregisterLayer("SystemBackground", this.UIRoot), l.EventSystem.Event(l.SystemMsg.Open).Remove(this.Open, this), l.EventSystem.Event(l.SystemMsg.Close).Remove(this.Close, this), l.EventSystem.Event(l.SystemMsg.ClearQueue).Remove(this.ClearQueue, this), l.EventSystem.Event(l.RegisterLayer).Remove(this.RegisterUILayer, this), [2]
                    })
                })
            }, e.prototype.RegisterUILayer = function() {
                p.default.RegisterLayer("SystemBackground", this.UIRoot)
            }, e.prototype.Open = function(t, e, o, r, n, i) {
                if (void 0 === e && (e = cc.Size.ZERO), void 0 === o && (o = cc.Size.ZERO), void 0 === r && (r = 150), void 0 === n && (n = null), void 0 === i && (i = !1), this._canNotInterrupt) {
                    var s = (new f).Set(t, e, o, r, n, i);
                    this._queue.push(s)
                } else {
                    if (this.root.active) {
                        if (this._cancelCallback) {
                            var a = this._cancelCallback;
                            this._cancelCallback = null, a()
                        }
                        this.Close()
                    }
                    this._canNotInterrupt = i, this._previousParent = t.parent, this._customUI = t, p.default.SetParent(t, "SystemBackground");
                    for (var c = 0, h = this.objLandscape; c < h.length; c++) h[c].Strech(e);
                    for (var y = 0, v = this.objPortrait; y < v.length; y++) v[y].Strech(o);
                    this.background.opacity = r, n && (this._cancelCallback = n);
                    var d = l.EventSystem.Function(l.ScreenOrientationState.GetOrientation)();
                    this.rootLandscape.active = d === u.Orientation.Landscape, this.rootPortrait.active = d === u.Orientation.Portrait, this.root.active = !0
                }
            }, e.prototype.Close = function() {
                if (console.error("[SystemBackground]  Close  this._previousParent = " + this._previousParent + " this._customUI " + this._customUI), this._previousParent && this._customUI && (this._customUI.parent = this._previousParent, this._customUI.active = !1), this._previousParent = null, this._customUI = null, this._canNotInterrupt = !1, this.root.active = !1, 0 !== this._queue.length) {
                    var t = this._queue.shift();
                    this.Open(t.customUI, t.customSizeLandscape, t.customSizePortrait, t.backgroundOpacity, t.cancelEvent, t.interruptable)
                }
            }, e.prototype.ClearQueue = function() {
                this._queue = []
            }, i([d({
                type: cc.Node,
                displayName: "\u6240\u6709\u986f\u793a\u7684\u4e0a\u5c64\u7bc0\u9ede"
            })], e.prototype, "root", void 0), i([d({
                type: cc.Node,
                displayName: "\u58d3\u9ed1\u7684\u80cc\u666f"
            })], e.prototype, "background", void 0), i([d({
                type: cc.Node,
                displayName: "\u58d3\u9ed1\u7684\u80cc\u666f"
            })], e.prototype, "rootLandscape", void 0), i([d({
                type: c.AutoFitObject,
                displayName: "\u5ba2\u88fd\u5316\u8b8a\u5f62\u7269\u4ef6"
            })], e.prototype, "objLandscape", void 0), i([d({
                type: cc.Node,
                displayName: "\u58d3\u9ed1\u7684\u80cc\u666f"
            })], e.prototype, "rootPortrait", void 0), i([d({
                type: c.AutoFitObject,
                displayName: "\u5ba2\u88fd\u5316\u8b8a\u5f62\u7269\u4ef6"
            })], e.prototype, "objPortrait", void 0), i([d({
                type: cc.Node,
                displayName: "\u4f9b\u5916\u90e8\u639b\u4e0a\u7684\u7bc0\u9ede,\u5fc5\u9808\u6bd4\u6309\u9215\u9ad8"
            })], e.prototype, "UIRoot", void 0), i([v], e)
        }(h.default);
        o.default = m, cc._RF.pop()
    }, {
        "../../../Component/AutoFitObject": void 0,
        "../../../FullScreenHandler": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../Helper/LayerSystem": void 0,
        "../../../ModuleBase": void 0
    }]
}, {}, ["SystemBackground"]);