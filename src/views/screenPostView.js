import {iLikeIt} from '../models/likes.js'

export const postViews =(doc)=>{

  let postCard=  document.createElement("div")
  postCard.className="postCard"
  postCard.innerHTML=
  `<img alt="user"></img> 
  <p>${doc.id}</p>
  <button id="delete">Eliminar</button>
  <button id="edit">Editar</button>`
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