import React from "react";

import "swiper/css";
import { popularResults } from "@/lib/mock/popularResults";
import PopularResultsItem from "@/components/NFT/NFTSearch/PopularResults/PopularResultsItem/PopularResultsItem";
import { IPopularResultsProps } from "@/components/NFT/NFTSearch/PopularResults/types";
import { usePopularResultsStyles } from "@/components/NFT/NFTSearch/PopularResults/PopularResults.styles";
const PopularResults = (props: IPopularResultsProps) => {
  return (
    <ContainerSC>
      <TitleSC>Популярные запросы</TitleSC>
      <WrapperSC>
        {popularResults.map((popularItem) => (
          <li key={popularItem.title}>
            <PopularResultsItem
              {...props}
              {...popularItem}
            />
          </li>
        ))}
      </WrapperSC>
    </ContainerSC>
  );
};

const { WrapperSC, ContainerSC, TitleSC } = usePopularResultsStyles();

export default React.memo(PopularResults);
