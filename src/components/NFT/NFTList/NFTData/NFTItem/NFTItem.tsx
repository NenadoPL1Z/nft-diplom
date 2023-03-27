import React from "react";
import { INftModel } from "@/lib/models/INftModel";
import { Button, styled } from "@mui/material";
import { COLORS, PRIMARY_MAIN_COLOR } from "../../../../../theme/colors";
import NFTItemImage from "@/components/NFT/NFTList/NFTData/NFTItem/NFTItemImage/NFTItemImage";
import NftAttributes from "@/components/NFT/NFTList/NFTData/NFTItem/NftAttributes/NftAttributes";

const NFTItem = (props: INftModel) => {
  const { token_id, name, normalized_metadata } = props;

  return (
    <ContainerSC>
      <WrapperSC>
        <NFTItemImage metadata={normalized_metadata} />
        <TextSC>
          <div>
            <TitleSC>
              {name} <span>{token_id}</span>
            </TitleSC>
            <NftAttributes {...normalized_metadata} />
          </div>
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
  min-width: 200px;
  @media (max-width: 1024px) {
    width: 33%;
  }
  @media (max-width: 650px) {
    width: 50%;
  }
  @media (max-width: 500px) {
    min-width: 150px;
    padding: 0 5px;
  }
  @media (max-width: 350px) {
    width: 100%;
  }
`;

const WrapperSC = styled("div")`
  border-radius: 10px;
  background-color: ${COLORS.SECONDARY};
  overflow: hidden;
  height: 100%;
`;

const TextSC = styled("div")`
  padding: 10px;
  display: flex;
  flex-direction: column;
  height: calc(100% - 255px);
  justify-content: space-between;
`;

const TitleSC = styled("h4")`
  margin-bottom: 10px;
  font-weight: 500;
  & > span {
    color: ${PRIMARY_MAIN_COLOR};
  }
`;

export default React.memo(NFTItem);
