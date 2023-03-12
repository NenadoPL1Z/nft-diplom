import React from "react";
import { IChildren } from "@/types/types";
import { useAuthWrapper } from "@/components/AuthWrapper/useAuthWrapper";
import { styled } from "@mui/material";
import { COLORS } from "../../theme/colors";

interface IAuthWrapperProps extends IChildren {
  title: string;
}

const AuthWrapper = ({ title, children }: IAuthWrapperProps) => {
  useAuthWrapper();

  return (
    <CustomPageContainerSC>
      <ContainerSC>
        <TitleSC>{title}</TitleSC>
        {children}
      </ContainerSC>
    </CustomPageContainerSC>
  );
};

const CustomPageContainerSC = styled("section")`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const ContainerSC = styled("div")`
  width: 100%;
  max-width: 500px;
  padding: 10px 20px;
  border-radius: 10px;
  margin: 10px auto;
  border: 1px solid ${COLORS.LIGHT};
  background-color: ${COLORS.SECONDARY};
`;

const TitleSC = styled("h1")`
  margin-top: 0;
  margin-bottom: 20px;
`;

export default AuthWrapper;
