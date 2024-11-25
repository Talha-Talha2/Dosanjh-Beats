import { collection, onSnapshot } from "https://www.gstatic.com/firebasejs/11.0.1/firebase-firestore.js";

import { enableLogging } from "firebase/firestore";
enableLogging(true);

// Access the "Artists" collection
const artistsCollection = collection(db, "Artists");

// Listen to changes in the collection
onSnapshot(artistsCollection, (snapshot) => {
  snapshot.docChanges().forEach((change) => {
    console.log(change.type, change.doc.data());
  });
});
