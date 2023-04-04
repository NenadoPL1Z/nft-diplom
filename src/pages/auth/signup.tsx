import React from "react";
import AuthWrapper from "@/components/Wrappers/AuthWrapper/AuthWrapper";
import TextFieldContainerSC from "@/UI/TextFieldUI/TextFieldContainerSC";
import TextFieldUI from "@/UI/TextFieldUI/TextFieldUI";
import AuthBottom from "@/components/Wrappers/AuthWrapper/AuthBottom";
import { PagesNamespace } from "@/types/enum";
import { useSignUp } from "@/hooks/pages/useSignUp";
import TFPasswordUI from "@/UI/TextFieldUI/TextFields/TFPasswordUI/TFPasswordUI";
import ButtonUI from "@/UI/ButtonUI/ButtonUI";
import { styled, Typography } from "@mui/material";

const Signup = () => {
  const {
    hasError,
    isLoading,
    passwordController,
    emailController,
    onSubmit,
    handleChangeEmail,
    handleChangePassword,
  } = useSignUp();

  return (
    <AuthWrapper title="Регистрация">
      <form onSubmit={onSubmit}>
        <TextFieldContainerSC>
          <TextFieldUI
            placeholder="Почта"
            value={emailController.field.value}
            onChange={handleChangeEmail}
            error={!!emailController.fieldState.error}
            helperText={emailController.fieldState.error?.message}
          />
        </TextFieldContainerSC>
        <TextFieldContainerSC>
          <TFPasswordUI
            placeholder="Пароль"
            value={passwordController.field.value}
            onChange={handleChangePassword}
            error={!!passwordController.fieldState.error}
            helperText={passwordController.fieldState.error?.message}
          />
        </TextFieldContainerSC>
        {hasError && (
          <TypographyCustomSC color="error">{hasError}</TypographyCustomSC>
        )}
        <ButtonUI
          isLoading={isLoading}
          fullWidth
          type="submit">
          Зарегистрироваться
        </ButtonUI>
        <AuthBottom
          title="Есть аккаунт?"
          href={PagesNamespace.SIGN_IN}
          buttonTitle="Войти"
        />
      </form>
    </AuthWrapper>
  );
};

const TypographyCustomSC = styled(Typography)`
  margin-bottom: 20px;
`;

export default Signup;
