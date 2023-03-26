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
  page_size: 15,
  search: "",
  result: [],
  cursor: undefined,
};

export const nftSlice = createSlice({
  name: nftSliceName,
  initialState,
  reducers: {
    changeNftLoading(state) {
      state.isLoading = true;
      state.hasError = "";
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchGetContractNFTs.pending, (state) => {
      state.isLoading = true;
      state.hasError = "";
    });
    builder.addCase(fetchGetContractNFTs.fulfilled, (state, action) => {
      state.result = [...state.result, ...action.payload.result];
      state.cursor = action.payload.cursor;
      state.page += 1;
      state.isLoading = false;
      state.hasError = "";
    });
    builder.addCase(fetchGetContractNFTs.rejected, (state, action) => {
      state.isLoading = false;
      state.hasError = action.error.message || "";
    });
  },
});

export const { changeNftLoading } = nftSlice.actions;
