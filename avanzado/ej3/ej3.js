function ejecutarJS() {

    $.ajax({
        url: "otro.js",
    })
    .done(function( respuesta ) {
        $("#resultado").html(respuesta);
    })
}