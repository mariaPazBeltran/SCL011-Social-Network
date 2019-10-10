 // se traen las cosas que se necesitan desde el inicio
 import {viewInit} from './views/screenInit.js';
 const init = () => {
     //la primera vista que se abre
  viewInit()
    
  }
  // aquí le decimos que cada vez que la pagina cargue de realizar la funcion init
 window.addEventListener('load', init);

 
  