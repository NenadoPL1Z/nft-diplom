import { createSlice } from "@reduxjs/toolkit";
import {
  INftReducerState,
  nftSliceName,
} from "@/store/reducers/nftSlice/types";
import { fetchGetContractNFTs } from "@/store/reducers/nftSlice/asyncThunks/fetchGetContractNFTs/fetchGetContractNFTs";

const initialState: INftReducerState = {
  hasError: "",
  isLoading: true,
  page: 0,
  page_size: 100,
  sort: "",
  search: "",
  result: [],
};

export const nftSlice = createSlice({
  name: nftSliceName,
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(fetchGetContractNFTs.pending, (state) => {
      state.isLoading = true;
      state.hasError = "";
    });
    builder.addCase(fetchGetContractNFTs.fulfilled, (state, action) => {
      state.result = [...state.result, ...action.payload];
      state.isLoading = false;
      state.hasError = "";
    });
    builder.addCase(fetchGetContractNFTs.rejected, (state, action) => {
      state.isLoading = false;
      state.hasError = action.error.message || "";
    });
  },
});
