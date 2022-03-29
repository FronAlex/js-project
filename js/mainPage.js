
let newTask = document.querySelector('.newTask');
let newTaskCancel = document.querySelector('.Cancel');
let mark = document.getElementsByClassName('mark');
let illumination = document.getElementsByClassName('illumination');
let modal = document.querySelector('.modal');
let modalStyle = document.querySelector('.modalStyle');
let checkСontainer = document.querySelector('#checkСontainer');
let checkСontainer1 = document.querySelector('.checkСontainer1');
let addModalTaskInput = document.querySelector('#addModalTaskInput');
let Add = document.querySelector('.Add');



const markIllumination = (e) => {

    for (let i of illumination) {
        i.style.display = 'none';
    };

    e.target.parentElement.children[2].style.display = 'block';
}

const markIlluminationFunction = () => {
    for (let i of mark) {
        i.addEventListener('click', markIllumination);
    };
}
markIlluminationFunction();


const newTaskButton = () => {
    modal.style.display = 'flex';
    modalStyle.style.width = '100%';

    if (dark.dataset.pic !== 'num') {
        modalStyle.style.backgroundColor = 'rgb(116 181 184)';
    } else {
        modalStyle.style.backgroundColor = '#2b3267';
    }
    addModalTaskInput.focus();
}

const TaskCancel = () => {
    modal.style.display = 'none';
    modalStyle.style.width = '0';


}

newTask.addEventListener('click', newTaskButton);
newTaskCancel.addEventListener('click', TaskCancel);


const addingTask = () => {

    let value = addModalTaskInput.value.trim();

    if (value !== '') {

        checkСontainer.innerHTML += (`<div class="checkСontainer" data-pac='1'>
    <div class="check">
        <input class="checkbox removeNone" type="checkbox">
        <p class="checkP pAdd">${value}</p>
        <input class="textReplacement" placeholder="Замена задачи" type="text" maxlength="30">
    </div>

    <div class="removal">
        <img src="../images/edit.svg" class="removalImg imgMoon removeNone removDel" alt="edit">
        <img src="../images/trash.svg" class="removalImg removeNone del" alt="trash">
    </div>
</div>`);

    }


    addModalTaskInput.value = '';
    TaskCancel();

    let container = document.getElementsByClassName('checkСontainer');
    for (let i of container) {
        i.addEventListener('mouseenter', addingTaskMouse);
        i.addEventListener('mouseleave', removeTaskMouse);
    }

    let del = document.getElementsByClassName('del');

    if (del.length > 1) {
        for (let i of del) {
            i.addEventListener('click', imgDel);
        }
    } else if (value !== '') {

        del[0].addEventListener('click', imgDel);
    };


    let removDel = document.getElementsByClassName('removDel');

    if (removDel.length > 1) {
        for (let i of removDel) {
            i.addEventListener('click', imgRemov);
        }
    } else {

        removDel[0].addEventListener('click', imgRemov);
    };


    let checkbox = document.getElementsByClassName("checkbox");
    if (checkbox.length > 1) {
        for (let i of checkbox) {
            i.addEventListener('change', checkedBox);
        }
    } else {

        checkbox[0].addEventListener('change', checkedBox);
    };


};


Add.addEventListener('click', addingTask);


let removeNone = document.getElementsByClassName('removeNone');
const addingTaskMouse = (e) => {

    for (let i of removeNone) {
        i.style.display = 'none';
    }

    if (e.target.dataset.pac == '1') {

        e.target.children[0].children[0].style.display = 'block';
        e.target.children[1].children[0].style.display = 'block';
        e.target.children[1].children[1].style.display = 'block';
        e.target.style.backgroundColor = '#33f0df54';
    };
};


const removeTaskMouse = (e) => {

    if (e.target.dataset.pac == '1') {


        for (let i of removeNone) {
            i.style.display = 'none';

        }

        let listСontainer = document.querySelectorAll('.checkСontainer');

        for (let i of listСontainer) {
            i.style.backgroundColor = 'rgba(155 233 230 / 85%)';

        };
        e.target.children[0].children[2].style.display = 'none';
        e.target.children[0].children[2].value = '';
    };
};


let textReplacement = document.getElementsByClassName('textReplacement');


const imgRemov = (e) => {


    e.target.parentElement.parentElement.children[0].children[2].style.display = 'block';
    e.target.parentElement.parentElement.children[0].children[2].focus();

    for (let i of textReplacement) {

        i.addEventListener('keyup', (e) => {


            if (e.key === "Enter") {


                if (e.target.parentElement.parentElement.children[0].children[2].value !== '') {
                    e.target.parentElement.parentElement.children[0].children[1].innerHTML = e.target.parentElement.parentElement.children[0].children[2].value;
                    e.target.parentElement.parentElement.children[0].children[2].value = '';
                    e.target.parentElement.parentElement.children[0].children[2].style.display = 'none';
                }
            }
        });
    }

};


//////////////////////////////////////////////////////////////


const checkedBox = (e) => {




    if (e.target.checked) {

        let meaning = e.target.parentElement.children[1].innerHTML;
        e.target.parentElement.parentElement.remove();

        checkСontainer1.innerHTML += (`<div class="checkСontainer" data-pac='1'>
        <div class="check">
            <input class="checkbox removeNone" type="checkbox">
            <p class="checkP pAdd">${meaning}</p>
            <input class="textReplacement" placeholder="Замена задачи" type="text" maxlength="30">
        </div>
    
        <div class="removal">
            <img src="../images/edit.svg" class="removalImg imgMoon removeNone removDel" alt="edit">
            <img src="../images/trash.svg" class="removalImg removeNone del" alt="trash">
        </div>
    </div>`);

        console.log(checkСontainer1);

        let container = document.getElementsByClassName('checkСontainer');
        for (let i of container) {
            i.addEventListener('mouseenter', addingTaskMouse);
            i.addEventListener('mouseleave', removeTaskMouse);
        }


    } else {

        e.target.parentElement.children[1].style.textDecoration = 'none'
        console.log("Checkbox is not checked..");
    }
}





const imgDel = (e) => {
    e.target.parentElement.parentElement.remove();
};



var subcategoryRemove = document.getElementsByClassName('subcategoryRemove');
var addModalTaskSelect = document.querySelector('.addModalTaskSelect');

const removeCategory = () => {

    let inputCategoryDel = document.querySelector('.inputCategoryDel');
    inputCategoryDel.style.display = 'block';
    inputCategoryDel.focus();

    inputCategoryDel.addEventListener('keydown', function (e) {

        if (e.key === "Enter") {
            let mark1 = document.querySelectorAll('.mark1');
            let del = inputCategoryDel.value.trim();

            for (var i of mark1) {
                console.log(del)
                console.log(i.textContent)


                if (i.innerHTML.trim() == del) {
                    console.log('tru')
                    i.parentElement.remove();
                    inputCategoryDel.style.display = 'none';

                    for (let index of addModalTaskSelect.children) {
                        if (index.innerHTML.trim() == del) {
                            console.log(index.innerHTML)
                            index.remove();
                        }
                    };

                } else {

                    console.log('!!!!')
                    inputCategoryDel.style.display = 'none';

                }
                if (inputCategoryDel.value.trim() == '') {
                    inputCategoryDel.value = '';
                    inputCategoryDel.style.display = 'none';
                }

            }
        }
    });

    inputCategoryDel.addEventListener("blur", function (event) {
        event.target.style.display = 'none';
        event.target.value = '';
    }, true);

}



var inputCategoryDiv = document.querySelector('.inputCategoryDiv');
var addTasks = document.querySelector('.addTasks');
var inputCategory = document.querySelector('.inputCategory');

const addCategory = () => {

    inputCategory.style.display = 'block';
    inputCategory.focus();


    inputCategory.addEventListener('keyup', function (e) {


        if (e.key === "Enter") {

            if (inputCategory.value.trim() !== '') {


                if (dark.dataset.pic == 'num') {
                    inputCategoryDiv.innerHTML += `
                    <div class="subcategory subcategoryRemove pAdd addP">
                <p>NEW:</p>
                <div class="pAdd mark mark1">${inputCategory.value} </div>
                <p class="illumination"></p>
               
                </div>
                `

                } else {
                    inputCategoryDiv.innerHTML += `
                    <div class="subcategory subcategoryRemove pAdd">
                <p>NEW:</p>
                <div class="pAdd mark mark1">${inputCategory.value}</div>
                <p class="illumination"></p>
               
                </div>
                `
                }

                markIlluminationFunction();


                for (let index of subcategoryRemove) {
                    index.addEventListener('dblclick', removeCategory);

                }


                addModalTaskSelect.innerHTML += `
                <option value="4">${inputCategory.value}</option> `

                inputCategory.value = '';
                inputCategory.style.display = 'none';

            } else if (inputCategory.value.trim() == '') {
                inputCategory.value = '';
                inputCategory.style.display = 'none';
            };

        };
    });

    inputCategory.addEventListener("blur", function (event) {
        event.target.style.display = 'none';
        event.target.value = '';
    }, true);


}

addTasks.addEventListener('click', addCategory);


document.querySelector('#exitButton').addEventListener('dblclick', () => {
    modalStyle.style.width = '100%';

    if (dark.dataset.pic !== 'num') {
        modalStyle.style.backgroundColor = 'rgb(116 181 184)';
    } else {
        modalStyle.style.backgroundColor = '#2b3267';
    }

    let modalWindows = document.querySelector('#modalWindows');

    modalWindows.style.display = 'block';
});



document.querySelector('#no').addEventListener('click', () => {
    modalStyle.style.width = '0';
    modalWindows.style.display = 'none';
});



document.querySelector('#yes').addEventListener('click', () => {

    localStorage.removeItem('token');
    window.location.replace("index.html");
});



