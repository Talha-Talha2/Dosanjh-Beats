db.collection('Artists').onSnapshot((snapshot) => {
  console.log(snapshot.docChanges());
})
