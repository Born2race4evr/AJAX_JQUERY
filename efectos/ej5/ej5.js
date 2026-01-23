$(document).ready(function() {
    $("#btnCola").click(function() {
        var capa = $("#caja");

        // 1. ANIMATE
        capa.animate({ left: "+=200px" }, 2000);

        // 2. CSS
        capa.queue(function(next) {
            $(this).css("background-color", "orange");
            next();
        });

        // 3. ANIMATE
        capa.animate({ top: "+=100px" }, 2000);
    });
});