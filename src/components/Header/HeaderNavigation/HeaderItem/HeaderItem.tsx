import React from "react";
import { Button, styled } from "@mui/material";
import { IHeaderModel } from "@/lib/models/IHeaderModel";
import { useRouter } from "next/router";
import Link from "next/link";

const HeaderItem = ({ title, href }: Omit<IHeaderModel, "id">) => {
  const { pathname } = useRouter();

  return (
    <LiSC>
      <Link href={href}>
        <Button variant={pathname === href ? "contained" : "outlined"}>
          {title}
        </Button>
      </Link>
    </LiSC>
  );
};

const LiSC = styled("li")`
  margin-right: 10px;
`;

export default React.memo(HeaderItem);
