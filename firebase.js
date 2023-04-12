// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDK25wNUEatr4JPpH-BxHSSFTR_1Cgacfc",
  authDomain: "nextjs-auth-769e0.firebaseapp.com",
  projectId: "nextjs-auth-769e0",
  storageBucket: "nextjs-auth-769e0.appspot.com",
  messagingSenderId: "1074594698226",
  appId: "1:1074594698226:web:60a3283822cb988eeb916b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth();