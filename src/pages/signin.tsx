import React from "react";
import AuthWrapper from "@/components/AuthWrapper/AuthWrapper";
import { Button, styled } from "@mui/material";
import TextFieldUI from "@/UI/TextFieldUI/TextFieldUI";
import TextFieldContainerSC from "@/UI/TextFieldUI/TextFieldContainerSC";
import { PagesNamespace } from "@/types/enum";
import AuthBottom from "@/components/AuthWrapper/AuthBottom";
import Link from "next/link";

const SignIn = () => {
  return (
    <AuthWrapper title="Вход">
      <form>
        <TextFieldContainerSC>
          <TextFieldUI label="Почта" />
        </TextFieldContainerSC>
        <TextFieldContainerSC>
          <TextFieldUI label="Пароль" />
        </TextFieldContainerSC>
        <ResetContainerSC>
          <Link href={PagesNamespace.RESET}>
            <Button variant="text">Забыли пароль?</Button>
          </Link>
        </ResetContainerSC>
        <Button fullWidth>Войти</Button>
        <AuthBottom
          title="Нет аккаунта?"
          href={PagesNamespace.SIGN_UP}
          buttonTitle="Зарегистрироваться в 2 клика"
        />
      </form>
    </AuthWrapper>
  );
};

const ResetContainerSC = styled(TextFieldContainerSC)`
  text-align: right;
  margin: 20px 0;
`;

export default SignIn;
