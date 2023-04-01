import React from "react";
import { BreadcrumbsUIProps } from "@/UI/BreadcrumbsUI/type";
import { useBreadcrumbsUIStyles } from "@/UI/BreadcrumbsUI/BreadcrumbsUI.styles";

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

const { ContainerSC, BreadcrumbsItem } = useBreadcrumbsUIStyles();

export default React.memo(BreadcrumbsUI);
