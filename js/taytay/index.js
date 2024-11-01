$(document).ready(function () {

    $("#answer").on("change keyup paste", function () {
        if ($(this).val().length === 4) {
            if ($(this).val() === "1989") {
                $('#info').removeClass("hidden");
            }
        }
    });


});