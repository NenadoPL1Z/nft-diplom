import { useController, useForm } from "react-hook-form";
import { ChangeEvent } from "react";
import { loginEmailPassword } from "../../init/FirebaseInit";

interface ISignInForm {
  email: string;
  password: string;
}

export const useSignIn = () => {
  const methods = useForm<ISignInForm>({
    defaultValues: { email: "", password: "" },
  });
  const { control, handleSubmit } = methods;

  const emailController = useController({
    control,
    name: "email",
    rules: {
      required: true,
      // maxLength: {
      //   value: 30,
      //   message: "Максимальная длинна почты 30 символов",
      // },
      // minLength: { value: 5, message: "Минимальная длинна почты 5 символов" },
    },
  });

  const passwordController = useController({
    control,
    name: "password",
    rules: {
      required: true,
      // maxLength: {
      //   value: 20,
      //   message: "Максимальная длинна пароля 20 символов",
      // },
      // minLength: { value: 8, message: "Минимальная длинна пароля 8 символов" },
    },
  });

  type FieldsControllerType =
    | typeof passwordController
    | typeof emailController;

  const handleChange =
    (controller: FieldsControllerType) => (e: ChangeEvent<HTMLInputElement>) =>
      controller.field.onChange(e.target.value);

  const handleChangeEmail = handleChange(emailController);
  const handleChangePassword = handleChange(passwordController);

  const onSubmit = handleSubmit((data) => {
    loginEmailPassword(data.email, data.password);
  });

  return {
    onSubmit,
    emailController,
    passwordController,
    handleChangeEmail,
    handleChangePassword,
  };
};
