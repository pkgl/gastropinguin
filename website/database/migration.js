const db = require('../db');


db.migrate.latest()
  .then(() => {
    console.log('Migrations are finished');
    return db.seed.run();
  })
  .then(() => {
    console.log('Seeding is finished');
  })
  .catch(err => {
    console.error('Error running migrations or seeds:', err);
    process.exit(1);
  });