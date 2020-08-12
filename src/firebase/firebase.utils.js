import firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

const config = {
    apiKey: "AIzaSyAzxaE8TjSQ9bZSH65PSr8_nnUt5bLwRrI",
    authDomain: "crown-db-e46a7.firebaseapp.com",
    databaseURL: "https://crown-db-e46a7.firebaseio.com",
    projectId: "crown-db-e46a7",
    storageBucket: "crown-db-e46a7.appspot.com",
    messagingSenderId: "795632602675",
    appId: "1:795632602675:web:b9bf87e6ad89acf2fe1d46",
    measurementId: "G-N2N30T3MSX"
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;