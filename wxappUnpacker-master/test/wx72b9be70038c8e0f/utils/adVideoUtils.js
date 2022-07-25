var app = getApp();

var apiList = require("api");

var canLookAdv = false;

var advFailCount = 0;

var isAdvLoading = false;

//广告状态,防止多次点击导致广告出错
var timer = null;

var isAdvLoadSuccess = false;

//广告拉取成功
/**
 * @param {String} adUnitId 小程序广告视频id
 * videoAdInit 初始化广告
 */ function videoAdInit(adUnitId, currentPage) {
    app.globalData.currentPage = currentPage;
    if (app.isDevtool()) {
        console.log("不支持激励视频");
        app.setAdvInfoCache(0, 1);
        failSubmit();
        return false;
    }
    // if (isAdvLoading) {
    //   console.log("广告正在加载中");
    //   app.globalData.isAdvLoading = true;
    //   return false;
    // }
        app.showLoading("加载中");
    if (app.globalData.videoAd == null) {
        if (wx.createRewardedVideoAd) {
            app.globalData.videoAd = wx.createRewardedVideoAd({
                adUnitId: adUnitId
            });
            if (app.globalData.videoAd) {
                advOnLoadHandle();
                // 监听广告加载是否完成
                                advCloseHandle();
                // advErrorHandle(); // 监听错误
                        } else {
                app.log("video is null");
                wx.hideLoading();
                failSubmit();
            }
        } else {
            app.log("广告创建失败");
            failSubmit();
        }
    }
    advShow();
}

function advOnLoadHandle() {
    app.globalData.videoAd.onLoad(function() {
        isAdvLoadSuccess = true;
        console.log("拉取激励广告成功");
    });
}

function advErrorHandle() {
    if (app.globalData.advFailFunction != null) {
        app.globalData.videoAd.offError(app.globalData.advFailFunction);
    }
    app.globalData.advFailFunction = function(err) {
        console.log("广告异常", err);
        advFailCount++;
        // 监听错误
                if (app.globalData.advErrorUpload) {
            var id = app.globalData.currentPage.data.id;
            setAdvError(id, err);
        }
        var errCode = err.errCode;
        switch (errCode) {
          case 1003:
            loadAgain();
            break;

          case 1004:
            loadAgain();
            break;

          default:
            failSubmit();
            break;
        }
    };
    app.globalData.videoAd.onError(app.globalData.advFailFunction);
}

function advCloseHandle() {
    // 监听视屏播放完成
    if (app.globalData.advCloseFunction != null) {
        console.log("卸载监听关闭事件");
        app.globalData.videoAd.offClose(app.globalData.advCloseFunction);
    }
    app.globalData.advCloseFunction = function(res) {
        if (timer != undefined && timer != null) {
            clearTimeout(timer);
        }
        advFailCount = 0;
        isAdvLoading = false;
        app.globalData.isAdvLoading = false;
        app.globalData.apptime = 0;
        canLookAdv = true;
        wx.hideLoading();
        if (res.isEnded) {
            app.setAdvInfoCache(1, 0);
            app.globalData.currentPage.adVideoClose(1);
        } else {
            setTimeout(function() {
                app.showInfo("看完视频才可下载");
            }, 1e3);
            if (app.globalData.notAdvPlayFinish) {
                app.globalData.currentPage.adVideoClose(0);
            }
        }
    };
    app.globalData.videoAd.onClose(app.globalData.advCloseFunction);
}

function advShow() {
    if (app.globalData.videoAd && !isAdvLoading) {
        canLookAdv = false;
        isAdvLoading = true;
        app.globalData.isAdvLoading = true;
        setTimeout(function() {
            videoShowHandle();
        }, 1e3);
    }
}

function videoShowHandle() {
    return new Promise(function(resolve, reject) {
        if (app.globalData.videoAd) {
            app.globalData.videoAd.show().then(function() {
                setTimeout(function() {
                    wx.hideLoading();
                }, 1e3);
                canLookAdv = true;
                resolve(true);
            }).catch(function(err) {
                if (advFailCount > 1) {
                    failSubmit();
                    console.log("结束");
                    return false;
                }
                loadAgain();
                app.log("广告组件出现问题", err);
            });
        } else {
            failSubmit();
            reject();
        }
    });
}

/**
 * 再次手动加载广告
 */ function loadAgain() {
    console.log("手动加载广告");
    if (advFailCount > 1) {
        failSubmit();
    } else {
        // 可以手动加载一次
        if (app.globalData.videoAd) {
            app.globalData.videoAd.load().then(function() {
                setTimeout(function() {
                    wx.hideLoading();
                }, 1e3);
                canLookAdv = true;
                return app.globalData.videoAd.show();
                // 加载成功后需要再显示广告
                        }).catch(function(err) {
                advFailCount++;
                app.log("广告组件出现问题2次加载", err);
                app.setAdvInfoCache(0, 1);
                failSubmit();
            });
        } else {
            advFailCount++;
            app.log("广告组件出现问题2次加载", err);
            app.setAdvInfoCache(0, 1);
            failSubmit();
        }
    }
}

/**
 * 失败后的跳转处理
 */ function failSubmit() {
    canLookAdv = true;
    isAdvLoading = false;
    advFailCount = 0;
    app.globalData.isAdvLoading = false;
    app.globalData.apptime = 0;
    app.globalData.currentPage.advSuccess();
    return false;
}

/**
 * 上传广告订单
 */ function setAdvOrder(id, status) {
    return new Promise(function(resolve, reject) {
        if (status === 1) {
            app.showLoading("正在加载");
        }
        var systemInfo = app.getSystemInfo();
        var param = {
            code: app.getCache("search_code") || "",
            openid: app.getUserOpenId(),
            anonymous_openid: app.getUserAnonymousOpenid(),
            unionid: app.getUserUnionId(),
            id: id,
            appid: app.globalData.appId,
            status: status,
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
            apptime: app.globalData.duration,
            advtimes: app.getTodayAdvTimes(),
            timestamp: app.getCurrentTime()
        };
        apiList.post(apiList.advComplete, param, app.getToken()).then(function(ret) {
            wx.hideLoading();
            resolve(true);
        }).catch(function(error) {
            reject(error);
        });
    });
}

/**
 * 上传广告出错信息
 */ function setAdvError(id, err) {
    return new Promise(function(resolve, reject) {
        var systemInfo = app.getSystemInfo();
        utils.ajax({
            url: api.setAdvError,
            method: "POST",
            param: {
                openid: app.getUserOpenid(),
                appid: app.globalData.appId,
                tid: app.globalData.tid + "",
                topenid: app.globalData.topenid + "",
                id: id,
                aid: api.advId,
                errCode: err.errCode,
                errMsg: err.errMsg,
                sdkVersion: systemInfo.SDKVersion,
                platform: systemInfo.platform,
                appName: systemInfo.appName,
                system: systemInfo.system,
                brand: systemInfo.brand,
                version: systemInfo.version,
                model: systemInfo.model,
                isLogin: app.globalData.isLogin,
                scene: app.globalData.scene,
                env: app.globalData.env,
                times: advFailCount
            },
            success: function success(data) {
                if (data.code == 1) {
                    resolve(true);
                } else {
                    resolve(false);
                }
            },
            fail: function fail(res) {
                resolve(false);
            }
        });
    });
}

function advDestroy() {
    if (app.globalData.videoAd != undefined && app.globalData.videoAd != null) {
        app.globalData.videoAd.destroy();
    }
    app.globalData.videoAd = null;
}

/**
 * 判断按钮是否已经点击，防止重复点击
 */ function buttonClicked(self) {
    self.setData({
        buttonClicked: true
    });
    setTimeout(function() {
        self.setData({
            buttonClicked: false
        });
    }, 1e3);
}

/**
 * 判断按钮是否已经提交，防止重复提交
 */ function submitButtonClicked(self) {
    self.setData({
        submitButtonClicked: true
    });
    setTimeout(function() {
        self.setData({
            submitButtonClicked: false
        });
    }, 2e3);
}

/**
 * 判断订单是否已经提交，防止重复提交
 */ function orderSubmited(self) {
    self.setData({
        orderSubmited: true
    });
    setTimeout(function() {
        self.setData({
            orderSubmited: false
        });
    }, 1e3);
}

module.exports.videoAdInit = videoAdInit;

module.exports.setAdvOrder = setAdvOrder;

module.exports.setAdvError = setAdvError;

module.exports.buttonClicked = buttonClicked;

module.exports.submitButtonClicked = submitButtonClicked;

module.exports.orderSubmited = orderSubmited;

module.exports.advDestroy = advDestroy;