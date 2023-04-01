import React from "react";
import LoadingWrapper from "@/components/Wrappers/LoadingWrapper/LoadingWrapper";
import AccountAside from "@/components/Wrappers/AccountWrapper/AccountAside/AccountAside";
import { IChildren } from "@/types/types";
import { useAppSelector } from "@/hooks/store/useStore";
import { usePrivatePage } from "@/hooks/usePrivatePage";
import { useAccountWrapper } from "@/components/Wrappers/AccountWrapper/AccountWrapper.styles";

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
          <InnerWrapperSC>
            <TitleSC>{title}</TitleSC>
            {desc && <ParagraphSC>{desc}</ParagraphSC>}
            {children}
          </InnerWrapperSC>
        </WrapperSC>
      </ContainerSC>
    </LoadingWrapper>
  );
};

const { ContainerSC, InnerWrapperSC, WrapperSC, TitleSC, ParagraphSC } =
  useAccountWrapper();

export default React.memo(AccountWrapper);
