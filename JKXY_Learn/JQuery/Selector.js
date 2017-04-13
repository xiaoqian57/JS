/**
 * Created by qqian on 2/21/2017.
 */
$(document).ready(function(){
    $("#select").click(function () {
        $("#pid").text("pid元素被修改了");
        $(".pclass").text("pclass元素被修改了");
        $("p").text("p元素被修改");
        //后面对前面同一元素的修改会覆盖
    });
    $("#append").click(function(){
        $("#p1").append(" world! ");
        $("#p1").prepend(" hello ");
    });
    //before after 换行
    $("#append2").click(function(){
        $("#p2").after("Chandler ");
        $("#p2").before(" Hello");
    });
    
    //change the text content
    $("#make").click(function () {
        $("#content").text("JUST DO IT");
        $("#chtml").html("<a href='http://www.jikexueyuan.com'>jikexueyuan</a>");
    });

    $("#change_input").click(function(){
        $("#in").val("my content has changed");
    });

    /*$( "#greatphoto" ).attr({
        alt: "Beijing Brush Seller",
        title: "photo by Kelly Clark"
    });*/
    $("#change_attr").click(function () {
        $("#aid").attr("href","http://www.baidu.com");
    });

    $("#hide").click(function () {
        $("#phide").hide(1000, function () {
            alert("动画结束，这个方法被回调");
        });
    });
    $("#change_style").click(function () {
            $("#pstyle_change").css("color","red").slideUp(1000).slideDown(1000);
    });
    //fade in
    $("#fadeIn").on("click",function () {
        $("#div1").fadeIn(1000);
        $("#div2").fadeIn(1000);
        $("#div3").fadeIn(1000);
    });
    //fade out
    $("#fadeOut").on("click",function () {
        $("#div1").fadeOut(1000);
        $("#div2").fadeOut(1000);
        $("#div3").fadeOut(1000);
    });
    //fade toggle
    $("#fadeToggle").on("click",function () {
        $("#div1").fadeToggle(1000);
        $("#div2").fadeToggle(1000);
        $("#div3").fadeToggle(1000);
    });
    //fade to
    $("#fadeTo").on("click",function () {
        $("#div1").fadeTo(1000, 0.5);
        $("#div2").fadeTo(1000, 0.7);
        $("#div3").fadeTo(1000, 1);
    });

    $("#flipshow").click(function () {
        $("#div_content").slideDown(1000);
    });
    $("#fliphide").click(function () {
        $("#div_content").slideUp(500);
    });
    //slide toggle显示/隐藏切换同理
});

function appendText(){
    /*
    * html jQuery DOM
    * */
    var text1 = "<p>chandler</p>";
    var text2 = $("<p></p>").text("ime");
    var text3 = document.createElement("p");
    text3.innerHTML = "acely";
    $("body").append(text1, text2, text3);
}