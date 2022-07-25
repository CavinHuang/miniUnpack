var _defineProperty2 = require("../../@babel/runtime/helpers/defineProperty");

var app = getApp();

var apiList = require("../../utils/api.js");

var commonUtils = require("../../utils/common.js");

Page({
    data: {
        // id: 1,
        list: [],
        page: 1,
        hasMore: true,
        pageSize: 10,
        loading: true,
        isFirst: true
    },
    onLoad: function onLoad(options) {},
    onShow: function onShow() {
        if (!app.globalData.isLogin) {
            commonUtils.showModal("温馨提示", "请先登录账号才可体验小程序", false).then(function(res) {
                commonUtils.pageTab("/pages/index/index");
            });
            return false;
        }
        if (this.data.isFirst) {
            this.init();
            this.setData({
                isFirst: false
            });
        }
    },
    // 监听是否加载到底部
    onReachBottom: function onReachBottom() {
        if (this.data.hasMore) {
            this.init();
        }
    },
    init: function init() {
        var _this = this;
        var param = {
            page: this.data.page,
            limit: this.data.pageSize,
            version: apiList.version,
            appid: apiList.appId,
            openid: app.getUserOpenId(),
            timestamp: app.getCurrentTime()
        };
        apiList.post(apiList.moreAuthor, param, app.getToken()).then(function(ret) {
            var length = ret.list.length;
            var p = _this.data.page;
            var list = ret.list;
            if (length != undefined && length > 0) {
                var page = p + 1;
                _this.setData(_defineProperty2({
                    page: page,
                    loading: false
                }, "list[" + (p - 1) + "]", list));
            }
            if (length != undefined && length < _this.data.pageSize) {
                _this.setData({
                    hasMore: false
                });
            }
        });
    },
    // 创作者详情
    goisfp: function goisfp(e) {
        var homepage_id = e.currentTarget.dataset.id;
        wx.navigateTo({
            url: "/pages/tabindex/isfp/index?homepage_id=" + homepage_id
        });
    },
    // 加入创作者中心
    goFramer: function goFramer() {
        wx.navigateTo({
            url: "/pages/tabmine/framer/index?id=" + this.data.id
        });
    }
});