import {takePostValue} from '../models/data.js'
import {recoverPost} from '../models/data.js'
import {logOut} from '../models/logOut.js'

export const timelineView=()=>{
document.getElementById("goContainer").innerHTML="";
let navbar = document.createElement("div")
navbar.className = "navbar"
navbar.innerHTML = "imagen" + " boton desplegable"+`<button id="close">cerrar sesion</button>`
// contenedor de text area
let createPost = document.createElement("div")
createPost.className = "create-Post"
createPost.innerHTML = 
`<input type="text" placeholder="¿cúal es tu proxima actividad?" id="inputPost">`+
`<button id="btn-post">Publicar</button>`
document.getElementById("goContainer").appendChild(navbar).innerHTML
document.getElementById("goContainer").appendChild(createPost).innerHTML
const btnPost = document.getElementById("btn-post")
const btnClose= document.getElementById("close")
btnClose.addEventListener('click', ()=>{
logOut()
}) 


btnPost.addEventListener('click', ()=>{
  /*El boton deberia poder guardar la info del usuario e imprimirla */
    let valuePost= document.getElementById("inputPost").value
    takePostValue()

    recoverPost()
   // console.log(valuePost)
}) 
}