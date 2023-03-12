import React, { useMemo } from "react";
import { Button, styled } from "@mui/material";
import { IHeaderModel } from "@/lib/models/IHeaderModel";
import { useRouter } from "next/router";
import Link from "next/link";
import { HeaderNavigationTypes } from "@/components/Header/types";

type IHeaderItem = Omit<IHeaderModel, "id"> & HeaderNavigationTypes;

const HeaderItem = ({ title, href, onClick }: IHeaderItem) => {
  const { pathname } = useRouter();

  const isActive = useMemo(() => pathname === href, [pathname, href]);
  const Container = useMemo(
    () =>
      isActive
        ? { Component: React.Fragment, props: { href: "" } }
        : { Component: Link, props: { href } },
    [isActive, href],
  );

  const handleClick = () => {
    if (isActive) {
      window.scrollTo({
        behavior: "smooth",
        top: 0,
      });
    }
    if (onClick) onClick();
  };

  return (
    <LiSC>
      <Container.Component {...Container.props}>
        <Button
          fullWidth={true}
          onClick={handleClick}
          variant={isActive ? "contained" : "text"}>
          {title}
        </Button>
      </Container.Component>
    </LiSC>
  );
};

const LiSC = styled("li")`
  margin-right: 10px;
`;

export default React.memo(HeaderItem);
