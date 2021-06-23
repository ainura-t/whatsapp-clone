import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyB3FfqVsfG0ZCdzIS7j5Kg6IC7spnSEpIM",
  authDomain: "whatsapp-2-d8339.firebaseapp.com",
  projectId: "whatsapp-2-d8339",
  storageBucket: "whatsapp-2-d8339.appspot.com",
  messagingSenderId: "21144754375",
  appId: "1:21144754375:web:7977a0027a94de69db86e2"
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();
const auth = app.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { db, auth, provider };
