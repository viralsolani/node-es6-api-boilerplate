'use strict';

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    id: {
      type: DataTypes.INTEGER(11),
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: "Primary and auto increment key of the table"
    },

    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "First Name"
    },

    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      comment: "Last Name"
    },

    email: {
      field: "email",
      type: DataTypes.STRING(50),
      allowNull: false,
      comment: "Email of User",
      validate: {
        isUnique: function (value, next) {
          const self = this;

          User.find({
              where: {
                email: value
              }
            })
            .then(function (user) {
              if (user && self.id !== user.id) {
                return next('Email is already in use');
              }

              return next();
            })
            .catch(function (err) {
              return next(err);
            });
        }
      }
    },

    password: {
      field: "password",
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "User password"
    },

    salt: DataTypes.STRING,

    password: {
      field: "password",
      type: DataTypes.STRING(255),
      allowNull: false,
      comment: "User password"
    },

    forgotPwdSalt: {
      field: "forgot_pwd_salt",
      type: DataTypes.STRING(255),
      allowNull: true,
      comment: "Forgot password salt"
    },

    status: {
      field: "status",
      type: DataTypes.ENUM('ACTIVE', 'INACTIVE', 'DELETED'),
      allowNull: false,
      defaultValue: 'ACTIVE',
      comment: "User is active, inactive or deleted"
    }
  }, {
    freezeTableName: true,
    tableName: 'users',
  });

  User.associate = function (models) {
    models.User.belongsTo(models.Company, {
      onDelete: "CASCADE",
      foreignKey: {
        allowNull: false
      }
    });
  };

  return User;
};