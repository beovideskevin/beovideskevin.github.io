$( document ).ready(function() {
    
    $(".pages").hide();
    
    $(".nav_link").click(function(e) {
        $(window).scrollTop(0);
        let hide = $(this).attr('data-hide');
        let show = $(this).attr('data-show');
        let show_left = $(this).attr('data-show-left');
        let show_right = $(this).attr('data-show-right');
        $("#" + hide).hide();
        $("#" + show).fadeIn();
        if (show_left) {
            $('#' + show_left).addClass('animated slideInLeft');
        }
        if (show_right) {
            $('#' + show_right).addClass('animated slideInRight');
        }
        window.location.hash = "page";
    });


    $(".back").click(function(){
        history.back();
    });
});

window.addEventListener("hashchange", function() {
    let isIndex = window.location.hash == "#" || window.location.hash == "" ;
    if (isIndex) {
        $(window).scrollTop(0);
        $(".pages").hide();
        $("#index").fadeIn();
        $('#index_left').addClass('animated slideInLeft');
        $('#index_right').addClass('animated slideInRight');
    }
});