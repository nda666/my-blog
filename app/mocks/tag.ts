import { faker } from "@faker-js/faker";
import type { Tag } from "@prisma/client";

const range = (len: number) => {
  const arr = [];
  for (let i = 0; i < len; i++) {
    arr.push(i);
  }
  return arr;
};

const newPost = (): Tag => {
  const name = faker.lorem.sentence(1);
  return {
    id: faker.datatype.uuid(),
    name,
    active: "Active",
    slug: faker.helpers.slugify(name),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
  } as any;
};

export function makeData(...lens: number[]) {
  const makeDataLevel = (depth = 0): Tag[] => {
    const len = lens[depth]!;
    return range(len).map((d): Tag => {
      return {
        ...newPost(),
      };
    });
  };

  return makeDataLevel();
}
