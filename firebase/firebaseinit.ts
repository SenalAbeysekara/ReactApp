// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvrXL2wP86NUwaNMON9CzNKMIBxmbk9t8",
  authDomain: "pizzamania-8c09f.firebaseapp.com",
  projectId: "pizzamania-8c09f",
  storageBucket: "pizzamania-8c09f.firebasestorage.app",
  messagingSenderId: "373838399311",
  appId: "1:373838399311:web:481f42c867d3c8b9ae673a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);