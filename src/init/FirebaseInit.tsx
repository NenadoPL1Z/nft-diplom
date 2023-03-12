import React from "react";
import {
  FIREBASE_API_KEY,
  FIREBASE_APP_ID,
  FIREBASE_AUTH_DOMAIN,
  FIREBASE_PROJECT_ID,
  FIREBASE_SENDER_ID,
  FIREBASE_STORAGE_BUCKET,
} from "@/lib/constants/constants";
import { initializeApp } from "firebase/app";
import {
  connectAuthEmulator,
  getAuth,
  signInWithEmailAndPassword,
} from "@firebase/auth";

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: FIREBASE_AUTH_DOMAIN,
  projectId: FIREBASE_PROJECT_ID,
  storageBucket: FIREBASE_STORAGE_BUCKET,
  messagingSenderId: FIREBASE_SENDER_ID,
  appId: FIREBASE_APP_ID,
};

export const firebaseApp = initializeApp(firebaseConfig);

const auth = getAuth(firebaseApp);
// connectAuthEmulator(auth, "http://localhost:3000/");

export const loginEmailPassword = async (email: string, password: string) => {
  try {
    const userCredential = await signInWithEmailAndPassword(
      auth,
      email,
      password,
    );

    console.log(userCredential.user);
  } catch (e) {
    console.log("qwe");
  }
};

const FirebaseInit = () => {
  return null;
};

export default React.memo(FirebaseInit);
