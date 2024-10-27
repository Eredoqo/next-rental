import { PrismaClient } from "@prisma/client";
import bcrypt from "bcryptjs";

const prisma = new PrismaClient();

async function main() {
  await prisma.user.deleteMany({});

  const hashedPassword1 = await bcrypt.hash("password1", 10);
  const hashedPassword2 = await bcrypt.hash("password2", 10);

  // Seed users
  const user1 = await prisma.user.create({
    data: {
      email: "eredo@example.com",
      name: "Eredo",
      password: hashedPassword1,
    },
  });

  const user2 = await prisma.user.create({
    data: {
      email: "mario@example.com",
      name: "Mario",
      password: hashedPassword2,
    },
  });

  console.log({ user1, user2 });
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
