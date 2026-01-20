$(document).ready(function() {

    $("#sumar").change(function() {

        if ($(this).is(":checked")) {
            
            var n1 = $('#num1').val();
            var n2 = $('#num2').val();
            
            var suma = Number(n1) + Number(n2);
            $("#resultado").html('<br><input type="text" value="' + suma + '" readonly>');

        } else {
            $("#resultado").html('');
        }

    });

});