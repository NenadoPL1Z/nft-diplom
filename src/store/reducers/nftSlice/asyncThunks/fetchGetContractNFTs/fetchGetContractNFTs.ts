import { createAsyncThunk } from "@reduxjs/toolkit";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { IStore } from "@/store/store";
import { CursorType, nftSliceName } from "@/store/reducers/nftSlice/types";
import { INftModel } from "@/lib/models/INftModel";

export const fetchGetContractNFTs = createAsyncThunk<
  { result: INftModel[]; cursor: CursorType },
  string | void,
  IStore
>(
  nftSliceName + "/fetchGetContractNFTs",
  async (
    address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
    { rejectWithValue, getState },
  ) => {
    try {
      const chain = EvmChain.ETHEREUM;

      const response = await Moralis.EvmApi.nft
        .getContractNFTs({
          chain,
          range: 1,
          address: address as string,
          limit: getState().nftSlice.page_size,
          normalizeMetadata: true,
          cursor: getState().nftSlice.cursor,
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
