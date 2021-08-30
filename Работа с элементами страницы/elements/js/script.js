'use strict';

//const btns = document.getElementsByTagName('button')[1];

//console.log(btns);
//console.log(btns[0]);

// hearts.forEach(item => {
//     console.log(item);
// });

const box = document.getElementById('box'),
      btns = document.querySelectorAll('button'), // btns = document.querySelector('button')
      circles = document.getElementsByClassName('circle'),
      wrapper = document.querySelector('.wrapper'),
      hearts = wrapper.querySelectorAll('.heart'),
      oneHeart = wrapper.querySelector('.heart');

//console.dir(box);

// box.style.backgroundColor = 'blue';
// box.style.width = '500px';

box.style.cssText = 'background-color: blue; width: 500px'; //то же самое что и выше
//box.style.cssText = `background-color: blue; width: ${num}px`;

//btns[1].style.borderRadius = '100%';
circles[0].style.backgroundColor = 'red';

// for (let i = 0; i < hearts.length; i++) {
//     hearts[i].style.backgroundColor = 'blue';
// }

hearts.forEach(item => {
    item.style.backgroundColor = 'blue';
});

const div = document.createElement('div'); //елемент существует только внутри джс
//const text = document.createTextNode('Here I was!');

div.classList.add('black');

document.body.append(div);

//document.querySelector('.wrapper').append(div);
//wrapper.append(div);
//wrapper.prepend(div);

// wrapper.appendChild(div);

//hearts[0].before(div);
//hearts[2].after(div);

// wrapper.insertBefore(div, hearts[0]);

// circles[0].remove(); //убрать
// wrapper.removeChild(hearts[0]);

//hearts[0].replaceWith(circles[0]); //заменить один ел. на другой
// wrapper.replaceChild(circles[0], hearts[0]); 

//div.innerHTML = 'Hello World!';
div.innerHTML = '<h1>Hello World!</h1>';
//div.textContent = 'Hello World!';

div.insertAdjacentHTML("afterend", '<h1>Hello</h1>');

// btns.onclick = function() {
//     alert('click'); ///у такого способа, его заменяет его же копия
// };

// btns.addEventListener('click', () => {
//     alert('click');  ///у такого способа, его копия идёт после него
// });

// btns.addEventListener('mouseenter', (e) => {
//     console.log(e); 
//    // e.target.remove();
//    // console.log('Hover');  
// });

// const overlay = document.querySelector('.overlay');

// let i = 0;
const deleteEl = (e) => {
    //console.log(e.target);
    console.log(e.currentTarget);
    console.log(e.type);
    // i++;
    // if (i == 1){
    //     btns.removeEventListener('click', deleteEl);
    // }
};

//btns.addEventListener('click', deleteEl);
//overlay.addEventListener('click', deleteEl);

const link = document.querySelector('a');

link.addEventListener('click', (event) => {
    event.preventDefault();

    console.log(event.target);
});

btns.forEach(btn => {
    btn.addEventListener('click', deleteEl, {once: true});
});
