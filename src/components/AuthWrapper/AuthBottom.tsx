import React from "react";
import AuthParagraphSC from "@/components/AuthWrapper/AuthParagraphSC";
import Link from "next/link";
import { PagesNamespace } from "@/types/enum";
import { Button } from "@mui/material";

interface IAuthBottomProps {
  title: string;
  href: PagesNamespace;
  buttonTitle: string;
}

const AuthBottom = ({ title, href, buttonTitle }: IAuthBottomProps) => {
  return (
    <>
      <AuthParagraphSC>{title}</AuthParagraphSC>
      <Link href={href}>
        <Button
          variant="text"
          fullWidth>
          {buttonTitle}
        </Button>
      </Link>
    </>
  );
};

export default React.memo(AuthBottom);
