'use strict';

document.addEventListener('DOMContentLoaded', () => {
    const movieDB = {
        movies: [
            "Логан",
            "Лига справедливости",
            "Ла-ла лэнд",
            "Одержимость",
            "Скотт Пилигрим против..."
        ]
    };
    
    const adv = document.querySelectorAll('.promo__adv img'),
          adv2 = document.getElementsByClassName('promo__adv-title'),
          poster = document.querySelector('.promo__bg'),
          genre = poster.querySelector('.promo__genre'),
          movieList = document.querySelector('.promo__interactive-list'),
          addForm = document.querySelector('form.add'),
          addInput = addForm.querySelector('.adding__input'),
          checkbox = addForm.querySelector('[type="checkbox"]');

    addForm.addEventListener('submit', (event) => { //добавление элементов 
        event.preventDefault();

        let newFilm = addInput.value;
        const favorite = checkbox.checked; //булинование значение

        if(newFilm) {
            if(newFilm.length > 21) {
                newFilm = `${newFilm.substring(0, 22)}...`;
            }

            if(favorite) {
                console.log('Добавляем любимый фильм!');
            }

            movieDB.movies.push(newFilm);
            sortArr(movieDB.movies);

            createMovieList(movieDB.movies, movieList);
        }

        event.target.reset();
    });

    const deleteAdv = (arr) => { //удаление рекламы
        arr.forEach(item => {
            item.remove();
        });
    };

    const makeChanges = () => { //прочее 
        adv2[0].remove();
    
        genre.textContent = 'Драма';
         
        poster.style.backgroundImage = 'url("img/bg.jpg")';
    };
    
    const sortArr = (arr) => {
        arr.sort();
    };
    
    //console.log(poster.innerHTML);
    
    function createMovieList(films, parent) { //создание новых элементов 
        sortArr(films);
        parent.innerHTML = '';

        films.forEach((film, i) => {
            parent.innerHTML += `
                <li class="promo__interactive-item"> ${i + 1} ${film}
                    <div class="delete"></div>
                </li>
            `;
        });

        document.querySelectorAll('.delete').forEach((btn, i) => { //удаление и замена нумерации
            btn.addEventListener('click', () => {
                btn.parentElement.remove();
                movieDB.movies.splice(i, 1); //splice - удаление из массива. 1эл. это порядок, 2-ой кол-во

                createMovieList(films, parent);
            });
        });
    }   

    deleteAdv(adv);
    makeChanges();
    createMovieList(movieDB.movies, movieList);

});