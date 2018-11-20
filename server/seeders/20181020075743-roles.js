const faker = require("faker");

const tableName = "roles";

module.exports = {
    up: (queryInterface, Sequelize) => queryInterface.bulkInsert(tableName, [{
        company_id: 1,
        role_name: "Admin",
        description: "an admin of the app.",
        status: "ACTIVE",
        created_at: new Date(),
        updated_at: new Date(),
    }], {}),

    down: (queryInterface, Sequelize) => queryInterface.bulkDelete(tableName, null, {}),
};
