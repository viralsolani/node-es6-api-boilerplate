const faker = require('faker');

const tableName = 'countries';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(tableName, [{
    country_name: 'India',
    iso2: 'IN',
    iso3: 'IND',
    numeric: '356',
    created_at: new Date(),
    updated_at: new Date(),
  },
  {
    country_name: 'United States',
    iso2: 'US',
    iso3: 'USA',
    numeric: '840',
    created_at: new Date(),
    updated_at: new Date(),
  },
  ], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete(tableName, null, {}),
};
