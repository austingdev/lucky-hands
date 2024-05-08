window.__require = function e(t, r, n) {
    function c(a, i) {
        if (!r[a]) {
            if (!t[a]) {
                var o = a.split("/");
                if (o = o[o.length - 1], !t[o]) {
                    var u = "function" == typeof __require && __require;
                    if (!i && u) return u(o, !0);
                    if (s) return s(o, !0);
                    throw new Error("Cannot find module '" + a + "'")
                }
                a = o
            }
            var p = r[a] = {
                exports: {}
            };
            t[a][0].call(p.exports, function(e) {
                return c(t[a][1][e] || e)
            }, p, p.exports, e, t, r, n)
        }
        return r[a].exports
    }
    for (var s = "function" == typeof __require && __require, a = 0; a < n.length; a++) c(n[a]);
    return c
}({
    LockWeaponTD: [function(e, t, r) {
        "use strict";
        cc._RF.push(t, "c6934g7wvpOPrQhe30sedLK", "LockWeaponTD");
        var n, c = this && this.__extends || (n = function(e, t) {
                return (n = Object.setPrototypeOf || {
                        __proto__: []
                    }
                    instanceof Array && function(e, t) {
                        e.__proto__ = t
                    } || function(e, t) {
                        for (var r in t) t.hasOwnProperty(r) && (e[r] = t[r])
                    })(e, t)
            }, function(e, t) {
                function r() {
                    this.constructor = e
                }
                n(e, t), e.prototype = null === t ? Object.create(t) : (r.prototype = t.prototype, new r)
            }),
            s = this && this.__decorate || function(e, t, r, n) {
                var c, s = arguments.length,
                    a = s < 3 ? t : null === n ? n = Object.getOwnPropertyDescriptor(t, r) : n;
                if ("object" == typeof Reflect && "function" == typeof Reflect.decorate) a = Reflect.decorate(e, t, r, n);
                else
                    for (var i = e.length - 1; i >= 0; i--)(c = e[i]) && (a = (s < 3 ? c(a) : s > 3 ? c(t, r, a) : c(t, r)) || a);
                return s > 3 && a && Object.defineProperty(t, r, a), a
            };
        Object.defineProperty(r, "__esModule", {
            value: !0
        });
        var a = e("../../../../../../FishHunter/Script/Game/MainGame/Common/EnumFilter"),
            i = e("../../../../../../FishHunter/Script/Game/MainGame/Fish/FishManager"),
            o = e("../../../../../../FishHunter/Script/Game/MainGame/Weapon/LockWeapon"),
            u = cc._decorator,
            p = u.ccclass,
            f = (u.property, function(e) {
                function t() {
                    return null !== e && e.apply(this, arguments) || this
                }
                return c(t, e), t.prototype.SetFishIcon = function(e) {
                    if (this.fishIconImg) {
                        var t = this.GetFishIconIndex(e);
                        this.fishIconList[t] ? (this.fishIconImg.spriteFrame = this.fishIconList[t], this.fishIconImg.node.active = !0) : this.fishIconImg.node.active = !1
                    }
                }, t.prototype.InitFunction = function() {
                    this.GetFishIconIndex = this.GetFishIconIndexTD
                }, t.prototype.GetFishIconIndexTD = function(e) {
                    switch (e) {
                        case 47:
                            return 0;
                        case 48:
                            return 1;
                        case 22:
                            return 21;
                        case 23:
                            return 22;
                        case 24:
                            return 23;
                        case 29:
                            switch (i.default.Instance.getUniqueFishData(a.FishType.TreasureCrab).getLevel) {
                                case 1:
                                    return 24;
                                case 2:
                                    return 25;
                                case 3:
                                    return 26
                            }
                        case 32:
                            return 27;
                        case 34:
                            return 28;
                        case 35:
                            return 29;
                        case 36:
                        case 61:
                        case 62:
                        case 63:
                        case 64:
                        case 65:
                        case 66:
                            return 30;
                        case 77:
                            return 31;
                        case 78:
                            return 32;
                        case 55:
                        case 200:
                        case 201:
                        case 202:
                        case 203:
                        case 204:
                        case 205:
                        case 206:
                        case 207:
                        case 208:
                        case 209:
                        case 210:
                            return 33;
                        case 300:
                        case 301:
                        case 302:
                        case 303:
                        case 304:
                        case 305:
                        case 306:
                        case 307:
                        case 308:
                        case 309:
                            return 34;
                        case 79:
                            return 35;
                        case 87:
                            return 36;
                        case 88:
                            return 37;
                        default:
                            return e
                    }
                }, s([p], t)
            }(o.default));
        r.default = f, cc._RF.pop()
    }, {
        "../../../../../../FishHunter/Script/Game/MainGame/Common/EnumFilter": void 0,
        "../../../../../../FishHunter/Script/Game/MainGame/Fish/FishManager": void 0,
        "../../../../../../FishHunter/Script/Game/MainGame/Weapon/LockWeapon": void 0
    }]
}, {}, ["LockWeaponTD"]);