import { useRouter } from "next/router";
import { useEffect, useMemo, useState } from "react";
import { BreadcrumbsItemType } from "@/UI/BreadcrumbsUI/type";
import { PagesNamespace } from "@/types/enum";
import { useAppSelector } from "@/hooks/store/useStore";
import { dbGetFavoritesID } from "../../../../init/FirestoreInit";
import { EvmChainUnion } from "@/store/reducers/nftSlice/types";

export const useNFTTopContent = () => {
  const { query } = useRouter();

  const userData = useAppSelector((state) => state.userSlice.userData);

  const [isFavorite, setIsFavorite] = useState<boolean>(false);

  const id = query?.id as string;
  const chain = query?.chain as EvmChainUnion;
  const address = query?.address as string;

  const breadcrumbData: BreadcrumbsItemType[] = useMemo(
    () => [
      { title: "Маркет", href: PagesNamespace.NFT },
      {
        title: chain as string,
        href: `${PagesNamespace.NFT}/${chain}`,
      },
      {
        title: address as string,
        href: `${PagesNamespace.NFT}/${chain}/${address}`,
      },
      {
        title: id as string,
        href: `${PagesNamespace.NFT}/${chain}/${address}/${id}`,
      },
    ],
    [query],
  );

  useEffect(() => {
    if (userData?.uid) {
      dbGetFavoritesID({
        uid: userData.uid,
        address: address as string,
        tokenId: id as string,
      })
        .then((res) => {
          setIsFavorite(res);
        })
        .catch(() => {
          setIsFavorite(false);
        });
    }
  }, [userData]);

  return {
    id,
    chain,
    address,
    isFavorite,
    breadcrumbData,
  };
};
