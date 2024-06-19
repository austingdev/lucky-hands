window.__require = function t(e, i, a) {
    function n(l, s) {
        if (!i[l]) {
            if (!e[l]) {
                var r = l.split("/");
                if (r = r[r.length - 1], !e[r]) {
                    var c = "function" == typeof __require && __require;
                    if (!s && c) return c(r, !0);
                    if (o) return o(r, !0);
                    throw new Error("Cannot find module '" + l + "'")
                }
                l = r
            }
            var u = i[l] = {
                exports: {}
            };
            e[l][0].call(u.exports, function(t) {
                return n(e[l][1][t] || t)
            }, u, u.exports, t, e, i, a)
        }
        return i[l].exports
    }
    for (var o = "function" == typeof __require && __require, l = 0; l < a.length; l++) n(a[l]);
    return n
}({
    MailClaimGiftNotify: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "593f88+vT5KQpgnjUWYQCl/", "MailClaimGiftNotify");
        var a = this && this.__decorate || function(t, e, i, a) {
            var n, o = arguments.length,
                l = o < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, i) : a;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, i, a);
            else
                for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (l = (o < 3 ? n(l) : o > 3 ? n(e, i, l) : n(e, i)) || l);
            return o > 3 && l && Object.defineProperty(e, i, l), l
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const {
            ccclass: n,
            property: o
        } = cc._decorator;
        let l = class extends cc.Component {
            constructor() {
                super(...arguments), this.amountLabel = null, this.iconSprite = null
            }
            ShowNotify(t, e) {
                this.amountLabel.string = e.toString(), this.iconSprite.spriteFrame = this.GetIconSpriteFrame(t), cc.tween(this.node).delay(1 * (this.node.parent.childrenCount - 1)).call(() => {
                    this.node.opacity = 255
                }).to(1.5, {
                    opacity: 0
                }, cc.easeCubicActionIn()).call(() => {
                    this.node.destroy()
                }).start(), cc.tween(this.node).delay(1 * (this.node.parent.childrenCount - 1)).call(() => {}).to(1.5, {
                    position: new cc.Vec3(0, 100, 0)
                }).call(() => {
                    this.node.destroy()
                }).start()
            }
            GetIconSpriteFrame(t) {
                var e, i;
                return null !== (i = null === (e = this.iconSprite.node.getChildByName(t)) || void 0 === e ? void 0 : e.getComponent(cc.Sprite).spriteFrame) && void 0 !== i ? i : null
            }
        };
        a([o(cc.Label)], l.prototype, "amountLabel", void 0), a([o(cc.Sprite)], l.prototype, "iconSprite", void 0), l = a([n], l), i.default = l, cc._RF.pop()
    }, {}],
    MailData: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "f02b3Vz/xdFnZuod9KYW7Kw", "MailData");
        var a = this && this.__decorate || function(t, e, i, a) {
            var n, o = arguments.length,
                l = o < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, i) : a;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, i, a);
            else
                for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (l = (o < 3 ? n(l) : o > 3 ? n(e, i, l) : n(e, i)) || l);
            return o > 3 && l && Object.defineProperty(e, i, l), l
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.MailContentInfo = i.MailStatus = i.MailType = void 0;
        const n = t("../../../Utility/Dictionary"),
            o = t("../../../Utility/Singleton"),
            {
                ccclass: l,
                property: s
            } = cc._decorator;
        (function(t) {
            t.ENUM_SYSTEM = "System", t.ENUM_REWARD = "Reward"
        })(i.MailType || (i.MailType = {})),
        function(t) {
            t.ENUM_UNREAD = "UNREAD", t.ENUM_READ = "READ", t.ENUM_TAKE = "TAKE", t.ENUM_EXPIRED_UNREAD = "UNREAD_EXPIRED", t.ENUM_EXPIRED_READ = "READ_EXPIRED", t.ENUM_EXPIRED_TAKE = "TAKE_EXPIRED", t.ENUM_DELETE = "DELETE", t.ENUM_TAKE_ERROR = "TAKE_ERROR"
        }(i.MailStatus || (i.MailStatus = {})), i.MailContentInfo = class {
            SetupWithMailInfo(t) {
                this.MailId = t.MailId, this.MailType = t.Type, this.FromName = t.FromNickname, this.CreateTs = 1e3 * t.CreateTs, t.ExpiredTs && (this.ExpiredTs = 1e3 * t.ExpiredTs), this.Status = t.Status, this.Title = t.Title, this.Content = t.Content, null != t.Reward && (this.RewardList = Object.entries(t.Reward).map(([t, e]) => ({
                    [t]: e
                })))
            }
            SetupWithServerData(t) {
                this.MailId = t.MailId, this.Content = t.Content, null != t.Reward && (this.RewardList = Object.entries(t.Reward).map(([t, e]) => ({
                    [t]: e
                }))), this.Status = t.Status, this.Title = t.Title, this.MailType = t.Type
            }
        };
        let r = class extends(o.Singleton()) {
            constructor() {
                super(...arguments), this.UnReadUnTakeMailCount = 0, this.MailList = new n.Dictionary, this.HasGetDetailMailList = new Array
            }
        };
        r.ins = null, r = a([l], r), i.default = r, cc._RF.pop()
    }, {
        "../../../Utility/Dictionary": void 0,
        "../../../Utility/Singleton": void 0
    }],
    MailGiftItem: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "83f10E2QsxCMKsu88Lglla0", "MailGiftItem");
        var a = this && this.__decorate || function(t, e, i, a) {
            var n, o = arguments.length,
                l = o < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, i) : a;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, i, a);
            else
                for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (l = (o < 3 ? n(l) : o > 3 ? n(e, i, l) : n(e, i)) || l);
            return o > 3 && l && Object.defineProperty(e, i, l), l
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const {
            ccclass: n,
            property: o
        } = cc._decorator;
        let l = class extends cc.Component {
            constructor() {
                super(...arguments), this.countLabel = null, this.claimedLabelNode = null, this.claimedPointNode = null, this.errorNode = null, this.iconSprite = null
            }
            SetUpItem(t, e, i, a, n) {
                this.countLabel.string = e.toLocaleString(), this.claimedLabelNode.active = i, this.claimedPointNode.active = i || a || n, this.iconSprite.spriteFrame = this.GetIconSpriteFrame(t), this.errorNode.active = a
            }
            GetIconSpriteFrame(t) {
                var e, i;
                return null !== (i = null === (e = this.iconSprite.node.getChildByName(t)) || void 0 === e ? void 0 : e.getComponent(cc.Sprite).spriteFrame) && void 0 !== i ? i : null
            }
        };
        a([o(cc.Label)], l.prototype, "countLabel", void 0), a([o(cc.Node)], l.prototype, "claimedLabelNode", void 0), a([o(cc.Node)], l.prototype, "claimedPointNode", void 0), a([o(cc.Node)], l.prototype, "errorNode", void 0), a([o(cc.Sprite)], l.prototype, "iconSprite", void 0), l = a([n], l), i.default = l, cc._RF.pop()
    }, {}],
    MailIcon: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "735d1s0iu9E7bmHzodOGAQT", "MailIcon");
        var a = this && this.__decorate || function(t, e, i, a) {
                var n, o = arguments.length,
                    l = o < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, i) : a;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, i, a);
                else
                    for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (l = (o < 3 ? n(l) : o > 3 ? n(e, i, l) : n(e, i)) || l);
                return o > 3 && l && Object.defineProperty(e, i, l), l
            },
            n = this && this.__awaiter || function(t, e, i, a) {
                return new(i || (i = Promise))(function(n, o) {
                    function l(t) {
                        try {
                            r(a.next(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(t) {
                        try {
                            r(a.throw(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function r(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
                            t(e)
                        })).then(l, s)
                    }
                    r((a = a.apply(t, e || [])).next())
                })
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const o = t("./MailData"),
            l = t("./MailSystem"),
            {
                ccclass: s,
                property: r
            } = cc._decorator;
        let c = class extends cc.Component {
            constructor() {
                super(...arguments), this.Root = null, this.RedDot = null
            }
            onLoad() {
                this.Root.active = !1, this.RedDot.active = !1
            }
            onDestroy() {
                this.unschedule(this.GetMailInfo)
            }
            start() {
                this.GetMailInfo(), this.schedule(this.GetMailInfo, 10)
            }
            GetMailInfo() {
                return n(this, void 0, void 0, function*() {
                    let t = {
                        Type: [o.MailType.ENUM_REWARD, o.MailType.ENUM_SYSTEM]
                    };
                    const e = yield l.MailSystem.GetInfo(t), i = null == e ? void 0 : e.cmd_data;
                    i && 0 == i.Code ? (this.Root.active = !0, this.RedDot.active = i.New) : this.Root.active = !1
                })
            }
        };
        a([r(cc.Node)], c.prototype, "Root", void 0), a([r(cc.Node)], c.prototype, "RedDot", void 0), c = a([s], c), i.default = c, cc._RF.pop()
    }, {
        "./MailData": "MailData",
        "./MailSystem": "MailSystem"
    }],
    MailListItem: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "72264wGLptH2qMiCW7Ee4yp", "MailListItem");
        var a = this && this.__decorate || function(t, e, i, a) {
            var n, o = arguments.length,
                l = o < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, i) : a;
            if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, i, a);
            else
                for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (l = (o < 3 ? n(l) : o > 3 ? n(e, i, l) : n(e, i)) || l);
            return o > 3 && l && Object.defineProperty(e, i, l), l
        };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const n = t("../../../Utility/Functions"),
            o = t("../../../Utility/SuperScrollView/UISuperItem"),
            l = t("./MailData"),
            s = t("./MailViewManager"),
            {
                ccclass: r,
                property: c
            } = cc._decorator;
        let u = class extends o.default {
            constructor() {
                super(...arguments), this.backGround = null, this.darkImage = null, this.selectedSpriteFrame = null, this.unselectedSpriteFrame = null, this.expiredSpriteFrame = null, this.mailIcon = null, this.systemUnread = null, this.systemRead = null, this.systemExpiredUnread = null, this.systemExpiredRead = null, this.giftsUntake = null, this.giftsTake = null, this.giftsExpiredUntake = null, this.giftsExpiredTake = null, this.fromLabel = null, this.TitleLabel = null, this.getMailTimeLabel = null, this.chooseFrame = null, this.currentIndex = 0
            }
            init(t) {
                super.init(t)
            }
            RefreshItem(t) {
                this.currentIndex = t;
                let e = l.default.inst.MailList.values()[t];
                e.Status == l.MailStatus.ENUM_EXPIRED_UNREAD || e.Status == l.MailStatus.ENUM_EXPIRED_READ || e.Status == l.MailStatus.ENUM_EXPIRED_TAKE ? this.backGround.spriteFrame = this.expiredSpriteFrame : this.backGround.spriteFrame = this.darkImage.spriteFrame = this.unselectedSpriteFrame, this.darkImage.node.active = !(e.Status == l.MailStatus.ENUM_UNREAD || e.MailType == l.MailType.ENUM_REWARD && e.Status == l.MailStatus.ENUM_READ), this.chooseFrame.active = s.default.inst.GetCurrentSelectedIndex() == t, e.MailType == l.MailType.ENUM_SYSTEM ? e.Status == l.MailStatus.ENUM_READ ? this.mailIcon.spriteFrame = this.systemRead : e.Status == l.MailStatus.ENUM_UNREAD ? this.mailIcon.spriteFrame = this.systemUnread : e.Status == l.MailStatus.ENUM_EXPIRED_UNREAD ? this.mailIcon.spriteFrame = this.systemExpiredUnread : e.Status == l.MailStatus.ENUM_EXPIRED_READ && (this.mailIcon.spriteFrame = this.systemExpiredRead) : e.Status == l.MailStatus.ENUM_TAKE ? this.mailIcon.spriteFrame = this.giftsTake : e.Status == l.MailStatus.ENUM_UNREAD || e.Status == l.MailStatus.ENUM_READ ? this.mailIcon.spriteFrame = this.giftsUntake : e.Status == l.MailStatus.ENUM_EXPIRED_TAKE ? this.mailIcon.spriteFrame = this.giftsExpiredTake : e.Status != l.MailStatus.ENUM_EXPIRED_READ && e.Status != l.MailStatus.ENUM_EXPIRED_UNREAD || (this.mailIcon.spriteFrame = this.giftsExpiredUntake), this.fromLabel.string = e.FromName, this.TitleLabel.string = e.Title;
                const i = n.default.GetTimeDiffSec(e.ExpiredTs);
                this.getMailTimeLabel.string = i > 0 && i < 86400 ? "EXPIRES SOON" : ""
            }
            OnclickItem() {
                let t = l.default.inst.MailList.values()[this.currentIndex];
                t.Status == l.MailStatus.ENUM_UNREAD ? t.Status = l.MailStatus.ENUM_READ : t.Status == l.MailStatus.ENUM_EXPIRED_UNREAD && (t.Status = l.MailStatus.ENUM_EXPIRED_READ), l.default.inst.MailList.changeValueForKey(t.MailId, t), s.default.inst.ShowMailContent(this.currentIndex, t)
            }
        };
        a([c(cc.Sprite)], u.prototype, "backGround", void 0), a([c(cc.Sprite)], u.prototype, "darkImage", void 0), a([c(cc.SpriteFrame)], u.prototype, "selectedSpriteFrame", void 0), a([c(cc.SpriteFrame)], u.prototype, "unselectedSpriteFrame", void 0), a([c(cc.SpriteFrame)], u.prototype, "expiredSpriteFrame", void 0), a([c(cc.Sprite)], u.prototype, "mailIcon", void 0), a([c(cc.SpriteFrame)], u.prototype, "systemUnread", void 0), a([c(cc.SpriteFrame)], u.prototype, "systemRead", void 0), a([c(cc.SpriteFrame)], u.prototype, "systemExpiredUnread", void 0), a([c(cc.SpriteFrame)], u.prototype, "systemExpiredRead", void 0), a([c(cc.SpriteFrame)], u.prototype, "giftsUntake", void 0), a([c(cc.SpriteFrame)], u.prototype, "giftsTake", void 0), a([c(cc.SpriteFrame)], u.prototype, "giftsExpiredUntake", void 0), a([c(cc.SpriteFrame)], u.prototype, "giftsExpiredTake", void 0), a([c(cc.Label)], u.prototype, "fromLabel", void 0), a([c(cc.Label)], u.prototype, "TitleLabel", void 0), a([c(cc.Label)], u.prototype, "getMailTimeLabel", void 0), a([c(cc.Node)], u.prototype, "chooseFrame", void 0), u = a([r], u), i.default = u, cc._RF.pop()
    }, {
        "../../../Utility/Functions": void 0,
        "../../../Utility/SuperScrollView/UISuperItem": void 0,
        "./MailData": "MailData",
        "./MailViewManager": "MailViewManager"
    }],
    MailNetworkCommand: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "c8a8fKT0t9FPISLvWxND854", "MailNetworkCommand"), Object.defineProperty(i, "__esModule", {
                value: !0
            }), i.Network = void 0,
            function(t) {
                (function(t) {
                    t.CommandId = "Mail", t.CommandName = {
                        CMD_GET_INFO: "MAIL_GET_INFO",
                        CMD_OPEN: "MAIL_OPEN",
                        CMD_READ: "MAIL_READ",
                        CMD_WRITE: "MAIL_WRITE",
                        CMD_DELETE: "MAIL_DELETE",
                        CMD_TAKE_REWARD: "MAIL_TAKE_REWARD"
                    }
                })(t.MailSystem || (t.MailSystem = {}))
            }(i.Network || (i.Network = {})), cc._RF.pop()
    }, {}],
    MailNetworkDataInterface: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "edff0Xtn/lDCYXcWP3vIJPY", "MailNetworkDataInterface"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), cc._RF.pop()
    }, {}],
    MailSystem: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "9b7186mfXlEjo8pSqeqRkLv", "MailSystem"), Object.defineProperty(i, "__esModule", {
            value: !0
        }), i.MailSystem = void 0;
        const a = t("../../../Net/LobbyClient"),
            n = t("./Network/MailNetworkCommand"),
            o = {
                "-10": "S420",
                "-20": "S420",
                "-601": "S420",
                "-602": "S420",
                "-603": "S420",
                "-604": "S420",
                "-605": "S420"
            },
            l = (t, e, i, a) => {
                if (0 == t)
                    if (e && e.cmd_data) {
                        const {
                            Code: n
                        } = null == e ? void 0 : e.cmd_data;
                        console.log("[MailSystem] Status: " + t + " Code: " + n + "\n", e), console.log("[MailSystem] Data: " + JSON.stringify(e)), t || n ? a(n) : i(e)
                    } else a(-1);
                else i(t)
            },
            s = {
                GetInfo: t => new Promise((e, i) => {
                    a.LobbyClient.Instance.GetUserClient.SendCommand(n.Network.MailSystem.CommandId, n.Network.MailSystem.CommandName.CMD_GET_INFO, t, (t, a) => {
                        l(t, a, e, i)
                    })
                }),
                LoadMail: t => new Promise((e, i) => {
                    a.LobbyClient.Instance.GetUserClient.SendCommand(n.Network.MailSystem.CommandId, n.Network.MailSystem.CommandName.CMD_OPEN, t, (t, a) => {
                        l(t, a, e, i)
                    })
                }),
                Read: t => new Promise((e, i) => {
                    a.LobbyClient.Instance.GetUserClient.SendCommand(n.Network.MailSystem.CommandId, n.Network.MailSystem.CommandName.CMD_READ, t, (t, a) => {
                        l(t, a, e, i)
                    })
                }),
                Delete: t => new Promise((e, i) => {
                    a.LobbyClient.Instance.GetUserClient.SendCommand(n.Network.MailSystem.CommandId, n.Network.MailSystem.CommandName.CMD_DELETE, t, (t, a) => {
                        l(t, a, e, i)
                    })
                }),
                TakeReward: t => new Promise((e, i) => {
                    a.LobbyClient.Instance.GetUserClient.SentNoRetryCommond(n.Network.MailSystem.CommandId, n.Network.MailSystem.CommandName.CMD_TAKE_REWARD, t, (t, a) => {
                        l(t, a, e, i)
                    })
                }),
                getErrorCode: t => o[t] || t
            };
        i.MailSystem = s, cc._RF.pop()
    }, {
        "../../../Net/LobbyClient": void 0,
        "./Network/MailNetworkCommand": "MailNetworkCommand"
    }],
    MailViewManager: [function(t, e, i) {
        "use strict";
        cc._RF.push(e, "c74baGxa1VLKrYFZGAKVUsg", "MailViewManager");
        var a = this && this.__decorate || function(t, e, i, a) {
                var n, o = arguments.length,
                    l = o < 3 ? e : null === a ? a = Object.getOwnPropertyDescriptor(e, i) : a;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) l = Reflect.decorate(t, e, i, a);
                else
                    for (var s = t.length - 1; s >= 0; s--)(n = t[s]) && (l = (o < 3 ? n(l) : o > 3 ? n(e, i, l) : n(e, i)) || l);
                return o > 3 && l && Object.defineProperty(e, i, l), l
            },
            n = this && this.__awaiter || function(t, e, i, a) {
                return new(i || (i = Promise))(function(n, o) {
                    function l(t) {
                        try {
                            r(a.next(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function s(t) {
                        try {
                            r(a.throw(t))
                        } catch (e) {
                            o(e)
                        }
                    }

                    function r(t) {
                        var e;
                        t.done ? n(t.value) : (e = t.value, e instanceof i ? e : new i(function(t) {
                            t(e)
                        })).then(l, s)
                    }
                    r((a = a.apply(t, e || [])).next())
                })
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const o = t("../../../Connect/Script/ConnectPanelMgr"),
            l = t("../../../Helper/EventSystem"),
            s = t("../../../Net/ClickLog"),
            r = t("../../../Net/ClickLogEnum"),
            c = t("../../../PopupMessage/Script/PopupMsgMgr"),
            u = t("../../../Utility/Functions"),
            d = t("../../../Utility/Singleton"),
            M = t("../../../Utility/SuperScrollView/UISuperLayout"),
            p = t("./MailClaimGiftNotify"),
            h = t("./MailData"),
            m = t("./MailGiftItem"),
            S = t("./MailSystem"),
            {
                ccclass: f,
                property: E
            } = cc._decorator;
        let y = class extends(d.SingletonComponent()) {
            constructor() {
                super(...arguments), this.mailRoot = null, this.superLayout = null, this.listLabelPanel = null, this.createTimeLabel = null, this.titleLabel = null, this.fromLabel = null, this.expiredTimeLabel = null, this.expiredClaimLabelNode = null, this.contentLabelScroll = null, this.contentRichTxt = null, this.giftItemPrefab = null, this.giftsNode = null, this.claimAllBtn = null, this.claimBtn = null, this.noMailNode = null, this.ContentNode = null, this.claimNotifyPrefab = null, this.claimNotifyTarget = null, this.currentMailIndex = -1, this.currentMailContentInfo = null, this.untakeMailCount = 0
            }
            onLoad() {
                super.onLoad(), this.CloseMailBox(), l.EventSystem.Event(l.Mail.ShowMailBox).Insert(this.ShowMailBox, this)
            }
            onDestroy() {
                super.onDestroy(), l.EventSystem.Event(l.Mail.ShowMailBox).Remove(this.ShowMailBox, this)
            }
            SendLoadMail(t = null, e = 100) {
                return n(this, void 0, void 0, function*() {
                    o.ConnectPanelMgr.Instance.ShowConnectPanel(0), this.ContentNode.active = !1;
                    let i = {
                        Status: [h.MailStatus.ENUM_UNREAD, h.MailStatus.ENUM_READ, h.MailStatus.ENUM_TAKE, h.MailStatus.ENUM_EXPIRED_UNREAD, h.MailStatus.ENUM_EXPIRED_READ, h.MailStatus.ENUM_EXPIRED_TAKE],
                        Length: e
                    };
                    t || (i.StartId = t);
                    const a = yield S.MailSystem.LoadMail(i), n = null == a ? void 0 : a.cmd_data;
                    if (n)
                        if (0 != n.Code) c.PopupMsgMgr.Instance.ShowPopMsg(c.PopupPriority.Info, S.MailSystem.getErrorCode(n.Code.toString()), SS.Common.GameEnvironment.CurrentGameNow, "CONNECTION ERROR.", () => {
                            this.CloseMailBox()
                        });
                        else {
                            let t = n;
                            if (console.log("[MailViewManager] -> SendLoadMail -> openData = "), console.log(t), h.default.inst.MailList.clear(), null != t.Reward)
                                for (let e = 0; e < t.Reward.length; e++) {
                                    let i = t.Reward[e];
                                    if (i.Content = null, h.default.inst.MailList.containsKey(i.MailId)) {
                                        let t = h.default.inst.MailList.getValue(i.MailId);
                                        t.SetupWithMailInfo(i), h.default.inst.MailList.changeValueForKey(i.MailId, t)
                                    } else {
                                        let t = new h.MailContentInfo;
                                        t.SetupWithMailInfo(i), h.default.inst.MailList.add(i.MailId, t)
                                    }
                                }
                            if (null != t.System)
                                for (let e = 0; e < t.System.length; e++) {
                                    let i = t.System[e];
                                    if (i.Content = null, h.default.inst.MailList.containsKey(i.MailId)) {
                                        let t = h.default.inst.MailList.getValue(i.MailId);
                                        t.SetupWithMailInfo(i), h.default.inst.MailList.changeValueForKey(i.MailId, t)
                                    } else {
                                        let t = new h.MailContentInfo;
                                        t.SetupWithMailInfo(i), h.default.inst.MailList.add(i.MailId, t)
                                    }
                                }
                            this.LoadMail()
                        }
                    else c.PopupMsgMgr.Instance.ShowPopMsg(c.PopupPriority.Info, a.toString(), SS.Common.GameEnvironment.CurrentGameNow, "CONNECTION ERROR.", () => {
                        this.CloseMailBox()
                    }), o.ConnectPanelMgr.Instance.DisableConnectPanel(0)
                })
            }
            LoadMail() {
                this.untakeMailCount = 0, this.SortMail(), this.superLayout.total(h.default.inst.MailList.count());
                for (let t = 0; t < h.default.inst.MailList.count(); t++) {
                    let e = h.default.inst.MailList.values()[t];
                    e.MailType != h.MailType.ENUM_REWARD || e.Status != h.MailStatus.ENUM_READ && e.Status != h.MailStatus.ENUM_UNREAD || this.untakeMailCount++
                }
                if (this.claimAllBtn.getComponent(cc.Button).interactable = this.untakeMailCount > 0, this.CheckHaveMail()) {
                    let t = h.default.inst.MailList.values()[0];
                    t.Status == h.MailStatus.ENUM_UNREAD ? t.Status = h.MailStatus.ENUM_READ : t.Status == h.MailStatus.ENUM_EXPIRED_UNREAD && (t.Status = h.MailStatus.ENUM_EXPIRED_READ), h.default.inst.MailList.changeValueForKey(t.MailId, t), this.ShowMailContent(0, t)
                }
                this.superLayout.scrollToHeader(), o.ConnectPanelMgr.Instance.DisableConnectPanel(0)
            }
            SetupListLabelLayer(t) {
                for (let e = 0; e < t.length; e++) t[e].node.setParent(this.listLabelPanel)
            }
            ShowMailBox() {
                s.ClickLog.SendLog(r.LogName.PlayerAction, r.LogType_PlayerAction.Mail, r.LogEvent_Mail.Icon), this.SendLoadMail(), this.mailRoot.active = !0, l.EventSystem.Event(l.SystemMsg.Open).Notify(this.mailRoot, cc.Size.ZERO, cc.Size.ZERO, 0, null, !1, !1, this.OnClose.bind(this))
            }
            CloseMailBox() {
                this.mailRoot.active = !1, l.EventSystem.Event(l.SystemMsg.Close).Notify()
            }
            OnClose() {
                this.mailRoot.active = !1
            }
            SortMail() {
                let t = h.default.inst.MailList.values();
                t.sort((t, e) => {
                    let i = this.GetSortPriority(t),
                        a = this.GetSortPriority(e);
                    return i == a ? e.CreateTs - t.CreateTs : i - a
                }), h.default.inst.MailList.clear();
                for (let e = 0; e < t.length; e++) h.default.inst.MailList.add(t[e].MailId, t[e])
            }
            GetSortPriority(t) {
                return t.MailType == h.MailType.ENUM_SYSTEM && t.Status == h.MailStatus.ENUM_UNREAD ? 1 : t.MailType != h.MailType.ENUM_REWARD || t.Status != h.MailStatus.ENUM_UNREAD && t.Status != h.MailStatus.ENUM_READ ? 2 : 1
            }
            GetCurrentSelectedIndex() {
                return this.currentMailIndex
            }
            ShowMailContent(t, e) {
                return n(this, void 0, void 0, function*() {
                    o.ConnectPanelMgr.Instance.ShowConnectPanel(0), this.ContentNode.active = !1;
                    let i = '{"MailId":"' + e.MailId + '", "Title":"' + e.Title + '"}';
                    if (s.ClickLog.SendLog(r.LogName.PlayerAction, r.LogType_PlayerAction.Mail, r.LogEvent_Mail.ReadMail, "", JSON.parse(i)), e.Content) this.ClickMailListItem(t), this.SetupMailContent(h.default.inst.MailList.values()[t]);
                    else {
                        let i = {
                            MailId: e.MailId
                        };
                        const a = yield S.MailSystem.Read(i), n = null == a ? void 0 : a.cmd_data;
                        n && (0 != n.Code ? c.PopupMsgMgr.Instance.ShowPopMsg(c.PopupPriority.Info, S.MailSystem.getErrorCode(n.Code.toString()), SS.Common.GameEnvironment.CurrentGameNow, "CONNECTION ERROR.") : (h.default.inst.MailList.values()[t].Content = n.Content, h.default.inst.MailList.changeValueForKey(e.MailId, e), this.ClickMailListItem(t), this.SetupMailContent(e)))
                    }
                    o.ConnectPanelMgr.Instance.DisableConnectPanel(0)
                })
            }
            ClickMailListItem(t) {
                this.currentMailIndex = t, this.superLayout.total(h.default.inst.MailList.count())
            }
            SetupMailContent(t) {
                if (console.log("[MailViewManager] -> SetupMailContent -> mail = "), console.log(t), this.ContentNode.active = !0, this.currentMailContentInfo = t, this.titleLabel.string = t.Title, this.fromLabel.string = t.FromName, this.createTimeLabel.string = u.default.GetLocaleStringByBrowser(t.CreateTs, "en-us"), this.expiredTimeLabel.string = t.ExpiredTs ? "EXPIRES ON " + u.default.GetLocaleStringByBrowser(t.ExpiredTs, "en-us") : "", null != t.RewardList) {
                    if (this.giftsNode.childrenCount >= t.RewardList.length)
                        for (let e = this.giftsNode.childrenCount - 1; e >= t.RewardList.length; e--) this.giftsNode.children[e].destroy();
                    else
                        for (let e = this.giftsNode.childrenCount; e < t.RewardList.length; e++) cc.instantiate(this.giftItemPrefab).setParent(this.giftsNode);
                    for (let e = 0; e < t.RewardList.length; e++) this.giftsNode.children[e].getComponent(m.default).SetUpItem(this.GetRewardStr(t.RewardList[e]), this.GetRewardAmt(t.RewardList[e]), t.Status == h.MailStatus.ENUM_TAKE || t.Status == h.MailStatus.ENUM_EXPIRED_TAKE, t.Status == h.MailStatus.ENUM_TAKE_ERROR, t.Status == h.MailStatus.ENUM_EXPIRED_READ);
                    this.giftsNode.active = !0, this.contentLabelScroll.node.height = 265, this.contentLabelScroll.node.position = new cc.Vec3(0, 61, 0), this.claimBtn.active = t.MailType == h.MailType.ENUM_REWARD && (t.Status == h.MailStatus.ENUM_READ || t.Status == h.MailStatus.ENUM_UNREAD)
                } else this.giftsNode.active = !1, this.contentLabelScroll.node.height = 350, this.contentLabelScroll.node.position = new cc.Vec3(0, 20, 0), this.claimBtn.active = !1;
                t.MailType != h.MailType.ENUM_REWARD || t.Status != h.MailStatus.ENUM_EXPIRED_READ && t.Status != h.MailStatus.ENUM_EXPIRED_UNREAD ? this.expiredClaimLabelNode.active = !1 : this.expiredClaimLabelNode.active = !0, this.contentRichTxt.string = t.Content, cc.tween(this.node).delay(.1).call(() => {
                    this.contentLabelScroll.scrollToTop()
                }).start()
            }
            GetRewardAmt(t) {
                return t.Coin ? t.Coin : t.entries ? t.entries : t.winnings ? t.winnings : null
            }
            GetRewardStr(t) {
                return t.Coin ? "Coin" : t.entries ? "entries" : t.winnings ? "winnings" : null
            }
            ClaimMail() {
                return n(this, void 0, void 0, function*() {
                    o.ConnectPanelMgr.Instance.ShowConnectPanel(0);
                    let t = new Array;
                    t.push(this.currentMailContentInfo.MailId);
                    let e = {
                        MailId: t
                    };
                    const i = yield S.MailSystem.TakeReward(e), a = null == i ? void 0 : i.cmd_data;
                    if (a)
                        if (0 != a.Code) c.PopupMsgMgr.Instance.ShowPopMsg(c.PopupPriority.Info, S.MailSystem.getErrorCode(a.Code.toString()), SS.Common.GameEnvironment.CurrentGameNow, "CONNECTION ERROR.", () => {
                            this.CloseMailBox()
                        });
                        else {
                            this.currentMailContentInfo.Status = h.MailStatus.ENUM_TAKE, h.default.inst.MailList.changeValueForKey(this.currentMailContentInfo.MailId, this.currentMailContentInfo), this.untakeMailCount--, this.claimAllBtn.getComponent(cc.Button).interactable = this.untakeMailCount > 0, this.superLayout.total(h.default.inst.MailList.count()), this.SetupMailContent(this.currentMailContentInfo);
                            for (let t = 0; t < this.currentMailContentInfo.RewardList.length; t++) this.ShowClaimNotify(this.GetRewardStr(this.currentMailContentInfo.RewardList[t]), this.GetRewardAmt(this.currentMailContentInfo.RewardList[t]));
                            if (a.Asset) {
                                const t = l.EventSystem.Function(l.DownBar.GetPlayerEntries)(),
                                    e = l.EventSystem.Function(l.DownBar.GetPlayerWinnings)();
                                l.EventSystem.Event(l.DownBar.SetPlayerInfo).Notify(a.Asset.hasOwnProperty("entries") ? a.Asset.entries : t, a.Asset.hasOwnProperty("winnings") ? a.Asset.winnings : e)
                            }
                        }
                    else c.PopupMsgMgr.Instance.ShowPopMsg(c.PopupPriority.Error, i.toString(), SS.Common.GameEnvironment.CurrentGameNow, "CONNECTION ERROR.");
                    o.ConnectPanelMgr.Instance.DisableConnectPanel(0)
                })
            }
            ClaimAllMail() {
                return n(this, void 0, void 0, function*() {
                    o.ConnectPanelMgr.Instance.ShowConnectPanel(0);
                    let t = new Array;
                    for (let n = 0; n < h.default.inst.MailList.count(); n++) {
                        let e = h.default.inst.MailList.values()[n];
                        e.MailType != h.MailType.ENUM_REWARD || e.Status != h.MailStatus.ENUM_UNREAD && e.Status != h.MailStatus.ENUM_READ || t.push(e.MailId)
                    }
                    let e = {
                        MailId: t
                    };
                    const i = yield S.MailSystem.TakeReward(e), a = null == i ? void 0 : i.cmd_data;
                    if (a)
                        if (0 != a.Code) c.PopupMsgMgr.Instance.ShowPopMsg(c.PopupPriority.Info, S.MailSystem.getErrorCode(a.Code.toString()), SS.Common.GameEnvironment.CurrentGameNow, "CONNECTION ERROR.", () => {
                            this.CloseMailBox()
                        });
                        else {
                            let t = a;
                            for (let e = 0; e < t.Reward.length; e++) {
                                h.default.inst.UnReadUnTakeMailCount--;
                                let i = h.default.inst.MailList.getValue(t.Reward[e].MailId);
                                i.Status = h.MailStatus.ENUM_TAKE, h.default.inst.MailList.changeValueForKey(t.Reward[e].MailId, i), this.untakeMailCount--, this.ShowClaimNotify(this.GetRewardStr(t.Reward[e]), this.GetRewardAmt(t.Reward[e]))
                            }
                            if (this.currentMailContentInfo = h.default.inst.MailList.getValue(this.currentMailContentInfo.MailId), this.claimAllBtn.getComponent(cc.Button).interactable = this.untakeMailCount > 0, this.superLayout.total(h.default.inst.MailList.count()), this.SetupMailContent(this.currentMailContentInfo), a.Asset) {
                                const t = l.EventSystem.Function(l.DownBar.GetPlayerEntries)(),
                                    e = l.EventSystem.Function(l.DownBar.GetPlayerWinnings)();
                                l.EventSystem.Event(l.DownBar.SetPlayerInfo).Notify(a.Asset.hasOwnProperty("entries") ? a.Asset.entries : t, a.Asset.hasOwnProperty("winnings") ? a.Asset.winnings : e)
                            }
                        }
                    else c.PopupMsgMgr.Instance.ShowPopMsg(c.PopupPriority.Error, i.toString(), SS.Common.GameEnvironment.CurrentGameNow, "CONNECTION ERROR.");
                    o.ConnectPanelMgr.Instance.DisableConnectPanel(0)
                })
            }
            ShowClaimNotify(t, e) {
                let i = cc.instantiate(this.claimNotifyPrefab);
                i.setParent(this.claimNotifyTarget), i.getComponent(p.default).ShowNotify(t, e)
            }
            DeleteMail() {
                return n(this, void 0, void 0, function*() {
                    this.currentMailContentInfo.MailType != h.MailType.ENUM_REWARD || this.currentMailContentInfo.Status != h.MailStatus.ENUM_READ && this.currentMailContentInfo.Status != h.MailStatus.ENUM_UNREAD ? this.DeleteMailHandle() : c.PopupMsgMgr.Instance.ShowPopMsg(c.PopupPriority.Info, "", SS.Common.GameEnvironment.CurrentGameNow, "Are you sure you want to delete this mail?", this.DeleteMailHandle.bind(this))
                })
            }
            DeleteMailHandle() {
                return n(this, void 0, void 0, function*() {
                    let t = new Array;
                    t.push(this.currentMailContentInfo.MailId), o.ConnectPanelMgr.Instance.ShowConnectPanel(0);
                    let e = {
                        MailId: t
                    };
                    const i = yield S.MailSystem.Delete(e), a = null == i ? void 0 : i.cmd_data;
                    if (a)
                        if (0 != a.Code) c.PopupMsgMgr.Instance.ShowPopMsg(c.PopupPriority.Info, S.MailSystem.getErrorCode(a.Code.toString()), SS.Common.GameEnvironment.CurrentGameNow, "CONNECTION ERROR.");
                        else {
                            let t = this.currentMailContentInfo;
                            t.MailType != h.MailType.ENUM_REWARD || t.Status != h.MailStatus.ENUM_READ && t.Status != h.MailStatus.ENUM_UNREAD || this.untakeMailCount--, this.claimAllBtn.getComponent(cc.Button).interactable = this.untakeMailCount > 0, h.default.inst.MailList.remove(this.currentMailContentInfo.MailId), this.CheckHaveMail() ? this.ShowMailContent(this.currentMailIndex, h.default.inst.MailList.values()[0]) : (this.currentMailIndex = -1, this.currentMailContentInfo = null), this.superLayout.total(h.default.inst.MailList.count())
                        }
                    else c.PopupMsgMgr.Instance.ShowPopMsg(c.PopupPriority.Info, i.toString(), SS.Common.GameEnvironment.CurrentGameNow, "CONNECTION ERROR.");
                    o.ConnectPanelMgr.Instance.DisableConnectPanel(0)
                })
            }
            CheckHaveMail() {
                return this.noMailNode.active = !(h.default.inst.MailList.count() > 0), this.ContentNode.active = h.default.inst.MailList.count() > 0, h.default.inst.MailList.count() > 0
            }
        };
        a([E(cc.Node)], y.prototype, "mailRoot", void 0), a([E(M.default)], y.prototype, "superLayout", void 0), a([E(cc.Node)], y.prototype, "listLabelPanel", void 0), a([E(cc.Label)], y.prototype, "createTimeLabel", void 0), a([E(cc.Label)], y.prototype, "titleLabel", void 0), a([E(cc.Label)], y.prototype, "fromLabel", void 0), a([E(cc.Label)], y.prototype, "expiredTimeLabel", void 0), a([E(cc.Node)], y.prototype, "expiredClaimLabelNode", void 0), a([E(cc.ScrollView)], y.prototype, "contentLabelScroll", void 0), a([E(cc.RichText)], y.prototype, "contentRichTxt", void 0), a([E(cc.Prefab)], y.prototype, "giftItemPrefab", void 0), a([E(cc.Node)], y.prototype, "giftsNode", void 0), a([E(cc.Node)], y.prototype, "claimAllBtn", void 0), a([E(cc.Node)], y.prototype, "claimBtn", void 0), a([E(cc.Node)], y.prototype, "noMailNode", void 0), a([E(cc.Node)], y.prototype, "ContentNode", void 0), a([E(cc.Prefab)], y.prototype, "claimNotifyPrefab", void 0), a([E(cc.Node)], y.prototype, "claimNotifyTarget", void 0), y = a([f], y), i.default = y, cc._RF.pop()
    }, {
        "../../../Connect/Script/ConnectPanelMgr": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../Net/ClickLog": void 0,
        "../../../Net/ClickLogEnum": void 0,
        "../../../PopupMessage/Script/PopupMsgMgr": void 0,
        "../../../Utility/Functions": void 0,
        "../../../Utility/Singleton": void 0,
        "../../../Utility/SuperScrollView/UISuperLayout": void 0,
        "./MailClaimGiftNotify": "MailClaimGiftNotify",
        "./MailData": "MailData",
        "./MailGiftItem": "MailGiftItem",
        "./MailSystem": "MailSystem"
    }]
}, {}, ["MailClaimGiftNotify", "MailData", "MailGiftItem", "MailIcon", "MailListItem", "MailSystem", "MailViewManager", "MailNetworkCommand", "MailNetworkDataInterface"]);