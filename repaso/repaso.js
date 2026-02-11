var objeto = new XMLHttpRequest();

function cargarTextoServidor() {
    objeto.open("GET", "descripcion.txt", true);
    objeto.onreadystatechange = function () {
    if (objeto.readyState == 4 && objeto.status == 200) {
        document.getElementById("descripcion").innerHTML = objeto.responseText;
    }
    };
    objeto.send(null);
}

$(document).ready(function () {

    //efectos img
    $("#foto").hover(
    function() {
        $(this).fadeTo(500, 0);
    },
    function() {
        $(this).fadeTo(500, 1);
    }
    );

    cargarTextoServidor();

    //plugin
    jQuery.fn.colorFondo = function () {
        this.css("background-color", "blue");
        this.css("color", "white");
        return this;
    };

});

function actPlug() {
    $("#descripcion").colorFondo();
}


