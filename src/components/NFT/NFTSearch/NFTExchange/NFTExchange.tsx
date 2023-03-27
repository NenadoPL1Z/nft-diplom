import React from "react";
import {
  FormControl,
  MenuItem,
  Select,
  SelectChangeEvent,
  styled,
} from "@mui/material";
import { useAppDispatch, useAppSelector } from "@/hooks/useStore";
import { COLORS } from "../../../../theme/colors";
import { EvmChainUnion } from "@/store/reducers/nftSlice/types";
import { changeChain } from "@/store/reducers/nftSlice/nftSlice";
import { EvmChain } from "@moralisweb3/common-evm-utils";
import { exchangeData } from "@/lib/mock/exchangeData";

const NFTExchange = () => {
  const chain = useAppSelector((state) => state.nftSlice.chain);
  const dispatch = useAppDispatch();

  const handleChange = (e: SelectChangeEvent<unknown>) => {
    dispatch(changeChain(e.target.value as EvmChainUnion));
  };

  console.log(EvmChain.ETHEREUM);

  return (
    <FormControl sx={{ minWidth: 80 }}>
      <SelectSC
        value={chain}
        defaultValue={chain}
        onChange={handleChange}
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
  }

  & > .MuiOutlinedInput-notchedOutline {
    border-color: ${COLORS.LIGHT} !important;
  }
  & > .MuiSvgIcon-root {
    color: ${COLORS.LIGHT};
  }
`;

export default React.memo(NFTExchange);
