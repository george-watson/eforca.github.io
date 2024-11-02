const clickAudio = new Audio("audio/oc/wallBtnClick.mp3");
const instructions = new Audio("audio/oc/buzz-with-care.mp3");
const greatestFilm = new Audio("audio/oc/greatest-film.mp3");

const corrects = [];

fetch("audio/oc/well-done-files.txt")
    .then((res) => res.text())
    .then((text) => {
        audio_files = text.split(/\n/g);
        console.log(audio_files);
        for (let i = 0; i < audio_files.length; i++) {
            corrects.push(new Audio('audio/oc/well-done/' + audio_files[i]));
        }
    })
    .catch((e) => console.error(e));

console.log(corrects)

const wellDoneEnd = new Audio("audio/oc/well-done-end.mp3");
const goodnight = new Audio("audio/oc/goodnight.mp3");

const questions = [
    { theme: "Things that could be used to stop a vampire", clue: "C R CFX", answer: "crucifix" },
    { theme: "Things that could be used to stop a vampire", clue: "G R LCB R D", answer: "garlic bread" },
    { theme: "1985 films", clue: "BC KTT HF TR", answer: "back to the future" },
    { theme: "1985 films", clue: "THB RKF STC LB", answer: "the breakfast club" },
    { theme: "Locations of murders", clue: "THRN TXPR S S", answer: "the orient express" },
    { theme: "Locations of murders", clue: "T HD N CFL R", answer: "the dancefloor" }
];

var current_question = 0;
var found = false;
var sawAnswer = false;

var audio_played = false;
$('#centerDiv').on("mousemove", function () {
    if (!audio_played) {
        instructions.play();
        audio_played = true;
    }
});

$("#continue").hide();
$("#vcm").hide();

for (let i = 0; i < questions.length; i++) {
    $("#questionDiv").append(
        '<div class="question" id="question' + i + '">' +
        '<span class= "theme" >' + questions[i]["theme"] + '</span >' +
        '<span class="clue">' + questions[i]["clue"] + '</span>' +
        '<input type="input" class="form__field" id="answer' + i + '" autocomplete="off" />' +
        '</div >');
    $("#question" + i).hide();
}

$("#question0").show();

$(".form__field").on("change keyup paste", function () {
    var ans = questions[current_question]['answer'];
    var formAns = $(this).val().toLowerCase();

    if (ans === formAns & !found) {
        $(this).prop("disabled", true);
        $("#seeAnswer").css("cursor", "default");
        $("#next").css("cursor", "pointer");
        found = true;
        if (!sawAnswer) {
            $("#seeAnswer").text("Well done !");
            if (current_question < questions.length - 1) {
                if (questions[current_question]['answer'] == "back to the future") {
                    greatestFilm.play();
                } else {
                    corrects[Math.floor(Math.random() * corrects.length)].play();
                }
            }

        }

        if (current_question == questions.length - 1) {
            setGoodnight();
        }
    }


})

$('#next').on('click', function (e) {
    if ((found | sawAnswer) & current_question < questions.length - 1) {

        clickAudio.play();

        $(this).css("cursor", "default");
        $("#question" + current_question).hide();
        found = false;
        sawAnswer = false;
        $("#seeAnswer").text("See answer");
        $("#seeAnswer").css("cursor", "pointer");

        current_question += 1;
        $("#question" + current_question).show();
        if (current_question == questions.length - 1) {
            $(this).css('visibility', 'hidden');
        }
        $("#answer" + current_question).focus();
    } else if ((found | sawAnswer) & current_question == questions.length - 1) {
        clickAudio.play();
        $("#vcm").show();

        sleep(1000).then(() => {
            goodnight.play();
        });
    }

})

$('#seeAnswer').on('click', function () {
    if (!found) {
        $("#answer" + current_question).val(questions[current_question]['answer']);
        $("#answer" + current_question).prop("disabled", true);
        $("#seeAnswer").css("cursor", "default");
        $("#next").css("cursor", "pointer");
        sawAnswer = true;

        if (current_question == questions.length - 1) {
            setGoodnight();
        }
    }
})


$('#continue').on('click', function () {
    clickAudio.play();
    $("#vcm").show();

    sleep(1000).then(() => {
        goodnight.play();
    });
})

$(document).on('keypress', function (e) {
    if (e.which == 13) {
        $('#next').click();
    }
});

function setGoodnight() {
    wellDoneEnd.play();
    $("#next").text("Goodnight ?");
    $("#next").css("cursor", "pointer");
    $("#next").css('visibility', 'visible');
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}