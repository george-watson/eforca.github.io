$(document).ready(function () {

    var successTracker = {
        calm: false,
        would: false,
        mine: false,
        suburb: false
    };

    $("#calm-ans").on("change keyup paste", function () {
        if ($(this).val().length === 1) {
            if ($(this).val() === "7") {
                $("#calm-h1").addClass("success");

                successTracker['calm'] = true;
                if (Object.values(successTracker).every(item => item)) {
                    $('#success-taytay').removeClass('hidden');
                }

            }
        }
    });

    $("#would-ans").on("change keyup paste", function () {
        if ($(this).val().length === 2) {
            if ($(this).val() === "19") {
                $("#would-h1").addClass("success");

                successTracker['would'] = true;
                if (Object.values(successTracker).every(item => item)) {
                    $('#success-taytay').removeClass('hidden');
                }
            }
        }
    });

    $("#mine-ans").on("change keyup paste", function () {
        if ($(this).val().length === 3) {
            if ($(this).val() === "230") {
                $("#mine-h1").addClass("success");

                successTracker['mine'] = true;
                if (Object.values(successTracker).every(item => item)) {
                    $('#success-taytay').removeClass('hidden');
                }
            }
        }
    });

    $("#suburb-ans").on("change keyup paste", function () {
        if ($(this).val().length === 4) {
            if ($(this).val() === "1950") {
                $("#suburb-h1").addClass("success");

                successTracker['suburb'] = true;
                if (Object.values(successTracker).every(item => item)) {
                    $('#success-taytay').removeClass('hidden');
                }
            }
        }
    });

});