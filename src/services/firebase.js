import { initializeApp } from "firebase/app";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  signOut as firbaseSignOut,
  getAuth,
} from "firebase/auth";
import { getDatabase } from "firebase/database";

const firebaseConfig = {
  apiKey: "AIzaSyAr4KINht5O8foa7BJ4c3ySNQURXbEqmR0",
  authDomain: "messanger-7ee45.firebaseapp.com",
  projectId: "messanger-7ee45",
  storageBucket: "messanger-7ee45.appspot.com",
  messagingSenderId: "1041155155734",
  appId: "1:1041155155734:web:701d194d39e749c03d1237",
};

initializeApp(firebaseConfig);

export const auth = getAuth();
export const db = getDatabase();

export const login = async (email, pass) => {
  await signInWithEmailAndPassword(auth, email, pass);
};

export const signUp = async (email, pass) => {
  await createUserWithEmailAndPassword(auth, email, pass);
};

export const logout = async () => {
  await firbaseSignOut(auth);
};
