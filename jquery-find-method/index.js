$(document).ready(function(){
    $(".des").find("span").css({
        "color": "red",
        "border": "2px solid red"
    });
    $(".des").children().css({
        "backgroundColor": "gray",
    });
    // $("h2").siblings().css({
    //     "color":"red",
    //     "border":"2px solid red"
    // });
    $("h2").nextAll().css({//prev, prevAll, prevUntil, nextUntil(),next, nextAll
        "color":"red",
        "border":"2px solid red"
    });
    $(".desc p").filter(".p").css("background-color", "yellow");
    $(".desc p").first().css("background-color", "red");
    $(".desc p").eq("2").css("background-color", "red");
})