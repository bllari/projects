$(document).ready(function() {
  $('.slider').slick({
    dots: true,
    arrows: false,
    appendDots: ".mydots",
    accessibility: true,
    dotsClass: "slider__dots",
    draggable: false,
    infinite: true,
    speed: 000,
    fade: true,
    cssEase: "linear",
  });
});

$(function() {
	$('#slick-slide-control01').on('click', function() {
    	$('body').css('background-color', "#8996a6");
      $('body').css('background-image', "url(img/slider2.png)");
    });
});
$(function() {
	$('#slick-slide-control00').on('click', function() {
    	$('body').css('background-color', "#849d8f");
      $('body').css('background-image', "url(img/slider1.png)");
    });
});
$(function() {
	$('#slick-slide-control02').on('click', function() {
    	$('body').css('background-color', "#9d8b84");
      $('body').css('background-image', "url(img/slider3.png)");
    });
});
