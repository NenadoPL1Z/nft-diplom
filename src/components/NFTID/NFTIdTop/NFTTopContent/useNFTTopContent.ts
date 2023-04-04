import { useRouter } from "next/router";
import { useMemo } from "react";
import { BreadcrumbsItemType } from "@/UI/BreadcrumbsUI/type";
import { PagesNamespace } from "@/types/enum";

export const useNFTTopContent = () => {
  const { query } = useRouter();

  const breadcrumbData: BreadcrumbsItemType[] = useMemo(
    () => [
      { title: "Маркет", href: PagesNamespace.NFT },
      {
        title: query.chain as string,
        href: `${PagesNamespace.NFT}/${query.chain}`,
      },
      {
        title: query.address as string,
        href: `${PagesNamespace.NFT}/${query.chain}/${query.address}`,
      },
      {
        title: query.id as string,
        href: `${PagesNamespace.NFT}/${query.chain}/${query.address}/${query.id}`,
      },
    ],
    [query],
  );

  return {
    breadcrumbData,
  };
};
