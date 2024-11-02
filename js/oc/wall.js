const clickAudio = new Audio("audio/oc/wallBtnClick.mp3")
const incorrectAudio = new Audio("audio/oc/incorrectGroup.mp3")
const solveAudio = new Audio("audio/oc/solveClue.mp3")
const solveWallAudio = new Audio("audio/oc/you-solved-the-wall.mp3")

const tile_colours = ['blue', 'green', 'red', 'teal']

const wall = ['garfield', 'may', 'box', 'bay', 'guild', 'we', 'cameron', 'basil', 'dill', 'joyce', 'clique', 'ballet', 'troupe', 'sage', 'mint', 'crew'];
const rows = [
    ['bay', 'basil', 'dill', 'sage'],
    ['garfield', 'may', 'cameron', 'joyce'],
    ['box', 'we', 'ballet', 'mint'],
    ['guild', 'clique', 'troupe', 'crew']
]

var n_checked = 0;
var n_found = 0;

$("#continue").hide();

for (let i = 0; i < wall.length; i++) {
    $("#wall").append('<div class="tileDiv" id="tile' + i + '"><label id="label-' + wall[i] + '"><input id = "' + wall[i] + '" type = "checkbox" value = "1" /><span class="wall-btn">' + wall[i] + '</span></label></div>');
}

$('.wall-btn').on('click', function () {
    if ($(this).hasClass("found")) {
        return;
    }
    if (n_checked < 4) {
        clickAudio.play()
        if ($('#' + $(this).text()).is(':checked')) {
            n_checked -= 1;
        } else {
            n_checked += 1;
        }
        console.log(n_checked);
    }
    if (n_checked == 4) {
        clickAudio.play();
        var res = false;
        sleep(500).then(() => {
            inputs = $('input:checked');
            res = checkAnswer(inputs);
            if (res) {
                solveRow(res);
                inputs.siblings().addClass("found-" + tile_colours[n_found / 4]);
                n_found += 4;
                changeColour(n_found);
                inputs.prop("checked", false);
                inputs.prop("disabled", true);
                inputs.siblings().addClass("found");
                if (n_found == 12) {
                    console.log("pouet");
                    $(".wall-btn:not(.found)").addClass("found found-teal");
                    solveWallAudio.play();

                    sleep(5000).then(() => {
                        $('#continue').show();
                    });
                }

            } else {
                sleep(400).then(() => {
                    incorrectAudio.play()
                })
                sleep(1000).then(() => {
                    $('input:checked').prop("checked", false);
                });
            }
            n_checked = 0;
        })
    }

})

$('#continue').on('click', function () {
    clickAudio.play();
    window.location.href = "missing-vowels.html";
})

function changeColour(n) {
    new_col = tile_colours[n / 4];
    $(':root').css("--tile-font-colour", 'var(--' + new_col + '-font-colour)');
    $(':root').css("--tile-start-colour", 'var(--' + new_col + '-start-colour)');
    $(':root').css("--tile-end-colour", 'var(--' + new_col + '-end-colour)');
}

function solveRow(row) {
    solveAudio.play();
    i_found = 0 + n_found;
    i_not = i_found + 4;
    for (let i = 0; i < 16; i++) {
        old_tile = $("#tile" + i + "> label");
        if (old_tile.children("span").hasClass("found")) {
            continue
        }
        if (row.includes(old_tile.children("input").attr("id"))) {
            old_tile.position({
                my: "left top",
                at: "left+5 top+5",
                of: $("#tile" + (i_found)),
                using: function (css, calc) {
                    $(this).animate(css, 1500, "linear");
                }
            });
            i_found += 1;
        } else {
            old_tile.position({
                my: "left top",
                at: "left+5 top+5",
                of: $("#tile" + (i_not)),
                using: function (css, calc) {
                    $(this).animate(css, 1500, "linear");
                }
            });
            i_not += 1;
        }
    }
}

function checkAnswer(inputs) {
    ids = inputs.map(function () {
        return $(this).attr("id");
    }).get();
    console.log(ids)
    ouep = false;
    for (const row of rows) {
        if (ids.sort().join(',') === row.sort().join(',')) {
            return (row);
        }
    }
    console.log(ouep)
    return (ouep)
}

function sleep(ms) {
    return new Promise(resolve => setTimeout(resolve, ms));
}
