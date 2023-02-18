import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootReducerNamespace } from "@/store/reducers/rootReducer";
import { AuthType, IUserModel } from "@/lib/models/IUserModel";
import { IUserReducerState } from "@/store/reducers/userSlice/types";

const initialState: IUserReducerState = {
  isAuth: null,
  userData: {
    id: 0,
  },
};

export const userSlice = createSlice({
  name: RootReducerNamespace.USER,
  initialState,
  reducers: {
    changeUserAuth(state, action: PayloadAction<AuthType>) {
      state.isAuth = action.payload;
    },
  },
});

export const { changeUserAuth } = userSlice.actions;
