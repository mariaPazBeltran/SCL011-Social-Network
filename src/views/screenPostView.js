import {editPost} from '../models/data.js'
import { deletePost } from '../models/data.js'

//contenedor mayor postCard que luego se imprimirá en el div "print-here"
export const postViews = (doc) => {
  let postCard = document.createElement("div")
  postCard.className = "postCard";
  postCard.innerHTML =
    `<div id="img"></div> 
  <span>${doc.user}</span>
  <div id="buttons">
  <button id="edit${doc.post}" class="edit">Editar</button>
  <button id="delete${doc.id}">Eliminar</button>
  <button id="save${doc.post}" class="save" style="display:none">Guardar</button>
  </div>`

  //contenedor para el texto del post
  let contentPost = document.createElement("div")
  contentPost.className = "contentPost"
  contentPost.innerHTML = doc.post


  //contenedor de elemento like
  let likeContainer = document.createElement("div")
  likeContainer.className = "like-container"
  likeContainer.innerHTML =
    `<button id="${doc.id}" class="like">like</button>
  <span id="counter">${doc.likes}</span>`

  //asignando el contenedor "contentPost y likeContainer al contenedor postCard"
  postCard.appendChild(contentPost)
  postCard.appendChild(likeContainer)

  //imprimiendo contenedor postCard en el div "print-here"
  document.getElementById("print-here").appendChild(postCard).innerHTML

  //accionando boton eliminar
  let btnDelete = document.getElementById("delete"+doc.id);
  btnDelete.addEventListener("click", () => {
    deletePost(doc.id)
    postCard.innerHTML = "";
  });

  //accion boton like
  const btnLike = document.getElementById(doc.id);
  btnLike.addEventListener('click', () => {
    console.log(btnLike)

    let counter = doc.likes;
    counter += 1;
    // iLikeIt(id, liked, count)
    var db = firebase.firestore();

    let docRef = db.collection('Post').doc(doc.id);
    return docRef.update({
      likes: counter
    })
      .then(() => {
        console.log("Likes actualizado")
        document.getElementById("counter").innerHTML = ""
        document.getElementById("counter").innerHTML = counter

      })
      .catch((error) => {
        console.error(error);
        console.log("No se ha podido actualizar")
      })
  })

  //acionando boton editar
  const editingPost = document.getElementById("edit"+doc.post);
  editingPost.addEventListener('click', () => {
    console.log(editingPost);
    editPost(doc.post);
  })

}
