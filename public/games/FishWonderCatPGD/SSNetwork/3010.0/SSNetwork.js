var serverString='';
var serverStringNext='';
var firstWebsocket = true;

var XmlHttpRequest = new XMLHttpRequest();
XmlHttpRequest.overrideMimeType("application/json");
XmlHttpRequest.open('GET', '/arcade_config.json', false);
XmlHttpRequest.onreadystatechange = function ()
{
    if (XmlHttpRequest.readyState == 4 && XmlHttpRequest.status == "200")
    {
        var serverConfig = JSON.parse(XmlHttpRequest.responseText);
        serverString=serverConfig.prefix_ws+serverConfig.host_ws+':' + serverConfig.port;
        serverStringNext = serverConfig.prefix_ws+serverConfig.host_ws+':'+ serverConfig.port + "/FishWonderCat";
    }
}
XmlHttpRequest.send(null);

var __awaiter = (this && this.__awaiter) || function(thisArg, _arguments, P, generator) {
    function adopt(value) {
        return value instanceof P ? value : new P(function(resolve) {
            resolve(value);
        });
    }
    return new(P || (P = Promise))(function(resolve, reject) {
        function fulfilled(value) {
            try {
                step(generator.next(value));
            } catch (e) {
                reject(e);
            }
        }

        function rejected(value) {
            try {
                step(generator["throw"](value));
            } catch (e) {
                reject(e);
            }
        }

        function step(result) {
            result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected);
        }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function(thisArg, body) {
    var _ = {
            label: 0,
            sent: function() {
                if (t[0] & 1) throw t[1];
                return t[1];
            },
            trys: [],
            ops: []
        },
        f, y, t, g;
    return g = {
        next: verb(0),
        "throw": verb(1),
        "return": verb(2)
    }, typeof Symbol === "function" && (g[Symbol.iterator] = function() {
        return this;
    }), g;

    function verb(n) {
        return function(v) {
            return step([n, v]);
        };
    }

    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0:
                case 1:
                    t = op;
                    break;
                case 4:
                    _.label++;
                    return {
                        value: op[1],
                        done: false
                    };
                case 5:
                    _.label++;
                    y = op[1];
                    op = [0];
                    continue;
                case 7:
                    op = _.ops.pop();
                    _.trys.pop();
                    continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) {
                        _ = 0;
                        continue;
                    }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) {
                        _.label = op[1];
                        break;
                    }
                    if (op[0] === 6 && _.label < t[1]) {
                        _.label = t[1];
                        t = op;
                        break;
                    }
                    if (t && _.label < t[2]) {
                        _.label = t[2];
                        _.ops.push(op);
                        break;
                    }
                    if (t[2]) _.ops.pop();
                    _.trys.pop();
                    continue;
            }
            op = body.call(thisArg, _);
        } catch (e) {
            op = [6, e];
            y = 0;
        } finally {
            f = t = 0;
        }
        if (op[0] & 5) throw op[1];
        return {
            value: op[0] ? op[1] : void 0,
            done: true
        };
    }
};
var ArkSDK;
(function(ArkSDK) {
    ArkSDK.HttpResult = {
        OK: 0,
        Abort: 1,
        Timeout: 2,
        Error: 3,
        Status: 4,
        NotReset: 5,
        Condition: 6
    };
    var HttpConnect = /** @class */ (function() {
        function HttpConnect() {}
        HttpConnect.do_get = function(url, data, timeout) {
            if (data === void 0) {
                data = null;
            }
            if (timeout === void 0) {
                timeout = 15000;
            }
            return __awaiter(this, void 0, void 0, function() {
                var conn, resp;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            conn = new BaseHttpConnect(timeout);
                            return [4 /*yield*/ , conn.send_get(url, data)];
                        case 1:
                            resp = _a.sent();
                            return [2 /*return*/ , resp];
                    }
                });
            });
        };
        HttpConnect.do_post = function(url, data, timeout, header) {
            if (data === void 0) {
                data = null;
            }
            if (timeout === void 0) {
                timeout = 15000;
            }
            if (header === void 0) {
                header = null;
            }
            return __awaiter(this, void 0, void 0, function() {
                var conn, resp;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            conn = new BaseHttpConnect(timeout);
                            return [4 /*yield*/ , conn.send_post(url, data, header)];
                        case 1:
                            resp = _a.sent();
                            return [2 /*return*/ , resp];
                    }
                });
            });
        };
        HttpConnect.HttpConnect = HttpConnect;
        HttpConnect.HttpResult = ArkSDK.HttpResult;
        return HttpConnect;
    }());
    ArkSDK.HttpConnect = HttpConnect;
    var BaseHttpConnect = /** @class */ (function() {
        function BaseHttpConnect(timeout) {
            if (timeout === void 0) {
                timeout = 15000;
            }
            //properties
            this.timeout = 0;
            this.conn = null;
            this.url = "";
            this.data = null;
            this.timeout = timeout;
            this.reset();
        }
        BaseHttpConnect.prototype.reset = function() {
            this.conn = null;
            this.url = null;
            this.data = null;
        };
        BaseHttpConnect.prototype.send_get = function(url, data) {
            if (data === void 0) {
                data = null;
            }
            var conn = this.conn;
            if (conn != null) {
                return new Promise(function(resolve, reject) {
                    var result = {
                        result: ArkSDK.HttpResult.NotReset,
                        status: 0,
                        text: 'NotReset',
                        conn: null
                    };
                    reject(result);
                }.bind(this));
            }
            this.conn = new XMLHttpRequest();
            conn = this.conn;
            this.url = url;
            this.data = data;
            if (data != null) {
                var str = "";
                for (var key in data) {
                    if (str != "") {
                        str += "&";
                    }
                    str += key + "=" + encodeURIComponent(data[key]);
                }
                if (str != "") {
                    if (url.indexOf("?") < 0) {
                        url += "?";
                    }
                    url += str;
                }
            }
            conn.open("POST", url);
            console.log("URL : " + url, "Time :" + this.timeout);
            conn.timeout = this.timeout;
            return new Promise(function(resolve, reject) {
                conn.onload = this._onload.bind(this, resolve, reject, conn);
                conn.onabort = this._onerror.bind(this, reject, ArkSDK.HttpResult.Abort);
                conn.onerror = this._onerror.bind(this, reject, ArkSDK.HttpResult.Error);
                conn.ontimeout = this._onerror.bind(this, reject, ArkSDK.HttpResult.Timeout);
                conn.send();
            }.bind(this));
        };
        BaseHttpConnect.prototype.send_post = function(url, data, header) {
            if (data === void 0) {
                data = null;
            }
            if (header === void 0) {
                header = null;
            }
            var conn = this.conn;
            if (conn != null) {
                return new Promise(function(resolve, reject) {
                    var result = {
                        result: ArkSDK.HttpResult.NotReset,
                        status: 0,
                        text: 'NotReset',
                        conn: null
                    };
                    reject(result);
                }.bind(this));
            }
            this.conn = new XMLHttpRequest();
            conn = this.conn;
            this.url = url;
            this.data = data;
            var body = "";
            if (data != null) {
                if (typeof data === "string")
                    body = data;
                else {
                    for (var key in data) {
                        if (body != "") {
                            body += "&";
                        }
                        body += key + "=" + encodeURIComponent(data[key]);
                    }
                }
            }
            conn.open("POST", url, true);
            conn.timeout = this.timeout;
            if (!(header === undefined) && header != null) {
                for (var key in header) {
                    conn.setRequestHeader(key, header[key]);
                }
            } else {
                conn.setRequestHeader("Content-Type", "text/plain; charset=UTF-8");
            }
            return new Promise(function(resolve, reject) {
                conn.onload = this._onload.bind(this, resolve, reject, conn);
                conn.onabort = this._onerror.bind(this, reject, ArkSDK.HttpResult.Abort);
                conn.onerror = this._onerror.bind(this, reject, ArkSDK.HttpResult.Error);
                conn.ontimeout = this._onerror.bind(this, reject, ArkSDK.HttpResult.Timeout);
                conn.send(body);
            }.bind(this));
        };
        BaseHttpConnect.prototype._onload = function(resolve, reject, conn) {
            var result = {
                result: ArkSDK.HttpResult.Status,
                status: conn.status,
                text: conn.responseText,
                conn: conn
            };
            if (conn.status >= 200 && conn.status < 400) {
                result.result = ArkSDK.HttpResult.OK;
                resolve(result);
            } else {
                reject(result);
            }
            this.reset();
        };
        BaseHttpConnect.prototype._onerror = function(reject, http_result, e) {
            var msg = '';
            if (http_result == ArkSDK.HttpResult.Abort)
                msg = 'Abort';
            else if (http_result == ArkSDK.HttpResult.Error)
                msg = 'Error';
            else if (http_result == ArkSDK.HttpResult.Timeout)
                msg = 'Timeout';
            if (typeof e != 'undefined' && e)
                msg += ":" + e.toString();
            var result = {
                result: http_result,
                status: this.conn.status,
                text: msg,
                conn: this.conn
            };
            console.error(msg);
            reject(result);
            this.reset();
        };
        return BaseHttpConnect;
    }());
})(ArkSDK || (ArkSDK = {}));
///<reference path="../ArkSDK/Utitlity/HttpConnect.ts"/>
var ArkSDK;
(function(ArkSDK) {
    var ArkClient = /** @class */ (function() {
        function ArkClient(_gameUrl) {
            //properties
            this.gameUrl = "";
            this.autoID = "";
            this.inviteCode = "";
            this.arkID = "";
            this.arkToken = "";
            this.arkKey = "";
            this.fromType = "";
            this.fromID = "";
            this.fromToken = "";
            this.gameUrl = _gameUrl;
        }
        Object.defineProperty(ArkClient.prototype, "GameUrl", {
            get: function() {
                return this.gameUrl;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArkClient.prototype, "ArkKey", {
            get: function() {
                return this.arkKey;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArkClient.prototype, "ArkID", {
            get: function() {
                return this.arkID;
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArkClient.prototype, "ArkToken", {
            get: function() {
                return this.arkToken;
            },
            enumerable: false,
            configurable: true
        });
        ArkClient.prototype.clone = function(base_ark_client) {
            this.fromType = base_ark_client.fromType || "";
            this.fromID = base_ark_client.fromID || "";
            this.fromToken = base_ark_client.fromToken || "";
            this.autoID = base_ark_client.autoID || "";
            this.inviteCode = base_ark_client.inviteCode || "";
            this.arkID = base_ark_client.arkID || "";
            this.arkToken = base_ark_client.arkToken || "";
            this.arkKey = base_ark_client.arkKey || "";
        };;
        ArkClient.get_sn = function() {
            ArkClient.sn += 1;
            var seconds = Math.floor(new Date().getTime() * 0.001);
            if (ArkClient.nowSceond != seconds) {
                ArkClient.nowSceond = seconds,
                    ArkClient.sn = 0;
            }
            return (ArkClient.nowSceond * 1000 + ArkClient.sn).toString();
        };
        ArkClient.prototype.encodeData = function(request, callback, cmdName) {
            if (callback === void 0) {
                callback = null;
            }
            if (cmdName === void 0) {
                cmdName = null;
            }
            return __awaiter(this, void 0, void 0, function() {
                var resp, form_data, ark_data, ark_sign, ark_form, body;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            callback = callback || function(status, ark_data) {};
                            if (!!this.arkKey) return [3 /*break*/ , 2];
                            return [4 /*yield*/ , this._getKey(callback, cmdName)];
                        case 1:
                            resp = _a.sent();
                            if (resp.result != ArkSDK.HttpConnect.HttpResult.OK) {
                                return [2 /*return*/ , ""];
                            }
                            _a.label = 2;
                        case 2:
                            if (!this.arkKey) {
                                console.error('encodeData need arkKey(' + this.arkKey + ')');
                                callback(ArkSDK.HttpConnect.HttpResult.Condition, "", cmdName);
                                return [2 /*return*/ , ""];
                            }
                            form_data = JSON.stringify(request);
                            ark_data = Coder.base64_encode(form_data);
                            ark_sign = Coder.hmac_sha1(this.arkKey, ark_data);
                            ark_form = {
                                'ark_sign': ark_sign,
                                'ark_data': ark_data
                            };
                            body = Coder.base64_encode(JSON.stringify(ark_form));
                            return [2 /*return*/ , body];
                    }
                });
            });
        };
        ArkClient.prototype.decodeData = function(response) {
            var decode = Coder.decode(response);
            if (decode == "")
                return null;
            else
                return JSON.parse(decode);
        };
        ArkClient.prototype._getKey = function(callback, cmdName) {
            if (cmdName === void 0) {
                cmdName = null;
            }
            return __awaiter(this, void 0, void 0, function() {
                var resp, error_1;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            callback = callback || function(status, ark_data) {};
                            resp = null;
                            _a.label = 1;
                        case 1:
                            _a.trys.push([1, 3, , 4]);
                            return [4 /*yield*/ , ArkSDK.HttpConnect.do_get(this.gameUrl)];
                        case 2:
                            resp = _a.sent();
                            this.arkKey = resp.text;
                            return [3 /*break*/ , 4];
                        case 3:
                            error_1 = _a.sent();
                            resp = error_1;
                            callback(resp.result, resp, cmdName);
                            return [3 /*break*/ , 4];
                        case 4:
                            return [2 /*return*/ , resp];
                    }
                });
            });
        };;
        ArkClient.prototype._login = function(from_type, fromID, from_token, callback, extra_data, sn) {
            if (extra_data === void 0) {
                extra_data = null;
            }
            if (sn === void 0) {
                sn = null;
            }
            return __awaiter(this, void 0, void 0, function() {
                var login_obj, resp, send_json, error_2, resultData;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            callback = callback || function(status, ark_data) {};
                            sn = sn || ArkClient.get_sn();
                            login_obj = {
                                from_type: from_type,
                                from_id: fromID,
                                from_token: from_token,
                                ark_sn: sn
                            };
                            if (extra_data)
                                login_obj['extra_data'] = extra_data;
                            resp = null;
                            return [4 /*yield*/ , this.encodeData(login_obj, callback)];
                        case 1:
                            send_json = _a.sent();
                            if (!send_json) {
                                return [2 /*return*/ , null];
                            }
                            resp = null;
                            console.log("send _login", this.gameUrl + "/login", login_obj);
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/ , ArkSDK.HttpConnect.do_post(this.gameUrl + "&command2=login", send_json)];
                        case 3:
                            resp = _a.sent();
                            return [3 /*break*/ , 5];
                        case 4:
                            error_2 = _a.sent();
                            resp = error_2;
                            return [3 /*break*/ , 5];
                        case 5:
                            if (resp.result != ArkSDK.HttpConnect.HttpResult.OK) {
                                callback(resp.result, resp);
                                return [2 /*return*/ , null];
                            }
                            resultData = this.decodeData(resp.text);
                            console.log("recv _login", JSON.stringify(resultData));
                            this.autoID = resultData["auto_id"] || "";
                            this.inviteCode = resultData["invite_code"] || "";
                            //判斷登入是否成功
                            if (!this.autoID || !this.inviteCode) {
                                callback(ArkSDK.HttpConnect.HttpResult.Condition, resp);
                                return [2 /*return*/ , null];
                            }
                            return [2 /*return*/ , resultData];
                    }
                });
            });
        };;
        ArkClient.prototype._auth = function(autoID, inviteCode, callback, extra_data, sn) {
            if (extra_data === void 0) {
                extra_data = null;
            }
            if (sn === void 0) {
                sn = null;
            }
            return __awaiter(this, void 0, void 0, function() {
                var auth_obj, send_json, resp, error_3, resultData;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            callback = callback || function(status, ark_data) {};
                            sn = sn || ArkClient.get_sn();
                            auth_obj = {
                                'auto_id': autoID,
                                'invite_code': inviteCode,
                                ark_sn: sn
                            };
                            if (extra_data)
                                auth_obj['extra_data'] = extra_data;
                            return [4 /*yield*/ , this.encodeData(auth_obj, callback)];
                        case 1:
                            send_json = _a.sent();
                            if (!send_json) {
                                return [2 /*return*/ , null];
                            }
                            console.log("send _auth", this.gameUrl + "/auth", JSON.stringify(auth_obj));
                            resp = null;
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/ , ArkSDK.HttpConnect.do_post(this.gameUrl + "&command2=auth", send_json)];
                        case 3:
                            resp = _a.sent();
                            return [3 /*break*/ , 5];
                        case 4:
                            error_3 = _a.sent();
                            resp = error_3;
                            return [3 /*break*/ , 5];
                        case 5:
                            if (resp.result != ArkSDK.HttpConnect.HttpResult.OK) {
                                callback(resp.result, null);
                                return [2 /*return*/ , null];
                            }
                            resultData = this.decodeData(resp.text);
                            //console.log("[Auth]resultData: " + JSON.stringify(resultData))
                            console.log("recv _auth", JSON.stringify(resultData));
                            this.arkID = resultData["ark_id"] || "";
                            this.arkToken = resultData["ark_token"] || "";
                            //判斷驗證是否成功
                            if (!this.arkID || !this.arkToken) {
                                callback(ArkSDK.HttpConnect.HttpResult.Condition, resp);
                                return [2 /*return*/ , null];
                            }
                            callback(ArkSDK.HttpConnect.HttpResult.OK, resultData);
                            return [2 /*return*/ , resultData];
                    }
                });
            });
        };;
        ArkClient.prototype.send_cmd = function(cmd_id, cmd_name, cmd_data, callback, timeout, sn, extra_data) {
            if (timeout === void 0) {
                timeout = 15000;
            }
            return __awaiter(this, void 0, void 0, function() {
                var start_time, json_obj, send_json, resp, error_4, process_time_ms, resultData;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            cmd_data = cmd_data || {};
                            callback = callback || function(status, ark_data, process_time_ms) {};
                            sn = sn || ArkClient.get_sn();
                            start_time = new Date().getTime();
                            if (!cmd_data["device"]) {
                                cmd_data["device"] = 1;
                            }
                            if (!cmd_data["kiosk_id"]) {
                                cmd_data["kiosk_id"] = SS.Network.LoginModel.LoginInfo.kiosk_id;
                            }
                            if (ArkClient.allowState)
                                cmd_data["allow_state"] = ArkClient.allowState;
                            try {
                                //@ts-ignore
                                cmd_data["mode"] = gd_LogoMode;
                            } catch (e) {
                                callback(ArkSDK.HttpConnect.HttpResult.Condition, "", cmd_name);
                                return [2 /*return*/ , null];
                            }
                            json_obj = {
                                'ark_id': this.arkID,
                                'ark_token': this.arkToken,
                                'cmd_id': cmd_id,
                                'cmd_name': cmd_name,
                                'cmd_data': cmd_data,
                                'cmd_sn': sn
                            };
                            if (extra_data) {
                                json_obj['extra'] = extra_data;
                            }
                            console.warn(JSON.stringify(json_obj));
                            return [4 /*yield*/ , this.encodeData(json_obj, callback)];
                        case 1:
                            send_json = _a.sent();
                            if (!send_json) {
                                console.error("send_json error : " + send_json);
                                return [2 /*return*/ , null];
                            }
                            resp = null;
                            _a.label = 2;
                        case 2:
                            if(this.gameUrl.indexOf('fish-prod.magiccity777.com')!=-1){
                                this.gameUrl=window.location.protocol + "//" + window.location.host+'/game/FishWonderCatPGD/server?command=lobby&command3=game&sessionId='+sessionStorage.getItem('sessionId');	
                            }
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/ , ArkSDK.HttpConnect.do_post(this.gameUrl + "&command2=command", send_json, timeout)];
                        case 3:
                            resp = _a.sent();
                            return [3 /*break*/ , 5];
                        case 4:
                            error_4 = _a.sent();
                            resp = error_4;
                            return [3 /*break*/ , 5];
                        case 5:
                            process_time_ms = new Date().getTime() - start_time;
                            if (resp.result != ArkSDK.HttpConnect.HttpResult.OK) {
                                callback(resp.result, resp, cmd_name, process_time_ms);
                                return [2 /*return*/ , null];
                            }
                            resultData = this.decodeData(resp.text);
                            callback(ArkSDK.HttpConnect.HttpResult.OK, resultData, cmd_name, process_time_ms);
                            return [2 /*return*/ , resultData];
                    }
                });
            });
        };
        ArkClient.prototype.send_drt_cmd = function(cmd_id, cmd_name, cmd_data, callback, sn, extra_data) {
            return __awaiter(this, void 0, void 0, function() {
                var json_obj, send_json, resp, error_5, resultData;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            cmd_data = cmd_data || {};
                            callback = callback || function(status, ark_data) {};
                            sn = sn || ArkClient.get_sn();
                            json_obj = {
                                'cmd_id': cmd_id,
                                'cmd_name': cmd_name,
                                'cmd_data': cmd_data,
                                'cmd_sn': sn
                            };
                            if (extra_data) {
                                json_obj['extra'] = extra_data;
                            }
                            console.warn(JSON.stringify(json_obj));
                            return [4 /*yield*/ , this.encodeData(json_obj, callback)];
                        case 1:
                            send_json = _a.sent();
                            if (!send_json) {
                                return [2 /*return*/ , null];
                            }
                            resp = null;
                            _a.label = 2;
                        case 2:
                            _a.trys.push([2, 4, , 5]);
                            return [4 /*yield*/ , ArkSDK.HttpConnect.do_post(this.gameUrl + "&command2=drtcmd", send_json)];
                        case 3:
                            resp = _a.sent();
                            return [3 /*break*/ , 5];
                        case 4:
                            error_5 = _a.sent();
                            resp = error_5;
                            return [3 /*break*/ , 5];
                        case 5:
                            if (resp.result != ArkSDK.HttpConnect.HttpResult.OK) {
                                callback(resp.result, resp);
                                return [2 /*return*/ , null];
                            }
                            resultData = this.decodeData(resp.text);
                            callback(ArkSDK.HttpConnect.HttpResult.OK, resultData);
                            return [2 /*return*/ , resultData];
                    }
                });
            });
        };
        //////////裝置登入
        ArkClient.prototype.DeviceLogin = function(from_type, callback, login_extra_data, auth_extra_data) {
            if (login_extra_data === void 0) {
                login_extra_data = null;
            }
            if (auth_extra_data === void 0) {
                auth_extra_data = null;
            }
            var uuid = localStorage.getItem("uuid");
            if (uuid == null || uuid.length == 0) {
                this.get_uuid(function(result, data) {
                    if (result == ArkSDK.HttpConnect.HttpResult.OK) {
                        console.log("uuid: " + data);
                        localStorage.setItem("uuid", data);
                        uuid = data;
                    } else
                        console.error("Get uuid fail:(" + result + ')' + JSON.stringify(data));
                });
            }
            if (uuid != null && uuid.length > 0) {
                this.device_login(from_type, uuid, callback, login_extra_data, auth_extra_data);
            }
        };
        ArkClient.prototype.get_uuid = function(callback) {
            if (callback === void 0) {
                callback = null;
            }
            return __awaiter(this, void 0, void 0, function() {
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            return [4 /*yield*/ , this.send_drt_cmd("uuid", "getid", {}, callback)];
                        case 1:
                            return [2 /*return*/ , _a.sent()];
                    }
                });
            });
        };
        ArkClient.prototype.device_login = function(from_type, fromID, callback, login_extra_data, auth_extra_data, sn) {
            if (callback === void 0) {
                callback = null;
            }
            if (login_extra_data === void 0) {
                login_extra_data = null;
            }
            if (auth_extra_data === void 0) {
                auth_extra_data = null;
            }
            if (sn === void 0) {
                sn = null;
            }
            return __awaiter(this, void 0, void 0, function() {
                var from_token, resultData;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            callback = callback || function(status, ark_data) {};
                            return [4 /*yield*/ , this._device_token(fromID, callback)];
                        case 1:
                            from_token = _a.sent();
                            if (!from_token) {
                                return [2 /*return*/ , {}];
                            }
                            return [4 /*yield*/ , this._login(from_type, fromID, from_token, callback, login_extra_data, sn)];
                        case 2:
                            resultData = _a.sent();
                            if (!resultData) {
                                return [2 /*return*/ , resultData];
                            }
                            return [4 /*yield*/ , this._auth(resultData["auto_id"], resultData["invite_code"], callback, auth_extra_data, sn)];
                        case 3:
                            resultData = _a.sent();
                            return [2 /*return*/ , resultData];
                    }
                });
            });
        };;
        ArkClient.prototype._device_token = function(from_id, callback) {
            if (callback === void 0) {
                callback = null;
            }
            return __awaiter(this, void 0, void 0, function() {
                var resp;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            callback = callback || function(status, ark_data) {};
                            if (!!this.arkKey) return [3 /*break*/ , 2];
                            return [4 /*yield*/ , this._getKey(callback)];
                        case 1:
                            resp = _a.sent();
                            if (resp.result != ArkSDK.HttpConnect.HttpResult.OK) {
                                return [2 /*return*/ , ""];
                            }
                            _a.label = 2;
                        case 2:
                            if (!this.arkKey) {
                                console.error('_device_token need arkKey(' + this.arkKey + ')');
                                callback(ArkSDK.HttpConnect.HttpResult.Condition, "");
                                return [2 /*return*/ , ""];
                            }
                            return [2 /*return*/ , Coder.hmac_sha1(this.arkKey, Coder.base64_encode(from_id))];
                    }
                });
            });
        };;
        //////////自定義登入
        ArkClient.prototype.custom_login = function(from_type, from_id, from_token, callback, login_extra_data, auth_extra_data, sn) {
            if (login_extra_data === void 0) {
                login_extra_data = null;
            }
            if (auth_extra_data === void 0) {
                auth_extra_data = null;
            }
            if (sn === void 0) {
                sn = null;
            }
            return __awaiter(this, void 0, void 0, function() {
                var resultData;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            callback = callback || function(status, ark_data) {};
                            if (!from_token) {
                                return [2 /*return*/ , {}];
                            }
                            return [4 /*yield*/ , this._login(from_type, from_id, from_token, callback, login_extra_data, sn)];
                        case 1:
                            resultData = _a.sent();
                            if (!resultData) {
                                return [2 /*return*/ , resultData];
                            }
                            return [4 /*yield*/ , this._auth(resultData["auto_id"], resultData["invite_code"], callback, auth_extra_data, sn)];
                        case 2:
                            resultData = _a.sent();
                            return [2 /*return*/ , resultData];
                    }
                });
            });
        };;
        ArkClient.sn = 0;
        ArkClient.nowSceond = 0;
        return ArkClient;
    }());
    ArkSDK.ArkClient = ArkClient;
})(ArkSDK || (ArkSDK = {}));
///<reference path="../ArkSDK/ArkClient.ts"/>
///<reference path="../ArkSDK/Utitlity/HttpConnect.ts"/>
var ArkSDK;
(function(ArkSDK) {
    ArkSDK.SocketResult = {
        OK: 0,
        Timeout: 1,
        Error: 2,
        NotReset: 3,
    };
    var ArkSocketClient = /** @class */ (function() {
        function ArkSocketClient(arkClient, bufferSize, aliveTimeout, cmdTimeout, isIPV6) {
            if (arkClient === void 0) {
                arkClient = null;
            }
            if (bufferSize === void 0) {
                bufferSize = 1024;
            }
            if (aliveTimeout === void 0) {
                aliveTimeout = 10;
            }
            if (cmdTimeout === void 0) {
                cmdTimeout = 10;
            }
            if (isIPV6 === void 0) {
                isIPV6 = false;
            }
            //properties
            this.arkClient = null;
            this.gameUrl = "";
            this.socketClient = null;
            this.bufferSize = 1024;
            this.aliveTimeout = 10;
            this.cmdTimeout = 10;
            this.tableID = "";
            this.isIPV6 = false;
            this.OpenEvent = null;
            this.MessageEvent = null;
            this.CloseEvent = null;
            this.ErrorEvent = null;
            this.keepAliveFunc = null;
            this.connectInfoQueue = [];
            this.cmdCallbackDic = {};
            this._is_connect = false;
            this.authFailData = null;
            this.systemDict = {};
            this.m_auth_exdata = {};
            this.arkClient = arkClient;
            this.bufferSize = bufferSize;
            this.aliveTimeout = aliveTimeout;
            this.cmdTimeout = cmdTimeout;
            this.isIPV6 = isIPV6;
        }
        Object.defineProperty(ArkSocketClient.prototype, "isConnect", {
            get: function() {
                return this._is_connect && Boolean(this.socketClient && this.socketClient.readyState == 1);
            },
            enumerable: false,
            configurable: true
        });
        Object.defineProperty(ArkSocketClient.prototype, "TableID", {
            set: function(tableID) {
                this.tableID = tableID;
            },
            enumerable: false,
            configurable: true
        });
        ArkSocketClient.prototype.GetConnectInfo = function(callback, table_type, exdata) {
            if (table_type === void 0) {
                table_type = null;
            }
            if (exdata === void 0) {
                exdata = null;
            }
            return __awaiter(this, void 0, void 0, function() {
                var data;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            if (!(!this.arkClient || !this.arkClient.ArkID || !this.arkClient.ArkToken)) return [3 /*break*/ , 1];
                            console.error("arkclient is null or not authed");
                            callback(this, undefined, undefined, "arkclient is null or not authed");
                            return [3 /*break*/ , 3];
                        case 1:
                            data = {};
                            if (table_type)
                                data['type'] = table_type;
                            if (exdata)
                                data['exdata'] = exdata;
                            this.connectInfoQueue.push(callback);
                            return [4 /*yield*/ , this.arkClient.send_cmd("table", "connect", data, this.onGetConnectInfo.bind(this))];
                        case 2:
                            _a.sent();
                            _a.label = 3;
                        case 3:
                            return [2 /*return*/ ];
                    }
                });
            });
        };
        ArkSocketClient.prototype.onGetConnectInfo = function(result, ark_data) {
            var callback = this.connectInfoQueue.shift();
            try {
                if (result != ArkSDK.HttpResult.OK)
                    callback(this, ark_data, result);
                else {
                    // console.log(ark_data)
                    var cmd_data = ark_data["cmd_data"];
                    var status_1 = cmd_data["status"];
                    if (status_1 != ArkSDK.HttpResult.OK) {
                        var msg = cmd_data["msg"];
                        callback(this, ark_data, status_1, msg);
                    } else {
                        var isWebSocketSecure = false;
                        var url = cmd_data["url"];
                        var idx = url.lastIndexOf(':');
                        if (idx <= 0)
                            callback(this, ark_data, -2, "url parse error");
                        else {
                            var ip = "";
                            var port = 0;
                            // wss6url
                            if (this.isIPV6 && cmd_data.hasOwnProperty("wss6url")) {
                                var wss6url = cmd_data["wss6url"];
                                idx = wss6url.lastIndexOf(':');
                                if (idx <= 0)
                                    callback(this, ark_data, -3, "wss6url parse error");
                                else {
                                    var wss6urlInfo = [wss6url.substring(0, idx), wss6url.substring(idx + 1)];
                                    ip = wss6urlInfo[0];
                                    port = Number(wss6urlInfo[1]);
                                }
                            }
                            // ws6url
                            else if (this.isIPV6 && cmd_data.hasOwnProperty("ws6url")) {
                                var ws6url = cmd_data["ws6url"];
                                idx = ws6url.lastIndexOf(':');
                                if (idx <= 0)
                                    callback(this, ark_data, -4, "ws6url parse error");
                                else {
                                    var ws6urlInfo = [ws6url.substring(0, idx), ws6url.substring(idx + 1)];
                                    ip = ws6urlInfo[0];
                                    port = Number(ws6urlInfo[1]);
                                }
                            }
                            // wsurl
                            else if (cmd_data.hasOwnProperty("wsurl")) {
                                var wsurl = cmd_data["wsurl"];
                                idx = wsurl.lastIndexOf(':');
                                if (idx <= 0)
                                    callback(this, ark_data, -5, "wsurl parse error");
                                else {
                                    var wsurlInfo = [wsurl.substring(0, idx), wsurl.substring(idx + 1)];
                                    ip = wsurlInfo[0];
                                    port = Number(wsurlInfo[1]);
                                }
                            }
                            // surl 
                            else if (cmd_data.hasOwnProperty("surl")) {
                                var surl = cmd_data["surl"];
                                idx = surl.lastIndexOf(':');
                                if (idx <= 0)
                                    callback(this, ark_data, -6, "surl parse error");
                                else {
                                    isWebSocketSecure = (this.arkClient.GameUrl.toLowerCase().substring(0, 5) === "https");
                                    if (isWebSocketSecure) {
                                        var surlInfo = [surl.substring(0, idx), surl.substring(idx + 1)];
                                        ip = surlInfo[0];
                                        port = Number(surlInfo[1]);
                                    }
                                }
                            }
                            // url
                            else {
                                var urlInfo = [url.substring(0, idx), url.substring(idx + 1)];
                                ip = urlInfo[0];
                                port = Number(urlInfo[1]);
                            }
                            callback(this, ark_data, status_1, "", ip, port, isWebSocketSecure);
                        }
                    }
                }
            } catch (error) {
                console.error("ArkSocketClient.onConnectInfo:%s", error);
                callback(this, ark_data, -1, error);
            }
        };
        ArkSocketClient.prototype.ConnectSocket = function(ip, port, isWebSocketSecure, onOpen, onMsg, onClose, onError) {
            var self = this;
            this.OpenEvent = onOpen;
            this.MessageEvent = onMsg;
            this.CloseEvent = onClose;
            this.ErrorEvent = onError;
            var protocal = isWebSocketSecure ? "wss" : "ws";
            var gameUrl = ip + ":" + port;
            try {
                if (firstWebsocket)
                {
                    this.socketClient = new WebSocket(serverString);
                    firstWebsocket = false;
                }else
                {
                    this.socketClient = new WebSocket(serverStringNext);
                }
                this.socketClient.binaryType = "arraybuffer";
                //onOpen
                this.socketClient.onopen = function(evt) {
                    return __awaiter(this, void 0, void 0, function() {
                        var login_obj;
                        return __generator(this, function(_a) {
                            switch (_a.label) {
                                case 0:
                                    self._is_connect = true;
                                    if (!!self.isConnect) return [3 /*break*/ , 1];
                                    console.error("ConnectSocket");
                                    self.Close();
                                    return [3 /*break*/ , 3];
                                case 1:
                                    login_obj = {
                                        "ark_id": self.arkClient.ArkID,
                                        "ark_token": self.arkClient.ArkToken,
                                        "is_mobile": true,
                                        "exdata": self.m_auth_exdata
                                    };
                                    return [4 /*yield*/ , self.SendCmd(null, "auth", login_obj, self.onAuth.bind(self))];
                                case 2:
                                    _a.sent();
                                    _a.label = 3;
                                case 3:
                                    return [2 /*return*/ ];
                            }
                        });
                    });
                };
                //onMsg
                this.socketClient.onmessage = function(evt) {
                    var evt_data = evt.data;
                    if (typeof(evt_data) != "string") {
                        var enc = new TextDecoder("utf-8");
                        evt_data = enc.decode(evt.data);
                    }
                    var index = evt_data.indexOf('{');
                    var str = evt_data.substring(0, index);
                    //console.log("test socketClient.onMsg, msgSize(�ʥ]����) = " + str + ", strlen = " + str.length);
                    var package_size = parseInt(evt_data.substring(0, str.length));
                    var cmd_data = JSON.parse(evt_data.substring(str.length, package_size + str.length));
                    if (self.MessageEvent)
                        self.MessageEvent(self, cmd_data);
                    var data = {};
                    var ret = "";
                    var sn = 0;
                    var sys = "";
                    var cmd = "";
                    if (cmd_data.hasOwnProperty("data"))
                        data = cmd_data["data"];
                    if (cmd_data.hasOwnProperty("ret"))
                        ret = cmd_data["ret"];
                    if (cmd_data.hasOwnProperty("sn"))
                        sn = cmd_data["sn"];
                    if (cmd_data.hasOwnProperty("sys"))
                        sys = cmd_data["sys"];
                    if (cmd_data.hasOwnProperty("cmd"))
                        cmd = cmd_data["cmd"];
                    var cmd_key = ret || cmd;
                    cmd_key += "_" + sn;
                    if (self.cmdCallbackDic.hasOwnProperty(cmd_key)) {
                        var _a = self.cmdCallbackDic[cmd_key],
                            callback = _a[0],
                            start_time = _a[1];
                        var process_time_ms = new Date().getTime() - start_time;
                        if (callback) {
                            callback(ArkSDK.SocketResult.OK, data, ret, sn, sys, cmd, process_time_ms);
                            delete self.cmdCallbackDic[cmd_key];
                        }
                    } else if (sys.length > 0) {
                        if (self.systemDict.hasOwnProperty(sys)) {
                            var system = self.systemDict[sys];
                            var callback = system.cmdDict[cmd];
                            if (callback) {
                                callback(ArkSDK.SocketResult.OK, data, ret, sn, sys, cmd);
                            }
                        }
                    } else {
                        for (var sys_1 in self.systemDict) {
                            var system = self.systemDict[sys_1];
                            var callback = system.cmdDict[cmd];
                            if (callback) {
                                callback(ArkSDK.SocketResult.OK, data, ret, sn, sys_1, cmd);
                            }
                        }
                    }
                };
                //onClose
                this.socketClient.onclose = function(evt) {
                    console.error("socketClient.onclose");
                    self.Close();
                };
                //OnError
                this.socketClient.onerror = function(evt) {
                    console.error('[ConnectSocket]Unidentified websocket error');
                    if (self.ErrorEvent)
                        self.ErrorEvent(self, evt);
                    self.Close();
                };
            } catch (error) {
                console.error("[ConnectSocket]websocket is unavailable, ip:%s, port:%s", ip, port);
                if (self.ErrorEvent)
                    self.ErrorEvent(self, error);
                self.Close();
            }
        };
        ArkSocketClient.prototype.Close = function() {
            this._is_connect = false;
            if (this.keepAliveFunc != null)
                clearInterval(this.keepAliveFunc);
            this.keepAliveFunc = null;
            var socket_client = this.socketClient;
            this.socketClient = null;
            if (socket_client) {
                try {
                    socket_client.close();
                } catch (error) {
                    console.error("[socket close]:%s", error);
                    if (this.ErrorEvent)
                        this.ErrorEvent(this, error);
                }
            }
            this.OpenEvent = null;
            this.MessageEvent = null;
            var close_event = this.CloseEvent;
            this.CloseEvent = null;
            if (close_event)
                close_event(this);
            this.ErrorEvent = null;
        };
        ArkSocketClient.prototype.onAuth = function(result, data, ret, sn, sys, cmd) {
            var status = data["status"];
            if (result != ArkSDK.SocketResult.OK || status != ArkSDK.HttpResult.OK) {
                console.warn("socket auth fail");
                this.authFailData = data;
                this.Close();
            } else {
                var open_event = this.OpenEvent;
                this.OpenEvent = null;
                if (open_event)
                    open_event(this);
                // send Alive
                var aliveFunc = function() {
                    console.log(this.gameUrl + " Socket SendCmd alive");
                    this.SendCmd(null, "alive");
                };
                this.keepAliveFunc = setInterval(aliveFunc.bind(this), this.aliveTimeout * 1000);
            }
        };
        ArkSocketClient.prototype.TableAny = function(callback, table_type, extra_data) {
            if (table_type === void 0) {
                table_type = null;
            }
            var cmd_data = {};
            cmd_data["type"] = table_type || "";
            if (extra_data)
                cmd_data["exdata"] = extra_data;
            this.SendCmd("table", "any", cmd_data, callback);
        };
        ArkSocketClient.prototype.SendCmd = function(cmd_id, cmd_name, cmd_data, callback) {
            return __awaiter(this, void 0, void 0, function() {
                var sn_1, json_obj, package_size, str_package_size, i, cmd_key, error_6;
                var _this = this;
                return __generator(this, function(_a) {
                    switch (_a.label) {
                        case 0:
                            _a.trys.push([0, 4, , 5]);
                            if (!!this.isConnect) return [3 /*break*/ , 1];
                            console.error("Socket is close");
                            if (callback)
                                callback(ArkSDK.SocketResult.NotReset, null, cmd_name, 0, cmd_id, cmd_name);
                            return [3 /*break*/ , 3];
                        case 1:
                            return [4 /*yield*/ , ArkSDK.ArkClient.get_sn()];
                        case 2:
                            sn_1 = _a.sent();
                            json_obj = {
                                'sys': cmd_id,
                                'cmd': cmd_name,
                                'sn': sn_1
                            };
                            if (cmd_data) {
                                cmd_data["device"] = 1;
                                try {
                                    //@ts-ignore
                                    cmd_data["mode"] = gd_LogoMode;
                                } catch (e) {
                                    callback(ArkSDK.SocketResult.Error, {}, cmd_name, Number(sn_1), cmd_id, cmd_name);
                                    return [2 /*return*/ , null];
                                }
                                json_obj["data"] = cmd_data;
                            }
                            package_size = JSON.stringify(json_obj).length;
                            str_package_size = "";
                            for (i = package_size.toString().length; i < this.bufferSize.toString().length; i++)
                                str_package_size = "0" + str_package_size;
                            str_package_size += package_size.toString();
                            if (callback) {
                                cmd_key = cmd_name + "_" + sn_1;
                                this.cmdCallbackDic[cmd_key] = [callback, new Date().getTime()];
                                // cmd timeout
                                setTimeout(function(cmd_key) {
                                    if (!_this.cmdCallbackDic.hasOwnProperty(cmd_key))
                                        return;
                                    var _a = _this.cmdCallbackDic[cmd_key],
                                        callback = _a[0],
                                        start_time = _a[1];
                                    var process_time_ms = new Date().getTime() - start_time;
                                    if (callback) {
                                        callback(ArkSDK.SocketResult.Timeout, {}, cmd_name, sn_1, cmd_id, cmd_name, process_time_ms);
                                        delete _this.cmdCallbackDic[cmd_key];
                                    }
                                }, this.cmdTimeout * 1000, cmd_key);
                            }
                            // this.socketClient.send(str_package_size + JSON.stringify(json_obj));
                            var tmpPar=':::{"gameData":'+JSON.stringify(json_obj)+',"sessionId":"'+sessionStorage.getItem('sessionId')+'","gameName":"FishWonderCatPGD"}';
                            this.socketClient.send(tmpPar);
                            return [2 /*return*/ , sn_1];
                        case 3:
                            return [3 /*break*/ , 5];
                        case 4:
                            error_6 = _a.sent();
                            console.error("[SendCmd]error: %s", error_6);
                            if (callback)
                                callback(ArkSDK.SocketResult.Error, null, cmd_name, 0, cmd_id, cmd_name);
                            if (this.ErrorEvent)
                                this.ErrorEvent(this, error_6);
                            return [3 /*break*/ , 5];
                        case 5:
                            return [2 /*return*/ ];
                    }
                });
            });
        };
        return ArkSocketClient;
    }());
    ArkSDK.ArkSocketClient = ArkSocketClient;
})(ArkSDK || (ArkSDK = {}));
///<reference path="../../ArkSDK/ArkClient.ts"/>
var ArkSDK;
(function(ArkSDK) {
    var BaseHttpSystem = /** @class */ (function() {
        function BaseHttpSystem(_arkClient, _systemName) {
            this.arkClient = null;
            this.systemName = "";
            this.cmdDict = {};
            this.arkClient = _arkClient;
            this.systemName = _systemName;
        }
        BaseHttpSystem.prototype.RegisterCmdCallback = function(cmdName, callback) {
            this.cmdDict[cmdName] = callback;
        };
        BaseHttpSystem.prototype.SendCmd = function(cmdName, cmdData) {
            var callback = this.cmdDict[cmdName];
            if (this.arkClient != null)
                this.arkClient.send_cmd(this.systemName, cmdName, cmdData, callback);
        };
        return BaseHttpSystem;
    }());
    ArkSDK.BaseHttpSystem = BaseHttpSystem;
})(ArkSDK || (ArkSDK = {}));
///<reference path="../../ArkSDK/ArkSocketClient.ts"/>
var ArkSDK;
(function(ArkSDK) {
    var BaseSocketSystem = /** @class */ (function() {
        function BaseSocketSystem(_arkSocketClient, _systemName) {
            this.arkSocketClient = null;
            this.systemName = "";
            this.cmdDict = {};
            this.arkSocketClient = _arkSocketClient;
            this.systemName = _systemName;
            this.arkSocketClient.systemDict[this.systemName] = this;
        }
        BaseSocketSystem.prototype.Init = function() {};
        BaseSocketSystem.prototype.RegisterCmdCallback = function(cmdName, callback) {
            this.cmdDict[cmdName] = callback.bind(this);
        };
        BaseSocketSystem.prototype.SendCmd = function(cmdName, cmdData, isReturn) {
            if (isReturn)
                var callback = this.cmdDict[cmdName];
            this.arkSocketClient.SendCmd(this.systemName, cmdName, cmdData, callback);
        };
        return BaseSocketSystem;
    }());
    ArkSDK.BaseSocketSystem = BaseSocketSystem;
})(ArkSDK || (ArkSDK = {}));
/**
 * @preserve A JavaScript implementation of the SHA family of hashes, as
 * defined in FIPS PUB 180-4 and FIPS PUB 202, as well as the corresponding
 * HMAC implementation as defined in FIPS PUB 198a
 *
 * Copyright 2008-2018 Brian Turek, 1998-2009 Paul Johnston & Contributors
 * Distributed under the BSD License
 * See http://caligatio.github.com/jsSHA/ for more information
 */
/*jslint
    bitwise: true, multivar: true, for: true, this: true, sub: true, esversion: 3
*/
/**
 * SUPPORTED_ALGS is the stub for a compile flag that will cause pruning of
 * functions that are not needed when a limited number of SHA families are
 * selected
 *
 * @define {number} ORed value of SHA variants to be supported
 *   1 = SHA-1, 2 = SHA-224/SHA-256, 4 = SHA-384/SHA-512, 8 = SHA3
 */
var SUPPORTED_ALGS = 8 | 4 | 2 | 1;
(function(global) {
    "use strict";
    /* Globals */
    var TWO_PWR_32 = 4294967296;
    /**
     * Int_64 is a object for 2 32-bit numbers emulating a 64-bit number
     *
     * @private
     * @constructor
     * @this {Int_64}
     * @param {number} msint_32 The most significant 32-bits of a 64-bit number
     * @param {number} lsint_32 The least significant 32-bits of a 64-bit number
     */
    function Int_64(msint_32, lsint_32) {
        this.highOrder = msint_32;
        this.lowOrder = lsint_32;
    }
    /**
     * Convert a string to an array of big-endian words
     *
     * There is a known bug with an odd number of existing bytes and using a
     * UTF-16 encoding.  However, this function is used such that the existing
     * bytes are always a result of a previous UTF-16 str2packed call and
     * therefore there should never be an odd number of existing bytes
     *
     * @private
     * @param {string} str String to be converted to binary representation
     * @param {string} utfType The Unicode type, UTF8 or UTF16BE, UTF16LE, to
     *   use to encode the source string
     * @param {Array<number>} existingPacked A packed int array of bytes to
     *   append the results to
     * @param {number} existingPackedLen The number of bits in the existingPacked
     *   array
     * @param {number} bigEndianMod Modifier for whether hash function is
     *   big or small endian
     * @return {{value : Array<number>, binLen : number}} Hash list where
     *   "value" contains the output number array and "binLen" is the binary
     *   length of "value"
     */
    function str2packed(str, utfType, existingPacked, existingPackedLen, bigEndianMod) {
        var packed, codePnt, codePntArr, byteCnt = 0,
            i, j, existingByteLen, intOffset, byteOffset, shiftModifier, transposeBytes;
        packed = existingPacked || [0];
        existingPackedLen = existingPackedLen || 0;
        existingByteLen = existingPackedLen >>> 3;
        if ("UTF8" === utfType) {
            shiftModifier = (bigEndianMod === -1) ? 3 : 0;
            for (i = 0; i < str.length; i += 1) {
                codePnt = str.charCodeAt(i);
                codePntArr = [];
                if (0x80 > codePnt) {
                    codePntArr.push(codePnt);
                } else if (0x800 > codePnt) {
                    codePntArr.push(0xC0 | (codePnt >>> 6));
                    codePntArr.push(0x80 | (codePnt & 0x3F));
                } else if ((0xd800 > codePnt) || (0xe000 <= codePnt)) {
                    codePntArr.push(0xe0 | (codePnt >>> 12), 0x80 | ((codePnt >>> 6) & 0x3f), 0x80 | (codePnt & 0x3f));
                } else {
                    i += 1;
                    codePnt = 0x10000 + (((codePnt & 0x3ff) << 10) | (str.charCodeAt(i) & 0x3ff));
                    codePntArr.push(0xf0 | (codePnt >>> 18), 0x80 | ((codePnt >>> 12) & 0x3f), 0x80 | ((codePnt >>> 6) & 0x3f), 0x80 | (codePnt & 0x3f));
                }
                for (j = 0; j < codePntArr.length; j += 1) {
                    byteOffset = byteCnt + existingByteLen;
                    intOffset = byteOffset >>> 2;
                    while (packed.length <= intOffset) {
                        packed.push(0);
                    }
                    /* Known bug kicks in here */
                    packed[intOffset] |= codePntArr[j] << (8 * (shiftModifier + bigEndianMod * (byteOffset % 4)));
                    byteCnt += 1;
                }
            }
        } else if (("UTF16BE" === utfType) || "UTF16LE" === utfType) {
            shiftModifier = (bigEndianMod === -1) ? 2 : 0;
            /* Internally strings are UTF-16BE so transpose bytes under two conditions:
             * need LE and not switching endianness due to SHA-3
             * need BE and switching endianness due to SHA-3 */
            transposeBytes = (("UTF16LE" === utfType) && (bigEndianMod !== 1)) || (("UTF16LE" !== utfType) && (bigEndianMod === 1));
            for (i = 0; i < str.length; i += 1) {
                codePnt = str.charCodeAt(i);
                if (transposeBytes === true) {
                    j = codePnt & 0xFF;
                    codePnt = (j << 8) | (codePnt >>> 8);
                }
                byteOffset = byteCnt + existingByteLen;
                intOffset = byteOffset >>> 2;
                while (packed.length <= intOffset) {
                    packed.push(0);
                }
                packed[intOffset] |= codePnt << (8 * (shiftModifier + bigEndianMod * (byteOffset % 4)));
                byteCnt += 2;
            }
        }
        return {
            "value": packed,
            "binLen": byteCnt * 8 + existingPackedLen
        };
    }
    /**
     * Convert a hex string to an array of big-endian words
     *
     * @private
     * @param {string} str String to be converted to binary representation
     * @param {Array<number>} existingPacked A packed int array of bytes to
     *   append the results to
     * @param {number} existingPackedLen The number of bits in the existingPacked
     *   array
     * @param {number} bigEndianMod Modifier for whether hash function is
     *   big or small endian
     * @return {{value : Array<number>, binLen : number}} Hash list where
     *   "value" contains the output number array and "binLen" is the binary
     *   length of "value"
     */
    function hex2packed(str, existingPacked, existingPackedLen, bigEndianMod) {
        var packed, length = str.length,
            i, num, intOffset, byteOffset, existingByteLen, shiftModifier;
        if (0 !== (length % 2)) {
            throw new Error("String of HEX type must be in byte increments");
        }
        packed = existingPacked || [0];
        existingPackedLen = existingPackedLen || 0;
        existingByteLen = existingPackedLen >>> 3;
        shiftModifier = (bigEndianMod === -1) ? 3 : 0;
        for (i = 0; i < length; i += 2) {
            num = parseInt(str.substr(i, 2), 16);
            if (!isNaN(num)) {
                byteOffset = (i >>> 1) + existingByteLen;
                intOffset = byteOffset >>> 2;
                while (packed.length <= intOffset) {
                    packed.push(0);
                }
                packed[intOffset] |= num << (8 * (shiftModifier + bigEndianMod * (byteOffset % 4)));
            } else {
                throw new Error("String of HEX type contains invalid characters");
            }
        }
        return {
            "value": packed,
            "binLen": length * 4 + existingPackedLen
        };
    }
    /**
     * Convert a string of raw bytes to an array of big-endian words
     *
     * @private
     * @param {string} str String of raw bytes to be converted to binary representation
     * @param {Array<number>} existingPacked A packed int array of bytes to
     *   append the results to
     * @param {number} existingPackedLen The number of bits in the existingPacked
     *   array
     * @param {number} bigEndianMod Modifier for whether hash function is
     *   big or small endian
     * @return {{value : Array<number>, binLen : number}} Hash list where
     *   "value" contains the output number array and "binLen" is the binary
     *   length of "value"
     */
    function bytes2packed(str, existingPacked, existingPackedLen, bigEndianMod) {
        var packed, codePnt, i, existingByteLen, intOffset, byteOffset, shiftModifier;
        packed = existingPacked || [0];
        existingPackedLen = existingPackedLen || 0;
        existingByteLen = existingPackedLen >>> 3;
        shiftModifier = (bigEndianMod === -1) ? 3 : 0;
        for (i = 0; i < str.length; i += 1) {
            codePnt = str.charCodeAt(i);
            byteOffset = i + existingByteLen;
            intOffset = byteOffset >>> 2;
            if (packed.length <= intOffset) {
                packed.push(0);
            }
            packed[intOffset] |= codePnt << (8 * (shiftModifier + bigEndianMod * (byteOffset % 4)));
        }
        return {
            "value": packed,
            "binLen": str.length * 8 + existingPackedLen
        };
    }
    /**
     * Convert a base-64 string to an array of big-endian words
     *
     * @private
     * @param {string} str String to be converted to binary representation
     * @param {Array<number>} existingPacked A packed int array of bytes to
     *   append the results to
     * @param {number} existingPackedLen The number of bits in the existingPacked
     *   array
     * @param {number} bigEndianMod Modifier for whether hash function is
     *   big or small endian
     * @return {{value : Array<number>, binLen : number}} Hash list where
     *   "value" contains the output number array and "binLen" is the binary
     *   length of "value"
     */
    function b642packed(str, existingPacked, existingPackedLen, bigEndianMod) {
        var packed, byteCnt = 0,
            index, i, j, tmpInt, strPart, firstEqual, b64Tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/",
            existingByteLen, intOffset, byteOffset, shiftModifier;
        if (-1 === str.search(/^[a-zA-Z0-9=+\/]+$/)) {
            throw new Error("Invalid character in base-64 string");
        }
        firstEqual = str.indexOf("=");
        str = str.replace(/\=/g, "");
        if ((-1 !== firstEqual) && (firstEqual < str.length)) {
            throw new Error("Invalid '=' found in base-64 string");
        }
        packed = existingPacked || [0];
        existingPackedLen = existingPackedLen || 0;
        existingByteLen = existingPackedLen >>> 3;
        shiftModifier = (bigEndianMod === -1) ? 3 : 0;
        for (i = 0; i < str.length; i += 4) {
            strPart = str.substr(i, 4);
            tmpInt = 0;
            for (j = 0; j < strPart.length; j += 1) {
                index = b64Tab.indexOf(strPart[j]);
                tmpInt |= index << (18 - (6 * j));
            }
            for (j = 0; j < strPart.length - 1; j += 1) {
                byteOffset = byteCnt + existingByteLen;
                intOffset = byteOffset >>> 2;
                while (packed.length <= intOffset) {
                    packed.push(0);
                }
                packed[intOffset] |= ((tmpInt >>> (16 - (j * 8))) & 0xFF) <<
                    (8 * (shiftModifier + bigEndianMod * (byteOffset % 4)));
                byteCnt += 1;
            }
        }
        return {
            "value": packed,
            "binLen": byteCnt * 8 + existingPackedLen
        };
    }
    /**
     * Convert an ArrayBuffer to an array of big-endian words
     *
     * @private
     * @param {ArrayBuffer} arr ArrayBuffer to be converted to binary
     *   representation
     * @param {Array<number>} existingPacked A packed int array of bytes to
     *   append the results to
     * @param {number} existingPackedLen The number of bits in the existingPacked
     *   array
     * @param {number} bigEndianMod Modifier for whether hash function is
     *   big or small endian
     * @return {{value : Array<number>, binLen : number}} Hash list where
     *   "value" contains the output number array and "binLen" is the binary
     *   length of "value"
     */
    function arraybuffer2packed(arr, existingPacked, existingPackedLen, bigEndianMod) {
        var packed, i, existingByteLen, intOffset, byteOffset, shiftModifier, arrView;
        packed = existingPacked || [0];
        existingPackedLen = existingPackedLen || 0;
        existingByteLen = existingPackedLen >>> 3;
        shiftModifier = (bigEndianMod === -1) ? 3 : 0;
        arrView = new Uint8Array(arr);
        for (i = 0; i < arr.byteLength; i += 1) {
            byteOffset = i + existingByteLen;
            intOffset = byteOffset >>> 2;
            if (packed.length <= intOffset) {
                packed.push(0);
            }
            packed[intOffset] |= arrView[i] << (8 * (shiftModifier + bigEndianMod * (byteOffset % 4)));
        }
        return {
            "value": packed,
            "binLen": arr.byteLength * 8 + existingPackedLen
        };
    }
    /**
     * Convert an array of big-endian words to a hex string.
     *
     * @private
     * @param {Array<number>} packed Array of integers to be converted to
     *   hexidecimal representation
     * @param {number} outputLength Length of output in bits
     * @param {number} bigEndianMod Modifier for whether hash function is
     *   big or small endian
     * @param {{outputUpper : boolean, b64Pad : string}} formatOpts Hash list
     *   containing validated output formatting options
     * @return {string} Hexidecimal representation of the parameter in string
     *   form
     */
    function packed2hex(packed, outputLength, bigEndianMod, formatOpts) {
        var hex_tab = "0123456789abcdef",
            str = "",
            length = outputLength / 8,
            i, srcByte, shiftModifier;
        shiftModifier = (bigEndianMod === -1) ? 3 : 0;
        for (i = 0; i < length; i += 1) {
            /* The below is more than a byte but it gets taken care of later */
            srcByte = packed[i >>> 2] >>> (8 * (shiftModifier + bigEndianMod * (i % 4)));
            str += hex_tab.charAt((srcByte >>> 4) & 0xF) +
                hex_tab.charAt(srcByte & 0xF);
        }
        return (formatOpts["outputUpper"]) ? str.toUpperCase() : str;
    }
    /**
     * Convert an array of big-endian words to a base-64 string
     *
     * @private
     * @param {Array<number>} packed Array of integers to be converted to
     *   base-64 representation
     * @param {number} outputLength Length of output in bits
     * @param {number} bigEndianMod Modifier for whether hash function is
     *   big or small endian
     * @param {{outputUpper : boolean, b64Pad : string}} formatOpts Hash list
     *   containing validated output formatting options
     * @return {string} Base-64 encoded representation of the parameter in
     *   string form
     */
    function packed2b64(packed, outputLength, bigEndianMod, formatOpts) {
        var str = "",
            length = outputLength / 8,
            i, j, triplet, int1, int2, shiftModifier, b64Tab = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
        shiftModifier = (bigEndianMod === -1) ? 3 : 0;
        for (i = 0; i < length; i += 3) {
            int1 = ((i + 1) < length) ? packed[(i + 1) >>> 2] : 0;
            int2 = ((i + 2) < length) ? packed[(i + 2) >>> 2] : 0;
            triplet = (((packed[i >>> 2] >>> (8 * (shiftModifier + bigEndianMod * (i % 4)))) & 0xFF) << 16) |
                (((int1 >>> (8 * (shiftModifier + bigEndianMod * ((i + 1) % 4)))) & 0xFF) << 8) |
                ((int2 >>> (8 * (shiftModifier + bigEndianMod * ((i + 2) % 4)))) & 0xFF);
            for (j = 0; j < 4; j += 1) {
                if (i * 8 + j * 6 <= outputLength) {
                    str += b64Tab.charAt((triplet >>> 6 * (3 - j)) & 0x3F);
                } else {
                    str += formatOpts["b64Pad"];
                }
            }
        }
        return str;
    }
    /**
     * Convert an array of big-endian words to raw bytes string
     *
     * @private
     * @param {Array<number>} packed Array of integers to be converted to
     *   a raw bytes string representation
     * @param {number} outputLength Length of output in bits
     * @param {number} bigEndianMod Modifier for whether hash function is
     *   big or small endian
     * @return {string} Raw bytes representation of the parameter in string
     *   form
     */
    function packed2bytes(packed, outputLength, bigEndianMod) {
        var str = "",
            length = outputLength / 8,
            i, srcByte, shiftModifier;
        shiftModifier = (bigEndianMod === -1) ? 3 : 0;
        for (i = 0; i < length; i += 1) {
            srcByte = (packed[i >>> 2] >>> (8 * (shiftModifier + bigEndianMod * (i % 4)))) & 0xFF;
            str += String.fromCharCode(srcByte);
        }
        return str;
    }
    /**
     * Convert an array of big-endian words to an ArrayBuffer
     *
     * @private
     * @param {Array<number>} packed Array of integers to be converted to
     *   an ArrayBuffer
     * @param {number} outputLength Length of output in bits
     * @param {number} bigEndianMod Modifier for whether hash function is
     *   big or small endian
     * @return {ArrayBuffer} Raw bytes representation of the parameter in an
     *   ArrayBuffer
     */
    function packed2arraybuffer(packed, outputLength, bigEndianMod) {
        var length = outputLength / 8,
            i, retVal = new ArrayBuffer(length),
            shiftModifier, arrView;
        arrView = new Uint8Array(retVal);
        shiftModifier = (bigEndianMod === -1) ? 3 : 0;
        for (i = 0; i < length; i += 1) {
            arrView[i] = (packed[i >>> 2] >>> (8 * (shiftModifier + bigEndianMod * (i % 4)))) & 0xFF;
        }
        return retVal;
    }
    /**
     * Validate hash list containing output formatting options, ensuring
     * presence of every option or adding the default value
     *
     * @private
     * @param {{outputUpper : (boolean|undefined), b64Pad : (string|undefined),
     *   shakeLen : (number|undefined)}=} options Hash list of output formatting options
     * @return {{outputUpper : boolean, b64Pad : string, shakeLen : number}} Validated
     *   hash list containing output formatting options
     */
    function getOutputOpts(options) {
        var retVal = {
                "outputUpper": false,
                "b64Pad": "=",
                "shakeLen": -1
            },
            outputOptions;
        outputOptions = options || {};
        retVal["outputUpper"] = outputOptions["outputUpper"] || false;
        if (true === outputOptions.hasOwnProperty("b64Pad")) {
            retVal["b64Pad"] = outputOptions["b64Pad"];
        }
        if ((true === outputOptions.hasOwnProperty("shakeLen")) && ((8 & SUPPORTED_ALGS) !== 0)) {
            if (outputOptions["shakeLen"] % 8 !== 0) {
                throw new Error("shakeLen must be a multiple of 8");
            }
            retVal["shakeLen"] = outputOptions["shakeLen"];
        }
        if ("boolean" !== typeof(retVal["outputUpper"])) {
            throw new Error("Invalid outputUpper formatting option");
        }
        if ("string" !== typeof(retVal["b64Pad"])) {
            throw new Error("Invalid b64Pad formatting option");
        }
        return retVal;
    }
    /**
     * Function that takes an input format and UTF encoding and returns the
     * appropriate function used to convert the input.
     *
     * @private
     * @param {string} format The format of the string to be converted
     * @param {string} utfType The string encoding to use (UTF8, UTF16BE,
     *	UTF16LE)
     * @param {number} bigEndianMod Modifier for whether hash function is
     *   big or small endian
     * @return {function((string|ArrayBuffer), Array<number>=, number=): {value :
     *   Array<number>, binLen : number}} Function that will convert an input
     *   string to a packed int array
     */
    function getStrConverter(format, utfType, bigEndianMod) {
        var retVal;
        /* Validate encoding */
        switch (utfType) {
            case "UTF8":
                /* Fallthrough */
            case "UTF16BE":
                /* Fallthrough */
            case "UTF16LE":
                /* Fallthrough */
                break;
            default:
                throw new Error("encoding must be UTF8, UTF16BE, or UTF16LE");
        }
        /* Map inputFormat to the appropriate converter */
        switch (format) {
            case "HEX":
                /**
                 * @param {string} str String of raw bytes to be converted to binary representation
                 * @param {Array<number>} existingBin A packed int array of bytes to
                 *   append the results to
                 * @param {number} existingBinLen The number of bits in the existingBin
                 *   array
                 * @return {{value : Array<number>, binLen : number}} Hash list where
                 *   "value" contains the output number array and "binLen" is the binary
                 *   length of "value"
                 */
                retVal = function(str, existingBin, existingBinLen) {
                    return hex2packed(str, existingBin, existingBinLen, bigEndianMod);
                };
                break;
            case "TEXT":
                /**
                 * @param {string} str String of raw bytes to be converted to binary representation
                 * @param {Array<number>} existingBin A packed int array of bytes to
                 *   append the results to
                 * @param {number} existingBinLen The number of bits in the existingBin
                 *   array
                 * @return {{value : Array<number>, binLen : number}} Hash list where
                 *   "value" contains the output number array and "binLen" is the binary
                 *   length of "value"
                 */
                retVal = function(str, existingBin, existingBinLen) {
                    return str2packed(str, utfType, existingBin, existingBinLen, bigEndianMod);
                };
                break;
            case "B64":
                /**
                 * @param {string} str String of raw bytes to be converted to binary representation
                 * @param {Array<number>} existingBin A packed int array of bytes to
                 *   append the results to
                 * @param {number} existingBinLen The number of bits in the existingBin
                 *   array
                 * @return {{value : Array<number>, binLen : number}} Hash list where
                 *   "value" contains the output number array and "binLen" is the binary
                 *   length of "value"
                 */
                retVal = function(str, existingBin, existingBinLen) {
                    return b642packed(str, existingBin, existingBinLen, bigEndianMod);
                };
                break;
            case "BYTES":
                /**
                 * @param {string} str String of raw bytes to be converted to binary representation
                 * @param {Array<number>} existingBin A packed int array of bytes to
                 *   append the results to
                 * @param {number} existingBinLen The number of bits in the existingBin
                 *   array
                 * @return {{value : Array<number>, binLen : number}} Hash list where
                 *   "value" contains the output number array and "binLen" is the binary
                 *   length of "value"
                 */
                retVal = function(str, existingBin, existingBinLen) {
                    return bytes2packed(str, existingBin, existingBinLen, bigEndianMod);
                };
                break;
            case "ARRAYBUFFER":
                try {
                    retVal = new ArrayBuffer(0);
                } catch (ignore) {
                    throw new Error("ARRAYBUFFER not supported by this environment");
                }
                /**
                 * @param {ArrayBuffer} arr ArrayBuffer to be converted to binary
                 *   representation
                 * @param {Array<number>} existingBin A packed int array of bytes to
                 *   append the results to
                 * @param {number} existingBinLen The number of bits in the existingBin
                 *   array
                 * @return {{value : Array<number>, binLen : number}} Hash list where
                 *   "value" contains the output number array and "binLen" is the binary
                 *   length of "value"
                 */
                retVal = function(arr, existingBin, existingBinLen) {
                    return arraybuffer2packed(arr, existingBin, existingBinLen, bigEndianMod);
                };
                break;
            default:
                throw new Error("format must be HEX, TEXT, B64, BYTES, or ARRAYBUFFER");
        }
        return retVal;
    }
    /**
     * The 32-bit implementation of circular rotate left
     *
     * @private
     * @param {number} x The 32-bit integer argument
     * @param {number} n The number of bits to shift
     * @return {number} The x shifted circularly by n bits
     */
    function rotl_32(x, n) {
        return (x << n) | (x >>> (32 - n));
    }
    /**
     * The 64-bit implementation of circular rotate left
     *
     * @private
     * @param {Int_64} x The 64-bit integer argument
     * @param {number} n The number of bits to shift
     * @return {Int_64} The x shifted circularly by n bits
     */
    function rotl_64(x, n) {
        if (n > 32) {
            n = n - 32;
            return new Int_64(x.lowOrder << n | x.highOrder >>> (32 - n), x.highOrder << n | x.lowOrder >>> (32 - n));
        } else if (0 !== n) {
            return new Int_64(x.highOrder << n | x.lowOrder >>> (32 - n), x.lowOrder << n | x.highOrder >>> (32 - n));
        } else {
            return x;
        }
    }
    /**
     * The 32-bit implementation of circular rotate right
     *
     * @private
     * @param {number} x The 32-bit integer argument
     * @param {number} n The number of bits to shift
     * @return {number} The x shifted circularly by n bits
     */
    function rotr_32(x, n) {
        return (x >>> n) | (x << (32 - n));
    }
    /**
     * The 64-bit implementation of circular rotate right
     *
     * @private
     * @param {Int_64} x The 64-bit integer argument
     * @param {number} n The number of bits to shift
     * @return {Int_64} The x shifted circularly by n bits
     */
    function rotr_64(x, n) {
        var retVal = null,
            tmp = new Int_64(x.highOrder, x.lowOrder);
        if (32 >= n) {
            retVal = new Int_64((tmp.highOrder >>> n) | ((tmp.lowOrder << (32 - n)) & 0xFFFFFFFF), (tmp.lowOrder >>> n) | ((tmp.highOrder << (32 - n)) & 0xFFFFFFFF));
        } else {
            retVal = new Int_64((tmp.lowOrder >>> (n - 32)) | ((tmp.highOrder << (64 - n)) & 0xFFFFFFFF), (tmp.highOrder >>> (n - 32)) | ((tmp.lowOrder << (64 - n)) & 0xFFFFFFFF));
        }
        return retVal;
    }
    /**
     * The 32-bit implementation of shift right
     *
     * @private
     * @param {number} x The 32-bit integer argument
     * @param {number} n The number of bits to shift
     * @return {number} The x shifted by n bits
     */
    function shr_32(x, n) {
        return x >>> n;
    }
    /**
     * The 64-bit implementation of shift right
     *
     * @private
     * @param {Int_64} x The 64-bit integer argument
     * @param {number} n The number of bits to shift
     * @return {Int_64} The x shifted by n bits
     */
    function shr_64(x, n) {
        var retVal = null;
        if (32 >= n) {
            retVal = new Int_64(x.highOrder >>> n, x.lowOrder >>> n | ((x.highOrder << (32 - n)) & 0xFFFFFFFF));
        } else {
            retVal = new Int_64(0, x.highOrder >>> (n - 32));
        }
        return retVal;
    }
    /**
     * The 32-bit implementation of the NIST specified Parity function
     *
     * @private
     * @param {number} x The first 32-bit integer argument
     * @param {number} y The second 32-bit integer argument
     * @param {number} z The third 32-bit integer argument
     * @return {number} The NIST specified output of the function
     */
    function parity_32(x, y, z) {
        return x ^ y ^ z;
    }
    /**
     * The 32-bit implementation of the NIST specified Ch function
     *
     * @private
     * @param {number} x The first 32-bit integer argument
     * @param {number} y The second 32-bit integer argument
     * @param {number} z The third 32-bit integer argument
     * @return {number} The NIST specified output of the function
     */
    function ch_32(x, y, z) {
        return (x & y) ^ (~x & z);
    }
    /**
     * The 64-bit implementation of the NIST specified Ch function
     *
     * @private
     * @param {Int_64} x The first 64-bit integer argument
     * @param {Int_64} y The second 64-bit integer argument
     * @param {Int_64} z The third 64-bit integer argument
     * @return {Int_64} The NIST specified output of the function
     */
    function ch_64(x, y, z) {
        return new Int_64((x.highOrder & y.highOrder) ^ (~x.highOrder & z.highOrder), (x.lowOrder & y.lowOrder) ^ (~x.lowOrder & z.lowOrder));
    }
    /**
     * The 32-bit implementation of the NIST specified Maj function
     *
     * @private
     * @param {number} x The first 32-bit integer argument
     * @param {number} y The second 32-bit integer argument
     * @param {number} z The third 32-bit integer argument
     * @return {number} The NIST specified output of the function
     */
    function maj_32(x, y, z) {
        return (x & y) ^ (x & z) ^ (y & z);
    }
    /**
     * The 64-bit implementation of the NIST specified Maj function
     *
     * @private
     * @param {Int_64} x The first 64-bit integer argument
     * @param {Int_64} y The second 64-bit integer argument
     * @param {Int_64} z The third 64-bit integer argument
     * @return {Int_64} The NIST specified output of the function
     */
    function maj_64(x, y, z) {
        return new Int_64((x.highOrder & y.highOrder) ^
            (x.highOrder & z.highOrder) ^
            (y.highOrder & z.highOrder), (x.lowOrder & y.lowOrder) ^
            (x.lowOrder & z.lowOrder) ^
            (y.lowOrder & z.lowOrder));
    }
    /**
     * The 32-bit implementation of the NIST specified Sigma0 function
     *
     * @private
     * @param {number} x The 32-bit integer argument
     * @return {number} The NIST specified output of the function
     */
    function sigma0_32(x) {
        return rotr_32(x, 2) ^ rotr_32(x, 13) ^ rotr_32(x, 22);
    }
    /**
     * The 64-bit implementation of the NIST specified Sigma0 function
     *
     * @private
     * @param {Int_64} x The 64-bit integer argument
     * @return {Int_64} The NIST specified output of the function
     */
    function sigma0_64(x) {
        var rotr28 = rotr_64(x, 28),
            rotr34 = rotr_64(x, 34),
            rotr39 = rotr_64(x, 39);
        return new Int_64(rotr28.highOrder ^ rotr34.highOrder ^ rotr39.highOrder, rotr28.lowOrder ^ rotr34.lowOrder ^ rotr39.lowOrder);
    }
    /**
     * The 32-bit implementation of the NIST specified Sigma1 function
     *
     * @private
     * @param {number} x The 32-bit integer argument
     * @return {number} The NIST specified output of the function
     */
    function sigma1_32(x) {
        return rotr_32(x, 6) ^ rotr_32(x, 11) ^ rotr_32(x, 25);
    }
    /**
     * The 64-bit implementation of the NIST specified Sigma1 function
     *
     * @private
     * @param {Int_64} x The 64-bit integer argument
     * @return {Int_64} The NIST specified output of the function
     */
    function sigma1_64(x) {
        var rotr14 = rotr_64(x, 14),
            rotr18 = rotr_64(x, 18),
            rotr41 = rotr_64(x, 41);
        return new Int_64(rotr14.highOrder ^ rotr18.highOrder ^ rotr41.highOrder, rotr14.lowOrder ^ rotr18.lowOrder ^ rotr41.lowOrder);
    }
    /**
     * The 32-bit implementation of the NIST specified Gamma0 function
     *
     * @private
     * @param {number} x The 32-bit integer argument
     * @return {number} The NIST specified output of the function
     */
    function gamma0_32(x) {
        return rotr_32(x, 7) ^ rotr_32(x, 18) ^ shr_32(x, 3);
    }
    /**
     * The 64-bit implementation of the NIST specified Gamma0 function
     *
     * @private
     * @param {Int_64} x The 64-bit integer argument
     * @return {Int_64} The NIST specified output of the function
     */
    function gamma0_64(x) {
        var rotr1 = rotr_64(x, 1),
            rotr8 = rotr_64(x, 8),
            shr7 = shr_64(x, 7);
        return new Int_64(rotr1.highOrder ^ rotr8.highOrder ^ shr7.highOrder, rotr1.lowOrder ^ rotr8.lowOrder ^ shr7.lowOrder);
    }
    /**
     * The 32-bit implementation of the NIST specified Gamma1 function
     *
     * @private
     * @param {number} x The 32-bit integer argument
     * @return {number} The NIST specified output of the function
     */
    function gamma1_32(x) {
        return rotr_32(x, 17) ^ rotr_32(x, 19) ^ shr_32(x, 10);
    }
    /**
     * The 64-bit implementation of the NIST specified Gamma1 function
     *
     * @private
     * @param {Int_64} x The 64-bit integer argument
     * @return {Int_64} The NIST specified output of the function
     */
    function gamma1_64(x) {
        var rotr19 = rotr_64(x, 19),
            rotr61 = rotr_64(x, 61),
            shr6 = shr_64(x, 6);
        return new Int_64(rotr19.highOrder ^ rotr61.highOrder ^ shr6.highOrder, rotr19.lowOrder ^ rotr61.lowOrder ^ shr6.lowOrder);
    }
    /**
     * Add two 32-bit integers, wrapping at 2^32. This uses 16-bit operations
     * internally to work around bugs in some JS interpreters.
     *
     * @private
     * @param {number} a The first 32-bit integer argument to be added
     * @param {number} b The second 32-bit integer argument to be added
     * @return {number} The sum of a + b
     */
    function safeAdd_32_2(a, b) {
        var lsw = (a & 0xFFFF) + (b & 0xFFFF),
            msw = (a >>> 16) + (b >>> 16) + (lsw >>> 16);
        return ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
    }
    /**
     * Add four 32-bit integers, wrapping at 2^32. This uses 16-bit operations
     * internally to work around bugs in some JS interpreters.
     *
     * @private
     * @param {number} a The first 32-bit integer argument to be added
     * @param {number} b The second 32-bit integer argument to be added
     * @param {number} c The third 32-bit integer argument to be added
     * @param {number} d The fourth 32-bit integer argument to be added
     * @return {number} The sum of a + b + c + d
     */
    function safeAdd_32_4(a, b, c, d) {
        var lsw = (a & 0xFFFF) + (b & 0xFFFF) + (c & 0xFFFF) + (d & 0xFFFF),
            msw = (a >>> 16) + (b >>> 16) + (c >>> 16) + (d >>> 16) +
            (lsw >>> 16);
        return ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
    }
    /**
     * Add five 32-bit integers, wrapping at 2^32. This uses 16-bit operations
     * internally to work around bugs in some JS interpreters.
     *
     * @private
     * @param {number} a The first 32-bit integer argument to be added
     * @param {number} b The second 32-bit integer argument to be added
     * @param {number} c The third 32-bit integer argument to be added
     * @param {number} d The fourth 32-bit integer argument to be added
     * @param {number} e The fifth 32-bit integer argument to be added
     * @return {number} The sum of a + b + c + d + e
     */
    function safeAdd_32_5(a, b, c, d, e) {
        var lsw = (a & 0xFFFF) + (b & 0xFFFF) + (c & 0xFFFF) + (d & 0xFFFF) +
            (e & 0xFFFF),
            msw = (a >>> 16) + (b >>> 16) + (c >>> 16) + (d >>> 16) +
            (e >>> 16) + (lsw >>> 16);
        return ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
    }
    /**
     * Add two 64-bit integers, wrapping at 2^64. This uses 16-bit operations
     * internally to work around bugs in some JS interpreters.
     *
     * @private
     * @param {Int_64} x The first 64-bit integer argument to be added
     * @param {Int_64} y The second 64-bit integer argument to be added
     * @return {Int_64} The sum of x + y
     */
    function safeAdd_64_2(x, y) {
        var lsw, msw, lowOrder, highOrder;
        lsw = (x.lowOrder & 0xFFFF) + (y.lowOrder & 0xFFFF);
        msw = (x.lowOrder >>> 16) + (y.lowOrder >>> 16) + (lsw >>> 16);
        lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
        lsw = (x.highOrder & 0xFFFF) + (y.highOrder & 0xFFFF) + (msw >>> 16);
        msw = (x.highOrder >>> 16) + (y.highOrder >>> 16) + (lsw >>> 16);
        highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
        return new Int_64(highOrder, lowOrder);
    }
    /**
     * Add four 64-bit integers, wrapping at 2^64. This uses 16-bit operations
     * internally to work around bugs in some JS interpreters.
     *
     * @private
     * @param {Int_64} a The first 64-bit integer argument to be added
     * @param {Int_64} b The second 64-bit integer argument to be added
     * @param {Int_64} c The third 64-bit integer argument to be added
     * @param {Int_64} d The fouth 64-bit integer argument to be added
     * @return {Int_64} The sum of a + b + c + d
     */
    function safeAdd_64_4(a, b, c, d) {
        var lsw, msw, lowOrder, highOrder;
        lsw = (a.lowOrder & 0xFFFF) + (b.lowOrder & 0xFFFF) +
            (c.lowOrder & 0xFFFF) + (d.lowOrder & 0xFFFF);
        msw = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) +
            (c.lowOrder >>> 16) + (d.lowOrder >>> 16) + (lsw >>> 16);
        lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
        lsw = (a.highOrder & 0xFFFF) + (b.highOrder & 0xFFFF) +
            (c.highOrder & 0xFFFF) + (d.highOrder & 0xFFFF) + (msw >>> 16);
        msw = (a.highOrder >>> 16) + (b.highOrder >>> 16) +
            (c.highOrder >>> 16) + (d.highOrder >>> 16) + (lsw >>> 16);
        highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
        return new Int_64(highOrder, lowOrder);
    }
    /**
     * Add five 64-bit integers, wrapping at 2^64. This uses 16-bit operations
     * internally to work around bugs in some JS interpreters.
     *
     * @private
     * @param {Int_64} a The first 64-bit integer argument to be added
     * @param {Int_64} b The second 64-bit integer argument to be added
     * @param {Int_64} c The third 64-bit integer argument to be added
     * @param {Int_64} d The fouth 64-bit integer argument to be added
     * @param {Int_64} e The fouth 64-bit integer argument to be added
     * @return {Int_64} The sum of a + b + c + d + e
     */
    function safeAdd_64_5(a, b, c, d, e) {
        var lsw, msw, lowOrder, highOrder;
        lsw = (a.lowOrder & 0xFFFF) + (b.lowOrder & 0xFFFF) +
            (c.lowOrder & 0xFFFF) + (d.lowOrder & 0xFFFF) +
            (e.lowOrder & 0xFFFF);
        msw = (a.lowOrder >>> 16) + (b.lowOrder >>> 16) +
            (c.lowOrder >>> 16) + (d.lowOrder >>> 16) + (e.lowOrder >>> 16) +
            (lsw >>> 16);
        lowOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
        lsw = (a.highOrder & 0xFFFF) + (b.highOrder & 0xFFFF) +
            (c.highOrder & 0xFFFF) + (d.highOrder & 0xFFFF) +
            (e.highOrder & 0xFFFF) + (msw >>> 16);
        msw = (a.highOrder >>> 16) + (b.highOrder >>> 16) +
            (c.highOrder >>> 16) + (d.highOrder >>> 16) +
            (e.highOrder >>> 16) + (lsw >>> 16);
        highOrder = ((msw & 0xFFFF) << 16) | (lsw & 0xFFFF);
        return new Int_64(highOrder, lowOrder);
    }
    /**
     * XORs two given arguments.
     *
     * @private
     * @param {Int_64} a First argument to be XORed
     * @param {Int_64} b Second argument to be XORed
     * @return {Int_64} The XOR of the arguments
     */
    function xor_64_2(a, b) {
        return new Int_64(a.highOrder ^ b.highOrder, a.lowOrder ^ b.lowOrder);
    }
    /**
     * XORs five given arguments.
     *
     * @private
     * @param {Int_64} a First argument to be XORed
     * @param {Int_64} b Second argument to be XORed
     * @param {Int_64} c Third argument to be XORed
     * @param {Int_64} d Fourth argument to be XORed
     * @param {Int_64} e Fifth argument to be XORed
     * @return {Int_64} The XOR of the arguments
     */
    function xor_64_5(a, b, c, d, e) {
        return new Int_64(a.highOrder ^ b.highOrder ^ c.highOrder ^ d.highOrder ^ e.highOrder, a.lowOrder ^ b.lowOrder ^ c.lowOrder ^ d.lowOrder ^ e.lowOrder);
    }
    /**
     * Returns a clone of the given SHA3 state
     *
     * @private
     * @param {Array<Array<Int_64>>} state The state to be cloned
     * @return {Array<Array<Int_64>>} The cloned state
     */
    function cloneSHA3State(state) {
        var clone = [],
            i;
        for (i = 0; i < 5; i += 1) {
            clone[i] = state[i].slice();
        }
        return clone;
    }
    /**
     * Gets the state values for the specified SHA variant
     *
     * @param {string} variant The SHA variant
     * @return {Array<number|Int_64|Array<null>>} The initial state values
     */
    function getNewState(variant) {
        var retVal = [],
            H_trunc, H_full, i;
        if (("SHA-1" === variant) && ((1 & SUPPORTED_ALGS) !== 0)) {
            retVal = [
                0x67452301, 0xefcdab89, 0x98badcfe, 0x10325476, 0xc3d2e1f0
            ];
        } else if ((variant.lastIndexOf("SHA-", 0) === 0) && ((6 & SUPPORTED_ALGS) !== 0)) {
            H_trunc = [
                0xc1059ed8, 0x367cd507, 0x3070dd17, 0xf70e5939,
                0xffc00b31, 0x68581511, 0x64f98fa7, 0xbefa4fa4
            ];
            H_full = [
                0x6A09E667, 0xBB67AE85, 0x3C6EF372, 0xA54FF53A,
                0x510E527F, 0x9B05688C, 0x1F83D9AB, 0x5BE0CD19
            ];
            switch (variant) {
                case "SHA-224":
                    retVal = H_trunc;
                    break;
                case "SHA-256":
                    retVal = H_full;
                    break;
                case "SHA-384":
                    retVal = [
                        new Int_64(0xcbbb9d5d, H_trunc[0]),
                        new Int_64(0x0629a292a, H_trunc[1]),
                        new Int_64(0x9159015a, H_trunc[2]),
                        new Int_64(0x0152fecd8, H_trunc[3]),
                        new Int_64(0x67332667, H_trunc[4]),
                        new Int_64(0x98eb44a87, H_trunc[5]),
                        new Int_64(0xdb0c2e0d, H_trunc[6]),
                        new Int_64(0x047b5481d, H_trunc[7])
                    ];
                    break;
                case "SHA-512":
                    retVal = [
                        new Int_64(H_full[0], 0xf3bcc908),
                        new Int_64(H_full[1], 0x84caa73b),
                        new Int_64(H_full[2], 0xfe94f82b),
                        new Int_64(H_full[3], 0x5f1d36f1),
                        new Int_64(H_full[4], 0xade682d1),
                        new Int_64(H_full[5], 0x2b3e6c1f),
                        new Int_64(H_full[6], 0xfb41bd6b),
                        new Int_64(H_full[7], 0x137e2179)
                    ];
                    break;
                default:
                    throw new Error("Unknown SHA variant");
            }
        } else if (((variant.lastIndexOf("SHA3-", 0) === 0) || (variant.lastIndexOf("SHAKE", 0) === 0)) &&
            ((8 & SUPPORTED_ALGS) !== 0)) {
            for (i = 0; i < 5; i += 1) {
                retVal[i] = [new Int_64(0, 0), new Int_64(0, 0), new Int_64(0, 0), new Int_64(0, 0), new Int_64(0, 0)];
            }
        } else {
            throw new Error("No SHA variants supported");
        }
        return retVal;
    }
    /**
     * Performs a round of SHA-1 hashing over a 512-byte block
     *
     * @private
     * @param {Array<number>} block The binary array representation of the
     *   block to hash
     * @param {Array<number>} H The intermediate H values from a previous
     *   round
     * @return {Array<number>} The resulting H values
     */
    function roundSHA1(block, H) {
        var W = [],
            a, b, c, d, e, T, ch = ch_32,
            parity = parity_32,
            maj = maj_32,
            rotl = rotl_32,
            safeAdd_2 = safeAdd_32_2,
            t, safeAdd_5 = safeAdd_32_5;
        a = H[0];
        b = H[1];
        c = H[2];
        d = H[3];
        e = H[4];
        for (t = 0; t < 80; t += 1) {
            if (t < 16) {
                W[t] = block[t];
            } else {
                W[t] = rotl(W[t - 3] ^ W[t - 8] ^ W[t - 14] ^ W[t - 16], 1);
            }
            if (t < 20) {
                T = safeAdd_5(rotl(a, 5), ch(b, c, d), e, 0x5a827999, W[t]);
            } else if (t < 40) {
                T = safeAdd_5(rotl(a, 5), parity(b, c, d), e, 0x6ed9eba1, W[t]);
            } else if (t < 60) {
                T = safeAdd_5(rotl(a, 5), maj(b, c, d), e, 0x8f1bbcdc, W[t]);
            } else {
                T = safeAdd_5(rotl(a, 5), parity(b, c, d), e, 0xca62c1d6, W[t]);
            }
            e = d;
            d = c;
            c = rotl(b, 30);
            b = a;
            a = T;
        }
        H[0] = safeAdd_2(a, H[0]);
        H[1] = safeAdd_2(b, H[1]);
        H[2] = safeAdd_2(c, H[2]);
        H[3] = safeAdd_2(d, H[3]);
        H[4] = safeAdd_2(e, H[4]);
        return H;
    }
    /**
     * Finalizes the SHA-1 hash
     *
     * @private
     * @param {Array<number>} remainder Any leftover unprocessed packed ints
     *   that still need to be processed
     * @param {number} remainderBinLen The number of bits in remainder
     * @param {number} processedBinLen The number of bits already
     *   processed
     * @param {Array<number>} H The intermediate H values from a previous
     *   round
     * @param {number} outputLen Unused for this variant
     * @return {Array<number>} The array of integers representing the SHA-1
     *   hash of message
     */
    function finalizeSHA1(remainder, remainderBinLen, processedBinLen, H, outputLen) {
        var i, appendedMessageLength, offset, totalLen;
        /* The 65 addition is a hack but it works.  The correct number is
           actually 72 (64 + 8) but the below math fails if
           remainderBinLen + 72 % 512 = 0. Since remainderBinLen % 8 = 0,
           "shorting" the addition is OK. */
        offset = (((remainderBinLen + 65) >>> 9) << 4) + 15;
        while (remainder.length <= offset) {
            remainder.push(0);
        }
        /* Append '1' at the end of the binary string */
        remainder[remainderBinLen >>> 5] |= 0x80 << (24 - (remainderBinLen % 32));
        /* Append length of binary string in the position such that the new
         * length is a multiple of 512.  Logic does not work for even multiples
         * of 512 but there can never be even multiples of 512. JavaScript
         * numbers are limited to 2^53 so it's "safe" to treat the totalLen as
         * a 64-bit integer. */
        totalLen = remainderBinLen + processedBinLen;
        remainder[offset] = totalLen & 0xFFFFFFFF;
        /* Bitwise operators treat the operand as a 32-bit number so need to
         * use hacky division and round to get access to upper 32-ish bits */
        remainder[offset - 1] = (totalLen / TWO_PWR_32) | 0;
        appendedMessageLength = remainder.length;
        /* This will always be at least 1 full chunk */
        for (i = 0; i < appendedMessageLength; i += 16) {
            H = roundSHA1(remainder.slice(i, i + 16), H);
        }
        return H;
    }
    /* Put this here so the K arrays aren't put on the stack for every block */
    var K_sha2, K_sha512, r_sha3, rc_sha3;
    if ((6 & SUPPORTED_ALGS) !== 0) {
        K_sha2 = [
            0x428A2F98, 0x71374491, 0xB5C0FBCF, 0xE9B5DBA5,
            0x3956C25B, 0x59F111F1, 0x923F82A4, 0xAB1C5ED5,
            0xD807AA98, 0x12835B01, 0x243185BE, 0x550C7DC3,
            0x72BE5D74, 0x80DEB1FE, 0x9BDC06A7, 0xC19BF174,
            0xE49B69C1, 0xEFBE4786, 0x0FC19DC6, 0x240CA1CC,
            0x2DE92C6F, 0x4A7484AA, 0x5CB0A9DC, 0x76F988DA,
            0x983E5152, 0xA831C66D, 0xB00327C8, 0xBF597FC7,
            0xC6E00BF3, 0xD5A79147, 0x06CA6351, 0x14292967,
            0x27B70A85, 0x2E1B2138, 0x4D2C6DFC, 0x53380D13,
            0x650A7354, 0x766A0ABB, 0x81C2C92E, 0x92722C85,
            0xA2BFE8A1, 0xA81A664B, 0xC24B8B70, 0xC76C51A3,
            0xD192E819, 0xD6990624, 0xF40E3585, 0x106AA070,
            0x19A4C116, 0x1E376C08, 0x2748774C, 0x34B0BCB5,
            0x391C0CB3, 0x4ED8AA4A, 0x5B9CCA4F, 0x682E6FF3,
            0x748F82EE, 0x78A5636F, 0x84C87814, 0x8CC70208,
            0x90BEFFFA, 0xA4506CEB, 0xBEF9A3F7, 0xC67178F2
        ];
        if ((4 & SUPPORTED_ALGS) !== 0) {
            K_sha512 = [
                new Int_64(K_sha2[0], 0xd728ae22), new Int_64(K_sha2[1], 0x23ef65cd),
                new Int_64(K_sha2[2], 0xec4d3b2f), new Int_64(K_sha2[3], 0x8189dbbc),
                new Int_64(K_sha2[4], 0xf348b538), new Int_64(K_sha2[5], 0xb605d019),
                new Int_64(K_sha2[6], 0xaf194f9b), new Int_64(K_sha2[7], 0xda6d8118),
                new Int_64(K_sha2[8], 0xa3030242), new Int_64(K_sha2[9], 0x45706fbe),
                new Int_64(K_sha2[10], 0x4ee4b28c), new Int_64(K_sha2[11], 0xd5ffb4e2),
                new Int_64(K_sha2[12], 0xf27b896f), new Int_64(K_sha2[13], 0x3b1696b1),
                new Int_64(K_sha2[14], 0x25c71235), new Int_64(K_sha2[15], 0xcf692694),
                new Int_64(K_sha2[16], 0x9ef14ad2), new Int_64(K_sha2[17], 0x384f25e3),
                new Int_64(K_sha2[18], 0x8b8cd5b5), new Int_64(K_sha2[19], 0x77ac9c65),
                new Int_64(K_sha2[20], 0x592b0275), new Int_64(K_sha2[21], 0x6ea6e483),
                new Int_64(K_sha2[22], 0xbd41fbd4), new Int_64(K_sha2[23], 0x831153b5),
                new Int_64(K_sha2[24], 0xee66dfab), new Int_64(K_sha2[25], 0x2db43210),
                new Int_64(K_sha2[26], 0x98fb213f), new Int_64(K_sha2[27], 0xbeef0ee4),
                new Int_64(K_sha2[28], 0x3da88fc2), new Int_64(K_sha2[29], 0x930aa725),
                new Int_64(K_sha2[30], 0xe003826f), new Int_64(K_sha2[31], 0x0a0e6e70),
                new Int_64(K_sha2[32], 0x46d22ffc), new Int_64(K_sha2[33], 0x5c26c926),
                new Int_64(K_sha2[34], 0x5ac42aed), new Int_64(K_sha2[35], 0x9d95b3df),
                new Int_64(K_sha2[36], 0x8baf63de), new Int_64(K_sha2[37], 0x3c77b2a8),
                new Int_64(K_sha2[38], 0x47edaee6), new Int_64(K_sha2[39], 0x1482353b),
                new Int_64(K_sha2[40], 0x4cf10364), new Int_64(K_sha2[41], 0xbc423001),
                new Int_64(K_sha2[42], 0xd0f89791), new Int_64(K_sha2[43], 0x0654be30),
                new Int_64(K_sha2[44], 0xd6ef5218), new Int_64(K_sha2[45], 0x5565a910),
                new Int_64(K_sha2[46], 0x5771202a), new Int_64(K_sha2[47], 0x32bbd1b8),
                new Int_64(K_sha2[48], 0xb8d2d0c8), new Int_64(K_sha2[49], 0x5141ab53),
                new Int_64(K_sha2[50], 0xdf8eeb99), new Int_64(K_sha2[51], 0xe19b48a8),
                new Int_64(K_sha2[52], 0xc5c95a63), new Int_64(K_sha2[53], 0xe3418acb),
                new Int_64(K_sha2[54], 0x7763e373), new Int_64(K_sha2[55], 0xd6b2b8a3),
                new Int_64(K_sha2[56], 0x5defb2fc), new Int_64(K_sha2[57], 0x43172f60),
                new Int_64(K_sha2[58], 0xa1f0ab72), new Int_64(K_sha2[59], 0x1a6439ec),
                new Int_64(K_sha2[60], 0x23631e28), new Int_64(K_sha2[61], 0xde82bde9),
                new Int_64(K_sha2[62], 0xb2c67915), new Int_64(K_sha2[63], 0xe372532b),
                new Int_64(0xca273ece, 0xea26619c), new Int_64(0xd186b8c7, 0x21c0c207),
                new Int_64(0xeada7dd6, 0xcde0eb1e), new Int_64(0xf57d4f7f, 0xee6ed178),
                new Int_64(0x06f067aa, 0x72176fba), new Int_64(0x0a637dc5, 0xa2c898a6),
                new Int_64(0x113f9804, 0xbef90dae), new Int_64(0x1b710b35, 0x131c471b),
                new Int_64(0x28db77f5, 0x23047d84), new Int_64(0x32caab7b, 0x40c72493),
                new Int_64(0x3c9ebe0a, 0x15c9bebc), new Int_64(0x431d67c4, 0x9c100d4c),
                new Int_64(0x4cc5d4be, 0xcb3e42b6), new Int_64(0x597f299c, 0xfc657e2a),
                new Int_64(0x5fcb6fab, 0x3ad6faec), new Int_64(0x6c44198c, 0x4a475817)
            ];
        }
    }
    if ((8 & SUPPORTED_ALGS) !== 0) {
        rc_sha3 = [
            new Int_64(0x00000000, 0x00000001), new Int_64(0x00000000, 0x00008082),
            new Int_64(0x80000000, 0x0000808A), new Int_64(0x80000000, 0x80008000),
            new Int_64(0x00000000, 0x0000808B), new Int_64(0x00000000, 0x80000001),
            new Int_64(0x80000000, 0x80008081), new Int_64(0x80000000, 0x00008009),
            new Int_64(0x00000000, 0x0000008A), new Int_64(0x00000000, 0x00000088),
            new Int_64(0x00000000, 0x80008009), new Int_64(0x00000000, 0x8000000A),
            new Int_64(0x00000000, 0x8000808B), new Int_64(0x80000000, 0x0000008B),
            new Int_64(0x80000000, 0x00008089), new Int_64(0x80000000, 0x00008003),
            new Int_64(0x80000000, 0x00008002), new Int_64(0x80000000, 0x00000080),
            new Int_64(0x00000000, 0x0000800A), new Int_64(0x80000000, 0x8000000A),
            new Int_64(0x80000000, 0x80008081), new Int_64(0x80000000, 0x00008080),
            new Int_64(0x00000000, 0x80000001), new Int_64(0x80000000, 0x80008008)
        ];
        r_sha3 = [
            [0, 36, 3, 41, 18],
            [1, 44, 10, 45, 2],
            [62, 6, 43, 15, 61],
            [28, 55, 25, 21, 56],
            [27, 20, 39, 8, 14]
        ];
    }
    /**
     * Performs a round of SHA-2 hashing over a block
     *
     * @private
     * @param {Array<number>} block The binary array representation of the
     *   block to hash
     * @param {Array<number|Int_64>} H The intermediate H values from a previous
     *   round
     * @param {string} variant The desired SHA-2 variant
     * @return {Array<number|Int_64>} The resulting H values
     */
    function roundSHA2(block, H, variant) {
        var a, b, c, d, e, f, g, h, T1, T2, numRounds, t, binaryStringMult, safeAdd_2, safeAdd_4, safeAdd_5, gamma0, gamma1, sigma0, sigma1, ch, maj, Int, W = [],
            int1, int2, offset, K;
        /* Set up the various function handles and variable for the specific
         * variant */
        if ((variant === "SHA-224" || variant === "SHA-256") &&
            ((2 & SUPPORTED_ALGS) !== 0)) {
            /* 32-bit variant */
            numRounds = 64;
            binaryStringMult = 1;
            Int = Number;
            safeAdd_2 = safeAdd_32_2;
            safeAdd_4 = safeAdd_32_4;
            safeAdd_5 = safeAdd_32_5;
            gamma0 = gamma0_32;
            gamma1 = gamma1_32;
            sigma0 = sigma0_32;
            sigma1 = sigma1_32;
            maj = maj_32;
            ch = ch_32;
            K = K_sha2;
        } else if ((variant === "SHA-384" || variant === "SHA-512") &&
            ((4 & SUPPORTED_ALGS) !== 0)) {
            /* 64-bit variant */
            numRounds = 80;
            binaryStringMult = 2;
            Int = Int_64;
            safeAdd_2 = safeAdd_64_2;
            safeAdd_4 = safeAdd_64_4;
            safeAdd_5 = safeAdd_64_5;
            gamma0 = gamma0_64;
            gamma1 = gamma1_64;
            sigma0 = sigma0_64;
            sigma1 = sigma1_64;
            maj = maj_64;
            ch = ch_64;
            K = K_sha512;
        } else {
            throw new Error("Unexpected error in SHA-2 implementation");
        }
        a = H[0];
        b = H[1];
        c = H[2];
        d = H[3];
        e = H[4];
        f = H[5];
        g = H[6];
        h = H[7];
        for (t = 0; t < numRounds; t += 1) {
            if (t < 16) {
                offset = t * binaryStringMult;
                int1 = (block.length <= offset) ? 0 : block[offset];
                int2 = (block.length <= offset + 1) ? 0 : block[offset + 1];
                /* Bit of a hack - for 32-bit, the second term is ignored */
                W[t] = new Int(int1, int2);
            } else {
                W[t] = safeAdd_4(gamma1(W[t - 2]), W[t - 7], gamma0(W[t - 15]), W[t - 16]);
            }
            T1 = safeAdd_5(h, sigma1(e), ch(e, f, g), K[t], W[t]);
            T2 = safeAdd_2(sigma0(a), maj(a, b, c));
            h = g;
            g = f;
            f = e;
            e = safeAdd_2(d, T1);
            d = c;
            c = b;
            b = a;
            a = safeAdd_2(T1, T2);
        }
        H[0] = safeAdd_2(a, H[0]);
        H[1] = safeAdd_2(b, H[1]);
        H[2] = safeAdd_2(c, H[2]);
        H[3] = safeAdd_2(d, H[3]);
        H[4] = safeAdd_2(e, H[4]);
        H[5] = safeAdd_2(f, H[5]);
        H[6] = safeAdd_2(g, H[6]);
        H[7] = safeAdd_2(h, H[7]);
        return H;
    }
    /**
     * Finalizes the SHA-2 hash
     *
     * @private
     * @param {Array<number>} remainder Any leftover unprocessed packed ints
     *   that still need to be processed
     * @param {number} remainderBinLen The number of bits in remainder
     * @param {number} processedBinLen The number of bits already
     *   processed
     * @param {Array<number|Int_64>} H The intermediate H values from a previous
     *   round
     * @param {string} variant The desired SHA-2 variant
     * @param {number} outputLen Unused for this variant
     * @return {Array<number>} The array of integers representing the SHA-2
     *   hash of message
     */
    function finalizeSHA2(remainder, remainderBinLen, processedBinLen, H, variant, outputLen) {
        var i, appendedMessageLength, offset, retVal, binaryStringInc, totalLen;
        if ((variant === "SHA-224" || variant === "SHA-256") &&
            ((2 & SUPPORTED_ALGS) !== 0)) {
            /* 32-bit variant */
            /* The 65 addition is a hack but it works.  The correct number is
               actually 72 (64 + 8) but the below math fails if
               remainderBinLen + 72 % 512 = 0. Since remainderBinLen % 8 = 0,
               "shorting" the addition is OK. */
            offset = (((remainderBinLen + 65) >>> 9) << 4) + 15;
            binaryStringInc = 16;
        } else if ((variant === "SHA-384" || variant === "SHA-512") &&
            ((4 & SUPPORTED_ALGS) !== 0)) {
            /* 64-bit variant */
            /* The 129 addition is a hack but it works.  The correct number is
               actually 136 (128 + 8) but the below math fails if
               remainderBinLen + 136 % 1024 = 0. Since remainderBinLen % 8 = 0,
               "shorting" the addition is OK. */
            offset = (((remainderBinLen + 129) >>> 10) << 5) + 31;
            binaryStringInc = 32;
        } else {
            throw new Error("Unexpected error in SHA-2 implementation");
        }
        while (remainder.length <= offset) {
            remainder.push(0);
        }
        /* Append '1' at the end of the binary string */
        remainder[remainderBinLen >>> 5] |= 0x80 << (24 - remainderBinLen % 32);
        /* Append length of binary string in the position such that the new
         * length is correct. JavaScript numbers are limited to 2^53 so it's
         * "safe" to treat the totalLen as a 64-bit integer. */
        totalLen = remainderBinLen + processedBinLen;
        remainder[offset] = totalLen & 0xFFFFFFFF;
        /* Bitwise operators treat the operand as a 32-bit number so need to
         * use hacky division and round to get access to upper 32-ish bits */
        remainder[offset - 1] = (totalLen / TWO_PWR_32) | 0;
        appendedMessageLength = remainder.length;
        /* This will always be at least 1 full chunk */
        for (i = 0; i < appendedMessageLength; i += binaryStringInc) {
            H = roundSHA2(remainder.slice(i, i + binaryStringInc), H, variant);
        }
        if (("SHA-224" === variant) && ((2 & SUPPORTED_ALGS) !== 0)) {
            retVal = [
                H[0], H[1], H[2], H[3],
                H[4], H[5], H[6]
            ];
        } else if (("SHA-256" === variant) && ((2 & SUPPORTED_ALGS) !== 0)) {
            retVal = H;
        } else if (("SHA-384" === variant) && ((4 & SUPPORTED_ALGS) !== 0)) {
            retVal = [
                H[0].highOrder, H[0].lowOrder,
                H[1].highOrder, H[1].lowOrder,
                H[2].highOrder, H[2].lowOrder,
                H[3].highOrder, H[3].lowOrder,
                H[4].highOrder, H[4].lowOrder,
                H[5].highOrder, H[5].lowOrder
            ];
        } else if (("SHA-512" === variant) && ((4 & SUPPORTED_ALGS) !== 0)) {
            retVal = [
                H[0].highOrder, H[0].lowOrder,
                H[1].highOrder, H[1].lowOrder,
                H[2].highOrder, H[2].lowOrder,
                H[3].highOrder, H[3].lowOrder,
                H[4].highOrder, H[4].lowOrder,
                H[5].highOrder, H[5].lowOrder,
                H[6].highOrder, H[6].lowOrder,
                H[7].highOrder, H[7].lowOrder
            ];
        } else /* This should never be reached */ {
            throw new Error("Unexpected error in SHA-2 implementation");
        }
        return retVal;
    }
    /**
     * Performs a round of SHA-3 hashing over a block
     *
     * @private
     * @param {Array<number>|null} block The binary array representation of the
     *   block to hash
     * @param {Array<Array<Int_64>>} state The binary array representation of the
     *   block to hash
     * @return {Array<Array<Int_64>>} The resulting state value
     */
    function roundSHA3(block, state) {
        var round, x, y, B, C = [],
            D = [];
        if (null !== block) {
            for (x = 0; x < block.length; x += 2) {
                state[(x >>> 1) % 5][((x >>> 1) / 5) | 0] = xor_64_2(state[(x >>> 1) % 5][((x >>> 1) / 5) | 0], new Int_64(block[x + 1], block[x]));
            }
        }
        for (round = 0; round < 24; round += 1) {
            /* getNewState doesn't care about variant beyond SHA3 so feed it a
               value that triggers the getNewState "if" statement
            */
            B = getNewState("SHA3-");
            /* Perform theta step */
            for (x = 0; x < 5; x += 1) {
                C[x] = xor_64_5(state[x][0], state[x][1], state[x][2], state[x][3], state[x][4]);
            }
            for (x = 0; x < 5; x += 1) {
                D[x] = xor_64_2(C[(x + 4) % 5], rotl_64(C[(x + 1) % 5], 1));
            }
            for (x = 0; x < 5; x += 1) {
                for (y = 0; y < 5; y += 1) {
                    state[x][y] = xor_64_2(state[x][y], D[x]);
                }
            }
            /* Perform combined ro and pi steps */
            for (x = 0; x < 5; x += 1) {
                for (y = 0; y < 5; y += 1) {
                    B[y][(2 * x + 3 * y) % 5] = rotl_64(state[x][y], r_sha3[x][y]);
                }
            }
            /* Perform chi step */
            for (x = 0; x < 5; x += 1) {
                for (y = 0; y < 5; y += 1) {
                    state[x][y] = xor_64_2(B[x][y], new Int_64(~(B[(x + 1) % 5][y].highOrder) & B[(x + 2) % 5][y].highOrder, ~(B[(x + 1) % 5][y].lowOrder) & B[(x + 2) % 5][y].lowOrder));
                }
            }
            /* Perform iota step */
            state[0][0] = xor_64_2(state[0][0], rc_sha3[round]);
        }
        return state;
    }
    /**
     * Finalizes the SHA-3 hash
     *
     * @private
     * @param {Array<number>} remainder Any leftover unprocessed packed ints
     *   that still need to be processed
     * @param {number} remainderBinLen The number of bits in remainder
     * @param {number} processedBinLen The number of bits already
     *   processed
     * @param {Array<Array<Int_64>>} state The state from a previous round
     * @param {number} blockSize The block size/rate of the variant in bits
     * @param {number} delimiter The delimiter value for the variant
     * @param {number} outputLen The output length for the variant in bits
     * @return {Array<number>} The array of integers representing the SHA-3
     *   hash of message
     */
    function finalizeSHA3(remainder, remainderBinLen, processedBinLen, state, blockSize, delimiter, outputLen) {
        var i, retVal = [],
            binaryStringInc = blockSize >>> 5,
            state_offset = 0,
            remainderIntLen = remainderBinLen >>> 5,
            temp;
        /* Process as many blocks as possible, some may be here for multiple rounds
           with SHAKE
        */
        for (i = 0; i < remainderIntLen && remainderBinLen >= blockSize; i += binaryStringInc) {
            state = roundSHA3(remainder.slice(i, i + binaryStringInc), state);
            remainderBinLen -= blockSize;
        }
        remainder = remainder.slice(i);
        remainderBinLen = remainderBinLen % blockSize;
        /* Pad out the remainder to a full block */
        while (remainder.length < binaryStringInc) {
            remainder.push(0);
        }
        /* Find the next "empty" byte for the 0x80 and append it via an xor */
        i = remainderBinLen >>> 3;
        remainder[i >> 2] ^= delimiter << (8 * (i % 4));
        remainder[binaryStringInc - 1] ^= 0x80000000;
        state = roundSHA3(remainder, state);
        while (retVal.length * 32 < outputLen) {
            temp = state[state_offset % 5][(state_offset / 5) | 0];
            retVal.push(temp.lowOrder);
            if (retVal.length * 32 >= outputLen) {
                break;
            }
            retVal.push(temp.highOrder);
            state_offset += 1;
            if (0 === ((state_offset * 64) % blockSize)) {
                roundSHA3(null, state);
            }
        }
        return retVal;
    }
    /**
     * jsSHA is the workhorse of the library.  Instantiate it with the string to
     * be hashed as the parameter
     *
     * @constructor
     * @this {jsSHA}
     * @param {string} variant The desired SHA variant (SHA-1, SHA-224, SHA-256,
     *   SHA-384, SHA-512, SHA3-224, SHA3-256, SHA3-384, or SHA3-512)
     * @param {string} inputFormat The format of srcString: HEX, TEXT, B64,
     *   BYTES, or ARRAYBUFFER
     * @param {{encoding: (string|undefined), numRounds: (number|undefined)}=}
     *   options Optional values
     */
    var jsSHA = function(variant, inputFormat, options) {
        var processedLen = 0,
            remainder = [],
            remainderLen = 0,
            utfType, intermediateState, converterFunc, shaVariant = variant,
            outputBinLen, variantBlockSize, roundFunc, finalizeFunc, stateCloneFunc, hmacKeySet = false,
            keyWithIPad = [],
            keyWithOPad = [],
            numRounds, updatedCalled = false,
            inputOptions, isSHAKE = false,
            bigEndianMod = -1;
        inputOptions = options || {};
        utfType = inputOptions["encoding"] || "UTF8";
        numRounds = inputOptions["numRounds"] || 1;
        if ((numRounds !== parseInt(numRounds, 10)) || (1 > numRounds)) {
            throw new Error("numRounds must a integer >= 1");
        }
        if (("SHA-1" === shaVariant) && ((1 & SUPPORTED_ALGS) !== 0)) {
            variantBlockSize = 512;
            roundFunc = roundSHA1;
            finalizeFunc = finalizeSHA1;
            outputBinLen = 160;
            stateCloneFunc = function(state) {
                return state.slice();
            };
        } else if ((shaVariant.lastIndexOf("SHA-", 0) === 0) && ((6 & SUPPORTED_ALGS) !== 0)) {
            roundFunc = function(block, H) {
                return roundSHA2(block, H, shaVariant);
            };
            finalizeFunc = function(remainder, remainderBinLen, processedBinLen, H, outputLen) {
                return finalizeSHA2(remainder, remainderBinLen, processedBinLen, H, shaVariant, outputLen);
            };
            stateCloneFunc = function(state) {
                return state.slice();
            };
            if (("SHA-224" === shaVariant) && ((2 & SUPPORTED_ALGS) !== 0)) {
                variantBlockSize = 512;
                outputBinLen = 224;
            } else if (("SHA-256" === shaVariant) && ((2 & SUPPORTED_ALGS) !== 0)) {
                variantBlockSize = 512;
                outputBinLen = 256;
            } else if (("SHA-384" === shaVariant) && ((4 & SUPPORTED_ALGS) !== 0)) {
                variantBlockSize = 1024;
                outputBinLen = 384;
            } else if (("SHA-512" === shaVariant) && ((4 & SUPPORTED_ALGS) !== 0)) {
                variantBlockSize = 1024;
                outputBinLen = 512;
            } else {
                throw new Error("Chosen SHA variant is not supported");
            }
        } else if (((shaVariant.lastIndexOf("SHA3-", 0) === 0) || (shaVariant.lastIndexOf("SHAKE", 0) === 0)) &&
            ((8 & SUPPORTED_ALGS) !== 0)) {
            var delimiter = 0x06;
            roundFunc = roundSHA3;
            stateCloneFunc = function(state) {
                return cloneSHA3State(state);
            };
            bigEndianMod = 1;
            if ("SHA3-224" === shaVariant) {
                variantBlockSize = 1152;
                outputBinLen = 224;
            } else if ("SHA3-256" === shaVariant) {
                variantBlockSize = 1088;
                outputBinLen = 256;
            } else if ("SHA3-384" === shaVariant) {
                variantBlockSize = 832;
                outputBinLen = 384;
            } else if ("SHA3-512" === shaVariant) {
                variantBlockSize = 576;
                outputBinLen = 512;
            } else if ("SHAKE128" === shaVariant) {
                variantBlockSize = 1344;
                outputBinLen = -1;
                delimiter = 0x1F;
                isSHAKE = true;
            } else if ("SHAKE256" === shaVariant) {
                variantBlockSize = 1088;
                outputBinLen = -1;
                delimiter = 0x1F;
                isSHAKE = true;
            } else {
                throw new Error("Chosen SHA variant is not supported");
            }
            finalizeFunc = function(remainder, remainderBinLen, processedBinLen, state, outputLen) {
                return finalizeSHA3(remainder, remainderBinLen, processedBinLen, state, variantBlockSize, delimiter, outputLen);
            };
        } else {
            throw new Error("Chosen SHA variant is not supported");
        }
        converterFunc = getStrConverter(inputFormat, utfType, bigEndianMod);
        intermediateState = getNewState(shaVariant);
        /**
         * Sets the HMAC key for an eventual getHMAC call.  Must be called
         * immediately after jsSHA object instantiation
         *
         * @expose
         * @param {string|ArrayBuffer} key The key used to calculate the HMAC
         * @param {string} inputFormat The format of key, HEX, TEXT, B64, BYTES,
         *   or ARRAYBUFFER
         * @param {{encoding : (string|undefined)}=} options Associative array
         *   of input format options
         */
        this.setHMACKey = function(key, inputFormat, options) {
            var keyConverterFunc, convertRet, keyBinLen, keyToUse, blockByteSize, i, lastArrayIndex, keyOptions;
            if (true === hmacKeySet) {
                throw new Error("HMAC key already set");
            }
            if (true === updatedCalled) {
                throw new Error("Cannot set HMAC key after calling update");
            }
            if ((isSHAKE === true) && ((8 & SUPPORTED_ALGS) !== 0)) {
                throw new Error("SHAKE is not supported for HMAC");
            }
            keyOptions = options || {};
            utfType = keyOptions["encoding"] || "UTF8";
            keyConverterFunc = getStrConverter(inputFormat, utfType, bigEndianMod);
            convertRet = keyConverterFunc(key);
            keyBinLen = convertRet["binLen"];
            keyToUse = convertRet["value"];
            blockByteSize = variantBlockSize >>> 3;
            /* These are used multiple times, calculate and store them */
            lastArrayIndex = (blockByteSize / 4) - 1;
            /* Figure out what to do with the key based on its size relative to
             * the hash's block size */
            if (blockByteSize < (keyBinLen / 8)) {
                keyToUse = finalizeFunc(keyToUse, keyBinLen, 0, getNewState(shaVariant), outputBinLen);
                /* For all variants, the block size is bigger than the output
                 * size so there will never be a useful byte at the end of the
                 * string */
                while (keyToUse.length <= lastArrayIndex) {
                    keyToUse.push(0);
                }
                keyToUse[lastArrayIndex] &= 0xFFFFFF00;
            } else if (blockByteSize > (keyBinLen / 8)) {
                /* If the blockByteSize is greater than the key length, there
                 * will always be at LEAST one "useless" byte at the end of the
                 * string */
                while (keyToUse.length <= lastArrayIndex) {
                    keyToUse.push(0);
                }
                keyToUse[lastArrayIndex] &= 0xFFFFFF00;
            }
            /* Create ipad and opad */
            for (i = 0; i <= lastArrayIndex; i += 1) {
                keyWithIPad[i] = keyToUse[i] ^ 0x36363636;
                keyWithOPad[i] = keyToUse[i] ^ 0x5C5C5C5C;
            }
            intermediateState = roundFunc(keyWithIPad, intermediateState);
            processedLen = variantBlockSize;
            hmacKeySet = true;
        };
        /**
         * Takes strString and hashes as many blocks as possible.  Stores the
         * rest for either a future update or getHash call.
         *
         * @expose
         * @param {string|ArrayBuffer} srcString The string to be hashed
         */
        this.update = function(srcString) {
            var convertRet, chunkBinLen, chunkIntLen, chunk, i, updateProcessedLen = 0,
                variantBlockIntInc = variantBlockSize >>> 5;
            convertRet = converterFunc(srcString, remainder, remainderLen);
            chunkBinLen = convertRet["binLen"];
            chunk = convertRet["value"];
            chunkIntLen = chunkBinLen >>> 5;
            for (i = 0; i < chunkIntLen; i += variantBlockIntInc) {
                if (updateProcessedLen + variantBlockSize <= chunkBinLen) {
                    intermediateState = roundFunc(chunk.slice(i, i + variantBlockIntInc), intermediateState);
                    updateProcessedLen += variantBlockSize;
                }
            }
            processedLen += updateProcessedLen;
            remainder = chunk.slice(updateProcessedLen >>> 5);
            remainderLen = chunkBinLen % variantBlockSize;
            updatedCalled = true;
        };
        /**
         * Returns the desired SHA hash of the string specified at instantiation
         * using the specified parameters
         *
         * @expose
         * @param {string} format The desired output formatting (B64, HEX,
         *   BYTES, or ARRAYBUFFER)
         * @param {{outputUpper : (boolean|undefined), b64Pad : (string|undefined),
         *   shakeLen : (number|undefined)}=} options Hash list of output formatting options
         * @return {string|ArrayBuffer} The string representation of the hash
         *   in the format specified.
         */
        this.getHash = function(format, options) {
            var formatFunc, i, outputOptions, finalizedState;
            if (true === hmacKeySet) {
                throw new Error("Cannot call getHash after setting HMAC key");
            }
            outputOptions = getOutputOpts(options);
            if ((isSHAKE === true) && ((8 & SUPPORTED_ALGS) !== 0)) {
                if (outputOptions["shakeLen"] === -1) {
                    throw new Error("shakeLen must be specified in options");
                }
                outputBinLen = outputOptions["shakeLen"];
            }
            /* Validate the output format selection */
            switch (format) {
                case "HEX":
                    formatFunc = function(binarray) {
                        return packed2hex(binarray, outputBinLen, bigEndianMod, outputOptions);
                    };
                    break;
                case "B64":
                    formatFunc = function(binarray) {
                        return packed2b64(binarray, outputBinLen, bigEndianMod, outputOptions);
                    };
                    break;
                case "BYTES":
                    formatFunc = function(binarray) {
                        return packed2bytes(binarray, outputBinLen, bigEndianMod);
                    };
                    break;
                case "ARRAYBUFFER":
                    try {
                        i = new ArrayBuffer(0);
                    } catch (ignore) {
                        throw new Error("ARRAYBUFFER not supported by this environment");
                    }
                    formatFunc = function(binarray) {
                        return packed2arraybuffer(binarray, outputBinLen, bigEndianMod);
                    };
                    break;
                default:
                    throw new Error("format must be HEX, B64, BYTES, or ARRAYBUFFER");
            }
            finalizedState = finalizeFunc(remainder.slice(), remainderLen, processedLen, stateCloneFunc(intermediateState), outputBinLen);
            for (i = 1; i < numRounds; i += 1) {
                /* This weird fix-up is only for the case of SHAKE algorithms
                 * and outputBinLen is not a multiple of 32.  In this case, the
                 * very last block of finalizedState has data that needs to be
                 * ignored because all the finalizeFunc calls need to have
                 * unneeded bits set to 0.
                 */
                if (((8 & SUPPORTED_ALGS) !== 0) && (isSHAKE === true) && (outputBinLen % 32 !== 0)) {
                    finalizedState[finalizedState.length - 1] &= 0x00FFFFFF >>> 24 - (outputBinLen % 32);
                }
                finalizedState = finalizeFunc(finalizedState, outputBinLen, 0, getNewState(shaVariant), outputBinLen);
            }
            return formatFunc(finalizedState);
        };
        /**
         * Returns the the HMAC in the specified format using the key given by
         * a previous setHMACKey call.
         *
         * @expose
         * @param {string} format The desired output formatting
         *   (B64, HEX, BYTES, or ARRAYBUFFER)
         * @param {{outputUpper : (boolean|undefined), b64Pad : (string|undefined),
         *   shakeLen : (number|undefined)}=} options associative array of output
         *   formatting options
         * @return {string|ArrayBuffer} The string representation of the hash in the
         *   format specified.
         */
        this.getHMAC = function(format, options) {
            var formatFunc, firstHash, outputOptions, finalizedState;
            if (false === hmacKeySet) {
                throw new Error("Cannot call getHMAC without first setting HMAC key");
            }
            outputOptions = getOutputOpts(options);
            /* Validate the output format selection */
            switch (format) {
                case "HEX":
                    formatFunc = function(binarray) {
                        return packed2hex(binarray, outputBinLen, bigEndianMod, outputOptions);
                    };
                    break;
                case "B64":
                    formatFunc = function(binarray) {
                        return packed2b64(binarray, outputBinLen, bigEndianMod, outputOptions);
                    };
                    break;
                case "BYTES":
                    formatFunc = function(binarray) {
                        return packed2bytes(binarray, outputBinLen, bigEndianMod);
                    };
                    break;
                case "ARRAYBUFFER":
                    try {
                        formatFunc = new ArrayBuffer(0);
                    } catch (ignore) {
                        throw new Error("ARRAYBUFFER not supported by this environment");
                    }
                    formatFunc = function(binarray) {
                        return packed2arraybuffer(binarray, outputBinLen, bigEndianMod);
                    };
                    break;
                default:
                    throw new Error("outputFormat must be HEX, B64, BYTES, or ARRAYBUFFER");
            }
            firstHash = finalizeFunc(remainder.slice(), remainderLen, processedLen, stateCloneFunc(intermediateState), outputBinLen);
            finalizedState = roundFunc(keyWithOPad, getNewState(shaVariant));
            finalizedState = finalizeFunc(firstHash, outputBinLen, variantBlockSize, finalizedState, outputBinLen);
            return formatFunc(finalizedState);
        };
    };
    if (("function" === typeof define) && (define["amd"])) /* AMD Support */ {
        define(function() {
            return jsSHA;
        });
    } else if ("undefined" !== typeof exports) /* Node Support */ {
        if (("undefined" !== typeof module) && module["exports"]) {
            module["exports"] = jsSHA;
            exports = jsSHA;
        } else {
            exports = jsSHA;
        }
    } else { /* Browsers and Web Workers*/
        global["jsSHA"] = jsSHA;
    }
}(this));
(function(global) {
    "use strict";
    //var jsSHA = require('jsSHA');
    var CLASS_NAME = 'Coder';
    var CLASS_OBJECT = {
        _keyStr: "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/=",
        hmac_sha1: function(key, data) {
            var shaObj = new jsSHA("SHA-1", "TEXT");
            shaObj.setHMACKey(key, "TEXT");
            shaObj.update(data);
            var sign = shaObj.getHMAC("HEX");
            return sign;
        },
        base64_encode: function(input) {
            var output = "";
            var chr1, chr2, chr3, enc1, enc2, enc3, enc4;
            var i = 0;
            input = this._utf8_encode(input);
            while (i < input.length) {
                chr1 = input.charCodeAt(i++);
                chr2 = input.charCodeAt(i++);
                chr3 = input.charCodeAt(i++);
                enc1 = chr1 >> 2;
                enc2 = ((chr1 & 3) << 4) | (chr2 >> 4);
                enc3 = ((chr2 & 15) << 2) | (chr3 >> 6);
                enc4 = chr3 & 63;
                if (isNaN(chr2)) {
                    enc3 = enc4 = 64;
                } else if (isNaN(chr3)) {
                    enc4 = 64;
                }
                output = output + this._keyStr.charAt(enc1) + this._keyStr.charAt(enc2) + this._keyStr.charAt(enc3) + this._keyStr.charAt(enc4);
            }
            return output;
        },
        // public method for decoding  
        decode: function(input) {
            var output = "";
            var chr1, chr2, chr3;
            var enc1, enc2, enc3, enc4;
            var i = 0;
            input = input.replace(/[^A-Za-z0-9\+\/\=]/g, "");
            while (i < input.length) {
                enc1 = this._keyStr.indexOf(input.charAt(i++));
                enc2 = this._keyStr.indexOf(input.charAt(i++));
                enc3 = this._keyStr.indexOf(input.charAt(i++));
                enc4 = this._keyStr.indexOf(input.charAt(i++));
                chr1 = (enc1 << 2) | (enc2 >> 4);
                chr2 = ((enc2 & 15) << 4) | (enc3 >> 2);
                chr3 = ((enc3 & 3) << 6) | enc4;
                output = output + String.fromCharCode(chr1);
                if (enc3 != 64) {
                    output = output + String.fromCharCode(chr2);
                }
                if (enc4 != 64) {
                    output = output + String.fromCharCode(chr3);
                }
            }
            output = this._utf8_decode(output);
            return output;
        },
        // private method for UTF-8 encoding  
        _utf8_encode: function(string) {
            string = string.replace(/\r\n/g, "\n");
            var utftext = "";
            for (var n = 0; n < string.length; n++) {
                var c = string.charCodeAt(n);
                if (c < 128) {
                    utftext += String.fromCharCode(c);
                } else if ((c > 127) && (c < 2048)) {
                    utftext += String.fromCharCode((c >> 6) | 192);
                    utftext += String.fromCharCode((c & 63) | 128);
                } else {
                    utftext += String.fromCharCode((c >> 12) | 224);
                    utftext += String.fromCharCode(((c >> 6) & 63) | 128);
                    utftext += String.fromCharCode((c & 63) | 128);
                }
            }
            return utftext;
        },
        // private method for UTF-8 decoding  
        _utf8_decode: function(utftext) {
            var string = "";
            var i = 0;
            var c = 0,
                c1 = 0,
                c2 = 0;
            while (i < utftext.length) {
                c = utftext.charCodeAt(i);
                if (c < 128) {
                    string += String.fromCharCode(c);
                    i++;
                } else if ((c > 191) && (c < 224)) {
                    c1 = utftext.charCodeAt(i + 1);
                    string += String.fromCharCode(((c & 31) << 6) | (c1 & 63));
                    i += 2;
                } else {
                    c1 = utftext.charCodeAt(i + 1);
                    c2 = utftext.charCodeAt(i + 2);
                    string += String.fromCharCode(((c & 15) << 12) | ((c1 & 63) << 6) | (c2 & 63));
                    i += 3;
                }
            }
            return string;
        }
    };
    if (("function" === typeof define) && (define["amd"])) /* AMD Support */ {
        define(function() {
            return CLASS_OBJECT;
        });
    } else if ("undefined" !== typeof exports) /* Node Support */ {
        if (("undefined" !== typeof module) && module["exports"]) {
            module["exports"] = CLASS_OBJECT;
            exports = CLASS_OBJECT;
        } else {
            exports = CLASS_OBJECT;
        }
    } else { /* Browsers and Web Workers*/
        global[CLASS_NAME] = CLASS_OBJECT;
    }
}(this));
(function(global, factory) {
    typeof exports === 'object' && typeof module !== 'undefined' ? factory(exports) :
        typeof define === 'function' && define.amd ? define(['exports'], factory) :
        (factory((global.JSEncrypt = {})));
}(this, (function(exports) {
    'use strict';
    var BI_RM = "0123456789abcdefghijklmnopqrstuvwxyz";

    function int2char(n) {
        return BI_RM.charAt(n);
    }
    //#region BIT_OPERATIONS
    // (public) this & a
    function op_and(x, y) {
        return x & y;
    }
    // (public) this | a
    function op_or(x, y) {
        return x | y;
    }
    // (public) this ^ a
    function op_xor(x, y) {
        return x ^ y;
    }
    // (public) this & ~a
    function op_andnot(x, y) {
        return x & ~y;
    }
    // return index of lowest 1-bit in x, x < 2^31
    function lbit(x) {
        if (x == 0) {
            return -1;
        }
        var r = 0;
        if ((x & 0xffff) == 0) {
            x >>= 16;
            r += 16;
        }
        if ((x & 0xff) == 0) {
            x >>= 8;
            r += 8;
        }
        if ((x & 0xf) == 0) {
            x >>= 4;
            r += 4;
        }
        if ((x & 3) == 0) {
            x >>= 2;
            r += 2;
        }
        if ((x & 1) == 0) {
            ++r;
        }
        return r;
    }
    // return number of 1 bits in x
    function cbit(x) {
        var r = 0;
        while (x != 0) {
            x &= x - 1;
            ++r;
        }
        return r;
    }
    //#endregion BIT_OPERATIONS
    var b64map = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
    var b64pad = "=";

    function hex2b64(h) {
        var i;
        var c;
        var ret = "";
        for (i = 0; i + 3 <= h.length; i += 3) {
            c = parseInt(h.substring(i, i + 3), 16);
            ret += b64map.charAt(c >> 6) + b64map.charAt(c & 63);
        }
        if (i + 1 == h.length) {
            c = parseInt(h.substring(i, i + 1), 16);
            ret += b64map.charAt(c << 2);
        } else if (i + 2 == h.length) {
            c = parseInt(h.substring(i, i + 2), 16);
            ret += b64map.charAt(c >> 2) + b64map.charAt((c & 3) << 4);
        }
        while ((ret.length & 3) > 0) {
            ret += b64pad;
        }
        return ret;
    }
    // convert a base64 string to hex
    function b64tohex(s) {
        var ret = "";
        var i;
        var k = 0; // b64 state, 0-3
        var slop = 0;
        for (i = 0; i < s.length; ++i) {
            if (s.charAt(i) == b64pad) {
                break;
            }
            var v = b64map.indexOf(s.charAt(i));
            if (v < 0) {
                continue;
            }
            if (k == 0) {
                ret += int2char(v >> 2);
                slop = v & 3;
                k = 1;
            } else if (k == 1) {
                ret += int2char((slop << 2) | (v >> 4));
                slop = v & 0xf;
                k = 2;
            } else if (k == 2) {
                ret += int2char(slop);
                ret += int2char(v >> 2);
                slop = v & 3;
                k = 3;
            } else {
                ret += int2char((slop << 2) | (v >> 4));
                ret += int2char(v & 0xf);
                k = 0;
            }
        }
        if (k == 1) {
            ret += int2char(slop << 2);
        }
        return ret;
    }
    /*! *****************************************************************************
    Copyright (c) Microsoft Corporation. All rights reserved.
    Licensed under the Apache License, Version 2.0 (the "License"); you may not use
    this file except in compliance with the License. You may obtain a copy of the
    License at http://www.apache.org/licenses/LICENSE-2.0
    
    THIS CODE IS PROVIDED ON AN *AS IS* BASIS, WITHOUT WARRANTIES OR CONDITIONS OF ANY
    KIND, EITHER EXPRESS OR IMPLIED, INCLUDING WITHOUT LIMITATION ANY IMPLIED
    WARRANTIES OR CONDITIONS OF TITLE, FITNESS FOR A PARTICULAR PURPOSE,
    MERCHANTABLITY OR NON-INFRINGEMENT.
    
    See the Apache Version 2.0 License for specific language governing permissions
    and limitations under the License.
    ***************************************************************************** */
    /* global Reflect, Promise */
    var extendStatics = function(d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({
                    __proto__: []
                }
                instanceof Array && function(d, b) {
                    d.__proto__ = b;
                }) ||
            function(d, b) {
                for (var p in b)
                    if (b.hasOwnProperty(p))
                        d[p] = b[p];
            };
        return extendStatics(d, b);
    };

    function __extends(d, b) {
        extendStatics(d, b);

        function __() {
            this.constructor = d;
        }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    }
    // Hex JavaScript decoder
    // Copyright (c) 2008-2013 Lapo Luchini <lapo@lapo.it>
    // Permission to use, copy, modify, and/or distribute this software for any
    // purpose with or without fee is hereby granted, provided that the above
    // copyright notice and this permission notice appear in all copies.
    //
    // THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
    // WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
    // MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
    // ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
    // WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
    // ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
    // OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
    /*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */
    var decoder;
    var Hex = {
        decode: function(a) {
            var i;
            if (decoder === undefined) {
                var hex = "0123456789ABCDEF";
                var ignore = " \f\n\r\t\u00A0\u2028\u2029";
                decoder = {};
                for (i = 0; i < 16; ++i) {
                    decoder[hex.charAt(i)] = i;
                }
                hex = hex.toLowerCase();
                for (i = 10; i < 16; ++i) {
                    decoder[hex.charAt(i)] = i;
                }
                for (i = 0; i < ignore.length; ++i) {
                    decoder[ignore.charAt(i)] = -1;
                }
            }
            var out = [];
            var bits = 0;
            var char_count = 0;
            for (i = 0; i < a.length; ++i) {
                var c = a.charAt(i);
                if (c == "=") {
                    break;
                }
                c = decoder[c];
                if (c == -1) {
                    continue;
                }
                if (c === undefined) {
                    throw new Error("Illegal character at offset " + i);
                }
                bits |= c;
                if (++char_count >= 2) {
                    out[out.length] = bits;
                    bits = 0;
                    char_count = 0;
                } else {
                    bits <<= 4;
                }
            }
            if (char_count) {
                throw new Error("Hex encoding incomplete: 4 bits missing");
            }
            return out;
        }
    };
    // Base64 JavaScript decoder
    // Copyright (c) 2008-2013 Lapo Luchini <lapo@lapo.it>
    // Permission to use, copy, modify, and/or distribute this software for any
    // purpose with or without fee is hereby granted, provided that the above
    // copyright notice and this permission notice appear in all copies.
    //
    // THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
    // WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
    // MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
    // ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
    // WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
    // ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
    // OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
    /*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */
    var decoder$1;
    var Base64 = {
        decode: function(a) {
            var i;
            if (decoder$1 === undefined) {
                var b64 = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789+/";
                var ignore = "= \f\n\r\t\u00A0\u2028\u2029";
                decoder$1 = Object.create(null);
                for (i = 0; i < 64; ++i) {
                    decoder$1[b64.charAt(i)] = i;
                }
                for (i = 0; i < ignore.length; ++i) {
                    decoder$1[ignore.charAt(i)] = -1;
                }
            }
            var out = [];
            var bits = 0;
            var char_count = 0;
            for (i = 0; i < a.length; ++i) {
                var c = a.charAt(i);
                if (c == "=") {
                    break;
                }
                c = decoder$1[c];
                if (c == -1) {
                    continue;
                }
                if (c === undefined) {
                    throw new Error("Illegal character at offset " + i);
                }
                bits |= c;
                if (++char_count >= 4) {
                    out[out.length] = (bits >> 16);
                    out[out.length] = (bits >> 8) & 0xFF;
                    out[out.length] = bits & 0xFF;
                    bits = 0;
                    char_count = 0;
                } else {
                    bits <<= 6;
                }
            }
            switch (char_count) {
                case 1:
                    throw new Error("Base64 encoding incomplete: at least 2 bits missing");
                case 2:
                    out[out.length] = (bits >> 10);
                    break;
                case 3:
                    out[out.length] = (bits >> 16);
                    out[out.length] = (bits >> 8) & 0xFF;
                    break;
            }
            return out;
        },
        re: /-----BEGIN [^-]+-----([A-Za-z0-9+\/=\s]+)-----END [^-]+-----|begin-base64[^\n]+\n([A-Za-z0-9+\/=\s]+)====/,
        unarmor: function(a) {
            var m = Base64.re.exec(a);
            if (m) {
                if (m[1]) {
                    a = m[1];
                } else if (m[2]) {
                    a = m[2];
                } else {
                    throw new Error("RegExp out of sync");
                }
            }
            return Base64.decode(a);
        }
    };
    // Big integer base-10 printing library
    // Copyright (c) 2014 Lapo Luchini <lapo@lapo.it>
    // Permission to use, copy, modify, and/or distribute this software for any
    // purpose with or without fee is hereby granted, provided that the above
    // copyright notice and this permission notice appear in all copies.
    //
    // THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
    // WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
    // MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
    // ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
    // WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
    // ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
    // OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
    /*jshint browser: true, strict: true, immed: true, latedef: true, undef: true, regexdash: false */
    var max = 10000000000000; // biggest integer that can still fit 2^53 when multiplied by 256
    var Int10 = /** @class */ (function() {
        function Int10(value) {
            this.buf = [+value || 0];
        }
        Int10.prototype.mulAdd = function(m, c) {
            // assert(m <= 256)
            var b = this.buf;
            var l = b.length;
            var i;
            var t;
            for (i = 0; i < l; ++i) {
                t = b[i] * m + c;
                if (t < max) {
                    c = 0;
                } else {
                    c = 0 | (t / max);
                    t -= c * max;
                }
                b[i] = t;
            }
            if (c > 0) {
                b[i] = c;
            }
        };
        Int10.prototype.sub = function(c) {
            // assert(m <= 256)
            var b = this.buf;
            var l = b.length;
            var i;
            var t;
            for (i = 0; i < l; ++i) {
                t = b[i] - c;
                if (t < 0) {
                    t += max;
                    c = 1;
                } else {
                    c = 0;
                }
                b[i] = t;
            }
            while (b[b.length - 1] === 0) {
                b.pop();
            }
        };
        Int10.prototype.toString = function(base) {
            if ((base || 10) != 10) {
                throw new Error("only base 10 is supported");
            }
            var b = this.buf;
            var s = b[b.length - 1].toString();
            for (var i = b.length - 2; i >= 0; --i) {
                s += (max + b[i]).toString().substring(1);
            }
            return s;
        };
        Int10.prototype.valueOf = function() {
            var b = this.buf;
            var v = 0;
            for (var i = b.length - 1; i >= 0; --i) {
                v = v * max + b[i];
            }
            return v;
        };
        Int10.prototype.simplify = function() {
            var b = this.buf;
            return (b.length == 1) ? b[0] : this;
        };
        return Int10;
    }());
    // ASN.1 JavaScript decoder
    var ellipsis = "\u2026";
    var reTimeS = /^(\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;
    var reTimeL = /^(\d\d\d\d)(0[1-9]|1[0-2])(0[1-9]|[12]\d|3[01])([01]\d|2[0-3])(?:([0-5]\d)(?:([0-5]\d)(?:[.,](\d{1,3}))?)?)?(Z|[-+](?:[0]\d|1[0-2])([0-5]\d)?)?$/;

    function stringCut(str, len) {
        if (str.length > len) {
            str = str.substring(0, len) + ellipsis;
        }
        return str;
    }
    var Stream = /** @class */ (function() {
        function Stream(enc, pos) {
            this.hexDigits = "0123456789ABCDEF";
            if (enc instanceof Stream) {
                this.enc = enc.enc;
                this.pos = enc.pos;
            } else {
                // enc should be an array or a binary string
                this.enc = enc;
                this.pos = pos;
            }
        }
        Stream.prototype.get = function(pos) {
            if (pos === undefined) {
                pos = this.pos++;
            }
            if (pos >= this.enc.length) {
                throw new Error("Requesting byte offset " + pos + " on a stream of length " + this.enc.length);
            }
            return ("string" === typeof this.enc) ? this.enc.charCodeAt(pos) : this.enc[pos];
        };
        Stream.prototype.hexByte = function(b) {
            return this.hexDigits.charAt((b >> 4) & 0xF) + this.hexDigits.charAt(b & 0xF);
        };
        Stream.prototype.hexDump = function(start, end, raw) {
            var s = "";
            for (var i = start; i < end; ++i) {
                s += this.hexByte(this.get(i));
                if (raw !== true) {
                    switch (i & 0xF) {
                        case 0x7:
                            s += "  ";
                            break;
                        case 0xF:
                            s += "\n";
                            break;
                        default:
                            s += " ";
                    }
                }
            }
            return s;
        };
        Stream.prototype.isASCII = function(start, end) {
            for (var i = start; i < end; ++i) {
                var c = this.get(i);
                if (c < 32 || c > 176) {
                    return false;
                }
            }
            return true;
        };
        Stream.prototype.parseStringISO = function(start, end) {
            var s = "";
            for (var i = start; i < end; ++i) {
                s += String.fromCharCode(this.get(i));
            }
            return s;
        };
        Stream.prototype.parseStringUTF = function(start, end) {
            var s = "";
            for (var i = start; i < end;) {
                var c = this.get(i++);
                if (c < 128) {
                    s += String.fromCharCode(c);
                } else if ((c > 191) && (c < 224)) {
                    s += String.fromCharCode(((c & 0x1F) << 6) | (this.get(i++) & 0x3F));
                } else {
                    s += String.fromCharCode(((c & 0x0F) << 12) | ((this.get(i++) & 0x3F) << 6) | (this.get(i++) & 0x3F));
                }
            }
            return s;
        };
        Stream.prototype.parseStringBMP = function(start, end) {
            var str = "";
            var hi;
            var lo;
            for (var i = start; i < end;) {
                hi = this.get(i++);
                lo = this.get(i++);
                str += String.fromCharCode((hi << 8) | lo);
            }
            return str;
        };
        Stream.prototype.parseTime = function(start, end, shortYear) {
            var s = this.parseStringISO(start, end);
            var m = (shortYear ? reTimeS : reTimeL).exec(s);
            if (!m) {
                return "Unrecognized time: " + s;
            }
            if (shortYear) {
                // to avoid querying the timer, use the fixed range [1970, 2069]
                // it will conform with ITU X.400 [-10, +40] sliding window until 2030
                m[1] = +m[1];
                m[1] += (+m[1] < 70) ? 2000 : 1900;
            }
            s = m[1] + "-" + m[2] + "-" + m[3] + " " + m[4];
            if (m[5]) {
                s += ":" + m[5];
                if (m[6]) {
                    s += ":" + m[6];
                    if (m[7]) {
                        s += "." + m[7];
                    }
                }
            }
            if (m[8]) {
                s += " UTC";
                if (m[8] != "Z") {
                    s += m[8];
                    if (m[9]) {
                        s += ":" + m[9];
                    }
                }
            }
            return s;
        };
        Stream.prototype.parseInteger = function(start, end) {
            var v = this.get(start);
            var neg = (v > 127);
            var pad = neg ? 255 : 0;
            var len;
            var s = "";
            // skip unuseful bits (not allowed in DER)
            while (v == pad && ++start < end) {
                v = this.get(start);
            }
            len = end - start;
            if (len === 0) {
                return neg ? -1 : 0;
            }
            // show bit length of huge integers
            if (len > 4) {
                s = v;
                len <<= 3;
                while (((+s ^ pad) & 0x80) == 0) {
                    s = +s << 1;
                    --len;
                }
                s = "(" + len + " bit)\n";
            }
            // decode the integer
            if (neg) {
                v = v - 256;
            }
            var n = new Int10(v);
            for (var i = start + 1; i < end; ++i) {
                n.mulAdd(256, this.get(i));
            }
            return s + n.toString();
        };
        Stream.prototype.parseBitString = function(start, end, maxLength) {
            var unusedBit = this.get(start);
            var lenBit = ((end - start - 1) << 3) - unusedBit;
            var intro = "(" + lenBit + " bit)\n";
            var s = "";
            for (var i = start + 1; i < end; ++i) {
                var b = this.get(i);
                var skip = (i == end - 1) ? unusedBit : 0;
                for (var j = 7; j >= skip; --j) {
                    s += (b >> j) & 1 ? "1" : "0";
                }
                if (s.length > maxLength) {
                    return intro + stringCut(s, maxLength);
                }
            }
            return intro + s;
        };
        Stream.prototype.parseOctetString = function(start, end, maxLength) {
            if (this.isASCII(start, end)) {
                return stringCut(this.parseStringISO(start, end), maxLength);
            }
            var len = end - start;
            var s = "(" + len + " byte)\n";
            maxLength /= 2; // we work in bytes
            if (len > maxLength) {
                end = start + maxLength;
            }
            for (var i = start; i < end; ++i) {
                s += this.hexByte(this.get(i));
            }
            if (len > maxLength) {
                s += ellipsis;
            }
            return s;
        };
        Stream.prototype.parseOID = function(start, end, maxLength) {
            var s = "";
            var n = new Int10();
            var bits = 0;
            for (var i = start; i < end; ++i) {
                var v = this.get(i);
                n.mulAdd(128, v & 0x7F);
                bits += 7;
                if (!(v & 0x80)) { // finished
                    if (s === "") {
                        n = n.simplify();
                        if (n instanceof Int10) {
                            n.sub(80);
                            s = "2." + n.toString();
                        } else {
                            var m = n < 80 ? n < 40 ? 0 : 1 : 2;
                            s = m + "." + (n - m * 40);
                        }
                    } else {
                        s += "." + n.toString();
                    }
                    if (s.length > maxLength) {
                        return stringCut(s, maxLength);
                    }
                    n = new Int10();
                    bits = 0;
                }
            }
            if (bits > 0) {
                s += ".incomplete";
            }
            return s;
        };
        return Stream;
    }());
    var ASN1 = (function() {
        function ASN1(stream, header, length, tag, sub) {
            if (!(tag instanceof ASN1Tag)) {
                throw new Error("Invalid tag value.");
            }
            this.stream = stream;
            this.header = header;
            this.length = length;
            this.tag = tag;
            this.sub = sub;
        }
        ASN1.prototype.typeName = function() {
            switch (this.tag.tagClass) {
                case 0: // universal
                    switch (this.tag.tagNumber) {
                        case 0x00:
                            return "EOC";
                        case 0x01:
                            return "BOOLEAN";
                        case 0x02:
                            return "INTEGER";
                        case 0x03:
                            return "BIT_STRING";
                        case 0x04:
                            return "OCTET_STRING";
                        case 0x05:
                            return "NULL";
                        case 0x06:
                            return "OBJECT_IDENTIFIER";
                        case 0x07:
                            return "ObjectDescriptor";
                        case 0x08:
                            return "EXTERNAL";
                        case 0x09:
                            return "REAL";
                        case 0x0A:
                            return "ENUMERATED";
                        case 0x0B:
                            return "EMBEDDED_PDV";
                        case 0x0C:
                            return "UTF8String";
                        case 0x10:
                            return "SEQUENCE";
                        case 0x11:
                            return "SET";
                        case 0x12:
                            return "NumericString";
                        case 0x13:
                            return "PrintableString"; // ASCII subset
                        case 0x14:
                            return "TeletexString"; // aka T61String
                        case 0x15:
                            return "VideotexString";
                        case 0x16:
                            return "IA5String"; // ASCII
                        case 0x17:
                            return "UTCTime";
                        case 0x18:
                            return "GeneralizedTime";
                        case 0x19:
                            return "GraphicString";
                        case 0x1A:
                            return "VisibleString"; // ASCII subset
                        case 0x1B:
                            return "GeneralString";
                        case 0x1C:
                            return "UniversalString";
                        case 0x1E:
                            return "BMPString";
                    }
                    return "Universal_" + this.tag.tagNumber.toString();
                case 1:
                    return "Application_" + this.tag.tagNumber.toString();
                case 2:
                    return "[" + this.tag.tagNumber.toString() + "]"; // Context
                case 3:
                    return "Private_" + this.tag.tagNumber.toString();
            }
        };
        ASN1.prototype.content = function(maxLength) {
            if (this.tag === undefined) {
                return null;
            }
            if (maxLength === undefined) {
                maxLength = Infinity;
            }
            var content = this.posContent();
            var len = Math.abs(this.length);
            if (!this.tag.isUniversal()) {
                if (this.sub !== null) {
                    return "(" + this.sub.length + " elem)";
                }
                return this.stream.parseOctetString(content, content + len, maxLength);
            }
            switch (this.tag.tagNumber) {
                case 0x01: // BOOLEAN
                    return (this.stream.get(content) === 0) ? "false" : "true";
                case 0x02: // INTEGER
                    return this.stream.parseInteger(content, content + len);
                case 0x03: // BIT_STRING
                    return this.sub ? "(" + this.sub.length + " elem)" :
                        this.stream.parseBitString(content, content + len, maxLength);
                case 0x04: // OCTET_STRING
                    return this.sub ? "(" + this.sub.length + " elem)" :
                        this.stream.parseOctetString(content, content + len, maxLength);
                    // case 0x05: // NULL
                case 0x06: // OBJECT_IDENTIFIER
                    return this.stream.parseOID(content, content + len, maxLength);
                    // case 0x07: // ObjectDescriptor
                    // case 0x08: // EXTERNAL
                    // case 0x09: // REAL
                    // case 0x0A: // ENUMERATED
                    // case 0x0B: // EMBEDDED_PDV
                case 0x10: // SEQUENCE
                case 0x11: // SET
                    if (this.sub !== null) {
                        return "(" + this.sub.length + " elem)";
                    } else {
                        return "(no elem)";
                    }
                case 0x0C: // UTF8String
                    return stringCut(this.stream.parseStringUTF(content, content + len), maxLength);
                case 0x12: // NumericString
                case 0x13: // PrintableString
                case 0x14: // TeletexString
                case 0x15: // VideotexString
                case 0x16: // IA5String
                    // case 0x19: // GraphicString
                case 0x1A: // VisibleString
                    // case 0x1B: // GeneralString
                    // case 0x1C: // UniversalString
                    return stringCut(this.stream.parseStringISO(content, content + len), maxLength);
                case 0x1E: // BMPString
                    return stringCut(this.stream.parseStringBMP(content, content + len), maxLength);
                case 0x17: // UTCTime
                case 0x18: // GeneralizedTime
                    return this.stream.parseTime(content, content + len, (this.tag.tagNumber == 0x17));
            }
            return null;
        };
        ASN1.prototype.toString = function() {
            return this.typeName() + "@" + this.stream.pos + "[header:" + this.header + ",length:" + this.length + ",sub:" + ((this.sub === null) ? "null" : this.sub.length) + "]";
        };
        ASN1.prototype.toPrettyString = function(indent) {
            if (indent === undefined) {
                indent = "";
            }
            var s = indent + this.typeName() + " @" + this.stream.pos;
            if (this.length >= 0) {
                s += "+";
            }
            s += this.length;
            if (this.tag.tagConstructed) {
                s += " (constructed)";
            } else if ((this.tag.isUniversal() && ((this.tag.tagNumber == 0x03) || (this.tag.tagNumber == 0x04))) && (this.sub !== null)) {
                s += " (encapsulates)";
            }
            s += "\n";
            if (this.sub !== null) {
                indent += "  ";
                for (var i = 0, max = this.sub.length; i < max; ++i) {
                    s += this.sub[i].toPrettyString(indent);
                }
            }
            return s;
        };
        ASN1.prototype.posStart = function() {
            return this.stream.pos;
        };
        ASN1.prototype.posContent = function() {
            return this.stream.pos + this.header;
        };
        ASN1.prototype.posEnd = function() {
            return this.stream.pos + this.header + Math.abs(this.length);
        };
        ASN1.prototype.toHexString = function() {
            return this.stream.hexDump(this.posStart(), this.posEnd(), true);
        };
        ASN1.decodeLength = function(stream) {
            var buf = stream.get();
            var len = buf & 0x7F;
            if (len == buf) {
                return len;
            }
            // no reason to use Int10, as it would be a huge buffer anyways
            if (len > 6) {
                throw new Error("Length over 48 bits not supported at position " + (stream.pos - 1));
            }
            if (len === 0) {
                return null;
            } // undefined
            buf = 0;
            for (var i = 0; i < len; ++i) {
                buf = (buf * 256) + stream.get();
            }
            return buf;
        };
        /**
         * Retrieve the hexadecimal value (as a string) of the current ASN.1 element
         * @returns {string}
         * @public
         */
        ASN1.prototype.getHexStringValue = function() {
            var hexString = this.toHexString();
            var offset = this.header * 2;
            var length = this.length * 2;
            return hexString.substr(offset, length);
        };
        ASN1.decode = function(str) {
            var stream;
            if (!(str instanceof Stream)) {
                stream = new Stream(str, 0);
            } else {
                stream = str;
            }
            var streamStart = new Stream(stream);
            var tag = new ASN1Tag(stream);
            var len = ASN1.decodeLength(stream);
            var start = stream.pos;
            var header = start - streamStart.pos;
            var sub = null;
            var getSub = function() {
                var ret = [];
                if (len !== null) {
                    // definite length
                    var end = start + len;
                    while (stream.pos < end) {
                        ret[ret.length] = ASN1.decode(stream);
                    }
                    if (stream.pos != end) {
                        throw new Error("Content size is not correct for container starting at offset " + start);
                    }
                } else {
                    // undefined length
                    try {
                        for (;;) {
                            var s = ASN1.decode(stream);
                            if (s.tag.isEOC()) {
                                break;
                            }
                            ret[ret.length] = s;
                        }
                        len = start - stream.pos; // undefined lengths are represented as negative values
                    } catch (e) {
                        throw new Error("Exception while decoding undefined length content: " + e);
                    }
                }
                return ret;
            };
            if (tag.tagConstructed) {
                // must have valid content
                sub = getSub();
            } else if (tag.isUniversal() && ((tag.tagNumber == 0x03) || (tag.tagNumber == 0x04))) {
                // sometimes BitString and OctetString are used to encapsulate ASN.1
                try {
                    if (tag.tagNumber == 0x03) {
                        if (stream.get() != 0) {
                            throw new Error("BIT STRINGs with unused bits cannot encapsulate.");
                        }
                    }
                    sub = getSub();
                    for (var i = 0; i < sub.length; ++i) {
                        if (sub[i].tag.isEOC()) {
                            throw new Error("EOC is not supposed to be actual content.");
                        }
                    }
                } catch (e) {
                    // but silently ignore when they don't
                    sub = null;
                }
            }
            if (sub === null) {
                if (len === null) {
                    throw new Error("We can't skip over an invalid tag with undefined length at offset " + start);
                }
                stream.pos = start + Math.abs(len);
            }
            return new ASN1(streamStart, header, len, tag, sub);
        };
        return ASN1;
    }());
    var ASN1Tag = /** @class */ (function() {
        function ASN1Tag(stream) {
            var buf = stream.get();
            this.tagClass = buf >> 6;
            this.tagConstructed = ((buf & 0x20) !== 0);
            this.tagNumber = buf & 0x1F;
            if (this.tagNumber == 0x1F) { // long tag
                var n = new Int10();
                do {
                    buf = stream.get();
                    n.mulAdd(128, buf & 0x7F);
                } while (buf & 0x80);
                this.tagNumber = n.simplify();
            }
        }
        ASN1Tag.prototype.isUniversal = function() {
            return this.tagClass === 0x00;
        };
        ASN1Tag.prototype.isEOC = function() {
            return this.tagClass === 0x00 && this.tagNumber === 0x00;
        };
        return ASN1Tag;
    }());
    // Copyright (c) 2005  Tom Wu
    // Bits per digit
    var dbits;
    // JavaScript engine analysis
    var canary = 0xdeadbeefcafe;
    var j_lm = ((canary & 0xffffff) == 0xefcafe);
    //#region
    var lowprimes = [2, 3, 5, 7, 11, 13, 17, 19, 23, 29, 31, 37, 41, 43, 47, 53, 59, 61, 67, 71, 73, 79, 83, 89, 97, 101, 103, 107, 109, 113, 127, 131, 137, 139, 149, 151, 157, 163, 167, 173, 179, 181, 191, 193, 197, 199, 211, 223, 227, 229, 233, 239, 241, 251, 257, 263, 269, 271, 277, 281, 283, 293, 307, 311, 313, 317, 331, 337, 347, 349, 353, 359, 367, 373, 379, 383, 389, 397, 401, 409, 419, 421, 431, 433, 439, 443, 449, 457, 461, 463, 467, 479, 487, 491, 499, 503, 509, 521, 523, 541, 547, 557, 563, 569, 571, 577, 587, 593, 599, 601, 607, 613, 617, 619, 631, 641, 643, 647, 653, 659, 661, 673, 677, 683, 691, 701, 709, 719, 727, 733, 739, 743, 751, 757, 761, 769, 773, 787, 797, 809, 811, 821, 823, 827, 829, 839, 853, 857, 859, 863, 877, 881, 883, 887, 907, 911, 919, 929, 937, 941, 947, 953, 967, 971, 977, 983, 991, 997];
    var lplim = (1 << 26) / lowprimes[lowprimes.length - 1];
    //#endregion
    // (public) Constructor
    var BigInteger = (function() {
        function BigInteger(a, b, c) {
            if (a != null) {
                if ("number" == typeof a) {
                    this.fromNumber(a, b, c);
                } else if (b == null && "string" != typeof a) {
                    this.fromString(a, 256);
                } else {
                    this.fromString(a, b);
                }
            }
        }
        //#region PUBLIC
        // BigInteger.prototype.toString = bnToString;
        // (public) return string representation in given radix
        BigInteger.prototype.toString = function(b) {
            if (this.s < 0) {
                return "-" + this.negate().toString(b);
            }
            var k;
            if (b == 16) {
                k = 4;
            } else if (b == 8) {
                k = 3;
            } else if (b == 2) {
                k = 1;
            } else if (b == 32) {
                k = 5;
            } else if (b == 4) {
                k = 2;
            } else {
                return this.toRadix(b);
            }
            var km = (1 << k) - 1;
            var d;
            var m = false;
            var r = "";
            var i = this.t;
            var p = this.DB - (i * this.DB) % k;
            if (i-- > 0) {
                if (p < this.DB && (d = this[i] >> p) > 0) {
                    m = true;
                    r = int2char(d);
                }
                while (i >= 0) {
                    if (p < k) {
                        d = (this[i] & ((1 << p) - 1)) << (k - p);
                        d |= this[--i] >> (p += this.DB - k);
                    } else {
                        d = (this[i] >> (p -= k)) & km;
                        if (p <= 0) {
                            p += this.DB;
                            --i;
                        }
                    }
                    if (d > 0) {
                        m = true;
                    }
                    if (m) {
                        r += int2char(d);
                    }
                }
            }
            return m ? r : "0";
        };
        // BigInteger.prototype.negate = bnNegate;
        // (public) -this
        BigInteger.prototype.negate = function() {
            var r = nbi();
            BigInteger.ZERO.subTo(this, r);
            return r;
        };
        // BigInteger.prototype.abs = bnAbs;
        // (public) |this|
        BigInteger.prototype.abs = function() {
            return (this.s < 0) ? this.negate() : this;
        };
        // BigInteger.prototype.compareTo = bnCompareTo;
        // (public) return + if this > a, - if this < a, 0 if equal
        BigInteger.prototype.compareTo = function(a) {
            var r = this.s - a.s;
            if (r != 0) {
                return r;
            }
            var i = this.t;
            r = i - a.t;
            if (r != 0) {
                return (this.s < 0) ? -r : r;
            }
            while (--i >= 0) {
                if ((r = this[i] - a[i]) != 0) {
                    return r;
                }
            }
            return 0;
        };
        // BigInteger.prototype.bitLength = bnBitLength;
        // (public) return the number of bits in "this"
        BigInteger.prototype.bitLength = function() {
            if (this.t <= 0) {
                return 0;
            }
            return this.DB * (this.t - 1) + nbits(this[this.t - 1] ^ (this.s & this.DM));
        };
        // BigInteger.prototype.mod = bnMod;
        // (public) this mod a
        BigInteger.prototype.mod = function(a) {
            var r = nbi();
            this.abs().divRemTo(a, null, r);
            if (this.s < 0 && r.compareTo(BigInteger.ZERO) > 0) {
                a.subTo(r, r);
            }
            return r;
        };
        // BigInteger.prototype.modPowInt = bnModPowInt;
        // (public) this^e % m, 0 <= e < 2^32
        BigInteger.prototype.modPowInt = function(e, m) {
            var z;
            if (e < 256 || m.isEven()) {
                z = new Classic(m);
            } else {
                z = new Montgomery(m);
            }
            return this.exp(e, z);
        };
        // BigInteger.prototype.clone = bnClone;
        // (public)
        BigInteger.prototype.clone = function() {
            var r = nbi();
            this.copyTo(r);
            return r;
        };
        // BigInteger.prototype.intValue = bnIntValue;
        // (public) return value as integer
        BigInteger.prototype.intValue = function() {
            if (this.s < 0) {
                if (this.t == 1) {
                    return this[0] - this.DV;
                } else if (this.t == 0) {
                    return -1;
                }
            } else if (this.t == 1) {
                return this[0];
            } else if (this.t == 0) {
                return 0;
            }
            // assumes 16 < DB < 32
            return ((this[1] & ((1 << (32 - this.DB)) - 1)) << this.DB) | this[0];
        };
        // BigInteger.prototype.byteValue = bnByteValue;
        // (public) return value as byte
        BigInteger.prototype.byteValue = function() {
            return (this.t == 0) ? this.s : (this[0] << 24) >> 24;
        };
        // BigInteger.prototype.shortValue = bnShortValue;
        // (public) return value as short (assumes DB>=16)
        BigInteger.prototype.shortValue = function() {
            return (this.t == 0) ? this.s : (this[0] << 16) >> 16;
        };
        // BigInteger.prototype.signum = bnSigNum;
        // (public) 0 if this == 0, 1 if this > 0
        BigInteger.prototype.signum = function() {
            if (this.s < 0) {
                return -1;
            } else if (this.t <= 0 || (this.t == 1 && this[0] <= 0)) {
                return 0;
            } else {
                return 1;
            }
        };
        // BigInteger.prototype.toByteArray = bnToByteArray;
        // (public) convert to bigendian byte array
        BigInteger.prototype.toByteArray = function() {
            var i = this.t;
            var r = [];
            r[0] = this.s;
            var p = this.DB - (i * this.DB) % 8;
            var d;
            var k = 0;
            if (i-- > 0) {
                if (p < this.DB && (d = this[i] >> p) != (this.s & this.DM) >> p) {
                    r[k++] = d | (this.s << (this.DB - p));
                }
                while (i >= 0) {
                    if (p < 8) {
                        d = (this[i] & ((1 << p) - 1)) << (8 - p);
                        d |= this[--i] >> (p += this.DB - 8);
                    } else {
                        d = (this[i] >> (p -= 8)) & 0xff;
                        if (p <= 0) {
                            p += this.DB;
                            --i;
                        }
                    }
                    if ((d & 0x80) != 0) {
                        d |= -256;
                    }
                    if (k == 0 && (this.s & 0x80) != (d & 0x80)) {
                        ++k;
                    }
                    if (k > 0 || d != this.s) {
                        r[k++] = d;
                    }
                }
            }
            return r;
        };
        // BigInteger.prototype.equals = bnEquals;
        BigInteger.prototype.equals = function(a) {
            return (this.compareTo(a) == 0);
        };
        // BigInteger.prototype.min = bnMin;
        BigInteger.prototype.min = function(a) {
            return (this.compareTo(a) < 0) ? this : a;
        };
        // BigInteger.prototype.max = bnMax;
        BigInteger.prototype.max = function(a) {
            return (this.compareTo(a) > 0) ? this : a;
        };
        // BigInteger.prototype.and = bnAnd;
        BigInteger.prototype.and = function(a) {
            var r = nbi();
            this.bitwiseTo(a, op_and, r);
            return r;
        };
        // BigInteger.prototype.or = bnOr;
        BigInteger.prototype.or = function(a) {
            var r = nbi();
            this.bitwiseTo(a, op_or, r);
            return r;
        };
        // BigInteger.prototype.xor = bnXor;
        BigInteger.prototype.xor = function(a) {
            var r = nbi();
            this.bitwiseTo(a, op_xor, r);
            return r;
        };
        // BigInteger.prototype.andNot = bnAndNot;
        BigInteger.prototype.andNot = function(a) {
            var r = nbi();
            this.bitwiseTo(a, op_andnot, r);
            return r;
        };
        // BigInteger.prototype.not = bnNot;
        // (public) ~this
        BigInteger.prototype.not = function() {
            var r = nbi();
            for (var i = 0; i < this.t; ++i) {
                r[i] = this.DM & ~this[i];
            }
            r.t = this.t;
            r.s = ~this.s;
            return r;
        };
        // BigInteger.prototype.shiftLeft = bnShiftLeft;
        // (public) this << n
        BigInteger.prototype.shiftLeft = function(n) {
            var r = nbi();
            if (n < 0) {
                this.rShiftTo(-n, r);
            } else {
                this.lShiftTo(n, r);
            }
            return r;
        };
        // BigInteger.prototype.shiftRight = bnShiftRight;
        // (public) this >> n
        BigInteger.prototype.shiftRight = function(n) {
            var r = nbi();
            if (n < 0) {
                this.lShiftTo(-n, r);
            } else {
                this.rShiftTo(n, r);
            }
            return r;
        };
        // BigInteger.prototype.getLowestSetBit = bnGetLowestSetBit;
        // (public) returns index of lowest 1-bit (or -1 if none)
        BigInteger.prototype.getLowestSetBit = function() {
            for (var i = 0; i < this.t; ++i) {
                if (this[i] != 0) {
                    return i * this.DB + lbit(this[i]);
                }
            }
            if (this.s < 0) {
                return this.t * this.DB;
            }
            return -1;
        };
        // BigInteger.prototype.bitCount = bnBitCount;
        // (public) return number of set bits
        BigInteger.prototype.bitCount = function() {
            var r = 0;
            var x = this.s & this.DM;
            for (var i = 0; i < this.t; ++i) {
                r += cbit(this[i] ^ x);
            }
            return r;
        };
        // BigInteger.prototype.testBit = bnTestBit;
        // (public) true iff nth bit is set
        BigInteger.prototype.testBit = function(n) {
            var j = Math.floor(n / this.DB);
            if (j >= this.t) {
                return (this.s != 0);
            }
            return ((this[j] & (1 << (n % this.DB))) != 0);
        };
        // BigInteger.prototype.setBit = bnSetBit;
        // (public) this | (1<<n)
        BigInteger.prototype.setBit = function(n) {
            return this.changeBit(n, op_or);
        };
        // BigInteger.prototype.clearBit = bnClearBit;
        // (public) this & ~(1<<n)
        BigInteger.prototype.clearBit = function(n) {
            return this.changeBit(n, op_andnot);
        };
        // BigInteger.prototype.flipBit = bnFlipBit;
        // (public) this ^ (1<<n)
        BigInteger.prototype.flipBit = function(n) {
            return this.changeBit(n, op_xor);
        };
        // BigInteger.prototype.add = bnAdd;
        // (public) this + a
        BigInteger.prototype.add = function(a) {
            var r = nbi();
            this.addTo(a, r);
            return r;
        };
        // BigInteger.prototype.subtract = bnSubtract;
        // (public) this - a
        BigInteger.prototype.subtract = function(a) {
            var r = nbi();
            this.subTo(a, r);
            return r;
        };
        // BigInteger.prototype.multiply = bnMultiply;
        // (public) this * a
        BigInteger.prototype.multiply = function(a) {
            var r = nbi();
            this.multiplyTo(a, r);
            return r;
        };
        // BigInteger.prototype.divide = bnDivide;
        // (public) this / a
        BigInteger.prototype.divide = function(a) {
            var r = nbi();
            this.divRemTo(a, r, null);
            return r;
        };
        // BigInteger.prototype.remainder = bnRemainder;
        // (public) this % a
        BigInteger.prototype.remainder = function(a) {
            var r = nbi();
            this.divRemTo(a, null, r);
            return r;
        };
        // BigInteger.prototype.divideAndRemainder = bnDivideAndRemainder;
        // (public) [this/a,this%a]
        BigInteger.prototype.divideAndRemainder = function(a) {
            var q = nbi();
            var r = nbi();
            this.divRemTo(a, q, r);
            return [q, r];
        };
        // BigInteger.prototype.modPow = bnModPow;
        // (public) this^e % m (HAC 14.85)
        BigInteger.prototype.modPow = function(e, m) {
            var i = e.bitLength();
            var k;
            var r = nbv(1);
            var z;
            if (i <= 0) {
                return r;
            } else if (i < 18) {
                k = 1;
            } else if (i < 48) {
                k = 3;
            } else if (i < 144) {
                k = 4;
            } else if (i < 768) {
                k = 5;
            } else {
                k = 6;
            }
            if (i < 8) {
                z = new Classic(m);
            } else if (m.isEven()) {
                z = new Barrett(m);
            } else {
                z = new Montgomery(m);
            }
            // precomputation
            var g = [];
            var n = 3;
            var k1 = k - 1;
            var km = (1 << k) - 1;
            g[1] = z.convert(this);
            if (k > 1) {
                var g2 = nbi();
                z.sqrTo(g[1], g2);
                while (n <= km) {
                    g[n] = nbi();
                    z.mulTo(g2, g[n - 2], g[n]);
                    n += 2;
                }
            }
            var j = e.t - 1;
            var w;
            var is1 = true;
            var r2 = nbi();
            var t;
            i = nbits(e[j]) - 1;
            while (j >= 0) {
                if (i >= k1) {
                    w = (e[j] >> (i - k1)) & km;
                } else {
                    w = (e[j] & ((1 << (i + 1)) - 1)) << (k1 - i);
                    if (j > 0) {
                        w |= e[j - 1] >> (this.DB + i - k1);
                    }
                }
                n = k;
                while ((w & 1) == 0) {
                    w >>= 1;
                    --n;
                }
                if ((i -= n) < 0) {
                    i += this.DB;
                    --j;
                }
                if (is1) { // ret == 1, don't bother squaring or multiplying it
                    g[w].copyTo(r);
                    is1 = false;
                } else {
                    while (n > 1) {
                        z.sqrTo(r, r2);
                        z.sqrTo(r2, r);
                        n -= 2;
                    }
                    if (n > 0) {
                        z.sqrTo(r, r2);
                    } else {
                        t = r;
                        r = r2;
                        r2 = t;
                    }
                    z.mulTo(r2, g[w], r);
                }
                while (j >= 0 && (e[j] & (1 << i)) == 0) {
                    z.sqrTo(r, r2);
                    t = r;
                    r = r2;
                    r2 = t;
                    if (--i < 0) {
                        i = this.DB - 1;
                        --j;
                    }
                }
            }
            return z.revert(r);
        };
        // BigInteger.prototype.modInverse = bnModInverse;
        // (public) 1/this % m (HAC 14.61)
        BigInteger.prototype.modInverse = function(m) {
            var ac = m.isEven();
            if ((this.isEven() && ac) || m.signum() == 0) {
                return BigInteger.ZERO;
            }
            var u = m.clone();
            var v = this.clone();
            var a = nbv(1);
            var b = nbv(0);
            var c = nbv(0);
            var d = nbv(1);
            while (u.signum() != 0) {
                while (u.isEven()) {
                    u.rShiftTo(1, u);
                    if (ac) {
                        if (!a.isEven() || !b.isEven()) {
                            a.addTo(this, a);
                            b.subTo(m, b);
                        }
                        a.rShiftTo(1, a);
                    } else if (!b.isEven()) {
                        b.subTo(m, b);
                    }
                    b.rShiftTo(1, b);
                }
                while (v.isEven()) {
                    v.rShiftTo(1, v);
                    if (ac) {
                        if (!c.isEven() || !d.isEven()) {
                            c.addTo(this, c);
                            d.subTo(m, d);
                        }
                        c.rShiftTo(1, c);
                    } else if (!d.isEven()) {
                        d.subTo(m, d);
                    }
                    d.rShiftTo(1, d);
                }
                if (u.compareTo(v) >= 0) {
                    u.subTo(v, u);
                    if (ac) {
                        a.subTo(c, a);
                    }
                    b.subTo(d, b);
                } else {
                    v.subTo(u, v);
                    if (ac) {
                        c.subTo(a, c);
                    }
                    d.subTo(b, d);
                }
            }
            if (v.compareTo(BigInteger.ONE) != 0) {
                return BigInteger.ZERO;
            }
            if (d.compareTo(m) >= 0) {
                return d.subtract(m);
            }
            if (d.signum() < 0) {
                d.addTo(m, d);
            } else {
                return d;
            }
            if (d.signum() < 0) {
                return d.add(m);
            } else {
                return d;
            }
        };
        // BigInteger.prototype.pow = bnPow;
        // (public) this^e
        BigInteger.prototype.pow = function(e) {
            return this.exp(e, new NullExp());
        };
        // BigInteger.prototype.gcd = bnGCD;
        // (public) gcd(this,a) (HAC 14.54)
        BigInteger.prototype.gcd = function(a) {
            var x = (this.s < 0) ? this.negate() : this.clone();
            var y = (a.s < 0) ? a.negate() : a.clone();
            if (x.compareTo(y) < 0) {
                var t = x;
                x = y;
                y = t;
            }
            var i = x.getLowestSetBit();
            var g = y.getLowestSetBit();
            if (g < 0) {
                return x;
            }
            if (i < g) {
                g = i;
            }
            if (g > 0) {
                x.rShiftTo(g, x);
                y.rShiftTo(g, y);
            }
            while (x.signum() > 0) {
                if ((i = x.getLowestSetBit()) > 0) {
                    x.rShiftTo(i, x);
                }
                if ((i = y.getLowestSetBit()) > 0) {
                    y.rShiftTo(i, y);
                }
                if (x.compareTo(y) >= 0) {
                    x.subTo(y, x);
                    x.rShiftTo(1, x);
                } else {
                    y.subTo(x, y);
                    y.rShiftTo(1, y);
                }
            }
            if (g > 0) {
                y.lShiftTo(g, y);
            }
            return y;
        };
        // BigInteger.prototype.isProbablePrime = bnIsProbablePrime;
        // (public) test primality with certainty >= 1-.5^t
        BigInteger.prototype.isProbablePrime = function(t) {
            var i;
            var x = this.abs();
            if (x.t == 1 && x[0] <= lowprimes[lowprimes.length - 1]) {
                for (i = 0; i < lowprimes.length; ++i) {
                    if (x[0] == lowprimes[i]) {
                        return true;
                    }
                }
                return false;
            }
            if (x.isEven()) {
                return false;
            }
            i = 1;
            while (i < lowprimes.length) {
                var m = lowprimes[i];
                var j = i + 1;
                while (j < lowprimes.length && m < lplim) {
                    m *= lowprimes[j++];
                }
                m = x.modInt(m);
                while (i < j) {
                    if (m % lowprimes[i++] == 0) {
                        return false;
                    }
                }
            }
            return x.millerRabin(t);
        };
        //#endregion PUBLIC
        //#region PROTECTED
        // BigInteger.prototype.copyTo = bnpCopyTo;
        // (protected) copy this to r
        BigInteger.prototype.copyTo = function(r) {
            for (var i = this.t - 1; i >= 0; --i) {
                r[i] = this[i];
            }
            r.t = this.t;
            r.s = this.s;
        };
        // BigInteger.prototype.fromInt = bnpFromInt;
        // (protected) set from integer value x, -DV <= x < DV
        BigInteger.prototype.fromInt = function(x) {
            this.t = 1;
            this.s = (x < 0) ? -1 : 0;
            if (x > 0) {
                this[0] = x;
            } else if (x < -1) {
                this[0] = x + this.DV;
            } else {
                this.t = 0;
            }
        };
        // BigInteger.prototype.fromString = bnpFromString;
        // (protected) set from string and radix
        BigInteger.prototype.fromString = function(s, b) {
            var k;
            if (b == 16) {
                k = 4;
            } else if (b == 8) {
                k = 3;
            } else if (b == 256) {
                k = 8;
                /* byte array */
            } else if (b == 2) {
                k = 1;
            } else if (b == 32) {
                k = 5;
            } else if (b == 4) {
                k = 2;
            } else {
                this.fromRadix(s, b);
                return;
            }
            this.t = 0;
            this.s = 0;
            var i = s.length;
            var mi = false;
            var sh = 0;
            while (--i >= 0) {
                var x = (k == 8) ? (+s[i]) & 0xff : intAt(s, i);
                if (x < 0) {
                    if (s.charAt(i) == "-") {
                        mi = true;
                    }
                    continue;
                }
                mi = false;
                if (sh == 0) {
                    this[this.t++] = x;
                } else if (sh + k > this.DB) {
                    this[this.t - 1] |= (x & ((1 << (this.DB - sh)) - 1)) << sh;
                    this[this.t++] = (x >> (this.DB - sh));
                } else {
                    this[this.t - 1] |= x << sh;
                }
                sh += k;
                if (sh >= this.DB) {
                    sh -= this.DB;
                }
            }
            if (k == 8 && ((+s[0]) & 0x80) != 0) {
                this.s = -1;
                if (sh > 0) {
                    this[this.t - 1] |= ((1 << (this.DB - sh)) - 1) << sh;
                }
            }
            this.clamp();
            if (mi) {
                BigInteger.ZERO.subTo(this, this);
            }
        };
        // BigInteger.prototype.clamp = bnpClamp;
        // (protected) clamp off excess high words
        BigInteger.prototype.clamp = function() {
            var c = this.s & this.DM;
            while (this.t > 0 && this[this.t - 1] == c) {
                --this.t;
            }
        };
        // BigInteger.prototype.dlShiftTo = bnpDLShiftTo;
        // (protected) r = this << n*DB
        BigInteger.prototype.dlShiftTo = function(n, r) {
            var i;
            for (i = this.t - 1; i >= 0; --i) {
                r[i + n] = this[i];
            }
            for (i = n - 1; i >= 0; --i) {
                r[i] = 0;
            }
            r.t = this.t + n;
            r.s = this.s;
        };
        // BigInteger.prototype.drShiftTo = bnpDRShiftTo;
        // (protected) r = this >> n*DB
        BigInteger.prototype.drShiftTo = function(n, r) {
            for (var i = n; i < this.t; ++i) {
                r[i - n] = this[i];
            }
            r.t = Math.max(this.t - n, 0);
            r.s = this.s;
        };
        // BigInteger.prototype.lShiftTo = bnpLShiftTo;
        // (protected) r = this << n
        BigInteger.prototype.lShiftTo = function(n, r) {
            var bs = n % this.DB;
            var cbs = this.DB - bs;
            var bm = (1 << cbs) - 1;
            var ds = Math.floor(n / this.DB);
            var c = (this.s << bs) & this.DM;
            for (var i = this.t - 1; i >= 0; --i) {
                r[i + ds + 1] = (this[i] >> cbs) | c;
                c = (this[i] & bm) << bs;
            }
            for (var i = ds - 1; i >= 0; --i) {
                r[i] = 0;
            }
            r[ds] = c;
            r.t = this.t + ds + 1;
            r.s = this.s;
            r.clamp();
        };
        // BigInteger.prototype.rShiftTo = bnpRShiftTo;
        // (protected) r = this >> n
        BigInteger.prototype.rShiftTo = function(n, r) {
            r.s = this.s;
            var ds = Math.floor(n / this.DB);
            if (ds >= this.t) {
                r.t = 0;
                return;
            }
            var bs = n % this.DB;
            var cbs = this.DB - bs;
            var bm = (1 << bs) - 1;
            r[0] = this[ds] >> bs;
            for (var i = ds + 1; i < this.t; ++i) {
                r[i - ds - 1] |= (this[i] & bm) << cbs;
                r[i - ds] = this[i] >> bs;
            }
            if (bs > 0) {
                r[this.t - ds - 1] |= (this.s & bm) << cbs;
            }
            r.t = this.t - ds;
            r.clamp();
        };
        // BigInteger.prototype.subTo = bnpSubTo;
        // (protected) r = this - a
        BigInteger.prototype.subTo = function(a, r) {
            var i = 0;
            var c = 0;
            var m = Math.min(a.t, this.t);
            while (i < m) {
                c += this[i] - a[i];
                r[i++] = c & this.DM;
                c >>= this.DB;
            }
            if (a.t < this.t) {
                c -= a.s;
                while (i < this.t) {
                    c += this[i];
                    r[i++] = c & this.DM;
                    c >>= this.DB;
                }
                c += this.s;
            } else {
                c += this.s;
                while (i < a.t) {
                    c -= a[i];
                    r[i++] = c & this.DM;
                    c >>= this.DB;
                }
                c -= a.s;
            }
            r.s = (c < 0) ? -1 : 0;
            if (c < -1) {
                r[i++] = this.DV + c;
            } else if (c > 0) {
                r[i++] = c;
            }
            r.t = i;
            r.clamp();
        };
        // BigInteger.prototype.multiplyTo = bnpMultiplyTo;
        // (protected) r = this * a, r != this,a (HAC 14.12)
        // "this" should be the larger one if appropriate.
        BigInteger.prototype.multiplyTo = function(a, r) {
            var x = this.abs();
            var y = a.abs();
            var i = x.t;
            r.t = i + y.t;
            while (--i >= 0) {
                r[i] = 0;
            }
            for (i = 0; i < y.t; ++i) {
                r[i + x.t] = x.am(0, y[i], r, i, 0, x.t);
            }
            r.s = 0;
            r.clamp();
            if (this.s != a.s) {
                BigInteger.ZERO.subTo(r, r);
            }
        };
        // BigInteger.prototype.squareTo = bnpSquareTo;
        // (protected) r = this^2, r != this (HAC 14.16)
        BigInteger.prototype.squareTo = function(r) {
            var x = this.abs();
            var i = r.t = 2 * x.t;
            while (--i >= 0) {
                r[i] = 0;
            }
            for (i = 0; i < x.t - 1; ++i) {
                var c = x.am(i, x[i], r, 2 * i, 0, 1);
                if ((r[i + x.t] += x.am(i + 1, 2 * x[i], r, 2 * i + 1, c, x.t - i - 1)) >= x.DV) {
                    r[i + x.t] -= x.DV;
                    r[i + x.t + 1] = 1;
                }
            }
            if (r.t > 0) {
                r[r.t - 1] += x.am(i, x[i], r, 2 * i, 0, 1);
            }
            r.s = 0;
            r.clamp();
        };
        // BigInteger.prototype.divRemTo = bnpDivRemTo;
        // (protected) divide this by m, quotient and remainder to q, r (HAC 14.20)
        // r != q, this != m.  q or r may be null.
        BigInteger.prototype.divRemTo = function(m, q, r) {
            var pm = m.abs();
            if (pm.t <= 0) {
                return;
            }
            var pt = this.abs();
            if (pt.t < pm.t) {
                if (q != null) {
                    q.fromInt(0);
                }
                if (r != null) {
                    this.copyTo(r);
                }
                return;
            }
            if (r == null) {
                r = nbi();
            }
            var y = nbi();
            var ts = this.s;
            var ms = m.s;
            var nsh = this.DB - nbits(pm[pm.t - 1]); // normalize modulus
            if (nsh > 0) {
                pm.lShiftTo(nsh, y);
                pt.lShiftTo(nsh, r);
            } else {
                pm.copyTo(y);
                pt.copyTo(r);
            }
            var ys = y.t;
            var y0 = y[ys - 1];
            if (y0 == 0) {
                return;
            }
            var yt = y0 * (1 << this.F1) + ((ys > 1) ? y[ys - 2] >> this.F2 : 0);
            var d1 = this.FV / yt;
            var d2 = (1 << this.F1) / yt;
            var e = 1 << this.F2;
            var i = r.t;
            var j = i - ys;
            var t = (q == null) ? nbi() : q;
            y.dlShiftTo(j, t);
            if (r.compareTo(t) >= 0) {
                r[r.t++] = 1;
                r.subTo(t, r);
            }
            BigInteger.ONE.dlShiftTo(ys, t);
            t.subTo(y, y); // "negative" y so we can replace sub with am later
            while (y.t < ys) {
                y[y.t++] = 0;
            }
            while (--j >= 0) {
                // Estimate quotient digit
                var qd = (r[--i] == y0) ? this.DM : Math.floor(r[i] * d1 + (r[i - 1] + e) * d2);
                if ((r[i] += y.am(0, qd, r, j, 0, ys)) < qd) { // Try it out
                    y.dlShiftTo(j, t);
                    r.subTo(t, r);
                    while (r[i] < --qd) {
                        r.subTo(t, r);
                    }
                }
            }
            if (q != null) {
                r.drShiftTo(ys, q);
                if (ts != ms) {
                    BigInteger.ZERO.subTo(q, q);
                }
            }
            r.t = ys;
            r.clamp();
            if (nsh > 0) {
                r.rShiftTo(nsh, r);
            } // Denormalize remainder
            if (ts < 0) {
                BigInteger.ZERO.subTo(r, r);
            }
        };
        // BigInteger.prototype.invDigit = bnpInvDigit;
        // (protected) return "-1/this % 2^DB"; useful for Mont. reduction
        // justification:
        //         xy == 1 (mod m)
        //         xy =  1+km
        //   xy(2-xy) = (1+km)(1-km)
        // x[y(2-xy)] = 1-k^2m^2
        // x[y(2-xy)] == 1 (mod m^2)
        // if y is 1/x mod m, then y(2-xy) is 1/x mod m^2
        // should reduce x and y(2-xy) by m^2 at each step to keep size bounded.
        // JS multiply "overflows" differently from C/C++, so care is needed here.
        BigInteger.prototype.invDigit = function() {
            if (this.t < 1) {
                return 0;
            }
            var x = this[0];
            if ((x & 1) == 0) {
                return 0;
            }
            var y = x & 3; // y == 1/x mod 2^2
            y = (y * (2 - (x & 0xf) * y)) & 0xf; // y == 1/x mod 2^4
            y = (y * (2 - (x & 0xff) * y)) & 0xff; // y == 1/x mod 2^8
            y = (y * (2 - (((x & 0xffff) * y) & 0xffff))) & 0xffff; // y == 1/x mod 2^16
            // last step - calculate inverse mod DV directly;
            // assumes 16 < DB <= 32 and assumes ability to handle 48-bit ints
            y = (y * (2 - x * y % this.DV)) % this.DV; // y == 1/x mod 2^dbits
            // we really want the negative inverse, and -DV < y < DV
            return (y > 0) ? this.DV - y : -y;
        };
        // BigInteger.prototype.isEven = bnpIsEven;
        // (protected) true iff this is even
        BigInteger.prototype.isEven = function() {
            return ((this.t > 0) ? (this[0] & 1) : this.s) == 0;
        };
        // BigInteger.prototype.exp = bnpExp;
        // (protected) this^e, e < 2^32, doing sqr and mul with "r" (HAC 14.79)
        BigInteger.prototype.exp = function(e, z) {
            if (e > 0xffffffff || e < 1) {
                return BigInteger.ONE;
            }
            var r = nbi();
            var r2 = nbi();
            var g = z.convert(this);
            var i = nbits(e) - 1;
            g.copyTo(r);
            while (--i >= 0) {
                z.sqrTo(r, r2);
                if ((e & (1 << i)) > 0) {
                    z.mulTo(r2, g, r);
                } else {
                    var t = r;
                    r = r2;
                    r2 = t;
                }
            }
            return z.revert(r);
        };
        // BigInteger.prototype.chunkSize = bnpChunkSize;
        // (protected) return x s.t. r^x < DV
        BigInteger.prototype.chunkSize = function(r) {
            return Math.floor(Math.LN2 * this.DB / Math.log(r));
        };
        // BigInteger.prototype.toRadix = bnpToRadix;
        // (protected) convert to radix string
        BigInteger.prototype.toRadix = function(b) {
            if (b == null) {
                b = 10;
            }
            if (this.signum() == 0 || b < 2 || b > 36) {
                return "0";
            }
            var cs = this.chunkSize(b);
            var a = Math.pow(b, cs);
            var d = nbv(a);
            var y = nbi();
            var z = nbi();
            var r = "";
            this.divRemTo(d, y, z);
            while (y.signum() > 0) {
                r = (a + z.intValue()).toString(b).substr(1) + r;
                y.divRemTo(d, y, z);
            }
            return z.intValue().toString(b) + r;
        };
        // BigInteger.prototype.fromRadix = bnpFromRadix;
        // (protected) convert from radix string
        BigInteger.prototype.fromRadix = function(s, b) {
            this.fromInt(0);
            if (b == null) {
                b = 10;
            }
            var cs = this.chunkSize(b);
            var d = Math.pow(b, cs);
            var mi = false;
            var j = 0;
            var w = 0;
            for (var i = 0; i < s.length; ++i) {
                var x = intAt(s, i);
                if (x < 0) {
                    if (s.charAt(i) == "-" && this.signum() == 0) {
                        mi = true;
                    }
                    continue;
                }
                w = b * w + x;
                if (++j >= cs) {
                    this.dMultiply(d);
                    this.dAddOffset(w, 0);
                    j = 0;
                    w = 0;
                }
            }
            if (j > 0) {
                this.dMultiply(Math.pow(b, j));
                this.dAddOffset(w, 0);
            }
            if (mi) {
                BigInteger.ZERO.subTo(this, this);
            }
        };
        // BigInteger.prototype.fromNumber = bnpFromNumber;
        // (protected) alternate constructor
        BigInteger.prototype.fromNumber = function(a, b, c) {
            if ("number" == typeof b) {
                // new BigInteger(int,int,RNG)
                if (a < 2) {
                    this.fromInt(1);
                } else {
                    this.fromNumber(a, c);
                    if (!this.testBit(a - 1)) {
                        // force MSB set
                        this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
                    }
                    if (this.isEven()) {
                        this.dAddOffset(1, 0);
                    } // force odd
                    while (!this.isProbablePrime(b)) {
                        this.dAddOffset(2, 0);
                        if (this.bitLength() > a) {
                            this.subTo(BigInteger.ONE.shiftLeft(a - 1), this);
                        }
                    }
                }
            } else {
                // new BigInteger(int,RNG)
                var x = [];
                var t = a & 7;
                x.length = (a >> 3) + 1;
                b.nextBytes(x);
                if (t > 0) {
                    x[0] &= ((1 << t) - 1);
                } else {
                    x[0] = 0;
                }
                this.fromString(x, 256);
            }
        };
        // BigInteger.prototype.bitwiseTo = bnpBitwiseTo;
        // (protected) r = this op a (bitwise)
        BigInteger.prototype.bitwiseTo = function(a, op, r) {
            var i;
            var f;
            var m = Math.min(a.t, this.t);
            for (i = 0; i < m; ++i) {
                r[i] = op(this[i], a[i]);
            }
            if (a.t < this.t) {
                f = a.s & this.DM;
                for (i = m; i < this.t; ++i) {
                    r[i] = op(this[i], f);
                }
                r.t = this.t;
            } else {
                f = this.s & this.DM;
                for (i = m; i < a.t; ++i) {
                    r[i] = op(f, a[i]);
                }
                r.t = a.t;
            }
            r.s = op(this.s, a.s);
            r.clamp();
        };
        // BigInteger.prototype.changeBit = bnpChangeBit;
        // (protected) this op (1<<n)
        BigInteger.prototype.changeBit = function(n, op) {
            var r = BigInteger.ONE.shiftLeft(n);
            this.bitwiseTo(r, op, r);
            return r;
        };
        // BigInteger.prototype.addTo = bnpAddTo;
        // (protected) r = this + a
        BigInteger.prototype.addTo = function(a, r) {
            var i = 0;
            var c = 0;
            var m = Math.min(a.t, this.t);
            while (i < m) {
                c += this[i] + a[i];
                r[i++] = c & this.DM;
                c >>= this.DB;
            }
            if (a.t < this.t) {
                c += a.s;
                while (i < this.t) {
                    c += this[i];
                    r[i++] = c & this.DM;
                    c >>= this.DB;
                }
                c += this.s;
            } else {
                c += this.s;
                while (i < a.t) {
                    c += a[i];
                    r[i++] = c & this.DM;
                    c >>= this.DB;
                }
                c += a.s;
            }
            r.s = (c < 0) ? -1 : 0;
            if (c > 0) {
                r[i++] = c;
            } else if (c < -1) {
                r[i++] = this.DV + c;
            }
            r.t = i;
            r.clamp();
        };
        // BigInteger.prototype.dMultiply = bnpDMultiply;
        // (protected) this *= n, this >= 0, 1 < n < DV
        BigInteger.prototype.dMultiply = function(n) {
            this[this.t] = this.am(0, n - 1, this, 0, 0, this.t);
            ++this.t;
            this.clamp();
        };
        // BigInteger.prototype.dAddOffset = bnpDAddOffset;
        // (protected) this += n << w words, this >= 0
        BigInteger.prototype.dAddOffset = function(n, w) {
            if (n == 0) {
                return;
            }
            while (this.t <= w) {
                this[this.t++] = 0;
            }
            this[w] += n;
            while (this[w] >= this.DV) {
                this[w] -= this.DV;
                if (++w >= this.t) {
                    this[this.t++] = 0;
                }
                ++this[w];
            }
        };
        // BigInteger.prototype.multiplyLowerTo = bnpMultiplyLowerTo;
        // (protected) r = lower n words of "this * a", a.t <= n
        // "this" should be the larger one if appropriate.
        BigInteger.prototype.multiplyLowerTo = function(a, n, r) {
            var i = Math.min(this.t + a.t, n);
            r.s = 0; // assumes a,this >= 0
            r.t = i;
            while (i > 0) {
                r[--i] = 0;
            }
            for (var j = r.t - this.t; i < j; ++i) {
                r[i + this.t] = this.am(0, a[i], r, i, 0, this.t);
            }
            for (var j = Math.min(a.t, n); i < j; ++i) {
                this.am(0, a[i], r, i, 0, n - i);
            }
            r.clamp();
        };
        // BigInteger.prototype.multiplyUpperTo = bnpMultiplyUpperTo;
        // (protected) r = "this * a" without lower n words, n > 0
        // "this" should be the larger one if appropriate.
        BigInteger.prototype.multiplyUpperTo = function(a, n, r) {
            --n;
            var i = r.t = this.t + a.t - n;
            r.s = 0; // assumes a,this >= 0
            while (--i >= 0) {
                r[i] = 0;
            }
            for (i = Math.max(n - this.t, 0); i < a.t; ++i) {
                r[this.t + i - n] = this.am(n - i, a[i], r, 0, 0, this.t + i - n);
            }
            r.clamp();
            r.drShiftTo(1, r);
        };
        // BigInteger.prototype.modInt = bnpModInt;
        // (protected) this % n, n < 2^26
        BigInteger.prototype.modInt = function(n) {
            if (n <= 0) {
                return 0;
            }
            var d = this.DV % n;
            var r = (this.s < 0) ? n - 1 : 0;
            if (this.t > 0) {
                if (d == 0) {
                    r = this[0] % n;
                } else {
                    for (var i = this.t - 1; i >= 0; --i) {
                        r = (d * r + this[i]) % n;
                    }
                }
            }
            return r;
        };
        // BigInteger.prototype.millerRabin = bnpMillerRabin;
        // (protected) true if probably prime (HAC 4.24, Miller-Rabin)
        BigInteger.prototype.millerRabin = function(t) {
            var n1 = this.subtract(BigInteger.ONE);
            var k = n1.getLowestSetBit();
            if (k <= 0) {
                return false;
            }
            var r = n1.shiftRight(k);
            t = (t + 1) >> 1;
            if (t > lowprimes.length) {
                t = lowprimes.length;
            }
            var a = nbi();
            for (var i = 0; i < t; ++i) {
                // Pick bases at random, instead of starting at 2
                a.fromInt(lowprimes[Math.floor(Math.random() * lowprimes.length)]);
                var y = a.modPow(r, this);
                if (y.compareTo(BigInteger.ONE) != 0 && y.compareTo(n1) != 0) {
                    var j = 1;
                    while (j++ < k && y.compareTo(n1) != 0) {
                        y = y.modPowInt(2, this);
                        if (y.compareTo(BigInteger.ONE) == 0) {
                            return false;
                        }
                    }
                    if (y.compareTo(n1) != 0) {
                        return false;
                    }
                }
            }
            return true;
        };
        // BigInteger.prototype.square = bnSquare;
        // (public) this^2
        BigInteger.prototype.square = function() {
            var r = nbi();
            this.squareTo(r);
            return r;
        };
        //#region ASYNC
        // Public API method
        BigInteger.prototype.gcda = function(a, callback) {
            var x = (this.s < 0) ? this.negate() : this.clone();
            var y = (a.s < 0) ? a.negate() : a.clone();
            if (x.compareTo(y) < 0) {
                var t = x;
                x = y;
                y = t;
            }
            var i = x.getLowestSetBit();
            var g = y.getLowestSetBit();
            if (g < 0) {
                callback(x);
                return;
            }
            if (i < g) {
                g = i;
            }
            if (g > 0) {
                x.rShiftTo(g, x);
                y.rShiftTo(g, y);
            }
            // Workhorse of the algorithm, gets called 200 - 800 times per 512 bit keygen.
            var gcda1 = function() {
                if ((i = x.getLowestSetBit()) > 0) {
                    x.rShiftTo(i, x);
                }
                if ((i = y.getLowestSetBit()) > 0) {
                    y.rShiftTo(i, y);
                }
                if (x.compareTo(y) >= 0) {
                    x.subTo(y, x);
                    x.rShiftTo(1, x);
                } else {
                    y.subTo(x, y);
                    y.rShiftTo(1, y);
                }
                if (!(x.signum() > 0)) {
                    if (g > 0) {
                        y.lShiftTo(g, y);
                    }
                    setTimeout(function() {
                        callback(y);
                    }, 0); // escape
                } else {
                    setTimeout(gcda1, 0);
                }
            };
            setTimeout(gcda1, 10);
        };
        // (protected) alternate constructor
        BigInteger.prototype.fromNumberAsync = function(a, b, c, callback) {
            if ("number" == typeof b) {
                if (a < 2) {
                    this.fromInt(1);
                } else {
                    this.fromNumber(a, c);
                    if (!this.testBit(a - 1)) {
                        this.bitwiseTo(BigInteger.ONE.shiftLeft(a - 1), op_or, this);
                    }
                    if (this.isEven()) {
                        this.dAddOffset(1, 0);
                    }
                    var bnp_1 = this;
                    var bnpfn1_1 = function() {
                        bnp_1.dAddOffset(2, 0);
                        if (bnp_1.bitLength() > a) {
                            bnp_1.subTo(BigInteger.ONE.shiftLeft(a - 1), bnp_1);
                        }
                        if (bnp_1.isProbablePrime(b)) {
                            setTimeout(function() {
                                callback();
                            }, 0); // escape
                        } else {
                            setTimeout(bnpfn1_1, 0);
                        }
                    };
                    setTimeout(bnpfn1_1, 0);
                }
            } else {
                var x = [];
                var t = a & 7;
                x.length = (a >> 3) + 1;
                b.nextBytes(x);
                if (t > 0) {
                    x[0] &= ((1 << t) - 1);
                } else {
                    x[0] = 0;
                }
                this.fromString(x, 256);
            }
        };
        return BigInteger;
    }());
    //#region REDUCERS
    //#region NullExp
    var NullExp = /** @class */ (function() {
        function NullExp() {}
        // NullExp.prototype.convert = nNop;
        NullExp.prototype.convert = function(x) {
            return x;
        };
        // NullExp.prototype.revert = nNop;
        NullExp.prototype.revert = function(x) {
            return x;
        };
        // NullExp.prototype.mulTo = nMulTo;
        NullExp.prototype.mulTo = function(x, y, r) {
            x.multiplyTo(y, r);
        };
        // NullExp.prototype.sqrTo = nSqrTo;
        NullExp.prototype.sqrTo = function(x, r) {
            x.squareTo(r);
        };
        return NullExp;
    }());
    // Modular reduction using "classic" algorithm
    var Classic = /** @class */ (function() {
        function Classic(m) {
            this.m = m;
        }
        // Classic.prototype.convert = cConvert;
        Classic.prototype.convert = function(x) {
            if (x.s < 0 || x.compareTo(this.m) >= 0) {
                return x.mod(this.m);
            } else {
                return x;
            }
        };
        // Classic.prototype.revert = cRevert;
        Classic.prototype.revert = function(x) {
            return x;
        };
        // Classic.prototype.reduce = cReduce;
        Classic.prototype.reduce = function(x) {
            x.divRemTo(this.m, null, x);
        };
        // Classic.prototype.mulTo = cMulTo;
        Classic.prototype.mulTo = function(x, y, r) {
            x.multiplyTo(y, r);
            this.reduce(r);
        };
        // Classic.prototype.sqrTo = cSqrTo;
        Classic.prototype.sqrTo = function(x, r) {
            x.squareTo(r);
            this.reduce(r);
        };
        return Classic;
    }());
    //#endregion
    //#region Montgomery
    // Montgomery reduction
    var Montgomery = /** @class */ (function() {
        function Montgomery(m) {
            this.m = m;
            this.mp = m.invDigit();
            this.mpl = this.mp & 0x7fff;
            this.mph = this.mp >> 15;
            this.um = (1 << (m.DB - 15)) - 1;
            this.mt2 = 2 * m.t;
        }
        // Montgomery.prototype.convert = montConvert;
        // xR mod m
        Montgomery.prototype.convert = function(x) {
            var r = nbi();
            x.abs().dlShiftTo(this.m.t, r);
            r.divRemTo(this.m, null, r);
            if (x.s < 0 && r.compareTo(BigInteger.ZERO) > 0) {
                this.m.subTo(r, r);
            }
            return r;
        };
        // Montgomery.prototype.revert = montRevert;
        // x/R mod m
        Montgomery.prototype.revert = function(x) {
            var r = nbi();
            x.copyTo(r);
            this.reduce(r);
            return r;
        };
        // Montgomery.prototype.reduce = montReduce;
        // x = x/R mod m (HAC 14.32)
        Montgomery.prototype.reduce = function(x) {
            while (x.t <= this.mt2) {
                // pad x so am has enough room later
                x[x.t++] = 0;
            }
            for (var i = 0; i < this.m.t; ++i) {
                // faster way of calculating u0 = x[i]*mp mod DV
                var j = x[i] & 0x7fff;
                var u0 = (j * this.mpl + (((j * this.mph + (x[i] >> 15) * this.mpl) & this.um) << 15)) & x.DM;
                // use am to combine the multiply-shift-add into one call
                j = i + this.m.t;
                x[j] += this.m.am(0, u0, x, i, 0, this.m.t);
                // propagate carry
                while (x[j] >= x.DV) {
                    x[j] -= x.DV;
                    x[++j]++;
                }
            }
            x.clamp();
            x.drShiftTo(this.m.t, x);
            if (x.compareTo(this.m) >= 0) {
                x.subTo(this.m, x);
            }
        };
        // Montgomery.prototype.mulTo = montMulTo;
        // r = "xy/R mod m"; x,y != r
        Montgomery.prototype.mulTo = function(x, y, r) {
            x.multiplyTo(y, r);
            this.reduce(r);
        };
        // Montgomery.prototype.sqrTo = montSqrTo;
        // r = "x^2/R mod m"; x != r
        Montgomery.prototype.sqrTo = function(x, r) {
            x.squareTo(r);
            this.reduce(r);
        };
        return Montgomery;
    }());
    //#endregion Montgomery
    //#region Barrett
    // Barrett modular reduction
    var Barrett = /** @class */ (function() {
        function Barrett(m) {
            this.m = m;
            // setup Barrett
            this.r2 = nbi();
            this.q3 = nbi();
            BigInteger.ONE.dlShiftTo(2 * m.t, this.r2);
            this.mu = this.r2.divide(m);
        }
        // Barrett.prototype.convert = barrettConvert;
        Barrett.prototype.convert = function(x) {
            if (x.s < 0 || x.t > 2 * this.m.t) {
                return x.mod(this.m);
            } else if (x.compareTo(this.m) < 0) {
                return x;
            } else {
                var r = nbi();
                x.copyTo(r);
                this.reduce(r);
                return r;
            }
        };
        // Barrett.prototype.revert = barrettRevert;
        Barrett.prototype.revert = function(x) {
            return x;
        };
        // Barrett.prototype.reduce = barrettReduce;
        // x = x mod m (HAC 14.42)
        Barrett.prototype.reduce = function(x) {
            x.drShiftTo(this.m.t - 1, this.r2);
            if (x.t > this.m.t + 1) {
                x.t = this.m.t + 1;
                x.clamp();
            }
            this.mu.multiplyUpperTo(this.r2, this.m.t + 1, this.q3);
            this.m.multiplyLowerTo(this.q3, this.m.t + 1, this.r2);
            while (x.compareTo(this.r2) < 0) {
                x.dAddOffset(1, this.m.t + 1);
            }
            x.subTo(this.r2, x);
            while (x.compareTo(this.m) >= 0) {
                x.subTo(this.m, x);
            }
        };
        // Barrett.prototype.mulTo = barrettMulTo;
        // r = x*y mod m; x,y != r
        Barrett.prototype.mulTo = function(x, y, r) {
            x.multiplyTo(y, r);
            this.reduce(r);
        };
        // Barrett.prototype.sqrTo = barrettSqrTo;
        // r = x^2 mod m; x != r
        Barrett.prototype.sqrTo = function(x, r) {
            x.squareTo(r);
            this.reduce(r);
        };
        return Barrett;
    }());
    //#endregion
    //#endregion REDUCERS
    // return new, unset BigInteger
    function nbi() {
        return new BigInteger(null);
    }

    function parseBigInt(str, r) {
        return new BigInteger(str, r);
    }
    // am: Compute w_j += (x*this_i), propagate carries,
    // c is initial carry, returns final carry.
    // c < 3*dvalue, x < 2*dvalue, this_i < dvalue
    // We need to select the fastest one that works in this environment.
    // am1: use a single mult and divide to get the high bits,
    // max digit bits should be 26 because
    // max internal value = 2*dvalue^2-2*dvalue (< 2^53)
    function am1(i, x, w, j, c, n) {
        while (--n >= 0) {
            var v = x * this[i++] + w[j] + c;
            c = Math.floor(v / 0x4000000);
            w[j++] = v & 0x3ffffff;
        }
        return c;
    }
    // am2 avoids a big mult-and-extract completely.
    // Max digit bits should be <= 30 because we do bitwise ops
    // on values up to 2*hdvalue^2-hdvalue-1 (< 2^31)
    function am2(i, x, w, j, c, n) {
        var xl = x & 0x7fff;
        var xh = x >> 15;
        while (--n >= 0) {
            var l = this[i] & 0x7fff;
            var h = this[i++] >> 15;
            var m = xh * l + h * xl;
            l = xl * l + ((m & 0x7fff) << 15) + w[j] + (c & 0x3fffffff);
            c = (l >>> 30) + (m >>> 15) + xh * h + (c >>> 30);
            w[j++] = l & 0x3fffffff;
        }
        return c;
    }
    // Alternately, set max digit bits to 28 since some
    // browsers slow down when dealing with 32-bit numbers.
    function am3(i, x, w, j, c, n) {
        var xl = x & 0x3fff;
        var xh = x >> 14;
        while (--n >= 0) {
            var l = this[i] & 0x3fff;
            var h = this[i++] >> 14;
            var m = xh * l + h * xl;
            l = xl * l + ((m & 0x3fff) << 14) + w[j] + c;
            c = (l >> 28) + (m >> 14) + xh * h;
            w[j++] = l & 0xfffffff;
        }
        return c;
    }
    if (j_lm && (navigator.appName == "Microsoft Internet Explorer")) {
        BigInteger.prototype.am = am2;
        dbits = 30;
    } else if (j_lm && (navigator.appName != "Netscape")) {
        BigInteger.prototype.am = am1;
        dbits = 26;
    } else { // Mozilla/Netscape seems to prefer am3
        BigInteger.prototype.am = am3;
        dbits = 28;
    }
    BigInteger.prototype.DB = dbits;
    BigInteger.prototype.DM = ((1 << dbits) - 1);
    BigInteger.prototype.DV = (1 << dbits);
    var BI_FP = 52;
    BigInteger.prototype.FV = Math.pow(2, BI_FP);
    BigInteger.prototype.F1 = BI_FP - dbits;
    BigInteger.prototype.F2 = 2 * dbits - BI_FP;
    // Digit conversions
    var BI_RC = [];
    var rr;
    var vv;
    rr = "0".charCodeAt(0);
    for (vv = 0; vv <= 9; ++vv) {
        BI_RC[rr++] = vv;
    }
    rr = "a".charCodeAt(0);
    for (vv = 10; vv < 36; ++vv) {
        BI_RC[rr++] = vv;
    }
    rr = "A".charCodeAt(0);
    for (vv = 10; vv < 36; ++vv) {
        BI_RC[rr++] = vv;
    }

    function intAt(s, i) {
        var c = BI_RC[s.charCodeAt(i)];
        return (c == null) ? -1 : c;
    }
    // return bigint initialized to value
    function nbv(i) {
        var r = nbi();
        r.fromInt(i);
        return r;
    }
    // returns bit length of the integer x
    function nbits(x) {
        var r = 1;
        var t;
        if ((t = x >>> 16) != 0) {
            x = t;
            r += 16;
        }
        if ((t = x >> 8) != 0) {
            x = t;
            r += 8;
        }
        if ((t = x >> 4) != 0) {
            x = t;
            r += 4;
        }
        if ((t = x >> 2) != 0) {
            x = t;
            r += 2;
        }
        if ((t = x >> 1) != 0) {
            x = t;
            r += 1;
        }
        return r;
    }
    // "constants"
    BigInteger.ZERO = nbv(0);
    BigInteger.ONE = nbv(1);
    // prng4.js - uses Arcfour as a PRNG
    var Arcfour = /** @class */ (function() {
        function Arcfour() {
            this.i = 0;
            this.j = 0;
            this.S = [];
        }
        // Arcfour.prototype.init = ARC4init;
        // Initialize arcfour context from key, an array of ints, each from [0..255]
        Arcfour.prototype.init = function(key) {
            var i;
            var j;
            var t;
            for (i = 0; i < 256; ++i) {
                this.S[i] = i;
            }
            j = 0;
            for (i = 0; i < 256; ++i) {
                j = (j + this.S[i] + key[i % key.length]) & 255;
                t = this.S[i];
                this.S[i] = this.S[j];
                this.S[j] = t;
            }
            this.i = 0;
            this.j = 0;
        };
        // Arcfour.prototype.next = ARC4next;
        Arcfour.prototype.next = function() {
            var t;
            this.i = (this.i + 1) & 255;
            this.j = (this.j + this.S[this.i]) & 255;
            t = this.S[this.i];
            this.S[this.i] = this.S[this.j];
            this.S[this.j] = t;
            return this.S[(t + this.S[this.i]) & 255];
        };
        return Arcfour;
    }());
    // Plug in your RNG constructor here
    function prng_newstate() {
        return new Arcfour();
    }
    // Pool size must be a multiple of 4 and greater than 32.
    // An array of bytes the size of the pool will be passed to init()
    var rng_psize = 256;
    // Random number generator - requires a PRNG backend, e.g. prng4.js
    var rng_state;
    var rng_pool = null;
    var rng_pptr;
    // Initialize the pool with junk if needed.
    if (rng_pool == null) {
        rng_pool = [];
        rng_pptr = 0;
        var t = void 0;
        if (window.crypto && window.crypto.getRandomValues) {
            // Extract entropy (2048 bits) from RNG if available
            var z = new Uint32Array(256);
            window.crypto.getRandomValues(z);
            for (t = 0; t < z.length; ++t) {
                rng_pool[rng_pptr++] = z[t] & 255;
            }
        }
        // Use mouse events for entropy, if we do not have enough entropy by the time
        // we need it, entropy will be generated by Math.random.
        var onMouseMoveListener_1 = function(ev) {
            this.count = this.count || 0;
            if (this.count >= 256 || rng_pptr >= rng_psize) {
                if (window.removeEventListener) {
                    window.removeEventListener("mousemove", onMouseMoveListener_1, false);
                } else if (window.detachEvent) {
                    window.detachEvent("onmousemove", onMouseMoveListener_1);
                }
                return;
            }
            try {
                var mouseCoordinates = ev.x + ev.y;
                rng_pool[rng_pptr++] = mouseCoordinates & 255;
                this.count += 1;
            } catch (e) {
                // Sometimes Firefox will deny permission to access event properties for some reason. Ignore.
            }
        };
        if (window.addEventListener) {
            window.addEventListener("mousemove", onMouseMoveListener_1, false);
        } else if (window.attachEvent) {
            window.attachEvent("onmousemove", onMouseMoveListener_1);
        }
    }

    function rng_get_byte() {
        if (rng_state == null) {
            rng_state = prng_newstate();
            // At this point, we may not have collected enough entropy.  If not, fall back to Math.random
            while (rng_pptr < rng_psize) {
                var random = Math.floor(65536 * Math.random());
                rng_pool[rng_pptr++] = random & 255;
            }
            rng_state.init(rng_pool);
            for (rng_pptr = 0; rng_pptr < rng_pool.length; ++rng_pptr) {
                rng_pool[rng_pptr] = 0;
            }
            rng_pptr = 0;
        }
        // TODO: allow reseeding after first request
        return rng_state.next();
    }
    var SecureRandom = /** @class */ (function() {
        function SecureRandom() {}
        SecureRandom.prototype.nextBytes = function(ba) {
            for (var i = 0; i < ba.length; ++i) {
                ba[i] = rng_get_byte();
            }
        };
        return SecureRandom;
    }());
    // Depends on jsbn.js and rng.js
    // function linebrk(s,n) {
    //   var ret = "";
    //   var i = 0;
    //   while(i + n < s.length) {
    //     ret += s.substring(i,i+n) + "\n";
    //     i += n;
    //   }
    //   return ret + s.substring(i,s.length);
    // }
    // function byte2Hex(b) {
    //   if(b < 0x10)
    //     return "0" + b.toString(16);
    //   else
    //     return b.toString(16);
    // }
    function pkcs1pad1(s, n) {
        if (n < s.length + 22) {
            console.error("Message too long for RSA");
            return null;
        }
        var len = n - s.length - 6;
        var filler = "";
        for (var f = 0; f < len; f += 2) {
            filler += "ff";
        }
        var m = "0001" + filler + "00" + s;
        return parseBigInt(m, 16);
    }
    // PKCS#1 (type 2, random) pad input string s to n bytes, and return a bigint
    function pkcs1pad2(s, n) {
        if (n < s.length + 11) { // TODO: fix for utf-8
            console.error("Message too long for RSA");
            return null;
        }
        var ba = [];
        var i = s.length - 1;
        while (i >= 0 && n > 0) {
            var c = s.charCodeAt(i--);
            if (c < 128) { // encode using utf-8
                ba[--n] = c;
            } else if ((c > 127) && (c < 2048)) {
                ba[--n] = (c & 63) | 128;
                ba[--n] = (c >> 6) | 192;
            } else {
                ba[--n] = (c & 63) | 128;
                ba[--n] = ((c >> 6) & 63) | 128;
                ba[--n] = (c >> 12) | 224;
            }
        }
        ba[--n] = 0;
        var rng = new SecureRandom();
        var x = [];
        while (n > 2) { // random non-zero pad
            x[0] = 0;
            while (x[0] == 0) {
                rng.nextBytes(x);
            }
            ba[--n] = x[0];
        }
        ba[--n] = 2;
        ba[--n] = 0;
        return new BigInteger(ba);
    }
    // "empty" RSA key constructor
    var RSAKey = /** @class */ (function() {
        function RSAKey() {
            this.n = null;
            this.e = 0;
            this.d = null;
            this.p = null;
            this.q = null;
            this.dmp1 = null;
            this.dmq1 = null;
            this.coeff = null;
        }
        //#region PROTECTED
        // protected
        // RSAKey.prototype.doPublic = RSADoPublic;
        // Perform raw public operation on "x": return x^e (mod n)
        RSAKey.prototype.doPublic = function(x) {
            return x.modPowInt(this.e, this.n);
        };
        // RSAKey.prototype.doPrivate = RSADoPrivate;
        // Perform raw private operation on "x": return x^d (mod n)
        RSAKey.prototype.doPrivate = function(x) {
            if (this.p == null || this.q == null) {
                return x.modPow(this.d, this.n);
            }
            // TODO: re-calculate any missing CRT params
            var xp = x.mod(this.p).modPow(this.dmp1, this.p);
            var xq = x.mod(this.q).modPow(this.dmq1, this.q);
            while (xp.compareTo(xq) < 0) {
                xp = xp.add(this.p);
            }
            return xp.subtract(xq).multiply(this.coeff).mod(this.p).multiply(this.q).add(xq);
        };
        //#endregion PROTECTED
        //#region PUBLIC
        // RSAKey.prototype.setPublic = RSASetPublic;
        // Set the public key fields N and e from hex strings
        RSAKey.prototype.setPublic = function(N, E) {
            if (N != null && E != null && N.length > 0 && E.length > 0) {
                this.n = parseBigInt(N, 16);
                this.e = parseInt(E, 16);
            } else {
                console.error("Invalid RSA public key");
            }
        };
        // RSAKey.prototype.encrypt = RSAEncrypt;
        // Return the PKCS#1 RSA encryption of "text" as an even-length hex string
        RSAKey.prototype.encrypt = function(text) {
            var m = pkcs1pad2(text, (this.n.bitLength() + 7) >> 3);
            if (m == null) {
                return null;
            }
            var c = this.doPublic(m);
            if (c == null) {
                return null;
            }
            var h = c.toString(16);
            if ((h.length & 1) == 0) {
                return h;
            } else {
                return "0" + h;
            }
        };
        // RSAKey.prototype.setPrivate = RSASetPrivate;
        // Set the private key fields N, e, and d from hex strings
        RSAKey.prototype.setPrivate = function(N, E, D) {
            if (N != null && E != null && N.length > 0 && E.length > 0) {
                this.n = parseBigInt(N, 16);
                this.e = parseInt(E, 16);
                this.d = parseBigInt(D, 16);
            } else {
                console.error("Invalid RSA private key");
            }
        };
        // RSAKey.prototype.setPrivateEx = RSASetPrivateEx;
        // Set the private key fields N, e, d and CRT params from hex strings
        RSAKey.prototype.setPrivateEx = function(N, E, D, P, Q, DP, DQ, C) {
            if (N != null && E != null && N.length > 0 && E.length > 0) {
                this.n = parseBigInt(N, 16);
                this.e = parseInt(E, 16);
                this.d = parseBigInt(D, 16);
                this.p = parseBigInt(P, 16);
                this.q = parseBigInt(Q, 16);
                this.dmp1 = parseBigInt(DP, 16);
                this.dmq1 = parseBigInt(DQ, 16);
                this.coeff = parseBigInt(C, 16);
            } else {
                console.error("Invalid RSA private key");
            }
        };
        // RSAKey.prototype.generate = RSAGenerate;
        // Generate a new random private key B bits long, using public expt E
        RSAKey.prototype.generate = function(B, E) {
            var rng = new SecureRandom();
            var qs = B >> 1;
            this.e = parseInt(E, 16);
            var ee = new BigInteger(E, 16);
            for (;;) {
                for (;;) {
                    this.p = new BigInteger(B - qs, 1, rng);
                    if (this.p.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.p.isProbablePrime(10)) {
                        break;
                    }
                }
                for (;;) {
                    this.q = new BigInteger(qs, 1, rng);
                    if (this.q.subtract(BigInteger.ONE).gcd(ee).compareTo(BigInteger.ONE) == 0 && this.q.isProbablePrime(10)) {
                        break;
                    }
                }
                if (this.p.compareTo(this.q) <= 0) {
                    var t = this.p;
                    this.p = this.q;
                    this.q = t;
                }
                var p1 = this.p.subtract(BigInteger.ONE);
                var q1 = this.q.subtract(BigInteger.ONE);
                var phi = p1.multiply(q1);
                if (phi.gcd(ee).compareTo(BigInteger.ONE) == 0) {
                    this.n = this.p.multiply(this.q);
                    this.d = ee.modInverse(phi);
                    this.dmp1 = this.d.mod(p1);
                    this.dmq1 = this.d.mod(q1);
                    this.coeff = this.q.modInverse(this.p);
                    break;
                }
            }
        };
        // RSAKey.prototype.decrypt = RSADecrypt;
        // Return the PKCS#1 RSA decryption of "ctext".
        // "ctext" is an even-length hex string and the output is a plain string.
        RSAKey.prototype.decrypt = function(ctext) {
            var c = parseBigInt(ctext, 16);
            var m = this.doPrivate(c);
            if (m == null) {
                return null;
            }
            return pkcs1unpad2(m, (this.n.bitLength() + 7) >> 3);
        };
        // Generate a new random private key B bits long, using public expt E
        RSAKey.prototype.generateAsync = function(B, E, callback) {
            var rng = new SecureRandom();
            var qs = B >> 1;
            this.e = parseInt(E, 16);
            var ee = new BigInteger(E, 16);
            var rsa = this;
            // These functions have non-descript names because they were originally for(;;) loops.
            // I don't know about cryptography to give them better names than loop1-4.
            var loop1 = function() {
                var loop4 = function() {
                    if (rsa.p.compareTo(rsa.q) <= 0) {
                        var t = rsa.p;
                        rsa.p = rsa.q;
                        rsa.q = t;
                    }
                    var p1 = rsa.p.subtract(BigInteger.ONE);
                    var q1 = rsa.q.subtract(BigInteger.ONE);
                    var phi = p1.multiply(q1);
                    if (phi.gcd(ee).compareTo(BigInteger.ONE) == 0) {
                        rsa.n = rsa.p.multiply(rsa.q);
                        rsa.d = ee.modInverse(phi);
                        rsa.dmp1 = rsa.d.mod(p1);
                        rsa.dmq1 = rsa.d.mod(q1);
                        rsa.coeff = rsa.q.modInverse(rsa.p);
                        setTimeout(function() {
                            callback();
                        }, 0); // escape
                    } else {
                        setTimeout(loop1, 0);
                    }
                };
                var loop3 = function() {
                    rsa.q = nbi();
                    rsa.q.fromNumberAsync(qs, 1, rng, function() {
                        rsa.q.subtract(BigInteger.ONE).gcda(ee, function(r) {
                            if (r.compareTo(BigInteger.ONE) == 0 && rsa.q.isProbablePrime(10)) {
                                setTimeout(loop4, 0);
                            } else {
                                setTimeout(loop3, 0);
                            }
                        });
                    });
                };
                var loop2 = function() {
                    rsa.p = nbi();
                    rsa.p.fromNumberAsync(B - qs, 1, rng, function() {
                        rsa.p.subtract(BigInteger.ONE).gcda(ee, function(r) {
                            if (r.compareTo(BigInteger.ONE) == 0 && rsa.p.isProbablePrime(10)) {
                                setTimeout(loop3, 0);
                            } else {
                                setTimeout(loop2, 0);
                            }
                        });
                    });
                };
                setTimeout(loop2, 0);
            };
            setTimeout(loop1, 0);
        };
        RSAKey.prototype.sign = function(text, digestMethod, digestName) {
            var header = getDigestHeader(digestName);
            var digest = header + digestMethod(text).toString();
            var m = pkcs1pad1(digest, this.n.bitLength() / 4);
            if (m == null) {
                return null;
            }
            var c = this.doPrivate(m);
            if (c == null) {
                return null;
            }
            var h = c.toString(16);
            if ((h.length & 1) == 0) {
                return h;
            } else {
                return "0" + h;
            }
        };
        RSAKey.prototype.verify = function(text, signature, digestMethod) {
            var c = parseBigInt(signature, 16);
            var m = this.doPublic(c);
            if (m == null) {
                return null;
            }
            var unpadded = m.toString(16).replace(/^1f+00/, "");
            var digest = removeDigestHeader(unpadded);
            return digest == digestMethod(text).toString();
        };
        return RSAKey;
    }());
    // Undo PKCS#1 (type 2, random) padding and, if valid, return the plaintext
    function pkcs1unpad2(d, n) {
        var b = d.toByteArray();
        var i = 0;
        while (i < b.length && b[i] == 0) {
            ++i;
        }
        if (b.length - i != n - 1 || b[i] != 2) {
            return null;
        }
        ++i;
        while (b[i] != 0) {
            if (++i >= b.length) {
                return null;
            }
        }
        var ret = "";
        while (++i < b.length) {
            var c = b[i] & 255;
            if (c < 128) { // utf-8 decode
                ret += String.fromCharCode(c);
            } else if ((c > 191) && (c < 224)) {
                ret += String.fromCharCode(((c & 31) << 6) | (b[i + 1] & 63));
                ++i;
            } else {
                ret += String.fromCharCode(((c & 15) << 12) | ((b[i + 1] & 63) << 6) | (b[i + 2] & 63));
                i += 2;
            }
        }
        return ret;
    }
    // https://tools.ietf.org/html/rfc3447#page-43
    var DIGEST_HEADERS = {
        md2: "3020300c06082a864886f70d020205000410",
        md5: "3020300c06082a864886f70d020505000410",
        sha1: "3021300906052b0e03021a05000414",
        sha224: "302d300d06096086480165030402040500041c",
        sha256: "3031300d060960864801650304020105000420",
        sha384: "3041300d060960864801650304020205000430",
        sha512: "3051300d060960864801650304020305000440",
        ripemd160: "3021300906052b2403020105000414",
    };

    function getDigestHeader(name) {
        return DIGEST_HEADERS[name] || "";
    }

    function removeDigestHeader(str) {
        for (var name_1 in DIGEST_HEADERS) {
            if (DIGEST_HEADERS.hasOwnProperty(name_1)) {
                var header = DIGEST_HEADERS[name_1];
                var len = header.length;
                if (str.substr(0, len) == header) {
                    return str.substr(len);
                }
            }
        }
        return str;
    }
    // Return the PKCS#1 RSA encryption of "text" as a Base64-encoded string
    // function RSAEncryptB64(text) {
    //  var h = this.encrypt(text);
    //  if(h) return hex2b64(h); else return null;
    // }
    // public
    // RSAKey.prototype.encrypt_b64 = RSAEncryptB64;
    /*!
    Copyright (c) 2011, Yahoo! Inc. All rights reserved.
    Code licensed under the BSD License:
    http://developer.yahoo.com/yui/license.html
    version: 2.9.0
    */
    var YAHOO = {};
    YAHOO.lang = {
        /**
         * Utility to set up the prototype, constructor and superclass properties to
         * support an inheritance strategy that can chain constructors and methods.
         * Static members will not be inherited.
         *
         * @method extend
         * @static
         * @param {Function} subc   the object to modify
         * @param {Function} superc the object to inherit
         * @param {Object} overrides  additional properties/methods to add to the
         *                              subclass prototype.  These will override the
         *                              matching items obtained from the superclass
         *                              if present.
         */
        extend: function(subc, superc, overrides) {
            if (!superc || !subc) {
                throw new Error("YAHOO.lang.extend failed, please check that " +
                    "all dependencies are included.");
            }
            var F = function() {};
            F.prototype = superc.prototype;
            subc.prototype = new F();
            subc.prototype.constructor = subc;
            subc.superclass = superc.prototype;
            if (superc.prototype.constructor == Object.prototype.constructor) {
                superc.prototype.constructor = superc;
            }
            if (overrides) {
                var i;
                for (i in overrides) {
                    subc.prototype[i] = overrides[i];
                }
                /*
                 * IE will not enumerate native functions in a derived object even if the
                 * function was overridden.  This is a workaround for specific functions
                 * we care about on the Object prototype.
                 * @property _IEEnumFix
                 * @param {Function} r  the object to receive the augmentation
                 * @param {Function} s  the object that supplies the properties to augment
                 * @static
                 * @private
                 */
                var _IEEnumFix = function() {},
                    ADD = ["toString", "valueOf"];
                try {
                    if (/MSIE/.test(navigator.userAgent)) {
                        _IEEnumFix = function(r, s) {
                            for (i = 0; i < ADD.length; i = i + 1) {
                                var fname = ADD[i],
                                    f = s[fname];
                                if (typeof f === 'function' && f != Object.prototype[fname]) {
                                    r[fname] = f;
                                }
                            }
                        };
                    }
                } catch (ex) {}
                _IEEnumFix(subc.prototype, overrides);
            }
        }
    };
    /* asn1-1.0.13.js (c) 2013-2017 Kenji Urushima | kjur.github.com/jsrsasign/license
     */
    /**
     * @fileOverview
     * @name asn1-1.0.js
     * @author Kenji Urushima kenji.urushima@gmail.com
     * @version asn1 1.0.13 (2017-Jun-02)
     * @since jsrsasign 2.1
     * @license <a href="https://kjur.github.io/jsrsasign/license/">MIT License</a>
     */
    /**
     * kjur's class library name space
     * <p>
     * This name space provides following name spaces:
     * <ul>
     * <li>{@link KJUR.asn1} - ASN.1 primitive hexadecimal encoder</li>
     * <li>{@link KJUR.asn1.x509} - ASN.1 structure for X.509 certificate and CRL</li>
     * <li>{@link KJUR.crypto} - Java Cryptographic Extension(JCE) style MessageDigest/Signature
     * class and utilities</li>
     * </ul>
     * </p>
     * NOTE: Please ignore method summary and document of this namespace. This caused by a bug of jsdoc2.
     * @name KJUR
     * @namespace kjur's class library name space
     */
    var KJUR = {};
    /**
     * kjur's ASN.1 class library name space
     * <p>
     * This is ITU-T X.690 ASN.1 DER encoder class library and
     * class structure and methods is very similar to
     * org.bouncycastle.asn1 package of
     * well known BouncyCaslte Cryptography Library.
     * <h4>PROVIDING ASN.1 PRIMITIVES</h4>
     * Here are ASN.1 DER primitive classes.
     * <ul>
     * <li>0x01 {@link KJUR.asn1.DERBoolean}</li>
     * <li>0x02 {@link KJUR.asn1.DERInteger}</li>
     * <li>0x03 {@link KJUR.asn1.DERBitString}</li>
     * <li>0x04 {@link KJUR.asn1.DEROctetString}</li>
     * <li>0x05 {@link KJUR.asn1.DERNull}</li>
     * <li>0x06 {@link KJUR.asn1.DERObjectIdentifier}</li>
     * <li>0x0a {@link KJUR.asn1.DEREnumerated}</li>
     * <li>0x0c {@link KJUR.asn1.DERUTF8String}</li>
     * <li>0x12 {@link KJUR.asn1.DERNumericString}</li>
     * <li>0x13 {@link KJUR.asn1.DERPrintableString}</li>
     * <li>0x14 {@link KJUR.asn1.DERTeletexString}</li>
     * <li>0x16 {@link KJUR.asn1.DERIA5String}</li>
     * <li>0x17 {@link KJUR.asn1.DERUTCTime}</li>
     * <li>0x18 {@link KJUR.asn1.DERGeneralizedTime}</li>
     * <li>0x30 {@link KJUR.asn1.DERSequence}</li>
     * <li>0x31 {@link KJUR.asn1.DERSet}</li>
     * </ul>
     * <h4>OTHER ASN.1 CLASSES</h4>
     * <ul>
     * <li>{@link KJUR.asn1.ASN1Object}</li>
     * <li>{@link KJUR.asn1.DERAbstractString}</li>
     * <li>{@link KJUR.asn1.DERAbstractTime}</li>
     * <li>{@link KJUR.asn1.DERAbstractStructured}</li>
     * <li>{@link KJUR.asn1.DERTaggedObject}</li>
     * </ul>
     * <h4>SUB NAME SPACES</h4>
     * <ul>
     * <li>{@link KJUR.asn1.cades} - CAdES long term signature format</li>
     * <li>{@link KJUR.asn1.cms} - Cryptographic Message Syntax</li>
     * <li>{@link KJUR.asn1.csr} - Certificate Signing Request (CSR/PKCS#10)</li>
     * <li>{@link KJUR.asn1.tsp} - RFC 3161 Timestamping Protocol Format</li>
     * <li>{@link KJUR.asn1.x509} - RFC 5280 X.509 certificate and CRL</li>
     * </ul>
     * </p>
     * NOTE: Please ignore method summary and document of this namespace.
     * This caused by a bug of jsdoc2.
     * @name KJUR.asn1
     * @namespace
     */
    if (typeof KJUR.asn1 == "undefined" || !KJUR.asn1)
        KJUR.asn1 = {};
    /**
     * ASN1 utilities class
     * @name KJUR.asn1.ASN1Util
     * @class ASN1 utilities class
     * @since asn1 1.0.2
     */
    KJUR.asn1.ASN1Util = new function() {
        this.integerToByteHex = function(i) {
            var h = i.toString(16);
            if ((h.length % 2) == 1)
                h = '0' + h;
            return h;
        };
        this.bigIntToMinTwosComplementsHex = function(bigIntegerValue) {
            var h = bigIntegerValue.toString(16);
            if (h.substr(0, 1) != '-') {
                if (h.length % 2 == 1) {
                    h = '0' + h;
                } else {
                    if (!h.match(/^[0-7]/)) {
                        h = '00' + h;
                    }
                }
            } else {
                var hPos = h.substr(1);
                var xorLen = hPos.length;
                if (xorLen % 2 == 1) {
                    xorLen += 1;
                } else {
                    if (!h.match(/^[0-7]/)) {
                        xorLen += 2;
                    }
                }
                var hMask = '';
                for (var i = 0; i < xorLen; i++) {
                    hMask += 'f';
                }
                var biMask = new BigInteger(hMask, 16);
                var biNeg = biMask.xor(bigIntegerValue).add(BigInteger.ONE);
                h = biNeg.toString(16).replace(/^-/, '');
            }
            return h;
        };
        /**
         * get PEM string from hexadecimal data and header string
         * @name getPEMStringFromHex
         * @memberOf KJUR.asn1.ASN1Util
         * @function
         * @param {String} dataHex hexadecimal string of PEM body
         * @param {String} pemHeader PEM header string (ex. 'RSA PRIVATE KEY')
         * @return {String} PEM formatted string of input data
         * @description
         * This method converts a hexadecimal string to a PEM string with
         * a specified header. Its line break will be CRLF("\r\n").
         * @example
         * var pem  = KJUR.asn1.ASN1Util.getPEMStringFromHex('616161', 'RSA PRIVATE KEY');
         * // value of pem will be:
         * -----BEGIN PRIVATE KEY-----
         * YWFh
         * -----END PRIVATE KEY-----
         */
        this.getPEMStringFromHex = function(dataHex, pemHeader) {
            return hextopem(dataHex, pemHeader);
        };
        /**
         * generate ASN1Object specifed by JSON parameters
         * @name newObject
         * @memberOf KJUR.asn1.ASN1Util
         * @function
         * @param {Array} param JSON parameter to generate ASN1Object
         * @return {KJUR.asn1.ASN1Object} generated object
         * @since asn1 1.0.3
         * @description
         * generate any ASN1Object specified by JSON param
         * including ASN.1 primitive or structured.
         * Generally 'param' can be described as follows:
         * <blockquote>
         * {TYPE-OF-ASNOBJ: ASN1OBJ-PARAMETER}
         * </blockquote>
         * 'TYPE-OF-ASN1OBJ' can be one of following symbols:
         * <ul>
         * <li>'bool' - DERBoolean</li>
         * <li>'int' - DERInteger</li>
         * <li>'bitstr' - DERBitString</li>
         * <li>'octstr' - DEROctetString</li>
         * <li>'null' - DERNull</li>
         * <li>'oid' - DERObjectIdentifier</li>
         * <li>'enum' - DEREnumerated</li>
         * <li>'utf8str' - DERUTF8String</li>
         * <li>'numstr' - DERNumericString</li>
         * <li>'prnstr' - DERPrintableString</li>
         * <li>'telstr' - DERTeletexString</li>
         * <li>'ia5str' - DERIA5String</li>
         * <li>'utctime' - DERUTCTime</li>
         * <li>'gentime' - DERGeneralizedTime</li>
         * <li>'seq' - DERSequence</li>
         * <li>'set' - DERSet</li>
         * <li>'tag' - DERTaggedObject</li>
         * </ul>
         * @example
         * newObject({'prnstr': 'aaa'});
         * newObject({'seq': [{'int': 3}, {'prnstr': 'aaa'}]})
         * // ASN.1 Tagged Object
         * newObject({'tag': {'tag': 'a1',
         *                    'explicit': true,
         *                    'obj': {'seq': [{'int': 3}, {'prnstr': 'aaa'}]}}});
         * // more simple representation of ASN.1 Tagged Object
         * newObject({'tag': ['a1',
         *                    true,
         *                    {'seq': [
         *                      {'int': 3},
         *                      {'prnstr': 'aaa'}]}
         *                   ]});
         */
        this.newObject = function(param) {
            var _KJUR = KJUR,
                _KJUR_asn1 = _KJUR.asn1,
                _DERBoolean = _KJUR_asn1.DERBoolean,
                _DERInteger = _KJUR_asn1.DERInteger,
                _DERBitString = _KJUR_asn1.DERBitString,
                _DEROctetString = _KJUR_asn1.DEROctetString,
                _DERNull = _KJUR_asn1.DERNull,
                _DERObjectIdentifier = _KJUR_asn1.DERObjectIdentifier,
                _DEREnumerated = _KJUR_asn1.DEREnumerated,
                _DERUTF8String = _KJUR_asn1.DERUTF8String,
                _DERNumericString = _KJUR_asn1.DERNumericString,
                _DERPrintableString = _KJUR_asn1.DERPrintableString,
                _DERTeletexString = _KJUR_asn1.DERTeletexString,
                _DERIA5String = _KJUR_asn1.DERIA5String,
                _DERUTCTime = _KJUR_asn1.DERUTCTime,
                _DERGeneralizedTime = _KJUR_asn1.DERGeneralizedTime,
                _DERSequence = _KJUR_asn1.DERSequence,
                _DERSet = _KJUR_asn1.DERSet,
                _DERTaggedObject = _KJUR_asn1.DERTaggedObject,
                _newObject = _KJUR_asn1.ASN1Util.newObject;
            var keys = Object.keys(param);
            if (keys.length != 1)
                throw "key of param shall be only one.";
            var key = keys[0];
            if (":bool:int:bitstr:octstr:null:oid:enum:utf8str:numstr:prnstr:telstr:ia5str:utctime:gentime:seq:set:tag:".indexOf(":" + key + ":") == -1)
                throw "undefined key: " + key;
            if (key == "bool")
                return new _DERBoolean(param[key]);
            if (key == "int")
                return new _DERInteger(param[key]);
            if (key == "bitstr")
                return new _DERBitString(param[key]);
            if (key == "octstr")
                return new _DEROctetString(param[key]);
            if (key == "null")
                return new _DERNull(param[key]);
            if (key == "oid")
                return new _DERObjectIdentifier(param[key]);
            if (key == "enum")
                return new _DEREnumerated(param[key]);
            if (key == "utf8str")
                return new _DERUTF8String(param[key]);
            if (key == "numstr")
                return new _DERNumericString(param[key]);
            if (key == "prnstr")
                return new _DERPrintableString(param[key]);
            if (key == "telstr")
                return new _DERTeletexString(param[key]);
            if (key == "ia5str")
                return new _DERIA5String(param[key]);
            if (key == "utctime")
                return new _DERUTCTime(param[key]);
            if (key == "gentime")
                return new _DERGeneralizedTime(param[key]);
            if (key == "seq") {
                var paramList = param[key];
                var a = [];
                for (var i = 0; i < paramList.length; i++) {
                    var asn1Obj = _newObject(paramList[i]);
                    a.push(asn1Obj);
                }
                return new _DERSequence({
                    'array': a
                });
            }
            if (key == "set") {
                var paramList = param[key];
                var a = [];
                for (var i = 0; i < paramList.length; i++) {
                    var asn1Obj = _newObject(paramList[i]);
                    a.push(asn1Obj);
                }
                return new _DERSet({
                    'array': a
                });
            }
            if (key == "tag") {
                var tagParam = param[key];
                if (Object.prototype.toString.call(tagParam) === '[object Array]' &&
                    tagParam.length == 3) {
                    var obj = _newObject(tagParam[2]);
                    return new _DERTaggedObject({
                        tag: tagParam[0],
                        explicit: tagParam[1],
                        obj: obj
                    });
                } else {
                    var newParam = {};
                    if (tagParam.explicit !== undefined)
                        newParam.explicit = tagParam.explicit;
                    if (tagParam.tag !== undefined)
                        newParam.tag = tagParam.tag;
                    if (tagParam.obj === undefined)
                        throw "obj shall be specified for 'tag'.";
                    newParam.obj = _newObject(tagParam.obj);
                    return new _DERTaggedObject(newParam);
                }
            }
        };
        /**
         * get encoded hexadecimal string of ASN1Object specifed by JSON parameters
         * @name jsonToASN1HEX
         * @memberOf KJUR.asn1.ASN1Util
         * @function
         * @param {Array} param JSON parameter to generate ASN1Object
         * @return hexadecimal string of ASN1Object
         * @since asn1 1.0.4
         * @description
         * As for ASN.1 object representation of JSON object,
         * please see {@link newObject}.
         * @example
         * jsonToASN1HEX({'prnstr': 'aaa'});
         */
        this.jsonToASN1HEX = function(param) {
            var asn1Obj = this.newObject(param);
            return asn1Obj.getEncodedHex();
        };
    };
    /**
     * get dot noted oid number string from hexadecimal value of OID
     * @name oidHexToInt
     * @memberOf KJUR.asn1.ASN1Util
     * @function
     * @param {String} hex hexadecimal value of object identifier
     * @return {String} dot noted string of object identifier
     * @since jsrsasign 4.8.3 asn1 1.0.7
     * @description
     * This static method converts from hexadecimal string representation of
     * ASN.1 value of object identifier to oid number string.
     * @example
     * KJUR.asn1.ASN1Util.oidHexToInt('550406') &rarr; "2.5.4.6"
     */
    KJUR.asn1.ASN1Util.oidHexToInt = function(hex) {
        var s = "";
        var i01 = parseInt(hex.substr(0, 2), 16);
        var i0 = Math.floor(i01 / 40);
        var i1 = i01 % 40;
        var s = i0 + "." + i1;
        var binbuf = "";
        for (var i = 2; i < hex.length; i += 2) {
            var value = parseInt(hex.substr(i, 2), 16);
            var bin = ("00000000" + value.toString(2)).slice(-8);
            binbuf = binbuf + bin.substr(1, 7);
            if (bin.substr(0, 1) == "0") {
                var bi = new BigInteger(binbuf, 2);
                s = s + "." + bi.toString(10);
                binbuf = "";
            }
        }
        return s;
    };
    /**
     * get hexadecimal value of object identifier from dot noted oid value
     * @name oidIntToHex
     * @memberOf KJUR.asn1.ASN1Util
     * @function
     * @param {String} oidString dot noted string of object identifier
     * @return {String} hexadecimal value of object identifier
     * @since jsrsasign 4.8.3 asn1 1.0.7
     * @description
     * This static method converts from object identifier value string.
     * to hexadecimal string representation of it.
     * @example
     * KJUR.asn1.ASN1Util.oidIntToHex("2.5.4.6") &rarr; "550406"
     */
    KJUR.asn1.ASN1Util.oidIntToHex = function(oidString) {
        var itox = function(i) {
            var h = i.toString(16);
            if (h.length == 1)
                h = '0' + h;
            return h;
        };
        var roidtox = function(roid) {
            var h = '';
            var bi = new BigInteger(roid, 10);
            var b = bi.toString(2);
            var padLen = 7 - b.length % 7;
            if (padLen == 7)
                padLen = 0;
            var bPad = '';
            for (var i = 0; i < padLen; i++)
                bPad += '0';
            b = bPad + b;
            for (var i = 0; i < b.length - 1; i += 7) {
                var b8 = b.substr(i, 7);
                if (i != b.length - 7)
                    b8 = '1' + b8;
                h += itox(parseInt(b8, 2));
            }
            return h;
        };
        if (!oidString.match(/^[0-9.]+$/)) {
            throw "malformed oid string: " + oidString;
        }
        var h = '';
        var a = oidString.split('.');
        var i0 = parseInt(a[0]) * 40 + parseInt(a[1]);
        h += itox(i0);
        a.splice(0, 2);
        for (var i = 0; i < a.length; i++) {
            h += roidtox(a[i]);
        }
        return h;
    };
    // ********************************************************************
    //  Abstract ASN.1 Classes
    // ********************************************************************
    // ********************************************************************
    /**
     * base class for ASN.1 DER encoder object
     * @name KJUR.asn1.ASN1Object
     * @class base class for ASN.1 DER encoder object
     * @property {Boolean} isModified flag whether internal data was changed
     * @property {String} hTLV hexadecimal string of ASN.1 TLV
     * @property {String} hT hexadecimal string of ASN.1 TLV tag(T)
     * @property {String} hL hexadecimal string of ASN.1 TLV length(L)
     * @property {String} hV hexadecimal string of ASN.1 TLV value(V)
     * @description
     */
    KJUR.asn1.ASN1Object = function() {
        var hV = '';
        /**
         * get hexadecimal ASN.1 TLV length(L) bytes from TLV value(V)
         * @name getLengthHexFromValue
         * @memberOf KJUR.asn1.ASN1Object#
         * @function
         * @return {String} hexadecimal string of ASN.1 TLV length(L)
         */
        this.getLengthHexFromValue = function() {
            if (typeof this.hV == "undefined" || this.hV == null) {
                throw "this.hV is null or undefined.";
            }
            if (this.hV.length % 2 == 1) {
                throw "value hex must be even length: n=" + hV.length + ",v=" + this.hV;
            }
            var n = this.hV.length / 2;
            var hN = n.toString(16);
            if (hN.length % 2 == 1) {
                hN = "0" + hN;
            }
            if (n < 128) {
                return hN;
            } else {
                var hNlen = hN.length / 2;
                if (hNlen > 15) {
                    throw "ASN.1 length too long to represent by 8x: n = " + n.toString(16);
                }
                var head = 128 + hNlen;
                return head.toString(16) + hN;
            }
        };
        /**
         * get hexadecimal string of ASN.1 TLV bytes
         * @name getEncodedHex
         * @memberOf KJUR.asn1.ASN1Object#
         * @function
         * @return {String} hexadecimal string of ASN.1 TLV
         */
        this.getEncodedHex = function() {
            if (this.hTLV == null || this.isModified) {
                this.hV = this.getFreshValueHex();
                this.hL = this.getLengthHexFromValue();
                this.hTLV = this.hT + this.hL + this.hV;
                this.isModified = false;
                //alert("first time: " + this.hTLV);
            }
            return this.hTLV;
        };
        /**
         * get hexadecimal string of ASN.1 TLV value(V) bytes
         * @name getValueHex
         * @memberOf KJUR.asn1.ASN1Object#
         * @function
         * @return {String} hexadecimal string of ASN.1 TLV value(V) bytes
         */
        this.getValueHex = function() {
            this.getEncodedHex();
            return this.hV;
        };
        this.getFreshValueHex = function() {
            return '';
        };
    };
    // == BEGIN DERAbstractString ================================================
    /**
     * base class for ASN.1 DER string classes
     * @name KJUR.asn1.DERAbstractString
     * @class base class for ASN.1 DER string classes
     * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
     * @property {String} s internal string of value
     * @extends KJUR.asn1.ASN1Object
     * @description
     * <br/>
     * As for argument 'params' for constructor, you can specify one of
     * following properties:
     * <ul>
     * <li>str - specify initial ASN.1 value(V) by a string</li>
     * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
     * </ul>
     * NOTE: 'params' can be omitted.
     */
    KJUR.asn1.DERAbstractString = function(params) {
        KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
        /**
         * get string value of this string object
         * @name getString
         * @memberOf KJUR.asn1.DERAbstractString#
         * @function
         * @return {String} string value of this string object
         */
        this.getString = function() {
            return this.s;
        };
        /**
         * set value by a string
         * @name setString
         * @memberOf KJUR.asn1.DERAbstractString#
         * @function
         * @param {String} newS value by a string to set
         */
        this.setString = function(newS) {
            this.hTLV = null;
            this.isModified = true;
            this.s = newS;
            this.hV = stohex(this.s);
        };
        /**
         * set value by a hexadecimal string
         * @name setStringHex
         * @memberOf KJUR.asn1.DERAbstractString#
         * @function
         * @param {String} newHexString value by a hexadecimal string to set
         */
        this.setStringHex = function(newHexString) {
            this.hTLV = null;
            this.isModified = true;
            this.s = null;
            this.hV = newHexString;
        };
        this.getFreshValueHex = function() {
            return this.hV;
        };
        if (typeof params != "undefined") {
            if (typeof params == "string") {
                this.setString(params);
            } else if (typeof params['str'] != "undefined") {
                this.setString(params['str']);
            } else if (typeof params['hex'] != "undefined") {
                this.setStringHex(params['hex']);
            }
        }
    };
    YAHOO.lang.extend(KJUR.asn1.DERAbstractString, KJUR.asn1.ASN1Object);
    // == END   DERAbstractString ================================================
    // == BEGIN DERAbstractTime ==================================================
    /**
     * base class for ASN.1 DER Generalized/UTCTime class
     * @name KJUR.asn1.DERAbstractTime
     * @class base class for ASN.1 DER Generalized/UTCTime class
     * @param {Array} params associative array of parameters (ex. {'str': '130430235959Z'})
     * @extends KJUR.asn1.ASN1Object
     * @description
     * @see KJUR.asn1.ASN1Object - superclass
     */
    KJUR.asn1.DERAbstractTime = function(params) {
        KJUR.asn1.DERAbstractTime.superclass.constructor.call(this);
        // --- PRIVATE METHODS --------------------
        this.localDateToUTC = function(d) {
            utc = d.getTime() + (d.getTimezoneOffset() * 60000);
            var utcDate = new Date(utc);
            return utcDate;
        };
        /*
         * format date string by Data object
         * @name formatDate
         * @memberOf KJUR.asn1.AbstractTime;
         * @param {Date} dateObject
         * @param {string} type 'utc' or 'gen'
         * @param {boolean} withMillis flag for with millisections or not
         * @description
         * 'withMillis' flag is supported from asn1 1.0.6.
         */
        this.formatDate = function(dateObject, type, withMillis) {
            var pad = this.zeroPadding;
            var d = this.localDateToUTC(dateObject);
            var year = String(d.getFullYear());
            if (type == 'utc')
                year = year.substr(2, 2);
            var month = pad(String(d.getMonth() + 1), 2);
            var day = pad(String(d.getDate()), 2);
            var hour = pad(String(d.getHours()), 2);
            var min = pad(String(d.getMinutes()), 2);
            var sec = pad(String(d.getSeconds()), 2);
            var s = year + month + day + hour + min + sec;
            if (withMillis === true) {
                var millis = d.getMilliseconds();
                if (millis != 0) {
                    var sMillis = pad(String(millis), 3);
                    sMillis = sMillis.replace(/[0]+$/, "");
                    s = s + "." + sMillis;
                }
            }
            return s + "Z";
        };
        this.zeroPadding = function(s, len) {
            if (s.length >= len)
                return s;
            return new Array(len - s.length + 1).join('0') + s;
        };
        // --- PUBLIC METHODS --------------------
        /**
         * get string value of this string object
         * @name getString
         * @memberOf KJUR.asn1.DERAbstractTime#
         * @function
         * @return {String} string value of this time object
         */
        this.getString = function() {
            return this.s;
        };
        /**
         * set value by a string
         * @name setString
         * @memberOf KJUR.asn1.DERAbstractTime#
         * @function
         * @param {String} newS value by a string to set such like "130430235959Z"
         */
        this.setString = function(newS) {
            this.hTLV = null;
            this.isModified = true;
            this.s = newS;
            this.hV = stohex(newS);
        };
        /**
         * set value by a Date object
         * @name setByDateValue
         * @memberOf KJUR.asn1.DERAbstractTime#
         * @function
         * @param {Integer} year year of date (ex. 2013)
         * @param {Integer} month month of date between 1 and 12 (ex. 12)
         * @param {Integer} day day of month
         * @param {Integer} hour hours of date
         * @param {Integer} min minutes of date
         * @param {Integer} sec seconds of date
         */
        this.setByDateValue = function(year, month, day, hour, min, sec) {
            var dateObject = new Date(Date.UTC(year, month - 1, day, hour, min, sec, 0));
            this.setByDate(dateObject);
        };
        this.getFreshValueHex = function() {
            return this.hV;
        };
    };
    YAHOO.lang.extend(KJUR.asn1.DERAbstractTime, KJUR.asn1.ASN1Object);
    // == END   DERAbstractTime ==================================================
    // == BEGIN DERAbstractStructured ============================================
    /**
     * base class for ASN.1 DER structured class
     * @name KJUR.asn1.DERAbstractStructured
     * @class base class for ASN.1 DER structured class
     * @property {Array} asn1Array internal array of ASN1Object
     * @extends KJUR.asn1.ASN1Object
     * @description
     * @see KJUR.asn1.ASN1Object - superclass
     */
    KJUR.asn1.DERAbstractStructured = function(params) {
        KJUR.asn1.DERAbstractString.superclass.constructor.call(this);
        /**
         * set value by array of ASN1Object
         * @name setByASN1ObjectArray
         * @memberOf KJUR.asn1.DERAbstractStructured#
         * @function
         * @param {array} asn1ObjectArray array of ASN1Object to set
         */
        this.setByASN1ObjectArray = function(asn1ObjectArray) {
            this.hTLV = null;
            this.isModified = true;
            this.asn1Array = asn1ObjectArray;
        };
        /**
         * append an ASN1Object to internal array
         * @name appendASN1Object
         * @memberOf KJUR.asn1.DERAbstractStructured#
         * @function
         * @param {ASN1Object} asn1Object to add
         */
        this.appendASN1Object = function(asn1Object) {
            this.hTLV = null;
            this.isModified = true;
            this.asn1Array.push(asn1Object);
        };
        this.asn1Array = new Array();
        if (typeof params != "undefined") {
            if (typeof params['array'] != "undefined") {
                this.asn1Array = params['array'];
            }
        }
    };
    YAHOO.lang.extend(KJUR.asn1.DERAbstractStructured, KJUR.asn1.ASN1Object);
    // ********************************************************************
    //  ASN.1 Object Classes
    // ********************************************************************
    // ********************************************************************
    /**
     * class for ASN.1 DER Boolean
     * @name KJUR.asn1.DERBoolean
     * @class class for ASN.1 DER Boolean
     * @extends KJUR.asn1.ASN1Object
     * @description
     * @see KJUR.asn1.ASN1Object - superclass
     */
    KJUR.asn1.DERBoolean = function() {
        KJUR.asn1.DERBoolean.superclass.constructor.call(this);
        this.hT = "01";
        this.hTLV = "0101ff";
    };
    YAHOO.lang.extend(KJUR.asn1.DERBoolean, KJUR.asn1.ASN1Object);
    // ********************************************************************
    /**
     * class for ASN.1 DER Integer
     * @name KJUR.asn1.DERInteger
     * @class class for ASN.1 DER Integer
     * @extends KJUR.asn1.ASN1Object
     * @description
     * <br/>
     * As for argument 'params' for constructor, you can specify one of
     * following properties:
     * <ul>
     * <li>int - specify initial ASN.1 value(V) by integer value</li>
     * <li>bigint - specify initial ASN.1 value(V) by BigInteger object</li>
     * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
     * </ul>
     * NOTE: 'params' can be omitted.
     */
    KJUR.asn1.DERInteger = function(params) {
        KJUR.asn1.DERInteger.superclass.constructor.call(this);
        this.hT = "02";
        /**
         * set value by Tom Wu's BigInteger object
         * @name setByBigInteger
         * @memberOf KJUR.asn1.DERInteger#
         * @function
         * @param {BigInteger} bigIntegerValue to set
         */
        this.setByBigInteger = function(bigIntegerValue) {
            this.hTLV = null;
            this.isModified = true;
            this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(bigIntegerValue);
        };
        /**
         * set value by integer value
         * @name setByInteger
         * @memberOf KJUR.asn1.DERInteger
         * @function
         * @param {Integer} integer value to set
         */
        this.setByInteger = function(intValue) {
            var bi = new BigInteger(String(intValue), 10);
            this.setByBigInteger(bi);
        };
        /**
         * set value by integer value
         * @name setValueHex
         * @memberOf KJUR.asn1.DERInteger#
         * @function
         * @param {String} hexadecimal string of integer value
         * @description
         * <br/>
         * NOTE: Value shall be represented by minimum octet length of
         * two's complement representation.
         * @example
         * new KJUR.asn1.DERInteger(123);
         * new KJUR.asn1.DERInteger({'int': 123});
         * new KJUR.asn1.DERInteger({'hex': '1fad'});
         */
        this.setValueHex = function(newHexString) {
            this.hV = newHexString;
        };
        this.getFreshValueHex = function() {
            return this.hV;
        };
        if (typeof params != "undefined") {
            if (typeof params['bigint'] != "undefined") {
                this.setByBigInteger(params['bigint']);
            } else if (typeof params['int'] != "undefined") {
                this.setByInteger(params['int']);
            } else if (typeof params == "number") {
                this.setByInteger(params);
            } else if (typeof params['hex'] != "undefined") {
                this.setValueHex(params['hex']);
            }
        }
    };
    YAHOO.lang.extend(KJUR.asn1.DERInteger, KJUR.asn1.ASN1Object);
    // ********************************************************************
    /**
     * class for ASN.1 DER encoded BitString primitive
     * @name KJUR.asn1.DERBitString
     * @class class for ASN.1 DER encoded BitString primitive
     * @extends KJUR.asn1.ASN1Object
     * @description
     * <br/>
     * As for argument 'params' for constructor, you can specify one of
     * following properties:
     * <ul>
     * <li>bin - specify binary string (ex. '10111')</li>
     * <li>array - specify array of boolean (ex. [true,false,true,true])</li>
     * <li>hex - specify hexadecimal string of ASN.1 value(V) including unused bits</li>
     * <li>obj - specify {@link KJUR.asn1.ASN1Util.newObject}
     * argument for "BitString encapsulates" structure.</li>
     * </ul>
     * NOTE1: 'params' can be omitted.<br/>
     * NOTE2: 'obj' parameter have been supported since
     * asn1 1.0.11, jsrsasign 6.1.1 (2016-Sep-25).<br/>
     * @example
     * // default constructor
     * o = new KJUR.asn1.DERBitString();
     * // initialize with binary string
     * o = new KJUR.asn1.DERBitString({bin: "1011"});
     * // initialize with boolean array
     * o = new KJUR.asn1.DERBitString({array: [true,false,true,true]});
     * // initialize with hexadecimal string (04 is unused bits)
     * o = new KJUR.asn1.DEROctetString({hex: "04bac0"});
     * // initialize with ASN1Util.newObject argument for encapsulated
     * o = new KJUR.asn1.DERBitString({obj: {seq: [{int: 3}, {prnstr: 'aaa'}]}});
     * // above generates a ASN.1 data like this:
     * // BIT STRING, encapsulates {
     * //   SEQUENCE {
     * //     INTEGER 3
     * //     PrintableString 'aaa'
     * //     }
     * //   }
     */
    KJUR.asn1.DERBitString = function(params) {
        if (params !== undefined && typeof params.obj !== "undefined") {
            var o = KJUR.asn1.ASN1Util.newObject(params.obj);
            params.hex = "00" + o.getEncodedHex();
        }
        KJUR.asn1.DERBitString.superclass.constructor.call(this);
        this.hT = "03";
        /**
         * set ASN.1 value(V) by a hexadecimal string including unused bits
         * @name setHexValueIncludingUnusedBits
         * @memberOf KJUR.asn1.DERBitString#
         * @function
         * @param {String} newHexStringIncludingUnusedBits
         */
        this.setHexValueIncludingUnusedBits = function(newHexStringIncludingUnusedBits) {
            this.hTLV = null;
            this.isModified = true;
            this.hV = newHexStringIncludingUnusedBits;
        };
        /**
         * set ASN.1 value(V) by unused bit and hexadecimal string of value
         * @name setUnusedBitsAndHexValue
         * @memberOf KJUR.asn1.DERBitString#
         * @function
         * @param {Integer} unusedBits
         * @param {String} hValue
         */
        this.setUnusedBitsAndHexValue = function(unusedBits, hValue) {
            if (unusedBits < 0 || 7 < unusedBits) {
                throw "unused bits shall be from 0 to 7: u = " + unusedBits;
            }
            var hUnusedBits = "0" + unusedBits;
            this.hTLV = null;
            this.isModified = true;
            this.hV = hUnusedBits + hValue;
        };
        /**
         * set ASN.1 DER BitString by binary string<br/>
         * @name setByBinaryString
         * @memberOf KJUR.asn1.DERBitString#
         * @function
         * @param {String} binaryString binary value string (i.e. '10111')
         * @description
         * Its unused bits will be calculated automatically by length of
         * 'binaryValue'. <br/>
         * NOTE: Trailing zeros '0' will be ignored.
         * @example
         * o = new KJUR.asn1.DERBitString();
         * o.setByBooleanArray("01011");
         */
        this.setByBinaryString = function(binaryString) {
            binaryString = binaryString.replace(/0+$/, '');
            var unusedBits = 8 - binaryString.length % 8;
            if (unusedBits == 8)
                unusedBits = 0;
            for (var i = 0; i <= unusedBits; i++) {
                binaryString += '0';
            }
            var h = '';
            for (var i = 0; i < binaryString.length - 1; i += 8) {
                var b = binaryString.substr(i, 8);
                var x = parseInt(b, 2).toString(16);
                if (x.length == 1)
                    x = '0' + x;
                h += x;
            }
            this.hTLV = null;
            this.isModified = true;
            this.hV = '0' + unusedBits + h;
        };
        /**
         * set ASN.1 TLV value(V) by an array of boolean<br/>
         * @name setByBooleanArray
         * @memberOf KJUR.asn1.DERBitString#
         * @function
         * @param {array} booleanArray array of boolean (ex. [true, false, true])
         * @description
         * NOTE: Trailing falses will be ignored in the ASN.1 DER Object.
         * @example
         * o = new KJUR.asn1.DERBitString();
         * o.setByBooleanArray([false, true, false, true, true]);
         */
        this.setByBooleanArray = function(booleanArray) {
            var s = '';
            for (var i = 0; i < booleanArray.length; i++) {
                if (booleanArray[i] == true) {
                    s += '1';
                } else {
                    s += '0';
                }
            }
            this.setByBinaryString(s);
        };
        /**
         * generate an array of falses with specified length<br/>
         * @name newFalseArray
         * @memberOf KJUR.asn1.DERBitString
         * @function
         * @param {Integer} nLength length of array to generate
         * @return {array} array of boolean falses
         * @description
         * This static method may be useful to initialize boolean array.
         * @example
         * o = new KJUR.asn1.DERBitString();
         * o.newFalseArray(3) &rarr; [false, false, false]
         */
        this.newFalseArray = function(nLength) {
            var a = new Array(nLength);
            for (var i = 0; i < nLength; i++) {
                a[i] = false;
            }
            return a;
        };
        this.getFreshValueHex = function() {
            return this.hV;
        };
        if (typeof params != "undefined") {
            if (typeof params == "string" && params.toLowerCase().match(/^[0-9a-f]+$/)) {
                this.setHexValueIncludingUnusedBits(params);
            } else if (typeof params['hex'] != "undefined") {
                this.setHexValueIncludingUnusedBits(params['hex']);
            } else if (typeof params['bin'] != "undefined") {
                this.setByBinaryString(params['bin']);
            } else if (typeof params['array'] != "undefined") {
                this.setByBooleanArray(params['array']);
            }
        }
    };
    YAHOO.lang.extend(KJUR.asn1.DERBitString, KJUR.asn1.ASN1Object);
    // ********************************************************************
    /**
     * class for ASN.1 DER OctetString<br/>
     * @name KJUR.asn1.DEROctetString
     * @class class for ASN.1 DER OctetString
     * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
     * @extends KJUR.asn1.DERAbstractString
     * @description
     * This class provides ASN.1 OctetString simple type.<br/>
     * Supported "params" attributes are:
     * <ul>
     * <li>str - to set a string as a value</li>
     * <li>hex - to set a hexadecimal string as a value</li>
     * <li>obj - to set a encapsulated ASN.1 value by JSON object
     * which is defined in {@link KJUR.asn1.ASN1Util.newObject}</li>
     * </ul>
     * NOTE: A parameter 'obj' have been supported
     * for "OCTET STRING, encapsulates" structure.
     * since asn1 1.0.11, jsrsasign 6.1.1 (2016-Sep-25).
     * @see KJUR.asn1.DERAbstractString - superclass
     * @example
     * // default constructor
     * o = new KJUR.asn1.DEROctetString();
     * // initialize with string
     * o = new KJUR.asn1.DEROctetString({str: "aaa"});
     * // initialize with hexadecimal string
     * o = new KJUR.asn1.DEROctetString({hex: "616161"});
     * // initialize with ASN1Util.newObject argument
     * o = new KJUR.asn1.DEROctetString({obj: {seq: [{int: 3}, {prnstr: 'aaa'}]}});
     * // above generates a ASN.1 data like this:
     * // OCTET STRING, encapsulates {
     * //   SEQUENCE {
     * //     INTEGER 3
     * //     PrintableString 'aaa'
     * //     }
     * //   }
     */
    KJUR.asn1.DEROctetString = function(params) {
        if (params !== undefined && typeof params.obj !== "undefined") {
            var o = KJUR.asn1.ASN1Util.newObject(params.obj);
            params.hex = o.getEncodedHex();
        }
        KJUR.asn1.DEROctetString.superclass.constructor.call(this, params);
        this.hT = "04";
    };
    YAHOO.lang.extend(KJUR.asn1.DEROctetString, KJUR.asn1.DERAbstractString);
    // ********************************************************************
    /**
     * class for ASN.1 DER Null
     * @name KJUR.asn1.DERNull
     * @class class for ASN.1 DER Null
     * @extends KJUR.asn1.ASN1Object
     * @description
     * @see KJUR.asn1.ASN1Object - superclass
     */
    KJUR.asn1.DERNull = function() {
        KJUR.asn1.DERNull.superclass.constructor.call(this);
        this.hT = "05";
        this.hTLV = "0500";
    };
    YAHOO.lang.extend(KJUR.asn1.DERNull, KJUR.asn1.ASN1Object);
    // ********************************************************************
    /**
     * class for ASN.1 DER ObjectIdentifier
     * @name KJUR.asn1.DERObjectIdentifier
     * @class class for ASN.1 DER ObjectIdentifier
     * @param {Array} params associative array of parameters (ex. {'oid': '2.5.4.5'})
     * @extends KJUR.asn1.ASN1Object
     * @description
     * <br/>
     * As for argument 'params' for constructor, you can specify one of
     * following properties:
     * <ul>
     * <li>oid - specify initial ASN.1 value(V) by a oid string (ex. 2.5.4.13)</li>
     * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
     * </ul>
     * NOTE: 'params' can be omitted.
     */
    KJUR.asn1.DERObjectIdentifier = function(params) {
        var itox = function(i) {
            var h = i.toString(16);
            if (h.length == 1)
                h = '0' + h;
            return h;
        };
        var roidtox = function(roid) {
            var h = '';
            var bi = new BigInteger(roid, 10);
            var b = bi.toString(2);
            var padLen = 7 - b.length % 7;
            if (padLen == 7)
                padLen = 0;
            var bPad = '';
            for (var i = 0; i < padLen; i++)
                bPad += '0';
            b = bPad + b;
            for (var i = 0; i < b.length - 1; i += 7) {
                var b8 = b.substr(i, 7);
                if (i != b.length - 7)
                    b8 = '1' + b8;
                h += itox(parseInt(b8, 2));
            }
            return h;
        };
        KJUR.asn1.DERObjectIdentifier.superclass.constructor.call(this);
        this.hT = "06";
        /**
         * set value by a hexadecimal string
         * @name setValueHex
         * @memberOf KJUR.asn1.DERObjectIdentifier#
         * @function
         * @param {String} newHexString hexadecimal value of OID bytes
         */
        this.setValueHex = function(newHexString) {
            this.hTLV = null;
            this.isModified = true;
            this.s = null;
            this.hV = newHexString;
        };
        /**
         * set value by a OID string<br/>
         * @name setValueOidString
         * @memberOf KJUR.asn1.DERObjectIdentifier#
         * @function
         * @param {String} oidString OID string (ex. 2.5.4.13)
         * @example
         * o = new KJUR.asn1.DERObjectIdentifier();
         * o.setValueOidString("2.5.4.13");
         */
        this.setValueOidString = function(oidString) {
            if (!oidString.match(/^[0-9.]+$/)) {
                throw "malformed oid string: " + oidString;
            }
            var h = '';
            var a = oidString.split('.');
            var i0 = parseInt(a[0]) * 40 + parseInt(a[1]);
            h += itox(i0);
            a.splice(0, 2);
            for (var i = 0; i < a.length; i++) {
                h += roidtox(a[i]);
            }
            this.hTLV = null;
            this.isModified = true;
            this.s = null;
            this.hV = h;
        };
        /**
         * set value by a OID name
         * @name setValueName
         * @memberOf KJUR.asn1.DERObjectIdentifier#
         * @function
         * @param {String} oidName OID name (ex. 'serverAuth')
         * @since 1.0.1
         * @description
         * OID name shall be defined in 'KJUR.asn1.x509.OID.name2oidList'.
         * Otherwise raise error.
         * @example
         * o = new KJUR.asn1.DERObjectIdentifier();
         * o.setValueName("serverAuth");
         */
        this.setValueName = function(oidName) {
            var oid = KJUR.asn1.x509.OID.name2oid(oidName);
            if (oid !== '') {
                this.setValueOidString(oid);
            } else {
                throw "DERObjectIdentifier oidName undefined: " + oidName;
            }
        };
        this.getFreshValueHex = function() {
            return this.hV;
        };
        if (params !== undefined) {
            if (typeof params === "string") {
                if (params.match(/^[0-2].[0-9.]+$/)) {
                    this.setValueOidString(params);
                } else {
                    this.setValueName(params);
                }
            } else if (params.oid !== undefined) {
                this.setValueOidString(params.oid);
            } else if (params.hex !== undefined) {
                this.setValueHex(params.hex);
            } else if (params.name !== undefined) {
                this.setValueName(params.name);
            }
        }
    };
    YAHOO.lang.extend(KJUR.asn1.DERObjectIdentifier, KJUR.asn1.ASN1Object);
    // ********************************************************************
    /**
     * class for ASN.1 DER Enumerated
     * @name KJUR.asn1.DEREnumerated
     * @class class for ASN.1 DER Enumerated
     * @extends KJUR.asn1.ASN1Object
     * @description
     * <br/>
     * As for argument 'params' for constructor, you can specify one of
     * following properties:
     * <ul>
     * <li>int - specify initial ASN.1 value(V) by integer value</li>
     * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
     * </ul>
     * NOTE: 'params' can be omitted.
     * @example
     * new KJUR.asn1.DEREnumerated(123);
     * new KJUR.asn1.DEREnumerated({int: 123});
     * new KJUR.asn1.DEREnumerated({hex: '1fad'});
     */
    KJUR.asn1.DEREnumerated = function(params) {
        KJUR.asn1.DEREnumerated.superclass.constructor.call(this);
        this.hT = "0a";
        /**
         * set value by Tom Wu's BigInteger object
         * @name setByBigInteger
         * @memberOf KJUR.asn1.DEREnumerated#
         * @function
         * @param {BigInteger} bigIntegerValue to set
         */
        this.setByBigInteger = function(bigIntegerValue) {
            this.hTLV = null;
            this.isModified = true;
            this.hV = KJUR.asn1.ASN1Util.bigIntToMinTwosComplementsHex(bigIntegerValue);
        };
        /**
         * set value by integer value
         * @name setByInteger
         * @memberOf KJUR.asn1.DEREnumerated#
         * @function
         * @param {Integer} integer value to set
         */
        this.setByInteger = function(intValue) {
            var bi = new BigInteger(String(intValue), 10);
            this.setByBigInteger(bi);
        };
        /**
         * set value by integer value
         * @name setValueHex
         * @memberOf KJUR.asn1.DEREnumerated#
         * @function
         * @param {String} hexadecimal string of integer value
         * @description
         * <br/>
         * NOTE: Value shall be represented by minimum octet length of
         * two's complement representation.
         */
        this.setValueHex = function(newHexString) {
            this.hV = newHexString;
        };
        this.getFreshValueHex = function() {
            return this.hV;
        };
        if (typeof params != "undefined") {
            if (typeof params['int'] != "undefined") {
                this.setByInteger(params['int']);
            } else if (typeof params == "number") {
                this.setByInteger(params);
            } else if (typeof params['hex'] != "undefined") {
                this.setValueHex(params['hex']);
            }
        }
    };
    YAHOO.lang.extend(KJUR.asn1.DEREnumerated, KJUR.asn1.ASN1Object);
    // ********************************************************************
    /**
     * class for ASN.1 DER UTF8String
     * @name KJUR.asn1.DERUTF8String
     * @class class for ASN.1 DER UTF8String
     * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
     * @extends KJUR.asn1.DERAbstractString
     * @description
     * @see KJUR.asn1.DERAbstractString - superclass
     */
    KJUR.asn1.DERUTF8String = function(params) {
        KJUR.asn1.DERUTF8String.superclass.constructor.call(this, params);
        this.hT = "0c";
    };
    YAHOO.lang.extend(KJUR.asn1.DERUTF8String, KJUR.asn1.DERAbstractString);
    // ********************************************************************
    /**
     * class for ASN.1 DER NumericString
     * @name KJUR.asn1.DERNumericString
     * @class class for ASN.1 DER NumericString
     * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
     * @extends KJUR.asn1.DERAbstractString
     * @description
     * @see KJUR.asn1.DERAbstractString - superclass
     */
    KJUR.asn1.DERNumericString = function(params) {
        KJUR.asn1.DERNumericString.superclass.constructor.call(this, params);
        this.hT = "12";
    };
    YAHOO.lang.extend(KJUR.asn1.DERNumericString, KJUR.asn1.DERAbstractString);
    // ********************************************************************
    /**
     * class for ASN.1 DER PrintableString
     * @name KJUR.asn1.DERPrintableString
     * @class class for ASN.1 DER PrintableString
     * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
     * @extends KJUR.asn1.DERAbstractString
     * @description
     * @see KJUR.asn1.DERAbstractString - superclass
     */
    KJUR.asn1.DERPrintableString = function(params) {
        KJUR.asn1.DERPrintableString.superclass.constructor.call(this, params);
        this.hT = "13";
    };
    YAHOO.lang.extend(KJUR.asn1.DERPrintableString, KJUR.asn1.DERAbstractString);
    // ********************************************************************
    /**
     * class for ASN.1 DER TeletexString
     * @name KJUR.asn1.DERTeletexString
     * @class class for ASN.1 DER TeletexString
     * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
     * @extends KJUR.asn1.DERAbstractString
     * @description
     * @see KJUR.asn1.DERAbstractString - superclass
     */
    KJUR.asn1.DERTeletexString = function(params) {
        KJUR.asn1.DERTeletexString.superclass.constructor.call(this, params);
        this.hT = "14";
    };
    YAHOO.lang.extend(KJUR.asn1.DERTeletexString, KJUR.asn1.DERAbstractString);
    // ********************************************************************
    /**
     * class for ASN.1 DER IA5String
     * @name KJUR.asn1.DERIA5String
     * @class class for ASN.1 DER IA5String
     * @param {Array} params associative array of parameters (ex. {'str': 'aaa'})
     * @extends KJUR.asn1.DERAbstractString
     * @description
     * @see KJUR.asn1.DERAbstractString - superclass
     */
    KJUR.asn1.DERIA5String = function(params) {
        KJUR.asn1.DERIA5String.superclass.constructor.call(this, params);
        this.hT = "16";
    };
    YAHOO.lang.extend(KJUR.asn1.DERIA5String, KJUR.asn1.DERAbstractString);
    // ********************************************************************
    /**
     * class for ASN.1 DER UTCTime
     * @name KJUR.asn1.DERUTCTime
     * @class class for ASN.1 DER UTCTime
     * @param {Array} params associative array of parameters (ex. {'str': '130430235959Z'})
     * @extends KJUR.asn1.DERAbstractTime
     * @description
     * <br/>
     * As for argument 'params' for constructor, you can specify one of
     * following properties:
     * <ul>
     * <li>str - specify initial ASN.1 value(V) by a string (ex.'130430235959Z')</li>
     * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
     * <li>date - specify Date object.</li>
     * </ul>
     * NOTE: 'params' can be omitted.
     * <h4>EXAMPLES</h4>
     * @example
     * d1 = new KJUR.asn1.DERUTCTime();
     * d1.setString('130430125959Z');
     *
     * d2 = new KJUR.asn1.DERUTCTime({'str': '130430125959Z'});
     * d3 = new KJUR.asn1.DERUTCTime({'date': new Date(Date.UTC(2015, 0, 31, 0, 0, 0, 0))});
     * d4 = new KJUR.asn1.DERUTCTime('130430125959Z');
     */
    KJUR.asn1.DERUTCTime = function(params) {
        KJUR.asn1.DERUTCTime.superclass.constructor.call(this, params);
        this.hT = "17";
        /**
         * set value by a Date object<br/>
         * @name setByDate
         * @memberOf KJUR.asn1.DERUTCTime#
         * @function
         * @param {Date} dateObject Date object to set ASN.1 value(V)
         * @example
         * o = new KJUR.asn1.DERUTCTime();
         * o.setByDate(new Date("2016/12/31"));
         */
        this.setByDate = function(dateObject) {
            this.hTLV = null;
            this.isModified = true;
            this.date = dateObject;
            this.s = this.formatDate(this.date, 'utc');
            this.hV = stohex(this.s);
        };
        this.getFreshValueHex = function() {
            if (typeof this.date == "undefined" && typeof this.s == "undefined") {
                this.date = new Date();
                this.s = this.formatDate(this.date, 'utc');
                this.hV = stohex(this.s);
            }
            return this.hV;
        };
        if (params !== undefined) {
            if (params.str !== undefined) {
                this.setString(params.str);
            } else if (typeof params == "string" && params.match(/^[0-9]{12}Z$/)) {
                this.setString(params);
            } else if (params.hex !== undefined) {
                this.setStringHex(params.hex);
            } else if (params.date !== undefined) {
                this.setByDate(params.date);
            }
        }
    };
    YAHOO.lang.extend(KJUR.asn1.DERUTCTime, KJUR.asn1.DERAbstractTime);
    // ********************************************************************
    /**
     * class for ASN.1 DER GeneralizedTime
     * @name KJUR.asn1.DERGeneralizedTime
     * @class class for ASN.1 DER GeneralizedTime
     * @param {Array} params associative array of parameters (ex. {'str': '20130430235959Z'})
     * @property {Boolean} withMillis flag to show milliseconds or not
     * @extends KJUR.asn1.DERAbstractTime
     * @description
     * <br/>
     * As for argument 'params' for constructor, you can specify one of
     * following properties:
     * <ul>
     * <li>str - specify initial ASN.1 value(V) by a string (ex.'20130430235959Z')</li>
     * <li>hex - specify initial ASN.1 value(V) by a hexadecimal string</li>
     * <li>date - specify Date object.</li>
     * <li>millis - specify flag to show milliseconds (from 1.0.6)</li>
     * </ul>
     * NOTE1: 'params' can be omitted.
     * NOTE2: 'withMillis' property is supported from asn1 1.0.6.
     */
    KJUR.asn1.DERGeneralizedTime = function(params) {
        KJUR.asn1.DERGeneralizedTime.superclass.constructor.call(this, params);
        this.hT = "18";
        this.withMillis = false;
        /**
         * set value by a Date object
         * @name setByDate
         * @memberOf KJUR.asn1.DERGeneralizedTime#
         * @function
         * @param {Date} dateObject Date object to set ASN.1 value(V)
         * @example
         * When you specify UTC time, use 'Date.UTC' method like this:<br/>
         * o1 = new DERUTCTime();
         * o1.setByDate(date);
         *
         * date = new Date(Date.UTC(2015, 0, 31, 23, 59, 59, 0)); #2015JAN31 23:59:59
         */
        this.setByDate = function(dateObject) {
            this.hTLV = null;
            this.isModified = true;
            this.date = dateObject;
            this.s = this.formatDate(this.date, 'gen', this.withMillis);
            this.hV = stohex(this.s);
        };
        this.getFreshValueHex = function() {
            if (this.date === undefined && this.s === undefined) {
                this.date = new Date();
                this.s = this.formatDate(this.date, 'gen', this.withMillis);
                this.hV = stohex(this.s);
            }
            return this.hV;
        };
        if (params !== undefined) {
            if (params.str !== undefined) {
                this.setString(params.str);
            } else if (typeof params == "string" && params.match(/^[0-9]{14}Z$/)) {
                this.setString(params);
            } else if (params.hex !== undefined) {
                this.setStringHex(params.hex);
            } else if (params.date !== undefined) {
                this.setByDate(params.date);
            }
            if (params.millis === true) {
                this.withMillis = true;
            }
        }
    };
    YAHOO.lang.extend(KJUR.asn1.DERGeneralizedTime, KJUR.asn1.DERAbstractTime);
    // ********************************************************************
    /**
     * class for ASN.1 DER Sequence
     * @name KJUR.asn1.DERSequence
     * @class class for ASN.1 DER Sequence
     * @extends KJUR.asn1.DERAbstractStructured
     * @description
     * <br/>
     * As for argument 'params' for constructor, you can specify one of
     * following properties:
     * <ul>
     * <li>array - specify array of ASN1Object to set elements of content</li>
     * </ul>
     * NOTE: 'params' can be omitted.
     */
    KJUR.asn1.DERSequence = function(params) {
        KJUR.asn1.DERSequence.superclass.constructor.call(this, params);
        this.hT = "30";
        this.getFreshValueHex = function() {
            var h = '';
            for (var i = 0; i < this.asn1Array.length; i++) {
                var asn1Obj = this.asn1Array[i];
                h += asn1Obj.getEncodedHex();
            }
            this.hV = h;
            return this.hV;
        };
    };
    YAHOO.lang.extend(KJUR.asn1.DERSequence, KJUR.asn1.DERAbstractStructured);
    // ********************************************************************
    /**
     * class for ASN.1 DER Set
     * @name KJUR.asn1.DERSet
     * @class class for ASN.1 DER Set
     * @extends KJUR.asn1.DERAbstractStructured
     * @description
     * <br/>
     * As for argument 'params' for constructor, you can specify one of
     * following properties:
     * <ul>
     * <li>array - specify array of ASN1Object to set elements of content</li>
     * <li>sortflag - flag for sort (default: true). ASN.1 BER is not sorted in 'SET OF'.</li>
     * </ul>
     * NOTE1: 'params' can be omitted.<br/>
     * NOTE2: sortflag is supported since 1.0.5.
     */
    KJUR.asn1.DERSet = function(params) {
        KJUR.asn1.DERSet.superclass.constructor.call(this, params);
        this.hT = "31";
        this.sortFlag = true; // item shall be sorted only in ASN.1 DER
        this.getFreshValueHex = function() {
            var a = new Array();
            for (var i = 0; i < this.asn1Array.length; i++) {
                var asn1Obj = this.asn1Array[i];
                a.push(asn1Obj.getEncodedHex());
            }
            if (this.sortFlag == true)
                a.sort();
            this.hV = a.join('');
            return this.hV;
        };
        if (typeof params != "undefined") {
            if (typeof params.sortflag != "undefined" &&
                params.sortflag == false)
                this.sortFlag = false;
        }
    };
    YAHOO.lang.extend(KJUR.asn1.DERSet, KJUR.asn1.DERAbstractStructured);
    // ********************************************************************
    /**
     * class for ASN.1 DER TaggedObject
     * @name KJUR.asn1.DERTaggedObject
     * @class class for ASN.1 DER TaggedObject
     * @extends KJUR.asn1.ASN1Object
     * @description
     * <br/>
     * Parameter 'tagNoNex' is ASN.1 tag(T) value for this object.
     * For example, if you find '[1]' tag in a ASN.1 dump,
     * 'tagNoHex' will be 'a1'.
     * <br/>
     * As for optional argument 'params' for constructor, you can specify *ANY* of
     * following properties:
     * <ul>
     * <li>explicit - specify true if this is explicit tag otherwise false
     *     (default is 'true').</li>
     * <li>tag - specify tag (default is 'a0' which means [0])</li>
     * <li>obj - specify ASN1Object which is tagged</li>
     * </ul>
     * @example
     * d1 = new KJUR.asn1.DERUTF8String({'str':'a'});
     * d2 = new KJUR.asn1.DERTaggedObject({'obj': d1});
     * hex = d2.getEncodedHex();
     */
    KJUR.asn1.DERTaggedObject = function(params) {
        KJUR.asn1.DERTaggedObject.superclass.constructor.call(this);
        this.hT = "a0";
        this.hV = '';
        this.isExplicit = true;
        this.asn1Object = null;
        /**
         * set value by an ASN1Object
         * @name setString
         * @memberOf KJUR.asn1.DERTaggedObject#
         * @function
         * @param {Boolean} isExplicitFlag flag for explicit/implicit tag
         * @param {Integer} tagNoHex hexadecimal string of ASN.1 tag
         * @param {ASN1Object} asn1Object ASN.1 to encapsulate
         */
        this.setASN1Object = function(isExplicitFlag, tagNoHex, asn1Object) {
            this.hT = tagNoHex;
            this.isExplicit = isExplicitFlag;
            this.asn1Object = asn1Object;
            if (this.isExplicit) {
                this.hV = this.asn1Object.getEncodedHex();
                this.hTLV = null;
                this.isModified = true;
            } else {
                this.hV = null;
                this.hTLV = asn1Object.getEncodedHex();
                this.hTLV = this.hTLV.replace(/^../, tagNoHex);
                this.isModified = false;
            }
        };
        this.getFreshValueHex = function() {
            return this.hV;
        };
        if (typeof params != "undefined") {
            if (typeof params['tag'] != "undefined") {
                this.hT = params['tag'];
            }
            if (typeof params['explicit'] != "undefined") {
                this.isExplicit = params['explicit'];
            }
            if (typeof params['obj'] != "undefined") {
                this.asn1Object = params['obj'];
                this.setASN1Object(this.isExplicit, this.hT, this.asn1Object);
            }
        }
    };
    YAHOO.lang.extend(KJUR.asn1.DERTaggedObject, KJUR.asn1.ASN1Object);
    /**
     * Create a new JSEncryptRSAKey that extends Tom Wu's RSA key object.
     * This object is just a decorator for parsing the key parameter
     * @param {string|Object} key - The key in string format, or an object containing
     * the parameters needed to build a RSAKey object.
     * @constructor
     */
    var JSEncryptRSAKey = (function(_super) {
        __extends(JSEncryptRSAKey, _super);

        function JSEncryptRSAKey(key) {
            var _this = _super.call(this) || this;
            // Call the super constructor.
            //  RSAKey.call(this);
            // If a key key was provided.
            if (key) {
                // If this is a string...
                if (typeof key === "string") {
                    _this.parseKey(key);
                } else if (JSEncryptRSAKey.hasPrivateKeyProperty(key) ||
                    JSEncryptRSAKey.hasPublicKeyProperty(key)) {
                    // Set the values for the key.
                    _this.parsePropertiesFrom(key);
                }
            }
            return _this;
        }
        /**
         * Method to parse a pem encoded string containing both a public or private key.
         * The method will translate the pem encoded string in a der encoded string and
         * will parse private key and public key parameters. This method accepts public key
         * in the rsaencryption pkcs #1 format (oid: 1.2.840.113549.1.1.1).
         *
         * @todo Check how many rsa formats use the same format of pkcs #1.
         *
         * The format is defined as:
         * PublicKeyInfo ::= SEQUENCE {
         *   algorithm       AlgorithmIdentifier,
         *   PublicKey       BIT STRING
         * }
         * Where AlgorithmIdentifier is:
         * AlgorithmIdentifier ::= SEQUENCE {
         *   algorithm       OBJECT IDENTIFIER,     the OID of the enc algorithm
         *   parameters      ANY DEFINED BY algorithm OPTIONAL (NULL for PKCS #1)
         * }
         * and PublicKey is a SEQUENCE encapsulated in a BIT STRING
         * RSAPublicKey ::= SEQUENCE {
         *   modulus           INTEGER,  -- n
         *   publicExponent    INTEGER   -- e
         * }
         * it's possible to examine the structure of the keys obtained from openssl using
         * an asn.1 dumper as the one used here to parse the components: http://lapo.it/asn1js/
         * @argument {string} pem the pem encoded string, can include the BEGIN/END header/footer
         * @private
         */
        JSEncryptRSAKey.prototype.parseKey = function(pem) {
            try {
                var modulus = 0;
                var public_exponent = 0;
                var reHex = /^\s*(?:[0-9A-Fa-f][0-9A-Fa-f]\s*)+$/;
                var der = reHex.test(pem) ? Hex.decode(pem) : Base64.unarmor(pem);
                var asn1 = ASN1.decode(der);
                // Fixes a bug with OpenSSL 1.0+ private keys
                if (asn1.sub.length === 3) {
                    asn1 = asn1.sub[2].sub[0];
                }
                if (asn1.sub.length === 9) {
                    // Parse the private key.
                    modulus = asn1.sub[1].getHexStringValue(); // bigint
                    this.n = parseBigInt(modulus, 16);
                    public_exponent = asn1.sub[2].getHexStringValue(); // int
                    this.e = parseInt(public_exponent, 16);
                    var private_exponent = asn1.sub[3].getHexStringValue(); // bigint
                    this.d = parseBigInt(private_exponent, 16);
                    var prime1 = asn1.sub[4].getHexStringValue(); // bigint
                    this.p = parseBigInt(prime1, 16);
                    var prime2 = asn1.sub[5].getHexStringValue(); // bigint
                    this.q = parseBigInt(prime2, 16);
                    var exponent1 = asn1.sub[6].getHexStringValue(); // bigint
                    this.dmp1 = parseBigInt(exponent1, 16);
                    var exponent2 = asn1.sub[7].getHexStringValue(); // bigint
                    this.dmq1 = parseBigInt(exponent2, 16);
                    var coefficient = asn1.sub[8].getHexStringValue(); // bigint
                    this.coeff = parseBigInt(coefficient, 16);
                } else if (asn1.sub.length === 2) {
                    // Parse the public key.
                    var bit_string = asn1.sub[1];
                    var sequence = bit_string.sub[0];
                    modulus = sequence.sub[0].getHexStringValue();
                    this.n = parseBigInt(modulus, 16);
                    public_exponent = sequence.sub[1].getHexStringValue();
                    this.e = parseInt(public_exponent, 16);
                } else {
                    return false;
                }
                return true;
            } catch (ex) {
                return false;
            }
        };
        /**
         * Translate rsa parameters in a hex encoded string representing the rsa key.
         *
         * The translation follow the ASN.1 notation :
         * RSAPrivateKey ::= SEQUENCE {
         *   version           Version,
         *   modulus           INTEGER,  -- n
         *   publicExponent    INTEGER,  -- e
         *   privateExponent   INTEGER,  -- d
         *   prime1            INTEGER,  -- p
         *   prime2            INTEGER,  -- q
         *   exponent1         INTEGER,  -- d mod (p1)
         *   exponent2         INTEGER,  -- d mod (q-1)
         *   coefficient       INTEGER,  -- (inverse of q) mod p
         * }
         * @returns {string}  DER Encoded String representing the rsa private key
         * @private
         */
        JSEncryptRSAKey.prototype.getPrivateBaseKey = function() {
            var options = {
                array: [
                    new KJUR.asn1.DERInteger({
                        int: 0
                    }),
                    new KJUR.asn1.DERInteger({
                        bigint: this.n
                    }),
                    new KJUR.asn1.DERInteger({
                        int: this.e
                    }),
                    new KJUR.asn1.DERInteger({
                        bigint: this.d
                    }),
                    new KJUR.asn1.DERInteger({
                        bigint: this.p
                    }),
                    new KJUR.asn1.DERInteger({
                        bigint: this.q
                    }),
                    new KJUR.asn1.DERInteger({
                        bigint: this.dmp1
                    }),
                    new KJUR.asn1.DERInteger({
                        bigint: this.dmq1
                    }),
                    new KJUR.asn1.DERInteger({
                        bigint: this.coeff
                    })
                ]
            };
            var seq = new KJUR.asn1.DERSequence(options);
            return seq.getEncodedHex();
        };
        /**
         * base64 (pem) encoded version of the DER encoded representation
         * @returns {string} pem encoded representation without header and footer
         * @public
         */
        JSEncryptRSAKey.prototype.getPrivateBaseKeyB64 = function() {
            return hex2b64(this.getPrivateBaseKey());
        };
        /**
         * Translate rsa parameters in a hex encoded string representing the rsa public key.
         * The representation follow the ASN.1 notation :
         * PublicKeyInfo ::= SEQUENCE {
         *   algorithm       AlgorithmIdentifier,
         *   PublicKey       BIT STRING
         * }
         * Where AlgorithmIdentifier is:
         * AlgorithmIdentifier ::= SEQUENCE {
         *   algorithm       OBJECT IDENTIFIER,     the OID of the enc algorithm
         *   parameters      ANY DEFINED BY algorithm OPTIONAL (NULL for PKCS #1)
         * }
         * and PublicKey is a SEQUENCE encapsulated in a BIT STRING
         * RSAPublicKey ::= SEQUENCE {
         *   modulus           INTEGER,  -- n
         *   publicExponent    INTEGER   -- e
         * }
         * @returns {string} DER Encoded String representing the rsa public key
         * @private
         */
        JSEncryptRSAKey.prototype.getPublicBaseKey = function() {
            var first_sequence = new KJUR.asn1.DERSequence({
                array: [
                    new KJUR.asn1.DERObjectIdentifier({
                        oid: "1.2.840.113549.1.1.1"
                    }),
                    new KJUR.asn1.DERNull()
                ]
            });
            var second_sequence = new KJUR.asn1.DERSequence({
                array: [
                    new KJUR.asn1.DERInteger({
                        bigint: this.n
                    }),
                    new KJUR.asn1.DERInteger({
                        int: this.e
                    })
                ]
            });
            var bit_string = new KJUR.asn1.DERBitString({
                hex: "00" + second_sequence.getEncodedHex()
            });
            var seq = new KJUR.asn1.DERSequence({
                array: [
                    first_sequence,
                    bit_string
                ]
            });
            return seq.getEncodedHex();
        };
        /**
         * base64 (pem) encoded version of the DER encoded representation
         * @returns {string} pem encoded representation without header and footer
         * @public
         */
        JSEncryptRSAKey.prototype.getPublicBaseKeyB64 = function() {
            return hex2b64(this.getPublicBaseKey());
        };
        /**
         * wrap the string in block of width chars. The default value for rsa keys is 64
         * characters.
         * @param {string} str the pem encoded string without header and footer
         * @param {Number} [width=64] - the length the string has to be wrapped at
         * @returns {string}
         * @private
         */
        JSEncryptRSAKey.wordwrap = function(str, width) {
            width = width || 64;
            if (!str) {
                return str;
            }
            var regex = "(.{1," + width + "})( +|$\n?)|(.{1," + width + "})";
            return str.match(RegExp(regex, "g")).join("\n");
        };
        /**
         * Retrieve the pem encoded private key
         * @returns {string} the pem encoded private key with header/footer
         * @public
         */
        JSEncryptRSAKey.prototype.getPrivateKey = function() {
            var key = "-----BEGIN RSA PRIVATE KEY-----\n";
            key += JSEncryptRSAKey.wordwrap(this.getPrivateBaseKeyB64()) + "\n";
            key += "-----END RSA PRIVATE KEY-----";
            return key;
        };
        /**
         * Retrieve the pem encoded public key
         * @returns {string} the pem encoded public key with header/footer
         * @public
         */
        JSEncryptRSAKey.prototype.getPublicKey = function() {
            var key = "-----BEGIN PUBLIC KEY-----\n";
            key += JSEncryptRSAKey.wordwrap(this.getPublicBaseKeyB64()) + "\n";
            key += "-----END PUBLIC KEY-----";
            return key;
        };
        /**
         * Check if the object contains the necessary parameters to populate the rsa modulus
         * and public exponent parameters.
         * @param {Object} [obj={}] - An object that may contain the two public key
         * parameters
         * @returns {boolean} true if the object contains both the modulus and the public exponent
         * properties (n and e)
         * @todo check for types of n and e. N should be a parseable bigInt object, E should
         * be a parseable integer number
         * @private
         */
        JSEncryptRSAKey.hasPublicKeyProperty = function(obj) {
            obj = obj || {};
            return (obj.hasOwnProperty("n") &&
                obj.hasOwnProperty("e"));
        };
        /**
         * Check if the object contains ALL the parameters of an RSA key.
         * @param {Object} [obj={}] - An object that may contain nine rsa key
         * parameters
         * @returns {boolean} true if the object contains all the parameters needed
         * @todo check for types of the parameters all the parameters but the public exponent
         * should be parseable bigint objects, the public exponent should be a parseable integer number
         * @private
         */
        JSEncryptRSAKey.hasPrivateKeyProperty = function(obj) {
            obj = obj || {};
            return (obj.hasOwnProperty("n") &&
                obj.hasOwnProperty("e") &&
                obj.hasOwnProperty("d") &&
                obj.hasOwnProperty("p") &&
                obj.hasOwnProperty("q") &&
                obj.hasOwnProperty("dmp1") &&
                obj.hasOwnProperty("dmq1") &&
                obj.hasOwnProperty("coeff"));
        };
        /**
         * Parse the properties of obj in the current rsa object. Obj should AT LEAST
         * include the modulus and public exponent (n, e) parameters.
         * @param {Object} obj - the object containing rsa parameters
         * @private
         */
        JSEncryptRSAKey.prototype.parsePropertiesFrom = function(obj) {
            this.n = obj.n;
            this.e = obj.e;
            if (obj.hasOwnProperty("d")) {
                this.d = obj.d;
                this.p = obj.p;
                this.q = obj.q;
                this.dmp1 = obj.dmp1;
                this.dmq1 = obj.dmq1;
                this.coeff = obj.coeff;
            }
        };
        return JSEncryptRSAKey;
    }(RSAKey));
    /**
     *
     * @param {Object} [options = {}] - An object to customize JSEncrypt behaviour
     * possible parameters are:
     * - default_key_size        {number}  default: 1024 the key size in bit
     * - default_public_exponent {string}  default: '010001' the hexadecimal representation of the public exponent
     * - log                     {boolean} default: false whether log warn/error or not
     * @constructor
     */
    var JSEncrypt = (function() {
        function JSEncrypt(options) {
            options = options || {};
            this.default_key_size = parseInt(options.default_key_size, 10) || 1024;
            this.default_public_exponent = options.default_public_exponent || "010001"; // 65537 default openssl public exponent for rsa key type
            this.log = options.log || false;
            // The private and public key.
            this.key = null;
        }
        /**
         * Method to set the rsa key parameter (one method is enough to set both the public
         * and the private key, since the private key contains the public key paramenters)
         * Log a warning if logs are enabled
         * @param {Object|string} key the pem encoded string or an object (with or without header/footer)
         * @public
         */
        JSEncrypt.prototype.setKey = function(key) {
            if (this.log && this.key) {
                console.warn("A key was already set, overriding existing.");
            }
            this.key = new JSEncryptRSAKey(key);
        };
        /**
         * Proxy method for setKey, for api compatibility
         * @see setKey
         * @public
         */
        JSEncrypt.prototype.setPrivateKey = function(privkey) {
            // Create the key.
            this.setKey(privkey);
        };
        /**
         * Proxy method for setKey, for api compatibility
         * @see setKey
         * @public
         */
        JSEncrypt.prototype.setPublicKey = function(pubkey) {
            // Sets the public key.
            this.setKey(pubkey);
        };
        /**
         * Proxy method for RSAKey object's decrypt, decrypt the string using the private
         * components of the rsa key object. Note that if the object was not set will be created
         * on the fly (by the getKey method) using the parameters passed in the JSEncrypt constructor
         * @param {string} str base64 encoded crypted string to decrypt
         * @return {string} the decrypted string
         * @public
         */
        JSEncrypt.prototype.decrypt = function(str) {
            // Return the decrypted string.
            try {
                return this.getKey().decrypt(b64tohex(str));
            } catch (ex) {
                return false;
            }
        };
        /**
         * Proxy method for RSAKey object's encrypt, encrypt the string using the public
         * components of the rsa key object. Note that if the object was not set will be created
         * on the fly (by the getKey method) using the parameters passed in the JSEncrypt constructor
         * @param {string} str the string to encrypt
         * @return {string} the encrypted string encoded in base64
         * @public
         */
        JSEncrypt.prototype.encrypt = function(str) {
            // Return the encrypted string.
            try {
                return hex2b64(this.getKey().encrypt(str));
            } catch (ex) {
                return false;
            }
        };
        /**
         * Proxy method for RSAKey object's sign.
         * @param {string} str the string to sign
         * @param {function} digestMethod hash method
         * @param {string} digestName the name of the hash algorithm
         * @return {string} the signature encoded in base64
         * @public
         */
        JSEncrypt.prototype.sign = function(str, digestMethod, digestName) {
            // return the RSA signature of 'str' in 'hex' format.
            try {
                return hex2b64(this.getKey().sign(str, digestMethod, digestName));
            } catch (ex) {
                return false;
            }
        };
        /**
         * Proxy method for RSAKey object's verify.
         * @param {string} str the string to verify
         * @param {string} signature the signature encoded in base64 to compare the string to
         * @param {function} digestMethod hash method
         * @return {boolean} whether the data and signature match
         * @public
         */
        JSEncrypt.prototype.verify = function(str, signature, digestMethod) {
            // Return the decrypted 'digest' of the signature.
            try {
                return this.getKey().verify(str, b64tohex(signature), digestMethod);
            } catch (ex) {
                return false;
            }
        };
        /**
         * Getter for the current JSEncryptRSAKey object. If it doesn't exists a new object
         * will be created and returned
         * @param {callback} [cb] the callback to be called if we want the key to be generated
         * in an async fashion
         * @returns {JSEncryptRSAKey} the JSEncryptRSAKey object
         * @public
         */
        JSEncrypt.prototype.getKey = function(cb) {
            // Only create new if it does not exist.
            if (!this.key) {
                // Get a new private key.
                this.key = new JSEncryptRSAKey();
                if (cb && {}.toString.call(cb) === "[object Function]") {
                    this.key.generateAsync(this.default_key_size, this.default_public_exponent, cb);
                    return;
                }
                // Generate the key.
                this.key.generate(this.default_key_size, this.default_public_exponent);
            }
            return this.key;
        };
        /**
         * Returns the pem encoded representation of the private key
         * If the key doesn't exists a new key will be created
         * @returns {string} pem encoded representation of the private key WITH header and footer
         * @public
         */
        JSEncrypt.prototype.getPrivateKey = function() {
            // Return the private representation of this key.
            return this.getKey().getPrivateKey();
        };
        /**
         * Returns the pem encoded representation of the private key
         * If the key doesn't exists a new key will be created
         * @returns {string} pem encoded representation of the private key WITHOUT header and footer
         * @public
         */
        JSEncrypt.prototype.getPrivateKeyB64 = function() {
            // Return the private representation of this key.
            return this.getKey().getPrivateBaseKeyB64();
        };
        /**
         * Returns the pem encoded representation of the public key
         * If the key doesn't exists a new key will be created
         * @returns {string} pem encoded representation of the public key WITH header and footer
         * @public
         */
        JSEncrypt.prototype.getPublicKey = function() {
            // Return the private representation of this key.
            return this.getKey().getPublicKey();
        };
        /**
         * Returns the pem encoded representation of the public key
         * If the key doesn't exists a new key will be created
         * @returns {string} pem encoded representation of the public key WITHOUT header and footer
         * @public
         */
        JSEncrypt.prototype.getPublicKeyB64 = function() {
            // Return the private representation of this key.
            return this.getKey().getPublicBaseKeyB64();
        };
        JSEncrypt.version = "3.0.0-rc.1";
        return JSEncrypt;
    }());
    window.JSEncrypt = JSEncrypt;
    exports.JSEncrypt = JSEncrypt;
    exports.default = JSEncrypt;
    Object.defineProperty(exports, '__esModule', {
        value: true
    });
})));
///<reference path="../../ArkSDK/Common/BaseHttpSystem.ts"/>
///<reference path="../../ArkSDK/ArkClient.ts"/>
var SS;
(function(SS) {
    var Network;
    (function(Network) {
        var GameNetwork = /** @class */ (function() {
            function GameNetwork(pinClient, GameName, GameServerUrl, customSysName) {
                if (customSysName === void 0) {
                    customSysName = null;
                }
                this._systemName = "";
                this._iCmdId = 1;
                this.cmdTmpDataDict = {};
                this.cmdRetryTimesDict = {};
                this.cmdCallbackDict = {};
                this.cmdErrorHandlerDict = {};
                this.Timer = [2000, 4000, 8000, 16000];
                this._gameClient = new ArkSDK.ArkClient(GameServerUrl);
                this._gameClient.clone(pinClient);
                this._systemName = customSysName ? customSysName : "game" + GameName;
                //this._systemName = "game" + GameName;
                this._iCmdId = 1;
            }
            GameNetwork.prototype.Release = function() {
                this.Timer = null;
                this._gameClient = null;
                this._systemName = null;
                this.cmdTmpDataDict = null;
                this.cmdRetryTimesDict = null;
                this.cmdCallbackDict = null;
            };
            GameNetwork.prototype.SendCmdButNotRetry = function(cmdName, cmdData, onRecvCallback, errorHandler, msTimeOut) {
                if (errorHandler === void 0) {
                    errorHandler = null;
                }
                if (msTimeOut === void 0) {
                    msTimeOut = 15e3;
                }
                console.log("[GameNetwork.SendCmdButNotRetry] %c" + cmdName, "color:coral");
                if (!this._gameClient) {
                    console.error("[GameNetwork.SendCmdButNotRetry] arkCkient is null");
                    return;
                }
                cmdData["kiosk_id"] = Network.LoginModel.LoginInfo.kiosk_id;
                cmdData["machine_id"] = Network.LoginModel.LoginInfo.machine_id;
                this.cmdCallbackDict[cmdName] = onRecvCallback;
                this.cmdErrorHandlerDict[cmdName] = errorHandler;
                this._gameClient.send_cmd(this._systemName, cmdName, cmdData, this.AllCmdCallbackNoRetry.bind(this), msTimeOut);
            };
            GameNetwork.prototype.AllCmdCallbackNoRetry = function(status, result, cmdName) {
                if (status === ArkSDK.HttpConnect.HttpResult.OK) {
                    if (result == null || result.cmd_data == null) {
                        console.error("maybe duplicate login or send data error ! result : ", result);
                        this.CmdCallback(cmdName, status, result);
                        return;
                    } else {
                        if (result.cmd_data.result == 2) {
                            console.warn("server ready data : ", result);
                            this.errorHandler(cmdName, status, result);
                            return;
                        }
                    }
                    if (result.cmd_data.result === 0 || result.cmd_data.result === 1) {
                        this.CmdCallback(cmdName, status, result);
                    } else {
                        this.CmdCallback(cmdName, status, result);
                    }
                } else {
                    this.errorHandler(cmdName, status, result);
                }
            };
            GameNetwork.prototype.SendCmd = function(cmdName, cmdData, onRecvCallback) {
                console.log("[GameNetwork.SendCmd] %c" + cmdName, "color:coral");
                if (this.cmdTmpDataDict[cmdName] != undefined) {
                    console.error(cmdName, "is send already,retry now!");
                    return;
                } else {
                    cmdData["kiosk_id"] = Network.LoginModel.LoginInfo.kiosk_id;
                    cmdData["machine_id"] = Network.LoginModel.LoginInfo.machine_id;
                    cmdData["cid"] = this._iCmdId;
                    this.cmdTmpDataDict[cmdName] = cmdData;
                    this.cmdRetryTimesDict[cmdName] = 0;
                    this.cmdCallbackDict[cmdName] = onRecvCallback;
                }
                var retryIndex = this.cmdRetryTimesDict[cmdName];
                this.cmdRetryTimesDict[cmdName]++;
                this._gameClient.send_cmd(this._systemName, cmdName, cmdData, this.AllCmdCallback.bind(this), this.Timer[retryIndex]);
            };
            GameNetwork.prototype.AllCmdCallback = function(status, result, cmdName) {
                if (status === ArkSDK.HttpConnect.HttpResult.OK) {
                    if (result == null || result.cmd_data == null) {
                        console.error("maybe duplicate login or send data error ! result : ", result);
                        this.CmdCallback(cmdName, status, result);
                        return;
                    } else {
                        if (result.cmd_data.result == 2) {
                            console.warn("server ready data : ", result);
                            this.ResendHandler(cmdName, status, result);
                            return;
                        }
                    }
                    if (result.cmd_data.result === 0 || result.cmd_data.result === 1) {
                        var serverCid = result.cmd_data.data.B0 | result.cmd_data.data.C0 | result.cmd_data.data.D0 | result.cmd_data.data.F0 | result.cmd_data.data.cid;
                        if (this._iCmdId === serverCid) {
                            this._iCmdId++;
                            this.CmdCallback(cmdName, status, result);
                        } else {
                            console.warn("result ", result);
                            console.warn("this._iCmdId " + this._iCmdId + " != serverCid " + serverCid);
                        }
                    } else {
                        this.CmdCallback(cmdName, status, result);
                    }
                } else {
                    this.ResendHandler(cmdName, status, result);
                }
            };
            GameNetwork.prototype.ResendHandler = function(cmdName, status, result) {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                        switch (_a.label) {
                            case 0:
                                if (!(status !== ArkSDK.HttpConnect.HttpResult.Timeout)) return [3 /*break*/ , 2];
                                return [4 /*yield*/ , new Promise(function(resolve) {
                                    return setTimeout(resolve, 3000);
                                })];
                            case 1:
                                _a.sent();
                                _a.label = 2;
                            case 2:
                                if (this.cmdRetryTimesDict[cmdName] < this.Timer.length) {
                                    console.log("cmdName " + cmdName + " retry : ", this.cmdRetryTimesDict[cmdName]);
                                    this.ReSendCmd(cmdName, this.cmdTmpDataDict[cmdName]);
                                    this.cmdRetryTimesDict[cmdName]++;
                                } else {
                                    console.log("cmdName " + cmdName + " retry dead");
                                    this.CmdCallback(cmdName, status, result);
                                }
                                return [2 /*return*/ ];
                        }
                    });
                });
            };
            GameNetwork.prototype.CmdCallback = function(cmdName, status, result) {
                if (this.cmdCallbackDict && this.cmdCallbackDict[cmdName]) {
                    this.cmdCallbackDict[cmdName](status, result);
                    this.ReleaseRetryCmdData(cmdName);
                } else
                    console.error("this.cmdCallbackDict[" + cmdName + "] not found");
            };
            GameNetwork.prototype.errorHandler = function(cmdName, status, result) {
                console.warn("errorHandler , cmdName = " + cmdName + ", status = " + status + ", result = " + result);
                if (this.cmdErrorHandlerDict && this.cmdErrorHandlerDict[cmdName]) {
                    this.cmdErrorHandlerDict[cmdName](status, result);
                    this.ReleaseRetryCmdData(cmdName);
                } else
                    console.error("this.cmdErrorHandlerDict[" + cmdName + "]  not found");
            };
            GameNetwork.prototype.ReSendCmd = function(cmdName, cmdData) {
                console.log("[GameNetwork.ReSendCmd] %c" + cmdName, "color:coral");
                var retryIndex = this.cmdRetryTimesDict[cmdName];
                this._gameClient.send_cmd(this._systemName, cmdName, cmdData, this.AllCmdCallback.bind(this), this.Timer[retryIndex]);
            };
            GameNetwork.prototype.ReleaseRetryCmdData = function(cmdName) {
                this.cmdRetryTimesDict[cmdName] = undefined;
                this.cmdTmpDataDict[cmdName] = undefined;
                this.cmdCallbackDict[cmdName] = undefined;
                this.cmdErrorHandlerDict[cmdName] = undefined;
            };
            return GameNetwork;
        }());
        Network.GameNetwork = GameNetwork;
    })(Network = SS.Network || (SS.Network = {}));
})(SS || (SS = {}));
///<reference path="../../ArkSDK/ArkClient.ts"/>
var SS;
(function(SS) {
    var Network;
    (function(Network) {
        var JPSystem = /** @class */ (function() {
            function JPSystem(socketClient, pinClient) {
                /*for ArkSocketClient 收到廣播封包訊息發送 (請勿存取)*/
                this.cmdDict = {};
                /*OnWinJPValueSignal(grandVal, majorVal, minorVal, miniVal)*/
                this.OnChangeJpValCmdSignal = new SS.Network.Common.Signal();
                /*OnWinJPValueSignal(jp_type, ShowValue, entries, winning)*/
                this.OnWinJPValueSignal = new SS.Network.Common.Signal();
                this.OnChangeInGameJpSingnal = new SS.Network.Common.Signal();
                this.OnRecvJpCandidateSingnal = new SS.Network.Common.Signal();
                /*JP開獎訊號*/
                this.OnJPStartSignal = new SS.Network.Common.Signal();
                /*JP結束訊號*/
                this.OnJPFinishSignal = new SS.Network.Common.Signal();
                /*private*/
                this.socketClient = null;
                this.pinClient = null; //開獎需要登入Token資訊
                this.systemName = "jp";
                //處理Retry Handler模組
                this.retryTimer = new SS.Network.Common.RetryTimer();
                this.socketClient = socketClient;
                this.socketClient.systemDict[this.systemName] = this;
                this.pinClient = pinClient;
                //註冊cmdCallBack
                this.cmdDict["candidate"] = this.OnRecvCandidateCmd.bind(this);
                this.cmdDict["deny"] = this.OnRecvDenyCmd.bind(this);
                this.cmdDict["game"] = this.OnRecvGameCmd.bind(this);
                this.cmdDict["winValue"] = this.OnRecvWinValueCmd.bind(this);
                this.cmdDict["change"] = this.OnRecvChangeCmd.bind(this);
                this.cmdDict["gameStart"] = this.OnRecvJPStart.bind(this);
                this.cmdDict["gameFinish"] = this.OnRecvJPFinish.bind(this);
                this.cmdDict["in_game_jp_update"] = this.OnRecvChangeInGameJpCmd.bind(this);
                this.cmdDict["treasureMap"] = this.OnRecvTreasureMapCmd.bind(this);
                this.cmdDict["oceanHeart"] = this.OnRecvOceanHeartCmd.bind(this);
            }
            JPSystem.prototype.Release = function() {
                this.socketClient = null;
                this.OnChangeJpValCmdSignal.removeAll();
                this.OnChangeJpValCmdSignal = null;
                this.OnWinJPValueSignal.removeAll();
                this.OnWinJPValueSignal = null;
                this.OnChangeInGameJpSingnal.removeAll();
                this.OnChangeInGameJpSingnal = null;
                this.OnRecvJpCandidateSingnal.removeAll();
                this.OnRecvJpCandidateSingnal = null;
                this.cmdDict = null;
                this.getJpCmdCb = null;
                this.getInGameJpCmdCb = null;
                this.getTreasureMapCB = null;
                this.getOceanHeartCB = null;
            };
            JPSystem.prototype.setNetClient = function(socketClient, pinClient) {
                this.socketClient = socketClient;
                this.socketClient.systemDict[this.systemName] = this;
                this.pinClient = pinClient;
            };
            /**
             * 送出請求JP中獎歷史紀錄
             * @param callback 回應CallBack
             */
            JPSystem.prototype.SendGetJPHistory = function(group, callback) {
                //歷史紀錄拿到是SERVER算好的，SERVER目前給的是分數
                console.log("[JPSystem.SendGetJPHistory]");
                var cmdData = {};
                cmdData["group"] = group;
                this.socketClient.SendCmd(this.systemName, "jplog", cmdData, callback);
            };
            /**
             * 送出請求JP數值
             * @param group 要求的JP類型，slot、fish
             * @param callback 回應CallBack
             */
            JPSystem.prototype.SendGetJPValCmd = function(group, callback) {
                console.log("[JPSystem.SendGetJPValCmd]");
                var cmdData = {};
                cmdData["group"] = group;
                this.getJpCmdCb = callback;
                this.socketClient.SendCmd(this.systemName, "jp", cmdData, this.RecvGetJpValCmd.bind(this));
            };
            /**
             * 送出請求JP數值
             * @param callback 回應CallBack
             */
            JPSystem.prototype.SendGetInGameJpValCmd = function(callback) {
                console.log("[JPSystem.SendGetInGameJpValCmd]");
                this.getInGameJpCmdCb = callback;
                this.socketClient.SendCmd(this.systemName, "ingame_jp", null, this.RecvGetInGameJpValCmd.bind(this));
            };
            JPSystem.prototype.SendJPTimerResume = function(group) {
                console.log("[JPSystem.SendJPTimerResume]");
                var cmdData = {};
                cmdData["group"] = group;
                this.socketClient.SendCmd(this.systemName, "gameSettle", cmdData);
            };
            /**
             * 檢查是否為候選人，若是則自動送出JP請求封包
             * @param gameName 遊戲名稱
             * @param totalBetExcludeJPBet TotoalBet但不含JPBet
             */
            JPSystem.prototype.CheckJPRequest = function(gameName, group, totalBetExcludeJPBet) {
                if (this.isJPReadyRequest) {
                    this.isJPReadyRequest = false;
                    this.SendJPRequest("game" + gameName, group, totalBetExcludeJPBet);
                    return true;
                }
                return false;
            };
            JPSystem.prototype.OnRecvCandidateCmd = function(result, data, ret, sn, sys, cmd, process_time_ms) {
                console.log("[SS.Network.OnRecvCandidateCmd]", result, data, ret, sn, sys, cmd, process_time_ms, new Date().toUTCString());
                //#TODO fish game need to ignore
                if (result == ArkSDK.SocketResult.OK) {
                    this.strJpSerialID = data["JPSerialID"];
                    this.isJPReadyRequest = true;
                    this.OnRecvJpCandidateSingnal.dispatch(data);
                }
            };
            JPSystem.prototype.OnRecvDenyCmd = function(result, data, ret, sn, sys, cmd, process_time_ms) {
                console.log("[SS.Network.OnRecvDenyCmd]", result, data, ret, sn, sys, cmd, process_time_ms, new Date().toUTCString());
                if (result == ArkSDK.SocketResult.OK) {
                    var iDenyType = data["DenyType"];
                    var jp_SerialID = data["JPSerialID"];
                    if (jp_SerialID == this.strJpSerialID) {
                        if (iDenyType == 3 /* NotReady */ ) {
                            this.retryTimer.ResetTimes();
                        } else {
                            // JP Server真的要拒絕進行JP game
                            this.retryTimer.Stop();
                        }
                    }
                }
            };
            JPSystem.prototype.OnRecvGameCmd = function(result, data, ret, sn, sys, cmd, process_time_ms) {
                console.log("[SS.Network.OnRecvGameCmd]", result, data, ret, sn, sys, cmd, process_time_ms, new Date().toUTCString());
                if (result == ArkSDK.SocketResult.OK) {
                    var machine_id = data["machine"];
                    var jp_SerialID = data["JPSerialID"];
                    if (this.strJpSerialID == jp_SerialID && // 判斷封包內容 jp_SerialID
                        machine_id == Network.LoginModel.LoginInfo.machine_id) // 判斷封包內容 machine
                    {
                        this.retryTimer.Stop();
                    }
                }
            };
            JPSystem.prototype.OnRecvJPStart = function(result, data, ret, sn, sys, cmd, process_time_ms) {
                console.log("[SS.Network.OnRecvJPStart]", result, data, ret, sn, sys, cmd, process_time_ms, new Date().toUTCString());
                if (result == ArkSDK.SocketResult.OK) {
                    var group = data["group"];
                    this.OnJPStartSignal.dispatch(group);
                }
            };
            JPSystem.prototype.OnRecvJPFinish = function(result, data, ret, sn, sys, cmd, process_time_ms) {
                console.log("[SS.Network.OnRecvJPFinish]", result, data, ret, sn, sys, cmd, process_time_ms, new Date().toUTCString());
                if (result == ArkSDK.SocketResult.OK) {
                    var group = data[3 /* group */ ];
                    this.OnJPFinishSignal.dispatch(group);
                }
            };
            JPSystem.prototype.OnRecvChangeCmd = function(result, data, ret, sn, sys, cmd, process_time_ms) {
                console.log("[SS.Network.JPSystem]", result, data, ret, sn, sys, cmd, process_time_ms);
                if (result == ArkSDK.SocketResult.OK) {
                    console.log("OnRecvChangeCmd ori : ", data);
                    var jpVal = this.CovertJPVal(data, "0", "1", "2", "3");
                    console.log("OnRecvChangeCmd jpVal after convert: ", jpVal);
                    if (!jpVal)
                        return;
                    this.OnChangeJpValCmdSignal.dispatch(jpVal[0], jpVal[1], jpVal[2], jpVal[3], data["exchange_rate"], data["group"]);
                }
            };
            JPSystem.prototype.OnRecvChangeInGameJpCmd = function(result, data, ret, sn, sys, cmd, process_time_ms) {
                console.warn("OnRecvChangeInGameJpCmd result = ", result);
                if (result == ArkSDK.SocketResult.OK) {
                    console.log("OnRecvChangeInGameJpCmd data : ", data);
                    this.OnChangeInGameJpSingnal.dispatch(data);
                }
            };
            JPSystem.prototype.OnRecvWinValueCmd = function(result, data, ret, sn, sys, cmd, process_time_ms) {
                console.log("[SS.Network.OnRecvWinValueCmd]", result, data, ret, sn, sys, cmd, process_time_ms);
                if (result == ArkSDK.SocketResult.OK) {
                    var machine_id = data[0 /* machine_id */ ];
                    var pin_ark_id = data[1 /* pin_ark_id */ ];
                    var jp_type = data[2 /* jp_type */ ];
                    var jp_value = data[3 /* jp_value */ ];
                    var entries = data[4 /* entries */ ];
                    var winning = data[5 /* winning */ ];
                    var jp_SerialID = data[6 /* jp_SerialID */ ];
                    var exchange_rate = data[7 /* exchange_rate */ ];
                    if (machine_id == Network.LoginModel.LoginInfo.machine_id && pin_ark_id == this.pinClient.ArkID) {
                        if (this.strJpSerialID == jp_SerialID) {
                            this.strJpSerialID = null;
                            this.retryTimer.Stop();
                            this.OnWinJPValueSignal.dispatch(jp_type, jp_value, exchange_rate, entries, winning);
                        }
                        // grand不判斷JpSerialID，因為不一定會收到Candidate封包
                        else if (jp_type == 0) {
                            this.OnWinJPValueSignal.dispatch(jp_type, jp_value, exchange_rate, entries, winning);
                        }
                    } else {
                        console.error("server ArkId : ", pin_ark_id, "client ArkId : ", this.pinClient.ArkID);
                        console.error("server machine_id : ", machine_id, "client MachineID : ", Network.LoginModel.LoginInfo.machine_id);
                    }
                }
            };
            JPSystem.prototype.CovertJPVal = function(jsonData, grandKey, majorKey, minorKey, miniKey) {
                if (!jsonData || !jsonData.hasOwnProperty("jp_rate")) {
                    console.error("Recv Jp Value Error Data : ", jsonData);
                    return;
                }
                var jp_rate = jsonData["jp_rate"];
                var Jp0, Jp1, Jp2, Jp3;
                if (jsonData[grandKey])
                    Jp0 = this.accMul(jsonData[grandKey], jp_rate);
                if (jsonData[majorKey])
                    Jp1 = this.accMul(jsonData[majorKey], jp_rate);
                if (jsonData[minorKey])
                    Jp2 = this.accMul(jsonData[minorKey], jp_rate);
                if (jsonData[miniKey])
                    Jp3 = this.accMul(jsonData[miniKey], jp_rate);
                return [Jp0, Jp1, Jp2, Jp3];
            };
            JPSystem.prototype.accMul = function(val1, val2) {
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
            JPSystem.prototype.SendJPRequest = function(game, group, excludeJPbet) {
                var _this = this;
                if (excludeJPbet === void 0) {
                    excludeJPbet = 0;
                }
                console.log("[JPSystem.SendJPRequest]", game, excludeJPbet);
                var retryHandler = function() {
                    var cmd_data = {};
                    cmd_data["token"] = _this.pinClient.ArkToken;
                    cmd_data["game"] = game;
                    cmd_data["JPSerialID"] = _this.strJpSerialID;
                    cmd_data["bet"] = excludeJPbet;
                    cmd_data["group"] = group;
                    _this.socketClient.SendCmd(_this.systemName, "req", cmd_data);
                    console.log("SendJPRequest = ", cmd_data);
                };
                var timeOutHandler = function() {
                    console.log("SendJPRequest Timeout!");
                };
                this.retryTimer.Start(retryHandler, timeOutHandler, [0, 2, 4, 8, 20]);
            };
            JPSystem.prototype.RecvGetJpValCmd = function(result, data, ret, sn, sys, cmd, process_time_ms) {
                console.warn("RecvGetJpValCmd = ", result);
                if (result == ArkSDK.SocketResult.OK) {
                    console.log("RecvGetJpValCmd ori : ", data);
                    var jpVal = this.CovertJPVal(data["data"], "jp0", "jp1", "jp2", "jp3");
                    console.log("RecvGetJpValCmd jpVal after convert: ", jpVal);
                    if (!jpVal)
                        return;
                    this.getJpCmdCb(jpVal[0], jpVal[1], jpVal[2], jpVal[3], data["data"]["exchange_rate"], data["data"]["group"]);
                    //this.getJpCmdCb = null;
                }
            };
            JPSystem.prototype.RecvGetInGameJpValCmd = function(result, data, ret, sn, sys, cmd, process_time_ms) {
                console.warn("RecvGetInGameJpValCmd = ", result);
                if (result == ArkSDK.SocketResult.OK) {
                    console.log("RecvGetInGameJpValCmd ori : ", data);
                    this.getInGameJpCmdCb(data);
                    this.getInGameJpCmdCb = null;
                }
            };
            JPSystem.prototype.OnRecvTreasureMapCmd = function(result, data, ret, sn, sys, cmd, process_time_ms) {
                console.warn("OnRecvTreasureMapCmd result = ", result);
                if (result == ArkSDK.SocketResult.OK) {
                    console.log("OnRecvTreasureMapCmd data : ", data);
                    if (data && this.getTreasureMapCB)
                        this.getTreasureMapCB(data);
                }
            };
            JPSystem.prototype.OnRecvOceanHeartCmd = function(result, data, ret, sn, sys, cmd, process_time_ms) {
                console.warn("OnRecvOceanHeartCmd result = ", result);
                if (result == ArkSDK.SocketResult.OK) {
                    console.log("OnRecvOceanHeartCmd data : ", data);
                    if (data && this.getOceanHeartCB)
                        this.getOceanHeartCB(data);
                }
            };
            return JPSystem;
        }());
        Network.JPSystem = JPSystem;
    })(Network = SS.Network || (SS.Network = {}));
})(SS || (SS = {}));
///<reference path="../../ArkSDK/ArkClient.ts"/>
var SS;
(function(SS) {
    var Network;
    (function(Network) {
        var LobbySystem = /** @class */ (function() {
            function LobbySystem(socketClient) {
                this.m_socketClient = null;
                //private m_recvPinCB;
                /*OnMarqueeSignal(JSON)*/
                this.OnMarqueeSignal = new SS.Network.Common.Signal();
                this.OnUpdateSignal = new SS.Network.Common.Signal();
                //public OnShutdownSignal: SS.Network.Common.Signal = new SS.Network.Common.Signal();
                //public OnPosKickSignal: SS.Network.Common.Signal = new SS.Network.Common.Signal();
                /*for ArkSocketClient 收到廣播封包訊息發送 (請勿存取)*/
                this.cmdDict = {};
                this.m_isPosKick = false;
                this.m_ServerToIdleWaitMin = -1;
                this.loginLogoMode = "";
                this.m_socketClient = socketClient;
                //註冊此系統
                this.m_socketClient.systemDict["lobby"] = this;
                //註冊cmdCallBack
                this.cmdDict["shutdown"] = this.OnRecvShutdownCmd.bind(this);
                this.cmdDict["pos_kick"] = this.OnRecvPosKickCmd.bind(this);
                this.cmdDict["UpdateInfo"] = this.OnRecvUpdataInfoCmd.bind(this);
            }
            LobbySystem.prototype.Release = function() {
                this.m_socketClient = null;
            };
            LobbySystem.prototype.setLoginLogoMode = function(logoMode) {
                this.loginLogoMode = logoMode;
            };
            LobbySystem.prototype.setNetClient = function(socketClient) {
                this.m_socketClient = socketClient;
                this.m_socketClient.systemDict["lobby"] = this;
            };
            LobbySystem.prototype.PingWebSocket = function(recvPinCB) {
                this.m_socketClient.SendCmd("lobby", "ping", null, recvPinCB);
            };
            //private RecvPingAck(result: number, data: JSON, ret: string, sn: number, sys: string, cmd: string, process_time_ms?: number) {
            //    //if (result == ArkSDK.Sockeesult.OK)
            //        this.m_recvPinCB(result,process_time_ms);
            //}
            LobbySystem.prototype.OnRecvShutdownCmd = function(result, data, ret, sn, sys, cmd, process_time_ms) {
                console.log("[SS.Network.OnRecvShutdownCmd]", result, data, ret, sn, sys, cmd, process_time_ms, new Date().toUTCString());
                if (result == ArkSDK.SocketResult.OK) {
                    if (data.hasOwnProperty("min")) {
                        this.m_ServerToIdleWaitMin = parseInt(data["min"]);
                    }
                }
            };
            LobbySystem.prototype.OnRecvPosKickCmd = function(result, data, ret, sn, sys, cmd, process_time_ms) {
                console.log("[SS.Network.OnRecvPosKickCmd]", result, data, ret, sn, sys, cmd, process_time_ms, new Date().toUTCString());
                if (result == ArkSDK.SocketResult.OK) {
                    this.m_isPosKick = true;
                }
            };
            LobbySystem.prototype.OnRecvUpdataInfoCmd = function(result, data, ret, sn, sys, cmd, process_time_ms) {
                console.log("[SS.Network.OnRecvUpdataInfoCmd]", result, data, ret, sn, sys, cmd, process_time_ms, new Date().toUTCString());
                if (result == ArkSDK.SocketResult.OK) {
                    if (data.hasOwnProperty("msg_info")) {
                        if (data["msg_info"].hasOwnProperty("platform")) {
                            for (var _i = 0, _a = data["msg_info"]["platform"]; _i < _a.length; _i++) {
                                var strPlatform = _a[_i];
                                if (strPlatform === "PHONE")
                                    this.OnMarqueeSignal.dispatch(data["msg_info"]);
                            }
                        }
                    }
                    if (data.hasOwnProperty("game_version")) {
                        if (data["game_version"].hasOwnProperty(this.loginLogoMode))
                            this.OnUpdateSignal.dispatch(data["game_version"][this.loginLogoMode]);
                    }
                    //#TODO game_maintain_list server還沒拆分平台
                }
            };
            // 後台記錄進入遊戲
            LobbySystem.prototype.SendSessionLengthLogin = function(gameID) {
                var cmdData = {};
                cmdData["gameId"] = gameID;
                this.m_socketClient.SendCmd("lobby", "SessionLengthLogin", cmdData, null);
            };
            // 後台記錄離開遊戲
            LobbySystem.prototype.SendSessionLengthLogout = function(gameID, recvCB) {
                if (recvCB === void 0) {
                    recvCB = null;
                }
                var cmdData = {};
                cmdData["gameId"] = gameID;
                this.m_socketClient.SendCmd("lobby", "SessionLengthLogout", cmdData, recvCB);
            };
            return LobbySystem;
        }());
        Network.LobbySystem = LobbySystem;
    })(Network = SS.Network || (SS.Network = {}));
})(SS || (SS = {}));
///<reference path="./Signal.ts"/>
var SS;
(function(SS) {
    var Network;
    (function(Network) {
        var Common;
        (function(Common) {
            /*
             *	@desc   	An object that represents a binding between a Signal and a listener function.
             *               Released under the MIT license
             *				http://millermedeiros.github.com/js-signals/
             *
             *	@version	1.0 - 7th March 2013
             *
             *	@author 	Richard Davey, TypeScript conversion
             *	@author		Miller Medeiros, JS Signals
             *	@author		Robert Penner, AS Signals
             *
             *	@url		http://www.kiwijs.org
             *
             */
            var SignalBinding = /** @class */ (function() {
                /**
                 * Object that represents a binding between a Signal and a listener function.
                 * <br />- <strong>This is an internal constructor and shouldn't be called by regular users.</strong>
                 * <br />- inspired by Joa Ebert AS3 SignalBinding and Robert Penner's Slot classes.
                 * @author Miller Medeiros
                 * @constructor
                 * @internal
                 * @name SignalBinding
                 * @param {Signal} signal Reference to Signal object that listener is currently bound to.
                 * @param {Function} listener Handler function bound to the signal.
                 * @param {boolean} isOnce If binding should be executed just once.
                 * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
                 * @param {Number} [priority] The priority level of the event listener. (default = 0).
                 */
                function SignalBinding(signal, listener, isOnce, listenerContext, priority) {
                    if (priority === void 0) {
                        priority = 0;
                    }
                    /**
                     * If binding is active and should be executed.
                     * @type boolean
                     */
                    this.active = true;
                    /**
                     * Default parameters passed to listener during `Signal.dispatch` and `SignalBinding.execute`. (curried parameters)
                     * @type Array|null
                     */
                    this.params = null;
                    this._listener = listener;
                    this._isOnce = isOnce;
                    this.context = listenerContext;
                    this._signal = signal;
                    this.priority = priority || 0;
                }
                /**
                 * Call listener passing arbitrary parameters.
                 * <p>If binding was added using `Signal.addOnce()` it will be automatically removed from signal dispatch queue, this method is used internally for the signal dispatch.</p>
                 * @param {Array} [paramsArr] Array of parameters that should be passed to the listener
                 * @return {*} Value returned by the listener.
                 */
                SignalBinding.prototype.execute = function(paramsArr) {
                    var handlerReturn;
                    var params;
                    if (this.active && !!this._listener) {
                        params = this.params ? this.params.concat(paramsArr) : paramsArr;
                        handlerReturn = this._listener.apply(this.context, params);
                        if (this._isOnce) {
                            this.detach();
                        }
                    }
                    return handlerReturn;
                };
                /**
                 * Detach binding from signal.
                 * - alias to: mySignal.remove(myBinding.getListener());
                 * @return {Function|null} Handler function bound to the signal or `null` if binding was previously detached.
                 */
                SignalBinding.prototype.detach = function() {
                    return this.isBound() ? this._signal.remove(this._listener, this.context) : null;
                };
                /**
                 * @return {Boolean} `true` if binding is still bound to the signal and have a listener.
                 */
                SignalBinding.prototype.isBound = function() {
                    return (!!this._signal && !!this._listener);
                };
                /**
                 * @return {boolean} If SignalBinding will only be executed once.
                 */
                SignalBinding.prototype.isOnce = function() {
                    return this._isOnce;
                };
                /**
                 * @return {Function} Handler function bound to the signal.
                 */
                SignalBinding.prototype.getListener = function() {
                    return this._listener;
                };
                /**
                 * @return {Signal} Signal that listener is currently bound to.
                 */
                SignalBinding.prototype.getSignal = function() {
                    return this._signal;
                };
                /**
                 * Delete instance properties
                 * @private
                 */
                SignalBinding.prototype._destroy = function() {
                    delete this._signal;
                    delete this._listener;
                    delete this.context;
                };
                /**
                 * @return {string} String representation of the object.
                 */
                SignalBinding.prototype.toString = function() {
                    return '[SignalBinding isOnce:' + this._isOnce + ', isBound:' + this.isBound() + ', active:' + this.active + ']';
                };
                return SignalBinding;
            }());
            Common.SignalBinding = SignalBinding;
        })(Common = Network.Common || (Network.Common = {}));
    })(Network = SS.Network || (SS.Network = {}));
})(SS || (SS = {}));
///<reference path="./SignalBinding.ts"/>
var SS;
(function(SS) {
    var Network;
    (function(Network) {
        var Common;
        (function(Common) {
            /**
             *	@desc       A TypeScript conversion of JS Signals by Miller Medeiros
             *               Released under the MIT license
             *				http://millermedeiros.github.com/js-signals/
             *
             *	@version	1.0 - 7th March 2013
             *
             *	@author 	Richard Davey, TypeScript conversion
             *	@author		Miller Medeiros, JS Signals
             *	@author		Robert Penner, AS Signals
             *
             *	@url		http://www.photonstorm.com
             */
            /**
             * Custom event broadcaster
             * <br />- inspired by Robert Penner's AS3 Signals.
             * @name Signal
             * @author Miller Medeiros
             * @constructor
             */
            var Signal = /** @class */ (function() {
                function Signal() {
                    /**
                     * @property _bindings
                     * @type Array
                     * @private
                     */
                    this._bindings = [];
                    /**
                     * @property _prevParams
                     * @type Any
                     * @private
                     */
                    this._prevParams = null;
                    /**
                     * If Signal should keep record of previously dispatched parameters and
                     * automatically execute listener during `add()`/`addOnce()` if Signal was
                     * already dispatched before.
                     * @type boolean
                     */
                    this.memorize = false;
                    /**
                     * @type boolean
                     * @private
                     */
                    this._shouldPropagate = true;
                    /**
                     * If Signal is active and should broadcast events.
                     * <p><strong>IMPORTANT:</strong> Setting this property during a dispatch will only affect the next dispatch, if you want to stop the propagation of a signal use `halt()` instead.</p>
                     * @type boolean
                     */
                    this.active = true;
                }
                /**
                 * @method validateListener
                 * @param {Any} listener
                 * @param {Any} fnName
                 */
                Signal.prototype.validateListener = function(listener, fnName) {
                    if (typeof listener !== 'function') {
                        throw new Error('listener is a required param of {fn}() and should be a Function.'.replace('{fn}', fnName));
                    }
                };
                /**
                 * @param {Function} listener
                 * @param {boolean} isOnce
                 * @param {Object} [listenerContext]
                 * @param {Number} [priority]
                 * @return {SignalBinding}
                 * @private
                 */
                Signal.prototype._registerListener = function(listener, isOnce, listenerContext, priority) {
                    var prevIndex = this._indexOfListener(listener, listenerContext);
                    var binding;
                    if (prevIndex !== -1) {
                        binding = this._bindings[prevIndex];
                        if (binding.isOnce() !== isOnce) {
                            throw new Error('You cannot add' + (isOnce ? '' : 'Once') + '() then add' + (!isOnce ? '' : 'Once') + '() the same listener without removing the relationship first.');
                        }
                    } else {
                        binding = new Common.SignalBinding(this, listener, isOnce, listenerContext, priority);
                        this._addBinding(binding);
                    }
                    if (this.memorize && this._prevParams) {
                        binding.execute(this._prevParams);
                    }
                    return binding;
                };
                /**
                 * @method _addBinding
                 * @param {SignalBinding} binding
                 * @private
                 */
                Signal.prototype._addBinding = function(binding) {
                    //simplified insertion sort
                    var n = this._bindings.length;
                    do {
                        --n;
                    } while (this._bindings[n] && binding.priority <= this._bindings[n].priority);
                    this._bindings.splice(n + 1, 0, binding);
                };
                /**
                 * @method _indexOfListener
                 * @param {Function} listener
                 * @return {number}
                 * @private
                 */
                Signal.prototype._indexOfListener = function(listener, context) {
                    var n = this._bindings.length;
                    var cur;
                    while (n--) {
                        cur = this._bindings[n];
                        if (cur.getListener() === listener && cur.context === context) {
                            return n;
                        }
                    }
                    return -1;
                };
                /**
                 * Check if listener was attached to Signal.
                 * @param {Function} listener
                 * @param {Object} [context]
                 * @return {boolean} if Signal has the specified listener.
                 */
                Signal.prototype.has = function(listener, context) {
                    if (context === void 0) {
                        context = null;
                    }
                    return this._indexOfListener(listener, context) !== -1;
                };
                /**
                 * Add a listener to the signal.
                 * @param {Function} listener Signal handler function.
                 * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
                 * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
                 * @return {SignalBinding} An Object representing the binding between the Signal and listener.
                 */
                Signal.prototype.add = function(listener, listenerContext, priority) {
                    if (listenerContext === void 0) {
                        listenerContext = null;
                    }
                    if (priority === void 0) {
                        priority = 0;
                    }
                    this.validateListener(listener, 'add');
                    return this._registerListener(listener, false, listenerContext, priority);
                };
                /**
                 * Add listener to the signal that should be removed after first execution (will be executed only once).
                 * @param {Function} listener Signal handler function.
                 * @param {Object} [listenerContext] Context on which listener will be executed (object that should represent the `this` variable inside listener function).
                 * @param {Number} [priority] The priority level of the event listener. Listeners with higher priority will be executed before listeners with lower priority. Listeners with same priority level will be executed at the same order as they were added. (default = 0)
                 * @return {SignalBinding} An Object representing the binding between the Signal and listener.
                 */
                Signal.prototype.addOnce = function(listener, listenerContext, priority) {
                    if (listenerContext === void 0) {
                        listenerContext = null;
                    }
                    if (priority === void 0) {
                        priority = 0;
                    }
                    this.validateListener(listener, 'addOnce');
                    return this._registerListener(listener, true, listenerContext, priority);
                };
                /**
                 * Remove a single listener from the dispatch queue.
                 * @param {Function} listener Handler function that should be removed.
                 * @param {Object} [context] Execution context (since you can add the same handler multiple times if executing in a different context).
                 * @return {Function} Listener handler function.
                 */
                Signal.prototype.remove = function(listener, context) {
                    if (context === void 0) {
                        context = null;
                    }
                    this.validateListener(listener, 'remove');
                    var i = this._indexOfListener(listener, context);
                    if (i !== -1) {
                        this._bindings[i]._destroy(); //no reason to a SignalBinding exist if it isn't attached to a signal
                        this._bindings.splice(i, 1);
                    }
                    return listener;
                };
                /**
                 * Remove all listeners from the Signal.
                 */
                Signal.prototype.removeAll = function() {
                    var n = this._bindings.length;
                    while (n--) {
                        this._bindings[n]._destroy();
                    }
                    this._bindings.length = 0;
                };
                /**
                 * @return {number} Number of listeners attached to the Signal.
                 */
                Signal.prototype.getNumListeners = function() {
                    return this._bindings.length;
                };
                /**
                 * Stop propagation of the event, blocking the dispatch to next listeners on the queue.
                 * <p><strong>IMPORTANT:</strong> should be called only during signal dispatch, calling it before/after dispatch won't affect signal broadcast.</p>
                 * @see Signal.prototype.disable
                 */
                Signal.prototype.halt = function() {
                    this._shouldPropagate = false;
                };
                /**
                 * Dispatch/Broadcast Signal to all listeners added to the queue.
                 * @param {...*} [params] Parameters that should be passed to each handler.
                 */
                Signal.prototype.dispatch = function() {
                    var paramsArr = [];
                    for (var _i = 0; _i < arguments.length; _i++) {
                        paramsArr[_i] = arguments[_i];
                    }
                    if (!this.active) {
                        return;
                    }
                    var n = this._bindings.length;
                    var bindings;
                    if (this.memorize) {
                        this._prevParams = paramsArr;
                    }
                    if (!n) {
                        //should come after memorize
                        return;
                    }
                    bindings = this._bindings.slice(0); //clone array in case add/remove items during dispatch
                    this._shouldPropagate = true; //in case `halt` was called before dispatch or during the previous dispatch.
                    //execute all callbacks until end of the list or until a callback returns `false` or stops propagation
                    //reverse loop since listeners with higher priority will be added at the end of the list
                    do {
                        n--;
                    } while (bindings[n] && this._shouldPropagate && bindings[n].execute(paramsArr) !== false);
                };
                /**
                 * Forget memorized arguments.
                 * @see Signal.memorize
                 */
                Signal.prototype.forget = function() {
                    this._prevParams = null;
                };
                /**
                 * Remove all bindings from signal and destroy any reference to external objects (destroy Signal object).
                 * <p><strong>IMPORTANT:</strong> calling any method on the signal instance after calling dispose will throw errors.</p>
                 */
                Signal.prototype.dispose = function() {
                    this.removeAll();
                    delete this._bindings;
                    delete this._prevParams;
                };
                /**
                 * @return {string} String representation of the object.
                 */
                Signal.prototype.toString = function() {
                    return '[Signal active:' + this.active + ' numListeners:' + this.getNumListeners() + ']';
                };
                /**
                 * Signals Version Number
                 * @property VERSION
                 * @type String
                 * @const
                 */
                Signal.VERSION = '1.0.0';
                return Signal;
            }());
            Common.Signal = Signal;
        })(Common = Network.Common || (Network.Common = {}));
    })(Network = SS.Network || (SS.Network = {}));
})(SS || (SS = {}));
///<reference path="./Signal.ts"/>
var SS;
(function(SS) {
    var Network;
    (function(Network) {
        var Common;
        (function(Common) {
            var StateMachine = /** @class */ (function() {
                /**
                 * StateMachine建構式
                 */
                function StateMachine() {
                    /**每次轉移(Transition)狀態要觸發的事件集合(Signal), 呼叫時參數(last: StateEnum, current: StateEnum)*/
                    this.OnEntryAction = new Common.Signal();
                    /**每次狀態變更(Changed)要觸發的事件集合(Signal), 狀態變更(Changed)意指當Transition時State.Last != State.Current, 呼叫時參數(last: StateEnum, current: StateEnum)*/
                    this.OnChangedAction = new Common.Signal();
                }
                /**
                 * 釋放StateMachine資源
                 */
                StateMachine.prototype.Release = function() {
                    this.OnEntryAction.removeAll();
                    this.OnEntryAction = null;
                    this.OnChangedAction.removeAll();
                    this.OnChangedAction = null;
                };
                /**
                 * 從目前狀態轉移到下一個狀態, 會觸發註冊的OnEntryAction()
                 * @param state 要轉移的下一個狀態
                 */
                StateMachine.prototype.Transition = function(state) {
                    this.Last = this.Current;
                    this.Current = state;
                    this.OnEntryAction.dispatch(this.Last, this.Current);
                    if (this.Current != this.Last) {
                        this.OnChangedAction.dispatch(this.Last, this.Current);
                    }
                };
                return StateMachine;
            }());
            Common.StateMachine = StateMachine;
        })(Common = Network.Common || (Network.Common = {}));
    })(Network = SS.Network || (SS.Network = {}));
})(SS || (SS = {}));
///<reference path="../../ArkSDK/ArkClient.ts"/>
///<reference path="./Common/StateMachine.ts"/>
var SS;
(function(SS) {
    var Network;
    (function(Network) {
        /**
         * SS的登入模組, 包含Kiosk, Pin登入以及Socket的建立
         * */
        var LoginModel = /** @class */ (function() {
            function LoginModel(server_url) {
                this.ENCRYPT_KEY = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC0l1BzizlBXTIs3X235yn5EfcNhbt3cgBZ + /peA2WBGh8HUKC2cWGOS3xtRtoPrco/NxNUJD1bhjIeWe0PCRQNYRW76DHhWylspBmgv45wFkTaTGLLZoXeK7BvajEXIrvs03RgGCboXI2CNB3aaOJXqpSPBJ6nbfF9QJYaYLiKkQIDAQAB";
                /**LoginModel的狀態機*/
                this.m_state = null;
                this.m_pinClient = null;
                this.m_pinResult = null;
                this.m_kioskClient = null;
                this.m_socketClient = null;
                this.m_tryAuthFailTimes = 0;
                this.m_logoutSkillGameResult = 0;
                /**登入模組的Callback*/
                this.m_callback = {
                    login: {
                        /**成功回傳(kioskClient: ArkSDK.ArkClient, pinClient: ArkSDK.ArkClient, socketClient: ArkSDK.ArkSocketClient) => void*/
                        success: null,
                        /**失敗回傳(status: number, data: any,cmdName:string)*/
                        fail: null,
                    },
                    logout: {
                        /**成功回傳() => void*/
                        success: null,
                        /**失敗回傳(status: number, data: any,cmdName:string)*/
                        fail: null,
                    },
                    /**當socket斷線時，回傳() => void*/
                    onSokcetClose: null
                };
                this.getContactInfoSuccessCallback = null;
                this.getContactInfoFailCallback = null;
                //Create ark client
                this.m_kioskClient = new ArkSDK.ArkClient(server_url);
                this.m_pinClient = new ArkSDK.ArkClient(server_url);
                this.m_tryAuthFailTimes = 0;
                var self = this;
                //listerner beforeunload
                window.addEventListener("beforeunload", this.CloseSocket.bind(this));
                //Setup state machine
                this.m_state = new Network.Common.StateMachine();
                this.m_state.OnEntryAction.add(this.OnStateEntry, this);
            }
            LoginModel.prototype.Clear = function() {
                window.removeEventListener("beforeunload", this.CloseSocket.bind(this));
            };
            LoginModel.prototype.CloseSocket = function() {
                try {
                    if (this.m_socketClient && this.m_socketClient.isConnect)
                        this.m_socketClient.Close();
                } catch (ex) {
                    console.warn(ex);
                }
            };
            /**
             * 執行登入動作
             * @param user_id 登入資訊 帳號
             * @param user_pw 登入資訊 密碼
             * @param successCallback 登入成功的Callback
             * @param failCallback 登入失敗的Callback
             */
            LoginModel.prototype.DoLogin = function(user_id, user_pw, successCallback, failCallback, onSocketClose, deviceInfo, login_version, connectType) {
                if (deviceInfo === void 0) {
                    deviceInfo = null;
                }
                if (login_version === void 0) {
                    login_version = "";
                }
                if (connectType === void 0) {
                    connectType = "";
                }
                LoginModel.LoginInfo.user_id = user_id;
                LoginModel.LoginInfo.login_version = login_version;
                LoginModel.LoginInfo.connect_network = connectType;
                // device info
                if (deviceInfo) {
                    var men = "";
                    //@ts-ignored
                    men = navigator.deviceMemory;
                    LoginModel.LoginInfo.BrowserInfo = deviceInfo.browser.name;
                    LoginModel.LoginInfo.BrowserVersion = deviceInfo.browser.version;
                    LoginModel.LoginInfo.DeviceInfo = deviceInfo.os.name;
                    LoginModel.LoginInfo.DeviceVersion = deviceInfo.os.version;
                    LoginModel.LoginInfo.Machine = deviceInfo.device.device;
                    LoginModel.LoginInfo.OS = deviceInfo.os.name;
                    LoginModel.LoginInfo.OSVersion = deviceInfo.os.version;
                    LoginModel.LoginInfo.CPU = deviceInfo.cpu.architecture;
                    LoginModel.LoginInfo.Mem = (+men) * 1024;
                    LoginModel.LoginInfo.Height = screen.height;
                    LoginModel.LoginInfo.Width = screen.width;
                    if (deviceInfo.device.type == undefined || deviceInfo.device.vendor == undefined || deviceInfo.device.model == undefined) {
                        LoginModel.LoginInfo.DeviceType = deviceInfo.os.name;
                    } else {
                        LoginModel.LoginInfo.DeviceType = deviceInfo.device.type + "_" + deviceInfo.device.vendor + "_" + deviceInfo.device.model;
                    }
                }
                var crypt = new JSEncrypt();
                crypt.setKey(this.ENCRYPT_KEY);
                LoginModel.LoginInfo.user_pw_encrypt = crypt.encrypt(user_pw);
                this.m_callback.login.success = successCallback;
                this.m_callback.login.fail = failCallback;
                this.m_callback.onSokcetClose = onSocketClose;
                var prefix = user_id.substr(0, 2);
                if (prefix == "M-" || prefix == "m-") {
                    this.m_state.Transition(LoginModel.enumState.VerifyMobileByArkID);
                } else
                    this.m_state.Transition(LoginModel.enumState.VerifyMobile);
            };
            /**
             * 未登入平台前之計時log
             */
            LoginModel.prototype.sndCountBeforeLoadingTime = function() {
                var kiosk_id = LoginModel.LoginInfo.kiosk_id;
                var cmd_data = {
                    "begin_time": LoginModel.m_fBeginTime,
                    "machine": "H5",
                    "kiosk_id": kiosk_id,
                    "machine_id": LoginModel.LoginInfo.machine_id,
                    "state": 1,
                    "count_time": Date.now() - LoginModel.m_fBeginTime,
                    "kiosk_name": kiosk_id.toString()
                };
                this.m_kioskClient.send_drt_cmd("lobby", "countBeforeLoadingTime", cmd_data, this.rcvCountBeforeLoadingTimeAck.bind(this));
            };
            LoginModel.prototype.rcvCountBeforeLoadingTimeAck = function(result) {
                console.log("LoginModel.rcvCountBeforeLoadingTimeAck, result = " + result);
            };
            /**
             * 執行 GUEST 登入動作
             * @param device_uuid aka guest id
             * @param code url code
             * @param logo logo (0,1,2)
             * @param successCallback 登入成功的Callback
             * @param failCallback 登入失敗的Callback
             */
            LoginModel.prototype.DoGuestLogin = function(device_uuid, code, logo, successCallback, failCallback, onSocketClose, deviceInfo, login_version, connectType) {
                if (deviceInfo === void 0) {
                    deviceInfo = null;
                }
                if (login_version === void 0) {
                    login_version = "";
                }
                if (connectType === void 0) {
                    connectType = "";
                }
                var crypt = new JSEncrypt();
                crypt.setKey(this.ENCRYPT_KEY);
                this.m_callback.login.success = successCallback;
                this.m_callback.login.fail = failCallback;
                this.m_callback.onSokcetClose = onSocketClose;
                LoginModel.LoginInfo.device_uuid = device_uuid;
                LoginModel.LoginInfo.code = code;
                LoginModel.LoginInfo.logo = logo;
                LoginModel.LoginInfo.user_id = ""; // 未使用資料 刷新
                LoginModel.LoginInfo.user_pw_encrypt = ""; // 未使用資料 刷新
                LoginModel.LoginInfo.login_version = login_version;
                LoginModel.LoginInfo.connect_network = connectType;
                // device info
                if (deviceInfo) {
                    LoginModel.LoginInfo.BrowserInfo = deviceInfo.browser.name;
                    LoginModel.LoginInfo.BrowserVersion = deviceInfo.browser.version;
                    LoginModel.LoginInfo.DeviceInfo = deviceInfo.os.name;
                    LoginModel.LoginInfo.DeviceVersion = deviceInfo.os.version;
                    LoginModel.LoginInfo.DeviceType = deviceInfo.device.type + "_" + deviceInfo.device.vendor + "_" + deviceInfo.device.model;
                }
                this.m_state.Transition(LoginModel.enumState.VerifyGuest);
            };
            /**
             * 執行登出動作
             * */
            LoginModel.prototype.DoLogout = function(successCallback, failCallback, skillResult) {
                if (skillResult === void 0) {
                    skillResult = 0;
                }
                this.m_callback.logout.success = successCallback;
                this.m_callback.logout.fail = failCallback;
                this.m_logoutSkillGameResult = skillResult;
                this.m_state.Transition(LoginModel.enumState.PinLogout);
            };
            LoginModel.prototype.OnVerifyMobile = function(status, data) {
                console.log("[LoginModel] OnVerifyMobile data: ", data);
                if (status == ArkSDK.HttpResult.OK && data.result == 0) {
                    LoginModel.LoginInfo.kiosk_id = data.data.kiosk_id;
                    LoginModel.LoginInfo.device_id = data.data.device_id;
                    LoginModel.LoginInfo.pin_id = data.data.pin_id;
                    LoginModel.LoginInfo.m_isDefaultPassword = data.data.default_password;
                    LoginModel.LoginInfo.machine_id = data.data.machine_id;
                    this.m_state.Transition(LoginModel.enumState.KioskLogin);
                } else {
                    console.error("[LoginModel] %c VerifyMobile failed\n", "font-size:18px;font-weight:bold;color:green;", data);
                    if (this.m_callback.login.fail != null) {
                        this.m_callback.login.fail(status, data, "VerifyMobile");
                        this.m_callback.login.fail = null;
                    }
                }
            };
            LoginModel.prototype.OnVerifyGuest = function(status, data) {
                console.log("[LoginModel] OnVerifyGuest data: ", data);
                console.log("[LoginModel] OnVerifyGuest state: ", status);
                if (status == ArkSDK.HttpResult.OK && data.err_code == 0) {
                    LoginModel.LoginInfo.pin_id = data.data.pin_id;
                    LoginModel.LoginInfo.kiosk_id = data.data.kiosk_id;
                    LoginModel.LoginInfo.machine_id = data.data.machine_id;
                    LoginModel.LoginInfo.device_id = data.data.device_id;
                    LoginModel.LoginInfo.device_uuid = data.data.device_uuid;
                    LoginModel.LoginInfo.m_isDefaultPassword = false; // 末使用資料 刷新
                    this.m_state.Transition(LoginModel.enumState.KioskLogin);
                } else {
                    console.error("[LoginModel] %c VerifyGuest failed\n", "font-size:18px;font-weight:bold;color:green;", data);
                    if (this.m_callback.login.fail != null) {
                        this.m_callback.login.fail(status, data, "VerifyGuest");
                        this.m_callback.login.fail = null;
                    }
                }
            };
            LoginModel.prototype.OnDeviceLogin = function(status, data) {
                console.log("[LoginModel] OnDeviceLogin data: ", data);
                if (status == ArkSDK.HttpResult.OK) {
                    console.log("[LoginModel] %c DeviceLogin success", "font-size:18px;font-weight:bold;color:green;");
                    LoginModel.LoginInfo.kiosk_ark_id = data.ark_id;
                    LoginModel.LoginInfo.kiosk_ark_token = data.ark_token;
                    if (this.IsSupportLocalStorage()) {
                        localStorage.setItem("kiosk_ark_id", LoginModel.LoginInfo.kiosk_ark_id);
                        localStorage.setItem("kiosk_ark_token", LoginModel.LoginInfo.kiosk_ark_token);
                    } else if (this.IsSupportCookie()) {
                        document.cookie = "kiosk_ark_id=" + LoginModel.LoginInfo.kiosk_ark_id + ";";
                        document.cookie = "kiosk_ark_token=" + LoginModel.LoginInfo.kiosk_ark_token + ";";
                    }
                    this.m_state.Transition(LoginModel.enumState.ConnectKioskSocket);
                } else {
                    if (data != null) {
                        try {
                            data = this.m_kioskClient.decodeData(data.text);
                        } catch (err) {
                            data = data.text | data | err;
                        }
                    }
                    console.error("[LoginModel] %c DeviceLogin fail. Status: " + status + "\n", "font-size:18px;font-weight:bold;color:green;", data);
                    //異常狀況導致TOKEN未清除，則主動清除
                    if (status == ArkSDK.HttpResult.Condition && data.reason == -5) {
                        var isCheckTokenAndClear = this.IsHaveLoginCache();
                        if (isCheckTokenAndClear)
                            this.m_state.Transition(LoginModel.enumState.CheckKioskTokenAndClear);
                        else {
                            //this.PinLoginFail(status, data);
                            if (this.m_callback.login.fail != null) {
                                this.m_callback.login.fail(status, data, "DeviceLogin");
                                this.m_callback.login.fail = null;
                            }
                        }
                    } else {
                        //this.PinLoginFail(status, data);
                        if (this.m_callback.login.fail != null) {
                            this.m_callback.login.fail(status, data, "DeviceLogin");
                            this.m_callback.login.fail = null;
                        }
                    }
                }
            };
            LoginModel.prototype.RecvBindAck = function(result, data, ret, sn, sys, cmd, process_time_ms) {
                if (this.m_socketClient && !this.m_socketClient.isConnect)
                    return;
                if (result == ArkSDK.SocketResult.OK && data && data.hasOwnProperty("result") && data["result"] == 0) {
                    console.log("result :" + result);
                    console.log("data :", data);
                    console.log("ret :" + ret);
                    console.log("sn : " + sn);
                    console.log("sys :" + sys);
                    console.log("cmd :" + cmd);
                    console.log("process_time_ms :" + process_time_ms);
                    if (this.m_callback.login.success != null) {
                        this.m_callback.login.success(this.m_kioskClient, this.m_pinClient, this.m_socketClient);
                        this.m_callback.login.success = null;
                    }
                } else {
                    this.PinLoginFailBySocket(result, data);
                }
            };
            LoginModel.prototype.PinLoginFailBySocket = function(status, data) {
                if (this.m_socketClient && this.m_socketClient.isConnect)
                    this.m_socketClient.Close();
                if (this.m_callback.login.fail != null) {
                    this.m_callback.login.fail(status, data, "BindSocket");
                    this.m_callback.login.fail = null;
                }
            };
            LoginModel.prototype.RecvCheckRedisKioskToken = function(result, data, cmd_name, process_time_ms) {
                console.log(" RecvCheckRedisKioskToken data :", data);
                if (result == ArkSDK.HttpResult.OK && data.kiosk_result == 0) {
                    if (this.m_socketClient && this.m_socketClient.isConnect)
                        this.m_socketClient.Close();
                    this.m_state.Transition(LoginModel.enumState.KioskLogin);
                } else {
                    this.PinLoginFail(ArkSDK.HttpResult.Condition, {
                        reason: -5
                    }); //Redis有Token，並且非本機，所以為重複登入
                }
            };
            LoginModel.prototype.RecvCheckRedisPinToken = function(result, data, cmd_name, process_time_ms) {
                console.log("RecvCheckRedisPinToken data :", data);
                if (result == ArkSDK.HttpResult.OK && data.pin_result == 0) {
                    if (this.m_socketClient && this.m_socketClient.isConnect)
                        this.m_socketClient.Close();
                    this.m_state.Transition(LoginModel.enumState.KioskLogin);
                } else {
                    this.PinLoginFail(ArkSDK.HttpResult.Condition, {
                        reason: -5
                    }); //Redis有Token，並且非本機，所以為重複登入
                }
            };
            //送UnPin，等價於登出成功，所以要將Socket斷線
            LoginModel.prototype.SendUnPinSuccessByWebSocket = function() {
                return __awaiter(this, void 0, void 0, function() {
                    return __generator(this, function(_a) {
                        switch (_a.label) {
                            case 0:
                                return [4 /*yield*/ , this.m_socketClient.SendCmd("lobby", "unpin")];
                            case 1:
                                _a.sent();
                                if (this.m_socketClient && this.m_socketClient.isConnect)
                                    this.m_socketClient.Close();
                                if (this.m_callback.logout.success != null) {
                                    this.m_callback.logout.success();
                                    this.m_callback.logout.success = null;
                                }
                                return [2 /*return*/ ];
                        }
                    });
                });
            };
            LoginModel.prototype.OnPinLogin = function(status, result) {
                console.log("[LoginModel] OnPinLogin data: ", result);
                var self = this;
                if (this.m_socketClient && !this.m_socketClient.isConnect)
                    return;
                if (status == ArkSDK.HttpResult.OK) {
                    console.log("[LoginModel] %c PinLogin success", "font-size:18px;font-weight:bold;color:green;");
                    var purchase_serial_id = 0;
                    if (result.client_purchase_serial_id != undefined)
                        purchase_serial_id = result.client_purchase_serial_id;
                    LoginModel.LoginInfo.purchase_serial_id = purchase_serial_id + 1;
                    LoginModel.LoginInfo.pin_ark_id = result.ark_id;
                    LoginModel.LoginInfo.pin_ark_token = result.ark_token;
                    //@ts-ignore 手機上登入，LOBBY是用Pin的Token (因為可能會卡Token，所以不是用機台Token，避免卡Token等兩分鐘的問題 ...)
                    //因為魚機做Socket連線，用相同Token時，舊的會被踢掉，所以魚機是用機台Token
                    //但Server是用ArkID去搜尋資產，所以機台的ArkID要設定為Pin的ArkID
                    //this.m_kioskClient.arkID = LoginModel.LoginInfo.pin_ark_id; 
                    if (this.IsSupportLocalStorage()) {
                        localStorage.setItem("pin_ark_id", LoginModel.LoginInfo.pin_ark_id);
                        localStorage.setItem("pin_ark_token", LoginModel.LoginInfo.pin_ark_token);
                    } else if (this.IsSupportCookie()) {
                        document.cookie = "pin_ark_id=" + LoginModel.LoginInfo.pin_ark_id + ";";
                        document.cookie = "pin_ark_token=" + LoginModel.LoginInfo.pin_ark_token + ";";
                    }
                    this.m_state.Transition(LoginModel.enumState.BindSocket);
                } else {
                    var data = null;
                    if (result != null) {
                        try {
                            data = this.m_pinClient.decodeData(result.text);
                        } catch (err) {
                            data = result.text | result | err;
                        }
                    }
                    console.error("[LoginModel] %c PinLogin fail. Status: " + status + "\n", "font-size:18px;font-weight:bold;color:green;", data);
                    //異常狀況導致TOKEN未清除，則主動清除
                    if (status == ArkSDK.HttpResult.Condition && data.reason == -5) {
                        var isCheckTokenAndClear = this.IsHaveLoginCache();
                        if (isCheckTokenAndClear)
                            this.m_state.Transition(LoginModel.enumState.CheckPinTokenAndClear);
                        else {
                            this.PinLoginFail(status, data);
                        }
                    } else {
                        this.PinLoginFail(status, data);
                    }
                }
            };
            LoginModel.prototype.IsHaveLoginCache = function() {
                var rtnHaveCache = false;
                if (this.IsSupportLocalStorage()) {
                    if ((localStorage.getItem("kiosk_ark_id") && localStorage.getItem("kiosk_ark_token")) ||
                        (localStorage.getItem("pin_ark_id") && localStorage.getItem("pin_ark_token")))
                        rtnHaveCache = true;
                    else
                        rtnHaveCache = false;
                } else if (this.IsSupportCookie()) {
                    if ((this.GetCookie("kiosk_ark_id") && this.GetCookie("kiosk_ark_token")) ||
                        (this.GetCookie("pin_ark_id") && this.GetCookie("pin_ark_token")))
                        rtnHaveCache = true;
                    else
                        rtnHaveCache = false;
                }
                return rtnHaveCache;
            };
            LoginModel.prototype.GetCookie = function(name) {
                var nameLenPlus = (name.length + 1);
                return document.cookie
                    .split(';')
                    .map(function(c) {
                        return c.trim();
                    })
                    .filter(function(cookie) {
                        return cookie.substring(0, nameLenPlus) === name + "=";
                    })
                    .map(function(cookie) {
                        return decodeURIComponent(cookie.substring(nameLenPlus));
                    })[0] || null;
            };
            LoginModel.prototype.IsSupportCookie = function() {
                try {
                    var result = false;
                    if (window.navigator.cookieEnabled)
                        return true;
                    document.cookie = "testcookie=yes;";
                    var cookieSet = document.cookie;
                    if (cookieSet.indexOf("testcookie=yes") > -1)
                        result = true;
                    document.cookie = "";
                    return result;
                } catch (ex) {
                    return false;
                }
            };
            LoginModel.prototype.IsSupportLocalStorage = function() {
                var rtnIsSupport = true;
                if (window.localStorage) {
                    try {
                        window.localStorage.setItem("test", '1');
                        window.localStorage.removeItem("test");
                    } catch (e) {
                        rtnIsSupport = false;
                    }
                } else
                    rtnIsSupport = false;
                return rtnIsSupport;
            };
            LoginModel.prototype.PinLoginFail = function(status, data) {
                if (this.m_callback.login.fail != null) {
                    this.m_callback.login.fail(status, data, "PinLogin");
                    this.m_callback.login.fail = null;
                }
                if (this.m_socketClient && this.m_socketClient.isConnect)
                    this.m_socketClient.Close();
            };
            LoginModel.prototype.OnPinLogout = function(status, result) {
                console.log("[LoginModel] OnPinLogout data: ", result);
                if (status == ArkSDK.HttpResult.OK) {
                    console.log("[LoginModel] %c PinLogout success", "font-size:18px;font-weight:bold;color:orange;");
                    this.SendUnPinSuccessByWebSocket();
                } else {
                    var data = null;
                    if (result != null) {
                        try {
                            data = this.m_pinClient.decodeData(result.text);
                        } catch (err) {
                            data = result.text | result | err;
                        }
                    }
                    console.error("[LoginModel] PinLogout fail. data: ", data);
                    if (this.m_socketClient && this.m_socketClient.isConnect)
                        this.m_socketClient.Close();
                    if (this.m_callback.logout.fail != null) {
                        this.m_callback.logout.fail(status, data);
                        this.m_callback.logout.fail = null;
                    }
                }
            };
            LoginModel.prototype.OnStateEntry = function(lastState, currentState) {
                console.log("[LoginModel] Current State: %c" + LoginModel.enumState[currentState], "color:red");
                switch (currentState) {
                    case LoginModel.enumState.VerifyMobile:
                        {
                            var cmd_data = {
                                user_id: LoginModel.LoginInfo.user_id,
                                user_pw: LoginModel.LoginInfo.user_pw_encrypt
                            };
                            this.m_kioskClient.send_drt_cmd("lobby", "verify_mobile", cmd_data, this.OnVerifyMobile.bind(this));
                        }
                        break;
                    case LoginModel.enumState.VerifyGuest:
                        {
                            // Guest 登入驗證
                            var cmd_data = {
                                device_uuid: LoginModel.LoginInfo.device_uuid,
                                code: LoginModel.LoginInfo.code,
                                logo: LoginModel.LoginInfo.logo,
                            };
                            this.m_kioskClient.send_drt_cmd("lobby", "verify_guest", cmd_data, this.OnVerifyGuest.bind(this));
                        }
                        break;
                    case LoginModel.enumState.VerifyMobileByArkID:
                        {
                            var confuseArkID = LoginModel.LoginInfo.user_id.split("-").join('').substr(1);
                            console.log("confuseArkID :" + confuseArkID); //玩家輸入使用ARK登入流程
                            var cmd_data = {
                                ark_id: confuseArkID,
                                user_pw: LoginModel.LoginInfo.user_pw_encrypt
                            };
                            this.m_kioskClient.send_drt_cmd("lobby", "verify_mobile_ByArkID", cmd_data, this.OnVerifyMobile.bind(this));
                        }
                        break;
                    case LoginModel.enumState.KioskLogin:
                        {
                            var extraData = void 0;
                            //@ts-ignore
                            try {
                                extraData = {
                                    fromType: "mobile_kiosk",
                                    kiosk_id: LoginModel.LoginInfo.kiosk_id,
                                    device_id: LoginModel.LoginInfo.device_id,
                                    //@ts-ignore
                                    mode: gd_LogoMode
                                };
                            } catch (e) {
                                this.m_callback.login.fail("Failed to obtain gd_LogoMode", "Failed to obtain gd_LogoMode", "DeviceLogin");
                                return;
                            }
                            this.m_kioskClient.device_login("android", LoginModel.LoginInfo.device_id, this.OnDeviceLogin.bind(this), undefined, extraData);
                        }
                        break;
                    case LoginModel.enumState.ConnectKioskSocket:
                        {
                            var self_1 = this;
                            //if (self.m_socketClient != null) self.m_socketClient.Close();
                            self_1.m_socketClient = new ArkSDK.ArkSocketClient(self_1.m_kioskClient, 1024, 5, 10, false);
                            self_1.m_socketClient.m_auth_exdata = {
                                "kiosk_id": LoginModel.LoginInfo.kiosk_id,
                                "device_id": LoginModel.LoginInfo.device_id,
                                "machine_id": LoginModel.LoginInfo.machine_id,
                                "is_mobile": true
                            };
                            self_1.m_socketClient.GetConnectInfo(function(client, cmd_data, status, msg, ip, port, isWebSocketSecure) {
                                console.log("[LoginModel] OnGetConnectInfo");
                                self_1.m_socketClient.ConnectSocket(ip, port, isWebSocketSecure,
                                    //onOpen
                                    function(arkSocket) {
                                        console.log("[LoginModel] OnSocketConnected");
                                        self_1.m_state.Transition(LoginModel.enumState.PinLogin);
                                        //self.m_state.Transition(LoginModel.enumState.BindSocket);
                                    }, //onMsg
                                    function(arkSocket, data) {
                                        console.log("[socket msg]", data);
                                    }, //onClose
                                    function(arkSocket) {
                                        console.log("[socket onClose!]");
                                        if (arkSocket.authFailData && self_1.m_tryAuthFailTimes < 3) {
                                            console.warn("[socket auth failed !]", arkSocket.authFailData);
                                            arkSocket.authFailData = null;
                                            self_1.m_tryAuthFailTimes++;
                                            self_1.m_state.Transition(LoginModel.enumState.KioskLogin);
                                        } else {
                                            self_1.m_callback.onSokcetClose();
                                            //self.m_callback.onSokcetClose = null;
                                        }
                                    }, //onError
                                    function(arkSocket, error) {
                                        console.error(arkSocket, "Socket Connect Errorr!", error);
                                        self_1.m_callback.login.fail("Socket Connect Error", error, "ConnectWebSocket");
                                        self_1.m_callback.login.fail = null;
                                    });
                            });
                        }
                        break;
                    case LoginModel.enumState.PinLogin:
                        {
                            var kiosk_id = LoginModel.LoginInfo.kiosk_id;
                            var pin_id = LoginModel.LoginInfo.pin_id;
                            var device_id = LoginModel.LoginInfo.device_id;
                            //validate驗證使用，不論手機或PC皆設定為PIN (ark_member)
                            var fromType = "pin";
                            var fromID = kiosk_id + pin_id;
                            var fromToken = pin_id;
                            this.m_pinClient.fromType = fromType;
                            this.m_pinClient.fromID = fromID;
                            this.m_pinClient.fromToken = fromToken;
                            //_auth驗證使用的額外資訊 (手機版為mobile，此時送上pin才接受登入)
                            var extraData = void 0;
                            try {
                                extraData = {
                                    fromType: "mobile",
                                    kiosk_id: kiosk_id,
                                    device_id: device_id,
                                    OpenID: fromID,
                                    //@ts-ignore
                                    mode: gd_LogoMode
                                };
                            } catch (e) {
                                this.m_callback.login.fail("Failed to obtain gd_LogoMode", "Failed to obtain gd_LogoMode", "PinLogin");
                                return;
                            }
                            this.m_pinClient.custom_login(fromType, fromID, fromToken, this.OnPinLogin.bind(this), extraData, extraData);
                        }
                        break;
                        //改變機台狀態
                    case LoginModel.enumState.BindSocket:
                        {
                            var cmd_data = {
                                "id": LoginModel.LoginInfo.pin_ark_id,
                                "browserInfo": LoginModel.LoginInfo.BrowserInfo,
                                "browserVersion": LoginModel.LoginInfo.BrowserVersion,
                                "deviceInfo": LoginModel.LoginInfo.DeviceInfo,
                                "deviceVersion": LoginModel.LoginInfo.DeviceVersion,
                                "publishVer": LoginModel.LoginInfo.login_version,
                                "network": LoginModel.LoginInfo.connect_network,
                                "deviceType": LoginModel.LoginInfo.DeviceType,
                                "Machine": LoginModel.LoginInfo.Machine,
                                "OS": LoginModel.LoginInfo.OS,
                                "OSVersion": LoginModel.LoginInfo.OSVersion,
                                "CPU": LoginModel.LoginInfo.CPU,
                                "Mem": LoginModel.LoginInfo.Mem,
                                "Height": LoginModel.LoginInfo.Height,
                                "Width": LoginModel.LoginInfo.Width,
                            };
                            console.log("publishVer= " + LoginModel.LoginInfo.login_version + ", network= " + LoginModel.LoginInfo.connect_network + ", deviceType=" + LoginModel.LoginInfo.DeviceType + ", [LoginModel] BindSocket cmd_data=" + cmd_data);
                            this.m_socketClient.SendCmd("lobby", "pin", cmd_data, this.RecvBindAck.bind(this));
                            this.sndCountBeforeLoadingTime();
                        }
                        break;
                    case LoginModel.enumState.CheckKioskTokenAndClear:
                        {
                            var pinArkID = null;
                            var pinArkToken = null;
                            var kioskArkID = null;
                            var kioskArkToken = null;
                            if (this.IsSupportLocalStorage()) {
                                kioskArkID = localStorage.getItem("kiosk_ark_id");
                                kioskArkToken = localStorage.getItem("kiosk_ark_token");
                            } else if (this.IsSupportCookie()) {
                                kioskArkID = localStorage.getItem("kiosk_ark_id");
                                kioskArkToken = localStorage.getItem("kiosk_ark_token");
                            }
                            var cmd_data = {
                                "kiosk_ark_id": kioskArkID,
                                "kiosk_ark_token": kioskArkToken
                            };
                            this.m_kioskClient.send_drt_cmd("lobby", "checkToken", cmd_data, this.RecvCheckRedisKioskToken.bind(this));
                        }
                        break;
                    case LoginModel.enumState.CheckPinTokenAndClear:
                        {
                            var pinArkID = null;
                            var pinArkToken = null;
                            var kioskArkID = null;
                            var kioskArkToken = null;
                            if (this.IsSupportLocalStorage()) {
                                pinArkID = localStorage.getItem("pin_ark_id");
                                pinArkToken = localStorage.getItem("pin_ark_token");
                            } else if (this.IsSupportCookie()) {
                                pinArkID = this.GetCookie("pin_ark_id");
                                pinArkToken = this.GetCookie("pin_ark_token");
                            }
                            var cmd_data = {
                                "pin_ark_id": pinArkID,
                                "pin_ark_token": pinArkToken,
                            };
                            this.m_kioskClient.send_drt_cmd("lobby", "checkToken", cmd_data, this.RecvCheckRedisPinToken.bind(this));
                        }
                        break;
                    case LoginModel.enumState.PinLogout:
                        {
                            if (this.m_pinClient != null) {
                                var cmd_data = {
                                    "result": this.m_logoutSkillGameResult
                                };
                                this.m_pinClient.send_cmd("pinUser", "PinLogout", cmd_data, this.OnPinLogout.bind(this));
                            }
                        }
                        break;
                }
            };
            /**
             * 取得未登入前的聯絡資訊
             * @param code 網址代碼
             * @param logo logo
             * @param successCallback 成功取得資料的 callback
             * @param failCallback 失敗的 callback
             */
            LoginModel.prototype.getContactInfoNotLogin = function(code, logo, successCallback, failCallback) {
                this.getContactInfoSuccessCallback = successCallback;
                this.getContactInfoFailCallback = failCallback;
                // cache logo
                LoginModel.LoginInfo.logo = logo;
                var cmd_data = {
                    code: code,
                    logo: logo
                };
                this.m_kioskClient.send_drt_cmd("lobby", "getContactInfo", cmd_data, this.onRecieveContactInfoNotLogin.bind(this));
            };
            LoginModel.prototype.onRecieveContactInfoNotLogin = function(status, data) {
                console.log("[LoginModel] onRecieveContactInfoNotLogin state: ", status);
                console.log("[LoginModel] onRecieveContactInfoNotLogin data: ", data);
                if (status == ArkSDK.HttpResult.OK && data.err_code == 0) {
                    if (this.getContactInfoSuccessCallback != null) {
                        this.getContactInfoSuccessCallback(status, data, "getContactInfoNotLogin");
                        this.getContactInfoSuccessCallback = null;
                    }
                } else {
                    console.error("[LoginModel] %c getContactInfoNotLogin failed\n", "font-size:18px;font-weight:bold;color:green;", data);
                    if (this.getContactInfoFailCallback != null) {
                        this.getContactInfoFailCallback(status, data, "getContactInfoNotLogin");
                        this.getContactInfoFailCallback = null;
                    }
                }
            };
            /**
             * 發送登入前的 log
             * @param _click_id
             * @param _btn_click_id
             * @param _click_name
             * @param _device_id
             * @param _logo
             */
            LoginModel.prototype.sendDirectClickLog = function(_click_id, _btn_click_id, _click_name, _device_id, _logo, deviceInfo) {
                if (deviceInfo === void 0) {
                    deviceInfo = null;
                }
                //@ts-ignore
                var date = new Date();
                var now = date.getTime();
                var local = date.getTime() - date.getTimezoneOffset() * 60000;
                var data = {
                    click_id: _click_id,
                    btn_click_id: _btn_click_id,
                    device_id: _device_id,
                    logo: _logo,
                    click_name: _click_name,
                    btn_click_times: 1,
                    device_type: 1,
                    client_time_utc: Math.floor(now / 1000),
                    client_time_local: Math.floor(local / 1000),
                    browser_info: deviceInfo.browser.name,
                    browser_version: deviceInfo.browser.version,
                    device_info: deviceInfo.os.name,
                    device_version: deviceInfo.os.version,
                };
                var arr = [];
                arr[0] = data;
                var cmdData = {};
                cmdData["btn_click_list"] = arr;
                console.warn("sendDirectClickLog");
                console.warn(cmdData);
                this.m_kioskClient.send_drt_cmd("lobby", "sendRegDirectClickLog", cmdData, null);
            };
            LoginModel.m_fBeginTime = Date.now();
            /**登入資訊*/
            LoginModel.LoginInfo = {
                user_id: null,
                login_version: null,
                user_pw_encrypt: null,
                device_id: null,
                kiosk_id: null,
                pin_id: null,
                machine_id: null,
                purchase_serial_id: 0,
                shutter_skill_fail_serial_id: 0,
                pin_ark_id: null,
                pin_ark_token: null,
                kiosk_ark_id: null,
                kiosk_ark_token: null,
                m_isDefaultPassword: false,
                device_uuid: null,
                code: null,
                logo: null,
                BrowserInfo: null,
                BrowserVersion: null,
                DeviceInfo: null,
                DeviceVersion: null,
                DeviceType: null,
                connect_network: null,
                Machine: null,
                OS: null,
                OSVersion: null,
                CPU: null,
                Mem: 0,
                Height: 0,
                Width: 0,
            };
            return LoginModel;
        }());
        Network.LoginModel = LoginModel;
    })(Network = SS.Network || (SS.Network = {}));
})(SS || (SS = {}));
(function(SS) {
    var Network;
    (function(Network) {
        var LoginModel;
        (function(LoginModel) {
            var enumState;
            (function(enumState) {
                enumState[enumState["None"] = 0] = "None";
                enumState[enumState["VerifyMobile"] = 1] = "VerifyMobile";
                enumState[enumState["VerifyMobileByArkID"] = 2] = "VerifyMobileByArkID";
                enumState[enumState["KioskLogin"] = 3] = "KioskLogin";
                enumState[enumState["ConnectKioskSocket"] = 4] = "ConnectKioskSocket";
                enumState[enumState["PinLogin"] = 5] = "PinLogin";
                enumState[enumState["BindSocket"] = 6] = "BindSocket";
                enumState[enumState["CheckKioskTokenAndClear"] = 7] = "CheckKioskTokenAndClear";
                enumState[enumState["CheckPinTokenAndClear"] = 8] = "CheckPinTokenAndClear";
                enumState[enumState["PinLogout"] = 9] = "PinLogout";
                enumState[enumState["VerifyGuest"] = 10] = "VerifyGuest";
            })(enumState = LoginModel.enumState || (LoginModel.enumState = {}));
        })(LoginModel = Network.LoginModel || (Network.LoginModel = {}));
    })(Network = SS.Network || (SS.Network = {}));
})(SS || (SS = {}));
///<reference path="../../ArkSDK/ArkClient.ts"/>
var SS;
(function(SS) {
    var Network;
    (function(Network) {
        var UserClient = /** @class */ (function() {
            function UserClient(kioskClient, pinClient) {
                this.ENCRYPT_KEY = "MIGfMA0GCSqGSIb3DQEBAQUAA4GNADCBiQKBgQC0l1BzizlBXTIs3X235yn5EfcNhbt3cgBZ + /peA2WBGh8HUKC2cWGOS3xtRtoPrco/NxNUJD1bhjIeWe0PCRQNYRW76DHhWylspBmgv45wFkTaTGLLZoXeK7BvajEXIrvs03RgGCboXI2CNB3aaOJXqpSPBJ6nbfF9QJYaYLiKkQIDAQAB";
                this.m_kioskClient = null;
                this.m_pinClient = null;
                this.cmdTmpDataDict = {};
                this.cmdRetryTimesDict = {};
                this.cmdCallbackDict = {};
                this.cmdRecvDict = {};
                this.cmdSysName = {};
                this.Timer = [2000, 4000, 8000, 16000];
                this.systemName = "lobby";
                this.m_arrJsonClickLog = [];
                //public static get GetClickLogData() { return this.m_arrJsonClickLog };
                this.m_bHaveClickLog = false;
                this.getContactInfoSuccessCallback = null;
                this.getContactInfoFailCallback = null;
                this.getCompsSucceedCallback = null;
                this.getCompsFailedCallback = null;
                this.getCompsEventInfoSucceedCallback = null;
                this.getCompsEventInfoFailedCallback = null;
                this.m_kioskClient = kioskClient;
                this.m_pinClient = pinClient;
            }
            Object.defineProperty(UserClient.prototype, "GetPinClient", {
                //供遊戲使用PIN登入資訊
                get: function() {
                    return this.m_pinClient;
                },
                enumerable: false,
                configurable: true
            });;
            Object.defineProperty(UserClient.prototype, "GetKioskClient", {
                get: function() {
                    return this.m_kioskClient;
                },
                enumerable: false,
                configurable: true
            });;
            UserClient.prototype.setNetClient = function(kioskClient, pinClient) {
                this.m_kioskClient = kioskClient;
                this.m_pinClient = pinClient;
            };
            UserClient.prototype.Release = function() {
                this.m_kioskClient = null;
                this.m_pinClient = null;
                this.cmdTmpDataDict = null;
                this.cmdRetryTimesDict = null;
                this.cmdCallbackDict = null;
                this.Timer = null;
            };
            UserClient.prototype.collectQuest = function(questID, questLevel, callback) {
                var cmd_Name = "collectQuest";
                var cmd_data = {
                    "quest_id": questID,
                    "quest_level": questLevel
                };
                this.SendRetryCmd(cmd_Name, cmd_data, callback, this.OnRecvRetryCmd.bind(this));
            };
            UserClient.prototype.getCommonEventInfo = function(callback) {
                var cmd_Name = "getCommonEventInfo";
                this.SendRetryCmd(cmd_Name, null, callback, this.OnRecvRetryCmd.bind(this));
            };
            UserClient.prototype.getPuzzleQuestInfo = function(callback) {
                var cmd_Name = "GetPuzzleQuestInfo";
                this.SendRetryCmd(cmd_Name, null, callback, this.OnRecvRetryCmd.bind(this));
            };
            UserClient.prototype.collectPuzzleQuest = function(quest_name, serial_no, quest_level, callback) {
                var cmd_Name = "CollectPuzzleQuest";
                var cmd_data = {
                    "name": quest_name,
                    "serial_no": serial_no,
                    "quest_level": quest_level
                };
                this.SendRetryCmd(cmd_Name, cmd_data, callback, this.OnRecvRetryCmd.bind(this));
            };
            UserClient.prototype.getPuzzleRank = function(rank_list_id, rank_let_limit, callback) {
                var cmd_Name = "GetPuzzleRank";
                var cmd_data = {
                    "rank_list_id": rank_list_id,
                    "rank_get_limit": rank_let_limit
                };
                this.SendRetryCmd(cmd_Name, cmd_data, callback, this.OnRecvRetryCmd.bind(this));
            };
            UserClient.prototype.getPuzzleHistory = function(rank_list_id, callback) {
                var cmd_Name = "getPuzzleHistory";
                // 筆數先固定50筆寫死
                var cmd_data = {
                    "rank_list_id": rank_list_id,
                    "limit": 50
                };
                console.log("[UserClient.getPuzzleHistory] ", cmd_data);
                this.SendRetryCmd(cmd_Name, cmd_data, callback, this.OnRecvRetryCmd.bind(this));
            };
            // ExtraFree 可領獎資料
            UserClient.prototype.getExtraCompsResult = function(callback) {
                var cmd_Name = "getExtraCompsResult";
                var cmd_data = {
                    kiosk_id: Network.LoginModel.LoginInfo.kiosk_id,
                    pin_id: Network.LoginModel.LoginInfo.pin_id
                };
                this.SendRetryCmd(cmd_Name, cmd_data, callback, this.OnRecvRetryCmd.bind(this));
            };
            // ExtraFree 點擊領獎
            UserClient.prototype.collectExtraCompsAward = function(event_id, event_serial_no, callback) {
                var cmd_Name = "collectExtraCompsAward";
                var cmd_data = {
                    kiosk_id: Network.LoginModel.LoginInfo.kiosk_id,
                    pin_id: Network.LoginModel.LoginInfo.pin_id,
                    EventID: event_id,
                    EventSerialNo: event_serial_no
                };
                this.NoRtryCmd(cmd_Name, cmd_data, callback, this.OnRecvRetryCmd.bind(this));
            };
            UserClient.prototype.NoRtryCmd = function(cmd_name, cmd_data, callback, timeout, sn, extra_data) {
                if (timeout === void 0) {
                    timeout = 15000;
                }
                this.m_pinClient.send_cmd(this.systemName, cmd_name, cmd_data, callback, timeout, sn, extra_data);
            };
            UserClient.prototype.getNoRetryCommonEventInfo = function(callback) {
                var cmd_Name = "getCommonEventInfo";
                var cmdData = {};
                this.NoRtryCmd(cmd_Name, cmdData, callback);
            };
            UserClient.prototype.GetMissionBonus = function(ThemeID, callback) {
                var cmd_Name = "collectH5LoginBonus";
                var cmd_data = {
                    "theme_id": ThemeID
                };
                this.SendRetryCmd(cmd_Name, cmd_data, callback, this.OnRecvRetryCmd.bind(this));
            };
            UserClient.prototype.GetMissionBonusInfo = function(callback) {
                var cmd_Name = "getH5LoginBonusInfo";
                this.SendRetryCmd(cmd_Name, null, callback, this.OnRecvRetryCmd.bind(this));
            };
            UserClient.prototype.GetUserProperty = function(callback) {
                console.log("[UserClient.GetUserProperty] %c GetUserProperty", "color:coral");
                var cmd_Name = "getUserProperty";
                var cmd_data = {
                    kiosk_id: Network.LoginModel.LoginInfo.kiosk_id,
                    pin_id: Network.LoginModel.LoginInfo.pin_id,
                    device_id: Network.LoginModel.LoginInfo.device_id,
                    shutter_skill_fail_serial_id: Network.LoginModel.LoginInfo.shutter_skill_fail_serial_id
                };
                this.SendRetryCmd(cmd_Name, cmd_data, callback, this.OnGetUserPropertyRecv.bind(this));
            };
            UserClient.prototype.OnGetUserPropertyRecv = function(status, result, cmd_Name) {
                console.log("[UserClient.OnGetUserPropertyRecv] ", status, result, cmd_Name);
                if (status === ArkSDK.HttpConnect.HttpResult.OK) {
                    var shutter_skill_fail_serial_id = 0;
                    if (result == null || result.cmd_data == null) {
                        this.CmdCallback(cmd_Name, status, result);
                        return;
                    }
                    if (result.cmd_data.result === 0 || result.cmd_data.result === 1) {
                        if (result.cmd_data.data.shutter_skill_fail_serial_id != undefined)
                            shutter_skill_fail_serial_id = result.cmd_data.data.shutter_skill_fail_serial_id;
                        this.CmdCallback(cmd_Name, status, result);
                        Network.LoginModel.LoginInfo.shutter_skill_fail_serial_id = shutter_skill_fail_serial_id + 1;
                    } else {
                        this.CmdCallback(cmd_Name, status, result);
                    }
                } else {
                    if (this.cmdRetryTimesDict[cmd_Name] < this.Timer.length) {
                        console.log("shutter skill fail retry : ", this.cmdRetryTimesDict[cmd_Name]);
                        this.ReSendCmd(cmd_Name);
                        this.cmdRetryTimesDict[cmd_Name]++;
                    } else {
                        console.log("shutter skill fail retry dead");
                        this.CmdCallback(cmd_Name, status, result);
                    }
                }
            };
            UserClient.prototype.SendChangeID = function(newMobileID, callback) {
                console.log("[UserClient.SendChangeID] %c SendChangeID", "color:coral");
                var cmd_Name = "changeUserID";
                var cmd_data = {
                    user_id: newMobileID,
                };
                this.SendCommand("pinUser", cmd_Name, cmd_data, callback);
            };
            UserClient.prototype.SendPlayFlowData = function(deviceInfo, SceneName, status) {
                var cmd_Name = "playerFlow";
                var cmd_data = {
                    BrowserInfo: deviceInfo.browser.name,
                    BrowserVersion: deviceInfo.browser.version,
                    DeviceInfo: deviceInfo.os.name,
                    DeviceVersion: deviceInfo.os.version,
                    ThemeTitle: SceneName,
                    KioskID: Network.LoginModel.LoginInfo.kiosk_id,
                    MachineID: Network.LoginModel.LoginInfo.machine_id,
                    pin_id: Network.LoginModel.LoginInfo.pin_id,
                    PinArkID: Network.LoginModel.LoginInfo.pin_ark_id,
                    UserID: Network.LoginModel.LoginInfo.user_id,
                    Status: status
                };
                this.m_pinClient.send_cmd(this.systemName, cmd_Name, cmd_data, null, 60e3);
            };
            UserClient.prototype.SendPacketDelayData = function(data) {
                var cmd_Name = "sendH5ClientPacketDelayTime";
                var cmd_data = {
                    sent: data.sent,
                    receive: data.receive,
                    loss: data.loss,
                    best: data.best,
                    average: data.average,
                    worst: data.worst,
                    totalElapsedTime: data.totalElapsedTime,
                    KioskID: Network.LoginModel.LoginInfo.kiosk_id,
                    MachineID: Network.LoginModel.LoginInfo.machine_id,
                    PinArkID: Network.LoginModel.LoginInfo.pin_ark_id,
                    UserID: Network.LoginModel.LoginInfo.user_id,
                };
                this.m_pinClient.send_cmd(this.systemName, cmd_Name, cmd_data);
            };
            UserClient.prototype.SendErrorLog = function(data) {
                var cmd_Name = "sendH5ErrorLog";
                var cmd_data = {
                    error_result: data.error_result,
                    trigger_point: data.trigger_point,
                    scene_name: data.scene_name,
                    error_handle: data.error_handle,
                    ClientTimeUTC: data.ClientTimeUTC,
                    MachineID: data.MachineID,
                    KioskID: data.KioskID,
                    PinArkID: data.PinArkID,
                    UserID: data.UserID
                };
                this.m_pinClient.send_cmd(this.systemName, cmd_Name, cmd_data);
            };
            UserClient.prototype.GetLobbyInfo = function(callback) {
                console.log("[UserClient.GetLobbyInfo] %c GetLobbyInfo", "color:coral");
                var cmd_Name = "getLobbyInfo";
                var cmd_data = {
                    kiosk_id: Network.LoginModel.LoginInfo.kiosk_id,
                    device_id: Network.LoginModel.LoginInfo.device_id
                };
                this.SendRetryCmd(cmd_Name, cmd_data, callback, this.OnRecvRetryCmd.bind(this));
            };
            UserClient.prototype.GetClientBannerAdv = function(callback) {
                console.log("[UserClient.GetClientBannerAdv] %c GetClientBannerAdv", "color:coral");
                var cmd_Name = "getClientBannerAdv";
                var cmd_data = {
                    kiosk_id: Network.LoginModel.LoginInfo.kiosk_id,
                    platform: "PHONE"
                };
                this.SendCommand("popup", cmd_Name, cmd_data, callback);
            };
            UserClient.prototype.GetClientPopUpAdv = function(callback) {
                console.log("[UserClient.GetClientPopUpAdv] %c GetClientPopUpAdv", "color:coral");
                var cmd_Name = "getClientPopUpAdv";
                var cmd_data = {
                    kiosk_id: Network.LoginModel.LoginInfo.kiosk_id,
                    platform: "PHONE"
                };
                this.SendCommand("popup", cmd_Name, cmd_data, callback);
            };
            UserClient.prototype.GetPopupBillBoard = function(logoMode, callback) {
                console.log("[UserClient.GetPopupBillBoard] %c GetPopupBillBoard", "color:coral");
                var cmd_Name = "getPopupBillBoard";
                var cmd_data = {
                    kiosk_id: Network.LoginModel.LoginInfo.kiosk_id,
                    device: Network.LoginModel.LoginInfo.device_id,
                    mode: logoMode
                };
                this.SendRetryCmd(cmd_Name, cmd_data, callback, this.OnRecvRetryCmd.bind(this));
            };
            UserClient.prototype.GetPopupContent = function(logoMode, titleID, tagID, callback) {
                console.log("[UserClient.GetPopupContent] %c GetPopupContent", "color:coral");
                var cmd_Name = "getPopupContent";
                var cmd_data = {
                    kiosk_id: Network.LoginModel.LoginInfo.kiosk_id,
                    device: Network.LoginModel.LoginInfo.device_id,
                    mode: logoMode,
                    TitleID: titleID,
                    TagID: tagID
                };
                if (titleID == "hot") {
                    cmd_data["HotID"] = titleID;
                }
                this.SendRetryCmd(cmd_Name, cmd_data, callback, this.OnRecvRetryCmd.bind(this));
            };
            UserClient.prototype.SendShutterSkillLose = function(curLineBet, curLines, callback) {
                console.log("[UserClient.ShutterSkillFail] %c ShutterSkillFail", "color:coral");
                var cmd_Name = "ShutterSkillFail";
                var cmd_data = {
                    'total_bet': (curLineBet * curLines),
                    'shutter_skill_fail_serial_id': Network.LoginModel.LoginInfo.shutter_skill_fail_serial_id
                };
                this.SendRetryCmd(cmd_Name, cmd_data, callback, this.OnShutterSkillFailRecv.bind(this));
            };
            //[手機綁定] 該州別是否允許手機綁定
            UserClient.prototype.SendSmsSetting = function(callback) {
                console.log("[UserClient.SendSmsSetting] %c SendSmsSetting", "color:coral");
                var cmd_Name = "getSmsSetting";
                var cmd_data = {};
                this.SendRetryCmd(cmd_Name, cmd_data, callback, this.OnRecvRetryCmd.bind(this));
            };
            //[手機綁定] 送出是否接受GD SMS設定選項
            UserClient.prototype.SendChangeSmsSetting = function(isAcceptSms, callback) {
                console.log("[UserClient.changeSmsSetting] %c changeSmsSetting", "color:coral");
                var cmd_Name = "changeSmsSetting";
                var cmd_data = {
                    'is_accept_sms': isAcceptSms
                };
                this.SendRetryCmd(cmd_Name, cmd_data, callback, this.OnRecvRetryCmd.bind(this));
            };
            //[手機綁定] 點擊GetBonus Type
            UserClient.prototype.SendVerifyCodeEffect = function(callback) {
                console.log("[UserClient.getVerifyCodeEffect] %c getVerifyCodeEffect", "color:coral");
                var cmd_Name = "getVerifyCodeEffect";
                this.SendRetryCmd(cmd_Name, null, callback, this.OnRecvRetryCmd.bind(this));
            };
            //[手機綁定] 點擊 Send Code Btn
            UserClient.prototype.SendUserCellPhoneVerify = function(callback) {
                console.log("[UserClient.SendUserCellPhoneVerify] %c SendUserCellPhoneVerify", "color:coral");
                var cmd_Name = "getUserCellphoneVerify";
                this.SendRetryCmd(cmd_Name, null, callback, this.OnRecvRetryCmd.bind(this));
            };
            //[手機綁定] 點擊 Send SMS
            UserClient.prototype.SendVerifyCode = function(cellPhoneNum, cellPhoneStateNum, callback) {
                console.log("[UserClient.SendVerifyCode] %c SendVerifyCode", "color:coral");
                var cmd_Name = "sendVerifyCode";
                var cmd_data = {
                    'cellphone_num': cellPhoneNum,
                    'cellphone_state_num': cellPhoneStateNum
                };
                this.m_pinClient.send_cmd(this.systemName, cmd_Name, cmd_data, callback);
            };
            //[手機綁定] 輸入完成驗證碼
            UserClient.prototype.SendVerifyValidCode = function(validCode, callback) {
                console.log("[UserClient.SendVerifyValidCode] %c SendVerifyValidCode", "color:coral");
                var cmd_Name = "verifyVerifyCode";
                var cmd_data = {
                    'verify_code': validCode
                };
                this.m_pinClient.send_cmd(this.systemName, cmd_Name, cmd_data, callback);
            };
            UserClient.prototype.SendSessionLengthStart = function(ThemeId, callback) {
                console.log("[UserClient.SendSessionLengthStart] %c SessionLengthStart", "color:coral");
                var cmd_Name = "sessionLengthStart";
                var cmd_data = {
                    'gameId': ThemeId
                };
                this.m_pinClient.send_cmd(this.systemName, cmd_Name, cmd_data, callback);
            };
            UserClient.prototype.SendSessionLengthEnd = function(ThemeId, callback) {
                console.log("[UserClient.SendSessionLengthEnd] %c SessionLengthEnd", "color:coral");
                var cmd_Name = "sessionLengthEnd";
                var cmd_data = {
                    'gameId': ThemeId
                };
                this.m_pinClient.send_cmd(this.systemName, cmd_Name, cmd_data, callback);
            };
            UserClient.prototype.GetKioskGameSetting = function(callback) {
                console.log("[UserClient.GetKioskGameSetting] %c GetKioskGameSetting", "color:coral");
                var cmd_Name = "getKioskGameSetting";
                var cmd_data = {
                    kiosk_id: Network.LoginModel.LoginInfo.kiosk_id,
                };
                this.SendRetryCmd(cmd_Name, cmd_data, callback, this.OnRecvRetryCmd.bind(this));
            };
            UserClient.prototype.SendPurchase = function(purchase_key, callback) {
                console.log("[UserClient.Purchase] %c Purchase", "color:coral");
                var cmd_Name = "purchase";
                var cmd_data = {
                    key: purchase_key,
                    client_purchase_serial_id: Network.LoginModel.LoginInfo.purchase_serial_id
                };
                this.SendRetryCmd(cmd_Name, cmd_data, callback, this.OnPurchaseRecv.bind(this));
            };
            UserClient.prototype.SendChangePassword = function(_old_pw, _new_pw, callback) {
                console.log("[UserClient.SendChangePassword]");
                var cmd_Name = "changePassword";
                var crypt = new JSEncrypt();
                crypt.setKey(this.ENCRYPT_KEY);
                var user_pw_old_encrypt = crypt.encrypt(_old_pw);
                var user_pw_new_encrypt = crypt.encrypt(_new_pw);
                var cmd_data = {};
                cmd_data["user_id"] = Network.LoginModel.LoginInfo.user_id;
                cmd_data["user_pw_old"] = user_pw_old_encrypt;
                cmd_data["user_pw_new"] = user_pw_new_encrypt;
                cmd_data["kiosk_id"] = Network.LoginModel.LoginInfo.kiosk_id;
                cmd_data["pin_id"] = Network.LoginModel.LoginInfo.pin_id;
                this.SendCommand("pinUser", cmd_Name, cmd_data, callback);
            };
            UserClient.prototype.OnRecvRetryCmd = function(status, result, cmd_Name) {
                if (status === ArkSDK.HttpConnect.HttpResult.OK) {
                    this.CmdCallback(cmd_Name, status, result);
                } else {
                    if (this.cmdRetryTimesDict[cmd_Name] < this.Timer.length) {
                        console.log(cmd_Name + " retry : ", this.cmdRetryTimesDict[cmd_Name]);
                        this.ReSendCmd(cmd_Name);
                        this.cmdRetryTimesDict[cmd_Name]++;
                    } else {
                        console.log(cmd_Name + " retry dead");
                        this.CmdCallback(cmd_Name, status, result);
                    }
                }
            };
            UserClient.prototype.OnClickLogCmd = function(status, result, cmd_Name) {
                if (status === ArkSDK.HttpConnect.HttpResult.OK) {
                    this.CmdCallback(cmd_Name, status, result);
                } else {
                    if (this.cmdRetryTimesDict[cmd_Name] < this.Timer.length) {
                        console.log(cmd_Name + " retry : ", this.cmdRetryTimesDict[cmd_Name]);
                        this.ReSendCmd(cmd_Name);
                        this.cmdRetryTimesDict[cmd_Name]++;
                    } else {
                        console.log(cmd_Name + " retry dead");
                        this.CmdCallback(cmd_Name, status, result);
                    }
                }
            };
            UserClient.prototype.OnPurchaseRecv = function(status, result, cmd_Name) {
                if (status === ArkSDK.HttpConnect.HttpResult.OK) {
                    if (result == null || result.cmd_data == null) {
                        this.CmdCallback(cmd_Name, status, result);
                        return;
                    }
                    if (result.cmd_data.result === 0 || result.cmd_data.result === 1) {
                        if (Network.LoginModel.LoginInfo.purchase_serial_id === result.cmd_data.client_purchase_serial_id) {
                            Network.LoginModel.LoginInfo.purchase_serial_id++;
                            this.CmdCallback(cmd_Name, status, result);
                        } else {
                            console.warn("LoginModel.LoginInfo.purchase_serial_id " + Network.LoginModel.LoginInfo.purchase_serial_id +
                                " != " + result.cmd_data.client_purchase_serial_id + " result.cmd_data.client_purchase_serial_id");
                        }
                    } else {
                        this.CmdCallback(cmd_Name, status, result);
                    }
                } else {
                    if (this.cmdRetryTimesDict[cmd_Name] < this.Timer.length) {
                        console.log("purchase retry : ", this.cmdRetryTimesDict[cmd_Name]);
                        this.ReSendCmd(cmd_Name);
                        this.cmdRetryTimesDict[cmd_Name]++;
                    } else {
                        console.log("purchase retry dead");
                        this.CmdCallback(cmd_Name, status, result);
                    }
                }
            };
            UserClient.prototype.OnShutterSkillFailRecv = function(status, result, cmd_Name) {
                console.warn("[OnShutterSkillFailRecv]", result);
                if (status === ArkSDK.HttpConnect.HttpResult.OK) {
                    if (result == null || result.cmd_data == null) {
                        this.CmdCallback(cmd_Name, status, result);
                        return;
                    }
                    if (result.cmd_data.result === 0 || result.cmd_data.result === 1) {
                        if (Network.LoginModel.LoginInfo.shutter_skill_fail_serial_id === result.cmd_data.shutter_skill_fail_serial_id) {
                            Network.LoginModel.LoginInfo.shutter_skill_fail_serial_id += 1;
                            this.CmdCallback(cmd_Name, status, result);
                        } else {
                            console.warn("LoginModel.LoginInfo.shutter_skill_fail_serial_id " + Network.LoginModel.LoginInfo.shutter_skill_fail_serial_id +
                                " != " + result.cmd_data.shutter_skill_fail_serial_id + " result.cmd_data.shutter_skill_fail_serial_id");
                        }
                    } else {
                        this.CmdCallback(cmd_Name, status, result);
                    }
                } else {
                    if (this.cmdRetryTimesDict[cmd_Name] < this.Timer.length) {
                        console.log("shutter skill fail retry : ", this.cmdRetryTimesDict[cmd_Name]);
                        this.ReSendCmd(cmd_Name);
                        this.cmdRetryTimesDict[cmd_Name]++;
                    } else {
                        console.log("shutter skill fail retry dead");
                        this.CmdCallback(cmd_Name, status, result);
                    }
                }
            };
            /**
             * 送出帶 Retry 的 Command
             * @param systemName Server 的 Sysytem Name
             * @param commandName Server 的 Command Name
             * @param data 要送出的資料
             * @param callback
             */
            UserClient.prototype.SendCommand = function(systemName, commandName, data, callback) {
                if (this.cmdTmpDataDict[commandName] != undefined) {
                    console.error(commandName, "is send already");
                    return;
                } else {
                    this.cmdTmpDataDict[commandName] = data;
                    this.cmdRetryTimesDict[commandName] = 0;
                    this.cmdCallbackDict[commandName] = callback;
                    this.cmdRecvDict[commandName] = this.OnRecvRetryCmd.bind(this);
                    this.cmdSysName[commandName] = systemName;
                }
                var retryIndex = this.cmdRetryTimesDict[commandName];
                this.cmdRetryTimesDict[commandName]++;
                this.m_pinClient.send_cmd(systemName, commandName, this.cmdTmpDataDict[commandName], this.cmdRecvDict[commandName], this.Timer[retryIndex]);
            };
            UserClient.prototype.SendRetryCmd = function(cmd_Name, cmd_data, callback, RecvHandler) {
                if (this.cmdTmpDataDict[cmd_Name] != undefined) {
                    console.error(cmd_Name, "is send already");
                    return;
                } else {
                    this.cmdTmpDataDict[cmd_Name] = cmd_data;
                    this.cmdRetryTimesDict[cmd_Name] = 0;
                    this.cmdCallbackDict[cmd_Name] = callback;
                    this.cmdRecvDict[cmd_Name] = RecvHandler;
                }
                var retryIndex = this.cmdRetryTimesDict[cmd_Name];
                this.cmdRetryTimesDict[cmd_Name]++;
                this.m_pinClient.send_cmd(this.systemName, cmd_Name, this.cmdTmpDataDict[cmd_Name], this.cmdRecvDict[cmd_Name], this.Timer[retryIndex]);
            };
            UserClient.prototype.ReSendCmd = function(cmd_Name) {
                console.log("[UserClient.ReSendCmd] %c" + cmd_Name, "color:coral");
                var retryIndex = this.cmdRetryTimesDict[cmd_Name];
                var sysName = this.systemName;
                if (this.cmdSysName[cmd_Name]) {
                    sysName = this.cmdSysName[cmd_Name];
                }
                this.m_pinClient.send_cmd(this.systemName, cmd_Name, this.cmdTmpDataDict[cmd_Name], this.cmdRecvDict[cmd_Name], this.Timer[retryIndex]);
            };
            UserClient.prototype.CmdCallback = function(cmdName, status, result) {
                if (this.cmdCallbackDict != undefined) {
                    this.cmdCallbackDict[cmdName](status, result);
                    this.ReleaseRetryCmdData(cmdName);
                }
            };
            UserClient.prototype.ReleaseRetryCmdData = function(cmdName) {
                this.cmdRetryTimesDict[cmdName] = undefined;
                this.cmdTmpDataDict[cmdName] = undefined;
                this.cmdCallbackDict[cmdName] = undefined;
                this.cmdRecvDict[cmdName] = undefined;
                this.cmdSysName[cmdName] = undefined;
            };
            /**
             * 紀錄click log，每五分鐘批量上傳
             * @param click_id 表示屬於哪個活動或元件的log
             * @param btn_click_id 表示該活動或元件中定義的按鈕ID
             */
            UserClient.prototype.recordClickLog = function(click_id, btn_click_id, extra_data) {
                if (extra_data === void 0) {
                    extra_data = null;
                }
                if (!this.m_bHaveClickLog) {
                    this.m_bHaveClickLog = true;
                    this.sendClickLog();
                }
                //@ts-ignore
                var curGame = SS.Common.GameEnvironment.CurrentGameNow;
                var scenes = curGame ? curGame : "Lobby";
                var newLog = true;
                for (var i = 0; i < this.m_arrJsonClickLog.length; i++) {
                    var element = this.m_arrJsonClickLog[i];
                    if (element["click_id"] == click_id &&
                        element["btn_click_id"] == btn_click_id &&
                        element["scenes"] == scenes) {
                        newLog = false;
                        element["btn_click_times"] += 1;
                        break;
                    }
                }
                if (newLog) {
                    var date = new Date();
                    var now = date.getTime();
                    var local = date.getTime() - date.getTimezoneOffset() * 60000;
                    //let timestamp:number = Math.floor(now.getTime() / 1000);
                    var data = {
                        click_id: click_id,
                        btn_click_id: btn_click_id,
                        btn_click_times: 1,
                        scenes: curGame ? curGame : "Lobby",
                        ark_id: Network.LoginModel.LoginInfo.pin_ark_id,
                        pin_id: Network.LoginModel.LoginInfo.pin_id,
                        kiosk_id: Network.LoginModel.LoginInfo.kiosk_id,
                        device_id: Network.LoginModel.LoginInfo.device_id,
                        device_type: 1,
                        machine_id: Network.LoginModel.LoginInfo.machine_id,
                        extra_data: extra_data,
                        client_time_utc: Math.floor(now / 1000),
                        client_time_local: Math.floor(local / 1000)
                    };
                    this.m_arrJsonClickLog.push(data);
                    UserClient.CurClickLogData.push(data);
                }
            };
            /**
             *
             * 每五分鐘上傳m_arrJsonClickLog並清空
             * 無retry
             */
            UserClient.prototype.sendClickLog = function() {
                return __awaiter(this, void 0, void 0, function() {
                    var cmdData;
                    return __generator(this, function(_a) {
                        switch (_a.label) {
                            case 0:
                                if (!true) return [3 /*break*/ , 2];
                                return [4 /*yield*/ , this.delay(300000)];
                            case 1:
                                _a.sent();
                                if (this.m_arrJsonClickLog != null && this.m_arrJsonClickLog.length > 0) {
                                    cmdData = {};
                                    cmdData["btn_click_list"] = this.m_arrJsonClickLog;
                                    console.warn("sendClickLog");
                                    console.warn(cmdData);
                                    this.m_pinClient.send_cmd(this.systemName, "sendClientClickInfo", cmdData, null, null);
                                    this.m_arrJsonClickLog = [];
                                    UserClient.CurClickLogData = [];
                                }
                                return [3 /*break*/ , 0];
                            case 2:
                                return [2 /*return*/ ];
                        }
                    });
                });
            };
            UserClient.prototype.delay = function(ms) {
                return new Promise(function(resolve) {
                    return setTimeout(resolve, ms);
                });
            };
            /**
             * send click log now
             * @param click_id click id
             * @param btn_click_id btn click id
             */
            UserClient.prototype.sendClickLogNow = function(click_id, btn_click_id, btn_click_times, extra_data) {
                if (btn_click_times === void 0) {
                    btn_click_times = 1;
                }
                if (extra_data === void 0) {
                    extra_data = null;
                }
                //@ts-ignore
                var curGame = SS.Common.GameEnvironment.CurrentGameNow;
                var date = new Date();
                var now = date.getTime();
                var local = date.getTime() - date.getTimezoneOffset() * 60000;
                var data = {
                    click_id: click_id,
                    btn_click_id: btn_click_id,
                    btn_click_times: btn_click_times,
                    scenes: curGame ? curGame : "Lobby",
                    ark_id: Network.LoginModel.LoginInfo.pin_ark_id,
                    pin_id: Network.LoginModel.LoginInfo.pin_id,
                    kiosk_id: Network.LoginModel.LoginInfo.kiosk_id,
                    device_id: Network.LoginModel.LoginInfo.device_id,
                    device_type: 1,
                    machine_id: Network.LoginModel.LoginInfo.machine_id,
                    extra_data: extra_data,
                    client_time_utc: Math.floor(now / 1000),
                    client_time_local: Math.floor(local / 1000)
                };
                var arr = [];
                arr[0] = data;
                var cmdData = {};
                cmdData["btn_click_list"] = arr;
                console.warn("sendClickLogNow");
                console.warn(cmdData);
                this.m_pinClient.send_cmd(this.systemName, "sendClientClickInfo", cmdData, null, null);
            };
            /**
             * 紀錄click log，每五分鐘批量上傳，一次新增一筆包含點擊次數的log (目前用來記錄每次海王(野牛、惡龍、小綠人、金剛)捕獲後點擊互動次數)
             * @param click_id 表示屬於哪個活動或元件的log
             * @param btn_click_id 表示該活動或元件中定義的按鈕ID
             * @param btn_click_times 點擊次數
             */
            UserClient.prototype.recordClickTimesLog = function(click_id, btn_click_id, btn_click_times) {
                if (!this.m_bHaveClickLog) {
                    this.m_bHaveClickLog = true;
                    this.sendClickLog();
                }
                //@ts-ignore
                var curGame = SS.Common.GameEnvironment.CurrentGameNow;
                var scenes = curGame ? curGame : "Lobby";
                var date = new Date();
                var now = date.getTime();
                var local = date.getTime() - date.getTimezoneOffset() * 60000;
                var data = {
                    click_id: click_id,
                    btn_click_id: btn_click_id,
                    btn_click_times: btn_click_times,
                    scenes: scenes,
                    ark_id: Network.LoginModel.LoginInfo.pin_ark_id,
                    pin_id: Network.LoginModel.LoginInfo.pin_id,
                    kiosk_id: Network.LoginModel.LoginInfo.kiosk_id,
                    device_id: Network.LoginModel.LoginInfo.device_id,
                    device_type: 1,
                    machine_id: Network.LoginModel.LoginInfo.machine_id,
                    client_time_utc: Math.floor(now / 1000),
                    client_time_local: Math.floor(local / 1000)
                };
                console.warn("[recordClickTimesLog] click_id = " + click_id + ", btn_click_id = " + btn_click_id + ", btn_click_times = " + btn_click_times);
                this.m_arrJsonClickLog.push(data);
                UserClient.CurClickLogData.push(data);
            };
            /**
             * GUEST 模式下，一般登入，取得店家聯絡資訊
             * @param successCallback
             * @param failCallback
             */
            UserClient.prototype.getContactInfoByKiosk = function(successCallback, failCallback) {
                this.getContactInfoSuccessCallback = successCallback;
                this.getContactInfoFailCallback = failCallback;
                var cmd_data = {
                    kiosk_id: Network.LoginModel.LoginInfo.kiosk_id,
                    logo: Network.LoginModel.LoginInfo.logo
                };
                var self = this;
                this.m_pinClient.send_cmd("lobby", "getContactInfoByKiosk", cmd_data, self.onRecieveContactInfoByKiosk.bind(self));
            };
            UserClient.prototype.onRecieveContactInfoByKiosk = function(status, data) {
                console.log("[UserClient] getContactInfoByKiosk state: ", status);
                console.log("[UserClient] getContactInfoByKiosk data: ", data);
                try {
                    if (status == ArkSDK.HttpResult.OK && data.cmd_data.err_code == 0) {
                        if (this.getContactInfoSuccessCallback != null) {
                            this.getContactInfoSuccessCallback(status, data, "getContactInfoByKiosk");
                            this.getContactInfoSuccessCallback = null;
                        }
                    } else {
                        console.error("[UserClient] %c getContactInfoByKiosk failed\n", "font-size:18px;font-weight:bold;color:green;", data);
                        if (this.getContactInfoFailCallback != null) {
                            this.getContactInfoFailCallback(status, data, "getContactInfoByKiosk");
                            this.getContactInfoFailCallback = null;
                        }
                    }
                } catch (ex) {
                    console.error(ex);
                }
            };
            /**
             * GUEST 補分
             * @param comps_name 補分類別
             * @param succeedCallback
             * @param failedCallback
             */
            UserClient.prototype.getComps = function(comps_name, succeedCallback, failedCallback) {
                this.getCompsSucceedCallback = succeedCallback;
                this.getCompsFailedCallback = failedCallback;
                var cmd_data = {
                    comps_name: comps_name,
                    logo: Network.LoginModel.LoginInfo.logo
                };
                var self = this;
                this.m_pinClient.send_cmd("lobby", "getComps", cmd_data, self.onRecieveGetComps.bind(self));
            };
            UserClient.prototype.onRecieveGetComps = function(status, data) {
                console.log("[UserClient] getComps state: ", status);
                console.log("[UserClient] getComps data: ", data);
                try {
                    if (status == ArkSDK.HttpResult.OK && data.cmd_data.err_code == 0) {
                        if (this.getCompsSucceedCallback != null) {
                            this.getCompsSucceedCallback(status, data, "getComps");
                            this.getCompsSucceedCallback = null;
                        }
                    } else {
                        console.error("[UserClient] %c getComps failed\n", "font-size:18px;font-weight:bold;color:green;", data);
                        if (this.getCompsFailedCallback != null) {
                            this.getCompsFailedCallback(status, data, "getComps");
                            this.getCompsFailedCallback = null;
                        }
                    }
                } catch (ex) {
                    console.error(ex);
                }
            };
            /**
             * 取得目前開放的補分活動
             * @param succeedCallback
             * @param failedCallback
             */
            UserClient.prototype.getCompsEventInfo = function(succeedCallback, failedCallback) {
                this.getCompsEventInfoSucceedCallback = succeedCallback;
                this.getCompsEventInfoFailedCallback = failedCallback;
                var cmd_data = {
                    logo: Network.LoginModel.LoginInfo.logo
                };
                var self = this;
                this.m_pinClient.send_cmd("lobby", "getCompsEventInfo", cmd_data, self.onRecieveGetCompsEventInfo.bind(self));
            };
            UserClient.prototype.onRecieveGetCompsEventInfo = function(status, data) {
                console.log("[UserClient] getCompsEventInfo state: ", status);
                console.log("[UserClient] getCompsEventInfo data: ", data);
                try {
                    if (status == ArkSDK.HttpResult.OK && data.cmd_data.err_code == 0) {
                        if (this.getCompsEventInfoSucceedCallback != null) {
                            this.getCompsEventInfoSucceedCallback(status, data, "getCompsEventInfo");
                            this.getCompsEventInfoSucceedCallback = null;
                        }
                    } else {
                        console.error("[UserClient] %c getCompsEventInfo failed\n", "font-size:18px;font-weight:bold;color:green;", data);
                        if (this.getCompsEventInfoFailedCallback != null) {
                            this.getCompsEventInfoFailedCallback(status, data, "getCompsEventInfo");
                            this.getCompsEventInfoFailedCallback = null;
                        }
                    }
                } catch (ex) {
                    console.error(ex);
                }
            };
            /**
             * send Click Log Ex
             * @param click_id click id
             * @param btn_click_id btn click id
             * @param _click_name click name
             * @param _urlCode url code
             */
            UserClient.prototype.sendClickLogEx = function(click_id, btn_click_id, _click_name, _urlCode, deviceInfo) {
                if (deviceInfo === void 0) {
                    deviceInfo = null;
                }
                //@ts-ignore
                var curGame = SS.Common.GameEnvironment.CurrentGameNow;
                var date = new Date();
                var now = date.getTime();
                var local = date.getTime() - date.getTimezoneOffset() * 60000;
                var data = {
                    click_id: click_id,
                    btn_click_id: btn_click_id,
                    btn_click_times: 1,
                    click_name: _click_name,
                    scenes: curGame ? curGame : "Lobby",
                    ark_id: Network.LoginModel.LoginInfo.pin_ark_id,
                    pin_id: Network.LoginModel.LoginInfo.pin_id,
                    kiosk_id: Network.LoginModel.LoginInfo.kiosk_id,
                    device_id: _urlCode,
                    device_type: 1,
                    machine_id: Network.LoginModel.LoginInfo.machine_id,
                    browser_info: deviceInfo.browser.name,
                    browser_version: deviceInfo.browser.version,
                    device_info: deviceInfo.os.name,
                    device_version: deviceInfo.os.version,
                    client_time_utc: Math.floor(now / 1000),
                    client_time_local: Math.floor(local / 1000)
                };
                var arr = [];
                arr[0] = data;
                var cmdData = {};
                cmdData["btn_click_list"] = arr;
                console.warn("sendClickLogEx");
                console.warn(cmdData);
                this.m_pinClient.send_cmd(this.systemName, "sendClientClickInfo", cmdData, null, null);
            };
            UserClient.CurClickLogData = [];
            return UserClient;
        }());
        Network.UserClient = UserClient;
    })(Network = SS.Network || (SS.Network = {}));
})(SS || (SS = {}));
var SS;
(function(SS) {
    var Network;
    (function(Network) {
        var Common;
        (function(Common) {
            function GetCookie(name) {
                var nameLenPlus = (name.length + 1);
                return document.cookie
                    .split(';')
                    .map(function(c) {
                        return c.trim();
                    })
                    .filter(function(cookie) {
                        return cookie.substring(0, nameLenPlus) === name + "=";
                    })
                    .map(function(cookie) {
                        return decodeURIComponent(cookie.substring(nameLenPlus));
                    })[0] || null;
            }
            Common.GetCookie = GetCookie;
        })(Common = Network.Common || (Network.Common = {}));
    })(Network = SS.Network || (SS.Network = {}));
})(SS || (SS = {}));
///<reference path="./Signal.ts"/>
var SS;
(function(SS) {
    var Network;
    (function(Network) {
        var Common;
        (function(Common) {
            var RetryTimer = /** @class */ (function() {
                function RetryTimer() {
                    this.iNowTime = 0;
                    this.iNowRetryTimes = 0;
                }
                RetryTimer.prototype.Start = function(retryHandler, timeoutHandler, arrayRetryTime) {
                    this.retryHandler = retryHandler;
                    this.timeoutHandler = timeoutHandler;
                    this.arrayRetryTime = arrayRetryTime;
                    this.timerID = setInterval(this._RetryTimer.bind(this), 1000);
                };
                RetryTimer.prototype.ResetTimes = function() {
                    this.iNowTime = 0;
                    this.iNowRetryTimes = 0;
                };
                RetryTimer.prototype.Stop = function() {
                    clearInterval(this.timerID);
                    this.iNowTime = 0;
                    this.iNowRetryTimes = 0;
                    this.arrayRetryTime = null;
                    this.timeoutHandler = null;
                    this.retryHandler = null;
                };
                RetryTimer.prototype._RetryTimer = function() {
                    console.log("[RetryTimer._RetryTimer] ", Date.now, " iNowTime = ", this.iNowTime);
                    this.iNowTime += 1;
                    if (this.iNowRetryTimes < this.arrayRetryTime.length) {
                        if (this.iNowTime >= this.arrayRetryTime[this.iNowRetryTimes]) {
                            console.log("[RetryTimer._RetryTimer] ", Date.now, " iNowRetryTimes = ", this.iNowRetryTimes);
                            if (this.retryHandler != null)
                                this.retryHandler();
                            else
                                console.error("retryHandler is null");
                            this.iNowTime = 0;
                            this.iNowRetryTimes += 1;
                        }
                    } else {
                        this.Stop();
                        console.log("_RetryTimer Timeout = " + Date.now);
                        if (this.timeoutHandler != null)
                            this.timeoutHandler();
                        else
                            console.error("timeoutHandler is null");
                    }
                };
                return RetryTimer;
            }());
            Common.RetryTimer = RetryTimer;
        })(Common = Network.Common || (Network.Common = {}));
    })(Network = SS.Network || (SS.Network = {}));
})(SS || (SS = {}));