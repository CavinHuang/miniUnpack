Component({
    data: {},
    properties: {
        show: {
            type: Boolean,
            value: true
        },
        zIndex: {
            type: Number,
            value: 999
        }
    },
    methods: {
        toTop: function toTop() {
            wx.pageScrollTo({
                scrollTop: 0
            });
        }
    }
});