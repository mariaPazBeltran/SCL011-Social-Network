export const takePostValue =()=>{
    var db = firebase.firestore();
    db.collection("Post").add({
        user:"",
        post: document.getElementById("inputPost").value,
        date: new Date(),
    })
    .then(function() {
        console.log("Document successfully written!");
    })
    .catch(function(error) {
        console.error("Error writing document: ", error);
    });
    
}
