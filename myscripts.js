function openPage(pageUrl){
    window.open(pageUrl,"_self");
}

function openNewPage(pageUrl){
    window.open(pageUrl);
}

$(document).ready(function(){
    $("#softwares").click(function(){
        $("#content").load("softwares/softwares.html #content");
    });
    $("#literature").click(function(){
        $("#content").load("literature/literature.html #content");
    });
    $("#notes").click(function(){
        $("#content").load("notes/notes.html #content");
    });

    //Literature
    $(document).ready(function(){
        $("#TransparentAlloys").click(function(){
            $("#content").load("TransparentAlloys/index.html #content");
        });
    });
});