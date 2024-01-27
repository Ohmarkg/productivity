// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCTu4WomRVFOo9FnAA2uXjsEGk0YmlbBx4",
  authDomain: "tamuhack-2024.firebaseapp.com",
  projectId: "tamuhack-2024",
  storageBucket: "tamuhack-2024.appspot.com",
  messagingSenderId: "746240981801",
  appId: "1:746240981801:web:d3af5a0d182c6db609d538"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)