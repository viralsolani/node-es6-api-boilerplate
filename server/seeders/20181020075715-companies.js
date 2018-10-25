const faker = require('faker');

const tableName = 'companies';

module.exports = {
  up: (queryInterface, Sequelize) => queryInterface.bulkInsert(tableName, [{
    company_name: 'Viral Infotech',
    country_id: 1,
    email: 'solani.viral@gmail.com',
    phone: '9016608346',
    address: 'address',
    state: 'Gujarat',
    city: 'Ahmedabad',
    zip: '361008',
    created_at: new Date(),
    updated_at: new Date(),
  }], {}),

  down: (queryInterface, Sequelize) => queryInterface.bulkDelete(tableName, null, {}),
};
