import React from "react";
import NFT from "@/components/NFT/NFT";
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
      isLoading={!defaultChain}
      breadcrumbsData={breadcrumbsData}
      isDisableSelect
    />
  );
};

export default React.memo(NFTChain);
