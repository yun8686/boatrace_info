'use strict';
module.exports = (sequelize, DataTypes) => {
  const racelist = sequelize.define('racelist', {
    race_id: DataTypes.INTEGER,
    race_num: DataTypes.INTEGER,
    limit_time: DataTypes.DATE
  }, {});
  racelist.associate = function(models) {
    // associations can be defined here
  };
  return racelist;
};