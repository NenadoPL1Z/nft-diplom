import React from "react";
import ButtonUI from "@/UI/ButtonUI/ButtonUI";
import { NFTProps } from "@/components/NFT/types";
import { useNFTMoreStyles } from "@/components/NFT/NFTList/NFTMore/NFTMore.styles";
import { useNFTMore } from "@/components/NFT/NFTList/NFTMore/useNFTMore";

const NftMore = (props: NFTProps) => {
  const { onPress } = useNFTMore(props);

  return (
    <ContainerSC>
      <ButtonUI onClick={onPress}>Показать еще</ButtonUI>
    </ContainerSC>
  );
};

const { ContainerSC } = useNFTMoreStyles();

export default React.memo(NftMore);
