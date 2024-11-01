$(document).ready(function () {

    var successTracker = {
        bejeweled: false,
        space: false,
        betty: false
    };

    $("#bejeweled-ans").on("change keyup paste", function () {
        var ans = "bejeweled";
        var humanAns = $(this).val().toLowerCase();

        if (ans === humanAns) {
            $('#bejeweled-yay').removeClass("hidden");
            successTracker['bejeweled'] = true;
            if (Object.values(successTracker).every(item => item)) {
                $('#success-taytay').removeClass('hidden');
            }
        } else {
            $('#bejeweled-yay').addClass("hidden");
            successTracker['bejeweled'] = false;
        }
    })

    $("#space-ans").on("change keyup paste", function () {
        var ans = "blank space";
        var humanAns = $(this).val().toLowerCase();

        if (ans === humanAns) {
            $('#space-yay').removeClass("hidden");
            successTracker['space'] = true;
            if (Object.values(successTracker).every(item => item)) {
                $('#success-taytay').removeClass('hidden');
            }
        } else {
            $('#space-yay').addClass("hidden");
            successTracker['space'] = false;
        }
    })

    $("#betty-ans").on("change keyup paste", function () {
        var ans = "betty";
        var humanAns = $(this).val().toLowerCase();

        if (ans === humanAns) {
            $('#betty-yay').removeClass("hidden");
            successTracker['betty'] = true;
            if (Object.values(successTracker).every(item => item)) {
                $('#success-taytay').removeClass('hidden');
            }
        } else {
            $('#betty-yay').addClass("hidden");
            successTracker['betty'] = true;
        }
    })

    $('#bejeweled-btn').click(function () {
        $('#bejeweled-audio')[0].play();
    });

    $('#space-btn').click(function () {
        $('#space-audio')[0].play();
    });

    $('#betty-btn').click(function () {
        $('#betty-audio')[0].play();
    });

});