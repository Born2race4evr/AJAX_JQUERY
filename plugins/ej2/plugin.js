jQuery.fn.destacar = function() {
    this.each(function(){
        elem = $(this);
        elem.css("color", "red");
        elem.css("font-weight", "bold");
    });   
    return this;
}; 

function actPlug() {
    $("p").destacar();
};