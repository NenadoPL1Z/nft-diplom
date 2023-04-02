import React from "react";
import { IconButton, InputAdornment, TextFieldProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextFieldUI from "@/UI/TextFieldUI/TextFieldUI";

type ITFSearchUIProp = TextFieldProps & {
  onClickRightIcon?: () => void;
  isStartIcon?: boolean;
  isVisibleRightIcon?: boolean;
};

const TFSearchUI = ({
  onClickRightIcon,
  isStartIcon = true,
  isVisibleRightIcon = false,
  ...props
}: ITFSearchUIProp) => {
  return (
    <TextFieldUI
      type="text"
      placeholder="Адрес"
      {...props}
      InputProps={{
        startAdornment: isStartIcon ? (
          <InputAdornment position="start">
            <SearchIcon color="secondary" />
          </InputAdornment>
        ) : null,
        endAdornment:
          props.value || isVisibleRightIcon ? (
            <InputAdornment position="end">
              <IconButton
                color="secondary"
                onClick={onClickRightIcon}>
                <CloseIcon color="secondary" />
              </IconButton>
            </InputAdornment>
          ) : null,
        ...props.InputProps,
      }}
    />
  );
};

export default React.memo(TFSearchUI);
