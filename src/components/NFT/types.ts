import { EvmChainUnion } from "@/store/reducers/nftSlice/types";

export type NFTProps = {
  id: string;
  search: string;
  chain: EvmChainUnion;
};
