let dark = document.querySelector('#dark');
let body = document.querySelector('body');
let addClass = document.querySelectorAll('.addClass');
let addP = document.querySelectorAll('.pAdd');
let eleps = document.querySelectorAll('.pAddEleps');
let imgMoon = document.querySelectorAll('.imgMoon');
let bodyColor = document.querySelector('body');

const darkTheme = () => {
    if (dark.dataset.pic !== 'num') {
        dark.setAttribute('data-pic', 'num')

        for (let i of imgMoon) {
            let y = i.src.replace('svg', 'png');
            i.setAttribute('src', y)

        }

        console.log(dark.dataset.pic)
        for (let i of eleps) {

            i.classList.toggle('addPEl')
        }
        for (let i of addP) {

            i.classList.toggle('addP')

        }
        for (let i of addClass) {

            i.classList.toggle('nextAdd')

        }
        body.classList.toggle('bodyClass')
    } else {
        console.log('!!!!!!!!!!');
        dark.removeAttribute('data-pic', 'num')
        for (let i of imgMoon) {
            let y = i.src.replace('png', 'svg');
            i.setAttribute('src', y)

        }

        console.log(dark.dataset.pic)
        for (let i of eleps) {

            i.classList.toggle('addPEl')
        }
        for (let i of addP) {

            i.classList.toggle('addP')

        }
        for (let i of addClass) {

            i.classList.toggle('nextAdd')

        }
        body.classList.toggle('bodyClass')

    }


}

dark.addEventListener('click', darkTheme);