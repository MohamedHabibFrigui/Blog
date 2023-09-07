// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: process.env.FIREBASE,
  authDomain: "blog-977cb.firebaseapp.com",
  projectId: "blog-977cb",
  storageBucket: "blog-977cb.appspot.com",
  messagingSenderId: "560644308131",
  appId: "1:560644308131:web:31f1147a7d4ecad1e71316",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
