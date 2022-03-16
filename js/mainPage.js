let dark = document.querySelector('#dark');
let body = document.querySelector('body');
let addClass = document.querySelectorAll('.addClass');
let addP = document.querySelectorAll('.pAdd');
let eleps = document.querySelectorAll('.pAddEleps');
let imgMoon = document.querySelectorAll('.imgMoon');
let bodyColor = document.querySelector('body');
let modal = document.querySelector('.modal');
let newTask = document.querySelector('.newTask');
let newTaskCancel = document.querySelector('.Cancel');
let modalStyle = document.querySelector('.modalStyle');

let output = document.querySelector('#output');
let exid = document.querySelector('.exid');
let addOutput = document.querySelectorAll('.addOutput');



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
        modal.classList.toggle('modalNextClass');
    } else {
        console.log('!!!!!!!!!!');
        dark.removeAttribute('data-pic', 'num');
        for (let i of imgMoon) {
            let y = i.src.replace('png', 'svg');
            i.setAttribute('src', y)
        }

        console.log(dark.dataset.pic);
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
        modal.classList.toggle('modalNextClass');
    }
}

dark.addEventListener('click', darkTheme);


const newTaskButton = () => {
    modal.style.opacity = 1;
    modalStyle.style.display = 'block';
    if (dark.dataset.pic !== 'num') {
        modalStyle.style.backgroundColor = 'rgb(189 236 151)';
    } else {
        modalStyle.style.backgroundColor = '#2b3267';
    }
}

const TaskCancel = () => {
    modal.style.opacity = 0;
    modalStyle.style.display = 'none';

}

newTask.addEventListener('click', newTaskButton);
newTaskCancel.addEventListener('click', TaskCancel);

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