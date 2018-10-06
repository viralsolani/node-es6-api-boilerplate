'use strict';
module.exports = (sequelize, DataTypes) => {
  const Permission = sequelize.define('Permission', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: "Primary and auto increment key of the table"
    },

    name: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Name of Permission"
    },

    DisplayName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Display Name of Permission"
    },

    sort: {
      type: DataTypes.SMALLINT,
      allowNull: false,
      comment: "For Sorting Role"
    },

    status: {
      field: "status",
      type: DataTypes.ENUM('ACTIVE', 'INACTIVE', 'DELETED'),
      allowNull: false,
      defaultValue: 'ACTIVE',
      comment: "User is active, inactive or deleted"
    }
  }, {});
  Permission.associate = function (models) {
    // associations can be defined here
  };
  return Permission;
};