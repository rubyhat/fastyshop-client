import { z } from "zod";

/**
 * Схема валидации формы входа.
 *
 * Проверяет корректность введённых данных:
 * - `username` - обязательное поле, строка.
 * - `password` - обязательное поле, строка.
 */
export const LoginFormValidationSchema = z.object({
  /** Логин пользователя (обязательное поле) */
  username: z.string().min(1, { message: "Введите логин" }),

  /** Пароль пользователя (обязательное поле) */
  password: z.string().min(1, { message: "Введите пароль" }),
});

/**
 * Тип данных, используемых в форме входа.
 *
 * Автоматически выводится из `LoginFormValidationSchema`.
 */
export type LoginFormDataTypes = z.infer<typeof LoginFormValidationSchema>;
