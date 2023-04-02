import React from "react";
import { Button, styled } from "@mui/material";
import { useRouter } from "next/router";

const ServerErrorPage = () => {
  const { reload } = useRouter();

  return (
    <SectionSC>
      <h1>
        Ошибка сервера. Попробуйте зати чуть позже или преезагрузите страницу
      </h1>
      <Button
        onClick={reload}
        variant="outlined">
        Перезагрузить страницу
      </Button>
    </SectionSC>
  );
};

const SectionSC = styled("section")`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

export default React.memo(ServerErrorPage);
