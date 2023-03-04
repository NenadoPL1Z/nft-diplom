import React from "react";
import { Avatar } from "@mui/material";
import Link from "next/link";
import { PagesNamespace } from "@/types/types";

const HeaderAccount = () => {
  return (
    <Link href={PagesNamespace.ACCOUNT}>
      <Avatar />
    </Link>
  );
};

export default React.memo(HeaderAccount);
