'use strict';

// const result = confirm('Gay?');
// console.log(result);

// const answer = +prompt('Age', '17'); 
// console.log(answer + 1);

// const answers = [];

// answers[0] = prompt('What your name?', '');
// answers[1] = prompt('What your lastname?', '');
// answers[2] = prompt('How old are you?', '');

// document.write(answers);

//`Интерполяция${}`

//console.log(4 + +'5');

const numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
const pusObj = {},
      pusObj2 = {};
const arr = [];

const personalMovirDB = {
    count: numberOfFilms,
    movies: pusObj,
    actors: pusObj2,
    genres: arr,
    privat: false
};

const a = prompt('Один из последних просомтренных вами фильмов?', ''),
      b = +prompt('На сколько оцените его?', ''),
      c = prompt('Один из последних просомтренных вами фильмов?', ''),
      d = +prompt('На сколько оцените его?', '');

personalMovirDB.movies[a] = b;
personalMovirDB.movies[c] = d;

console.log(personalMovirDB);