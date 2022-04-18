// $  ("selector").  acción


/*$(document).ready(function(){

    alert('libreria cargada');
    

});*/


$(function(){

    $("h3").css({"background":"skyblue"});

});


$(function(){

    $("h3").css({"background":"rgba(26, 24, 25, 0.637"});
    $("h3").css({"padding":"18px"});
    $("h3").css({"color":"rgb(236, 143, 67)"});
    $("h3").css({"text-shadow":"-2px -2px 1px #000, 2px 2px 1px #000, -2px 2px 1px #000, 2px -2px 1px #000"});
    

});


$(function(){

    $("button").css({"background":"rgba(26, 24, 25, 0.637"});
    $("button").css({"padding":"18px"});

    $(".hide").click(function(){
        $(".primero").fadeOut();


    });

    $(".show").click(function(){
        $(".primero").fadeIn();


    });

    

    $(".primero").mouseenter(function(){
        $(".primero").css({"background":"rgba(26, 24, 25, 0.637"});
        

    });

    $(".primero").mouseleave(function(){
        $(".primero").css({"background":"rgb(255, 255, 255)"});
        

    });
    $(".segundo").mouseenter(function(){
        $(".segundo").css({"background":"rgba(26, 24, 25, 0.637"});


    });

    $(".segundo").mouseleave(function(){
        $(".segundo").css({"background":"rgb(255, 255, 255)"});


    });
    $(".tercero").mouseenter(function(){
        $(".tercero").css({"background":"rgba(26, 24, 25, 0.637"});


    });

    $(".tercero").mouseleave(function(){
        $(".tercero").css({"background":"rgb(255, 255, 255)"});


    });
    
});