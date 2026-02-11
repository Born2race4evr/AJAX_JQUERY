var objeto = new XMLHttpRequest();

function sacardatos(datos, idDiv){
    var lugar = document.getElementById(idDiv);
    var gif = '<img src="loading.gif" alt="Cargando...")>';
    lugar.innerHTML = gif; 
    objeto.open("GET", datos); 
    objeto.onreadystatechange = function(){
        if (objeto.readyState == 4 && objeto.status == 200) {
            lugar.innerHTML = objeto.responseText;  
        }   
    }
    objeto.send(null); 
}