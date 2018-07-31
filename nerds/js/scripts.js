// слайдер работа
$(document).ready(function(){
  $('.slider').slick({
    dots: true,
    arrows: false,
    appendDots: ".slider__controls",
    accessibility: true,
  });
});
var modalmaphidden = document.querySelector(".map img");
modalmaphidden.classList.add("visually-hidden");

var writeUs = document.querySelector(".btn-write-us");
var popup = document.querySelector(".modal-write-us");
var close = document.querySelector(".btn-close");
var login = popup.querySelector("[name=login]");
var email = popup.querySelector("[name=email]");
var isStorageSupport = true;
var storage = "";
try {
  storage = localStorage.getItem("login");
} catch(err) {
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
close.addEventListener("click", function(evt){
  evt.preventDefault();
  popup.classList.remove("modal-show");
});
window.addEventListener("keydown", function(evt){
  if(evt.keyCode === 27) {
    if(popup.classList.contains("modal-show")) {
      evt.preventDefault();
      popup.classList.remove("modal-show");
    }
  }
});
