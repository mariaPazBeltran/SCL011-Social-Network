let result="";
window.viewLogin=()=>{
    let container = document.getElementById("goContainer")
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
     btnRegister.addEventListener('click', ()=>{
       return window.viewRegister()
     })
     const btnSubmit = document.getElementById("btn-submit")
  console.log(btnSubmit)
  btnSubmit.addEventListener('click', ()=>{
   let userEmail = document.getElementById("emailUser").value
  let userPassword = document.getElementById("passwordUser").value
  console.log(userEmail)
  console.log(userPassword) 
  result = window.logIn(userEmail, userPassword)
 })
 return result
}