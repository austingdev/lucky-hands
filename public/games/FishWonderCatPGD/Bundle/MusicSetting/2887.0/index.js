window.__require = function t(e, n, o) {
    function i(c, u) {
        if (!n[c]) {
            if (!e[c]) {
                var s = c.split("/");
                if (s = s[s.length - 1], !e[s]) {
                    var a = "function" == typeof __require && __require;
                    if (!u && a) return a(s, !0);
                    if (r) return r(s, !0);
                    throw new Error("Cannot find module '" + c + "'")
                }
                c = s
            }
            var l = n[c] = {
                exports: {}
            };
            e[c][0].call(l.exports, function(t) {
                return i(e[c][1][t] || t)
            }, l, l.exports, t, e, n, o)
        }
        return n[c].exports
    }
    for (var r = "function" == typeof __require && __require, c = 0; c < o.length; c++) i(o[c]);
    return i
}({
    MusicSetting: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "8e16cKtXI5PPaBI0YmtJZ1n", "MusicSetting");
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
                    c = r < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) c = Reflect.decorate(t, e, n, o);
                else
                    for (var u = t.length - 1; u >= 0; u--)(i = t[u]) && (c = (r < 3 ? i(c) : r > 3 ? i(e, n, c) : i(e, n)) || c);
                return r > 3 && c && Object.defineProperty(e, n, c), c
            },
            c = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, r) {
                    function c(t) {
                        try {
                            s(o.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function u(t) {
                        try {
                            s(o.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(c, u)
                    }
                    s((o = o.apply(t, e || [])).next())
                })
            },
            u = this && this.__generator || function(t, e) {
                var n, o, i, r, c = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return r = {
                    next: u(0),
                    throw: u(1),
                    return: u(2)
                }, "function" == typeof Symbol && (r[Symbol.iterator] = function() {
                    return this
                }), r;

                function u(t) {
                    return function(e) {
                        return s([t, e])
                    }
                }

                function s(r) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; c;) try {
                        if (n = 1, o && (i = 2 & r[0] ? o.return : r[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, r[1])).done) return i;
                        switch (o = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return c.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                c.label++, o = r[1], r = [0];
                                continue;
                            case 7:
                                r = c.ops.pop(), c.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = c.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    c = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    c.label = r[1];
                                    break
                                }
                                if (6 === r[0] && c.label < i[1]) {
                                    c.label = i[1], i = r;
                                    break
                                }
                                if (i && c.label < i[2]) {
                                    c.label = i[2], c.ops.push(r);
                                    break
                                }
                                i[2] && c.ops.pop(), c.trys.pop();
                                continue
                        }
                        r = e.call(t, c)
                    } catch (u) {
                        r = [6, u], o = 0
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
        var s = t("../../../LobbyCommon/Component/AudioMgr"),
            a = t("../../../LobbyCommon/Component/CookieCtrl"),
            l = t("../../../LobbyCommon/Connect/Script/ConnectPanelMgr"),
            f = t("../../../LobbyCommon/Helper/EventSystem"),
            m = t("../../../LobbyCommon/ModuleBase"),
            y = cc._decorator,
            h = y.ccclass,
            p = y.property,
            v = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.m_nodeRoot = null, e.m_nodeNew = null, e.m_MusicToggleContainer = null, e.m_nodeAryToggleContainerElement = [], e.m_showNewFlag = !1, e
                }
                return i(e, t), e.prototype._onLoad = function() {
                    return c(this, void 0, void 0, function() {
                        var t = this;
                        return u(this, function() {
                            return console.log("[MusicSetting] start"), this.m_MusicToggleContainer.toggleItems.forEach(function(e) {
                                e.getComponentsInChildren(cc.Sprite).forEach(function(e) {
                                    t.m_nodeAryToggleContainerElement.push(e.node)
                                })
                            }), f.EventSystem.Event(f.DockFunction.Sound).Insert(this.SetMute, this), f.EventSystem.Event(f.DockFunction.Music).Insert(this.Show, this), this.m_nodeRoot.active = !1, this.m_nodeNew.active = !1, [2]
                        })
                    })
                }, e.prototype._start = function() {
                    return c(this, void 0, void 0, function() {
                        return u(this, function() {
                            return console.log("[MusicSetting] start"), this.m_showNewFlag = f.EventSystem.Function(f.Music.GetHasNewMusic)(), this.m_showNewFlag && (this.m_nodeNew.active = !0, f.EventSystem.Event(f.Menu.SetDockButtonNew).Notify(f.DockFunction.Music, !0)), [2]
                        })
                    })
                }, e.prototype._onDestroy = function() {
                    return c(this, void 0, void 0, function() {
                        return u(this, function() {
                            return f.EventSystem.Event(f.DockFunction.Sound).Remove(this.SetMute, this), f.EventSystem.Event(f.DockFunction.Music).Remove(this.Show, this), [2]
                        })
                    })
                }, e.prototype.Show = function() {
                    var t = this;
                    s.AudioMgr.Instance.Play("open_page", !1, 1), this.m_nodeRoot.active = !0, this.SetMute(SS.Common.GameEnvironment.IsMute), f.EventSystem.Event(f.SystemMsg.Open).Notify(this.m_nodeRoot, cc.size(720, 400), cc.size(680, 400), 150, function() {
                        t.Close()
                    });
                    var e = a.default.GetCookie(a.CookieKey.MusicIndex);
                    null == e && (e = "0"), this.m_MusicToggleContainer.toggleItems[Number(e)].isChecked = !0
                }, e.prototype.Close = function() {
                    if (this.m_nodeRoot.active = !1, s.AudioMgr.Instance.Play("Btn_Select_n_v01", !1, 1), this.m_showNewFlag) {
                        var t = a.default.GetCookie(a.CookieKey.MusicIndex);
                        null != t && "0" != t || (this.m_nodeNew.active = !1, f.EventSystem.Event(f.Music.SaveNewMusicName).Notify(), f.EventSystem.Event(f.Menu.SetDockButtonNew).Notify(f.DockFunction.Music, !1))
                    }
                    f.EventSystem.Event(f.SystemMsg.Close).Notify()
                }, e.prototype.OnClickMusicBtn = function(t) {
                    var e = t.node.name.toString();
                    console.warn("[MusicSetting] test, OnClickMusicBtn, target = " + t.node.name.toString() + ", musicIndex = " + e), a.default.SetCookie(a.CookieKey.MusicIndex, e), l.ConnectPanelMgr.Instance.ShowConnectPanel(9), f.EventSystem.Event(f.Music.PlayMusic).Notify(this.PlayMusicFinished.bind(this)), 0 == Number(e) && this.m_showNewFlag && (this.m_nodeNew.active = !1, f.EventSystem.Event(f.Music.SaveNewMusicName).Notify(), f.EventSystem.Event(f.Menu.SetDockButtonNew).Notify(f.DockFunction.Music, !1))
                }, e.prototype.PlayMusicFinished = function() {
                    l.ConnectPanelMgr.Instance.DisableConnectPanel(9)
                }, e.prototype.SetMute = function(t) {
                    console.warn("[MusicSetting] \u8a2d\u5b9a\u662f\u5426\u975c\u97f3 = " + t), this.m_MusicToggleContainer.toggleItems.forEach(function(e) {
                        e.interactable = !t
                    }), this.m_nodeAryToggleContainerElement.forEach(function(e) {
                        e.color = t ? cc.Color.GRAY : cc.Color.WHITE
                    })
                }, r([p(cc.Node)], e.prototype, "m_nodeRoot", void 0), r([p(cc.Node)], e.prototype, "m_nodeNew", void 0), r([p({
                    type: cc.ToggleContainer,
                    displayName: "\u9078\u55ae\u7fa4,\u5b50\u9078\u55ae\u7bc0\u9ede(0-3)\u4e0d\u53ef\u6539\u540d!!"
                })], e.prototype, "m_MusicToggleContainer", void 0), r([h], e)
            }(m.default);
        n.default = v, cc._RF.pop()
    }, {
        "../../../LobbyCommon/Component/AudioMgr": void 0,
        "../../../LobbyCommon/Component/CookieCtrl": void 0,
        "../../../LobbyCommon/Connect/Script/ConnectPanelMgr": void 0,
        "../../../LobbyCommon/Helper/EventSystem": void 0,
        "../../../LobbyCommon/ModuleBase": void 0
    }]
}, {}, ["MusicSetting"]);