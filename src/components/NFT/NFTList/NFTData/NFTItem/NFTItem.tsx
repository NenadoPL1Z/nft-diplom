import React from "react";
import { INftModel } from "@/lib/models/INftModel";
import { Button, styled } from "@mui/material";
import { COLORS } from "../../../../../theme/colors";
import NFTItemImage from "@/components/NFT/NFTList/NFTData/NFTItem/NFTItemImage/NFTItemImage";

const NFTItem = ({ token_id, name, metadata }: INftModel) => {
  return (
    <ContainerSC>
      <WrapperSC>
        <NFTItemImage metadata={metadata || "{}"} />
        <TextSC>
          <TitleSC>{name}</TitleSC>
          <PriceSC>100</PriceSC>
          <Button
            variant="outlined"
            href={`/nft/${token_id}`}>
            Открыть
          </Button>
        </TextSC>
      </WrapperSC>
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  margin-bottom: 20px;
  padding: 0 10px;
  width: 20%;
`;

const WrapperSC = styled("div")`
  border-radius: 10px;
  background-color: ${COLORS.SECONDARY};
  overflow: hidden;
`;

const TextSC = styled("div")`
  padding: 10px;
`;

const TitleSC = styled("h4")`
  margin-bottom: 10px;
`;

const PriceSC = styled("h4")`
  margin-bottom: 10px;
`;

export default React.memo(NFTItem);
