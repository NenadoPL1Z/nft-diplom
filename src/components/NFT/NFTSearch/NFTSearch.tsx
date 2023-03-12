import React, { FormEvent, useState } from "react";
import { Button, styled } from "@mui/material";
import TFSearchUI from "@/UI/TextFieldUI/TextFields/TFSearchUI/TFSearchUI";
import PopularResults from "@/components/NFT/NFTSearch/PopularResults/PopularResults";
import { useNFTSearch } from "@/components/NFT/NFTSearch/useNFTSearch";

const NFTSearch = () => {
  const { search, setSearch, onSubmit, onClick } = useNFTSearch();

  return (
    <section>
      <SearchContainerSC onSubmit={onSubmit}>
        <TFSearchUI
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          onClickRightIcon={() => setSearch("")}
        />
        {search && <CustomButton>ПОИСК</CustomButton>}
      </SearchContainerSC>
      <PopularResults onClick={onClick} />
    </section>
  );
};

const SearchContainerSC = styled("form")`
  margin: 20px 0 15px;
  display: flex;
`;

const CustomButton = styled(Button)`
  margin-left: 15px;
`;

export default React.memo(NFTSearch);
