import React from "react";
import { useNFTId } from "@/hooks/pages/useNFTId";
import NFTLoading from "@/components/NFT/NFTList/NFTLoading/NFTLoading";
import NFTIdTop from "@/components/NFTID/NFTIdTop/NFTIdTop";
import NFTIdBottom from "@/components/NFTID/NFTIdBottom/NFTIdBottom";

const NftIDPage = () => {
  const { isLoading, hasError, result } = useNFTId();

  return (
    <>
      <NFTIdTop
        isLoading={isLoading}
        hasError={hasError}
        result={result}
      />
      <NFTIdBottom />
    </>
  );
};

export default React.memo(NftIDPage);
