/**
 * Created by Home on 13.07.2020.
 */


$(document).ready(function () {


    $(window).scroll(
        function () {
            if($(window).scrollTop() > 100 ){
                $(".fast_to_up").addClass("show");
            }
            else{
                $(".fast_to_up").removeClass("show");
            }
        }
    );

    $('.fast_to_up').on('click', function () {
        $('html, bosy').animate({scrollTop: 0}, '1000');
        e.preventDefault();
    })

/*

// установим обработчик события resize
    $(window).resize(function(e){

        var width = e.currentTarget.innerWidth;
        console.log(width)

    });

*/

$(".burger").click(function(){ // задаем функцию при нажатиии на элемент <button>
    $(".burger").toggleClass('hide'); // удаляем, или добавляем элементу <p> два класса
    $("nav").toggleClass('show'); // удаляем, или добавляем элементу <p> два класса
});


$("nav").click(function(){ // задаем функцию при нажатиии на элемент <button>
    $(".burger").toggleClass('hide'); // удаляем, или добавляем элементу <p> два класса
    $("nav").toggleClass('show'); // удаляем, или добавляем элементу <p> два класса
});





    $("body").on('click', '[href*="#"]', function(e){
        var fixed_offset = 100;
        $('html,body').stop().animate({ scrollTop: $(this.hash).offset().top - fixed_offset }, 1000);
        e.preventDefault();
    });






});