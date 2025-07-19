import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: "AIzaSyASeIQ8Erj3On57ZLBrPGF-cHoc2yXK7lg",
  authDomain: "yaco-db.firebaseapp.com",
  projectId: "yaco-db",
  storageBucket: "yaco-db.firebasestorage.app",
  messagingSenderId: "860462372148",
  appId: "1:860462372148:web:3a346525ed742745ddc161"
};

export const app = initializeApp(firebaseConfig);
