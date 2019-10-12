/*export const postViews =(doc)=>{
  let postCard=  document.createElement("div")
  postCard.className="postCard"
  postCard.innerHTML=
  `<img alt="user"></img> 
  <button>Eliminar</button>
  <button>Editar</button>`
  let contentPost= document.createElement("div")
  contentPost.className="contentPost"
  contentPost.innerHTML= doc.data().post
  postCard.appendChild(contentPost)
  document.getElementById("goContainer").appendChild(postCard).innerHTML
}*/