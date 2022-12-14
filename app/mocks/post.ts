import { faker } from "@faker-js/faker";
import { Post } from "@prisma/client";

export type Person = {
  firstName: string;
  lastName: string;
  age: number;
  visits: number;
  progress: number;
  status: "relationship" | "complicated" | "single";
  subRows?: Person[];
};

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPost = (): Post => {
  const title = faker.lorem.sentence(3);
  return {
    id: faker.database.mongodbObjectId(),
    title,
    slug: faker.helpers.slugify(title),
    content: faker.lorem.paragraphs(3).replace(/\n/gi, "\n\n"),
    status: "Active",
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
  } as any;
};

export function makePost(...lens: number[]) {
  const createData = (depth = 0): Post[] => {
    const len = lens[depth]!;
    return range(len).map((d): Post => {
      return {
        ...newPost(),
      };
    });
  };

  return createData();
}
