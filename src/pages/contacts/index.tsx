import React from "react";
import { Button, styled, Typography } from "@mui/material";
import { PRIMARY_MAIN_COLOR } from "../../theme/colors";
import Link from "next/link";
import { PagesNamespace } from "@/types/enum";

const Contacts = () => {
  return (
    <ContainerSC>
      <Typography variant="h1">О контактах</Typography>
      <ParagraphSC>
        Наша компания предпочитает ответить на вопросы о продуктах прямо на
        сайте. Это позволяет нам быстро и наиболее эффективно ответить на
        вопросы большего количества пользователей. В дополнение к этому, мы
        также постоянно публикуем обновления и уведомления о наших продуктах на
        главном сайте. Поэтому наша команда решила не заполнять раздел
        {/* eslint-disable-next-line react/no-unescaped-entities */}
        {/* eslint-disable-next-line react/no-unescaped-entities */} "Контакты"
        на нашем сайте, чтобы защитить пользователей от потери времени и
        беспорядка в обмене сообщениями и помочь им быстро взаимодействовать с
        представленной нами информацией. При этом, мы предоставляем различные
        информационные ресурсы, чтобы дать пользователям понять важность наших
        решений и рецепты успеха.{"\n"}
        <span>C уважение команда NFT-Easy.</span>
      </ParagraphSC>
      <Link href={PagesNamespace.NFT}>
        <Button>Обратно на маркет!</Button>
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

export default Contacts;
