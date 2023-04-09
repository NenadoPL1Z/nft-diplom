import React from "react";
import AccountWrapper from "@/components/Wrappers/AccountWrapper/AccountWrapper";
import FavoriteLoading from "@/components/Favorite/FavoriteLoading/FavoriteLoading";
import FavoriteError from "@/components/Favorite/FavoriteError/FavoriteError";
import { useFavorite } from "@/hooks/pages/useFavorite";
import { ErrorFavoritesUnion } from "@/types/types";
import FavoriteData from "@/components/Favorite/FavoriteData/FavoriteData";

const Favorite = () => {
  const {
    isLoading,
    hasError,
    favoriteData,
    favoriteDataKeys,
    handleLoadData,
  } = useFavorite();

  return (
    <AccountWrapper title="Избранные">
      {isLoading && <FavoriteLoading />}
      {favoriteData.map((favoriteItem, index) => (
        <FavoriteData
          key={favoriteDataKeys[index]}
          title={favoriteDataKeys[index]}
          data={favoriteItem[favoriteDataKeys[index]]}
        />
      ))}
      {hasError && (
        <FavoriteError
          error={hasError as ErrorFavoritesUnion}
          onRetry={handleLoadData}
        />
      )}
    </AccountWrapper>
  );
};

export default React.memo(Favorite);
