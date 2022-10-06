console.log('test');

function passwordValidation(){
    const password1 = document.getElementById('pwd').innerText;
    const password2 = document.getElementById('pwdVal').innerText;

    password1 === password2 ? console.log('Ok') : console.log('NoGo');
}