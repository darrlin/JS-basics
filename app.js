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

//////////////////////////////////////////////////////////////////////////////////////////////////////////////////

/*let numberOfFilms;

function start(){
    numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');

    while(numberOfFilms == '' || numberOfFilms == null || isNaN(numberOfFilms)){
        numberOfFilms = +prompt('Сколько фильмов вы посмотрели?', '');
    }
}

start();

const personalMovieDB = {
    count: numberOfFilms,
    movies: {},
    actors: {},
    genres: [],
    privat: false
};

function rememberMyFilms(){
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
}

rememberMyFilms();

console.log(personalMovieDB);

function detectPersLevel(){
    if (personalMovieDB.count < 10){
        console.log('Просмотрено довольно мало фильмов.');
    } else if (personalMovieDB.count < 10 && personalMovieDB.count < 30){
        console.log('Просмотренно среднее количество фильмов.');
    } else if (personalMovieDB.count > 30){
        console.log('Да вы киноман!');
    } else {console.log('Произошла ошибка.');}
}

detectPersLevel();

function showMyDB(hidden){
    if(!hidden){
        console.log(personalMovieDB);
    }
}

showMyDB(personalMovieDB.privat);

function writeYourGenres(){
    for(let i = 1; i <= 3; i++){
        personalMovieDB.genres[i - 1] = prompt(`Ваш любимый жанр под номером ${i}`);
    }
}

writeYourGenres();

///////////////////////////////////////////////////////////////////////////////////////////////////////////////////

const fruit = "Some fruit";

console.log(fruit.indexOf('fruit'));

console.log(fruit.slice(0, 4));

console.log(fruit.substring(0, 4)); //не поддерживает отриц. значения и первое число может быть больше вт

console.log(fruit.substr(0, 4)); //второй аргумент - длинна 


function learnJS(lang, callback){
    console.log(`I'm learning: ${lang}`);
    callback();
}

function done(){
    console.log('I finished this learn');
}

learnJS('JavaScript', done);

const options = {
    name: 'test',
    width: 1024,
    height: 1024,
    colors: {
        border: 'black',
        bg: 'yellow'
    },
    makeTest: function(){
        console.log('Test');
    }
};

options.makeTest();

const {border, bg} = options.colors;
console.log(border);

delete options.name;

console.log(options);

let count = 0;
for (let key in options){
    if (typeof(options[key]) === 'object'){
        for (let i in options[key]){
            console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
            count++;
        }
    } else {
        console.log(`Свойство ${key} имеет значение ${options[key]}`);  
        count++;
    }
}
console.log(count);

console.log(Object.keys(options).length);*/

// const arr = [1, 2, 3, 4, 8];

//arr.pop(); //убирает с конца елемент
// arr.push(10); //добавляет в конец

// console.log(arr);

// for ( let i = 0; i < arr.length; i++){
//     console.log(arr[i]);
// }

// arr.forEach(function(item, i, arr){
//     console.log(`${i}: ${item} внутри массива ${arr}`);
// });

// const str = prompt('','');
// const products = str.split(', ');

// console.log(products);
// products.sort();
// console.log(products.join('; '));

// const arr = [1, 28, 3, 4, 8];
// arr.sort(compareNum);
// console.log(arr);

// function compareNum(a, b){
//     return a - b;
// }

// let a = 5,
//     b = a;

// b = b + 5;

// console.log(b);
// console.log(a);

const obj = {
    a: 5,
    b: 1
};

const copy = obj; //передает ссылку

copy.a = 10;