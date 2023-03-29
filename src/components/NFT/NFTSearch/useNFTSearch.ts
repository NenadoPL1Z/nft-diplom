import { useController, useForm } from "react-hook-form";
import { ISearchFormModel } from "@/lib/models/FormModels/ISearchFormModel";
import { useAppDispatch, useAppSelector } from "@/hooks/store/useStore";
import { PagesNamespace } from "@/types/enum";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { DEFAULT_ADDRESS, DEFAULT_CHAIN } from "@/lib/constants/constants";
import { getQuery } from "@/lib/services/services";
import { exchangeData } from "@/lib/mock/exchangeData";
import { fetchGetContractNFTs } from "@/store/reducers/nftSlice/asyncThunks/fetchGetContractNFTs/fetchGetContractNFTs";
import { resetNftSlice } from "@/store/reducers/nftSlice/nftSlice";
import { IPopularResultModel } from "@/lib/models/IPopularResultModel";
import { fetchGetNFTId } from "@/store/reducers/nftSlice/asyncThunks/fetchGetNFTId/fetchGetNFTId";
import { useGetNFT } from "@/hooks/store/useGetNFT";

export const useNFTSearch = () => {
  const router = useRouter();
  const { push, asPath } = router;

  const { dispatch, handleFetchData } = useGetNFT();
  const isMoralis = useAppSelector((state) => state.globalSlice.isMoralis);

  const methods = useForm<ISearchFormModel>({
    defaultValues: { search: DEFAULT_ADDRESS, chain: "ETHEREUM", id: "" },
  });
  const { handleSubmit, control, reset, formState } = methods;

  const searchController = useController({ control, name: "search" });
  const idController = useController({ control, name: "id" });
  const chainController = useController({
    control,
    name: "chain",
  });

  const isVisibleSearch = useMemo(() => formState.isDirty, [formState]);

  const onClickPopularResults = (data: IPopularResultModel) => () => {
    dispatch(resetNftSlice());
    router.push({
      query: {
        search: data.address,
        chain: "ETHEREUM",
        id: "",
      },
    });
  };

  const onSubmit = handleSubmit(({ search, chain, id }) => {
    dispatch(resetNftSlice());
    push(PagesNamespace.NFT, { query: { search, chain, id } }).then(() => {
      window.scrollTo({ top: 0, behavior: "smooth" });
    });
  });

  useEffect(() => {
    if (isMoralis && asPath) {
      const { search, chain, id } = getQuery(asPath);

      // set query
      if (!exchangeData.find((item) => item === chain)) {
        push(PagesNamespace.NFT, {
          query: {
            id: "",
            search: search || DEFAULT_ADDRESS,
            chain: DEFAULT_CHAIN,
          },
        });
        return;
      }

      const data = {
        search,
        chain,
        id,
      } as ISearchFormModel;

      reset(data);
      handleFetchData(data);
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
    idController,
    isVisibleSearch,
    chainController,
    searchController,
    onClickPopularResults,
  };
};
