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
let mark = document.querySelectorAll('.mark');
let illumination = document.querySelectorAll('.illumination');
let checkСontainer = document.querySelector('#checkСontainer');
let checkСontainer1 = document.querySelector('#checkСontainer1');
let addModalTaskInput = document.querySelector('#addModalTaskInput');
let Add = document.querySelector('.Add');////////
//
let activeTasks = document.querySelector('.activeTasks');



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
    modal.style.display = 'flex';
    modalStyle.style.width = '100%';

    if (dark.dataset.pic !== 'num') {
        modalStyle.style.backgroundColor = 'rgb(116 181 184)';
    } else {
        modalStyle.style.backgroundColor = '#2b3267';
    }
}

const TaskCancel = () => {
    modal.style.display = 'none';
    modalStyle.style.width = '0';


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




const markIllumination = (e) => {

    for (let i of illumination) {
        i.style.display = 'none';
    };

    e.target.parentElement.children[2].style.display = 'block';
}


for (let i of mark) {
    i.addEventListener('click', markIllumination);
};


const addingTask = () => {

    console.log(addModalTaskInput.value);
    let value = addModalTaskInput.value.trim();

    if (value !== '') {

        checkСontainer.innerHTML += (`<div class="checkСontainer">
    <div class="check">
        <input class="checkbox removeNone" type="checkbox">
        <p class="checkP pAdd">${value}</p>
    </div>

    <div class="removal">
        <img src="../images/edit.svg" class="removalImg imgMoon removeNone" alt="edit">
        <img src="../images/trash.svg" class="removalImg removeNone" alt="trash">
    </div>
</div>`);

    }
    /*  checkСontainer.addEventListener('mouseover', addingTaskMouse);
     checkСontainer.addEventListener('mouseleave', mouseleave); */

    addModalTaskInput.value = '';
    TaskCancel();
};

Add.addEventListener('click', addingTask);




const addingTaskMouse = (e) => {
    let removeNone = document.querySelectorAll('.removeNone');

    for (let i of removeNone) {
        i.style.display = 'none';
    }



    if (e.target.classList == 'checkСontainer') {


        e.target.children[0].children[0].style.display = 'block';
        e.target.children[1].children[0].style.display = 'block';
        e.target.children[1].children[1].style.display = 'block';
        e.target.style.backgroundColor = '#33f0df54';
    }
    else {



        let listСontainer = document.querySelectorAll('.checkСontainer');

        for (let i of listСontainer) {
            i.style.backgroundColor = 'rgba(41, 161, 156, 0.02)';
        }

    }


}

activeTasks.addEventListener('mouseover', addingTaskMouse);



