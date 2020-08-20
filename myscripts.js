function openPage(pageUrl){
    window.open(pageUrl,"_self");
}

function openNewPage(pageUrl){
    window.open(pageUrl);
}

$(document).ready( function() {
    $("#softwares").on("click", function() {
        $("#content").load("softwares/softwares.html");
    });

    $("#notes").on("click", function() {
        $("#content").load("notes/notes.html");
    });

    $("#notes_ms").on("click", function() {
        $("#content").load("notes/ms.html");
    });
});