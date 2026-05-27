const prisma = require('./dist/lib/prisma').default;
prisma.activity.findMany({})
  .then(activities => {
    console.log('Total activities in DB:', activities.length);
    activities.forEach((act, index) => {
      console.log('Activity ' + (index + 1) + ':', JSON.stringify(act));
    });
  })
  .finally(() => prisma.$disconnect());
