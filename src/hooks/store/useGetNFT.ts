import { useAppDispatch } from "@/hooks/store/useStore";
import { ISearchFormModel } from "@/lib/models/FormModels/ISearchFormModel";
import { fetchGetNFTId } from "@/store/reducers/nftSlice/asyncThunks/fetchGetNFTId/fetchGetNFTId";
import { fetchGetContractNFTs } from "@/store/reducers/nftSlice/asyncThunks/fetchGetContractNFTs/fetchGetContractNFTs";

export const useGetNFT = () => {
  const dispatch = useAppDispatch();

  const handleFetchData = (data: ISearchFormModel) => {
    const { id } = data;

    if (id) {
      dispatch(fetchGetNFTId(data));
    } else {
      dispatch(fetchGetContractNFTs(data));
    }
  };

  return {
    dispatch,
    handleFetchData,
  };
};
