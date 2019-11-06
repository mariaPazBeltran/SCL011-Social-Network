import {deletePost} from '../models/data.js'

export const postViews =(doc)=>{

  let contentPost= document.createElement("div")
  contentPost.className="contentPost"
  contentPost.innerHTML= doc.post;


  let postCard=  document.createElement("div")
  postCard.className="postCard";
  postCard.innerHTML=
  `<div id="img"></div> 
  <div id="buttons">
  <button id="edit">Editar</button>
  <button id="delete">Eliminar</button>
  </div>`

  postCard.appendChild(contentPost)
  document.getElementById("print-here").appendChild(postCard).innerHTML;

let btnDelete = document.getElementById("delete");
 btnDelete.addEventListener("click", () => {
    deletePost(doc.post)
      postCard.innerHTML="";

  });
}