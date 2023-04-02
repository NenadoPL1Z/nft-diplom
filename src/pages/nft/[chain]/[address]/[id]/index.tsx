import React from "react";
import { useNFTId } from "@/hooks/pages/useNFTId";
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
      {result[0] && <NFTIdBottom />}
    </>
  );
};

export default React.memo(NftIDPage);
