import { useController, useForm } from "react-hook-form";
import { ChangeEvent } from "react";
import { loginEmailPassword } from "../../init/FirebaseInit";
import { useRouter } from "next/router";
import { useStatus } from "@/hooks/useStatus";
import { PagesNamespace } from "@/types/enum";

interface ISignInForm {
  email: string;
  password: string;
}

export const useSignIn = () => {
  const router = useRouter();

  const { isLoading, hasError, handleChangeStatus } = useStatus({
    isLoading: false,
  });

  const methods = useForm<ISignInForm>({
    defaultValues: { email: "", password: "" },
  });
  const { control, handleSubmit } = methods;

  const emailController = useController({
    control,
    name: "email",
    rules: {
      required: true,
    },
  });

  const passwordController = useController({
    control,
    name: "password",
    rules: {
      required: true,
    },
  });

  type FieldsControllerType =
    | typeof passwordController
    | typeof emailController;

  const handleChange =
    (controller: FieldsControllerType) =>
    (e: ChangeEvent<HTMLInputElement>) => {
      handleChangeStatus({ hasError: "" });
      controller.field.onChange(e.target.value);
    };

  const handleChangeEmail = handleChange(emailController);
  const handleChangePassword = handleChange(passwordController);

  const setError = (message: string) => {
    handleChangeStatus({
      isLoading: false,
      hasError: message,
    });
  };

  const onSubmit = handleSubmit((data) => {
    handleChangeStatus({ isLoading: true });
    loginEmailPassword(data.email, data.password)
      .then(() => {
        handleChangeStatus({ isLoading: false });
        router.push(PagesNamespace.ACCOUNT);
      })
      .catch((e) => {
        switch (e.code) {
          case "auth/invalid-email":
          case "auth/wrong-password":
            setError("Некорректные данные для входа");
            break;
          case "auth/user-not-found":
            setError("Пользователь не найден");
            break;
          default:
            setError("Ошибка при входе");
        }
      });
  });

  return {
    hasError,
    isLoading,
    onSubmit,
    emailController,
    passwordController,
    handleChangeEmail,
    handleChangePassword,
  };
};
