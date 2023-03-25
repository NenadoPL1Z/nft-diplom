import React, { useMemo, useState } from "react";
import TextFieldUI from "@/UI/TextFieldUI/TextFieldUI";
import { IconButton, InputAdornment, TextFieldProps } from "@mui/material";
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

const TFPasswordUI = (props: TextFieldProps) => {
  const [type, setType] = useState<"password" | "text">("password");
  const isVisiblePassword = useMemo(() => type === "text", [type]);

  const handleChangeType = () => {
    setType(type === "password" ? "text" : "password");
  };

  return (
    <TextFieldUI
      {...props}
      type={type}
      InputProps={{
        endAdornment: (
          <InputAdornment position="end">
            <IconButton
              color="secondary"
              onClick={handleChangeType}>
              {isVisiblePassword ? (
                <VisibilityIcon color="secondary" />
              ) : (
                <VisibilityOffIcon color="secondary" />
              )}
            </IconButton>
          </InputAdornment>
        ),
      }}
    />
  );
};

export default TFPasswordUI;
