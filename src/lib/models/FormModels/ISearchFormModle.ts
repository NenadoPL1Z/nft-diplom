import { EvmChainUnion } from "@/store/reducers/nftSlice/types";

export type ISearchFormModle = {
  search: string;
  chain: EvmChainUnion;
};
