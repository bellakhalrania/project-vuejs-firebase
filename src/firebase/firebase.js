// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore"; // Update this line
import { getAuth } from 'firebase/auth'
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAqBlUcPro17v2bacPV239281zRp8b0hAk",
  authDomain: "nouveauprojet-6f074.firebaseapp.com",
  projectId: "nouveauprojet-6f074",
  storageBucket: "nouveauprojet-6f074.appspot.com",
  messagingSenderId: "742525986181",
  appId: "1:742525986181:web:eadb6d39bb6e991218d0ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// init & export firestore service
export const db = getFirestore(app); // Update this line
// generate & export auth object
export const auth = getAuth(app);