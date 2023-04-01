import { EvmChainUnion } from "@/store/reducers/nftSlice/types";
import { BreadcrumbsUIProps } from "@/UI/BreadcrumbsUI/type";

export type NFTProps = {
  id: string;
  search: string;
  chain: EvmChainUnion;
  pathname: string;
  isDisableSelect?: boolean;
};

export type MainNFTProps = NFTProps & {
  isLoading: boolean;
  breadcrumbsData?: Pick<BreadcrumbsUIProps, "data">["data"];
};

export type QueryNFTType = Pick<NFTProps, "chain" | "search" | "id">;
