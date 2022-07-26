import * as bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();
const email = "user@gmail.com";
const password = "123456";

async function createAdminUser() {
  await prisma.user.upsert({
    where: {
      email,
    },
    update: {},
    create: {
      email,
      password: bcrypt.hashSync(password),
    },
  });
}

createAdminUser()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
