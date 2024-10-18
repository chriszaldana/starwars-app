// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCSh8taTuKr1XRWzmwGv7ILbAoWOidGuDk",
  authDomain: "starwars-app-2e237.firebaseapp.com",
  projectId: "starwars-app-2e237",
  storageBucket: "starwars-app-2e237.appspot.com",
  messagingSenderId: "647454554137",
  appId: "1:647454554137:web:d0ccf9a075a2a462085288"
};

// Initialize Firebase
const appFirebase = initializeApp(firebaseConfig);
export default appFirebase;