import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';
import 'firebase/storage';
import 'firebase/analytics'

const firebaseConfig = {
  apiKey: "AIzaSyB0JQEs-d-6rPSCwXLG3mLItFLyA7-OCxQ",
  authDomain: "disney-plus-clone-d387e.firebaseapp.com",
  projectId: "disney-plus-clone-d387e",
  storageBucket: "disney-plus-clone-d387e.appspot.com",
  messagingSenderId: "850359860206",
  appId: "1:850359860206:web:af972120e6e2570c7e6cff",
  measurementId: "G-RFSEWN3R76"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const analytics = firebase.analytics();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();
const storage = firebase.storage();

export { auth, provider, storage, analytics };
export default db;