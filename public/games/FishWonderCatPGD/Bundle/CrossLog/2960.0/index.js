window.__require = function t(e, o, n) {
    function r(s, a) {
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
                return r(e[s][1][t] || t)
            }, l, l.exports, t, e, o, n)
        }
        return o[s].exports
    }
    for (var i = "function" == typeof __require && __require, s = 0; s < n.length; s++) r(n[s]);
    return r
}({
    CrossLog: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "bac061sDXxMK6cMdwZ1NMU3", "CrossLog");
        var n, r = this && this.__extends || (n = function(t, e) {
                return (n = Object.setPrototypeOf || {
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
                n(t, e), t.prototype = null === e ? Object.create(e) : (o.prototype = e.prototype, new o)
            }),
            i = this && this.__decorate || function(t, e, o, n) {
                var r, i = arguments.length,
                    s = i < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) s = Reflect.decorate(t, e, o, n);
                else
                    for (var a = t.length - 1; a >= 0; a--)(r = t[a]) && (s = (i < 3 ? r(s) : i > 3 ? r(e, o, s) : r(e, o)) || s);
                return i > 3 && s && Object.defineProperty(e, o, s), s
            },
            s = this && this.__awaiter || function(t, e, o, n) {
                return new(o || (o = Promise))(function(r, i) {
                    function s(t) {
                        try {
                            c(n.next(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function a(t) {
                        try {
                            c(n.throw(t))
                        } catch (e) {
                            i(e)
                        }
                    }

                    function c(t) {
                        var e;
                        t.done ? r(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(s, a)
                    }
                    c((n = n.apply(t, e || [])).next())
                })
            },
            a = this && this.__generator || function(t, e) {
                var o, n, r, i, s = {
                    label: 0,
                    sent: function() {
                        if (1 & r[0]) throw r[1];
                        return r[1]
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
                        if (o = 1, n && (r = 2 & i[0] ? n.return : i[0] ? n.throw || ((r = n.return) && r.call(n), 0) : n.next) && !(r = r.call(n, i[1])).done) return r;
                        switch (n = 0, r && (i = [2 & i[0], r.value]), i[0]) {
                            case 0:
                            case 1:
                                r = i;
                                break;
                            case 4:
                                return s.label++, {
                                    value: i[1],
                                    done: !1
                                };
                            case 5:
                                s.label++, n = i[1], i = [0];
                                continue;
                            case 7:
                                i = s.ops.pop(), s.trys.pop();
                                continue;
                            default:
                                if (!(r = (r = s.trys).length > 0 && r[r.length - 1]) && (6 === i[0] || 2 === i[0])) {
                                    s = 0;
                                    continue
                                }
                                if (3 === i[0] && (!r || i[1] > r[0] && i[1] < r[3])) {
                                    s.label = i[1];
                                    break
                                }
                                if (6 === i[0] && s.label < r[1]) {
                                    s.label = r[1], r = i;
                                    break
                                }
                                if (r && s.label < r[2]) {
                                    s.label = r[2], s.ops.push(i);
                                    break
                                }
                                r[2] && s.ops.pop(), s.trys.pop();
                                continue
                        }
                        i = e.call(t, s)
                    } catch (a) {
                        i = [6, a], n = 0
                    } finally {
                        o = r = 0
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
        }), o.CrossLog = void 0;
        var c = t("../../../LobbyCommon/Helper/EventSystem"),
            u = t("../../../LobbyCommon/ModuleBase"),
            l = t("../../../LobbyCommon/Net/LobbyClient"),
            f = cc._decorator,
            h = f.ccclass,
            p = (f.property, function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.publicKey = "MIIBIjANBgkqhkiG9w0BAQEFAAOCAQ8AMIIBCgKCAQEAm57PpzGKcstTbOlDuAs0Ai5PEFd0leISof3BSdIWrf8KjmMK04bM/U5vhK0Q4RTnLwTjtzJyPeCw353I067f1ayYghwb3EB63vkoLepOYH3H6bY5Ag4POIXHyMspJEu1Rod48tHG4YZDT1JxhOWktwNebLvtohm0a+r/XfHJROm+IAn4feyeaoaWa3NOPFVdPZ05CPAy4gVFBhdrnLsYVT3bREFAcNJZl9BCNYFneQHE4MtPItAjWVKXRsfXX6eJsAKdzlzo4sg6YQCcs4s5W93wfefMdzjRB17vvcrGmSOdJUxImqpIfC3H7JtItphI8fvZ60bJ+KA9DucO3A5PywIDAQAB", e._instance = null, e._src = "", e._iFrame = null, e._onLoadHandler = null, e._waitResult = null, e._cookie = "", e._timeout = 10, e._msg = "", e
                }
                var o;
                return r(e, t), o = e, e.prototype._onLoad = function() {
                    return s(this, void 0, Promise, function() {
                        return a(this, function() {
                            return c.EventSystem.Event(c.LobbyState.EnterLobby).Insert(this.CrossLog, this), [2]
                        })
                    })
                }, e.prototype._onDestroy = function() {
                    return s(this, void 0, void 0, function() {
                        return a(this, function() {
                            return c.EventSystem.Event(c.LobbyState.EnterLobby).Remove(this.CrossLog, this), [2]
                        })
                    })
                }, e.prototype._downloadResources = function() {
                    return s(this, void 0, void 0, function() {
                        var t, e, o, n, r;
                        return a(this, function(i) {
                            switch (i.label) {
                                case 0:
                                    return i.trys.push([0, 2, , 3]), t = SS.Common.GameEnvironment.ProjectSetting.Modules.CrossLog.ServerHOST, this._timeout = SS.Common.GameEnvironment.ProjectSetting.Modules.CrossLog.Timeout, e = Date.now(), o = this, [4, this.GetCookie(t, "Extra")];
                                case 1:
                                    return o._cookie = i.sent(), n = Date.now(), this._msg = (n - e).toString(), [3, 3];
                                case 2:
                                    return r = i.sent(), console.warn("[CrossLog] Exception: ", r), this._cookie = "error", [3, 3];
                                case 3:
                                    return this.Close(), this.Destroy(), [2]
                            }
                        })
                    })
                }, e.prototype.CrossLog = function(t, e, o) {
                    return s(this, void 0, void 0, function() {
                        var n, r, i;
                        return a(this, function() {
                            if ("CrossLog" !== t) return [2];
                            if (!o) return console.error("No On Enter Lobby Callback"), [2];
                            if (this.SetMessageCookie(), e) try {
                                console.log("[CrossLog] cookie", this._cookie), n = window.location.protocol + "//" + SS.Common.GameEnvironment.ProjectSetting.Modules.Log.ServerHOST, (r = new ArkSDK.ArkClient(n)).clone(l.LobbyClient.Instance.GetUserClient.GetPinClient), i = this.messageContent, null == this._cookie || "" == this._cookie ? (i.Extra = this.NoData(), i.Status = "NoData") : "error" == this._cookie ? (i.Extra = this.NoData(), i.Status = "NoCookie") : (i.Extra = this._cookie, i.Status = "GetCookie"), r.send_cmd("log", "CrossLog", i, this.SendMessageComplete.bind(this), null)
                            } catch (s) {
                                console.warn(s)
                            }
                            return o(), [2]
                        })
                    })
                }, e.prototype.SendMessageComplete = function(t, e) {
                    console.log("[CrossLog] status", t), console.log("[CrossLog] data", e)
                }, e.prototype.Init = function(t) {
                    return void 0 === t && (t = "cookie"), s(this, void 0, void 0, function() {
                        return a(this, function() {
                            return this._instance || (this._instance = new o), this._instance._iFrame || (this._instance._iFrame = document.getElementById(t)), [2]
                        })
                    })
                }, e.prototype.GetCookie = function(t, e) {
                    return s(this, void 0, Promise, function() {
                        var o, n, r, i, s = this;
                        return a(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    return [4, this.Init()];
                                case 1:
                                    return a.sent(), o = !0, [4, new Promise(function(e) {
                                        try {
                                            setTimeout(function() {
                                                o && e("error")
                                            }, 1e3 * s._timeout), s._instance._onLoadHandler = s.onHTMLLoad.bind(s, e), window.addEventListener("message", s._instance._onLoadHandler), s._instance._src = t, s._instance._iFrame.src = t
                                        } catch (n) {
                                            return console.warn(n), "error"
                                        }
                                    })];
                                case 2:
                                    return n = a.sent(), o = !1, "error" == n ? [2, "error"] : (r = !0, [4, new Promise(function(o) {
                                        try {
                                            setTimeout(function() {
                                                r && o("error")
                                            }, 1e3 * s._timeout), s._instance._waitResult = s.WaitResult.bind(s, o), window.addEventListener("message", s._instance._waitResult), s._instance._iFrame.contentWindow.postMessage(e, t)
                                        } catch (n) {
                                            return console.warn(n), ""
                                        }
                                    })]);
                                case 3:
                                    return i = a.sent(), r = !1, [2, i]
                            }
                        })
                    })
                }, e.prototype.onHTMLLoad = function(t) {
                    window.removeEventListener("message", this._instance._onLoadHandler), console.log("[CrossLog] On Load"), t()
                }, e.prototype.WaitResult = function(t, e) {
                    window.removeEventListener("message", this._instance._waitResult), console.log("[CrossLog] Wait Result"), t(e.data)
                }, e.prototype.Close = function() {
                    this._instance && this._instance._iFrame && (this._instance._iFrame.src = "")
                }, e.prototype.Destroy = function() {
                    this._instance && this._instance._iFrame && (this._instance._iFrame.innerHTML = "")
                }, Object.defineProperty(e.prototype, "messageContent", {
                    get: function() {
                        var t = {
                            Logo: "MAGICCITY"
                        };
                        return t.KioskID = SS.Network.LoginModel.LoginInfo.kiosk_id, t.PinID = SS.Network.LoginModel.LoginInfo.pin_id, t
                    },
                    enumerable: !1,
                    configurable: !0
                }), e.prototype.SetMessageCookie = function() {
                    var t, e = new JSEncrypt;
                    e.setKey(this.publicKey), t = "MAGICCITY," + SS.Network.LoginModel.LoginInfo.kiosk_id + "," + SS.Network.LoginModel.LoginInfo.pin_id + "," + this.getDate();
                    var o = e.encrypt(JSON.stringify(t));
                    return JSUtility.IsSupportLocalStorage() ? localStorage.setItem("Extra", o) : JSUtility.IsSupportCookie() && (document.cookie = "Extra=" + o + ";"), o
                }, e.prototype.NoData = function() {
                    var t = new JSEncrypt;
                    return t.setKey(this.publicKey), t.encrypt(JSON.stringify(",,,"))
                }, e.prototype.getDate = function() {
                    return Date.prototype.getISOString = function() {
                        var t = function(t) {
                                return t < 10 ? "0" + t : t
                            },
                            e = this.getTimezoneOffset() / 60,
                            o = (this.setHours(this.getHours() - e), (e >= 0 ? "-" : "+") + t(Math.abs(e)) + ":00");
                        return this.getUTCFullYear() + "-" + t(this.getUTCMonth() + 1) + "-" + t(this.getUTCDate()) + "T" + t(this.getUTCHours()) + ":" + t(this.getUTCMinutes()) + ":" + t(this.getUTCSeconds()) + "." + (this.getUTCMilliseconds() / 1e3).toFixed(3).slice(2, 5) + o
                    }, (new Date).getISOString()
                }, o = i([h], e)
            }(u.default));
        o.CrossLog = p, cc._RF.pop()
    }, {
        "../../../LobbyCommon/Helper/EventSystem": void 0,
        "../../../LobbyCommon/ModuleBase": void 0,
        "../../../LobbyCommon/Net/LobbyClient": void 0
    }]
}, {}, ["CrossLog"]);