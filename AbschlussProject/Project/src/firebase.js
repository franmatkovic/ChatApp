import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";


const firebaseConfig = {
  apiKey: "AIzaSyCgpBJxHqv3ZgKnisoYQbrO99qTyqbiC5E",
  authDomain: "chatapp-7503a.firebaseapp.com",
  projectId: "chatapp-7503a",
  storageBucket: "chatapp-7503a.appspot.com",
  messagingSenderId: "823071159878",
  appId: "1:823071159878:web:be2392ad0d7f99a907bc47",
  measurementId: "G-T3E1JD6TP6"
};

export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore();