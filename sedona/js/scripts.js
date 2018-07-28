// Активация инпута по кнопке и открытие
  let $btn = $('#btn_arrival-date'),
  	$input = $('#arrival-date'),
  	dp = $input.datepicker().data('datepicker');

    $btn.on('click', function(){
    	dp.show();
    	$input.focus();
    });
  let $bt = $('#btn_departure-date'),
          $inpu = $('#date-departure'),
          bb = $inpu.datepicker().data('datepicker');

          $bt.on('click', function(){
      	bb.show();
      	$inpu.focus();
      });
$('.datepicker-here').datepicker({
    // Можно выбрать тольо даты, идущие за сегодняшним днем, включая сегодня
    minDate: new Date()
});
// функция принимающая обьекты dom - кнопки плюс 1 и минус 1, 1 место вывода числа, задает их функционал и соотношение
	function ButtonsCounter(btnPlus, btnMinus, output) {
		// кнопка минус 1
		btnMinus.bind('click', function(event) {
			event.preventDefault();
			var value = parseInt(output.val(), 10);
			if (isNaN(value) || value <= 0) {
				value = 0;
			}
			else {
				value--;
			}
			output.val(value);
		});
		// кнопка плюс 1
		btnPlus.bind('click', function(event) {
			event.preventDefault();
			var value = parseInt(output.val(), 10);
			if (isNaN(value) || value < 0) {
				value = 0;
			}
			else {
				value++;
			}
			output.val(value);
		});
	}
	// использование вышележащей функции для кнопок в меню поиска на главной странице
	ButtonsCounter($('#adult-plus'), $('#adult-minus'), $('#adults'));
	ButtonsCounter($('#kids-plus'), $('#kids-minus'), $('#children'));
// скрываю картинку
var modalmaphidden = document.querySelector(".map img");
modalmaphidden.classList.add("visually-hidden");
// открытие и закрытие поиска
var openSearch = document.querySelector(".button-search");
var forma = document.querySelector(".form-search")
  openSearch.addEventListener("click", function(evt) {
  evt.preventDefault();
  forma.classList.toggle("modal-show");
});
