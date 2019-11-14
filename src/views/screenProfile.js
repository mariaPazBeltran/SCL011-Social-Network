import {timelineView} from './screenTimeline.js'
export const profile =()=>{
    document.getElementById("goContainer").innerHTML=""
    var user = firebase.auth().currentUser.displayName;
   
    let navbar = document.createElement("div")
    navbar.className = "navbar"
    navbar.innerHTML = 
    `<nav>
    <div class="logo"></div>
    <div class="burger">
    <div class="line1"></div>
    <div class="line2"></div>
    <div class="line3"></div>
    </div>
        <ul>
        <button id="perfil">Perfil</button>
        <button id="search-friends">Buscar Amigos</button>
        <button id="close">Cerrar Sesión</button>
        </ul>
    </nav>`

   const profileContainer= document.createElement("div");
   profileContainer.className="profileGo"
    profileContainer.innerHTML=`
   <div class="logo">
   <h1>${user}</h1>
   </div>
   <button id="return">volver al muro</button>
   <h3>tu actividad</h3>`
   document.getElementById("goContainer").appendChild(navbar);
   document.getElementById("goContainer").appendChild(profileContainer);
   const clickReturn = document.getElementById("return");
   clickReturn.addEventListener('click', ()=>{
timelineView()
   })
}

