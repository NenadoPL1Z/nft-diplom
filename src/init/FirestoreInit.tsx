import React from "react";
import { addDoc, collection, doc, getFirestore } from "@firebase/firestore";
import { NFT_FAVORITES_MOCK_COLLECTION } from "@/lib/constants/constants";

const firestore = getFirestore();

const favorites = doc(firestore, "nft/favorites");

export const createUserCollection = (uid: string) => {
  const nftCollection = collection(favorites, uid);

  return async (
    chain: string,
    address: string,
    tokenId: string,
    tokenImage: string,
  ) => {
    if (uid === NFT_FAVORITES_MOCK_COLLECTION) return;
    await addDoc(nftCollection, { tokenId, address, chain, tokenImage });
  };
};

const FirestoreInit = () => {
  return null;
};

export default React.memo(FirestoreInit);
