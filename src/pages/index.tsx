import { Button, styled, Typography } from "@mui/material";
import { PRIMARY_MAIN_COLOR } from "../theme/colors";
import React from "react";
import Link from "next/link";
import { PagesNamespace } from "@/types/enum";

const Home = () => {
  return (
    <ContainerSC>
      <Typography variant="h1">NFT Анализатор</Typography>
      <ParagraphSC>
        NFT, также уника́льный то́кен — вид криптографических токенов, каждый
        экземпляр которых уникален и не может быть заменён или замещён другим
        аналогичным токеном, хотя обычно токены взаимозаменяемы по своей природе
        NFT подвергаются критике из-за высоких затрат на электроэнергию и
        большого выброса диоксида углерода в процессе проверки транзакций, а
        также из-за использования NFT мошенниками. Под сомнение ставится и
        полезность установки права собственности на зачастую нелегальном
        нерегулируемом рынке.{"\n"} <span>На маркет премиком к анализу!</span>
      </ParagraphSC>
      <Link href={PagesNamespace.NFT}>
        <Button>На маркет!</Button>
      </Link>
    </ContainerSC>
  );
};

const ContainerSC = styled("section")`
  padding: 10px 0;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  justify-content: center;
  align-items: center;
  @media (max-width: 768px) {
    align-items: flex-start;
    justify-content: flex-start;
  }
`;

const ParagraphSC = styled(Typography)`
  margin: 10px 0;
  white-space: pre-wrap;
  max-width: 1000px;
  text-align: center;
  & > span {
    color: ${PRIMARY_MAIN_COLOR};
  }
  @media (max-width: 768px) {
    text-align: left;
  }
`;

export default Home;
