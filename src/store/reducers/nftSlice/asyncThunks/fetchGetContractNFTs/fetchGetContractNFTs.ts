import { createAsyncThunk } from "@reduxjs/toolkit";
import Moralis from "moralis";
import { IStore } from "@/store/store";
import {
  CursorType,
  EvmChainUnion,
  nftSliceName,
} from "@/store/reducers/nftSlice/types";
import { INftModel } from "@/lib/models/INftModel";
import { EvmChain } from "@moralisweb3/common-evm-utils";

export const fetchGetContractNFTs = createAsyncThunk<
  { result: INftModel[]; cursor: CursorType },
  void,
  IStore
>(
  nftSliceName + "/fetchGetContractNFTs",
  async (_, { rejectWithValue, getState }) => {
    try {
      console.log(getState());
      const response = await Moralis.EvmApi.nft
        .getContractNFTs({
          chain: EvmChain[getState().nftSlice.chain as EvmChainUnion] as any,
          address: getState().nftSlice.address,
          limit: getState().nftSlice.page_size,
          cursor: getState().nftSlice.cursor,
          normalizeMetadata: true,
        })
        .then((r) => r.toJSON());

      return {
        result: response.result as INftModel[],
        cursor: response.cursor,
      };
    } catch (e) {
      console.log(e);
      return rejectWithValue("Ошибка получения api");
    }
  },
);
