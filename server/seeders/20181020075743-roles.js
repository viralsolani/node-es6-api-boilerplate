'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('role', [{
      company_id: 1,
      role_name: 'Admin',
      description: 'an admin of the app.',
      status: 'ACTIVE',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('role', null, {});
  }
};