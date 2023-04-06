import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import StarIcon from "@mui/icons-material/Star";

import { IconButton, Tooltip } from "@mui/material";
import { useNFTFavorites } from "@/components/NFT/NFTItem/NFTFavorites/useNFTFavorites";
import Link from "next/link";
import { PagesNamespace } from "@/types/enum";
import { NFTProps } from "@/components/NFT/types";
import { INftModel } from "@/lib/models/INftModel";
import DialogUI from "@/UI/DialogUI/DialogUI";

export type NftFavoritesProps = Pick<NFTProps, "search" | "chain"> &
  Pick<INftModel, "token_id" | "normalized_metadata"> & {
    initialIsFavorite: boolean;
  };

const NftFavorites = (props: NftFavoritesProps) => {
  const {
    isAuth,
    hasError,
    isFavorite,
    handleChangeFavorites,
    handleCloseModal,
  } = useNFTFavorites(props);

  return (
    <>
      <Tooltip
        color="secondary"
        placement="top"
        title="В избранное">
        {isAuth ? (
          <IconButton onClick={handleChangeFavorites}>
            {!isFavorite && <StarOutlineIcon color="secondary" />}
            {isFavorite && <StarIcon color="secondary" />}
          </IconButton>
        ) : (
          <Link
            href={PagesNamespace.SIGN_IN}
            target="_blank">
            <IconButton>
              <StarOutlineIcon color="secondary" />
            </IconButton>
          </Link>
        )}
      </Tooltip>
      <DialogUI
        open={!!hasError}
        handleClose={handleCloseModal}>
        {hasError}
      </DialogUI>
    </>
  );
};

export default React.memo(NftFavorites);
