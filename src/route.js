import {viewLogin} from './screenLogin.js';
import {viewRegister} from './screenRegister.js';
import {viewProfile} from './screenProfile.js';
import {timelineView} from './screenTimeline.js';


const changeRoute = (hash) => {
    if (hash === "#/login" || hash === "#/register" || hash === "#/profile" || hash === "#/home"){
    return showTheme(hash);
}
return showTheme(hash);
}

const showTheme = (hash) => {
    const router = hash.substring(2);
    const container = document.getElementById("goContainer");
    container.innerHTML="";

    if (router == "login"){
        viewLogin();
    }

    else if (router == "register"){
        viewRegister();
    }

    else if (router=="profile"){
        viewProfile();
    }

    else if (router="home"){
        timelineView();
    }

    else {
        container.innerHTML = `<p>Error 404</p>`
    }
}



/* QUE SIGNIFICA?

export const initRouter = () => {
  // cuando la ventana se carga saca el hash y se lo pasa a changeRoute
  window.addEventListener('load', changeRoute(window.location.hash));

  // si encuentra un cambio en el hash lo vuelve a sacar y pasar como parámetro a changeRoute
  if ('onhashchange' in window) {
    window.onhashchange = () => {
      changeRoute(window.location.hash);
    }
  }
}
*/
