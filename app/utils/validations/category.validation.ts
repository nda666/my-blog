import { z } from "zod";
import { withZod } from "@remix-validated-form/with-zod";

const categoryValidation = z
  .object({
    id: z.string(),
    name: z.string().min(1, { message: "Name is required" }).trim(),
    slug: z.string(),
  })
  .partial({
    id: true,
    slug: true,
  });

export default withZod(categoryValidation);
