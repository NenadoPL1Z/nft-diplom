import React from "react";
import { useAccount } from "@/hooks/pages/useAccount";
import { styled } from "@mui/material";
import { COLORS } from "../../theme/colors";
import ButtonUI from "@/UI/ButtonUI/ButtonUI";
import AccountWrapper from "@/components/Wrappers/AccountWrapper/AccountWrapper";

const Account = () => {
  useAccount();

  return (
    <AccountWrapper title="Информация об аккаунте">
      <ButtonUI>Выйти из акканута</ButtonUI>
    </AccountWrapper>
  );
};

const HeaderSC = styled("h1")`
  margin: 0 0;
`;

export default Account;
