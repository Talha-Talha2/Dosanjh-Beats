// real-time listener
db.collection('Artists').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if(change.type === 'added'){
      renderArtists(change.doc.data(), change.doc.id);
    }
    if(change.type === 'removed'){
      renderArtists(change.doc.data(), change.doc.id);
    }
  });
});
