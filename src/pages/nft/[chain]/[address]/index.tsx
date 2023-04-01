import React from "react";
import NFT from "@/components/NFT/NFT";
import { PagesNamespace } from "@/types/enum";
import { useNFTAddress } from "@/hooks/pages/useNFTAddress/useNFTAddress";
import { useNFTAddressStyles } from "@/hooks/pages/useNFTAddress/NFTAddress.styles";

const NftAddress = () => {
  const { search, chain, isLoading, breadcrumbsData, nftItem } =
    useNFTAddress();

  return (
    <>
      <ContainerSC>
        {nftItem?.symbol && (
          <TitleSC>
            Коллекция: <span>{nftItem.symbol}</span>
          </TitleSC>
        )}
        {nftItem?.contract_type && (
          <TitleTwoSC>
            Контракт: <span>{nftItem.contract_type}</span>
          </TitleTwoSC>
        )}
        {nftItem && search && (
          <TitleTwoSC>
            Адресс: <span>{search}</span>
          </TitleTwoSC>
        )}
      </ContainerSC>
      <NFT
        id={""}
        search={search}
        chain={chain}
        pathname={`${PagesNamespace.NFT}/${chain}/${search}`}
        isLoading={isLoading}
        breadcrumbsData={breadcrumbsData}
        isDisableSelect
        isSearchParams={false}
        isVisibleCollectionItem={false}
      />
    </>
  );
};

const { ContainerSC, TitleSC, TitleTwoSC } = useNFTAddressStyles();

export default React.memo(NftAddress);
