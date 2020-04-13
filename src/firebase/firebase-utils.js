import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyCniEQCoLfAOKuoffwIJARo0xHXCI8yUoI",
  authDomain: "crwn-db-ffce1.firebaseapp.com",
  databaseURL: "https://crwn-db-ffce1.firebaseio.com",
  projectId: "crwn-db-ffce1",
  storageBucket: "crwn-db-ffce1.appspot.com",
  messagingSenderId: "556772887491",
  appId: "1:556772887491:web:66d1aca2a8e4199a24cb76",
  measurementId: "G-95PJ9VBN85"
};

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
      });
    } catch (e) {
      console.log("error creating user", e.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
