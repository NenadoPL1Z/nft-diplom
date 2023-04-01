import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectProps,
  styled,
} from "@mui/material";
import { COLORS } from "../../../../theme/colors";
import { exchangeData } from "@/lib/mock/exchangeData";

const NFTExchange = (props: SelectProps) => {
  return (
    <FormControl sx={{ minWidth: 80 }}>
      <SelectSC
        {...props}
        autoWidth>
        {exchangeData.map((exchangeItem) => (
          <MenuItem
            key={exchangeItem}
            value={exchangeItem}>
            {exchangeItem}
          </MenuItem>
        ))}
      </SelectSC>
    </FormControl>
  );
};

const SelectSC = styled(Select)`
  & > .MuiSelect-select {
    color: ${COLORS.LIGHT};
    -webkit-text-fill-color: ${COLORS.LIGHT} !important;
  }

  & > .MuiOutlinedInput-notchedOutline {
    border-color: ${COLORS.LIGHT} !important;
  }
  & > .MuiSvgIcon-root {
    color: ${COLORS.LIGHT};
  }
  & > svg.Mui-disabled {
    display: none;
  }
`;

export default React.memo(NFTExchange);
