import { z } from "zod";
import { ShopType } from "../../../shared/interfaces/Shop";
import { phoneRegex } from "../../../shared/constants";

export const shopFormValidationsSchema = z
  .object({
    title: z
      .string()
      .min(1, { message: "Укажите название магазина" })
      .max(255, { message: "Слишком длинное значение" }),

    contact_phone: z
      .string()
      .regex(phoneRegex, {
        message: "Телефон должен начинаться с +7 и содержать 10 цифр",
      })
      .max(12, { message: "Слишком длинный номер телефона" }),

    contact_email: z
      .string()
      .max(255, { message: "Слишком длинное значение" })
      .email({ message: "Некорректный формат email" }),

    physical_address: z
      .string()
      .max(255, { message: "Слишком длинное значение" }),

    shop_type: z.enum([ShopType.online, ShopType.hybrid, ShopType.offline], {
      required_error: "Укажите тип магазина",
      invalid_type_error: "Неверное значение для типа магазина",
    }),

    shop_category_id: z
      .string()
      .min(1, { message: "Укажите категорию магазина" })
      .max(255, { message: "Слишком длинное значение" }),

    legal_profile_id: z
      .string()
      .min(1, { message: "Укажите юридический профиль" })
      .max(255, { message: "Слишком длинное значение" }),

    seller_profile_id: z
      .string()
      .min(1, { message: "Укажите профиль продавца" })
      .max(255, { message: "Слишком длинное значение" }),
  })
  .superRefine((data, ctx) => {
    if (
      (data.shop_type === ShopType.offline ||
        data.shop_type === ShopType.hybrid) &&
      (!data.physical_address || data.physical_address.length < 20)
    ) {
      ctx.addIssue({
        path: ["physical_address"],
        code: z.ZodIssueCode.custom,
        message: "Укажите физический адрес магазина (минимум 20 символов)",
      });
    }
  });

export type ShopFormData = z.infer<typeof shopFormValidationsSchema>;
