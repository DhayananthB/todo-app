import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBTAC6Yw-FpCnvNwhu35q3DoNEQnur0b1Y",
  authDomain: "my-project-1-7ca33.firebaseapp.com",
  projectId: "my-project-1-7ca33",
  storageBucket: "my-project-1-7ca33.firebasestorage.app",
  messagingSenderId: "851621387416",
  appId: "1:851621387416:web:42117bfde63dcca55a84ed",
  measurementId: "G-D1FDS26GK8"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app); // for Realtime DB

export { db };