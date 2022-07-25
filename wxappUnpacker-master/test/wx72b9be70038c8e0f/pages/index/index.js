var app = getApp();

var apiList = require("../../utils/api.js");

var login = require("../../utils/login.js");

var commonUtils = require("../../utils/common.js");

var searchValue = "";

Page({
    onShareAppMessage: function onShareAppMessage(shareOption) {
        return app.share(shareOption, 0);
    },
    data: {
        id: 1
    },
    onLoad: function onLoad(options) {
        searchValue = "";
        var path = options.path == undefined ? "" : "/" + decodeURIComponent(options.path);
        var code = options.search_code == undefined ? "" : options.search_code;
        if (path.length > 0) {
            commonUtils.pageGo(path);
        } else if (code.length > 0) {
            searchValue = code;
            this.setData({
                searchValue: searchValue
            });
            this.goSearch();
        }
        this.getIndexAuthorList();
    },
    getIndexAuthorList: function getIndexAuthorList() {
        var _this = this;
        var params = {
            version: apiList.version,
            action: "recommend",
            appid: apiList.appId,
            openid: app.getUserOpenId(),
            size: 12
        };
        apiList.post(apiList.indexAuthorList, params).then(function(ret) {
            _this.setData({
                indexAuthorList: ret.list,
                recommendList: ret.recommend
            });
        });
    },
    // 搜索框填写
    searchValueChange: function searchValueChange(e) {
        searchValue = e.detail.value;
    },
    // 跳转搜索页
    goSearch: function goSearch(e) {
        var _this2 = this;
        if (searchValue.length <= 0) {
            app.showInfo("搜索内容不能为空");
            return false;
        }
        app.showLoading("搜索中");
        login.getUserOpenId(app).then(function(res) {
            var param = {
                search_code: searchValue,
                version: apiList.version,
                action: "homepageinfo",
                appid: apiList.appId,
                openid: app.getUserOpenId(),
                timestamp: app.getCurrentTime()
            };
            apiList.post(apiList.search_code, param, app.getToken()).then(function(ret) {
                console.log("searchret", ret);
                var homepageInfo = ret.homepageInfo == undefined ? "" : ret.homepageInfo;
                if (homepageInfo) {
                    app.setCache("homepageInfo_" + ret.homepage_id, homepageInfo);
                }
                app.setCache("search_code", searchValue);
                if (ret.selectAlbumId) {
                    var url = "/pages/tabindex/isfp/index?homepage_id=" + ret.homepage_id + "&album_id=" + ret.selectAlbumId + "&search_code=" + searchValue;
                    commonUtils.pageGo(url);
                } else {
                    var _url = "/pages/tabindex/isfp/index?homepage_id=" + ret.homepage_id + "&selectClassifyId=" + ret.selectClassifyId + "&search_code=" + searchValue;
                    commonUtils.pageGo(_url);
                }
            });
        }).catch(function(error) {
            console.log("error", error);
            wx.hideLoading();
            if (error.errNo == 21100) {
                _this2.setData({
                    imageLoaded: true
                });
                commonUtils.showModal("温馨提示", "请先登录账号才可体验小程序", false);
            }
        });
    },
    // 创作者详情
    goisfp: function goisfp(e) {
        var index = e.currentTarget.dataset.index;
        var homepage_id = this.data.indexAuthorList[index].homepage_id;
        wx.navigateTo({
            url: "/pages/tabindex/isfp/index?homepage_id=" + homepage_id
        });
    },
    // 壁纸详情
    goPage: function goPage(e) {
        app.removeCache("image-info");
        var id = e.currentTarget.dataset.id;
        var url = "/pages/tabindex/detail/index?id=" + id;
        commonUtils.pageGo(url);
    },
    // 加入创作者中心
    goFramer: function goFramer() {
        wx.navigateTo({
            url: "/pages/mine/framer/index?id=" + this.data.id
        });
    }
});