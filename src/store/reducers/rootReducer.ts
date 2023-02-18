import { userSlice } from "@/store/reducers/userSlice/userSlice";

export enum RootReducerNamespace {
  USER = "userSlice",
}

export const rootReducer = {
  [RootReducerNamespace.USER]: userSlice.reducer,
};
