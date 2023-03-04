import React from "react";
import { headersData } from "@/lib/constants/header";
import { styled } from "@mui/material";
import HeaderItem from "@/components/Header/HeaderNavigation/HeaderItem/HeaderItem";

const HeaderNavigation = () => {
  return (
    <NavSC>
      <UlSC>
        {headersData.map((headerItem) => (
          <HeaderItem
            key={headerItem.id}
            {...headerItem}
          />
        ))}
      </UlSC>
    </NavSC>
  );
};

const NavSC = styled("nav")``;

const UlSC = styled("ul")`
  display: flex;
  align-items: center;
  & > *:last-child {
    margin-right: 0;
  }
`;

export default React.memo(HeaderNavigation);
