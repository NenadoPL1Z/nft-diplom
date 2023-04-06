import { useAppSelector } from "@/hooks/store/useStore";
import { NftFavoritesProps } from "@/components/NFT/NFTItem/NFTFavorites/NFTFavorites";
import { createUserCollection } from "../../../../init/FirestoreInit";
import { NFT_FAVORITES_MOCK_COLLECTION } from "@/lib/constants/constants";
import { useState } from "react";

export const useNFTFavorites = ({
  chain,
  search,
  token_id,
  initialIsFavorite,
  normalized_metadata,
}: NftFavoritesProps) => {
  const isAuth = useAppSelector((state) => state.userSlice.isAuth);
  const userData = useAppSelector((state) => state.userSlice.userData);

  const [isFavorite, setIsFavorite] = useState<boolean>(initialIsFavorite);

  const firestoreAddFavorites = createUserCollection(
    userData?.uid || NFT_FAVORITES_MOCK_COLLECTION,
  );

  const handleAddToFavorites = () => {
    firestoreAddFavorites(
      chain,
      search,
      token_id,
      normalized_metadata?.image || "",
    ).then(() => {
      setIsFavorite(true);
    });
  };

  const handleDeleteFavorites = () => {
    console.log(123);
  };

  const handlePressFavorite = () => {
    if (isFavorite) {
      handleDeleteFavorites();
    } else {
      handleAddToFavorites();
    }
  };

  return {
    isAuth,
    isFavorite,
    handlePressFavorite,
  };
};
