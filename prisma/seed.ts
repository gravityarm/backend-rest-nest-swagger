// prisma/seed.ts

import { PrismaClient } from '@prisma/client';

// initialize Prisma Client
const prisma = new PrismaClient();

async function main() {
  // create two dummy notes
  const note1 = await prisma.note.upsert({
    where: { name: 'Shopping List' },
    update: {},
    create: {
      name: 'Shopping List',
      content:
        'Support for MongoDB has been one of the most requested features since the initial release of...',
      category: 'Task',
      archive: false,
    },
  });

  const note2 = await prisma.note.upsert({
    where: { name: 'Prisma Mongo' },
    update: {},
    create: {
      name: 'Prisma Mongo',
      content:
        'Our engineers have been working hard, issuing new releases with many improvements...',
      category: 'Quote',
      archive: true,
    },
  });

  console.log({ note1, note2 });
}

// execute the main function
main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    // close Prisma Client at the end
    await prisma.$disconnect();
  });
