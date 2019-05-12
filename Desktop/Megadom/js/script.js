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
