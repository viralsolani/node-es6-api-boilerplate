'use strict';

module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.bulkInsert('company', [{
      company_name: 'Viral Infotech',
      country_id: 1,
      email: 'solani.viral@gmail.com',
      phone: '9016608346',
      address: 'address',
      state: 'Gujarat',
      city: 'Ahmedabad',
      zip: '361008',
      created_at: new Date(),
      updated_at: new Date()
    }], {});
  },

  down: (queryInterface, Sequelize) => {
    return queryInterface.bulkDelete('company', null, {});
  }
};