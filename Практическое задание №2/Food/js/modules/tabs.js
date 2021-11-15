function tabs() {
    const tabs = document.querySelectorAll('.tabheader__item'), //первый ел. оглавление
    tabsContent = document.querySelectorAll('.tabcontent'), //картинки
    tabsParent = document.querySelector('.tabheader__items'); //все елементы массив

    function hideTabContent() { //скрытие ненужных табов
    tabsContent.forEach(item => {
        item.classList.add('hide');
        item.classList.remove('show', 'fade');
    });

    tabs.forEach(item => {
        item.classList.remove('tabheader__item_active');
    });
    }

    function showTabContent(i = 0) { //возвращение табов 
    tabsContent[i].classList.add('show', 'fade');
    tabsContent[i].classList.remove('hide');
    tabs[i].classList.add('tabheader__item_active');
    }

    hideTabContent();
    showTabContent();

    tabsParent.addEventListener('click', (event) => { 
        const target = event.target;
            //проверка кликнули ли мы именно на надпись,ане на родителя(пусто)
        if(target && target.classList.contains('tabheader__item')) {
            tabs.forEach((item, i) => { //проходим по эл. псевдомассива
                if(target == item) { //если эл. что мы выбрали совпал с элементом массива
                    hideTabContent();
                    showTabContent(i); //номер эл. который совпал 
                } 
            });
        }
    });
}

module.exports = tabs;