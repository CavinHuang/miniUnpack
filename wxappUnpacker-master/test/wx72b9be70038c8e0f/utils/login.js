var apiList = require("api.js");

var commonUtils = require("common.js");

/**
 * 获取用户头像和昵称
 */ function getUserProfile() {
    var app = getApp();
    var cacheKey = "userInfo";
    return new Promise(function(resolve, reject) {
        var userInfo = commonUtils.getCache(cacheKey);
        if (userInfo.nickName != undefined) {
            resolve(userInfo);
        } else {
            if (!userInfo) {
                userInfo = {};
            }
            wx.getUserProfile({
                desc: "仅用于显示用户昵称",
                success: function success(res) {
                    var resultUserInfo = res.userInfo;
                    if (resultUserInfo) {
                        userInfo.nickName = resultUserInfo.nickName;
                        userInfo.avatarUrl = resultUserInfo.avatarUrl;
                        userInfo.gender = resultUserInfo.gender;
                        userInfo.province = resultUserInfo.province;
                        userInfo.city = resultUserInfo.city;
                        commonUtils.setCache(cacheKey, userInfo);
                        resolve(userInfo);
                    }
                },
                fail: function fail(res) {
                    reject(res);
                }
            });
        }
    });
}

function getUserAvatarAndNickname() {
    var userInfo = commonUtils.getCache("userInfo");
    if (userInfo.nickName != undefined) {
        return userInfo;
    } else {
        return false;
    }
}

function login() {
    return new Promise(function(resolve, reject) {
        wx.login({
            force: true,
            success: function success(loginRes) {
                resolve(loginRes);
            },
            fail: function fail(res) {
                console.log("登录失败", res);
                reject(res);
            }
        });
    });
}

function getUserOpenId(app) {
    var showModal = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : false;
    var cacheKey = "userInfo";
    return new Promise(function(resolve, reject) {
        var userInfo = commonUtils.getCache(cacheKey);
        if (userInfo) {
            app.globalData.isLogin = true;
            var userInfoCacheVersion = userInfo.userInfoCacheVersion != undefined ? userInfo.userInfoCacheVersion : 0;
            if (apiList.userInfoCacheVersion != userInfoCacheVersion) {
                console.log("缓存版本名称有变动");
                commonUtils.removeCache(cacheKey);
            } else {
                resolve(userInfo);
                return false;
            }
        }
        login().then(function(loginRes) {
            app.globalData.isLogin = true;
            if (loginRes.code) {
                var code = loginRes.code;
                var anonymousCode = loginRes.anonymousCode;
                var param = {
                    code: code,
                    anonymous_code: anonymousCode,
                    appid: apiList.appId,
                    timestamp: app.getCurrentTime()
                };
                apiList.post(apiList.getOpenid, param).then(function(ret) {
                    if (ret && ret.openid != undefined && ret.openid != null && ret.openid.length > 0) {
                        ret.userInfoCacheVersion = apiList.userInfoCacheVersion;
                        commonUtils.setCache(cacheKey, ret);
                        resolve(ret);
                    }
                }).catch(function(error) {
                    uploadLoginErrLog(error);
                    if (showModal) {
                        commonUtils.showModal("温馨提示", "当前访问人数过多,请稍后重试", true, "我要吐槽", "我知道了").then(function(res) {
                            if (res.confirm) {
                                commonUtils.pageGo("/pages/common/complaint/complaint");
                            }
                        });
                    }
                    reject(error);
                });
            }
        }).catch(function(error) {
            reject(error);
        });
    });
}

function uploadLoginErrLog(content) {
    var _this = this;
    var app = getApp();
    if (app.globalData.errorUploadStatus) {
        console.log("错误已经上报过");
        return false;
    }
    var systemInfo = app.getSystemInfo();
    var params = {
        appid: app.globalData.appId,
        openid: app.getUserOpenId(),
        anonymous_openid: app.getCache("anonymous_openid") || "",
        unionid: app.getCache("unionid") || "",
        sdkVersion: systemInfo.SDKVersion,
        platform: systemInfo.platform,
        appName: "wechat",
        system: systemInfo.system,
        brand: systemInfo.brand,
        version: systemInfo.version,
        model: systemInfo.model,
        screenWidth: systemInfo.screenWidth,
        screenHeight: systemInfo.screenHeight,
        miniVersion: systemInfo.miniVersion == undefined ? 0 : systemInfo.miniVersion,
        env: systemInfo.env,
        dyappid: systemInfo.dyappid,
        scene: app.globalData.scene,
        code: app.getCache("search_code") || "",
        timestamp: app.getCurrentTime(),
        content: encodeURIComponent(JSON.stringify(content))
    };
    apiList.post(apiList.uploadLog, params).then(function(ret) {
        _this.globalData.errorUploadStatus = true;
        console.log("errret", ret);
    }).catch(function(error) {
        app.globalData.errorUploadStatus = true;
    });
}

module.exports = {
    getUserProfile: getUserProfile,
    getUserOpenId: getUserOpenId,
    getUserAvatarAndNickname: getUserAvatarAndNickname
};