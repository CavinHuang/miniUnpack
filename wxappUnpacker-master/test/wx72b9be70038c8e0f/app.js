var apiList = require("utils/api.js");

var login = require("utils/login.js");

App({
    onLaunch: function onLaunch(options) {
        var _this = this;
        this.removeCache("search_code");
        this.appUpdate();
        var scene = options.scene;
        this.globalData.scene = scene != undefined ? scene : this.globalData.scene;
        login.getUserOpenId(this).then(function(res) {
            var openid = _this.getUserOpenId();
            _this.log("获取成功", openid);
        }).catch(function(error) {
            if (error.errNo == 21100) {
                _this.showInfo("登录账号后更好体验小程序");
            }
            _this.log("error", error);
        });
    },
    onHide: function onHide() {
        if (this.globalData.timer) {
            clearInterval(this.globalData.timer);
        }
    },
    onShow: function onShow() {
        if (this.globalData.timer) {
            clearInterval(this.globalData.timer);
        }
        this.timer();
    },
    getUserOpenId: function getUserOpenId() {
        var userInfo = this.getCache("userInfo");
        var openid = "";
        if (userInfo) {
            openid = userInfo.openid != undefined ? userInfo.openid : "app" + this.getCurrentTime();
        } else {
            openid = "app" + this.getCurrentTime();
        }
        return openid;
    },
    getUserAnonymousOpenid: function getUserAnonymousOpenid() {
        var userInfo = this.getCache("userInfo");
        var anonymous_openid = "";
        if (userInfo) {
            anonymous_openid = userInfo.anonymous_openid != undefined ? userInfo.anonymous_openid : "app" + this.getCurrentTime();
        } else {
            anonymous_openid = "app" + this.getCurrentTime();
        }
        return anonymous_openid;
    },
    getUserUnionId: function getUserUnionId() {
        var userInfo = this.getCache("userInfo");
        var unionid = "";
        if (userInfo) {
            unionid = userInfo.unionid != undefined ? userInfo.unionid : "union" + this.getCurrentTime();
        } else {
            unionid = "union" + this.getCurrentTime();
        }
        return unionid;
    },
    timer: function timer() {
        var _this2 = this;
        this.globalData.timer = setInterval(function() {
            _this2.globalData.duration++;
            _this2.globalData.apptime++;
            if (_this2.globalData.apptime >= 35 && _this2.globalData.apptime % 35 == 0) {
                _this2.createInterstitialAd();
            }
        }, 1e3);
    },
    /**
   * 创建插屏广告
   */
    createInterstitialAd: function createInterstitialAd() {
        var _this3 = this;
        var isShowAdv = this.globalData.interstitialAdTimesLimit - this.globalData.interstitialAdTimes >= 0;
        if (this.globalData.interstitialAd == null && !this.globalData.isAdvLoading && isShowAdv) {
            this.globalData.interstitialAd = wx.createInterstitialAd({
                adUnitId: apiList.interstitialAd
            });
            this.globalData.apptime = 0;
            if (this.globalData.interstitialAd) {
                this.globalData.interstitialAd.onError(function(err) {
                    console.log("插屏错误", err);
                    _this3.advDestroy();
                });
                this.globalData.interstitialAd.onClose(function() {
                    _this3.advDestroy();
                });
                this.globalData.interstitialAd.load().then(function() {
                    console.log("开始展示插屏");
                    _this3.globalData.interstitialAd.show();
                    _this3.globalData.interstitialAdTimes++;
                }).catch(function(err) {
                    _this3.advDestroy();
                });
            }
        }
    },
    advDestroy: function advDestroy() {
        if (this.globalData.interstitialAd) {
            this.globalData.interstitialAd.destroy();
            this.globalData.interstitialAd = null;
        }
    },
    /**
   * 小程序升级
   */
    appUpdate: function appUpdate() {
        var updateManager = wx.getUpdateManager();
        updateManager.onCheckForUpdate(function(res) {
            // 请求完新版本信息的回调
            if (res.hasUpdate) {
                /*wx.showToast({
          title: "即将有更新请留意",
        });*/}
        });
        updateManager.onUpdateReady(function() {
            wx.showModal({
                title: "更新提示",
                content: "新版本已经准备好，是否立即使用？",
                success: function success(res) {
                    if (res.confirm) {
                        // 调用 applyUpdate 应用新版本并重启
                        updateManager.applyUpdate();
                    } else {}
                }
            });
        });
        updateManager.onUpdateFailed(function() {
            /*wx.showToast({
          title: "更新失败，请重启小程序",
      });*/});
    },
    getToken: function getToken() {
        var userInfo = this.getUserInfo();
        var token = "";
        if (userInfo && userInfo !== null) {
            token = userInfo.token;
        }
        return token;
    },
    // 封装 wx.showToast 方法
    showInfo: function showInfo() {
        var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "error";
        var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "none";
        var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1500;
        wx.showToast({
            title: info,
            icon: icon,
            duration: duration
        });
    },
    showLoading: function showLoading(msg) {
        wx.showLoading({
            title: msg,
            mask: true
        });
    },
    hideLoading: function hideLoading(msg) {
        wx.hideLoading();
    },
    setCache: function setCache(key, val) {
        try {
            wx.setStorageSync(key, val);
        } catch (error) {
            error = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(error);
            console.log("setStorageSync调用失败");
        }
    },
    removeCache: function removeCache(key) {
        try {
            wx.removeStorageSync(key);
        } catch (error) {
            error = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(error);
            console.log("removeStorage调用失败");
        }
    },
    getCache: function getCache(key) {
        try {
            var val = wx.getStorageSync(key);
            return val;
        } catch (error) {
            error = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(error);
            console.log("getStorageSync调用失败");
        }
    },
    getSystemInfo: function getSystemInfo() {
        var systemInfo = this.globalData.systemInfo;
        if (systemInfo != null) {
            return systemInfo;
        } else {
            try {
                var _systemInfo = wx.getSystemInfoSync();
                console.log("systemInfo", _systemInfo);
                var envInfo = wx.getAccountInfoSync();
                if (envInfo) {
                    _systemInfo.miniVersion = envInfo.miniProgram.version;
                    _systemInfo.dyappid = envInfo.miniProgram.appId;
                    _systemInfo.env = envInfo.miniProgram.envVersion;
                }
                this.globalData.systemInfo = _systemInfo;
                return _systemInfo;
            } catch (error) {
                error = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(error);
                var _systemInfo2 = {
                    system: "0",
                    platform: "0",
                    brand: "0",
                    model: "0",
                    appName: "0",
                    SDKVersion: "0",
                    screenWidth: 0,
                    screenHeight: 0,
                    windowWidth: 0,
                    windowHeight: 0,
                    pixelRatio: 0,
                    statusBarHeight: 0
                };
                return _systemInfo2;
            }
        }
    },
    getUserInfo: function getUserInfo() {
        var userInfo = this.getCache("userInfo") || null;
        return userInfo;
    },
    /**
   * 是否需要看广告
   */
    isNotLookAdv: function isNotLookAdv() {
        var _this4 = this;
        return new Promise(function(resolve, reject) {
            if (_this4.isNeedAdv()) {
                resolve(false);
                //要看广告
                        } else {
                resolve(true);
                //不用看广告
                                _this4.setAdvInfoCache(0, 1);
            }
        });
    },
    //获取今日广告次数
    getTodayAdvTimes: function getTodayAdvTimes() {
        var adv_times_info = this.getCache("adv-times-info");
        if (adv_times_info) {
            return adv_times_info.times;
        } else {
            return 0;
        }
    },
    /**
   * 判断是否需要观看广告
   */
    isNeedAdv: function isNeedAdv() {
        try {
            var adv_times_info = this.getCache("adv-times-info");
            if (!adv_times_info) {
                this.resetAdvTimes();
            }
            var day = adv_times_info.day;
            var isToday = this.isToday(day);
            var times = adv_times_info.times;
            var reachTimes = adv_times_info.reachTimes;
            //达到多少次数奖励额外下载数
                        var downtimes = adv_times_info.downtimes;
            //不用看广告剩余下载次数
                        var dayDownTimes = adv_times_info.dayDownTimes;
            //当日总下载次数 
                        if (isToday) {
                if (times < reachTimes && downtimes > 0) {
                    //达到奖励的次数
                    return true;
                } else {
                    if (downtimes == 0) {
                        this.resetAdvTimes(dayDownTimes);
                        return true;
                    }
                }
            } else {
                this.resetAdvTimes();
                return true;
            }
            return false;
        } catch (e) {
            e = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(e);
            console.log("error", e);
            return true;
        }
    },
    setAdvInfoCache: function setAdvInfoCache() {
        var advTime = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
        var downTime = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 1;
        var adv_times_info = this.getCache("adv-times-info");
        if (!adv_times_info) {
            this.resetAdvTimes();
        }
        var times = adv_times_info.times;
        var downtimes = adv_times_info.downtimes;
        //不用看广告剩余下载次数   
                var dayDownTimes = adv_times_info.dayDownTimes;
        //当日总下载次数 
                var date = this.getToday();
        var json = {
            day: date,
            times: times + advTime,
            //当前观看广告次数
            reachTimes: 3,
            //达到多少次数奖励额外下载数
            downtimes: downtimes - downTime,
            //剩余下载次数
            dayDownTimes: dayDownTimes + 1,
            //当日总下载次数
            dayLimitTimes: this.globalData.dayLimitTimes
        };
        this.setCache("adv-times-info", json);
        //console.log("json", json);
        },
    /** 
   * 重置广告缓存信息
   */
    resetAdvTimes: function resetAdvTimes() {
        var dayDownTimes = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
        var date = this.getToday();
        var json = {
            day: date,
            times: 0,
            //当前观看广告次数
            reachTimes: 3,
            //达到多少次数奖励额外下载数
            downtimes: this.globalData.downtimes,
            //剩余额外下载次数
            dayDownTimes: dayDownTimes,
            //当日总下载次数
            dayLimitTimes: this.globalData.dayLimitTimes
        };
        this.setCache("adv-times-info", json);
    },
    /**
   * 是否达到每日下载上限
   */
    isReachLimitDownTimes: function isReachLimitDownTimes() {
        var adv_times_info = this.getCache("adv-times-info");
        if (adv_times_info) {
            var day = adv_times_info.day;
            var isToday = this.isToday(day);
            var dayDownTimes = adv_times_info.dayDownTimes;
            //当日总下载次数
                        var dayLimitTimes = adv_times_info.dayLimitTimes;
            //当日限制总下载次数
                        if (isToday) {
                if (dayDownTimes >= dayLimitTimes) {
                    return true;
                }
            } else {
                this.resetAdvTimes();
                return false;
            }
        } else {
            this.resetAdvTimes();
            return false;
        }
    },
    isToday: function isToday(str) {
        var d = new Date();
        var y = d.getFullYear();
        // 年
                var m = d.getMonth() + 1;
        // 月份从0开始的
                var d = d.getDate();
        //日
                return str == y + "-" + m + "-" + d;
    },
    getToday: function getToday() {
        var d = new Date();
        var y = d.getFullYear();
        // 年
                var m = d.getMonth() + 1;
        // 月份从0开始的
                var d = d.getDate();
        //日
                return y + "-" + m + "-" + d;
    },
    /**
   * 系统日志
   */
    log: function log() {
        var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
        var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
        if (this.globalData.logStatus) {
            if (msg != undefined && msg.length <= 0) {
                console.log(name);
            } else {
                console.log(name, msg);
            }
        }
    },
    //上报uv
    uv: function uv(pro_id) {
        if (!this.globalData.uvloaded || pro_id != this.globalData.uvloadId) {
            if (this.getUvUploadStatus()) {
                this.setUv(pro_id);
            }
        }
    },
    setUv: function setUv(pro_id) {
        var _this5 = this;
        var that = this;
        var systemInfo = this.getSystemInfo();
        var params = {
            appid: that.globalData.appId,
            id: pro_id,
            openid: this.getUserOpenId(),
            anonymous_openid: this.getUserAnonymousOpenid(),
            unionid: this.getUserUnionId(),
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
            scene: this.globalData.scene,
            code: this.getCache("search_code") || "",
            timestamp: this.getCurrentTime(),
            apptime: this.globalData.duration,
            stime: this.globalData.stime
        };
        var userInfo = this.getUserInfo();
        var token = "";
        if (userInfo && userInfo !== null) {
            token = userInfo.token;
        }
        apiList.post(apiList.visitComplete, params, token, false).then(function(ret) {
            that.globalData.uvloaded = true;
            that.globalData.uvloadId = pro_id;
            var cache = {
                day: _this5.getToday(),
                status: 1,
                id: pro_id
            };
            _this5.setCache("uvCache", cache);
        });
    },
    //分享配置
    share: function share(shareOption, id) {
        var _this6 = this;
        var sharePath = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
        var stime = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
        var title;
        var desc;
        var path;
        var imageUrl;
        var shareTime = stime == 0 ? new Date().getTime() : stime;
        if (id == 0) {
            path = sharePath.length <= 0 ? "pages/index/index?id=" + id : sharePath;
            title = "点击下载视频同款原图";
            desc = "点击下载视频同款原图";
            imageUrl = "";
        } else {
            path = this.globalData.share.path + "?id=" + id;
            title = this.globalData.share.title;
            desc = this.globalData.share.desc;
            imageUrl = "";
        }
        if (shareOption.channel == "video") {
            return {
                title: title,
                desc: desc,
                path: path,
                imageUrl: imageUrl,
                extra: {
                    withVideoId: true
                },
                success: function success(res) {
                    console.log("分享成功", path);
                    if (res.videoId != undefined) {
                        console.log("视频信息", res);
                        _this6.showLoading("正在发布中");
                        _this6.uploadVideo(res.videoId, id, shareTime);
                    }
                },
                fail: function fail() {
                    console.log("转发发布器调起失败");
                }
            };
        } else {
            return {
                title: title,
                desc: desc,
                path: path,
                imageUrl: imageUrl,
                success: function success(res) {
                    console.log("分享成功", path);
                },
                fail: function fail() {
                    console.log("转发发布器调起失败");
                }
            };
        }
    },
    uploadVideo: function uploadVideo(videoId, id) {
        var _this7 = this;
        var shareTime = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 0;
        var nickName = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "";
        var avatarurl = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "";
        if (videoId != undefined && videoId.length > 0) {
            var systemInfo = this.getSystemInfo();
            var params = {
                appid: this.globalData.appId,
                code: this.getCache("search_code") || "",
                openid: this.getUserOpenId(),
                id: id,
                alias_id: videoId,
                stime: shareTime,
                sdkVersion: systemInfo.SDKVersion,
                platform: systemInfo.platform,
                miniVersion: systemInfo.miniVersion == undefined ? 0 : systemInfo.miniVersion,
                env: systemInfo.env,
                scene: this.globalData.scene,
                appName: "wechat",
                system: systemInfo.system,
                brand: systemInfo.brand,
                version: systemInfo.version,
                model: systemInfo.model,
                nickName: nickName,
                avatarurl: avatarurl
            };
            apiList.post(apiList.setVideo, params).then(function(ret) {
                _this7.hideLoading();
                wx.showModal({
                    title: "视频发布成功",
                    showCancel: false
                });
            }).catch(function(error) {
                _this7.hideLoading();
                wx.showModal({
                    title: "视频信息上传失败",
                    content: error,
                    showCancel: false
                });
            });
        }
    },
    getCurrentTime: function getCurrentTime() {
        return new Date().getTime();
    },
    getUvUploadStatus: function getUvUploadStatus() {
        if (this.globalData.uv_type != 1) {
            return true;
        }
        var uvCache = this.getCache("uvCache");
        if (uvCache) {
            var day = uvCache.day;
            var status = uvCache.status;
            var isToday = this.isToday(day);
            if (isToday && status == 1) {
                return false;
            } else {
                return true;
            }
        } else {
            return true;
        }
    },
    /**
   * 比较基础库的大小
   * @param {*} sdkVersionStr 
   */
    compareSdkVerison: function compareSdkVerison(sdkVersionStr) {
        var systemInfo = this.getSystemInfo();
        var sdkVersion = systemInfo.SDKVersion;
        //基础库版本
                if (parseFloat(sdkVersion) >= parseFloat(sdkVersionStr)) {
            return true;
        } else {
            return false;
        }
    },
    /**
   * 获取胶囊信息
   */
    getMenuButtonLayout: function getMenuButtonLayout() {
        var menuButtonInfo = this.globalData.menuButtonInfo;
        if (menuButtonInfo != null) {
            return menuButtonInfo;
        } else {
            try {
                var _menuButtonInfo = wx.getMenuButtonBoundingClientRect();
                this.globalData.menuButtonInfo = _menuButtonInfo;
                return _menuButtonInfo;
            } catch (error) {
                error = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(error);
                var _menuButtonInfo2 = {
                    width: 0,
                    height: 30,
                    top: 40,
                    right: 0,
                    bottom: 0,
                    left: 0
                };
                return _menuButtonInfo2;
            }
        }
    },
    isDevtool: function isDevtool() {
        try {
            var systemInfo = this.getSystemInfo();
            return systemInfo.platform == "devtools";
        } catch (error) {
            error = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(error);
            console.log("获取系统信息失败");
            return false;
        }
    },
    globalData: {
        isLogin: false,
        videoAd: null,
        advId: apiList.advId,
        currentPage: Object,
        userInfo: null,
        appId: apiList.appId,
        topenid: 0,
        uvloaded: false,
        uv_type: 1,
        //当天只上报一次 0-每个不同产品都上报
        uvloadId: 0,
        dayLimitTimes: 6,
        //每日可以下载的总次数
        downtimes: 3,
        //观看广告额外奖励的次数
        logStatus: true,
        // 输出日志
        scene: 0,
        interstitialAd: null,
        //插屏广告对象
        isAdvLoading: false,
        //激励视频播放中
        apptime: 0,
        //在应用中停留时间
        duration: 0,
        //在应用中停留时间
        interstitialAdTimes: 0,
        //当前插屏广告已经看的次数
        interstitialAdTimesLimit: 3,
        //插屏广告限制显示次数
        errorUploadStatus: false,
        stime: 0
    }
});