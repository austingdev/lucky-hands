window.__require = function e(t, s, i) {
    function n(o, c) {
        if (!s[o]) {
            if (!t[o]) {
                var a = o.split("/");
                if (a = a[a.length - 1], !t[a]) {
                    var u = "function" == typeof __require && __require;
                    if (!c && u) return u(a, !0);
                    if (r) return r(a, !0);
                    throw new Error("Cannot find module '" + o + "'")
                }
                o = a
            }
            var l = s[o] = {
                exports: {}
            };
            t[o][0].call(l.exports, function(e) {
                return n(t[o][1][e] || e)
            }, l, l.exports, e, t, s, i)
        }
        return s[o].exports
    }
    for (var r = "function" == typeof __require && __require, o = 0; o < i.length; o++) n(i[o]);
    return n
}({
    SystemBackground: [function(e, t, s) {
        "use strict";
        cc._RF.push(t, "0e2c2KzowlO1aqFE1J9jyL8", "SystemBackground");
        var i = this && this.__decorate || function(e, t, s, i) {
                var n, r = arguments.length,
                    o = r < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, s) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, s, i);
                else
                    for (var c = e.length - 1; c >= 0; c--)(n = e[c]) && (o = (r < 3 ? n(o) : r > 3 ? n(t, s, o) : n(t, s)) || o);
                return r > 3 && o && Object.defineProperty(t, s, o), o
            },
            n = this && this.__awaiter || function(e, t, s, i) {
                return new(s || (s = Promise))(function(n, r) {
                    function o(e) {
                        try {
                            a(i.next(e))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function c(e) {
                        try {
                            a(i.throw(e))
                        } catch (t) {
                            r(t)
                        }
                    }

                    function a(e) {
                        var t;
                        e.done ? n(e.value) : (t = e.value, t instanceof s ? t : new s(function(e) {
                            e(t)
                        })).then(o, c)
                    }
                    a((i = i.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(s, "__esModule", {
            value: !0
        }), s.MessageParameter = void 0;
        const r = e("../../../Helper/EventSystem"),
            o = e("../../../Helper/LayerSystem"),
            c = e("../../../ModuleBase"),
            {
                ccclass: a,
                property: u
            } = cc._decorator;
        class l {
            constructor() {
                this.customUI = null, this.customSizeLandscape = cc.Size.ZERO, this.customSizePortrait = cc.Size.ZERO, this.backgroundOpacity = 150, this.cancelEvent = null, this.interruptable = !0, this.needSyncAsset = !0, this.closeEvent = null
            }
            Set(e, t = cc.Size.ZERO, s = cc.Size.ZERO, i = 150, n = null, r = !0, o = !1, c = null) {
                return this.customUI = e, this.customSizeLandscape = t, this.customSizePortrait = s, this.backgroundOpacity = i, this.cancelEvent = n, this.closeEvent = c, this.interruptable = r, this.needSyncAsset = o, this
            }
        }
        s.MessageParameter = l;
        let h = class extends c.default {
            constructor() {
                super(...arguments), this.root = null, this.background = null, this.UIRoot = null, this._cancelCallback = null, this._closeCallback = null, this._customUI = null, this._previousParent = null, this._queue = [], this._canNotInterrupt = !1
            }
            _onLoad() {
                return n(this, void 0, void 0, function*() {
                    r.EventSystem.Event(r.RegisterLayer).Insert(this.RegisterUILayer, this), this.root.active = !1, r.EventSystem.Event(r.SystemMsg.Open).Insert(this.Open, this), r.EventSystem.Event(r.SystemMsg.Close).Insert(this.Close, this), r.EventSystem.Event(r.SystemMsg.ClearQueue).Insert(this.ClearQueue, this)
                })
            }
            _onDestroy() {
                return n(this, void 0, void 0, function*() {
                    o.default.UnregisterLayer("SystemBackground", this.UIRoot), r.EventSystem.Event(r.SystemMsg.Open).Remove(this.Open, this), r.EventSystem.Event(r.SystemMsg.Close).Remove(this.Close, this), r.EventSystem.Event(r.SystemMsg.ClearQueue).Remove(this.ClearQueue, this), r.EventSystem.Event(r.RegisterLayer).Remove(this.RegisterUILayer, this)
                })
            }
            RegisterUILayer() {
                o.default.RegisterLayer("SystemBackground", this.UIRoot)
            }
            Open(e, t = cc.Size.ZERO, s = cc.Size.ZERO, i = 150, n = null, r = !1, c = !1, a = null) {
                if (this._canNotInterrupt) {
                    let o = (new l).Set(e, t, s, i, n, r, c, a);
                    this._queue.push(o)
                } else {
                    if (this.root.active) {
                        if (this._cancelCallback) {
                            let e = this._cancelCallback;
                            this._cancelCallback = null, e()
                        }
                        this.Close()
                    }
                    this._closeCallback = a, this._canNotInterrupt = r, this._previousParent = e.parent, this._customUI = e, o.default.SetParent(e, "SystemBackground"), this.background.opacity = i, n && (this._cancelCallback = n), this.root.active = !0
                }
            }
            Close() {
                if (console.error("[SystemBackground]  Close  this._previousParent = " + this._previousParent + " this._customUI " + this._customUI), this._previousParent && this._customUI && (this._customUI.parent = this._previousParent, this._customUI.active = !1), this._closeCallback) {
                    const e = this._closeCallback;
                    this._closeCallback = null, e()
                }
                if (this._previousParent = null, this._customUI = null, this._canNotInterrupt = !1, this.root.active = !1, 0 !== this._queue.length) {
                    let e = this._queue.shift();
                    this.Open(e.customUI, e.customSizeLandscape, e.customSizePortrait, e.backgroundOpacity, e.cancelEvent, e.interruptable, e.needSyncAsset, e.closeEvent)
                }
            }
            ClearQueue() {
                this._queue = []
            }
        };
        i([u({
            type: cc.Node,
            displayName: "\u6240\u6709\u986f\u793a\u7684\u4e0a\u5c64\u7bc0\u9ede"
        })], h.prototype, "root", void 0), i([u({
            type: cc.Node,
            displayName: "\u58d3\u9ed1\u7684\u80cc\u666f"
        })], h.prototype, "background", void 0), i([u({
            type: cc.Node,
            displayName: "\u4f9b\u5916\u90e8\u639b\u4e0a\u7684\u7bc0\u9ede,\u5fc5\u9808\u6bd4\u6309\u9215\u9ad8"
        })], h.prototype, "UIRoot", void 0), h = i([a], h), s.default = h, cc._RF.pop()
    }, {
        "../../../Helper/EventSystem": void 0,
        "../../../Helper/LayerSystem": void 0,
        "../../../ModuleBase": void 0
    }]
}, {}, ["SystemBackground"]);