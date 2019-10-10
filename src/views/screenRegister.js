
import {registerNewUser} from '../models/user.js'
export const viewRegister=()=>{
/// registro
let container = document.getElementById("goContainer")
container.innerHTML ="";
let newUsers = document.createElement("div")
newUsers.className="new-Users"
let logoInitContainer=  document.createElement("div");
logoInitContainer.className = "logo-Container";
logoInitContainer.innerHTML= `<img src="" alt="holi" id=""></img>`;
let btnRegisterContainer = document.createElement("div") 
btnRegisterContainer.className = "btn-registerContent"

btnRegisterContainer.innerHTML= 
`<input type="text" id="nameRegister" placeholder="nombre de usuario">` +
`<input type="email" id="emailRegister" placeholder="xxx@example.com">` +
`<input type="password" id="passwordRegister"  placeholder="ingresa tu contraseña">`+
`<button type="submit" id="btn-submitRegister">Ingresar</button>`
newUsers.appendChild(logoInitContainer)
newUsers.appendChild(btnRegisterContainer)
container.appendChild(newUsers).innerHTML

let btnrRegister= document.getElementById("btn-submitRegister");
/*al apretar el boton, se toma el valor de lo ingresado por el usuario
  y se inicia la funcion importada con los parametros correctos*/
btnrRegister.addEventListener('click', ()=>{
let userEmail = document.getElementById("emailRegister").value
let userPassword = document.getElementById("passwordRegister").value
console.log(userEmail)
console.log(userPassword)
registerNewUser(userEmail, userPassword)
})
}