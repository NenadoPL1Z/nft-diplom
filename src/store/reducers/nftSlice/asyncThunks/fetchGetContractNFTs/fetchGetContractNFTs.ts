import { createAsyncThunk } from "@reduxjs/toolkit";
import { nftSlice } from "@/store/reducers/nftSlice/nftSlice";
import Moralis from "moralis";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { IStore } from "@/store/store";
import { NFT_API_KEY } from "@/lib/constants/constants";
import { nftSliceName } from "@/store/reducers/nftSlice/types";
import { INftModel } from "@/lib/models/INftModel";

export const fetchGetContractNFTs = createAsyncThunk<
  INftModel[],
  string | void,
  IStore
>(
  nftSliceName + "/fetchGetContractNFTs",
  async (
    address = "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
    { rejectWithValue },
  ) => {
    try {
      await Moralis.start({
        apiKey: NFT_API_KEY,
        // ...and any other configuration
      });

      const chain = EvmChain.ETHEREUM;

      const response = await Moralis.EvmApi.nft
        .getContractNFTs({
          address: address as string,
          chain,
        })
        .then((r) => r.toJSON());

      return response.result as INftModel[];
    } catch (e) {
      return rejectWithValue("Ошибка получения api");
    }
  },
);
