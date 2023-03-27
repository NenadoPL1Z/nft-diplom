import React from "react";
import { useNFTSearch } from "@/components/NFT/NFTSearch/useNFTSearch";
import NFTExchange from "@/components/NFT/NFTSearch/NFTExchange/NFTExchange";
import PopularResults from "@/components/NFT/NFTSearch/PopularResults/PopularResults";
import { useNFTSearchStyles } from "@/components/NFT/NFTSearch/NFTSearch.styles";

const NFTSearch = () => {
  const { search, setSearch, onSubmit, onClick } = useNFTSearch();

  return (
    <>
      <PramsContainerSC onSubmit={onSubmit}>
        <TFSearchUISC
          value={search}
          fullWidth={true}
          onChange={(e) => setSearch(e.target.value)}
          onClickRightIcon={() => setSearch("")}
        />
        <SelectContainerSC>
          <NFTExchange />
        </SelectContainerSC>
        {search && (
          <CustomButton
            color="secondary"
            type="submit">
            ПОИСК
          </CustomButton>
        )}
      </PramsContainerSC>
      <ContainerSC>
        <PopularResults onClick={onClick} />
      </ContainerSC>
    </>
  );
};

const {
  ContainerSC,
  PramsContainerSC,
  TFSearchUISC,
  SelectContainerSC,
  CustomButton,
} = useNFTSearchStyles();

export default React.memo(NFTSearch);
