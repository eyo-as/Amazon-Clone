// Import the functions you need from the SDKs you need
import firebase from "firebase/app";
import { getAuth } from "firebase/auth";
import "firebase/auth";
import "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDbSl820qqbA27O3TSuaQYTsQVEQDtGANE",
  authDomain: "clone-c02f9.firebaseapp.com",
  projectId: "clone-c02f9",
  storageBucket: "clone-c02f9.appspot.com",
  messagingSenderId: "602622308303",
  appId: "1:602622308303:web:ab359db9cfdf11251becba",
};

// Initialize Firebase
const app = firebase.initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = app.firestore();

export { auth, db };
