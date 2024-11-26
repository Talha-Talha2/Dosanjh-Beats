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

//add new artist
const artistform = document.querySelector('ADDARTISTFORM');
artistform.addEventListener('submit', evt => {
  evt.preventDefault();

  const addartist = {
    Name: artistform.Name.value,
    Description: artistform.ArtistDescription.value,
    Album1: artistform.ALBUM1.value,
    Album2: artistform.ALBUM2.value,
    Album3: artistform.ALBUM3.value,
    Album4: artistform.ALBUM4.value,
    Album5: artistform.ALBUM5.value,
    Track1: artistform.TRACK1.value,
    Track2: artistform.TRACK2.value,
    Track3: artistform.TRACK3.value,
    Track4: artistform.TRACK4.value,
    Track5: artistform.TRACK5.value,
  };

  db.collection(Artists).add(addartist)
    .catch(err => console.log(err));

  artistform.Name.value = '';
  artistform.ArtistDescription.value,
  artistform.ALBUM1.value = '';
  artistform.ALBUM2.value = '';
  artistform.ALBUM3.value = '';
  artistform.ALBUM4.value = '';
  artistform.ALBUM5.value = '';
  artistform.TRACK1.value = '';
  artistform.TRACK2.value = '';
  artistform.TRACK3.value = '';
  artistform.TRACK4.value = '';
  artistform.TRACK5.value = '';
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
