'use strict';
module.exports = (sequelize, DataTypes) => {
  const Boat = sequelize.define('Boat', {
    name: DataTypes.STRING,
    type: DataTypes.STRING,
    description: DataTypes.STRING,
    startDate: DataTypes.DATE,
    endDate: DataTypes.DATE,
    rate: DataTypes.INTEGER
  }, {});
  Boat.associate = function(models) {
    // associations can be defined here
  };
  return Boat;
};