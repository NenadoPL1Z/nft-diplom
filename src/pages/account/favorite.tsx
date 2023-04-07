import React from "react";
import AccountWrapper from "@/components/Wrappers/AccountWrapper/AccountWrapper";
import { useFavorite } from "@/hooks/pages/useFavorite";
import { CircularProgress } from "@mui/material";
import FavoriteLoading from "@/components/Favorite/FavoriteLoading/FavoriteLoading";
import FavoriteError from "@/components/Favorite/FavoriteError/FavoriteError";
import { ErrorFavoritesUnion } from "@/types/types";

const Favorite = () => {
  const { isLoading, hasError, handleLoadData } = useFavorite();

  return (
    <AccountWrapper title="Избранные">
      {isLoading && <FavoriteLoading />}
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
