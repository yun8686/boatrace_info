'use strict';
module.exports = (sequelize, DataTypes) => {
  const race = sequelize.define('race', {
    place_id: DataTypes.NUMBER,
    dates: DataTypes.INTEGER,
    grade: DataTypes.STRING,
    name: DataTypes.STRING,
    days: DataTypes.STRING
  }, {});
  race.associate = function(models) {
    // associations can be defined here
  };
  return race;
};
