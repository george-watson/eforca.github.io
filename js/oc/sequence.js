const clickAudio = new Audio("audio/oc/wallBtnClick.mp3")

const tiles = ["553125", '44256', '3327', '224'];
const points = ["5 points", "3 points", "2 points"];
const answer = "x to the power of x (with symbols taken out)";

$("#continue").hide();

$("#answerDiv").append('<span id="answer">' + answer + '</span>');
$("#answer").hide();

var current_tile = 0;

for (let i = 0; i < tiles.length; i++) {
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
    if (current_tile == 2) {
        $("#tile3").text("?");
        $("#tile3").show();
        $(this).hide();
    }
    $('#points' + current_tile).css('visibility', 'visible');
})

$('#seeAnswer').on('click', function () {
    $(this).hide()
    $('#next').hide()
    $("#tile3").text(tiles[3]);
    for (let i = current_tile + 1; i < tiles.length; i++) {
        $('#tile' + i).show();
    }
    $("#answer").show()

    sleep(2000).then(() => {
        $('#continue').show();
    });
})

$('#continue').on('click', function () {
    window.location.href = "wall_choose.html";
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}