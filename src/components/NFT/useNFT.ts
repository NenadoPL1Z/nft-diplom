import { useMemo } from "react";
import { PagesNamespace } from "@/types/enum";
import { MainNFTProps } from "@/components/NFT/types";

export const useNFT = ({
  breadcrumbsData = [],
}: Pick<MainNFTProps, "breadcrumbsData">) => {
  const breadcrumbs = useMemo(
    () => [{ title: "Маркет", href: PagesNamespace.NFT }, ...breadcrumbsData],
    [breadcrumbsData],
  );

  const isVisibleBreadcrumbs = useMemo(
    () => breadcrumbs.length > 1,
    [breadcrumbs],
  );

  return {
    breadcrumbs,
    isVisibleBreadcrumbs,
  };
};
