function mostrarFecha() {

    $.ajax({
        url: "ej2.php",
    })
    .done(function( respuesta ) {
        $("#resultado").html(respuesta);
    })
    .fail(function(xhr, status) {
        alert(xhr.status);
    })
}