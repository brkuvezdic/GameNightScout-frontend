// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "gamenightscout.firebaseapp.com",
  projectId: "gamenightscout",
  storageBucket: "gamenightscout.appspot.com",
  messagingSenderId: "321702122603",
  appId: "1:321702122603:web:58fc94d5bef086058f8d2e",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
