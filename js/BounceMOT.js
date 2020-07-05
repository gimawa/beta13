var yMove3 = 1;
var xMove3 = -2;
var winHeight = $(window).height();
var winWidth = $(window).width();
var timer3;

function starttimer3() {
    timer3 = setInterval(function () {
        var el3 = $('#L_MOT');
        var currentOffset3 = el3.offset();
        var yMax3 = currentOffset3.top + el3.height();
        var xMax3 = currentOffset3.left + el3.width();

        if (yMax3 >= winHeight || currentOffset3.top <= -1) {
            yMove3 *= -1;
        }

        if (xMax3 >= winWidth || currentOffset3.left <= -1) {
            xMove3 *= -1;
        }

        el3.offset({
            top: currentOffset3.top + yMove3,
            left: currentOffset3.left + xMove3
        })
    }, 20);
}

$('#L_MOT').hover(function (ev) {
    clearInterval(timer3);
}, function (ev) {
    starttimer3();
});

$(window).resize(function () {
    setTimeout(function () {
        $("#L_MOT").css("left", "10%");
        $("#L_MOT").css("top", "calc(80% - 150px)");
        winHeight = $(window).height();
        winWidth = $(window).width();
    }, 10);
});

$(window).on("orientationchange", function () {
    setTimeout(function () {
        $("#L_MOT").css("left", "10%");
        $("#L_MOT").css("top", "calc(80% - 150px)");
        winHeight = $(window).height();
        winWidth = $(window).width();
    }, 10);
});

starttimer3();