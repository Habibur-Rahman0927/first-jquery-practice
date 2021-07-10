$(document).ready(function(){
    $(".animatBtn").click(function(){
        var anime = $(".div1");
        anime.animate({height: '300px', opacity:0.6}, "fast");
        anime.animate({width: '300px', opacity:0.6}, "slow");
        anime.animate({height: '100px', opacity:0.6}, "slow");
        anime.animate({width: '100px', opacity:0.6}, "slow");
    });
    $(".animatBtn").click(function(){
        $(".div2").animate({marginLeft:'250px', height:'150px',width:'150px'},"slow");
        $(".div2").animate({fontSize:"58px"},"slow");
    });
    $(".animatBtn").click(function(){
        $(".div2").animate({ height:'+=200px',width:'+=200px'},"slow");
    });
    $(".animatBtn").click(function(){
        $(".div3").animate({ height:'toggle'},"slow");
    });

    $(".div4").click(function(){
        $(".div5").slideToggle(2000);
    })
    $("#stopBtn").click(function(){
        $(".div5").stop();
    })
    $(".call").click(function(){
        $(".hideMe").hide("slow", function(){
            alert("Hi, I am call Back")
        });
    })
    $(".toggleBtn").click(function(){
        $(".div6").toggle(1000)
    })
});