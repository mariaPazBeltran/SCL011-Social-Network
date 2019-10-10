import {viewLogin} from './screenLogin.js';
import {viewRegister} from './screenRegister.js';


export const viewInit = ()=>{
    let initContent = document.createElement("div");
    initContent.className= "init-content";
    let logoInitContainer=  document.createElement("div");
    logoInitContainer.className = "logo-Container";
    logoInitContainer.innerHTML= `<img src="" alt="holi" id=""></img>`;
    let buttonsInit = document.createElement("div");
    buttonsInit.className = "buttons-Init";
    buttonsInit.innerHTML= `<button id ="initLogin">Iniciar sesion</button>` +
    `<button id ="initRegister">Registrarse</button>`+
    `<button id ="initGoogle">Iniciar con Google</button>`
    initContent.appendChild(logoInitContainer)
    initContent.appendChild(buttonsInit)
    document.getElementById("goContainer").appendChild(initContent).innerHTML
    const btnInitLogin = document.getElementById("initLogin")
    const btnInitRegister = document.getElementById("initRegister")
    const btnInitGoogle = document.getElementById("initGoogle")
    btnInitLogin.addEventListener('click', ()=>{
        viewLogin()
       })
       
       btnInitRegister.addEventListener('click', ()=>{
        viewRegister()
       })
      
    console.log(btnInitLogin);
    console.log(btnInitRegister);
    console.log(btnInitGoogle);
}