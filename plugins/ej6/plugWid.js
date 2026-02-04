$(document).ready(function(){
  $('.demo').slick({
      dots: true,      // Muestra los puntos
      infinite: true,  // Bucle infinito
      slidesToShow: 1  // Cuántas diapositivas se ven
  });
});

$( function() {
    $( "#tabs" ).tabs();
} );