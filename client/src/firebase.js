import { initializeApp } from "firebase/app";

const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mernestate-auth.firebaseapp.com",
  projectId: "mernestate-auth",
  storageBucket: "mernestate-auth.appspot.com",
  messagingSenderId: "872195946798",
  appId: "1:872195946798:web:da7c901db929c76f51a2bf"
};

export const app = initializeApp(firebaseConfig);