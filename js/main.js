/* Filter*/ 
const sidebarToggleBtn = document.querySelector('.menu-icon-active');
const menuIcon = document.querySelector('.menu-icon');
const sidebar = document.querySelector('.sidebar');


document.querySelector('.menu-icon-wrapper').onclick = function(){
 menuIcon.classList.toggle('menu-icon-active');
 sidebar.classList.toggle('sidebar--mobile-active');
};

/* Show cards*/ 
const btnShowMoreCards = document.querySelector('.btn-more');
const hiddenCards = document.querySelectorAll('.card-link--hidden');

btnShowMoreCards.addEventListener('click', function(){
  hiddenCards.forEach(function(card){
    card.classList.remove('card-link--hidden');
   })
})

/* Show widgets*/ 
const widgets = document.querySelectorAll('.widget');

widgets.forEach(function(widget){
  widget.addEventListener('click', function(e){
    if (e.target.classList.contains('widget__title')){
      e.target.classList.toggle('widget__title-activ')
      e.target.nextElementSibling.classList.toggle('widget__body--hidden');
    }
  })
})

/*locaton "любая"*/ 
const checkBoxAny = document.querySelector('#location-05');
const topLocationCheckBoxes =  document.querySelectorAll('[data-location-param]');

/*выбор кнопки любая и отклюение других checkbox*/ 
checkBoxAny.addEventListener('change', function(){
  if(checkBoxAny.checked){
      topLocationCheckBoxes.forEach(function(item){
      item.checked = false;
    });
  }
})

/* отклбчаем кнопку любая при выборе других параметров*/ 
topLocationCheckBoxes.forEach(function(item){
  item.addEventListener('change', function(){
    if(checkBoxAny.checked){
    checkBoxAny.checked = false
    };
  })
})

/* Показать еще 3 доп опции с чекбоксами в фильтре */
const showMoreOptions = document.querySelector('.widget__btn-show-hidden');
const hiddenCheckBoxes = document.querySelectorAll('.checkbox--hidden');

showMoreOptions.onclick = function (e) {
    e.preventDefault();
    
    // Если блоки были скрыты - значит показываем
    if (showMoreOptions.dataset.options == 'hidden') {
		hiddenCheckBoxes.forEach(function (item) {
			item.style.display = 'block';
		});
		showMoreOptions.innerText = 'Скрыть дополнительные опции';
		showMoreOptions.dataset.options = 'visible';
	}
	// Если блоки были видны - значит скрываем
	else if (showMoreOptions.dataset.options == 'visible') {
		hiddenCheckBoxes.forEach(function (item) {
			item.style.display = 'none';
		});
		showMoreOptions.innerText = 'Показать ещё';
		showMoreOptions.dataset.options = 'hidden';
	}

}
