import React from "react";
import { INftModel } from "@/lib/models/INftModel";
import { Button } from "@mui/material";
import NFTItemImage from "@/components/NFT/NFTItem/NFTItemImage/NFTItemImage";
import NftAttributes from "@/components/NFT/NFTItem/NftAttributes/NftAttributes";
import { useNFTItemStyles } from "@/components/NFT/NFTItem/NFTITem.styles";
import NFTFavorites from "@/components/NFT/NFTItem/NFTFavorites/NFTFavorites";

const NFTItem = (props: INftModel) => {
  const { token_id, name, normalized_metadata } = props;

  return (
    <ContainerSC>
      <WrapperSC>
        <ImageContainerSC>
          <NFTItemImage metadata={normalized_metadata} />
          <FavoriteContainerSC>
            <NFTFavorites />
          </FavoriteContainerSC>
        </ImageContainerSC>
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

const {
  ContainerSC,
  WrapperSC,
  ImageContainerSC,
  FavoriteContainerSC,
  TitleSC,
  TextSC,
} = useNFTItemStyles();

export default React.memo(NFTItem);
