$(document).ready(function () {
    $("#01").mouseover(function () {
        $("#SUSA").css("display", "none");
        $("#INZE").css("display", "inline");
    });
    $("#01").mouseleave(function () {
        $("#INZE").css("display", "none");
        $("#SUSA").css("display", "inline");
    });
    $("#03").mouseover(function () {
        $("#SUSA").css("display", "none");
        $("#MOT").css("display", "inline");
    });
    $("#03").mouseleave(function () {
        $("#MOT").css("display", "none");
        $("#SUSA").css("display", "inline");
    });
    $("#04").mouseover(function () {
        $("#SUSA").css("display", "none");
        $("#DIL").css("display", "inline");
    });
    $("#04").mouseleave(function () {
        $("#DIL").css("display", "none");
        $("#SUSA").css("display", "inline");
    });

    $("#con").mouseover(function () {
        $("#SUSA").css("display", "none");
        $("#MW").css("display", "inline");
    });
    $("#con").mouseleave(function () {
        $("#MW").css("display", "none");
        $("#SUSA").css("display", "inline");
    });

    $(".skipper").mouseover(function () {
        $("#SUSA").css("display", "none");
        $("#MOT").css("display", "inline");
    });
    $(".skipper").mouseleave(function () {
        $("#MOT").css("display", "none");
        $("#SUSA").css("display", "inline");
    });
});
