import React from "react";
import ButtonUI from "@/UI/ButtonUI/ButtonUI";
import { styled } from "@mui/material";
import { useRouter } from "next/router";
import { getQuery } from "@/lib/services/services";
import { ISearchFormModel } from "@/lib/models/FormModels/ISearchFormModel";
import { useGetNFT } from "@/hooks/store/useGetNFT";

const NftMore = () => {
  const { asPath } = useRouter();
  const { handleFetchData } = useGetNFT();

  const onPress = () => {
    const data = getQuery(asPath) as ISearchFormModel;
    handleFetchData(data);
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
