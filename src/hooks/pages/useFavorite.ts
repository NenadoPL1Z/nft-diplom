import { useAppSelector } from "@/hooks/store/useStore";
import { useEffect } from "react";
import { dbGetAllFavorites } from "../../init/FirestoreInit";

export const useFavorite = () => {
  const userData = useAppSelector((state) => state.userSlice.userData);

  useEffect(() => {
    if (userData?.uid) {
      dbGetAllFavorites({ uid: userData.uid });
    }
  }, [userData]);

  return {};
};
