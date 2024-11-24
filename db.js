const db = firebase.firestore();

db.collection('Artists'),onSnapshot((snapshot) => {
  console.log(snapshot.docChanges());
})
