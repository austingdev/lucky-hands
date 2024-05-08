var SS;
(function(SS) {
    var Common;
    (function(Common) {
        var BaseFunction = /** @class */ (function() {
            function BaseFunction() {}
            /**
             * 加上千分位(第二個參數設定四捨五入到小數點第幾位)
             * @param val 數值
             * @param decimalPlaces Number of digits after the decimal point. Must be in the range 0 - 20, inclusive
             */
            BaseFunction.addCommas = function(val, decimalPlaces, needMoneySymbol) {
                if (needMoneySymbol === void 0) {
                    needMoneySymbol = false;
                }
                var ret = val.toFixed(decimalPlaces);
                // let rgx : RegExp = /(\d+)(\d{3})/;
                switch (Common.GameEnvironment.NumberFormat) {
                    case 'EN':
                    case 'en':
                        ret = ret.replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,');
                        break;
                    case 'CL':
                    case 'cl':
                        ret = ret.replace('.', ",");
                        ret = ret.replace(/(\d)(?=(\d{3})+(?!\d))/g, "$1.");
                        break;
                    default:
                }
                if (needMoneySymbol)
                    ret = "$" + ret;
                return ret;
            };
            /**
             * 判斷有沒有超出最大值和最小值 *小於最小值、大於等於最大值
             * @param min 最小值(不包含)
             * @param max 最大值(包含)
             * @param value 被檢查數值
             */
            BaseFunction.CheckOutOfRange = function(min, max, value) {
                if (value < min || value >= max)
                    return true;
                return false;
            };
            /**
             * 數值相乘取得精確數值
             * @param val 數值1
             * @param va2 數值2
             */
            BaseFunction.accMul = function(val1, val2) {
                var m = 0,
                    m1 = 0,
                    m2 = 0,
                    s1 = val1.toString(),
                    s2 = val2.toString();
                try {
                    m1 = s1.split(".")[1].length;
                } catch (e) {}
                try {
                    m2 = s2.split(".")[1].length;
                } catch (e) {}
                return Number(s1.replace(".", "")) * Number(s2.replace(".", "")) / Math.pow(10, m1 + m2);
            };
            /**
             * 數值相除取得精確數值
             * @param val 數值1
             * @param va2 數值2
             */
            BaseFunction.accDiv = function(arg1, arg2) {
                var t1 = 0,
                    t2 = 0,
                    r1, r2;
                try {
                    t1 = arg1.toString().split(".")[1].length;
                } catch (e) {}
                try {
                    t2 = arg2.toString().split(".")[1].length;
                } catch (e) {}
                r1 = Number(arg1.toString().replace(".", ""));
                r2 = Number(arg2.toString().replace(".", ""));
                return (r1 / r2) * Math.pow(10, t2 - t1);
            };
            /**
             * 侷限Value在範圍內
             * @param min 最小值(不包含)
             * @param max 最大值(包含)
             * @param value 被檢查數值
             */
            BaseFunction.Clamp = function(min, max, value) {
                if (value < min) {
                    return min;
                }
                if (value >= max) {
                    return max;
                }
                return value;
            };
            /**
             * 取得URL參數
             * @param key key
             */
            BaseFunction.GetURLParameterByName = function(key) {
                key = key.toLowerCase();
                key = key.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var regex = new RegExp("[\\?&]" + key + "=([^&#]*)"),
                    results = regex.exec(location.search.toLowerCase());
                return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
            };
            /**
             * 自定義小數位數四捨五入
             * @param value 數值
             * @param decimalDigit 小數位數
             */
            BaseFunction.CustomizeRound = function(value, decimalDigit) {
                var digitMultiplier = Math.pow(10, decimalDigit);
                var valuetMultiplier = value * digitMultiplier;
                valuetMultiplier += 0.5;
                var roundValue = (valuetMultiplier - (valuetMultiplier % 1)) / digitMultiplier;
                return roundValue;
            };
            /**
             * 設定cookie
             * @param key 欄位
             * @param value 值
             * @param exMin 保留時間(分鐘)
             */
            BaseFunction.setCookie = function(key, value, exMin) {
                var date = new Date();
                date.setTime(date.getTime() + (exMin * 60 * 1000));
                var expires = "expires=" + date.toUTCString();
                document.cookie = key + "=" + value + "; " + expires;
            };
            /**
             * 取得cookie
             * @param key 欄位
             */
            BaseFunction.getCookie = function(key) {
                var name = key + "=";
                var ca = document.cookie.split(';');
                for (var i = 0; i < ca.length; i++) {
                    var c = ca[i].trim();
                    if (c.indexOf(name) == 0) {
                        return c.substring(name.length, c.length);
                    }
                }
                return "";
            };
            BaseFunction.SHA1 = function(content) {
                return sha1(content);
            };
            /**
             * JsonKey 轉 Array
             * @param data
             */
            BaseFunction.getKeyConvertArys = function(data) {
                if (data == null || data == undefined)
                    return;
                var cmdKey = Object.keys(data);
                var ary = [];
                for (var i = 0; i < cmdKey.length; i++) {
                    ary.push(cmdKey[i]);
                }
                return ary;
            };
            /**
             * 取得贏分類型
             * @param totalWin 總贏分
             * @param totalBetExcludeJPBet TotalBet(不含JP)
             */
            BaseFunction.getWinType = function(isFG, totalWin, totalBetExcludeJPBet) {
                var multiple = totalWin / (totalBetExcludeJPBet);
                var winType = 0;
                if (totalWin <= 0) {
                    ////None
                    winType = 0;
                } else {
                    if (multiple < 10) {
                        ////NormalWin
                        if (isFG) {
                            winType = 7;
                        } else {
                            winType = 1;
                        }
                    } else if (multiple >= 10 && multiple < 30) {
                        ////YouWin
                        winType = 4;
                    } else if (multiple >= 30 && multiple < 50) {
                        ////BigWin
                        winType = 5;
                    } else if (multiple >= 50) {
                        ////MegaWin
                        winType = 6;
                    }
                }
                return winType;
            };
            /**
             * 轉換為千分位
             * @param num 需轉成千分位的數值
             */
            BaseFunction.GetThousandsStr = function(num) {
                return num.replace(/(\d{1,3})(?=(\d{3})+(?:$|\.))/g, "$1 ");
            };
            return BaseFunction;
        }());
        Common.BaseFunction = BaseFunction;
    })(Common = SS.Common || (SS.Common = {}));
})(SS || (SS = {}));
var SS;
(function(SS) {
    var Common;
    (function(Common) {
        var Queue = /** @class */ (function() {
            function Queue() {
                this._store = [];
            }
            Queue.prototype.Dequeue = function() {
                if (this._store.length <= 0) {
                    console.error("[Queue] Queue Element Not Exist ");
                    return null;
                }
                var _value = this._store[0];
                this._store.shift();
                return _value;
            };
            Queue.prototype.Enqueue = function(_Value) {
                this._store.push(_Value);
            };
            Queue.prototype.Clear = function() {
                this._store = [];
            };
            Object.defineProperty(Queue.prototype, "Count", {
                get: function() {
                    return this._store.length;
                },
                enumerable: false,
                configurable: true
            });
            return Queue;
        }());
        Common.Queue = Queue;
        var Delegate = /** @class */ (function() {
            function Delegate() {
                this._callbacks = [];
            }
            Object.defineProperty(Delegate.prototype, "Length", {
                get: function() {
                    return this._callbacks.length;
                },
                enumerable: false,
                configurable: true
            });
            Delegate.prototype.Insert = function(callback_func, target) {
                var check = false;
                for (var i = 0; i < this._callbacks.length; i++) {
                    if (this._callbacks[i].func == callback_func && this._callbacks[i].owner == target)
                        check = true;
                }
                if (check) {
                    console.error("Registered Error.");
                    console.error(callback_func);
                    console.error(target);
                    return;
                }
                var obj = {
                    func: callback_func,
                    owner: target
                };
                this._callbacks.push(obj);
            };
            Delegate.prototype.Remove = function(callback_func, self) {
                this._callbacks = this._callbacks.filter(function(x) {
                    return !(x.func == callback_func && x.owner == self);
                });
            };
            Delegate.prototype.Notify = function() {
                var args = [];
                for (var _i = 0; _i < arguments.length; _i++) {
                    args[_i] = arguments[_i];
                }
                this._callbacks.map(function(x) {
                    x.func.bind(x.owner).apply(void 0, args);
                });
            };
            Delegate.prototype.Clear = function() {
                this._callbacks = [];
            };
            return Delegate;
        }());
        Common.Delegate = Delegate;
        var IDList = [];

        function WaitForSeconds(seconds) {
            var ID = 0;
            return new Promise(function(resolve) {
                ID = setTimeout(resolve, seconds * 1000.0);
                IDList.push(ID);
            });
        }
        Common.WaitForSeconds = WaitForSeconds;

        function ReleaseAsyncSource() {
            for (var i = 0; i < IDList.length; i++) {
                clearTimeout(IDList[i]);
            }
            IDList = [];
        }
        Common.ReleaseAsyncSource = ReleaseAsyncSource;
        var Dictionary = /** @class */ (function() {
            function Dictionary() {
                this._keys = [];
                this._values = [];
                this.undefinedKeyErrorMessage = "Key is either undefined, null or an empty string.";
            }
            Dictionary.prototype.isEitherUndefinedNullOrStringEmpty = function(object) {
                return (typeof object) === "undefined" || object === null || object.toString() === "";
            };
            Dictionary.prototype.checkKeyAndPerformAction = function(action, key, value) {
                if (this.isEitherUndefinedNullOrStringEmpty(key)) {
                    throw new Error(this.undefinedKeyErrorMessage);
                }
                return action(key, value);
            };
            Dictionary.prototype.add = function(key, value) {
                var _this = this;
                var addAction = function(key, value) {
                    if (_this.containsKey(key)) {
                        throw new Error("An element with the same key already exists in the dictionary.");
                    }
                    _this._keys.push(key);
                    _this._values.push(value);
                };
                this.checkKeyAndPerformAction(addAction, key, value);
            };
            Dictionary.prototype.remove = function(key) {
                var _this = this;
                var removeAction = function(key) {
                    if (!_this.containsKey(key)) {
                        return false;
                    }
                    var index = _this._keys.indexOf(key);
                    _this._keys.splice(index, 1);
                    _this._values.splice(index, 1);
                    return true;
                };
                return (this.checkKeyAndPerformAction(removeAction, key));
            };
            Dictionary.prototype.getValue = function(key) {
                var _this = this;
                var getValueAction = function(key) {
                    if (!_this.containsKey(key)) {
                        return null;
                    }
                    var index = _this._keys.indexOf(key);
                    return _this._values[index];
                };
                return this.checkKeyAndPerformAction(getValueAction, key);
            };
            Dictionary.prototype.containsKey = function(key) {
                var _this = this;
                var containsKeyAction = function(key) {
                    if (_this._keys.indexOf(key) === -1) {
                        return false;
                    }
                    return true;
                };
                return this.checkKeyAndPerformAction(containsKeyAction, key);
            };
            Dictionary.prototype.changeValueForKey = function(key, newValue) {
                var _this = this;
                var changeValueForKeyAction = function(key, newValue) {
                    if (!_this.containsKey(key)) {
                        throw new Error("In the dictionary there is no element with the given key.");
                    }
                    var index = _this._keys.indexOf(key);
                    _this._values[index] = newValue;
                };
                this.checkKeyAndPerformAction(changeValueForKeyAction, key, newValue);
            };
            Dictionary.prototype.keys = function() {
                return this._keys;
            };
            Dictionary.prototype.values = function() {
                return this._values;
            };
            Dictionary.prototype.count = function() {
                return this._values.length;
            };
            Dictionary.prototype.clear = function() {
                this._keys = [];
                this._values = [];
            };
            return Dictionary;
        }());
        Common.Dictionary = Dictionary;
    })(Common = SS.Common || (SS.Common = {}));
})(SS || (SS = {}));
///<reference path="./Library/JSUtility.d.ts"/>
var SS;
(function(SS) {
    var Common;
    (function(Common) {
        var GameEnvironment = /** @class */ (function() {
            function GameEnvironment() {}
            GameEnvironment.GetIsGameIsVertical = function(targetGameName) {
                if (targetGameName === void 0) {
                    targetGameName = "";
                }
                if (this.GameSetting == null) {
                    return false;
                }
                if (targetGameName == "") {
                    if (this.CurrentGameNow == null || this.CurrentGameNow == "") {
                        return false;
                    }
                    if (this.GameSetting.hasOwnProperty("Icon")) {
                        var icons = this.GameSetting["Icon"];
                        for (var key in icons) {
                            if (icons[key]["GameName"] == this.CurrentGameNow) {
                                return icons[key]["Vertical"];
                            }
                        }
                        return false;
                    } else
                        return false;
                } else {
                    if (this.GameSetting.hasOwnProperty("Icon")) {
                        var icons = this.GameSetting["Icon"];
                        for (var key in icons) {
                            if (icons[key]["GameName"] == targetGameName) {
                                return icons[key]["Vertical"];
                            }
                        }
                        return false;
                    } else
                        return false;
                }
            };
            GameEnvironment.GetCurGameIsVertical = function() {
                return this.GetIsGameIsVertical();
            };
            GameEnvironment.ResetOrientationchange = function(isInWebView) {
                var _window = (isInWebView) ? window.parent : window;
                var resizeEvent = _window.document.createEvent('UIEvents');
                //@ts-ignore
                resizeEvent.initUIEvent('resize', true, false, _window, 0);
                _window.dispatchEvent(resizeEvent);
                var orientationEvent = _window.document.createEvent('UIEvents');
                //@ts-ignore
                orientationEvent.initUIEvent('orientationchange', true, false, _window, 0);
                _window.dispatchEvent(orientationEvent);
                resizeEvent = null;
                orientationEvent = null;
            };
            GameEnvironment.Initialize = function(projectSetting, onSuccess, onError) {
                GameEnvironment.OnSuccess = onSuccess;
                GameEnvironment.OnError = onError;
                try {
                    GameEnvironment.ProjectSetting = projectSetting;
                    GameEnvironment.SetupEnvironment();
                } catch (err) {
                    console.error("[GameEnvironment] Load project setting failed.\n", err);
                    if (GameEnvironment.OnError != null) {
                        GameEnvironment.OnError(err);
                    }
                }
            };
            GameEnvironment.SetupEnvironment = function() {
                var ge = GameEnvironment;
                ge.QueruStr = JSUtility.GetURLParameter();
                //設定遊戲語系以及支援語系
                ge.SetupLanguage();
                //設定NumberFormat
                ge.SetupNumberFormat();
                //獲得裝置與瀏覽器資訊
                ge.DeviceInfo = (new UAParser()).getResult();
                console.log("[GameEnvironment] %c Device Information: %c", "font-size:18px;font-weight:bold;color:tomato", "", ge.DeviceInfo);
                if (GameEnvironment.ProjectSetting.hasOwnProperty("IsUseCheatKey"))
                    this.IsUseCheatKey = GameEnvironment.ProjectSetting.IsUseCheatKey;
                //#Todo  取得玩家IP 可使用JSUtility.GetUP
                if (GameEnvironment.OnSuccess != null) {
                    GameEnvironment.OnSuccess();
                }
            };
            /**
             * 根據url lang參數設定遊戲目前語系
             * 會從ProjectSetting上拿到支援語系列表, 若url lang沒有設定則使用支援語系列表[0]的語系
             * 支援語系列表若沒有配置, 則會使用"en-us"當作遊戲目前語系
             * */
            GameEnvironment.SetupLanguage = function() {
                var ge = GameEnvironment;
                ge.SupportLanguage = ge.ProjectSetting["SupportLanguage"];
                ge.Language = ge.ProjectSetting["Language"] == undefined ? "en" : ge.ProjectSetting["Language"];
                console.log("[GameEnvironment] %c Current Language: " + ge.Language, "font-size:18px;font-weight:bold;color:green");
            };
            /**
             * 根據url NumberFormat參數設定遊戲數字格式
             * 會從ProjectSetting上拿到NumberFormat
             * 支援語系列表若沒有配置, 則會使用"EN"當作遊戲數字格式
             * */
            GameEnvironment.SetupNumberFormat = function() {
                var ge = GameEnvironment;
                ge.NumberFormat = ge.ProjectSetting["NumberFormat"];
                console.log("[GameEnvironment] NumberFormat: " + ge.Language);
            };
            /**
             * 直接重刷網頁
             */
            GameEnvironment.ReflashBrowser = function() {
                location.assign(SS.Common.GameEnvironment.IndexPath);
            };
            Object.defineProperty(GameEnvironment, "IndexPath", {
                /**
                 * 取得重刷大廳的路徑
                 */
                get: function() {
                    var indexPath = "index.html";
                    if (SS.Common.GameEnvironment.GetURLParameter("standalone")) {
                        indexPath = "index_ni.html";
                    }
                    if (SS.Common.GameEnvironment.ProjectSetting["CDN_HOST"]) {
                        indexPath = "";
                    }
                    return location.protocol + "//" + location.host + "/" + indexPath + location.search;
                },
                enumerable: false,
                configurable: true
            });
            /**
             * 取得URL參數
             * @param key key
             */
            GameEnvironment.GetURLParameter = function(key) {
                key = key.toLowerCase();
                key = key.replace(/[\[]/, "\\[").replace(/[\]]/, "\\]");
                var regex = new RegExp("[\\?&]" + key + "=([^&#]*)"),
                    results = regex.exec(location.search.toLowerCase());
                return results === null ? "" : decodeURIComponent(results[1].replace(/\+/g, " "));
            };
            /**
             * 設定 GameSetting 的遊戲對應表 "GameName": "GameID"
             */
            GameEnvironment.SetGameMappingData = function() {
                if (this.GameSetting == null) {
                    return;
                }
                if (this.GameSetting.hasOwnProperty("Icon")) {
                    var icons = this.GameSetting["Icon"];
                    for (var key in icons) {
                        this.GameNameMappingIdDict[icons[key]["GameName"]] = key;
                    }
                }
            };
            /**
             * 設定 根據遊戲名字取得對應的遊戲 ID
             */
            GameEnvironment.GetGameIdByName = function(gameName) {
                if (this.GameNameMappingIdDict == null)
                    return "";
                return this.GameNameMappingIdDict[gameName];
            };
            GameEnvironment.ProjectSetting = null;
            GameEnvironment.GameSetting = null;
            /**URL Parameters*/
            GameEnvironment.QueruStr = null;
            /**支援語系 根據ProjectSetting.json設定*/
            GameEnvironment.SupportLanguage = null;
            /**系統使用語系 根據ProjectSetting.json設定*/
            GameEnvironment.Language = "en";
            /**系統數字格式 根據ProjectSetting.json設定*/
            GameEnvironment.NumberFormat = "en";
            /**Lobby版號 根據resources/config.json設定*/
            GameEnvironment.LobbyVersion = null;
            /**S3URL 根據resources/config.json設定*/
            GameEnvironment.S3URL = "";
            /**是否為開發模式 根據URL參數與ProjectSetting.json白名單清單比對 (忽略版控)*/
            GameEnvironment.IgnoreVersionCtrl = false;
            /**是否打開CheatKey 根據ProjectSetting.json設定 (開發流程會強制打開)*/
            GameEnvironment.IsUseCheatKey = false;
            GameEnvironment.IsUseScoreBox = true;
            GameEnvironment.IsUseShutter = false;
            GameEnvironment.IsUseSlotSkillGame = false;
            GameEnvironment.IsUseCellPhoneVerify = false;
            GameEnvironment.ChangeToGameName = "";
            GameEnvironment.InGameJpInfoDict = {};
            /**裝置資訊*/
            GameEnvironment.DeviceInfo = null;
            /**目前ICON正在暫存的SpriteFrame*/
            GameEnvironment.IconNameMapSpriteFrame = {};
            /**受否設定靜音*/
            GameEnvironment.IsMute = null;
            /**目前"All"種類的遊戲數量 */
            GameEnvironment.CurrentTypeGameCounts = {};
            /**目前所在遊戲類型 依據切換遊戲類型時設定 */
            GameEnvironment.CurrentGameTypeNow = null;
            /**紀錄各遊戲類型，停止的Scroll內容位置， 依據切換遊戲類型時設定 */
            GameEnvironment.GameTypeMapScrollContentPos = {};
            /**紀錄各遊戲類型，停止的Scroll內容位置， 依據切換遊戲類型時設定，直版 */
            GameEnvironment.GameTypeMapVerticalScrollContentPos = {};
            /**目前所在遊戲 根據按下ICON時暫存*/
            GameEnvironment.CurrentGameNow = null;
            /**目前使用的Bundle*/
            GameEnvironment.CurrentGameBundle = null;
            /**目前所在遊戲版號 根據game的resources/config.json設定 */
            GameEnvironment.CurrentGameVersion = "";
            /**關閉的選單功能*/
            GameEnvironment.DisableMenuBtn = null;
            /**JP數值Ratio*/
            GameEnvironment.exchange_rate = null;
            /**目前登入所使用的帳號*/
            GameEnvironment.UserID = "";
            /**目前登入所使用的密碼*/
            GameEnvironment.UserPW = "";
            /**共用Splash*/
            GameEnvironment.Splash = null;
            /**共用Splash 的物件*/
            GameEnvironment.SplashDiv = null;
            /**共用Splash*/
            GameEnvironment.verticalSplashSRC = null;
            /**紀錄初始的Splash*/
            GameEnvironment.OriginalSplashSRC = null;
            /**紀錄已經有送出的LOBBY狀態*/
            GameEnvironment.SentFlowStatus = [];
            /*遊戲名對應遊戲ID*/
            GameEnvironment.GameNameMappingIdDict = {};
            /**紀錄已經有送出的遊戲狀態*/
            GameEnvironment.SentGameFlowStatus = [];
            GameEnvironment.OnSuccess = null;
            GameEnvironment.OnError = null;
            return GameEnvironment;
        }());
        Common.GameEnvironment = GameEnvironment;
    })(Common = SS.Common || (SS.Common = {}));
})(SS || (SS = {}));
var shared = new Uint32Array(80);

function sha1Stream() {
    return create(false);
}
// Input chunks must be either arrays of bytes or "raw" encoded strings
function sha1(buffer) {
    var shasum = create(true);
    shasum.update(buffer);
    return shasum.digest();
}
// A pure JS implementation of sha1 for non-node environments.
function create(sync) {
    var h0 = 0x67452301;
    var h1 = 0xEFCDAB89;
    var h2 = 0x98BADCFE;
    var h3 = 0x10325476;
    var h4 = 0xC3D2E1F0;
    // The first 64 bytes (16 words) is the data chunk
    var block, offset = 0,
        shift = 24;
    var totalLength = 0;
    if (sync)
        block = shared;
    else
        block = new Uint32Array(80);
    return {
        update: update,
        digest: digest
    };
    // The user gave us more data.  Store it!
    function update(chunk) {
        if (typeof chunk === "string")
            return updateString(chunk);
        var length = chunk.length;
        totalLength += length * 8;
        for (var i = 0; i < length; i++) {
            write(chunk[i]);
        }
    }

    function updateString(string) {
        var length = string.length;
        totalLength += length * 8;
        for (var i = 0; i < length; i++) {
            write(string.charCodeAt(i));
        }
    }

    function write(byte) {
        block[offset] |= (byte & 0xff) << shift;
        if (shift) {
            shift -= 8;
        } else {
            offset++;
            shift = 24;
        }
        if (offset === 16)
            processBlock();
    }
    // No more data will come, pad the block, process and return the result.
    function digest() {
        // Pad
        write(0x80);
        if (offset > 14 || (offset === 14 && shift < 24)) {
            processBlock();
        }
        offset = 14;
        shift = 24;
        // 64-bit length big-endian
        write(0x00); // numbers this big aren't accurate in javascript anyway
        write(0x00); // ..So just hard-code to zero.
        write(totalLength > 0xffffffffff ? totalLength / 0x10000000000 : 0x00);
        write(totalLength > 0xffffffff ? totalLength / 0x100000000 : 0x00);
        for (var s = 24; s >= 0; s -= 8) {
            write(totalLength >> s);
        }
        // At this point one last processBlock() should trigger and we can pull out the result.
        return toHex(h0) +
            toHex(h1) +
            toHex(h2) +
            toHex(h3) +
            toHex(h4);
    }
    // We have a full block to process.  var's do it!
    function processBlock() {
        // Extend the sixteen 32-bit words into eighty 32-bit words:
        for (var i = 16; i < 80; i++) {
            var w = block[i - 3] ^ block[i - 8] ^ block[i - 14] ^ block[i - 16];
            block[i] = (w << 1) | (w >>> 31);
        }
        // log(block);
        // Initialize hash value for this chunk:
        var a = h0;
        var b = h1;
        var c = h2;
        var d = h3;
        var e = h4;
        var f, k;
        // Main loop:
        for (var i = 0; i < 80; i++) {
            if (i < 20) {
                f = d ^ (b & (c ^ d));
                k = 0x5A827999;
            } else if (i < 40) {
                f = b ^ c ^ d;
                k = 0x6ED9EBA1;
            } else if (i < 60) {
                f = (b & c) | (d & (b | c));
                k = 0x8F1BBCDC;
            } else {
                f = b ^ c ^ d;
                k = 0xCA62C1D6;
            }
            var temp = (a << 5 | a >>> 27) + f + e + k + (block[i] | 0);
            e = d;
            d = c;
            c = (b << 30 | b >>> 2);
            b = a;
            a = temp;
        }
        // Add this chunk's hash to result so far:
        h0 = (h0 + a) | 0;
        h1 = (h1 + b) | 0;
        h2 = (h2 + c) | 0;
        h3 = (h3 + d) | 0;
        h4 = (h4 + e) | 0;
        // The block is now reusable.
        offset = 0;
        for (var i = 0; i < 16; i++) {
            block[i] = 0;
        }
    }

    function toHex(word) {
        var hex = "";
        for (var i = 28; i >= 0; i -= 4) {
            hex += ((word >> i) & 0xf).toString(16);
        }
        return hex;
    }
}