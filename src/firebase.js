import { initializeApp, getApps, getApp } from "firebase/app";
import { getAuth, GoogleAuthProvider, signInWithPopup, signOut } from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyCuEB58u6d2i1bUUJ-7fOJTH-mqd4hE40I",
  authDomain: "pet-shop-cd695.firebaseapp.com",
  projectId: "pet-shop-cd695",
  storageBucket: "pet-shop-cd695.appspot.com",
  messagingSenderId: "543136555795",
  appId: "1:543136555795:web:eae7fad15205a596ce70e6",
  measurementId: "G-YJ02MMJJ4S"
};

// Initialize Firebase app (only if it hasn't been initialized yet)
const app = !getApps().length ? initializeApp(firebaseConfig) : getApp();

// Initialize Firebase services
const auth = getAuth(app);  // Use the initialized app for auth
const googleProvider = new GoogleAuthProvider();

const database = getDatabase(app);  // Use the initialized app for database

export {
  auth,
  googleProvider,
  signInWithPopup,
  signOut,
  database,
};
