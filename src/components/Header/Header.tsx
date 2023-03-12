import React from "react";
import { styled } from "@mui/material";
import PageContainerSC from "@/UI/SC/PageContainerSC";
import HeaderNavigation from "@/components/Header/HeaderNavigation/HeaderNavigation";
import HeaderAccount from "@/components/Header/HeaderAccount/HeaderAccount";
import Logo from "@/components/Logo/Logo";
import { useHeader } from "@/components/Header/useHeader";
import HeaderDrawer from "@/components/Header/HeaderDrawer/HeaderDrawer";
import { COLORS } from "../../theme/colors";

const Header = () => {
  const { isTablet, handlePressLogo } = useHeader();

  return (
    <HeaderSC>
      <CustomPageContainerSC as="div">
        <HeaderLogoSC onClick={handlePressLogo}>
          <Logo />
        </HeaderLogoSC>
        <HeaderDesktopSC>
          <HeaderNavigation />
        </HeaderDesktopSC>
        <HeaderDesktopSC>
          <HeaderAccount />
        </HeaderDesktopSC>
        {isTablet && <HeaderDrawer />}
      </CustomPageContainerSC>
    </HeaderSC>
  );
};

const HeaderSC = styled("header")`
  position: sticky;
  top: 0;
  z-index: 2;
  padding: 10px 0;
  background-color: ${COLORS.SECONDARY};
  border-bottom: 1px solid ${COLORS.LIGHT};
`;

const CustomPageContainerSC = styled(PageContainerSC)`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogoSC = styled("section")`
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

const HeaderDesktopSC = styled("section")`
  @media (max-width: 768px) {
    display: none;
  }
`;

export default React.memo(Header);
