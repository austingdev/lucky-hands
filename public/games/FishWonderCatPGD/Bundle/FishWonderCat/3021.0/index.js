window.__require = function e(t, i, o) {
    function a(r, c) {
        if (!i[r]) {
            if (!t[r]) {
                var s = r.split("/");
                if (s = s[s.length - 1], !t[s]) {
                    var l = "function" == typeof __require && __require;
                    if (!c && l) return l(s, !0);
                    if (n) return n(s, !0);
                    throw new Error("Cannot find module '" + r + "'")
                }
                r = s
            }
            var d = i[r] = {
                exports: {}
            };
            t[r][0].call(d.exports, function(e) {
                return a(t[r][1][e] || e)
            }, d, d.exports, e, t, i, o)
        }
        return i[r].exports
    }
    for (var n = "function" == typeof __require && __require, r = 0; r < o.length; r++) a(o[r]);
    return a
}({
    NodeParticleNew: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "5c77fYzMIlHB6FDrwplVJoQ", "NodeParticleNew");
        var o, a = this && this.__extends || (o = function(e, t) {
                return (o = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var i in t) t.hasOwnProperty(i) && (e[i] = t[i])
                    })(e, t)
            }, function(e, t) {
                function i() {
                    this.constructor = e
                }
                o(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            n = this && this.__decorate || function(e, t, i, o) {
                var a, n = arguments.length,
                    r = n < 3 ? t : null === o ? o = Object.getOwnPropertyDescriptor(t, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, i, o);
                else
                    for (var c = e.length - 1; c >= 0; c--)(a = e[c]) && (r = (n < 3 ? a(r) : n > 3 ? a(t, i, r) : a(t, i)) || r);
                return n > 3 && r && Object.defineProperty(t, i, r), r
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.NodeParticleNew = void 0;
        var r = cc._decorator,
            c = r.ccclass,
            s = r.property,
            l = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.targetNode = null, t.parentNode = null, t.randomRotation = !1, t.enableToPlay = !0, t.duration = -1, t.lifetime = 1, t.lifetimeRandomRange = 0, t.emissionRate = 10, t.emitArea = cc.Vec2.ZERO, t.speed = 10, t.speedRamdomRange = 0, t.angle = 90, t.angleRandomRange = 0, t.gravityXY = cc.v2(0, 1), t.beginScale = 1, t.endScale = 1, t.receiveNodeParticleListIndex = [], t.spawnpool = null, t.nodeParticleList = [], t
                }
                return a(t, e), t.prototype.onLoad = function() {
                    this.spawnpool = new cc.NodePool
                }, t.prototype.onEnable = function() {
                    null != this.targetNode ? this.enableToPlay && this.RePlayParticleSystem() : console.warn("[NodeParticleSystem]TargetPrefab Not Found.")
                }, t.prototype.RePlayParticleSystem = function() {
                    var e = 1 / this.emissionRate;
                    if (this.unscheduleAllCallbacks(), this.duration > 0) {
                        var t = this.duration / (1 / 60);
                        this.schedule(this.EmitNode.bind(this, this.emissionRate * (1 / 60)), 1 / 60, t)
                    } else this.schedule(this.EmitNode.bind(this, this.emissionRate * (1 / 60)), e)
                }, t.prototype.StopParticleSystem = function() {
                    this.unscheduleAllCallbacks()
                }, t.prototype.EmitNode = function(e) {
                    for (var t = 0; t < e; ++t) {
                        this.spawnpool || (this.spawnpool = new cc.NodePool);
                        var i = this.spawnpool.get();
                        null === i && (i = cc.instantiate(this.targetNode.data)), i.active = !0, i.parent = this.node;
                        var o = 2 * (Math.random() - .5) * this.emitArea.x,
                            a = 2 * (Math.random() - .5) * this.emitArea.y;
                        if (i.position = cc.v3(o, a), i.scale = this.beginScale, this.parentNode) {
                            var n = this.node.convertToWorldSpaceAR(i.getPosition());
                            i.setParent(this.parentNode), i.setPosition(this.parentNode.convertToNodeSpaceAR(n))
                        }
                        this.randomRotation && (i.angle = -360 * Math.random());
                        var r = (this.angle + 2 * (Math.random() - .5) * this.angleRandomRange) * Math.PI / 180,
                            c = cc.v2(Math.cos(r), Math.sin(r)),
                            s = this.lifetime + 2 * (Math.random() - .5) * this.lifetimeRandomRange,
                            l = this.speed + 2 * (Math.random() - .5) * this.speedRamdomRange,
                            d = {
                                node: i,
                                lifetime: s,
                                gravityXY: this.gravityXY,
                                beginScale: this.beginScale,
                                endScale: this.endScale,
                                currentLifeTime: 0,
                                currentGrivate: cc.v2(c.x * l, c.y * l)
                            };
                        this.nodeParticleList.push(d)
                    }
                }, t.prototype.update = function(e) {
                    var t = this;
                    if (this.nodeParticleList.forEach(function(i, o) {
                            i.currentLifeTime += e, i.currentLifeTime >= i.lifetime && (i.currentLifeTime = i.lifetime, t.receiveNodeParticleListIndex.push(o));
                            var a = cc.v2(i.gravityXY.x * e, i.gravityXY.y * e);
                            if (i.currentGrivate = cc.v2(i.currentGrivate.x + a.x, i.currentGrivate.y + a.y), i.node.position = cc.v3(i.node.position.x + i.currentGrivate.x * e, i.node.position.y + i.currentGrivate.y * e), i.beginScale != i.endScale) {
                                var n = i.currentLifeTime / i.lifetime,
                                    r = (i.endScale - i.beginScale) * n + i.beginScale;
                                i.node.scale = r
                            }
                        }), this.receiveNodeParticleListIndex.length > 0) {
                        for (var i = this.receiveNodeParticleListIndex.length - 1; i >= 0; i--) {
                            var o = this.receiveNodeParticleListIndex[i];
                            this.nodeParticleList[o].node.active = !1, this.spawnpool.put(this.nodeParticleList[o].node), this.nodeParticleList.splice(o, 1)
                        }
                        this.receiveNodeParticleListIndex = []
                    }
                }, t.prototype.onDisable = function() {
                    var e = this;
                    this.StopParticleSystem(), this.nodeParticleList.forEach(function(t) {
                        t.node.active = !1, e.spawnpool.put(t.node)
                    }), this.nodeParticleList = [], this.receiveNodeParticleListIndex = []
                }, n([s({
                    type: cc.Prefab,
                    displayName: "\u8868\u6f14\u7269\u4ef6"
                })], t.prototype, "targetNode", void 0), n([s({
                    type: cc.Node,
                    displayName: "\u7c92\u5b50\u7236\u7269\u4ef6"
                })], t.prototype, "parentNode", void 0), n([s({
                    displayName: "\u96a8\u6a5f\u96a8\u8f49\u89d2\u5ea6"
                })], t.prototype, "randomRotation", void 0), n([s({
                    displayName: "\u958b\u555f\u7269\u4ef6\u6642\u64ad\u653e"
                })], t.prototype, "enableToPlay", void 0), n([s({
                    type: cc.Float,
                    displayName: "\u8868\u6f14\u6301\u7e8c\u6642\u9593"
                })], t.prototype, "duration", void 0), n([s({
                    type: cc.Float,
                    displayName: "\u7c92\u5b50\u751f\u5b58\u6642\u9593"
                })], t.prototype, "lifetime", void 0), n([s({
                    type: cc.Float,
                    displayName: "\u7c92\u5b50\u751f\u5b58\u6642\u9593\u6d6e\u52d5\u503c",
                    tooltip: "\u7c92\u5b50\u751f\u5b58\u6642\u9593 \xb1 \u7c92\u5b50\u751f\u5b58\u6642\u9593\u6d6e\u52d5\u503c"
                })], t.prototype, "lifetimeRandomRange", void 0), n([s({
                    type: cc.Integer,
                    displayName: "\u6bcf\u79d2\u767c\u5c04\u6578\u91cf"
                })], t.prototype, "emissionRate", void 0), n([s({
                    displayName: "\u767c\u5c04\u7bc4\u570d"
                })], t.prototype, "emitArea", void 0), n([s({
                    type: cc.Float,
                    displayName: "\u79fb\u52d5\u901f\u5ea6"
                })], t.prototype, "speed", void 0), n([s({
                    type: cc.Float,
                    displayName: "\u79fb\u52d5\u901f\u5ea6\u6d6e\u52d5\u503c"
                })], t.prototype, "speedRamdomRange", void 0), n([s({
                    displayName: "\u767c\u5c04\u89d2\u5ea6"
                })], t.prototype, "angle", void 0), n([s({
                    displayName: "\u767c\u5c04\u89d2\u5ea6\u6d6e\u52d5\u503c",
                    tooltip: "\u767c\u5c04\u89d2\u5ea6 \xb1 \u767c\u5c04\u89d2\u5ea6\u6d6e\u52d5\u503c"
                })], t.prototype, "angleRandomRange", void 0), n([s({
                    displayName: "\u91cd\u529b\u65b9\u5411"
                })], t.prototype, "gravityXY", void 0), n([s({
                    displayName: "\u8d77\u59cbScale"
                })], t.prototype, "beginScale", void 0), n([s({
                    displayName: "\u7d50\u675fScale"
                })], t.prototype, "endScale", void 0), n([c], t)
            }(cc.Component);
        i.NodeParticleNew = l, cc._RF.pop()
    }, {}]
}, {}, ["NodeParticleNew"]);