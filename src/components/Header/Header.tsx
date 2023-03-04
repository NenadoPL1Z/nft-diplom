import React from "react";
import { styled } from "@mui/material";
import PageContainerSC from "@/UI/SC/PageContainerSC";
import HeaderNavigation from "@/components/Header/HeaderNavigation/HeaderNavigation";
import HeaderAccount from "@/components/Header/HeaderAccount/HeaderAccount";
import Logo from "@/components/Logo/Logo";
import { useHeader } from "@/components/Header/useHeader";
import HeaderDrawer from "@/components/Header/HeaderDrawer/HeaderDrawer";
import { useTablet } from "@/hooks/useMedia";

const Header = () => {
  const { handlePressLogo } = useHeader();
  const isTablet = useTablet();

  return (
    <HeaderSC>
      <PageContainerSC>
        <WrapperSC>
          <HeaderLogoSC onClick={handlePressLogo}>
            <Logo />
          </HeaderLogoSC>
          {!isTablet && (
            <>
              <HeaderNavigation />
              <HeaderAccount />
            </>
          )}
          {isTablet && <HeaderDrawer />}
        </WrapperSC>
      </PageContainerSC>
    </HeaderSC>
  );
};

const HeaderSC = styled("header")`
  position: sticky;
  top: 0;
  padding: 10px 0;
  background-color: rgba(0, 0, 0, 0.3);
  border-bottom: 1px solid lightblue;
`;

const WrapperSC = styled("header")`
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const HeaderLogoSC = styled("div")`
  cursor: pointer;
  width: 40px;
  height: 40px;
`;

export default React.memo(Header);
