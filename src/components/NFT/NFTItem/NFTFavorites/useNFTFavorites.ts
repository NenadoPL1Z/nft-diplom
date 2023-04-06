import { useAppSelector } from "@/hooks/store/useStore";
import { NftFavoritesProps } from "@/components/NFT/NFTItem/NFTFavorites/NFTFavorites";
import { createFavoritesCollection } from "../../../../init/FirestoreInit";
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

  const [hasError, setHasError] = useState<string>("");
  const [isFavorite, setIsFavorite] = useState<boolean>(initialIsFavorite);

  const firestoreChangeFavorites = createFavoritesCollection(
    userData?.uid || NFT_FAVORITES_MOCK_COLLECTION,
    isFavorite,
  );

  const handleCloseModal = () => {
    setHasError("");
  };

  const handleChangeFavorites = () => {
    firestoreChangeFavorites(
      chain,
      search,
      token_id,
      normalized_metadata?.image || "",
    )
      .then(() => {
        setIsFavorite(true);
      })
      .catch(() => {
        setHasError("Ошибка добавления в избранное, пропробуйте позже.");
      });
  };

  return {
    isAuth,
    hasError,
    isFavorite,
    handleCloseModal,
    handleChangeFavorites,
  };
};
