$(document).ready(function() {
  $('.slider').slick({
    dots: true,
    arrows: false,
    appendDots: ".mydots",
    accessibility: true,
    dotsClass: "services__dots",
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
  });
});


$(function() {
	$('#slick-slide-control01').on('click', function() {
    	$('body').css('background-color', "black");
    });
});
$(function() {
	$('#slick-slide-control00').on('click', function() {
    	$('body').css('background-color', "yellow");
    });
});
$(function() {
	$('#slick-slide-control02').on('click', function() {
    	$('body').css('background-color', "grey");
    });
});
