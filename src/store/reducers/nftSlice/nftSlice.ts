import { createSlice } from "@reduxjs/toolkit";
import {
  INftReducerState,
  nftSliceName,
} from "@/store/reducers/nftSlice/types";
import { fetchGetContractNFTs } from "@/store/reducers/nftSlice/asyncThunks/fetchGetContractNFTs/fetchGetContractNFTs";
import { fetchGetNFTId } from "@/store/reducers/nftSlice/asyncThunks/fetchGetNFTId/fetchGetNFTId";

const initialState: INftReducerState = {
  hasError: "",
  isLoading: true,
  isEnd: false,
  isSingle: false,
  cursor: undefined,
  result: [],
};

export const nftSlice = createSlice({
  name: nftSliceName,
  initialState,
  reducers: {
    resetNftSlice: () => initialState,
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
      state.isLoading = false;
      state.isEnd = action.payload.isEnd;
      state.hasError = "";
    });
    builder.addCase(fetchGetContractNFTs.rejected, (state, action) => {
      state.isLoading = false;
      state.hasError = (action.payload as string) || "";
    });
    builder.addCase(fetchGetNFTId.pending, (state) => {
      state.isLoading = true;
      state.hasError = "";
    });
    builder.addCase(fetchGetNFTId.fulfilled, (state, action) => {
      state.cursor = "";
      state.hasError = "";
      state.isEnd = true;
      state.isLoading = false;
      state.isSingle = true;
      state.result = action.payload;
    });
    builder.addCase(fetchGetNFTId.rejected, (state, action) => {
      state.isLoading = false;
      state.hasError = (action.payload as string) || "";
    });
  },
});

export const { changeNftLoading, resetNftSlice } = nftSlice.actions;
