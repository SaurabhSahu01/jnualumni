import { initializeApp } from "firebase/app";
import {getAuth} from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getStorage } from "firebase/storage";
// const firebaseConfig = {
//   apiKey: "AIzaSyA3TPjryklZyBSjArNQM1l9lj5qXWiJ7MY",
//   authDomain: "jnualumni-9b709.firebaseapp.com",
//   projectId: "jnualumni-9b709",
//   storageBucket: "jnualumni-9b709.appspot.com",
//   messagingSenderId: "1059990415542",
//   appId: "1:1059990415542:web:e3abf24d3b12df921c5e17",
//   measurementId: "G-9QCKVQ3HG0"
// };
const firebaseConfig = {
  apiKey: "AIzaSyAZbWJ5qYMmeKE78Fs11g2V9iNohNh7qig",
  authDomain: "learningfirebase-32fbd.firebaseapp.com",
  projectId: "learningfirebase-32fbd",
  storageBucket: "learningfirebase-32fbd.appspot.com",
  messagingSenderId: "875899315313",
  appId: "1:875899315313:web:e50d23b36a9abcefcb27d0",
  measurementId: "G-QQVZVXHHVT"
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);
// export const auth = getAuth();
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app)
 export const storage = getStorage(app);
