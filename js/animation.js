$(document).ready(function () {
    $("#l_mot").mouseover(function () { // Hover Moving Logo=Show Title
        $("#MOT").css("display", "inline");
    });
    $("#l_mot").mouseleave(function () {
        $("#MOT").css("display", "none");
    });
    $("#l_mot").mouseover(function () {
        $("#slash").css("display", "inline");
    });
    $("#l_mot").mouseleave(function () {
        $("#slash").css("display", "none");
    });
});
