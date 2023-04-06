import { useAppSelector } from "@/hooks/store/useStore";
import { NftFavoritesProps } from "@/components/NFT/NFTItem/NFTFavorites/NFTFavorites";
import { firestoreAddFavorites } from "../../../../init/FirestoreInit";

export const useNFTFavorites = ({
  chain,
  search,
  token_id,
  normalized_metadata,
}: NftFavoritesProps) => {
  const userData = useAppSelector((state) => state.userSlice.userData);
  const isAuth = useAppSelector((state) => state.userSlice.isAuth);

  const handleAddToFavorites = () => {
    console.log(userData?.uid);
    firestoreAddFavorites(
      chain,
      search,
      token_id,
      normalized_metadata?.image || "",
    );
  };

  return {
    isAuth,
    handleAddToFavorites,
  };
};
