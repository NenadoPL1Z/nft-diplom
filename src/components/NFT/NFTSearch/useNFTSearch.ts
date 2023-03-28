import { useController, useForm } from "react-hook-form";
import { ISearchFormModle } from "@/lib/models/FormModels/ISearchFormModle";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { PagesNamespace } from "@/types/enum";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { DEFAULT_ADDRESS, DEFAULT_CHAIN } from "@/lib/constants/constants";
import { getQuery } from "@/lib/services/services";
import { exchangeData } from "@/lib/mock/exchangeData";
import { fetchGetContractNFTs } from "@/store/reducers/nftSlice/asyncThunks/fetchGetContractNFTs/fetchGetContractNFTs";
import { resetNftSlice } from "@/store/reducers/nftSlice/nftSlice";

// 0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB
export const useNFTSearch = () => {
  const router = useRouter();
  const { push, asPath } = router;

  const dispatch = useAppDispatch();
  const isMoralis = useAppSelector((state) => state.globalSlice.isMoralis);

  const methods = useForm<ISearchFormModle>({
    defaultValues: { search: DEFAULT_ADDRESS, chain: "ETHEREUM" },
  });
  const { handleSubmit, control, reset, formState } = methods;

  const searchController = useController({ control, name: "search" });
  const chainController = useController({
    control,
    name: "chain",
  });

  const isVisibleSearch = useMemo(() => formState.isDirty, [formState]);

  const onSubmit = handleSubmit(({ search, chain }) => {
    dispatch(resetNftSlice());
    push(PagesNamespace.NFT, { query: { search, chain } }).then(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  useEffect(() => {
    if (isMoralis && asPath) {
      // get query
      const { search, chain } = getQuery(asPath);

      // set query
      if (!exchangeData.find((item) => item === chain)) {
        push(PagesNamespace.NFT, {
          query: {
            search: search || DEFAULT_ADDRESS,
            chain: DEFAULT_CHAIN,
          },
        });
        return;
      }

      const data = {
        search,
        chain,
      } as ISearchFormModle;
      reset(data);
      dispatch(fetchGetContractNFTs(data));
    }
  }, [isMoralis, asPath]);

  useEffect(() => {
    return () => {
      dispatch(resetNftSlice());
    };
  }, []);

  return {
    methods,
    onSubmit,
    isVisibleSearch,
    chainController,
    searchController,
  };
};
