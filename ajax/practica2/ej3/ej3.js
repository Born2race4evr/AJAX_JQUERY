var objeto = new XMLHttpRequest();

function sacardatos(datos, idDiv){
    var lugar = document.getElementById(idDiv);
    var nombre = document.getElementById('nombre').value;
    var parametros = "nom=" + encodeURIComponent(nombre); 
    objeto.open("POST", datos);
    objeto.setRequestHeader("Content-Type", "application/x-www-form-urlencoded");
    objeto.onreadystatechange = function(){
        if (objeto.readyState == 4 && objeto.status == 200) {
            lugar.innerHTML = objeto.responseText;
        }
    }
    objeto.send(parametros);
}