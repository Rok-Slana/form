const pwdRegex = document.getElementById('pwd');

pwdRegex.addEventListener('input', (e) => {
    let pwdRegexString = pwdRegex.value;
    if(!/(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]/.test(pwdRegexString)){
        console.log('Hi!')
        pwdRegex.setCustomValidity('Password must be at least 8 characters long and contain one upper case letter, one lower case letter and one number');
        pwdRegex.reportValidity();
    }else{
        pwdRegex.setCustomValidity('');
    }
});

const pwdValidated = document.getElementById('pwdVal');

pwdValidated.addEventListener('input', (e) => {

    let pwdString = pwdValidated.value;
    let pwdFirst = document.getElementById('pwd').value;

    if(pwdString != pwdFirst){
        pwdValidated.setCustomValidity('Passwords do not match');
        pwdValidated.reportValidity();
    }else{
        pwdValidated.setCustomValidity('');
    }
});

function submitCheck(){
    let first = pwdRegex.value;
    let second = pwdValidated.value;
    if(first == second){
    }
    else{
        alert('Passwords do not match');
    }
}