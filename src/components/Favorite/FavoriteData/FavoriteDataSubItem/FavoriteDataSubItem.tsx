import React from "react";
import { IFavoritesItemModel } from "@/lib/models/IFavoritesItemModel";
import NFTItemImage from "@/components/NFT/NFTItem/NFTItemImage/NFTItemImage";
import { PagesNamespace } from "@/types/enum";
import { useFavoriteDataSubItemStyles } from "@/components/Favorite/FavoriteData/FavoriteDataSubItem/FavoriteDataSubItem.styles";

const FavoriteDataSubItem = (props: IFavoritesItemModel) => {
  const { tokenId, chain, address, tokenImage } = props;

  return (
    <LinkSC
      href={`/${PagesNamespace.NFT}/${chain}/${address}/${tokenId}`}
      target="_blank">
      <ImageContainerSC>
        <NFTItemImage metadata={{ image: tokenImage, name: tokenId }} />
      </ImageContainerSC>
      <TextSC>
        <TextItemSC>
          Token id: <span>{tokenId}</span>
        </TextItemSC>
        <TextItemSC>
          CHAIN: <span>{chain}</span>
        </TextItemSC>
        <TextItemSC>
          ADDRESS: <span>{address}</span>
        </TextItemSC>
      </TextSC>
    </LinkSC>
  );
};

const { LinkSC, ImageContainerSC, TextSC, TextItemSC } =
  useFavoriteDataSubItemStyles();

export default React.memo(FavoriteDataSubItem);
