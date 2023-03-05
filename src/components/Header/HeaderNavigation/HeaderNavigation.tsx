import React from "react";
import { headersData } from "@/lib/constants/header";
import { styled } from "@mui/material";
import HeaderItem from "@/components/Header/HeaderNavigation/HeaderItem/HeaderItem";
import { HeaderNavigationTypes } from "@/components/Header/types";

const HeaderNavigation = (props: HeaderNavigationTypes) => {
  return (
    <NavSC>
      <UlSC>
        {headersData.map((headerItem) => (
          <HeaderItem
            key={headerItem.id}
            {...props}
            {...headerItem}
          />
        ))}
      </UlSC>
    </NavSC>
  );
};

const NavSC = styled("nav")`
  @media (max-width: 768px) {
    width: 100%;
  }
`;

const UlSC = styled("ul")`
  display: flex;
  align-items: center;
  & > *:last-child {
    margin-right: 0;
  }

  @media (max-width: 768px) {
    flex-direction: column;
    & > *:nth-of-type(1n) {
      width: 100%;
      margin-right: 0;
      margin-bottom: 15px;
    }
    & > *:last-child {
      margin-bottom: 0px;
    }
  }
`;

export default React.memo(HeaderNavigation);
