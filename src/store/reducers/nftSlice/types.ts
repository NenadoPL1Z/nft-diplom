import { INftModel } from "@/lib/models/INftModel";

export type CursorType = string | undefined;
export const nftSliceName = "nftSlice";

export interface INftReducerState {
  page: number;
  page_size: number;
  search: string;
  result: INftModel[];
  isLoading: boolean;
  hasError: string;
  cursor: CursorType;
}
