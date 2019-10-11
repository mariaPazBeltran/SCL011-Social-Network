import {takePostValue} from '../models/data.js'

export const timelineView=()=>{
document.getElementById("goContainer").innerHTML="";
let navbar = document.createElement("div")
navbar.className = "navbar"
navbar.innerHTML = "imagen" + "boton desplegable"
// contenedor de text area
let createPost = document.createElement("div")
createPost.className = "create-Post"
createPost.innerHTML = 
`<input type="text" placeholder="¿cúal es tu proxima actividad?" id="inputPost">`+
`<button id="btn-post">Publicar</button>`
document.getElementById("goContainer").appendChild(navbar).innerHTML
document.getElementById("goContainer").appendChild(createPost).innerHTML
const btnPost = document.getElementById("btn-post")
btnPost.addEventListener('click', ()=>{
    let valuePost= document.getElementById("inputPost").value
    takePostValue(valuePost)
    console.log(valuePost)
})
}