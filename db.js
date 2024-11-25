import { collection, onSnapshot } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Listen to changes in the collection
onSnapshot(db.collection("Artists"), (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    console.log(change.type, change.doc.data());
  });
});
