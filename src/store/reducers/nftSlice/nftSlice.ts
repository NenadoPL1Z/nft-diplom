import { createSlice, PayloadAction } from "@reduxjs/toolkit";
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
  address: "0xb47e3cd837dDF8e4c57F05d70Ab865de6e193BBB",
  chain: "ETHEREUM",
  cursor: undefined,
};

export const nftSlice = createSlice({
  name: nftSliceName,
  initialState,
  reducers: {
    changeChain(
      state,
      action: PayloadAction<Pick<INftReducerState, "chain">["chain"]>,
    ) {
      state.chain = action.payload;
    },
    changeAddress(state, action: PayloadAction<string>) {
      state.address = action.payload;
    },
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

export const { changeNftLoading, changeAddress, changeChain } =
  nftSlice.actions;
