export const logOut=()=>{
    firebase.auth().signOut()
    .then(function() {
        console.log("cerrando sesion")
    })
    // catch funciona cada vez que hay un error
    .catch(function(error) {
      // Handle Errors here.
      var errorCode = error.code;
      console.log(errorCode)
      var errorMessage = error.message;
      console.log(errorMessage)
      // ...
      console.log(errorCode)
    });
}