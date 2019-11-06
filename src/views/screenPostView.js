import {iLikeIt} from '../models/likes.js'
import {editPost} from '../models/data.js'

export const postViews =(doc)=>{

  let postCard=  document.createElement("div")
  postCard.className="postCard"
  postCard.innerHTML=
  `<img alt="user"></img> 
  <button id="delete">Eliminar</button>
  <button id="edit">Editar</button>`
  let contentPost= document.createElement("div")
  contentPost.className="contentPost"
  contentPost.innerHTML= doc.post
  let likeContainer= document.createElement("div")
  likeContainer.className= "like-container"
  likeContainer.innerHTML=
  `<button id="like">like</button>
  <span id="clicks"></span>`
  postCard.appendChild(contentPost)
  postCard.appendChild(likeContainer)
  document.getElementById("print-here").appendChild(postCard).innerHTML
  const btnLike =  document.getElementById("like");
  console.log(btnLike)
  let clicks = 0;
  document.getElementById("clicks").innerHTML = clicks;
  btnLike.addEventListener('click', (id)=>{
   
      clicks += 1;
      document.getElementById("clicks").innerHTML = clicks;
      iLikeIt(id)
  
  })
}

//acionando boton editar

const editPost = getElementById("edit")
editPost.addEventListener('click', ()=>{
  editPost(doc.post);
})

