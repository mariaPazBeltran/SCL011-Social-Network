
export const logIn=(userEmail, userPassword)=>{
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
}
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