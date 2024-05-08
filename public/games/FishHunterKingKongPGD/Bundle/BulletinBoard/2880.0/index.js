window.__require = function t(e, o, n) {
    function i(a, s) {
        if (!o[a]) {
            if (!e[a]) {
                var l = a.split("/");
                if (l = l[l.length - 1], !e[l]) {
                    var c = "function" == typeof __require && __require;
                    if (!s && c) return c(l, !0);
                    if (r) return r(l, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = l
            }
            var u = o[a] = {
                exports: {}
            };
            e[a][0].call(u.exports, function(t) {
                return i(e[a][1][t] || t)
            }, u, u.exports, t, e, o, n)
        }
        return o[a].exports
    }
    for (var r = "function" == typeof __require && __require, a = 0; a < n.length; a++) i(n[a]);
    return i
}({
    BulletinBoardCategory: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "77495/vERFEG5lHn1kQLUdz", "BulletinBoardCategory");
        var n, i = this && this.__extends || (n = function(t, e) {
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
            r = this && this.__decorate || function(t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function(t, e, o, n) {
                return new(o || (o = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            l(n.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        try {
                            l(n.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(a, s)
                    }
                    l((n = n.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
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
                    return function(e) {
                        return l([t, e])
                    }
                }

                function l(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (s) {
                        r = [6, s], n = 0
                    } finally {
                        o = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.BulletinBoard = void 0;
        var l = t("./BulletinBoardMenu"),
            c = t("./BulletinBoardTab"),
            u = l.BulletinBoard.Menu,
            h = c.BulletinBoard.Tab,
            p = cc._decorator,
            d = p.ccclass,
            m = p.property;
        (function(t) {
            var e = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.m_firstTab = null, e
                }
                return i(e, t), e.prototype.onDestroy = function() {
                    SS.Common.ReleaseAsyncSource(), t.prototype.onDestroy.call(this)
                }, e.prototype.AddCategory = function(t, e) {
                    if (0 == t) this.SetTabData(this.m_firstTab, e, t), e.haveRedPoint && this.m_firstTab.ShowRedPoint();
                    else {
                        var o = this.CreateTab(e.id).getComponent(h);
                        this.SetTabData(o, e, t), e.haveRedPoint && o.ShowRedPoint()
                    }
                }, e.prototype.RemoveCategory = function(t) {
                    return a(this, void 0, void 0, function() {
                        var e;
                        return s(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return e = this.m_aryTabs.splice(t, 1)[0], this.m_layout.node.removeChild(e.node), this.m_aryTabs.forEach(function(t, e) {
                                        t.SetNormal(), t.node.setSiblingIndex(e)
                                    }), this.InitMaxNode(), this.m_strCurFocusID = "", this.m_layout.enabled = !0, this.m_layout.updateLayout(), [4, SS.Common.WaitForSeconds(.05)];
                                case 1:
                                    return o.sent(), this.m_layout.enabled = !1, this.m_aryTabs.length > this.m_numScrollEnableCount ? (this.m_scrollView.enabled = !0, this.m_nodeBalckShadow.active = !0) : (this.m_scrollView.enabled = !1, this.m_nodeBalckShadow.active = !1), [2]
                            }
                        })
                    })
                }, e.prototype.InitDone = function() {
                    return a(this, void 0, void 0, function() {
                        return s(this, function(t) {
                            switch (t.label) {
                                case 0:
                                    return this.InitMaxNode(), this.m_layout.enabled = !0, this.m_layout.updateLayout(), [4, SS.Common.WaitForSeconds(.05)];
                                case 1:
                                    return t.sent(), this.m_layout.enabled = !1, this.m_aryTabs.forEach(function(t) {
                                        t.SetNormal()
                                    }), this.OnClick(this.m_firstTab), this.m_strCurFocusID = this.m_firstTab.id, this.m_aryTabs.length > this.m_numScrollEnableCount ? (this.m_scrollView.enabled = !0, this.m_nodeBalckShadow.active = !0) : (this.m_scrollView.enabled = !1, this.m_nodeBalckShadow.active = !1), [2]
                            }
                        })
                    })
                }, e.prototype.DespawnAllTab = function() {
                    for (; this.m_aryTabs.length > 0;) {
                        var t = this.m_aryTabs.pop();
                        t && t.id == this.m_firstTab.id || (this.m_nodePool ? this.m_nodePool.put(t.node) : this.m_layout.node.removeChild(t.node))
                    }
                }, e.prototype.ClearTabs = function() {
                    this.DespawnAllTab()
                }, e.prototype.ShowRedPoint = function(t) {
                    this.m_aryTabs[t].ShowRedPoint()
                }, e.prototype.HideRedPoint = function(t) {
                    this.m_aryTabs[t].HideRedPoint()
                }, e.prototype.CustomClickEvent = function() {}, e.prototype.JumpToTab = function(t) {
                    var e = this;
                    if (!(t < 0 || t >= this.m_aryTabs.length)) {
                        var o = this.m_aryTabs[t];
                        o.SetFocus(this.m_aryTabs.length);
                        var n = this.m_aryTabs.find(function(t) {
                            return t.id == e.m_strCurFocusID
                        });
                        null != n && n.SetNormal(), this.m_strCurFocusID = o.id, this.m_scrollView.enabled && this.m_scrollView.scrollToOffset(this.moveOffsetValue(t), .25, !0)
                    }
                }, r([m(h)], e.prototype, "m_firstTab", void 0), r([d], e)
            }(u);
            t.Category = e
        })(o.BulletinBoard || (o.BulletinBoard = {})), cc._RF.pop()
    }, {
        "./BulletinBoardMenu": "BulletinBoardMenu",
        "./BulletinBoardTab": "BulletinBoardTab"
    }],
    BulletinBoardData: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "1fc123XsipEno8jeFIH35Im", "BulletinBoardData");
        var n, i = this && this.__extends || (n = function(t, e) {
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
        });
        Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.BulletinBoard = void 0,
            function(t) {
                var e = function() {
                    this.id = "", this.title = ""
                };
                t.BaseData = e;
                var o = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.callType = null, e.isShow = !0, e.isNeverClick = !0, e
                    }
                    return i(e, t), e
                }(e);
                t.TabData = o;
                var n = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.menuAry = null, e.haveRedPoint = !1, e
                    }
                    return i(e, t), e
                }(e);
                t.CategoryData = n;
                var r = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.type = a.SINGLE_TEXTURE, e.prefabName = "", e.data = null, e.nodePage = null, e
                    }
                    return i(e, t), e
                }(e);
                t.PageData = r;
                var a, s, l = function() {
                    function t(e) {
                        if (this.buttonType = s.NONE, this.buttonTitle = "", this.action = "", this.buttonTitle = e.ButtonText, e.ButtonAction) {
                            var o = e.ButtonAction.toUpperCase();
                            this.action = e.ButtonAction.substring(o.indexOf("=") + 1), this.buttonType = t.CheckButtonType(o)
                        } else this.buttonType = s.NONE
                    }
                    return t.CheckButtonType = function(t) {
                        return (t = t.toUpperCase()).indexOf("GAME_ID") > -1 ? s.SWITCH_GAME : t.indexOf("CUSTOM_ID") > -1 ? s.CUSTOM : t.indexOf("NEW_TAB") > -1 ? s.NEW_TAB : t.indexOf("REFRESH_URL") > -1 ? s.REFRESH_URL : t.indexOf("URL") > -1 ? s.URL : s.NONE
                    }, t
                }();
                t.ButtonData = l,
                    function(t) {
                        t[t.CUSTOM = 0] = "CUSTOM", t[t.SINGLE_TEXTURE = 1] = "SINGLE_TEXTURE", t[t.MULTIPLE_TEXTURE = 2] = "MULTIPLE_TEXTURE"
                    }(a = t.PageType || (t.PageType = {})),
                    function(t) {
                        t[t.NONE = -1] = "NONE", t[t.CUSTOM = 0] = "CUSTOM", t[t.SWITCH_GAME = 1] = "SWITCH_GAME", t[t.URL = 2] = "URL", t[t.NEW_TAB = 3] = "NEW_TAB", t[t.REFRESH_URL = 4] = "REFRESH_URL"
                    }(s = t.ButtonType || (t.ButtonType = {}))
            }(o.BulletinBoard || (o.BulletinBoard = {})), cc._RF.pop()
    }, {}],
    BulletinBoardIndicator: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d8f7epFW/5I8Z6svmwVdN4C", "BulletinBoardIndicator");
        var n, i = this && this.__extends || (n = function(t, e) {
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
            r = this && this.__decorate || function(t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.BulletinBoard = void 0;
        var a = cc._decorator,
            s = a.ccclass,
            l = a.property;
        (function(t) {
            var e = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.normalSpriteFrame = null, e.focusSpriteFrame = null, e.indicators = [], e
                }
                return i(e, t), e.prototype.Refresh = function(t) {
                    if (t > this.indicators.length)
                        for (var e = 0; e < t; e++) this.indicators[e] || (this.indicators[e] = this.CreateIndicator());
                    else if (t < this.indicators.length)
                        for (e = this.indicators.length - t; e > 0; --e) {
                            var o = this.indicators[e - 1];
                            this.node.removeChild(o.node), this.indicators.splice(e - 1, 1)
                        }
                }, e.prototype.CreateIndicator = function() {
                    var t = new cc.Node,
                        e = t.addComponent(cc.Sprite);
                    return e.spriteFrame = this.normalSpriteFrame, t.parent = this.node, e
                }, e.prototype.ChangeState = function(t) {
                    if (0 !== this.indicators.length && !(t >= this.indicators.length))
                        for (var e = 0; e < this.indicators.length; ++e) {
                            this.indicators[e].spriteFrame = e == t ? this.focusSpriteFrame : this.normalSpriteFrame
                        }
                }, r([l(cc.SpriteFrame)], e.prototype, "normalSpriteFrame", void 0), r([l(cc.SpriteFrame)], e.prototype, "focusSpriteFrame", void 0), r([s], e)
            }(cc.Component);
            t.Indicator = e
        })(o.BulletinBoard || (o.BulletinBoard = {})), cc._RF.pop()
    }, {}],
    BulletinBoardManager: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "e9dc4rJVJlJ+KTSktiNxfcp", "BulletinBoardManager");
        var n, i = this && this.__extends || (n = function(t, e) {
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
            r = this && this.__decorate || function(t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function(t, e, o, n) {
                return new(o || (o = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            l(n.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        try {
                            l(n.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(a, s)
                    }
                    l((n = n.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
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
                    return function(e) {
                        return l([t, e])
                    }
                }

                function l(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (s) {
                        r = [6, s], n = 0
                    } finally {
                        o = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var l, c = t("./BulletinBoardCategory"),
            u = t("./BulletinBoardMenu"),
            h = t("./BulletinBoardPage"),
            p = t("./BulletinBoardData"),
            d = c.BulletinBoard.Category,
            m = u.BulletinBoard.Menu,
            _ = h.BulletinBoard.Page,
            y = p.BulletinBoard.CategoryData,
            g = p.BulletinBoard.TabData,
            f = p.BulletinBoard.PageData,
            S = p.BulletinBoard.PageType,
            T = p.BulletinBoard.ButtonData,
            B = p.BulletinBoard.ButtonType,
            P = t("../../../Component/BundleCtrl"),
            C = t("../../../Component/AudioMgr"),
            v = t("../../../Net/LobbyClient"),
            b = t("../../../PopupMessage/Script/PopupMsgMgr"),
            w = t("../../../Net/ClickLog"),
            D = cc._decorator,
            I = D.ccclass,
            O = D.property;
        (function(t) {
            var e = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.m_root = null, e.m_category = null, e.m_menu = null, e.m_PageRoot = null, e.m_Loading = null, e.m_aryPageData = null, e.m_aryCategoryData = null, e.m_lastCategoryIndex = -1, e.m_curCategoryIndex = -1, e.m_curTabIndex = 0, e.m_curPageID = "", e.m_autoScrollDelayTime = 5, e.m_isAutoScrollRuning = !1, e.m_isHandHold = !1, e.m_isWaitForPage = !1, e.m_logoMode = -1, e.m_needPlayClickAudio = !1, e.m_strHotID = "hot", e.m_isShow = !1, e.m_isTestMode = !1, e
                }
                return i(e, t), e.prototype.onLoad = function() {
                    this.Init()
                }, e.prototype.onDestroy = function() {
                    SS.Common.ReleaseAsyncSource(), this.StopAutoScrollPage(), this.node.targetOff(this), this.m_aryPageData = null, this.m_aryCategoryData = null, this.m_curPageID = "", this.m_curCategoryIndex = -1, this.m_curTabIndex = 0, this.m_category.funcClicked = null, this.m_menu.funcClicked = null
                }, e.prototype.onEnable = function() {
                    this.SendCategoryJsonData()
                }, e.prototype.onDisable = function() {
                    if (console.log("[BulletinBoard]Disable:", this.m_isShow), this.m_isShow) {
                        var t = new cc.Event.EventCustom("close_news_board", !0);
                        this.node.dispatchEvent(t), this.Reset()
                    }
                }, e.prototype.Init = function() {
                    this.m_root.active = !1, this.m_category.Hide(), this.m_menu.Hide(), this.m_Loading.active = !1, this.m_aryPageData = [], this.m_aryCategoryData = [], this.m_isAutoScrollRuning = !1, this.m_curCategoryIndex = -1, this.m_lastCategoryIndex = -1, this.m_curTabIndex = -1, this.m_curPageID = "", this.m_category.funcClicked = this.OnCategoryTabClicked.bind(this), this.m_menu.funcClicked = this.OnMenuTabClicked.bind(this), this.m_vecPageHaveMenuPos = this.m_PageRoot.position, this.m_logoMode = window.gd_LogoMod, this.m_needPlayClickAudio = !1, this.node.active = !1
                }, e.prototype.Reset = function() {
                    for (this.m_root.active = !1, this.StopAutoScrollPage(), this.unscheduleAllCallbacks(), this.m_isShow = !1, this.node.targetOff(this), this.m_category.Exit(), this.m_menu.Exit(), this.m_category.Hide(), this.m_menu.Hide(), this.m_Loading.active = !1, this.m_aryCategoryData = [], this.m_isAutoScrollRuning = !1, this.m_curCategoryIndex = -1, this.m_lastCategoryIndex = -1, this.m_curTabIndex = -1, this.m_curPageID = "", this.m_needPlayClickAudio = !1, this.m_PageRoot.removeAllChildren(); this.m_aryPageData.length > 0;) {
                        var t = this.m_aryPageData.pop();
                        t.nodePage && (t.nodePage.Exit(), t.nodePage.destroy())
                    }
                    cc.log("[BulletinBoard] Reset Finished!")
                }, e.prototype.ShowCategoryContent = function(t, e) {
                    if (void 0 === e && (e = !1), console.warn("[BulletinBoard]Category <" + t + ">"), !e && this.m_curCategoryIndex > -1 && this.m_aryCategoryData[this.m_curCategoryIndex].id == t) return !1;
                    this.KillAutoScroll(), this.m_lastCategoryIndex = this.m_curCategoryIndex, this.m_curCategoryIndex = this.m_aryCategoryData.findIndex(function(e) {
                        return e.id == t
                    });
                    var o = this.m_aryCategoryData[this.m_curCategoryIndex];
                    return this.m_menu.Reset(o.menuAry), null == o.menuAry || 0 == o.menuAry.length ? (this.m_menu.Hide(), console.warn("[BulletinBoard]Category <" + t + "> menuAry : ", o.menuAry), this.ShowErrorMsg("C55", "This Category(" + t + ") doesn't had List Data", this.RemoveCurrentCategoryIndex.bind(this)), !1) : 0 == this.m_menu.length() ? (this.ShowPageByID(o.menuAry[0].id), this.m_menu.Hide(), this.m_PageRoot.setPosition(0, this.m_vecPageHaveMenuPos.y, this.m_vecPageHaveMenuPos.z), this.CheckCategoryRedPointStatus(o.menuAry[0].id), !0) : (this.m_needPlayClickAudio = !1, this.m_menu.Show(), this.m_menu.JumpToTab(0), this.m_PageRoot.setPosition(this.m_vecPageHaveMenuPos), this.m_aryCategoryData[this.m_curCategoryIndex].id == this.m_strHotID && this.m_menu.length() > 1 && this.StartAutoScroll(), !0)
                }, e.prototype.ShowPageByID = function(t) {
                    if (console.log("[BulletinBoard]ShowPageByID <" + t + ">"), t != this.m_curPageID) {
                        this.HideLastPage(this.m_curPageID);
                        var e = this.m_aryCategoryData[this.m_curCategoryIndex];
                        if (e.menuAry && e.menuAry.length > 0) {
                            var o = e.menuAry[this.m_curTabIndex];
                            if (!this.CheckPageTypeIsCustom(o.callType)) return void this.SendPopupJsonData(e.id, t)
                        }
                    }
                    var n = this.m_aryPageData.find(function(e) {
                        return e.id == t
                    });
                    null == n && (console.warn("[BulletinBoard]I can't find Page <" + t + "> data!"), (n = new f).id = t, o = this.m_aryCategoryData[this.m_curCategoryIndex].menuAry[this.m_curTabIndex], this.CheckPageTypeIsCustom(o.callType) && (n.type = S.CUSTOM, n.prefabName = "BulletinBoard_" + o.callType), this.m_aryPageData.push(n)), this.ShowPage(n)
                }, e.prototype.CheckPageTypeIsCustom = function(t) {
                    return !("image" == t)
                }, e.prototype.ShowPage = function(t) {
                    console.log("[BulletinBoard]ShowPage:", t), this.m_curPageID = t.id, null == t.nodePage ? this.CreatePage(t) : (this.CheckAutoScroll(t), t.nodePage.ResetData(t.data), t.nodePage.Show(), this.m_Loading.active = !1), this.m_needPlayClickAudio = !0
                }, e.prototype.HideLastPage = function(t) {
                    if (t.length > 0) {
                        var e = this.m_aryPageData.find(function(e) {
                            return e.id == t
                        });
                        if (null == e) return console.warn("[BulletinBoard]I can't find last <" + t + "> page data!"), void this.m_aryPageData.forEach(function(t) {
                            t.nodePage && t.nodePage.Hide()
                        });
                        e.nodePage && e.nodePage.Hide()
                    } else this.m_aryPageData.forEach(function(t) {
                        t.nodePage && t.nodePage.Hide()
                    })
                }, e.prototype.CreatePage = function(t) {
                    return a(this, void 0, void 0, function() {
                        var e, o, n, i;
                        return s(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    switch (e = "", o = !1, t.type) {
                                        case S.SINGLE_TEXTURE:
                                            e = "Prefabs/BulletinBoardSinglePopupPage";
                                            break;
                                        case S.MULTIPLE_TEXTURE:
                                            e = "Prefabs/BulletinBoardMultiplePage";
                                            break;
                                        case S.CUSTOM:
                                        default:
                                            e = "Prefabs/" + t.prefabName, o = !0
                                    }
                                    return [4, P.default.Instance.GetOtherPrefab("BulletinBoard", e)];
                                case 1:
                                    return n = r.sent(), (i = cc.instantiate(n)).parent = this.m_PageRoot, t.nodePage = i.getComponent(_), t.nodePage.SetData(t.id, t.data, this.OnPageSettingComplete.bind(this), this.OnPageBtnClicked.bind(this), this.OnPageShowErrorMsg.bind(this)), o && (t.nodePage.SetCustomData(this.m_logoMode, this.m_aryCategoryData[this.m_curCategoryIndex].id), this.m_Loading.active = !0), t.nodePage.Show(), this.CheckAutoScroll(t), [2]
                            }
                        })
                    })
                }, e.prototype.RemoveCurrentMenuTab = function() {
                    var t = this.m_aryCategoryData[this.m_curCategoryIndex].menuAry[this.m_curTabIndex].id;
                    this.RemoveTargetTabID(t)
                }, e.prototype.RemoveTargetTabID = function(t) {
                    return a(this, void 0, void 0, function() {
                        var e, o, n, i;
                        return s(this, function(r) {
                            switch (r.label) {
                                case 0:
                                    for (e = this.m_aryCategoryData[this.m_curCategoryIndex].id, o = -1, n = this.m_curCategoryIndex, i = 0; i < this.m_aryCategoryData.length; i++) - 1 != (o = this.m_aryCategoryData[i].menuAry.findIndex(function(e) {
                                        return e.id == t
                                    })) && (this.m_aryCategoryData[i].menuAry.splice(o, 1), 0 == this.m_aryCategoryData[i].menuAry.length && (this.m_aryCategoryData[i].id == e && (n = Math.max(this.m_curCategoryIndex - 1, 0)), this.m_aryCategoryData.splice(i, 1), this.m_category.RemoveCategory(i)));
                                    return [4, SS.Common.WaitForSeconds(.05)];
                                case 1:
                                    return r.sent(), cc.log("[BulletinBoard]RemoveTargetTabID<" + t + "> (new category: " + n + ")"), this.m_aryCategoryData.length > 0 ? (this.m_category.JumpToTab(n), this.ShowCategoryContent(this.m_aryCategoryData[n].id, !0)) : this.OnCloseClicked(), [2]
                            }
                        })
                    })
                }, e.prototype.RemoveCurrentCategoryIndex = function() {
                    this.RemoveTargetCategoryIndex(this.m_curCategoryIndex)
                }, e.prototype.RemoveTargetCategoryIndex = function(t) {
                    return a(this, void 0, void 0, function() {
                        var e;
                        return s(this, function(o) {
                            switch (o.label) {
                                case 0:
                                    return this.m_aryCategoryData.splice(t, 1), this.m_category.RemoveCategory(t), e = this.m_curCategoryIndex, t == this.m_curCategoryIndex && (e = Math.max(this.m_curCategoryIndex - 1, 0)), [4, SS.Common.WaitForSeconds(.05)];
                                case 1:
                                    return o.sent(), cc.log("[BulletinBoard]RemoveTargetCategoryID (new category: " + e + ")"), this.m_aryCategoryData.length > 0 ? (this.m_category.JumpToTab(e), this.ShowCategoryContent(this.m_aryCategoryData[e].id, !0)) : this.OnCloseClicked(), [2]
                            }
                        })
                    })
                }, e.prototype.SendCategoryJsonData = function() {
                    this.m_Loading.active = !0, this.m_isShow = !0, this.m_isTestMode ? this.OnClickTest() : v.LobbyClient.Instance.GetUserClient.GetPopupBillBoard(this.m_logoMode, this.RecvCategoryJsonData.bind(this))
                }, e.prototype.RecvCategoryJsonData = function(t, e) {
                    var o = this;
                    if (!this.CheckError("getPopupBillBoard", t, e)) try {
                        this.m_category.ClearTabs(), this.m_aryCategoryData = [];
                        var n = e.cmd_data.data,
                            i = null,
                            r = 0,
                            a = 0,
                            s = 0;
                        cc.log("[BulletinBoard]RecvCategoryJsonData: ", n), n.forEach(function(t) {
                            s = 0;
                            var e = new y;
                            if (e.id = t.TitleID, e.title = t.TitleName, t.hasOwnProperty("TitleInfo") && (i = t.TitleInfo).length > 0)
                                for (e.menuAry = [], r = 0; r < i.length; r++) {
                                    var n = i[r];
                                    if (!o.CheckKioskGame(n.bind_info)) {
                                        var l = new g;
                                        l.id = n.TagID, l.title = n.TagName, l.callType = n.TagType, l.isShow = n.TagShow, l.isNeverClick = !o.CheckCookieForRedPoint(l.id), e.menuAry.push(l), l.isNeverClick && s++
                                    }
                                }
                            e.menuAry.length > 0 && (s > 0 && (e.haveRedPoint = !0), o.m_aryCategoryData.push(e), o.m_category.AddCategory(a, e), a++)
                        }), i = null, n = null, this.m_root.active = !0, this.m_category.InitDone(), this.m_category.Show(), console.log("[BulletinBoard]\u6700\u5f8c", this.m_aryCategoryData)
                    } catch (l) {
                        console.error("Error!", l), this.ShowErrorMsg("C54", "Cmd 'getPopupBillBoard' is error")
                    }
                }, e.prototype.CheckKioskGame = function(t) {
                    if (!t || null == t) return !1;
                    var e = !1,
                        o = T.CheckButtonType(t),
                        n = t.substring(t.indexOf("=") + 1);
                    if (o == B.SWITCH_GAME) {
                        n = this.GetThemeIdByGameName(n);
                        var i = SS.Common.GameEnvironment.GameSetting.kioskOpenGameList;
                        e = !0;
                        for (var r = 0; r < i.length; r++)
                            if (i[r] == n) {
                                e = !1;
                                break
                            }
                    } else o == B.CUSTOM && SS.Common.GameEnvironment.GameSetting.hasOwnProperty("active_event") && (e = !SS.Common.GameEnvironment.GameSetting.active_event.hasOwnProperty(n) || !SS.Common.GameEnvironment.GameSetting.active_event[n]);
                    return e
                }, e.prototype.SendPopupJsonData = function(t, e) {
                    this.m_Loading.active = !0, this.m_isTestMode ? this.TestToGetPopupJsonData(e) : v.LobbyClient.Instance.GetUserClient.GetPopupContent(this.m_logoMode, t, e, this.RecvPopupJsonData.bind(this))
                }, e.prototype.RecvPopupJsonData = function(t, e) {
                    if (!this.CheckError("getPopupContent", t, e)) try {
                        var o = this.m_aryCategoryData[this.m_curCategoryIndex].menuAry[this.m_curTabIndex].id,
                            n = e.cmd_data.data,
                            i = this.m_aryPageData.find(function(t) {
                                return t.id == o
                            });
                        if (null == i) {
                            if ((i = new f).id = o, i.data = n, cc.log("[BulletinBoard]RecvPopupJsonData: " + i.id + "\ndata:", i.data), i.data)
                                if (1 == n.length) {
                                    var r = n[0].BundleName;
                                    r.indexOf(".png") > -1 ? i.type = S.SINGLE_TEXTURE : (i.type = S.CUSTOM, i.prefabName = r)
                                } else i.type = S.MULTIPLE_TEXTURE;
                            this.m_aryPageData.push(i)
                        } else i.data = n;
                        this.ShowPage(i)
                    } catch (a) {
                        console.error("Error!", a), this.ShowErrorMsg("C54", "Cmd 'getPopupContent' is error")
                    }
                }, e.prototype.StartAutoScroll = function() {
                    this.m_isAutoScrollRuning = !0, this.node.on(cc.Node.EventType.MOUSE_DOWN, this.OnFingerDown, this, !0), this.node.on(cc.Node.EventType.MOUSE_UP, this.OnFigerUp, this, !0), this.node.on(cc.Node.EventType.TOUCH_START, this.OnFingerDown, this, !0), this.node.on(cc.Node.EventType.TOUCH_END, this.OnFigerUp, this, !0), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.OnFigerUp, this, !0), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.OnFingerDown, this, !0), this.PlayAutoScrollPage()
                }, e.prototype.KillAutoScroll = function() {
                    this.m_isHandHold = !1, this.m_isAutoScrollRuning = !1, this.StopAutoScrollPage(), this.node.targetOff(this)
                }, e.prototype.PlayAutoScrollPage = function() {
                    this.m_isAutoScrollRuning && (this.StopAutoScrollPage(), this.schedule(this.DoAutoScrollPage, this.m_autoScrollDelayTime))
                }, e.prototype.DoAutoScrollPage = function() {
                    this.m_isAutoScrollRuning ? this.m_Loading.active || this.m_isHandHold || this.m_isWaitForPage || (this.m_curTabIndex++, this.m_curTabIndex >= this.m_menu.length() && (this.m_curTabIndex = 0), this.m_menu.JumpToTab(this.m_curTabIndex)) : this.StopAutoScrollPage()
                }, e.prototype.StopAutoScrollPage = function() {
                    this.unschedule(this.DoAutoScrollPage)
                }, e.prototype.OnFingerDown = function() {
                    this.m_isHandHold = !0, this.StopAutoScrollPage()
                }, e.prototype.OnFigerUp = function() {
                    this.m_isHandHold = !1, this.PlayAutoScrollPage()
                }, e.prototype.CheckAutoScroll = function(t) {
                    this.m_aryCategoryData[this.m_curCategoryIndex].id == this.m_strHotID && this.m_menu.length() > 1 ? t.nodePage.CheckNeedAutoScrollDelay(this.OnMultiplePageEnd.bind(this)) ? this.OnMultiplePagePlaying() : this.m_isWaitForPage && this.OnMultiplePageEnd() : t.nodePage.CheckNeedAutoScrollDelay(null)
                }, e.prototype.OnMultiplePagePlaying = function() {
                    this.m_isWaitForPage = !0, this.StopAutoScrollPage()
                }, e.prototype.OnMultiplePageEnd = function() {
                    this.m_isWaitForPage = !1, this.PlayAutoScrollPage()
                }, e.prototype.OnCloseClicked = function() {
                    this.node.active ? (this.ClickLog(7), this.node.active = !1, C.AudioMgr.Instance.Play("Btn_Select_n_v01", !1, 1)) : console.warn("[BulletinBoard]some one call close again!")
                }, e.prototype.OnCategoryTabClicked = function(t, e) {
                    var o = this.m_curTabIndex,
                        n = this.m_curCategoryIndex;
                    this.m_needPlayClickAudio && C.AudioMgr.Instance.Play("Btn_Sort", !1, 1), this.m_curTabIndex = 0;
                    var i = this.ShowCategoryContent(t);
                    if (this.m_isWaitForPage && this.OnMultiplePageEnd(), i) {
                        var r = this.m_aryCategoryData[this.m_curCategoryIndex].haveRedPoint ? 1 : 0;
                        if (v.LobbyClient.Instance.GetUserClient.recordClickLog("NewsClickTab", r), this.m_aryCategoryData[e] && this.m_aryCategoryData[e].title) switch (this.m_aryCategoryData[e].title) {
                            case "SLOT":
                                this.ClickLog(3, n, o);
                                break;
                            case "HOT":
                                this.ClickLog(5, n, o);
                                break;
                            case "FISH":
                                this.ClickLog(1, n, o);
                                break;
                            case "RULES":
                                this.ClickLog(6, n, o);
                                break;
                            default:
                                this.ClickLog(8, n, o)
                        }
                    }
                }, e.prototype.OnMenuTabClicked = function(t, e) {
                    var o = this.m_curTabIndex,
                        n = this.m_curCategoryIndex;
                    this.m_needPlayClickAudio && C.AudioMgr.Instance.Play("Btn_LeftTabClick", !1, 1), this.m_curTabIndex = e, console.log("[BulletinBaord]OnMenuTabClicked > ", this.m_curTabIndex), this.ShowPageByID(t);
                    var i = this.CheckCookieForRedPoint(t) ? 2 : 3;
                    if (v.LobbyClient.Instance.GetUserClient.recordClickLog("NewsClickTab", i), this.m_aryCategoryData[e] && this.m_aryCategoryData[e].title) switch (this.m_aryCategoryData[e].title) {
                        case "SLOT":
                            this.ClickLog(4, n, o);
                            break;
                        case "FISH":
                            this.ClickLog(2, n, o);
                            break;
                        default:
                            this.ClickLog(9, n, o)
                    }
                    this.CheckCategoryRedPointStatus(t)
                }, e.prototype.OnPageSettingComplete = function() {
                    this.m_Loading.active = !1
                }, e.prototype.OnPageBtnClicked = function(t) {
                    return a(this, void 0, void 0, function() {
                        var e, o, n, i, r;
                        return s(this, function(a) {
                            switch (a.label) {
                                case 0:
                                    switch (e = "", o = t.action, this.ClickLog(0), t.buttonType) {
                                        case B.CUSTOM:
                                            return [3, 1];
                                        case B.SWITCH_GAME:
                                            return [3, 2];
                                        case B.URL:
                                            return [3, 3];
                                        case B.NEW_TAB:
                                            return [3, 4];
                                        case B.REFRESH_URL:
                                            return [3, 5]
                                    }
                                    return [3, 7];
                                case 1:
                                    return e = "call_activity", [3, 8];
                                case 2:
                                    return e = "call_switch_game", o = this.GetThemeIdByGameName(o), [3, 8];
                                case 3:
                                    return e = "call_webview", [3, 8];
                                case 4:
                                    return e = "", (n = window.open("about:blank", "redirect")).opener = null, n.location.href = o, [3, 8];
                                case 5:
                                    return [4, w.ClickLog.SendRecordedList("PopUp")];
                                case 6:
                                    return a.sent(), e = "", window.location.href = o, [3, 8];
                                case 7:
                                    return [3, 8];
                                case 8:
                                    return e.length > 0 && ((i = new cc.Event.EventCustom(e, !0)).setUserData(o), this.node.dispatchEvent(i), r = {
                                        popup: o
                                    }, v.LobbyClient.Instance.GetUserClient.recordClickLog("NewsClickPopup", 0, r)), [2]
                            }
                        })
                    })
                }, e.prototype.CheckCategoryRedPointStatus = function(t) {
                    for (var e = this, o = 0, n = 0; n < this.m_aryCategoryData.length; n++) {
                        var i = this.m_aryCategoryData[n];
                        i.haveRedPoint ? (o = 0, i.menuAry.forEach(function(n) {
                            n.id == t && (n.isNeverClick = !1, e.SetCookieForRedPoint(t)), n.isNeverClick && o++
                        }), 0 == o && (this.m_category.HideRedPoint(n), i.haveRedPoint = !1)) : this.m_category.HideRedPoint(n)
                    }
                }, e.prototype.SetCookieForRedPoint = function(t) {
                    var e = this.GetRedPointKey(t);
                    JSUtility.IsSupportLocalStorage() ? localStorage.setItem(e, "1") : JSUtility.IsSupportCookie() && (document.cookie = e + "=1;")
                }, e.prototype.CheckCookieForRedPoint = function(t) {
                    var e = this.GetRedPointKey(t),
                        o = "";
                    return JSUtility.IsSupportLocalStorage() ? o = localStorage.getItem(e) : JSUtility.IsSupportCookie() && (o = JSUtility.GetCookie(e)), null != o
                }, e.prototype.DelCookieForRedPoint = function(t) {
                    var e = this.GetRedPointKey(t);
                    JSUtility.IsSupportLocalStorage() ? localStorage.removeItem(e) : JSUtility.IsSupportCookie() && (document.cookie = e + "=; expires=100")
                }, e.prototype.GetRedPointKey = function(t) {
                    return "RED_POINT_" + t
                }, e.prototype.GetThemeIdByGameName = function(t) {
                    return SS.Common.GameEnvironment.GameSetting.hasOwnProperty("Icon") && SS.Common.GameEnvironment.GameSetting.Icon.hasOwnProperty(t) && SS.Common.GameEnvironment.GameSetting.Icon[t].hasOwnProperty("GameName") ? SS.Common.GameEnvironment.GameSetting.Icon[t].GameName : ""
                }, e.prototype.CheckError = function(t, e, o) {
                    console.log("[BulletinBoard] Get: ", t, "\nstatus: ", e, "\nresult:", o);
                    var n = "getPopupBillBoard" == t;
                    if (e == ArkSDK.HttpResult.OK && o && o.cmd_data && o.cmd_data.data) return !(o.cmd_data.data.length > 0 || (n ? (console.error("[BulletinBoard] ERROR!", o), this.node.active = !1) : this.ShowErrorMsg("C55", o, this.RemoveCurrentMenuTab.bind(this)), 0));
                    var i;
                    return i = e == ArkSDK.HttpResult.Abort ? n ? "S379" : "S390" : e == ArkSDK.HttpResult.Condition ? n ? "S380" : "S391" : e == ArkSDK.HttpResult.Error ? n ? "S381" : "S392" : e == ArkSDK.HttpResult.NotReset ? n ? "S382" : "S393" : e == ArkSDK.HttpResult.Status ? n ? "S383" : "S394" : e == ArkSDK.HttpResult.Timeout ? n ? "S384" : "S395" : -1 == e ? n ? "S376" : "S386" : -6 == e ? n ? "S378" : "S388" : -7 == e ? n ? "S377" : "S387" : -37 != e || n ? n ? "S385" : "S396" : "S389", n ? (console.error("[BulletinBoard] ERROR!", i, o), this.node.active = !1) : this.ShowErrorMsg(i, o), !0
                }, e.prototype.OnPageShowErrorMsg = function(t, e, o, n) {
                    if (n)
                        if (e.length > 0) {
                            var i = this;
                            this.ShowErrorMsg(e, o, function() {
                                i.RemoveTargetTabID(t)
                            })
                        } else this.RemoveTargetTabID(t);
                    else this.ShowErrorMsg(e, o)
                }, e.prototype.ShowErrorMsg = function(t, e, o) {
                    console.error("[BulletinBoard] ERROR!", t, e), b.PopupMsgMgr.Instance.ShowPopMsg(b.PopupPriority.Info, t, "", e, o || this.OnCloseClicked.bind(this))
                }, e.prototype.ClickLog = function(t, e, o) {
                    if (void 0 === e && (e = this.m_curCategoryIndex), void 0 === o && (o = this.m_curTabIndex), this.m_aryCategoryData && this.m_aryCategoryData[e] && this.m_aryCategoryData[e].menuAry && this.m_aryCategoryData[e].menuAry[o]) {
                        var n = this.m_aryCategoryData[e].menuAry[o].id,
                            i = this.m_aryPageData.find(function(t) {
                                return t.id == n
                            }),
                            r = JSON.parse("{}"),
                            a = this.m_aryCategoryData[this.m_curCategoryIndex];
                        i && i.data && i.data[0] && i.data[0].extra_data && (r.TempStr1 = i.data[0].extra_data.Name, r.TempStr2 = i.data[0].extra_data.Purpose, r.TempStr3 = a.title, r.TempStr4 = i.data[0].extra_data.Version, r.TempInt1 = t, w.ClickLog.recordClickLogNewVersion("PopUp", r))
                    }
                }, e.prototype.OnClickTest = function() {
                    var t = this,
                        e = {};
                    e.cmd_data = {
                        data: [{
                            TitleID: "hot",
                            TitleName: "HOT",
                            TitleInfo: [{
                                TagID: "bear",
                                TagName: "BEAR",
                                TagShow: !0,
                                TagType: "image",
                                bind_info: "GAME_ID=126001"
                            }, {
                                TagID: "PuzzleEgg",
                                TagName: "Puzzle Egg",
                                TagShow: !0,
                                TagType: "puzzle_egg",
                                bind_info: "CUSTOM_ID=PuzzleEgg"
                            }, {
                                TagID: "atomic_link",
                                TagName: "Atomic Link",
                                TagShow: !0,
                                TagType: "image",
                                bind_info: ""
                            }, {
                                TagID: "kill",
                                TagName: "KILL PAGE",
                                TagShow: !0,
                                TagType: "image"
                            }, {
                                TagID: "empty",
                                TagName: "EmptyA",
                                TagShow: !0,
                                TagType: "image"
                            }, {
                                TagID: "way1",
                                TagName: "B",
                                TagShow: !0,
                                TagType: "image",
                                bind_info: "GAME_ID=126001"
                            }, {
                                TagID: "empty",
                                TagName: "EmptyB",
                                TagShow: !0,
                                TagType: "image",
                                bind_info: "GAME_ID=126001"
                            }, {
                                TagID: "way3",
                                TagName: "D",
                                TagShow: !0,
                                TagType: "image",
                                bind_info: "GAME_ID=126001"
                            }]
                        }, {
                            TitleID: "reel",
                            TitleName: "REEL",
                            TitleInfo: [{
                                TagID: "atomic_link",
                                TagName: "Atomic Link",
                                TagShow: !0,
                                TagType: "image"
                            }, {
                                TagID: "bear",
                                TagName: "BEAR",
                                TagShow: !0,
                                TagType: "image",
                                bind_info: "GAME_ID=126001"
                            }]
                        }, {
                            TitleID: "fish",
                            TitleName: "FISH",
                            TitleInfo: [{
                                TagID: "monster_frenzy",
                                TagName: "Mew",
                                TagShow: !0,
                                TagType: "image",
                                bind_info: "GAME_ID=148001"
                            }, {
                                TagID: "ocean_heart",
                                TagName: "Ocean Heart",
                                TagShow: !0,
                                TagType: "image",
                                bind_info: "CUSTOM_ID=OceanHeart"
                            }, {
                                TagID: "PuzzleEgg",
                                TagName: "Puzzle Egg",
                                TagShow: !0,
                                TagType: "image",
                                bind_info: "CUSTOM_ID=PuzzleEgg"
                            }]
                        }, {
                            TitleID: "rules",
                            TitleName: "RULES",
                            TitleInfo: [{
                                TagID: "rules",
                                TagName: "",
                                TagShow: !1,
                                TagType: "image"
                            }]
                        }]
                    }, this.scheduleOnce(function() {
                        t.RecvCategoryJsonData(0, e)
                    }, .25)
                }, e.prototype.TestToGetPopupJsonData = function(t) {
                    console.log("[BulletinBoard]GetPopupJsonData: ", t);
                    var e = [];
                    if ("PuzzleEgg" == t) {
                        var o = {
                            BundleName: "PopUp_PuzzleEgg.png",
                            ButtonText: "GO",
                            ButtonAction: "CUSTOM_ID=PuzzleEgg",
                            BundleVersion: "Test",
                            EndTime: "2028-10-27T07:10:00"
                        };
                        e.push(o)
                    } else if ("bear" == t)
                        for (var n = ["PLAY", "OK", "GO", "Close"], i = 0; i < 4; i++)(o = {}).BundleName = "Test_" + i + ".png", o.ButtonText = n[i], o.ButtonAction = "GAME_ID=126001", o.EndTime = "2030-10-30T18:30:00", o.BundleVersion = "Test", e.push(o);
                    else 0 == t.indexOf("way") ? ((o = {}).BundleName = (n = ["Test_A.png", "Test_B.png", "Test_C.png", "Test_D.png"])[t.substring(3, 4)], o.ButtonText = "OK", o.ButtonAction = "GAME_ID=126001", o.EndTime = "2030-10-30T18:39:00", o.BundleVersion = "Test", e.push(o)) : "atomic_link" == t ? (o = {
                        BundleName: "PopUp_Atomiclink.png",
                        ButtonText: "CLOSE",
                        ButtonAction: "CLOSE",
                        EndTime: "2030-10-30T18:39:00",
                        BundleVersion: "Test"
                    }, e.push(o)) : "monster_frenzy" == t ? (o = {
                        BundleName: "Popup_MonstersFrenzy.png",
                        ButtonText: "SHOOT",
                        ButtonAction: "GAME_ID=148001",
                        EndTime: "2030-10-30T18:39:00",
                        BundleVersion: "Test"
                    }, e.push(o)) : "fish_lucky" == t ? (o = {
                        BundleName: "PopUp_LuckyShamrock.png",
                        ButtonText: "TEST",
                        ButtonAction: "GAME_ID=149001",
                        BundleVersion: "Test",
                        EndTime: "2030-10-30T18:39:00"
                    }, e.push(o)) : "ocean_heart" == t ? (o = {
                        BundleName: "PopUp_OceanHeart_pre.png",
                        ButtonText: "",
                        ButtonAction: "CLOSE",
                        BundleVersion: "Test",
                        EndTime: "2030-10-20T18:39:00"
                    }, e.push(o), o.BundleName = "PopUp_OceanHeart.png", o.ButtonText = "PLAY", o.ButtonAction = "GAME_ID=158001", o.BundleVersion = "Test", o.EndTime = "2030-10-20T18:39:00", e.push(o)) : "rules" == t ? (o = {
                        BundleName: "Regulation_template.png",
                        ButtonText: "C",
                        ButtonAction: "",
                        BundleVersion: "Test",
                        EndTime: "2030-10-30T18:39:00"
                    }, e.push(o)) : "kill" == t && (o = {
                        BundleName: "Regulation_template.png",
                        ButtonText: "C",
                        ButtonAction: "",
                        BundleVersion: "Test",
                        EndTime: "2021-11-01T18:39:00"
                    }, e.push(o));
                    var r = {};
                    r.cmd_data = {
                        data: e
                    }, this.RecvPopupJsonData(0, r)
                }, r([O(cc.Node)], e.prototype, "m_root", void 0), r([O(d)], e.prototype, "m_category", void 0), r([O(m)], e.prototype, "m_menu", void 0), r([O(cc.Node)], e.prototype, "m_PageRoot", void 0), r([O(cc.Node)], e.prototype, "m_Loading", void 0), r([O({
                    displayName: "\u6e2c\u8a66\u8cc7\u6599\u55ce"
                })], e.prototype, "m_isTestMode", void 0), r([I], e)
            }(cc.Component);
            t.BulletinBoardManager = e
        })(l || (l = {})), cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0,
        "../../../Component/BundleCtrl": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/LobbyClient": void 0,
        "../../../PopupMessage/Script/PopupMsgMgr": void 0,
        "./BulletinBoardCategory": "BulletinBoardCategory",
        "./BulletinBoardData": "BulletinBoardData",
        "./BulletinBoardMenu": "BulletinBoardMenu",
        "./BulletinBoardPage": "BulletinBoardPage"
    }],
    BulletinBoardMenu: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "d49d5pQzJNFWq+NUn4QZtHp", "BulletinBoardMenu");
        var n, i = this && this.__extends || (n = function(t, e) {
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
            r = this && this.__decorate || function(t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.BulletinBoard = void 0;
        var a = t("./BulletinBoardTab").BulletinBoard.Tab,
            s = cc._decorator,
            l = s.ccclass,
            c = s.property;
        (function(t) {
            var e = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.funcClicked = null, e.m_nodeRoot = null, e.m_scrollView = null, e.m_nodeBalckShadow = null, e.m_layout = null, e.m_tabPrefab = null, e.m_nodeLastest = null, e.m_numScrollEnableCount = 5, e.m_aryTabs = [], e.m_nodePool = null, e.m_strCurFocusID = "", e
                }
                return i(e, t), e.prototype.isShowing = function() {
                    return this.m_nodeRoot.active
                }, e.prototype.length = function() {
                    return this.m_aryTabs.length
                }, e.prototype.onDestroy = function() {
                    this.Exit(), this.m_aryTabs = null
                }, e.prototype.Exit = function() {
                    this.DespawnAllTab(), this.m_nodePool && (this.m_nodePool.clear(), this.m_nodePool = null), this.m_aryTabs = [], this.m_strCurFocusID = ""
                }, e.prototype.Show = function() {
                    this.m_nodeRoot.active = !0
                }, e.prototype.Hide = function() {
                    this.m_nodeRoot.active = !1
                }, e.prototype.Reset = function(t) {
                    var e = this;
                    this.DespawnAllTab(), this.m_strCurFocusID = "", null != t && (t.forEach(function(t, o) {
                        if (t.isShow) {
                            var n = e.CreateTab(t.id).getComponent(a);
                            e.SetTabData(n, t, o), t.isNeverClick && n.ShowRedPoint()
                        }
                    }), this.m_aryTabs.length > this.m_numScrollEnableCount ? (this.m_scrollView.enabled = !0, this.m_nodeBalckShadow.active = !0) : (this.m_scrollView.enabled = !1, this.m_nodeBalckShadow.active = !1), this.InitMaxNode(), this.m_aryTabs.forEach(function(t) {
                        t.SetNormal()
                    }), this.m_layout.updateLayout(), this.m_scrollView.vertical && this.m_scrollView.scrollToTop(0), this.m_scrollView.horizontal && this.m_scrollView.scrollToLeft(0))
                }, e.prototype.JumpToTab = function(t) {
                    t < 0 || t >= this.m_aryTabs.length || (this.OnClick(this.m_aryTabs[t]), this.m_scrollView.enabled && this.m_scrollView.scrollToOffset(this.moveOffsetValue(t), .25, !0))
                }, e.prototype.DespawnAllTab = function() {
                    for (; this.m_aryTabs.length > 0;) this.m_nodePool ? this.m_nodePool.put(this.m_aryTabs.pop().node) : this.m_layout.node.removeChild(this.m_aryTabs.pop().node)
                }, e.prototype.CreateTab = function(t) {
                    null == this.m_nodePool && (this.m_nodePool = new cc.NodePool);
                    var e = this.m_nodePool.get();
                    return null == e && (e = cc.instantiate(this.m_tabPrefab)), e.parent = this.m_layout.node, e.name = "Tab(" + t + ")", e
                }, e.prototype.SetTabData = function(t, e, o) {
                    t.Reset(o, e.id, e.title, this.OnClick.bind(this)), this.m_aryTabs.push(t)
                }, e.prototype.OnClick = function(t) {
                    var e = this;
                    if (t.id != this.m_strCurFocusID) {
                        t.SetFocus(this.m_aryTabs.length);
                        var o = this.m_aryTabs.find(function(t) {
                            return t.id == e.m_strCurFocusID
                        });
                        null != o && o.SetNormal(), this.CustomClickEvent(t, o), this.m_strCurFocusID = t.id, null != this.funcClicked && this.funcClicked(t.id, t.index)
                    }
                }, e.prototype.CustomClickEvent = function(t) {
                    t && t.HideRedPoint()
                }, e.prototype.moveOffsetValue = function(t) {
                    var e = new cc.Vec2;
                    return this.m_scrollView.horizontal ? e.x = t * this.m_aryTabs[t].node.width - 10 : this.m_scrollView.vertical && (e.y = t * this.m_aryTabs[t].node.height - 10), e
                }, e.prototype.InitMaxNode = function() {
                    if (this.m_nodeLastest && this.m_aryTabs[0]) {
                        var t = this.m_aryTabs[0].node.getContentSize();
                        this.m_nodeLastest.setContentSize(.5 * t.width, .5 * t.height), this.m_nodeLastest.setSiblingIndex(this.m_aryTabs.length)
                    }
                }, r([c(cc.Node)], e.prototype, "m_nodeRoot", void 0), r([c(cc.ScrollView)], e.prototype, "m_scrollView", void 0), r([c(cc.Node)], e.prototype, "m_nodeBalckShadow", void 0), r([c(cc.Layout)], e.prototype, "m_layout", void 0), r([c(cc.Prefab)], e.prototype, "m_tabPrefab", void 0), r([c(cc.Node)], e.prototype, "m_nodeLastest", void 0), r([c], e.prototype, "m_numScrollEnableCount", void 0), r([l], e)
            }(cc.Component);
            t.Menu = e
        })(o.BulletinBoard || (o.BulletinBoard = {})), cc._RF.pop()
    }, {
        "./BulletinBoardTab": "BulletinBoardTab"
    }],
    BulletinBoardMultiplePage: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "2792eSpeadGGa6M2zxiRouH", "BulletinBoardMultiplePage");
        var n, i = this && this.__extends || (n = function(t, e) {
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
            r = this && this.__decorate || function(t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function(t, e, o, n) {
                return new(o || (o = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            l(n.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        try {
                            l(n.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(a, s)
                    }
                    l((n = n.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
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
                    return function(e) {
                        return l([t, e])
                    }
                }

                function l(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (s) {
                        r = [6, s], n = 0
                    } finally {
                        o = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var l, c = t("./BulletinBoardPage"),
            u = t("./BulletinBoardData"),
            h = t("./BulletinBoardPageViewer"),
            p = t("./BulletinBoardIndicator"),
            d = c.BulletinBoard.Page,
            m = c.BulletinBoard.LoadJob,
            _ = u.BulletinBoard.ButtonData,
            y = u.BulletinBoard.ButtonType,
            g = h.BulletinBoard.PageView,
            f = p.BulletinBoard.Indicator,
            S = t("../../../Component/AudioMgr"),
            T = cc._decorator,
            B = T.ccclass,
            P = T.property;
        (function(t) {
            var e = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.m_btnAction = null, e.m_lblAction = null, e.m_PageView = null, e.m_Indicator = null, e.m_arySprites = [], e.m_aryButtnData = null, e.m_curIndex = 0, e.m_autoScrollDelayTime = 5, e.cid = 0, e
                }
                return i(e, t), e.prototype.start = function() {}, e.prototype.CheckNeedAutoScrollDelay = function(t) {
                    return this.m_funcCallAutoScroll = t, !0
                }, e.prototype.Show = function() {
                    t.prototype.Show.call(this), this.m_PageView.StartAutoScroll(this.m_autoScrollDelayTime)
                }, e.prototype.Hide = function() {
                    this.m_PageView.StopAutoScrollPageView(), this.m_curIndex = 0, this.ShowNewTexture(), t.prototype.Hide.call(this)
                }, e.prototype.Exit = function() {
                    this.m_PageView && (this.m_PageView.node.targetOff(this), this.m_PageView.StopAutoScrollPageView()), this.m_arySprites = null, this.m_aryButtnData = null, t.prototype.Exit.call(this)
                }, e.prototype.ParseJsonData = function(t) {
                    if (this.m_aryButtnData && this.m_arySprites.length == Object.keys(t).length) return console.warn("[BulletinVBoard.MultiplePage]Page " + this.pageID + " had data!"), void this.ReloadPopupData(t);
                    this.m_btnAction.node.active = !1, this.m_aryButtnData = [], this.m_arySprites = [], this.LoadPopupData(t)
                }, e.prototype.OnClick = function() {
                    S.AudioMgr.Instance.Play("Btn_Select_y_v01", !1, 1), null != this.m_funcClicked && this.m_funcClicked(this.m_aryButtnData[this.m_curIndex])
                }, e.prototype.LoadPopupData = function(t) {
                    return a(this, void 0, void 0, function() {
                        var e, o, n, i, r, a, l, c, u;
                        return s(this, function(h) {
                            switch (h.label) {
                                case 0:
                                    this.cid++, console.log("[BulletingBoard][MultiPage]:LoadPopupData()"), e = this, o = t.length, n = 0, i = "", r = "", a = function(o) {
                                        var a, c, u;
                                        return s(this, function(s) {
                                            switch (s.label) {
                                                case 0:
                                                    return a = t[o], l.CheckKioskGame(a.bind_info) ? (n++, [2, "continue"]) : l.CheckEndTime(a.EndTime) ? (n++, [2, "continue"]) : (i = a.BundleVersion, (r = l.GetDownloadPath(i, "Popup", a.BundleName)) ? (c = 0, u = null, [4, (new m).DownloadTexture(l.cid, r).then(function(t) {
                                                        c = t.cid, u = t.result
                                                    }).catch(function(t) {
                                                        c = t.cid, u = null
                                                    })]) : (n++, console.warn("[BulletinVBoard.MultiplePage]Image Path (Popup/" + i + "/" + a.BundleName + ") is NULL!! "), [2, "continue"]));
                                                case 1:
                                                    return s.sent(), c != l.cid ? [2, {
                                                        value: void 0
                                                    }] : null == u ? (n++, [2, "continue"]) : (e.m_arySprites.push(new cc.SpriteFrame(u)), l.m_aryButtnData.push(new _(a)), [2])
                                            }
                                        })
                                    }, l = this, c = 0, h.label = 1;
                                case 1:
                                    return c < o ? [5, a(c)] : [3, 4];
                                case 2:
                                    if ("object" == typeof(u = h.sent())) return [2, u.value];
                                    h.label = 3;
                                case 3:
                                    return c++, [3, 1];
                                case 4:
                                    return n >= o ? this.ShowErrorMsg("", "Popup(id: " + this.pageID + ") cantOpenCount >= count", !0) : (this.SetPageView(), this.SetDataDone()), [2]
                            }
                        })
                    })
                }, e.prototype.ReloadPopupData = function(t) {
                    return a(this, void 0, void 0, function() {
                        var e, o, n, i, r, a, l, c;
                        return s(this, function(u) {
                            switch (u.label) {
                                case 0:
                                    console.log("[BulletingBoard][MultiPage]:ReloadPopupData()"), e = this, o = t.length, n = 0, i = "", r = "", a = function(o) {
                                        var a, c;
                                        return s(this, function(s) {
                                            switch (s.label) {
                                                case 0:
                                                    return a = t[o], l.CheckKioskGame(a.bind_info) ? (n++, [2, "continue"]) : (console.log("<><>Name:", l.m_arySprites[o].getTexture().name), o < l.m_arySprites.length && l.m_arySprites[o] && a.BundleName == l.m_arySprites[o].getTexture().name ? [2, "continue"] : l.CheckEndTime(a.EndTimeUTC) ? (n++, [2, "continue"]) : (i = a.BundleVersion, (r = l.GetDownloadPath(i, "Popup", a.BundleName)) ? (c = null, [4, l.DownloadTexture(r).then(function(t) {
                                                        c = t
                                                    }).catch(function() {
                                                        c = null
                                                    })]) : (n++, console.warn("[BulletinVBoard.MultiplePage]Image Path (Popup/" + i + "/" + a.BundleName + ") is NULL!! "), [2, "continue"])));
                                                case 1:
                                                    return s.sent(), null == c ? (n++, [2, "continue"]) : (e.m_arySprites.length > o ? (e.m_arySprites[o].setTexture(c), l.m_aryButtnData[o] = new _(a)) : (e.m_arySprites.push(new cc.SpriteFrame(c)), l.m_aryButtnData.push(new _(a))), [2])
                                            }
                                        })
                                    }, l = this, c = 0, u.label = 1;
                                case 1:
                                    return c < o ? [5, a(c)] : [3, 4];
                                case 2:
                                    u.sent(), u.label = 3;
                                case 3:
                                    return c++, [3, 1];
                                case 4:
                                    return n >= o ? this.ShowErrorMsg("", "Popup(id: " + this.pageID + ") cantOpenCount >= count", !0) : this.SetDataDone(), [2]
                            }
                        })
                    })
                }, e.prototype.SetButton = function() {
                    var t = this.m_aryButtnData[this.m_curIndex];
                    t.buttonType == y.NONE ? this.m_btnAction.node.active = !1 : (this.m_btnAction.node.active = !0, this.m_lblAction.string = t.buttonTitle)
                }, e.prototype.SetPageView = function() {
                    this.m_curIndex = 0, this.m_PageView.SetTextures(this.SliceTextures()), this.m_aryButtnData.length > 1 ? (this.m_PageView.enabled = !0, this.m_PageView.node.on("auto-scroll-began", this.OnScrollBegan, this), this.m_PageView.node.on("scroll-began", this.OnScrollBegan, this), this.m_PageView.node.on("scroll-ended", this.OnScrollEnd, this), this.m_Indicator.Refresh(this.m_arySprites.length), this.m_Indicator.ChangeState(this.m_curIndex), this.m_PageView.StartAutoScroll(this.m_autoScrollDelayTime)) : this.m_PageView.enabled = !1, this.SetButton()
                }, e.prototype.SliceTextures = function() {
                    var t = [],
                        e = this.m_arySprites.length;
                    if (0 != e) {
                        var o = this.m_curIndex - 1;
                        o < 0 && (o = e - 1);
                        var n = this.m_curIndex + 1;
                        return n >= e && (n = 0), cc.log("[BulletinVBoard.MultiplePage]SliceTexture: " + o + " <-> " + this.m_curIndex + " <-> " + n), t[0] = this.m_arySprites[o], t[1] = this.m_arySprites[this.m_curIndex], t[2] = this.m_arySprites[n], t
                    }
                }, e.prototype.OnScrollBegan = function() {
                    this.m_btnAction.node.active = !1
                }, e.prototype.OnScrollEnd = function() {
                    var t = this.m_PageView.getCurrentPageIndex();
                    1 != t ? (0 == t ? this.m_curIndex-- : 2 == t && this.m_curIndex++, this.m_curIndex >= this.m_arySprites.length && (this.m_curIndex = 0), this.m_curIndex < 0 && (this.m_curIndex = this.m_arySprites.length - 1), this.m_curIndex == this.m_arySprites.length - 1 && this.m_funcCallAutoScroll && (this.m_funcCallAutoScroll(), this.m_funcCallAutoScroll = null), this.ShowNewTexture(), this.m_PageView.PlayAutoScrollPageView(), S.AudioMgr.Instance.Play("Btn_MultiPopupMove", !1, 1)) : this.SetButton()
                }, e.prototype.ShowNewTexture = function() {
                    null != this.m_arySprites && 0 != this.m_arySprites.length && (this.m_PageView.SetTextures(this.SliceTextures()), this.m_Indicator.ChangeState(this.m_curIndex), this.SetButton())
                }, r([P(cc.Button)], e.prototype, "m_btnAction", void 0), r([P(cc.Label)], e.prototype, "m_lblAction", void 0), r([P(g)], e.prototype, "m_PageView", void 0), r([P(f)], e.prototype, "m_Indicator", void 0), r([B], e)
            }(d);
            t.MultiplePage = e
        })(l || (l = {})), cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0,
        "./BulletinBoardData": "BulletinBoardData",
        "./BulletinBoardIndicator": "BulletinBoardIndicator",
        "./BulletinBoardPage": "BulletinBoardPage",
        "./BulletinBoardPageViewer": "BulletinBoardPageViewer"
    }],
    BulletinBoardPageViewer: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "72784nWIEdD2YqEUdrYCmb0", "BulletinBoardPageViewer");
        var n, i = this && this.__extends || (n = function(t, e) {
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
            r = this && this.__decorate || function(t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.BulletinBoard = void 0;
        var a = cc._decorator,
            s = a.ccclass;
        a.property,
            function(t) {
                var e = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.isTouching = !1, e.center = new cc.Vec2(0, 0), e.autoScrollDelayTime = 10, e
                    }
                    return i(e, t), e.prototype.SetTextures = function(t) {
                        this._pages.forEach(function(e, o) {
                            e.getComponent(cc.Sprite).spriteFrame = t[o]
                        }), this.scrollToOffset(this.center), this.setCurrentPageIndex(1), t = null
                    }, e.prototype.onLoad = function() {
                        this.isTouching = !1, t.prototype.onLoad.call(this)
                    }, e.prototype.onDestroy = function() {
                        this.StopAutoScrollPageView()
                    }, e.prototype._onTouchBegan = function(e, o) {
                        this.isTouching = !0, t.prototype._onTouchBegan.call(this, e, o)
                    }, e.prototype._onTouchEnded = function(e, o) {
                        this.isTouching = !1, t.prototype._onTouchEnded.call(this, e, o), this.PlayAutoScrollPageView()
                    }, e.prototype._onTouchCancelled = function(e, o) {
                        this.isTouching = !1, t.prototype._onTouchCancelled.call(this, e, o), this.PlayAutoScrollPageView()
                    }, e.prototype._initPages = function() {
                        t.prototype._initPages.call(this), this.center = this._pages[1].position, this.scrollToOffset(this.center), this.setCurrentPageIndex(1)
                    }, e.prototype.StartAutoScroll = function(t) {
                        this.autoScrollDelayTime = t, this.PlayAutoScrollPageView()
                    }, e.prototype.PlayAutoScrollPageView = function() {
                        this.StopAutoScrollPageView(), this.scheduleOnce(this.DoAutoScrollPageView.bind(this), this.autoScrollDelayTime)
                    }, e.prototype.DoAutoScrollPageView = function() {
                        this.isTouching || (this.setCurrentPageIndex(this.getCurrentPageIndex() + 1), this.scrollToPage(this.getCurrentPageIndex(), .5), this.node.dispatchEvent(new cc.Event("auto-scroll-began", !0)))
                    }, e.prototype.StopAutoScrollPageView = function() {
                        this.unscheduleAllCallbacks()
                    }, r([s], e)
                }(cc.PageView);
                t.PageView = e
            }(o.BulletinBoard || (o.BulletinBoard = {})), cc._RF.pop()
    }, {}],
    BulletinBoardPage: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "803adCXnlBFRqvcv+Rfli2p", "BulletinBoardPage");
        var n, i = this && this.__extends || (n = function(t, e) {
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
            r = this && this.__decorate || function(t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.BulletinBoard = void 0;
        var a = t("./BulletinBoardData"),
            s = a.BulletinBoard.ButtonData,
            l = a.BulletinBoard.ButtonType,
            c = cc._decorator,
            u = c.ccclass;
        c.property,
            function(t) {
                var e = function(t) {
                    function e() {
                        var e = null !== t && t.apply(this, arguments) || this;
                        return e.pageID = "", e.m_funcClicked = null, e.m_funcResetComplete = null, e.m_funcCallAutoScroll = null, e.m_funcErrorMsg = null, e
                    }
                    return i(e, t), e.prototype.isShowing = function() {
                        return this.node.active
                    }, e.prototype.SetData = function(t, e, o, n, i) {
                        this.pageID = t, this.m_funcClicked = n, this.m_funcResetComplete = o, this.m_funcErrorMsg = i, this.ParseJsonData(e)
                    }, e.prototype.SetCustomData = function() {}, e.prototype.ResetData = function(t) {
                        this.ParseJsonData(t)
                    }, e.prototype.CheckNeedAutoScrollDelay = function(t) {
                        return this.m_funcCallAutoScroll = t, !1
                    }, e.prototype.Show = function() {
                        this.node.active = !0
                    }, e.prototype.Hide = function() {
                        this.node.active = !1
                    }, e.prototype.Exit = function() {
                        this.pageID = null, this.m_funcClicked = null, this.m_funcResetComplete = null, this.m_funcErrorMsg = null
                    }, e.prototype.ParseJsonData = function() {}, e.prototype.CheckEndTime = function(t) {
                        if (!t) return !1; - 1 == t.lastIndexOf("Z") && (t += "Z");
                        var e = new Date(t),
                            o = new Date;
                        return console.log("[BulletinBoard]Page CheckEndTime: ", e, " -> vs <- ", o), e <= o
                    }, e.prototype.SetDataDone = function() {
                        this.m_funcResetComplete && this.m_funcResetComplete()
                    }, e.prototype.GetDownloadPath = function(t, e, o) {
                        if (!t) return null;
                        var n = (SS.Common.GameEnvironment.ProjectSetting.CDN_HOST ? window.location.protocol + "//" + SS.Common.GameEnvironment.ProjectSetting.CDN_HOST : window.location.origin) + "/" + e + "/" + t + "/" + o;
                        return console.log("[BulletinBoardPage] GetDownloadPath= " + n), n
                    }, e.prototype.DownloadTexture = function(t) {
                        return new Promise(function(e, o) {
                            cc.assetManager.loadRemote(t, function(n, i) {
                                n ? (console.warn("[LoadTexure]Image (" + t + ") Download is not Find !! ", n), o(n)) : e(i)
                            })
                        })
                    }, e.prototype.DownloadBundle = function(t) {
                        return new Promise(function(e, o) {
                            cc.assetManager.loadRemote(t, function(n, i) {
                                n ? (console.warn("[LoadBundle]Bundle (" + t + ") Download is not Find !! ", n), o(n)) : e(i)
                            })
                        })
                    }, e.prototype.DownloadPrefab = function(t, e) {
                        return new Promise(function(o, n) {
                            t || (console.warn("[LoadBundle]Bundle (" + e + ") is null"), n()), t.load(e, function(t, i) {
                                t ? (console.warn("[LoadBundle]Prefab (" + e + ") Download is not Find !! ", t), n(t)) : o(i)
                            })
                        })
                    }, e.prototype.ShowErrorMsg = function(t, e, o) {
                        this.node.active && null != this.m_funcErrorMsg && this.m_funcErrorMsg(this.pageID, t, e, o)
                    }, e.prototype.CheckKioskGame = function(t) {
                        if (!t || null == t) return !1;
                        var e = !1,
                            o = s.CheckButtonType(t),
                            n = t.substring(t.indexOf("=") + 1);
                        if (o == l.SWITCH_GAME) {
                            n = this.GetThemeIdByGameName(n);
                            var i = SS.Common.GameEnvironment.GameSetting.kioskOpenGameList;
                            e = !0;
                            for (var r = 0; r < i.length; r++)
                                if (i[r] == n) {
                                    e = !1;
                                    break
                                }
                        } else o == l.CUSTOM && SS.Common.GameEnvironment.GameSetting.hasOwnProperty("active_event") && (e = !SS.Common.GameEnvironment.GameSetting.active_event.hasOwnProperty(n) || !SS.Common.GameEnvironment.GameSetting.active_event[n]);
                        return e
                    }, e.prototype.GetThemeIdByGameName = function(t) {
                        return SS.Common.GameEnvironment.GameSetting.hasOwnProperty("Icon") && SS.Common.GameEnvironment.GameSetting.Icon.hasOwnProperty(t) && SS.Common.GameEnvironment.GameSetting.Icon[t].hasOwnProperty("GameName") ? SS.Common.GameEnvironment.GameSetting.Icon[t].GameName : ""
                    }, r([u], e)
                }(cc.Component);
                t.Page = e;
                var o = function() {
                    function t() {
                        this.cid = 0
                    }
                    return t.prototype.DownloadTexture = function(t, e) {
                        this.cid = t;
                        var o = this;
                        return new Promise(function(t, n) {
                            cc.assetManager.loadRemote(e, function(i, r) {
                                i ? (console.warn("[LoadTexure]Image (" + e + ") Download is not Find !! ", i), n({
                                    cid: o.cid,
                                    result: null,
                                    error: i
                                })) : t({
                                    cid: o.cid,
                                    result: r,
                                    error: null
                                })
                            })
                        })
                    }, r([u], t)
                }();
                t.LoadJob = o
            }(o.BulletinBoard || (o.BulletinBoard = {})), cc._RF.pop()
    }, {
        "./BulletinBoardData": "BulletinBoardData"
    }],
    BulletinBoardSinglePopupPage: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "bbd69JAsLFBSaWyYPbKs1ef", "BulletinBoardSinglePopupPage");
        var n, i = this && this.__extends || (n = function(t, e) {
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
            r = this && this.__decorate || function(t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            },
            a = this && this.__awaiter || function(t, e, o, n) {
                return new(o || (o = Promise))(function(i, r) {
                    function a(t) {
                        try {
                            l(n.next(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function s(t) {
                        try {
                            l(n.throw(t))
                        } catch (e) {
                            r(e)
                        }
                    }

                    function l(t) {
                        var e;
                        t.done ? i(t.value) : (e = t.value, e instanceof o ? e : new o(function(t) {
                            t(e)
                        })).then(a, s)
                    }
                    l((n = n.apply(t, e || [])).next())
                })
            },
            s = this && this.__generator || function(t, e) {
                var o, n, i, r, a = {
                    label: 0,
                    sent: function() {
                        if (1 & i[0]) throw i[1];
                        return i[1]
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
                    return function(e) {
                        return l([t, e])
                    }
                }

                function l(r) {
                    if (o) throw new TypeError("Generator is already executing.");
                    for (; a;) try {
                        if (o = 1, n && (i = 2 & r[0] ? n.return : r[0] ? n.throw || ((i = n.return) && i.call(n), 0) : n.next) && !(i = i.call(n, r[1])).done) return i;
                        switch (n = 0, i && (r = [2 & r[0], i.value]), r[0]) {
                            case 0:
                            case 1:
                                i = r;
                                break;
                            case 4:
                                return a.label++, {
                                    value: r[1],
                                    done: !1
                                };
                            case 5:
                                a.label++, n = r[1], r = [0];
                                continue;
                            case 7:
                                r = a.ops.pop(), a.trys.pop();
                                continue;
                            default:
                                if (!(i = (i = a.trys).length > 0 && i[i.length - 1]) && (6 === r[0] || 2 === r[0])) {
                                    a = 0;
                                    continue
                                }
                                if (3 === r[0] && (!i || r[1] > i[0] && r[1] < i[3])) {
                                    a.label = r[1];
                                    break
                                }
                                if (6 === r[0] && a.label < i[1]) {
                                    a.label = i[1], i = r;
                                    break
                                }
                                if (i && a.label < i[2]) {
                                    a.label = i[2], a.ops.push(r);
                                    break
                                }
                                i[2] && a.ops.pop(), a.trys.pop();
                                continue
                        }
                        r = e.call(t, a)
                    } catch (s) {
                        r = [6, s], n = 0
                    } finally {
                        o = i = 0
                    }
                    if (5 & r[0]) throw r[1];
                    return {
                        value: r[0] ? r[1] : void 0,
                        done: !0
                    }
                }
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.BulletinBoard = void 0;
        var l = t("../../../Component/AudioMgr"),
            c = t("./BulletinBoardPage"),
            u = t("./BulletinBoardData"),
            h = c.BulletinBoard.Page,
            p = u.BulletinBoard.ButtonData,
            d = u.BulletinBoard.ButtonType,
            m = cc._decorator,
            _ = m.ccclass,
            y = m.property;
        (function(t) {
            var e = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.m_btnAction = null, e.m_lblAction = null, e.m_spTexture = null, e.m_buttnData = null, e.m_strTextureName = "", e
                }
                return i(e, t), e.prototype.start = function() {
                    this.RegisterTouchEvents()
                }, e.prototype.Exit = function() {
                    this.m_spTexture && this.m_spTexture.node.targetOff(this), t.prototype.Exit.call(this)
                }, e.prototype.RegisterTouchEvents = function() {
                    this.m_spTexture.node.on(cc.Node.EventType.MOUSE_DOWN, this.OnFingerTouch, this, !0), this.m_spTexture.node.on(cc.Node.EventType.MOUSE_UP, this.OnFingerTouch, this, !0), this.m_spTexture.node.on(cc.Node.EventType.TOUCH_START, this.OnFingerTouch, this, !0), this.m_spTexture.node.on(cc.Node.EventType.TOUCH_END, this.OnFingerTouch, this, !0), this.m_spTexture.node.on(cc.Node.EventType.TOUCH_CANCEL, this.OnFingerTouch, this, !0)
                }, e.prototype.OnFingerTouch = function() {}, e.prototype.ParseJsonData = function(t) {
                    this.CheckKioskGame(t[0].bind_info) ? this.ShowErrorMsg("", "Popup(id: " + this.pageID + ") cantOpenCount >= count", !0) : this.CheckEndTime(t[0].EndTime) ? this.ShowErrorMsg("C55", "Popup(id: " + this.pageID + ") Time Out", !0) : (this.m_btnAction.node.active = !1, this.m_buttnData = new p(t[0]), this.m_lblAction.string = t[0].ButtonText, this.m_strTextureName != t[0].BundleName ? this.LoadFile(t[0].BundleName, t[0].BundleVersion) : this.SetDataDone())
                }, e.prototype.OnClick = function() {
                    l.AudioMgr.Instance.Play("Btn_Select_y_v01", !1, 1), null != this.m_funcClicked && this.m_funcClicked(this.m_buttnData)
                }, e.prototype.LoadFile = function(t, e) {
                    return a(this, void 0, void 0, function() {
                        var o, n, i, r, a = this;
                        return s(this, function(s) {
                            switch (s.label) {
                                case 0:
                                    return o = "", (o = this.GetDownloadPath(e, "Popup", t)) ? -1 == t.lastIndexOf(".") ? [3, 2] : (n = null, [4, this.DownloadTexture(o).catch(function() {
                                        a.ShowErrorMsg("C38", "Can't Get Image (path:" + o + ")", !0)
                                    }).then(function(t) {
                                        n = t
                                    })]) : (console.warn("[TexturePage]Image Path (Popup/" + e + "/" + t + ") is NULL!! "), [2]);
                                case 1:
                                    return s.sent(), null == n ? [2] : (this.m_strTextureName = t, this.m_spTexture.spriteFrame = new cc.SpriteFrame(n), [3, 5]);
                                case 2:
                                    return i = null, [4, this.DownloadBundle(o).catch(function() {
                                        a.ShowErrorMsg("C38", "Can't Get Bundle (path:" + o + ")", !0)
                                    }).then(function(t) {
                                        i = t
                                    })];
                                case 3:
                                    return s.sent(), null == i ? [2] : (r = null, [4, this.DownloadPrefab(i, "main").catch(function() {
                                        a.ShowErrorMsg("C38", "Can't Get Prefab (path:" + o + ")", !0)
                                    }).then(function(t) {
                                        r = t
                                    })]);
                                case 4:
                                    if (s.sent(), null == r) return [2];
                                    cc.instantiate(r).parent = this.node, s.label = 5;
                                case 5:
                                    return this.SetDataDone(), [2]
                            }
                        })
                    })
                }, e.prototype.SetDataDone = function() {
                    this.m_buttnData.buttonType == d.NONE ? this.m_btnAction.node.active = !1 : this.m_btnAction.node.active = !0, this.m_funcResetComplete && this.m_funcResetComplete()
                }, r([y(cc.Button)], e.prototype, "m_btnAction", void 0), r([y(cc.Label)], e.prototype, "m_lblAction", void 0), r([y(cc.Sprite)], e.prototype, "m_spTexture", void 0), r([_], e)
            }(h);
            t.SinglePopupPage = e
        })(o.BulletinBoard || (o.BulletinBoard = {})), cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0,
        "./BulletinBoardData": "BulletinBoardData",
        "./BulletinBoardPage": "BulletinBoardPage"
    }],
    BulletinBoardTab: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "4d2b4TBj39ORpsbI5zHTmZQ", "BulletinBoardTab");
        var n, i = this && this.__extends || (n = function(t, e) {
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
            r = this && this.__decorate || function(t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.BulletinBoard = void 0;
        var a = cc._decorator,
            s = a.ccclass,
            l = a.property;
        (function(t) {
            var e = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.index = -1, e.id = "", e.m_nodeNormal = null, e.m_txtNormal = null, e.m_nodeFocus = null, e.m_txtFocus = null, e.m_nodeRedPoint = null, e.m_btn = null, e.m_isChangeSiblingIndex = !0, e.m_funcClicked = null, e
                }
                return i(e, t), e.prototype.Reset = function(t, e, o, n) {
                    this.index = t, this.id = e, this.m_funcClicked = n, this.m_txtNormal.string = o, this.m_txtFocus.string = o, this.m_nodeRedPoint.active = !1
                }, e.prototype.SetNormal = function() {
                    this.m_nodeFocus.active = !1, this.m_nodeNormal.active = !0, this.m_sizeNormal && this.node.setContentSize(this.m_sizeNormal), this.m_isChangeSiblingIndex && this.node.setSiblingIndex(this.index)
                }, e.prototype.SetFocus = function(t) {
                    void 0 === t && (t = 99), this.m_nodeFocus.active = !0, this.m_nodeNormal.active = !1, this.m_sizeFocus && this.node.setContentSize(this.m_sizeFocus), this.m_isChangeSiblingIndex && this.node.setSiblingIndex(t)
                }, e.prototype.ShowRedPoint = function() {
                    this.m_nodeRedPoint.active = !0
                }, e.prototype.HideRedPoint = function() {
                    this.m_nodeRedPoint.active = !1
                }, e.prototype.OnClick = function() {
                    this.m_nodeFocus.active || null != this.m_funcClicked && this.m_funcClicked(this)
                }, r([l(cc.Node)], e.prototype, "m_nodeNormal", void 0), r([l(cc.Label)], e.prototype, "m_txtNormal", void 0), r([l(cc.Size)], e.prototype, "m_sizeNormal", void 0), r([l(cc.Node)], e.prototype, "m_nodeFocus", void 0), r([l(cc.Label)], e.prototype, "m_txtFocus", void 0), r([l(cc.Size)], e.prototype, "m_sizeFocus", void 0), r([l(cc.Node)], e.prototype, "m_nodeRedPoint", void 0), r([l(cc.Button)], e.prototype, "m_btn", void 0), r([l], e.prototype, "m_isChangeSiblingIndex", void 0), r([s], e)
            }(cc.Component);
            t.Tab = e
        })(o.BulletinBoard || (o.BulletinBoard = {})), cc._RF.pop()
    }, {}],
    BulletinBoardTimerPopupPage: [function(t, e, o) {
        "use strict";
        cc._RF.push(e, "af7d1LubitC7oa3KCMpiNWu", "BulletinBoardTimerPopupPage");
        var n, i = this && this.__extends || (n = function(t, e) {
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
            r = this && this.__decorate || function(t, e, o, n) {
                var i, r = arguments.length,
                    a = r < 3 ? e : null === n ? n = Object.getOwnPropertyDescriptor(e, o) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(t, e, o, n);
                else
                    for (var s = t.length - 1; s >= 0; s--)(i = t[s]) && (a = (r < 3 ? i(a) : r > 3 ? i(e, o, a) : i(e, o)) || a);
                return r > 3 && a && Object.defineProperty(e, o, a), a
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        var a, s = t("./BulletinBoardSinglePopupPage"),
            l = t("./BulletinBoardData"),
            c = s.BulletinBoard.SinglePopupPage,
            u = l.BulletinBoard.ButtonData,
            h = t("../../../PopUpMgr/Scripts/PopUpTimerMgr"),
            p = t("../../../Net/LobbyClient"),
            d = cc._decorator,
            m = d.ccclass,
            _ = d.property;
        (function(t) {
            var e = function(t) {
                function e() {
                    var e = null !== t && t.apply(this, arguments) || this;
                    return e.m_timer = null, e.m_eventKey = "", e.m_logoMode = -1, e.m_categoryID = "", e.m_isTimerInited = !1, e
                }
                return i(e, t), e.prototype.onEnable = function() {
                    console.log("POS(Before): " + this.m_timer.node.position), this.m_timer.node.setPosition(2e3, 0), this.m_isTimerInited = !1, console.log("POS(After): " + this.m_timer.node.position)
                }, e.prototype.SetCustomData = function(t, e) {
                    this.m_logoMode = t, this.m_categoryID = e, this.SendJsonData()
                }, e.prototype.ResetData = function(t) {
                    null != t ? this.ParseJsonData(t) : this.SendJsonData()
                }, e.prototype.ParseJsonData = function(t) {
                    if (null != t)
                        if (this.CheckEndTime(t[0].EndTime)) this.ShowErrorMsg("C55", "Popup(id: " + this.pageID + ") Time Out", !0);
                        else {
                            this.m_btnAction.node.active = !1, this.m_buttnData = new u(t[0]), this.m_lblAction.string = t[0].ButtonText;
                            var e = 0;
                            this.m_eventKey.length > 0 && (SS.Common.GameEnvironment.ProjectSetting.hasOwnProperty("PopUp") && SS.Common.GameEnvironment.ProjectSetting.PopUp.hasOwnProperty(this.m_eventKey) ? (e = SS.Common.GameEnvironment.ProjectSetting.PopUp[this.m_eventKey], this.m_timer.InitTimer(e), this.m_isTimerInited = !0, this.m_timer.m_timesUpCallback = this.OnTimesUp.bind(this)) : this.OnTimesUp()), this.m_strTextureName == t[0].BundleName ? this.SetDataDone() : this.LoadFile(t[0].BundleName, t[0].BundleVersion)
                        }
                }, e.prototype.SetDataDone = function() {
                    console.log("%c DONE", "font-size:16px;font-weight:bold;color:blue;"), this.m_isTimerInited && this.m_timer.node.setPosition(0, 0), t.prototype.SetDataDone.call(this)
                }, e.prototype.OnTimesUp = function() {
                    this.ShowErrorMsg("C55", "event times up!", !0)
                }, e.prototype.SendJsonData = function() {
                    -1 != this.m_logoMode && "" != this.m_categoryID ? p.LobbyClient.Instance.GetUserClient.GetPopupContent(this.m_logoMode, this.m_categoryID, this.pageID, this.RecvJsonData.bind(this)) : cc.error("[BulletinBoard]Error! LogoMode: ", this.m_logoMode, "\nCategory ID:", this.m_categoryID)
                }, e.prototype.RecvJsonData = function(t, e) {
                    if (t == ArkSDK.HttpResult.OK && e && e.cmd_data && e.cmd_data.data) {
                        var o = e.cmd_data.data;
                        return o.length > 0 ? void this.ParseJsonData(o) : void this.ShowErrorMsg("C55", e, !0)
                    }
                    var n;
                    n = t == ArkSDK.HttpResult.Abort ? "S390" : t == ArkSDK.HttpResult.Condition ? "S391" : t == ArkSDK.HttpResult.Error ? "S392" : t == ArkSDK.HttpResult.NotReset ? "S393" : t == ArkSDK.HttpResult.Status ? "S394" : t == ArkSDK.HttpResult.Timeout ? "S395" : -1 == t ? "S386" : -6 == t ? "S388" : -7 == t ? "S387" : -37 == t ? "S389" : "S396", this.ShowErrorMsg(n, e, !1)
                }, r([_(h.default)], e.prototype, "m_timer", void 0), r([_({
                    displayName: "\u6d3b\u52d5/Popup\u7d00\u9304\u6642\u9593\u7684ID"
                })], e.prototype, "m_eventKey", void 0), r([m], e)
            }(c);
            t.TimerPopupPage = e
        })(a || (a = {})), cc._RF.pop()
    }, {
        "../../../Net/LobbyClient": void 0,
        "../../../PopUpMgr/Scripts/PopUpTimerMgr": void 0,
        "./BulletinBoardData": "BulletinBoardData",
        "./BulletinBoardSinglePopupPage": "BulletinBoardSinglePopupPage"
    }]
}, {}, ["BulletinBoardCategory", "BulletinBoardData", "BulletinBoardIndicator", "BulletinBoardManager", "BulletinBoardMenu", "BulletinBoardMultiplePage", "BulletinBoardPage", "BulletinBoardPageViewer", "BulletinBoardSinglePopupPage", "BulletinBoardTab", "BulletinBoardTimerPopupPage"]);