import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';
// Import the functions you need from the SDKs you need
//import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDLYJGzPH7RhS0Y0_KvplBy0vcAtyycb44",
  authDomain: "netflix-remaking.firebaseapp.com",
  projectId: "netflix-remaking",
  storageBucket: "netflix-remaking.appspot.com",
  messagingSenderId: "423593715111",
  appId: "1:423593715111:web:3e291dcc4f4d004d584282"
};

// Initialize Firebase
const firebaseApp= firebase.initializeApp(firebaseConfig);




const db = firebaseApp.firestore();
const auth = firebase.auth();

export { auth, db };