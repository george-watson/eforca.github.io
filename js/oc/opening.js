const onmyleft = new Audio("audio/oc/on-my-left.mp3")
const choose = new Audio("audio/oc/choose.mp3")
const clickAudio = new Audio("audio/oc/wallBtnClick.mp3")

$("#vcm").hide();
$("#blout").hide();
$("#descr").hide();
$('#continue').hide();

$('#go').on('click', function () {
    clickAudio.play();
    $("video").get(0).play();
    $(this).hide();
})

$("video").get(0).addEventListener("timeupdate", function () {
    if ($("video").get(0).currentTime >= 16) {
        $("#vcm").show();
    }
});

$("video").get(0).addEventListener("ended", function () {
    sleep(1000).then(() => {
        $("#blout").show();
        onmyleft.play();
    });

    sleep(1500).then(() => {
        $("#descr").show();
    });

    sleep(10000).then(() => {
        $('#continue').show();
    });
});

$('#continue').on('click', function () {
    clickAudio.play();
    window.location.href = "connections_choose.html";
})

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
