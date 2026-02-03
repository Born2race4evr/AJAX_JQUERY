jQuery.fn.desaparecer = function() {
   this.each(function(){
      elem = $(this);
      elem.css("display", "none");
   });   
   return this;
}; 

function actPlug() {
    $("p").desaparecer();
};