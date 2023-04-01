import React, { useEffect, useMemo, useState } from "react";
import NFT from "@/components/NFT/NFT";
import NFTLoading from "@/components/NFT/NFTList/NFTLoading/NFTLoading";
import BreadcrumbsUI from "@/UI/BreadcrumbsUI/BreadcrumbsUI";
import { useNFTChain } from "@/hooks/pages/useNFTChain";
import { DEFAULT_CHAIN } from "@/lib/constants/constants";

const NFTChain = () => {
  const { defaultChain, id, search, breadcrumbsData, pathname } = useNFTChain();

  return (
    <NFT
      id={id}
      search={search}
      chain={defaultChain || DEFAULT_CHAIN}
      pathname={pathname}
      isLoading={false}
      breadcrumbsData={breadcrumbsData}
      isDisableSelect
    />
  );
};

export default React.memo(NFTChain);
