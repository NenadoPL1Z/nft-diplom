import { useGetNFT } from "@/hooks/store/useGetNFT";
import { NFTProps } from "@/components/NFT/types";

export const useNFTMore = (props: NFTProps) => {
  const { handleFetchData } = useGetNFT();

  const onPress = () => {
    handleFetchData(props);
  };

  return {
    onPress,
  };
};
