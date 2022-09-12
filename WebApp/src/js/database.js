// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAcx5DkrtOAFBTfO1gp1LGF6OxZNRGF_qs",
  authDomain: "heronsapp.firebaseapp.com",
  projectId: "heronsapp",
  storageBucket: "heronsapp.appspot.com",
  messagingSenderId: "211986004035",
  appId: "1:211986004035:web:91428c733eb9c7f1617cf6",
  measurementId: "G-9GYBXZSCDQ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const database = getFirestore(app);
export const auth = getAuth(app);
