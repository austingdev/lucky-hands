window.__require = function e(t, o, i) {
    function n(r, s) {
        if (!o[r]) {
            if (!t[r]) {
                var l = r.split("/");
                if (l = l[l.length - 1], !t[l]) {
                    var u = "function" == typeof __require && __require;
                    if (!s && u) return u(l, !0);
                    if (a) return a(l, !0);
                    throw new Error("Cannot find module '" + r + "'")
                }
                r = l
            }
            var h = o[r] = {
                exports: {}
            };
            t[r][0].call(h.exports, function(e) {
                return n(t[r][1][e] || e)
            }, h, h.exports, e, t, o, i)
        }
        return o[r].exports
    }
    for (var a = "function" == typeof __require && __require, r = 0; r < i.length; r++) n(i[r]);
    return n
}({
    BulletinBoardCategory: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "77495/vERFEG5lHn1kQLUdz", "BulletinBoardCategory");
        var i = this && this.__decorate || function(e, t, o, i) {
                var n, a = arguments.length,
                    r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, o, r) : n(t, o)) || r);
                return a > 3 && r && Object.defineProperty(t, o, r), r
            },
            n = this && this.__awaiter || function(e, t, o, i) {
                return new(o || (o = Promise))(function(n, a) {
                    function r(e) {
                        try {
                            l(i.next(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function s(e) {
                        try {
                            l(i.throw(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                            e(t)
                        })).then(r, s)
                    }
                    l((i = i.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.BulletinBoard = void 0;
        const a = e("./BulletinBoardMenu"),
            r = e("./BulletinBoardTab");
        var s = a.BulletinBoard.Menu,
            l = r.BulletinBoard.Tab;
        const {
            ccclass: u,
            property: h
        } = cc._decorator;
        (function(e) {
            let t = class extends s {
                constructor() {
                    super(...arguments), this.m_firstTab = null
                }
                _onDestroy() {
                    SS.Common.ReleaseAsyncSource(), super._onDestroy()
                }
                AddCategory(e, t) {
                    if (0 == e) this.SetTabData(this.m_firstTab, t, e), t.haveRedPoint && this.m_firstTab.ShowRedPoint();
                    else {
                        let o = this.CreateTab(t.id).getComponent(l);
                        this.SetTabData(o, t, e), t.haveRedPoint && o.ShowRedPoint()
                    }
                }
                RemoveCategory(e) {
                    return n(this, void 0, void 0, function*() {
                        let t = this.m_aryTabs.splice(e, 1)[0];
                        this.m_layout.node.removeChild(t.node), this.m_aryTabs.forEach((e, t) => {
                            e.SetNormal(), e.node.setSiblingIndex(t)
                        }), this.InitMaxNode(), this.m_strCurFocusID = "", this.m_layout.enabled = !0, this.m_layout.updateLayout(), yield SS.Common.WaitForSeconds(.05), this.m_layout.enabled = !1, this.m_aryTabs.length > this.m_numScrollEnableCount ? (this.m_scrollView.enabled = !0, this.m_nodeBalckShadow.active = !0) : (this.m_scrollView.enabled = !1, this.m_nodeBalckShadow.active = !1)
                    })
                }
                InitDone() {
                    return n(this, void 0, void 0, function*() {
                        this.InitMaxNode(), this.m_layout.enabled = !0, this.m_layout.updateLayout(), yield SS.Common.WaitForSeconds(.05), this.m_layout.enabled = !1, this.m_aryTabs.forEach(e => {
                            e.SetNormal()
                        }), this.OnClick(this.m_firstTab), this.m_strCurFocusID = this.m_firstTab.id, this.m_aryTabs.length > this.m_numScrollEnableCount ? (this.m_scrollView.enabled = !0, this.m_nodeBalckShadow.active = !0) : (this.m_scrollView.enabled = !1, this.m_nodeBalckShadow.active = !1)
                    })
                }
                DespawnAllTab() {
                    if (null != this.m_aryTabs)
                        for (; this.m_aryTabs.length > 0;) {
                            let e = this.m_aryTabs.pop();
                            e && e.id == this.m_firstTab.id || (this.m_nodePool ? this.m_nodePool.put(e.node) : this.m_layout.node.removeChild(e.node))
                        }
                }
                ClearTabs() {
                    this.DespawnAllTab()
                }
                ShowRedPoint(e) {
                    this.m_aryTabs[e].ShowRedPoint()
                }
                HideRedPoint(e) {
                    this.m_aryTabs[e].HideRedPoint()
                }
                CustomClickEvent(e, t) {}
                JumpToTab(e) {
                    if (e < 0 || e >= this.m_aryTabs.length) return;
                    let t = this.m_aryTabs[e];
                    t.SetFocus(this.m_aryTabs.length);
                    let o = this.m_aryTabs.find(e => e.id == this.m_strCurFocusID);
                    null != o && o.SetNormal(), this.m_strCurFocusID = t.id, this.m_scrollView.enabled && this.m_scrollView.scrollToOffset(this.moveOffsetValue(e), .25, !0)
                }
            };
            i([h(l)], t.prototype, "m_firstTab", void 0), t = i([u], t), e.Category = t
        })(o.BulletinBoard || (o.BulletinBoard = {})), cc._RF.pop()
    }, {
        "./BulletinBoardMenu": "BulletinBoardMenu",
        "./BulletinBoardTab": "BulletinBoardTab"
    }],
    BulletinBoardData: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "1fc123XsipEno8jeFIH35Im", "BulletinBoardData"), Object.defineProperty(o, "__esModule", {
                value: !0
            }), o.BulletinBoard = void 0,
            function(e) {
                class t {
                    constructor() {
                        this.id = "", this.title = ""
                    }
                }
                e.BaseData = t, e.TabData = class extends t {
                    constructor() {
                        super(...arguments), this.callType = null, this.isShow = !0, this.isNeverClick = !0
                    }
                }, e.CategoryData = class extends t {
                    constructor() {
                        super(...arguments), this.menuAry = null, this.haveRedPoint = !1
                    }
                }, e.PageData = class extends t {
                    constructor() {
                        super(...arguments), this.type = i.SINGLE_TEXTURE, this.prefabName = "", this.data = null, this.nodePage = null
                    }
                };
                class o {
                    constructor(e) {
                        if (this.buttonType = n.NONE, this.buttonTitle = "", this.action = "", this.buttonTitle = e.ButtonText, e.ButtonAction) {
                            let t = e.ButtonAction.toUpperCase();
                            this.action = e.ButtonAction.substring(t.indexOf("=") + 1), this.buttonType = o.CheckButtonType(t)
                        } else this.buttonType = n.NONE
                    }
                    static CheckButtonType(e) {
                        return (e = e.toUpperCase()).indexOf("GAME_ID") > -1 ? n.SWITCH_GAME : e.indexOf("CUSTOM_ID") > -1 ? n.CUSTOM : e.indexOf("NEW_TAB") > -1 ? n.NEW_TAB : e.indexOf("REFRESH_URL") > -1 ? n.REFRESH_URL : e.indexOf("URL") > -1 ? n.URL : n.NONE
                    }
                }
                let i, n;
                e.ButtonData = o,
                    function(e) {
                        e[e.CUSTOM = 0] = "CUSTOM", e[e.SINGLE_TEXTURE = 1] = "SINGLE_TEXTURE", e[e.MULTIPLE_TEXTURE = 2] = "MULTIPLE_TEXTURE"
                    }(i = e.PageType || (e.PageType = {})),
                    function(e) {
                        e[e.NONE = -1] = "NONE", e[e.CUSTOM = 0] = "CUSTOM", e[e.SWITCH_GAME = 1] = "SWITCH_GAME", e[e.URL = 2] = "URL", e[e.NEW_TAB = 3] = "NEW_TAB", e[e.REFRESH_URL = 4] = "REFRESH_URL"
                    }(n = e.ButtonType || (e.ButtonType = {}))
            }(o.BulletinBoard || (o.BulletinBoard = {})), cc._RF.pop()
    }, {}],
    BulletinBoardIndicator: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d8f7epFW/5I8Z6svmwVdN4C", "BulletinBoardIndicator");
        var i = this && this.__decorate || function(e, t, o, i) {
            var n, a = arguments.length,
                r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, i);
            else
                for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, o, r) : n(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r), r
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.BulletinBoard = void 0;
        const {
            ccclass: n,
            property: a
        } = cc._decorator;
        (function(e) {
            let t = class extends cc.Component {
                constructor() {
                    super(...arguments), this.normalSpriteFrame = null, this.focusSpriteFrame = null, this.indicators = []
                }
                Refresh(e) {
                    if (e > this.indicators.length)
                        for (let t = 0; t < e; t++) this.indicators[t] || (this.indicators[t] = this.CreateIndicator());
                    else if (e < this.indicators.length)
                        for (let t = this.indicators.length - e; t > 0; --t) {
                            let e = this.indicators[t - 1];
                            this.node.removeChild(e.node), this.indicators.splice(t - 1, 1)
                        }
                }
                CreateIndicator() {
                    let e = new cc.Node,
                        t = e.addComponent(cc.Sprite);
                    return t.spriteFrame = this.normalSpriteFrame, e.parent = this.node, t
                }
                ChangeState(e) {
                    if (0 !== this.indicators.length && !(e >= this.indicators.length))
                        for (let t = 0; t < this.indicators.length; ++t) {
                            this.indicators[t].spriteFrame = t == e ? this.focusSpriteFrame : this.normalSpriteFrame
                        }
                }
            };
            i([a(cc.SpriteFrame)], t.prototype, "normalSpriteFrame", void 0), i([a(cc.SpriteFrame)], t.prototype, "focusSpriteFrame", void 0), t = i([n], t), e.Indicator = t
        })(o.BulletinBoard || (o.BulletinBoard = {})), cc._RF.pop()
    }, {}],
    BulletinBoardManager: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "e9dc4rJVJlJ+KTSktiNxfcp", "BulletinBoardManager");
        var i = this && this.__decorate || function(e, t, o, i) {
                var n, a = arguments.length,
                    r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, o, r) : n(t, o)) || r);
                return a > 3 && r && Object.defineProperty(t, o, r), r
            },
            n = this && this.__awaiter || function(e, t, o, i) {
                return new(o || (o = Promise))(function(n, a) {
                    function r(e) {
                        try {
                            l(i.next(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function s(e) {
                        try {
                            l(i.throw(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                            e(t)
                        })).then(r, s)
                    }
                    l((i = i.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const a = e("./BulletinBoardCategory"),
            r = e("./BulletinBoardMenu"),
            s = e("./BulletinBoardPage"),
            l = e("./BulletinBoardData");
        var u = a.BulletinBoard.Category,
            h = r.BulletinBoard.Menu,
            c = s.BulletinBoard.Page,
            d = l.BulletinBoard.CategoryData,
            m = l.BulletinBoard.TabData,
            g = l.BulletinBoard.PageData,
            _ = l.BulletinBoard.PageType,
            p = l.BulletinBoard.ButtonData,
            y = l.BulletinBoard.ButtonType;
        const T = e("../../../Component/BundleCtrl"),
            S = e("../../../Component/AudioMgr"),
            B = e("../../../Net/LobbyClient"),
            P = e("../../../PopupMessage/Script/PopupMsgMgr"),
            C = e("../../../Net/ClickLog"),
            f = e("../../../ModuleBase"),
            D = e("../../../Net/ClickLogEnum"),
            b = e("../../../Helper/Setting"),
            v = e("../../../Component/CookieCtrl");
        var w;
        (function(e) {
            e[e.ClickEvent = 0] = "ClickEvent", e[e.CategoryTabTypeFish = 1] = "CategoryTabTypeFish", e[e.MenuTabTypeFish = 2] = "MenuTabTypeFish", e[e.CategoryTabTypeSlot = 3] = "CategoryTabTypeSlot", e[e.MenuTabTypeSlot = 4] = "MenuTabTypeSlot", e[e.CategoryTabTypeHot = 5] = "CategoryTabTypeHot", e[e.CategoryTabTypeRules = 6] = "CategoryTabTypeRules", e[e.BulletinBoardClose = 7] = "BulletinBoardClose", e[e.CategoryTabTypeOther = 8] = "CategoryTabTypeOther", e[e.MenuTabTypeOther = 9] = "MenuTabTypeOther"
        })(w || (w = {}));
        const {
            ccclass: I,
            property: E
        } = cc._decorator;
        var R;
        (function(e) {
            let t = class extends f.default {
                constructor() {
                    super(...arguments), this.m_root = null, this.m_category = null, this.m_menu = null, this.m_PageRoot = null, this.m_Loading = null, this.m_CloseButton = null, this.m_aryPageData = null, this.m_aryCategoryData = null, this.m_lastCategoryIndex = -1, this.m_curCategoryIndex = -1, this.m_curTabIndex = 0, this.m_curPageID = "", this.m_autoScrollDelayTime = 5, this.m_isAutoScrollRuning = !1, this.m_isHandHold = !1, this.m_isWaitForPage = !1, this.m_logoMode = -1, this.m_needPlayClickAudio = !1, this.m_strHotID = "hot", this.m_isShow = !1, this.m_isInitFinish = !1, this.m_showCloseButton = null, this.m_isLoginProcess = !0, this.m_isSendLoadingOK = !1, this.m_isTestMode = !1
                }
                _onLoad() {
                    return n(this, void 0, void 0, function*() {
                        console.log("[BulletinBoard] _onLoad"), this.Init()
                    })
                }
                _onDestroy() {
                    return n(this, void 0, void 0, function*() {
                        this.node.targetOff(this), SS.Common.ReleaseAsyncSource(), this.StopAutoScrollPage(), this.Reset(), this.m_category._onDestroy(), this.m_menu._onDestroy(), this.m_aryPageData = null, this.m_aryCategoryData = null, this.m_category = null, this.m_menu = null, this.m_showCloseButton.Clear(), this.m_showCloseButton = null
                    })
                }
                onEnable() {
                    console.log("[BulletinBoard] onEnable"), this.m_isInitFinish && this.SendCategoryJsonData()
                }
                onDisable() {
                    if (console.log("[BulletinBoard]Disable:", this.m_isShow), this.m_isShow) {
                        let e = new cc.Event.EventCustom("close_news_board", !0);
                        this.node.dispatchEvent(e), this.Reset()
                    }
                }
                Init() {
                    this.m_root.active = !1, this.m_category.Hide(), this.m_menu.Hide(), this.m_Loading.active = !1, this.m_aryPageData = [], this.m_aryCategoryData = [], this.m_isAutoScrollRuning = !1, this.m_curCategoryIndex = -1, this.m_lastCategoryIndex = -1, this.m_curTabIndex = -1, this.m_curPageID = "", this.m_category.funcClicked = this.OnCategoryTabClicked.bind(this), this.m_menu.funcClicked = this.OnMenuTabClicked.bind(this), this.m_vecPageHaveMenuPos = this.m_PageRoot.position, this.m_logoMode = window.gd_LogoMode, this.m_needPlayClickAudio = !1, this.node.active = !1, this.m_isInitFinish = !0, this.m_showCloseButton = new SS.Common.Delegate, this.m_isLoginProcess = "1" === v.CookieCtrl.GetCookie("login_clicked"), this.m_isSendLoadingOK = !1
                }
                Reset() {
                    if (this.m_root.active = !1, this.StopAutoScrollPage(), this.unscheduleAllCallbacks(), this.m_isShow = !1, this.node.targetOff(this), this.m_category.Exit(), this.m_menu.Exit(), this.m_category.Hide(), this.m_menu.Hide(), this.m_Loading.active = !1, this.m_aryCategoryData = [], this.m_isAutoScrollRuning = !1, this.m_curCategoryIndex = -1, this.m_lastCategoryIndex = -1, this.m_curTabIndex = -1, this.m_curPageID = "", this.m_needPlayClickAudio = !1, this.m_PageRoot && this.m_PageRoot.children && this.m_PageRoot.childrenCount > 0 && this.m_PageRoot.removeAllChildren(), this.m_aryPageData)
                        for (; this.m_aryPageData.length > 0;) {
                            let e = this.m_aryPageData.pop();
                            e.nodePage && (e.nodePage.Exit(), e.nodePage._onDestroy(), e.nodePage.destroy())
                        }
                    cc.log("[BulletinBoard] Reset Finished!")
                }
                ShowCategoryContent(e, t = !1) {
                    if (console.warn("[BulletinBoard]Category <" + e + ">"), !t && this.m_curCategoryIndex > -1 && this.m_aryCategoryData[this.m_curCategoryIndex].id == e) return !1;
                    this.KillAutoScroll(), this.m_lastCategoryIndex = this.m_curCategoryIndex, this.m_curCategoryIndex = this.m_aryCategoryData.findIndex(t => t.id == e);
                    let o = this.m_aryCategoryData[this.m_curCategoryIndex];
                    return this.m_menu.Reset(o.menuAry), null == o.menuAry || 0 == o.menuAry.length ? (this.m_menu.Hide(), console.warn("[BulletinBoard]Category <" + e + "> menuAry : ", o.menuAry), this.ShowErrorMsg("C55", "This Category(" + e + ") doesn't had List Data", this.RemoveCurrentCategoryIndex.bind(this)), !1) : 0 == this.m_menu.length() ? (this.ShowPageByID(o.menuAry[0].id), this.m_menu.Hide(), this.m_PageRoot.setPosition(0, this.m_vecPageHaveMenuPos.y, this.m_vecPageHaveMenuPos.z), this.CheckCategoryRedPointStatus(o.menuAry[0].id), !0) : (this.m_needPlayClickAudio = !1, this.m_menu.Show(), this.m_menu.JumpToTab(0), this.m_PageRoot.setPosition(this.m_vecPageHaveMenuPos), this.m_aryCategoryData[this.m_curCategoryIndex].id == this.m_strHotID && this.m_menu.length() > 1 && this.StartAutoScroll(), !0)
                }
                ShowPageByID(e) {
                    if (console.log("[BulletinBoard]ShowPageByID <" + e + ">"), e != this.m_curPageID) {
                        this.HideLastPage(this.m_curPageID);
                        let t = this.m_aryCategoryData[this.m_curCategoryIndex];
                        if (t.menuAry && t.menuAry.length > 0) {
                            let o = t.menuAry[this.m_curTabIndex];
                            if (!this.CheckPageTypeIsCustom(o.callType)) return void this.SendPopupJsonData(t.id, e)
                        }
                    }
                    let t = this.m_aryPageData.find(t => t.id == e);
                    if (null == t) {
                        console.warn("[BulletinBoard]I can't find Page <" + e + "> data!"), (t = new g).id = e;
                        let o = this.m_aryCategoryData[this.m_curCategoryIndex].menuAry[this.m_curTabIndex];
                        this.CheckPageTypeIsCustom(o.callType) && (t.type = _.CUSTOM, t.prefabName = "BulletinBoard_" + o.callType), this.m_aryPageData.push(t)
                    }
                    this.ShowPage(t)
                }
                CheckPageTypeIsCustom(e) {
                    return !("image" == e)
                }
                ShowPage(e) {
                    console.log("[BulletinBoard]ShowPage:", e), this.m_curPageID = e.id, null == e.nodePage ? this.CreatePage(e) : (this.CheckAutoScroll(e), e.nodePage.ResetData(e.data), e.nodePage.Show(), this.m_Loading.active = !1), this.m_needPlayClickAudio = !0
                }
                HideLastPage(e) {
                    if (e.length > 0) {
                        let t = this.m_aryPageData.find(t => t.id == e);
                        if (null == t) return console.warn("[BulletinBoard]I can't find last <" + e + "> page data!"), void this.m_aryPageData.forEach(e => {
                            e.nodePage && e.nodePage.Hide()
                        });
                        t.nodePage && t.nodePage.Hide()
                    } else this.m_aryPageData.forEach(e => {
                        e.nodePage && e.nodePage.Hide()
                    })
                }
                CreatePage(e) {
                    return n(this, void 0, void 0, function*() {
                        let t = "",
                            o = !1;
                        switch (e.type) {
                            case _.SINGLE_TEXTURE:
                                t = "Prefabs/BulletinBoardSinglePopupPage";
                                break;
                            case _.MULTIPLE_TEXTURE:
                                t = "Prefabs/BulletinBoardMultiplePage";
                                break;
                            case _.CUSTOM:
                            default:
                                t = "Prefabs/" + e.prefabName, o = !0
                        }
                        let i = yield T.default.Instance.GetOtherPrefab("BulletinBoard", t), n = cc.instantiate(i);
                        n.parent = this.m_PageRoot, e.nodePage = n.getComponent(c), e.nodePage.SetData(e.id, e.data, this.OnPageSettingComplete.bind(this), this.OnPageBtnClicked.bind(this), this.OnPageShowErrorMsg.bind(this)), o && (e.nodePage.SetCustomData(this.m_logoMode, this.m_aryCategoryData[this.m_curCategoryIndex].id), this.m_Loading.active = !0), e.nodePage.Show(), this.CheckAutoScroll(e)
                    })
                }
                RemoveCurrentMenuTab() {
                    let e = this.m_aryCategoryData[this.m_curCategoryIndex].menuAry[this.m_curTabIndex].id;
                    this.RemoveTargetTabID(e)
                }
                RemoveTargetTabID(e) {
                    return n(this, void 0, void 0, function*() {
                        let t = this.m_aryCategoryData[this.m_curCategoryIndex].id,
                            o = -1,
                            i = this.m_curCategoryIndex;
                        for (let n = 0; n < this.m_aryCategoryData.length; n++) - 1 != (o = this.m_aryCategoryData[n].menuAry.findIndex(t => t.id == e)) && (this.m_aryCategoryData[n].menuAry.splice(o, 1), 0 == this.m_aryCategoryData[n].menuAry.length && (this.m_aryCategoryData[n].id == t && (i = Math.max(this.m_curCategoryIndex - 1, 0)), this.m_aryCategoryData.splice(n, 1), this.m_category.RemoveCategory(n)));
                        yield SS.Common.WaitForSeconds(.05), cc.log("[BulletinBoard]RemoveTargetTabID<" + e + "> (new category: " + i + ")"), this.m_aryCategoryData.length > 0 ? (this.m_category.JumpToTab(i), this.ShowCategoryContent(this.m_aryCategoryData[i].id, !0)) : this.OnCloseClicked()
                    })
                }
                RemoveCurrentCategoryIndex() {
                    this.RemoveTargetCategoryIndex(this.m_curCategoryIndex)
                }
                RemoveTargetCategoryIndex(e) {
                    return n(this, void 0, void 0, function*() {
                        this.m_aryCategoryData.splice(e, 1), this.m_category.RemoveCategory(e);
                        let t = this.m_curCategoryIndex;
                        e == this.m_curCategoryIndex && (t = Math.max(this.m_curCategoryIndex - 1, 0)), yield SS.Common.WaitForSeconds(.05), cc.log("[BulletinBoard]RemoveTargetCategoryID (new category: " + t + ")"), this.m_aryCategoryData.length > 0 ? (this.m_category.JumpToTab(t), this.ShowCategoryContent(this.m_aryCategoryData[t].id, !0)) : this.OnCloseClicked()
                    })
                }
                SendCategoryJsonData() {
                    this.m_Loading.active = !0, this.m_CloseButton.active = !1, this.m_isShow = !0, this.m_isTestMode ? this.OnClickTest() : B.LobbyClient.Instance.GetUserClient.GetPopupBillBoard(this.m_logoMode, this.RecvCategoryJsonData.bind(this))
                }
                RecvCategoryJsonData(e, t) {
                    if (!this.CheckError("getPopupBillBoard", e, t)) try {
                        this.m_category.ClearTabs(), this.m_aryCategoryData = [];
                        let e = t.cmd_data.data,
                            i = null,
                            n = 0,
                            a = 0,
                            r = 0,
                            s = !1;
                        cc.log("[BulletinBoard]RecvCategoryJsonData: ", e), e.forEach(e => {
                            r = 0;
                            let t = new d;
                            if (t.id = e.TitleID, t.title = e.TitleName, e.hasOwnProperty("TitleInfo") && (i = e.TitleInfo).length > 0)
                                for (t.menuAry = [], n = 0; n < i.length; n++) {
                                    let e = i[n];
                                    if (!(s = this.CheckKioskGame(e.bind_info))) {
                                        let o = new m;
                                        o.id = e.TagID, o.title = e.TagName, o.callType = e.TagType, o.isShow = e.TagShow, o.isNeverClick = !this.CheckCookieForRedPoint(o.id), t.menuAry.push(o), o.isNeverClick && r++
                                    }
                                }
                            t.menuAry.length > 0 && (r > 0 && (t.haveRedPoint = !0), this.m_aryCategoryData.push(t), this.m_category.AddCategory(a, t), a++)
                        }), i = null, e = null, this.m_root.active = !0, this.m_isLoginProcess && C.ClickLog.DirectSend(D.LogName.PlayerConversion, D.LogType_PlayerConversion.PlayerLogin, D.LogEvent_Login.ShowBulletinBoard);
                        let l = b.default.GetSetting("BuletinBoard"),
                            u = 0;
                        l && l.hasOwnProperty("Timeout") && (u = l.Timeout), window.Timeout && (u = window.Timeout), this.scheduleOnce(this.ShowCloseButton, u), this.m_showCloseButton.Insert(this.ShowCloseButton, this), this.m_category.InitDone(), this.m_category.Show(), console.log("[BulletinBoard]\u6700\u5f8c", this.m_aryCategoryData)
                    } catch (o) {
                        console.error("Error!", o), this.ShowErrorMsg("C54", "Cmd 'getPopupBillBoard' is error")
                    }
                }
                CheckKioskGame(e) {
                    if (!e || null == e) return !1;
                    let t = !1,
                        o = p.CheckButtonType(e),
                        i = e.substring(e.indexOf("=") + 1);
                    if (o == y.SWITCH_GAME) {
                        i = this.GetThemeIdByGameName(i);
                        let e = SS.Common.GameEnvironment.GameSetting.kioskOpenGameList;
                        t = !0;
                        for (let o = 0; o < e.length; o++)
                            if (e[o] == i) {
                                t = !1;
                                break
                            }
                    } else o == y.CUSTOM && SS.Common.GameEnvironment.GameSetting.hasOwnProperty("active_event") && (t = !SS.Common.GameEnvironment.GameSetting.active_event.hasOwnProperty(i) || !SS.Common.GameEnvironment.GameSetting.active_event[i]);
                    return t
                }
                SendPopupJsonData(e, t) {
                    this.m_Loading.active = !0, this.m_isTestMode ? this.TestToGetPopupJsonData(t) : B.LobbyClient.Instance.GetUserClient.GetPopupContent(this.m_logoMode, e, t, this.RecvPopupJsonData.bind(this))
                }
                RecvPopupJsonData(e, t) {
                    if (!this.CheckError("getPopupContent", e, t)) try {
                        let e = this.m_aryCategoryData[this.m_curCategoryIndex].menuAry[this.m_curTabIndex].id,
                            i = t.cmd_data.data,
                            n = this.m_aryPageData.find(t => t.id == e);
                        if (null == n) {
                            if ((n = new g).id = e, n.data = i, cc.log("[BulletinBoard]RecvPopupJsonData: " + n.id + "\ndata:", n.data), n.data)
                                if (1 == i.length) {
                                    let e = i[0].BundleName;
                                    e.indexOf(".png") > -1 ? n.type = _.SINGLE_TEXTURE : (n.type = _.CUSTOM, n.prefabName = e)
                                } else n.type = _.MULTIPLE_TEXTURE;
                            this.m_aryPageData.push(n)
                        } else n.data = i;
                        this.ShowPage(n)
                    } catch (o) {
                        console.error("Error!", o), this.ShowErrorMsg("C54", "Cmd 'getPopupContent' is error")
                    }
                }
                StartAutoScroll() {
                    this.m_isAutoScrollRuning = !0, this.node.on(cc.Node.EventType.MOUSE_DOWN, this.OnFingerDown, this, !0), this.node.on(cc.Node.EventType.MOUSE_UP, this.OnFigerUp, this, !0), this.node.on(cc.Node.EventType.TOUCH_START, this.OnFingerDown, this, !0), this.node.on(cc.Node.EventType.TOUCH_END, this.OnFigerUp, this, !0), this.node.on(cc.Node.EventType.TOUCH_CANCEL, this.OnFigerUp, this, !0), this.node.on(cc.Node.EventType.TOUCH_MOVE, this.OnFingerDown, this, !0), this.PlayAutoScrollPage()
                }
                KillAutoScroll() {
                    this.m_isHandHold = !1, this.m_isAutoScrollRuning = !1, this.StopAutoScrollPage(), this.node.targetOff(this)
                }
                PlayAutoScrollPage() {
                    this.m_isAutoScrollRuning && (this.StopAutoScrollPage(), this.schedule(this.DoAutoScrollPage, this.m_autoScrollDelayTime))
                }
                DoAutoScrollPage() {
                    this.m_isAutoScrollRuning ? this.m_Loading.active || this.m_isHandHold || this.m_isWaitForPage || (this.m_curTabIndex++, this.m_curTabIndex >= this.m_menu.length() && (this.m_curTabIndex = 0), this.m_menu.JumpToTab(this.m_curTabIndex)) : this.StopAutoScrollPage()
                }
                StopAutoScrollPage() {
                    this.unschedule(this.DoAutoScrollPage)
                }
                OnFingerDown() {
                    this.m_isHandHold = !0, this.StopAutoScrollPage()
                }
                OnFigerUp() {
                    this.m_isHandHold = !1, this.PlayAutoScrollPage()
                }
                CheckAutoScroll(e) {
                    this.m_aryCategoryData[this.m_curCategoryIndex].id == this.m_strHotID && this.m_menu.length() > 1 ? e.nodePage.CheckNeedAutoScrollDelay(this.OnMultiplePageEnd.bind(this)) ? this.OnMultiplePagePlaying() : this.m_isWaitForPage && this.OnMultiplePageEnd() : e.nodePage.CheckNeedAutoScrollDelay(null)
                }
                OnMultiplePagePlaying() {
                    this.m_isWaitForPage = !0, this.StopAutoScrollPage()
                }
                OnMultiplePageEnd() {
                    this.m_isWaitForPage = !1, this.PlayAutoScrollPage()
                }
                OnCloseClicked() {
                    this.node.active ? (this.ClickLog(w.BulletinBoardClose), this.m_isLoginProcess && C.ClickLog.DirectSend(D.LogName.PlayerConversion, D.LogType_PlayerConversion.PlayerLogin, D.LogEvent_Login.LeaveBulletinBoard), this.m_isLoginProcess = !1, this.node.active = !1, S.AudioMgr.Instance.Play("Btn_Select_n_v01", !1, 1)) : console.warn("[BulletinBoard]some one call close again!")
                }
                OnCategoryTabClicked(e, t, o = !1) {
                    let i = this.m_curTabIndex,
                        n = this.m_curCategoryIndex;
                    this.m_needPlayClickAudio && S.AudioMgr.Instance.Play("Btn_Sort", !1, 1), this.m_curTabIndex = 0;
                    let a = this.ShowCategoryContent(e);
                    if (this.m_isWaitForPage && this.OnMultiplePageEnd(), a && o && this.m_aryCategoryData[t] && this.m_aryCategoryData[t].title) {
                        let e = w.CategoryTabTypeOther;
                        switch (this.m_aryCategoryData[t].title) {
                            case "SLOT":
                                e = w.CategoryTabTypeSlot;
                                break;
                            case "HOT":
                                e = w.CategoryTabTypeHot;
                                break;
                            case "FISH":
                                e = w.CategoryTabTypeFish;
                                break;
                            case "RULES":
                                e = w.CategoryTabTypeRules;
                                break;
                            default:
                                e = w.CategoryTabTypeOther
                        }
                        this.ClickLog(e, n, i, this.m_aryCategoryData[t].title)
                    }
                }
                OnMenuTabClicked(e, t, o = !1) {
                    let i = this.m_curTabIndex,
                        n = this.m_curCategoryIndex;
                    if (this.m_needPlayClickAudio && S.AudioMgr.Instance.Play("Btn_LeftTabClick", !1, 1), this.m_curTabIndex = t, console.log("[BulletinBaord]OnMenuTabClicked > ", this.m_curTabIndex), this.ShowPageByID(e), o && this.m_aryCategoryData[n] && this.m_aryCategoryData[n].title) switch (this.m_aryCategoryData[n].title) {
                        case "SLOT":
                            this.ClickLog(w.MenuTabTypeSlot, n, i);
                            break;
                        case "FISH":
                            this.ClickLog(w.MenuTabTypeFish, n, i);
                            break;
                        default:
                            this.ClickLog(w.MenuTabTypeOther, n, i)
                    }
                    this.CheckCategoryRedPointStatus(e)
                }
                OnPageSettingComplete() {
                    this.m_Loading.active = !1, this.m_isLoginProcess && !1 === this.m_isSendLoadingOK && (this.m_isSendLoadingOK = !0, C.ClickLog.DirectSend(D.LogName.PlayerConversion, D.LogType_PlayerConversion.PlayerLogin, D.LogEvent_Login.BulletinBoardLoadingFinish));
                    let e = b.default.GetSetting("BuletinBoard"),
                        t = 0;
                    e && e.hasOwnProperty("Delay") && (t = e.Delay), window.Delay && (t = window.Delay), this.scheduleOnce(this.DelayShow, t)
                }
                DelayShow() {
                    this.m_showCloseButton.Notify()
                }
                ShowCloseButton() {
                    this.unschedule(this.ShowCloseButton), this.m_showCloseButton.Clear(), this.m_CloseButton.active = !0
                }
                OnPageBtnClicked(e) {
                    return n(this, void 0, void 0, function*() {
                        let t = "",
                            o = e.action;
                        switch (this.ClickLog(w.ClickEvent), e.buttonType) {
                            case y.CUSTOM:
                                t = "call_activity";
                                break;
                            case y.SWITCH_GAME:
                                t = "call_switch_game", C.ClickLog.EntryPoint = D.LogEvent_EntryPoint.BulletinBoard, o = this.GetThemeIdByGameName(o);
                                break;
                            case y.URL:
                                t = "call_webview";
                                break;
                            case y.NEW_TAB:
                                t = "";
                                let i = window.open("about:blank", "redirect");
                                i.opener = null, i.location.href = o;
                                break;
                            case y.REFRESH_URL:
                                yield C.ClickLog.SendRecordedList("PopUp"), t = "", window.location.href = o
                        }
                        if (t.length > 0) {
                            let e = new cc.Event.EventCustom(t, !0);
                            e.setUserData(o), this.node.dispatchEvent(e)
                        }
                    })
                }
                CheckCategoryRedPointStatus(e) {
                    let t = 0;
                    for (let o = 0; o < this.m_aryCategoryData.length; o++) {
                        let i = this.m_aryCategoryData[o];
                        i.haveRedPoint ? (t = 0, i.menuAry.forEach(o => {
                            o.id == e && (o.isNeverClick = !1, this.SetCookieForRedPoint(e)), o.isNeverClick && t++
                        }), 0 == t && (this.m_category.HideRedPoint(o), i.haveRedPoint = !1)) : this.m_category.HideRedPoint(o)
                    }
                }
                SetCookieForRedPoint(e) {
                    let t = this.GetRedPointKey(e);
                    JSUtility.IsSupportLocalStorage() ? localStorage.setItem(t, "1") : JSUtility.IsSupportCookie() && (document.cookie = t + "=1;")
                }
                CheckCookieForRedPoint(e) {
                    let t = this.GetRedPointKey(e),
                        o = "";
                    return JSUtility.IsSupportLocalStorage() ? o = localStorage.getItem(t) : JSUtility.IsSupportCookie() && (o = JSUtility.GetCookie(t)), null != o
                }
                DelCookieForRedPoint(e) {
                    let t = this.GetRedPointKey(e);
                    JSUtility.IsSupportLocalStorage() ? localStorage.removeItem(t) : JSUtility.IsSupportCookie() && (document.cookie = t + "=; expires=100")
                }
                GetRedPointKey(e) {
                    return "RED_POINT_" + e
                }
                GetThemeIdByGameName(e) {
                    return SS.Common.GameEnvironment.GameSetting.hasOwnProperty("Icon") && SS.Common.GameEnvironment.GameSetting.Icon.hasOwnProperty(e) && SS.Common.GameEnvironment.GameSetting.Icon[e].hasOwnProperty("GameName") ? SS.Common.GameEnvironment.GameSetting.Icon[e].GameName : ""
                }
                CheckError(e, t, o) {
                    console.log("[BulletinBoard] Get: ", e, "\nstatus: ", t, "\nresult:", o);
                    let i = "getPopupBillBoard" == e;
                    if (t == ArkSDK.HttpResult.OK && o && o.cmd_data && o.cmd_data.data) return !(o.cmd_data.data.length > 0 || (i ? (console.error("[BulletinBoard] ERROR!", o), this.node.active = !1) : this.ShowErrorMsg("C55", o, this.RemoveCurrentMenuTab.bind(this)), 0));
                    let n = "";
                    return n = t == ArkSDK.HttpResult.Abort ? i ? "S379" : "S390" : t == ArkSDK.HttpResult.Condition ? i ? "S380" : "S391" : t == ArkSDK.HttpResult.Error ? i ? "S381" : "S392" : t == ArkSDK.HttpResult.NotReset ? i ? "S382" : "S393" : t == ArkSDK.HttpResult.Status ? i ? "S383" : "S394" : t == ArkSDK.HttpResult.Timeout ? i ? "S384" : "S395" : -1 == t ? i ? "S376" : "S386" : -6 == t ? i ? "S378" : "S388" : -7 == t ? i ? "S377" : "S387" : -37 != t || i ? i ? "S385" : "S396" : "S389", i ? (console.error("[BulletinBoard] ERROR!", n, o), this.node.active = !1) : this.ShowErrorMsg(n, o), !0
                }
                OnPageShowErrorMsg(e, t, o, i) {
                    if (i)
                        if (t.length > 0) {
                            let i = this;
                            this.ShowErrorMsg(t, o, () => {
                                i.RemoveTargetTabID(e)
                            })
                        } else this.RemoveTargetTabID(e);
                    else this.ShowErrorMsg(t, o)
                }
                ShowErrorMsg(e, t, o) {
                    console.error("[BulletinBoard] ERROR!", e, t), P.PopupMsgMgr.Instance.ShowPopMsg(P.PopupPriority.Info, e, "", t, o || this.OnCloseClicked.bind(this))
                }
                ClickLog(e, t = this.m_curCategoryIndex, o = this.m_curTabIndex, i = "") {
                    if (this.m_aryCategoryData && this.m_aryCategoryData[t] && this.m_aryCategoryData[t].menuAry && this.m_aryCategoryData[t].menuAry[o]) {
                        let n = this.m_aryCategoryData[t].menuAry[o].id,
                            a = this.m_aryPageData.find(e => e.id == n);
                        console.log("[\u5e03\u544a\u6b04 ClickLog] pageData = ", a);
                        let r = JSON.parse("{}");
                        if (a && a.nodePage) {
                            let t = a.nodePage.GetPopupID();
                            if (console.warn("[BulletinBoard] pageData popupID  = " + a.nodePage.GetPopupID()), a.data && "" != t) {
                                let e = null;
                                for (let o = 0; o < a.data.length; o++)
                                    if (a.data[o].PopupID == t) {
                                        e = a.data[o].extra_data;
                                        break
                                    }
                                null != e && (r.PopUpName = e.Name, r.PopUpType = e.Type, r.PopUpVersion = e.Version)
                            } else r.PopUpName = a.id;
                            r.PopUpEvent = e, r.Source = this.m_isLoginProcess ? D.LogEvent_PopUpSource.GD_EnterLobby : D.LogEvent_PopUpSource.GD_Bullettin, i && (r.PopUpGameType = i), C.ClickLog.SendLog(D.LogName.PopUp, 0, 0, "Lobby", r)
                        }
                    }
                }
                OnClickTest() {
                    let e = {};
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
                    }, this.scheduleOnce(() => {
                        this.RecvCategoryJsonData(0, e)
                    }, .25)
                }
                TestToGetPopupJsonData(e) {
                    console.log("[BulletinBoard]GetPopupJsonData: ", e);
                    let t = [];
                    if ("PuzzleEgg" == e) {
                        let e = {
                            BundleName: "PopUp_PuzzleEgg.png",
                            ButtonText: "GO",
                            ButtonAction: "CUSTOM_ID=PuzzleEgg",
                            BundleVersion: "Test",
                            EndTime: "2028-10-27T07:10:00"
                        };
                        t.push(e)
                    } else if ("bear" == e) {
                        let e = ["PLAY", "OK", "GO", "Close"];
                        for (let o = 0; o < 4; o++) {
                            let i = {};
                            i.BundleName = "Test_" + o + ".png", i.ButtonText = e[o], i.ButtonAction = "GAME_ID=126001", i.EndTime = "2030-10-30T18:30:00", i.BundleVersion = "Test", t.push(i)
                        }
                    } else if (0 == e.indexOf("way")) {
                        let o = ["Test_A.png", "Test_B.png", "Test_C.png", "Test_D.png"],
                            i = {};
                        i.BundleName = o[e.substring(3, 4)], i.ButtonText = "OK", i.ButtonAction = "GAME_ID=126001", i.EndTime = "2030-10-30T18:39:00", i.BundleVersion = "Test", t.push(i)
                    } else if ("atomic_link" == e) {
                        let e = {
                            BundleName: "PopUp_Atomiclink.png",
                            ButtonText: "CLOSE",
                            ButtonAction: "CLOSE",
                            EndTime: "2030-10-30T18:39:00",
                            BundleVersion: "Test"
                        };
                        t.push(e)
                    } else if ("monster_frenzy" == e) {
                        let e = {
                            BundleName: "Popup_MonstersFrenzy.png",
                            ButtonText: "SHOOT",
                            ButtonAction: "GAME_ID=148001",
                            EndTime: "2030-10-30T18:39:00",
                            BundleVersion: "Test"
                        };
                        t.push(e)
                    } else if ("fish_lucky" == e) {
                        let e = {
                            BundleName: "PopUp_LuckyShamrock.png",
                            ButtonText: "TEST",
                            ButtonAction: "GAME_ID=149001",
                            BundleVersion: "Test",
                            EndTime: "2030-10-30T18:39:00"
                        };
                        t.push(e)
                    } else if ("ocean_heart" == e) {
                        let e = {
                            BundleName: "PopUp_OceanHeart_pre.png",
                            ButtonText: "",
                            ButtonAction: "CLOSE",
                            BundleVersion: "Test",
                            EndTime: "2030-10-20T18:39:00"
                        };
                        t.push(e), e.BundleName = "PopUp_OceanHeart.png", e.ButtonText = "PLAY", e.ButtonAction = "GAME_ID=158001", e.BundleVersion = "Test", e.EndTime = "2030-10-20T18:39:00", t.push(e)
                    } else if ("rules" == e) {
                        let e = {
                            BundleName: "Regulation_template.png",
                            ButtonText: "C",
                            ButtonAction: "",
                            BundleVersion: "Test",
                            EndTime: "2030-10-30T18:39:00"
                        };
                        t.push(e)
                    } else if ("kill" == e) {
                        let e = {
                            BundleName: "Regulation_template.png",
                            ButtonText: "C",
                            ButtonAction: "",
                            BundleVersion: "Test",
                            EndTime: "2021-11-01T18:39:00"
                        };
                        t.push(e)
                    }
                    let o = {};
                    o.cmd_data = {
                        data: t
                    }, this.RecvPopupJsonData(0, o)
                }
            };
            i([E(cc.Node)], t.prototype, "m_root", void 0), i([E(u)], t.prototype, "m_category", void 0), i([E(h)], t.prototype, "m_menu", void 0), i([E(cc.Node)], t.prototype, "m_PageRoot", void 0), i([E(cc.Node)], t.prototype, "m_Loading", void 0), i([E(cc.Node)], t.prototype, "m_CloseButton", void 0), i([E({
                displayName: "\u6e2c\u8a66\u8cc7\u6599\u55ce"
            })], t.prototype, "m_isTestMode", void 0), t = i([I], t), e.BulletinBoardManager = t
        })(R || (R = {})), cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0,
        "../../../Component/BundleCtrl": void 0,
        "../../../Component/CookieCtrl": void 0,
        "../../../Helper/Setting": void 0,
        "../../../ModuleBase": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "../../../Net/LobbyClient": void 0,
        "../../../PopupMessage/Script/PopupMsgMgr": void 0,
        "./BulletinBoardCategory": "BulletinBoardCategory",
        "./BulletinBoardData": "BulletinBoardData",
        "./BulletinBoardMenu": "BulletinBoardMenu",
        "./BulletinBoardPage": "BulletinBoardPage"
    }],
    BulletinBoardMenu: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "d49d5pQzJNFWq+NUn4QZtHp", "BulletinBoardMenu");
        var i = this && this.__decorate || function(e, t, o, i) {
            var n, a = arguments.length,
                r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, i);
            else
                for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, o, r) : n(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r), r
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.BulletinBoard = void 0;
        var n = e("./BulletinBoardTab").BulletinBoard.Tab;
        const {
            ccclass: a,
            property: r
        } = cc._decorator;
        (function(e) {
            let t = class extends cc.Component {
                constructor() {
                    super(...arguments), this.funcClicked = null, this.m_nodeRoot = null, this.m_scrollView = null, this.m_nodeBalckShadow = null, this.m_layout = null, this.m_tabPrefab = null, this.m_nodeLastest = null, this.m_numScrollEnableCount = 5, this.m_aryTabs = [], this.m_nodePool = null, this.m_strCurFocusID = ""
                }
                isShowing() {
                    return this.m_nodeRoot.active
                }
                length() {
                    return this.m_aryTabs.length
                }
                _onDestroy() {
                    this.Exit(), this.m_aryTabs = null, this.funcClicked = null
                }
                Exit() {
                    this.DespawnAllTab(), this.m_nodePool && (this.m_nodePool.clear(), this.m_nodePool = null), this.m_aryTabs = [], this.m_strCurFocusID = ""
                }
                Show() {
                    this.m_nodeRoot && (this.m_nodeRoot.active = !0)
                }
                Hide() {
                    this.m_nodeRoot && (this.m_nodeRoot.active = !1)
                }
                Reset(e) {
                    this.DespawnAllTab(), this.m_strCurFocusID = "", null != e && (e.forEach((e, t) => {
                        if (!e.isShow) return;
                        let o = this.CreateTab(e.id).getComponent(n);
                        this.SetTabData(o, e, t), e.isNeverClick && o.ShowRedPoint()
                    }), this.m_aryTabs.length > this.m_numScrollEnableCount ? (this.m_scrollView.enabled = !0, this.m_nodeBalckShadow.active = !0) : (this.m_scrollView.enabled = !1, this.m_nodeBalckShadow.active = !1), this.InitMaxNode(), this.m_aryTabs.forEach(e => {
                        e.SetNormal()
                    }), this.m_layout.updateLayout(), this.m_scrollView.vertical && this.m_scrollView.scrollToTop(0), this.m_scrollView.horizontal && this.m_scrollView.scrollToLeft(0))
                }
                JumpToTab(e) {
                    e < 0 || e >= this.m_aryTabs.length || (this.OnClick(this.m_aryTabs[e]), this.m_scrollView.enabled && this.m_scrollView.scrollToOffset(this.moveOffsetValue(e), .25, !0))
                }
                DespawnAllTab() {
                    if (null != this.m_aryTabs)
                        for (; this.m_aryTabs.length > 0;) this.m_nodePool ? this.m_nodePool.put(this.m_aryTabs.pop().node) : this.m_layout.node.removeChild(this.m_aryTabs.pop().node)
                }
                CreateTab(e) {
                    null == this.m_nodePool && (this.m_nodePool = new cc.NodePool);
                    let t = this.m_nodePool.get();
                    return null == t && (t = cc.instantiate(this.m_tabPrefab)), t.parent = this.m_layout.node, t.name = "Tab(" + e + ")", t
                }
                SetTabData(e, t, o) {
                    e.Reset(o, t.id, t.title, this.OnClick.bind(this)), this.m_aryTabs.push(e)
                }
                OnClick(e, t = !1) {
                    if (e.id == this.m_strCurFocusID) return;
                    e.SetFocus(this.m_aryTabs.length);
                    let o = this.m_aryTabs.find(e => e.id == this.m_strCurFocusID);
                    null != o && o.SetNormal(), this.CustomClickEvent(e, o), this.m_strCurFocusID = e.id, null != this.funcClicked && this.funcClicked(e.id, e.index, t)
                }
                CustomClickEvent(e, t) {
                    e && e.HideRedPoint()
                }
                moveOffsetValue(e) {
                    const t = new cc.Vec2;
                    return this.m_scrollView.horizontal ? t.x = e * this.m_aryTabs[e].node.width - 10 : this.m_scrollView.vertical && (t.y = e * this.m_aryTabs[e].node.height - 10), t
                }
                InitMaxNode() {
                    if (!this.m_nodeLastest) return;
                    if (!this.m_aryTabs[0]) return;
                    let e = this.m_aryTabs[0].node.getContentSize();
                    this.m_nodeLastest.setContentSize(.5 * e.width, .5 * e.height), this.m_nodeLastest.setSiblingIndex(this.m_aryTabs.length)
                }
            };
            i([r(cc.Node)], t.prototype, "m_nodeRoot", void 0), i([r(cc.ScrollView)], t.prototype, "m_scrollView", void 0), i([r(cc.Node)], t.prototype, "m_nodeBalckShadow", void 0), i([r(cc.Layout)], t.prototype, "m_layout", void 0), i([r(cc.Prefab)], t.prototype, "m_tabPrefab", void 0), i([r(cc.Node)], t.prototype, "m_nodeLastest", void 0), i([r], t.prototype, "m_numScrollEnableCount", void 0), t = i([a], t), e.Menu = t
        })(o.BulletinBoard || (o.BulletinBoard = {})), cc._RF.pop()
    }, {
        "./BulletinBoardTab": "BulletinBoardTab"
    }],
    BulletinBoardMultiplePage: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "2792eSpeadGGa6M2zxiRouH", "BulletinBoardMultiplePage");
        var i = this && this.__decorate || function(e, t, o, i) {
                var n, a = arguments.length,
                    r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, o, r) : n(t, o)) || r);
                return a > 3 && r && Object.defineProperty(t, o, r), r
            },
            n = this && this.__awaiter || function(e, t, o, i) {
                return new(o || (o = Promise))(function(n, a) {
                    function r(e) {
                        try {
                            l(i.next(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function s(e) {
                        try {
                            l(i.throw(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                            e(t)
                        })).then(r, s)
                    }
                    l((i = i.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const a = e("./BulletinBoardPage"),
            r = e("./BulletinBoardData"),
            s = e("./BulletinBoardPageViewer"),
            l = e("./BulletinBoardIndicator");
        var u = a.BulletinBoard.Page,
            h = a.BulletinBoard.LoadJob,
            c = r.BulletinBoard.ButtonData,
            d = r.BulletinBoard.ButtonType,
            m = s.BulletinBoard.PageView,
            g = l.BulletinBoard.Indicator;
        const _ = e("../../../Component/AudioMgr"),
            {
                ccclass: p,
                property: y
            } = cc._decorator;
        var T;
        (function(e) {
            let t = class extends u {
                constructor() {
                    super(...arguments), this.m_btnAction = null, this.m_lblAction = null, this.m_PageView = null, this.m_Indicator = null, this.m_arySprites = [], this.m_aryButtnData = null, this.m_aryPopupID = [], this.m_lastIndex = 0, this.m_curIndex = 0, this.m_autoScrollDelayTime = 5, this.cid = 0
                }
                GetPopupID() {
                    return this.m_aryPopupID.length == this.m_arySprites.length ? this.m_aryPopupID[this.m_lastIndex] : ""
                }
                _onLoad() {
                    super._onLoad()
                }
                _onDestroy() {
                    this.m_PageView && this.m_PageView._onDestroy(), super._onDestroy()
                }
                CheckNeedAutoScrollDelay(e) {
                    return this.m_funcCallAutoScroll = e, !0
                }
                Show() {
                    super.Show(), this.m_PageView.StartAutoScroll(this.m_autoScrollDelayTime)
                }
                Hide() {
                    this.m_PageView.StopAutoScrollPageView(), this.m_curIndex = 0, this.ShowNewTexture(), super.Hide()
                }
                Exit() {
                    this.m_PageView && (this.m_PageView.node.targetOff(this), this.m_PageView.StopAutoScrollPageView()), this.m_arySprites = null, this.m_aryButtnData = null, this.m_aryPopupID = null, super.Exit()
                }
                ParseJsonData(e) {
                    if (this.m_aryButtnData && this.m_arySprites.length == Object.keys(e).length) return console.warn("[BulletinVBoard.MultiplePage]Page " + this.pageID + " had data!"), void this.ReloadPopupData(e);
                    this.m_btnAction.node.active = !1, this.m_aryButtnData = [], this.m_arySprites = [], this.m_aryPopupID = [], this.LoadPopupData(e)
                }
                OnClick() {
                    _.AudioMgr.Instance.Play("Btn_Select_y_v01", !1, 1), null != this.m_funcClicked && this.m_funcClicked(this.m_aryButtnData[this.m_curIndex])
                }
                LoadPopupData(e) {
                    return n(this, void 0, void 0, function*() {
                        this.cid++, console.log("[BulletingBoard][MultiPage]:LoadPopupData()");
                        let t = this,
                            o = e.length,
                            i = 0,
                            n = "",
                            a = "";
                        for (let r = 0; r < o; r++) {
                            let o = e[r];
                            if (this.CheckKioskGame(o.bind_info)) {
                                i++;
                                continue
                            }
                            if (this.CheckEndTime(o.EndTime)) {
                                i++;
                                continue
                            }
                            if (n = o.BundleVersion, !(a = this.GetDownloadPath(n, "Popup", o.BundleName))) {
                                i++, console.warn("[BulletinVBoard.MultiplePage]Image Path (Popup/" + n + "/" + o.BundleName + ") is NULL!! ");
                                continue
                            }
                            let s = 0,
                                l = null,
                                u = new h;
                            if (yield u.DownloadTexture(this.cid, a).then(e => {
                                    s = e.cid, l = e.result
                                }).catch(e => {
                                    s = e.cid, l = null
                                }), s != this.cid) return;
                            null != l ? (this.m_aryPopupID && this.m_aryPopupID.push(o.PopupID), t.m_arySprites && t.m_arySprites.push(new cc.SpriteFrame(l)), this.m_aryButtnData && this.m_aryButtnData.push(new c(o))) : i++
                        }
                        if (i >= o) this.ShowErrorMsg("", "Popup(id: " + this.pageID + ") cantOpenCount >= count", !0);
                        else {
                            if (!this.m_PageView) return;
                            this.SetPageView(), this.SetDataDone()
                        }
                    })
                }
                ReloadPopupData(e) {
                    return n(this, void 0, void 0, function*() {
                        console.log("[BulletingBoard][MultiPage]:ReloadPopupData()");
                        let t = this,
                            o = e.length,
                            i = 0,
                            n = "",
                            a = "";
                        for (let r = 0; r < o; r++) {
                            let o = e[r];
                            if (this.CheckKioskGame(o.bind_info)) {
                                i++;
                                continue
                            }
                            if (console.log("<><>Name:", this.m_arySprites[r].getTexture().name), r < this.m_arySprites.length && this.m_arySprites[r] && o.BundleName == this.m_arySprites[r].getTexture().name) continue;
                            if (this.CheckEndTime(o.EndTimeUTC)) {
                                i++;
                                continue
                            }
                            if (n = o.BundleVersion, !(a = this.GetDownloadPath(n, "Popup", o.BundleName))) {
                                i++, console.warn("[BulletinVBoard.MultiplePage]Image Path (Popup/" + n + "/" + o.BundleName + ") is NULL!! ");
                                continue
                            }
                            let s = null;
                            yield this.DownloadTexture(a).then(e => {
                                s = e
                            }).catch(() => {
                                s = null
                            }), null != s ? t.m_arySprites.length > r ? (t.m_arySprites[r].setTexture(s), this.m_aryButtnData[r] = new c(o)) : (t.m_arySprites.push(new cc.SpriteFrame(s)), this.m_aryButtnData.push(new c(o))) : i++
                        }
                        i >= o ? this.ShowErrorMsg("", "Popup(id: " + this.pageID + ") cantOpenCount >= count", !0) : this.SetDataDone()
                    })
                }
                SetButton() {
                    let e = this.m_aryButtnData[this.m_curIndex];
                    e.buttonType == d.NONE ? this.m_btnAction.node.active = !1 : (this.m_btnAction.node.active = !0, this.m_lblAction.string = e.buttonTitle)
                }
                SetPageView() {
                    this.m_curIndex = 0, this.m_PageView && (this.m_PageView.SetTextures(this.SliceTextures()), this.m_aryButtnData.length > 1 ? (this.m_PageView.enabled = !0, this.m_PageView.node.on("auto-scroll-began", this.OnScrollBegan, this), this.m_PageView.node.on("scroll-began", this.OnScrollBegan, this), this.m_PageView.node.on("scroll-ended", this.OnScrollEnd, this), this.m_Indicator.Refresh(this.m_arySprites.length), this.m_Indicator.ChangeState(this.m_curIndex), this.m_PageView.StartAutoScroll(this.m_autoScrollDelayTime)) : this.m_PageView.enabled = !1), this.SetButton()
                }
                SliceTextures() {
                    let e = [],
                        t = this.m_arySprites.length;
                    if (0 == t) return;
                    let o = this.m_curIndex - 1;
                    o < 0 && (o = t - 1);
                    let i = this.m_curIndex + 1;
                    return i >= t && (i = 0), cc.log("[BulletinVBoard.MultiplePage]SliceTexture: " + o + " <-> " + this.m_curIndex + " <-> " + i), e[0] = this.m_arySprites[o], e[1] = this.m_arySprites[this.m_curIndex], e[2] = this.m_arySprites[i], e
                }
                OnScrollBegan() {
                    this.m_btnAction.node.active = !1
                }
                OnScrollEnd() {
                    let e = this.m_PageView.getCurrentPageIndex();
                    1 != e ? (0 == e ? this.m_curIndex-- : 2 == e && this.m_curIndex++, this.m_curIndex >= this.m_arySprites.length && (this.m_curIndex = 0), this.m_curIndex < 0 && (this.m_curIndex = this.m_arySprites.length - 1), this.m_curIndex == this.m_arySprites.length - 1 && this.m_funcCallAutoScroll && (this.m_funcCallAutoScroll(), this.m_funcCallAutoScroll = null), this.m_lastIndex = this.m_curIndex, this.ShowNewTexture(), this.m_PageView.PlayAutoScrollPageView(), _.AudioMgr.Instance.Play("Btn_MultiPopupMove", !1, 1)) : this.SetButton()
                }
                ShowNewTexture() {
                    null != this.m_arySprites && 0 != this.m_arySprites.length && (this.m_PageView.SetTextures(this.SliceTextures()), this.m_Indicator.ChangeState(this.m_curIndex), this.SetButton())
                }
            };
            i([y(cc.Button)], t.prototype, "m_btnAction", void 0), i([y(cc.Label)], t.prototype, "m_lblAction", void 0), i([y(m)], t.prototype, "m_PageView", void 0), i([y(g)], t.prototype, "m_Indicator", void 0), t = i([p], t), e.MultiplePage = t
        })(T || (T = {})), cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0,
        "./BulletinBoardData": "BulletinBoardData",
        "./BulletinBoardIndicator": "BulletinBoardIndicator",
        "./BulletinBoardPage": "BulletinBoardPage",
        "./BulletinBoardPageViewer": "BulletinBoardPageViewer"
    }],
    BulletinBoardPageViewer: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "72784nWIEdD2YqEUdrYCmb0", "BulletinBoardPageViewer");
        var i = this && this.__decorate || function(e, t, o, i) {
            var n, a = arguments.length,
                r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, i);
            else
                for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, o, r) : n(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r), r
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.BulletinBoard = void 0;
        const {
            ccclass: n,
            property: a
        } = cc._decorator;
        (function(e) {
            let t = class extends cc.PageView {
                constructor() {
                    super(...arguments), this.isTouching = !1, this.center = new cc.Vec2(0, 0), this.autoScrollDelayTime = 10
                }
                SetTextures(e) {
                    this.getPages().forEach((t, o) => {
                        t.getComponent(cc.Sprite).spriteFrame = e[o]
                    }), this.scrollToOffset(this.center), this.setCurrentPageIndex(1), e = null
                }
                onLoad() {
                    this.isTouching = !1, super.onLoad()
                }
                _onDestroy() {
                    this.StopAutoScrollPageView()
                }
                _onTouchBegan(e, t) {
                    this.isTouching = !0, super._onTouchBegan(e, t)
                }
                _onTouchEnded(e, t) {
                    this.isTouching = !1, super._onTouchEnded(e, t), this.PlayAutoScrollPageView()
                }
                _onTouchCancelled(e, t) {
                    this.isTouching = !1, super._onTouchCancelled(e, t), this.PlayAutoScrollPageView()
                }
                _initPages() {
                    super._initPages(), this.center = this._pages[1].position, this.scrollToOffset(this.center), this.setCurrentPageIndex(1)
                }
                StartAutoScroll(e) {
                    this.autoScrollDelayTime = e, this.PlayAutoScrollPageView()
                }
                PlayAutoScrollPageView() {
                    this.StopAutoScrollPageView(), this.scheduleOnce(this.DoAutoScrollPageView.bind(this), this.autoScrollDelayTime)
                }
                DoAutoScrollPageView() {
                    this.isTouching || (this.setCurrentPageIndex(this.getCurrentPageIndex() + 1), this.scrollToPage(this.getCurrentPageIndex(), .5), this.node.dispatchEvent(new cc.Event("auto-scroll-began", !0)))
                }
                StopAutoScrollPageView() {
                    this.unscheduleAllCallbacks()
                }
            };
            t = i([n], t), e.PageView = t
        })(o.BulletinBoard || (o.BulletinBoard = {})), cc._RF.pop()
    }, {}],
    BulletinBoardPage: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "803adCXnlBFRqvcv+Rfli2p", "BulletinBoardPage");
        var i = this && this.__decorate || function(e, t, o, i) {
            var n, a = arguments.length,
                r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, i);
            else
                for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, o, r) : n(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r), r
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.BulletinBoard = void 0;
        const n = e("./BulletinBoardData");
        var a = n.BulletinBoard.ButtonData,
            r = n.BulletinBoard.ButtonType;
        const {
            ccclass: s,
            property: l
        } = cc._decorator;
        (function(e) {
            let t = class extends cc.Component {
                constructor() {
                    super(...arguments), this.pageID = "", this.m_lastPopupID = "", this.m_funcClicked = null, this.m_funcResetComplete = null, this.m_funcCallAutoScroll = null, this.m_funcErrorMsg = null
                }
                isShowing() {
                    return this.node.active
                }
                GetPopupID() {
                    return this.m_lastPopupID
                }
                _onLoad() {}
                _onDestroy() {
                    this.Exit()
                }
                SetData(e, t, o, i, n) {
                    this.pageID = e, this.m_funcClicked = i, this.m_funcResetComplete = o, this.m_funcErrorMsg = n, this.ParseJsonData(t)
                }
                SetCustomData(e, t) {}
                ResetData(e) {
                    this.ParseJsonData(e)
                }
                CheckNeedAutoScrollDelay(e) {
                    return this.m_funcCallAutoScroll = e, !1
                }
                Show() {
                    this.node.active = !0
                }
                Hide() {
                    this.node.active = !1
                }
                Exit() {
                    this.pageID = null, this.m_funcClicked = null, this.m_funcResetComplete = null, this.m_funcErrorMsg = null
                }
                ParseJsonData(e) {}
                CheckEndTime(e) {
                    if (!e) return !1; - 1 == e.lastIndexOf("Z") && (e += "Z");
                    let t = new Date(e),
                        o = new Date;
                    return console.log("[BulletinBoard]Page CheckEndTime: ", t, " -> vs <- ", o), t <= o
                }
                SetDataDone() {
                    this.m_funcResetComplete && this.m_funcResetComplete()
                }
                GetDownloadPath(e, t, o) {
                    if (!e) return null;
                    let i = "",
                        n = (i = SS.Common.GameEnvironment.ProjectSetting.CDN_HOST ? window.location.protocol + "//" + SS.Common.GameEnvironment.ProjectSetting.CDN_HOST : window.location.origin) + "/" + t + "/" + e + "/" + o;
                    return console.log("[BulletinBoardPage] GetDownloadPath= " + n), n
                }
                DownloadTexture(e) {
                    return new Promise((t, o) => {
                        cc.assetManager.loadRemote(e, function(i, n) {
                            i ? (console.warn("[LoadTexure]Image (" + e + ") Download is not Find !! ", i), o(i)) : t(n)
                        })
                    })
                }
                DownloadBundle(e) {
                    return new Promise((t, o) => {
                        cc.assetManager.loadRemote(e, function(i, n) {
                            i ? (console.warn("[LoadBundle]Bundle (" + e + ") Download is not Find !! ", i), o(i)) : t(n)
                        })
                    })
                }
                DownloadPrefab(e, t) {
                    return new Promise((o, i) => {
                        e || (console.warn("[LoadBundle]Bundle (" + t + ") is null"), i()), e.load(t, function(e, n) {
                            e ? (console.warn("[LoadBundle]Prefab (" + t + ") Download is not Find !! ", e), i(e)) : o(n)
                        })
                    })
                }
                ShowErrorMsg(e, t, o) {
                    this.node.active && null != this.m_funcErrorMsg && this.m_funcErrorMsg(this.pageID, e, t, o)
                }
                CheckKioskGame(e) {
                    if (!e || null == e) return !1;
                    let t = !1,
                        o = a.CheckButtonType(e),
                        i = e.substring(e.indexOf("=") + 1);
                    if (o == r.SWITCH_GAME) {
                        i = this.GetThemeIdByGameName(i);
                        let e = SS.Common.GameEnvironment.GameSetting.kioskOpenGameList;
                        t = !0;
                        for (let o = 0; o < e.length; o++)
                            if (e[o] == i) {
                                t = !1;
                                break
                            }
                    } else o == r.CUSTOM && SS.Common.GameEnvironment.GameSetting.hasOwnProperty("active_event") && (t = !SS.Common.GameEnvironment.GameSetting.active_event.hasOwnProperty(i) || !SS.Common.GameEnvironment.GameSetting.active_event[i]);
                    return t && console.warn("[\u4f48\u544a\u6b04]\u9019\u9801\u7c64\u9700\u8981\u904e\u6ffe\u904a\u6232, target = " + i), t
                }
                GetThemeIdByGameName(e) {
                    return SS.Common.GameEnvironment.GameSetting.hasOwnProperty("Icon") && SS.Common.GameEnvironment.GameSetting.Icon.hasOwnProperty(e) && SS.Common.GameEnvironment.GameSetting.Icon[e].hasOwnProperty("GameName") ? SS.Common.GameEnvironment.GameSetting.Icon[e].GameName : ""
                }
            };
            t = i([s], t), e.Page = t;
            let o = class {
                constructor() {
                    this.cid = 0
                }
                DownloadTexture(e, t) {
                    this.cid = e;
                    let o = this;
                    return new Promise((e, i) => {
                        cc.assetManager.loadRemote(t, function(n, a) {
                            n ? (console.warn("[LoadTexure]Image (" + t + ") Download is not Find !! ", n), i({
                                cid: o.cid,
                                result: null,
                                error: n
                            })) : e({
                                cid: o.cid,
                                result: a,
                                error: null
                            })
                        })
                    })
                }
            };
            o = i([s], o), e.LoadJob = o
        })(o.BulletinBoard || (o.BulletinBoard = {})), cc._RF.pop()
    }, {
        "./BulletinBoardData": "BulletinBoardData"
    }],
    BulletinBoardSinglePopupPage: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "bbd69JAsLFBSaWyYPbKs1ef", "BulletinBoardSinglePopupPage");
        var i = this && this.__decorate || function(e, t, o, i) {
                var n, a = arguments.length,
                    r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, i);
                else
                    for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, o, r) : n(t, o)) || r);
                return a > 3 && r && Object.defineProperty(t, o, r), r
            },
            n = this && this.__awaiter || function(e, t, o, i) {
                return new(o || (o = Promise))(function(n, a) {
                    function r(e) {
                        try {
                            l(i.next(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function s(e) {
                        try {
                            l(i.throw(e))
                        } catch (t) {
                            a(t)
                        }
                    }

                    function l(e) {
                        var t;
                        e.done ? n(e.value) : (t = e.value, t instanceof o ? t : new o(function(e) {
                            e(t)
                        })).then(r, s)
                    }
                    l((i = i.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.BulletinBoard = void 0;
        const a = e("../../../Component/AudioMgr"),
            r = e("./BulletinBoardPage"),
            s = e("./BulletinBoardData");
        var l = r.BulletinBoard.Page,
            u = s.BulletinBoard.ButtonData,
            h = s.BulletinBoard.ButtonType;
        const {
            ccclass: c,
            property: d
        } = cc._decorator;
        (function(e) {
            let t = class extends l {
                constructor() {
                    super(...arguments), this.m_btnAction = null, this.m_lblAction = null, this.m_spTexture = null, this.m_buttnData = null, this.m_strTextureName = "", this.m_strPopupID = ""
                }
                GetPopupID() {
                    return this.m_strPopupID
                }
                start() {
                    this.RegisterTouchEvents()
                }
                Exit() {
                    this.m_spTexture && this.m_spTexture.node.targetOff(this), super.Exit()
                }
                RegisterTouchEvents() {
                    this.m_spTexture.node.on(cc.Node.EventType.MOUSE_DOWN, this.OnFingerTouch, this, !0), this.m_spTexture.node.on(cc.Node.EventType.MOUSE_UP, this.OnFingerTouch, this, !0), this.m_spTexture.node.on(cc.Node.EventType.TOUCH_START, this.OnFingerTouch, this, !0), this.m_spTexture.node.on(cc.Node.EventType.TOUCH_END, this.OnFingerTouch, this, !0), this.m_spTexture.node.on(cc.Node.EventType.TOUCH_CANCEL, this.OnFingerTouch, this, !0)
                }
                OnFingerTouch() {}
                ParseJsonData(e) {
                    this.CheckKioskGame(e[0].bind_info) ? this.ShowErrorMsg("", "Popup(id: " + this.pageID + ") cantOpenCount >= count", !0) : this.CheckEndTime(e[0].EndTime) ? this.ShowErrorMsg("C55", "Popup(id: " + this.pageID + ") Time Out", !0) : (this.m_btnAction.node.active = !1, this.m_buttnData = new u(e[0]), this.m_lblAction.string = e[0].ButtonText, this.m_strTextureName != e[0].BundleName ? (this.LoadFile(e[0].BundleName, e[0].BundleVersion), this.m_strPopupID = e[0].PopupID) : this.SetDataDone())
                }
                OnClick() {
                    a.AudioMgr.Instance.Play("Btn_Select_y_v01", !1, 1), null != this.m_funcClicked && this.m_funcClicked(this.m_buttnData)
                }
                LoadFile(e, t) {
                    return n(this, void 0, void 0, function*() {
                        let o = "";
                        if (o = this.GetDownloadPath(t, "Popup", e)) {
                            if (-1 != e.lastIndexOf(".")) {
                                let t = null;
                                if (yield this.DownloadTexture(o).catch(() => {
                                        this.ShowErrorMsg("C38", "Can't Get Image (path:" + o + ")", !0)
                                    }).then(e => {
                                        t = e
                                    }), null == t) return;
                                this.m_strTextureName = e, this.m_spTexture.spriteFrame = new cc.SpriteFrame(t)
                            } else {
                                let e = null;
                                if (yield this.DownloadBundle(o).catch(() => {
                                        this.ShowErrorMsg("C38", "Can't Get Bundle (path:" + o + ")", !0)
                                    }).then(t => {
                                        e = t
                                    }), null == e) return;
                                let t = null;
                                if (yield this.DownloadPrefab(e, "main").catch(() => {
                                        this.ShowErrorMsg("C38", "Can't Get Prefab (path:" + o + ")", !0)
                                    }).then(e => {
                                        t = e
                                    }), null == t) return;
                                cc.instantiate(t).parent = this.node
                            }
                            this.SetDataDone()
                        } else console.warn("[TexturePage]Image Path (Popup/" + t + "/" + e + ") is NULL!! ")
                    })
                }
                SetDataDone() {
                    this.m_buttnData.buttonType == h.NONE ? this.m_btnAction.node.active = !1 : this.m_btnAction.node.active = !0, this.m_funcResetComplete && this.m_funcResetComplete()
                }
            };
            i([d(cc.Button)], t.prototype, "m_btnAction", void 0), i([d(cc.Label)], t.prototype, "m_lblAction", void 0), i([d(cc.Sprite)], t.prototype, "m_spTexture", void 0), t = i([c], t), e.SinglePopupPage = t
        })(o.BulletinBoard || (o.BulletinBoard = {})), cc._RF.pop()
    }, {
        "../../../Component/AudioMgr": void 0,
        "./BulletinBoardData": "BulletinBoardData",
        "./BulletinBoardPage": "BulletinBoardPage"
    }],
    BulletinBoardTab: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "4d2b4TBj39ORpsbI5zHTmZQ", "BulletinBoardTab");
        var i = this && this.__decorate || function(e, t, o, i) {
            var n, a = arguments.length,
                r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, i);
            else
                for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, o, r) : n(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r), r
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        }), o.BulletinBoard = void 0;
        const {
            ccclass: n,
            property: a
        } = cc._decorator;
        (function(e) {
            let t = class extends cc.Component {
                constructor() {
                    super(...arguments), this.index = -1, this.id = "", this.m_nodeNormal = null, this.m_txtNormal = null, this.m_sizeNormal = cc.Size.ZERO.clone(), this.m_nodeFocus = null, this.m_txtFocus = null, this.m_sizeFocus = cc.Size.ZERO.clone(), this.m_nodeRedPoint = null, this.m_btn = null, this.m_isChangeSiblingIndex = !0, this.m_funcClicked = null
                }
                Reset(e, t, o, i) {
                    this.index = e, this.id = t, this.m_funcClicked = i, this.m_txtNormal.string = o, this.m_txtFocus.string = o, this.m_nodeRedPoint.active = !1
                }
                SetNormal() {
                    this.m_nodeFocus.active = !1, this.m_nodeNormal.active = !0, this.m_sizeNormal && this.node.setContentSize(this.m_sizeNormal), this.m_isChangeSiblingIndex && this.node.setSiblingIndex(this.index)
                }
                SetFocus(e = 99) {
                    this.m_nodeFocus.active = !0, this.m_nodeNormal.active = !1, this.m_sizeFocus && this.node.setContentSize(this.m_sizeFocus), this.m_isChangeSiblingIndex && this.node.setSiblingIndex(e)
                }
                ShowRedPoint() {
                    this.m_nodeRedPoint.active = !0
                }
                HideRedPoint() {
                    this.m_nodeRedPoint.active = !1
                }
                OnClick() {
                    this.m_nodeFocus.active || null != this.m_funcClicked && this.m_funcClicked(this, !0)
                }
            };
            i([a(cc.Node)], t.prototype, "m_nodeNormal", void 0), i([a(cc.Label)], t.prototype, "m_txtNormal", void 0), i([a(cc.Size)], t.prototype, "m_sizeNormal", void 0), i([a(cc.Node)], t.prototype, "m_nodeFocus", void 0), i([a(cc.Label)], t.prototype, "m_txtFocus", void 0), i([a(cc.Size)], t.prototype, "m_sizeFocus", void 0), i([a(cc.Node)], t.prototype, "m_nodeRedPoint", void 0), i([a(cc.Button)], t.prototype, "m_btn", void 0), i([a], t.prototype, "m_isChangeSiblingIndex", void 0), t = i([n], t), e.Tab = t
        })(o.BulletinBoard || (o.BulletinBoard = {})), cc._RF.pop()
    }, {}],
    BulletinBoardTimerPopupPage: [function(e, t, o) {
        "use strict";
        cc._RF.push(t, "af7d1LubitC7oa3KCMpiNWu", "BulletinBoardTimerPopupPage");
        var i = this && this.__decorate || function(e, t, o, i) {
            var n, a = arguments.length,
                r = a < 3 ? t : null === i ? i = Object.getOwnPropertyDescriptor(t, o) : i;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) r = Reflect.decorate(e, t, o, i);
            else
                for (var s = e.length - 1; s >= 0; s--)(n = e[s]) && (r = (a < 3 ? n(r) : a > 3 ? n(t, o, r) : n(t, o)) || r);
            return a > 3 && r && Object.defineProperty(t, o, r), r
        };
        Object.defineProperty(o, "__esModule", {
            value: !0
        });
        const n = e("./BulletinBoardSinglePopupPage"),
            a = e("./BulletinBoardData");
        var r = n.BulletinBoard.SinglePopupPage,
            s = a.BulletinBoard.ButtonData;
        const l = e("../../../PopUpMgr/Scripts/PopUpTimerMgr"),
            u = e("../../../Net/LobbyClient"),
            {
                ccclass: h,
                property: c
            } = cc._decorator;
        var d;
        (function(e) {
            let t = class extends r {
                constructor() {
                    super(...arguments), this.m_timer = null, this.m_eventKey = "", this.m_logoMode = -1, this.m_categoryID = "", this.m_isTimerInited = !1
                }
                onEnable() {
                    console.log("POS(Before): " + this.m_timer.node.position), this.m_timer.node.setPosition(2e3, 0), this.m_isTimerInited = !1, console.log("POS(After): " + this.m_timer.node.position)
                }
                SetCustomData(e, t) {
                    this.m_logoMode = e, this.m_categoryID = t, this.SendJsonData()
                }
                ResetData(e) {
                    null != e ? this.ParseJsonData(e) : this.SendJsonData()
                }
                ParseJsonData(e) {
                    if (null == e) return;
                    if (this.CheckEndTime(e[0].EndTime)) return void this.ShowErrorMsg("C55", "Popup(id: " + this.pageID + ") Time Out", !0);
                    this.m_btnAction.node.active = !1, this.m_buttnData = new s(e[0]), this.m_lblAction.string = e[0].ButtonText;
                    let t = 0;
                    this.m_eventKey.length > 0 && (SS.Common.GameEnvironment.ProjectSetting.hasOwnProperty("PopUp") && SS.Common.GameEnvironment.ProjectSetting.PopUp.hasOwnProperty(this.m_eventKey) ? (t = SS.Common.GameEnvironment.ProjectSetting.PopUp[this.m_eventKey], this.m_timer.InitTimer(t), this.m_isTimerInited = !0, this.m_timer.m_timesUpCallback = this.OnTimesUp.bind(this)) : this.OnTimesUp()), this.m_strTextureName == e[0].BundleName ? this.SetDataDone() : this.LoadFile(e[0].BundleName, e[0].BundleVersion)
                }
                SetDataDone() {
                    console.log("%c DONE", "font-size:16px;font-weight:bold;color:blue;"), this.m_isTimerInited && this.m_timer.node.setPosition(0, 0), super.SetDataDone()
                }
                OnTimesUp() {
                    this.ShowErrorMsg("C55", "event times up!", !0)
                }
                SendJsonData() {
                    -1 != this.m_logoMode && "" != this.m_categoryID ? u.LobbyClient.Instance.GetUserClient.GetPopupContent(this.m_logoMode, this.m_categoryID, this.pageID, this.RecvJsonData.bind(this)) : cc.error("[BulletinBoard]Error! LogoMode: ", this.m_logoMode, "\nCategory ID:", this.m_categoryID)
                }
                RecvJsonData(e, t) {
                    if (e == ArkSDK.HttpResult.OK && t && t.cmd_data && t.cmd_data.data) {
                        let e = t.cmd_data.data;
                        return e.length > 0 ? void this.ParseJsonData(e) : void this.ShowErrorMsg("C55", t, !0)
                    }
                    let o = "";
                    o = e == ArkSDK.HttpResult.Abort ? "S390" : e == ArkSDK.HttpResult.Condition ? "S391" : e == ArkSDK.HttpResult.Error ? "S392" : e == ArkSDK.HttpResult.NotReset ? "S393" : e == ArkSDK.HttpResult.Status ? "S394" : e == ArkSDK.HttpResult.Timeout ? "S395" : -1 == e ? "S386" : -6 == e ? "S388" : -7 == e ? "S387" : -37 == e ? "S389" : "S396", this.ShowErrorMsg(o, t, !1)
                }
            };
            i([c(l.default)], t.prototype, "m_timer", void 0), i([c({
                displayName: "\u6d3b\u52d5/Popup\u7d00\u9304\u6642\u9593\u7684ID"
            })], t.prototype, "m_eventKey", void 0), t = i([h], t), e.TimerPopupPage = t
        })(d || (d = {})), cc._RF.pop()
    }, {
        "../../../Net/LobbyClient": void 0,
        "../../../PopUpMgr/Scripts/PopUpTimerMgr": void 0,
        "./BulletinBoardData": "BulletinBoardData",
        "./BulletinBoardSinglePopupPage": "BulletinBoardSinglePopupPage"
    }]
}, {}, ["BulletinBoardCategory", "BulletinBoardData", "BulletinBoardIndicator", "BulletinBoardManager", "BulletinBoardMenu", "BulletinBoardMultiplePage", "BulletinBoardPage", "BulletinBoardPageViewer", "BulletinBoardSinglePopupPage", "BulletinBoardTab", "BulletinBoardTimerPopupPage"]);