$(document).ready(function() {
    $("#btnSaludo").click(function() {
        $("#mensaje").fadeTo(1000, 1);
    });

    $("#btnDespedida").click(function() {
        $("#mensaje").fadeTo(1000, 0);
    });
});
