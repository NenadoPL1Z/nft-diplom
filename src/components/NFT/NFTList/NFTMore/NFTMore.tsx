import React from "react";
import ButtonUI from "@/UI/ButtonUI/ButtonUI";
import { styled } from "@mui/material";
import { useAppDispatch } from "@/hooks/useStore";
import { fetchGetContractNFTs } from "@/store/reducers/nftSlice/asyncThunks/fetchGetContractNFTs/fetchGetContractNFTs";
import { changeNftLoading } from "@/store/reducers/nftSlice/nftSlice";

const NftMore = () => {
  const dispatch = useAppDispatch();

  const onPress = () => {
    dispatch(changeNftLoading());
    setTimeout(() => {
      dispatch(fetchGetContractNFTs());
    }, 3000);
  };

  return (
    <ContainerSC>
      <ButtonUI onClick={onPress}>Показать еще</ButtonUI>
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export default React.memo(NftMore);
