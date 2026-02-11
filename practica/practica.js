jQuery.fn.animacion = function() {
    this.each(function(){
        var elem = $(this);

        elem.css({
            "border-style": "solid",
            "border-color": "blue",
            "border-width": "0px"
        }); 
        elem.animate({
            borderWidth: "20px",
            fontSize: "25pt",
        }, 1000);
    });   
    return this;
}; 

function mostrarPrecio() {
    var precio = $('input[name="coche"]:checked').val();

    if (precio) {
        $("#salidaPrecio").html("<h2 id='divCoste'></h2>");
        $("#divCoste").text("Precio: " + precio + "€");
    }
}

function divTxt() {
    if ($("#siOno").is(":checked")) {

        $.ajax({
            url: "texto.txt",
            success: function(respuesta) {
                $("#textoMagico").html(respuesta);
                $("#textoMagico").animacion(); 
            },
            error: function() {
                alert("Error al cargar");
            }
        });
    }
}