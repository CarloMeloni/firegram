import * as firebase from 'firebase/app';
import 'firebase/storage';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyB0JKG2kDK4k1L02TspPVRhrX4fWFkhDlI",
    authDomain: "chergram.firebaseapp.com",
    databaseURL: "https://chergram.firebaseio.com",
    projectId: "chergram",
    storageBucket: "chergram.appspot.com",
    messagingSenderId: "855326775782",
    appId: "1:855326775782:web:63149f9c3975c36e8d5e27"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);

  const projectStorage = firebase.storage();
  const projectFirestore = firebase.firestore();

  export { projectStorage, projectFirestore };