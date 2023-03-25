import React from "react";
import {
  Button,
  ButtonProps,
  Dialog,
  DialogProps,
  styled,
  Typography,
} from "@mui/material";

interface IDialogUIProps extends DialogProps {
  type?: "text" | "children";
  handleClose: () => void;
  buttonProps?: ButtonProps;
}
const DialogUI = ({
  type = "text",
  handleClose,
  buttonProps = {},
  ...dialogProps
}: IDialogUIProps) => {
  return (
    <Dialog
      {...dialogProps}
      onClose={handleClose}>
      <WrapperSC>
        {type === "text" ? (
          <CustomTypography>{dialogProps.children}</CustomTypography>
        ) : (
          dialogProps.children
        )}
      </WrapperSC>
      <Button
        {...buttonProps}
        onClick={handleClose}>
        Хорошо
      </Button>
    </Dialog>
  );
};

const WrapperSC = styled("div")`
  flex-grow: 1;
  display: flex;
  align-items: center;
  justify-content: center;
`;

const CustomTypography = styled(Typography)`
  text-align: center;
`;

export default React.memo(DialogUI);
