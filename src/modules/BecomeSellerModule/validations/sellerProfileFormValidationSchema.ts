import { z } from "zod";

// todo: add logo
export const sellerProfileFormValidationSchema = z.object({
  display_name: z
    .string()
    .min(1, { message: "Введите название для Вашего профиля продавца" })
    .max(255, { message: "Слишком длинное значение" }),

  description: z
    .string()
    .max(255, { message: "Слишком длинное значение" })
    .optional()
    .or(z.literal("")),
});

export type SellerProfileFormData = z.infer<
  typeof sellerProfileFormValidationSchema
>;
