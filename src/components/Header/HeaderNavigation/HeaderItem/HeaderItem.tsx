import React, { useMemo } from "react";
import { Button, styled } from "@mui/material";
import { IHeaderModel } from "@/lib/models/IHeaderModel";
import { useRouter } from "next/router";
import Link from "next/link";
import { HeaderNavigationTypes } from "@/components/Header/HeaderNavigation/types";

type IHeaderItem = Omit<IHeaderModel, "id"> & HeaderNavigationTypes;

const HeaderItem = ({ title, href, onClick }: IHeaderItem) => {
  const { pathname } = useRouter();
  const isActive = useMemo(() => pathname === href, [pathname]);

  const handleClick = () => {
    if (isActive) {
      window.scrollTo({
        top: 0,
        behavior: "smooth",
      });
    }
    if (onClick) onClick();
  };

  return (
    <LiSC>
      <Link href={href}>
        <Button
          fullWidth={true}
          onClick={handleClick}
          variant={isActive ? "contained" : "outlined"}>
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
