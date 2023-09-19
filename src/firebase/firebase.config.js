
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
 
  apiKey: "AIzaSyB2axF9PSUCHttE_JvCpatMvsLM0HKnFlw",
  authDomain: "travelia-otp.firebaseapp.com",
  projectId: "travelia-otp",
  storageBucket: "travelia-otp.appspot.com",
  messagingSenderId: "1087295258123",
  appId: "1:1087295258123:web:f50ed38f6f4bdeefb3510e",
  measurementId: "G-XGS6EEXGD4"

};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);