$('#L_DIL').hover(function (ev) {
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
