'use strict';
module.exports = (sequelize, DataTypes) => {
  const PermissionRole = sequelize.define('PermissionRole', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: "Primary and auto increment key of the table"
    },

    permissionId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },

    roleId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }

  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'permission_role',
  });

  PermissionRole.associate = function (models) {
    // associations can be defined here
  };

  return PermissionRole;
};