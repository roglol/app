import firebase from 'firebase/app';
import 'firebase/storage';

// Initialize Firebase  
var firebaseConfig = {
    apiKey: "AIzaSyBY5qLus_DrY4KO2mDvh7MVWpv3q8apybA",
    authDomain: "upload-pictures-4e4f6.firebaseapp.com",
    databaseURL: "https://upload-pictures-4e4f6.firebaseio.com",
    projectId: "upload-pictures-4e4f6",
    storageBucket: "upload-pictures-4e4f6.appspot.com",
    messagingSenderId: "570387999523",
    appId: "1:570387999523:web:e63286ff34004e64"
  };
  firebase.initializeApp(firebaseConfig);

  const storage = firebase.storage();


  export {
      storage, firebase as default
  }