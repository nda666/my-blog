import type { PrismaClient } from "@prisma/client";
import { prisma } from "./server/prisma.server";
type ModelType = keyof PrismaClient;

export default async function createSlug(
  model: ModelType,
  slug: string,
  except?: string
) {
  let canUseSlug = false;
  let numericSlug = 2;
  let slugUsed = slug;
  while (!canUseSlug) {
    const exceptFind = except
      ? {
          NOT: {
            id: except,
          },
        }
      : {
          NOT: undefined,
        };
    const slugExist = await prisma[model].findFirst({
      where: {
        slug: slugUsed,
        ...exceptFind,
      },
    });
    if (slugExist) {
      slugUsed = `${slug}-${numericSlug.toString().toLowerCase()}`;
    }
    canUseSlug = !slugExist;
    numericSlug++;
  }
  return slugUsed;
}
