import React from "react";
import { INftModel } from "@/lib/models/INftModel";
import NFTItem from "@/components/NFT/NFTList/NFTData/NFTItem/NFTItem";
import { styled } from "@mui/material";

interface INFTDataProps {
  data: INftModel[];
}

const NFTData = ({ data }: INFTDataProps) => {
  return (
    <ContainerSC>
      {data.map((dataItem) => (
        <NFTItem
          key={dataItem.token_id}
          {...dataItem}
        />
      ))}
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  display: flex;
  flex-wrap: wrap;
  margin-bottom: 20px;
`;

export default React.memo(NFTData);
