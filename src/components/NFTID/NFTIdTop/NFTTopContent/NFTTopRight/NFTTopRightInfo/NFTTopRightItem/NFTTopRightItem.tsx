import React from "react";
import { useNFTTopRightItemStyles } from "@/components/NFTID/NFTIdTop/NFTTopContent/NFTTopRight/NFTTopRightInfo/NFTTopRightItem/NFTTopRightItem.styles";

type NFTTopRightItemProps = {
  left: string;
  right: string;
};
const NFTTopRightItem = ({ left, right }: NFTTopRightItemProps) => {
  return (
    <ContainerSC>
      <LeftSC>{left}</LeftSC>
      <RightSC>{right}</RightSC>
    </ContainerSC>
  );
};

const { ContainerSC, RightSC, LeftSC } = useNFTTopRightItemStyles();

export default React.memo(NFTTopRightItem);
