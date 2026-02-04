function mostrarArchivo() {

    $.ajax({
        url: "ej1.txt",
    })
    .done(function( respuesta ) {
        $("#resultado").html(respuesta);
    })
    .fail(function() {
        alert("error");
    })
}