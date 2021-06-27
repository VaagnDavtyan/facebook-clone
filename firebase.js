import firebase from 'firebase'
import 'firebase/storage';

var firebaseConfig = {
    apiKey: "AIzaSyDE6f0MLtGlEaCYkcrev7Ri4pgdAtqasmU",
    authDomain: "facebook-2-d675b.firebaseapp.com",
    projectId: "facebook-2-d675b",
    storageBucket: "facebook-2-d675b.appspot.com",
    messagingSenderId: "233456612418",
    appId: "1:233456612418:web:5067660c989f45001ae9db",
    measurementId: "G-264KSFG91R"
  };


  const app = !firebase.apps.length ? firebase.initializeApp(firebaseConfig) : firebase.app();
  
  const db = app.firestore();
  const auth = app.auth();
  const storage = firebase.storage();
  
  export { auth, db, storage };