var buyItem = document.querySelectorAll('.buy');
var openBasket = document.querySelector('.cart__popup');
var closeBasket = openBasket.querySelector('.cart-btn-close');
var cancelBasket = openBasket.querySelector('.cart-continue');
var submitBasket = openBasket.querySelector('.cart--submit');

for (var i = 0; i < buyItem.length; i++) {
  buyItem[i].addEventListener('click', function(evt) {
    evt.preventDefault();
    openBasket.classList.add('modal-cart');
  });
}

closeBasket.addEventListener('click', function(evt) {
  evt.preventDefault();
  openBasket.classList.remove('modal-cart');
});

cancelBasket.addEventListener('click', function(evt) {
  evt.preventDefault();
  openBasket.classList.remove('modal-cart');
});

submitBasket.addEventListener('click', function(evt) {
  evt.preventDefault();
  openBasket.classList.remove('modal-cart');
});

window.addEventListener('keydown', function(evt) {
  if (evt.keyCode === 27) {
    if (openBasket.classList.contains('modal-cart')) {
      openBasket.classList.remove('modal-cart');
    }
  }
});
$(document).ready(function() {
  $('.promo__slider').slick({
    dots: true,
    arrows: true,
    appendDots: ".slider__controls",
    accessibility: true,
  });
});
$(document).ready(function() {
  $('.services__slider').slick({
    dots: true,
    arrows: false,
    appendDots: ".services-slider__controls",
    accessibility: true,
    dotsClass: "services__dots",
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: "linear",
    customPaging: function(slider, i) {
      var slidernav = $(slider.$slides[i]).data('slidernav');
      return "<button>" + slidernav + "</button>";
    },
  });
});

var writeUs = document.querySelector(".contacts__btn");
var popup = document.querySelector(".writeus__popup");
var close = document.querySelector(".btn-close");
var login = popup.querySelector("[name=name]");
var email = popup.querySelector("[name=e-mail]");
var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("login");
} catch (err) {
  isStorageSupport = false;
}
writeUs.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.add("modal-show");
  if (storage) {
    login.value = storage;
    email.focus();
  } else {
    login.focus();
  }
});
close.addEventListener("click", function(evt) {
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
});
var map = document.querySelector(".contacts__map");
var mapPopup = document.querySelector(".map-popup");
var mapClose = document.querySelector(".map-btn-close");
map.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.add("modal-map");
});
mapClose.addEventListener("click", function(evt) {
  evt.preventDefault();
  mapPopup.classList.remove("modal-map");
});
window.addEventListener("keydown", function(evt) {
  if (evt.keyCode === 27) {
    if (mapPopup.classList.contains("modal-map")) {
      evt.preventDefault();
      mapPopup.classList.remove("modal-map");
    }
  }
});