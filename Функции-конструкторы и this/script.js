'use strict';

// function User(name, id) {
//     this.name = name;
//     this.id = id;
//     this.programmer = true;
//     this.hello = function() {
//         console.log(`Hello, ${this.name}`);
//     };
// }

// const ivan = new User('Ivan', 28);
// const daria = new User('Daria', 19);
// const darina = new User('Darina', 21);

// User.prototype.exit = function () {
//     console.log(`User ${this.name} exit`);
// };

// ivan.exit();

// daria.hello();
// darina.hello();

////////////////////////////////////////////////////////////////////////////////////

// function showThis(a, b) {
//     console.log(this); // в зависимости от исп. строгого режима ведет себя по разному
//     function sum() {
//         console.log(this);
//         return a + b;
//     }

//     console.log(sum());
// }

// showThis(4, 5);

// const obj = {
//     a: 20, 
//     b: 15, 
//     sum: function() {
//         function shout() {
//             console.log(this);
//         }
//         shout();
//     }
// };

// obj.sum();

// function User(name, id) {
//     this.name = name;
//     this.id = id; 
//     this.programmer = true;
// }

// const ivan = new User('Ivan', 28);

// function sayName(surname) {
//     console.log(this);
//     console.log(this.name + surname);
// }

// const user = {
//     name: 'John'
// };

// sayName.call(user, 'Smith');
// sayName.apply(user, ['Smith']);

// function count(num) {
//     return this*num;
// }

// const double = count.bind(2); 
// console.log(double(3));
// console.log(double(13));

//1) Обычная ф-ция: this = window, но если use strict - underfind
//2) Контекст у метода объекта - сам объект
//3) this в конструкторах и классах - это новый экземпляр объекта
//4) Ручная привязка this: call, apply, bind

const btn = document.querySelector('button');

btn.addEventListener('click', function() {
   // e.target.style.backgroundColor = 'red';
   this.style.backgroundColor = 'red';
}); 

// const obj = {
//     num: 5, 
//     sayNumber: function() {
//         const say = () => {
//             console.log(this);
//         };

//         say();
//     }
// };

// obj.sayNumber(); 

// const double = a => a * 2;

// console.log(double(4));

//////////Классы//////////////////////////////////////////////

class Rectangle {
    constructor(height, width) {
        this.height = height;
        this.width = width;
    }

    calcArea() {
        return this.height * this.width;
    }
}

class ColoredRectangleWithText extends Rectangle { //extends - наследовать
    constructor (height, width, text, bgColor) {
        super(height, width); //вызывает то же самое что и у родителя
        this.text = text;
        this.bgColor = bgColor;
    }

    chowMyProps() {
        console.log(`Текст: ${this.text}, цвет: ${this.bgColor}`);
    }
}

const div = new ColoredRectangleWithText(25, 10, 'Hello, World', 'red');

div.chowMyProps();
console.log(div.calcArea());

// const square = new Rectangle(10, 10);
// const long = new Rectangle(20, 100);

// console.log(square.calcArea());
// console.log(long.calcArea());