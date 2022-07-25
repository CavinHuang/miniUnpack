var api = require("api.js");

function setCache(key, val) {
    try {
        wx.setStorageSync(key, val);
    } catch (error) {
        error = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(error);
        log("setStorageSync调用失败");
    }
}

function removeCache(key) {
    try {
        wx.removeStorageSync(key);
    } catch (error) {
        error = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(error);
        log("removeStorage调用失败");
    }
}

function getCache(key) {
    try {
        var val = wx.getStorageSync(key);
        return val;
    } catch (error) {
        error = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(error);
        log("getStorageSync调用失败");
    }
}

function clearAllCache() {
    try {
        wx.clearStorageSync();
        log("清理缓存成功");
    } catch (error) {
        error = VM2_INTERNAL_STATE_DO_NOT_USE_OR_PROGRAM_WILL_FAIL.handleException(error);
        log("清理缓存失败");
    }
}

function showModal(title, content) {
    var showCancel = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : false;
    var confirmText = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : "确定";
    var cancelText = arguments.length > 4 && arguments[4] !== undefined ? arguments[4] : "取消";
    return new Promise(function(resolve, reject) {
        wx.showModal({
            title: title,
            content: content,
            confirmText: confirmText,
            cancelText: cancelText,
            showCancel: showCancel,
            success: function success(res) {
                resolve(res.confirm);
            },
            fail: function fail(error) {
                reject(error);
            }
        });
    });
}

function showLoading(msg) {
    wx.showLoading({
        title: msg
    });
}

/**
 * 系统日志
 */ function log() {
    var name = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "";
    var msg = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "";
    if (api.logStatus) {
        if (msg != undefined && msg.length <= 0) {
            console.log(name);
        } else {
            console.log(name, msg);
        }
    }
}

function getGlobalData(app) {
    return app.globalData;
}

// 封装 wx.showToast 方法
function showInfo() {
    var info = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : "error";
    var icon = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : "none";
    var duration = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : 1500;
    wx.showToast({
        title: info,
        icon: icon,
        duration: duration,
        mask: true
    });
}

/* 保留当前页面，跳转到指定url页面，但是不能跳到带tabbar的页面 */ function pageGo(url) {
    var pageLength = getCurrentPages().length;
    if (pageLength >= 5) {
        //超过10个则重定向,因为抖音小程序最多只能保留10个页面
        pageSelf(url);
    } else {
        wx.navigateTo({
            url: url
        });
    }
}

/* 跳转tabbar的页面 */ function pageTab(url) {
    if (url) {
        wx.switchTab({
            url: url
        });
    }
}

/*关闭当前页面，跳转到指定url页面，但不允许跳转到tabbar的页面。*/ function pageSelf(url) {
    if (url) {
        wx.redirectTo({
            url: url
        });
    }
}

/* 关闭所有页面，跳转到指定url页面 */ function pageReLaunch(url) {
    if (url) {
        wx.reLaunch({
            url: url
        });
    }
}

/* 关闭页面层数，默认num = 1 */ function pageBack() {
    var num = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 1;
    wx.navigateBack({
        delta: num || 1
    });
}

function random(min, max) {
    return Math.floor(Math.random() * (max - min)) + min;
}

// 对象按照key排序
function ksort(o) {
    var sorted = {};
    var keys = Object.keys(o);
    keys.sort();
    keys.forEach(function(key) {
        sorted[key] = o[key];
    });
    return sorted;
}

function objectToParams(params) {
    var urlLink = "";
    for (var key in params) {
        var link = "&" + key + "=" + params[key];
        urlLink += link;
    }
    urlLink = urlLink.substr(1);
    return urlLink.replace(" ", "");
}

function timest() {
    var tmp = Date.parse(new Date()).toString();
    tmp = tmp.substr(0, 10);
    return tmp;
}

function searchObj(arr, id) {
    if (arr.length <= 0) {
        return -1;
    }
    var position = -1;
    arr.forEach(function(item, index) {
        if (item.id == id) {
            position = index;
            return;
        }
    });
    return position;
}

/**
   * 最近浏览缓存
   */ function setLookCache() {
    setTimeout(function() {
        var app = getApp();
        var proInfo = app.getCache("proInfoCache");
        var max = api.cacheSize;
        if (proInfo) {
            var proListcache = app.getCache("lookCacheList");
            var proList = [];
            if (proListcache) {
                proList = proListcache;
            }
            if (proList.length >= max) {
                proList.splice(0, 1);
            }
            var position = searchObj(proList, proInfo.id);
            if (position > -1) {
                proList.splice(position, 1);
            }
            proList.push(proInfo);
            app.setCache("lookCacheList", proList);
            app.globalData.cacheCanRefresh = true;
        }
    }, 500);
}

function isToday(str) {
    var d = new Date();
    var y = d.getFullYear();
    // 年
        var m = d.getMonth() + 1;
    // 月份从0开始的
        var d = d.getDate();
    //日
        return str == y + "-" + m + "-" + d;
}

function getToday() {
    var d = new Date();
    var y = d.getFullYear();
    // 年
        var m = d.getMonth() + 1;
    // 月份从0开始的
        var d = d.getDate();
    //日
        return y + "-" + m + "-" + d;
}

module.exports = {
    setCache: setCache,
    removeCache: removeCache,
    getCache: getCache,
    clearAllCache: clearAllCache,
    log: log,
    showLoading: showLoading,
    getGlobalData: getGlobalData,
    showInfo: showInfo,
    pageGo: pageGo,
    pageTab: pageTab,
    pageSelf: pageSelf,
    pageReLaunch: pageReLaunch,
    pageBack: pageBack,
    random: random,
    ksort: ksort,
    objectToParams: objectToParams,
    timest: timest,
    searchObj: searchObj,
    setLookCache: setLookCache,
    isToday: isToday,
    getToday: getToday,
    showModal: showModal
};