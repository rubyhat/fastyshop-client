import {
  Box,
  Button,
  CircularProgress,
  Paper,
  Typography,
} from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  LoginFormDataTypes,
  LoginFormValidationSchema,
} from "../../validations";
import { loginFormStyles } from "./styles";
import { BasicTextField } from "../../../../shared/components/BasicTextField";
import { useLoginMutation } from "../../hooks";
import { useRegistrationStore } from "../../../RegistrationModule/store/useRegistrationStore";
import toast from "react-hot-toast";

/**
 * Форма входа в систему.
 *
 * - Использует `react-hook-form` для управления вводом.
 * - Выполняет запрос авторизации через `apiLoginModule.postLogin()`.
 * - Управляет токеном через Zustand-хранилище `useLoginStore`.
 * - Показывает уведомления с `react-hot-toast`.
 *
 * @returns React-компонент формы входа
 */
export const LoginForm = () => {
  const setShowRegistrationDrawer = useRegistrationStore(
    (state) => state.setShowRegistrationDrawer,
  );

  const methods = useForm<LoginFormDataTypes>({
    resolver: zodResolver(LoginFormValidationSchema),
    defaultValues: { phone: "", password: "" },
  });

  const { handleSubmit } = methods;
  const loginMutation = useLoginMutation();

  /**
   * Обрабатывает отправку формы входа.
   *
   * @param {LoginFormDataTypes} data Данные формы (логин и пароль).
   */
  const handleFormSubmit = (data: LoginFormDataTypes) => {
    const normalizedData = {
      ...data,
      phone: data.phone.slice(1), // Удаляем +
    };
    loginMutation.mutate(normalizedData);
  };

  return (
    <FormProvider {...methods}>
      <Box component={Paper}>
        <Box
          component="form"
          onSubmit={handleSubmit(handleFormSubmit)}
          sx={loginFormStyles}
        >
          <Typography component="h1" variant="h4">
            Добро пожаловать!
          </Typography>
          <BasicTextField<LoginFormDataTypes>
            name="phone"
            label="Телефон"
            placeholder="Введите логин"
            disabled={loginMutation.isPending}
          />
          <BasicTextField<LoginFormDataTypes>
            name="password"
            label="Пароль"
            placeholder="Введите пароль"
            type="password"
            disabled={loginMutation.isPending}
          />
          <Typography
            component="p"
            variant="body2"
            sx={{ textDecoration: "underline" }}
            onClick={() =>
              toast.error(
                "Пожалуйста, обратитесь в тех. поддержку, мы восстановим Ваш пароль!",
              )
            }
          >
            Забыли пароль?
          </Typography>
          <Box>
            <Button
              type="submit"
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              disabled={loginMutation.isPending}
            >
              {loginMutation.isPending ? (
                <CircularProgress size={28} />
              ) : (
                "Войти в систему"
              )}
            </Button>
            <Typography component="p" variant="body2" my={2} textAlign="center">
              или
            </Typography>
            <Button
              variant="contained"
              color="primary"
              size="large"
              fullWidth
              disabled={loginMutation.isPending}
              onClick={() => setShowRegistrationDrawer(true)}
            >
              Создать аккаунт
            </Button>
          </Box>
        </Box>
      </Box>
    </FormProvider>
  );
};
