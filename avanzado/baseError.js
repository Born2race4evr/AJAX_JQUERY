function mostrarArchivo() {

    $.ajax({
        url: "ej.txt",
    })
    .done(function( respuesta ) {
        $("#resultado").html(respuesta);
    })
    .fail(function(xhr, status, error) {
        alert(xhr.status); //codigo error
        alert(xhr.statusText); //texto error
    })
}

/*  .fail(function() {
    alert( "error" );   manera simple del error
  })
*/