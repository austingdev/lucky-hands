window.__require = function e(t, i, s) {
    function n(o, l) {
        if (!i[o]) {
            if (!t[o]) {
                var h = o.split("/");
                if (h = h[h.length - 1], !t[h]) {
                    var c = "function" == typeof __require && __require;
                    if (!l && c) return c(h, !0);
                    if (a) return a(h, !0);
                    throw new Error("Cannot find module '" + o + "'")
                }
                o = h
            }
            var r = i[o] = {
                exports: {}
            };
            t[o][0].call(r.exports, function(e) {
                return n(t[o][1][e] || e)
            }, r, r.exports, e, t, i, s)
        }
        return i[o].exports
    }
    for (var a = "function" == typeof __require && __require, o = 0; o < s.length; o++) n(s[o]);
    return n
}({
    ALADDIN: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "653c6poP4xHm4Xu3+RK8m66", "ALADDIN");
        var s = this && this.__decorate || function(e, t, i, s) {
                var n, a = arguments.length,
                    o = a < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                else
                    for (var l = e.length - 1; l >= 0; l--)(n = e[l]) && (o = (a < 3 ? n(o) : a > 3 ? n(t, i, o) : n(t, i)) || o);
                return a > 3 && o && Object.defineProperty(t, i, o), o
            },
            n = this && this.__awaiter || function(e, t, i, s) {
                return new(i || (i = Promise))(function(n, a) {
                    function o(e) {
                        try {
                            h(s.next(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function l(e) {
                        try {
                            h(s.throw(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function h(e) {
                        var t;
                        e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                            e(t)
                        })).then(o, l)
                    }
                    h((s = s.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const a = e("../../../../../FishCommon/Script/SSCanvasHandler"),
            o = e("../../../../../FishHunter/Script/Game/MainGame/Common/AudioManager"),
            l = e("../../../../../FishHunter/Script/Game/MainGame/Fish/BaseFish"),
            {
                ccclass: h,
                property: c
            } = cc._decorator;
        let r = class extends l.default {
            constructor() {
                super(...arguments), this.skeleton = null, this.ChangeSmoke = null, this.OddsDummy = null, this.ice_group = [], this.defaultAliveTime = 120, this.Level = 1, this.tempLevel = null
            }
            Init(e, t) {
                for (super.Init(e, t), this.o < 70 && (this.o += 70); this.o > 110 && this.o < 180;) this.o -= 35;
                for (this.o > 290 && (this.o -= 70); this.o >= 180 && this.o < 250;) this.o += 35;
                this.isFeature = !0, this.skeleton.timeScale = 1, this.skeleton.setAnimation(0, "lv1", !0), this.mAnim.play("lv1"), this.Level = 1, this.tempLevel = null, this.ice_group.forEach(e => {
                    e.active = !1
                }), this.schedule(this.randomVoice, 10)
            }
            InitNormalBehavior(e, t = 0) {
                super.InitNormalBehavior(e, t), a.default.isReverse ? (this.node.scaleY = this.node.rotation <= -90 || this.node.rotation >= 90 ? 1 : -1, this.node.angle = -1 == this.node.scaleY ? 0 : 180) : (this.node.scaleY = this.node.rotation <= -90 || this.node.rotation >= 90 ? -1 : 1, this.node.angle = -1 == this.node.scaleY ? 180 : 0)
            }
            FishDie(e) {
                return n(this, void 0, void 0, function*() {
                    this.aliveStatus = l.FishState.DEAD, this.canCollision = !1, this.StopAction(), this.skeleton.timeScale = 0, this.unschedule(this.randomVoice), o.default.Instance.Play("Aladdin_catch_01"), this.node.runAction(cc.sequence(cc.repeat(cc.sequence(cc.moveTo(.05, this.node.getPosition().add(new cc.Vec2(3, 3))), cc.moveTo(.05, this.node.getPosition().add(new cc.Vec2(-3, -3)))), 10), cc.moveTo(.1, this.node.getPosition()), cc.callFunc(() => {
                        this.CoinEffect(3), o.default.Instance.Play("41_catch_bigfish")
                    }), cc.fadeOut(1), cc.callFunc(() => {
                        this.RemoveSelf()
                    })))
                })
            }
            FishOut(e) {
                this.unschedule(this.randomVoice), super.FishOut(e)
            }
            RemoveSelf() {
                this.skeleton.setEventListener(null), this.skeleton.clearTracks(), super.RemoveSelf()
            }
            changeLevel(e) {
                if (this.skeleton.paused) this.tempLevel = e;
                else if (e != this.Level) switch (this.ChangeSmoke.resetSystem(), o.default.Instance.Play("Aladdin_smoke_01"), this.skeleton.setAnimation(0, "lv" + e.toString(), !0), this.mAnim.play("lv" + e.toString()), this.Level = e, e) {
                    case 2:
                        o.default.Instance.Play("voice_Aladdin_up_01");
                        break;
                    case 3:
                        o.default.Instance.Play("voice_Aladdin_up_02")
                }
            }
            PauseBehavior(e, t) {
                switch (super.PauseBehavior(e, t), this.skeleton.paused = !0, this.Level) {
                    case 1:
                        this.ice_group[0].active = !0;
                        break;
                    case 2:
                        this.ice_group[1].active = !0;
                        break;
                    case 3:
                        this.ice_group[2].active = !0
                }
            }
            ResumeBehavior() {
                super.ResumeBehavior(), this.skeleton.paused = !1, this.ice_group.forEach(e => {
                    e.active = !1
                }), null != this.tempLevel && (this.changeLevel(this.tempLevel), this.tempLevel = null)
            }
            randomVoice() {
                let e = 1 + Math.floor(4 * Math.random());
                o.default.Instance.Play("voice_Aladdin_move_0" + e.toString())
            }
            get oddsRootPos() {
                return this.node.convertToWorldSpaceAR(this.OddsDummy.getPosition())
            }
        };
        s([c(sp.Skeleton)], r.prototype, "skeleton", void 0), s([c(cc.ParticleSystem)], r.prototype, "ChangeSmoke", void 0), s([c(cc.Node)], r.prototype, "OddsDummy", void 0), s([c([cc.Node])], r.prototype, "ice_group", void 0), r = s([h], r), i.default = r, cc._RF.pop()
    }, {
        "../../../../../FishCommon/Script/SSCanvasHandler": void 0,
        "../../../../../FishHunter/Script/Game/MainGame/Common/AudioManager": void 0,
        "../../../../../FishHunter/Script/Game/MainGame/Fish/BaseFish": void 0
    }],
    GENIE: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "cefbfwyZ5BAaaN99iF81XIu", "GENIE");
        var s = this && this.__decorate || function(e, t, i, s) {
                var n, a = arguments.length,
                    o = a < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                else
                    for (var l = e.length - 1; l >= 0; l--)(n = e[l]) && (o = (a < 3 ? n(o) : a > 3 ? n(t, i, o) : n(t, i)) || o);
                return a > 3 && o && Object.defineProperty(t, i, o), o
            },
            n = this && this.__awaiter || function(e, t, i, s) {
                return new(i || (i = Promise))(function(n, a) {
                    function o(e) {
                        try {
                            h(s.next(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function l(e) {
                        try {
                            h(s.throw(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function h(e) {
                        var t;
                        e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                            e(t)
                        })).then(o, l)
                    }
                    h((s = s.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const a = e("../../../../../FishCommon/Script/SSCanvasHandler"),
            o = e("../../../../../FishHunter/Script/Game/MainGame/Common/AudioManager"),
            l = e("../../../../../FishHunter/Script/Game/MainGame/Fish/BaseFish"),
            {
                ccclass: h,
                property: c
            } = cc._decorator;
        let r = class extends l.default {
            constructor() {
                super(...arguments), this.ModelAni = [], this.SMR = [], this.ModelMat = [], this.Smoke = [], this.LightSpot = null, this.BurnMat = [], this.ice_group = [], this.color = cc.Color.WHITE, this.tween = null, this.newMat = null, this.downSound = null, this.animEvent = null, this.eventTimer = 0, this.timerPause = !1, this.LifeTimer = 0
            }
            onLoad() {
                super.onLoad(), this.shapeNode || (this.shapeNode = this.node.getChildByName("Shape"), this.shapeNode && (this.shapeNode.color = cc.Color.WHITE))
            }
            update(e) {
                super.update(e), this.tween && (this.newMat[0].setProperty("diffuseColor", this.color), this.newMat[1].setProperty("diffuseColor", this.color)), this.timerPause || (this.eventTimer > 0 && (this.eventTimer -= e, this.eventTimer <= 0 && (this.eventTimer = 0, this.animEvent && this.animEvent())), this.LifeTimer > 0 && (this.LifeTimer -= e, this.LifeTimer <= 0 && (this.LifeTimer = 0, this.FishFadeOut(.5, l.FishOutType.FISH_PATH_FINISH))))
            }
            InitParameter() {
                super.InitParameter(), this.isFeature = !0;
                let e = 9 * (this.x - 50);
                if (this.node.setPosition(e, 0), this.node.angle = a.default.isReverse ? 180 : 0, this.LightSpot.stopSystem(), null == this.newMat) {
                    this.newMat = [];
                    for (let e = 0; e < this.ModelMat.length; e++) {
                        let t = cc.MaterialVariant.create(this.ModelMat[e], this.SMR[e]);
                        this.newMat.push(t)
                    }
                }
                this.color = cc.Color.WHITE;
                for (let t = 0; t < this.ModelAni.length; t++) this.SMR[t].setMaterial(0, this.newMat[t]), this.newMat[t].setProperty("diffuseColor", this.color);
                this.node.opacity = 255, this.ModelAni[0].node.setScale(1), this.ModelAni[1].node.setScale(150), this.ModelAni[2].node.setScale(1), this.shapeNode.eulerAngles = cc.v3(30, 0, 0), cc.tween(this.ModelAni[0].node).to(.5, {
                    scale: 150
                }).start(), this.PlayClip("Enter", !1), this.SetNextClip("ShakeLoop", !0), this.Smoke[0].resetSystem(), this.scheduleOnce(() => {
                    this.aliveStatus == l.FishState.ALIVE && this.LightSpot.resetSystem()
                }, .5), o.default.Instance.Play("Genie_in_01"), this.ice_group.forEach(e => {
                    e.active = !1
                }), this.LifeTimer = 10, this.schedule(this.randomVoice, 3)
            }
            FishFadeOut(e = .5, t) {
                this.unschedule(this.randomVoice), this.LifeTimer = 0, this.SetNextClip("Leave", !1, () => {
                    cc.tween(this.ModelAni[0].node).delay(.7).call(() => {
                        this.aliveStatus == l.FishState.ALIVE && (this.canCollision = !1, cc.tween(this.ModelAni[1].node).delay(.2).to(.2, {
                            scale: 1
                        }).start()), this.LightSpot.stopSystem()
                    }).to(.3, {
                        scale: 1
                    }).start(), o.default.Instance.Play("Genie_out_01")
                }, () => {
                    this.scheduleOnce(() => {
                        cc.tween(this.node).to(.5, {
                            opacity: 0
                        }).call(() => {
                            this.FishOut(t)
                        }).start()
                    }, .5)
                })
            }
            FishDie() {
                return n(this, void 0, void 0, function*() {
                    this.aliveStatus = l.FishState.DEAD, this.canCollision = !1, this.isInit = !1, this.LifeTimer = 0, this.eventTimer = 0, this.animEvent = null, this.node.opacity = 255, this.LightSpot.stopSystem(), this.unschedule(this.randomVoice), this.PlayClip("", !1);
                    for (let e = 0; e < this.ModelAni.length; e++) cc.Tween.stopAllByTarget(this.ModelAni[e].node);
                    this.tween && (this.tween.stop(), this.tween = null, this.color = cc.Color.WHITE, this.newMat[0].setProperty("diffuseColor", this.color), this.newMat[1].setProperty("diffuseColor", this.color)), this.Event_FishLeave && this.Event_FishLeave(this, 6), this.ice_group.forEach(e => {
                        e.active = !1
                    })
                })
            }
            RemoveSelf() {
                for (let e = 0; e < this.ModelAni.length; e++) this.ModelAni[e].stop(), cc.Tween.stopAllByTarget(this.ModelAni[e].node);
                this.downSound && (o.default.Instance.Stop(this.downSound), this.downSound = null), super.RemoveSelf()
            }
            OnHitFish() {
                this.tween && (this.tween.stop(), this.tween = null, this.color = cc.Color.WHITE, this.newMat[0].setProperty("diffuseColor", this.color), this.newMat[1].setProperty("diffuseColor", this.color)), this.tween = cc.tween(this.color).repeat(2, cc.tween(this.color).to(.1, {
                    r: 200,
                    g: 0,
                    b: 0
                }).to(.1, {
                    r: 255,
                    g: 255,
                    b: 255
                })).call(() => {
                    this.tween = null, this.color = cc.Color.WHITE, this.newMat[0].setProperty("diffuseColor", this.color), this.newMat[1].setProperty("diffuseColor", this.color)
                }).start()
            }
            PauseClip() {
                for (let e = 0; e < this.ModelAni.length; e++) this.ModelAni[e].pause(), this.ModelAni[e].node.pauseAllActions();
                this.timerPause = !0
            }
            ResumeClip() {
                for (let e = 0; e < this.ModelAni.length; e++) this.ModelAni[e].resume(), this.ModelAni[e].node.resumeAllActions();
                this.timerPause = !1
            }
            PlayClip(e, t, i, s) {
                this.animEvent = null, this.eventTimer = 0;
                let n = [];
                s ? n.push(s) : n = this.ModelAni;
                for (let a = 0; a < n.length; a++) {
                    let s = n[a].getAnimationState(e);
                    s && (n[a].play(e), s.repeatCount = t ? cc.macro.REPEAT_FOREVER : 1, s.speed = 1, null == this.animEvent && i && (this.animEvent = i), s.duration > this.eventTimer && (this.eventTimer = s.duration))
                }
            }
            SetNextClip(e, t, i, s) {
                this.animEvent = null, this.eventTimer = 0;
                for (let n = 0; n < this.ModelAni.length; n++)
                    if (this.ModelAni[n].currentClip) {
                        let e = this.ModelAni[n].getAnimationState(this.ModelAni[n].currentClip.name);
                        if (e) {
                            let t = e.duration - e.time;
                            t > this.eventTimer && (this.eventTimer = t)
                        }
                    }
                this.animEvent = () => {
                    i && i(), this.PlayClip(e, t, s)
                }, this.eventTimer <= 0 && this.animEvent()
            }
            SetClipSpeed(e) {
                for (let t = 0; t < this.ModelAni.length; t++)
                    if (this.ModelAni[t].currentClip) {
                        let i = this.ModelAni[t].getAnimationState(this.ModelAni[t].currentClip.name);
                        if (i) {
                            let t = i.speed;
                            t != e && (i.speed = e, this.eventTimer > 0 && (this.eventTimer = this.eventTimer * (t / e)))
                        }
                    }
            }
            eulerTurn(e, t) {
                this.shapeNode.runAction(cc.rotate3DTo(e, t))
            }
            PauseBehavior(e, t) {
                super.PauseBehavior(e, t), this.PauseClip(), this.ice_group.forEach(e => {
                    e.active = !0
                })
            }
            ResumeBehavior() {
                super.ResumeBehavior(), this.ResumeClip(), this.ice_group.forEach(e => {
                    e.active = !1
                })
            }
            RubReady(e, t) {
                this.ModelAni[1].node.setScale(150), this.ModelAni[2].node.setScale(1), cc.tween(this.ModelAni[0].node).to(1.3, {
                    scale: 1
                }).start(), this.PlayClip("RubReady", !1, () => {
                    this.ModelAni[2].node.setScale(150), o.default.Instance.Play("Genie_Aladdin_jump_01"), this.PlayClip("JumpIn", !1, () => {
                        cc.tween(this.ModelAni[0].node).delay(.4).to(.05, {
                            scale: 150
                        }).start(), this.PlayClip("RubStart", !1, () => {
                            null == this.downSound && (this.downSound = o.default.Instance.Play("Genie_down_01", 1, !0)), this.PlayClip("RubLoop", !0), t()
                        }), e()
                    }, this.ModelAni[2])
                }), this.ResumeClip()
            }
            RubBack(e, t) {
                this.SetNextClip("RubBack", !1, () => {
                    this.downSound && (o.default.Instance.Stop(this.downSound), this.downSound = null), cc.tween(this.ModelAni[0].node).delay(.05).to(.2, {
                        scale: 1
                    }).start(), e()
                }, () => {
                    cc.tween(this.ModelAni[0].node).delay(.4).to(.05, {
                        scale: 150
                    }).start(), this.PlayClip("RubStart", !1, () => {
                        null == this.downSound && (this.downSound = o.default.Instance.Play("Genie_down_01", 1, !0)), this.PlayClip("RubLoop", !0), t()
                    })
                })
            }
            RubFail(e) {
                this.SetNextClip("RubFail", !1, () => {
                    this.downSound && (o.default.Instance.Stop(this.downSound), this.downSound = null), o.default.Instance.Play("Genie_fail_01"), cc.tween(this.ModelAni[0].node).delay(.05).to(.2, {
                        scale: 1
                    }).start(), this.PlayClip("RubBack", !1, null), this.Smoke[1].resetSystem();
                    for (let e = 0; e < this.BurnMat.length; e++) this.SMR[e + 1].setMaterial(0, this.BurnMat[e]);
                    e()
                })
            }
            MadnessStart(e, t) {
                this.SetNextClip("AwakeStart", !1, () => {
                    this.downSound && (o.default.Instance.Stop(this.downSound), this.downSound = null), this.PlayClip("RubBack", !1, null, this.ModelAni[2]), this.Smoke[0].resetSystem(), cc.tween(this.ModelAni[1].node).to(1, {
                        scale: 1
                    }).start(), cc.tween(this.ModelAni[2].node).to(1, {
                        scale: 1
                    }).start(), e()
                }, () => {
                    this.PlayClip("AwakeIdle", !0), t()
                })
            }
            randomVoice() {
                let e = 2 + Math.floor(2 * Math.random());
                o.default.Instance.Play("Genie_demo_0" + e.toString())
            }
        };
        s([c([cc.SkeletonAnimation])], r.prototype, "ModelAni", void 0), s([c([cc.SkinnedMeshRenderer])], r.prototype, "SMR", void 0), s([c([cc.Material])], r.prototype, "ModelMat", void 0), s([c([cc.ParticleSystem])], r.prototype, "Smoke", void 0), s([c(cc.ParticleSystem)], r.prototype, "LightSpot", void 0), s([c([cc.Material])], r.prototype, "BurnMat", void 0), s([c([cc.Node])], r.prototype, "ice_group", void 0), r = s([h], r), i.default = r, cc._RF.pop()
    }, {
        "../../../../../FishCommon/Script/SSCanvasHandler": void 0,
        "../../../../../FishHunter/Script/Game/MainGame/Common/AudioManager": void 0,
        "../../../../../FishHunter/Script/Game/MainGame/Fish/BaseFish": void 0
    }],
    GenieBackground: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "37df1Q4gNxL9bgPAfaV1B5K", "GenieBackground");
        var s = this && this.__decorate || function(e, t, i, s) {
            var n, a = arguments.length,
                o = a < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
            else
                for (var l = e.length - 1; l >= 0; l--)(n = e[l]) && (o = (a < 3 ? n(o) : a > 3 ? n(t, i, o) : n(t, i)) || o);
            return a > 3 && o && Object.defineProperty(t, i, o), o
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const n = e("../../../../../FishHunter/Script/Game/MainGame/Background/BaseBackGround"),
            {
                ccclass: a,
                property: o
            } = cc._decorator;
        let l = class extends n.default {
            BossEnter() {
                this.bossEnter || (this.bossEnter = !0)
            }
            SmokeOn() {
                this.node && this.node.active && this.ani.play("GenieAwake")
            }
            SizeUp() {
                this.node && this.node.active && this.node.runAction(cc.scaleTo(1, 1.5).easing(cc.easeBackIn()))
            }
            SizeDown() {
                this.node && this.node.active && this.node.runAction(cc.scaleTo(1, 1))
            }
            SmokeOff() {
                this.node && this.node.active && this.ani.play("GenieAwakeOver")
            }
        };
        l = s([a], l), i.default = l, cc._RF.pop()
    }, {
        "../../../../../FishHunter/Script/Game/MainGame/Background/BaseBackGround": void 0
    }],
    MCCustomizer: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "ed14797hcdMWYyG417jJDCB", "MCCustomizer");
        var s = this && this.__decorate || function(e, t, i, s) {
            var n, a = arguments.length,
                o = a < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
            else
                for (var l = e.length - 1; l >= 0; l--)(n = e[l]) && (o = (a < 3 ? n(o) : a > 3 ? n(t, i, o) : n(t, i)) || o);
            return a > 3 && o && Object.defineProperty(t, i, o), o
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const {
            ccclass: n,
            property: a
        } = cc._decorator;
        let o = class extends cc.Component {
            constructor() {
                super(...arguments), this.scale = .8, this.x = 0, this.y = 0
            }
            onLoad() {
                "magiccity" == window.gd_nowLOGO && (this.node.scale = this.scale, cc.tween(this.node).by(0, {
                    position: cc.v3(this.x, this.y, 0)
                }).start())
            }
        };
        s([a(cc.Float)], o.prototype, "scale", void 0), s([a(cc.Float)], o.prototype, "x", void 0), s([a(cc.Float)], o.prototype, "y", void 0), o = s([n], o), i.default = o, cc._RF.pop()
    }, {}],
    SkillAladdin: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "ae7fePccYVE4IhoKMufehAD", "SkillAladdin");
        var s = this && this.__decorate || function(e, t, i, s) {
            var n, a = arguments.length,
                o = a < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
            else
                for (var l = e.length - 1; l >= 0; l--)(n = e[l]) && (o = (a < 3 ? n(o) : a > 3 ? n(t, i, o) : n(t, i)) || o);
            return a > 3 && o && Object.defineProperty(t, i, o), o
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const n = e("../../../../../FishCommon/Script/SSCanvasHandler"),
            a = e("../../../../../FishHunter/Script/Game/MainGame/Award/SkillTitle"),
            o = e("../../../../../FishHunter/Script/Game/MainGame/Common/AudioManager"),
            l = e("../../../../../FishHunter/Script/Game/MainGame/Common/ResourceManager"),
            h = e("../../../../../FishHunter/Script/Game/MainGame/Common/Utility"),
            c = e("../../../../../FishHunter/Script/Game/MainGame/Fish/FishManager"),
            r = e("../../../../../FishHunter/Script/Game/MainGame/Skill/BaseSkill"),
            d = e("../../../../../FishHunter/Script/Game/MainGame/Skill/BaseSkillOddsUI"),
            u = e("../../../../../FishHunter/Script/Game/MainGame/Weapon/WeaponManager"),
            {
                ccclass: p,
                property: m
            } = cc._decorator;
        let S = class extends r.default {
            constructor() {
                super(...arguments), this.animation = null, this.scoreLabel = null, this.BetLabel = null, this.oddsParent = null, this.LoopLightingAni = [], this.SandCircle = [], this.SandBG = null, this.slotRoot = null, this.slotSprite = [], this.slotSpriteAdd = null, this.slotSpriteFrame = [], this.fishID = null, this.oriOdds = 1, this.multiple = 1, this.AladdinOdds = null, this.countSound = null, this.slotSound = null, this.slotWheel = [], this.slotIndex = 0, this.slotRightIndex = 0, this.slotTween = null
            }
            onLoad() {
                this.skillType = r.skillEnum.Vampire, this.limitTime = 120
            }
            InitProperties(e = null) {
                super.InitProperties(), this.playerBet = e.bet, this.totalOdds = e.odds, this.totalWin = e.win, this.fishID = e.id, this.oriOdds = e.Vampire_odds, this.multiple = e.awaken_multiple, this.slotWheel = e.awaken_wheel, this.BetLabel.string = this.playerBet.toString(), this.scoreLabel.string = "", this.node.angle = n.default.isReverse ? 180 : 0, this.node.setPosition(cc.Vec2.ZERO), this.node.opacity = 255, this.animation.play("Reset")
            }
            UnUseSkill() {
                this.AladdinOdds && (this.AladdinOdds.Hide(!1), this.AladdinOdds = null);
                for (let e = 0; e < this.LoopLightingAni.length; e++) this.LoopLightingAni[e].stop();
                null != this.countSound && (o.default.Instance.Stop(this.countSound), this.countSound = null), null != this.slotSound && (o.default.Instance.Stop(this.slotSound), this.slotSound = null), this.slotTween && (this.slotTween.stop(), this.slotTween = null), this.node.setScale(1), super.UnUseSkill()
            }
            UseSkill() {
                let e = c.default.Instance.GetFishByID(this.fishID.toString());
                this.AladdinOdds = l.default.SpawnSkill("AladdinOdds").getComponent(d.default), this.AladdinOdds.SkillInit(this.oriOdds);
                let t = cc.Vec2.ZERO;
                null != e && e.node && (t = n.default.isReverse ? e.node.getPosition().neg() : e.node.getPosition()), this.AladdinOdds.node.setParent(this.oddsParent), this.AladdinOdds.node.angle = 0, this.AladdinOdds.node.setPosition(t), this.AladdinOdds.node.runAction(cc.sequence(cc.delayTime(2), cc.moveTo(1, cc.Vec2.ZERO), cc.delayTime(1), cc.callFunc(this.ShowUp.bind(this))));
                let i = l.default.SpawnEffect("7");
                i.scale = 2, i.setPosition(cc.Vec2.ZERO), null != e && e.node && i.setPosition(e.node.getPosition()), null != e && e.node && e.FishDie(this.playerSeat), o.default.Instance.Fade(o.default.Instance.GetBGMID(), 1, 0), this.bgmID = o.default.Instance.Play("BGM_Aladdin_01", 1, !0), o.default.Instance.Fade(this.bgmID, 0, 1)
            }
            ShowUp() {
                this.animation.play("ShowUp"), o.default.Instance.Play("Aladdin_UI_in_01"), this.CreateSkillTitle();
                let e = 0,
                    t = this.oriOdds * this.playerBet / 18,
                    i = cc.repeat(cc.sequence(cc.callFunc(() => {
                        e += t, this.scoreLabel.string = h.default.NumberformatBet(e, this.playerBet)
                    }), cc.delayTime(.05)), 18);
                this.countSound = o.default.Instance.Play("Aladdin_count_loop_01", 1, !0), this.scoreLabel.node.runAction(cc.sequence(cc.delayTime(1), i, cc.callFunc(() => {
                    this.scoreLabel.string = (this.oriOdds * this.playerBet).toString(), o.default.Instance.Stop(this.countSound), this.countSound = null, o.default.Instance.Play("Aladdin_count_end_01")
                }), cc.delayTime(1), cc.callFunc(() => {
                    this.AladdinOdds && (this.AladdinOdds.Hide(), this.AladdinOdds = null), this.animation.play("Open"), o.default.Instance.Play("Aladdin_cutin_01");
                    for (let e = 0; e < this.LoopLightingAni.length; e++) this.LoopLightingAni[e].play()
                })))
            }
            OpenEnd() {
                this.multiple > 1 ? (this.isMainPlayer || this.node.runAction(cc.fadeTo(1, 100)), this.SandBG.startColor.setA(this.isMainPlayer ? 255 : 50), this.SandBG.endColor.setA(this.isMainPlayer ? 255 : 50), this.SandCircle[0].startColor.setA(this.isMainPlayer ? 150 : 50), this.SandCircle[0].endColor.setA(this.isMainPlayer ? 150 : 50), this.SandCircle[1].startColor.setA(this.isMainPlayer ? 150 : 50), this.SandCircle[1].endColor.setA(this.isMainPlayer ? 150 : 50), this.SandCircle[2].startColor.setA(this.isMainPlayer ? 255 : 50), this.animation.play("MutipleStart"), o.default.Instance.Play("Aladdin_UI_open_01"), this.scheduleOnce(() => {
                    o.default.Instance.Play("voice_Aladdin_fever_01")
                }, 1), o.default.Instance.Fade(this.bgmID, 1, 0), this.bgmID = o.default.Instance.Play("BGM_Aladdin_02", 1, !0), o.default.Instance.Fade(this.bgmID, 0, 1)) : (this.animation.play("Close"), o.default.Instance.Play("Aladdin_UI_close_01"), this.CameraShakeEffect(2, 4))
            }
            setNextSlotSprtie(e, t) {
                this.slotIndex++, this.slotIndex >= this.slotWheel.length && (this.slotIndex = 0), e.spriteFrame = this.slotSpriteFrame[this.slotWheel[this.slotIndex] - 2], t && (e.node.setPosition(e.node.getPosition().add(cc.v2(-440 * this.slotSprite.length, 0))), this.slotRightIndex++, this.slotRightIndex >= this.slotSprite.length && (this.slotRightIndex = 0))
            }
            slotWheelStart() {
                this.slotIndex = -1;
                for (let i = 0; i < this.slotSprite.length; i++) this.setNextSlotSprtie(this.slotSprite[i], !1), this.slotSprite[i].node.setPosition(cc.v2(440, 0).add(cc.v2(-440 * i, 0)));
                this.slotRightIndex = 0, this.slotRoot.setPosition(cc.Vec2.ZERO);
                let e = Math.floor(Math.random() * this.slotWheel.length),
                    t = this.slotWheel.indexOf(this.multiple, e); - 1 == t && (t = this.slotWheel.indexOf(this.multiple)), (t -= 10) < this.slotWheel.length / 2 && (t += this.slotWheel.length), this.slotTween = cc.tween(this.slotRoot).by(1.2, {
                    position: cc.v3(440, 0, 0)
                }, {
                    easing: "backIn"
                }).call(() => {
                    this.setNextSlotSprtie(this.slotSprite[this.slotRightIndex], !0)
                }).by(.2, {
                    position: cc.v3(440, 0, 0)
                }).call(() => {
                    this.setNextSlotSprtie(this.slotSprite[this.slotRightIndex], !0)
                }).by(.1, {
                    position: cc.v3(440, 0, 0)
                }).call(() => {
                    this.setNextSlotSprtie(this.slotSprite[this.slotRightIndex], !0)
                }).repeat(t, cc.tween().by(.1, {
                    position: cc.v3(440, 0, 0)
                }).call(() => {
                    this.setNextSlotSprtie(this.slotSprite[this.slotRightIndex], !0)
                })).call(() => {
                    this.slotWheelSlowDown(.1)
                }).start()
            }
            slotWheelSlowDown(e) {
                let t = e;
                t < .6 ? t += .15 : t < 1 && (t += .05), this.slotTween = cc.tween(this.slotRoot).by(t, {
                    position: cc.v3(440, 0, 0)
                }).call(() => {
                    if (this.setNextSlotSprtie(this.slotSprite[this.slotRightIndex], !0), t > .6) {
                        let e = this.slotIndex - 1;
                        if (e < 0 && (e += this.slotWheel.length), this.slotWheel[e] == this.multiple) return void this.slotWheelStop(t)
                    }
                    this.slotWheelSlowDown(t)
                }).start()
            }
            slotWheelStop(e) {
                let t = 1 * e,
                    i = Math.abs(0) / 440 * e;
                this.slotTween = cc.tween(this.slotRoot).by(3 * t, {
                    position: cc.v3(440, 0, 0)
                }, {
                    easing: "quadOut"
                }).by(i / 2, {
                    position: cc.v3(0, 0, 0)
                }).call(() => {
                    this.MultipleEnd(), this.slotSpriteAdd.spriteFrame = this.slotSpriteFrame[this.multiple - 2]
                }).start()
            }
            slotPlaySound(e) {
                switch (e) {
                    case "Start":
                        o.default.Instance.Play("Aladdin_slot_in_01");
                        break;
                    case "Loop":
                        this.slotSound = o.default.Instance.Play("Aladdin_slot_loop_01", 1, !0);
                        break;
                    case "End":
                        o.default.Instance.Stop(this.slotSound), this.slotSound = null, o.default.Instance.Play("Aladdin_slot_stop_01");
                        break;
                    case "Blink":
                        o.default.Instance.Play("Aladdin_number_zoom_01")
                }
            }
            moveToPlayer() {
                this.isMainPlayer ? this.node.runAction(cc.scaleTo(1, .8)) : this.node.runAction(cc.spawn(cc.fadeTo(1, 255), cc.scaleTo(1, .7)));
                let e, t = u.default.WeaponPosition(this.playerSeat);
                (e = n.default.isReverse ? cc.moveTo(1, t.add(new cc.Vec2(0, this.playerSeat > 1 ? -140 : 240))) : cc.moveTo(1, t.add(new cc.Vec2(0, this.playerSeat > 1 ? -240 : 140)))).easing(cc.easeQuadraticActionOut());
                let i = 0;
                this.multiple > 1 && (i = 1), this.node.runAction(cc.sequence(e, cc.delayTime(i), cc.callFunc(() => {
                    o.default.Instance.Play(this.multiple > 1 ? "Buffalo_win_02" : "Buffalo_win_01")
                })))
            }
            Hide() {
                o.default.Instance.Stop(this.bgmID), this.bgmID = null, o.default.Instance.Fade(o.default.Instance.GetBGMID(), 0, 1), this.HideSkillTitle(!0), this.node.runAction(cc.sequence(cc.delayTime(.5), cc.fadeTo(.5, 0), cc.callFunc(() => {
                    this.node.opacity = 0, this.UnUseSkill()
                })))
            }
            MultipleEnd() {
                let e = this.oriOdds * this.playerBet,
                    t = (this.totalWin - this.oriOdds * this.playerBet) / 42,
                    i = cc.repeat(cc.sequence(cc.callFunc(() => {
                        e += t, this.scoreLabel.string = h.default.NumberformatBet(e, this.playerBet)
                    }), cc.delayTime(.05)), 42);
                this.countSound = o.default.Instance.Play("Aladdin_count_loop_02", 1, !0), this.scoreLabel.node.runAction(cc.sequence(i, cc.callFunc(() => {
                    this.scoreLabel.string = this.totalWin.toString(), o.default.Instance.Stop(this.countSound), this.countSound = null, o.default.Instance.Play("Aladdin_count_end_02")
                }))), this.animation.play("MutipleEnd")
            }
            CreateSkillTitle() {
                if (this.isUnuse) return;
                this.SkillTitle && this.HideSkillTitle(!1);
                const e = l.default.LoadGUI(this.skillType);
                if (e) {
                    let t;
                    t = n.default.isReverse ? this.playerSeat > 1 ? cc.v2(0, 60) : cc.v2(0, -60) : this.playerSeat > 1 ? cc.v2(0, -60) : cc.v2(0, 60);
                    const i = u.default.WeaponUIPosition(this.playerSeat).add(t);
                    e.setPosition(i), e.opacity = 255, this.SkillTitle = e.getComponent(a.default)
                }
            }
        };
        s([m(cc.Animation)], S.prototype, "animation", void 0), s([m(cc.Label)], S.prototype, "scoreLabel", void 0), s([m(cc.Label)], S.prototype, "BetLabel", void 0), s([m(cc.Node)], S.prototype, "oddsParent", void 0), s([m([cc.Animation])], S.prototype, "LoopLightingAni", void 0), s([m([cc.ParticleSystem])], S.prototype, "SandCircle", void 0), s([m(cc.ParticleSystem)], S.prototype, "SandBG", void 0), s([m(cc.Node)], S.prototype, "slotRoot", void 0), s([m(cc.Sprite)], S.prototype, "slotSprite", void 0), s([m(cc.Sprite)], S.prototype, "slotSpriteAdd", void 0), s([m([cc.SpriteFrame])], S.prototype, "slotSpriteFrame", void 0), S = s([p], S), i.default = S, cc._RF.pop()
    }, {
        "../../../../../FishCommon/Script/SSCanvasHandler": void 0,
        "../../../../../FishHunter/Script/Game/MainGame/Award/SkillTitle": void 0,
        "../../../../../FishHunter/Script/Game/MainGame/Common/AudioManager": void 0,
        "../../../../../FishHunter/Script/Game/MainGame/Common/ResourceManager": void 0,
        "../../../../../FishHunter/Script/Game/MainGame/Common/Utility": void 0,
        "../../../../../FishHunter/Script/Game/MainGame/Fish/FishManager": void 0,
        "../../../../../FishHunter/Script/Game/MainGame/Skill/BaseSkill": void 0,
        "../../../../../FishHunter/Script/Game/MainGame/Skill/BaseSkillOddsUI": void 0,
        "../../../../../FishHunter/Script/Game/MainGame/Weapon/WeaponManager": void 0
    }],
    SkillGenie: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "a8ec3OyeOhHk6d+rckzWQ3u", "SkillGenie");
        var s = this && this.__decorate || function(e, t, i, s) {
                var n, a = arguments.length,
                    o = a < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                else
                    for (var l = e.length - 1; l >= 0; l--)(n = e[l]) && (o = (a < 3 ? n(o) : a > 3 ? n(t, i, o) : n(t, i)) || o);
                return a > 3 && o && Object.defineProperty(t, i, o), o
            },
            n = this && this.__awaiter || function(e, t, i, s) {
                return new(i || (i = Promise))(function(n, a) {
                    function o(e) {
                        try {
                            h(s.next(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function l(e) {
                        try {
                            h(s.throw(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function h(e) {
                        var t;
                        e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                            e(t)
                        })).then(o, l)
                    }
                    h((s = s.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const a = e("../../../../../FishHunter/Script/Game/MainGame/Skill/BaseSkill"),
            o = e("../../../../../FishHunter/Script/Game/MainGame/Skill/BaseSkillTitleUI"),
            l = e("../../../../../FishCommon/Script/SSCanvasHandler"),
            h = e("../../../../../FishHunter/Script/Game/MainGame/Player/PlayerManager"),
            c = e("../../../../../FishHunter/Script/Game/MainGame/Weapon/WeaponManager"),
            r = e("../../../../../FishHunter/Script/Game/MainGame/Common/ResourceManager"),
            d = e("../../../../../FishHunter/Script/Game/MainGame/Fish/FishManager"),
            u = e("../../../../../FishHunter/Script/Game/MainGame/Common/AudioManager"),
            p = e("../../../../../FishHunter/Script/Game/MainGame/Game/GameManager"),
            m = e("../../../../../FishHunter/Script/Game/GameClient"),
            S = e("../../../../../FishHunter/Script/Game/System/SkillSystem"),
            {
                ccclass: f,
                property: y
            } = cc._decorator;
        let g = class extends a.default {
            constructor() {
                super(...arguments), this.GenieParent = null, this.Oops = null, this.MadnessTitle = null, this.LampCharge = null, this.GenieCharge = null, this.CoinParticle = [], this.TapHint = null, this.fishID = null, this.Genie = null, this.GenieUI = null, this.currentBombNumber = 0, this.SmallBombTimes = 0, this.BigBombTimes = 0, this.HitCount = 0, this.currentHitCount = 1, this.background = null, this.HitLabel = null, this.particleStartSize = [50, 50, 50, 100, 100, 80, 80, 80], this.particleEndSize = [50, 50, 50, 50, 50, 60, 60, 60], this.Rubbing = !1, this.RubSpeed = 1, this.fishAwardTime = 0, this.hintClickCount = 0, this.m_iTouchCount = 0, this.bigExplodeTime = 0
            }
            onLoad() {
                this.skillType = a.skillEnum.RockSkull, this.limitTime = 240
            }
            update(e) {
                super.update(e), this.forceTimer > 0 && (this.forceTimer -= e, this.forceTimer <= 0 && (console.error("Genie TimeOut"), this.Genie && (this.currentBombNumber > this.SmallBombTimes ? (this.isUnuse = !0, this.BigWin()) : this.LampExpo()), this.forceTimer = 0))
            }
            InitProperties(e = null) {
                super.InitProperties(), this.playerBet = e.bet, this.currentBombNumber = 0, this.currentHitCount = 1, this.HitCount = 0, this.forceTime = 7.5, this.node.angle = l.default.isReverse ? 180 : 0, this.node.setPosition(cc.Vec2.ZERO), this.LampCharge.node.active = !1, this.fishID = e.id, this.SmallBombTimes = e.small_bomb_times_target, this.BigBombTimes = e.big_bomb_times_target
            }
            UnUseSkill() {
                this.isMainPlayer && (h.PlayerManager.Instance.isLockChangeBet = !1, c.default.Instance.getWeapon(this.playerSeat).isGunReady = !0, this.CanelRegisterTouchEvent()), this.unschedule(this.UpdateHit), this.Genie && (this.Genie.RemoveSelf(), this.Genie = null), this.GenieUI && (this.GenieUI.Hide(!0), this.GenieUI = null), this.background && (this.background.SmokeOff(), this.background.SizeDown(), this.background = null), this.HitLabel && (r.default.DespawnEffect("GenieHit", this.HitLabel.node.parent.parent), this.HitLabel = null), this.Oops.node.active = !1, this.MadnessTitle.node.active = !1, this.node.setScale(1), this.tapHintActive(!1), this.m_iTouchCount = 0, super.UnUseSkill()
            }
            UseSkill() {
                if (this.bigExplodeTime = 0, this.Genie = d.default.Instance.GetFishByID(this.fishID.toString()), !this.Genie && this.isMainPlayer && (this.Genie = d.default.Instance.CreateFakeFish(this.fishID.toString(), 82, new cc.Vec2(700, 360))), this.Genie) {
                    this.isMainPlayer && (h.PlayerManager.Instance.isLockChangeBet = !0, c.default.Instance.getWeapon(this.playerSeat).isGunReady = !1, this.RegisterTouchEvent()), this.Genie.FishDie(), this.Genie.PauseClip();
                    let e = l.default.isReverse ? this.Genie.node.position.neg() : this.Genie.node.position;
                    this.Genie.node.setParent(this.GenieParent), this.Genie.node.setPosition(e), this.Genie.node.angle = 0, this.CameraShakeEffect(5, 1), u.default.Instance.Play("Genie_catch_01");
                    let t = cc.repeat(cc.sequence(cc.moveBy(.1, cc.v2(10, 10)), cc.moveBy(.1, cc.v2(-10, -10))), 10);
                    this.Genie.node.runAction(cc.sequence(t, cc.callFunc(() => {
                        u.default.Instance.Play("41_catch_bigfish"), this.Genie.CoinEffect(), this.Genie.RubReady(this.RubStart.bind(this), () => {
                            this.RubChargeLight(!0), this.tapHintActive(!0)
                        })
                    })))
                }
            }
            RubStart() {
                cc.tween(this.Genie.node).delay(.5).call(() => {
                    this.Genie.eulerTurn(.8, cc.v3(28, -20, -10)), this.GenieUI = r.default.LoadGUI("10026").getComponent(o.default), this.GenieUI && this.GenieUI.Init(this.playerBet, this.playerSeat, this.Genie.node.getPosition())
                }).to(.8, {
                    position: cc.Vec3.ZERO
                }).call(() => {
                    this.background = p.default.Instance.BackgroundNow, this.background && this.background.SmokeOn(), u.default.Instance.Fade(u.default.Instance.GetBGMID(), 1, 0), this.bgmID = u.default.Instance.Play("BGM_Genie_03", 1, !0), u.default.Instance.Fade(this.bgmID, 0, 1), this.scheduleOnce(this.SendRangeFish.bind(this), 3)
                }).start(), d.default.Instance.RemoveFishByID(this.fishID.toString())
            }
            RubChargeLight(e) {
                if (this.Rubbing = e, this.LampCharge.node.active = e, e) {
                    this.RubSpeed = 1, this.LampCharge.play();
                    let e = this.LampCharge.getAnimationState(this.LampCharge.currentClip.name);
                    e && (e.speed = this.RubSpeed)
                } else this.LampCharge.stop()
            }
            SendRangeFish() {
                if (this.isMainPlayer) {
                    let e = d.default.Instance.GetRangeAttackableID(cc.Vec2.ZERO, 1200, 100);
                    m.default.SkillSystem.SendRangeFish(S.SKILL_CMD_NAME.ROCKSKULL_BOME, e)
                }
                this.forceTimer = this.forceTime
            }
            ReceiveSkillData(e) {
                if (!this.node || this.isUnuse) return;
                if (null == this.Genie) {
                    const t = e.win;
                    return void h.PlayerManager.Instance.ModifyPlayerWinning(this.playerSeat, t, null)
                }
                this.dieFishList.length = 0, this.winList.length = 0;
                const t = e.fish;
                this.oddsList = e.odds;
                let i = t.length;
                for (let s = 0; s < i; s++) this.dieFishList.push(d.default.Instance.GetFishByID(t[s])), this.winList.push(this.oddsList[s] * this.playerBet);
                this.totalWin = e.total_win, e.small_bomb_times_target && (this.SmallBombTimes = e.small_bomb_times_target), e.big_bomb_times_target && (this.BigBombTimes = e.big_bomb_times_target), this.currentBombNumber += 1, this.currentBombNumber <= this.SmallBombTimes ? this.SmallExplode() : (this.HitCount += i, this.BigExplode()), this.forceTimer = 0
            }
            SmallExplode() {
                return n(this, void 0, void 0, function*() {
                    this.Genie.RubBack(() => {
                        if (!this.node || this.isUnuse) return;
                        let e = 1 + Math.floor(4 * Math.random());
                        u.default.Instance.Play("voice_Genie_random_0" + e.toString()), this.RubChargeLight(!1), this.scheduleOnce(() => {
                            u.default.Instance.Play("Genie_attack_01"), r.default.SpawnEffect("SmokeRing", this.isMainPlayer), this.KillFish(), this.GeyserEffect(), this.CameraShakeEffect(1.5, 2)
                        }, .13)
                    }, this.RubChargeLight.bind(this, !0)), yield this.delay(5e3), this.currentBombNumber == this.SmallBombTimes && this.BigBombTimes > 0 ? (yield this.delay(3e3), this.Madness()) : this.currentBombNumber < this.SmallBombTimes ? this.SendRangeFish() : (yield this.delay(3e3), this.LampExpo())
                })
            }
            LampExpo() {
                this.Genie.RubFail(() => {
                    this.node && !this.isUnuse && (this.RubChargeLight(!1), this.tapHintActive(!1), this.scheduleOnce(() => {
                        this.Oops.node.active = !0, this.Oops.play()
                    }, .5), this.scheduleOnce(() => {
                        this.GenieUI && this.GenieUI.ShowScore(this.totalWin, !1), this.Genie && (this.Genie.RemoveSelf(), this.Genie = null), this.SkillOver()
                    }, 4))
                })
            }
            Madness() {
                this.GenieCharge.node.scale = 1, this.GenieCharge.node.setPosition(cc.Vec3.ZERO);
                for (let e = 0; e < this.CoinParticle.length; e++) this.CoinParticle[e].startSize = this.particleStartSize[e], this.CoinParticle[e].endSize = this.particleEndSize[e];
                this.Genie.MadnessStart(() => {
                    if (!this.node || this.isUnuse) return;
                    u.default.Instance.Fade(this.bgmID, 1, 0), this.bgmID = u.default.Instance.Play("BGM_Genie_04", 1, !0), u.default.Instance.Fade(this.bgmID, 0, 1), u.default.Instance.Play("Genie_attack_02"), this.Genie.eulerTurn(.5, cc.v3(0, 0, 0));
                    let e = 0;
                    "magiccity" == window.gd_nowLOGO && (e = -25), cc.tween(this.Genie.node).to(1, {
                        position: cc.v3(0, -100 + e, 0)
                    }).start(), this.RubChargeLight(!1), this.tapHintActive(!1)
                }, () => {
                    cc.tween(this.node).delay(1.5).call(() => {
                        if (u.default.Instance.Play("Genie_title_01"), "magiccity" == window.gd_nowLOGO) {
                            const e = this.playerSeat > 1 ? 1 : -1;
                            cc.tween(this.MadnessTitle.node).set({
                                scale: .85,
                                position: cc.v3(0, 50 * e, 0)
                            }).start()
                        }
                        this.MadnessTitle.node.active = !0, this.MadnessTitle.play()
                    }).delay(.5).call(() => {
                        u.default.Instance.Play("voice_Genie_awaken_01")
                    }).delay(2.5).call(() => {
                        this.Genie.SetNextClip("AwakeIdleToMad", !1, () => {
                            if (!this.node || this.isUnuse) return;
                            let e = 0;
                            "magiccity" == window.gd_nowLOGO && (e = -30), cc.tween(this.Genie.node).by(1, {
                                scale: .5,
                                position: cc.v3(0, -185 + e, 0)
                            }).start(), cc.tween(this.GenieCharge.node).set({
                                position: cc.v3(10, e, 0)
                            }).start(), this.background.SizeUp()
                        }, () => {
                            this.node && !this.isUnuse && this.Genie.PlayClip("MadStart", !1, () => {
                                this.GenieCharge.play("GenieCharge"), u.default.Instance.Play("Genie_collect_01"), "magiccity" == window.gd_nowLOGO && cc.tween(this.node).to(.5, {
                                    scale: .8
                                }).start(), this.Genie.PlayClip("MadLoop", !0), this.scheduleOnce(() => {
                                    this.SendRangeFish()
                                }, 1.5)
                            })
                        })
                    }).start()
                })
            }
            BigExplode() {
                return n(this, void 0, void 0, function*() {
                    this.bigExplodeTime++, this.Genie.SetNextClip("MadSplash", !1, () => {
                        if (!this.node || this.isUnuse) return;
                        if (this.currentBombNumber == this.SmallBombTimes + 1) u.default.Instance.Play("voice_Genie_rise_01");
                        else {
                            let e = 2 + Math.floor(4 * Math.random());
                            u.default.Instance.Play("voice_Genie_rise_0" + e.toString())
                        }
                        const e = this.bigExplodeTime > 13 ? -35 : -26,
                            t = e + 16;
                        cc.tween(this.Genie.node).by(1, {
                            scale: .1,
                            position: cc.v3(0, e, 0)
                        }).start(), cc.tween(this.GenieCharge.node).by(1, {
                            position: cc.v3(0, t, 0)
                        }).start();
                        for (let i = 0; i < this.CoinParticle.length; i++) this.CoinParticle[i].startSize *= 1.05, this.CoinParticle[i].endSize *= 1.05;
                        this.GenieCharge.node.scale *= 1.05, this.GenieCharge.play("GenieSplash"), this.scheduleOnce(() => {
                            if (u.default.Instance.Play("Genie_round_01"), this.KillFish(), this.CameraShakeEffect(1.5, 6), this.isMainPlayer && null == this.HitLabel) {
                                let e = r.default.SpawnEffect("GenieHit", this.isMainPlayer),
                                    t = c.default.WeaponPosition(this.playerSeat);
                                e.setPosition(t.add(new cc.Vec2(0, this.playerSeat > 1 ? -180 : 180))), e.angle = l.default.isReverse ? 180 : 0, this.HitLabel = e.getComponentInChildren(cc.Label), this.HitLabel.string = this.currentHitCount.toString(), this.HitLabel.node.parent.opacity = 255, this.schedule(this.UpdateHit, .1)
                            }
                        }, .5)
                    }, () => {
                        this.node && !this.isUnuse && (this.currentBombNumber < this.SmallBombTimes + this.BigBombTimes ? this.Genie.PlayClip("MadStart", !1, () => {
                            this.GenieCharge.play("GenieCharge"), u.default.Instance.Play("Genie_collect_01"), this.Genie.PlayClip("MadLoop", !0), this.scheduleOnce(() => {
                                this.SendRangeFish()
                            }, 1.5)
                        }) : this.BigWin())
                    })
                })
            }
            BigWin() {
                this.unschedule(this.UpdateHit), this.HitLabel && (this.currentHitCount = this.HitCount, this.HitLabel.string = this.currentHitCount.toString(), this.HitLabel.node.parent.scale = 1.2, this.HitLabel.node.parent.runAction(cc.sequence(cc.scaleTo(1, 1), cc.delayTime(2), cc.fadeOut(1)))), u.default.Instance.Play("voice_Genie_end_01"), "magiccity" == window.gd_nowLOGO && cc.tween(this.node).to(.5, {
                    scale: 1
                }).start(), this.Genie.PlayClip("MadToIdle", !1, () => {
                    let e = 0;
                    "magiccity" == window.gd_nowLOGO && (e = -25), cc.tween(this.Genie.node).to(1, {
                        scale: 1,
                        position: cc.v3(0, -100 + e, 0)
                    }).start(), this.Genie.PlayClip("AwakeIdle", !0), this.background && this.background.SizeDown()
                }), this.scheduleOnce(() => {
                    u.default.Instance.Fade(this.bgmID, 1, 0), this.bgmID = u.default.Instance.Play("BGM_Genie_04_1"), this.GenieUI && this.GenieUI.ShowScore(this.totalWin, !0)
                }, 2), this.scheduleOnce(() => {
                    this.SkillOver()
                }, 3.5)
            }
            KillFish() {
                return n(this, void 0, void 0, function*() {
                    let e = 1e3 * this.KillFishesAndShowAward();
                    e += (new Date).getTime(), this.fishAwardTime = this.fishAwardTime < e ? e : this.fishAwardTime, this.currentWin = this.totalWin, this.GenieUI && this.GenieUI.SetScore(this.currentWin)
                })
            }
            SkillOver() {
                return n(this, void 0, void 0, function*() {
                    u.default.Instance.Stop(this.bgmID), this.bgmID = null, u.default.Instance.Fade(u.default.Instance.GetBGMID(), 0, 1);
                    let e = (new Date).getTime();
                    this.fishAwardTime = this.fishAwardTime > e ? this.fishAwardTime - e : 0, this.node.runAction(cc.sequence(cc.delayTime((this.fishAwardTime < 2500 ? 2500 : this.fishAwardTime) / 1e3), cc.callFunc(() => {
                        this.UnUseSkill()
                    })))
                })
            }
            UpdateHit() {
                if (this.HitLabel) {
                    if (this.currentHitCount >= this.HitCount) return;
                    if (Math.random() >= .7) return;
                    this.currentHitCount++, this.HitLabel.string = this.currentHitCount.toString(), this.HitLabel.node.parent.scale = 1.2, this.HitLabel.node.parent.runAction(cc.scaleTo(.07, 1))
                }
            }
            OnTouchStart(e) {
                if (this.isMainPlayer && (this.m_iTouchCount++, this.hintClickCount++), this.hintClickCount >= 10 && (this.tapHintActive(!1), this.hintClickCount = 0), this.Rubbing) {
                    this.RubSpeed < 2 && (this.RubSpeed += .1 * Math.random()), this.Genie && this.Genie.SetClipSpeed(this.RubSpeed);
                    let e = this.LampCharge.getAnimationState(this.LampCharge.currentClip.name);
                    e && e.speed != this.RubSpeed && (e.speed = this.RubSpeed)
                }
            }
            tapHintActive(e) {
                e && !this.TapHint.node.active && this.isMainPlayer && (this.TapHint.node.active = !0, this.TapHint.play(), this.TapHint.node.setScale(0), this.TapHint.node.runAction(cc.scaleTo(.5, 1).easing(cc.easeBounceOut())), this.hintClickCount = 0), !e && this.TapHint.node.active && (this.TapHint.node.active = !1, this.TapHint.stop())
            }
            GeyserEffect() {
                return n(this, void 0, void 0, function*() {
                    for (let e = 0; e < 6; e++) {
                        let e = r.default.SpawnEffect("Geyser", this.isMainPlayer);
                        e.angle = l.default.isReverse ? 180 : 0, e.setPosition(cc.v2(-468, -220).add(cc.v2(936 * Math.random(), 440 * Math.random()))), yield this.delay(100)
                    }
                })
            }
        };
        s([y(cc.Node)], g.prototype, "GenieParent", void 0), s([y(cc.Animation)], g.prototype, "Oops", void 0), s([y(cc.Animation)], g.prototype, "MadnessTitle", void 0), s([y(cc.Animation)], g.prototype, "LampCharge", void 0), s([y(cc.Animation)], g.prototype, "GenieCharge", void 0), s([y([cc.ParticleSystem])], g.prototype, "CoinParticle", void 0), s([y(cc.Animation)], g.prototype, "TapHint", void 0), g = s([f], g), i.default = g, cc._RF.pop()
    }, {
        "../../../../../FishCommon/Script/SSCanvasHandler": void 0,
        "../../../../../FishHunter/Script/Game/GameClient": void 0,
        "../../../../../FishHunter/Script/Game/MainGame/Common/AudioManager": void 0,
        "../../../../../FishHunter/Script/Game/MainGame/Common/ResourceManager": void 0,
        "../../../../../FishHunter/Script/Game/MainGame/Fish/FishManager": void 0,
        "../../../../../FishHunter/Script/Game/MainGame/Game/GameManager": void 0,
        "../../../../../FishHunter/Script/Game/MainGame/Player/PlayerManager": void 0,
        "../../../../../FishHunter/Script/Game/MainGame/Skill/BaseSkill": void 0,
        "../../../../../FishHunter/Script/Game/MainGame/Skill/BaseSkillTitleUI": void 0,
        "../../../../../FishHunter/Script/Game/MainGame/Weapon/WeaponManager": void 0,
        "../../../../../FishHunter/Script/Game/System/SkillSystem": void 0
    }]
}, {}, ["MCCustomizer", "ALADDIN", "GENIE", "GenieBackground", "SkillAladdin", "SkillGenie"]);