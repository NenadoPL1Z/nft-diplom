import React from "react";
import { Button, styled, Typography } from "@mui/material";
import SentimentSatisfiedAltIcon from "@mui/icons-material/SentimentSatisfiedAlt";
import Link from "next/link";
import { PagesNamespace } from "@/types/enum";

const FavoriteErrorEmpty = () => {
  return (
    <ContainerSC>
      <SentimentSatisfiedAltIcon />
      <CustomTypographySC>
        У вас нет ни одного избранного NFT, но это не повод расстраиваться!
        Прямиком на маркет, чтобы испрвть эту ситуацию!
      </CustomTypographySC>
      <Link href={PagesNamespace.NFT}>
        <Button fullWidth>На маркет!</Button>
      </Link>
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
  & > a {
    width: 100%;
  }
`;

const CustomTypographySC = styled(Typography)`
  margin: 20px 0;
  text-align: center;
`;

export default React.memo(FavoriteErrorEmpty);
