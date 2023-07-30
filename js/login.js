

const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const userName = document.querySelector("#userName"); 
const HIDDEN_CLASS = "hidden";
const USERNAME_KEY = "username";



function onSubmit(event){
    event.preventDefault();
    const userNameValue = loginInput.value;
    loginForm.classList.add(HIDDEN_CLASS);
    localStorage.setItem(USERNAME_KEY,userNameValue);
    loginUser(userNameValue);
}


function loginUser(name){
    userName.innerText = `Hello! ${name}`;
    userName.classList.remove(HIDDEN_CLASS);
}

const saveUserName = localStorage.getItem(USERNAME_KEY);

if(saveUserName === null){
    loginForm.classList.remove(HIDDEN_CLASS);
    loginForm.addEventListener("submit",onSubmit);
} else {
    loginUser(saveUserName);
}




