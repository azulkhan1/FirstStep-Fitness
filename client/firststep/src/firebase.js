// Import the functions you need from the SDKs you need

import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase } from "firebase/database"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCi8Sh1cNdjG-u7r2qKX2chlCkZ9mjzWjo",
  authDomain: "regform-3b3c9.firebaseapp.com",
  databaseURL: "https://regform-3b3c9-default-rtdb.firebaseio.com",
  projectId: "regform-3b3c9",
  storageBucket: "regform-3b3c9.appspot.com",
  messagingSenderId: "419446562847",
  appId: "1:419446562847:web:0209a56a2145d607be752a",
  measurementId: "G-DPETFD4R16"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getDatabase(app);