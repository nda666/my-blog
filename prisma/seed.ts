import * as bcrypt from "bcryptjs";
import { PrismaClient } from "@prisma/client";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";

const email = "user@gmail.com"; // Change with your email
const password = "123456"; // Change the password

const prisma = new PrismaClient();

async function createAdminUser() {
  await prisma.user
    .create({
      data: { email, password: bcrypt.hashSync(password) },
    })
    .catch((error) => {
      if (error instanceof PrismaClientKnownRequestError) {
        if (error.code === "P2002") {
          console.error(`A user with email "${email}" already created`);
        }
      }
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
