var app = getApp();

Component({
    data: {
        top: 40
    },
    properties: {
        model: {
            type: Number,
            value: 1
        }
    },
    ready: function ready() {
        var menuButtonInfo = app.getMenuButtonLayout();
        var top = menuButtonInfo.top != undefined ? menuButtonInfo.top : this.data.top;
        this.setData({
            top: top
        });
        var pageLength = getCurrentPages().length;
        if (pageLength > 1) {
            this.setData({
                btnImg: "https://img.yugew.com/image/138700001e7d8e76e8bc3.png",
                showHome: false
            });
        } else {
            this.setData({
                btnImg: "https://img.yugew.com/image/137ab0001ad348ff641c5.png",
                showHome: true
            });
        }
    },
    methods: {
        back: function back() {
            var pageLength = getCurrentPages().length;
            if (pageLength > 1) {
                wx.navigateBack();
            } else {
                wx.reLaunch({
                    url: "/pages/index/index"
                });
            }
        }
    }
});