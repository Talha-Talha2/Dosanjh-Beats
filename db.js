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

db.collection('Albums').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if(change.type === 'added'){
      renderAlbums(change.doc.data(), change.doc.id);
    }
    if(change.type === 'removed'){
      renderAlbums(change.doc.data(), change.doc.id);
    }
  });
});

db.collection('Tracks').onSnapshot(snapshot => {
  snapshot.docChanges().forEach(change => {
    if(change.type === 'added'){
      renderTracks(change.doc.data(), change.doc.id);
    }
    if(change.type === 'removed'){
      renderTracks(change.doc.data(), change.doc.id);
    }
  });
});
