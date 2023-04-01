import { css, styled } from "@mui/material";
import Link from "next/link";
import { PRIMARY_MAIN_COLOR } from "../../theme/colors";

const ContainerSC = styled("nav")`
  margin-bottom: 10px;
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
  font-size: 18px;
  font-weight: 500;
  ${({ isLast }) => !isLast && ItemAfter}
  &:hover {
    text-decoration: underline;
  }
`;

export const useBreadcrumbsUIStyles = () => ({
  ContainerSC,
  BreadcrumbsItem,
});
