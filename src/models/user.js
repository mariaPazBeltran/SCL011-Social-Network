/* funcion que manda la solicitud a firebase para iniciar sesion con usuarios
previamente registrados*/
export const logIn=(userEmail, userPassword)=>{
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
    // catch funciona cada vez que hay un error
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode)
      var errorMessage = error.message;
      console.log(errorMessage)
      // ...
      alert("tu usuario o contraseña son incorrectos")
    });
}

/* funcion que envia la solicitud a firebase para registrar nuevos usuarios*/
export const registerNewUser =(userEmail,userPassword)=>{
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
.catch(function(error) {
  // Handle Errors here.
  var errorCode = error.code;
  console.log(errorCode)

  var errorMessage = error.message;
  alert("este usuario ya está registrado")
  // ...
});
}