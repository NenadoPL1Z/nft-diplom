import React from "react";
import { deleteDoc, doc, getFirestore, setDoc } from "@firebase/firestore";

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

const db = getFirestore();

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
  if (!isFavorite) {
    setDoc(doc(db, `favorites/${uid}/${address}`, tokenId), {
      tokenId,
      address,
      chain,
      tokenImage,
    })
      .then(onSuccessAdd)
      .catch(onRejectAdd);
  }
  if (isFavorite) {
    deleteDoc(doc(db, `favorites/${uid}/${address}`, tokenId))
      .then(onSuccessDelete)
      .catch(onRejectDelete);
  }
};

const FirestoreInit = () => {
  return null;
};

export default React.memo(FirestoreInit);
