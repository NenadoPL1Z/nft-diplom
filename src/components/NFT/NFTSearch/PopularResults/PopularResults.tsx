import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import { popularResults } from "@/lib/mock/popularResults";
import PopularResultsItem from "@/components/NFT/NFTSearch/PopularResults/PopularResultsItem/PopularResultsItem";
import { styled } from "@mui/material";
import { COLORS } from "../../../../theme/colors";
import { IPopularResultsProps } from "@/components/NFT/NFTSearch/PopularResults/types";

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

const ContainerSC = styled("div")``;

const TitleSC = styled("h4")`
  font-size: 14px;
  color: ${COLORS.GRAY};
  padding-left: 5px;
  margin-bottom: 10px;
`;

const WrapperSC = styled("ul")`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin-bottom: 30px;
  @media (max-width: 768px) {
    flex-wrap: nowrap;
    justify-content: flex-start;
    overflow-x: scroll;
    &::-webkit-scrollbar {
      height: 10px;
    }

    &::-webkit-scrollbar-track {
      background: ${COLORS.SECONDARY};
    }

    &::-webkit-scrollbar-thumb {
      background-color: ${COLORS.LIGHT};
      border-radius: 20px;
    }
  }
  & > *:last-child > * {
    margin-right: 0;
  }
`;

export default React.memo(PopularResults);
