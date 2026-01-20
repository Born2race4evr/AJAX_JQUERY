function mostrarArchivo() {
    $.ajax({
        url: "ej1.txt",
        success: function(respuesta) {
            $("#resultado").html(respuesta);
        }
    });
}