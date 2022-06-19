jQuery(function() {
    "use strict";

    const list = $('.js-list');
    const items = $('.js-item');
    const inputSearch = $('.js-input_search');
    const buttonClear = $('.btn_clear');
    const array_of_labeled_strings = [];

    inputSearch.focus();

    /** clear html tag <mark></mark> */
    const clearMarkHtmlTag = elem =>
        Array.from(elem.children)
            .forEach(node => node.innerHTML = node.innerText.replace(/<\/?mark>/, ''))

    /** set html tag <mark></mark> */
    const setMarkHtmlTag = (elem, findText) => {
        Array.from(elem.children).forEach(node => {
            for (const match of node.innerText.matchAll(new RegExp(findText, 'gi'))) {
                const strBefore = match.input.substring(0, match.index);
                const strAfter = match.input.substring(match.index + match[0].length);
                node.innerHTML = strBefore + `<mark>${match[0]}</mark>` + strAfter;
            }
        });

        array_of_labeled_strings.push(elem);
    }

    /** clearing all marks in the list of marked lines */
    const clearAllMarks = () => {
        array_of_labeled_strings.forEach(node => {
            clearMarkHtmlTag(node);
        })

        array_of_labeled_strings.length = 0;
    }

    /** Form Search, Input min 2 liters. Search automatic. */
    inputSearch.on('input', function( event ) {
        let { value } = event.target;
        searchElementInLists( value );

        if ( value.length === 0 ) {
            list.html(items); // При удалении последнего символа, показывать весь список
            clearAllMarks();
        }
    });

    /** Function for Search Objects in find text */
    function searchElementInLists( findText ) {
        const findElements = []; // массив найденых элементов

        // Обход по объекту
        items.each( function (num, elem) {

            clearMarkHtmlTag(elem);

            // Обход по элемета
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
            list.html('');
        } else {
            list.html('');
            // Выводим найденные элементы на экран
            findElements.forEach( (el) => {
                list.append(el);
            });
        }
    }

    /** Очистка поля ввода с восстановлением списка */
    const resetDataHtml = () => {
        inputSearch[0].value = '';
        list.html('');
        list.html(items);
    }

    buttonClear.on('click', resetDataHtml);
    // TODO: при нажатии на Escape key не очищаются помеченные <mark></mark> строки
    document.addEventListener ('keydown', event => {
        if (event.key === 'Escape') resetDataHtml();
    });
    // var evt = new KeyboardEvent('keydown', {'keyCode':65, 'which':65});
    // document.dispatchEvent(evt);

    /** Scrolls down, hide, scrolls up, shows navigation bar + background */
    let prevScrollpos = window.pageYOffset;
    let mainMenu = document.querySelector(".header");
    window.onscroll = () => {
        let currentScrollPos = window.pageYOffset;
        if (prevScrollpos < currentScrollPos) {
            mainMenu.style.marginTop = "-95px";
        } else {
            mainMenu.style.marginTop = "0px";
        }
        prevScrollpos = currentScrollPos;
    }
});

