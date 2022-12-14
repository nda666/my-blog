import { z } from "zod";
import { withZod } from "@remix-validated-form/with-zod";

const postValidation = z
  .object({
    id: z.string(),
    title: z.string().min(1, { message: "Title is required" }).trim(),
    content: z.string().min(1, { message: "Content is required" }),
    slug: z.string(),
    category: z.object(
      {
        id: z.string().nullable(),
        name: z.string().trim(),
      },
      {
        required_error: "Category is required",
      }
    ),
    tags: z.array(
      z.object({
        id: z.string().nullable(),
        name: z.string().trim(),
      })
    ),
  })

  .partial({
    id: true,
    slug: true,
    tags: true,
  });

export default withZod(postValidation);
