$(document).ready(function () {
    $(".dropup-content a, #L_INZE, #L_SUSA, #L_MOT, #L_DIL, #L_MIW").mouseover(function () { // Hover DropupContent =Show Title
        $("#PH").css("display", "none");
        $("#slash").css("display", "inline");
    });
    $(".dropup-content a, #L_INZE, #L_SUSA, #L_MOT, #L_DIL, #L_MIW").mouseleave(function () {
        $("#PH").css("display", "inline");
        $("#slash").css("display", "none");
    });


    $("#01, #L_INZE").mouseover(function () {
        $("#INZE").css("display", "inline");
        $("#L_SUSA").css("opacity", "0");
        $("#L_MOT").css("opacity", "0");
        $("#L_DIL").css("opacity", "0");
        $("#L_MW").css("opacity", "0");
    });
    $("#01, #L_INZE").mouseleave(function () {
        $("#INZE").css("display", "none");
        $("#L_SUSA").css("opacity", "1");
        $("#L_MOT").css("opacity", "1");
        $("#L_DIL").css("opacity", "1");
        $("#L_MW").css("opacity", "1");
    });


    $("#02, #L_SUSA").mouseover(function () {
        $("#SUSA").css("display", "inline");
        $("#L_INZE").css("opacity", "0");
        $("#L_MOT").css("opacity", "0");
        $("#L_DIL").css("opacity", "0");
        $("#L_MW").css("opacity", "0");
    });
    $("#02, #L_SUSA").mouseleave(function () {
        $("#SUSA").css("display", "none");
        $("#L_INZE").css("opacity", "1");
        $("#L_MOT").css("opacity", "1");
        $("#L_DIL").css("opacity", "1");
        $("#L_MW").css("opacity", "1");
    });


    $("#03, #L_MOT").mouseover(function () {
        $("#MOT").css("display", "inline");
        $("#L_INZE").css("opacity", "0");
        $("#L_SUSA").css("opacity", "0");
        $("#L_DIL").css("opacity", "0");
        $("#L_MW").css("opacity", "0");
    });
    $("#03, #L_MOT").mouseleave(function () {
        $("#MOT").css("display", "none");
        $("#L_INZE").css("opacity", "1");
        $("#L_SUSA").css("opacity", "1");
        $("#L_DIL").css("opacity", "1");
        $("#L_MW").css("opacity", "1");
    });


    $("#04, #L_DIL").mouseover(function () {
        $("#DIL").css("display", "inline");
        $("#L_INZE").css("opacity", "0");
        $("#L_SUSA").css("opacity", "0");
        $("#L_MOT").css("opacity", "0");
        $("#L_MW").css("opacity", "0");
    });
    $("#04, #L_DIL").mouseleave(function () {
        $("#DIL").css("display", "none");
        $("#L_INZE").css("opacity", "1");
        $("#L_SUSA").css("opacity", "1");
        $("#L_MOT").css("opacity", "1");
        $("#L_MW").css("opacity", "1");
    });


    $("#con, #L_MW").mouseover(function () {
        $("#PH").css("display", "none");
        $("#slash").css("display", "inline");
        $("#MW").css("display", "inline");
        $("#L_INZE").css("opacity", "0");
        $("#L_SUSA").css("opacity", "0");
        $("#L_MOT").css("opacity", "0");
        $("#L_DIL").css("opacity", "0");
    });
    $("#con, #L_MW").mouseleave(function () {
        $("#PH").css("display", "inline");
        $("#slash").css("display", "none");
        $("#MW").css("display", "none");
        $("#L_INZE").css("opacity", "1");
        $("#L_SUSA").css("opacity", "1");
        $("#L_MOT").css("opacity", "1");
        $("#L_DIL").css("opacity", "1");
    });
});
