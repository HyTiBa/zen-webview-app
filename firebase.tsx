// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyB5dz6QSuuThnFYcNh3zeztMsVpV9YBTcM",
  authDomain: "zen-2025.firebaseapp.com",
  projectId: "zen-2025",
  storageBucket: "zen-2025.firebasestorage.app",
  messagingSenderId: "616118648646",
  appId: "1:616118648646:web:3c8334b7f28318b0b76f47",
  measurementId: "G-7RRSE0T38Y",
};  

const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app)


