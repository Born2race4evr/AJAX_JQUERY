$(document).ready(function(){

$("input[name='opcion']").change(function(){

    var color = $(this).val();

    $("#texto").css("color", color);
})

});
