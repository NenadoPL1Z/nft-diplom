import React from "react";
import { doc, getFirestore, setDoc } from "@firebase/firestore";

const firestore = getFirestore();

const favorites = doc(firestore, "nft/favorites");

export const firestoreAddFavorites = async (
  chain: string,
  address: string,
  tokenId: string,
  tokenImage: string,
) => {
  await setDoc(
    favorites,
    { tokenId, address, chain, tokenImage },
    { merge: true },
  );
};

const FirestoreInit = () => {
  return null;
};

export default React.memo(FirestoreInit);
