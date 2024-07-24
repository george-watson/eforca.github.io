$(document).ready(function () {

    var successTracker = {
        nice: false,
        ohoh: false,
        rip: false
    };

    console.log(successTracker)

    $("#nice-ans").on("change keyup paste", function () {
        var ans = "this is why we can't have nice things";
        var humanAns = $(this).val().toLowerCase();
        var dist = levenshtein(humanAns, ans) / Math.max(humanAns.length, ans.length);

        if (dist < 0.05) {
            $('#nice-yay').removeClass("hidden");
            successTracker['nice'] = true;
            console.log(successTracker)
            if (Object.values(successTracker).every(item => item)) {
                $('#success-taytay').removeClass('hidden');
            }
        } else {
            $('#nice-yay').addClass("hidden");
            successTracker['nice'] = false;
        }
    })

    $("#ohoh-ans").on("change keyup paste", function () {
        var ans = "and i'm just like oh oh oh-oh oh oh oh oh oh oh";
        var humanAns = $(this).val().toLowerCase();
        var dist = levenshtein(humanAns, ans) / Math.max(humanAns.length, ans.length);

        if (dist < 0.05) {
            $('#ohoh-yay').removeClass("hidden");
            successTracker['ohoh'] = true;
            if (Object.values(successTracker).every(item => item)) {
                $('#success-taytay').removeClass('hidden');
            }
        } else {
            $('#ohoh-yay').addClass("hidden");
            successTracker['ohoh'] = false;
        }
    })

    $("#rip-ans").on("change keyup paste", function () {
        var ans = "rest in peace me rip me i died dead";
        var humanAns = $(this).val().toLowerCase();
        var dist = levenshtein(humanAns, ans) / Math.max(humanAns.length, ans.length);

        if (dist < 0.05) {
            $('#rip-yay').removeClass("hidden");
            successTracker['rip'] = true;
            if (Object.values(successTracker).every(item => item)) {
                $('#success-taytay').removeClass('hidden');
            }
        } else {
            $('#rip-yay').addClass("hidden");
            successTracker['rip'] = true;
        }
    })



});