const { PrismaClient } = require('./dist/lib/prisma');
const prisma = new PrismaClient();
prisma.activity.findMany({}).then(activities => {
  console.log('Total activities in DB:', activities.length);
  if (activities.length > 0) {
    console.log('First activity:', JSON.stringify(activities[0], null, 2));
  }
}).finally(() => prisma.$disconnect());
