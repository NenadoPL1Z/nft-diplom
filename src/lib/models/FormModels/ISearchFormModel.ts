import { EvmChainUnion } from "@/store/reducers/nftSlice/types";

export type ISearchFormModel = {
  search: string;
  id: string;
  chain: EvmChainUnion;
};
