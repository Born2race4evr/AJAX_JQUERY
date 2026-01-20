var objeto = new XMLHttpRequest();


function sacardatos(){

    objeto.open("GET", "ej4.xml", true);
    objeto.onreadystatechange = function(){

    if (objeto.readyState == 4 && objeto.status == 200) {

        var contenido = objeto.responseXML;    
        var nombre = contenido.getElementsByTagName("nombre")[0].textContent + "<br>"
        var edad = contenido.getElementsByTagName("edad")[0].textContent + "<br>";

        document.getElementById("contenedor").innerHTML = "Nombre: " + nombre + " Edad: " + edad;
    }
    }
    objeto.send(null);
}