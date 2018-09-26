'use strict';
module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    id: {
      type            : DataTypes.INTEGER(11),
      allowNull       : false,
      primaryKey      : true,
      autoIncrement   : true,
      comment         : "Primary and auto increment key of the table"
    },

    name: {
      type            :DataTypes.STRING,
      allowNull       : false,
      comment         : "Company Name"
    },

    email : {
      field       : "email",
      type        : DataTypes.STRING(50),
      allowNull   : false,
      comment     : "Email of company",
      validate    : {
        isUnique: function (value, next)
        {
          const self = this;

          Company.find({where: {email: value}})
            .then(function(company)
            {
              if(company && self.id !== company.id)
              {
                return next('Email is already in use');
              }

              return next();
          })
          .catch(function(err)
          {
              return next(err);
          });
        }
      }
    },

    addressLine: {
      type            : DataTypes.TEXT,
      comment         : "Address Line 1"
    },

    addressLine2: {
      type            : DataTypes.TEXT,
      comment         : "Address Line 2"
    },

    country: {
      type            : DataTypes.STRING,
      comment         : "Country"
    },

    state: {
      type            : DataTypes.STRING,
      comment         : "State"
    },

    city: {
      type            : DataTypes.STRING,
      comment         : "City"
    },

    zip: {
      type            : DataTypes.INTEGER(8),
      comment         : "City"
    },

    contactEmail: {
      type            : DataTypes.STRING,
      comment         : "Contact Email"
    },

    contactName: {
      type            : DataTypes.STRING,
      comment         : "Contact Name"
    },

    contactPhone: {
      type            : DataTypes.STRING,
      comment         : "Contact Phone Number"
    }
  }, {});
  Company.associate = function(models) {
    // associations can be defined here
  };
  return Company;
};