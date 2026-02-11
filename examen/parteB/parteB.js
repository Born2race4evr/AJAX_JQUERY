jQuery.fn.movimiento = function() {
    this.each(function(){
        var elem = $(this);

        elem.css({
            "border-style": "solid",
            "border-color": "red"
        }); 

        elem.animate({
            borderWidth: "20px",
            fontSize: "25pt",
        }, 500);
    });   
    return this;
}; 

function mostrarPrecio() {
    var costeViaje = $('input[name="opciones"]:checked').val();

    if (costeViaje) {
        $("#divPrecio").html('Precio:' + '<input type="text" value="' + costeViaje + "€" + '">');
    }
}

function divTxt() {
    if ($("#checkOp").is(":checked")) {

        $.ajax({
            url: "parteB.txt",
            success: function(txtExterno) {
                $("#divTxt").html(txtExterno);
                $("#divTxt").movimiento(); 
            }
        });
    }
}