import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

export async function main() {
  console.log("DB running");
  await allAutoclaves();
}

async function allAutoclaves() {
  const allAutoclaves = await prisma.autoclaves.findMany();
  return allAutoclaves;
}

main()
  .then(async () => {
    await prisma.$disconnect();
  })
  .catch(async (e) => {
    console.log(e);
    await prisma.$disconnect();
    process.exit(1);
  });
