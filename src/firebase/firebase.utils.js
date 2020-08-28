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

export const createUserProfileDocument = async (userAuth, additionalData) => {
    if (!userAuth) return;

    const userRef = firestore.doc(`users/${userAuth.uid}`);

    const snapShot = await userRef.get();

    if (!snapShot.exists) {
        const { displayName, email } = userAuth;
        const createdAt = new Date();

        try {
            await userRef.set({
                displayName,
                email,
                createdAt,
                ...additionalData
            })
        } catch(error) {
            console.log('Error creating user', error.message)
        }
    }

    return userRef;
}

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;