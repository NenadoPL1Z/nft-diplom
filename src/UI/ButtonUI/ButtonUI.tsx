import React from "react";
import { Button, ButtonProps, CircularProgress, styled } from "@mui/material";

interface IButtonUIProps extends ButtonProps {
  isLoading?: boolean;
}

const ButtonUI = ({ isLoading, ...buttonProps }: IButtonUIProps) => {
  return (
    <Button {...buttonProps}>
      {isLoading ? (
        <CustomCircularProgress
          size={20.5}
          color="secondary"
        />
      ) : (
        buttonProps.children
      )}
    </Button>
  );
};

const CustomCircularProgress = styled(CircularProgress)`
  margin: 2px 0;
`;

export default React.memo(ButtonUI);
