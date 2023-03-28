import React from "react";
import { Button, styled } from "@mui/material";
import { NFTTitleSC } from "@/components/NFT/NFTList/styles";
import { useRouter } from "next/router";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { fetchGetContractNFTs } from "@/store/reducers/nftSlice/asyncThunks/fetchGetContractNFTs/fetchGetContractNFTs";
import { ISearchFormModle } from "@/lib/models/FormModels/ISearchFormModle";
import { changeNftLoading } from "@/store/reducers/nftSlice/nftSlice";
import { getQuery } from "@/lib/services/services";
import { COLORS } from "../../../../theme/colors";

const NFTError = () => {
  const { asPath } = useRouter();
  const dispatch = useAppDispatch();
  const hasError = useAppSelector((state) => state.nftSlice.hasError);

  const handleClick = () => {
    dispatch(changeNftLoading());
    const { search, chain } = getQuery(asPath);

    setTimeout(() => {
      dispatch(fetchGetContractNFTs({ search, chain } as ISearchFormModle));
    }, 1000);
  };

  return (
    <ContainerSC>
      <TitleSC>Что-то пошло не так</TitleSC>
      <ParagraphSC>{hasError}</ParagraphSC>
      <Button
        onClick={handleClick}
        variant="contained"
        color="error">
        попробовать ещё раз
      </Button>
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  flex-grow: 1;
`;

const TitleSC = styled(NFTTitleSC)`
  margin-bottom: 5px;
`;

const ParagraphSC = styled("p")`
  color: ${COLORS.GRAY};
  margin-bottom: 15px;
`;

export default React.memo(NFTError);
