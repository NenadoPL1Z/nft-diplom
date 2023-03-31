import React from "react";
import { INftModel } from "@/lib/models/INftModel";
import { v4 as uuidv4 } from "uuid";
import { useNFTAttributesStyles } from "@/components/NFT/NFTItem/NftAttributes/NFTAttributes.styles";

type NftAttributesProps = Pick<
  INftModel,
  "normalized_metadata"
>["normalized_metadata"];
const NftAttributes = (props: NftAttributesProps) => {
  if (!props?.attributes) return null;

  return (
    <ContainerSC>
      <TitleSC>Атрибуты токена: </TitleSC>
      <ListSC>
        {props.attributes.map((attributeItem) =>
          attributeItem.value ? (
            <LiSC key={uuidv4()}>
              {JSON.stringify(attributeItem?.value)};&nbsp;
            </LiSC>
          ) : null,
        )}
      </ListSC>
    </ContainerSC>
  );
};

const { ContainerSC, ListSC, TitleSC, LiSC } = useNFTAttributesStyles();

export default React.memo(NftAttributes);
