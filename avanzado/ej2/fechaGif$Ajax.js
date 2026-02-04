function mostrarFecha() {

    $.ajax({
        url: "fecha.php",
        beforeSend: function() {
            $("#resultado").html('<img src="loading.gif" alt="Cargando...">');
        }
    })
    .done(function( respuesta ) {
        $("#resultado").html(respuesta);
    })
    .fail(function(xhr, status) {
        alert(xhr.status);
    })
}