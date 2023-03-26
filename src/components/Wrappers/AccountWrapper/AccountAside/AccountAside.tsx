import React from "react";
import { styled } from "@mui/material";
import { COLORS } from "../../../../theme/colors";
import AsideItem from "@/components/Wrappers/AccountWrapper/AccountAside/AsideItem/AsideItem";
import { accountAsideData } from "@/lib/constants/accountAside";

const AccountAside = () => {
  return (
    <ContainerSC>
      <UlSC>
        {accountAsideData.map((asideItem) => (
          <AsideItem
            key={asideItem.url}
            title={asideItem.title}
            url={asideItem.url}
            Icon={asideItem.Icon}
          />
        ))}
      </UlSC>
    </ContainerSC>
  );
};

const ContainerSC = styled("aside")`
  background-color: ${COLORS.SECONDARY};
  margin-right: 20px;
  border-radius: 10px;
  min-width: 250px;
  overflow: hidden;
`;

const UlSC = styled("ul")``;

export default React.memo(AccountAside);
