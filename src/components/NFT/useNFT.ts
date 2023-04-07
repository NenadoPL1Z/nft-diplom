import { useEffect, useMemo } from "react";
import { PagesNamespace } from "@/types/enum";
import { MainNFTProps } from "@/components/NFT/types";
import { dbGetFavorites } from "../../init/FirestoreInit";
import { useAppSelector } from "@/hooks/store/useStore";

export const useNFT = ({
  search,
  breadcrumbsData = [],
}: Pick<MainNFTProps, "breadcrumbsData" | "search">) => {
  const userData = useAppSelector((state) => state.userSlice.userData);

  const breadcrumbs = useMemo(
    () => [{ title: "Маркет", href: PagesNamespace.NFT }, ...breadcrumbsData],
    [breadcrumbsData],
  );

  const isVisibleBreadcrumbs = useMemo(
    () => breadcrumbs.length > 1,
    [breadcrumbs],
  );

  useEffect(() => {
    if (userData?.uid && search) {
      dbGetFavorites({ uid: userData.uid, address: search });
    }
  }, [search, userData]);

  return {
    breadcrumbs,
    isVisibleBreadcrumbs,
  };
};
