// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyABRH8H5lWBUT8KmEIxVFoO4ZK3XIkOQdc",
  authDomain: "challenge-9-a36cd.firebaseapp.com",
  projectId: "challenge-9-a36cd",
  storageBucket: "challenge-9-a36cd.firebasestorage.app",
  messagingSenderId: "602784796553",
  appId: "1:602784796553:web:102a1b47cf16d324655b58"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth();

export {app, auth}