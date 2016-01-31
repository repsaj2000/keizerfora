$(document).ready(function() {
    if($(document).width() < 768) {
        $(".cool").addClass("container");
        $(".cool").removeClass("limit400");
    }else{
        $(".cool").addClass("limit400");
        $(".cool").removeClass("container");
    }
})
