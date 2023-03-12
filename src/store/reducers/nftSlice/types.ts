import { INftModel } from "@/lib/models/INftModel";

export const nftSliceName = "nftSlice";

export interface INftReducerState {
  page: number;
  page_size: 100;
  search: string;
  sort: string;
  result: INftModel[];
  isLoading: boolean;
  hasError: string;
}
