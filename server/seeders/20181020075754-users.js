const faker = require('faker');
const tableName = 'users';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert(tableName, [{
      company_id: 1,
      role_id: 1,
      first_name: 'viral',
      last_name: 'solani',
      email: 'solani.viral@gmail.com',
      password: '123456',
      status: 'ACTIVE',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete(tableName, null, {});
  },
};