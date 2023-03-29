import React from "react";
import NftList from "@/components/NFT/NFTList/NFTList";
import NftSearch from "@/components/NFT/NFTSearch/NFTSearch";
import { styled } from "@mui/material";

// TODO: Поиск по id; Переверстать на grid

const Nft = () => {
  return (
    <ContainerSC>
      <NftSearch />
      <NftList />
    </ContainerSC>
  );
};

const ContainerSC = styled("section")`
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export default Nft;
