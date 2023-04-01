import { useGetNFT } from "@/hooks/store/useGetNFT";
import { useAppSelector } from "@/hooks/store/useStore";
import { changeNftLoading } from "@/store/reducers/nftSlice/nftSlice";
import { NFTProps } from "@/components/NFT/types";

export const useNFTError = (props: NFTProps) => {
  const { dispatch, handleFetchData } = useGetNFT();
  const hasError = useAppSelector((state) => state.nftSlice.hasError);

  const handleClick = () => {
    dispatch(changeNftLoading());

    setTimeout(() => {
      handleFetchData(props);
    }, 1000);
  };

  return {
    hasError,
    handleClick,
  };
};
