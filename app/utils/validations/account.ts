import { z } from "zod";
import { withZod } from "@remix-validated-form/with-zod";
import { registerValidationSchema } from "./register";

export const accountValidation = withZod(
  registerValidationSchema
    .extend({
      id: z.string().min(1, { message: "User ID is not found" }).trim(),
    })
    .partial({ password: true, passwordConfirm: true })
    .refine((data) => data.password === data.passwordConfirm, {
      message: "Passwords don't match",
      path: ["passwordConfirm"],
    })
);
