$(document).ready(function() {
    if($(document).width() < 768) {
        $("#body").addClass("container");
        $("#body").removeClass("limit400");
    }else{
        $("#body").addClass("limit400");
        $("#body").removeClass("container");
    }
})
