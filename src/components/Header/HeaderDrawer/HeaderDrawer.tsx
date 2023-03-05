import React, { useState } from "react";
import { Button, Drawer, styled } from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import HeaderAccount from "@/components/Header/HeaderAccount/HeaderAccount";
import HeaderNavigation from "@/components/Header/HeaderNavigation/HeaderNavigation";

const HeaderDrawer = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const handleToggleDrawer = (state: boolean) => {
    return () => {
      setIsOpen(state);
    };
  };

  return (
    <>
      <Button
        onClick={handleToggleDrawer(true)}
        variant="text">
        <MenuIcon style={{ width: "40px", height: "40px" }} />
      </Button>
      <Drawer
        anchor="left"
        open={isOpen}
        onClose={handleToggleDrawer(false)}>
        <WrapperSC>
          <HeaderAccount onClick={handleToggleDrawer(false)} />
          <HeaderNavigation onClick={handleToggleDrawer(false)} />
        </WrapperSC>
      </Drawer>
    </>
  );
};

const WrapperSC = styled("div")`
  width: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export default React.memo(HeaderDrawer);
