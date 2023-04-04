import React from "react";
import { INftModel } from "@/lib/models/INftModel";
import NFTTopRightInfo from "@/components/NFTID/NFTIdTop/NFTTopContent/NFTTopRight/NFTTopRightInfo/NFTTopRightInfo";
import { NFTIDTitleSC } from "@/components/NFTID/NFTIDTitleSC/NFTIDTitleSC";
import { useBigTablet } from "@/hooks/useMedia";
import { styled } from "@mui/material";
import NFTItemImage from "@/components/NFT/NFTItem/NFTItemImage/NFTItemImage";

const NftTopRight = (props: INftModel) => {
  const isBigTablet = useBigTablet();

  return (
    <>
      {isBigTablet && (
        <ItemContainerSC>
          <NFTItemImage metadata={props.normalized_metadata} />
        </ItemContainerSC>
      )}
      <WrapperSC>
        <NFTIDTitleSC>Общая информация</NFTIDTitleSC>
        <NFTTopRightInfo {...props} />
      </WrapperSC>
    </>
  );
};

const ItemContainerSC = styled("div")`
  max-height: 500px;
  & > img {
    max-height: 500px;
    object-fit: contain;
  }
`;

const WrapperSC = styled("div")`
  padding: 20px;
`;

export default React.memo(NftTopRight);
