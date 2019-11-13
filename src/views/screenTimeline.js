import {takePostValue} from '../models/data.js'
import {profile} from './screenProfile.js'
import {logOut} from '../models/logOut.js'

//creando contenedor principal del timeline
export const timelineView=()=>{
let container = document.getElementById("goContainer");
container.innerHTML="";
var user = firebase.auth().currentUser.displayName;
let timelineContent = document.createElement("div")
timelineContent.className="timeline-content";
 //navbar del timeline
let navbar = document.createElement("div")
navbar.className ="navbar"
navbar.innerHTML = 
`<nav>
<div class="logo">
<h1>${user}</h1>
</div>

<div class="burger">
<div class="line1"></div>
<div class="line2"></div>
<div class="line3"></div>
</div>

    <ul class="btn-burger">
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
    `<input type="text" placeholder="¿cúal es tu proxima actividad?" id="inputPost"
    }">` +
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

const btnProfile= document.getElementById("perfil")
/* Se abre el perfil */
btnProfile.addEventListener('click',()=>{
  console.log(btnProfile)
profile()
})
/*cerrar sesión*/
const btnClose= document.getElementById("close")
btnClose.addEventListener('click', ()=>{
logOut()
}) 


  const btnPost = document.getElementById("btn-post")
  btnPost.addEventListener('click', () => {
    /*El boton deberia poder guardar la info del usuario e imprimirla */
    let valuePost = document.getElementById("inputPost").value
    let counter = 0;
    let likeStatus = false
    takePostValue(valuePost, counter, likeStatus)

  })
}



