import { collection, onSnapshot } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

// Listen to the "Artists" collection
const artistsCollection = collection(db, "Artists");
onSnapshot(artistsCollection, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    console.log(change);
  });
});
