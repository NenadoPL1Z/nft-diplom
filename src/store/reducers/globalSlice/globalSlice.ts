import { createSlice } from "@reduxjs/toolkit";
import { IGlobalReducerState } from "@/store/reducers/globalSlice/types";

const initialState: IGlobalReducerState = {
  isMoralis: false,
};
export const globalSlice = createSlice({
  name: "globalSlice",
  initialState,
  reducers: {
    changeMoralis(state) {
      state.isMoralis = true;
    },
  },
});

export const { changeMoralis } = globalSlice.actions;
