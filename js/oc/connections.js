const clickAudio = new Audio("audio/oc/wallBtnClick.mp3")
const instructions = new Audio("audio/oc/connections_reeds.mp3")

const tiles = ["Alternative", 'De', 'The X', '(eg.) Charlie and the Chocolate'];
const points = ["5 points", "3 points", "2 points", "1 points"];
const answer = "Phrases missing Fact, Facto, Factor, Factory";

instructions.play();

$("#continue").hide();

$("#answerDiv").append('<span id="answer">' + answer + '</span>');
$("#answer").hide();

var current_tile = 0;

for (let i = 0; i < tiles.length; i++) {
    // $("#tilesDiv").append('<div class="tileDiv" id="tile' + i + '"><label id="label-' + i + '"><span>1 point<span/><span class="tile">' + tiles[i] + '</span></label></div>');
    $("#tilesDiv").append(
        '<div class="tileDiv" id="tileDiv' + i + '">' +
        '<span class="points" id="points' + i + '">' + points[i] + '</span>' +
        '<span class="tile" id="tile' + i + '">' + tiles[i] + '</span>' +
        '</div>');
    $("#tile" + i).hide();
    $("#points" + i).css('visibility', 'hidden');
}

$('#tile0').show();
$('#points0').css('visibility', 'visible');

$('#next').on('click', function () {
    clickAudio.play();
    $('#points' + current_tile).css('visibility', 'hidden');
    current_tile += 1;
    $('#tile' + current_tile).show();
    $('#points' + current_tile).css('visibility', 'visible');
    if (current_tile == 3) {
        $(this).hide()
    }
})

$('#seeAnswer').on('click', function () {
    $(this).hide()
    $('#next').hide()
    for (let i = current_tile + 1; i < tiles.length; i++) {
        $('#tile' + i).show();
    }
    $("#answer").show()

    sleep(2000).then(() => {
        $('#continue').show();
    });
})

$('#continue').on('click', function () {
    clickAudio.play();
    window.location.href = "sequence_choose.html";
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}