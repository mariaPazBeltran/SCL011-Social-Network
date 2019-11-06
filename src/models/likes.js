
export const iLikeIt =(id)=>{
 
  var db = firebase.firestore();
  // To update age and favorite color:
db.collection("Post").doc(id).update({
  "likes":  document.getElementById("clicks")
})
.then(function() {
  console.log("Document successfully updated!");
});
//test.firestore.js

    
}

/*var starCountRef = firebase.database().ref('posts/' + postId + '/starCount');
starCountRef.on('value', function(snapshot) {
  updateStarCount(postElement, snapshot.val());
});*/
