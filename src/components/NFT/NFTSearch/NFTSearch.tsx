import React from "react";
import { useNFTSearch } from "@/components/NFT/NFTSearch/useNFTSearch";
import NFTExchange from "@/components/NFT/NFTSearch/NFTExchange/NFTExchange";
import { useNFTSearchStyles } from "@/components/NFT/NFTSearch/NFTSearch.styles";
import { FormProvider } from "react-hook-form";
import PopularResults from "@/components/NFT/NFTSearch/PopularResults/PopularResults";
import { NFTProps } from "@/components/NFT/types";

const NFTSearch = ({
  isDisableSelect,
  isSearchParams,
  ...otherProps
}: NFTProps) => {
  const {
    methods,
    idController,
    searchController,
    chainController,
    isVisibleSearch,
    onClickPopularResults,
    onSubmit,
  } = useNFTSearch(otherProps);

  return isSearchParams ? (
    <FormProvider {...methods}>
      <FormContainerSC onSubmit={onSubmit}>
        <TFSearchSC
          name="nft"
          value={searchController.field.value}
          onChange={(e) => searchController.field.onChange(e.target.value)}
          onClickRightIcon={() => searchController.field.onChange("")}
          fullWidth
        />
        <TFFindIdSC
          name="findNFT"
          type="numeric"
          placeholder="id"
          isStartIcon={false}
          value={idController.field.value}
          onChange={(e) => idController.field.onChange(e.target.value)}
          onClickRightIcon={() => idController.field.onChange("")}
        />
        <SelectContainerSC>
          <NFTExchange
            disabled={isDisableSelect}
            value={chainController.field.value}
            onChange={(e) => chainController.field.onChange(e.target.value)}
          />
        </SelectContainerSC>
        {isVisibleSearch && (
          <CustomButton
            color="secondary"
            type="submit">
            НАЙТИ
          </CustomButton>
        )}
      </FormContainerSC>
      <ContainerSC>
        <PopularResults onClick={onClickPopularResults} />
      </ContainerSC>
    </FormProvider>
  ) : null;
};

const {
  ContainerSC,
  FormContainerSC,
  TFSearchSC,
  TFFindIdSC,
  SelectContainerSC,
  CustomButton,
} = useNFTSearchStyles();

export default React.memo(NFTSearch);
