import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { Box, Button, CircularProgress, Typography } from "@mui/material";
import { FormProvider, useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";

import {
  LoginFormDataTypes,
  LoginFormValidationSchema,
} from "../../validations";
import { loginFormStyles } from "./styles";
import { apiLoginModule } from "../../api/apiLoginModule";
import { useLoginStore } from "../../store";
import { BasicTextField } from "../../../../shared/components/BasicTextField";

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
  const navigate = useNavigate();
  const setAccessToken = useLoginStore((state) => state.setAccessToken);
  const lastVisitedUrl = useLoginStore((state) => state.lastVisitedUrl);
  const setLastVisitedUrl = useLoginStore((state) => state.setLastVisitedUrl);
  const [isLoading, setIsLoading] = React.useState(false);

  const methods = useForm<LoginFormDataTypes>({
    resolver: zodResolver(LoginFormValidationSchema),
    defaultValues: { username: "", password: "" },
  });

  const { handleSubmit } = methods;

  /**
   * Обрабатывает отправку формы входа.
   *
   * - Отправляет данные на сервер для авторизации.
   * - Сохраняет токены в Zustand-хранилище.
   * - Перенаправляет пользователя на последнюю посещённую страницу.
   *
   * @param {LoginFormDataTypes} data Данные формы (логин и пароль)
   */
  const handleFormSubmit = async (data: LoginFormDataTypes) => {
    setIsLoading(true);
    try {
      // todo: вынести в кастомный хук мутации react-query
      const response = await apiLoginModule.postLogin(data);

      setAccessToken(response.data.access_token, response.data.refresh_token);
      toast.success("Успешный вход в систему!");

      navigate(lastVisitedUrl || "/");
      setLastVisitedUrl(null);
    } catch (error) {
      // eslint-disable-next-line no-console
      console.error("Ошибка авторизации:", error);
      toast.error("Ошибка входа. Проверьте логин и пароль.");
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <FormProvider {...methods}>
      <Box
        component="form"
        onSubmit={handleSubmit(handleFormSubmit)}
        sx={loginFormStyles}
      >
        <Typography component="h1" variant="h4">
          Аутентификация
        </Typography>
        <BasicTextField<LoginFormDataTypes>
          name="username"
          label="Логин"
          placeholder="Введите логин"
          disabled={isLoading}
        />
        <BasicTextField<LoginFormDataTypes>
          name="password"
          label="Пароль"
          placeholder="Введите пароль"
          type="password"
          disabled={isLoading}
        />
        <Box>
          <Button
            type="submit"
            variant="contained"
            color="primary"
            size="large"
            fullWidth
            disabled={isLoading}
          >
            {isLoading ? <CircularProgress size={28} /> : "Войти в систему"}
          </Button>
        </Box>
      </Box>
    </FormProvider>
  );
};
