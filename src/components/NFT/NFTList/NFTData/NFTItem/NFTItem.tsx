import React from "react";
import { INftModel } from "@/lib/models/INftModel";
import { Button, styled } from "@mui/material";
import { COLORS, PRIMARY_MAIN_COLOR } from "../../../../../theme/colors";
import NFTItemImage from "@/components/NFT/NFTList/NFTData/NFTItem/NFTItemImage/NFTItemImage";
import NftAttributes from "@/components/NFT/NFTList/NFTData/NFTItem/NftAttributes/NftAttributes";

const NFTItem = (props: INftModel) => {
  const { token_id, name, metadata, normalized_metadata } = props;

  return (
    <ContainerSC>
      <WrapperSC>
        <NFTItemImage metadata={normalized_metadata} />
        <TextSC>
          <TitleSC>
            {name} <span>{token_id}</span>
          </TitleSC>
          <NftAttributes {...normalized_metadata} />
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
  font-weight: 500;
  & > span {
    color: ${PRIMARY_MAIN_COLOR};
  }
`;

const PriceSC = styled("h4")`
  margin-bottom: 10px;
`;

export default React.memo(NFTItem);
