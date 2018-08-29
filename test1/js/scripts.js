// Валидация и автофокус номера карты
var inp1 = document.getElementById('card-number1');
var inp2 = document.getElementById('card-number2');
var inp3 = document.getElementById('card-number3');
var inp4 = document.getElementById('card-number4');
var number = inp1.value + inp2.value + inp3.value + inp4.value;
function card(obj) {
    if (obj.value.length == 4) {
        var next = obj.nextSibling;
        while(next.nodeType != 1 && next.nextSibling)
            next = next.nextSibling;
        if (next.nodeType == 1)
            next.focus();
    }
}

function validate(inp) {
inp.value = inp.value.replace(/[^0-9]/, "");
}
// валидация поля владельца карты
function validateHolder(holder) {
holder.value = holder.value.replace(/[^A-Za-z\s-.]+/, "");
}
// общая валидация формы
var btn = document.getElementById('card-btn');
var cvc = document.getElementById('card-cvc');
var owner = document.getElementById('card-holder');

btn.addEventListener('click', function (evt) {
  var inputsCard = [inp4, inp3, inp2, inp1];
   for (var i = 0; i < inputsCard.length; i++) {
     var currentInput = inputsCard[i];
     if (cvc == '' || cvc.value.length !=3) {
       evt.preventDefault();
       cvc.classList.add('invalid');
       cvc.focus();
     } else {
       cvc.classList.remove('invalid');
     }
     if (owner.value.trim() == '' || owner.value.length <=3) {
       evt.preventDefault();
       owner.classList.add('invalid');
       owner.focus();
     } else {
       owner.classList.remove('invalid');
     }
     if (currentInput == '' || currentInput.value.length !=4) {
       evt.preventDefault();
       currentInput.classList.add('invalid');
       currentInput.focus();
     } else if (currentInput.value.length == 4) {
       currentInput.classList.remove('invalid');
     }
   }
});
