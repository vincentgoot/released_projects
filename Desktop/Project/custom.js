$('.carousel-testim').slick({
  infinite: true,
  slidesToShow: 2,
  slidesToScroll: 1,
  vertical: true,
  arrows: true,
  initialSlide: 1,
  // prevArrow: '<button type="button" class="slick-prev prev"><i class="fa fa-angle-down" aria-hidden="true" ></i></button>',
  // nextArrow:'<button type="button" class="slick-next next"><i class="fa fa-angle-up" aria-hidden="true"></i></button>',
  prevArrow: $('prev'),
  nextArrow:$('next'),
  draggable: true
});

$('.prev').click(function(){
  $('.carousel-testim').slick('slickPrev');
  console.log('hello')
})

$('.next').click(function(){
  $('.carousel-testim').slick('slickNext');
});


$('.team-slider').slick({
  slidesToShow: 3,
  slidesToScroll: 1,
  dots: false,
  arrows: false,
  centerMode: true,
  focusOnSelect: true
});

var mySwiper2 = new Swiper ('.s2', {
      // Optional parameters
      loop: false,
      slidesPerView: 1,
      spaceBetween: 200,
      clickable: false,
      autoHeight:true,
      initialSlide: 1,
      on: {
      	init: function () {
      		
      		console.log("6");
      	}
      }
    });

    var mySwiper = new Swiper ('.s1', {
      // Optional parameters
      loop: false,
      slidesPerView: 3,
      spaceBetween: 30,
      clickable: true,
      autoHeight:true,
      slideToClickedSlide: true,
      centeredSlides: true,
      initialSlide: 1,
      on: {
      	slideChange: function () {
      		mySwiper2.slideTo(this.activeIndex); 
      	}
      }
    });

    
	

