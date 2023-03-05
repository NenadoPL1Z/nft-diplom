import React from "react";
import AuthWrapper from "@/components/AuthWrapper/AuthWrapper";
import TextFieldContainerSC from "@/UI/TextFieldUI/TextFieldContainerSC";
import TextFieldUI from "@/UI/TextFieldUI/TextFieldUI";
import { Button } from "@mui/material";
import AuthBottom from "@/components/AuthWrapper/AuthBottom";
import { PagesNamespace } from "@/types/enum";

const Signup = () => {
  return (
    <AuthWrapper title="Регистрация">
      <form>
        <TextFieldContainerSC>
          <TextFieldUI label="Имя" />
        </TextFieldContainerSC>
        <TextFieldContainerSC>
          <TextFieldUI label="Почта" />
        </TextFieldContainerSC>
        <TextFieldContainerSC>
          <TextFieldUI label="Пароль" />
        </TextFieldContainerSC>
        <TextFieldContainerSC>
          <TextFieldUI label="Подтверждение пароля" />
        </TextFieldContainerSC>
        <Button fullWidth>Зарегистрироваться</Button>
        <AuthBottom
          title="Есть акканут?"
          href={PagesNamespace.SIGN_IN}
          buttonTitle="Войти"
        />
      </form>
    </AuthWrapper>
  );
};

export default Signup;
