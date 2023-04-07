import { useAppSelector } from "@/hooks/store/useStore";
import { NftFavoritesProps } from "@/components/NFT/NFTItem/NFTFavorites/NFTFavorites";
import { useEffect, useState } from "react";
import { dbChangeFavorites } from "../../../../init/FirestoreInit";

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

  const handleCloseModal = () => {
    setHasError("");
  };

  const onSuccessAdd = () => {
    setIsFavorite(true);
  };

  const onRejectAdd = () => {
    setHasError("Ошибка добавления в избранное, пропробуйте позже.");
  };

  const onSuccessDelete = () => {
    setIsFavorite(false);
  };

  const onRejectDelete = () => {
    setHasError("Ошибка удаления из избранного, пропробуйте позже.");
  };

  const handleChangeFavorites = () => {
    if (!userData?.uid) return;

    dbChangeFavorites({
      isFavorite,
      uid: userData?.uid as string,
      chain,
      address: search,
      tokenId: token_id,
      tokenImage: normalized_metadata?.image || "",
      onSuccessAdd,
      onRejectAdd,
      onSuccessDelete,
      onRejectDelete,
    });
  };

  useEffect(() => {
    setIsFavorite(initialIsFavorite);
  }, [initialIsFavorite]);

  return {
    isAuth,
    hasError,
    isFavorite,
    handleCloseModal,
    handleChangeFavorites,
  };
};
