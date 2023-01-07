import { Prisma } from "@prisma/client";
import { prisma } from "../db.server";

export default async function createSlug(
  model: "post" | "tag" | "category",
  slug: string,
  except?: string
) {
  if ("findFirst" in prisma[model] === false) {
    throw Error("findFirst method not found!");
  }

  let canUseSlug = false;
  let numericSlug = 2;
  let slugUsed = slug;
  while (!canUseSlug) {
    const filter = except
      ? {
          $and: [
            {
              _id: { $ne: { $oid: except } },
              slug: { $eq: slugUsed },
            },
          ],
        }
      : { slug: { $eq: slugUsed } };
    const slugExist = await prisma[model].findRaw({
      filter,
    });
    const isExist = Object.keys(slugExist).length > 0;
    if (isExist) {
      slugUsed = `${slug}-${numericSlug.toString().toLowerCase()}`;
    }
    canUseSlug = !isExist;
    numericSlug++;
  }
  return slugUsed;
}
