import {
  sanitizeModel
} from "../utils/model-helper";

export default (sequelize, DataTypes) => {
  class PermissionGroup {
    static definition = {
      id: {
        type: DataTypes.INTEGER(2).UNSIGNED,
        allowNull: false,
        primaryKey: true,
        autoIncrement: true,
        comment: 'Primary and auto increment key of the table',
      },

      groupName: {
        field: 'group_name',
        type: DataTypes.STRING(50),
        allowNull: false,
        comment: 'Name of group',
      },

      description: {
        type: DataTypes.TEXT,
        allowNull: true,
        defaultValue: null,
        comment: 'PermissionGroup description',
      },

      status: {
        field: 'status',
        type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
        allowNull: false,
        defaultValue: 'ACTIVE',
        comment: 'Permission group is active, inactive',
      },
    }

    static modelOptions = {
      freezeTableName: true,
      tableName: 'permission_group',
    }

  }
  return sanitizeModel(sequelize, PermissionGroup);
}