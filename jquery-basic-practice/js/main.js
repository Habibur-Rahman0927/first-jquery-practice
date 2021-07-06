$(document).ready(function () {
    $("p").click(function () {
        $(this).hide();
    });

    $(".for-h2").click(() => {
        $("h2").hide();
    });

    $(".for-123").click(() => {
        $(".p1").hide();
    });

    $(".list").click(() => {
        $("ul li:nth-child(2)").hide();
    });

    $(".anchor").click(() => {
        $("a").hide();
    });

    $(".hello").on({
        mouseenter: function () {
            $(this).css("background-color", "green");
        },
        mouseleave: function () {
            $(this).css("background-color", "red");
        },
        click: function () {
            $(this).css("background-color", "yellow")
        },

    });

    $(".alert").click(() => {
        alert("Alert");
    });

    $("input").focus(function () {
        $(this).css("background-color", "gray");
    });
    $(".on-method").on('click', function(){
        $(this).hide();
    });

});
