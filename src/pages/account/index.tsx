import React from "react";
import { useAccount } from "@/hooks/pages/useAccount";
import { styled } from "@mui/material";
import { COLORS } from "../../theme/colors";
import LoadingWrapper from "@/components/Wrappers/LoadingWrapper/LoadingWrapper";

const Account = () => {
  const { isLoading, userData } = useAccount();
  console.log(userData);
  return (
    <LoadingWrapper isLoading={isLoading}>
      <WrapperSC>
        <HeaderSC>Аккаунт</HeaderSC>
      </WrapperSC>
    </LoadingWrapper>
  );
};

const WrapperSC = styled("div")`
  background-color: ${COLORS.SECONDARY};
  width: 100%;
  max-width: 800px;
  height: 80%;
  padding: 20px;
  border-radius: 10px;
`;

const HeaderSC = styled("h1")`
  margin: 0 0;
`;

export default Account;
