window.__require = function t(e, n, o) {
    function i(s, r) {
        if (!n[s]) {
            if (!e[s]) {
                var u = s.split("/");
                if (u = u[u.length - 1], !e[u]) {
                    var a = "function" == typeof __require && __require;
                    if (!r && a) return a(u, !0);
                    if (c) return c(u, !0);
                    throw new Error("Cannot find module '" + s + "'")
                }
                s = u
            }
            var l = n[s] = {
                exports: {}
            };
            e[s][0].call(l.exports, function(t) {
                return i(e[s][1][t] || t)
            }, l, l.exports, t, e, n, o)
        }
        return n[s].exports
    }
    for (var c = "function" == typeof __require && __require, s = 0; s < o.length; s++) i(o[s]);
    return i
}({
    DockMgr: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "21624PIaZ5BgIG5rVSHWX/r", "DockMgr");
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
            c = this && this.__decorate || function(t, e, n, o) {
                var i, c = arguments.length,
                    s = c < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (c < 3 ? i(s) : c > 3 ? i(e, n, s) : i(e, n)) || s);
                return c > 3 && s && Object.defineProperty(e, n, s), s
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("../../../Helper/EventSystem"),
            r = cc._decorator,
            u = r.ccclass,
            a = r.property,
            l = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.dockName = "", e.dock = null, e.dockShow = null, e.dockHide = null, e
                }
                return i(e, t), e.prototype.onLoad = function() {
                    s.EventSystem.Event(s.Menu.OpenDock).Insert(this.OpenDock, this), s.EventSystem.Event(s.Menu.CloseDock).Insert(this.CloseDock, this), this.CloseDock(this.dockName)
                }, e.prototype.onDestroy = function() {
                    s.EventSystem.Event(s.Menu.OpenDock).Remove(this.OpenDock, this), s.EventSystem.Event(s.Menu.CloseDock).Remove(this.CloseDock, this)
                }, e.prototype.OpenDock = function(t) {
                    t === this.dockName && (console.log("[" + this.dockName + "] Open"), this.dock.play(this.dockShow.name))
                }, e.prototype.CloseDock = function(t) {
                    t === this.dockName && (console.log("[" + this.dockName + "] Close"), this.dock.play(this.dockHide.name))
                }, e.prototype.OnClickOpen = function() {
                    console.log("[" + this.dockName + "] On Open"), s.EventSystem.Event(s.Menu.OpenDock).Notify(this.dockName)
                }, e.prototype.OnClickClose = function() {
                    console.log("[" + this.dockName + "] On Close"), s.EventSystem.Event(s.Menu.CloseDock).Notify(this.dockName)
                }, c([a({
                    displayName: "Dock \u7684\u540d\u5b57(\u5340\u5225\u591a Dock \u7528)"
                })], e.prototype, "dockName", void 0), c([a({
                    type: cc.Animation,
                    displayName: "\u8ca0\u8cac\u8868\u6f14\u958b\u95dc\u7684\u7269\u4ef6"
                })], e.prototype, "dock", void 0), c([a({
                    type: cc.AnimationClip,
                    displayName: "\u6253\u958b\u7684\u52d5\u756b"
                })], e.prototype, "dockShow", void 0), c([a({
                    type: cc.AnimationClip,
                    displayName: "\u95dc\u9589\u7684\u52d5\u756b"
                })], e.prototype, "dockHide", void 0), c([u], e)
            }(cc.Component);
        n.default = l, cc._RF.pop()
    }, {
        "../../../Helper/EventSystem": void 0
    }],
    MenuButton: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "8e2fdYkc4VH9KMHRK3aJMXm", "MenuButton");
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
            c = this && this.__decorate || function(t, e, n, o) {
                var i, c = arguments.length,
                    s = c < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (c < 3 ? i(s) : c > 3 ? i(e, n, s) : i(e, n)) || s);
                return c > 3 && s && Object.defineProperty(e, n, s), s
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("../../../Helper/EventSystem"),
            r = t("./MenuMgr"),
            u = cc._decorator,
            a = u.ccclass,
            l = u.property,
            p = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.btnType = r.MenuBtnType.ACCOUNT, e.customName = "", e.button = null, e.closeDock = !0, e.dockName = "", e.lock = !1, e.animation = null, e.lockAnimClip = null, e.nodeNew = null, e.dockFunction = null, e
                }
                return i(e, t), e.prototype.onLoad = function() {
                    this.dockFunction = r.default.Transform(this.btnType);
                    var t = new cc.Component.EventHandler;
                    t.target = this.node, t.component = "MenuButton", t.handler = "OnClick", this.button.clickEvents = [], this.button.clickEvents.push(t), s.EventSystem.Event(s.Menu.SetDockButton).Insert(this.SetStatus, this), s.EventSystem.Event(s.Menu.SetDockButtonNew).Insert(this.SetNew, this)
                }, e.prototype.onDestroy = function() {
                    this.button.clickEvents = [], s.EventSystem.Event(s.Menu.SetDockButton).Remove(this.SetStatus, this), s.EventSystem.Event(s.Menu.SetDockButtonNew).Remove(this.SetNew, this)
                }, e.prototype.OnClick = function() {
                    this.lock ? this.LockAnimation() : (console.log("Trigger " + this.dockFunction), this.btnType !== r.MenuBtnType.Custom ? s.EventSystem.Event(this.dockFunction).Notify() : s.EventSystem.Event(this.customName).Notify(), this.closeDock && s.EventSystem.Event(s.Menu.CloseDock).Notify(this.dockName))
                }, e.prototype.SetStatus = function(t, e, n) {
                    t !== this.customName && t !== this.dockFunction || (this.node.active = e, this.button.interactable = n)
                }, e.prototype.SetNew = function(t, e) {
                    t !== this.customName && t !== this.dockFunction || (this.nodeNew.active = e)
                }, e.prototype.LockAnimation = function() {
                    this.button.interactable = !1, this.animation.on("finished", this.AnimationEnd, this), this.animation.play(this.lockAnimClip.name, 0)
                }, e.prototype.AnimationEnd = function() {
                    this.animation.off("finished", this.AnimationEnd, this), this.button.interactable = !0
                }, c([l({
                    type: cc.Enum(r.MenuBtnType),
                    displayName: "\u6309\u9215\u529f\u80fd"
                })], e.prototype, "btnType", void 0), c([l({
                    displayName: "\u6309\u9215\u529f\u80fd",
                    visible: function() {
                        return this.btnType === r.MenuBtnType.Custom
                    }
                })], e.prototype, "customName", void 0), c([l({
                    type: cc.Button,
                    displayName: "\u6309\u9215"
                })], e.prototype, "button", void 0), c([l({
                    displayName: "\u662f\u5426\u6536\u5408 Dock"
                })], e.prototype, "closeDock", void 0), c([l({
                    displayName: "Dock \u540d\u5b57",
                    visible: function() {
                        return !0 === this.closeDock
                    }
                })], e.prototype, "dockName", void 0), c([l({
                    displayName: "\u9396\u5b9a"
                })], e.prototype, "lock", void 0), c([l({
                    type: cc.Animation,
                    displayName: "\u52d5\u756b"
                })], e.prototype, "animation", void 0), c([l({
                    type: cc.AnimationClip,
                    displayName: "\u6309\u9215"
                })], e.prototype, "lockAnimClip", void 0), c([l({
                    type: cc.Node,
                    displayName: "\u9396\u5b9a"
                })], e.prototype, "nodeNew", void 0), c([a], e)
            }(cc.Component);
        n.default = p, cc._RF.pop()
    }, {
        "../../../Helper/EventSystem": void 0,
        "./MenuMgr": "MenuMgr"
    }],
    MenuMgr: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "05030Z8suxPZ64IvP2tAibW", "MenuMgr");
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
            c = this && this.__decorate || function(t, e, n, o) {
                var i, c = arguments.length,
                    s = c < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (c < 3 ? i(s) : c > 3 ? i(e, n, s) : i(e, n)) || s);
                return c > 3 && s && Object.defineProperty(e, n, s), s
            },
            s = this && this.__awaiter || function(t, e, n, o) {
                return new(n || (n = Promise))(function(i, c) {
                    function s(t) {
                        try {
                            u(o.next(t))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function r(t) {
                        try {
                            u(o.throw(t))
                        } catch (e) {
                            c(e)
                        }
                    }

                    function u(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof n ? e : new n(function(t) {
                            t(e)
                        })).then(s, r)
                    }
                    u((o = o.apply(t, e || [])).next())
                })
            },
            r = this && this.__generator || function(t, e) {
                var n, o, i, c, s = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
                    },
                    trys: [],
                    ops: []
                };
                return c = {
                    next: r(0),
                    throw: r(1),
                    return: r(2)
                }, "function" == typeof Symbol && (c[Symbol.iterator] = function() {
                    return this
                }), c;

                function r(t) {
                    return function(e) {
                        return u([t, e])
                    }
                }

                function u(c) {
                    if (n) throw new TypeError("Generator is already executing.");
                    for (; s;) try {
                        if (n = 1, o && (i = 2 & c[0] ? o.return : c[0] ? o.throw || ((i = o.return) && i.call(o), 0) : o.next) && !(i = i.call(o, c[1])).done) return i;
                        switch (o = 0, i && (c = [2 & c[0], i.value]), c[0]) {
                            case 0:
                            case 1:
                                i = c;
                                break;
                            case 4:
                                return s.label++, {
                                    value: c[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, o = c[1], c = [0];
                                continue;
                            case 7:
                                c = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = s.trys).length > 0 && i[i.length - 1]) && (6 === c[0] || 2 === c[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === c[0] && (!i || c[1] > i[0] && c[1] < i[3])) {
                                    s.label = c[1];
                                    break
                                }
                                if (6 === c[0] && s.label < i[1]) {
                                    s.label = i[1], i = c;
                                    break
                                }
                                if (i && s.label < i[2]) {
                                    s.label = i[2], s.ops.push(c);
                                    break
                                }
                                i[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        c = e.call(t, s)
                    } catch (r) {
                        c = [6, r], o = 0
                    } finally {
                        n = i = 0
                    }
                    if (5 & c[0]) throw c[1];
                    return {
                        value: c[0] ? c[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        }), n.MenuBtnType = void 0;
        var u, a = t("../../../Helper/EventSystem"),
            l = t("../../../ModuleBase"),
            p = cc._decorator,
            y = p.ccclass;
        p.property,
            function(t) {
                t[t.BackToLobby = 0] = "BackToLobby", t[t.Menu = 1] = "Menu", t[t.SOUND = 2] = "SOUND", t[t.ACCOUNT = 3] = "ACCOUNT", t[t.JACKPOTWINNER = 4] = "JACKPOTWINNER", t[t.GAMEHISTORY = 5] = "GAMEHISTORY", t[t.INFO = 6] = "INFO", t[t.LOGOUT = 7] = "LOGOUT", t[t.FULLSCREEN = 8] = "FULLSCREEN", t[t.NEWS = 9] = "NEWS", t[t.Custom = 10] = "Custom", t[t.Music = 11] = "Music"
            }(u = n.MenuBtnType || (n.MenuBtnType = {}));
        var h = function(t) {
            function e() {
                var e = null !== t && t.apply(this, arguments) || this;
                return e.isSupportFullScreen = !0, e
            }
            var n;
            return i(e, t), n = e, e.prototype._onLoad = function() {
                return s(this, void 0, void 0, function() {
                    return r(this, function() {
                        return (cc.sys.os == cc.sys.OS_IOS || cc.sys.os == cc.sys.OS_WINDOWS || "ucbrowser" == cc.sys.browserType && cc.sys.isMobile) && (this.isSupportFullScreen = !1), this.isSupportFullScreen && (JSUtility.FullScreen.OnFullScreenChange = this.SetFullScreenBtn.bind(this), this.SetFullScreenBtn(JSUtility.FullScreen.IsFullScreen())), a.EventSystem.Event(a.Menu.SetMenuStatus).Insert(this.SetMenuStatus, this), [2]
                    })
                })
            }, e.prototype._onDestroy = function() {
                return s(this, void 0, void 0, function() {
                    return r(this, function() {
                        return this.DisableMenuBtnList = [], a.EventSystem.Event(a.Menu.SetMenuStatus).Remove(this.SetMenuStatus, this), [2]
                    })
                })
            }, e.prototype._start = function() {
                return s(this, void 0, void 0, function() {
                    return r(this, function() {
                        return a.EventSystem.Event(a.Menu.CloseDock).Notify(), a.EventSystem.Event(a.Menu.SetSwitch).Notify(a.DockFunction.Sound, SS.Common.GameEnvironment.IsMute), [2]
                    })
                })
            }, e.prototype.SetDisableMenuBtn = function(t) {
                this.DisableMenuBtnList = t
            }, e.prototype.SetBtnStateByCustom = function(t, e, o) {
                this.DisableMenuBtnList && -1 !== this.DisableMenuBtnList.findIndex(function(e) {
                    return e === u[t]
                }) && (e = !1, o = !1), t != u.FULLSCREEN || this.isSupportFullScreen || (e = !1, o = !1);
                var i = n.Transform(t);
                a.EventSystem.Event(a.Menu.SetDockButton).Notify(i, e, o)
            }, e.prototype.SetMenuStatus = function(t) {
                switch (this.SetBtnStateByCustom(u.Menu, !0, !0), this.SetBtnStateByCustom(u.BackToLobby, !0, !0), this.SetBtnStateByCustom(u.SOUND, !0, !0), this.SetBtnStateByCustom(u.JACKPOTWINNER, !0, !0), this.SetBtnStateByCustom(u.ACCOUNT, !0, !0), this.SetBtnStateByCustom(u.INFO, !0, !0), this.SetBtnStateByCustom(u.LOGOUT, !0, !0), this.SetBtnStateByCustom(u.FULLSCREEN, !0, !0), this.SetBtnStateByCustom(u.NEWS, !0, !0), t) {
                    case a.MenuStatus.InLobbyNormal:
                        this.SetBtnStateByCustom(u.BackToLobby, !1, !1), this.SetBtnStateByCustom(u.ACCOUNT, !0, !0), this.SetBtnStateByCustom(u.JACKPOTWINNER, !0, !0), this.SetBtnStateByCustom(u.INFO, !1, !1);
                        break;
                    case a.MenuStatus.InLobbyDisabled:
                        this.SetBtnStateByCustom(u.INFO, !1, !1), this.SetBtnStateByCustom(u.JACKPOTWINNER, !0, !1), this.SetBtnStateByCustom(u.ACCOUNT, !0, !1), this.SetBtnStateByCustom(u.NEWS, !0, !1), this.SetBtnStateByCustom(u.BackToLobby, !1, !1), this.SetBtnStateByCustom(u.Menu, !0, !1);
                        break;
                    case a.MenuStatus.InGameNormal:
                        this.SetBtnStateByCustom(u.ACCOUNT, !1, !1), this.SetBtnStateByCustom(u.JACKPOTWINNER, !0, !0), this.SetBtnStateByCustom(u.LOGOUT, !1, !1), this.SetBtnStateByCustom(u.NEWS, !1, !1);
                        break;
                    case a.MenuStatus.InGameDisabled:
                        this.SetBtnStateByCustom(u.ACCOUNT, !1, !1), this.SetBtnStateByCustom(u.LOGOUT, !1, !1), this.SetBtnStateByCustom(u.INFO, !0, !1), this.SetBtnStateByCustom(u.NEWS, !0, !1), this.SetBtnStateByCustom(u.Menu, !0, !1);
                        break;
                    case a.MenuStatus.GuestLogin:
                        this.SetBtnStateByCustom(u.BackToLobby, !1, !1), this.SetBtnStateByCustom(u.ACCOUNT, !1, !1), this.SetBtnStateByCustom(u.JACKPOTWINNER, !0, !0), this.SetBtnStateByCustom(u.INFO, !1, !1)
                }
            }, e.prototype.OnClickedSound = function() {
                SS.Common.GameEnvironment.IsMute = !SS.Common.GameEnvironment.IsMute
            }, e.prototype.OnClickedFullScreen = function() {
                JSUtility.FullScreen.SetFullScreen()
            }, e.prototype.SetFullScreenBtn = function(t) {
                a.EventSystem.Event(a.Menu.SetSwitch).Notify(a.DockFunction.FullScreen, t)
            }, e.Transform = function(t) {
                switch (t) {
                    case u.BackToLobby:
                        return a.DockFunction.BackToLobby;
                    case u.ACCOUNT:
                        return a.DockFunction.Account;
                    case u.SOUND:
                        return a.DockFunction.Sound;
                    case u.JACKPOTWINNER:
                        return a.DockFunction.JPHistory;
                    case u.INFO:
                        return a.DockFunction.Info;
                    case u.LOGOUT:
                        return a.DockFunction.Logout;
                    case u.FULLSCREEN:
                        return a.DockFunction.FullScreen;
                    case u.NEWS:
                        return a.DockFunction.News;
                    case u.Music:
                        return a.DockFunction.Music;
                    default:
                        return null
                }
            }, n = c([y], e)
        }(l.default);
        n.default = h, cc._RF.pop()
    }, {
        "../../../Helper/EventSystem": void 0,
        "../../../ModuleBase": void 0
    }],
    MenuSwitch: [function(t, e, n) {
        "use strict";
        cc._RF.push(e, "b86c3+73fpER5lcONCJ8u6n", "MenuSwitch");
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
            c = this && this.__decorate || function(t, e, n, o) {
                var i, c = arguments.length,
                    s = c < 3 ? e : null === o ? o = Object.getOwnPropertyDescriptor(e, n) : o;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, n, o);
                else
                    for (var r = t.length - 1; r >= 0; r--)(i = t[r]) && (s = (c < 3 ? i(s) : c > 3 ? i(e, n, s) : i(e, n)) || s);
                return c > 3 && s && Object.defineProperty(e, n, s), s
            };
        Object.defineProperty(n, "__esModule", {
            value: !0
        });
        var s = t("../../../Helper/EventSystem"),
            r = t("./MenuButton"),
            u = t("./MenuMgr"),
            a = cc._decorator,
            l = a.ccclass,
            p = a.property,
            y = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.switchOn = null, e.switchOff = null, e._enable = !0, e
                }
                return i(e, t), e.prototype.onLoad = function() {
                    this.dockFunction = u.default.Transform(this.btnType);
                    var t = new cc.Component.EventHandler;
                    t.target = this.node, t.component = "MenuSwitch", t.handler = "OnClick", this.button.clickEvents = [], this.button.clickEvents.push(t), s.EventSystem.Event(s.Menu.SetDockButton).Insert(this.SetStatus, this), s.EventSystem.Event(s.Menu.SetSwitch).Insert(this.SetSwitch, this)
                }, e.prototype.onDestroy = function() {
                    this.button.clickEvents = [], s.EventSystem.Event(s.Menu.SetDockButton).Remove(this.SetStatus, this), s.EventSystem.Event(s.Menu.SetSwitch).Remove(this.SetSwitch, this)
                }, e.prototype.OnClick = function() {
                    this.SetSwitch(this.dockFunction, !this._enable), console.log("Trigger " + this.dockFunction + ": " + this._enable), this.dockFunction !== s.DockFunction.Custom ? s.EventSystem.Event(this.dockFunction).Notify(this._enable) : s.EventSystem.Event(this.customName).Notify(this._enable), this.closeDock && s.EventSystem.Event(s.Menu.CloseDock).Notify()
                }, e.prototype.SetSwitch = function(t, e) {
                    t !== this.dockFunction && t !== this.customName || (console.log("[" + this.name + "] Set Switch To " + e), this._enable = e, this.switchOn.active = e, this.switchOff.active = !e)
                }, c([p({
                    type: cc.Node,
                    displayName: "\u958b\u95dc\u6253\u958b\u7684\u7bc0\u9ede"
                })], e.prototype, "switchOn", void 0), c([p({
                    type: cc.Node,
                    displayName: "\u958b\u95dc\u95dc\u9589\u7684\u7bc0\u9ede"
                })], e.prototype, "switchOff", void 0), c([l], e)
            }(r.default);
        n.default = y, cc._RF.pop()
    }, {
        "../../../Helper/EventSystem": void 0,
        "./MenuButton": "MenuButton",
        "./MenuMgr": "MenuMgr"
    }]
}, {}, ["DockMgr", "MenuButton", "MenuMgr", "MenuSwitch"]);