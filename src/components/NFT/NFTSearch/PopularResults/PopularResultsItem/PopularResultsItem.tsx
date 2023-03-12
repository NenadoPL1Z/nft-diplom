import React from "react";
import { IPopularResultModel } from "@/lib/models/IPopularResultModel";
import { Button, styled } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import { IPopularResultsProps } from "@/components/NFT/NFTSearch/PopularResults/types";

type IPopularResultsItemProps = IPopularResultModel & IPopularResultsProps;

const PopularResultsItem = ({
  onClick,
  ...resultData
}: IPopularResultsItemProps) => {
  const { title, address } = resultData;

  return (
    <ContainerSC
      variant="outlined"
      onClick={onClick(resultData)}>
      <CustomSearchIcon />
      {title}
    </ContainerSC>
  );
};

const ContainerSC = styled(Button)`
  border-radius: 10px;
  padding: 5px 15px 5px 10px;
  font-size: 12px;
  margin-right: 10px;
  margin-bottom: 10px;
  flex-shrink: 0;
  @media (max-width: 768px) {
    margin: 5px 10px 15px 0;
  }
`;

const CustomSearchIcon = styled(SearchIcon)`
  margin-right: 5px;
`;

export default React.memo(PopularResultsItem);
