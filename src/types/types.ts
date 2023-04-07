import { ReactNode } from "react";
import { IFavoritesItemModel } from "@/lib/models/IFavoritesItemModel";

export interface ICallback {
  onClick: () => void;
}

export interface IChildren {
  children: ReactNode;
}

export type MapFavorites = Map<string, IFavoritesItemModel>;
