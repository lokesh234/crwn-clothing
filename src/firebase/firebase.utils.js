import firebase from "firebase/app";
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyBywQJz9ycdChFZWI-gibpUgREYnSH3di0",
    authDomain: "crwn-clothing-6330f.firebaseapp.com",
    projectId: "crwn-clothing-6330f",
    storageBucket: "crwn-clothing-6330f.appspot.com",
    messagingSenderId: "555680888996",
    appId: "1:555680888996:web:8c8dcb7bd9eb520ba60e31",
    measurementId: "G-4SCRVGFKXS"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;