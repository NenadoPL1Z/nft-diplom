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
  margin-right: 20px;
  min-width: 250px;
`;

const UlSC = styled("ul")`
  background-color: ${COLORS.SECONDARY};
  border-radius: 10px;
  overflow: hidden;
`;

export default React.memo(AccountAside);
