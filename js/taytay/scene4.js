$(document).ready(function () {

    var sequence = ['midnights', 'folklore', 'evermore', 'speaknow', 'red'];
    var humanSequence = [];

    var nope = $("#nope");
    var yay = $("#yay");
    var erasButtons = $('.era-btn');


    $.fn.randomize = function (selector) {
        (selector ? this.find(selector) : this).parent().each(function () {
            $(this).children(selector).sort(function () {
                return Math.random() - 0.5;
            }).detach().appendTo(this);
        });

        return this;
    };

    erasButtons.randomize();


    function resetGame() {
        humanSequence = [];
    }

    function handleClick(btn) {
        const index = humanSequence.push(btn) - 1;

        if (humanSequence[index] !== sequence[index]) {
            nope.removeClass('hidden');
            humanSequence = [];

        } else {
            if (humanSequence.length === sequence.length) {
                yay.removeClass('hidden');
            }
        }
    }

    erasButtons.on('click', function () {
        nope.addClass('hidden');
        yay.addClass('hidden');
        handleClick($(this).attr('id'));
    });

});