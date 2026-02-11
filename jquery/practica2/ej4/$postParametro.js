function pasarDatos() {
    var marca = $("#marca").val();
    var modelo = $("#modelo").val();

    $.post("ej4.php", {marca, modelo}, function(resultado) {
        
        $("#contenedor").html(resultado);
        
    });
}