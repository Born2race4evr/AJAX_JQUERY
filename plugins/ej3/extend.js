jQuery.fn.personalizado = function(opciones) {

 //Definimos las configuraciones por defecto
 var config = {
 fondo: 'blue',
 letra: 'orange'

 };

 jQuery.extend(config, opciones);
 this.css('background-color', config.fondo);
 this.css('color', config.color);

}


function actPlug() {
    $("#resultado").personalizado({ 
        fondo: "red", 
        letra: "yellow" 
    });
}