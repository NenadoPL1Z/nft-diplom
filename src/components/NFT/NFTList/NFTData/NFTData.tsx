import React from "react";
import { INftModel } from "@/lib/models/INftModel";
import NFTItem from "@/components/NFT/NFTItem/NFTItem";
import { styled } from "@mui/material";
import { useRouter } from "next/router";

interface INFTDataProps {
  data: INftModel[];
}

const NFTData = ({ data }: INFTDataProps) => {
  const {
    query: { search, chain },
  } = useRouter();

  return (
    <ContainerSC>
      {data.map((dataItem) => (
        <NFTItem
          key={dataItem.token_id}
          search={search as string}
          chain={chain as string}
          {...dataItem}
        />
      ))}
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(250px, 1fr));
  margin-bottom: 40px;
  gap: 15px;
  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
  }
  @media (max-width: 500px) {
    grid-template-columns: repeat(auto-fill, minmax(180px, 1fr));
  }
`;

export default React.memo(NFTData);
