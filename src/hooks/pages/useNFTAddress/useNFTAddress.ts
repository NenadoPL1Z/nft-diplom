import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { checkExchange } from "@/lib/services/services";
import { DEFAULT_CHAIN } from "@/lib/constants/constants";
import { BreadcrumbsItemType } from "@/UI/BreadcrumbsUI/type";
import { PagesNamespace } from "@/types/enum";
import { useAppSelector } from "@/hooks/store/useStore";

export const useNFTAddress = () => {
  const { query } = useRouter();
  const nftItem = useAppSelector((state) => state.nftSlice.result[0]);

  console.log(query);

  const [isLoading, setIsLoading] = useState<boolean>(true);

  const search = useMemo(() => query.address as string, [query]);

  const chain = useMemo(
    () => checkExchange((query.chain as string) || "") || DEFAULT_CHAIN,
    [query],
  );

  const breadcrumbsData: BreadcrumbsItemType[] = useMemo(() => {
    if (nftItem?.symbol) {
      return [
        { title: chain, href: `${PagesNamespace.NFT}/${chain}` },
        {
          title: nftItem.symbol,
          href: `${PagesNamespace.NFT}/${chain}/${search}`,
        },
      ];
    }

    return [];
  }, [chain, search, nftItem]);

  // const collectionName = useMemo(() => re);

  useEffect(() => {
    if (Object.keys(query).length) {
      setIsLoading(false);
    }
  }, [query]);

  return {
    search,
    chain,
    nftItem,
    isLoading,
    breadcrumbsData,
  };
};
