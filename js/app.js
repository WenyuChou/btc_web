(function ($) {
    'use strict';

    $(function () {
        let $fullText = $('.admin-fullText');
        $('#admin-fullscreen').on('click', function () {
            $.AMUI.fullscreen.toggle();
        });

        $(document).on($.AMUI.fullscreen.raw.fullscreenchange, function () {
            $fullText.text($.AMUI.fullscreen.isFullscreen ? '退出全屏' : '开启全屏');
        });
        let getWindowHeight = $(window).height(),
            myappLoginBg = $('.myapp-login-bg');
        myappLoginBg.css('min-height', getWindowHeight + 'px');
    });
})(jQuery);

$("#docommit").click(function () {
    let username = $("#input-41").val();
    let password = $("#input-42").val();
    if (username === "" || password === "") {
        alert("please input username&password");
    } else if (username.length > 20 || password.length > 20) {
        alert("username&password is too long")
    } else {
        let data = {};
        data.user = username;
        data.pwd = password;
        $.ajax({
            type: "POST", //提交方式
            url: hostIp+"/watcher/login",//路径
            contentType: 'application/json',
            dataType: "json",
            xhrFields: {
                withCredentials: true
            },
            data: JSON.stringify(data),//数据，这里使用的是Json格式进行传输
            success: function (result) {//返回数据根据结果进行相应的处理
                if (result.code === 200) {
                    sessionStorage.setItem("userInfo",JSON.stringify(result));
                    window.location="data.html";
                } else {
                    alert(result.msg);
                }
            },
            error:function () {
                alert("网络延迟")
            }
        });
    }
});
