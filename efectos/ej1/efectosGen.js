$(document).ready(function() {
    $("#btnOcultar").click(function() { 
        $("#foto").hide(1000); });

    $("#btnMostrar").click(function() { 
        $("#foto").show(1000); });
    
    $("#btnFade").click(function() { 
        $("#foto").fadeOut(1000); });

    $("#btnSlide").click(function() { 
        $("#foto").slideUp(1000); });
    
    $("#btnAnimate").click(function() { 
        $("#foto").animate({
            marginLeft: "200px",
            opacity: 0.5 
        },1000); 
    });
});