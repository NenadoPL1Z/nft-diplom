import React from "react";
import { Button, styled } from "@mui/material";
import Link from "next/link";
import { PagesNamespace } from "@/types/enum";

const NotFoundPage = () => {
  return (
    <SectionSC>
      <h1>Такой страницы не существует!</h1>
      <div>
        <Link href={PagesNamespace.INDEX}>
          <Button variant="outlined">На главную</Button>
        </Link>
      </div>
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

export default React.memo(NotFoundPage);
