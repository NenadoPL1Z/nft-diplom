import React, { FC } from "react";
import { styled } from "@mui/material";
import { AccountAsideItemModel } from "@/lib/models/AccountAsideItem";
import { COLORS, PRIMARY_MAIN_COLOR } from "../../../../../theme/colors";
import Link from "next/link";
import { useAsideItem } from "@/components/Wrappers/AccountWrapper/AccountAside/AsideItem/useAsideItem";

const AsideItem = ({ title, url, Icon }: AccountAsideItemModel) => {
  const { isActive } = useAsideItem(url);

  return (
    <ContainerSC isActive={isActive}>
      <LinkSC href={url}>
        <IconContainerSC>
          <Icon />
        </IconContainerSC>
        {title}
      </LinkSC>
    </ContainerSC>
  );
};

const ContainerSC = styled("li")<{ isActive: boolean }>`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: 0.2s all linear;
  background-color: ${({ isActive }) => (isActive ? PRIMARY_MAIN_COLOR : "")};
  &:hover {
    background-color: ${({ isActive }) => (isActive ? "" : COLORS.BACKDOOR)};
  }
`;

const LinkSC = styled(Link)`
  display: flex;
  align-items: center;
  font-size: 16px;
  font-weight: 400;
  padding: 10px;
  cursor: pointer;
`;

const IconContainerSC = styled("div")`
  margin-right: 10px;
  display: flex;
  align-items: center;
`;

export default React.memo(AsideItem);
