import { faker } from "@faker-js/faker";
import type { User } from "@prisma/client";

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

const newUser = (): User => {
  return {
    id: faker.database.mongodbObjectId(),
    email: faker.internet.email(),
    password: faker.internet.password(),
    createdAt: faker.datatype.datetime(),
    updatedAt: faker.datatype.datetime(),
  };
};

export function makeUser(...lens: number[]) {
  const createData = (depth = 0): User[] => {
    const len = lens[depth]!;
    return range(len).map((d): User => {
      return {
        ...newUser(),
      };
    });
  };

  return createData();
}
