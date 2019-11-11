import {timelineView} from './screenTimeline.js'
export const profile =()=>{
    document.getElementById("goContainer").innerHTML=""
    var user = firebase.auth().currentUser.displayName;
   const profileContainer= document.createElement("div");
   profileContainer.className="profileGo"
   profileContainer.innerHTML=`
   <div>
   <img alt="foto de perfil"></img>
   <h1>${user}</h1>
   </div>
   <p id="return">volver al muro</p>
   <h3>tu actividad</h3>`
   document.getElementById("goContainer").appendChild(profileContainer);
   const clickReturn = document.getElementById("return");
   clickReturn.addEventListener('click', ()=>{
timelineView()
   })
}