
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

  