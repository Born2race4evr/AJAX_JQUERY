function animarImagen() {
    $("#img").fadeOut(2000, function() {
        
        $("#img").slideDown(2000, function() {
            
            $("#img").slideUp(2000);
            
        });

    });
}