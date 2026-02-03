function enviarDatos() {
    var datosForm = $("#formulario").serialize();

    $.get("verificar.php", datosForm, function(respuesta) {
        
        $("#resultado").html(respuesta);
        
    });
}