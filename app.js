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

for (let i = 0; i<2; i++) {
    const a = prompt('Один из последних просомтренных вами фильмов?', ''),
          b = +prompt('На сколько оцените его?', '');

    if(a != null && b != null && a != '' && b != '' && a.length < 50){
        personalMovirDB.movies[a] = b;
        console.log('done');
    } else {
        console.log('error');
        i--;
    }
}

console.log(personalMovirDB);

if (personalMovirDB.count < 10){
    console.log('Просмотрено довольно мало фильмов.');
} else if (personalMovirDB.count < 10 && personalMovirDB.count < 30){
    console.log('Просмотренно среднее количество фильмов.');
} else if (personalMovirDB.count > 30){
    console.log('Да вы киноман!');
} else {console.log('Произошла ошибка.');}