import React from "react";
import { INftModel } from "@/lib/models/INftModel";
import NFTItem from "@/components/NFT/NFTItem/NFTItem";
import { NFTProps } from "@/components/NFT/types";
import { useNFTDataStyles } from "@/components/NFT/NFTList/NFTData/NFTData.styles";

type NFTDataProps = Omit<NFTProps, "id"> & {
  data: INftModel[];
};

const NFTData = ({ data, chain, search }: NFTDataProps) => {
  return (
    <ContainerSC>
      {data.map((dataItem) => (
        <NFTItem
          key={dataItem.token_id}
          search={search}
          chain={chain}
          {...dataItem}
        />
      ))}
    </ContainerSC>
  );
};

const { ContainerSC } = useNFTDataStyles();

export default React.memo(NFTData);
