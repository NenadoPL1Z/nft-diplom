import React from "react";
import { CircularProgress, styled } from "@mui/material";

const FavoriteLoading = () => {
  return (
    <ContainerSC>
      <CircularProgress />
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 20px auto;
`;

export default React.memo(FavoriteLoading);
