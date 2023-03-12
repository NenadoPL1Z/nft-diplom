import { userSlice } from "@/store/reducers/userSlice/userSlice";
import { nftSlice } from "@/store/reducers/nftSlice/nftSlice";

export enum RootReducerNamespace {
  USER = "userSlice",
  NFT = "nftSlice",
}

export const rootReducer = {
  [RootReducerNamespace.USER]: userSlice.reducer,
  [RootReducerNamespace.NFT]: nftSlice.reducer,
};
