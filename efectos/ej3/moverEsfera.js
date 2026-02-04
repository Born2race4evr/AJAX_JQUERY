$(document).ready(function() {
    
    function moverEsfera() {
        $("#esfera").animate({ left: "+=200px" }, 1000)
        .animate({ top: "+=200px" }, 1000)
        .animate({ left: "-=200px" }, 1000)
        .animate({ top: "-=200px" }, 1000, moverEsfera);
    }

    $("#btnIniciar").click(function() {
        moverEsfera();
    });

    $("#btnParar").click(function() {
        // .stop(true) borra la cola de animaciones pendientes y para el cubo
        $("#esfera").stop(true);
    });

});