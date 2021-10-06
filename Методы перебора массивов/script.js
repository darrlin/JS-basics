'use strict';

//filter

// const names = ['Ivan', 'Anna', 'Dasha', 'Dracula', 'Voldemart'];

// const shortNames = names.filter(function(name){
//     return name.length < 5;
// });

// console.log(shortNames);

//map позволяет изменить каждый ел. внутри массива 

// const answers = ['IvaN', 'AnnA', 'Hi'];

// const result = answers.map(item => item.toLowerCase());
// console.log(result);

// every/some булиновое

// const some = [4, 'fdf', 'dghfh'];

// console.log(some.some(item => typeof(item) === 'number'));

// console.log(some.every(item => typeof(item) === 'number'));

// reduce

// const arr = [4, 5, 1, 3, 2, 6];

// const res = arr.reduce((sum, current) => sum + current, 3); //если в конце 3, то сума изначально=3
// console.log(res);

// const arr = ['apple', 'pear', 'plum'];

// const res = arr.reduce((sum, current) => `${sum}, ${current}`);
// console.log(res);

const obj = {
    daria: 'persone',
    ann: 'persone',
    dog: 'animal',
    benia: 'animal'
};

const newArr = Object.entries(obj)
.filter(item => item[1] === 'persone')
.map(item => item[0]);

console.log(newArr);