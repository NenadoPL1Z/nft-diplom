import React from "react";
import { IconButton, InputAdornment, TextFieldProps } from "@mui/material";
import SearchIcon from "@mui/icons-material/Search";
import CloseIcon from "@mui/icons-material/Close";
import TextFieldUI from "@/UI/TextFieldUI/TextFieldUI";

type ITFSearchUIProp = TextFieldProps & {
  onClickRightIcon: () => void;
  isVisibleRightIcon?: boolean;
};

const TFSearchUI = ({
  onClickRightIcon,
  isVisibleRightIcon = false,
  ...props
}: ITFSearchUIProp) => {
  return (
    <TextFieldUI
      type="text"
      placeholder="Поиск"
      {...props}
      InputProps={{
        startAdornment: (
          <InputAdornment position="start">
            <SearchIcon color="secondary" />
          </InputAdornment>
        ),
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
