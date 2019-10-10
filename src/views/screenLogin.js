import {viewRegister} from './screenRegister.js';
import {logIn} from '../models/user.js'

export const viewLogin=()=>{
    let container = document.getElementById("goContainer")
    container.innerHTML=""
    let contentLogin = document.createElement("div") 
    contentLogin.className = "login-content"
    let logoInitContainer = document.createElement("div");
    logoInitContainer.className="logo-Container";
    logoInitContainer.innerHTML=`<img src="" alt="holi" id=""></img>`;
    let btnLoginContainer=document.createElement("div");
    btnLoginContainer.className="btn-LoginContent"
    console.log(container)
    btnLoginContainer.innerHTML=
    `<input type="email" id="emailUser" placeholder="Ingresa tu email">` +
    `<input type="password" id="passwordUser"  placeholder="Contraseña">`+
    `<button type="submit" id="btn-submit">Iniciar sesión</button>` +
    `<button type="button" id="btn-gmail">Iniciar sesión con Gmail</button>`

contentLogin.appendChild(logoInitContainer);
contentLogin.appendChild(btnLoginContainer);
container.appendChild(contentLogin).innerHTML;

const btnSubmit = document.getElementById("btn-submit")
  console.log(btnSubmit)
  btnSubmit.addEventListener('click', ()=>{
   let userEmail = document.getElementById("emailUser").value
  let userPassword = document.getElementById("passwordUser").value
  console.log(userEmail)
  console.log(userPassword) 
  logIn(userEmail, userPassword)
 })
}