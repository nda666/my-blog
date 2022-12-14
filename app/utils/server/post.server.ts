import { faker } from "@faker-js/faker";
import { ActiveStatus } from "@prisma/client";
import type { PostFormType } from "~/types/form";
import createSlug from "../createSlug";
import { isUserPost } from "./authorize.server";
import { createOrFindCategory } from "./category.server";
import { prisma } from "./prisma.server";
import { createOrFindTag } from "./tag.server";

async function buildPostData(postInput: PostFormType, id?: string) {
  let slug = postInput.slug
    ? faker.helpers.slugify(postInput.slug.toLowerCase())
    : faker.helpers.slugify(postInput.title.toLowerCase());
  slug = await createSlug("post", slug, id);
  const tagIds = await createOrFindTag(postInput.tags);
  const category = await createOrFindCategory(postInput.category);
  if (!category) {
    throw new Error("category_not_exist");
  }
  return {
    title: postInput.title,
    userId: postInput.userId,
    content: postInput.content,
    slug: slug,
    tagIds: tagIds,
    categoryId: category.id,
  };
}

export async function createNewPost(postInput: PostFormType) {
  const data = await buildPostData(postInput);
  const post = await prisma.post.create({
    data,
  });
  return post;
}

export async function updatePost(id: string, postInput: PostFormType) {
  const data = await buildPostData(postInput, id);
  const post = await prisma.post.update({
    where: {
      id,
    },
    data,
  });
  return post;
}

export async function findOnePost(id: string) {
  return await prisma.post.findUnique({
    where: {
      id,
    },
    include: {
      category: true,
      tags: {
        where: {
          active: ActiveStatus.Active,
        },
      },
    },
  });
}

export async function deleteOnePost(id: string, userId: string) {
  const post = await findOnePost(id);
  isUserPost(post, userId);
  return await prisma.post.delete({
    where: {
      id,
    },
  });
}
