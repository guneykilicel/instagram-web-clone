// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

import toast from "react-hot-toast"

import { userHandle } from "./utils";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyA7kE14AmZ_-aWnMc_i9_4WAI42Y3dEXAc",
  authDomain: "instagram-web-clone-2e9af.firebaseapp.com",
  projectId: "instagram-web-clone-2e9af",
  storageBucket: "instagram-web-clone-2e9af.appspot.com",
  messagingSenderId: "107723935159",
  appId: "1:107723935159:web:034848c1e2f94f48f76c32"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();

onAuthStateChanged(auth, (user)=>{
  userHandle(user || false)
}) //auth ile ilgili bir değişiklik olduğunda

export const login = async (email, password) => {
    try{
    const response = await signInWithEmailAndPassword(auth, email, password)
    console.log(response)
    } catch (err) {
        toast.error(err.code)
    }
}

export const logout = async () => {
  try{
    await signOut(auth)
  } catch(err) {
    toast.error(err.code)
  }
}