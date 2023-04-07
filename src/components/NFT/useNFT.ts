import { useEffect, useMemo, useState } from "react";
import { PagesNamespace } from "@/types/enum";
import { MainNFTProps } from "@/components/NFT/types";
import { dbGetFavorites } from "../../init/FirestoreInit";
import { useAppSelector } from "@/hooks/store/useStore";
import { MapFavorites } from "@/types/types";
import { useRouter } from "next/router";

export const useNFT = ({
  search,
  breadcrumbsData = [],
}: Pick<MainNFTProps, "breadcrumbsData" | "search">) => {
  const { asPath } = useRouter();

  const userData = useAppSelector((state) => state.userSlice.userData);

  const [favoritesMap, setFavoritesMap] = useState<MapFavorites>(new Map([]));

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
      dbGetFavorites({ uid: userData.uid, address: search }).then(
        (response) => {
          setFavoritesMap(response);
        },
      );
    }
  }, [asPath, search, userData]);

  return {
    breadcrumbs,
    favoritesMap,
    isVisibleBreadcrumbs,
  };
};
