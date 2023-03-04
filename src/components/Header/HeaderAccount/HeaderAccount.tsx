import React from "react";
import { Avatar, styled } from "@mui/material";
import Link from "next/link";
import { PagesNamespace } from "@/types/enum";

const HeaderAccount = () => {
  return (
    <ContainerSC>
      <Link href={PagesNamespace.ACCOUNT}>
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
