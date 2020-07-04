$(document).ready(function () {
    $("#01").mouseover(function () {
        $("#MOT").css("display", "none");
        $("#INZE").css("display", "inline");
    });
    $("#01").mouseleave(function () {
        $("#INZE").css("display", "none");
        $("#MOT").css("display", "inline");
    });
    $("#02").mouseover(function () {
        $("#MOT").css("display", "none");
        $("#SUSA").css("display", "inline");
    });
    $("#02").mouseleave(function () {
        $("#SUSA").css("display", "none");
        $("#MOT").css("display", "inline");
    });
    $("#04").mouseover(function () {
        $("#MOT").css("display", "none");
        $("#DIL").css("display", "inline");
    });
    $("#04").mouseleave(function () {
        $("#DIL").css("display", "none");
        $("#MOT").css("display", "inline");
    });

    $("#con").mouseover(function () {
        $("#MOT").css("display", "none");
        $("#MW").css("display", "inline");
    });
    $("#con").mouseleave(function () {
        $("#MW").css("display", "none");
        $("#MOT").css("display", "inline");
    });

    $(".skipper").mouseover(function () {
        $("#MOT").css("display", "none");
        $("#DIL").css("display", "inline");
    });
    $(".skipper").mouseleave(function () {
        $("#DIL").css("display", "none");
        $("#MOT").css("display", "inline");
    });
});
