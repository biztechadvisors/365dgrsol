import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCz2fvKBK32-0MVuWfSP5PAib6Pe_6CsQM",
  authDomain: "orion-22934.firebaseapp.com",
  projectId: "orion-22934",
  storageBucket: "orion-22934.appspot.com",
  messagingSenderId: "369139423063",
  appId: "1:369139423063:web:38cbca35972e645d151012",
  measurementId: "G-7JE7ZLW9DZ"
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
export const db = firebaseApp.firestore();
export const auth = firebase.auth();

const provider = new GoogleAuthProvider();

export const signInWithGoogle = () => {
  signInWithPopup(auth, provider)
    .then((result) => {
      const name = result.user.displayName;
      const email = result.user.email;
      const profilePic = result.user.photoURL;

      localStorage.setItem("name", name);
      localStorage.setItem("email", email);
      localStorage.setItem("profilePic", profilePic);
    })
    .catch((error) => {
      console.log(error);
    });
};

