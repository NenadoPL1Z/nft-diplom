import React from "react";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import { styled, Typography } from "@mui/material";

const FavoriteErrorData = () => {
  return (
    <ContainerSC>
      <ErrorOutlineIcon />
      <TypographySC>
        Что-то пошло не так, обновите страницу или попробуйте позже.
      </TypographySC>
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;

  & > svg {
    width: 100px;
    height: 100px;
  }
`;
const TypographySC = styled(Typography)`
  margin: 10px 0;
  text-align: center;
`;

export default React.memo(FavoriteErrorData);
