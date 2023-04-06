import React from "react";
import {
  addDoc,
  collection,
  deleteDoc,
  doc,
  getFirestore,
} from "@firebase/firestore";
import { NFT_FAVORITES_MOCK_COLLECTION } from "@/lib/constants/constants";

const firestore = getFirestore();

const favorites = doc(firestore, "nft/favorites");

export const createFavoritesCollection = (uid: string, isFavorite: boolean) => {
  const userCollection = collection(favorites, uid);

  return async (
    chain: string,
    address: string,
    tokenId: string,
    tokenImage: string,
  ) => {
    if (uid === NFT_FAVORITES_MOCK_COLLECTION) return;
    if (!isFavorite) {
      await addDoc(userCollection, { tokenId, address, chain, tokenImage });
    }
    if (isFavorite) {
      // await deleteDoc(userCollection);
    }
  };
};

const FirestoreInit = () => {
  return null;
};

export default React.memo(FirestoreInit);
