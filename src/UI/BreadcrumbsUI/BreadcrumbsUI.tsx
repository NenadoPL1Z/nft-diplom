import React from "react";
import { css, styled } from "@mui/material";
import { PRIMARY_MAIN_COLOR } from "../../theme/colors";
import { BreadcrumbsUIProps } from "@/UI/BreadcrumbsUI/type";
import Link from "next/link";

const BreadcrumbsUI = ({ data }: BreadcrumbsUIProps) => {
  return (
    <ContainerSC>
      <ul>
        {data.map((breadcrumbsItem, index) => (
          <BreadcrumbsItem
            isLast={index === data.length - 1}
            key={breadcrumbsItem.href}
            href={breadcrumbsItem.href}>
            {breadcrumbsItem.title}
          </BreadcrumbsItem>
        ))}
      </ul>
    </ContainerSC>
  );
};

const ContainerSC = styled("nav")`
  margin-top: 10px;
`;

const ItemAfter = css`
  &:after {
    content: " / ";
  }
`;

const BreadcrumbsItem = styled(Link)<{ isLast: boolean }>`
  color: ${PRIMARY_MAIN_COLOR};
  cursor: pointer;
  position: relative;
  ${({ isLast }) => !isLast && ItemAfter}
  &:hover {
    text-decoration: underline;
  }
`;

export default React.memo(BreadcrumbsUI);
