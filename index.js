//Interações do usuário

let sliderElement = document.querySelector("#slider")
let buttonElement = document.querySelector("#inputButton")

//Elementos a serem exibidos

let sizePassword = document.querySelector("#inputLength")
let password = document.querySelector("#password")
let containerPassword = document.querySelector("#passwordContainer")

//Elementos gerados pelo script

let charSet = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%&*¨+"
let newPassword =""


sizePassword.innerHTML = sliderElement.value;

slider.oninput = function(){
    sizePassword.innerHTML = this.value
}


function generatePassword(){
    
    let pass = '';
    
    for(let i = 0 , n = charSet.length; i < sliderElement.value; ++ i){
        pass += charSet.charAt(Math.floor(Math.random() * n));
    }
    
    containerPassword.classList.remove("hidden")
    password.innerHTML = pass
    newPassword = pass
}


function copyPassword(){
    navigator.clipboard.writeText(newPassword)
    containerPassword.classList.remove("hidden")
}
