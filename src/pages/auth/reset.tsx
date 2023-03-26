import React from "react";
import AuthWrapper from "@/components/Wrappers/AuthWrapper/AuthWrapper";
import TextFieldContainerSC from "@/UI/TextFieldUI/TextFieldContainerSC";
import TextFieldUI from "@/UI/TextFieldUI/TextFieldUI";
import AuthBottom from "@/components/Wrappers/AuthWrapper/AuthBottom";
import { PagesNamespace } from "@/types/enum";
import { useReset } from "@/hooks/pages/useReset";
import ButtonUI from "@/UI/ButtonUI/ButtonUI";
import DialogUI from "@/UI/DialogUI/DialogUI";

const Reset = () => {
  const { isLoading, success, emailController, handleClose, onSubmit } =
    useReset();

  return (
    <AuthWrapper title="Восстановление пароля">
      <form onSubmit={onSubmit}>
        <TextFieldContainerSC>
          <TextFieldUI
            placeholder="Почта"
            value={emailController.field.value}
            onChange={(e) => emailController.field.onChange(e.target.value)}
            error={!!emailController.fieldState.error}
            helperText={emailController.fieldState.error?.message}
          />
        </TextFieldContainerSC>
        <ButtonUI
          fullWidth
          type="submit"
          isLoading={isLoading}>
          Отпарвить письмо
        </ButtonUI>
        <AuthBottom
          title=""
          href={PagesNamespace.SIGN_IN}
          buttonTitle="Вернуться к входу"
        />
      </form>
      <DialogUI
        open={!!success}
        handleClose={handleClose}>
        {success}
      </DialogUI>
    </AuthWrapper>
  );
};

export default Reset;
