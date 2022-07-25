Component({
    data: {},
    properties: {
        top: {
            type: Number,
            value: 160
        },
        id: {
            type: String,
            value: 0
        },
        tag: {
            type: String,
            value: ""
        },
        isShow: {
            type: Boolean,
            value: true,
            observer: function observer(newVal, oldVal) {}
        },
        type: {
            type: String,
            value: 1
        }
    },
    methods: {
        complaint: function complaint() {
            wx.navigateTo({
                url: "/pages/common/complaint/complaint?id=" + this.data.id + "&tag=" + this.data.tag
            });
        }
    }
});