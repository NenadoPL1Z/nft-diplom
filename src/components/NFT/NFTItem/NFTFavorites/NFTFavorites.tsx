import React from "react";
import StarOutlineIcon from "@mui/icons-material/StarOutline";
import { IconButton, Tooltip } from "@mui/material";

const NftFavorites = () => {
  return (
    <Tooltip
      color="secondary"
      placement="top"
      title="В избранное">
      <IconButton>
        <StarOutlineIcon color="secondary" />
      </IconButton>
    </Tooltip>
  );
};

export default React.memo(NftFavorites);
