import { createAsyncThunk } from "@reduxjs/toolkit";
import Moralis from "moralis";
import { IStore } from "@/store/store";
import {
  EvmChainUnion,
  INftReducerState,
  nftSliceName,
} from "@/store/reducers/nftSlice/types";
import { INftModel } from "@/lib/models/INftModel";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { PAGE_LIMIT } from "@/lib/constants/constants";
import { ISearchFormModel } from "@/lib/models/FormModels/ISearchFormModel";

export const fetchGetContractNFTs = createAsyncThunk<
  Pick<INftReducerState, "result" | "cursor" | "isEnd">,
  ISearchFormModel,
  IStore
>(
  nftSliceName + "/fetchGetContractNFTs",
  async ({ search, chain }, { rejectWithValue, getState }) => {
    try {
      const response = await Moralis.EvmApi.nft
        .getContractNFTs({
          address: search,
          limit: PAGE_LIMIT,
          chain: EvmChain[chain as EvmChainUnion] as any,
          cursor: getState().nftSlice.cursor,
          normalizeMetadata: true,
        })
        .then((r) => r.toJSON());

      console.log((response.result?.length || 0) < PAGE_LIMIT);

      return {
        result: response.result as INftModel[],
        cursor: response.cursor,
        isEnd: (response.result?.length || 0) < PAGE_LIMIT,
      };
    } catch (e: any) {
      return rejectWithValue(`${e.name} ${e.code}`);
    }
  },
);
