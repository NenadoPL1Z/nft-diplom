import { EvmChainUnion } from "@/store/reducers/nftSlice/types";

export type ISearchFormModel = {
  search: string;
  nftId: string;
  chain: EvmChainUnion;
};
