export const postViews =(doc)=>{
  let postCard=  document.createElement("div")
  postCard.className="postCard"
  postCard.innerHTML=
  `<img alt="user"></img> 
  <button id="delete">Eliminar</button>
  <button id="edit">Editar</button>`
  let contentPost= document.createElement("div")
  contentPost.className="contentPost"
  contentPost.innerHTML= doc.data().post
  postCard.appendChild(contentPost)
  document.getElementById("print-here").appendChild(postCard).innerHTML
}