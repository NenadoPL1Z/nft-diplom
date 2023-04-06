import React from "react";
import { addDoc, collection, doc, getFirestore } from "@firebase/firestore";
import { NFT_FAVORITES_MOCK_COLLECTION } from "@/lib/constants/constants";

const firestore = getFirestore();

const favorites = doc(firestore, "nft/favorites");

export const createFavoritesCollection = (uid: string) => {
  const userCollection = collection(favorites, uid);

  return async (
    chain: string,
    address: string,
    tokenId: string,
    tokenImage: string,
  ) => {
    if (uid === NFT_FAVORITES_MOCK_COLLECTION) return;
    await addDoc(userCollection, { tokenId, address, chain, tokenImage });
  };
};

const FirestoreInit = () => {
  return null;
};

export default React.memo(FirestoreInit);
