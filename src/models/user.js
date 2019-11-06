import { timelineView } from '../views/screenTimeline.js';
import { viewInit } from '../views/screenInit.js';
import { validateUser } from '../controllers/validate.js';
import { validateNewUser } from '../controllers/validate.js';

/*funcion que manda la solicitud a firebase para iniciar sesion con usuarios
previamente registrados*/
export const logIn = (userEmail, userPassword) => {
  if (validateUser(userEmail, userPassword) === true) {
    firebase.auth().signInWithEmailAndPassword(userEmail, userPassword)
      .then(() => {
        window.location.hash = '#/screenTimeline';
      })
      // catch funciona cada vez que hay un error
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode)
        var errorMessage = error.message;
        console.log(errorMessage)
        // ...
        alert("Tu usuario o contraseña son incorrectos")
      });
  }
  else {
    alert("Debes completar todos los campos correctamente")
    window.location.hash = '#/screenInit';
  }
}



/* funcion que envia la solicitud a firebase para registrar nuevos usuarios*/
export const registerNewUser = (userEmail, userPassword, userName) => {
  if (validateNewUser(userEmail, userPassword, userName) === true) {
    firebase.auth().createUserWithEmailAndPassword(userEmail, userPassword)
      .then(() => {
        //saveUser(userEmail, userPassword, userName)
        var db = firebase.firestore();
        db.collection("Users").add({
          Name: userName,
          Email: userEmail,
          Password: userPassword,
          uId: firebase.auth().currentUser.uid
        })
          .then(() => {
            window.location.hash = '#/screenTimeline';
          })
      })
      .catch(function (error) {
        // Handle Errors here.
        var errorCode = error.code;
        console.log(errorCode)

        var errorMessage = error.message;
        alert("este usuario ya está registrado")
        // ...
      });
  }
  else {
    alert("Debes completar todos los campos correctamente")
    window.location.hash = '#/screenInit';
  }
}




export const authGoogle = () => {
  let provider = new firebase.auth.GoogleAuthProvider();
  authentication(provider);
}

//Autenticando con Firebase a través del objeto del proveedor de Google
function authentication(provider) {
  firebase.auth().signInWithPopup(provider).then(function (result) {
    // This gives you a Google Access Token. You can use it to access the Google API.
    let token = result.credential.accessToken;
    // The signed-in user info.
    let user = result.user;
    console.log(result);

  })
    .catch(function (error) {
      console.log(error);
      // Handle Errors here.
      let errorCode = error.code;
      console.log(errorCode);
      let errorMessage = error.message;
      console.log(errorMessage);
      // The email of the user's account used.
      let email = error.email;
      console.log(email);
      // The firebase.auth.AuthCredential type that was used.
      let credential = error.credential;
      console.log(credential);

    });
}



export const viewer = () => {
  firebase.auth().onAuthStateChanged(function (user) {
    if (user) {
      // User is signed in.
      console.log(user)

      console.log("usuario activo")
      timelineView()
    } else {
      // User is signed out.
      // ...
      console.log("no hay usuario activo")
      viewInit()
    }
  })
}