var objeto = new XMLHttpRequest();

function cargarTextoServ() {
    objeto.open("GET", "parteA.txt", true);
    objeto.onreadystatechange = function () {
    if (objeto.readyState == 4 && objeto.status == 200) {
        document.getElementById("divTxt").innerHTML = objeto.responseText;
    }
    };
    objeto.send(null);
}

$(document).ready(function() {
    $("#foto").hover(
        function() {
            $(this).fadeTo(1000, 0);
        },
        function() {
            $(this).fadeTo(1000, 1);
        }
    );

    cargarTextoServ();

    jQuery.fn.colorFondo = function () {
        this.css("background-color", "orange");
        return this;
    };

});

function actPlug() {
    $("#divTxt").colorFondo();
};