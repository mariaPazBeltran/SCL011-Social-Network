import { takePostValue } from '../models/data.js'
import { recoverPost } from '../models/data.js'
import { logOut } from '../models/logOut.js'

//creando contenedor principal del timeline
export const timelineView = () => {
  let container = document.getElementById("goContainer");
  container.innerHTML = "";
  let timelineContent = document.createElement("div")
  timelineContent.className = "timeline-content";

  //navbar del timeline
  let navbar = document.createElement("div")
  navbar.className = "navbar"
  navbar.innerHTML =
    `<nav>
<div class=logo>
<img src="" alt="holi" id=""></img>
<a href="#" class="btn-menu" id="btn-menu"><i class="fas fa-bars"></i></a>
</div>
    <ul>
    <button id="perfil">Perfil</button>
    <button id="search-friends">Buscar Amigos</button>
    <button id="close">Cerrar Sesión</button>
    </ul>
</nav>`


  //creando div contenedor "timeline-view" que va dentro del contenedor "timeline-content"
  let timelineView = document.createElement("div")
  timelineView.className = "timeline-view";

  //creando el div del text area que va dentro del div "timeline-view"
  let createPost = document.createElement("div")
  createPost.className = "create-Post"
  createPost.innerHTML =
    `<input type="text" placeholder="¿cúal es tu proxima actividad?" id="inputPost">` +
    `<button id="btn-post">Publicar</button>`

  //creando container "print-here" donde se imprimirá el "postCard"
  let printPostContainer = document.createElement("div")
  printPostContainer.className = "print-post-container";
  printPostContainer.innerHTML =
    `<div id="print-here"></div>`


  timelineContent.appendChild(navbar).innerHTML;
  timelineContent.appendChild(timelineView)
  timelineView.appendChild(createPost).innerHTML;
  createPost.appendChild(printPostContainer).innerHTML;
  container.appendChild(timelineContent);



  /*cerrar sesión*/
  const btnClose = document.getElementById("close")
  btnClose.addEventListener('click', () => {
    logOut()
  })
  

  const btnPost = document.getElementById("btn-post")
  btnPost.addEventListener('click', () => {
    /*El boton deberia poder guardar la info del usuario e imprimirla */
    let valuePost = document.getElementById("inputPost").value
    let counter = 0;

    takePostValue(valuePost, counter)

  })
}



