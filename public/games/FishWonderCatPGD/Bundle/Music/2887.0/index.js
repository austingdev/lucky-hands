window.__require = function t(e, i, o) {
    function n(u, r) {
        if (!i[u]) {
            if (!e[u]) {
                var c = u.split("/");
                if (c = c[c.length - 1], !e[c]) {
                    var l = "function" == typeof __require && __require;
                    if (!r && l) return l(c, !0);
                    if (s) return s(c, !0);
                    throw new Error("Cannot find module '" + u + "'")
                }
                u = c
            }
            var a = i[u] = {
                exports: {}
            };
            e[u][0].call(a.exports, function(t) {
                return n(e[u][1][t] || t)
            }, a, a.exports, t, e, i, o)
        }
        return i[u].exports
    }
    for (var s = "function" == typeof __require && __require, u = 0; u < o.length; u++) n(o[u]);
    return n
}({
    MusicCtrl: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "3735aerWS9DwYCspfp28llm", "MusicCtrl");
        var o, n = this && this.__extends || (o = function(t, e) {
                return (o = Object.setPrototypeOf || {
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
                o(t, e), t.prototype = null === e ? Object.create(e) : (i.prototype = e.prototype, new i)
            }),
            s = this && this.__decorate || function(t, e, i, o) {
                var n, s = arguments.length,
                    u = s < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, i) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) u = Reflect.decorate(t, e, i, o);
                else
                    for (var r = t.length - 1; r >= 0; r--)(n = t[r]) && (u = (s < 3 ? n(u) : s > 3 ? n(e, i, u) : n(e, i)) || u);
                return s > 3 && u && Object.defineProperty(e, i, u), u
            },
            u = this && this.__awaiter || function(t, e, i, o) {
                return new(i || (i = Promise))(function(n, s) {
                    function u(t) {
                        try {
                            c(o.next(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function r(t) {
                        try {
                            c(o.throw(t))
                        } catch (e) {
                            s(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
                            t(e)
                        })).then(u, r)
                    }
                    c((o = o.apply(t, e || [])).next())
                })
            },
            r = this && this.__generator || function(t, e) {
                var i, o, n, s, u = {
                    label: 0,
                    sent: function() {
                        if (1 & n[0]) throw n[1];
                        return n[1]
                    },
                    trys: [],
                    ops: []
                };
                return s = {
                    next: r(0),
                    throw: r(1),
                    return: r(2)
                }, "function" == typeof Symbol && (s[Symbol.iterator] = function() {
                    return this
                }), s;

                function r(t) {
                    return function(e) {
                        return c([t, e])
                    }
                }

                function c(s) {
                    if (i) throw new TypeError("Generator is already executing.");
                    for (; u;) try {
                        if (i = 1, o && (n = 2 & s[0] ? o.return : s[0] ? o.throw || ((n = o.return) && n.call(o), 0) : o.next) && !(n = n.call(o, s[1])).done) return n;
                        switch (o = 0, n && (s = [2 & s[0], n.value]), s[0]) {
                            case 0:
                            case 1:
                                n = s;
                                break;
                            case 4:
                                return u.label++, {
                                    value: s[1],
                                    done: !1
                                };
                            case 5:
                                u.label++, o = s[1], s = [0];
                                continue;
                            case 7:
                                s = u.ops.pop(), u.trys.pop();
                                continue;
                            default:
                                if (!(n = (n = u.trys).length > 0 && n[n.length - 1]) && (6 === s[0] || 2 === s[0])) {
                                    u = 0;
                                    continue
                                }
                                if (3 === s[0] && (!n || s[1] > n[0] && s[1] < n[3])) {
                                    u.label = s[1];
                                    break
                                }
                                if (6 === s[0] && u.label < n[1]) {
                                    u.label = n[1], n = s;
                                    break
                                }
                                if (n && u.label < n[2]) {
                                    u.label = n[2], u.ops.push(s);
                                    break
                                }
                                n[2] && u.ops.pop(), u.trys.pop();
                                continue
                        }
                        s = e.call(t, u)
                    } catch (r) {
                        s = [6, r], o = 0
                    } finally {
                        i = n = 0
                    }
                    if (5 & s[0]) throw s[1];
                    return {
                        value: s[0] ? s[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        var c = t("../../../LobbyCommon/Component/AudioMgr"),
            l = t("../../../LobbyCommon/Component/CookieCtrl"),
            a = t("../../../LobbyCommon/Helper/Download"),
            p = t("../../../LobbyCommon/Helper/EventSystem"),
            h = t("../../../LobbyCommon/ModuleBase"),
            m = cc._decorator,
            f = m.ccclass,
            y = m.property,
            d = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.musicClipName = [], e.musicIndex = -1, e.musicID = void 0, e._callback = null, e
                }
                return n(e, t), e.prototype._onLoad = function() {
                    return u(this, void 0, void 0, function() {
                        return r(this, function() {
                            return p.EventSystem.Event(p.Music.LoginMusic).Insert(this.LoginMusic, this), p.EventSystem.Event(p.Music.PlayMusic).Insert(this.PlayMusicByCookie, this), p.EventSystem.Event(p.Music.StopMusic).Insert(this.StopMusic, this), p.EventSystem.Event(p.Music.SaveNewMusicName).Insert(this.SaveFirstMusic, this), p.EventSystem.RegisterFunction(p.Music.GetHasNewMusic, this.GetHasNewMusic.bind(this)), [2]
                        })
                    })
                }, e.prototype.LoginMusic = function() {
                    // this.PlayMusicByCookie()
                }, e.prototype.onDestroy = function() {
                    return u(this, void 0, void 0, function() {
                        return r(this, function() {
                            return p.EventSystem.Event(p.Music.PlayMusic).Remove(this.PlayMusicByCookie, this), p.EventSystem.Event(p.Music.StopMusic).Remove(this.StopMusic, this), p.EventSystem.Event(p.Music.SaveNewMusicName).Remove(this.SaveFirstMusic, this), p.EventSystem.UnregisterFunction(p.Music.GetHasNewMusic), [2]
                        })
                    })
                }, e.prototype.SaveFirstMusic = function() {
                    l.default.SetCookie(l.CookieKey.MusicSaveName, this.musicClipName[0])
                }, e.prototype.GetHasNewMusic = function() {
                    var t = this.musicClipName[0],
                        e = l.default.GetCookie(l.CookieKey.MusicSaveName);
                    return null == e || e != t
                }, e.prototype.PlayMusicByCookie = function(t) {
                    void 0 === t && (t = null);
                    var e = l.default.GetCookie(l.CookieKey.MusicIndex);
                    null == e && (e = "0", this.musicIndex = -1), console.log("[MusicCtrl] PlayMusicByCookie, playIndexStr = " + e), this.PlayMusic(Number(e), t)
                }, e.prototype.PlayMusic = function(t, e) {
                    return u(this, void 0, void 0, function() {
                        var i;
                        return r(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return console.log("[MusicCtrl] play Index = " + t), console.log("[MusicCtrl] Music Index = ", this.musicIndex), this.musicIndex == t ? [3, 2] : (this.musicIndex = t, this._callback = e, void 0 !== this.musicID && (c.AudioMgr.Instance.Stop(this.musicID), this.musicID = void 0, c.AudioMgr.Instance.removeClip(this.musicClipName[this.musicIndex])), [4, a.Download.Bundle("Music")]);
                                case 1:
                                    return i = o.sent(), console.log("[MusicCtrl] Bundle = ", i), console.log("[MusicCtrl] Clip Name = ", this.musicClipName[t]), i.load(this.musicClipName[t], cc.AudioClip, this.DownloadMusicAndPlay.bind(this)), [3, 3];
                                case 2:
                                    e && e(), o.label = 3;
                                case 3:
                                    return [2]
                            }
                        })
                    })
                }, e.prototype.DownloadMusicAndPlay = function(t, e) {
                    console.log("[MusicCtrl] Download Music And Play"), console.log("[MusicCtrl] Clip = ", e), e && (c.AudioMgr.Instance.setAudioClip([e], [this.musicClipName[this.musicIndex]]), this.musicID = c.AudioMgr.Instance.Play(this.musicClipName[this.musicIndex], !0, 1)), console.log("[MusicCtrl] Music ", this.musicID), this._callback && this._callback(), this._callback = null
                }, e.prototype._logout = function() {
                    return u(this, void 0, Promise, function() {
                        return r(this, function() {
                            return this.musicIndex = -1, console.log("[MusicCtrl] Music Index = ", this.musicIndex), [2]
                        })
                    })
                }, e.prototype.StopMusic = function() {
                    console.log("[MusicCtrl] Music ", this.musicID), void 0 !== this.musicID && (c.AudioMgr.Instance.Stop(this.musicID), this.musicID = void 0, this.musicIndex = -1)
                }, s([y()], e.prototype, "musicClipName", void 0), s([f], e)
            }(h.default);
        i.default = d, cc._RF.pop()
    }, {
        "../../../LobbyCommon/Component/AudioMgr": void 0,
        "../../../LobbyCommon/Component/CookieCtrl": void 0,
        "../../../LobbyCommon/Helper/Download": void 0,
        "../../../LobbyCommon/Helper/EventSystem": void 0,
        "../../../LobbyCommon/ModuleBase": void 0
    }]
}, {}, ["MusicCtrl"]);