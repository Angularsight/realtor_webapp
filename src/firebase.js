// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyB7swfY_kr7LTzXjS08sw9EqNT3JLM2BFM",
  authDomain: "realtor-6108c.firebaseapp.com",
  projectId: "realtor-6108c",
  storageBucket: "realtor-6108c.appspot.com",
  messagingSenderId: "286830541654",
  appId: "1:286830541654:web:50ca0fbef796005a6e34f7"
};

// Initialize Firebase
initializeApp(firebaseConfig);
export const db = getFirestore();