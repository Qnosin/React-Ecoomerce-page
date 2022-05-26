import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth, GoogleAuthProvider , signInWithPopup} from 'firebase/auth';
const firebaseConfig = {
  apiKey: "AIzaSyA1shM0qGPRiVfFvqu4S8QWXowltmv27V4",
  authDomain: "shopapp-dfb12.firebaseapp.com",
  projectId: "shopapp-dfb12",
  storageBucket: "shopapp-dfb12.appspot.com",
  messagingSenderId: "204943127646",
  appId: "1:204943127646:web:cb9b6b7fee6911788370cf",
  measurementId: "G-TMN4E9E2E2"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();



