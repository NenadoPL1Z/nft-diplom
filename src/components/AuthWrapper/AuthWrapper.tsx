import React from "react";
import { IChildren } from "@/types/types";
import { useAuthWrapper } from "@/components/AuthWrapper/useAuthWrapper";
import { styled } from "@mui/material";
import PageContainerSC from "@/UI/SC/PageContainerSC";
import { LIGHT_COLOR } from "../../theme/colors";

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

const CustomPageContainerSC = styled(PageContainerSC)`
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
  border: 1px solid ${LIGHT_COLOR};
  margin: 10px auto;
`;

const TitleSC = styled("h1")`
  margin-top: 0;
  margin-bottom: 20px;
`;

export default AuthWrapper;
