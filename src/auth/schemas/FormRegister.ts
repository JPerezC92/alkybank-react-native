import { z } from "zod";
import { UserCreate } from "../../users/schemas";

export const FormRegister = UserCreate.merge(
  z.object({
    confirmPassword: z
      .string()
      .min(8, "Password must contain at least 8 character(s)"),
  })
).superRefine((values, ctx) => {
  if (values.confirmPassword !== values.password) {
    return ctx.addIssue({
      code: z.ZodIssueCode.custom,
      message: "Passwords doesn't match",
      path: ["confirmPassword"],
    });
  }
});
