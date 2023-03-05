import React from "react";
import { Avatar, styled } from "@mui/material";
import Link from "next/link";
import { PagesNamespace } from "@/types/enum";
import { useAppSelector } from "@/hooks/useStore";
import { HeaderNavigationTypes } from "@/components/Header/types";

const HeaderAccount = ({ onClick }: HeaderNavigationTypes) => {
  const isAuth = useAppSelector((state) => state.userSlice.isAuth);

  return (
    <ContainerSC>
      <Link
        href={isAuth ? PagesNamespace.ACCOUNT : PagesNamespace.SIGN_IN}
        onClick={onClick}>
        <Avatar />
      </Link>
    </ContainerSC>
  );
};

const ContainerSC = styled("div")`
  @media (max-width: 768px) {
    margin-bottom: 20px;
  }
`;

export default React.memo(HeaderAccount);
