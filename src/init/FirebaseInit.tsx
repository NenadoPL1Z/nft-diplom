import React, { useEffect } from "react";
import { firebaseConfig } from "@/lib/constants/constants";
import { initializeApp } from "firebase/app";
import {
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signOut,
} from "@firebase/auth";
import { useAppDispatch } from "@/hooks/store/useStore";
import {
  changeUser,
  changeUserAuth,
} from "@/store/reducers/userSlice/userSlice";

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
              uid: user.uid,
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
