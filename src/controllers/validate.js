//validando que el correo electrónico esté bien escrito bajo expresión regular del patron del correo
export const validateEmail = (emailLogin) => {
  if (emailLogin === "" || emailLogin.length === 0 || !/^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.([a-zA-Z]{2,4})+$/.test(emailLogin)) {
      return false;
  }
  else{
    return true;
  }
}
  
  //validando que los campos de datos de usuario no estén vacios y que el correo sea válido en el inicio de sesión
  export const validateUser = (userEmail, userPassword) => {
      if(!validateEmail(userEmail) || userEmail === "" || userPassword === ""){
          return false;
      }else{
          return true;
      }
  }

  //validando los datos de registro de nuevo usuario
  export const validateNewUser = (userEmail,userPassword, userName) => {
      if(!validateEmail(userEmail) || userEmail ==="" || userPassword==="" || userPassword.length<6 || userName === ""){
          return false;
      }else{
          return true;
      }
  }
 

/*
function validarEmail(valor) {
  if (/^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,3,4})+$/.test(valor)){
   alert("La dirección de email " + valor + " es correcta.");
  } else {
   alert("La dirección de email es incorrecta.");
  }
}
 */

  /*
  export const notifyError = (errorCode, errContainerId) => {
  const errorMessages = {
    "auth/email-already-in-use": "Este correo ya esta asociado a otra cuenta",
    "auth/wrong-password": "Contraseña incorrecta. Vuelve a intentarlo.",
    "auth/user-not-found": "Usuario no registrado",
    "auth/invalid-email-verified": "Te hemos enviado un correo electrónico para verificar tu cuenta, por favor confirmalo antes de iniciar sesión",
    "auth/invalid-email": "Por favor ingresa un email válido",
  }
  const errorContainer = document.getElementById(errContainerId);

  const imprErr = document.createElement('div');
  imprErr.innerHTML = `<p>${errorMessages[errorCode]}</p>`;
  errorContainer.appendChild(imprErr);
}
*/

