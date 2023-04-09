import React from "react";
import { INftModel } from "@/lib/models/INftModel";
import NFTItem from "@/components/NFT/NFTItem/NFTItem";
import { useNFTTopContentStyles } from "@/components/NFTID/NFTIdTop/NFTTopContent/NFTTopContent.styles";
import BreadcrumbsUI from "@/UI/BreadcrumbsUI/BreadcrumbsUI";
import { useNFTTopContent } from "@/components/NFTID/NFTIdTop/NFTTopContent/useNFTTopContent";
import NftTopRight from "@/components/NFTID/NFTIdTop/NFTTopContent/NFTTopRight/NFTTopRight";
import { useBigTablet } from "@/hooks/useMedia";
import NFTFavorites from "@/components/NFT/NFTItem/NFTFavorites/NFTFavorites";
import { EvmChainUnion } from "@/store/reducers/nftSlice/types";

const NFTTopContent = (props: INftModel) => {
  const { breadcrumbData, isFavorite, id, chain, address } = useNFTTopContent();
  const isBigTablet = useBigTablet();

  return (
    <ContainerSC>
      <BreadcrumbsUI data={breadcrumbData} />
      <WrapperSC>
        {!isBigTablet && (
          <AsideSC>
            <NFTItem
              search={address}
              chain={chain}
              initialIsFavorite={isFavorite}
              isVisibleCollectionItem={false}
              {...props}
            />
          </AsideSC>
        )}
        <RightContainerSC>
          {isBigTablet && (
            <NFTFavorites
              chain={chain}
              search={address}
              token_id={id}
              initialIsFavorite={isFavorite}
              normalized_metadata={props.normalized_metadata}
            />
          )}
          <NftTopRight {...props} />
        </RightContainerSC>
      </WrapperSC>
    </ContainerSC>
  );
};

const { ContainerSC, WrapperSC, AsideSC, RightContainerSC } =
  useNFTTopContentStyles();

export default React.memo(NFTTopContent);
