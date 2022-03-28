


const createAccountData = (event) => {
    event.preventDefault();
    const userEmail = document.querySelector('#emailAdd');
    const userPassword = document.querySelector('#passwordAdd');


    if (!localStorage.getItem('accounts')) {
        localStorage.setItem('accounts', JSON.stringify([]));
    }

    const userData = {
        userEmail: userEmail.value.trim(),
        userPassword: userPassword.value.trim()
    }

    let currentAccounts = JSON.parse(
        localStorage.getItem('accounts'));

    currentAccounts.push(userData);

    localStorage.setItem('accounts', JSON.stringify(currentAccounts));

    /* const generateToken = () => {
        var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    };

    localStorage.setItem('token', generateToken()); */

    userEmail.value = '';
    userPassword.value = '';


    window.location.replace("index.html");


    /*  sessionStorage.setItem('u-name', userName.value);
     sessionStorage.setItem('u-password', userPassword.value);
 
     if (!localStorage.getItem('accounts')) {
         localStorage.setItem('accounts', JSON.stringify([]));
     }
 
     let currentAccounts = JSON.parse(
         localStorage.getItem('accounts')); */

    /*    const userData = {
           userEmail: userEmail.value,
           userPassword: userPassword.value
       } */

    /*   const checkResult = checkAccount(currentAccounts, userData);
  
      if (checkResult) {
          currentAccounts.push(userData);
      }
  
      localStorage.setItem('accounts',
          JSON.stringify(currentAccounts)) */

}


/* const checkAccount = (allUsers, userData) => {
    const checkUser = allUsers.filter((user) => {
        return (
            user.userEmail === userData.userEmail ||
            user.userPassword === userData.userPassword
        )
    });

    if (checkUser.length !== 0) {
        alert('Enter another data');
        return false;
    } else {
        return true;
    }
} */









/* 
const generateToken = () => {
    var length = 8,
        charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
        retVal = "";
    for (let i = 0, n = charset.length; i < length; ++i) {
        retVal += charset.charAt(Math.floor(Math.random() * n));
    }
    return retVal;
};
 */

/* const isAuthorisation = () => {
    if (!sessionStorage.getItem('user-token')) {
        sessionStorage.setItem('user-token', '');
        window.location.href = "index.html";
    }
}
 */

const writeAccountData = (event) => {
    event.preventDefault();
    let userName = document.querySelector('#email').value;
    let userPassword = document.querySelector('#password').value;





    let currentAccounts = JSON.parse(
        localStorage.getItem('accounts'));

    for (let i of currentAccounts) {

        if (i.userPassword === userPassword.trim() && i.userEmail === userName.trim()) {

            window.location.replace("mainPage.html");
            userName = '';
            userPassword = '';
        };




    }

    const generateToken = () => {
        var length = 8,
            charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789",
            retVal = "";
        for (let i = 0, n = charset.length; i < length; ++i) {
            retVal += charset.charAt(Math.floor(Math.random() * n));
        }
        return retVal;
    };

    localStorage.setItem('token', generateToken());


    const del = () => {
        document.querySelector('#email').value = '';
        document.querySelector('#password').value = '';
    };


    setTimeout(del, 100);



};


/* const checkUser = (allUsers, userData) => {
    const checkUser = allUsers.filter((user) => {
        return (
            user.userEmail === userData.userEmail &&
            user.userPassword === userData.userPassword
        )
    });
    if (checkUser.length === 0) {
        alert('print another data');
        return false;
    } else {
        window.location.href = "mainPage.html";
        sessionStorage.setItem('user-token', generateToken());
        return true;
    } 

}*/
