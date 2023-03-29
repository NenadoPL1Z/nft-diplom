import React from "react";
import ButtonUI from "@/UI/ButtonUI/ButtonUI";
import { styled } from "@mui/material";
import { useAppDispatch } from "@/hooks/useStore";
import { fetchGetContractNFTs } from "@/store/reducers/nftSlice/asyncThunks/fetchGetContractNFTs/fetchGetContractNFTs";
import { useRouter } from "next/router";
import { getQuery } from "@/lib/services/services";
import { ISearchFormModel } from "@/lib/models/FormModels/ISearchFormModel";

const NftMore = () => {
  const { asPath } = useRouter();
  const dispatch = useAppDispatch();

  const onPress = () => {
    const { search, chain } = getQuery(asPath);
    dispatch(
      fetchGetContractNFTs({
        search,
        chain,
      } as ISearchFormModel),
    );
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
