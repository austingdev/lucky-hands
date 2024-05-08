window.__require = function t(n, e, i) {
    function o(a, s) {
        if (!e[a]) {
            if (!n[a]) {
                var u = a.split("/");
                if (u = u[u.length - 1], !n[u]) {
                    var c = "function" == typeof __require && __require;
                    if (!s && c) return c(u, !0);
                    if (r) return r(u, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = u
            }
            var p = e[a] = {
                exports: {}
            };
            n[a][0].call(p.exports, function(t) {
                return o(n[a][1][t] || t)
            }, p, p.exports, t, n, e, i)
        }
        return e[a].exports
    }
    for (var r = "function" == typeof __require && __require, a = 0; a < i.length; a++) o(i[a]);
    return o
}({
    JPRewardMgr: [function(t, n, e) {
        "use strict";
        cc._RF.push(n, "cc06e5JbIxCKbmuop9ryYfh", "JPRewardMgr");
        var i, o = this && this.__extends || (i = function(t, n) {
                return (i = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(t, n) {
                        t.__proto__ = n
                    } || function(t, n) {
                        for (var e in n) n.hasOwnProperty(e) && (t[e] = n[e])
                    })(t, n)
            }, function(t, n) {
                function e() {
                    this.constructor = t
                }
                i(t, n), t.prototype = null === n ? Object.create(n) : (e.prototype = n.prototype, new e)
            }),
            r = this && this.__decorate || function(t, n, e, i) {
                var o, r = arguments.length,
                    a = r < 3 ? n : null === i ? i = Object.getOwnPropertyDescriptor(n, e) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, n, e, i);
                else
                    for (var s = t.length - 1; s >= 0; s--)(o = t[s]) && (a = (r < 3 ? o(a) : r > 3 ? o(n, e, a) : o(n, e)) || a);
                return r > 3 && a && Object.defineProperty(n, e, a), a
            },
            a = this && this.__awaiter || function(t, n, e, i) {
                return new(e || (e = Promise))(function(o, r) {
                    function a(t) {
                        try {
                            u(i.next(t))
                        } catch (n) {
                            r(n)
                        }
                    }

                    function s(t) {
                        try {
                            u(i.throw(t))
                        } catch (n) {
                            r(n)
                        }
                    }

                    function u(t) {
                        var n;
                        t.done ? o(t.value) : (n = t.value, n instanceof e ? n : new e(function(t) {
                            t(n)
                        })).then(a, s)
                    }
                    u((i = i.apply(t, n || [])).next())
                })
            },
            s = this && this.__generator || function(t, n) {
                var e, i, o, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & o[0]) throw o[1];
                        return o[1]
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
                    return function(n) {
                        return u([t, n])
                    }
                }

                function u(r) {
                    if (e) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (e = 1, i && (o = 2 & r[0] ? i.return : r[0] ? i.throw || ((o = i.return) && o.call(i), 0) : i.next) && !(o = o.call(i, r[1])).done) return o;
                        switch (i = 0, o && (r = [2 & r[0], o.value]), r[0]) {
                            case 0:
                            case 1:
                                o = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, i = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(o = (o = a.trys).length > 0 && o[o.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!o || r[1] > o[0] && r[1] < o[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < o[1]) {
                                    a.label = o[1], o = r;
                                    break
                                }
                                if (o && a.label < o[2]) {
                                    a.label = o[2], a.ops.push(r);
                                    break
                                }
                                o[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = n.call(t, a)
                    } catch (s) {
                        r = [6, s], i = 0
                    } finally {
                        e = o = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(e, "__esModule", {
            value: !0
        }), e.JPRewardMgr = e.JPType = void 0;
        var u, c = t("../../../../LobbyCommon/Net/LobbyClient"),
            p = t("../../../../LobbyCommon/Component/NumberCountUp"),
            h = t("../../../Helper/EventSystem"),
            m = t("../../../ModuleBase"),
            l = t("../../../Component/AudioMgr"),
            d = cc._decorator,
            _ = d.ccclass,
            y = d.property;
        (function(t) {
            t[t.Grand = 0] = "Grand", t[t.Major = 1] = "Major", t[t.Minor = 2] = "Minor", t[t.Mini = 3] = "Mini"
        })(u = e.JPType || (e.JPType = {}));
        var f = function(t) {
            function n() {
                var n = null !== t && t.apply(this, arguments) || this;
                return n.m_nodeJPCheck = null, n.m_nodeGrand = null, n.m_nodeMajor = null, n.m_nodeMinor = null, n.m_nodeMini = null, n.m_root = null, n.m_skipButton = null, n.numberRewardJPVal = null, n.jpMoneySymbolNode = null, n.m_animation = null, n.m_enterAnim = null, n.m_loopAnim = null, n.m_leaveAnim = null, n.m_audioJP = [], n.m_duration = [], n.m_volume = .5, n._jpType = -1, n._winValue = 0, n._exchange_rate = 0, n._entries = 0, n._winning = 0, n._audioID = void 0, n.isLockJpUpdate = !1, n.isNeedDelayJpTicket = !1, n
            }
            return o(n, t), n.prototype._onLoad = function() {
                return a(this, void 0, void 0, function() {
                    var t, n, e, i, o;
                    return s(this, function() {
                        for (this.m_skipButton.clickEvents = [], (t = new cc.Component.EventHandler).target = this.node, t.component = "JPRewardMgr", t.handler = "Skip", this.m_skipButton.clickEvents.push(t), n = [], e = 0, i = this.m_audioJP; e < i.length; e++) o = i[e], n.push(o.name);
                        return l.AudioMgr.Instance.setAudioClip(this.m_audioJP, n), [2]
                    })
                })
            }, n.prototype._start = function() {
                return a(this, void 0, void 0, function() {
                    return s(this, function() {
                        return c.LobbyClient.Instance.GetJPSystem.OnWinJPValueSignal.add(this.OnWinJpValue, this), h.EventSystem.Event(h.JackpotReward.SetJpLock).Insert(this.SetJplockStatus, this), [2]
                    })
                })
            }, n.prototype._onDestroy = function() {
                return a(this, void 0, void 0, function() {
                    return s(this, function() {
                        return c.LobbyClient.Instance.GetJPSystem && c.LobbyClient.Instance.GetJPSystem.OnWinJPValueSignal && c.LobbyClient.Instance.GetJPSystem.OnWinJPValueSignal.remove(this.OnWinJpValue, this), h.EventSystem.Event(h.JackpotReward.SetJpLock).Remove(this.SetJplockStatus, this), [2]
                    })
                })
            }, n.prototype.OnWinJpValue = function(t, n, e, i, o) {
                this.m_nodeGrand.active = !1, this.m_nodeMajor.active = !1, this.m_nodeMinor.active = !1, this.m_nodeMini.active = !1, this._jpType = t, this._winValue = n, this._exchange_rate = e, this._entries = i, this._winning = o, this.isLockJpUpdate ? this.isNeedDelayJpTicket = !0 : this.ShowJpTicket(t)
            }, n.prototype.ShowJpTicket = function(t) {
                if (console.log("OnWinJpValue ! winValue : " + this._winValue + " , _winning : " + this._winning), h.EventSystem.Event(h.DownBar.SetPlayerInfo).Notify(this._entries, this._winning), this.SetJPValShowFormat(SS.Common.GameEnvironment.JPRewardIsMoneyFormat), SS.Common.GameEnvironment.JPRewardIsMoneyFormat) {
                    var n = SS.Common.BaseFunction.accMul(this._winValue, this._exchange_rate);
                    this._winValue = this.TruncateCurrency(n, this._exchange_rate)
                }
                this.numberRewardJPVal.SetNumberNow(this._winValue), t == u.Grand ? this.m_nodeGrand.active = !0 : t == u.Major ? this.m_nodeMajor.active = !0 : t == u.Minor ? this.m_nodeMinor.active = !0 : t == u.Mini && (this.m_nodeMini.active = !0), this.m_audioJP[0] && l.AudioMgr.Instance.Play(this.m_audioJP[0].name, !1, 1), this.PlayStartAnimation(), this._jpType = -1, this._winValue = 0, this._exchange_rate = 0, this._entries = 0, this._winning = 0, this.isNeedDelayJpTicket = !1
            }, n.prototype.SetJplockStatus = function(t, n) {
                void 0 === n && (n = 0), this.isLockJpUpdate = t, 0 == this.isLockJpUpdate && this.isNeedDelayJpTicket && (0 != n && (this._winning = n), this.ShowJpTicket(this._jpType))
            }, n.prototype.TruncateCurrency = function(t, n) {
                var e = SS.Common.BaseFunction.accDiv(1, n);
                return t = SS.Common.BaseFunction.accMul(t, e), t = Math.floor(t), SS.Common.BaseFunction.accDiv(t, e)
            }, n.prototype.SetJPValShowFormat = function(t) {
                this.numberRewardJPVal.SetNumberFormat(!t, t)
            }, n.prototype.Test = function(t, n) {
                this.OnWinJpValue(Number(n), 5e5, .01, 123456, 654321)
            }, n.prototype.Skip = function() {
                this.PlayEndAnimation()
            }, n.prototype.PlayStartAnimation = function() {
                this.m_root.active = !0, this.m_skipButton.interactable = !0, h.EventSystem.Event(h.SystemMsg.Open).Notify(this.m_root, cc.Size.ZERO, cc.Size.ZERO, 0), this.m_animation.on("finished", this.PlayLoopAnimation, this), this.m_animation.off("finished", this.Leave, this), this.m_animation.play(this.m_enterAnim.name, this.m_volume)
            }, n.prototype.PlayLoopAnimation = function() {
                return a(this, void 0, void 0, function() {
                    return s(this, function() {
                        return this.m_audioJP[1] && (this._audioID = l.AudioMgr.Instance.Play(this.m_audioJP[1].name, !0, this.m_volume)), this.m_animation.off("finished", this.PlayLoopAnimation, this), this.m_animation.play(this.m_loopAnim.name, 0), this.m_duration[this._jpType] ? this.scheduleOnce(this.PlayEndAnimation.bind(this), this.m_duration[this._jpType]) : this.scheduleOnce(this.PlayEndAnimation.bind(this), 6), [2]
                    })
                })
            }, n.prototype.PlayEndAnimation = function() {
                return a(this, void 0, void 0, function() {
                    return s(this, function() {
                        return this.m_audioJP[2] && l.AudioMgr.Instance.Play(this.m_audioJP[2].name, !1, this.m_volume), this._audioID && l.AudioMgr.Instance.SetVolume(this._audioID, 0, 1), this.m_skipButton.interactable = !1, this.unscheduleAllCallbacks(), this._jpType = -1, this.m_animation.off("finished", this.PlayLoopAnimation, this), this.m_animation.on("finished", this.Leave, this), this.m_animation.play(this.m_leaveAnim.name, 0), [2]
                    })
                })
            }, n.prototype.Leave = function() {
                return a(this, void 0, void 0, function() {
                    return s(this, function() {
                        return l.AudioMgr.Instance.Stop(this._audioID), this.m_animation.off("finished", this.Leave, this), h.EventSystem.Event(h.SystemMsg.Close).Notify(this.m_root, cc.Size.ZERO, 0), this.m_root.active = !1, this.m_nodeGrand.active = !1, this.m_nodeMajor.active = !1, this.m_nodeMinor.active = !1, this.m_nodeMini.active = !1, [2]
                    })
                })
            }, r([y(cc.Node)], n.prototype, "m_nodeJPCheck", void 0), r([y(cc.Node)], n.prototype, "m_nodeGrand", void 0), r([y(cc.Node)], n.prototype, "m_nodeMajor", void 0), r([y(cc.Node)], n.prototype, "m_nodeMinor", void 0), r([y(cc.Node)], n.prototype, "m_nodeMini", void 0), r([y(cc.Node)], n.prototype, "m_root", void 0), r([y(cc.Button)], n.prototype, "m_skipButton", void 0), r([y(p.NumberCountUp)], n.prototype, "numberRewardJPVal", void 0), r([y(cc.Node)], n.prototype, "jpMoneySymbolNode", void 0), r([y(cc.Animation)], n.prototype, "m_animation", void 0), r([y(cc.AnimationClip)], n.prototype, "m_enterAnim", void 0), r([y(cc.AnimationClip)], n.prototype, "m_loopAnim", void 0), r([y(cc.AnimationClip)], n.prototype, "m_leaveAnim", void 0), r([y([cc.AudioClip])], n.prototype, "m_audioJP", void 0), r([y([cc.Float])], n.prototype, "m_duration", void 0), r([y(cc.Float)], n.prototype, "m_volume", void 0), r([_], n)
        }(m.default);
        e.JPRewardMgr = f, cc._RF.pop()
    }, {
        "../../../../LobbyCommon/Component/NumberCountUp": void 0,
        "../../../../LobbyCommon/Net/LobbyClient": void 0,
        "../../../Component/AudioMgr": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../ModuleBase": void 0
    }]
}, {}, ["JPRewardMgr"]);