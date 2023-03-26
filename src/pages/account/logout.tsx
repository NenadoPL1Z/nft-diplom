import React from "react";
import AccountWrapper from "@/components/Wrappers/AccountWrapper/AccountWrapper";
import { styled } from "@mui/material";
import ButtonUI from "@/UI/ButtonUI/ButtonUI";
import { PagesNamespace } from "@/types/enum";
import Link from "next/link";
import { useLogout } from "@/hooks/pages/useLogout";

const Logout = () => {
  const { isLoading, handleLogout } = useLogout();

  return (
    <AccountWrapper
      title="Вы действительно хотите выйти из аккаунта?"
      desc="Если вы собираетесь выйти из акканута, то в любой момент можете авторизоваться заново.">
      <ContainerSC>
        <ButtonUI
          variant="outlined"
          isLoading={isLoading}
          onClick={handleLogout}
          fullWidth>
          Выйти
        </ButtonUI>
        <LinkSC href={PagesNamespace.NFT}>
          <ButtonUI
            variant="outlined"
            fullWidth>
            Вернусь на маркет
          </ButtonUI>
        </LinkSC>
      </ContainerSC>
    </AccountWrapper>
  );
};

const ContainerSC = styled("div")`
  display: flex;
`;

const LinkSC = styled(Link)`
  display: block;
  width: 100%;
  margin-left: 20px;
`;

export default React.memo(Logout);
