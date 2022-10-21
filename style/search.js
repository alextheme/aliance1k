const list = document.querySelector('.js-list');
const items = document.querySelectorAll('.js-item');
const inputSearch = document.querySelector('.js-input_search');
const buttonClear = document.querySelector('.btn_clear');
const arrayOfLabeledSrings = [];

inputSearch.focus();

/** clear html tag <mark></mark> */
function clearMarkHtmlTag(elem) {
	// console.log(elem)
	Array.from(elem.children).forEach(node => node.innerHTML = node.innerText.replace(/<\/?mark>/, ''))
}


/** set html tag <mark></mark> */
const setMarkHtmlTag = (elem, findText) => {
	Array.from(elem.children).forEach(node => {
		for (const match of node.innerText.matchAll(new RegExp(findText, 'gi'))) {
			const strBefore = match.input.substring(0, match.index);
			const strAfter = match.input.substring(match.index + match[0].length);
			node.innerHTML = strBefore + `<mark>${match[0]}</mark>` + strAfter;
		}
	});

	arrayOfLabeledSrings.push(elem);
}

/** clearing all marks in the list of marked lines */
const clearAllMarks = () => {
	console.log(1)
	arrayOfLabeledSrings.forEach(node => {
		clearMarkHtmlTag(node);
	})

	arrayOfLabeledSrings.length = 0;
}

/** Form Search, Input min 2 liters. Search automatic. */
inputSearch.addEventListener('input', function( event ) {

	let { value } = event.target;
	if (value.length > 1) { // Рекомендую 1
		searchElementInLists( value );
	}

	if ( value.length === 0 ) {
		items.forEach( (el) => {
			list.append(el);
		}); // При удалении последнего символа, показывать весь список
		clearAllMarks();
	}
});

/** Function for Search Objects in find text */
function searchElementInLists( findText ) {
	const findElements = []; // массив найденых элементов

	// Обход по объекту
	items.forEach( function (elem, num) {

		clearMarkHtmlTag(elem);

		// Обход по элеметам
		for ( let key in elem ) {
			// Выбираем только текст
			if ( key === 'innerText') {
				let str = elem[key].toLowerCase();
				// поиск подстроки в строке
				if( str.indexOf(findText.toLowerCase()) > -1 ) {
					setMarkHtmlTag(elem, findText);
					findElements.push( elem ); // складываем найденое в массив
				}
			}
		}
	});

	if ( !findElements.length ) { // если нет найденных элементов, очищаем список
		list.innerHTML = '';
	} else {
		list.innerHTML = '';
		// Выводим найденные элементы на экран
		findElements.forEach( (el) => {
			list.append(el);
		});
	}
}

/** Очистка поля ввода с восстановлением списка */
const resetDataHtml = () => {
	inputSearch.value = '';
	items.forEach( (el) => {
		list.append(el);
	});
	clearAllMarks();
}

buttonClear.addEventListener('click', resetDataHtml);

document.addEventListener ('keydown', event => {
	if (event.key === 'Escape') resetDataHtml();
});

/** Scrolls down, hide, scrolls up, shows navigation bar + background */
let prevScrollPosition = window.scrollY;

window.onscroll = () => {
	let currentScrollPosition = window.scrollY;

	if (prevScrollPosition < currentScrollPosition) {
		document.body.classList.add('body--hide_menu_mod');
	} else {
		document.body.classList.remove('body--hide_menu_mod');
	}

	prevScrollPosition = currentScrollPosition;


	if (window.scrollY > 400) {
		document.body.classList.add('body--scroll_mod');
	} else {
		document.body.classList.remove('body--scroll_mod');
	}
}

// button go top
document.querySelector('#go-top').addEventListener(() => {
	window.scroll({top: 0, left: 0, behavior: 'smooth'});
})

