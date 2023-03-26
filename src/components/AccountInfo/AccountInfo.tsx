import React from "react";
import AccountInfoTab from "@/components/AccountInfo/AccountInfoTab/AccountInfoTab";
import { useAppSelector } from "@/hooks/useStore";
import { styled } from "@mui/material";
import { getRusData } from "@/lib/services/services";

const AccountInfo = () => {
  const userData = useAppSelector((state) => state.userSlice.userData);

  return (
    <ContainerSC>
      <AccountInfoTab
        title="Почта"
        desc={userData?.email || ""}
      />
      <AccountInfoTab
        title="Дата оследнего входа"
        desc={getRusData(userData?.lastLoginAt || "")}
      />
      <AccountInfoTab
        title="Дата создания учетной записи"
        desc={getRusData(userData?.creationTime || "")}
      />
    </ContainerSC>
  );
};

const ContainerSC = styled("ul")``;

export default React.memo(AccountInfo);
