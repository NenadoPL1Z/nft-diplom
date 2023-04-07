import { useController, useForm } from "react-hook-form";
import { ISearchFormModel } from "@/lib/models/FormModels/ISearchFormModel";
import { useAppSelector } from "@/hooks/store/useStore";
import { useEffect, useMemo } from "react";
import { useRouter } from "next/router";
import { scrollTop } from "@/lib/services/services";
import { exchangeData } from "@/lib/mock/exchangeData";
import { resetNftSlice } from "@/store/reducers/nftSlice/nftSlice";
import { IPopularResultModel } from "@/lib/models/IPopularResultModel";
import { useGetNFT } from "@/hooks/store/useGetNFT";
import { NFTProps } from "@/components/NFT/types";
import { DEFAULT_ADDRESS, DEFAULT_CHAIN } from "@/lib/constants/constants";

export const useNFTSearch = ({ search, chain, id, pathname }: NFTProps) => {
  const { push, asPath } = useRouter();

  const { dispatch, handleFetchData } = useGetNFT();
  const isMoralis = useAppSelector((state) => state.globalSlice.isMoralis);

  const methods = useForm<ISearchFormModel>({
    defaultValues: { search: DEFAULT_ADDRESS, chain: DEFAULT_CHAIN, id: "" },
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
    push({
      pathname,
      query: {
        search: data.address,
        chain: "ETHEREUM",
        id: "",
      },
    });
  };

  const onSubmit = handleSubmit(({ search, chain, id }) => {
    push({ pathname, query: { search, chain, id } }).then(() => {
      scrollTop();
    });
  });

  useEffect(() => {
    if (isMoralis && asPath) {
      // set query
      if (!exchangeData.find((item) => item === chain)) {
        push({
          pathname,
          query: {
            id: "",
            search,
            chain,
          },
        });
        return;
      }

      const data = {
        search,
        chain,
        id,
      };

      reset(data);
      dispatch(resetNftSlice());
      handleFetchData(data);
    }
  }, [isMoralis, asPath]);

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
