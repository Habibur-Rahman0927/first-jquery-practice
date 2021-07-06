$(document).ready(function(){
    $(".toggle").click(function(){
        $("h1").toggle("slow");
        $(".div1").fadeIn(1000);
        $(".div2").fadeIn(2000);
        $(".div3").fadeIn(3000);
    });
    $("#opacity").click(function(){
        $(".div1").fadeTo("slow",0.8);
        $(".div2").fadeTo("slow",0.8);
        $(".div3").fadeTo("slow",0.8);
    });
    $(".div1").click(function(){
        $(this).fadeOut(1000);
    });
    $(".div2").click(function(){
        $(this).fadeOut(1000);
    });
    $(".div3").click(function(){
        $(this).fadeOut(1000);
    });
    $(".btnDiv").click(function(){
        $(".showUp").slideToggle("slow");//slideUp, slideDown, slideToggle
    });
    $(".animatBtn").click(function(){//$(seletor).anime({object all part})
        var anime = $(".div4");
        anime.animate({height: '300px', opacity:0.6},"slow");
        anime.animate({width: '300px', opacity:0.7},"slow");
        anime.animate({height: '100px', opacity:0.8},"slow");
        anime.animate({width: '100px', opacity:0.9},"slow");
        // anime.animate({left: "300xpx"},"slow");
    });
});
var anime = $(".div4");
