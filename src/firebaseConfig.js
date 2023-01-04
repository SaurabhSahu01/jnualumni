
import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAZbWJ5qYMmeKE78Fs11g2V9iNohNh7qig",
  authDomain: "learningfirebase-32fbd.firebaseapp.com",
  projectId: "learningfirebase-32fbd",
  storageBucket: "learningfirebase-32fbd.appspot.com",
  messagingSenderId: "875899315313",
  appId: "1:875899315313:web:e50d23b36a9abcefcb27d0",
  measurementId: "G-QQVZVXHHVT"
};


export const app = initializeApp(firebaseConfig);
export const auth = getAuth(app)
