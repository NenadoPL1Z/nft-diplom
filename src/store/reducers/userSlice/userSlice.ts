import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { AuthType } from "@/lib/models/IUserModel";
import { IUserReducerState } from "@/store/reducers/userSlice/types";

const initialState: IUserReducerState = {
  isAuth: null,
  isLoading: true,
  userData: {
    id: 0,
  },
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    changeUserLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    changeUserAuth(state, action: PayloadAction<AuthType>) {
      state.isAuth = action.payload;
      state.isLoading = false;
    },
  },
});

export const { changeUserAuth, changeUserLoading } = userSlice.actions;
