import { prisma } from "~/db.server";
import * as bcrypt from "bcryptjs";

export async function createOneUser(email: string, password: string) {
  return await prisma.user.create({
    data: {
      email,
      password: bcrypt.hashSync(password),
    },
  });
}
