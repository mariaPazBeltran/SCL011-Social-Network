import {viewRegister} from './screenRegister.js';
// se importa la funcion de inicio de sesión
import {logIn} from '../models/user.js'

export const viewLogin=()=>{
    let container = document.getElementById("goContainer")
    container.innerHTML=""
    let loginContainer = document.createElement("div") 
    loginContainer.className = "loginContent"
    console.log(container)
    loginContainer.innerHTML=
    `<label id="labelEmail">ingresa tu email</label>`+
    `<input type="email" id="emailUser" placeholder="xxx@example.com">` +
    `<label id="labelPassword">contraseña</label>`+
    `<input type="password" id="passwordUser"  placeholder="ingresa tu contraseña">`+
    `<button type="submit" id="btn-submit">Ingresar</button>`+
    `<button type="button" id="register-User">Registrarse</button>`+
    `<button type="button" id="btn-gmail">Entrar con Gmail</button>`
     container.appendChild(loginContainer).innerHTML
     const btnRegister = document.getElementById("register-User")
     console.log(btnRegister)
     btnRegister.addEventListener('click', ()=>{
      viewRegister()
     })
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
}