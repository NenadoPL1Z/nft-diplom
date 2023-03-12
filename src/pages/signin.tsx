import React from "react";
import AuthWrapper from "@/components/AuthWrapper/AuthWrapper";
import { Button, styled } from "@mui/material";
import TextFieldUI from "@/UI/TextFieldUI/TextFieldUI";
import TextFieldContainerSC from "@/UI/TextFieldUI/TextFieldContainerSC";
import { PagesNamespace } from "@/types/enum";
import AuthBottom from "@/components/AuthWrapper/AuthBottom";
import Link from "next/link";
import { useSignIn } from "@/hooks/pages/useSignIn";

const SignIn = () => {
  const {
    passwordController,
    emailController,
    handleChangeEmail,
    handleChangePassword,
    onSubmit,
  } = useSignIn();
  return (
    <AuthWrapper title="Вход">
      <form onSubmit={onSubmit}>
        <TextFieldContainerSC>
          <TextFieldUI
            label="Почта"
            value={emailController.field.value}
            onChange={handleChangeEmail}
            error={!!emailController.fieldState.error}
            helperText={emailController.fieldState.error?.message}
          />
        </TextFieldContainerSC>
        <TextFieldContainerSC>
          <TextFieldUI
            label="Пароль"
            value={passwordController.field.value}
            onChange={handleChangePassword}
            error={!!passwordController.fieldState.error}
            helperText={passwordController.fieldState.error?.message}
          />
        </TextFieldContainerSC>
        <ResetContainerSC>
          <Link href={PagesNamespace.RESET}>
            <Button variant="text">Забыли пароль?</Button>
          </Link>
        </ResetContainerSC>
        <Button
          fullWidth
          type="submit">
          Войти
        </Button>
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
  margin-bottom: 20px;
`;

export default SignIn;
