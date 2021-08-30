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

// const fruit = "Some fruit";

// console.log(fruit.indexOf('fruit'));

// console.log(fruit.slice(0, 4));

// console.log(fruit.substring(0, 4)); //не поддерживает отриц. значения и первое число может быть больше вт

// console.log(fruit.substr(0, 4)); //второй аргумент - длинна 


// function learnJS(lang, callback){
//     console.log(`I'm learning: ${lang}`);
//     callback();
// }

// function done(){
//     console.log('I finished this learn');
// }

// learnJS('JavaScript', done);

// const options = {
//     name: 'test',
//     width: 1024,
//     height: 1024,
//     colors: {
//         border: 'black',
//         bg: 'yellow'
//     },
//     makeTest: function(){
//         console.log('Test');
//     }
// };

// options.makeTest();

// const {border, bg} = options.colors;
// console.log(border);

// delete options.name;

// console.log(options);

// let count = 0;
// for (let key in options){
//     if (typeof(options[key]) === 'object'){
//         for (let i in options[key]){
//             console.log(`Свойство ${i} имеет значение ${options[key][i]}`);
//             count++;
//         }
//     } else {
//         console.log(`Свойство ${key} имеет значение ${options[key]}`);  
//         count++;
//     }
// }
// console.log(count);

// console.log(Object.keys(options).length);

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

/// копии объекта:

// console.log(b);
// console.log(a);

// const obj = {
//     a: 5,
//     b: 1
// };

// const copy = obj; //передает ссылку

// copy.a = 10;

// function copy(mainObj) {
//     let objCopy = {};

//     let key;
//     for( key in mainObj) {
//         objCopy[key] = mainObj[key];
//     }

//     return objCopy;
// }

// const numbers = {
//     a: 2,
//     b: 5,
//     c: {
//         x: 7,
//         y: 4
//     }
// };

// const newNumbers = copy(numbers);

// newNumbers.a = 10;
// newNumbers.c.y = 10;

// //console.log(newNumbers);

// const add = {
//     d: 17,
//     e: 20
// };

// //console.log(Object.assign(numbers, add));

// const clone = Object.assign({}, add);//отдельная новая копия объекта

// clone.d = 21;

// console.log(add);
// console.log(clone);

// ///для поверхностной копии массива: 

// const oldArray = ['a', 'b', 'c'];
// const newArray = oldArray.slice();

// newArray[1] = 'ehdjkfldd;fd';

// console.log(newArray);
// console.log(oldArray); 

// const video = ['youtube', 'vimeo', 'rutube'],
//       blogs = ['wordpress', 'livejournal', 'blogger'],
//       internet = [...video, ...blogs, 'vk', 'facebook'];

// console.log(internet);

// function lol(a, b, c) {
//     console.log(a);
//     console.log(b);
//     console.log(c);
// }

// const num = [2, 5, 7];

// lol(...num);

// const array = ['a', 'b'];

// const newAarray = array; //копия

// const q = {
//     one: 1,
//     two: 2
// };

// const newObj = {...q}; //копия объекта

// let str = 'some';

// let atrObj = new String(str); //устаревшее. Копия строки 

// console.dir([1, 2, 3]);

// const soldier = {
//     health: 400,
//     armor: 100,
//     sayHello: function(){
//         console.log('Hello');
//     }

// };

// const jonh = Object.create(soldier); // сразу создание объекта, который прототипно наслед.

// const jonh = {
//     health: 100
// };

//jonh.__proto__ = soldier;

//Object.setPrototypeOf(jonh, soldier); //то же самое что и выше, только там устаревшая версия (если объект уже создан)

//console.log(jonh.armor);

// jonh.sayHello();

