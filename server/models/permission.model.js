import {
  sanitizeModel
} from "../utils/model-helper";

export default (sequelize, DataTypes) => {
  class Permission {
    static definition = {

      id: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: 'Primary and auto increment key of the table',
      },

      permissionName: {
        field: 'permission_name',
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'Name of permission',
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
        comment: 'Permission description',
      },

      status: {
        field: 'status',
        type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
        allowNull: false,
        defaultValue: 'ACTIVE',
        comment: 'Permission is active, inactive',
      },

    }

    static modelOptions = {
      freezeTableName: true,
      tableName: 'permissions',
    }

    static associate(models) {
      this.belongsTo(models.PermissionGroup, {
        as: 'PermissionGroup',
        constraints: true,
        foreignKey: {
          name: 'permissionGroupId',
          field: 'permission_group_id',
          allowNull: false,
        },
      });

      this.belongsToMany(models.Role, {
        through: 'role_permission',
        as: 'RolePermission',
        constraints: true,
        foreignKey: {
          name: 'permissionId',
          field: 'permission_id',
          allowNull: false,
        },
      });

    }
  }
  return sanitizeModel(sequelize, Permission);
}