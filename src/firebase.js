import firebase from "firebase";

var firebaseConfig = {
  apiKey: "AIzaSyDJnIJkNS2dYnzTSFmDIWrOzrDDHzffyXE",

  authDomain: "zopstore.firebaseapp.com",

  projectId: "zopstore",

  storageBucket: "zopstore.appspot.com",

  messagingSenderId: "893970050692",

  appId: "1:893970050692:web:fb29f707b6d9dddb631cd1",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();
const storage = firebase.storage();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, storage, provider };
