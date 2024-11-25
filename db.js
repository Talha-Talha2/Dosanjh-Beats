const db = getFirestore(app);

db.collection('Artists').onSnapshot((snapshot) => {
  console.log(snapshot.docChanges());
})
