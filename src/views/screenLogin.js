import {viewRegister} from './screenRegister.js';
// se importa la funcion de inicio de sesión
import {logIn} from '../models/user.js'
import {authGoogle} from '../models/user.js'

export const viewLogin=()=>{
    let container = document.getElementById("goContainer")
    container.innerHTML=""

    let contentLogin = document.createElement("div") 
    contentLogin.className = "login-content"
    let logoInitContainer = document.createElement("div");
    logoInitContainer.className="logo-Container";
    logoInitContainer.innerHTML=`<img src="imgs/02_01.png" alt="Go!" id="img-logo" align="middle" height="30%" weight="30%"></img>`;
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
  /*al apretar el boton, se toma el valor de lo ingresado por el usuario
  y se inicia la funcion importada con los parametros correctos*/
  btnSubmit.addEventListener('click', ()=>{
   let userEmail = document.getElementById("emailUser").value
  let userPassword = document.getElementById("passwordUser").value
  console.log(userEmail)
  console.log(userPassword) 
  logIn(userEmail, userPassword)
 })
 const btnGoogle = document.getElementById("btn-gmail")
 btnGoogle.addEventListener('click', ()=>{
    authGoogle()
   })
   

}