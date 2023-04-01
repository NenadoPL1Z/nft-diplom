import React from "react";
import NftSearch from "@/components/NFT/NFTSearch/NFTSearch";
import NftList from "@/components/NFT/NFTList/NFTList";
import { MainNFTProps } from "@/components/NFT/types";
import { useNFTStyles } from "@/components/NFT/NFT.styles";
import { DEFAULT_ADDRESS, DEFAULT_CHAIN } from "@/lib/constants/constants";
import { PagesNamespace } from "@/types/enum";
import BreadcrumbsUI from "@/UI/BreadcrumbsUI/BreadcrumbsUI";
import NFTLoading from "@/components/NFT/NFTList/NFTLoading/NFTLoading";
import { useNFT } from "@/components/NFT/useNFT";

const NFT = ({
  id = "",
  search = DEFAULT_ADDRESS,
  chain = DEFAULT_CHAIN,
  pathname = PagesNamespace.NFT,
  isDisableSelect = false,
  isLoading = false,
  breadcrumbsData = [],
}: Partial<MainNFTProps>) => {
  const props = { search, chain, id, pathname, isDisableSelect };

  return (
    <ContainerSC>
      {isLoading && <NFTLoading />}
      {!isLoading && (
        <>
          {!!breadcrumbsData?.length && (
            <BreadcrumbsUI data={breadcrumbsData} />
          )}
          <NftSearch {...props} />
          <NftList {...props} />
        </>
      )}
    </ContainerSC>
  );
};

const { ContainerSC } = useNFTStyles();

export default React.memo(NFT);
