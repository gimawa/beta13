$(document).ready(function () {
    $("#02").mouseover(function () {
        $("#INZE").css("display", "none");
        $("#SUSA").css("display", "inline");
    });
    $("#02").mouseleave(function () {
        $("#SUSA").css("display", "none");
        $("#INZE").css("display", "inline");
    });
    $("#03").mouseover(function () {
        $("#INZE").css("display", "none");
        $("#MOT").css("display", "inline");
    });
    $("#03").mouseleave(function () {
        $("#MOT").css("display", "none");
        $("#INZE").css("display", "inline");
    });
    $("#04").mouseover(function () {
        $("#INZE").css("display", "none");
        $("#DIL").css("display", "inline");
    });
    $("#04").mouseleave(function () {
        $("#DIL").css("display", "none");
        $("#INZE").css("display", "inline");
    });

    $("#con").mouseover(function () {
        $("#INZE").css("display", "none");
        $("#MW").css("display", "inline");
    });
    $("#con").mouseleave(function () {
        $("#MW").css("display", "none");
        $("#INZE").css("display", "inline");
    });

    $(".skipper").mouseover(function () {
        $("#INZE").css("display", "none");
        $("#SUSA").css("display", "inline");
    });
    $(".skipper").mouseleave(function () {
        $("#SUSA").css("display", "none");
        $("#INZE").css("display", "inline");
    });
});
