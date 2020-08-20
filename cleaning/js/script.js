/**
 * Created by Home on 09.08.2020.
 */

$(document).ready(function(){




    $('.slider__box').slick({
        /*speed: 500,*/
        fade: true,
        cssEase: 'linear',
        /*autoplay: true*/
        //arrows: true,
        dots: true,
    });


    $(window).on('load resize', function() {
        var width = $( window ).width();
        var arrow
        if(width < 380){
            display = 'none'; $('button.slick-prev.slick-arrow').hide(); $('button.slick-next.slick-arrow').hide();
            display_dots = 'block'; $('ul.slick-dots').show();}

        else{
            display = 'block'; $('button.slick-prev.slick-arrow').show(); $('button.slick-next.slick-arrow').show();
            display_dots = 'none'; $('ul.slick-dots').hide();};

/*        $('button.slick-prev.slick-arrow').css('display',display);
        $('button.slick-next.slick-arrow').css('display',display);*/

/*        $('ul.slick-dots').css('display',display_dots);
        $('ul.slick-dots').css('display',display_dots);*/

    });






/*
    $(window).on('load resize', function() {
        // $( "body" ).prepend( "<div>" + $( window ).width() + "</div>" );
        console.log($( window ).width())
    });
*/






/*    $('.slider__box').slick('setPosition');

    $('.slider__box').slick('slickAdd', '<div>qwerty</div>');*/

    $('.slider__box').on('beforeChange', function (event, slick, currentSlide,nextSlide) {
/*       console.log('- event');
       console.log(event);
       console.log('- slick');
       console.log(slick);
       console.log('- currentSlide');
       console.log(currentSlide);
       console.log('- nextSlide');
       console.log(nextSlide);
        $('.box-item__title_active').css('border', '3px solid green');*/
    });

});