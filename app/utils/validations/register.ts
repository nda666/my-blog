import { z } from "zod";
import { withZod } from "@remix-validated-form/with-zod";

export const registerValidationSchema = z.object({
  email: z.string().min(1, { message: "Email is required" }).email().trim(),
  password: z.string().min(6),
  passwordConfirm: z.string().min(6),
});

export const registerValidation = withZod(
  registerValidationSchema.refine(
    (data) => data.password === data.passwordConfirm,
    {
      message: "Passwords don't match",
      path: ["passwordConfirm"],
    }
  )
);
