'use strict';

//const now = new Date('Fri Sep 03 2021');
// const now = new Date(2021, 9, 3, 23);
//const now = new Date(0); ///-999
const now = new Date();

console.log(now.setHours(18, 40));
console.log(now);
 // console.log(now);
// console.log(now.getFullYear());
// console.log(now.getMonth());
// console.log(now.getHours());
// console.log(now.getUTCHours());

// console.log(now.getTimezoneOffset());

let start = new Date();

for (let i = 0; i < 1000000; i++) {
    let some = i ** 3;
}

let end = new Date();

alert(`Цикл отработал за ${end - start} миллисекунд.`)