module.exports = (sequelize, DataTypes) => {
  const Country = sequelize.define('Country', {
    id: {
      type: DataTypes.INTEGER(3).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true,
      comment: 'Primary and auto increment key of the table',
    },

    countryName: {
      field: 'country_name',
      type: DataTypes.STRING(45),
      allowNull: false,
      comment: 'Country name',
    },

    iso2: {
      field: 'iso2',
      type: DataTypes.CHAR(2),
      allowNull: false,
      comment: 'Country iso2',
    },

    iso3: {
      field: 'iso3',
      type: DataTypes.CHAR(3),
      allowNull: false,
      comment: 'Country iso3',
    },

    numeric: {
      field: 'numeric',
      type: DataTypes.SMALLINT(3).UNSIGNED,
      allowNull: false,
      comment: 'Country num code',
    },
  }, {
    freezeTableName: true,
    tableName: 'countries',
  });
  return Country;
};