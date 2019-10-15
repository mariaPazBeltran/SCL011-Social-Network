//import {postViews} from '../views/screenPostView.js'

export const takePostValue =()=>{
    var db = firebase.firestore();
    db.collection("Post").add({
        user:"",
        post: document.getElementById("inputPost").value,
        date: new Date(),
    })
    .then(function(docRef) {
        console.log("Document successfully written!", docRef.id);
        document.getElementById("inputPost").value=""
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });    
}


export const recoverPost = ()=>{
    var db = firebase.firestore();
    db.collection("Post").get()
    .then(function(querySnapshot) {
     querySnapshot.forEach(function(doc) {
      console.log(doc.id, " => ", doc.data());
    //  postViews(doc)
    //  console.log(postViews)
    });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}


/*export const recoverPost = ()=>{
    var db = firebase.firestore();
    db.collection("Post").where("post", "==", true)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            // doc.data() is never undefined for query doc snapshots
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
        console.log("Error getting documents: ", error);
    });
}*/

