import { INftModel } from "@/lib/models/INftModel";
import { EvmChain } from "@moralisweb3/common-evm-utils";

export type CursorType = string | undefined;
export const nftSliceName = "nftSlice";

export type EvmChainUnion = keyof typeof EvmChain;

export interface INftReducerState {
  page: number;
  page_size: number;
  search: string;
  result: INftModel[];
  isLoading: boolean;
  hasError: string;
  address: string;

  chain: EvmChainUnion;
  cursor: CursorType;
}
