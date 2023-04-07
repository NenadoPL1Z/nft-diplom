import React from "react";
import { INftModel } from "@/lib/models/INftModel";
import NFTItem from "@/components/NFT/NFTItem/NFTItem";
import { NFTProps } from "@/components/NFT/types";
import { useNFTDataStyles } from "@/components/NFT/NFTList/NFTData/NFTData.styles";

type NFTDataProps = Pick<
  NFTProps,
  | "search"
  | "chain"
  | "isVisibleCollectionItem"
  | "isVisibleTokenButton"
  | "favoritesMap"
> & {
  data: INftModel[];
};

const NFTData = ({
  data,
  chain,
  isVisibleCollectionItem,
  search,
  isVisibleTokenButton = true,
  favoritesMap,
}: NFTDataProps) => {
  return (
    <ContainerSC>
      {data.map((dataItem) => (
        <NFTItem
          key={dataItem.token_id}
          search={search}
          chain={chain}
          isVisibleTokenButton={isVisibleTokenButton}
          isVisibleCollectionItem={isVisibleCollectionItem}
          initialIsFavorite={!!favoritesMap?.has(dataItem.token_id)}
          {...dataItem}
        />
      ))}
    </ContainerSC>
  );
};

const { ContainerSC } = useNFTDataStyles();

export default React.memo(NFTData);
