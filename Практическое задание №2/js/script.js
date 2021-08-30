'use strict';

const box = document.getElementById('box'),
      field = document.querySelectorAll('.field');

// setTimeout(() => {
//     let pos = 0;
//     box.style.left = pos + 1 +'px';
// }, 1500);

function move() {
    
    let pos = 0;
    let id = setInterval(frame, 10);
    function frame () {
        if (pos == 3000) {
            clearInterval(id);
        } else {
            pos += 10;
            box.style.left = pos + 'px';
        }
    }
}

function fieldMove() {
    let a = '';
    a = Math.random().toString(36);

    field[0].textContent = a;
    field[1].textContent = getRandomInt(0, 100);

    function getRandomInt(min, max) {
        return Math.floor(Math.random() * (max - min)) + min;
    }
}


