import React from "react";
import { CircularProgress, styled } from "@mui/material";

const NftList = () => {
  return (
    <div>
      <CircularProgress />
    </div>
  );
};

const ContainerSC = styled("div")`
  background-color: red;
`;

export default React.memo(NftList);
