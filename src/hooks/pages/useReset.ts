import { useController, useForm } from "react-hook-form";
import { validateEmail } from "@/lib/services/services";
import { resetPassword } from "../../init/FirebaseInit";
import { useStatus } from "@/hooks/useStatus";
import { useState } from "react";
import { useRouter } from "next/router";
import { PagesNamespace } from "@/types/enum";

type FormType = {
  email: string;
};
export const useReset = () => {
  const router = useRouter();
  const [success, setSuccess] = useState<string>("");

  const { isLoading, hasError, handleChangeStatus } = useStatus({
    isLoading: false,
  });

  const methods = useForm<FormType>({ defaultValues: { email: "" } });
  const { control, handleSubmit, setError } = methods;

  const emailController = useController({
    control,
    name: "email",
    rules: {
      required: true,
      maxLength: {
        value: 30,
        message: "Максимальная длинна почты 30",
      },
      minLength: { value: 5, message: "Минимальная длинна почты 5" },
    },
  });

  const handleClose = () => {
    setSuccess("");
    router.push(PagesNamespace.SIGN_IN);
  };

  const onSubmit = handleSubmit((data) => {
    const isValidateEmail = validateEmail(data.email);
    if (!isValidateEmail) {
      setError("email", { type: "value", message: "Некорректный email" });
    }
    handleChangeStatus({ isLoading: true });
    if (isValidateEmail) {
      resetPassword(data.email)
        .then(() => {
          handleChangeStatus({ isLoading: false, hasError: "" });
          setSuccess(
            "Письмо с восстановление пароля успешно отправленно на указанную почту!",
          );
        })
        .catch((e) => {
          switch (e.code) {
            case "auth/user-not-found":
              setError("email", {
                type: "value",
                message: "Почта не привязанна ни к какой учетной записи",
              });
              break;
            default:
              setError("email", {
                type: "value",
                message: "Случилась непредвиденная ошибка, попробуйте позже",
              });
          }
          handleChangeStatus({ isLoading: false, hasError: "" });
        });
    }
  });

  return {
    hasError,
    isLoading,
    success,
    handleClose,
    emailController,
    onSubmit,
  };
};
