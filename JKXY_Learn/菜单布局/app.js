/**
 * Created by qqian on 2/23/2017.
 */
var timeoutId;
$(document).ready(function () {
    $(".main").hover( function () {
        $(this).children("ul").slideDown();
    }, function () {
        $(this).children("ul").slideUp();
    });

    $("#tabfirst li").each(function (index) {
        var liNode = $(this);
        liNode.mouseover(function () {
            timeoutId = setTimeout(function () {
                //将原来的位置进行隐藏
                $("div.content").removeClass("content");
                //移除头部的标签属性
                $("#tabfirst li.tabin").removeClass("tabin");
                //将第一个div的content属性添加到第二个div上，所以第一个要remove
                $("div:eq(index)").addClass("content");
                //增加突出的那个属性
                liNode.addClass("tabin");
            }, 300);
        }).mouseout(
            function () {
                clearTimeout(timeoutId);
            }
        );
    })
})