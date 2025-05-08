import { z } from "zod";

export const verificationFormValidationSchema = z.object({
  description: z.string().max(500, { message: "Слишком длинное значение" }),
});

export type VerificationFormData = z.infer<
  typeof verificationFormValidationSchema
>;
