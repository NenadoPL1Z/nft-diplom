import { INftModel } from "@/lib/models/INftModel";
import { EvmChain } from "@moralisweb3/common-evm-utils";

export type CursorType = string | undefined;
export const nftSliceName = "nftSlice";

export type EvmChainUnion = keyof typeof EvmChain;

export interface INftReducerState {
  result: INftModel[];
  isLoading: boolean;
  isEnd: boolean;
  hasError: string;

  cursor: CursorType;
}
