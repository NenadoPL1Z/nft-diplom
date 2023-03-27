import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IGlobalReducerState } from "@/store/reducers/globalSlice/types";

const initialState: IGlobalReducerState = {
  isMoralis: false,
  isInitNFT: false,
};
export const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    changeIsInitNFT(state, action: PayloadAction<boolean>) {
      state.isInitNFT = action.payload;
    },
    changeMoralis(state) {
      state.isMoralis = true;
    },
  },
});

export const { changeMoralis, changeIsInitNFT } = globalSlice.actions;
