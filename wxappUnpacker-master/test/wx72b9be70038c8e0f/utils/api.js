var env = "product";

//dev test product
var service_host = "";

var debug = false;

var appId = "wx72b9be70038c8e0f";

//小程序appid
var advId = "adunit-007da99745191b89";

//小程序激励视频广告id
var interstitialAd = "adunit-8b1a893d816b017f";

//插屏id
var version = 1;

var userInfoCacheVersion = 2;

var pageSize = 10;

//分页条数
if (env == "product") {
    service_host = "https://stapi.youpengw.com/miniwechat/v1/natujun";
    debug = false;
} else if (env == "test") {
    service_host = "http://stj.com/miniapi/v2/natujun";
    //service_host = "http://192.168.0.127:82";
} else {
    service_host = "http://dev.wallpaper.net/miniapi/v1/natujun";
}

var request = function request(url, options) {
    var sign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    var hideLoading = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : true;
    return new Promise(function(resolve, reject) {
        var header = {};
        if (options.method === "POST") {
            if (sign.length > 0) {
                header = {
                    sign: setSign(sign)
                };
            }
        }
        if (debug) {
            console.log("------------------------request------------------------");
            console.log("url:".concat(url));
        }
        wx.request({
            url: "".concat(url),
            method: options.method,
            data: options.data,
            header: header,
            success: function success(request) {
                wx.hideLoading();
                if (debug) {
                    console.log("code:".concat(request.data.code));
                    console.log("data:");
                    console.log(request.data.data);
                }
                if (request.data.code === 1) {
                    resolve(request.data.data);
                } else {
                    if (request.data.code === 0) {
                        wx.showModal({
                            title: "温馨提示",
                            content: request.data.msg,
                            showCancel: false,
                            confirmText: "我知道了"
                        });
                    } else {
                        reject(request.data);
                    }
                }
            },
            fail: function fail(error) {
                if (!(error.errMsg != undefined && error.errMsg == "request:fail illegal content found")) {
                    if (hideLoading) {
                        wx.hideLoading();
                    }
                    if (error.data) {
                        wx.showToast({
                            title: "网络不给力~"
                        });
                    }
                }
                console.log("error", error);
            },
            complete: function complete() {
                if (debug) {
                    console.log("------------------------end------------------------");
                }
            }
        });
    });
};

var get = function get(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    return request(url, {
        method: "GET",
        data: options
    });
};

var post = function post(url) {
    var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
    var sign = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : "";
    return request(url, {
        method: "POST",
        data: options
    }, sign);
};

var put = function put(url, options) {
    return request(url, {
        method: "PUT",
        data: options
    });
};

// 不能声明DELETE（关键字）
var remove = function remove(url, options) {
    return request(url, {
        method: "DELETE",
        data: options
    });
};

function setSign(sign) {
    return encode(sign + "###" + timestamp());
}

/**
 *  当前时间戳（10位）
 */ function timestamp() {
    var time = Math.round(new Date().getTime() / 1e3).toString();
    return time;
}

function encode(_str) {
    var staticchars = "PXhw7UT1B0a9kQDKZsjIASmOezxYG4CHo5Jyfg2b8FLpEvRr3WtVnlqMidu6cN";
    var encodechars = "";
    for (var i = 0; i < _str.length; i++) {
        var num0 = staticchars.indexOf(_str[i]);
        if (num0 == -1) {
            var code = _str[i];
        } else {
            var code = staticchars[(num0 + 3) % 62];
        }
        var num1 = parseInt(Math.random() * 62, 10);
        var num2 = parseInt(Math.random() * 62, 10);
        encodechars += staticchars[num1] + code + staticchars[num2];
    }
    return encodechars;
}

var apiList = {
    get: get,
    post: post,
    put: put,
    remove: remove,
    env: env,
    appId: appId,
    advId: advId,
    interstitialAd: interstitialAd,
    version: version,
    pageSize: pageSize,
    //分页条数
    userInfoCacheVersion: userInfoCacheVersion,
    //用户缓存名称
    service_host: service_host,
    indexAuthorList: service_host + "/indexAuthorList",
    //首页作者列表
    indexRecommendPhotoList: service_host + "/indexRecommendPhotoList",
    //首页-推荐作品
    photoDetail: service_host + "/photoDetail",
    //首页-推荐作品
    search_code: service_host + "/search",
    //搜索码查询
    homepageInfo: service_host + "/homepageInfo",
    //主页详情
    photoList: service_host + "/photoList",
    //个人主页-图片列表-类型
    getPhotoListByDate: service_host + "/getPhotoListByDate",
    //个人主页-图片列表-日期
    homepageAlbumList: service_host + "/homepageAlbumList",
    //主页-专辑列表
    albumPhotoList: service_host + "/getAlbumPhotoList",
    //专辑-作品列表
    moreAuthor: service_host + "/moreAuthor",
    //个人主页--更多作者列表
    joinUs: service_host + "/joinUs",
    //加入我们
    getOpenid: service_host + "/getOpenid",
    //获取openid
    visitComplete: service_host + "/uv",
    //访问统计
    advComplete: service_host + "/order",
    //完播统计
    advise: service_host + "/addAdvise",
    //建议,
    checkImage: service_host + "/checkImage",
    //图片检测
    getOssSignInfo: service_host + "/getOssSignInfo",
    getQuestions: service_host + "/getQuestions",
    //获取常见问题
    uploadLog: service_host + "/setErrorLog",
    //上传日志
    getRecommendList: service_host + "/getRecommendList"
};

module.exports = apiList;