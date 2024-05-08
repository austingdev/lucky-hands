window.__require = function e(t, i, n) {
    function o(s, r) {
        if (!i[s]) {
            if (!t[s]) {
                var l = s.split("/");
                if (l = l[l.length - 1], !t[l]) {
                    var c = "function" == typeof __require && __require;
                    if (!r && c) return c(l, !0);
                    if (a) return a(l, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                s = l
            }
            var h = i[s] = {
                exports: {}
            };
            t[s][0].call(h.exports, function(e) {
                return o(t[s][1][e] || e)
            }, h, h.exports, e, t, i, n)
        }
        return i[s].exports
    }
    for (var a = "function" == typeof __require && __require, s = 0; s < n.length; s++) o(n[s]);
    return o
}({
    CLOWN: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "71328avKQBKIoI9WISFI/3l", "CLOWN");
        var n, o = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
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
                n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            a = this && this.__decorate || function(e, t, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n);
                else
                    for (var r = e.length - 1; r >= 0; r--)(o = e[r]) && (s = (a < 3 ? o(s) : a > 3 ? o(t, i, s) : o(t, i)) || s);
                return a > 3 && s && Object.defineProperty(t, i, s), s
            },
            s = this && this.__awaiter || function(e, t, i, n) {
                return new(i || (i = Promise))(function(o, a) {
                    function s(e) {
                        try {
                            l(n.next(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function r(e) {
                        try {
                            l(n.throw(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                            e(t)
                        })).then(s, r)
                    }
                    l((n = n.apply(e, t || [])).next())
                })
            },
            r = this && this.__generator || function(e, t) {
                var i, n, o, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: r(0),
                    throw: r(1),
                    return: r(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function r(e) {
                    return function(t) {
                        return l([e, t])
                    }
                }

                function l(a) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (i = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                        switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return s.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    s.label = a[1];
                                    break
                                }
                                if (6 === a[0] && s.label < o[1]) {
                                    s.label = o[1], o = a;
                                    break
                                }
                                if (o && s.label < o[2]) {
                                    s.label = o[2], s.ops.push(a);
                                    break
                                }
                                o[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        a = t.call(e, s)
                    } catch (r) {
                        a = [6, r], n = 0
                    } finally {
                        i = o = 0
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
        var l = e("../../../../FishCommon/Script/CanvasHandler"),
            c = e("../../../../FishHunter/Script/Game/MainGame/Common/AudioManager"),
            h = e("../../../../FishHunter/Script/Game/MainGame/Fish/BaseFish"),
            u = cc._decorator,
            p = u.ccclass,
            d = u.property,
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.skeleton = null, t.ChangeSmoke = null, t.OddsDummy = null, t.ice_group = [], t.defaultAliveTime = 120, t.Level = 1, t.tempLevel = null, t
                }
                return o(t, e), t.prototype.Init = function(t, i) {
                    for (e.prototype.Init.call(this, t, i), this.o < 80 && (this.o += 80); this.o > 100 && this.o < 180;) this.o -= 40;
                    for (this.o > 280 && (this.o -= 80); this.o >= 180 && this.o < 260;) this.o += 40;
                    this.y = 50, this.isFeature = !0, this.skeleton.timeScale = 1, this.skeleton.setAnimation(0, "cw_LV1", !0), this.Level = 1, this.tempLevel = null, this.ice_group.forEach(function(e) {
                        e.active = !1
                    }), this.schedule(this.randomVoice, 7)
                }, t.prototype.InitNormalBehavior = function(t, i) {
                    void 0 === i && (i = 0), e.prototype.InitNormalBehavior.call(this, t, i), l.default.isReverse ? (this.node.scaleY = this.node.rotation <= -90 || this.node.rotation >= 90 ? 1 : -1, this.node.angle = -1 == this.node.scaleY ? 0 : 180, this.ChangeSmoke.angle = -1 == this.node.scaleY ? 90 : 270) : (this.node.scaleY = this.node.rotation <= -90 || this.node.rotation >= 90 ? -1 : 1, this.node.angle = -1 == this.node.scaleY ? 180 : 0, this.ChangeSmoke.angle = -1 == this.node.scaleY ? 90 : 270)
                }, t.prototype.FishDie = function() {
                    return s(this, void 0, void 0, function() {
                        var e = this;
                        return r(this, function() {
                            return this.aliveStatus = h.FishState.DEAD, this.canCollision = !1, this.StopAction(), this.skeleton.timeScale = 0, this.unschedule(this.randomVoice), c.default.Instance.Play("clown_catch_01"), this.node.runAction(cc.sequence(cc.repeat(cc.sequence(cc.moveTo(.05, this.node.getPosition().add(new cc.Vec2(3, 3))), cc.moveTo(.05, this.node.getPosition().add(new cc.Vec2(-3, -3)))), 30), cc.moveTo(.1, this.node.getPosition()), cc.callFunc(function() {
                                e.CoinEffect(3), c.default.Instance.Play("41_catch_bigfish")
                            }), cc.fadeOut(1), cc.callFunc(function() {
                                e.RemoveSelf()
                            }))), [2]
                        })
                    })
                }, t.prototype.FishOut = function(t) {
                    this.unschedule(this.randomVoice), e.prototype.FishOut.call(this, t)
                }, t.prototype.RemoveSelf = function() {
                    this.skeleton.setEventListener(null), this.skeleton.clearTracks(), e.prototype.RemoveSelf.call(this)
                }, t.prototype.changeLevel = function(e) {
                    if (this.skeleton.paused) this.tempLevel = e;
                    else if (e != this.Level) switch (this.ChangeSmoke.resetSystem(), this.skeleton.setAnimation(0, "cw_LV" + e.toString(), !0), this.Level = e, e) {
                        case 2:
                            c.default.Instance.Play("voice_clown_up_01");
                            break;
                        case 3:
                            c.default.Instance.Play("voice_clown_up_02")
                    }
                }, t.prototype.PauseBehavior = function(t, i) {
                    e.prototype.PauseBehavior.call(this, t, i), this.skeleton.paused = !0, this.ice_group.forEach(function(e) {
                        e.active = !0
                    })
                }, t.prototype.ResumeBehavior = function() {
                    e.prototype.ResumeBehavior.call(this), this.skeleton.paused = !1, this.ice_group.forEach(function(e) {
                        e.active = !1
                    }), null != this.tempLevel && (this.changeLevel(this.tempLevel), this.tempLevel = null)
                }, t.prototype.randomVoice = function() {
                    var e = 1 + Math.floor(6 * Math.random());
                    e > 4 ? c.default.Instance.Play("clown_move_0" + this.Level.toString()) : c.default.Instance.Play("voice_clown_move_0" + e.toString())
                }, Object.defineProperty(t.prototype, "oddsRootPos", {
                    get: function() {
                        return this.node.convertToWorldSpaceAR(this.OddsDummy.getPosition())
                    },
                    enumerable: !1,
                    configurable: !0
                }), a([d(sp.Skeleton)], t.prototype, "skeleton", void 0), a([d(cc.ParticleSystem)], t.prototype, "ChangeSmoke", void 0), a([d(cc.Node)], t.prototype, "OddsDummy", void 0), a([d([cc.Node])], t.prototype, "ice_group", void 0), a([p], t)
            }(h.default);
        i.default = f, cc._RF.pop()
    }, {
        "../../../../FishCommon/Script/CanvasHandler": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Common/AudioManager": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Fish/BaseFish": void 0
    }],
    PIG: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "72edddNe91O/qTI0vzBzmjm", "PIG");
        var n, o = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
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
                n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            a = this && this.__decorate || function(e, t, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n);
                else
                    for (var r = e.length - 1; r >= 0; r--)(o = e[r]) && (s = (a < 3 ? o(s) : a > 3 ? o(t, i, s) : o(t, i)) || s);
                return a > 3 && s && Object.defineProperty(t, i, s), s
            },
            s = this && this.__awaiter || function(e, t, i, n) {
                return new(i || (i = Promise))(function(o, a) {
                    function s(e) {
                        try {
                            l(n.next(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function r(e) {
                        try {
                            l(n.throw(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                            e(t)
                        })).then(s, r)
                    }
                    l((n = n.apply(e, t || [])).next())
                })
            },
            r = this && this.__generator || function(e, t) {
                var i, n, o, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: r(0),
                    throw: r(1),
                    return: r(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function r(e) {
                    return function(t) {
                        return l([e, t])
                    }
                }

                function l(a) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (i = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                        switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return s.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    s.label = a[1];
                                    break
                                }
                                if (6 === a[0] && s.label < o[1]) {
                                    s.label = o[1], o = a;
                                    break
                                }
                                if (o && s.label < o[2]) {
                                    s.label = o[2], s.ops.push(a);
                                    break
                                }
                                o[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        a = t.call(e, s)
                    } catch (r) {
                        a = [6, r], n = 0
                    } finally {
                        i = o = 0
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
        }), i.PigEuler = void 0;
        var l, c = e("../../../../FishCommon/Script/CanvasHandler"),
            h = e("../../../../FishHunter/Script/Game/MainGame/Common/AudioManager"),
            u = e("../../../../FishHunter/Script/Game/MainGame/Fish/BaseFish"),
            p = cc._decorator,
            d = p.ccclass,
            f = p.property;
        (function(e) {
            e[e.Walk = 0] = "Walk", e[e.RunR = 1] = "RunR", e[e.RunL = 2] = "RunL", e[e.Cotcha = 3] = "Cotcha"
        })(l = i.PigEuler || (i.PigEuler = {}));
        var m = function(e) {
            function t() {
                var t = null !== e && e.apply(this, arguments) || this;
                return t.skeleton = null, t.SMR = [], t.ModelMat = null, t.RopeDummy = null, t.Hand = null, t.FollowNode = [], t.EffectCtrl = null, t.IdleEffect = null, t.PosAnchor = null, t.SmokeEffect = null, t.ice_group = [], t.color = cc.Color.WHITE, t.tween = null, t.newMat = [], t.eulerList = [cc.v3(5, 75, 30), cc.v3(40, -10, -10), cc.v3(40, 10, 10), cc.v3(40, 0, 0)], t.animNow = l.RunR, t.turnTween = null, t.animEvent = null, t.eventTimer = 0, t.timerPause = !1, t.randomSeed = 0, t.moveTween = null, t.particalStartSize = [], t.particalEndSize = [], t.idleTimes = 0, t
            }
            return o(t, e), t.prototype.onLoad = function() {
                var e = this;
                this.getComponentsInChildren(cc.ParticleSystem).forEach(function(t) {
                    e.particalStartSize.push(t.startSize), e.particalEndSize.push(t.endSize)
                })
            }, t.prototype.update = function(t) {
                var i = this;
                if (e.prototype.update.call(this, t), this.tween && this.newMat.forEach(function(e) {
                        e.setProperty("diffuseColor", i.color)
                    }), !this.timerPause) {
                    this.eventTimer > 0 && !this.timerPause && (this.eventTimer -= t, this.eventTimer <= 0 && (this.eventTimer = 0, this.animEvent && this.animEvent()));
                    for (var n = !1, o = 0; o < this.FollowNode.length; o++)
                        if (o % 2 == 0) n = this.FollowNode[o].active;
                        else if (n) {
                        var a = this.FollowNode[o].convertToWorldSpaceAR(cc.Vec3.ZERO);
                        this.FollowNode[o - 1].setPosition(this.node.convertToNodeSpaceAR(a))
                    }
                }
            }, t.prototype.InitParameter = function() {
                var t = this;
                if (e.prototype.InitParameter.call(this), this.isFeature = !0, c.default.isReverse ? (this.node.scaleY = this.node.angle <= -90 || this.node.angle >= 90 ? 1 : -1, this.node.scaleX = -1 == this.node.scaleY ? 1 : -1, this.node.angle = 0) : (this.node.scaleY = this.node.angle <= -90 || this.node.angle >= 90 ? -1 : 1, this.node.scaleX = -1 == this.node.scaleY ? -1 : 1), this.node.angle = 0, this.node.setPosition(cc.Vec3.ZERO), this.color = cc.Color.WHITE, 0 == this.newMat.length) {
                    this.SMR.forEach(function(e) {
                        var i = cc.MaterialVariant.create(t.ModelMat, e);
                        t.newMat.push(i)
                    });
                    for (var i = 0; i < this.newMat.length; i++) this.SMR[i].setMaterial(0, this.newMat[i]), this.newMat[i].setProperty("diffuseColor", this.color)
                }
                this.eulerTurn(l.Walk), this.skeleton.unscheduleAllCallbacks(), this.skeleton.stop(), this.Hand.active = !1, this.randomSeed = parseInt(this.ID), this.PosAnchor.setPosition(cc.v2(-1e3, -150)), this.idleTimes = 1 + Math.floor(2 * this.randomBySeed()), this.Jump(550), this.ice_group.forEach(function(e) {
                    e.active = !1
                })
            }, t.prototype.RemoveSelf = function() {
                for (var t = this.getComponentsInChildren(cc.ParticleSystem), i = 0; i < t.length; i++) t[i].emissionRate = 0, t[i].startSize = this.particalStartSize[i], t[i].endSize = this.particalEndSize[i], t[i].resetSystem();
                e.prototype.RemoveSelf.call(this)
            }, t.prototype.RandomMove = function() {
                this.PosAnchor.getPosition().x >= 800 ? this.FishOut() : this.PosAnchor.getPosition().x >= 300 ? this.Jump(450) : 0 == this.idleTimes ? (this.idleTimes = 1 + Math.floor(2 * this.randomBySeed()), this.Jump()) : this.Idle()
            }, t.prototype.Jump = function(e) {
                void 0 === e && (e = 200), this.ResumeClip(), h.default.Instance.Play("Pig_move_01"), this.PlayClip("01_JUMP", !1, this.RandomMove.bind(this)), this.moveTween && this.moveTween.stop(), this.moveTween = cc.tween(this.PosAnchor).by(.65, {
                    position: cc.Vec3.RIGHT.mul(e)
                }, {
                    easing: "sineInOut"
                }).call(function() {
                    c.default.CameraShakeEffect(.1, 8)
                }).start(), this.IdleEffect.setPosition(cc.v2(this.PosAnchor.getPosition().x + 50, 0))
            }, t.prototype.Idle = function() {
                this.idleTimes--, h.default.Instance.Play("Pig_smile_01"), this.PlayClip("02_Stay_Idle", !1, this.RandomMove.bind(this))
            }, t.prototype.FishDie = function() {
                return s(this, void 0, void 0, function() {
                    return r(this, function() {
                        return this.aliveStatus = u.FishState.DEAD, this.canCollision = !1, this.isInit = !1, this.StopAction(), this.EffectCtrl.play("Reset"), this.moveTween && this.moveTween.stop(), this.moveTween = null, this.animEvent = null, this.PauseClip(), this.Event_FishLeave && this.Event_FishLeave(this, 6), [2]
                    })
                })
            }, t.prototype.FishOut = function() {
                this.EffectCtrl.play("Reset"), this.moveTween && this.moveTween.stop(), this.moveTween = null, this.animEvent = null, e.prototype.FishOut.call(this)
            }, t.prototype.ResetPos = function() {
                this.PosAnchor.setPosition(cc.Vec2.ZERO)
            }, t.prototype.OnHitFish = function() {
                return s(this, void 0, void 0, function() {
                    var e = this;
                    return r(this, function() {
                        return this.tween && (this.tween.stop(), this.tween = null, this.color = cc.Color.WHITE, this.newMat.forEach(function(t) {
                            t.setProperty("diffuseColor", e.color)
                        })), this.tween = cc.tween(this.color).repeat(2, cc.tween(this.color).to(.1, {
                            r: 200,
                            g: 0,
                            b: 0
                        }).to(.1, {
                            r: 255,
                            g: 255,
                            b: 255
                        })).call(function() {
                            e.tween = null, e.color = cc.Color.WHITE, e.newMat.forEach(function(t) {
                                t.setProperty("diffuseColor", e.color)
                            })
                        }).start(), [2]
                    })
                })
            }, t.prototype.PauseClip = function() {
                this.skeleton.pause(), this.moveTween && this.moveTween.stop(), this.timerPause = !0
            }, t.prototype.ResumeClip = function() {
                this.skeleton.resume(), this.moveTween && this.moveTween.start(), this.timerPause = !1
            }, t.prototype.PlayClip = function(e, t, i) {
                this.animEvent = null, this.skeleton.play(e);
                var n = this.skeleton.getAnimationState(e);
                n && (n.repeatCount = t ? cc.macro.REPEAT_FOREVER : 1, i && (this.eventTimer = n.duration, this.animEvent = i)), this.EffectCtrl.play(e)
            }, t.prototype.SetNextClip = function(e, t, i, n) {
                var o = this;
                this.animEvent = null;
                var a = this.skeleton.getAnimationState(this.skeleton.currentClip.name);
                a && (this.eventTimer = a.duration - a.time, this.animEvent = function() {
                    i && i(), o.PlayClip(e, t, n)
                }, this.eventTimer <= 0 && this.animEvent())
            }, Object.defineProperty(t.prototype, "getRopePos", {
                get: function() {
                    return this.RopeDummy.convertToWorldSpaceAR(cc.Vec2.ZERO)
                },
                enumerable: !1,
                configurable: !0
            }), t.prototype.eulerTurn = function(e, t) {
                if (void 0 === t && (t = 0), null == e) return this.turnTween && this.turnTween.stop(), this.turnTween = null, void(this.animNow = null);
                this.animNow != e && (this.turnTween && this.turnTween.stop(), t > 0 ? this.turnTween = cc.tween(this.skeleton.node).to(t, {
                    eulerAngles: this.eulerList[e]
                }).start() : this.skeleton.node.eulerAngles = this.eulerList[e], this.animNow = e)
            }, t.prototype.ParticalHalfSize = function() {
                for (var e = this.getComponentsInChildren(cc.ParticleSystem), t = 0; t < e.length; t++) e[t].startSize = this.particalStartSize[t] / 2, e[t].endSize = this.particalEndSize[t] / 2
            }, t.prototype.EnableSmokeEffect = function() {
                var e = this;
                this.unscheduleAllCallbacks(), this.SmokeEffect.node.active = !0, this.SmokeEffect.emissionRate = 50, this.scheduleOnce(function() {
                    e.SmokeEffect.emissionRate = 0
                }, .3), this.scheduleOnce(function() {
                    e.SmokeEffect.node.active = !1
                }, 1.3)
            }, t.prototype.PauseBehavior = function(t, i) {
                e.prototype.PauseBehavior.call(this, t, i), this.skeleton.pause(), this.timerPause = !0, this.moveTween && this.moveTween.stop(), this.EffectCtrl.play("Pause"), this.ice_group.forEach(function(e) {
                    e.active = !0
                })
            }, t.prototype.ResumeBehavior = function() {
                e.prototype.ResumeBehavior.call(this), this.skeleton.resume(), this.timerPause = !1, this.moveTween && this.moveTween.start(), this.skeleton.resume(), this.ice_group.forEach(function(e) {
                    e.active = !1
                })
            }, t.prototype.randomBySeed = function() {
                return this.randomSeed = Math.floor(this.randomSeed % 233280), this.randomSeed = (9301 * this.randomSeed + 49297) % 233280, this.randomSeed / 233280
            }, t.prototype.isLockInScreen = function(e) {
                if (e) {
                    var t = this.node.convertToWorldSpaceAR(e.getPosition());
                    if (this.isSummon && this.mainFishNode && (t = this.mainFishNode.convertToWorldSpaceAR(e.getPosition())), t.x >= -150 && t.x < c.default.WinSize.width - -150 && t.y >= -150 && t.y < c.default.WinSize.height - -150) return t
                }
                return null
            }, a([f(cc.SkeletonAnimation)], t.prototype, "skeleton", void 0), a([f([cc.SkinnedMeshRenderer])], t.prototype, "SMR", void 0), a([f(cc.Material)], t.prototype, "ModelMat", void 0), a([f(cc.Node)], t.prototype, "RopeDummy", void 0), a([f(cc.Node)], t.prototype, "Hand", void 0), a([f([cc.Node])], t.prototype, "FollowNode", void 0), a([f(cc.Animation)], t.prototype, "EffectCtrl", void 0), a([f(cc.Node)], t.prototype, "IdleEffect", void 0), a([f(cc.Node)], t.prototype, "PosAnchor", void 0), a([f(cc.ParticleSystem)], t.prototype, "SmokeEffect", void 0), a([f([cc.Node])], t.prototype, "ice_group", void 0), a([d], t)
        }(u.default);
        i.default = m, cc._RF.pop()
    }, {
        "../../../../FishCommon/Script/CanvasHandler": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Common/AudioManager": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Fish/BaseFish": void 0
    }],
    SkillClown: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "07458W6eMJAObxM+xZ7nJFN", "SkillClown");
        var n, o = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
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
                n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            a = this && this.__decorate || function(e, t, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n);
                else
                    for (var r = e.length - 1; r >= 0; r--)(o = e[r]) && (s = (a < 3 ? o(s) : a > 3 ? o(t, i, s) : o(t, i)) || s);
                return a > 3 && s && Object.defineProperty(t, i, s), s
            },
            s = this && this.__awaiter || function(e, t, i, n) {
                return new(i || (i = Promise))(function(o, a) {
                    function s(e) {
                        try {
                            l(n.next(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function r(e) {
                        try {
                            l(n.throw(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                            e(t)
                        })).then(s, r)
                    }
                    l((n = n.apply(e, t || [])).next())
                })
            },
            r = this && this.__generator || function(e, t) {
                var i, n, o, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: r(0),
                    throw: r(1),
                    return: r(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function r(e) {
                    return function(t) {
                        return l([e, t])
                    }
                }

                function l(a) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (i = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                        switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return s.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    s.label = a[1];
                                    break
                                }
                                if (6 === a[0] && s.label < o[1]) {
                                    s.label = o[1], o = a;
                                    break
                                }
                                if (o && s.label < o[2]) {
                                    s.label = o[2], s.ops.push(a);
                                    break
                                }
                                o[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        a = t.call(e, s)
                    } catch (r) {
                        a = [6, r], n = 0
                    } finally {
                        i = o = 0
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
        var l = e("../../../../FishCommon/Script/CanvasHandler"),
            c = e("../../../../FishHunter/Script/Game/GameClient"),
            h = e("../../../../FishHunter/Script/Game/MainGame/Award/SkillTitle"),
            u = e("../../../../FishHunter/Script/Game/MainGame/Common/AudioManager"),
            p = e("../../../../FishHunter/Script/Game/MainGame/Common/ResourceManager"),
            d = e("../../../../FishHunter/Script/Game/MainGame/Common/Utility"),
            f = e("../../../../FishHunter/Script/Game/MainGame/Fish/FishManager"),
            m = e("../../../../FishHunter/Script/Game/MainGame/Weapon/WeaponManager"),
            y = e("../../../../FishHunter/Script/Game/MainGame/Skill/BaseSkill"),
            v = e("../../../../FishHunter/Script/Game/MainGame/Skill/BaseSkillOddsUI"),
            g = cc._decorator,
            S = g.ccclass,
            P = g.property,
            w = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.Clown = null, t.SkillAnim = null, t.Root = null, t.Flag = null, t.SpotLight = null, t.BetLabel = null, t.scoreLabel = null, t.AddLabel = null, t.MutipleLabel = null, t.oddsParent = null, t.CloudBG = null, t.chargeEffect = null, t.bagEffect = null, t.Explo = null, t.coinParticles = [], t.fishID = null, t.oriOdds = 1, t.multiple = 1, t.ClownOdds = null, t.countSound = null, t.awardList = null, t.awardType = null, t.awardIndex = 0, t.showingScore = 0, t
                }
                return o(t, e), t.prototype.onLoad = function() {
                    this.skillType = y.skillEnum.Clown, this.limitTime = 120
                }, t.prototype.InitProperties = function(t) {
                    void 0 === t && (t = null), e.prototype.InitProperties.call(this), this.playerBet = t.bet, this.totalOdds = t.odds, this.totalWin = t.win, this.fishID = t.id, this.oriOdds = t.CircusClown_odds;
                    var i = t.awaken_prize;
                    this.awardList = [], this.awardType = [];
                    for (var n = 0; n < i.length; n++)
                        for (var o = i[n].value, a = 0; a < o.length; a++) this.awardType.push(i[n].type), this.awardList.push(i[n].value[a]);
                    this.awardIndex = 0, this.BetLabel.string = this.playerBet.toString(), this.scoreLabel.string = "0", this.multiple = 1, this.MutipleLabel.string = "X1", this.Clown.node.active = !0, this.Clown.node.opacity = 0, this.node.angle = l.default.isReverse ? 180 : 0, this.showingScore = 0
                }, t.prototype.UnUseSkill = function() {
                    this.ClownOdds && (this.ClownOdds.Hide(!1), this.ClownOdds = null), null != this.countSound && (u.default.Instance.Stop(this.countSound), this.countSound = null), this.Clown.node.active = !1, this.Root.setScale(1), this.Root.setPosition(cc.Vec2.ZERO), this.Flag.stop(), e.prototype.UnUseSkill.call(this)
                }, t.prototype.UseSkill = function() {
                    var e = this,
                        t = f.default.Instance.GetFishByID(this.fishID.toString());
                    this.ClownOdds = p.default.SpawnSkill("ClownOdds").getComponent(v.default), this.SkillAnim.play("ShowUp"), this.scheduleOnce(function() {
                        e.SpotPlayer()
                    }, 1.75), this.Flag.play(), this.ClownOdds.SkillInit(this.oriOdds);
                    var i = l.default.isReverse ? t.node.getPosition().neg() : t.node.getPosition();
                    t && t.FishDie(), this.ClownOdds.node.setParent(this.oddsParent), this.ClownOdds.node.angle = 0, this.ClownOdds.node.setPosition(i), cc.tween(this.ClownOdds.node).delay(3).call(function() {
                        e.node && !e.isUnuse && (e.Clown.node.setPosition(e.ClownOdds.node.getPosition()), cc.tween(e.Clown.node).parallel(cc.tween().to(.5, {
                            opacity: 255
                        }), cc.tween().to(1, {
                            position: cc.Vec3.UP.mul(-200)
                        })).start(), e.Clown.setAnimation(0, "01_Capture_In", !1), e.Clown.setCompleteListener(function() {
                            e.Clown.setCompleteListener(null), e.Clown.setAnimation(0, "02_Circle", !0)
                        }))
                    }).delay(.3).call(function() {
                        e.node && !e.isUnuse && e.Explo.play()
                    }).to(1, {
                        position: cc.Vec3.ZERO
                    }).delay(1).call(function() {
                        e.node && !e.isUnuse && e.ShowUp()
                    }).start(), u.default.Instance.Fade(u.default.Instance.GetBGMID(), 1, 0), this.bgmID = u.default.Instance.Play("BGM_Clown_01_1", 1, !0), u.default.Instance.Fade(this.bgmID, 0, 1)
                }, t.prototype.SpotPlayer = function() {
                    var e = this;
                    cc.tween(this.SpotLight).to(.5, {
                        position: cc.v3(m.default.WeaponUIPosition(this.playerSeat)).add(cc.Vec3.UP.mul(l.default.isReverse ? -50 : 50))
                    }).call(function() {
                        e.CreateSkillTitle()
                    }).delay(1).to(.8, {
                        position: cc.Vec3.ZERO
                    }).start()
                }, t.prototype.ShowUp = function() {
                    return s(this, void 0, void 0, function() {
                        var e, t = this;
                        return r(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return this.SkillAnim.play("MagicHat"), u.default.Instance.Play("clown_title_01"), [4, this.delay(1e3)];
                                case 1:
                                    return i.sent(), u.default.Instance.Play("voice_clown_fever_01"), [4, this.delay(1e3)];
                                case 2:
                                    return i.sent(), this.CountScore(this.oriOdds * this.playerBet, 2, !0), [4, this.delay(2e3)];
                                case 3:
                                    return i.sent(), this.isMainPlayer && cc.tween(this.CloudBG).to(1, {
                                        opacity: 255
                                    }).start(), [4, this.delay(1e3)];
                                case 4:
                                    return i.sent(), this.ClownOdds && (this.ClownOdds.Hide(), this.ClownOdds = null), this.isMainPlayer || (this.SkillAnim.playAdditive("BG_Fade_Out"), e = cc.v3(m.default.WeaponUIPosition(this.playerSeat)).add(cc.Vec3.UP.mul(this.playerSeat > 1 ? -200 : 200)), l.default.isReverse && e.addSelf(cc.Vec3.UP.mul(this.playerSeat > 1 ? 400 : -400)), cc.tween(this.Root).to(1, {
                                        scale: .5,
                                        position: e
                                    }).start()), u.default.Instance.Play("clown_bag_01"), this.Clown.setAnimation(0, "03_MagicHat", !1), this.Clown.setCompleteListener(function() {
                                        t.Clown.setCompleteListener(null), t.Clown.setAnimation(0, "04_DanceLoop", !0)
                                    }), [4, this.delay(1400)];
                                case 5:
                                    return i.sent(), this.SkillAnim.play("Ready2dig"), [4, this.delay(1e3)];
                                case 6:
                                    return i.sent(), u.default.Instance.Play("clown_tiger_02"), this.SkillAnim.play("UI_GetTiger"), [4, this.delay(1500)];
                                case 7:
                                    return i.sent(), this.GetNextAward(), [2]
                            }
                        })
                    })
                }, t.prototype.GetNextAward = function() {
                    return s(this, void 0, void 0, function() {
                        var e = this;
                        return r(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    if (!(this.awardIndex < this.awardType.length)) return [3, 10];
                                    switch (this.Clown.setAnimation(0, "05_PreDrag", !1), this.Clown.setCompleteListener(function() {
                                        e.Clown.setCompleteListener(null), e.Clown.setAnimation(0, "06_DragLoop", !0), e.chargeEffect.play(), u.default.Instance.Play("clown_find_01")
                                    }), this.awardType[this.awardIndex]) {
                                        case "small":
                                            return [3, 1];
                                        case "big":
                                            return [3, 3];
                                        case "multiple":
                                            return [3, 6]
                                    }
                                    return [3, 9];
                                case 1:
                                    return [4, this.delay(500)];
                                case 2:
                                    return t.sent(), this.getCoin(), [3, 9];
                                case 3:
                                    return [4, this.delay(1e3)];
                                case 4:
                                    return t.sent(), this.bagEffect.play(), [4, this.delay(2e3)];
                                case 5:
                                    return t.sent(), this.getRabbit(), [3, 9];
                                case 6:
                                    return [4, this.delay(1e3)];
                                case 7:
                                    return t.sent(), this.bagEffect.play(), [4, this.delay(2e3)];
                                case 8:
                                    return t.sent(), this.getTiger(), [3, 9];
                                case 9:
                                    return [3, 11];
                                case 10:
                                    this.SkillOver(), t.label = 11;
                                case 11:
                                    return [2]
                            }
                        })
                    })
                }, t.prototype.getCoin = function() {
                    var e = this;
                    this.AddLabel.string = "+" + this.awardList[this.awardIndex] * this.playerBet, this.Clown.setCompleteListener(function() {
                        e.Clown.setCompleteListener(null), e.Clown.setAnimation(0, "07-0_DragOut", !1), e.Clown.setCompleteListener(function() {
                            e.Clown.setCompleteListener(null), e.Clown.setAnimation(0, "04_DanceLoop", !0)
                        }), u.default.Instance.Play("Buddha_coin_01"), e.SkillAnim.play("UI_GetCoin"), e.coinParticles[0].resetSystem(), e.coinParticles[1].resetSystem(), cc.tween(e.node).delay(.5).call(function() {
                            e.CountScore(e.showingScore + e.awardList[e.awardIndex] * e.playerBet, 1, !1)
                        }).delay(1.5).call(function() {
                            e.awardIndex++, e.GetNextAward()
                        }).start()
                    })
                }, t.prototype.getRabbit = function() {
                    var e = this;
                    this.AddLabel.string = "+" + this.awardList[this.awardIndex] * this.playerBet, this.Clown.setCompleteListener(function() {
                        e.Clown.setCompleteListener(null), e.Clown.setAnimation(0, "07-1_DragOut_01", !1), e.Clown.setCompleteListener(function() {
                            e.Clown.setCompleteListener(null), cc.tween(e.node).delay(.5).call(function() {
                                e.Clown.setAnimation(0, "07-1_DragOut_02", !1), e.Clown.setCompleteListener(function() {
                                    e.Clown.setCompleteListener(null), e.Clown.setAnimation(0, "04_DanceLoop", !0)
                                })
                            }).delay(.7).call(function() {
                                u.default.Instance.Play("clown_rabbit_02"), e.SkillAnim.play("UI_GetRabbit")
                            }).delay(.5).call(function() {
                                e.CountScore(e.showingScore + e.awardList[e.awardIndex] * e.playerBet, 1, !1)
                            }).delay(1).call(function() {
                                e.awardIndex++, e.GetNextAward()
                            }).start()
                        }), u.default.Instance.Play("clown_rabbit_01"), e.Clown.setAnimation(1, "08_DragOut_Rabbit", !1), e.coinParticles[2].resetSystem(), e.coinParticles[3].resetSystem()
                    })
                }, t.prototype.getTiger = function() {
                    var e = this;
                    this.multiple += this.awardList[this.awardIndex], this.Clown.setCompleteListener(function() {
                        e.Clown.setCompleteListener(null), e.Clown.setAnimation(0, "07-1_DragOut_01", !1), e.Clown.setCompleteListener(function() {
                            e.Clown.setCompleteListener(null), cc.tween(e.node).delay(.5).call(function() {
                                e.Clown.setAnimation(0, "07-1_DragOut_02", !1), e.Clown.setCompleteListener(function() {
                                    e.Clown.setCompleteListener(null), e.Clown.setAnimation(0, "04_DanceLoop", !0)
                                })
                            }).delay(.8).call(function() {
                                u.default.Instance.Play("clown_tiger_02"), e.SkillAnim.play("UI_GetTiger")
                            }).delay(.3).call(function() {
                                e.MutipleLabel.string = "X" + e.multiple
                            }).delay(1.2).call(function() {
                                e.awardIndex++, e.GetNextAward()
                            }).start()
                        }), u.default.Instance.Play("clown_tiger_01"), e.Clown.setAnimation(1, "09_DragOut_Tiger", !1), e.coinParticles[2].resetSystem(), e.coinParticles[3].resetSystem()
                    })
                }, t.prototype.SkillOver = function() {
                    return s(this, void 0, void 0, function() {
                        var e, t, i = this;
                        return r(this, function(n) {
                            switch (n.label) {
                                case 0:
                                    return this.Clown.setAnimation(0, "10_MagicHat_Revert", !1), this.Clown.setCompleteListener(function() {
                                        i.Clown.setCompleteListener(null), i.Clown.setAnimation(0, "02_Circle", !0), u.default.Instance.Play("clown_end_01")
                                    }), u.default.Instance.Fade(this.bgmID, 1, 0), this.bgmID = u.default.Instance.Play("BGM_Clown_01_2", 1, !1), u.default.Instance.Fade(this.bgmID, 0, 1), [4, this.delay(900)];
                                case 1:
                                    return n.sent(), this.Explo.play(), [4, this.delay(1200)];
                                case 2:
                                    return n.sent(), this.SkillAnim.play("SkillOver"), [4, this.delay(2500)];
                                case 3:
                                    return n.sent(), u.default.Instance.Play("Buddha_UI_01"), [4, this.delay(500)];
                                case 4:
                                    return n.sent(), this.multiple > 1 ? (this.CountScore(this.totalWin, 1.5, !0), [4, this.delay(1500)]) : [3, 6];
                                case 5:
                                    n.sent(), n.label = 6;
                                case 6:
                                    return this.isMainPlayer && cc.tween(this.CloudBG).to(1, {
                                        opacity: 0
                                    }).start(), cc.tween(this.Clown.node).to(1, {
                                        opacity: 0
                                    }).call(function() {
                                        i.Clown.setAnimation(0, "None", !1)
                                    }).start(), this.SkillAnim.play("UI_TigerFadeOut"), [4, this.delay(1e3)];
                                case 7:
                                    return n.sent(), e = m.default.WeaponUIPosition(this.playerSeat), (t = l.default.isReverse ? cc.moveTo(1, e.add(new cc.Vec2(0, this.playerSeat > 1 ? 160 : -210))) : cc.moveTo(1, e.add(new cc.Vec2(0, this.playerSeat > 1 ? -210 : 160)))).easing(cc.easeQuadraticActionOut()), this.scoreLabel.node.parent.runAction(cc.sequence(t, cc.delayTime(.5), cc.callFunc(function() {
                                        u.default.Instance.Play(i.multiple > 1 ? "Buffalo_win_02" : "Buffalo_win_01"), i.SkillAnim.play(i.multiple > 1 ? "BuddhaBigWin" : "BuddhaYouWin"), u.default.Instance.Stop(i.bgmID), i.bgmID = null, u.default.Instance.Fade(u.default.Instance.GetBGMID(), 0, 1), c.default.SkillSystem.SendCustomCmd("sk_CircusClown_finish")
                                    }), cc.delayTime(3.5), cc.callFunc(function() {
                                        i.HideSkillTitle(!0)
                                    }), cc.fadeTo(.5, 0), cc.callFunc(function() {
                                        i.UnUseSkill()
                                    }))), this.isMainPlayer || cc.tween(this.Root).to(1, {
                                        scale: 1,
                                        position: cc.Vec3.ZERO
                                    }).start(), [2]
                            }
                        })
                    })
                }, t.prototype.CreateSkillTitle = function() {
                    if (!this.isUnuse) {
                        this.SkillTitle && this.HideSkillTitle(!1);
                        var e = p.default.LoadGUI(this.skillType);
                        if (e) {
                            var t;
                            t = l.default.isReverse ? this.playerSeat > 1 ? cc.v2(0, 60) : cc.v2(0, -60) : this.playerSeat > 1 ? cc.v2(0, -60) : cc.v2(0, 60);
                            var i = m.default.WeaponUIPosition(this.playerSeat).add(t);
                            e.setPosition(i), e.opacity = 255, this.SkillTitle = e.getComponent(h.default)
                        }
                    }
                }, t.prototype.CountScore = function(e, t, i) {
                    var n = this,
                        o = t / .05,
                        a = (e - this.showingScore) / o;
                    cc.tween(this.scoreLabel.node).call(function() {
                        i && (n.countSound = u.default.Instance.Play("Aladdin_count_loop_01", 1, !0))
                    }).repeat(o, cc.tween(this.scoreLabel.node).call(function() {
                        n.showingScore += a, n.scoreLabel.string = d.default.NumberformatBet(n.showingScore, n.playerBet)
                    }).delay(.05)).call(function() {
                        n.scoreLabel.string = e.toString(), i && (u.default.Instance.Stop(n.countSound), n.countSound = null, u.default.Instance.Play("Aladdin_count_end_01"))
                    }).start()
                }, a([P(sp.Skeleton)], t.prototype, "Clown", void 0), a([P(cc.Animation)], t.prototype, "SkillAnim", void 0), a([P(cc.Node)], t.prototype, "Root", void 0), a([P(cc.Animation)], t.prototype, "Flag", void 0), a([P(cc.Node)], t.prototype, "SpotLight", void 0), a([P(cc.Label)], t.prototype, "BetLabel", void 0), a([P(cc.Label)], t.prototype, "scoreLabel", void 0), a([P(cc.Label)], t.prototype, "AddLabel", void 0), a([P(cc.Label)], t.prototype, "MutipleLabel", void 0), a([P(cc.Node)], t.prototype, "oddsParent", void 0), a([P(cc.Node)], t.prototype, "CloudBG", void 0), a([P(cc.Animation)], t.prototype, "chargeEffect", void 0), a([P(cc.Animation)], t.prototype, "bagEffect", void 0), a([P(cc.Animation)], t.prototype, "Explo", void 0), a([P([cc.ParticleSystem])], t.prototype, "coinParticles", void 0), a([S], t)
            }(y.default);
        i.default = w, cc._RF.pop()
    }, {
        "../../../../FishCommon/Script/CanvasHandler": void 0,
        "../../../../FishHunter/Script/Game/GameClient": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Award/SkillTitle": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Common/AudioManager": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Common/ResourceManager": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Common/Utility": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Fish/FishManager": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Skill/BaseSkill": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Skill/BaseSkillOddsUI": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Weapon/WeaponManager": void 0
    }],
    SkillPig: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "ea0fcrLiwBH4r8ZOojBprKv", "SkillPig");
        var n, o = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
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
                n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            a = this && this.__decorate || function(e, t, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n);
                else
                    for (var r = e.length - 1; r >= 0; r--)(o = e[r]) && (s = (a < 3 ? o(s) : a > 3 ? o(t, i, s) : o(t, i)) || s);
                return a > 3 && s && Object.defineProperty(t, i, s), s
            },
            s = this && this.__awaiter || function(e, t, i, n) {
                return new(i || (i = Promise))(function(o, a) {
                    function s(e) {
                        try {
                            l(n.next(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function r(e) {
                        try {
                            l(n.throw(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                            e(t)
                        })).then(s, r)
                    }
                    l((n = n.apply(e, t || [])).next())
                })
            },
            r = this && this.__generator || function(e, t) {
                var i, n, o, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: r(0),
                    throw: r(1),
                    return: r(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function r(e) {
                    return function(t) {
                        return l([e, t])
                    }
                }

                function l(a) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (i = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                        switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return s.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    s.label = a[1];
                                    break
                                }
                                if (6 === a[0] && s.label < o[1]) {
                                    s.label = o[1], o = a;
                                    break
                                }
                                if (o && s.label < o[2]) {
                                    s.label = o[2], s.ops.push(a);
                                    break
                                }
                                o[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        a = t.call(e, s)
                    } catch (r) {
                        a = [6, r], n = 0
                    } finally {
                        i = o = 0
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
        var l = e("../../../../FishHunter/Script/Game/MainGame/Skill/BaseSkill"),
            c = e("../../../../FishCommon/Script/CanvasHandler"),
            h = e("../../../../FishHunter/Script/Game/MainGame/Player/PlayerManager"),
            u = e("../../../../FishHunter/Script/Game/MainGame/Weapon/WeaponManager"),
            p = e("../../../../FishHunter/Script/Game/MainGame/Common/ResourceManager"),
            d = e("../../../../FishHunter/Script/Game/MainGame/Fish/FishManager"),
            f = e("../../../../FishHunter/Script/Game/MainGame/Common/AudioManager"),
            m = e("../../../../FishHunter/Script/Game/GameClient"),
            y = e("../../../../FishHunter/Script/Game/System/SkillSystem"),
            v = e("../Fish/PIG"),
            g = e("../../../../FishHunter/Script/Game/MainGame/Skill/BaseSkillTitleUI"),
            S = cc._decorator,
            P = S.ccclass,
            w = S.property,
            C = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.Root = null, t.RopeCircle = null, t.PigParent = null, t.Rope = null, t.Miss = null, t.AwakenAnim = null, t.TapHint = null, t.Hand = null, t.BgEffect = null, t.SparkEffect = null, t.Pig = null, t.PigUI = null, t.LightingOn = !1, t.CanPull = !1, t.targetPos = cc.Vec2.ZERO, t.bombPos = cc.Vec2.ZERO, t.pullCD = !1, t.currentBombTimes = 0, t.SmallBombTimes = 0, t.BigBombTimes = 0, t.fishID = null, t.CountObj = null, t.CountLabel = null, t.ShowingCount = 0, t.TargetCount = 0, t.countTween = null, t.fishAwardTime = 0, t.bombTimer = 0, t.movingTween = null, t.OtherPlayerTimer = 0, t.hintClickCount = 0, t.randomSeed = 0, t.RE = !1, t.isAwaken = !1, t
                }
                return o(t, e), t.prototype.onLoad = function() {
                    this.skillType = l.skillEnum.Pig, this.limitTime = 180
                }, t.prototype.update = function(t) {
                    e.prototype.update.call(this, t), this.forceTimer > 0 && (this.forceTimer -= t, this.forceTimer <= 0 && (console.error("PigSkill TimeOut"), this.Pig && (this.currentBombTimes > this.SmallBombTimes ? this.PigEscape() : this.SkillOver()), this.forceTimer = 0)), this.bombTimer > 0 && (this.bombTimer -= t, this.bombTimer <= 0 && (this.currentBombTimes <= this.SmallBombTimes && !this.isAwaken ? this.SmallBomb() : this.BigBomb(), this.bombTimer = 0)), this.Rope.node.active && this.UpdateRopePos(), !this.isMainPlayer && this.OtherPlayerTimer > 0 && (this.OtherPlayerTimer -= t, this.OtherPlayerTimer <= 0 && (this.OnTouchStart(null), this.OtherPlayerTimer = 1 + 3 * Math.random()))
                }, t.prototype.InitProperties = function(t) {
                    void 0 === t && (t = null), e.prototype.InitProperties.call(this), this.playerBet = t.bet, this.currentBombTimes = 0, this.ShowingCount = 0, this.TargetCount = 0, this.forceTime = 15, this.hintClickCount = 0, this.node.angle = c.default.isReverse ? 180 : 0, this.node.setPosition(cc.Vec2.ZERO), this.RE = c.default.isReverse ? this.playerSeat < 2 : this.playerSeat > 1, this.fishID = t.id, this.randomSeed = this.fishID, this.LightingOn = !1, this.CanPull = !1, this.pullCD = !1, this.isAwaken = !1, this.SmallBombTimes = t.small_bomb_times_target, this.BigBombTimes = t.big_bomb_times_target, this.isMainPlayer || (this.OtherPlayerTimer = 1 + 3 * Math.random())
                }, t.prototype.UnUseSkill = function() {
                    this.isMainPlayer && (h.PlayerManager.Instance.isLockChangeBet = !1), u.default.Instance.getWeapon(this.playerSeat).isGunReady = !0, this.isMainPlayer && this.CanelRegisterTouchEvent(), this.Pig && (this.Pig.Hand.active = !1, this.Pig.node.opacity = 255, this.Pig.RemoveSelf(), this.Pig = null), this.PigUI && (this.PigUI.Hide(!0), this.PigUI = null), this.Root.setScale(1), this.Root.setPosition(cc.Vec2.ZERO), this.AwakenAnim.node.active = !1, this.BgEffect.node.active = !1, this.RopeCircle.node.active = !1, this.Rope.node.active = !1, this.Miss.node.active = !1, this.SparkEffect.emissionRate = 0, this.tapHintActive(!1), this.CountObj && (p.default.DespawnEffect("Skill_PigCount", this.CountObj), this.CountObj = null, this.CountLabel = null), this.OtherPlayerTimer = 0, e.prototype.UnUseSkill.call(this)
                }, t.prototype.UseSkill = function() {
                    var e = this;
                    this.Pig = d.default.Instance.GetFishByID(this.fishID.toString()), this.Pig && (this.isMainPlayer && (h.PlayerManager.Instance.isLockChangeBet = !0), u.default.Instance.getWeapon(this.playerSeat).isGunReady = !1, this.isMainPlayer && this.RegisterTouchEvent(), this.Pig.FishDie(), cc.tween(this.Pig.node).repeat(10, cc.tween().by(.1, {
                        position: cc.v3(10, 10)
                    }).by(.1, {
                        position: cc.v3(-10, -10)
                    })).delay(.5).call(function() {
                        f.default.Instance.Play("Pig_catch_01"), e.Pig.PlayClip("03_Capture", !1), e.Pig.CoinEffect(), e.RopeCircle.node.active = !0;
                        var t = c.default.ConvMousePos(e.Pig.getRopePos);
                        c.default.isReverse && t.negSelf(), e.RopeCircle.node.setPosition(t), e.RopeCircle.setAnimation(0, "rope", !1), e.RopeCircle.timeScale = .8, e.RopeCircle.setCompleteListener(function() {
                            e.RopeCircle.setCompleteListener(null), e.RopeOver()
                        })
                    }).start(), this.forceTimer = this.forceTime)
                }, t.prototype.RopeOver = function() {
                    this.PigUI = p.default.LoadGUI(l.skillEnum.Pig).getComponent(g.default), this.PigUI && this.PigUI.Init(this.playerBet, this.playerSeat), this.RopeCircle.node.active = !1, this.Pig.node.setParent(this.PigParent), this.Pig.node.angle = 0, this.Pig.node.setScale(1);
                    var e = c.default.ConvMousePos(this.Pig.getRopePos);
                    this.Pig.node.setPosition(e), this.Pig.ResetPos(), this.Pig.ResumeClip(), this.Pig.PlayClip("07_RunRun", !0), this.Pig.eulerTurn(this.RE ? v.PigEuler.RunL : v.PigEuler.RunR), this.randomTargetPos(), this.StartRunning(), this.tapHintActive(!0), this.LightingOn = !0, this.Rope.node.active = !0, this.Rope.node.setPosition(u.default.WeaponUIPosition(this.playerSeat)), f.default.Instance.Fade(f.default.Instance.GetBGMID(), 1, 0), this.bgmID = f.default.Instance.Play("BGM_Pig_03_1", 0, !0), f.default.Instance.Fade(this.bgmID, 0, 1), d.default.Instance.RemoveFishByID(this.fishID.toString())
                }, t.prototype.randomTargetPos = function() {
                    var e = u.default.WeaponUIPosition(this.playerSeat).mul(.9);
                    c.default.isReverse || e.negSelf();
                    var t = this.randomBySeed();
                    this.randomBySeed() > .2 && (e.x > 0 && this.targetPos.x > 0 || e.x < 0 && this.targetPos.x < 0) ? this.targetPos = cc.v2(-e.x * (t + .7), e.y * (1 - t)) : this.targetPos = cc.v2(e.x * (t + .7), e.y * (1 - t))
                }, t.prototype.StartRunning = function() {
                    var e = this;
                    this.movingTween && this.movingTween.stop();
                    var t = c.default.isReverse ? this.targetPos.neg() : this.targetPos,
                        i = t.sub(this.Pig.node.getPosition()).len() / 600;
                    this.Pig.eulerTurn(t.x > 0 ? this.RE ? v.PigEuler.RunL : v.PigEuler.RunR : this.RE ? v.PigEuler.RunR : v.PigEuler.RunL, i / 2), this.movingTween = cc.tween(this.Pig.node).to(i, {
                        position: cc.v3(t)
                    }).delay(.5).call(function() {
                        e.currentBombTimes < e.SmallBombTimes ? e.PigPull() : e.BigBombTimes > 0 ? e.Awaken() : e.PigEscape()
                    }).start()
                }, t.prototype.PigPull = function() {
                    var e = this;
                    this.movingTween && this.movingTween.stop(), this.Pig.eulerTurn(null), this.Pig.SetNextClip("13_newTurn", !1, null, function() {
                        e.node && !e.isUnuse && (e.Pig.PlayClip("04_Struggle", !0), e.CanPull = !0, e.bombTimer = 3, e.SendRangeFish())
                    })
                }, t.prototype.SendRangeFish = function() {
                    if (this.isMainPlayer) {
                        var e = null;
                        this.currentBombTimes < this.SmallBombTimes ? (this.randomTargetPos(), e = d.default.Instance.GetRangeAttackableID(this.targetPos, 1200, 100)) : (this.targetPos = cc.Vec2.ZERO, e = d.default.Instance.GetRangeAttackableID(cc.Vec2.ZERO, 1200, 200)), this.bombPos = this.targetPos;
                        var t = {};
                        t.coordinateX = this.targetPos.x, t.coordinateY = this.targetPos.y, m.default.SkillSystem.SendRangeFish(y.SKILL_CMD_NAME.PIG_BOMB, e, t)
                    }
                    this.forceTimer = this.forceTime
                }, t.prototype.ReceiveSkillData = function(e) {
                    if (null != this.Pig) {
                        this.isMainPlayer || null == e.coordinateX || null == e.coordinateY || (this.targetPos = cc.v2(e.coordinateX, e.coordinateY)), this.dieFishList.length = 0, this.winList.length = 0;
                        var t = e.fish;
                        this.oddsList = e.odds;
                        for (var i = 0; i < t.length; i++) this.dieFishList.push(d.default.Instance.GetFishByID(t[i])), this.winList.push(this.oddsList[i] * this.playerBet);
                        this.TargetCount += Math.floor(1.5 * t.length), this.totalWin = e.total_win, e.small_bomb_times_target && (this.SmallBombTimes = e.small_bomb_times_target), e.big_bomb_times_target && (this.BigBombTimes = e.big_bomb_times_target), this.currentBombTimes += 1, this.currentBombTimes > this.SmallBombTimes && this.bombTimer > 0 && (this.BigBomb(), this.bombTimer = 0), this.forceTimer = 0
                    } else {
                        var n = e.win;
                        h.PlayerManager.Instance.ModifyPlayerWinning(this.playerSeat, n, null)
                    }
                }, t.prototype.SmallBomb = function() {
                    var e = this;
                    this.CanPull && (this.Rope.node.active = !0, this.CanPull = !1), this.movingTween && this.movingTween.stop(), this.Pig.eulerTurn(null), this.targetPos = this.bombPos, this.Pig.SetNextClip("05_Catch", !1, function() {
                        e.node && !e.isUnuse && e.scheduleOnce(function() {
                            f.default.Instance.Play("Pig_fall_01"), e.CameraShakeEffect(1.5, 3), e.KillFish()
                        }, .3)
                    }, function() {
                        e.node && !e.isUnuse && e.scheduleOnce(function() {
                            e.Pig.PlayClip("06_Runaway", !1, function() {
                                e.Pig.PlayClip("07_RunRun", !0), e.scheduleOnce(function() {
                                    e.randomTargetPos(), e.StartRunning()
                                }, .2)
                            })
                        }, .5)
                    })
                }, t.prototype.PigEscape = function() {
                    var e = this;
                    this.movingTween && this.movingTween.stop(), this.Pig.eulerTurn(null), this.CanPull = !0, this.scheduleOnce(function() {
                        if (e.node && !e.isUnuse) {
                            f.default.Instance.Fade(e.bgmID, 1, 0), e.bgmID = f.default.Instance.Play("BGM_Pig_03_2", 0, !0), f.default.Instance.Fade(e.bgmID, 0, 1), f.default.Instance.Play("Pig_runaway_01"), e.CanPull = !1, e.LightingOn = !1, e.tapHintActive(!1), e.Rope.node.active = !1, e.RopeCircle.node.active = !0, e.RopeCircle.node.angle = e.Rope.node.angle, e.RopeCircle.node.setPosition(e.Rope.node.getPosition().add(e.Pig.node.getPosition()).mul(.5)), e.RopeCircle.setAnimation(0, "ropebroke", !1), e.RopeCircle.setCompleteListener(function() {
                                e.RopeCircle.setCompleteListener(null), e.RopeCircle.node.active = !1
                            });
                            var t = c.default.ConvMousePos(e.Pig.getRopePos);
                            c.default.isReverse && t.negSelf(), e.targetPos = e.Pig.node.position.x > 0 ? cc.v2(1136, 640) : cc.v2(-1136, 640), cc.tween(e.Pig.node).to(1, {
                                position: cc.v3(e.targetPos)
                            }).start(), e.scheduleOnce(function() {
                                e.node && !e.isUnuse && (e.Miss.node.active = !0, e.Miss.node.setPosition(t), e.Miss.play(), e.SkillOver())
                            }, .5)
                        }
                    }, 3)
                }, t.prototype.Awaken = function() {
                    return s(this, void 0, void 0, function() {
                        var e = this;
                        return r(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.isAwaken = !0, this.movingTween && this.movingTween.stop(), this.movingTween = cc.tween(this.Pig.node).to(.75, {
                                        position: cc.v3(0, 90, 0)
                                    }).call(function() {
                                        e.CanPull = !0
                                    }).start(), this.Pig.eulerTurn(this.playerSeat % 2 == 0 ? this.RE ? v.PigEuler.RunL : v.PigEuler.RunR : this.RE ? v.PigEuler.RunR : v.PigEuler.RunL, .75), [4, this.delay(2500)];
                                case 1:
                                    return t.sent(), this.Pig.SetNextClip("08_Cotcha", !1, function() {
                                        e.CanPull = !1, e.LightingOn = !1, e.tapHintActive(!1), e.movingTween && e.movingTween.stop(), e.Pig.eulerTurn(v.PigEuler.Cotcha, .5), e.movingTween = cc.tween(e.Pig.node).to(.4, {
                                            position: cc.v3(0, 20, 0)
                                        }).call(function() {
                                            f.default.Instance.Play("Pig_fall_01"), e.CameraShakeEffect(1.5, 3)
                                        }).delay(1).call(function() {
                                            if (f.default.Instance.Fade(e.bgmID, 1, 0), e.bgmID = f.default.Instance.Play("BGM_Pig_04_1", 0, !0), f.default.Instance.Fade(e.bgmID, 0, 1), f.default.Instance.Play("Pig_Raging_01"), f.default.Instance.Play("voice_pig_fever_01"), e.AwakenAnim.node.active = !0, e.AwakenAnim.play(), e.Rope.node.active = !1, e.isMainPlayer) e.BgEffect.node.active = !0, e.BgEffect.play("BG_BlackFadeIn");
                                            else {
                                                var t = cc.v3(u.default.WeaponUIPosition(e.playerSeat)).add(cc.Vec3.UP.mul(e.playerSeat > 1 ? -300 : 200));
                                                c.default.isReverse && t.addSelf(cc.Vec3.UP.mul(e.playerSeat > 1 ? 600 : -400)), cc.tween(e.Root).to(1, {
                                                    scale: .5,
                                                    position: t
                                                }).start(), e.Pig.ParticalHalfSize()
                                            }
                                        }).delay(3).call(function() {
                                            f.default.Instance.Play("Pig_hand_01"), e.Hand.node.active = !0, e.Hand.play("09_intro"), e.Pig.PlayClip("09_intro", !1, function() {
                                                e.Pig.PlayClip("10_shak_loop", !0), e.Hand.stop(), e.Hand.node.active = !1, e.Pig.Hand.active = !0, e.SendRangeFish(), e.bombTimer = 3
                                            })
                                        }).delay(.6).call(function() {
                                            e.CameraShakeEffect(3, 6), e.BgEffect.play("BG_EffectFadeIn")
                                        }).delay(.8).call(function() {
                                            e.SparkEffect.emissionRate = 40
                                        }).start()
                                    }), [2]
                            }
                        })
                    })
                }, t.prototype.BigBomb = function() {
                    var e = this,
                        t = this.currentBombTimes >= this.SmallBombTimes + this.BigBombTimes;
                    this.Pig.SetNextClip(t ? "12_outro" : "11_shak_money_loop", !1, function() {
                        e.node && !e.isUnuse && (t || e.scheduleOnce(function() {
                            f.default.Instance.Play("Pig_shake_01")
                        }, .5), e.scheduleOnce(function() {
                            t ? (f.default.Instance.Play("Pig_final_01"), e.SparkEffect.emissionRate = 0) : f.default.Instance.Play("Pig_shake_02"), e.setCountNumber(), e.KillFish()
                        }, 1))
                    }, function() {
                        e.node && !e.isUnuse && (t ? cc.tween(e.Pig.node).delay(.5).call(function() {
                            f.default.Instance.Fade(e.bgmID, 1, 0), e.bgmID = f.default.Instance.Play("BGM_Pig_04_2", 0, !1), f.default.Instance.Fade(e.bgmID, 0, 1)
                        }).delay(2.5).to(1, {
                            opacity: 0
                        }).call(function() {
                            e.SkillOver()
                        }).start() : (e.Pig.PlayClip("10_shak_loop", !0), e.SendRangeFish(), e.bombTimer = 3))
                    })
                }, t.prototype.KillFish = function(e) {
                    void 0 === e && (e = !0);
                    var t = {};
                    t.showScore = e;
                    var i = 1e3 * this.KillFishesAndShowAward(t);
                    i += (new Date).getTime(), this.fishAwardTime = this.fishAwardTime < i ? i : this.fishAwardTime, this.currentWin = this.totalWin, this.PigUI && this.PigUI.SetScore(this.currentWin, 2.05)
                }, t.prototype.SkillOver = function() {
                    var e = this;
                    this.CountObj && (this.countTween && (this.countTween.stop(), this.CountLabel.string = this.TargetCount.toString()), cc.tween(this.CountObj).to(1, {
                        opacity: 0
                    }).start()), this.BgEffect.play("BG_AllFadeOut"), this.PigUI && this.PigUI.ShowScore(this.totalWin, this.BigBombTimes > 0);
                    var t = (new Date).getTime();
                    this.fishAwardTime = this.fishAwardTime > t ? this.fishAwardTime - t : 0, this.node.runAction(cc.sequence(cc.delayTime((this.fishAwardTime < 2500 ? 2500 : this.fishAwardTime) / 1e3), cc.callFunc(function() {
                        e.UnUseSkill()
                    })))
                }, t.prototype.OnTouchStart = function() {
                    var e = this;
                    if (this.isMainPlayer && this.hintClickCount++, this.hintClickCount >= 3 && (this.tapHintActive(!1), this.hintClickCount = 0), this.LightingOn && (this.Rope.play("RopeLighting"), this.CanPull && !this.pullCD)) {
                        this.movingTween && this.movingTween.stop(), this.Pig.eulerTurn(null), this.Pig.EnableSmokeEffect(), this.pullCD = !0, f.default.Instance.Play("Patrick_Pull_01");
                        var t = cc.Vec2.ZERO;
                        cc.Vec2.lerp(t, this.Pig.node.getPosition(), this.Rope.node.getPosition(), .15);
                        var i = cc.Vec2.ZERO;
                        cc.Vec2.lerp(i, this.Pig.node.getPosition(), this.Rope.node.getPosition(), .1), this.movingTween = cc.tween(this.Pig.node).to(.6, {
                            position: cc.v3(t)
                        }, {
                            easing: "backOut"
                        }).to(.3, {
                            position: cc.v3(i)
                        }).start(), this.scheduleOnce(function() {
                            e.pullCD = !1
                        }, .9)
                    }
                }, t.prototype.setCountNumber = function() {
                    var e = this;
                    if (this.isMainPlayer) {
                        null == this.CountObj && (this.CountObj = p.default.SpawnEffect("Skill_PigCount", this.isMainPlayer), this.CountObj.opacity = 255, this.CountObj.angle = c.default.isReverse ? 180 : 0, this.CountLabel = this.CountObj.getComponentInChildren(cc.Label), this.CountLabel.string = "1"), this.countTween && this.countTween.stop();
                        var t = this.TargetCount - this.ShowingCount;
                        this.countTween = cc.tween(this.CountObj).repeat(t, cc.tween().call(function() {
                            e.CountLabel.string = (e.ShowingCount += 1).toString()
                        }).to(0, {
                            scale: 1.1
                        }).to(.08, {
                            scale: 1
                        })).start()
                    }
                }, t.prototype.UpdateRopePos = function() {
                    var e = u.default.WeaponUIPosition(this.playerSeat),
                        t = cc.Vec2.ZERO;
                    t = c.default.ConvMousePos(this.Pig.getRopePos), c.default.isReverse && t.negSelf(), this.Rope.node.angle = -57.29578 * Math.atan2(Math.floor(t.x - e.x), Math.floor(t.y - e.y));
                    var i = t.sub(e),
                        n = Math.sqrt(i.x * i.x + i.y * i.y) / 440;
                    this.Rope.node.scaleY = n
                }, t.prototype.tapHintActive = function(e) {
                    e && !this.TapHint.node.active && this.isMainPlayer && (this.TapHint.node.active = !0, this.TapHint.play(), this.TapHint.node.setScale(0), this.TapHint.node.runAction(cc.scaleTo(.5, 1).easing(cc.easeBounceOut())), this.hintClickCount = 0), !e && this.TapHint.node.active && (this.TapHint.node.active = !1, this.TapHint.stop())
                }, t.prototype.randomBySeed = function() {
                    return this.randomSeed = Math.floor(this.randomSeed % 233280), this.randomSeed = (9301 * this.randomSeed + 49297) % 233280, this.randomSeed / 233280
                }, a([w(cc.Node)], t.prototype, "Root", void 0), a([w(sp.Skeleton)], t.prototype, "RopeCircle", void 0), a([w(cc.Node)], t.prototype, "PigParent", void 0), a([w(cc.Animation)], t.prototype, "Rope", void 0), a([w(cc.Animation)], t.prototype, "Miss", void 0), a([w(cc.Animation)], t.prototype, "AwakenAnim", void 0), a([w(cc.Animation)], t.prototype, "TapHint", void 0), a([w(cc.SkeletonAnimation)], t.prototype, "Hand", void 0), a([w(cc.Animation)], t.prototype, "BgEffect", void 0), a([w(cc.ParticleSystem)], t.prototype, "SparkEffect", void 0), a([P], t)
            }(l.default);
        i.default = C, cc._RF.pop()
    }, {
        "../../../../FishCommon/Script/CanvasHandler": void 0,
        "../../../../FishHunter/Script/Game/GameClient": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Common/AudioManager": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Common/ResourceManager": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Fish/FishManager": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Player/PlayerManager": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Skill/BaseSkill": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Skill/BaseSkillTitleUI": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Weapon/WeaponManager": void 0,
        "../../../../FishHunter/Script/Game/System/SkillSystem": void 0,
        "../Fish/PIG": "PIG"
    }],
    SkillTiger: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "7457chyFlFPva89gbSn8Z3g", "SkillTiger");
        var n, o = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
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
                n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            a = this && this.__decorate || function(e, t, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n);
                else
                    for (var r = e.length - 1; r >= 0; r--)(o = e[r]) && (s = (a < 3 ? o(s) : a > 3 ? o(t, i, s) : o(t, i)) || s);
                return a > 3 && s && Object.defineProperty(t, i, s), s
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var s = e("../../../../FishCommon/Script/CanvasHandler"),
            r = e("../../../../FishHunter/Script/Game/GameClient"),
            l = e("../../../../FishHunter/Script/Game/MainGame/Common/AudioManager"),
            c = e("../../../../FishHunter/Script/Game/MainGame/Common/ResourceManager"),
            h = e("../../../../FishHunter/Script/Game/MainGame/Fish/FishManager"),
            u = e("../../../../FishHunter/Script/Game/MainGame/Player/PlayerManager"),
            p = e("../../../../FishHunter/Script/Game/MainGame/Weapon/WeaponManager"),
            d = e("../../../../FishHunter/Script/Game/MainGame/Skill/BaseSkill"),
            f = e("../../../../FishHunter/Script/Game/MainGame/Skill/BaseSkillTitleUI"),
            m = cc._decorator,
            y = m.ccclass,
            v = m.property,
            g = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.Root = null, t.Awaken = null, t.TigerSpine = null, t.FireOParent = [], t.FireOPrefab = [], t.BlackBG = null, t.Miles = null, t.SpeedLine = [], t.Soot = null, t.TapHint = null, t.TigerUI = null, t.currentPrize = 0, t.prize_list = null, t.fishID = null, t.randomSeed = 0, t.prizeType = 0, t.totalFireO = 0, t.currentFireO = 0, t.onAir = !1, t.MilesShowing = 0, t.LoopSound = null, t.hintClickCount = 0, t.isRunning = !1, t.smokeCD = !1, t
                }
                return o(t, e), t.prototype.onLoad = function() {
                    this.skillType = d.skillEnum.Tiger, this.limitTime = 180
                }, t.prototype.update = function(t) {
                    e.prototype.update.call(this, t), this.onAir && this.UpdateMiles(t)
                }, t.prototype.InitProperties = function(t) {
                    void 0 === t && (t = null), e.prototype.InitProperties.call(this), this.playerBet = t.bet, this.totalWin = t.win, this.totalOdds = t.odds, this.currentWin = 0, this.currentPrize = 0, this.node.angle = s.default.isReverse ? 180 : 0, this.fishID = t.id, this.randomSeed = this.fishID, this.prize_list = t.prize_list, this.onAir = !1, this.MilesShowing = 0, this.hintClickCount = 0, this.isRunning = !1, this.smokeCD = !1
                }, t.prototype.UnUseSkill = function() {
                    this.isMainPlayer && (u.PlayerManager.Instance.isLockChangeBet = !1), p.default.Instance.getWeapon(this.playerSeat).isGunReady = !0, this.isMainPlayer && this.CanelRegisterTouchEvent(), this.TigerUI && (this.TigerUI.Hide(!0), this.TigerUI = null), this.LoopSound && (l.default.Instance.Stop(this.LoopSound), this.LoopSound = null);
                    for (var t = 0; t < this.FireOParent.length; t++)
                        for (var i = 0; i < this.FireOParent[t].childrenCount; i++) this.FireOParent[t].children[i].active = !1;
                    this.Root.setScale(1), this.Root.setPosition(cc.Vec2.ZERO), this.Awaken.node.active = !1, this.BlackBG.opacity = 0, this.Miles.node.parent.active = !1, this.SpeedLine.forEach(function(e) {
                        e.stopSystem()
                    }), this.tapHintActive(!1), e.prototype.UnUseSkill.call(this)
                }, t.prototype.UseSkill = function() {
                    var e = this,
                        t = h.default.Instance.GetFishByID(this.fishID.toString());
                    if (!t && this.isMainPlayer && (t = h.default.Instance.CreateFakeFish(this.fishID.toString(), 86, new cc.Vec2(700, 360))), t) {
                        this.isMainPlayer && (u.PlayerManager.Instance.isLockChangeBet = !0), p.default.Instance.getWeapon(this.playerSeat).isGunReady = !1, this.isMainPlayer && this.RegisterTouchEvent(), t.FishDie();
                        var i = s.default.isReverse ? t.node.position.neg() : t.node.position;
                        this.node.setPosition(i), cc.tween(this.node).delay(2.5).call(function() {
                            e.Awaken.node.active = !0, e.Awaken.play(), e.Awaken.once(cc.Animation.EventType.FINISHED, function() {
                                e.ShowStart()
                            }), e.scheduleOnce(function() {
                                l.default.Instance.Play("voice_tiger_fever_01")
                            }, 1.8)
                        }).delay(1).to(.5, {
                            position: cc.Vec3.ZERO
                        }).call(function() {
                            e.isMainPlayer && cc.tween(e.BlackBG).to(1, {
                                opacity: 200
                            }).start()
                        }).start()
                    }
                }, t.prototype.ShowStart = function() {
                    var e = this;
                    if (!this.isMainPlayer) {
                        var t = cc.v3(p.default.WeaponUIPosition(this.playerSeat)).add(cc.Vec3.UP.mul(this.playerSeat > 1 ? -200 : 200));
                        s.default.isReverse && t.addSelf(cc.Vec3.UP.mul(this.playerSeat > 1 ? 400 : -400)), cc.tween(this.Root).to(1, {
                            scale: .5,
                            position: t
                        }).start()
                    }
                    this.Awaken.node.active = !1, this.TigerUI = c.default.LoadGUI(d.skillEnum.Tiger).getComponent(f.default), this.TigerUI && this.TigerUI.Init(this.playerBet, this.playerSeat), this.TigerSpine.node.active = !0, this.TigerSpine.node.setPosition(cc.Vec2.ZERO), this.TigerSpine.timeScale = 1, this.TigerSpine.setAnimation(0, "02_RunINTRO", !1), this.TigerSpine.setCompleteListener(function() {
                        e.TigerSpine.setCompleteListener(null), e.TigerSpine.setAnimation(0, "03_Run", !0), e.isRunning = !0, e.tapHintActive(!0)
                    }), l.default.Instance.Fade(l.default.Instance.GetBGMID(), 1, 0), this.bgmID = l.default.Instance.Play("BGM_Tiger_03_1", 1, !0), l.default.Instance.Fade(this.bgmID, 0, 1), h.default.Instance.RemoveFishByID(this.fishID.toString()), cc.tween(this.node).delay(2).call(function() {
                        e.NextAction(), e.isMainPlayer && e.SpeedLine.forEach(function(e) {
                            e.resetSystem(), cc.tween(e).to(3, {
                                emissionRate: 5
                            }).start()
                        })
                    }).start()
                }, t.prototype.NextAction = function() {
                    var e = this;
                    l.default.Instance.Play("Tiger_run_02"), cc.tween(this.TigerSpine).to(3, {
                        timeScale: 4
                    }).call(function() {
                        e.currentPrize < e.prize_list.length ? (e.prizeType = e.prize_list[e.currentPrize].type, e.totalFireO = e.prize_list[e.currentPrize].cnt, e.currentFireO = 0, e.currentPrize++, e.Jump()) : e.ShowEnd()
                    }).start()
                }, t.prototype.Jump = function() {
                    var e = this;
                    l.default.Instance.Play("Tiger_jump_01"), this.TigerSpine.timeScale = 2, cc.tween(this.TigerSpine).to(.2, {
                        timeScale: 1
                    }).start(), this.TigerSpine.setAnimation(0, "04_Jump", !1), this.TigerSpine.setCompleteListener(function() {
                        e.TigerSpine.setCompleteListener(null), e.node && !e.isUnuse && (e.LoopSound = l.default.Instance.Play("Tiger_fly_01", 1, !0), e.TigerSpine.setAnimation(0, "04_JumpIDLE", !0), e.CreateFireOGroup(), e.isMainPlayer && !e.Miles.node.parent.active && (e.Miles.node.parent.active = !0, cc.tween(e.Miles.node.parent).repeat(cc.macro.REPEAT_FOREVER, cc.tween().to(.05, {
                            position: cc.v3(358, -161)
                        }).to(.05, {
                            position: cc.v3(356, -163)
                        }).to(.05, {
                            position: cc.v3(358, -161)
                        }).to(.05, {
                            position: cc.v3(360, -163)
                        })).start()), e.onAir = !0, e.isRunning = !1)
                    }), cc.tween(this.TigerSpine.node).to(.8, {
                        scale: .65
                    }).start()
                }, t.prototype.JumpDown = function() {
                    var e = this;
                    this.LoopSound && (l.default.Instance.Stop(this.LoopSound), this.LoopSound = null), l.default.Instance.Play("Tiger_fall_01"), this.TigerSpine.setAnimation(0, "05_down", !1), this.TigerSpine.setCompleteListener(function() {
                        e.TigerSpine.setCompleteListener(null), e.TigerSpine.setAnimation(0, "03_Run", !0), e.onAir = !1, e.isRunning = !0, e.NextAction()
                    }), cc.tween(this.TigerSpine.node).to(.8, {
                        scale: .9
                    }).start()
                }, t.prototype.CreateFireOGroup = function() {
                    var e = this;
                    if (this.currentFireO >= this.totalFireO) this.JumpDown();
                    else {
                        for (var t = 5; this.currentFireO + t < this.totalFireO && !(this.randomBySeed() < .1);)
                            if (t++, this.currentFireO + t > this.totalFireO - 5) {
                                t = this.totalFireO - this.currentFireO;
                                break
                            }
                        this.currentFireO += t;
                        var i = .5 + this.randomBySeed();
                        cc.tween(this.node).repeat(t, cc.tween().call(function() {
                            e.CreateFireO()
                        }).delay(.1)).delay(i).call(function() {
                            e.CreateFireOGroup()
                        }).start()
                    }
                }, t.prototype.CreateFireO = function() {
                    for (var e = this, t = function(t) {
                            for (var n = null, o = 0; o < i.FireOParent[t].childrenCount; o++)
                                if (!i.FireOParent[t].children[o].active) {
                                    (n = i.FireOParent[t].children[o]).active = !0;
                                    break
                                }
                            null == n && (n = cc.instantiate(i.FireOPrefab[t])).setParent(i.FireOParent[t]), n.getComponent(cc.Animation).play("FireO_" + i.prizeType), n.setPosition(cc.v2(700, 55)), n.opacity = 0, 2 == t ? (n.setScale(1.25), cc.tween(n).parallel(cc.tween().to(.7, {
                                position: cc.v3(25, 55),
                                scale: 1
                            }).call(function() {
                                n.active = !1, e.CreateCoins()
                            }), cc.tween().to(.1, {
                                opacity: 255
                            })).start()) : (n.setScale(1.75), cc.tween(n).parallel(cc.tween().to(1.4, {
                                position: cc.v3(-650, 55),
                                scale: 1
                            }).call(function() {
                                n.active = !1
                            }), cc.tween().to(.1, {
                                opacity: 255
                            }).delay(1.2).to(.1, {
                                opacity: 0
                            })).start())
                        }, i = this, n = 0; n < this.FireOParent.length - 1; n++) t(n)
                }, t.prototype.CreateCoins = function() {
                    var e = this;
                    l.default.Instance.Play("Tiger_coin_01");
                    for (var t = null, i = 0; i < this.FireOParent[3].childrenCount; i++)
                        if (!this.FireOParent[3].children[i].active) {
                            (t = this.FireOParent[3].children[i]).active = !0;
                            break
                        }
                    null == t && (t = cc.instantiate(this.FireOPrefab[2])).setParent(this.FireOParent[3]), t.getComponent(cc.Animation).play("FireO_" + this.prizeType), t.setPosition(cc.v2(25, 55)), t.setScale(.75), cc.tween(t).to(.25, {
                        position: cc.v3(85, 35),
                        scale: 1
                    }).to(.25, {
                        position: cc.v3(105, 65)
                    }).to(1, {
                        position: cc.v3(p.default.WeaponUIPosition(this.playerSeat))
                    }).call(function() {
                        t.active = !1, e.TigerUI && (e.currentWin += (e.prizeType + 2) * e.playerBet, e.TigerUI.SetScore(e.currentWin, 2.05))
                    }).start()
                }, t.prototype.ShowEnd = function() {
                    var e = this;
                    l.default.Instance.Fade(this.bgmID, 1, 0), this.bgmID = l.default.Instance.Play("BGM_Tiger_03_2", 1, !1), l.default.Instance.Fade(this.bgmID, 0, 1), this.tapHintActive(!1), cc.tween(this.TigerSpine.node).to(.5, {
                        position: cc.v3(1e3, 0),
                        scale: 1
                    }).call(function() {
                        e.TigerSpine.node.active = !1
                    }).start(), cc.tween(this.BlackBG).to(1, {
                        opacity: 0
                    }).start(), this.isMainPlayer && this.SpeedLine.forEach(function(e) {
                        e.stopSystem()
                    }), cc.tween(this.node).call(function() {
                        e.TigerUI && e.TigerUI.ShowScore(e.totalWin), cc.Tween.stopAllByTarget(e.Miles.node.parent), e.Miles.node.parent.active = !1
                    }).delay(4).call(function() {
                        e.SkillOver()
                    }).start()
                }, t.prototype.SkillOver = function() {
                    r.default.SkillSystem.SendCustomCmd("sk_CircusTiger_finish"), this.UnUseSkill()
                }, t.prototype.UpdateMiles = function(e) {
                    this.MilesShowing += 78 * e, this.Miles.string = Math.floor(this.MilesShowing).toString()
                }, t.prototype.OnTouchStart = function() {
                    var e = this;
                    this.isMainPlayer && this.hintClickCount++, this.hintClickCount >= 3 && (this.tapHintActive(!1), this.hintClickCount = 0), this.isRunning && !this.smokeCD && (this.smokeCD = !0, l.default.Instance.Play("Tiger_move_02"), cc.Tween.stopAllByTarget(this.Soot), this.Soot.emissionRate = 100, cc.tween(this.Soot).to(.1, {
                        emissionRate: 0
                    }).start(), this.TigerSpine.timeScale > 3 ? this.scheduleOnce(function() {
                        e.smokeCD = !1
                    }, .1) : this.TigerSpine.timeScale > 2 ? this.scheduleOnce(function() {
                        e.smokeCD = !1
                    }, .2) : this.scheduleOnce(function() {
                        e.smokeCD = !1
                    }, .4))
                }, t.prototype.randomBySeed = function() {
                    return this.randomSeed = Math.floor(this.randomSeed % 233280), this.randomSeed = (9301 * this.randomSeed + 49297) % 233280, this.randomSeed / 233280
                }, t.prototype.tapHintActive = function(e) {
                    e && !this.TapHint.node.active && this.isMainPlayer && (this.TapHint.node.active = !0, this.TapHint.play(), this.TapHint.node.setScale(0), this.TapHint.node.runAction(cc.scaleTo(.5, 1).easing(cc.easeBounceOut())), this.hintClickCount = 0), !e && this.TapHint.node.active && (this.TapHint.node.active = !1, this.TapHint.stop())
                }, a([v(cc.Node)], t.prototype, "Root", void 0), a([v(cc.Animation)], t.prototype, "Awaken", void 0), a([v(sp.Skeleton)], t.prototype, "TigerSpine", void 0), a([v([cc.Node])], t.prototype, "FireOParent", void 0), a([v([cc.Prefab])], t.prototype, "FireOPrefab", void 0), a([v(cc.Node)], t.prototype, "BlackBG", void 0), a([v(cc.Label)], t.prototype, "Miles", void 0), a([v([cc.ParticleSystem])], t.prototype, "SpeedLine", void 0), a([v(cc.ParticleSystem)], t.prototype, "Soot", void 0), a([v(cc.Animation)], t.prototype, "TapHint", void 0), a([y], t)
            }(d.default);
        i.default = g, cc._RF.pop()
    }, {
        "../../../../FishCommon/Script/CanvasHandler": void 0,
        "../../../../FishHunter/Script/Game/GameClient": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Common/AudioManager": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Common/ResourceManager": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Fish/FishManager": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Player/PlayerManager": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Skill/BaseSkill": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Skill/BaseSkillTitleUI": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Weapon/WeaponManager": void 0
    }],
    TIGER: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "a1d16RAwmxJ3YXCZvcdZzyx", "TIGER");
        var n, o = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
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
                n(e, t), e.prototype = null === t ? Object.create(t) : (i.prototype = t.prototype, new i)
            }),
            a = this && this.__decorate || function(e, t, i, n) {
                var o, a = arguments.length,
                    s = a < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, i) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(e, t, i, n);
                else
                    for (var r = e.length - 1; r >= 0; r--)(o = e[r]) && (s = (a < 3 ? o(s) : a > 3 ? o(t, i, s) : o(t, i)) || s);
                return a > 3 && s && Object.defineProperty(t, i, s), s
            },
            s = this && this.__awaiter || function(e, t, i, n) {
                return new(i || (i = Promise))(function(o, a) {
                    function s(e) {
                        try {
                            l(n.next(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function r(e) {
                        try {
                            l(n.throw(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? o(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                            e(t)
                        })).then(s, r)
                    }
                    l((n = n.apply(e, t || [])).next())
                })
            },
            r = this && this.__generator || function(e, t) {
                var i, n, o, a, s = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
                    },
                    trys: [],
                    ops: []
                };
                return a = {
                    next: r(0),
                    throw: r(1),
                    return: r(2)
                }, "function" == typeof Symbol && (a[Symbol.iterator] = function() {
                    return this
                }), a;

                function r(e) {
                    return function(t) {
                        return l([e, t])
                    }
                }

                function l(a) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (i = 1, n && (o = 2 & a[0] ? n.return : a[0] ? n.throw || ((o = n.return) && o.call(n), 0) : n.next) && !(o = o.call(n, a[1])).done) return o;
                        switch (n = 0, o && (a = [2 & a[0], o.value]), a[0]) {
                            case 0:
                            case 1:
                                o = a;
                                break;
                            case 4:
                                return s.label++, {
                                    value: a[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, n = a[1], a = [0];
                                continue;
                            case 7:
                                a = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = s.trys).length > 0 && o[o.length - 1]) && (6 === a[0] || 2 === a[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === a[0] && (!o || a[1] > o[0] && a[1] < o[3])) {
                                    s.label = a[1];
                                    break
                                }
                                if (6 === a[0] && s.label < o[1]) {
                                    s.label = o[1], o = a;
                                    break
                                }
                                if (o && s.label < o[2]) {
                                    s.label = o[2], s.ops.push(a);
                                    break
                                }
                                o[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        a = t.call(e, s)
                    } catch (r) {
                        a = [6, r], n = 0
                    } finally {
                        i = o = 0
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
        var l = e("../../../../FishCommon/Script/CanvasHandler"),
            c = e("../../../../FishHunter/Script/Game/MainGame/Common/AudioManager"),
            h = e("../../../../FishHunter/Script/Game/MainGame/Fish/BaseFish"),
            u = cc._decorator,
            p = u.ccclass,
            d = u.property,
            f = function(e) {
                function t() {
                    var t = null !== e && e.apply(this, arguments) || this;
                    return t.skeleton = null, t.ice_group = [], t
                }
                return o(t, e), t.prototype.Init = function(t, i) {
                    e.prototype.Init.call(this, t, i), this.o < 50 && (this.o += 50), this.o > 130 && this.o < 180 && (this.o -= 50), this.o >= 180 && this.o < 230 && (this.o += 50), this.o > 310 && this.o < 360 && (this.o -= 50), this.shapeNode = this.node.getChildByName("Shape"), this.ice_group.forEach(function(e) {
                        e.active = !1
                    }), this.skeleton.timeScale = 1, this.skeleton.setAnimation(0, "walk", !0), c.default.Instance.Play("Tiger_move_01")
                }, t.prototype.InitParameter = function() {
                    e.prototype.InitParameter.call(this), this.isFeature = !0
                }, t.prototype.InitNormalBehavior = function(t, i) {
                    void 0 === i && (i = 0), e.prototype.InitNormalBehavior.call(this, t, i), l.default.isReverse ? this.node.scaleY = this.node.angle <= -90 || this.node.angle >= 90 ? 1 : -1 : this.node.scaleY = this.node.angle <= -90 || this.node.angle >= 90 ? -1 : 1
                }, t.prototype.FishDie = function() {
                    return s(this, void 0, void 0, function() {
                        var e = this;
                        return r(this, function() {
                            return this.AliveStatus = h.FishState.DEAD, this.canCollision = !1, this.isInit = !1, this.StopAction(), this.PauseClip(), cc.tween(this.node).repeat(10, cc.tween().by(.1, {
                                position: cc.v3(10, 10)
                            }).by(.1, {
                                position: cc.v3(-10, -10)
                            })).delay(.5).call(function() {
                                c.default.Instance.Play("Tiger_catch_01"), e.CoinEffect()
                            }).to(1, {
                                opacity: 0
                            }).call(function() {
                                e.RemoveSelf()
                            }).start(), this.Event_FishLeave && this.Event_FishLeave(this, 6), [2]
                        })
                    })
                }, t.prototype.RemoveSelf = function() {
                    this.skeleton.clearTracks(), e.prototype.RemoveSelf.call(this)
                }, t.prototype.PauseClip = function() {
                    this.skeleton.timeScale = 0
                }, t.prototype.FishInScreen = function() {
                    var e = l.default.WinSize,
                        t = this.node.convertToWorldSpaceAR(cc.Vec2.ZERO),
                        i = t.x + this.fishRadius > 0 && t.x - this.fishRadius < e.width,
                        n = t.y + this.fishRadius > 0 && t.y - this.fishRadius < e.height;
                    return i && n
                }, t.prototype.isLockInScreen = function(e) {
                    if (e) {
                        var t = this.node.convertToWorldSpaceAR(e.getPosition());
                        if (t.x >= -50 && t.x < l.default.WinSize.width - -50 && t.y >= -50 && t.y < l.default.WinSize.height - -50) return t
                    }
                    return null
                }, t.prototype.PauseBehavior = function(t, i) {
                    e.prototype.PauseBehavior.call(this, t, i), this.skeleton.paused = !0, this.ice_group.forEach(function(e) {
                        e.active = !0
                    })
                }, t.prototype.ResumeBehavior = function() {
                    e.prototype.ResumeBehavior.call(this), this.skeleton.paused = !1, this.ice_group.forEach(function(e) {
                        e.active = !1
                    })
                }, a([d(sp.Skeleton)], t.prototype, "skeleton", void 0), a([d([cc.Node])], t.prototype, "ice_group", void 0), a([p], t)
            }(h.default);
        i.default = f, cc._RF.pop()
    }, {
        "../../../../FishCommon/Script/CanvasHandler": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Common/AudioManager": void 0,
        "../../../../FishHunter/Script/Game/MainGame/Fish/BaseFish": void 0
    }]
}, {}, ["CLOWN", "PIG", "TIGER", "SkillClown", "SkillPig", "SkillTiger"]);