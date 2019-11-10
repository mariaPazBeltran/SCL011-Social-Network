import {takePostValue} from '../models/data.js'
import {profile} from './screenProfile.js'
import {logOut} from '../models/logOut.js'


export const timelineView=()=>{
let container = document.getElementById("goContainer");
container.innerHTML="";
var user = firebase.auth().currentUser.displayName;
let timelineContent = document.createElement("div")
timelineContent.className="timeline-content";

let navbar = document.createElement("div")
navbar.className = "navbar"
navbar.innerHTML = 
`<nav>
<div class=logo>
<img src="" alt="img"  id=""></img>
<h1>${user}</h1>
<a href="#" class="btn-menu" id="btn-menu"><i class="fas fa-bars"></i></a>
</div>
    <ul>
    <button id="perfil">Perfil</button>
    <button id="search-friends">Buscar Amigos</button>
    <button id="close">Cerrar Sesión</button>
    </ul>
</nav>` 

// contenedor de text area

let timelineView = document.createElement("div")
timelineView.className="timeline-view";

let createPost = document.createElement("div")
createPost.className = "create-Post"
createPost.innerHTML = 
`<input type="text" placeholder="¿cúal es tu proxima actividad?" id="inputPost">`+
`<button id="btn-post">Publicar</button>`


let printPostContainer = document.createElement ("div")
printPostContainer.className="print-post-container";
printPostContainer.innerHTML =
`<div id="print-here"></div>`


timelineContent.appendChild(navbar).innerHTML;
timelineContent.appendChild(timelineView)
timelineView.appendChild(createPost).innerHTML;
createPost.appendChild(printPostContainer).innerHTML;
container.appendChild(timelineContent);



const btnPost = document.getElementById("btn-post")
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


btnPost.addEventListener('click', ()=>{
  /*El boton deberia poder guardar la info del usuario e imprimirla */
    let valuePost= document.getElementById("inputPost").value
  let counter = 0;
	
    takePostValue(valuePost, counter)

}) 
}



