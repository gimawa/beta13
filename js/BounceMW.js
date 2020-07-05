var yMove = -1;
var xMove = 2;
var winHeight = $(window).height();
var winWidth = $(window).width();
var timer;

function startTimer() {
    timer = setInterval(function () {
        var el = $('#L_MW');
        var currentOffset = el.offset();
        var yMax = currentOffset.top + el.height();
        var xMax = currentOffset.left + el.width();

        if (yMax >= winHeight || currentOffset.top <= -1) {
            yMove *= -1;
        }

        if (xMax >= winWidth || currentOffset.left <= -1) {
            xMove *= -1;
        }

        el.offset({
            top: currentOffset.top + yMove,
            left: currentOffset.left + xMove
        })
    }, 20);
}

$('#L_MW').hover(function (ev) {
    clearInterval(timer);
}, function (ev) {
    startTimer();
});

$(window).resize(function () {
    setTimeout(function () {
        $("#L_MW").css("left", "calc(50% - 103.25px)");
        $("#L_MW").css("top", "calc(55% - 150px)");
        winHeight = $(window).height();
        winWidth = $(window).width();
    }, 10);
});

$(window).on("orientationchange", function () {
    setTimeout(function () {
        $("#L_MW").css("left", "calc(50% - 103.25px)");
        $("#L_MW").css("top", "calc(55% - 150px)");
        winHeight = $(window).height();
        winWidth = $(window).width();
    }, 10);
});

startTimer();