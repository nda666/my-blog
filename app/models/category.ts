import { faker } from "@faker-js/faker";
import { ActiveStatus } from "@prisma/client";
import type { CategoryFormType, PostCategoryType } from "~/types/form";
import createSlug from "../utils/createSlug";
import { prisma } from "../db.server";

export async function getAllActiveCategory() {
  return await prisma.category.findMany({
    where: {
      active: ActiveStatus.ACTIVE,
    },
    orderBy: {
      name: "asc",
    },
  });
}

export async function findOneCategory(id: string) {
  return await prisma.category.findUnique({ where: { id } });
}

export async function createCategory(input: CategoryFormType) {
  let slug = input.slug
    ? faker.helpers.slugify(input.slug.toLowerCase())
    : faker.helpers.slugify(input.name.toLowerCase());
  slug = await createSlug("category", slug);
  return await prisma.category.create({
    data: {
      name: input.name,
      slug,
    },
  });
}

export async function updateCategory(id: string, input: CategoryFormType) {
  let slug = input.slug
    ? faker.helpers.slugify(input.slug.toLowerCase())
    : faker.helpers.slugify(input.name.toLowerCase());
  slug = await createSlug("category", slug, id);
  return await prisma.category.update({
    where: {
      id,
    },
    data: {
      name: input.name,
      slug,
    },
  });
}

export async function createOrFindCategory(input: PostCategoryType) {
  if (input.id !== null && input.id?.toString().trim() !== "") {
    return await findOneCategory(input.id);
  }
  return await createCategory({ name: input.name });
}

export async function deleteOneCategory(id: string) {
  return await prisma.category.delete({
    where: {
      id,
    },
  });
}

export interface CategoryDatatablesParams {
  length: number;
  page: number;
}
export async function categoryDatatables(params: CategoryDatatablesParams) {
  let skip = params.length * (params.page - 1);

  const categories = await prisma.category.findMany({
    take: params.length,
    skip,
  });
  const count = await prisma.category.count();
  return {
    data: categories,
    currentPage: params.page,
    totalPage: Math.ceil(count / params.length),
  };
}
