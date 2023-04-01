import React from "react";
import { INftReducerState } from "@/store/reducers/nftSlice/types";
import { styled } from "@mui/material";

type NFTTopContentProps = Pick<INftReducerState, "result">["result"];

const NFTTopContent = (props: NFTTopContentProps) => {
  return (
    <ContainerSC>
      {/*<NFTItem*/}
      {/*  name={""}*/}
      {/*  symbol={""}*/}
      {/*  token_id={""}*/}
      {/*  token_address={""}*/}
      {/*  contract_type={""}*/}
      {/*  search={""}*/}
      {/*  chain={"ETHEREUM"}*/}
      {/*  {...props}*/}
      {/*  isVisibleCollectionItem={false}*/}
      {/*/>*/}
    </ContainerSC>
  );
};

const ContainerSC = styled("section")``;

export default React.memo(NFTTopContent);
