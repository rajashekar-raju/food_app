// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBk-XJSFp1FcmR9IVjnLEesMLRoWJAfnps",
  authDomain: "foodorderingapp-2a3a7.firebaseapp.com",
  projectId: "foodorderingapp-2a3a7",
  storageBucket: "foodorderingapp-2a3a7.appspot.com",
  messagingSenderId: "857652346181",
  appId: "1:857652346181:web:3f4f92e2ae30eaec1dd22c",
  measurementId: "G-VR4DRXS2FH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();