import { FormEvent, useEffect, useState } from "react";
import { IPopularResultModel } from "@/lib/models/IPopularResultModel";
import { useAppSelector } from "@/hooks/useStore";
import { useRouter } from "next/router";

export const useNFTSearch = () => {
  const router = useRouter();
  const [search, setSearch] = useState<string>("");
  const chain = useAppSelector((state) => state.nftSlice.chain);
  const address = useAppSelector((state) => state.nftSlice.address);

  const onSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) {
      router
        .push(router.pathname, {
          query: {
            search,
            chain,
          },
        })
        .then(() => {
          window.scrollTo({
            top: 0,
            behavior: "smooth",
          });
        });
    }
  };

  useEffect(() => {
    setSearch(address);
  }, [address]);

  const onClick = ({ title, address }: IPopularResultModel) => {
    return () => {
      console.log(title, address);
    };
  };

  return {
    search,
    onClick,
    setSearch,
    onSubmit,
  };
};
