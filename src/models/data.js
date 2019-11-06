import {postViews} from '../views/screenPostView.js'


/*aquí guardamos los post en firebase*/
export const takePostValue =()=>{
    var db = firebase.firestore();
    db.collection("Post").add({
        user:"",
        post: document.getElementById("inputPost").value,
        date: new Date(),
        uId: firebase.auth().currentUser.uid,
        likes:  document.getElementById("clicks")
    })
    .then(function(docRef) {
        console.log("Document successfully written!", docRef.id);
    
        document.getElementById("inputPost").value=""
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });    
}




// aquí se toma los post publicados por los usuarios para poder imprimirlos
export const recoverPost = ()=>{
    var db = firebase.firestore();
    var postRef =db.collection("Post")
    postRef
    .where("uId", "==", firebase.auth().currentUser.uid)
    .get()
    .then(function(querySnapshot) {
        const postMap = querySnapshot.docs.map(function(doc) {
            console.log(doc.data().date);
            return {
				id: doc.id,
				...doc.data()
			};
        });
        postMap.sort((a, b)=>b.date.seconds-a.date.seconds);
        postViews(postMap.shift());
    })
    .catch(function(error) {
       // console.log("Error getting documents: ", error);
    });
}



/*
//editando post

export const editPost =(id)=>{
	let db = firebase.firestore();
	//obteniendo el post
	db.collection("Post").doc(id).get().then(doc=>{
		//obtenemos valor de elemento con texto de post
		document.getElementById(`inputPost`).value = doc.data().message;
		//daremos display block a input para poder cambiar texto(para que se vea el input)
		document.getElementById(`inputPost`).style.display = "block";
		//display none al <p> para que no se veia
		document.getElementById(`msg${doc.id}`).style.display = "none";
		//escondemos boton editar
		document.getElementById(`edit`).style.display = "none";
		// mostramos boton guardar
		document.getElementById(`save${doc.id}`).style.display = "inline";
		//evento con boton guardar
		document.getElementById('save'+doc.id).addEventListener('click', ()=>{
			//guardamos nuevo valor de post que esta en input
			let post = document.getElementById(`inp${doc.id}`).value;
			// hacemos update de post
			let docRef = db.collection("Post").doc(id);
			return docRef.update({
				message: post
			})
			.then(()=>{
				//volvemos que todo sea como era
				document.getElementById(`msg${doc.id}`).style.display = "block";
				document.getElementById(`inp${doc.id}`).style.display = "none";
				document.getElementById(`save${doc.id}`).style.display = "none";
				document.getElementById(`edit${doc.id}`).style.display = "inline";
				console.log("Documento actualizado")
			})
			.catch((error)=>{
				console.error(error);
			})
		})
	})
}
*/