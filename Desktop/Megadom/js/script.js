var menubtn = $('.burger-menu');
var mobmenu = $('.mob-menu');

menubtn.on('click', function(e){
    e.preventDefault();
    mobmenu.css({'transform' : 'translateX(0%)'})
    $('#shade').css({'display' : 'block'});
});

$('#shade').on('click', function (){
    mobmenu.css({'transform' : 'translateX(-100%)'});
    $('#shade').css({'display' : 'none'});
});

$('#close').on('click', function (){
    mobmenu.css({'transform' : 'translateX(-100%)'});
    $('#shade').css({'display' : 'none'});
});


$('.search-button').on('click', function(){
    $('.search-input').toggle(100);
});

$('.bg-video').slick({
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    infinite: true,
    adaptiveHeight: true,
    arrows: false,
    pauseOnFocus: false,
    pauseOnHover: false,
    asNavFor: '.dots',
    draggable: false,
    swipe: true

});

$('.dots').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    asNavFor: '.bg-video',
    dots: true,
    centerMode: true,
    focusOnSelect: true,
    pauseOnFocus: false
  });