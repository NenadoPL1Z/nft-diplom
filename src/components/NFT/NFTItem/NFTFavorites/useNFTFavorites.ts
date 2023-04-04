import { useAppSelector } from "@/hooks/store/useStore";

export const useNFTFavorites = () => {
  const isAuth = useAppSelector((state) => state.userSlice.isAuth);

  const handleAddToFavorites = () => {
    console.log(123);
  };

  return {
    isAuth,
    handleAddToFavorites,
  };
};
