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
    db.collection("Post").where("uId", "==", firebase.auth().currentUser.uid)
    .get()
    .then(function(querySnapshot) {
        querySnapshot.forEach(function(doc) {
            postViews(doc)
            console.log(doc.id, " => ", doc.data());
        });
    })
    .catch(function(error) {
       // console.log("Error getting documents: ", error);
    });
}

