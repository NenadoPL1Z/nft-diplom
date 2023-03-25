import React, { useEffect } from "react";
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
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
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

export const loginEmailPassword = async (email: string, password: string) => {
  try {
    return signInWithEmailAndPassword(auth, email, password);
  } catch (e) {
    return e;
  }
};

export const registrationUser = async (email: string, password: string) => {
  try {
    return createUserWithEmailAndPassword(auth, email, password);
  } catch (e) {
    return e;
  }
};

const FirebaseInit = () => {
  useEffect(() => {
    if (auth) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          console.log(user);
          // ...
        } else {
          // User is signed out
          // ...
        }
      });
    }
  }, []);

  return null;
};

export default React.memo(FirebaseInit);
