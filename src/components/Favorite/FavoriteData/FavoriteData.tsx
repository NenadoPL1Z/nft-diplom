import React from "react";
import { IFavoritesItemModel } from "@/lib/models/IFavoritesItemModel";
import { styled } from "@mui/material";
import Link from "next/link";
import { PagesNamespace } from "@/types/enum";
import { PRIMARY_MAIN_COLOR } from "../../../theme/colors";
import FavoriteDataSubItem from "@/components/Favorite/FavoriteData/FavoriteDataSubItem/FavoriteDataSubItem";
import { HandleFilterFavoritesType } from "@/hooks/pages/useFavorite";

interface IFavoriteDataProps {
  title: string;
  data: IFavoritesItemModel[];
}

const FavoriteData = ({ title, data }: IFavoriteDataProps) => {
  if (!data.length) return null;

  return (
    <ContainerSC>
      <TitleSC>
        Коллекция:
        <LinkSC href={`${PagesNamespace.NFT}/${data[0].chain}/${title}`}>
          {title}
        </LinkSC>
      </TitleSC>
      {data.map((dataItem) => (
        <FavoriteDataSubItem
          key={`${title}/${dataItem.tokenId}`}
          {...dataItem}
        />
      ))}
    </ContainerSC>
  );
};

const ContainerSC = styled("div")``;

const TitleSC = styled("h2")`
  font-size: 20px;
  font-weight: 400;
  word-break: break-word;
  margin-bottom: 20px;
`;

const LinkSC = styled(Link)`
  display: block;
  color: ${PRIMARY_MAIN_COLOR};
  text-decoration: underline;
`;

export default React.memo(FavoriteData);
