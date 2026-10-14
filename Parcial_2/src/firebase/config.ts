// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyD_1vXq4kuLTavli-M4hnN_QFxjULghl3g",
  authDomain: "parcial-2-9ef66.firebaseapp.com",
  databaseURL: "https://parcial-2-9ef66-default-rtdb.firebaseio.com/",
  projectId: "parcial-2-9ef66",
  storageBucket: "parcial-2-9ef66.firebasestorage.app",
  messagingSenderId: "997639208849",
  appId: "1:997639208849:web:64145e3b7d096ba4d7a430"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();
const firebaseStorage = getStorage(app);
const db = getFirestore();

export {app, auth, firebaseStorage, db}