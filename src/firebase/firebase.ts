// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore, setDoc, doc } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDlg3vqHKeK6EW0NCjlswUYCZwCYuWjZeg",
  authDomain: "solarisai-67nkc.firebaseapp.com",
  projectId: "solarisai-67nkc",
  storageBucket: "solarisai-67nkc.firebasestorage.app",
  messagingSenderId: "1079153466002",
  appId: "1:1079153466002:web:77f02ebce57a3e1608644b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);
const googleAuthProvider = new GoogleAuthProvider();

export { app, auth, googleAuthProvider };