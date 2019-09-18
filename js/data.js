$(document).ready(function () {
    var userInfo = JSON.parse(sessionStorage.getItem("userInfo"));
    $("#input-1").val(userInfo.data.top);
    $("#input-2").val(userInfo.data.bottom);
    $("#userName").html(userInfo.data.username);

});
$("#updatePrice").click(function () {
    let data = {};
    data.topPrice = $("#input-1").val();
    data.bottomPrice = $("#input-2").val();
    $.ajax({
        type: "POST",
        url: hostIp + "/watcher/changePrice",
        contentType: 'application/json',
        dataType: "json",
        data: JSON.stringify(data),
        xhrFields: {
            withCredentials: true
        },
        success: function (result) {
            alert(JSON.stringify(result))
        },
        error: function () {
            alert("网络延迟")
        }
    });
});
