import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { IconButton, Tooltip } from "@mui/material";
import { useNFTFavorites } from "@/components/NFT/NFTItem/NFTFavorites/useNFTFavorites";
import Link from "next/link";
import { PagesNamespace } from "@/types/enum";

const NftFavorites = () => {
  const { isAuth, handleAddToFavorites } = useNFTFavorites();

  return (
    <Tooltip
      color="secondary"
      placement="top"
      title="В избранное">
      {isAuth ? (
        <IconButton onClick={handleAddToFavorites}>
          <StarOutlineIcon color="secondary" />
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
  );
};

export default React.memo(NftFavorites);
