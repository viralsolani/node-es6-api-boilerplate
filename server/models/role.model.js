'use strict';
module.exports = (sequelize, DataTypes) => {
  const Role = sequelize.define('Role', {
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
      comment: "Name of Role"
    },

    all: {
      type: DataTypes.TINYINT,
      allowNull: false,
      comment: "For Permission"
    },

    sort: {
      type: DataTypes.SMALLINT,
      comment: "For Sorting Role"
    },

    status: {
      field: "status",
      type: DataTypes.ENUM('ACTIVE', 'INACTIVE', 'DELETED'),
      allowNull: false,
      defaultValue: 'ACTIVE',
      comment: "Role is active, inactive or deleted"
    },
  }, {
    freezeTableName: true,
    tableName: 'roles',
  });

  Role.associate = function (models) {
    models.Role.belongsTo(models.Company, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });

    models.Role.belongsToMany(models.Permission, {
      through: 'permission_role',
      timestamps: false
    });

  };
  return Role;
};