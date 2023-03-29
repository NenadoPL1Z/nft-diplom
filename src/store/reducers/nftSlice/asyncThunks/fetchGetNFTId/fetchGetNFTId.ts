import { createAsyncThunk } from "@reduxjs/toolkit";
import { ISearchFormModel } from "@/lib/models/FormModels/ISearchFormModel";
import { IStore } from "@/store/store";
import {
  EvmChainUnion,
  INftReducerState,
  nftSliceName,
} from "@/store/reducers/nftSlice/types";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { INftModel } from "@/lib/models/INftModel";

export const fetchGetNFTId = createAsyncThunk<
  INftModel[],
  ISearchFormModel,
  IStore
>(
  nftSliceName + "/fetchGetNFTId",
  async ({ id, search, chain }, { rejectWithValue }) => {
    try {
      const response = await Moralis.EvmApi.nft
        .getNFTTokenIdOwners({
          address: search,
          tokenId: id,
          chain: EvmChain[chain as EvmChainUnion] as any,
          normalizeMetadata: true,
        })
        .then((r) => r.toJSON());

      return response.result || [];
    } catch (e: any) {
      return rejectWithValue(`${e.name} ${e.code}`);
    }
  },
);
