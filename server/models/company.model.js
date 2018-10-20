module.exports = (sequelize, DataTypes) => {
  const Company = sequelize.define('Company', {
    id: {
      type: DataTypes.INTEGER(11).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: 'Primary and auto increment key of the table',
    },

    companyName: {
      field: 'company_name',
      type: DataTypes.STRING(255),
      allowNull: true,
      defaultValue: null,
      comment: 'Company Name',
    },

    email: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      comment: 'Company contact email',
    },

    phone: {
      type: DataTypes.STRING(15),
      allowNull: true,
      defaultValue: null,
      comment: 'Company contact phone',
    },

    address: {
      type: DataTypes.TEXT,
      allowNull: true,
      defaultValue: null,
      comment: 'Company address',
    },

    state: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      comment: 'State',
    },

    city: {
      type: DataTypes.STRING(50),
      allowNull: true,
      defaultValue: null,
      comment: 'City',
    },

    zip: {
      type: DataTypes.INTEGER(8),
      allowNull: true,
      defaultValue: null,
      comment: 'Zip code',
    },

    status: {
      field: 'status',
      type: DataTypes.ENUM('ACTIVE', 'INACTIVE'),
      allowNull: false,
      defaultValue: 'ACTIVE',
      comment: 'Company is active or inactive',
    },
  }, {
    freezeTableName: true,
    tableName: 'companies',
  });
  Company.associate = (models) => {
    Company.belongsTo(models.Country, {
      as: 'Country',
      constraints: true,
      foreignKey: {
        name: 'countryId',
        field: 'country_id',
        allowNull: true,
      },
    });

    Company.hasMany(models.User, {
      as: 'Users',
      constraints: true,
      foreignKey: {
        name: 'companyId',
        field: 'company_id',
        allowNull: false,
      },
    });
  };
  return Company;
};