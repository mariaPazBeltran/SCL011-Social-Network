

export const iLikeIt =(liked, count)=>{
  
  var db = firebase.firestore();
 
  let docRef = db.collection('post').doc(id);
			return docRef.update({
				likes: count,
				liked: liked
			})
			.then(()=>{
				//document.getElementById('like'+doc.id).disabled = true;
				document.getElementById('heart'+doc.id).style.color = "#ff637d";
				console.log("Documento actualizado")
			})
			.catch((error)=>{
				console.error(error);
			})}