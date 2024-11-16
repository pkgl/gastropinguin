const { faker } = require('@faker-js/faker');

exports.seed = function(knex) {
  const categories = [];
  for (let i = 0; i < 10; i++) {
    categories.push({
      category_name: faker.commerce.department(),
      category_description: faker.lorem.sentence(),
      created_at: knex.fn.now(),
      modified_at: knex.fn.now()
    });
  }
  return knex('categories').insert(categories);
};
