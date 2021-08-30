'use strict';

const personalMovieDB = {
    count: 0,
    movies: {},
    actors: {},
    genres: [],
    privat: false,
    start: function() {
        personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
    
        while(personalMovieDB.count == '' || personalMovieDB.count == null || isNaN(personalMovieDB.count)){
            personalMovieDB.count = +prompt('Сколько фильмов вы посмотрели?', '');
        }
    }, 

    rememberMyFilms: function() {
        for (let i = 0; i<2; i++) {
            const a = prompt('Один из последних просомтренных вами фильмов?', ''),
                  b = +prompt('На сколько оцените его?', '');
        
            if(a != null && b != null && a != '' && b != '' && a.length < 50){
                personalMovieDB.movies[a] = b;
                console.log('done');
            } else {
                console.log('error');
                i--;
            }
        }
    },

    detectPersLevel: function() {
        if (personalMovieDB.count < 10){
            console.log('Просмотрено довольно мало фильмов.');
        } else if (personalMovieDB.count < 10 && personalMovieDB.count < 30){
            console.log('Просмотренно среднее количество фильмов.');
        } else if (personalMovieDB.count > 30){
            console.log('Да вы киноман!');
        } else {console.log('Произошла ошибка.');}
    },

    showMyDB: function(hidden) {
        if(!hidden){
            console.log(personalMovieDB);
        }
    },

    toggleVisibleMyDB: function() {
        if (personalMovieDB.privat) {
            personalMovieDB.privat = false;
        } else {
            personalMovieDB.privat = true;
        }
    },

    writeYourGenres: function() {
        for(let i = 1; i <= 3; i++){
            let genre = prompt(`Ваш любимый жанр под номером ${i}`);
            if (genre != null || genre != ''){
                personalMovieDB.genres[i - 1] = genre;
            } else {
                console.log('Некоректные данные!');
                i--;
            }
        }
        personalMovieDB.genres.forEach((item, i) => {
            console.log(`Любимый жанр №${i + 1} - это ${item}`);
        });
    }
};

