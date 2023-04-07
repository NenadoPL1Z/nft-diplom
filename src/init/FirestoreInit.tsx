import React from "react";
import { deleteDoc, doc, getFirestore, setDoc } from "@firebase/firestore";

interface IChangeFavorites {
  chain: string;
  address: string;
  tokenId: string;
  tokenImage: string;
  uid: string;
  isFavorite: boolean;
}

const db = getFirestore();

export const dbChangeFavorites = async ({
  uid,
  isFavorite,
  tokenId,
  address,
  chain,
  tokenImage,
}: IChangeFavorites) => {
  if (!isFavorite) {
    console.log(address);
    await setDoc(doc(db, `favorites/${uid}/${address}`, tokenId), {
      tokenId,
      address,
      chain,
      tokenImage,
    });
  }
  if (isFavorite) {
    console.log("delete");
  }
};

const FirestoreInit = () => {
  return null;
};

export default React.memo(FirestoreInit);
