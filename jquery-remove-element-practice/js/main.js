$(document).ready(function(){
    $('.btn1').click(function(){
        $(".ar").remove();
    });
    $('.btn2').click(function(){
        $('.flilip').toggleClass('fil');//addClass/removeClass/toggleClass
    });
    $('.btn3').click(function(){
        $('.para1').css({
            "backgroundColor":"green",
            "color": "#fff",
            "padding": "20px",
            "font-size": "20px"
        });
    });
    $('.btn4').click(function(){
        $('.box').width(500).height(500);
    });
    $("span").parentsUntil("ul").css({//parents/parentsUntil/parent
        "color":"red",
        "border": "2px solid green"
    });
    // $(".des").find("span").css({
    //     "color": "red",
    //     "border": "2px solid red"
    // })
})