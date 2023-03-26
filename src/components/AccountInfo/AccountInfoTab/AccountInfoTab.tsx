import React from "react";
import { styled } from "@mui/material";
import { COLORS } from "../../../theme/colors";

type AccountInfoTabProps = {
  title: string;
  desc: string;
};

const AccountInfoTab = ({ title, desc }: AccountInfoTabProps) => {
  return (
    <ContainerSC>
      <TitleSC>{title}</TitleSC>
      <DescriptionSC>{desc}</DescriptionSC>
    </ContainerSC>
  );
};

const ContainerSC = styled("li")`
  display: flex;
  align-items: center;
  border: 1px solid ${COLORS.LIGHT};
`;

const TitleSC = styled("h2")`
  font-size: 18px;
  font-weight: 400;
  color: ${COLORS.GRAY};
  margin-right: 10px;
  border-right: 1px solid ${COLORS.LIGHT};
  padding: 10px;
`;

const DescriptionSC = styled("p")`
  padding-right: 10px;
`;

export default React.memo(AccountInfoTab);
