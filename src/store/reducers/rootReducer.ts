import { userSlice } from "@/store/reducers/userSlice/userSlice";
import { nftSlice } from "@/store/reducers/nftSlice/nftSlice";
import { globalSlice } from "@/store/reducers/globalSlice/globalSlice";

export enum RootReducerNamespace {
  USER = "userSlice",
  NFT = "nftSlice",
  GLOBAL = "globalSlice",
}

export const rootReducer = {
  [RootReducerNamespace.USER]: userSlice.reducer,
  [RootReducerNamespace.NFT]: nftSlice.reducer,
  [RootReducerNamespace.GLOBAL]: globalSlice.reducer,
};
