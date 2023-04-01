import { useRouter } from "next/router";
import { PagesNamespace } from "@/types/enum";

export const useNFTEmpty = () => {
  const { push } = useRouter();

  const handleClick = () => {
    push(PagesNamespace.NFT);
  };

  return {
    handleClick,
  };
};
