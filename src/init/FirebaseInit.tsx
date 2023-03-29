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
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { useAppDispatch, useAppSelector } from "@/hooks/store/useStore";
import {
  changeUser,
  changeUserAuth,
} from "@/store/reducers/userSlice/userSlice";

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

export const logoutUser = async () => {
  try {
    return signOut(auth);
  } catch (e) {
    return e;
  }
};

export const resetPassword = async (email: string) => {
  try {
    return sendPasswordResetEmail(auth, email);
  } catch (e) {
    return e;
  }
};

const FirebaseInit = () => {
  const dispatch = useAppDispatch();

  useEffect(() => {
    if (auth) {
      onAuthStateChanged(auth, (user) => {
        if (user) {
          dispatch(
            changeUser({
              email: user.email || "",
              creationTime: user.metadata.creationTime || "",
              lastLoginAt: user.metadata.lastSignInTime || "",
            }),
          );
        } else {
          dispatch(changeUserAuth({ isAuth: false, isLoading: false }));
        }
      });
    }
  });

  return null;
};

export default React.memo(FirebaseInit);
