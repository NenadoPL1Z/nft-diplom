import React from "react";
import LoadingWrapper from "@/components/Wrappers/LoadingWrapper/LoadingWrapper";
import AccountAside from "@/components/Wrappers/AccountWrapper/AccountAside/AccountAside";
import { IChildren } from "@/types/types";
import { useAppSelector } from "@/hooks/useStore";
import { styled, Typography } from "@mui/material";
import { COLORS } from "../../../theme/colors";
import { usePrivatePage } from "@/hooks/usePrivatePage";

type AccountWrapperProps = {
  title: string;
  desc?: string;
} & IChildren;

const AccountWrapper = ({ title, desc, children }: AccountWrapperProps) => {
  const isLoading = useAppSelector((state) => state.userSlice.isLoading);
  usePrivatePage();

  return (
    <LoadingWrapper isLoading={isLoading}>
      <ContainerSC>
        <AccountAside />
        <WrapperSC>
          <TitleSC>{title}</TitleSC>
          {desc && <ParagraphSC>{desc}</ParagraphSC>}
          {children}
        </WrapperSC>
      </ContainerSC>
    </LoadingWrapper>
  );
};

const ContainerSC = styled("div")`
  display: flex;
`;

const WrapperSC = styled("div")`
  background-color: ${COLORS.SECONDARY};
  width: 100%;
  max-width: 600px;
  height: 80%;
  padding: 20px;
  border-radius: 10px;
`;

const TitleSC = styled("h1")`
  margin: 0 0 15px 0;
  font-size: 28px;
`;

const ParagraphSC = styled(Typography)`
  color: ${COLORS.GRAY};
  line-height: 18px;
  margin-bottom: 20px;
`;

export default React.memo(AccountWrapper);
