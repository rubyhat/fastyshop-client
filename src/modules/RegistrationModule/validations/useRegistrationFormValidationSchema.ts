import { z } from "zod";

/**
 * Регулярное выражение для проверки номера телефона:
 * - начинается с +7
 * - допускает 10 цифр после +7 (всего 12 символов)
 * - без пробелов, дефисов и скобок
 */
const phoneRegex = /^\+7\d{10}$/;

export const useRegistrationFormValidationSchema = z
  .object({
    country_code: z
      .string()
      .min(1, { message: "Укажите страну" })
      .max(255, { message: "Слишком длинное значение" }),

    phone: z
      .string()
      .regex(phoneRegex, {
        message: "Телефон должен начинаться с +7 и содержать 10 цифр",
      })
      .max(12, { message: "Слишком длинный номер телефона" }),

    first_name: z
      .string()
      .max(255, { message: "Слишком длинное значение" })
      .optional()
      .or(z.literal("")),

    last_name: z
      .string()
      .max(255, { message: "Слишком длинное значение" })
      .optional()
      .or(z.literal("")),

    middle_name: z
      .string()
      .max(255, { message: "Слишком длинное значение" })
      .optional()
      .or(z.literal("")),

    email: z
      .string()
      .max(255, { message: "Слишком длинное значение" })
      .email({ message: "Некорректный формат email" }),

    password: z
      .string()
      .min(6, { message: "Пароль должен содержать минимум 6 символов" }),

    password_confirmation: z.string(),
  })
  .refine((data) => data.password === data.password_confirmation, {
    message: "Пароли не совпадают",
    path: ["password_confirmation"], // ошибка у второго поля
  });

export type RegistrationFormData = z.infer<
  typeof useRegistrationFormValidationSchema
>;
