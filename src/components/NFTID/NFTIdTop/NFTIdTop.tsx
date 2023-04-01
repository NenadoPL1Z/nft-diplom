import React, { useMemo } from "react";
import { INftReducerState } from "@/store/reducers/nftSlice/types";
import NFTLoading from "@/components/NFT/NFTList/NFTLoading/NFTLoading";
import NFTEmpty from "@/components/NFT/NFTList/NFTEmpty/NFTEmpty";
import NFTTopContent from "@/components/NFTID/NFTIdTop/NFTTopContent/NFTTopContent";

const NFTIdTop = ({
  isLoading,
  hasError,
  result,
}: Pick<INftReducerState, "isLoading" | "hasError" | "result">) => {
  const isVisibleContent = useMemo(
    () => !isLoading && !hasError && result[0],
    [isLoading, hasError, result],
  );

  return (
    <>
      {isLoading && <NFTLoading />}
      {hasError && (
        <NFTEmpty buttonProps={{ children: "Вернуться на главную" }} />
      )}
      {isVisibleContent && <NFTTopContent {...result} />}
    </>
  );
};

export default React.memo(NFTIdTop);
