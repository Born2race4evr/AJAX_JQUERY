$(document).ready(function() {

    $("#texto").hover(
        function() {
            $(this).addClass("texto-grande");
        },
        function() {
            $(this).removeClass("texto-grande");
        }
    );
});