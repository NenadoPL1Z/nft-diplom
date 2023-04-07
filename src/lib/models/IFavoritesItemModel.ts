export interface IFavoritesItemModel {
  address: string;
  chain: string;
  tokenId: string;
  tokenImage: string;
}

export type FavoritesItemObjectType = {
  [key: string]: IFavoritesItemModel[];
}[];
