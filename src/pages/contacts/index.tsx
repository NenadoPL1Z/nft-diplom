import React from "react";
import { styled, Typography } from "@mui/material";
import { PRIMARY_MAIN_COLOR } from "../../theme/colors";

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
        "Контакты" на нашем сайте, чтобы защитить пользователей от потери
        времени и беспорядка в обмене сообщениями и помочь им быстро
        взаимодействовать с представленной нами информацией. При этом, мы
        предоставляем различные информационные ресурсы, чтобы дать пользователям
        понять важность наших решений и рецепты успеха. Мы также предлагаем
        "ЧАВО", чтобы помочь пользователям найти ответы на самые
        распространенные вопросы на нашем сайте.{"\n"}
        <span>C уважение команда NFT-Easy.</span>
      </ParagraphSC>
    </ContainerSC>
  );
};

const ContainerSC = styled("section")`
  padding: 10px 0;
`;

const ParagraphSC = styled(Typography)`
  margin: 10px 0 30px;
  white-space: pre-wrap;
  & > span {
    color: ${PRIMARY_MAIN_COLOR};
  }
`;

export default Contacts;
