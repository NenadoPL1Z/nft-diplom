import React from "react";
import { INftModel } from "@/lib/models/INftModel";
import { Button } from "@mui/material";
import NFTItemImage from "@/components/NFT/NFTList/NFTData/NFTItem/NFTItemImage/NFTItemImage";
import NftAttributes from "@/components/NFT/NFTList/NFTData/NFTItem/NftAttributes/NftAttributes";
import { useNFTItemStyless } from "@/components/NFT/NFTList/NFTData/NFTItem/NFTITem.styles";

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
            {!!normalized_metadata?.attributes?.length && (
              <NftAttributes {...normalized_metadata} />
            )}
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

const { ContainerSC, WrapperSC, TitleSC, TextSC } = useNFTItemStyless();

export default React.memo(NFTItem);
