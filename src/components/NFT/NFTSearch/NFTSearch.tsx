import React from "react";
import { useNFTSearch } from "@/components/NFT/NFTSearch/useNFTSearch";
import NFTExchange from "@/components/NFT/NFTSearch/NFTExchange/NFTExchange";
import { useNFTSearchStyles } from "@/components/NFT/NFTSearch/NFTSearch.styles";
import { FormProvider } from "react-hook-form";
import PopularResults from "@/components/NFT/NFTSearch/PopularResults/PopularResults";

const NFTSearch = () => {
  const {
    methods,
    searchController,
    chainController,
    isVisibleSearch,
    onClickPopularResults,
    onSubmit,
  } = useNFTSearch();

  return (
    <FormProvider {...methods}>
      <FormContainerSC onSubmit={onSubmit}>
        <TFSearchUISC
          name="nft"
          value={searchController.field.value}
          onChange={(e) => searchController.field.onChange(e.target.value)}
          onClickRightIcon={() => searchController.field.onChange("")}
          fullWidth
        />
        <SelectContainerSC>
          <NFTExchange
            value={chainController.field.value}
            onChange={(e) => chainController.field.onChange(e.target.value)}
          />
        </SelectContainerSC>
        {isVisibleSearch && (
          <CustomButton
            color="secondary"
            type="submit">
            ПОИСК
          </CustomButton>
        )}
      </FormContainerSC>
      <ContainerSC>
        <PopularResults onClick={onClickPopularResults} />
      </ContainerSC>
    </FormProvider>
  );
};

const {
  ContainerSC,
  FormContainerSC,
  TFSearchUISC,
  SelectContainerSC,
  CustomButton,
} = useNFTSearchStyles();

export default React.memo(NFTSearch);
