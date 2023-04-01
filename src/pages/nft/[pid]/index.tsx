import React, { useEffect, useState } from "react";
import NFT from "@/components/NFT/NFT";
import { useRouter } from "next/router";
import { PagesNamespace } from "@/types/enum";
import { exchangeData } from "@/lib/mock/exchangeData";
import { EvmChainUnion } from "@/store/reducers/nftSlice/types";
import { DEFAULT_CHAIN } from "@/lib/constants/constants";
import NFTLoading from "@/components/NFT/NFTList/NFTLoading/NFTLoading";

const NFTChain = () => {
  const { asPath, push } = useRouter();
  const [defaultChain, setDefaultChain] = useState<EvmChainUnion | "">("");

  useEffect(() => {
    if (asPath) {
      const chain = asPath.split("/")[2];

      //? empty
      if (!chain) {
        push(PagesNamespace.NFT);
        return;
      }

      //? asPath loading
      if (chain !== "[pid]") {
        //? find chain
        if (!exchangeData.find((item) => item === chain)) {
          push(`${PagesNamespace.NFT}/${DEFAULT_CHAIN}`);
          return;
        }
        setDefaultChain(chain as EvmChainUnion);
      }
    }
  }, [asPath, push]);

  return defaultChain ? (
    <NFT
      chain={defaultChain}
      isDisableSelect
    />
  ) : (
    <NFTLoading />
  );
};

export default React.memo(NFTChain);
