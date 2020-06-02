'use strict';
module.exports = (sequelize, DataTypes) => {
  const Address = sequelize.define('Address', {
    street: DataTypes.STRING,
    suite: DataTypes.STRING,
    city: DataTypes.STRING,
    zipcode: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {});
  Address.associate = function(models) {
    Address.belongsTo(models.User, { foreignKey: 'userId', as: 'user' })
  };
  return Address;
};