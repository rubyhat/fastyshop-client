import { z } from "zod";

export const legalProfileFormValidationSchema = z.object({
  country_code: z
    .string()
    .min(1, { message: "Укажите страну" })
    .max(255, { message: "Слишком длинное значение" }),

  legal_form: z
    .string()
    .min(1, { message: "Укажите юридическую форму компании" })
    .max(255, { message: "Слишком длинное значение" }),

  company_name: z
    .string()
    .min(1, { message: "Укажите название юридического лица" })
    .max(255, { message: "Слишком длинное значение" }),

  legal_address: z
    .string()
    .min(20, { message: "Укажите юридический адрес компании" })
    .max(255, { message: "Слишком длинное значение" }),

  tax_id: z
    .string()
    .min(12, { message: "Укажите БИН/ИИН компании" })
    .max(12, { message: "Слишком длинное значение" }),
});

export type LegalProfileFormData = z.infer<
  typeof legalProfileFormValidationSchema
>;
