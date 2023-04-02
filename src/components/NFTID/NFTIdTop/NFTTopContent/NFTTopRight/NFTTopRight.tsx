import React from "react";
import { INftModel } from "@/lib/models/INftModel";
import NFTTopRightInfo from "@/components/NFTID/NFTIdTop/NFTTopContent/NFTTopRight/NFTTopRightInfo/NFTTopRightInfo";
import { NFTIDTitleSC } from "@/components/NFTID/NFTIDTitleSC/NFTIDTitleSC";

const NftTopRight = (props: INftModel) => {
  return (
    <>
      <NFTIDTitleSC>Общая информация</NFTIDTitleSC>
      <NFTTopRightInfo {...props} />
    </>
  );
};

export default React.memo(NftTopRight);
