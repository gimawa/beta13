var yMove4 = 1;
var xMove4 = 2;
var winHeight = $(window).height();
var winWidth = $(window).width();
var timer4;

function starttimer4() {
    timer4 = setInterval(function () {
        var el4 = $('#L_SUSA');
        var currentOffset4 = el4.offset();
        var yMax4 = currentOffset4.top + el4.height();
        var xMax4 = currentOffset4.left + el4.width();

        if (yMax4 >= winHeight || currentOffset4.top <= -1) {
            yMove4 *= -1;
        }

        if (xMax4 >= winWidth || currentOffset4.left <= -1) {
            xMove4 *= -1;
        }

        el4.offset({
            top: currentOffset4.top + yMove4,
            left: currentOffset4.left + xMove4
        })
    }, 20);
}

$('#L_SUSA').hover(function (ev) {
    clearInterval(timer4);
}, function (ev) {
    starttimer4();
});

$(window).resize(function () {
    setTimeout(function () {
        $("#L_SUSA").css("left", "calc(90% - 200px)");
        $("#L_SUSA").css("top", "20%");
        winHeight = $(window).height();
        winWidth = $(window).width();
    }, 10);
});

$(window).on("orientationchange", function () {
    setTimeout(function () {
        $("#L_SUSA").css("left", "calc(90% - 200px)");
        $("#L_SUSA").css("top", "20%");
        winHeight = $(window).height();
        winWidth = $(window).width();
    }, 10);
});

starttimer4();