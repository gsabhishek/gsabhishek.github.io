function openPage(pageUrl){
    window.open(pageUrl,"_self");
}

function openNewPage(pageUrl){
    window.open(pageUrl);
}

$(document).ready( function() {
$("#softwares").on("click", function() {
    $("#content").load("file://softwares/softwares.html");
});

$("#notes").on("click", function() {
    $("#content").load("file://notes/notes.html");
});

$("#notes_ms").on("click", function() {
    $("#content").load("file://notes/ms.html");
});
});