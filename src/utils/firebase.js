// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChYYhsObVZi-c8ly2Sj8ToXEldcAtN2tI",
  authDomain: "clone-6441d.firebaseapp.com",
  projectId: "clone-6441d",
  storageBucket: "clone-6441d.appspot.com",
  messagingSenderId: "349159225014",
  appId: "1:349159225014:web:eadcf751dfe71ef24c1817",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
