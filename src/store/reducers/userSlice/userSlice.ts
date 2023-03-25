import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { IUserReducerState } from "@/store/reducers/userSlice/types";
import { User } from "@firebase/auth";

const initialState: IUserReducerState = {
  isAuth: false,
  isLoading: true,
  userData: null,
};

export const userSlice = createSlice({
  name: "userSlice",
  initialState,
  reducers: {
    changeUserLoading(state, action: PayloadAction<boolean>) {
      state.isLoading = action.payload;
    },
    changeUserAuth(
      state,
      action: PayloadAction<Pick<IUserReducerState, "isAuth" | "isLoading">>,
    ) {
      state.isAuth = action.payload.isAuth;
      state.isLoading = action.payload.isLoading;
    },
    changeUser(state, action: PayloadAction<User>) {
      state.userData = action.payload;
      state.isLoading = false;
      state.isAuth = true;
    },
  },
});

export const { changeUserAuth, changeUserLoading, changeUser } =
  userSlice.actions;
