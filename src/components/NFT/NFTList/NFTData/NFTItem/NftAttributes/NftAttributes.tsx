import React from "react";
import { INftModel } from "@/lib/models/INftModel";
import { styled } from "@mui/material";
import { v4 as uuidv4 } from "uuid";
import { COLORS, PRIMARY_MAIN_COLOR } from "../../../../../../theme/colors";

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

const ContainerSC = styled("div")`
  margin-bottom: 10px;
`;

const ListSC = styled("ul")`
  display: flex;
  flex-wrap: wrap;
`;

const TitleSC = styled("h5")`
  font-size: 14px;
  font-weight: 500;
  color: ${COLORS.GRAY};
  margin-bottom: 2px;
`;

const LiSC = styled("li")`
  font-size: 14px;
  color: ${PRIMARY_MAIN_COLOR};
`;

export default React.memo(NftAttributes);
