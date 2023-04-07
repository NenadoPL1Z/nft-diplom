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

export const dbGetAddressCollection = async ({
  uid,
  address,
}: Pick<IChangeFavorites, "uid" | "address">) => {
  const favoritesRef = collection(db, `favorites/${uid}/${address}`);
  return await getDocs(favoritesRef);
};

export const dbGetFavorites = async ({
  uid,
  address,
}: Pick<IChangeFavorites, "uid" | "address">) => {
  const addressSnap = await dbGetAddressCollection({ uid, address });
  const data: MapFavorites = new Map([]);

  addressSnap.forEach((addressItem) => {
    const addressData = addressItem.data() as IFavoritesItemModel;
    data.set(addressData.tokenId, addressData);
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
  const addressPath = `favorites/${uid}/${address}`;
  const addressRef = doc(db, addressPath, tokenId);
  //? Add
  if (!isFavorite) {
    setDoc(addressRef, {
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
    deleteDoc(addressRef).then(onSuccessDelete).catch(onRejectDelete);
  }
};

const FirestoreInit = () => {
  return null;
};

export default React.memo(FirestoreInit);
