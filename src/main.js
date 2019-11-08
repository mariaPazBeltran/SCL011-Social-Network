 // se traen las cosas que se necesitan desde el inicio
import {firebaseInit} from './models/initFirebase.js';
import {viewer} from './models/user.js';
 
 
 const init = () => {
    firebaseInit()
    viewer()
    
  }
  
  // aquí le decimos que cada vez que la pagina cargue de realizar la funcion init
 window.addEventListener('load', init);

