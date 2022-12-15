// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {

  apiKey: "AIzaSyAPaa5fLG8OhB3hOE0p_ce-mes6EEIw6lM",

  authDomain: "fuit-fun.firebaseapp.com",

  projectId: "fuit-fun",

  storageBucket: "fuit-fun.appspot.com",

  messagingSenderId: "333659487704",

  appId: "1:333659487704:web:70ff9441c6900e794c46ad"

};

console.log(process.env.REACT_APP_apiKey)

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export default app;