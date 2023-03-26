import React from "react";
import AccountWrapper from "@/components/Wrappers/AccountWrapper/AccountWrapper";
import AccountInfo from "@/components/AccountInfo/AccountInfo";
import { usePrivatePage } from "@/hooks/usePrivatePage";

const Account = () => {
  usePrivatePage();

  return (
    <AccountWrapper title="Информация об аккаунте">
      <AccountInfo />
    </AccountWrapper>
  );
};

export default Account;
