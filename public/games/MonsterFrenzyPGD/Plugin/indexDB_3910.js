let DB_VERSION = parseInt(localStorage.getItem("db_version"));
let JS_VERSION = 24;
let CAN_LOG = false;
let USE_DB = false;
let DB_NAME = "playgd";
let DB = ["cocos"]

let version = parseInt(localStorage.getItem("js_version"))
if (version !== JS_VERSION) {
    localStorage.setItem("js_version", JS_VERSION);
    DB_VERSION = 1;
    var deleteRequest = indexedDB.deleteDatabase("playgd")

    deleteRequest.onblocked = function() {
        console.log("Delete blocked.");
    }

    deleteRequest.onerror =
        function() {
            console.log("Error deleting the DB");
        };

    deleteRequest.onsuccess = function() {
        console.log("Deleted OK.");
        DB_VERSION = 1;
        idbCreateStore(DB_NAME, DB)
            .then((evt) => {

            });
    };
} else if (!DB_VERSION) {
    DB_VERSION = 1;
    idbCreateStore(DB_NAME, DB)
        // .then((evt) => {

        // });
}

function idbOpen(dbName, func) {
    return new Promise((resolve, reject) => {
        let req = window.parent.indexedDB.open(dbName, DB_VERSION)
        req.onsuccess = (evt) => {
            resolve(evt.target.result);
        };
        req.onerror = (evt) => {
            CAN_LOG && console.log("[indexedDB] Open Failed", evt);
            reject(evt.target);
        };
        req.onupgradeneeded = func;
    })
}

function idbCreateStore(dbName, storeNameList) {
    if (!USE_DB) {
        return;
    }
    ++DB_VERSION;
    localStorage.setItem("db_version", DB_VERSION);
    return new Promise((resolve, reject) => {
        idbOpen(dbName, (evt) => {
            storeNameList.forEach(storeName => {
                let req = evt.target.result.createObjectStore(storeName, {
                    keyPath: "pKey"
                });
                req.onsuccess = (evt) => {
                    resolve(evt);
                };
                req.onerror = (evt) => {
                    CAN_LOG && console.log("[indexedDB] Create Failed");
                    resolve(evt);
                };
            });
        });
    })
}

function idbSet(dbName, storeName, key, value, isBlob, isArrayBuffer) {
    try {
        if (cc.sys.os === cc.sys.OS_IOS || cc.sys.os === cc.sys.OS_OSX) {
            USE_DB = false;
        }
    } catch (ex) {

    }
    return new Promise((resolve, reject) => {
        if (!USE_DB) {
            resolve(null);
        }

        if (BlackList(value) || isArrayBuffer) {
            resolve(null);
        } else {
            if (isBlob) {
                blobToBlob2(value, (newBlob) => {
                    SaveValue(dbName, storeName, key, newBlob).then(() => {
                        resolve(null);
                    })
                })
            } else {
                SaveValue(dbName, storeName, key, value).then(() => {
                    resolve(null);
                })
            }
        }
    })
}

function blobToBlob2(blob, callback) {
    var reader = new FileReader();
    reader.readAsArrayBuffer(blob);
    reader.onload = function(e) {
        callback({
            buffer: e.target.result,
            type: blob.type,
            isBlob2: true
        });
    };
}

function blob2ToBlob(blob2) {
    return new Blob([blob2.buffer], {
        type: blob2.type
    });
}

function SaveValue(dbName, storeName, key, value) {
    return new Promise((resolve, reject) => {
        idbOpen(dbName).then((db) => {
            let obj = {
                "pKey": getKey(key),
                "value": value
            }

            let req = db.transaction(storeName, "readwrite").objectStore(storeName).add(obj);
            req.onsuccess = (evt) => {
                CAN_LOG && console.log("[indexedDB] Set", obj);
                resolve(evt.target.result);
            };
            req.onerror = (evt) => {
                CAN_LOG && console.log("[indexedDB] Set Failed");
                resolve(evt.target);
            };
        }).catch((evt) => {
            CAN_LOG && console.log("[indexedDB] ", evt)
            resolve(null);
        });
    })
}

function idbGet(dbName, storeName, key) {
    try {
        if (cc.sys.os === cc.sys.OS_IOS || cc.sys.os === cc.sys.OS_OSX) {
            USE_DB = false;
        }
        if (!USE_DB) {
            return new Promise((resolve, reject) => {
                resolve(null);
            })
        }
    } catch (ex) {
        return new Promise((resolve, reject) => {
            resolve(null);
        })
    }

    return new Promise((resolve, reject) => {
        idbOpen(dbName).then((db) => {
            let req = db.transaction(storeName, "readonly").objectStore(storeName).get(getKey(key));
            req.onsuccess = (evt) => {
                if (evt.target.result && evt.target.result.hasOwnProperty("value")) {
                    let value = evt.target.result["value"]
                    CAN_LOG && console.log("[indexedDB] Get", value);
                    resolve(value);
                } else {
                    resolve(null);
                }
            };
            req.onerror = (evt) => {
                CAN_LOG && console.log("[indexedDB] Get Failed");
                resolve(evt.target);
            };
        })
    })
}

function getKey(key) {
    if (key.indexOf("Bundle") !== -1) {
        return key;
    } else {
        try {
            let scene = cc.director.getScene();
            if (scene && SS && SS.Common && SS.Common.GameEnvironment) {
                if (scene.name === "Lobby" || scene.name === "Login") {
                    return scene.name + "/" + SS.Common.GameEnvironment.LobbyVersion + "/" + key;
                } else {
                    return SS.Common.GameEnvironment.CurrentGameNow + "/" + SS.Common.GameEnvironment.CurrentGameVersion + "/" + key;
                }
            } else {
                return "Lobby/" + JS_VERSION + "/" + key;
            }
        } catch (ex) {
            return "Lobby/" + JS_VERSION + "/" + key;
        }
    }
}

function BlackList(value) {
    if (value && value[5] && value[5][0] && value[5][0][1] && value[5][0][1] === "config") {
        return true
    }

    return false;
}