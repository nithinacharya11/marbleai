// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyChiMGUNeSiT4ilV2D6mBLN-WH_XjlQYqk",
  authDomain: "marbleaiauth.firebaseapp.com",
  projectId: "marbleaiauth",
  storageBucket: "marbleaiauth.appspot.com",
  messagingSenderId: "994913405365",
  appId: "1:994913405365:web:d2736ca642ce8198b0b1fc"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
