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
 export const authGoogle=()=>{
  var provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
}

//Autenticando con Firebase a través del objeto del proveedor de Google
function authentication(provider){
  firebase.auth().signInWithPopup(provider).then(function(result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    var token = result.credential.accessToken;
    // The signed-in user info.
    var user = result.user;
    console.log(result);

  })
  .catch(function(error) {
    console.log(error);
    // Handle Errors here.
    var errorCode = error.code;
    console.log(errorCode);
    var errorMessage = error.message;
    console.log(errorMessage);   
    // The email of the user's account used.
    var email = error.email;
    console.log(email);
    // The firebase.auth.AuthCredential type that was used.
    var credential = error.credential;
    console.log(credential);

  });
}




