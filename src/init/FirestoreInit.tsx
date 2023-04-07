import React from "react";
import {
  collection,
  deleteDoc,
  doc,
  getDoc,
  getFirestore,
  setDoc,
  getDocs,
} from "@firebase/firestore";
import { firebaseApp } from "./FirebaseInit";
import { IFavoritesItemModel } from "@/lib/models/IFavoritesItemModel";
import { MapFavorites } from "@/types/types";

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
  const docsSnap = await getDocs(favoritesRef);
  const data: MapFavorites = new Map([]);

  docsSnap.forEach((doc) => {
    const itemData = doc.data() as IFavoritesItemModel;
    data.set(itemData.tokenId, itemData);
  });

  return data;
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
