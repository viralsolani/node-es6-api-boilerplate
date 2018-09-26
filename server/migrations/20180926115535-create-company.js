'use strict';
module.exports = {
  up: (queryInterface, Sequelize) => {
    return queryInterface.createTable('companies', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        type: Sequelize.STRING,
        allowNull: false,
        comment: "Company Name"
      },
      email : {
        field: "email",
        type: Sequelize.STRING(50),
        allowNull: false,
        comment: "Email of company",
      },
      addressLine: {
        type:Sequelize.TEXT,
        comment: "Address Line 1"
      },
      addressLine2: {
        type: Sequelize.TEXT,
        comment: "Address Line 2"
      },
      country: {
        type: Sequelize.STRING,
        comment : "Country"
      },
      state: {
        type: Sequelize.STRING,
        comment: "State"
      },
      city: {
        type: Sequelize.STRING,
        comment: "City"
      },
      zip: {
        type: Sequelize.INTEGER(8),
        comment: "City"
      },
      contactEmail: {
        type: Sequelize.STRING,
        comment: "Contact Email"
      },
      contactName: {
        type: Sequelize.STRING,
        comment: "Contact Name"
      },
      contactPhone: {
        type: Sequelize.STRING,
        comment: "Contact Phone Number"
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  down: (queryInterface, Sequelize) => {
    return queryInterface.dropTable('companies');
  }
};