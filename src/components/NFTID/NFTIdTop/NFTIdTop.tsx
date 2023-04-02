import React, { useMemo } from "react";
import { INftReducerState } from "@/store/reducers/nftSlice/types";
import NFTLoading from "@/components/NFT/NFTList/NFTLoading/NFTLoading";
import NFTEmpty from "@/components/NFT/NFTList/NFTEmpty/NFTEmpty";
import NFTTopContent from "@/components/NFTID/NFTIdTop/NFTTopContent/NFTTopContent";
import NFTIdBottom from "@/components/NFTID/NFTIdBottom/NFTIdBottom";
import { styled } from "@mui/material";

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
    <ContainerSC>
      {isLoading && <NFTLoading />}
      {hasError && (
        <NFTEmpty buttonProps={{ children: "Вернуться на главную" }} />
      )}
      {isVisibleContent && <NFTTopContent {...result[0]} />}
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  margin: 20px 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
`;

export default React.memo(NFTIdTop);
