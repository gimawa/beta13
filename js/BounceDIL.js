var yMove1 = -1;
var xMove1 = 2;
var winHeight = $(window).height();
var winWidth = $(window).width();
var timer1;

function starttimer1() {
    timer1 = setInterval(function () {
        var el1 = $('#L_DIL');
        var currentOffset1 = el1.offset();
        var yMax1 = currentOffset1.top + el1.height();
        var xMax1 = currentOffset1.left + el1.width();

        if (yMax1 >= winHeight || currentOffset1.top <= -1) {
            yMove1 *= -1;
        }

        if (xMax1 >= winWidth || currentOffset1.left <= -1) {
            xMove1 *= -1;
        }

        el1.offset({
            top: currentOffset1.top + yMove1,
            left: currentOffset1.left + xMove1
        })
    }, 20);
}

$('#L_DIL').hover(function (ev) {
    clearInterval(timer1);
}, function (ev) {
    starttimer1();
});

$(window).resize(function () {
    setTimeout(function () {
        $("#L_DIL").css("left", "calc(80% - 200px)");
        $("#L_DIL").css("top", "calc(90% - 124.72px)");
        winHeight = $(window).height();
        winWidth = $(window).width();
    }, 10);
});

$(window).on("orientationchange", function () {
    setTimeout(function () {
        $("#L_DIL").css("left", "calc(80% - 200px)");
        $("#L_DIL").css("top", "calc(90% - 124.72px)");
        winHeight = $(window).height();
        winWidth = $(window).width();
    }, 10);
});

starttimer1();
