import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
const firebaseConfig = {
  apiKey: "AIzaSyA3TPjryklZyBSjArNQM1l9lj5qXWiJ7MY",
  authDomain: "jnualumni-9b709.firebaseapp.com",
  projectId: "jnualumni-9b709",
  storageBucket: "jnualumni-9b709.appspot.com",
  messagingSenderId: "1059990415542",
  appId: "1:1059990415542:web:e3abf24d3b12df921c5e17",
  measurementId: "G-9QCKVQ3HG0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth();
