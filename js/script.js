
console.log(localStorage.getItem('token'));

if (localStorage.getItem('token')) {
    window.location.replace("mainPage.html");
};

let form = document.querySelector('#login');
form.addEventListener('submit', writeAccountData);



