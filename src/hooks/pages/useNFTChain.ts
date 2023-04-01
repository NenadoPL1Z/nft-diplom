import { useRouter } from "next/router";
import { getQuery } from "@/lib/services/services";
import { QueryNFTType } from "@/components/NFT/types";
import { useEffect, useMemo, useState } from "react";
import { EvmChainUnion } from "@/store/reducers/nftSlice/types";
import { PagesNamespace } from "@/types/enum";
import { exchangeData } from "@/lib/mock/exchangeData";
import { DEFAULT_CHAIN } from "@/lib/constants/constants";

export const useNFTChain = () => {
  const { asPath, push } = useRouter();
  const { search, id } = getQuery(asPath) as QueryNFTType;

  const [defaultChain, setDefaultChain] = useState<EvmChainUnion | "">("");

  const pathname = useMemo(
    () => `${PagesNamespace.NFT}/${defaultChain}`,
    [defaultChain],
  );
  const breadcrumbsData = useMemo(
    () => [{ title: defaultChain, href: pathname }],
    [defaultChain, pathname],
  );

  useEffect(() => {
    if (asPath) {
      const chain = asPath.split("/")[2].split("?")[0];

      //? empty
      if (!chain) {
        push(PagesNamespace.NFT);
        return;
      }

      //? asPath loading
      if (chain !== "[chain]") {
        //? find chain
        if (!exchangeData.find((item) => item === chain)) {
          push(`${PagesNamespace.NFT}/${DEFAULT_CHAIN}`);
          return;
        }
        setDefaultChain(chain as EvmChainUnion);
      }
    }
  }, [asPath, push]);

  return {
    defaultChain,
    id,
    search,
    pathname,
    breadcrumbsData,
  };
};
