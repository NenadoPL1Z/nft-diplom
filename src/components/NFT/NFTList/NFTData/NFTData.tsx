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
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  gap: 15px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
`;

export default React.memo(NFTData);
