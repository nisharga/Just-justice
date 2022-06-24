import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyBKIZXEPmbtEko62AQpUFrGAhVBeqg5Pqs",
  authDomain: "just-justice-1.firebaseapp.com",
  projectId: "just-justice-1",
  storageBucket: "just-justice-1.appspot.com",
  messagingSenderId: "1082736808966",
  appId: "1:1082736808966:web:7a93cf3c25b5d32636df87",
  measurementId: "G-T32Y9F69LH",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app);

export default auth;
