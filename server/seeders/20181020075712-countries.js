'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('country', [{
      country_name: 'India',
      iso2: 'IN',
      iso3: 'IN',
      numeric: '1',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('country', null, {});
  }
};