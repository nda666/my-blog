import { z } from "zod";
import { withZod } from "@remix-validated-form/with-zod";

export const loginValidation = withZod(
  z
    .object({
      email: z.string().min(1, { message: "Email is required" }).email().trim(),
      password: z.string().min(1, { message: "Password is required" }),
      remember: z.string().transform((val) => {
        return val.toString() === "1" ? true : false;
      }),
      redirectTo: z.string(),
    })
    .partial({ redirectTo: true, remember: true })
);
