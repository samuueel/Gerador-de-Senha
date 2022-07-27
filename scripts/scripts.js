let sliderElement = document.querySelector('#slider');
let buttonElement = document.querySelector('#button');
let valor = document.querySelector('#valor');
let password = document.querySelector('#password');
let passwordContainer = document.querySelector('#container-password');
let charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&";
let novaSenha = "";

password.innerHTML = sliderElement.value;

sliderElement.oninput = function() {
    valor.innerHTML = this.value;
}

function generatePassword() {
    let pass = "";
    for (let i = 0, n = charset.length; i < sliderElement.value; ++i) {
        pass += charset.charAt(Math.floor(Math.random() * n));
    }
    
    passwordContainer.classList.remove('hide')
    password.innerHTML = pass;
    novaSenha = pass;  
}

function copyPassword() {
    navigator.clipboard.writeText(novaSenha)
    password.classList.add('copied')
    setTimeout (function() {
        reset ()
    },1000);             
}

function reset() {
    novaSenha = "",
    password.classList.remove('copied')  
}

