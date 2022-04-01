
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
    localTasksReceive();
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
    } else if (removDel.length !== 0) {

        removDel[0].addEventListener('click', imgRemov);
    };


    let checkbox = document.getElementsByClassName("checkbox");
    if (checkbox.length > 1) {
        for (let i of checkbox) {
            i.addEventListener('change', checkedBox);
        }
    } else if (checkbox.length !== 0) {

        checkbox[0].addEventListener('change', checkedBox);
    };

    localTasksMemory();
    Created();
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
                    localTasksMemory();
                }
            }
        });
    }

};





const checkedBox = (e) => {


    if (e.target.checked) {

        let meaning = e.target.parentElement.children[1].innerHTML;
        e.target.parentElement.parentElement.remove();

        checkСontainer1.innerHTML += (`<div class="checkСontainer" data-pac='1'>
        <div class="check">
            <input class="checkbox  diplay" type="checkbox">
            <p class="checkP pAdd">${meaning}</p>
            <input class="textReplacement" placeholder="Замена задачи" type="text" maxlength="30">
        </div>
    
        <div class="removal">
            <img src="../images/edit.svg" class="diplay " alt="edit">
            <img src="../images/trash.svg" class="removalImg removeNone del1" alt="trash">
        </div>
    </div>`);

        let del1 = document.getElementsByClassName('del1')

        for (let i of del1) {

            i.addEventListener('click', imgDelListen);
        }
        for (let i of del1) {
            console.log(i.parentElement.parentElement.children[0].children[1])
            i.parentElement.parentElement.children[0].children[1].style.textDecoration = 'line-through';
        };


        let container = document.getElementsByClassName('checkСontainer');
        for (let i of container) {
            i.addEventListener('mouseenter', addingTaskMouse);
            i.addEventListener('mouseleave', removeTaskMouse);
        }


    }
    localTasksMemory();
    Completed();
}



const imgDelListen = (e) => {
    e.path[2].remove();
    localTasksMemory();
    Removed();
};


const imgDel = (e) => {
    e.target.parentElement.parentElement.remove();
    localTasksMemory();
    Removed();
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


                if (i.innerHTML.trim() == del) {

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

                let sub = inputCategoryDiv.innerHTML
                localStorage.setItem('category', JSON.stringify(sub));

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

                    let subcategory = document.getElementsByClassName('subcategory');

                    let check = 1;
                    for (let i of subcategory) {

                        check++;
                    };

                    inputCategoryDiv.innerHTML += `
                    <div class="subcategory subcategoryRemove pAdd addP" data-container="${check}">
                <p>NEW:</p>
                <div class="pAdd mark mark1">${inputCategory.value} </div>
                <p class="illumination"></p>
               
                </div>
                `

                } else {
                    let subcategory = document.getElementsByClassName('subcategory');

                    let check = 1;
                    for (let i of subcategory) {

                        check++;
                    };

                    inputCategoryDiv.innerHTML += `
                    <div class="subcategory subcategoryRemove pAdd " data-container="${check}">
                <p>NEW:</p>
                <div class="pAdd mark mark1">${inputCategory.value} </div>
                <p class="illumination"></p>
               
                </div>
                `
                }

                markIlluminationFunction();



                let sub = inputCategoryDiv.innerHTML
                localStorage.setItem('category', JSON.stringify(sub));


                for (let index of subcategoryRemove) {
                    index.addEventListener('dblclick', removeCategory);

                };

                let count = 1;
                for (let index of addModalTaskSelect.children) {

                    count++;
                };

                addModalTaskSelect.innerHTML += `
                <option value ='${count}'>${inputCategory.value}</option> `

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


};

addTasks.addEventListener('click', addCategory);


const subcategoryLocal = () => {

    let tasks = JSON.parse(
        localStorage.getItem('category'));

    if (tasks !== null) {
        inputCategoryDiv.innerHTML += tasks;

        for (let index of subcategoryRemove) {

            let count = 1;
            for (let index of addModalTaskSelect.children) {

                count++;
            };
            console.log(index.children[1].outerText)
            console.log(count)
            addModalTaskSelect.innerHTML += `
         <option value ='${count}'>${index.children[1].outerText}</option> `
        };



        for (let index of subcategoryRemove) {
            index.addEventListener('dblclick', removeCategory);

        };
        markIlluminationFunction();
    };
};

subcategoryLocal();

/* const subcategoryLocalWithdraw = () => {

    var inputCategoryDiv = document.getElementsByClassName('inputCategoryDiv');

    let tasks = JSON.parse(
        localStorage.getItem('subcategory'));
    console.log(tasks)
    inputCategoryDiv.innerHTML += tasks;

};
subcategoryLocalWithdraw(); */




const localTasksMemory = () => {

    let subcategory = document.getElementsByClassName('subcategory');

    for (let i of subcategory) {

        if (i.children[2].style.display == 'block') {
            let num = i.dataset.container;

            let obj = {
                checkСontainer: checkСontainer.innerHTML,
                checkСontainer1: checkСontainer1.innerHTML
            };

            localStorage.setItem(num, JSON.stringify(obj));

        };
    };

};


let subcategory = document.getElementsByClassName('subcategory');

const localTasksReceive = () => {


    checkСontainer.innerHTML = '';
    checkСontainer1.innerHTML = '';

    for (let i of subcategory) {

        if (i.children[2].style.display == 'block') {
            let num = i.dataset.container;


            let tasks = JSON.parse(
                localStorage.getItem(num));


            if (tasks !== null) {


                checkСontainer.innerHTML = tasks.checkСontainer;
                checkСontainer1.innerHTML = tasks.checkСontainer1;
            };

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
            }
            if (del.length == 1) {

                del[0].addEventListener('click', imgDel);
            };


            let removDel = document.getElementsByClassName('removDel');

            if (removDel.length > 1) {
                for (let i of removDel) {
                    i.addEventListener('click', imgRemov);
                }
            } else if (removDel.length !== 0) {

                removDel[0].addEventListener('click', imgRemov);
            };

            let del1 = document.getElementsByClassName('del1')

            for (let i of del1) {

                i.addEventListener('click', imgDelListen);
            }


            let checkbox = document.getElementsByClassName("checkbox");
            if (checkbox.length > 1) {
                for (let i of checkbox) {
                    i.addEventListener('change', checkedBox);
                }
            } else if (checkbox.length !== 0) {

                checkbox[0].addEventListener('change', checkedBox);
            };

        };
    };

};

localTasksReceive();

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


const merger = () => {

    for (let i of subcategory) {

        if (addModalTaskSelect.value == i.dataset.container) {

            document.querySelectorAll('.pAdd')[addModalTaskSelect.value - 1].click();

        };

    };


};


addModalTaskSelect.addEventListener('change', merger);


const Created = () => {
    let first = document.querySelector('#Created');

    let tasks = JSON.parse(
        localStorage.getItem('count'));

    console.log(tasks);
    if (tasks == null) {
        tasks = 0;
    };

    tasks++;
    localStorage.setItem('count', JSON.stringify(tasks));



    first.innerHTML = tasks;
};

const Completed = () => {

    let tasks = JSON.parse(
        localStorage.getItem('count1'));
    console.log(tasks);
    if (tasks == null) {
        tasks = 0;
    };

    tasks++;
    localStorage.setItem('count1', JSON.stringify(tasks));

    let first = document.querySelector('#Completed');

    first.innerHTML = tasks;
};

const Removed = () => {

    let tasks = JSON.parse(
        localStorage.getItem('count2'));
    console.log(tasks);
    if (tasks == null) {
        tasks = 0;
    };

    tasks++;
    localStorage.setItem('count2', JSON.stringify(tasks));

    let first = document.querySelector('#Removed');

    first.innerHTML = tasks;
};



const update = () => {
    let first2 = document.querySelector('#Removed');
    let first1 = document.querySelector('#Completed');
    let first = document.querySelector('#Created');


    let tasks = JSON.parse(
        localStorage.getItem('count'));

    let tasks1 = JSON.parse(
        localStorage.getItem('count1'));

    let tasks2 = JSON.parse(
        localStorage.getItem('count2'));


    if (tasks == null) {
        tasks = 0;
    }

    if (tasks1 == null) {
        tasks1 = 0;
    }

    if (tasks2 == null) {
        tasks2 = 0;
    }



    first.innerHTML = tasks;
    first1.innerHTML = tasks1;
    first2.innerHTML = tasks2;

};

update();
