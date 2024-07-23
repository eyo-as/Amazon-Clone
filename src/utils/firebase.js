// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGXtQzXWqs74OWQwvutHrrhKX9inXJ_BI",
  authDomain: "clone-474c5.firebaseapp.com",
  projectId: "clone-474c5",
  storageBucket: "clone-474c5.appspot.com",
  messagingSenderId: "657748031907",
  appId: "1:657748031907:web:e00d05e166ffcca4af8216",
};
// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };
