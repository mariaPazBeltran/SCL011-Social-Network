
import {deletePost} from '../models/data.js'

export const postViews =(doc)=>{
  let postCard=  document.createElement("div")
  postCard.className="postCard";
  postCard.innerHTML=
  `<div id="img"></div> 
  <div id="buttons">
  <button id="edit">Editar</button>
  <button id="delete">Eliminar</button>
  </div>`
  let contentPost= document.createElement("div")
  contentPost.className="contentPost"
  contentPost.innerHTML= doc.post
  let likeContainer= document.createElement("div")
  likeContainer.className= "like-container"
  likeContainer.innerHTML=
  `<button id="${doc.id}" class="like">like</button>
  <span id="counter">${doc.likes}</span>`
  postCard.appendChild(contentPost)
  postCard.appendChild(likeContainer)
  document.getElementById("print-here").appendChild(postCard).innerHTML
    const btnLike =  document.getElementById(doc.id);
  let btnDelete = document.getElementById("delete");
 btnDelete.addEventListener("click", () => {
    deletePost(doc.post)
      postCard.innerHTML="";

  });
  btnLike.addEventListener('click', ()=>{
    console.log(btnLike)
    
    let counter = doc.likes;
    counter += 1;	
    // iLikeIt(id, liked, count)
    var db = firebase.firestore();
 
    let docRef = db.collection('Post').doc(doc.id);
        return docRef.update({
          likes: counter
        })
        .then(()=>{
          console.log("Documento actualizado")
          document.getElementById("counter").innerHTML=""
          document.getElementById("counter").innerHTML=counter

        })
        .catch((error)=>{
          console.error(error);
          console.log("No se ha podido actualizar")
        })
  })
  
}