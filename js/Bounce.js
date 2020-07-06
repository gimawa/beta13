var winHeight = $(window).height();
var winWidth = $(window).width();
var yMove = -1;
var xMove = -2;
var timer;
var yMove1 = -1;
var xMove1 = 2;
var timer1;
var yMove2 = 2;
var xMove2 = 1;
var timer2;
var yMove3 = 1;
var xMove3 = -2;
var timer3;
var yMove4 = 1;
var xMove4 = 2;
var timer4;

function starttimer() {
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

$('#L_SUSA, #L_MOT, #L_INZE, #L_DIL, #L_MW').hover(function (ev) {
    clearInterval(timer);
    clearInterval(timer1);
    clearInterval(timer2);
    clearInterval(timer3);
    clearInterval(timer4);
}, function (ev) {
    starttimer();
    starttimer1();
    starttimer2();
    starttimer3();
    starttimer4();
});

$(window).resize(function () {
    setTimeout(function () {
        $("#L_MW").css("left", "calc(50% - 103.25px)");
        $("#L_MW").css("top", "calc(55% - 150px)");
        $("#L_DIL").css("left", "calc(80% - 200px)");
        $("#L_DIL").css("top", "calc(90% - 124.72px)");
        $("#L_INZE").css("left", "20%");
        $("#L_INZE").css("top", "10%");
        $("#L_MOT").css("left", "10%");
        $("#L_MOT").css("top", "calc(80% - 150px)");
        $("#L_SUSA").css("left", "calc(90% - 200px)");
        $("#L_SUSA").css("top", "20%");
        winHeight = $(window).height();
        winWidth = $(window).width();
    }, 10);
});

$(window).on("orientationchange", function () {
    setTimeout(function () {
        $("#L_MW").css("left", "calc(50% - 103.25px)");
        $("#L_MW").css("top", "calc(55% - 150px)");
        $("#L_DIL").css("left", "calc(80% - 200px)");
        $("#L_DIL").css("top", "calc(90% - 124.72px)");
        $("#L_INZE").css("left", "20%");
        $("#L_INZE").css("top", "10%");
        $("#L_MOT").css("left", "10%");
        $("#L_MOT").css("top", "calc(80% - 150px)");
        $("#L_SUSA").css("left", "calc(90% - 200px)");
        $("#L_SUSA").css("top", "20%");
        winHeight = $(window).height();
        winWidth = $(window).width();
    }, 10);
});

starttimer();
starttimer1();
starttimer2();
starttimer3();
starttimer4();
