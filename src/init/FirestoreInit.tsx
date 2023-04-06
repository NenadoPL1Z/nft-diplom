import React from "react";
import { addDoc, collection, doc, getFirestore } from "@firebase/firestore";

const firestore = getFirestore();

const favorites = doc(firestore, "nft/favorites");

const nftCollection = collection(favorites, "user");

export const firestoreAddFavorites = async (
  chain: string,
  address: string,
  tokenId: string,
  tokenImage: string,
) => {
  await addDoc(nftCollection, { tokenId, address, chain, tokenImage });
};

const FirestoreInit = () => {
  return null;
};

export default React.memo(FirestoreInit);
