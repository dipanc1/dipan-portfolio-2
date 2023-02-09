
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup } from "firebase/auth";
import { getStorage } from 'firebase/storage';
import { getFirestore } from 'firebase/firestore/lite';

const firebaseConfig = {
  apiKey: "AIzaSyCrmVdY2JyY5_-Lg66N6AWTOCJmg4M31NY",
  authDomain: "dipans-portfolio.firebaseapp.com",
  projectId: "dipans-portfolio",
  storageBucket: "dipans-portfolio.appspot.com",
  messagingSenderId: "200494907053",
  appId: "1:200494907053:web:e76e2ee955b413cdfe9024",
  measurementId: "G-134G7L71YW"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth();
const provider = new GoogleAuthProvider();
export const db = getFirestore(app);
export const storage = getStorage(app);


export const signInWithGoogle = () => signInWithPopup(auth, provider);