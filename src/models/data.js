import {postViews} from '../views/screenPostView.js'


/*aquí guardamos los post en firebase*/
export const takePostValue =()=>{
    var db = firebase.firestore();
    db.collection("Post").add({
        user:"",
        post: document.getElementById("inputPost").value,
        date: new Date(),
        uId: firebase.auth().currentUser.uid
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
            return doc.data();
        });
        postMap.sort((a, b)=>b.date.seconds-a.date.seconds);
        postViews(postMap.shift());
    })
    .catch(function(error) {
       // console.log("Error getting documents: ", error);
    });
}

