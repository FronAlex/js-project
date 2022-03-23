

let imgMoonDay = document.querySelector('.imgMoonDay');
let addOutput = document.querySelectorAll('.addOutput');
let output = document.querySelector('#output');
let exid = document.querySelector('.exid');
let dark = document.querySelector('.dark');
let body = document.querySelector('body');
let addClass = document.querySelectorAll('.addClass');
let addP = document.getElementsByClassName('pAdd');
let eleps = document.querySelectorAll('.pAddEleps');
let imgMoon = document.querySelectorAll('.imgMoon');
let bodyColor = document.querySelector('body');
let tasks = document.querySelector('.tasks');


const exidMenu = () => {
    for (let i of addOutput) {
        i.style.marginLeft = '0 ';
    }
}

const exidMause = () => {
    for (let i of addOutput) {
        i.style.marginLeft = '-600px';
    }
}


output.addEventListener('mouseover', exidMenu);
exid.addEventListener('mouseleave', exidMause);




const darkTheme = () => {
    if (dark.dataset.pic !== 'num') {
        dark.setAttribute('data-pic', 'num');

        for (let i of imgMoon) {
            let y = i.src.replace('svg', 'png');
            i.setAttribute('src', y);
        }

        for (let i of eleps) {
            i.classList.toggle('addPEl');
        }
        for (let i of addP) {
            i.classList.toggle('addP');
        }
        for (let i of addClass) {
            i.classList.toggle('nextAdd');
        }
        body.classList.toggle('bodyClass');

        console.log(tasks.getAttribute('id'));
        if (tasks.getAttribute('id') == 'idTasks') {

        } else {
            modal.classList.toggle('modalNextClass');

        }


    } else {

        dark.removeAttribute('data-pic', 'num');
        for (let i of imgMoon) {
            let y = i.src.replace('png', 'svg');
            i.setAttribute('src', y)
        }


        for (let i of eleps) {
            i.classList.toggle('addPEl');
        }
        for (let i of addP) {
            i.classList.toggle('addP');
        }
        for (let i of addClass) {
            i.classList.toggle('nextAdd');
        }
        body.classList.toggle('bodyClass');
        /*      modal.classList.toggle('modalNextClass'); */

        if (tasks.getAttribute('id') == 'idTasks') {

        } else {
            modal.classList.toggle('modalNextClass');
        }
    }
}

dark.addEventListener('click', darkTheme);
imgMoonDay.addEventListener('click', darkTheme);