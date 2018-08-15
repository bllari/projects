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

    ymaps.ready(function () {
    var myMap = new ymaps.Map('map', {
            center: [59.938870, 30.325791],
            zoom: 17,
            controls: []
        }, {
            searchControlProvider: 'yandex#search'
        }),

        // Создаём макет содержимого.
        MyIconContentLayout = ymaps.templateLayoutFactory.createClass(
            '<div style="color: #FFFFFF; font-weight: bold;">$[properties.iconContent]</div>'
        ),

        myPlacemark = new ymaps.Placemark([59.938662, 30.323079], {
            hintContent: 'Shop Gllacy',
            balloonContent: 'Ул. Большая Конюшенная 19/8'
        }, {
            // Опции.
            // Необходимо указать данный тип макета.
            iconLayout: 'default#image',
            // Своё изображение иконки метки.
            iconImageHref: 'img/metka.png',
            // Размеры метки.
            iconImageSize: [218, 142],
            // Смещение левого верхнего угла иконки относительно
            // её "ножки" (точки привязки).
            iconImageOffset: [-45, -140]
        });
    myMap.geoObjects
        .add(myPlacemark);
});
