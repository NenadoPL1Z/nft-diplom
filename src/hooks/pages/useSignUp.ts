import { useController, useForm } from "react-hook-form";
import { ChangeEvent } from "react";
import { registrationUser } from "../../init/FirebaseInit";
import { validateEmail } from "@/lib/services/services";
import { useStatus } from "@/hooks/useStatus";
import { useRouter } from "next/router";
import { PagesNamespace } from "@/types/enum";
import { useAppDispatch } from "@/hooks/useStore";
import {
  changeUserAuth,
  changeUserLoading,
} from "@/store/reducers/userSlice/userSlice";

type SignUpStateType = {
  email: string;
  password: string;
};

export const useSignUp = () => {
  const router = useRouter();
  const dispatch = useAppDispatch();

  const { isLoading, hasError, handleChangeStatus } = useStatus({
    isLoading: false,
  });

  const methods = useForm<SignUpStateType>({
    defaultValues: { email: "", password: "" },
  });

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

  const passwordController = useController({
    control,
    name: "password",
    rules: {
      required: true,
      maxLength: {
        value: 20,
        message: "Максимальная длинна пароля 20 символов",
      },
      minLength: { value: 8, message: "Минимальная длинна пароля 8 символов" },
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

  const handleSetError = (message: string) => {
    handleChangeStatus({
      isLoading: false,
      hasError: message,
    });
  };

  const onSubmit = handleSubmit((data) => {
    const isValidateEmail = validateEmail(data.email);

    if (isValidateEmail) {
      handleChangeStatus({ isLoading: true });
      registrationUser(data.email, data.password)
        .then(() => {
          handleChangeStatus({ isLoading: false });
          dispatch(changeUserAuth({ isAuth: true, isLoading: true }));
          router.push(PagesNamespace.ACCOUNT);
        })
        .catch((error) => {
          switch (error.code) {
            case "auth/email-already-in-use":
              handleSetError("Пользователь с такой почтой уже зарегестирован");
              break;
            default:
              handleSetError("Пользователь уже зарегестирован");
          }
          return;
        });
      return;
    }

    handleChangeStatus({ isLoading: false });
    setError("email", { type: "value", message: "Некорректный email" });
  });

  const handleClose = () => {
    handleChangeStatus({ hasError: "" });
  };

  return {
    onSubmit,
    isLoading,
    hasError,
    emailController,
    passwordController,
    handleClose,
    handleChangeEmail,
    handleChangePassword,
    handleChangeStatus,
  };
};
