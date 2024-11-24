// Import the Firestore library
import { db } from './firebase'; // Assuming you have your Firebase setup

// Get a reference to the collection you want to listen to
const artists = db.collection('Artists');

// Create a listener for the collection
const unsubscribe = artists.onSnapshot((snapshot) => {
  snapshot.docChanges().forEach((change) => {
    if (change.type === 'added') {
      console.log('New message:', change.doc.data());
      // Update your app UI with the new message
    } else if (change.type === 'modified') {
      console.log('Message updated:', change.doc.data());
      // Update your app UI with the modified message
    } else if (change.type === 'removed') {
      console.log('Message deleted:', change.doc.data());
      // Remove the message from your app UI
    }
  });
});

// To stop listening, call unsubscribe()
unsubscribe(); 
