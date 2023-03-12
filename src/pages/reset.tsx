import React from "react";
import AuthWrapper from "@/components/AuthWrapper/AuthWrapper";
import TextFieldContainerSC from "@/UI/TextFieldUI/TextFieldContainerSC";
import TextFieldUI from "@/UI/TextFieldUI/TextFieldUI";
import { Button } from "@mui/material";
import AuthBottom from "@/components/AuthWrapper/AuthBottom";
import { PagesNamespace } from "@/types/enum";

const Reset = () => {
  return (
    <AuthWrapper title="Восстановление пароля">
      <form>
        <TextFieldContainerSC>
          <TextFieldUI label="Почта" />
        </TextFieldContainerSC>
        <Button fullWidth>Отпарвить письмо</Button>
        <AuthBottom
          title=""
          href={PagesNamespace.SIGN_IN}
          buttonTitle="Вернуться к входу"
        />
      </form>
    </AuthWrapper>
  );
};

export default Reset;
