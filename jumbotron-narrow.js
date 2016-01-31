$(document).ready(function() {
    if($(document).width() < 768) {
        $('#cool').addClass('container');
        $('#cool').removeClass('limit400');
        $('#2cool').addClass('container');
        $('#2cool').removeClass('limit400');
    }else{
        $('#cool').addClass('limit400');
        $('#cool').removeClass('container');
        $('#2cool').addClass('limit400');
        $('#2cool').removeClass('container');
    }
})

$(document).ready(function(){
    if($(document).width() < 768) {
        $('.col-md-7').css("margin-left", "-3px");
    }else{
        $('.col-md-7').css("margin-left", "15px");
    };
    
    
})
