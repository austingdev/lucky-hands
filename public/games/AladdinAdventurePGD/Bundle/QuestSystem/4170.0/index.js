window.__require = function e(t, i, s) {
    function n(o, r) {
        if (!i[o]) {
            if (!t[o]) {
                var a = o.split("/");
                if (a = a[a.length - 1], !t[a]) {
                    var h = "function" == typeof __require && __require;
                    if (!r && h) return h(a, !0);
                    if (c) return c(a, !0);
                    throw new Error("Cannot find module '" + o + "'")
                }
                o = a
            }
            var u = i[o] = {
                exports: {}
            };
            t[o][0].call(u.exports, function(e) {
                return n(t[o][1][e] || e)
            }, u, u.exports, e, t, i, s)
        }
        return i[o].exports
    }
    for (var c = "function" == typeof __require && __require, o = 0; o < s.length; o++) n(s[o]);
    return n
}({
    QuestSystem: [function(e, t, i) {
        "use strict";
        cc._RF.push(t, "8e430mnktFMDbfyUHpEcZ3/", "QuestSystem");
        var s = this && this.__decorate || function(e, t, i, s) {
                var n, c = arguments.length,
                    o = c < 3 ? t : null === s ? s = Object.getOwnPropertyDescriptor(t, i) : s;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) o = Reflect.decorate(e, t, i, s);
                else
                    for (var r = e.length - 1; r >= 0; r--)(n = e[r]) && (o = (c < 3 ? n(o) : c > 3 ? n(t, i, o) : n(t, i)) || o);
                return c > 3 && o && Object.defineProperty(t, i, o), o
            },
            n = this && this.__awaiter || function(e, t, i, s) {
                return new(i || (i = Promise))(function(n, c) {
                    function o(e) {
                        try {
                            a(s.next(e))
                        } catch (t) {
                            c(t)
                        }
                    }

                    function r(e) {
                        try {
                            a(s.throw(e))
                        } catch (t) {
                            c(t)
                        }
                    }

                    function a(e) {
                        var t;
                        e.done ? n(e.value) : (t = e.value, t instanceof i ? t : new i(function(e) {
                            e(t)
                        })).then(o, r)
                    }
                    a((s = s.apply(e, t || [])).next())
                })
            };
        Object.defineProperty(i, "__esModule", {
            value: !0
        });
        const c = e("../../../Achieve/AchieveDefine"),
            o = e("../../../Achieve/AchieveMgr"),
            r = e("../../../Achieve/AchieveName"),
            a = e("../../../Achieve/TaskDefine"),
            h = e("../../../ActCapsule/ActCapsuleMgr"),
            u = e("../../../Helper/EventSystem"),
            l = e("../../../ModuleBase"),
            v = e("../../../Quest/Scripts/QuestCmd"),
            d = e("../../../Quest/Scripts/QuestEvents"),
            {
                ccclass: f,
                property: A
            } = cc._decorator;
        let y = class extends l.default {
            constructor() {
                super(...arguments), this.questData = null, this.achievePacks = null, this.achieveMgr = null, this.actCapsuleMgr = null, this.timeoutID = void 0
            }
            _onLoad() {
                this.achieveMgr = o.default.Instance, this.actCapsuleMgr = h.default.Instance
            }
            _onDestroy() {
                var e, t;
                null === (e = this.achieveMgr) || void 0 === e || e.Destroy(), null === (t = this.actCapsuleMgr) || void 0 === t || t.Destroy(), clearInterval(this.timeoutID)
            }
            _waitPacket() {
                return n(this, void 0, void 0, function*() {
                    yield this.Init()
                })
            }
            _downloadResources() {
                return n(this, void 0, void 0, function*() {
                    yield this.GenAchieves(), console.log("[QuestSystem] Inited"), u.EventSystem.Event(d.QuestEvent.OnQuestInited).Notify()
                })
            }
            Init() {
                return n(this, void 0, void 0, function*() {
                    this.achievePacks = new SS.Common.Dictionary;
                    const e = yield v.QuestCmd.GetQuest();
                    this.questData = e, yield Promise.all([this.GetAllAchieveInfo(), this.GenActCapsules()]).catch(e => {
                        console.error("[QuestSystem] Init Error: " + e)
                    }), this.timeoutID = setInterval(() => {
                        this.RefreshAchieve()
                    }, 1e3 * this.questData.refreshSec)
                })
            }
            RefreshAchieve() {
                return n(this, void 0, void 0, function*() {
                    this.achievePacks = new SS.Common.Dictionary;
                    const e = yield v.QuestCmd.GetQuest();
                    this.questData = e, yield this.GetAllAchieveInfo().catch(e => {
                        console.error("[QuestSystem] RefreshAchieve Error", e)
                    });
                    const t = [];
                    this.achievePacks.keys().forEach(e => {
                        const {
                            data: i,
                            info: s,
                            task: n
                        } = this.achievePacks.getValue(e);
                        t.push(this.achieveMgr.InitAchieve(e, i, s, n))
                    });
                    for (let i of t) yield i;
                    u.EventSystem.Event(d.QuestEvent.OnQuestRefresh).Notify()
                })
            }
            GenAchieves() {
                return n(this, void 0, void 0, function*() {
                    yield this.InitAchieves(), this.achieveMgr.AttachToNode(this.node)
                })
            }
            GenActCapsules() {
                return n(this, void 0, void 0, function*() {
                    const {
                        data: e
                    } = this.questData;
                    for (let t of e.keys())
                        if (r.AchieveName[t]) {
                            const {
                                roundId: i
                            } = e.getValue(t), s = yield h.default.Instance.GetMachineInfo(i);
                            s && h.default.Instance.InitActCapsule(i, s)
                        }
                })
            }
            InitAchieves() {
                this.achieveMgr.InitDict();
                const e = [];
                return this.achievePacks.keys().forEach(t => {
                    const {
                        data: i,
                        info: s,
                        task: n
                    } = this.achievePacks.getValue(t);
                    e.push(this.achieveMgr.InitAchieve(t, i, s, n))
                }), Promise.all(e)
            }
            GetAllAchieveInfo() {
                return n(this, void 0, void 0, function*() {
                    return new Promise(e => n(this, void 0, void 0, function*() {
                        const {
                            data: t
                        } = this.questData;
                        for (let e of t.keys()) r.AchieveName[e] && (yield this.GetAchieveInfo(e, t.getValue(e)));
                        e()
                    }))
                })
            }
            GetAchieveInfo(e, t) {
                return new Promise(i => {
                    const s = t,
                        n = [v.QuestCmd.GetAchieveInfo(s.roundId, new c.AchieveInfo), v.QuestCmd.GetAchieveTask(s.roundId, null, new a.TaskData).catch(e => {
                            console.log("SSS GetAchieveTask: " + e)
                        })],
                        o = () => {
                            i()
                        };
                    this.schedule(o, 10), Promise.all(n).then(t => {
                        const n = t[0],
                            c = t[1];
                        this.achievePacks.add(e, {
                            data: s,
                            info: n,
                            task: c
                        }), this.unschedule(o), i()
                    }).catch(t => {
                        this.achievePacks.add(e, {
                            data: s,
                            info: null,
                            task: null
                        }), console.warn("[QuestSystem] GetAchieveInfo Error:", t), this.unschedule(o), i()
                    })
                })
            }
        };
        y = s([f], y), i.default = y, cc._RF.pop()
    }, {
        "../../../Achieve/AchieveDefine": void 0,
        "../../../Achieve/AchieveMgr": void 0,
        "../../../Achieve/AchieveName": void 0,
        "../../../Achieve/TaskDefine": void 0,
        "../../../ActCapsule/ActCapsuleMgr": void 0,
        "../../../Helper/EventSystem": void 0,
        "../../../ModuleBase": void 0,
        "../../../Quest/Scripts/QuestCmd": void 0,
        "../../../Quest/Scripts/QuestEvents": void 0
    }]
}, {}, ["QuestSystem"]);