
window.viewRegister=()=>{
/// registro
let container = document.getElementById("goContainer")
let result =""
let newUsers = document.createElement("div")
newUsers.className="new-Users"
newUsers.innerHTML= 
`<label id="labelEmailRegister">ingresa tu email</label>`+
`<input type="email" id="emailRegister" placeholder="xxx@example.com">` +
`<label id="labelPasswordRegister">contraseña</label>`+
`<input type="password" id="passwordRegister"  placeholder="ingresa tu contraseña">`+
`<button type="submit" id="btn-submitRegister">Ingresar</button>`
container.appendChild(newUsers).innerHTML
let btnrRegister= document.getElementById("btn-submitRegister");
btnrRegister.addEventListener('click', ()=>{
let userEmail = document.getElementById("emailRegister").value
let userPassword = document.getElementById("passwordRegister").value
console.log(userEmail)
console.log(userPassword)
result= window.registerNewUser(userEmail,userPassword)
})
return result
}