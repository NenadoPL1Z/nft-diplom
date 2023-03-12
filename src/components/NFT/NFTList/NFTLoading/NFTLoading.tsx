import React from "react";
import { CircularProgress, styled } from "@mui/material";
import { NFTContainerSC } from "@/components/NFT/NFTList/styles";

const NftLoading = () => {
  return (
    <NFTContainerSC>
      <CustomCircularProgress />
    </NFTContainerSC>
  );
};

const CustomCircularProgress = styled(CircularProgress)`
  width: 60px !important;
  height: 60px !important;
`;

export default React.memo(NftLoading);
