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
    })
})