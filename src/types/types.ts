import { ReactNode } from "react";
import { IFavoritesItemModel } from "@/lib/models/IFavoritesItemModel";

export type ErrorFavoritesUnion = "empty" | "error";

export interface ICallback {
  onClick: () => void;
}

export interface IChildren {
  children: ReactNode;
}

export interface IError<T> {
  error: T;
}

export type MapFavorites = Map<string, IFavoritesItemModel>;
