'use strict';
module.exports = (sequelize, DataTypes) => {
  const Boat = sequelize.define('Boat', {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    type: {
      type: DataTypes.STRING,
      allowNull: false,
    },
    description: {
      type: DataTypes.TEXT,
      allowNull: false,
    },
    startDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    endDate: {
      type: DataTypes.DATE,
      allowNull: false,
    },
    rate: {
      type: DataTypes.INTEGER,
      allowNull: false,
    },
  }, {});
  Boat.associate = function(models) {
    Boat.hasMany(models.Booking, { foreignKey: "boatId" });
  };
  return Boat;
};
