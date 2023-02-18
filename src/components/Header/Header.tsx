import React from "react";
import { styled } from "@mui/material";

const Header = () => {
  return <HeaderSC>header</HeaderSC>;
};

const HeaderSC = styled("header")`
  position: sticky;
  top: 0;
`;

export default Header;
