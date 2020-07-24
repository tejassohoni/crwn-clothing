import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyA1k8u6i3JZhtaPhWN8EZt5IQr0vCBiss4",
  authDomain: "crwn-clothing-aa1a9.firebaseapp.com",
  databaseURL: "https://crwn-clothing-aa1a9.firebaseio.com",
  projectId: "crwn-clothing-aa1a9",
  storageBucket: "crwn-clothing-aa1a9.appspot.com",
  messagingSenderId: "34872510198",
  appId: "1:34872510198:web:ff592a62b1e707320d4ed7",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;
  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapshot = await userRef.get();

  if (!snapshot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (err) {
      console.log("error creating user", err);
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
