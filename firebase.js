// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore/lite";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCZ3_pjPNhQNfevEaeP3uvJDLA1QYpDzSE",
  authDomain: "jangueoconamor.firebaseapp.com",
  projectId: "jangueoconamor",
  storageBucket: "jangueoconamor.firebasestorage.app",
  messagingSenderId: "278035586358",
  appId: "1:278035586358:web:70d5493fae8445b6956797"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);
