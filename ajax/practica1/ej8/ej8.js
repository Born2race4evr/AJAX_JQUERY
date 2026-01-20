var objeto = new XMLHttpRequest();


function sacardatos(archivo, idDiv){
    objeto.open("GET", archivo);
    objeto.onreadystatechange = function(){
        if (objeto.readyState == 4 && objeto.status == 200) {
            var datos = JSON.parse(objeto.responseText);
            var salida = "<h2>Contenido del JSON</h2><ul>";

            for (var i = 0; i < datos.length; i++) {
                salida += "<li>" + datos[i].nombre + " - " + datos[i].edad + " años</li>";
            }
            salida += "</ul>";
            document.getElementById(idDiv).innerHTML = salida;
        }
    }
    objeto.send(null);
}