
 let container = document.getElementById("goContainer")
 let loginContainer = document.createElement("div") 
 loginContainer.className = "loginContent"
 console.log(container)
 loginContainer.innerHTML=
 `<label id="labelEmail">ingresa tu email</label>`+
 `<input type="email" id="emailUser" placeholder="xxx@example.com">` +
 `<label id="labelPassword">contraseña</label>`+
 `<input type="password" id="passwordUser"  placeholder="ingresa tu contraseña">`+
 `<button type="submit" id="btn-submit">Ingresar</button>`
  container.appendChild(loginContainer).innerHTML

  ///
  const btnSubmit = document.getElementById("btn-submit")
  console.log(btnSubmit)
  btnSubmit.addEventListener('click', ()=>{
   let userEmail = document.getElementById("emailUser").value
  let userPassword = document.getElementById("passwordUser").value
  console.log(userEmail)
  console.log(userPassword)
  firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
  .catch(function(error) {
    // Handle Errors here.
    var errorCode = error.code;
    console.log(errorCode)
    var errorMessage = error.message;
    console.log(errorMessage)
    // ...
    alert("tu usuario o contraseña son incorrectos")
  });
  
  })
  




 //// registro
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
 firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
 .catch(function(error) {
   // Handle Errors here.
   var errorCode = error.code;
   console.log(errorCode)
   var errorMessage = error.message;
   // ...
 });
})