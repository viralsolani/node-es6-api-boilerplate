'use strict';
module.exports = (sequelize, DataTypes) => {
  const RoleUser = sequelize.define('RoleUser', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: "Primary and auto increment key of the table"
    },

    userId: {
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
    tableName: 'role_user',
  });

  RoleUser.associate = function (models) {
    // associations can be defined here
  };

  return RoleUser;
};