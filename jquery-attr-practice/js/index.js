$(document).ready(function(){
    $(".attrBtn").click(function(){
        alert("Link  "+$(".anchor").attr("href"));
    });
    $(".textBtn").click(function(){
        alert("Text  "+$(".Paragraph").text());
    });
    $(".html").click(function(){
        alert("html  "+$(".Paragraph").html());
    });
    $(".inputValidation").click(function(){
        alert("value : "+$(".input").val())
    });
    $(".btn1").click(function() {
        $(".lorem1").text("Hello, I am change");
    });
    $(".btn2").click(function() {
        $(".lorem2").html("<h2>Hi lorem I am now 'H1'</h2>");
    });
    $(".btn3").click(function(){
        $(".lorem3").val("Enter your Names")
    });
    $("#btn4").click(function(){
        $("#hiAnchor").attr("herf", "http://127.0.0.1:5500/index.html");
    });
    $(".btn5").click(function(){
        $(".images").before("<b>Habib</b>");
    });
    $(".btn6").click(function(){
        $(".images").after("<b>Habib</b>");
    });
    $(".btn7").click(function(){
        $(".add").append("<b>Rock</b>")
    })
    $(".btn8").click(function(){
        $(".add").prepend("<b>Rock</b>")
    })
});