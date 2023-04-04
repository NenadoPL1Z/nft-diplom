import Moralis from "moralis";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { INftModel } from "@/lib/models/INftModel";
import { PAGE_LIMIT } from "@/lib/constants/constants";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { EvmChainUnion } from "@/store/reducers/nftSlice/types";

export const useNFTIdBottom = () => {
  const { query } = useRouter();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [data, setData] = useState<INftModel[]>([]);

  useEffect(() => {
    if (Object.keys(query).length) {
      Moralis.EvmApi.nft
        .getContractNFTs({
          address: query.address as string,
          limit: PAGE_LIMIT,
          chain: EvmChain[query.chain as EvmChainUnion] as never,
          cursor: "",
          normalizeMetadata: true,
        })
        .then((r) => r.toJSON())
        .then((r) => {
          setData(
            (r.result as INftModel[]).filter(
              (item) => item.token_id !== query.id,
            ),
          );
          setIsLoading(false);
        })
        .catch(() => setIsLoading(false));
    }
  }, [query]);

  return {
    data,
    query,
    isLoading,
  };
};
