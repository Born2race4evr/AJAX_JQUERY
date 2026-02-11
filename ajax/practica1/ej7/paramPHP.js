var objeto = new XMLHttpRequest();

function sacardatos(datos, idDiv){
    var lugar = document.getElementById(idDiv);
    var nombre = document.getElementById('nombre').value;
    var urlConParametros = datos + "?nom=" + encodeURIComponent(nombre); 
    objeto.open("GET", urlConParametros);
    objeto.onreadystatechange = function(){
        if (objeto.readyState == 4 && objeto.status == 200) {
            lugar.innerHTML = objeto.responseText;
        }
    }
    objeto.send(null);
}