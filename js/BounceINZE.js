var yMove2 = 2;
var xMove2 = 1;
var winHeight = $(window).height();
var winWidth = $(window).width();
var timer2;

function starttimer2() {
    timer2 = setInterval(function () {
        var el2 = $('#L_INZE');
        var currentOffset2 = el2.offset();
        var yMax2 = currentOffset2.top + el2.height();
        var xMax2 = currentOffset2.left + el2.width();

        if (yMax2 >= winHeight || currentOffset2.top <= -1) {
            yMove2 *= -1;
        }

        if (xMax2 >= winWidth || currentOffset2.left <= -1) {
            xMove2 *= -1;
        }

        el2.offset({
            top: currentOffset2.top + yMove2,
            left: currentOffset2.left + xMove2
        })
    }, 20);
}

$('#L_INZE').hover(function (ev) {
    clearInterval(timer2);
}, function (ev) {
    starttimer2();
});

$(window).resize(function () {
    setTimeout(function () {
        $("#L_INZE").css("left", "20%");
        $("#L_INZE").css("top", "10%");
        winHeight = $(window).height();
        winWidth = $(window).width();
    }, 10);
});

$(window).on("orientationchange", function () {
    setTimeout(function () {
        $("#L_INZE").css("left", "20%");
        $("#L_INZE").css("top", "10%");
        winHeight = $(window).height();
        winWidth = $(window).width();
    }, 10);
});

starttimer2();