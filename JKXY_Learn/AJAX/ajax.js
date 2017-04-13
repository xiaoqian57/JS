/**
 * Created by qqian on 2/22/2017.
 */
$(document).ready(function () {
    $("#btn").on("click",function () {
        $.get("Server.php",{name:$("#namevalue").val()},function (data) {
            $("#result").text(data);
        })
    })
})