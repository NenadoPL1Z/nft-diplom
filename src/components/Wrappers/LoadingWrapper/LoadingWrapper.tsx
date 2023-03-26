import React from "react";
import { CircularProgress, styled } from "@mui/material";
import { IChildren } from "@/types/types";

type LoadingWrapperProps = {
  isLoading: boolean;
} & IChildren;
const LoadingWrapper = ({ isLoading, children }: LoadingWrapperProps) => {
  return (
    <ContainerSC>
      {isLoading && (
        <CircularProgress
          size={50}
          color="secondary"
        />
      )}
      {!isLoading && children}
    </ContainerSC>
  );
};

const ContainerSC = styled("section")`
  flex-grow: 1;
  display: flex;
  justify-content: center;
  padding: 20px 0;
`;

export default React.memo(LoadingWrapper);
