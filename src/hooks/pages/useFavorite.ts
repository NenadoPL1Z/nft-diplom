import { useAppSelector } from "@/hooks/store/useStore";
import { axiosProject } from "@/lib/http";
import { useEffect, useMemo, useState } from "react";
import { FavoritesItemObjectType } from "@/lib/models/IFavoritesItemModel";
import { useStatus } from "@/hooks/useStatus";
import { isAxiosError } from "axios";
import { ErrorFavoritesUnion, IError } from "@/types/types";

export type HandleFilterFavoritesType = (key: string, tokenId: string) => void;

export const useFavorite = () => {
  const userData = useAppSelector((state) => state.userSlice.userData);

  const { isLoading, hasError, handleChangeStatus } = useStatus();
  const [favoriteData, setFavoriteData] = useState<FavoritesItemObjectType>([]);

  const favoriteDataKeys = useMemo(() => {
    const keyArr: string[] = [];
    favoriteData.forEach((item) => {
      keyArr.push(Object.keys(item)[0]);
    });
    return keyArr;
  }, [favoriteData]);

  const handleLoadData = () => {
    handleChangeStatus({ isLoading: true, hasError: "" });
    axiosProject
      .get<{ favorites: FavoritesItemObjectType }>("/api/favorites", {
        headers: { Authorization: userData?.uid },
      })
      .then((response) => {
        handleChangeStatus({ isLoading: false, hasError: "" });
        setFavoriteData(response.data.favorites);
      })
      .catch((e) => {
        if (isAxiosError(e)) {
          const errorData = e.response?.data as IError<ErrorFavoritesUnion>;
          handleChangeStatus({ isLoading: false, hasError: errorData.error });
        }
      });
  };

  useEffect(() => {
    if (userData?.uid && isLoading) {
      handleLoadData();
    }
  }, [userData]);

  return {
    isLoading,
    hasError,
    favoriteData,
    favoriteDataKeys,
    handleLoadData,
  };
};
