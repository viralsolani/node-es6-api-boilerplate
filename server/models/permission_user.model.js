'use strict';
module.exports = (sequelize, DataTypes) => {
  const PermissionUser = sequelize.define('PermissionUser', {
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

    usersId: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    }

  }, {
    timestamps: false,
    freezeTableName: true,
    tableName: 'permission_user',
  });

  PermissionUser.associate = function (models) {
    // associations can be defined here
  };
  return PermissionUser;
};