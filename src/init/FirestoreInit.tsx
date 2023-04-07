import React from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  query,
} from "@firebase/firestore";
import { firebaseApp } from "./FirebaseInit";

interface IChangeFavorites {
  chain: string;
  address: string;
  tokenId: string;
  tokenImage: string;
  uid: string;
  isFavorite: boolean;
  onSuccessAdd: () => void;
  onRejectAdd: () => void;
  onSuccessDelete: () => void;
  onRejectDelete: () => void;
}

const db = getFirestore(firebaseApp);

export const dbGetFavorites = async ({
  uid,
  address,
}: Pick<IChangeFavorites, "uid" | "address">) => {
  const favoritesRef = collection(db, `favorites/${uid}/${address}`);
  console.log(query(favoritesRef));

  // const snapshot = await db.collection(`favorites/${uid}/${address}`).get();
  // console.log(snapshot);
  // const docRef = doc(db, `favorites/${uid}/${address}`, "123");
  // console.log(await getDoc(docRef));
  // return getDoc(docRef);
};

export const dbChangeFavorites = ({
  uid,
  isFavorite,
  tokenId,
  address,
  chain,
  tokenImage,
  onSuccessAdd,
  onRejectAdd,
  onSuccessDelete,
  onRejectDelete,
}: IChangeFavorites) => {
  const docRef = doc(db, `favorites/${uid}/${address}`, tokenId);
  //? Add
  if (!isFavorite) {
    setDoc(docRef, {
      tokenId,
      address,
      chain,
      tokenImage,
    })
      .then(onSuccessAdd)
      .catch(onRejectAdd);
  }
  // Delete
  if (isFavorite) {
    deleteDoc(docRef).then(onSuccessDelete).catch(onRejectDelete);
  }
};

const FirestoreInit = () => {
  return null;
};

export default React.memo(FirestoreInit);
