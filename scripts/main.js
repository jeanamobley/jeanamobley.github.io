$(document).ready(function(){
    $('h2.ic3401text_big').addClass('hide_big');
    $('.ic3401_thumbnail_big').hover(function () {
        $(this).stop().animate({
        }, 200);
        $('h2.ic3401text_big').removeClass('hide_big');
        $('h2.ic3401text_big').css('opacity', '0.99');
        $('img.ic3401_img_big').css('opacity', '0.3');
    }, function() {
        $(this).stop().animate({
        }, 200);
        $('h2.ic3401text_big').addClass('hide_big');
        $('img.ic3401_img_big').css('opacity', '1');
    });
});



$(document).ready(function() {
    $('h2.hipcitytext_big').addClass('hide_big');
    $('.hipcity_thumbnail_big').hover(function () {
        $(this).stop().animate({
        }, 200);
        $('h2.hipcitytext_big').removeClass('hide_big');
        $('h2.hipcitytext_big').css('opacity', '0.99');
        $('img.hipcity_img_big').css('opacity', '0.3');
    }, function(){
        $(this).stop().animate({
        }, 200);
        $('h2.hipcitytext_big').addClass('hide_big');
        $('img.hipcity_img_big').css('opacity', '1');
    });
});


$(document).ready(function() {
    $('h2.drwctext_big').addClass('hide_big');
    $('.drwc_thumbnail_big').hover(function () {
        $(this).stop().animate({
        }, 200);
        $('h2.drwctext_big').removeClass('hide_big');
        $('h2.drwctext_big').css('opacity', '0.99');
        $('img.drwc_img_big').css('opacity', '0.3');
    }, function(){
        $(this).stop().animate({
        }, 200);
        $('h2.drwctext_big').addClass('hide_big');
        $('img.drwc_img_big').css('opacity', '1');
    });
});

$(document).ready(function(){
    $('h2.firsthandtext_big').addClass('hide_big');
    $('.firsthand_thumbnail_big').hover(function () {
        $(this).stop().animate({
        }, 200);
        $('h2.firsthandtext_big').removeClass('hide_big');
        $('h2.firsthandtext_big').css('opacity', '0.99');
        $('img.firsthand_img_big').css('opacity', '0.3');
    }, function(){
        $(this).stop().animate({
        }, 200);
        $('h2.firsthandtext_big').addClass('hide_big');
        $('img.firsthand_img_big').css('opacity', '1');
    });
});




//small thumbnails




$(document).ready(function(){
    $('h2.ic3401text').addClass('hide');
    $('.ic3401_thumbnail').hover(function () {
        $(this).stop().animate({
        }, 200);
        $('h2.ic3401text').removeClass('hide');
        $('h2.ic3401text').css('opacity', '0.99');
        $('img.ic3401_img').css('opacity', '0.3');
    }, function() {
        $(this).stop().animate({
        }, 200);
        $('h2.ic3401text').addClass('hide');
        $('img.ic3401_img').css('opacity', '1');
    });
});



$(document).ready(function(){
    $('h2.sciencecentertext').addClass('hide');
    $('.sciencecenter_thumbnail').hover(function () {
        $(this).stop().animate({
        }, 200);
        $('h2.sciencecentertext').removeClass('hide');
        $('h2.sciencecentertext').css('opacity', '0.99');
        $('img.sciencecenter_img').css('opacity', '0.3');
    }, function () {
        $(this).stop().animate({
        }, 200);
        $('h2.sciencecentertext').addClass('hide');
        $('img.sciencecenter_img').css('opacity', '1');
    });
});



$(document).ready(function(){
    $('h2.firsthandtext').addClass('hide');
    $('.firsthand_thumbnail').hover(function () {
        $(this).stop().animate({
        }, 200);
        $('h2.firsthandtext').removeClass('hide');
        $('h2.firsthandtext').css('opacity', '0.99');
        $('img.firsthand_img').css('opacity', '0.3');
    }, function(){
        $(this).stop().animate({
        }, 200);
        $('h2.firsthandtext').addClass('hide');
        $('img.firsthand_img').css('opacity', '1');
    });
});




$(document).ready(function() {
    $('h2.dmdtext').addClass('hide');
    $('.dmd_thumbnail').hover(function () {
        $(this).stop().animate({
        }, 200);
        $('h2.dmdtext').removeClass('hide');
        $('h2.dmdtext').css('opacity', '0.99');
        $('img.dmd_img').css('opacity', '0.3');
    }, function(){
        $(this).stop().animate({
        }, 200);
        $('h2.dmdtext').addClass('hide');
        $('img.dmd_img').css('opacity', '1');
    });
});



$(document).ready(function() {
    $('h2.drwctext').addClass('hide');
    $('.drwc_thumbnail').hover(function () {
        $(this).stop().animate({
        }, 200);
        $('h2.drwctext').removeClass('hide');
        $('h2.drwctext').css('opacity', '0.99');
        $('img.drwc_img').css('opacity', '0.3');
    }, function(){
        $(this).stop().animate({
        }, 200);
        $('h2.drwctext').addClass('hide');
        $('img.drwc_img').css('opacity', '1');
    });
});


$(document).ready(function() {
    $('h2.hipcitytext').addClass('hide');
    $('.hipcity_thumbnail').hover(function () {
        $(this).stop().animate({
        }, 200);
        $('h2.hipcitytext').removeClass('hide');
        $('h2.hipcitytext').css('opacity', '0.99');
        $('img.hipcity_img').css('opacity', '0.3');
    }, function(){
        $(this).stop().animate({
        }, 200);
        $('h2.hipcitytext').addClass('hide');
        $('img.hipcity_img').css('opacity', '1');
    });
});


        $(window).load(function(){
            var w = $(window).width();
            if(w <= 699) {
                $('.thumbnails_big img').css('opacity', '0.4');
                $('.thumbnails_big img').hover(function(){
                    $('.thumbnails_big img').css('opacity', '0.4');
                })
             }
        });

        $(window).load(function(){
            var w = $(window).width();
            if(w <= 699) {
                $('.thumbnails img').css('opacity', '0.4');
                $('.thumbnails img').hover(function(){
                    $('.thumbnails img').css('opacity', '0.4');
                })
             }
        });


$(document).ready(function() {
        //CLICK EVENT TO OPEN HAMBURGER NAV
        var pull = $('#pull');
        var menu = $('nav ul');
        var menuHeight = menu.height();

        var slideLeft = false;

        var w = $(window).width();
     

        $("#nav-button").on('click', function(e) {
            e.preventDefault();
            console.log('hello');
            
            if(slideLeft === false){
                slideLeft = true;
                $('nav').animate({
                    left: '0vw'
                });
                $('body').css('overflow', 'hidden');
                menu.slideToggle();
                $('.ic3401text_big').css('z-index', '1');
                $('.ic3401text').css('z-index', '1');

            } else {
                slideLeft = false;
                $('nav').animate({
                    left: '100vw'
                });
                menu.slideToggle();
                $('body').css('overflow', 'auto');
            }
        });


        $('#nav-button').click(function(){
            $(this).toggleClass('open');
        });

    $(window).resize(function(){
    var w = $(window).width();
    if(w > 320 && menu.is(':hidden')) {
        menu.removeAttr('style');
    }
    }); 
});


