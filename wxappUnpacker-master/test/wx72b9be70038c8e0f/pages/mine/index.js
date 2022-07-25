var app = getApp();

var _login = require("../../utils/login.js");

var commonUtils = require("../../utils/common.js");

Page({
    onShareAppMessage: function onShareAppMessage(shareOption) {
        return app.share(shareOption, 0);
    },
    data: {
        id: 0,
        menuInfo: null,
        userInfo: app.globalData.userInfo,
        featureList: [ {
            title: "成为创作者",
            img: "/image/icon_author.png",
            name: "framer"
        }, {
            title: "下载记录",
            img: "/image/icon_down.png",
            name: "downloadHistory"
        }, {
            title: "常见问题",
            img: "/image/icon_quesiton.png",
            name: "question"
        }, // {
        //   title: '联系客服',
        //   img: '/image/icon_contact.png',
        //   name: 'contact'
        // },
        {
            title: "我要吐槽",
            img: "/image/icon_advise.png",
            name: "advise"
        } ],
        goodList: [ 0, 1, 2 ],
        avatarUrl: "/image/logo.png"
    },
    onLoad: function onLoad() {
        var menuInfo = wx.getMenuButtonBoundingClientRect();
        //胶囊信息
                this.setData({
            menuInfo: menuInfo
        });
        var userInfo = _login.getUserAvatarAndNickname();
        if (userInfo) {
            this.setData({
                nickName: userInfo.nickName,
                avatarUrl: userInfo.avatarUrl
            });
        }
    },
    login: function login(e) {
        var _this = this;
        _login.getUserProfile().then(function(res) {
            _this.setData({
                nickName: res.nickName,
                avatarUrl: res.avatarUrl
            });
        }).catch(function(error) {
            if (error.errNo == 10601) {
                commonUtils.showModal("温馨提示", "请先登录抖音才可体验小程序", false);
            }
        });
    },
    goPage: function goPage(e) {
        var name = e.currentTarget.dataset.name;
        // 创作者中心
                if (name == "framer") {
            wx.navigateTo({
                url: "/pages/tabmine/framer/index?id=" + this.data.id
            });
        }
        // 下载记录
                if (name == "downloadHistory") {
            wx.navigateTo({
                url: "/pages/tabmine/downloadHistory/index?id=" + this.data.id
            });
        }
        // 系统设置
                if (name == "advise") {
            wx.navigateTo({
                url: "/pages/common/complaint/complaint?id=" + this.data.id
            });
        }
        // 联系客服
                if (name == "contact") {
            wx.navigateTo({
                url: "/pages/tabmine/framer/index?id=" + this.data.id
            });
        }
        if (name == "question") {
            wx.navigateTo({
                url: "/pages/common/question/index?id=" + this.data.id
            });
        }
    }
});