var app = getApp();

var api = require("api");

var commonUtils = require("common");

/**选择图片开始 */ function checkImgAuth() {
    var isNeedCamera = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : true;
    var successFuc = arguments.length > 1 ? arguments[1] : undefined;
    chooseImg(isNeedCamera, successFuc);
}

function chooseImg(isNeedCamera, successFuc) {
    androidChoose(isNeedCamera, successFuc);
}

function androidChoose(isNeedCamera, successFuc) {
    wx.chooseImage({
        sizeType: [ "compressed" ],
        // 可以指定是原图还是压缩图，默认二者都有
        sourceType: [ "album", "camera" ],
        // 可以指定来源是相册还是相机，默认二者都有
        count: 1,
        success: function success(res) {
            var img = res.tempFilePaths[0];
            var imgSrc = img.split("?");
            img = imgSrc[0];
            var size = res.tempFiles[0].size;
            if (size > 5 * 1024 * 1024) {
                app.showInfo("图片不能大于5M");
                return;
            }
            app.showLoading("图片检测中");
            checkImageByServer(img, successFuc);
        },
        fail: function fail(res) {
            if (res.errMsg === "chooseImage:fail auth deny") {
                console.log("无权限");
                checkImageAuth(isNeedCamera, successFuc);
            }
            console.log(res);
            console.log("chooseImage调用失败");
        }
    });
}

function checkImageAuth(isNeedCamera, successFuc) {
    wx.authorize({
        scope: "scope.writePhotosAlbum",
        success: function success() {
            if (isNeedCamera) {
                wx.authorize({
                    scope: "scope.camera",
                    success: function success() {
                        // 用户同意授权用
                        chooseImg(isNeedCamera, successFuc);
                    },
                    fail: function fail() {
                        wx.showModal({
                            title: "温馨提示",
                            content: "为了更好体验小程序,请授权相关权限",
                            success: function success(res) {
                                if (res.confirm) {
                                    openImgSetting(isNeedCamera, successFuc);
                                }
                            }
                        });
                    }
                });
            } else {
                chooseImg(isNeedCamera, successFuc);
            }
        },
        fail: function fail() {
            wx.showModal({
                title: "温馨提示",
                content: "为了更好体验小程序,请授权相关权限",
                success: function success(res) {
                    if (res.confirm) {
                        openImgSetting(isNeedCamera, successFuc);
                    }
                }
            });
        }
    });
}

function openImgSetting(isNeedCamera) {
    wx.getSetting({
        success: function success(setRes) {
            if (isNeedCamera) {
                if (!setRes.authSetting["scope.writePhotosAlbum"] || !setRes.authSetting["scope.camera"]) {
                    wx.openSetting({
                        success: function success(authSetting) {
                            var json = authSetting.authSetting;
                            if (json[("scope.writePhotosAlbum", "scope.camera")]) {
                                console.log("开启成功");
                                app.showInfo("开启成功,请重新上传");
                            }
                        }
                    });
                }
            } else {
                if (!setRes.authSetting["scope.writePhotosAlbum"]) {
                    wx.openSetting({
                        success: function success(authSetting) {
                            var json = authSetting.authSetting;
                            if (json["scope.writePhotosAlbum"]) {
                                console.log("开启成功");
                                app.showInfo("开启成功,请重新上传");
                            }
                        }
                    });
                }
            }
        }
    });
}

function imgToBase64(imgUrl, successFuc, failFuc) {
    wx.getFileSystemManager().readFile({
        filePath: imgUrl,
        encoding: "base64",
        success: function success(res) {
            var base64Img = res.data;
            successFuc(base64Img);
        },
        fail: function fail(err) {
            failFuc(err);
        }
    });
}

function getAccessToken(ossUrl, img, successFuc) {
    utils.ajax({
        url: api.getAccessToken,
        method: "POST",
        param: {
            appid: app.globalData.appId,
            openid: app.getUserOpenid()
        },
        success: function success(data) {
            if (data.code == 1) {
                var accessToken = data.data;
                imgToBase64(img, function(base64Img) {
                    checkImg(accessToken, base64Img, img, successFuc);
                });
            } else {
                wx.hideLoading();
                app.showInfo("网络异常,请重试");
            }
        },
        fail: function fail(res) {
            wx.hideLoading();
            app.showInfo("检测失败,请重试");
            console.log(res);
        }
    });
}

function checkImg(access_token, base64Img, img, successFuc) {
    utils.checkImgV2({
        url: "https://developer.toutiao.com/api/apps/censor/image",
        method: "POST",
        param: {
            app_id: app.globalData.appId,
            access_token: access_token,
            image: base64Img
        },
        dataType: "json",
        success: function success(res) {
            wx.hideLoading();
            if (res != undefined && res.error == 0) {
                var checkRes = res.predicts;
                for (var i = 0; i < checkRes.length; i++) {
                    if (checkRes[i].hit == 1) {
                        wx.showModal({
                            title: "",
                            content: "因相关法律和要求，图片存在风险，请重新上传",
                            showCancel: false
                        });
                        return false;
                    }
                }
                successFuc(img);
            } else {
                successFuc(img);
                console.log("赋值成功2");
            }
        },
        fail: function fail(res) {
            wx.hideLoading();
            app.showInfo("网络异常,请重试");
            console.log(res);
        }
    });
}

function checkImageByServer(image, successFuc) {
    setTimeout(function() {
        imgToBase64(image, function(base64Img) {
            if (base64Img.length <= 0) {
                app.showInfo("图片检测失败");
                return false;
            }
            var param = {
                version: api.version,
                appid: api.appId,
                image: base64Img,
                timestamp: app.getCurrentTime()
            };
            app.showLoading("检测中");
            api.post(api.checkImage, param, app.getToken()).then(function(res) {
                var url = res.url == undefined ? "" : res.url;
                successFuc(image, url);
            });
        });
    }, 100);
}

/**选择图片结束 */
/*** 文本检测开始*/ function checkTxt(content, successFuc, failFuc) {
    var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    var type = app.globalData.checkTxtModel;
    if (parseInt(type) == 2) {
        checkTxtFromServer(content, successFuc, failFuc, id);
    } else {
        getTxtAccessToken(content, successFuc, failFuc);
    }
}

function getTxtAccessToken(content, successFuc, failFuc) {
    app.showLoading("正在检测文本");
    var msgArr = [ "魑", "魅", "魍", "魉" ];
    for (var i = 0; i < msgArr.length; i++) {
        if (content.indexOf(msgArr[i]) > -1) {
            setTimeout(function() {
                wx.showModal({
                    title: "",
                    content: "因相关法律和要求,输入的内容存在风险词汇,请重新输入！",
                    showCancel: false,
                    success: function success(res) {
                        if (res.confirm) {
                            failFuc(0);
                        }
                    }
                });
            }, 1e3);
            return false;
        }
    }
    utils.ajax({
        url: api.getAccessToken,
        method: "POST",
        param: {
            appid: app.globalData.appId
        },
        success: function success(data) {
            if (data.code == 1) {
                var accessToken = data.data;
                checkTxtByServer(accessToken, content, successFuc, failFuc);
            } else {
                successFuc();
            }
        },
        fail: function fail(res) {
            app.showInfo("检测失败,请重试");
            console.log(res);
            successFuc();
        }
    });
}

/**
 * 检测文本是否违规
 */ function checkTxtByServer(token, content, successFuc, failFuc) {
    utils.check({
        url: "https://developer.toutiao.com/api/v2/tags/text/antidirt",
        method: "POST",
        first: content,
        second: "",
        accessToken: token,
        success: function success(data) {
            wx.hideLoading();
            var checkRes = data.data;
            if (checkRes != undefined && checkRes != null) {
                for (var i = 0; i < checkRes.length; i++) {
                    if (checkRes[i].predicts[0].prob == 1) {
                        wx.showModal({
                            title: "",
                            content: "因相关法律和要求,输入的内容存在风险词汇,请重新输入！",
                            showCancel: false,
                            success: function success(res) {
                                if (res.confirm) {
                                    failFuc(0);
                                }
                            }
                        });
                        return false;
                    }
                }
                successFuc();
            } else {
                successFuc();
            }
        },
        fail: function fail(res) {
            wx.hideLoading();
            successFuc();
            console.log(res);
        }
    });
}

function checkTxtFromServer(content, successFuc, failFuc) {
    var id = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : 0;
    app.showLoading("文本检测中");
    utils.ajax({
        url: api.checkTxt,
        method: "POST",
        param: {
            content: content,
            appid: app.globalData.appId,
            tid: app.globalData.tid,
            openid: app.getUserOpenid(),
            id: id
        },
        success: function success(res) {
            wx.hideLoading();
            var code = res.code;
            if (code == 0) {
                successFuc();
            } else if (code == 100) {
                wx.showModal({
                    title: "",
                    content: "因相关法律和要求,输入的内容存在风险词汇,请重新输入！",
                    showCancel: false,
                    success: function success(res) {
                        if (res.confirm) {
                            failFuc(0);
                        }
                    }
                });
            } else {
                successFuc();
            }
        },
        fail: function fail(res) {
            wx.hideLoading();
            successFuc();
        }
    }, true, 0, 5);
}

module.exports = {
    checkImgAuth: checkImgAuth,
    imgToBase64: imgToBase64,
    checkTxt: checkTxt
};