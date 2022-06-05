
const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
 
(async function main() {
  try {
    const martinFowler = await prisma.author.upsert({
      where: { name: 'Alfonsogg sanchez' },
      update: {},
      create: {
        name: 'Alfonsogg sanchez',
        Quotes: {
          create: [
            {
              quote: 'El arte de programas es muy bonito totot',
            },
            {
              quote: `venta para alla`,
            },
          ],
        },
      },
    });
 
    console.log('Create 1 author with 2 quotes: ', martinFowler);
  } catch(e) {
    console.error(e);
    process.exit(1);
  } finally {
    await prisma.$disconnect();
  }
})();

