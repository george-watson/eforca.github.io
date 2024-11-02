const clickAudio = new Audio("audio/oc/wallBtnClick.mp3");
const timeforwall = new Audio("audio/oc/time-for-wall.mp3");
const choose = new Audio("audio/oc/choose.mp3");

console.log(window.location.pathname)

var audio_played = false;
$('#center-div').on("mousemove", function () {
    if (!audio_played) {
        audio_played = true;
        if (window.location.pathname == "/wall_choose.html") {
            timeforwall.play();
            sleep(4000).then(() => {
                choose.play();
            });
        } else {
            choose.play();
        }
    }
});

$('#reeds').on('click', function () {
    clickAudio.play();
    window.location.href = "connections.html";
})

$('#eye').on('click', function () {
    clickAudio.play();
    window.location.href = "sequence.html";
})

$('#water').on('click', function () {
    clickAudio.play();
    window.location.href = "wall.html";
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
