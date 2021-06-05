 
$('.slide-banner').slick({
    autoplay: false,
    arrow: false,
    dots: true,
    slidesToShow: 1,
    slidesToScroll: 1, 
    prevArrow: '',
    nextArrow: '',
});  

if($(window).innerWidth() >= 1024){
    $(document).ready(function(){
       $(window).bind('scroll', function() {
             if ($(window).scrollTop() > 37) {
                 $('.header-menu, main').addClass('fixed');
             }
             else {
                 $('.header-menu, main').removeClass('fixed');
             }
        });
    });

    new WOW().init();
}
if($(window).innerWidth() <= 1023){
    $('.list-project .row').slick({
        autoplay: false,
        arrow: false,
        dots: true,
        slidesToShow: 1,
        slidesToScroll: 1, 
        prevArrow: '',
        nextArrow: '',
        responsive: [
            {
                breakpoint: 1023, 
                settings: {
                    slidesToShow: 3,
                    slidesToScroll: 1,
                } 
            }, 
            {
                breakpoint: 767, 
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                } 
            }, 
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 1,
                    slidesToScroll: 1,
                }
            }
        ]
    });  
}


$('.clc-menu').hover(function() {
    var tab_id = $(this).attr('data-tab');
    $('.clc-menu').removeClass('menu-active');
    $('.info-menu').removeClass('mega-active');

    $(this).addClass('menu-active');
    $("#"+tab_id).addClass('mega-active');
})


jQuery(document).ready(function( $ ) {
  $("#menu").mmenu({
     "extensions": [
        "fx-menu-zoom"
     ],
     "counters": true
  });
}); 