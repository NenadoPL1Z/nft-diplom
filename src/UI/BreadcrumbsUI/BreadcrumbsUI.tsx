import React from "react";
import { Breadcrumbs, styled } from "@mui/material";
import { PRIMARY_MAIN_COLOR } from "../../theme/colors";
import { BreadcrumbsUIProps } from "@/UI/BreadcrumbsUI/type";
import Link from "next/link";

const BreadcrumbsUI = ({ data }: BreadcrumbsUIProps) => {
  return (
    <ContainerSC>
      <Breadcrumbs aria-label="breadcrumb">
        {data.map((breadcrumbsItem) => (
          <BreadcrumbsItem
            key={breadcrumbsItem.href}
            href={breadcrumbsItem.href}>
            {breadcrumbsItem.title}
          </BreadcrumbsItem>
        ))}
      </Breadcrumbs>
    </ContainerSC>
  );
};

const ContainerSC = styled("nav")`
  margin-top: 10px;
`;

const BreadcrumbsItem = styled(Link)`
  color: ${PRIMARY_MAIN_COLOR};
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

export default React.memo(BreadcrumbsUI);
