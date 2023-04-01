import React from "react";
import { INftModel } from "@/lib/models/INftModel";
import { Button } from "@mui/material";
import NFTItemImage from "@/components/NFT/NFTItem/NFTItemImage/NFTItemImage";
import NftAttributes from "@/components/NFT/NFTItem/NftAttributes/NftAttributes";
import { useNFTItemStyles } from "@/components/NFT/NFTItem/NFTITem.styles";
import NFTFavorites from "@/components/NFT/NFTItem/NFTFavorites/NFTFavorites";
import { NFTProps } from "@/components/NFT/types";

type NFTItemProps = INftModel & Pick<NFTProps, "search" | "chain">;

const NFTItem = ({ search, chain, ...otherProps }: NFTItemProps) => {
  const { token_id, name, normalized_metadata } = otherProps;

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
          <TextTopSC>
            <TitleSC>
              {name} <span>{token_id}</span>
            </TitleSC>
            {!!normalized_metadata?.attributes?.length && (
              <NftAttributes {...normalized_metadata} />
            )}
          </TextTopSC>
          <Button
            sx={{ marginBottom: "8px" }}
            variant="outlined"
            target="_blank"
            href={`/nft/${chain}/${search}/${token_id}`}>
            ТОКЕН
          </Button>
          <Button
            variant="outlined"
            target="_blank"
            href={`/nft/${chain}/${search}`}>
            КОЛЛЕКЦИЯ
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
  TextTopSC,
} = useNFTItemStyles();

export default React.memo(NFTItem);
