import React from "react";
import { ErrorFavoritesUnion } from "@/types/types";
import { Button, styled } from "@mui/material";
import FavoriteErrorEmpty from "@/components/Favorite/FavoriteError/FavoriteErrorEmpty/FavoriteErrorEmpty";
import FavoriteErrorData from "@/components/Favorite/FavoriteError/FavoriteErrorData/FavoriteErrorData";

interface IFavoriteErrorProps {
  error: ErrorFavoritesUnion;
  onRetry: () => void;
}

const FavoriteError = ({ error, onRetry }: IFavoriteErrorProps) => {
  return (
    <ContainerSC>
      <WrapperSC>
        {error === "empty" && <FavoriteErrorEmpty />}
        {error === "error" && <FavoriteErrorData />}
      </WrapperSC>
      <Button
        variant="outlined"
        onClick={onRetry}>
        Попробовать еще раз
      </Button>
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  display: flex;
  flex-direction: column;
  align-content: center;
`;

const WrapperSC = styled("div")`
  margin-bottom: 10px;
`;

export default React.memo(FavoriteError);
