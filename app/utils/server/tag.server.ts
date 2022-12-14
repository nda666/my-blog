import { faker } from "@faker-js/faker";
import type { TagFormType, TagPostType } from "~/types/form";
import createSlug from "../createSlug";
import { prisma } from "./prisma.server";

export async function findOneTag(id: string) {
  return await prisma.tag.findUnique({ where: { id } });
}
export async function createTag({
  name,
  slug,
}: {
  name: string;
  slug: string;
}) {
  return await prisma.tag.create({
    data: {
      name,
      slug,
    },
  });
}

export async function createOrFindTag(
  tagInputs: TagPostType[] | undefined
): Promise<string[] | undefined> {
  if (!tagInputs) return undefined;
  const tagIds: string[] = [];
  await tagInputs.forEach(async (tagInput) => {
    const tagIdToFind = tagInput.id?.toString().trim() || "";
    const tagId =
      tagIdToFind !== ""
        ? (await findOneTag(tagIdToFind))?.id
        : (
            await createTag({
              name: tagInput.name,
              slug: faker.helpers.slugify(tagInput.name),
            })
          ).id;
    tagId && tagIds.push(tagId);
  });

  return tagIds;
}

export async function updateTag(id: string, input: TagFormType) {
  let slug = input.slug
    ? faker.helpers.slugify(input.slug.toLowerCase())
    : faker.helpers.slugify(input.name.toLowerCase());
  slug = await createSlug("tag", slug, id);
  return await prisma.tag.update({
    where: {
      id,
    },
    data: {
      name: input.name,
      slug,
    },
  });
}

export async function deleteOneTag(id: string) {
  return await prisma.tag.delete({
    where: {
      id,
    },
  });
}
