import React from "react";
import { INftModel } from "@/lib/models/INftModel";
import NFTItem from "@/components/NFT/NFTItem/NFTItem";
import { useNFTTopContentStyles } from "@/components/NFTID/NFTIdTop/NFTTopContent/NFTTopContent.styles";
import BreadcrumbsUI from "@/UI/BreadcrumbsUI/BreadcrumbsUI";
import { useNFTTopContent } from "@/components/NFTID/NFTIdTop/NFTTopContent/useNFTTopContent";
import NftTopRight from "@/components/NFTID/NFTIdTop/NFTTopContent/NFTTopRight/NFTTopRight";

const NFTTopContent = (props: INftModel) => {
  const { breadcrumbData } = useNFTTopContent();

  return (
    <ContainerSC>
      <BreadcrumbsUI data={breadcrumbData} />
      <WrapperSC>
        <AsideSC>
          <NFTItem
            search=""
            chain="ETHEREUM"
            isVisibleCollectionItem={false}
            {...props}
          />
        </AsideSC>
        <RightContainerSC>
          <NftTopRight {...props} />
        </RightContainerSC>
      </WrapperSC>
    </ContainerSC>
  );
};

const { ContainerSC, WrapperSC, AsideSC, RightContainerSC } =
  useNFTTopContentStyles();

export default React.memo(NFTTopContent);
