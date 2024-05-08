window.__require = function t(e, i, r) {
    function h(a, s) {
        if (!i[a]) {
            if (!e[a]) {
                var l = a.split("/");
                if (l = l[l.length - 1], !e[l]) {
                    var n = "function" == typeof __require && __require;
                    if (!s && n) return n(l, !0);
                    if (o) return o(l, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = l
            }
            var p = i[a] = {
                exports: {}
            };
            e[a][0].call(p.exports, function(t) {
                return h(e[a][1][t] || t)
            }, p, p.exports, t, e, i, r)
        }
        return i[a].exports
    }
    for (var o = "function" == typeof __require && __require, a = 0; a < r.length; a++) h(r[a]);
    return h
}({
    FlashLight: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "16fa3GgbutPQIW6/6ipaFa+", "FlashLight");
        var r, h = this && this.__extends || (r = function(t, e) {
                return (r = Object.setPrototypeOf || {
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
                r(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            o = this && this.__decorate || function(t, e, i, r) {
                var h, o = arguments.length,
                    a = o < 3 ? e : null === r ? r = Object.getOwnPropertyDescriptor(e, i) : r;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, i, r);
                else
                    for (var s = t.length - 1; s >= 0; s--)(h = t[s]) && (a = (o < 3 ? h(a) : o > 3 ? h(e, i, a) : h(e, i)) || a);
                return o > 3 && a && Object.defineProperty(e, i, a), a
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.FlashLightUBO = void 0;
        var a = cc._decorator,
            s = a.ccclass,
            l = a.property,
            n = function() {
                function t() {
                    this.lightColor = new cc.Color(255, 255, 255, 150), this.lightCenterPoint = cc.v2(0, .5), this.lightAngle = 90, this.lightWidth = .1, this.enableGradient = !0, this.cropAlpha = !0, this.enableFog = !1
                }
                return o([l({
                    displayName: "\u5149\u7684\u984f\u8272"
                })], t.prototype, "lightColor", void 0), o([l({
                    type: cc.Float,
                    displayName: "\u5149\u7684\u89d2\u5ea6"
                })], t.prototype, "lightAngle", void 0), o([l({
                    type: cc.Float,
                    displayName: "\u5149\u7684\u5bec\u5ea6"
                })], t.prototype, "lightWidth", void 0), o([s("FlashLightUBO")], t)
            }();
        i.FlashLightUBO = n;
        var p = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.flashLightUBO = new n, e.flashTime = 2.5, e.flashInterval = 0, e._timer = 0, e._sprite = null, e._material = null, e._transparent = new cc.Color(0, 0, 0, 0), e
            }
            return h(e, t), e.prototype.onLoad = function() {
                this._sprite = this.getComponent(cc.Sprite), this._material = this._sprite.getMaterial(0)
            }, e.prototype.update = function(t) {
                this._timer += t, this._timer > this.flashTime + this.flashInterval ? this._timer = -this.flashLightUBO.lightWidth : (this._timer > this.flashTime ? this.flashLightUBO.lightCenterPoint.x = 1 + this.flashLightUBO.lightWidth : this.flashLightUBO.lightCenterPoint.x = this._timer / this.flashTime * (1 + 2 * this.flashLightUBO.lightWidth) - this.flashLightUBO.lightWidth, this._updateMaterial())
            }, e.prototype.ResetTimer = function() {
                this._timer = 0
            }, e.prototype._updateMaterial = function() {
                var t, e, i, r, h = this._sprite.spriteFrame;
                t = h.uv[0], r = h.uv[5], e = h.uv[6], i = h.uv[3];
                var o = new cc.Vec4(t, r, e, i),
                    a = h.isRotated() ? 1 : 0;
                this._material.setProperty("u_UVoffset", o), this._material.setProperty("u_rotated", a), this._material.setProperty("lightColor", this._timer > this.flashTime ? this._transparent : this.flashLightUBO.lightColor), this._material.setProperty("lightCenterPoint", this.flashLightUBO.lightCenterPoint), this._material.setProperty("lightAngle", this.flashLightUBO.lightAngle), this._material.setProperty("lightWidth", this.flashLightUBO.lightWidth), this._material.setProperty("enableGradient", this.flashLightUBO.enableGradient), this._material.setProperty("cropAlpha", this.flashLightUBO.cropAlpha), this._material.setProperty("enableFog", this.flashLightUBO.enableFog), this._sprite.setMaterial(0, this._material)
            }, o([l({
                type: n,
                displayName: "Setting"
            })], e.prototype, "flashLightUBO", void 0), o([l({
                type: cc.Float,
                displayName: "\u5237\u5149\u6642\u9593"
            })], e.prototype, "flashTime", void 0), o([l({
                type: cc.Float,
                displayName: "\u5237\u5149\u9593\u9694\u6642\u9593"
            })], e.prototype, "flashInterval", void 0), o([s], e)
        }(cc.Component);
        i.default = p, cc._RF.pop()
    }, {}]
}, {}, ["FlashLight"]);